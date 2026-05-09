"use client";

import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiJavascript,
    SiNodedotjs,
    SiMongodb,
    SiFigma,
    SiExpress,
    SiAudiobookshelf,
    SiMysql,
} from "react-icons/si";

import { BiLogoCss3, BiLogoCPlusPlus } from "react-icons/bi";

const topSkills = [
    { icon: <SiFigma />, x: "18%" },
    { icon: <SiMongodb />, x: "28%" },
    { icon: <BiLogoCPlusPlus />, x: "38%" },
    { icon: <SiNodedotjs />, x: "48%" },
    { icon: <SiJavascript />, x: "58%" },
    { icon: <SiTailwindcss />, x: "68%" },
];

const middleSkills = [
    { icon: <SiMysql />, x: "24%" },
    { icon: <SiNextdotjs />, x: "36%" },
    { icon: <SiExpress />, x: "50%" },
    { icon: <SiMongodb />, x: "62%" },
    { icon: <SiReact />, x: "74%" },
];

export default function SkillOrbit() {
    return (
        <section className="relative overflow-hidden py-15">
            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-600/20 blur-[140px]" />

            <div className="relative mx-auto flex max-w-6xl flex-col items-center">
                {/* TOP ICONS */}
                <div className="relative mb-28 h-[180px] w-full">
                    {topSkills.map((item, i) => (
                        <div key={i}>
                            {/* line */}
                            <div
                                className="absolute top-[70px] h-[180px] w-[1px] bg-gradient-to-b from-fuchsia-400/40 to-transparent"
                                style={{
                                    left: item.x,
                                    transform: "rotate(6deg)",
                                    transformOrigin: "top",
                                }}
                            />

                            {/* icon */}
                            <div
                                className="absolute top-0 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] backdrop-blur-xl"
                                style={{ left: item.x }}
                            >
                                {item.icon}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CENTER CORE */}
                <div className="relative flex items-center justify-center">
                    {/* orbit rings */}
                    <div className="absolute h-[280px] w-[700px] rounded-[100%] border border-fuchsia-400/20 " />

                    <div className="absolute h-[220px] w-[560px] rounded-[100%] border border-fuchsia-400/10" />

                    {/* side floating icons */}
                    <div className="absolute left-[-260px] top-1/2 flex -translate-y-1/2 gap-10 opacity-50">
                        <SiTailwindcss className="text-xl text-fuchsia-300" />
                        <BiLogoCss3 className="text-xl text-fuchsia-300" />
                        <SiNextdotjs className="text-xl text-fuchsia-300" />
                    </div>

                    <div className="absolute right-[-260px] top-1/2 flex -translate-y-1/2 gap-10 opacity-50">
                        <SiJavascript className="text-xl text-fuchsia-300" />
                        <SiReact className="text-xl text-fuchsia-300" />
                        <SiMysql className="text-xl text-fuchsia-300" />
                    </div>

                    {/* center glow */}
                    <div className="absolute h-[240px] w-[240px] rounded-full bg-fuchsia-500/30 blur-[80px]" />

                    {/* main orb */}
                    <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-gradient-to-b from-[#7d8bff] to-fuchsia-600 shadow-[0_0_80px_rgba(192,38,211,0.5)]">
                        <span className="text-7xl font-bold text-white">A</span>
                    </div>
                </div>

                {/* LOWER LINES */}
                <div className="relative mt-10 h-[200px] w-full">
                    {middleSkills.map((item, i) => (
                        <div key={i}>
                            <svg
                                className="absolute left-1/2 top-0"
                                width="400"
                                height="220"
                                viewBox="0 0 400 220"
                                fill="none"
                                style={{
                                    transform:
                                        i % 2 === 0
                                            ? "translateX(-100%)"
                                            : "translateX(0%) scaleX(-1)",
                                }}
                            >
                                <path
                                    d="M200 0 C 160 80, 120 150, 20 200"
                                    stroke="rgba(192,38,211,0.2)"
                                    strokeWidth="1.5"
                                    fill="none"
                                />
                            </svg>

                            <div
                                className={`absolute top-[170px] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white backdrop-blur-xl ${i % 2 === 0 ? "left-[10%]" : "right-[10%]"
                                    }`}
                            >
                                {item.icon}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}