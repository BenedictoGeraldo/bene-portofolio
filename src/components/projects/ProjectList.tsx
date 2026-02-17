import { type Project } from '@/types/project';
import React from 'react';

import { ProjectCard } from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
  className?: string;
  variant?: 'featured' | 'other';
}

export function ProjectList({
  projects,
  className,
  variant = 'featured',
}: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No projects found.</p>
      </div>
    );
  }

  const gridClasses =
    variant === 'featured'
      ? 'grid grid-cols-1 gap-6 md:grid-cols-2'
      : 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`${gridClasses} ${className}`}>
      {projects.map((project: Project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
