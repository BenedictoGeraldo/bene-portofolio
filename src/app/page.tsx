import Container from '@/components/common/Container';
import About from '@/components/landing/About';
import CTA from '@/components/landing/CTA';
import Education from '@/components/landing/Education';
import Experience from '@/components/landing/Experience';
import Hero from '@/components/landing/Hero';
import Work from '@/components/landing/Projects';
import Technology from '@/components/landing/Technology';
import React from 'react';

export default function page() {
  return (
    <Container className="min-h-screen py-13">
      <Hero />
      <About />
      <Education />
      <Technology />
      <Experience />
      <Work />
      <CTA />
    </Container>
  );
}
