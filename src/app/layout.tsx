import type { Metadata } from "next";
import "@/styles/globals.css";
import { GridBackground } from "@/components/ui/GridBackground";
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
      <body className="antialiased">
        <div className="fixed inset-0 -z-10">
          <GridBackground />
        </div>
        {/* Subtle fade overlay for readability */}
        <div className="pointer-events-none fixed inset-0 -z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/0" />
        </div>
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
