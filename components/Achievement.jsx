"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const certificateVariant = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.15,
      ease: "easeOut",
    },
  },
};

export default function Achievement() {
  return (
    <section
      id="achievement"
      className="relative py-16 overflow-hidden scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10"
        >
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            A Defining Milestone
          </h2>

          {/* Subtitle */}
          <p className="text-lg mx-auto">
            A milestone that reflects dedication, continuous learning, and
            growth as a web developer.
          </p>
        </motion.div>

        {/* Certificate Showcase */}
        <motion.div
          variants={certificateVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-3xl">
            {/* Outer Frame */}
            <div className="relative rounded-3xl p-2 bg-linear-to-br from-purple-500/50 to-blue-500/50 hover:scale-102 transition-all duration-300 hover:shadow-xl">
              {/* Certificate Container */}
              <a
                href="https://drive.google.com/file/d/1QYeKu8hXTXchPGxQU_WrxGbsdu6mlgNt/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={1000}
                  height={500}
                  src="/certificate.png"
                  alt="Complete Web Development Course certificate"
                  className="rounded-3xl"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
