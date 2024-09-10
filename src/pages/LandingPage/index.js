import React from "react";
import Banner from "../../components/banner/Banner";
import Contact from "../../components/contact/Contact";
import Features from "../../components/features/Features";
import FooterBottom from "../../components/footer/FooterBottom";
import Navbar from "../../components/navbar/Navbar";
import Projects from "../../components/projects/Projects";

const LandingPage = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4" id="home">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Contact />
        <FooterBottom />
      </div>
    </div>
  );
};

export default LandingPage;
