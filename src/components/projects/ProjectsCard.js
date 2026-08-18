import React from "react";
import { FaGlobe, FaExternalLinkAlt } from "react-icons/fa";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { openExternalLink } from "../../utils/helpers";

const ProjectsCard = ({ project, onOpenDetails }) => {
  const { name, TechName, link, worklike, WorklikeLink, tagline, overview, des, keyFeatures, companyAssociated } = project;
  const featuresList = (keyFeatures || des || []).slice(0, 3);

  return (
    <article className="portfolioCard flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800/60">
            {project.category === "mobile" ? "Mobile App" : project.category === "fullstack" ? "Full Stack / Next.js" : "Web Platform"}
          </span>

          {worklike && (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300">
              Concept: {worklike}
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold font-titleFont text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors mb-1.5">
          {name}
        </h3>

        {/* Company Association Tag */}
        {companyAssociated && (
          <p className="text-[11px] font-semibold text-sky-600 dark:text-sky-400 mb-2.5">
            Engineered at: {companyAssociated}
          </p>
        )}

        {/* Description / Tagline */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
          {tagline || overview || (Array.isArray(des) ? des[0] : "")}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {Array.isArray(TechName) &&
            TechName.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800"
              >
                {tech}
              </span>
            ))}
        </div>

        {/* Key Features Preview */}
        <ul className="space-y-1.5 mb-6 text-xs text-slate-600 dark:text-slate-300">
          {featuresList.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FiCheck className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{item}</span>
            </li>
          ))}
        </ul>
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

        <div className="flex items-center gap-2">
          {link && (
            <button
              onClick={() => openExternalLink(link)}
              className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-sky-500"
              title="Visit Live Site"
              aria-label={`Visit live site for ${name}`}
              type="button"
            >
              <FaGlobe className="w-3.5 h-3.5" />
            </button>
          )}

          {WorklikeLink && (
            <button
              onClick={() => openExternalLink(WorklikeLink)}
              className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-sky-500"
              title={`Reference platform (${worklike})`}
              aria-label={`Reference site for ${worklike}`}
              type="button"
            >
              <FaExternalLinkAlt className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
