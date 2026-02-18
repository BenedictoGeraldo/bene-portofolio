import Container from '@/components/common/Container';
import { ctaConfig } from '@/config/CTA';
import React from 'react';

export default function CTA() {
  return (
    <Container className="mt-12 sm:mt-16 md:mt-20">
      <div className="rounded-lg border border-dashed border-border bg-muted/50 px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {ctaConfig.heading}
        </h2>
        <p className="text-secondary mx-auto mt-3 sm:mt-4 md:mt-4 max-w-2xl text-base sm:text-lg">
          {ctaConfig.description}
        </p>

        <div className="mt-6 sm:mt-8 md:mt-8 flex flex-col items-center gap-3 sm:gap-4 md:gap-6 sm:flex-row sm:justify-center">
          {/* Email Button */}
          <div className="group w-full sm:w-auto flex items-center gap-2 sm:gap-3 rounded-lg border border-border bg-card px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 transition-all hover:border-primary hover:shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted-foreground transition-colors group-hover:text-primary flex-shrink-0"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="font-medium text-sm sm:text-base truncate">
              {ctaConfig.email}
            </span>
          </div>

          {/* Phone Button */}
          <div className="group w-full sm:w-auto flex items-center gap-2 sm:gap-3 rounded-lg border border-border bg-card px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 transition-all hover:border-primary hover:shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted-foreground transition-colors group-hover:text-primary flex-shrink-0"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="font-medium text-sm sm:text-base truncate">
              {ctaConfig.phone}
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
