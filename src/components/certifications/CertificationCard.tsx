import { Certification } from '@/config/Certification';
import Image from 'next/image';
import React from 'react';

import { CertificationGallery } from './CertificationGallery';

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-100 shadow-sm transition-all hover:shadow-lg dark:border-gray-800">
      {/* Large Thumbnail */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={certification.images[0]}
          alt={certification.title}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Certificate Info - OUTSIDE image container */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex-1">
          <h3 className="text-lg font-semibold leading-tight">
            {certification.title}
          </h3>
          <p className="text-secondary mt-2 text-sm">{certification.issuer}</p>
          <p className="text-secondary mt-1 text-xs">
            {certification.issueDate}
          </p>
        </div>

        {/* View Button */}
        <CertificationGallery
          images={certification.images}
          title={certification.title}
        />
      </div>
    </div>
  );
}
