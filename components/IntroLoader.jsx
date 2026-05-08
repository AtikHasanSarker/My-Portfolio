"use client";

import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-[#050816] transition-all duration-1000 ${
        hide
          ? "pointer-events-none opacity-0 scale-110"
          : "opacity-100 scale-100"
      }`}
    >
      <div className="text-center">
        <h1 className="bg-linear-to-r from-violet-500 to-pink-500 bg-clip-text text-6xl font-black text-transparent">
          {"<Atik Hasan Sarker />"}
        </h1>

        <div className="mx-auto mt-6 h-[4px] w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full animate-loader rounded-full bg-linear-to-r from-violet-500 to-pink-500" />
        </div>

        <p className="mt-8 text-sm tracking-[8px] text-white/70 uppercase">
          Turning Ideas Into Interfaces
        </p>
      </div>
    </div>
  );
}
