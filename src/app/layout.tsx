import type { Metadata } from "next";
import "@/styles/globals.css";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `${site.name} | Portfolio`,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
