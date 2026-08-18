import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";
import Experience from "../../components/experience/Experience";
import Projects from "../../components/projects/Projects";
import Features from "../../components/features/Features";
import Contact from "../../components/contact/Contact";
import FooterBottom from "../../components/footer/FooterBottom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-bodyColor-light dark:bg-bodyColor text-slate-700 dark:text-slate-300 transition-colors duration-200">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Banner />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Features />
        <Contact />
        <FooterBottom />
      </main>
    </div>
  );
};

export default LandingPage;
