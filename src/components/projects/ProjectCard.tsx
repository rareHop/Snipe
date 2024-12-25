import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-gray-900 rounded-lg overflow-hidden transition-transform hover:-translate-y-1">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-sm bg-gray-800 text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-1" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}