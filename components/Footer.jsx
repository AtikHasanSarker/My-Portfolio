"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import {
  MdEmail,
  MdPhone,
} from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { useTheme } from "next-themes";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const connectLinks = [
  {
    label: "atiksagor24@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=atiksagor24@gmail.com&su=Portfolio%20Contact",
    icon: <MdEmail className="w-4 h-4" />,
    target: true,
  },
  {
    label: "+880 1768-626650",
    href: "tel:+8801768626650",
    icon: <MdPhone className="w-4 h-4" />,
    target: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/atik-hasan-sarker/",
    icon: <FaLinkedin className="w-4 h-4" />,
    target: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/AtikHasanSarker",
    icon: <FaGithub className="w-4 h-4" />,
    target: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/8801521791091",
    icon: <FaWhatsapp className="w-4 h-4" />,
    target: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/atiksagor24.50.80",
    icon: <FaFacebook className="w-4 h-4" />,
    target: true,
  },
];


export default function Footer() {
  const { theme, resolvedTheme } = useTheme();

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative mt-10">
      <div className="h-px" />

      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 relative z-10">
          {/* Main 4-column grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-10"
          >
            {/* Column 1 — Brand */}
            <motion.div variants={staggerItem} className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <Image
                  width={200}
                  height={200}
                  src={
                    theme === "dark"
                      ? "/assets/logo-white.png"
                      : "/assets/logo-black.png"
                  }
                  alt="Logo"
                  className="w-20 h-10"
                />
              </Link>
              <h3 className="text-xl font-bold mb-3">
                {"<Atik Hasan Sarker />"}
              </h3>
              <p className="text-sm leading-relaxed mb-4">
                Full Stack Developer passionate about building scalable, modern
                web applications with exceptional user experiences.
              </p>
              <p className="text-xs font-medium">
                Available for Freelance Opportunities
              </p>
            </motion.div>

            {/* Column 2 — Quick Links */}
            <motion.div variants={staggerItem}>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="group relative text-sm transition-colors duration-300 cursor-pointer"
                    >
                      {link.label}
                      <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3 — Let's Connect */}
            <motion.div variants={staggerItem}>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-5">
                Let&apos;s Connect
              </h4>
              <ul className="space-y-3">
                {connectLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.target ? "_blank" : undefined}
                      rel={link.target ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-2.5 text-sm transition-all duration-300 hover:translate-x-1"
                    >
                      <span className="transition-colors duration-300">
                        {link.icon}
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4 — CTA */}
            <motion.div variants={staggerItem}>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-5">
                Interested in working together?
              </h4>
              <p className="text-sm leading-relaxed mb-6">
                Let&apos;s build something amazing together.
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="theme-button group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current"
                >
                  Hire Me
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <a
                  href="/Atik_Hasan_Resume.pdf"
                  download="Atik_Hasan_Resume.pdf"
                  className="theme-icon-button group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-white/[0.06] mb-8" />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <p>
              &copy; {new Date().getFullYear()} Atik Hasan Sarker. All Rights
              Reserved.
            </p>
            <p>
              Designed &amp; Developed with <span>&hearts;</span> using Next.js,
              React, Tailwind CSS &amp; Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
