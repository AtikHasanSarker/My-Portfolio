import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import EducationJourney from "@/components/EducationJourney";
import TechStack from "@/components/TechStack";
import SkillOrbit from "@/components/SkillOrbit";

export default function Home() {
  return (
    <>
      <BackgroundAnimation />
      <div className="relative z-20">
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechStack />
          <SkillOrbit />
          <Skills />
          <Projects />
          <EducationJourney />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
