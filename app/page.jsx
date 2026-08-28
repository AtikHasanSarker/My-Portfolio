import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import GitHubContributions from "@/components/GitHubContributions";
import Contact from "@/components/Contact";
import EducationJourney from "@/components/EducationJourney";
import TechStack from "@/components/TechStack";
import SkillsSection from "@/components/SkillSection";
import Achievement from "@/components/Achievement";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <SkillsSection />
      <Projects />
      <GitHubContributions />
      <EducationJourney />
      <Achievement />
      <Contact />
    </main>
  );
}
