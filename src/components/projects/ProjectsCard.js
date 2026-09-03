import React from "react";
import { FaGlobe } from "react-icons/fa";
import { FiArrowRight, FiCheck, FiBriefcase, FiCalendar, FiStar } from "react-icons/fi";
import { openExternalLink } from "../../utils/helpers";

const ProjectsCard = ({ project, onOpenDetails }) => {
  const {
    title,
    subtitle,
    technologies,
    link,
    tagline,
    features,
    company,
    category,
    featured,
    period,
  } = project;

  const featuresList = (features || []).slice(0, 3);

  return (
    <article className="portfolioCard flex flex-col justify-between group">
      <div>
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800/60">
            {category}
          </span>

          {featured && (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50">
              <FiStar className="w-3 h-3" />
              Featured
            </span>
          )}
        </div>

        {/* Project Title & Subtitle */}
        <h3 className="text-lg sm:text-xl font-bold font-titleFont text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors mb-0.5 break-words">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
            {subtitle}
          </p>
        )}

        {/* Company & Period */}
        {company && (
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3.5">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-600 dark:text-sky-400">
              <FiBriefcase className="w-3 h-3" />
              {company}
            </span>
            {period && (
              <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500">
                <FiCalendar className="w-3 h-3" />
                {period}
              </span>
            )}
          </div>
        )}

        {/* Tagline */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
          {tagline}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {Array.isArray(technologies) &&
            technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800"
              >
                {tech}
              </span>
            ))}
        </div>

        {/* Key Features Preview */}
        {featuresList.length > 0 && (
          <ul className="space-y-1.5 mb-6 text-xs text-slate-600 dark:text-slate-300">
            {featuresList.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FiCheck className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Card Action Row */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors focus-visible:ring-2 focus-visible:ring-sky-500 rounded py-1"
          type="button"
        >
          <span>Architecture & Details</span>
          <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {link && (
          <button
            onClick={() => openExternalLink(link)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-sky-500"
            title="Visit Live Site"
            aria-label={`Visit live site for ${title}`}
            type="button"
          >
            <FaGlobe className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Live</span>
          </button>
        )}
      </div>
    </article>
  );
};

export default ProjectsCard;
