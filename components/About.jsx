"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 mb-10 md:mb-20 scroll-mt-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          About{" "}
          <span className="bg-linear-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8 text-center p-5 md:px-15 md:py-12 bg-[#352f651a] rounded-3xl"
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
          <div className="p-10 bg-violet-950 rounded-xl">
            <h3 className="text-[#F1F1F1] font-semibold text-4xl">+1</h3>
            <p className="text-[#f1f1f199]">Year Experiences</p>
          </div>
          <div className="p-10 bg-violet-950 rounded-xl">
            <h3 className="text-[#F1F1F1] font-semibold text-4xl">+20</h3>
            <p className="text-[#f1f1f199]">Project Completed</p>
          </div>
          <div className="p-10 bg-violet-950 rounded-xl">
            <h3 className="text-[#F1F1F1] font-semibold text-4xl">+3</h3>
            <p className="text-[#f1f1f199]">Certificate Received</p>
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <a
            href="/Atik_Hasan_Resume.pdf"
            download="Atik_Hasan_Resume.pdf"
            className="p-2 rounded-full bg-linear-to-r from-violet-400 to-pink-500 shadow-[0_0_25px_rgba(167,139,250,0.3)] flex items-center cursor-pointer hover:scale-105 hover:shadow-[0_0_40px_rgba(167,139,250,0.5)] transition-all duration-300"
          >
            <span className="p-3 text-white font-semibold">
              DOWNLOAD RESUME
            </span>
            <span className="rounded-full py-[13px] px-4 bg-white/20 backdrop-blur-sm text-white">
              <i className="fa-solid fa-download"></i>
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
