import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { ProjectsData } from "../../data/data";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PROJECTS" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {ProjectsData.map((item) => {
          return (
            <ProjectsCard
              title={item.name}
              tech={item.TechName}
              link={item.link}
              WorkLike={item.worklike}
              des={item.des}
              WorklikeLink={item.WorklikeLink}
              key={item.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
