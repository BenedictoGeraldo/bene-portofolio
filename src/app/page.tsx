import AnimatedSection from '@/components/common/AnimatedSection';
import Container from '@/components/common/Container';
import About from '@/components/landing/About';
import CTA from '@/components/landing/CTA';
import Certifications from '@/components/landing/Certifications';
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

      <AnimatedSection id="about">
        <About />
        <Education />
      </AnimatedSection>

      <AnimatedSection id="experience">
        <Experience />
      </AnimatedSection>

      <AnimatedSection id="tech">
        <Technology />
      </AnimatedSection>

      <AnimatedSection id="projects">
        <Work />
      </AnimatedSection>

      <AnimatedSection id="certifications">
        <Certifications />
      </AnimatedSection>

      <AnimatedSection id="contact">
        <CTA />
      </AnimatedSection>
    </Container>
  );
}
