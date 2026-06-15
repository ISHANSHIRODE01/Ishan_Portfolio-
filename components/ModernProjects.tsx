"use client";

import { projects } from "@/data";
import { ProjectCard } from "./ui/ProjectCard";

const ModernProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading mb-16">
        High-Impact <span className="text-neon-blue">AI Solutions</span>
      </h1>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5">
        {projects.map((item) => (
          <ProjectCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default ModernProjects;
