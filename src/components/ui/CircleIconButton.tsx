"use client";

import React from "react";

type Props = {
  label: string;
  href: string;
  icon: React.ReactNode;
  className?: string;
};

export default function CircleIconButton({
  label,
  href,
  icon,
  className = "",
}: Props) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={[
        "group relative grid h-12 w-12 place-items-center rounded-full",
        "border border-white/25 bg-white/10 backdrop-blur-md",
        "shadow-[0_10px_30px_rgba(0,0,0,0.12)]",
        "transition-all duration-200 ease-out",
        "hover:-translate-y-0.5 hover:bg-white/15",
        "active:translate-y-0",
        className,
      ].join(" ")}
    >
      {/* glow */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full opacity-70 blur-xl transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle, rgba(57,255,106,0.65) 0%, rgba(57,255,106,0.15) 35%, transparent 65%)",
        }}
      />
      {/* inner ring */}
      <span className="pointer-events-none absolute inset-[2px] rounded-full border border-white/20" />

      {/* icon */}
      <span className="relative text-slate-900/80 group-hover:text-slate-900">
        {icon}
      </span>
    </a>
  );
}