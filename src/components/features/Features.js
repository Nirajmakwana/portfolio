import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";

const Features = () => {
  return (
    <section
      id="services"
      className="w-full py-16 sm:py-24 border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <Title
        title="Services & Specialties"
        des="What I Can Build & Deliver"
        subtitle="Specialized frontend and full-stack capabilities designed to accelerate product development and ensure technical excellence."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;
