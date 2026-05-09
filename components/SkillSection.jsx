"use client";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { Code2, Database, Globe, Layers3, Server, Cloud } from "lucide-react";

export default function SkillsSection() {
  const expertise = [
    {
      title: "Frontend",
      icon: <Code2 size={22} />,
      description:
        "Experienced frontend developer skilled in building modern and interactive interfaces using React, Next.js and Tailwind CSS.",
      tech: ["HTML", "CSS", "JavaScript", "Tailwind", "React", "Next.js"],
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Backend",
      icon: <Server size={22} />,
      description:
        "Skilled in backend architecture, REST APIs, authentication systems and scalable database integration.",
      tech: ["Node.js", "Express", "MongoDB","MySQL", "Firebase"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Deployment",
      icon: <Cloud size={22} />,
      description:
        "Experienced with deployment workflows, Vercel hosting, GitHub CI/CD and performance optimization.",
      tech: ["Vercel","Surge", "Git", "Docker", "Netlify"],
      color: "from-pink-500 to-rose-500",
    },
  ];

  const skills = [
    { name: "JavaScript", percent: 90, icon: SiJavascript },
    { name: "React.js", percent: 88, icon: SiReact },
    { name: "Next.js", percent: 85, icon: SiNextdotjs },
    { name: "Tailwind CSS", percent: 92, icon: SiTailwindcss },
    { name: "Node.js", percent: 80, icon: SiNodedotjs },
    { name: "MongoDB", percent: 75, icon: SiMongodb },
    { name: "Express", percent: 75, icon: SiExpress },
    { name: "MySQL", percent: 70, icon: SiMysql },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto text-white pb:10 md:pb-20 px-3 md:px-10">
      <div className="max-w-6xl mx-auto px-3">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            My{" "}
            <span className="bg-linear-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable and beautiful
            digital experiences.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-20">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40"
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

              <p className="text-gray-300 leading-relaxed text-sm mb-6">
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
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="bg-white/5 border border-white/10 rounded-[30px] p-6 md:p-10 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-10">
            <Layers3 className="text-violet-400" />
            <h3 className="text-3xl font-semibold">Skills</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {skills.map((skill, index) => (
              <div key={index}>
                {/* Top */}
                <div className="flex justify-between items-center mb-3">
                  <div className="flex gap-4 items-center">
                    <span className="text-pink-500 text-3xl">
                      {<skill.icon/>}
                    </span>
                    <span className="font-medium">{skill.name}</span>
                  </div>

                  <span className="text-sm text-violet-300">
                    {skill.percent}%
                  </span>
                </div>

                {/* Progress */}
                <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 transition-all duration-1000"
                    style={{
                      width: `${skill.percent}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
