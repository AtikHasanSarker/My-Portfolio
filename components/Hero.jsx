"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: [
        "~ Frontend Developer ~",
        "~ React Developer ~",
        "~ Next.js Developer ~",
        "~ Backend Developer ~",
        "~ Express.js Developer ~",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="w-10/12 lg:w-9/12 mx-auto mt-12 md:mt-20">
      <div>
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
          <Image
            src="/assets/atik.jpg"
            className="rounded-full shadow-2xl flex-1 max-w-[250px]"
            alt="Atik Hasan"
            width={250}
            height={250}
          />
          <div className="flex-1">
            <h1 className="font-bold text-5xl md:text-6xl">
              Hi, I&apos;m{" "}

              <span className="bg-linear-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
                Atik Hasan
              </span>

            </h1>
            <h3 className="py-6 text-3xl md:text-[42px] font-semibold">
              Frontend Web Developer
            </h3>
            <p>
              <span className="text-xl" ref={typingRef}></span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-[85px]">
        <a
          href="#contact"
          className="p-2 border border-[#F1F1F1] rounded-full bg-[#d9d9d967] flex md:gap-4 items-center md:text-xl group relative cursor-pointer hover:scale-110 duration-300"
        >
          <span className="p-4 relative right-1 transition-all duration-3000 group-hover:left-[28%]">
            CONTACT ME
          </span>
          <span className="rounded-full py-[13px] px-4 bg-[#F1F1F1] shadow-[0_0_20px_rgba(255,255,255,0.8)] text-[#595959] relative right-1 transition-all duration-500 group-hover:right-[75%]">
            <i className="fa-solid fa-mobile-screen-button"></i>
          </span>
        </a>
      </div>
      <a href="#about" className="flex justify-center mb-[80px]">
        <div className="text-[#B7B4E4] bg-[#d9d9d91a] hover:bg-gray-700 rounded-full w-[64px] h-[96px] flex justify-center items-center">
          <i className="fa-solid fa-angles-down"></i>
        </div>
      </a>
    </section>
  );
}
