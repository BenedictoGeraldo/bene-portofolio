'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Project } from '@/types/project';
import { Calendar, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

interface ProjectDetailModalProps {
  project: Project;
}

export function ProjectDetailModal({ project }: ProjectDetailModalProps) {
  const [open, setOpen] = useState(false);

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
        className="block w-[calc(100vw-2rem)] max-w-3xl p-0 max-h-[90vh] overflow-y-auto bg-background"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">
          {project.title} - Project Details
        </DialogTitle>
        <DialogClose className="absolute top-3 right-3 z-10 rounded-full bg-black/50 p-1.5 text-white hover:bg-black transition-colors">
          <X className="size-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        
        <div className="flex flex-col">
          {/* Banner Image */}
          <div className="relative w-full aspect-video sm:aspect-[21/9] overflow-hidden bg-muted">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Container */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Header Details */}
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight">{project.title}</h2>
              <p className="text-xl text-muted-foreground">
                {project.tagline || project.description}
              </p>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                <Calendar className="size-4" />
                <span>{project.date || 'January 2024'}</span>
              </div>
            </div>

            {/* About This Project */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">About This Project</h3>
              <div className="text-muted-foreground leading-relaxed">
                {project.fullDescription || project.description}
              </div>
            </div>

            {/* Screenshots (Optional) */}
            {project.screenshots && project.screenshots.length > 0 && (
               <div className="space-y-4 pt-4 border-t border-border/50">
                 <h3 className="text-xl font-semibold">Gallery</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {project.screenshots.map((shot, idx) => (
                     <div key={idx} className="space-y-2">
                       <div className="relative aspect-video rounded-lg overflow-hidden border bg-muted">
                         <Image src={shot.src} alt={shot.caption} fill className="object-contain" />
                       </div>
                       <p className="text-sm text-center text-muted-foreground">{shot.caption}</p>
                     </div>
                   ))}
                 </div>
               </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
