"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
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
      : projects.filter((p) => p.category.includes(activeCategory));

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
      className="max-w-6xl mx-auto px-4 relative py-16 overflow-hidden scroll-mt-16"
    >
      <div className="relative">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Personal{" "}
            <span className="font-semibold">
              Projects
            </span>
          </h2>

          <p className="text-lg mt-5 mx-auto">
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
          className="flex justify-center mb-8"
        >
          <div className="flex gap-3 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`cursor-pointer whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shrink-0 ${
                  activeCategory === cat
                    ? "theme-button"
                    : "theme-icon-button"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          key={`${activeCategory}-${visibleCount}`}
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
              className="theme-card group relative flex flex-col rounded-2xl backdrop-blur-md overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-r from-violet-500/5 to-pink-500/5 pointer-events-none" />

              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  width={600}
                  height={500}
                  src={project.image}
                  alt={project.name}
                  className="w-full h-65 object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                {/* Badge Overlay */}
                <span className="absolute top-3 left-3 text-white px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-xs font-medium">
                  {project.badge}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>

                <p className="text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex items-center gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="theme-button inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
                  >
                    View Details
                  </Link>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live preview of ${project.name}`}
                    className="theme-icon-button flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                  </a>

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repo of ${project.name}`}
                      className="theme-icon-button flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300"
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
                className="theme-button px-8 py-3 group flex items-center gap-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                See More <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            ) : (
              <button
                onClick={() => setVisibleCount(PROJECTS_PER_PAGE)}
                className="theme-icon-button px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                See Less
              </button>
            )}
          </motion.div>
        )}

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
