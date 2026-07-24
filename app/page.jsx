import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import EducationJourney from "@/components/EducationJourney";
import TechStack from "@/components/TechStack";
import SkillOrbit from "@/components/SkillOrbit";
import SmoothScroll from "@/components/SmoothScroll";
import IntroLoader from "@/components/IntroLoader";
import SkillsSection from "@/components/SkillSection";

export default function Home() {
  return (
    <main>
      <IntroLoader />
      <SmoothScroll />
      <Hero />
      <About />
      <TechStack />
      <SkillOrbit />
      <SkillsSection />
      <Projects />
      <EducationJourney />
      <Contact />
    </main>
  );
}
