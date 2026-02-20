"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detect touch device
    const hasTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    setIsDesktop(!hasTouch);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const loop = () => {
      posX += (mouseX - posX) * 0.12;
      posY += (mouseY - posY) * 0.12;

      cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, [isDesktop]);

  // Don't render on mobile/tablet
  if (!isDesktop) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed left-0 top-0 z-[9999] pointer-events-none transition-transform duration-150 ease-out"
    >
      <svg width="22" height="22" viewBox="0 0 24 24">
        <path
          d="M12 2.7c1.2 0 2.2 1 2.2 2.2v2.2c0 .9.7 1.6 1.6 1.6h2.2c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2h-2.2c-.9 0-1.6.7-1.6 1.6v2.2c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2v-2.2c0-.9-.7-1.6-1.6-1.6H4.9c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2h2.2c.9 0 1.6-.7 1.6-1.6V4.9c0-1.2 1-2.2 2.2-2.2Z"
          fill="#39FF6A"
        />
      </svg>
    </div>
  );
}