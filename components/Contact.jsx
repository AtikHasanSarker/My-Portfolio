"use client";
import { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const validateField = (name, value) => {
    const trimmedValue = value.trim();

    switch (name) {
      case "name":
        if (!trimmedValue) return "Name is required.";
        if (trimmedValue.length < 2) return "Name must be at least 2 characters.";
        return "";
      case "email":
        if (!trimmedValue) return "Email is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
          return "Please enter a valid email address.";
        }
        return "";
      case "message":
        if (!trimmedValue) return "Message is required.";
        if (trimmedValue.length < 10) {
          return "Message must be at least 10 characters long.";
        }
        return "";
      default:
        return "";
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({
      ...current,
      [name]: validateField(name, value),
    }));
    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const validateForm = () => {
    const nextErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    setErrors(nextErrors);
    return !nextErrors.name && !nextErrors.email && !nextErrors.message;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateForm();

    if (!isValid) {
      setStatus({ type: "error", message: "Please fix the highlighted fields." });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Message could not be sent.");
      }

      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
      setStatus({ type: "success", message: "Thanks. Your message was sent." });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 overflow-hidden scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Contact <span className="font-semibold">Me</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto">
            Let&apos;s work together to bring your ideas to life
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="theme-card group relative flex flex-col items-center text-center rounded-2xl backdrop-blur-md p-7 transition-all duration-400 hover:-translate-y-2 hover:scale-[1.02]"
                tabIndex={0}
                aria-label={card.ariaLabel}
              >
                {/* Icon */}
                <div className="mb-5 flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(167,139,250,0.2)]">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 tracking-tight">
                  {card.title}
                </h3>

                {/* Contact Info */}
                <p className="text-sm mb-7 break-all">{card.label}</p>

                {/* Button */}
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    card.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="theme-button mt-auto w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current"
                >
                  {card.buttonText}
                  <i className="fa-solid fa-arrow-right-long text-xs" />
                </a>
              </motion.div>
            ))}
          </div>
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="theme-card rounded-2xl p-6 md:p-8 lg:col-span-2"
          >
            <div className="flex flex-col gap-3">
              <label className="flex flex-col gap-2 text-sm font-medium">
                Name
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={80}
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby="name-error"
                  className={`theme-input rounded-xl px-4 py-3 outline-none transition-colors ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your name"
                />
                <span id="name-error" className="min-h-[1.25rem] text-sm text-red-500">
                  {errors.name || ""}
                </span>
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium">
                Email
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={254}
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby="email-error"
                  className={`theme-input rounded-xl px-4 py-3 outline-none transition-colors ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your email"
                />
                <span id="email-error" className="min-h-[1.25rem] text-sm text-red-500">
                  {errors.email || ""}
                </span>
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium">
                Message
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={5000}
                  rows={6}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby="message-error"
                  className={`theme-input resize-y rounded-xl px-4 py-3 outline-none transition-colors ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  placeholder="Tell me a little about your project..."
                />
                <span id="message-error" className="min-h-[1.25rem] text-sm text-red-500">
                  {errors.message || ""}
                </span>
              </label>
            </div>

            {status.message ? (
              <div
                className={`mt-5 text-sm ${
                  status.type === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                {status.message}
              </div>
            ) : null}

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isSending}
                className="theme-button inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
