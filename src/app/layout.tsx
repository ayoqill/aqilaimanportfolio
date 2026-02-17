import type { Metadata } from "next";
import "@/styles/globals.css";
import { GridFade } from "@/components/ui/GridBackground";
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
        <GridFade />
        <div className="relative min-h-screen">
          {/* {children} */}
        </div>
      </body>
    </html>
  );
}
