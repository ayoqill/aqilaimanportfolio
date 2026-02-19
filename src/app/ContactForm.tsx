"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "",      // honeypot
    ts: Date.now(),    // time trap
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to send message");
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "", company: "", ts: Date.now() });
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot (keep hidden). Real users won't fill it */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        value={form.company}
        onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
      />

      <input
        type="text"
        placeholder="Name"
        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-4 text-lg text-white shadow-sm focus:outline-none focus:ring-4 focus:ring-zinc-600 transition-all placeholder-zinc-400"
        value={form.name}
        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        required
      />

      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Email Address"
          className="flex-1 rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-4 text-lg text-white shadow-sm focus:outline-none focus:ring-4 focus:ring-zinc-600 transition-all placeholder-zinc-400"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="flex-1 rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-4 text-lg text-white shadow-sm focus:outline-none focus:ring-4 focus:ring-zinc-600 transition-all placeholder-zinc-400"
          value={form.phone}
          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
        />
      </div>

      <textarea
        placeholder="Tell me what’s on your mind?"
        className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-4 text-lg text-white min-h-[140px] shadow-sm focus:outline-none focus:ring-4 focus:ring-zinc-600 transition-all placeholder-zinc-400"
        value={form.message}
        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
        required
      />

      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-full bg-white px-10 py-4 text-lg font-bold text-black shadow-xl hover:bg-zinc-200 transition-all duration-200 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>

      {success && <div className="text-green-600 font-medium">Message sent! I’ll get back to you soon.</div>}
      {error && <div className="text-red-600 font-medium">{error}</div>}
    </form>
  );
}
