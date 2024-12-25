import { useState, useEffect } from 'react';
import { projects as initialProjects } from '../data/projects';
import { Project } from '../types';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [searchQuery, setSearchQuery] = useState('');

  const searchProjects = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (!searchQuery) {
      setProjects(initialProjects);
      return;
    }

    const filtered = initialProjects.filter((project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => 
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    setProjects(filtered);
  }, [searchQuery]);

  return { projects, searchProjects };
}