"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { ChevronDown, DownloadIcon } from "lucide-react";
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
    <section id="hero" className="max-w-6xl mx-auto px-5 my-16">
      <motion.div variants={fadeUp} initial="hidden" animate="visible">
        <div className="flex flex-col lg:flex-row-reverse gap-15 items-center">
          <Image
            src="/assets/atik.jpg"
            className="rounded-full shadow-2xl flex-1 max-w-[250px]"
            alt="Atik Hasan"
            width={250}
            height={250}
            priority
          />
          <div className="flex-1 flex flex-col">
            <div className="mb-6">
              <AvailabilityBadge
                status="available"
                text="Open for opportunities"
              />
            </div>
            <h1 className="font-bold text-[40px] md:text-[52px]">
              Hi, I&apos;m <br className="sm:hidden" />
              <span className="font-semibold">Atik Hasan</span>
            </h1>
            <h3 className="py-4 text-[28px] md:text-4xl font-semibold">
              Full Stack <br className="sm:hidden" /> Web Developer
            </h3>
            <p>
              <span className="text-xl" ref={typingRef}></span>
            </p>
            <div className="flex mt-4">
              <LocationBadge location="Noakhali, Bangladesh" />
            </div>

            
            <div className="flex gap-4 pt-10">
              <a className="bg-foreground text-background px-4 py-3 rounded-full flex items-center cursor-pointer hover:scale-105 transition-all duration-300">
                Contact Me
              </a>
              <a
                href="/Atik_Hasan_Resume.pdf"
                download="Atik_Hasan_Resume.pdf"
                className="bg-background text-foreground border px-4 py-3 rounded-full  cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <DownloadIcon />
                  Resume
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
