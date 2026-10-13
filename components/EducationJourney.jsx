'use client'
import { RiGraduationCapFill } from "react-icons/ri";
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

const educationData = [
  {
    year: "2024 - Present",
    title: "Bachelor of Social Science (BSS)",
    subtitle:
      "Semester 4 | Session 2023–2024 | Noakhali Science and Technology University",
    description:
      "Currently pursuing a Bachelor of Social Science (BSS) in Information Science and Library Management at Noakhali Science and Technology University. Developing a strong foundation in information management, information retrieval, digital libraries, database management, and information systems. Alongside my academic studies, I am exploring data science, artificial intelligence, and modern web technologies to bridge the gap between information science and technology-driven solutions.",
  },
  {
    year: "2025 - 2026",
    title: "Complete Web Development",
    subtitle: "Programming Hero | Batch 13 | Instructor: Jhankar Mahbub",
    description:
      "Completed the Complete Web Development course by Jhankar Mahbub through Programming Hero, gaining practical experience in modern web development. Built a strong foundation in HTML, CSS, JavaScript, responsive web design, React.js, Next.js, Node.js, Express.js, and MongoDB. Worked on real-world projects involving REST API integration, authentication, database operations, and full-stack application development. Continuously improving problem-solving skills, writing clean and maintainable code, and learning industry-standard development practices to build scalable, user-friendly web applications.",
  },
  {
    year: "2020 - 2022",
    title: "Higher Secondary Certificate (HSC)",
    subtitle: "Science | Rangpur Government City College | Session 2020–2021",
    description:
      "Successfully completed the Higher Secondary Certificate (HSC) in Science from Rangpur Government City College. Developed a foundation in scientific reasoning, analytical thinking, logical problem-solving, and quantitative concepts. This academic background strengthened my ability to approach complex problems systematically and motivated my continued interest in technology, programming, and software development.",
  },
];

export default function EducationJourney() {
  return (
    <section id="education" className="relative py-10 md:py-16 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Education &{" "}
            <span className="font-semibold">
              Journey
            </span>
          </h2>

          <p className="mt-4 text-lg">
            My academic background and learning path
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-3 top-0 h-full w-[2px] bg-foreground"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className="relative pl-12 md:pl-16">
                {/* Dot */}
                <div className="absolute -left-1 top-0">
                  <div className="relative flex items-center justify-center">
                    <div className="w-fit p-2 rounded-full bg-foreground">
                      <div className="text-xl text-background">
                        <RiGraduationCapFill />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card */}
                <motion.div
                  variants={fadeUp}
                  key={index}
                  className="theme-card rounded-[28px] backdrop-blur-md p-5 md:p-10 transition-all duration-300"
                >
                  <span className="font-semibold text-sm tracking-wide">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-bold mt-4 leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-4">
                    {item.subtitle}
                  </p>

                  <p className="leading-8 mt-6">
                    {item.description}
                  </p>
                </motion.div>

              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}