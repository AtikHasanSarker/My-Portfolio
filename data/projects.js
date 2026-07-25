export const projects = [
  {
    slug: "lifedrop",
    name: "LifeDrop",
    image: "/assets/Projects/lifedrop.png",
    link: "https://lifedrop-client-cyan.vercel.app/",
    github: "https://github.com/AtikHasanSarker/lifedrop-client",
    category: "Full Stack",
    badge: "Full Stack Project",
    description:
      "A modern blood donation platform that connects voluntary blood donors with patients in need, helping save lives through technology and community.",
    fullDescription:
      "LifeDrop is a full-stack blood donation management platform designed to bridge the gap between blood donors and patients in urgent need. Users can register as donors, search for compatible donors nearby, respond to emergency blood requests, and track donation history. The platform features a donor verification system, real-time donation request tracking, and a dashboard for managing requests, all built to make emergency blood matching faster and more reliable.",
    tags: ["Next.js", "React.js", "Express.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Emergency blood request system with real-time matching",
      "Donor search and verification system",
      "User authentication (donor/admin roles)",
      "Dashboard for tracking requests and donation history",
      "Responsive, accessible UI across all devices",
    ],
    keyContributions: [
      "Built the full-stack donor-patient matching system with Express.js and MongoDB",
      "Implemented role-based authentication for donors and admins",
      "Designed a real-time emergency blood request and response flow",
      "Developed a donor verification workflow to ensure data reliability",
      "Created a dashboard for tracking donation requests and history",
      "Built a responsive, accessible UI for use across all devices",
    ],
    challengesFaced: [
      "Ensuring accurate donor-patient matching based on blood group and location",
      "Handling real-time updates for urgent emergency requests",
      "Designing a verification system to prevent fake donor profiles",
    ],
    futurePlans: [
      "Add SMS/email notifications for emergency blood requests",
      "Integrate a live map view to show nearby donors",
      "Implement a donor eligibility and cooldown tracking system",
    ],
  },
  {
    slug: "mediqueue",
    name: "MediQueue",
    image: "/assets/Projects/mediqueue.png",
    link: "https://mediqueue-ruby-seven.vercel.app/",
    github: "https://github.com/AtikHasanSarker/mediqueue-client",
    category: "Full Stack",
    badge: "Full Stack Project",
    description:
      "A tutor-booking and mentorship platform connecting students with expert tutors across career, business, tech, and personal development.",
    fullDescription:
      "MediQueue is a full-stack learning and mentorship marketplace where students can browse verified tutors by subject, check availability, and book one-on-one sessions. The platform includes tutor profiles with ratings, subject specialization, available time slots, and per-session pricing. It also features a mentorship section connecting learners with industry professionals for career guidance, along with a global tutor network showcasing mentors across multiple countries.",
    tags: ["Next.js", "React.js", "Express.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Tutor browsing with subject, availability, and pricing filters",
      "Session booking system with date/time selection",
      "Mentor and mentorship program section",
      "User authentication (login/register)",
      "Global tutor network by country",
    ],
    keyContributions: [
      "Developed the tutor browsing and filtering system (subject, availability, pricing)",
      "Built the session booking flow with date/time slot selection",
      "Designed tutor profile pages with ratings and specialization details",
      "Implemented authentication for students and tutors",
      "Structured the global tutor network with country-based filtering",
    ],
    challengesFaced: [
      "Managing tutor availability and preventing double-booking of time slots",
      "Structuring the database to support ratings, specializations, and pricing together",
      "Keeping the booking flow simple while supporting multiple filters",
    ],
    futurePlans: [
      "Add a payment gateway for paid session bookings",
      "Implement in-app messaging between students and tutors",
      "Add video call integration for remote sessions",
    ],
  },
  {
    slug: "skillsphere",
    name: "SkillSphere",
    image: "/assets/Projects/skillsphere.png",
    link: "https://skillsphere-rho.vercel.app/",
    github: "https://github.com/AtikHasanSarker/skillsphere",
    category: "Full Stack",
    badge: "Full Stack Project",
    description:
      "An online learning platform offering expert-led courses, instructor profiles, and skill-building content across development, marketing, and more.",
    fullDescription:
      "SkillSphere is a full-stack e-learning platform where users can browse and enroll in courses across web development, JavaScript, React, digital marketing, cybersecurity, and cloud computing. The platform highlights top-rated instructors with their experience, specialization, and student ratings, along with newly released courses. It includes a course detail system, instructor profiles, and a clean, category-based browsing experience for learners at every skill level.",
    tags: ["Next.js", "React.js", "Express.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Course catalog with ratings, difficulty level, and categories",
      "Instructor profiles with experience and specialization",
      "New course releases section",
      "User authentication (login/register)",
      "Responsive course browsing and detail pages",
    ],
    keyContributions: [
      "Built the course catalog system with category and difficulty filters",
      "Designed instructor profile pages showing experience and ratings",
      "Developed course detail pages with structured content layout",
      "Implemented user authentication for enrollment access",
      "Created a responsive, category-based browsing experience",
    ],
    challengesFaced: [
      "Structuring course data to support multiple categories and difficulty levels",
      "Keeping instructor and course data in sync across profile pages",
      "Ensuring smooth performance while browsing large course catalogs",
    ],
    futurePlans: [
      "Add course progress tracking and completion certificates",
      "Implement a review and rating system for enrolled students",
      "Add quizzes and assignments within course modules",
    ],
  },
  {
    slug: "evenza",
    name: "Evenza",
    image: "/assets/Projects/evenza.png",
    link: "https://evenza-client.vercel.app/",
    github: "#",
    category: "Full Stack",
    badge: "Full Stack Project",
    description:
      "An all-in-one event discovery and management platform for exploring, publishing, and managing events like conferences, workshops, and festivals.",
    fullDescription:
      "Evenza is a full-stack event management platform that allows users to discover events by category (Technology, Music, Business, Sports, Art, Education), view detailed event pages with date, location, and pricing, and publish their own events. The platform includes category-based browsing, a featured events section, platform statistics, and a review/testimonial system, all wrapped in a clean, modern interface for both event organizers and attendees.",
    tags: ["Next.js", "React.js", "Express.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Event discovery with category-based filtering",
      "Event creation and publishing for organizers",
      "Featured events and platform statistics section",
      "User authentication (login/register)",
      "Testimonials and FAQ sections",
    ],
    keyContributions: [
      "Built the event discovery system with category-based filtering",
      "Developed the event creation and publishing flow for organizers",
      "Designed the featured events and platform statistics sections",
      "Implemented user authentication for organizers and attendees",
      "Built the testimonials and FAQ sections for user trust",
    ],
    challengesFaced: [
      "Structuring event data to support multiple categories and locations",
      "Keeping featured events and statistics updated dynamically",
      "Designing a publishing flow that's simple for non-technical organizers",
    ],
    futurePlans: [
      "Add online ticket booking and payment integration",
      "Implement event reminders and calendar sync",
      "Add organizer analytics for event performance tracking",
    ],
  },
  {
    slug: "buildwise-ai",
    name: "BuildWise AI",
    image: "/assets/Projects/buildwise.png",
    link: "https://buildwise-ai-client.vercel.app/",
    github: "https://github.com/AtikHasanSarker/buildwise-ai-client",
    category: "Full Stack",
    badge: "Full Stack Project",
    description:
      "An AI-powered PC build marketplace that helps users find compatible components, optimize their budget, and build the perfect PC setup.",
    fullDescription:
      "BuildWise AI is an AI-integrated e-commerce platform for PC building. Users describe their budget and use-case, and the AI generates a fully compatible component list — CPU, GPU, RAM, storage, and more. The platform includes a compatibility checker to prevent incompatible part combinations, an AI chat assistant for build-related questions, and a product marketplace with smart recommendations based on usage patterns and market trends.",
    tags: [
      "Next.js",
      "React.js",
      "Express.js",
      "MongoDB",
      "AI Integration",
      "Tailwind CSS",
    ],
    features: [
      "AI-powered PC build generator based on budget and purpose",
      "Real-time component compatibility checker",
      "AI chat assistant for build recommendations",
      "Product marketplace with smart, personalized suggestions",
      "User authentication and saved builds",
    ],
    keyContributions: [
      "Integrated AI to generate compatible PC builds from budget and use-case input",
      "Built a real-time compatibility checker to prevent mismatched components",
      "Developed an AI chat assistant for answering build-related queries",
      "Designed the product marketplace with personalized recommendations",
      "Implemented user authentication with saved build history",
    ],
    challengesFaced: [
      "Designing prompts that reliably return valid, compatible component combinations",
      "Building a compatibility engine that scales across many component types",
      "Balancing AI-generated suggestions with real marketplace inventory",
    ],
    futurePlans: [
      "Add price tracking and alerts for component price drops",
      "Allow users to share and compare builds with the community",
      "Improve AI recommendations using real purchase and usage data",
    ],
  },
  {
    slug: "english-janala",
    name: "English Janala",
    image: "/assets/Projects/English-Janala.png",
    link: "https://atikhasansarker.github.io/English-Janala/",
    github: "https://github.com/AtikHasanSarker/English-Janala",
    category: "Frontend",
    badge: "Practice Project",
    description:
      "Interactive English learning platform with vocabulary, lessons and responsive UI design.",
    fullDescription:
      "English Janala is an interactive English learning platform designed to help users improve their vocabulary, grammar, and comprehension skills. The platform features structured lessons, vocabulary exercises, and a clean responsive interface that works across all devices.",
    tags: ["HTML", "CSS", "JavaScript"],
    features: [
      "Interactive vocabulary lessons",
      "Responsive layout for all devices",
      "Clean and modern UI design",
      "Organized lesson structure",
      "Smooth scroll navigation",
    ],
  },
  {
    slug: "pixgen",
    name: "Pixgen",
    image: "/assets/Projects/pixgen.png",
    link: "https://pixgen-lake.vercel.app/",
    github: "https://github.com/AtikHasanSarker/pixgen",
    category: "React",
    badge: "Full Stack Project",
    description:
      "HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.",
    fullDescription:
      "Pixgen is an innovative app platform crafted by HERO.IO, designed to make everyday life simpler, smarter, and more exciting. The goal is to turn ideas into digital experiences that truly make an impact, featuring modern UI patterns and seamless interactions.",
    tags: ["HTML", "Tailwind", "JavaScript"],
    features: [
      "Innovative app experience",
      "Modern UI/UX patterns",
      "Tailwind CSS styling",
      "Seamless user interactions",
      "Deployed on Vercel",
    ],
  },
];

export const categories = [
  "All",
  "Full Stack",
  "Frontend",
  "React",
  "Next.js",
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category) {
  if (category === "All") return projects;
  return projects.filter((p) => p.category === category);
}
