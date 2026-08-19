"use client";

import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [shouldShow, setShouldShow] = useState(null);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("portfolio-intro-seen");

    if (hasSeenIntro) {
      return;
    }

    let hideTimer;
    const showTimer = setTimeout(() => {
      localStorage.setItem("portfolio-intro-seen", "true");
      setShouldShow(true);
      hideTimer = setTimeout(() => {
        setHide(true);
      }, 3000);
    }, 0);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!shouldShow) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-[#050816] transition-all duration-1000 ${
        hide
          ? "pointer-events-none opacity-0 scale-110"
          : "opacity-100 scale-100"
      }`}
    >
      <div className="text-center">
        <h1 className="text-6xl font-black">
          {"<Atik Hasan Sarker />"}
        </h1>

        <div className="mx-auto mt-6 h-[4px] w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full animate- rounded-full bg-white" />
        </div>

        <p className="mt-8 text-sm tracking-[8px] uppercase">
          Turning Ideas Into Interfaces
        </p>
      </div>
    </div>
  );
}
