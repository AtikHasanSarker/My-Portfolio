"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { SiGithub } from "react-icons/si";
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
      staggerChildren: 0.2,
    },
  },
};


export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const initialProjects = [
    {
      name: "English Janala",
      image: "/assets/Projects/English-Janala.png",
      link: "https://atikhasansarker.github.io/English-Janala/",
      github: "https://github.com/AtikHasanSarker/English-Janala",
      description:
        "Interactive English learning platform with vocabulary, lessons and responsive UI design.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Techwave",
      image: "/assets/Projects/Techwave.png",
      link: "https://atikhasansarker.github.io/Techwave/",
      github: "#",
      description:
        "Technology focused landing page with modern linears and interactive sections.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Ai Model Hub",
      image: "/assets/Projects/Ai-model-hub.png",
      link: "https://ai-model-hub-atik.netlify.app/",
      github: "#",
      description:
        "Experience the full spectrum of frontier intelligence — all the most advanced AI models, unified under a single, powerful subscription.",
      tags: ["React", "API", "Tailwind"],
    },
    {
      name: "Pixgen",
      image: "/assets/Projects/pixgen.png",
      link: "https://pixgen-lake.vercel.app/",
      github: "https://github.com/AtikHasanSarker/pixgen",
      description:
        "HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.",
      tags: ["HTML", "Tailwind", "JavaScript"],
    },
    
  ];

  const hiddenProjects = [
    {
      name: "Hero Apps",
      image: "/assets/Projects/hero-apps.png",
      link: "https://hero-apps-ecru.vercel.app",
      github: "https://github.com/AtikHasanSarker/Hero-Apps",
      description:
        "HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.",
      tags: ["HTML", "Tailwind", "JavaScript"],
    },
    {
      name: "Fitness",
      image: "/assets/Projects/Fitness.png",
      link: "https://atikhasansarker.github.io/Fitness/",
      github: "#",
      description:
        "Modern fitness landing page with clean sections and responsive layouts.",
      tags: ["HTML", "CSS", "UI Design"],
    },
    {
      name: "SkillSphere",
      image: "/assets/Projects/Skillsphere.png",
      link: "https://skillsphere-rho.vercel.app/",
      github: "#",
      description:
        "A modern online learning platform where users can explore courses, watch lessons, and enroll in skill-based programs like Web Development, Design, Marketing, and more.",
      tags: ["Next JS", "API", "MongoDB"],
    },
    {
      name: "Portfolio 4",
      image: "/assets/Projects/Portfolio4.png",
      link: "https://atikhasansarker.github.io/Portfolio-Designs/Portfolio4/",
      github: "#",
      description:
        "Creative portfolio design focused on smooth layouts and elegant visuals.",
      tags: ["Portfolio", "Tailwind", "Responsive"],
    },

    {
      name: "Legal Solutions",
      image: "/assets/Projects/Legal-Solutions.png",
      link: "https://atikhasansarker.github.io/Legal-Solutions/",
      github: "#",
      description:
        "Professional legal service website with responsive business focused UI.",
      tags: ["Business", "Responsive", "UI"],
    },
    {
      name: "Influencer Gear",
      image: "/assets/Projects/influencer-Gear.png",
      link: "https://atikhasansarker.github.io/Influencer-Gear/",
      github: "#",
      description:
        "E-commerce inspired influencer gear showcase website with modern design.",
      tags: ["E-commerce", "CSS", "Responsive"],
    },
    {
      name: "PAYOO-MFS",
      image: "/assets/Projects/payoo.png",
      link: "https://atikhasansarker.github.io/PAYOO-MFS",
      github: "#",
      description:
        "PAYOO is a smart Mobile Financial Services (MFS) interface that provides a seamless digital banking experience.",
      tags: ["E-commerce", "CSS", "Responsive"],
    },
    {
      name: "Github Issue Tracker",
      image: "/assets/Projects/Github-Issue-Tracker.png",
      link: "https://atikhasansarker.github.io/B13-Assignment05/",
      github: "#",
      description:
        "GitHub issue management interface with filtering and issue tracking functionalities.",
      tags: ["React", "API", "Tailwind"],
    },
  ];

  const allProjects = showAll
    ? [...initialProjects, ...hiddenProjects]
    : initialProjects;

  return (
    <section
      id="project"
      className="relative py-20 overflow-hidden text-white"
    >
      {/* Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-700/20 blur-[140px] rounded-full" />

      <div className="relative z-10 w-11/12 mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Personal{" "}
            <span className="bg-linear-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto">
            Here are some of my featured projects built while exploring modern
            web technologies and UI design.
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {allProjects.map((project, index) => (
            <motion.div
              variants={fadeUp}
              key={index}
              className="group relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 md:p-10 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-r from-violet-500/10 to-pink-500/10" />

              {/* Image */}
              <div
                className={`relative ${index % 2 !== 0 ? "lg:order-2" : ""
                  }`}
              >
                <div className="relative overflow-hidden rounded-[28px] border border-white/10">
                  <Image
                    width={600}
                    height={400}
                    src={project.image}
                    alt={project.name}
                    className="w-full h-[320px] object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                </div>

                {/* Blur */}
                <div className="absolute -bottom-10 left-10 w-40 h-40 bg-violet-500/20 blur-3xl rounded-full" />
              </div>

              {/* Content */}
              <div
                className={`relative z-10 ${index % 2 !== 0 ? "lg:order-1" : ""
                  }`}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-pink-400" />
                  Featured Project
                </div>

                <h3 className="text-3xl font-bold mb-5">
                  {project.name}
                </h3>

                <p className="text-gray-400 text-lg leading-8 mb-8">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-linear-to-r from-violet-500 to-pink-500 text-white font-semibold transition duration-300 hover:scale-105"
                  >
                    <SiGithub size={20} />
                    Github
                  </a>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300 font-medium"
                  >
                    <ExternalLink size={20} />
                    Live Preview
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            {showAll ? "See Less" : "See All Projects"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}