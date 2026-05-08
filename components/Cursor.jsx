"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    const speed = 0.08; // lower = slower smoother

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-999"
    >
      {/* Ring */}
      <div className="absolute -left-4 -top-4 h-8 w-8 rounded-full border-2 border-violet-800 backdrop-sm shadow-[0_0_15px_rgba(139,92,246,0.5)]" />

      {/* Dot */}
      <div className="absolute -left-0.5 -top-0.5 h-1 w-1 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.9)]" />
    </div>
  );
}
