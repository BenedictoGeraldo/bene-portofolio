'use client';

import { featuredProjects, otherProjects } from '@/config/Projects';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ProjectList } from '../projects/ProjectList';

export default function Projects() {
  return (
    <Container className="mt-20">
      {/* Featured Projects Section */}
      <SectionHeading subHeading="Featured" heading="Projects" />
      <ProjectList
        className="mt-8"
        projects={featuredProjects}
        variant="featured"
      />

      {/* Other Selected Projects Section */}
      <div className="mt-16">
        <h3 className="mb-6 text-2xl text-center font-semibold">
          Other Selected Projects
        </h3>
        <ProjectList projects={otherProjects} variant="other" />
      </div>
    </Container>
  );
}
