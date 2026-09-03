import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import {
  FiCheckCircle,
  FiLayers,
  FiAlertCircle,
  FiAward,
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiStar,
} from "react-icons/fi";
import { openExternalLink } from "../../utils/helpers";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const {
    title,
    subtitle,
    category,
    company,
    role,
    period,
    location,
    featured,
    tagline,
    description,
    challenge,
    solution,
    features,
    technologies,
    link,
  } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50/50 dark:bg-slate-800/30">
          <div className="min-w-0 flex-1">
            {/* Top Badge Row */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="sectionTitlePill !mb-0 text-[10px]">
                Case Study & Technical Overview
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800/60">
                {category}
              </span>
              {featured && (
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50">
                  <FiStar className="w-2.5 h-2.5" />
                  Featured
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <h2
              id="project-modal-title"
              className="text-2xl sm:text-3xl font-bold font-titleFont text-slate-900 dark:text-white break-words"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                {subtitle}
              </p>
            )}
            {tagline && (
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {tagline}
              </p>
            )}

            {/* Company / Role / Period / Location Meta Bar */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 pt-3 border-t border-slate-200/60 dark:border-slate-700/40">
              {company && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400">
                  <FiBriefcase className="w-3.5 h-3.5" />
                  {company}
                </span>
              )}
              {role && (
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {role}
                </span>
              )}
              {period && (
                <span className="inline-flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                  <FiCalendar className="w-3 h-3" />
                  {period}
                </span>
              )}
              {location && (
                <span className="inline-flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                  <FiMapPin className="w-3 h-3" />
                  {location}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors shrink-0 focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label="Close Project Details"
            type="button"
          >
            <MdClose className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Description */}
          {description && (
            <div>
              <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Overview
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {description}
              </p>
            </div>
          )}

          {/* Tech Stack */}
          {technologies && technologies.length > 0 && (
            <div>
              <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-2.5 flex items-center gap-1.5">
                <FiLayers className="w-3.5 h-3.5" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Problem & Solution Grid */}
          {(challenge || solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {challenge && (
                <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40">
                  <h4 className="text-xs uppercase font-bold text-amber-800 dark:text-amber-400 mb-1.5 flex items-center gap-1.5">
                    <FiAlertCircle className="w-3.5 h-3.5" />
                    Technical Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {challenge}
                  </p>
                </div>
              )}

              {solution && (
                <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-900/40">
                  <h4 className="text-xs uppercase font-bold text-emerald-800 dark:text-emerald-400 mb-1.5 flex items-center gap-1.5">
                    <FiAward className="w-3.5 h-3.5" />
                    Architectural Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Features List */}
          {features && features.length > 0 && (
            <div>
              <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Key Features & Engineering Contributions
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                  >
                    <FiCheckCircle className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-800/30">
          <div className="flex items-center gap-3">
            {link && (
              <button
                onClick={() => openExternalLink(link)}
                className="primaryBtn text-xs"
                type="button"
              >
                <FaGlobe className="w-3.5 h-3.5" />
                <span>Visit Live Platform</span>
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white px-4 py-2"
            type="button"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
