import React from "react";
import Title from "../layouts/Title";
import { ExperienceData } from "../../data/data";
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiDownload, FiFolder } from "react-icons/fi";
import MyResumePdf from "../../assets/Niraj-Makwana.pdf";
import { dynamicResumeName } from "../../constants";

const Experience = () => {
  return (
    <section id="experience" className="w-full py-16 sm:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
        <Title
          title="Career History"
          des="Professional Experience"
          subtitle="5+ years of verified engineering experience building and maintaining production web and mobile software."
        />
        <div className="hidden sm:block pb-12">
          <a
            href={MyResumePdf}
            download={dynamicResumeName}
            className="secondaryBtn text-xs"
            aria-label="Download Full Resume"
          >
            <FiDownload className="w-4 h-4" />
            <span>Download Formal CV (PDF)</span>
          </a>
        </div>
      </div>

      {/* Experience Timeline Grid */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-sky-500/30 dark:border-sky-500/20 space-y-12">
        {ExperienceData.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline node icon */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-sky-500 text-sky-600 dark:text-sky-400 flex items-center justify-center shadow-sm">
              <FiBriefcase className="w-3.5 h-3.5" />
            </div>

            {/* Experience Card */}
            <div className="portfolioCard">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-700/50 mb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                      {exp.company}
                    </span>
                    {exp.clientContext && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 font-medium">
                        {exp.clientContext}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-titleFont text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60 font-semibold">
                    <FiCalendar className="w-3.5 h-3.5 text-sky-500" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <FiMapPin className="w-3.5 h-3.5 text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Associated Projects (if applicable) */}
              {exp.projects && (
                <div className="mb-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1.5">
                    <FiFolder className="w-3.5 h-3.5 text-sky-500" />
                    Key Products & Applications Delivered:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.projects.map((proj) => (
                      <span
                        key={proj}
                        className="text-xs px-2.5 py-0.5 rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Responsibilities & Achievements */}
              <ul className="space-y-2.5 mb-6">
                {exp.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <FiCheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Technology Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-700/40">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
