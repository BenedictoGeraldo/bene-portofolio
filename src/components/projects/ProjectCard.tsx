'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { type Project } from '@/types/project';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import ArrowRight from '../svgs/ArrowRight';
import Github from '../svgs/Github';
import Website from '../svgs/Website';
import { Badge } from '../ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { ScreenshotGallery } from './ScreenshotGallery';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isFeatured = project.type === 'featured';
  const hasLiveUrl = project.link && project.link !== null;

  return (
    <Card
      className={`group h-full w-full overflow-hidden border-gray-100 p-0 shadow-none transition-all dark:border-gray-800 ${
        isFeatured
          ? 'hover:shadow-lg hover:scale-[1.02]'
          : 'hover:border-primary'
      }`}
    >
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <Image
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
          />
          {/* Status Badge Overlay */}
          <div className="absolute top-3 right-3">
            <Badge
              variant={project.status === 'completed' ? 'default' : 'secondary'}
              className={
                project.status === 'completed'
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-yellow-500 hover:bg-yellow-600'
              }
            >
              {project.status === 'completed' ? ' Completed' : ' Ongoing'}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-6">
        <div className="space-y-4">
          {/* Project Header - Title and Icons */}
          <div className="flex items-center justify-between gap-4">
            <h3
              className={`font-semibold leading-tight ${
                isFeatured ? 'text-xl' : 'text-lg'
              }`}
            >
              {project.title}
            </h3>
            <div className="flex items-center gap-2">
              {/* Live Website Link */}
              {hasLiveUrl && (
                <Tooltip>
                  <TooltipTrigger>
                    <a
                      className="text-secondary hover:text-primary flex size-6 items-center justify-center transition-colors"
                      href={project.link!}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Website />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View Live Website</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {/* GitHub Link */}
              {project.github && (
                <Tooltip>
                  <TooltipTrigger>
                    <a
                      className="text-secondary hover:text-primary flex size-6 items-center justify-center transition-colors"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View GitHub Repository</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>

          {/* Description */}
          <p
            className={`text-secondary ${
              isFeatured ? 'line-clamp-3' : 'line-clamp-2 text-sm'
            }`}
          >
            {project.description}
          </p>

          {/* Technologies */}
          <div>
            <h4 className="text-secondary mb-2 text-sm font-medium">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <div className="size-6 transition-all duration-300 hover:scale-110 hover:cursor-pointer">
                      {technology.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{technology.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      {/* Footer - Screenshots or Detail Link */}
      <CardFooter className="flex justify-between gap-2 p-6 pt-0">
        {/* Screenshot Gallery Button */}
        {project.screenshots && project.screenshots.length > 0 && (
          <ScreenshotGallery
            screenshots={project.screenshots}
            projectTitle={project.title}
          />
        )}

        {/* Detail Page Link for Featured Projects */}
        {isFeatured && project.details && project.projectDetailsPageSlug && (
          <Link
            href={project.projectDetailsPageSlug}
            className="text-secondary hover:text-primary ml-auto flex items-center gap-2 text-sm underline-offset-4 transition-colors hover:underline"
          >
            View Details <ArrowRight className="size-4" />
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
