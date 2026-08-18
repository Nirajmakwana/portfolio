import React, { useState } from "react";
import Title from "../layouts/Title";
import { SkillCategories } from "../../constants";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Technologies" },
    ...SkillCategories.map((cat) => ({
      id: cat.category,
      label: cat.category,
    })),
  ];

  const displayedCategories =
    activeCategory === "all"
      ? SkillCategories
      : SkillCategories.filter((cat) => cat.category === activeCategory);

  return (
    <section id="skills" className="w-full py-16 sm:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
      <Title
        title="Technical Stack"
        des="Skills & Capabilities"
        subtitle="A categorized overview of technologies, libraries, and frameworks I use to engineer robust software solutions."
      />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10" role="tablist" aria-label="Technology Categories">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            role="tab"
            aria-selected={activeCategory === cat.id}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeCategory === cat.id
                ? "bg-sky-600 text-white shadow-sm"
                : "bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:border-sky-500/50 hover:text-sky-600 dark:hover:text-sky-400"
            }`}
            type="button"
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skill Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCategories.map((categoryGroup) => (
          <div
            key={categoryGroup.category}
            className="portfolioCard flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700/50 mb-4">
                <h3 className="font-titleFont font-bold text-base text-slate-900 dark:text-white">
                  {categoryGroup.category}
                </h3>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  {categoryGroup.skills.length} tools
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                {categoryGroup.description}
              </p>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2.5">
                {categoryGroup.skills.map((skill) => {
                  const Icon = skill.Icon;
                  return (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 text-xs font-medium hover:border-sky-500/50 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    >
                      {Icon && <Icon className="w-4 h-4 text-sky-600 dark:text-sky-400" />}
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
