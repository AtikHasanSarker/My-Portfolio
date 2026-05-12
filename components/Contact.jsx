"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
import { IoLogoWhatsapp } from "react-icons/io";

export default function Contact() {
  return (
    <section id="contact" className="mt-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12 md:mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Contact{" "}
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
        className="w-10/12 mx-auto text-center border border-[#8d8d8d3f] bg-[#242e4e5e] bg-blend-saturation rounded-2xl p-6"
      >
        <div>
          <p className="text-2xl">From Concept to Creation</p>
          <h3 className="text-3xl md:text-[42px] font-semibold">Let’s talk</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-14 justify-center">
          <div className="rounded-xl py-[50px] px-6 space-y-4 bg-[#11111166]">
            <div className="flex justify-center">
              <img src="/assets/Get-in-touch.svg" alt="Get in touch" />
            </div>
            <div>
              <h4 className="text-2xl font-semibold">Get in Touch</h4>
              <p className="text-sm">
                Email Me : <br /> atiksagor24@gmail.com
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="mailto:atiksagor24@gmail.com"
                target="_blank"
                className="p-2 pl-4 border hover:scale-105 transition-all duration-300 border-[#F1F1F1] rounded-full bg-[#d9d9d967] flex md:gap-4 items-center md:text-xl"
              >
                <span className="p-2">SEND EMAIL</span>
                <span className="rounded-full py-[13px] px-4 bg-[#F1F1F1] shadow-[0_0_20px_rgba(255,255,255,0.8)] text-[#595959]">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </a>
            </div>
          </div>

          <div className="rounded-xl py-[50px] px-6 space-y-4 bg-[#11111166]">
            <div className="flex justify-center">
              <img src="/assets/phone.svg" alt="Phone" />
            </div>
            <div>
              <h4 className="text-2xl font-semibold">Freelance</h4>
              <p className="text-sm">
                Have a project? <br />
                Contact Me Now : 01768626650
              </p>
            </div>
            <div className="flex justify-center">
              <a href="tel:01768626650" className="p-2 pl-4 border hover:scale-105 transition-all duration-300 border-[#F1F1F1] rounded-full bg-[#d9d9d967] flex md:gap-4 items-center md:text-xl">
                <span className="p-2">CONTACT </span>
                <span className="rounded-full py-[13px] px-4 bg-[#F1F1F1] shadow-[0_0_20px_rgba(255,255,255,0.8)] text-[#595959]">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </a>
            </div>
          </div>

          <div className="rounded-xl py-[50px] px-6 space-y-4 bg-[#11111166]">
            <div className="flex justify-center">
              <IoLogoWhatsapp className="text-5xl" />
            </div>
            <div>
              <h4 className="text-2xl font-semibold">Available</h4>
              <p className="text-sm">
                Let’s schedule A meeting! <br />
                Whatsapp : 01521791091
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://wa.me/8801521791091"
                target="_blank"
                className="p-2 pl-4 border hover:scale-105 transition-all duration-300 border-[#F1F1F1] rounded-full bg-[#d9d9d967] flex md:gap-4 items-center md:text-xl"
              >
                <span className="p-2">TEXT NOW</span>
                <span className="rounded-full py-[13px] px-4 bg-[#F1F1F1] shadow-[0_0_20px_rgba(255,255,255,0.8)] text-[#595959]">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
