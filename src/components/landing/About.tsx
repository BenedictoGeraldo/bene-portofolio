import { about } from '@/config/About';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

export default function About() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="About" heading="Me" />
      {/* About me */}
      <div className="mt-8 flex flex-col gap-4 md:flex-row">
        <Image
          src="/assets/me.jpg"
          alt="About"
          width={500}
          height={500}
          className="h-60 w-48 rounded-md border-2 border-secondary bg-blue-300 object-cover dark:bg-yellow-300"
        />
        <div className="mt-4">
          <h3 className="text-2xl font-bold">{about.name}</h3>
          <p className="text-secondary mt-4 text-justify">
            {about.description}
          </p>
        </div>
      </div>
    </Container>
  );
}
