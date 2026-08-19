"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skills = [
  {
    name: "React",
    icon: "react",
  },
  {
    name: "Next.js",
    icon: "nextjs",
  },
  {
    name: "JavaScript",
    icon: "js",
  },
  {
    name: "TypeScript",
    icon: "ts",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
  },
  {
    name: "Node.js",
    icon: "nodejs",
  },
  {
    name: "Express.js",
    icon: "express",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
  },
  {
    name: "Prisma",
    icon: "prisma",
  },
  {
    name: "Git",
    icon: "git",
  },
  {
    name: "GitHub",
    icon: "github",
  },
  {
    name: "Figma",
    icon: "figma",
  },

  {
    name: "Postman",
    icon: "postman",
  },

  {
    name: "Vercel",
    icon: "vercel",
  },
];


export default function TechStack() {
    return (
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Tech <span className="font-semibold">Stack</span>
            </h2>

            <p className="mt-4 text-lg">Tools & technologies I use</p>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          >
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="theme-card p-5 rounded-xl flex flex-col items-center justify-center"
              >
                <img
                  src={`https://skillicons.dev/icons?i=${skill.icon}`}
                  alt={skill.name}
                  className="w-12 h-12 mb-4"
                />

                <h3>{skill.name}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    );
}