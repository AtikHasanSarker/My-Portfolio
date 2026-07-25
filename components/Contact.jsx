"use client";
import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";
import { Mail, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const cards = [
  {
    icon: <Mail className="w-10 h-10" strokeWidth={1.5} />,
    title: "Email Me",
    label: "atiksagor24@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=atiksagor24@gmail.com&su=Portfolio%20Contact&body=Hi%20Atik%2C",
    ariaLabel: "Send email to atiksagor24@gmail.com",
    buttonText: "Send Email",
  },
  {
    icon: <Phone className="w-10 h-10" strokeWidth={1.5} />,
    title: "Call Me",
    label: "+880 1768-626650",
    href: "tel:+8801768626650",
    ariaLabel: "Call +880 1768-626650",
    buttonText: "Call Me",
  },
  {
    icon: <IoLogoWhatsapp className="w-10 h-10" />,
    title: "WhatsApp Me",
    label: "+880 1521-791091",
    href: "https://wa.me/8801521791091",
    ariaLabel: "Message on WhatsApp +880 1521-791091",
    buttonText: "WhatsApp Me",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 overflow-hidden scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Contact{" "}
            <span className="bg-linear-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Let&apos;s work together to bring your ideas to life
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group relative flex flex-col items-center text-center rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md p-8 pt-10 transition-all duration-400 hover:-translate-y-2 hover:scale-[1.02] hover:border-violet-400/30 hover:shadow-[0_8px_40px_rgba(167,139,250,0.12),0_0_0_1px_rgba(167,139,250,0.05)]"
              tabIndex={0}
              aria-label={card.ariaLabel}
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-violet-400/10 to-pink-500/10 border border-white/[0.06] text-violet-400 transition-all duration-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(167,139,250,0.2)]">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                {card.title}
              </h3>

              {/* Contact Info */}
              <p className="text-sm text-gray-300 mb-7 break-all">
                {card.label}
              </p>

              {/* Button */}
              <a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-auto w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-linear-to-r from-violet-400 to-pink-500 text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(167,139,250,0.25)] hover:shadow-[0_0_30px_rgba(167,139,250,0.45)] hover:brightness-110 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a14]"
              >
                {card.buttonText}
                <i className="fa-solid fa-arrow-right-long text-xs" />
              </a>

              {/* Hover glow overlay */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-linear-to-br from-violet-500/5 via-transparent to-pink-500/5 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
