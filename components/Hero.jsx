"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import AvailabilityBadge from "./AvailabilityBadge";
import LocationBadge from "./LocationBadge";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: [
        "~ React Developer ~",
        "~ Next.js Developer ~",
        "~ Express.js Developer ~",
        "~ UI Enthusiast ~",
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
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
          <Image
            src="/assets/atik.jpg"
            className="rounded-full shadow-2xl flex-1 max-w-[250px]"
            alt="Atik Hasan"
            width={250}
            height={250}
          />
          <div className="flex-1">
            <div className="flex justify-center mb-8">
              <AvailabilityBadge
                status="available"
                text="Open for opportunities"
              />
            </div>
            <h1 className="font-bold text-5xl md:text-6xl">
              Hi, I&apos;m{" "}
              <span className="bg-linear-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
                Atik Hasan
              </span>
            </h1>
            <h3 className="py-6 text-3xl md:text-[42px] font-semibold">
              Full Stack Web Developer
            </h3>

            <div className="flex mb-4">
              <LocationBadge location="Noakhali, Bangladesh" />
            </div>

            <p>
              <span className="text-xl" ref={typingRef}></span>
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-10 pl:15 md:pl-40">
              <a
                href="https://github.com/AtikHasanSarker"
                target="_blank"
                aria-label="GitHub profile"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-white/15 bg-white/5 text-gray-400 hover:bg-linear-to-r hover:from-violet-400 hover:to-pink-500 hover:text-white hover:border-transparent hover:scale-110 hover:shadow-[0_0_20px_rgba(167,139,250,0.3)] transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/atik-hasan-sarker"
                target="_blank"
                aria-label="LinkedIn profile"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-white/15 bg-white/5 text-gray-400 hover:bg-linear-to-r hover:from-violet-400 hover:to-pink-500 hover:text-white hover:border-transparent hover:scale-110 hover:shadow-[0_0_20px_rgba(167,139,250,0.3)] transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://www.facebook.com/atiksagor24.50.80"
                target="_blank"
                aria-label="Facebook profile"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-white/15 bg-white/5 text-gray-400 hover:bg-linear-to-r hover:from-violet-400 hover:to-pink-500 hover:text-white hover:border-transparent hover:scale-110 hover:shadow-[0_0_20px_rgba(167,139,250,0.3)] transition-all duration-300"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex justify-center my-[85px]"
      >
        <a
          href="#contact"
          aria-label="Contact me"
          className="p-2 rounded-full bg-linear-to-r from-violet-400 to-pink-500 shadow-[0_0_25px_rgba(167,139,250,0.4)] flex md:gap-4 items-center md:text-xl group relative cursor-pointer hover:scale-105 hover:shadow-[0_0_40px_rgba(167,139,250,0.6)] transition-all duration-300"
        >
          <span className="p-4 relative right-1 transition-all duration-300 group-hover:left-[28%]">
            CONTACT ME
          </span>
          <span className="rounded-full py-[13px] px-4 bg-white/20 backdrop-blur-sm text-white relative right-1 transition-all duration-500 group-hover:right-[75%]">
            <i className="fa-solid fa-mobile-screen-button"></i>
          </span>
        </a>
      </motion.div>
      <motion.a
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        href="#about"
        aria-label="Scroll down"
        className="flex flex-col items-center gap-2 mb-[80px] group"
      >
        <span className="text-xs text-gray-400 group-hover:text-purple-300 transition-colors duration-300">
          Scroll Down
        </span>
        <ChevronDown className="w-6 h-6 text-purple-300 animate-[bounce_2s_ease-in-out_infinite]" />
      </motion.a>
    </section>
  );
}
