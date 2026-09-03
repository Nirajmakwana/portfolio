import React, { useState, useMemo } from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import ProjectModal from "./ProjectModal";
import { ProjectsData } from "../../data/data";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  // Derive unique categories dynamically from ProjectsData
  const categorySet = useMemo(() => {
    const cats = new Set();
    ProjectsData.forEach((p) => cats.add(p.category));
    return Array.from(cats);
  }, []);

  const filters = [
    { id: "all", label: "All Projects", count: ProjectsData.length },
    {
      id: "featured",
      label: "Featured",
      count: ProjectsData.filter((p) => p.featured).length,
    },
    ...categorySet.map((cat) => ({
      id: cat,
      label: cat,
      count: ProjectsData.filter((p) => p.category === cat).length,
    })),
  ];

  const filteredProjects = ProjectsData.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="w-full py-16 sm:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <Title
          title="Portfolio Showcase"
          des="Featured Engineering Work"
          subtitle="Explore selected enterprise platforms, mobile applications, and software tools built with modern React ecosystems."
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10" role="tablist" aria-label="Project Category Filters">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            role="tab"
            aria-selected={activeFilter === filter.id}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeFilter === filter.id
                ? "bg-sky-600 text-white shadow-sm"
                : "bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:border-sky-500/50 hover:text-sky-600 dark:hover:text-sky-400"
            }`}
            type="button"
          >
            <span>{filter.label}</span>
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                activeFilter === filter.id
                  ? "bg-sky-700 text-sky-100"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
              }`}
            >
              {filter.count}
            </span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectsCard
            key={project.id}
            project={project}
            onOpenDetails={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-slate-400 dark:text-slate-500">
          <p className="text-sm">No projects found in this category.</p>
        </div>
      )}

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
