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
      {/* Hero - No animation (already visible) */}
      <Hero />

      {/* About + Education */}
      <AnimatedSection id="about">
        <About />
        <Education />
      </AnimatedSection>

      {/* Technology */}
      <AnimatedSection id="tech">
        <Technology />
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection id="experience">
        <Experience />
      </AnimatedSection>

      {/* Projects */}
      <AnimatedSection id="projects">
        <Work />
      </AnimatedSection>

      {/* Certifications */}
      <AnimatedSection>
        <Certifications />
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection id="contact">
        <CTA />
      </AnimatedSection>
    </Container>
  );
}
