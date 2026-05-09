import {
    SiReact,
    SiNextdotjs,
    SiJavascript,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    SiExpress,
    SiGithub,
} from "react-icons/si";

const techStack = [
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
    {
        name: "Node.js",
        icon: SiNodedotjs,
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
    },
    {
        name: "Express.js",
        icon: SiExpress,
    },
    {
        name: "GitHub",
        icon: SiGithub,
    },
];

export default function TechStack() {
    return (
        <section className="py:10 md:py-16 text-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold">
                        Tech{" "}
                        <span className="bg-linear-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
                            Stack
                        </span>
                    </h2>

                    <p className="text-gray-400 mt-4 text-lg">
                        Tools & technologies I use
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {techStack.map((tech, index) => {
                        const Icon = tech.icon;

                        return (
                          <div
                            key={index}
                            className="group rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 flex flex-col items-center justify-center transition-all duration-300 hover:border-violet-500/30 hover:bg-white/10 hover:-translate-y-1 hover:scale-105"
                          >
                            {/* Icon */}
                            <div className="mb-6 relative">
                              <Icon className="text-violet-500 text-3xl transition-transform duration-300 group-hover:scale-110" />

                              {/* Glow */}
                              <div className="absolute inset-0 bg-violet-500/20 blur-2xl rounded-full"></div>
                            </div>

                            {/* Name */}
                            <h3 className="font-semibold text-gray-200">
                              {tech.name}
                            </h3>
                          </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}