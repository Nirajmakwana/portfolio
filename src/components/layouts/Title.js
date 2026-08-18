import React from "react";

const Title = ({ title, des, align = "left", subtitle }) => {
  const alignmentClasses =
    align === "center"
      ? "text-center items-center"
      : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignmentClasses} mb-12 sm:mb-16`}>
      {title && (
        <span className="sectionTitlePill">
          {title}
        </span>
      )}
      {des && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-titleFont text-slate-900 dark:text-white tracking-tight">
          {des}
        </h2>
      )}
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Title;