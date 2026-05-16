'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Project } from '@/types/project';
import { X } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import GithubSvg from '../svgs/Github';
import Website from '../svgs/Website';

interface ProjectDetailModalProps {
  project: Project;
}

export function ProjectDetailModal({ project }: ProjectDetailModalProps) {
  const [open, setOpen] = useState(false);

  // Lock Lenis smooth scrolling when modal opens
  useEffect(() => {
    if (!open) return;

    const lenis = document.querySelector<HTMLElement>('[data-lenis-root]');
    if (lenis) {
      const lenisInstance = (
        lenis as unknown as { __lenis?: { stop: () => void; start: () => void } }
      ).__lenis;
      if (lenisInstance) {
        lenisInstance.stop();
        return () => lenisInstance.start();
      }
    }
  }, [open]);

  const hasLiveUrl = project.link && project.link !== null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          View Detail
        </Button>
      </DialogTrigger>

      <DialogContent
        className="block w-[calc(100vw-2rem)] max-w-3xl p-0 bg-background"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">
          {project.title} - Project Details
        </DialogTitle>

        {/* Close Button */}
        <DialogClose className="absolute top-4 right-4 z-20 rounded-full bg-background/80 backdrop-blur-sm border border-border p-2 text-foreground hover:bg-muted transition-colors shadow-sm">
          <X className="size-4" />
          <span className="sr-only">Close</span>
        </DialogClose>

        {/* Scrollable Content with Lenis prevention */}
        <div
          data-lenis-prevent
          className="custom-scrollbar max-h-[85vh] overflow-y-auto overscroll-contain"
        >
          {/* Banner Image */}
          <div className="relative w-full aspect-video overflow-hidden bg-muted">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            {/* Gradient overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
          </div>

          {/* Content */}
          <div className="px-6 sm:px-8 pb-8 space-y-8 -mt-12 relative z-10">
            {/* Title & Status */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Badge
                  variant={
                    project.status === 'completed' ? 'default' : 'secondary'
                  }
                  className="text-xs"
                >
                  {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                </Badge>
                {project.date && (
                  <span className="text-sm text-muted-foreground">
                    {project.date}
                  </span>
                )}
              </div>

              <h2 className="text-3xl font-bold tracking-tight leading-tight">
                {project.title}
              </h2>

              {project.tagline && (
                <p className="text-lg text-muted-foreground font-medium">
                  {project.tagline}
                </p>
              )}

              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <Separator />

            {/* About / Full Description */}
            {project.fullDescription && (
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">About This Project</h3>
                <div className="text-muted-foreground leading-relaxed prose prose-neutral dark:prose-invert max-w-none">
                  {project.fullDescription}
                </div>
                <Separator />
              </div>
            )}

            {/* Technology Stack */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <Tooltip key={technology.name}>
                    <TooltipTrigger asChild>
                      <div className="bg-muted/50 hover:bg-muted inline-flex items-center gap-2 rounded-lg border border-border/50 px-3 py-2 transition-colors cursor-default">
                        <span className="size-5">{technology.icon}</span>
                        <span className="text-sm font-medium">
                          {technology.name}
                        </span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{technology.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>

            {/* Screenshots Gallery */}
            {project.screenshots && project.screenshots.length > 0 && (
              <>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Gallery</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.screenshots.map((shot, idx) => (
                      <div key={idx} className="space-y-2 group/card">
                        <div className="relative aspect-video rounded-lg overflow-hidden border bg-muted shadow-sm">
                          <Image
                            src={shot.src}
                            alt={shot.caption}
                            fill
                            className="object-cover transition-transform duration-300 group-hover/card:scale-105"
                          />
                        </div>
                        <p className="text-sm text-center text-muted-foreground">
                          {shot.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Action Links */}
            {(hasLiveUrl || project.github) && (
              <>
                <Separator />
                <div className="flex flex-wrap gap-3">
                  {hasLiveUrl && (
                    <Button asChild>
                      <a
                        href={project.link!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <Website className="size-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button variant="outline" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <GithubSvg className="size-4" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
