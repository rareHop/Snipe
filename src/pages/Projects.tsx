import React from 'react';
import { ProjectGrid } from '../components/projects/ProjectGrid';
import { ProjectSearch } from '../components/projects/ProjectSearch';
import { useProjects } from '../hooks/useProjects';

export function Projects() {
  const { projects, searchProjects } = useProjects();

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
      <ProjectSearch onSearch={searchProjects} />
      <ProjectGrid projects={projects} />
    </div>
  );
}