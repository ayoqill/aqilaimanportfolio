import { Resend } from "resend";
import ContactEmail from "@/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

// --- Basic in-memory rate limiting (good enough for portfolio) ---
const WINDOW_MS = 60_000; // 1 min
const MAX_REQ = 3;        // 3/min per IP
const hits = new Map<string, { count: number; start: number }>();

function getIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

function rateLimit(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.start > WINDOW_MS) {
    hits.set(ip, { count: 1, start: now });
    return true;
  }
  if (entry.count >= MAX_REQ) return false;
  entry.count += 1;
  hits.set(ip, entry);
  return true;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function hasTooManyLinks(text: string) {
  const matches = text.match(/https?:\/\/\S+/gi) ?? [];
  return matches.length > 2;
}

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  company?: string; // honeypot (should stay empty)
  ts?: number;      // timestamp at form render
};

export const POST = async (req: Request) => {
  try {
    const ip = getIp(req);

    // 1) Rate limit
    if (!rateLimit(ip)) {
      return new Response(JSON.stringify({ error: "Too many requests. Try again later." }), { status: 429 });
    }

    const body = (await req.json()) as Body;

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const message = (body.message || "").trim();

    // 2) Honeypot: bots fill hidden fields
    if (body.company && body.company.trim().length > 0) {
      // return 200 to not reveal spam rules
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    // 3) Time-trap: if submitted too fast, likely bot
    const ts = typeof body.ts === "number" ? body.ts : 0;
    if (!ts || Date.now() - ts < 1200) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    // 4) Validate + limits
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), { status: 400 });
    }
    if (!isValidEmail(email)) {
      return new Response(JSON.stringify({ error: "Invalid email." }), { status: 400 });
    }
    if (name.length > 80 || email.length > 120 || phone.length > 40 || message.length > 2000) {
      return new Response(JSON.stringify({ error: "Input too long." }), { status: 400 });
    }
    if (hasTooManyLinks(message)) {
      return new Response(JSON.stringify({ error: "Too many links in message." }), { status: 400 });
    }

    // 5) Send using React Email template
    const to = process.env.TO_EMAIL;
    if (!to) {
      return new Response(JSON.stringify({ error: "Server not configured." }), { status: 500 });
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // later: change to your verified domain
      to,
      subject: `New message from ${name}`,
      replyTo: email,
      react: ContactEmail({ name, email, phone, message }),
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\n\n${message}`,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    console.error("CONTACT_API_ERROR:", err);
    return new Response(
      JSON.stringify({
        error:
          err?.message ||
          err?.response?.data?.message ||
          "Failed to send.",
      }),
      { status: 500 }
    );
  }
// ...existing code...
}
