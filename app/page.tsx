"use client";

import { navItems } from "@/data";
import ErrorBoundary from "@/components/ErrorBoundary";
import MobileNav from "@/components/MobileNav";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Leadership from "@/components/Leadership";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ModernHero from "@/components/ModernHero";
import ModernProjects from "@/components/ModernProjects";
import SystemsArchitecture from "@/components/SystemsArchitecture";
import NeuralBackground from "@/components/ui/NeuralBackground";
import AboutMe from "@/components/AboutMe";
import GitHubActivity from "@/components/GitHubActivity";

const Home = () => {
  return (
    <ErrorBoundary>
      <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 transition-colors duration-300">
        <NeuralBackground />
        <MobileNav />
        <div className="max-w-7xl w-full relative z-10">
          <FloatingNav navItems={navItems} />
          <ModernHero />
          <AboutMe />
          <div id="about">
            <Grid />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <GitHubActivity />
          <ModernProjects />
          <SystemsArchitecture />
          <Education />
          <Certificates />
          <Leadership />
          <Footer />
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default Home;
