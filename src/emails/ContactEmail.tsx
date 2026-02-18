import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Hr,
} from "@react-email/components";

type Props = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export default function ContactEmail({ name, email, phone, message }: Props) {
  return (
    <Html>
      <Head />
      <Preview>New message from {name}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section>
            <Text style={styles.title}>New Portfolio Message</Text>
            <Text style={styles.meta}><strong>Name:</strong> {name}</Text>
            <Text style={styles.meta}><strong>Email:</strong> {email}</Text>
            <Text style={styles.meta}><strong>Phone:</strong> {phone || "-"}</Text>
            <Hr style={styles.hr} />
            <Text style={styles.label}>Message</Text>
            <Text style={styles.message}>{message}</Text>
            <Hr style={styles.hr} />
            <Text style={styles.footer}>Reply directly to this email to respond.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const styles: Record<string, React.CSSProperties> = {
  body: { backgroundColor: "#f6f7fb", padding: "24px", fontFamily: "Inter, Arial, sans-serif" },
  container: { backgroundColor: "#ffffff", borderRadius: 14, padding: "22px 22px", border: "1px solid #eaeaea" },
  title: { fontSize: 18, fontWeight: 700, margin: "0 0 12px 0", color: "#0f172a" },
  meta: { fontSize: 14, margin: "6px 0", color: "#0f172a" },
  hr: { borderColor: "#eaeaea", margin: "16px 0" },
  label: { fontSize: 13, fontWeight: 600, color: "#334155", margin: "0 0 8px 0" },
  message: { fontSize: 14, color: "#111827", lineHeight: "1.6", whiteSpace: "pre-wrap" },
  footer: { fontSize: 12, color: "#64748b", margin: "0" },
};