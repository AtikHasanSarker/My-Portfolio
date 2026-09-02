"use client";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const frontend = [
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
    name: "Bootstrap",
    icon: "bootstrap",
  },
  {
    name: "Redux",
    icon: "redux",
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
];

const backend = [
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
    name: "Postman",
    icon: "postman",
  },
  {
    name: "Vercel",
    icon: "vercel",
  },
  {
    name: "VS Code",
    icon: "vscode",
  }
];


export default function TechStack() {
  const SkillCard = ({ skill }) => (
    <div
      className="theme-card p-6 rounded-xl flex flex-col items-center justify-center  hover:bg-purple-600 transition-all duration-300 w-40 h-32 mx-4"
    >
      <img
        src={`https://skillicons.dev/icons?i=${skill.icon}`}
        alt={skill.name}
        className="w-14 h-14 mb-3"
      />
      <h3 className="text-sm font-medium text-center">{skill.name}</h3>
    </div>
  );

  return (
    <section className="py-16">
      <div className="w=full mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Tech <span className="font-semibold">Stack</span>
          </h2>
          <p className="mt-4 text-lg">Tools & technologies I use</p>
        </motion.div>

        {/* Frontend Skills Marquee */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 overflow-hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`
            .marquee-container::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <Marquee speed={30} gradient={false} className="marquee-container">
            {frontend.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </Marquee>
        </motion.div>

        {/* Backend Skills Marquee */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-6 overflow-hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <Marquee
            speed={30}
            gradient={false}
            direction="right"
            className="marquee-container"
          >
            {backend.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
}