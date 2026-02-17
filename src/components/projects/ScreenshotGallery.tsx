'use client';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScreenshotItem } from '@/types/project';
import Image from 'next/image';
import React, { useState } from 'react';

interface ScreenshotGalleryProps {
  screenshots: ScreenshotItem[];
  projectTitle: string;
}

export function ScreenshotGallery({
  screenshots,
  projectTitle,
}: ScreenshotGalleryProps) {
  const [open, setOpen] = useState(false);

  if (!screenshots || screenshots.length === 0) return null;

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
          View Media
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-5xl p-0">
        <DialogTitle className="sr-only">
          {projectTitle} - Screenshots Gallery
        </DialogTitle>
        <Carousel className="w-full">
          <CarouselContent>
            {screenshots.map((screenshot, index) => (
              <CarouselItem key={index}>
                <div className="space-y-4 p-6">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.caption}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-foreground">
                      {screenshot.caption}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {index + 1} / {screenshots.length}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
