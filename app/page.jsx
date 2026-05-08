import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import EducationJourney from "@/components/EducationJourney";
import TechStack from "@/components/TechStack";
import SkillOrbit from "@/components/SkillOrbit";
import SmoothScroll from "@/components/SmoothScroll";
import IntroLoader from "@/components/IntroLoader";
import SkillsSection from "@/components/SkillSection";

export default function Home() {
  return (
    <>
      <BackgroundAnimation />
      <div className="relative z-20">
        <Navbar />
        <main>
          <IntroLoader/>
          <SmoothScroll />
          <Hero />
          <About />
          <TechStack />
          <SkillOrbit />
          <SkillsSection/>
          <Projects />
          <EducationJourney />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
