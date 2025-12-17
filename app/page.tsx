"use client";

import { navItems } from "@/data";
import ErrorBoundary from "@/components/ErrorBoundary";
import PageLoader from "@/components/PageLoader";

import MobileNav from "@/components/MobileNav";

import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Leadership from "@/components/Leadership";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <ErrorBoundary>
      <PageLoader>
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 transition-colors duration-300">


          <MobileNav />
          <div className="max-w-7xl w-full relative z-10">
            <FloatingNav navItems={navItems} />
            <Hero />
            <ScrollAnimatedSection delay={0.2}>
              <div id="about">
                <Grid />
              </div>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection delay={0.3}>
              <div id="skills">
                <Skills />
              </div>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection delay={0.4}>
              <RecentProjects />
            </ScrollAnimatedSection>
            <ScrollAnimatedSection delay={0.5}>
              <div id="experience">
                <Experience />
              </div>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection delay={0.6}>
              <Education />
            </ScrollAnimatedSection>
            <ScrollAnimatedSection delay={0.7}>
              <Certificates />
            </ScrollAnimatedSection>
            <ScrollAnimatedSection delay={0.8}>
              <Leadership />
            </ScrollAnimatedSection>
            <Footer />
          </div>
        </main>
      </PageLoader>
    </ErrorBoundary>
  );
};

export default Home;
