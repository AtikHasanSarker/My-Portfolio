"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { DownloadIcon } from "lucide-react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import AvailabilityBadge from "./AvailabilityBadge";
import LocationBadge from "./LocationBadge";
import { FaXTwitter } from "react-icons/fa6";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  const typingRef = useRef(null);

  const socialLinks=[
    {
        
        href: "https://www.linkedin.com/in/atik-hasan-sarker/",
        icon: <FaLinkedin className="w-5 h-5" />,
        target: true,
      },
      {
        
        href: "https://github.com/AtikHasanSarker",
        icon: <FaGithub className="w-5 h-5" />,
        target: true,
      },
      {
        
        href: "https://wa.me/8801521791091",
        icon: <FaWhatsapp className="w-5 h-5" />,
        target: true,
      },
      {
        
        href: "https://www.facebook.com/atiksagor24.50.80",
        icon: <FaFacebook className="w-5 h-5" />,
        target: true,
      },
  ]

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
        <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
          <div className="flex flex-col md:flex-row gap-15 items-center">
            <div className="flex-1 rounded-full shadow-2xl w-full">
              <Image
                src="/assets/atik.jpg"
                className="rounded-full shadow-2xl w-full"
                alt="Atik Hasan"
                width={300}
                height={300}
                priority
              />
            </div>
            <div className="flex md:flex-col  gap-4 justify-end">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target={link.target ? "_blank" : undefined}
                  rel={link.target ? "noopener noreferrer" : undefined}
                  className="theme-icon-button border p-2 rounded-full hover:shadow-xl transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
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
              <a
                href="#contact"
                className="theme-button px-4 py-3 rounded-full flex items-center cursor-pointer hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
              <a
                href="/Atik_Hasan_Sarker_Full_Stack_Developer_Resume.pdf"
                download="Atik_Hasan_Sarker_Full_Stack_Developer_Resume.pdf"
                className="theme-icon-button border px-4 py-3 rounded-full  cursor-pointer hover:scale-105 transition-all duration-300"
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
