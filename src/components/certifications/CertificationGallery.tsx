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
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

interface CertificationGalleryProps {
  images: string[];
  title: string;
}

export function CertificationGallery({
  images,
  title,
}: CertificationGalleryProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-full gap-2">
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
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          View Certificate
        </Button>
      </DialogTrigger>
      <DialogContent
        className="block w-[calc(100vw-2rem)] max-w-3xl p-0 max-h-[90vh] overflow-hidden"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">{title} - Certificate</DialogTitle>
        <DialogClose className="absolute top-3 right-3 z-10 rounded-full bg-black/80 p-1.5 text-white hover:bg-black transition-colors">
          <X className="size-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <Carousel className="w-full overflow-hidden">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="space-y-3 p-3 sm:p-6">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border bg-muted">
                    <Image
                      src={image}
                      alt={`${title} - Page ${index + 1}`}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-foreground">
                      {title}
                    </p>
                    {images.length > 1 && (
                      <p className="my-1 text-xs text-muted-foreground">
                        Page {index + 1} / {images.length}
                      </p>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {images.length > 1 && (
            <>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </>
          )}
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
