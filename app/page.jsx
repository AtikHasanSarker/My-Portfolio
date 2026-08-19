import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import GitHubContributions from "@/components/GitHubContributions";
import Contact from "@/components/Contact";
import EducationJourney from "@/components/EducationJourney";
import TechStack from "@/components/TechStack";
import IntroLoader from "@/components/IntroLoader";
import SkillsSection from "@/components/SkillSection";

export default function Home() {
  return (
    <main>
      <IntroLoader />
      <Hero />
      <About />
      <TechStack />
      <SkillsSection />
      <Projects />
      <GitHubContributions />
      <EducationJourney />
      <Contact />
    </main>
  );
}
