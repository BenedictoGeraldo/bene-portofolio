'use client';

import { technologyConfig } from '@/config/Technology';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function Technology() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Tech" heading="Stack" />
      <div className="mt-12 space-y-12">
        {technologyConfig.categories.map((category) => (
          <div key={category.title} className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">
              {category.title}
            </h3>
            <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
              {category.technologies.map((tech) => {
                const IconComponent = tech.component;
                return (
                  <Tooltip key={tech.name}>
                    <TooltipTrigger asChild>
                      <a
                        href={tech.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:scale-110 hover:border-primary hover:shadow-lg"
                      >
                        <div className="size-12 transition-transform duration-300 group-hover:scale-110">
                          <IconComponent />
                        </div>
                        <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-primary">
                          {tech.name}
                        </span>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Visit {tech.name} documentation</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
