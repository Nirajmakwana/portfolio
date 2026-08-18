import React from "react";
import Title from "../layouts/Title";
import { FiCode, FiLayers, FiZap, FiUsers } from "react-icons/fi";
import { YearsExperience } from "../../constants";

const About = () => {
  const highlights = [
    {
      icon: <FiCode className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
      title: "Frontend Architecture & Systems",
      description: "Designing modular, component-driven web architectures using React.js, Next.js, and TypeScript for long-term scalability.",
    },
    {
      icon: <FiZap className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
      title: "Performance & Optimization",
      description: "Conducting Lighthouse audits, analyzing bundle sizes, eliminating unnecessary re-renders, and optimizing page load speeds.",
    },
    {
      icon: <FiLayers className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
      title: "Cross-Platform & UI Systems",
      description: "Building iOS/Android mobile apps with React Native, and design systems using Tailwind CSS, MUI, and Ant Design with strict WCAG compliance.",
    },
    {
      icon: <FiUsers className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
      title: "Technical Leadership & Reviews",
      description: "Leading frontend initiatives, performing structured code reviews, mentoring developers, and aligning technical execution with stakeholder goals.",
    },
  ];

  return (
    <section id="about" className="w-full py-16 sm:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
      <Title
        title="Professional Profile"
        des="Engineering Scalable Applications"
        subtitle="5+ years of dedicated frontend development experience delivering robust, accessible, and high-performance digital products."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Narrative Summary */}
        <div className="lg:col-span-6 flex flex-col gap-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            I am a <strong className="font-semibold text-slate-900 dark:text-white">Senior Frontend Engineer</strong> with <strong className="font-semibold text-slate-900 dark:text-white">{YearsExperience} years of experience</strong> architecting, developing, and deploying production-grade web and mobile applications.
          </p>
          <p>
            My core technical expertise is anchored in the <strong className="font-semibold text-slate-900 dark:text-white">React ecosystem (React.js, React Native, Next.js, TypeScript)</strong>, advanced client-state architectures (<strong className="font-semibold text-slate-900 dark:text-white">Redux Toolkit, React Query</strong>), and modern design systems (<strong className="font-semibold text-slate-900 dark:text-white">Tailwind CSS, Material UI, Ant Design</strong>).
          </p>
          <p>
            Throughout my career across product companies and enterprise client environments, I have delivered logistics transshipment portals, AI-powered design platforms, telemedicine suites, and digital wallet systems. In addition to frontend specialization, I bring hands-on backend expertise in <strong className="font-semibold text-slate-900 dark:text-white">Node.js</strong> and <strong className="font-semibold text-slate-900 dark:text-white">Express.js</strong>, enabling smooth end-to-end API integration and full-lifecycle delivery.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-4 pt-4 mt-2 border-t border-slate-200 dark:border-slate-800">
            <div>
              <p className="text-2xl sm:text-3xl font-bold font-titleFont text-sky-600 dark:text-sky-400">{YearsExperience}</p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold font-titleFont text-sky-600 dark:text-sky-400">4</p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Engineering Roles</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold font-titleFont text-sky-600 dark:text-sky-400">10+</p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Production Projects</p>
            </div>
          </div>
        </div>

        {/* Right Column: Key Pillars */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <div key={index} className="portfolioCard flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/60 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-base font-bold font-titleFont text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
