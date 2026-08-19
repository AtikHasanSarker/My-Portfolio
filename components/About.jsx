"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-4 my-10 md:mt-30 md:mb-20 scroll-mt-24"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          About <span className="font-semibold">Me</span>
        </h2>
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="theme-card space-y-8 text-center p-5 md:px-15 md:py-12 rounded-3xl"
      >
        <p className="text-justify">
          I am a passionate Full Stack Web Developer specializing in the MERN
          stack (MongoDB, Express.js, React, Node.js). My programming journey
          started with curiosity about how websites work, and over time I
          developed strong skills in building complete web applications — from
          designing responsive frontends with React and Next.js to building
          robust backends with Node.js, Express, and MongoDB.
          <br />
          <br />I love creating clean UI designs, smooth animations, and
          user-friendly interfaces on the frontend, while also architecting
          scalable APIs and database structures on the backend. I enjoy solving
          problems end-to-end — turning ideas into fully functional,
          production-ready web applications. Outside of programming, I enjoy
          exploring new design trends, listening to music, and learning new
          technologies to sharpen my skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-between">
          <div className="theme-card p-10 rounded-xl">
            <h3 className="font-semibold text-4xl">+1</h3>
            <p>Year Experiences</p>
          </div>
          <div className="theme-card p-10 rounded-xl">
            <h3 className="font-semibold text-4xl">+20</h3>
            <p>Project Completed</p>
          </div>
          <div className="theme-card p-10 rounded-xl">
            <h3 className="font-semibold text-4xl">+3</h3>
            <p>Certificate Received</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
