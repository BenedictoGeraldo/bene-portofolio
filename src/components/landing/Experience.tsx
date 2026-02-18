import { type Experience, experiences } from '@/config/Experience';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ExperienceCard } from '../experience/ExperienceCard';

export default function Experience() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Work" heading="Experience" />
      <div className="mt-8 flex flex-col gap-8">
        {experiences.map((experience: Experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
    </Container>
  );
}
