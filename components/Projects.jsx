"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";
import { projects, categories } from "@/data/projects";

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

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const PROJECTS_PER_PAGE = 6;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;
  const hasLess = visibleCount > PROJECTS_PER_PAGE;

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(PROJECTS_PER_PAGE);
  };

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 relative py-20 overflow-hidden text-white"
    >
      {/* Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-125 h-125 bg-violet-700/20 blur-[140px] rounded-full" />

      <div className="relative z-10 w-11/12 mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Personal{" "}
            <span className="bg-linear-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-300 text-lg mt-5 max-w-2xl mx-auto">
            Here are some of my featured projects built while exploring modern
            web technologies and UI design.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center mb-12"
        >
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide px-2 -mx-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shrink-0 ${
                  activeCategory === cat
                    ? "bg-linear-to-r from-violet-400 to-pink-500 text-white shadow-[0_0_20px_rgba(167,139,250,0.3)]"
                    : "border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-7"
        >
          {visibleProjects.map((project) => (
            <motion.div
              key={project.slug}
              variants={cardItem}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(167,139,250,0.15)] transition-all duration-300"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-r from-violet-500/5 to-pink-500/5 pointer-events-none" />

              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  width={600}
                  height={400}
                  src={project.image}
                  alt={project.name}
                  className="w-full h-52 object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                {/* Badge Overlay */}
                <span className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-xs font-medium text-gray-200">
                  {project.badge}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex items-center gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-linear-to-r from-violet-400 to-pink-500 text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(167,139,250,0.3)]"
                  >
                    View Details
                  </Link>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live preview of ${project.name}`}
                    className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                  </a>

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repo of ${project.name}`}
                      className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
                    >
                      <SiGithub size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See More / See Less */}
        {(hasMore || hasLess) && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center mt-12"
          >
            {hasMore ? (
              <button
                onClick={() => setVisibleCount(filteredProjects.length)}
                className="px-8 py-3 rounded-full bg-linear-to-r from-violet-400 to-pink-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(167,139,250,0.3)]"
              >
                See More
              </button>
            ) : (
              <button
                onClick={() => setVisibleCount(PROJECTS_PER_PAGE)}
                className="px-8 py-3 rounded-full border border-white/20 bg-white/5 text-gray-300 font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:text-white"
              >
                See Less
              </button>
            )}
          </motion.div>
        )}

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
