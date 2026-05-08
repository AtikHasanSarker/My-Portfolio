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

const frontendSkills = [
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
];

const backendSkills = [
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "MySQL",
    icon: SiMysql,
  },
];

export default function SkillsStack() {
  return (
    <section className="pt-2 pb-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            Skills &{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>

          <p className="text-gray-400 text-lg mt-4">
            Technologies I use for building web applications
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative">
          {/* Frontend */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-md p-12 relative overflow-hidden">
            <h3 className="text-center text-gray-400 tracking-[4px] text-2xl font-semibold uppercase mb-16">
              Frontend
            </h3>

            <div className="grid grid-cols-2 gap-14">
              {frontendSkills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center group"
                  >
                    <div className="relative mb-5">
                      <Icon className="text-violet-500 text-6xl transition-transform duration-300 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-violet-500/20 blur-2xl rounded-full"></div>
                    </div>

                    <h4 className="text-2xl font-semibold text-gray-200">
                      {skill.name}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Backend */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-md p-12 relative overflow-hidden">

            <h3 className="text-center text-gray-400 tracking-[4px] text-2xl font-semibold uppercase mb-16">
              Backend (Learning)
            </h3>

            <div className="grid grid-cols-2 gap-14">
              {backendSkills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center group"
                  >
                    <div className="relative mb-5">
                      <Icon className="text-pink-500 text-6xl transition-transform duration-300 group-hover:scale-110" />

                      <div className="absolute inset-0 bg-pink-500/20 blur-2xl rounded-full"></div>
                    </div>

                    <h4 className="text-2xl font-semibold text-gray-200">
                      {skill.name}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}