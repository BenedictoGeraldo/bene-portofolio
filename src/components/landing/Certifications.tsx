import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { certifications } from '@/config/Certification';
import React from 'react';

import { CertificationCard } from '../certifications/CertificationCard';

export default function Certifications() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="My" heading="Certificate" />
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {certifications.map((certification) => (
          <CertificationCard
            key={certification.title}
            certification={certification}
          />
        ))}
      </div>
    </Container>
  );
}
