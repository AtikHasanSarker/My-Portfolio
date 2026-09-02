"use client";
import { Code2, Server, Cloud } from "lucide-react";
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


export default function SkillsSection() {
  const expertise = [
    {
      title: "Frontend",
      icon: <Code2 size={22} />,
      description:
        "Experienced frontend developer skilled in building modern and interactive interfaces using React, Next.js and Tailwind CSS.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Hero UI",
        "Shadcn UI",
        "React",
        "Next.js",
      ],
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Backend",
      icon: <Server size={22} />,
      description:
        "Skilled in backend architecture, REST APIs, authentication systems and scalable database integration.",
      tech: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "PorstgreSQL",
        "Prisma",
        "Postman",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Deployment",
      icon: <Cloud size={22} />,
      description:
        "Experienced with deployment workflows, Vercel hosting, GitHub CI/CD and performance optimization.",
      tech: ["Git", "Github", "Vercel", "Surge", "Railway", "Netlify"],
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto py-10 md:py-16 px-4 scroll-mt-16">
      <div className="">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My{" "}
            <span className="font-semibold">
              Expertise
            </span>
          </h2>

          <p className="mt-4 mx-auto">
            Technologies and tools I use to build modern, scalable and beautiful
            digital experiences.
          </p>
        </motion.div>

        {/* Expertise Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
        >
          {expertise.map((item, index) => (
            <motion.div
              variants={fadeUp}
              key={index}
              className="theme-card group relative overflow-hidden rounded-3xl backdrop-blur-xl p-7 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-linear-to-br ${item.color}`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-linear-to-br ${item.color} mb-5`}
              >
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

              <p className="leading-relaxed text-sm mb-6">
                {item.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/10 text-sm border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
