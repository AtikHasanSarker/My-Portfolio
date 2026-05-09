import { RiGraduationCapFill } from "react-icons/ri";

const educationData = [
    {
        year: "2020 - 2022",
        title: "HSC",
        subtitle: "Completed (Session 2021)",
        description:
            "Completed HSC from Rangpur Govt. City College.",
    },
    {
        year: "2024 - Running",
        title:
            "Bachelor of Social Science (BSS)",
        subtitle: "Semester 4 (Session 2023–24)",
        description:
            "Currently pursuing BSS in Information Science and Library Management, from Noakhali Science and Technology University, focusing information management, digital libraries, data science, and modern web technologies.",
    },
    {
        year: "2025 - Running",
        title: "Complete Web Development",
        subtitle: "Jhankar Mahbub's Programming Hero Batch 13",
        description:
            "Currently pursuing Complete Web Development from Jhankar Mahbub's Programming Hero. Focusing on problem solving, modern web technologies. Learning full-stack development including frontend, backend development.Javascript, React, Node.js, Express.js, MongoDB,etc.",
    },
];

export default function EducationJourney() {
    return (
      <section id="education" className="relative py-10 md:py-16 text-white">
        <div className="max-w-6xl mx-auto px-3">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Education &{" "}
              <span className="bg-linear-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              My academic background and learning path
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-3 top-0 h-full w-[2px] bg-linear-to-b from-violet-500/60 to-transparent"></div>

            <div className="space-y-12">
              {educationData.map((item, index) => (
                <div key={index} className="relative pl-12 md:pl-16">
                  {/* Dot */}
                  <div className="absolute left-0 top-5">
                    <div className="relative flex items-center justify-center">
                      <div className="w-fit p-2 rounded-full bg-pink-500">
                        <div className="text-xl">
                          <RiGraduationCapFill />
                        </div>
                      </div>

                      {/* Glow */}
                      <div className="absolute w-5 h-5 rounded-full bg-violet-500 blur-md opacity-70"></div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-md p-5 md:p-10 transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.06]">
                    <span className="text-pink-500 font-semibold text-sm tracking-wide">
                      {item.year}
                    </span>

                    <h3 className="text-3xl font-bold mt-4 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 mt-4">
                      {item.subtitle}
                    </p>

                    <p className="text-gray-400 leading-8 mt-6">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}