import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { dynamicResumeName, MyName, YearsExperience } from "../../constants";
import MyResumePdf from "/";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Senior Full Stack Developer.",
      "React & Next.js Specialist.",
      "React Native Mobile Engineer.",
      "Frontend Architect & Team Lead.",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-3/5 flex flex-col gap-8 justify-center">
      {/* Intro Badges */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="sectionTitlePill !mb-0">
          Senior Full Stack Developer
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          {YearsExperience} Years Production Experience
        </span>
      </div>

      {/* Main Headline */}
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-titleFont text-slate-900 dark:text-white tracking-tight leading-tight">
          Hi, I'm <span className="text-sky-600 dark:text-sky-400">{MyName}</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-titleFont text-slate-700 dark:text-slate-200 min-h-[48px] sm:min-h-[56px] flex items-center">
          <span>{text}</span>
          <Cursor cursorBlinking={false} cursorStyle="|" cursorColor="#0284c7" />
        </h2>
      </div>

      {/* Recruiter-Friendly Experience-Driven Summary */}
      <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
        Senior Full Stack Developer with 5+ years of experience building scalable, production-ready web and mobile applications. Deeply specialized in <strong className="font-semibold text-slate-900 dark:text-slate-200">React.js</strong>, <strong className="font-semibold text-slate-900 dark:text-slate-200">React Native</strong>, <strong className="font-semibold text-slate-900 dark:text-slate-200">TypeScript</strong>, and <strong className="font-semibold text-slate-900 dark:text-slate-200">Next.js</strong>, with hands-on backend expertise in <strong className="font-semibold text-slate-900 dark:text-slate-200">Node.js</strong> and <strong className="font-semibold text-slate-900 dark:text-slate-200">Express.js</strong>. I architect resilient, accessible, and high-performance applications from design system foundation to cloud deployment.
      </p>

      {/* Action Buttons / CTAs */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="primaryBtn group"
        >
          <span>View Featured Projects</span>
          <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>

        <a
          href="/Niraj-Makwana.pdf"
          download={dynamicResumeName}
          className="secondaryBtn group"
          aria-label="Download Niraj Makwana Resume"
        >
          <FiDownload className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          <span>Resume</span>
        </a>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="secondaryBtn group hidden sm:inline-flex"
        >
          <FiMail className="w-4 h-4" />
          <span>Contact Me</span>
        </Link>
      </div>

      {/* Social Media & Contact Links */}
      <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
        <Media />
      </div>
    </div>
  );
};

export default LeftBanner;
