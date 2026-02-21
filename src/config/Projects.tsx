import Axios from '@/components/technologies/Axios';
import BootStrap from '@/components/technologies/BootStrap';
import CSS from '@/components/technologies/CSS';
import Cypress from '@/components/technologies/Cypress';
import Docker from '@/components/technologies/Docker';
import Express from '@/components/technologies/Express';
import Filament from '@/components/technologies/Filament';
import FramerMotion from '@/components/technologies/FramerMotion';
import Html from '@/components/technologies/Html';
import InfinityFree from '@/components/technologies/InfinityFree';
import JMeter from '@/components/technologies/JMeter';
import JQuery from '@/components/technologies/JQuery';
import JavaScript from '@/components/technologies/JavaScript';
import Laravel from '@/components/technologies/Laravel';
import MySQL from '@/components/technologies/MySQL';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import SonarQube from '@/components/technologies/SonarQube';
import TailwindCss from '@/components/technologies/TailwindCss';
import Twilio from '@/components/technologies/Twilio';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import WordPress from '@/components/technologies/WordPress';
import Zap from '@/components/technologies/Zap';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Pelayanan Kode NCAGE',
    description:
      'Government-grade system to manage registration and updating of NCAGE codes with secure workflows',
    image: '/project/thumbnail-ncage.png',
    link: null,
    screenshots: [
      { src: '/project/ncage/login.png', caption: 'Login Page' },
      {
        src: '/project/ncage/ncage-registration-form.png',
        caption: 'NCAGE Registration Form',
      },
      {
        src: '/project/ncage/monitoring-status.png',
        caption: 'Registration NCAGE Status Monitoring',
      },
      {
        src: '/project/ncage/admin-dashboard.png',
        caption: 'Admin Dashboard',
      },
    ],
    technologies: [
      { name: 'Laravel', icon: <Laravel key="laravel" /> },
      { name: 'MySQL', icon: <MySQL key="mysql" /> },
      { name: 'Bootstrap', icon: <BootStrap key="bootstrap" /> },
      { name: 'Filament', icon: <Filament key="filament" /> },
      { name: 'Twilio', icon: <Twilio key="twilio" /> },
    ],
    github: 'https://github.com/BenedictoGeraldo/Project_NCAGE.git',
    status: 'completed',
    type: 'featured',
    details: false,
    projectDetailsPageSlug: '/projects/ncage',
  },
  {
    title: 'STARK',
    description:
      'A fullstack project management platform for tracking tasks, deadlines, and team collaboration',
    image: '/project/stark-thumbnail.png',
    link: null,
    screenshots: [
      { src: '/project/stark/registration.png', caption: 'Registration Page' },
      {
        src: '/project/stark/dashboard-user.png',
        caption: 'User Dashboard',
      },
      { src: '/project/stark/dashboard-admin.png', caption: 'Admin Dashboard' },
      {
        src: '/project/stark/add-project.png',
        caption: 'Add New Project Form',
      },
    ],
    technologies: [
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'NextJs', icon: <NextJs key="nextjs" /> },
      { name: 'TailwindCss', icon: <TailwindCss key="tailwind" /> },
      { name: 'Axios', icon: <Axios key="axios" /> },
      { name: 'Express', icon: <Express key="express" /> },
      { name: 'MySQL', icon: <MySQL key="mysql" /> },
      { name: 'Postman', icon: <Postman key="postman" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
    ],
    github: 'https://github.com/BenedictoGeraldo/Freelance-Management.git',
    status: 'completed',
    type: 'featured',
    details: false,
    projectDetailsPageSlug: '/projects/stark',
  },
  {
    title: 'Evershop Quality Assurance Project',
    description:
      'STQA project for Evershop E-commerce, covering end-to-end, performance, security, and code quality testing',
    image: '/project/stqa-evershop/evershop-thumbnail.png',
    link: null,
    screenshots: [
      {
        src: '/project/stqa-evershop/cypress-1.jpg',
        caption: 'End to End Testing with Cypress',
      },
      {
        src: '/project/stqa-evershop/cypress-wcag.jpg',
        caption: 'WCAG Testing with Cypress-axe',
      },
      {
        src: '/project/stqa-evershop/jmeter-1.jpg',
        caption: 'Performance Testing with Apache JMeter',
      },
      {
        src: '/project/stqa-evershop/postman-1.jpg',
        caption: 'API Testing with Postman',
      },
      {
        src: '/project/stqa-evershop/sonarqube-1.jpg',
        caption: 'Code Quality Analysis with SonarQube',
      },
    ],
    technologies: [
      { name: 'Cypress', icon: <Cypress key="cypress" /> },
      { name: 'SonarQube', icon: <SonarQube key="sonarqube" /> },
      { name: 'OWASP ZAP', icon: <Zap key="zap" /> },
      { name: 'Apache JMeter', icon: <JMeter key="jmeter" /> },
      { name: 'Postman', icon: <Postman key="postman" /> },
    ],
    github: 'https://github.com/BenedictoGeraldo/STQA-for-evershop.git',
    status: 'completed',
    type: 'featured',
    details: false,
    projectDetailsPageSlug: '/projects/stqa-evershop',
  },
  {
    title: 'Mari Futsal',
    description:
      'A fully customized WordPress website with optimized performance, custom features, and production deployment',
    image: '/project/mari-futsal-thumbnail.png',
    link: 'https://mari-futsal-halim.kesug.com/', // LIVE - ganti dengan URL asli
    technologies: [
      { name: 'WordPress', icon: <WordPress key="wordpress" /> },
      { name: 'JQuery', icon: <JQuery key="jquery" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
      { name: 'MySQL', icon: <MySQL key="mysql" /> },
      { name: 'InfinityFree', icon: <InfinityFree key="infinityfree" /> },
    ],
    github: 'https://github.com/BenedictoGeraldo/wp-mari-futsal.git',
    status: 'completed',
    type: 'featured',
    details: false,
    projectDetailsPageSlug: '/projects/mari-futsal',
  },
  {
    title: 'MyHR',
    description:
      'An enterprise-scale information system focusing on modular architecture, scalability, and clean design',
    image: '/project/myhr-thumbnail.png',
    link: null,
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'NextJs', icon: <NextJs key="nextjs" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
      { name: 'Axios', icon: <Axios key="axios" /> },
      { name: 'NestJs', icon: <NestJs key="nestjs" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Postman', icon: <Postman key="postman" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
    ],
    github: null,
    status: 'ongoing',
    type: 'featured',
    details: false,
    projectDetailsPageSlug: '/projects/myhr',
  },

  // ========== OTHER SELECTED PROJECTS ==========
  {
    title: 'Personal Portfolio',
    description: 'Modern personal portfolio with smooth UI',
    image: '/project/portofolio-thumbnail.png',
    link: 'https://benedicto-geraldo.vercel.app/',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Framer Motion', icon: <FramerMotion key="framer-motion" /> },
    ],
    github: 'https://github.com/BenedictoGeraldo/bene-portofolio.git',
    status: 'completed',
    type: 'other',
  },
  {
    title: 'PELITA',
    description: 'Enterprise asset management system',
    image: '/project/pelita-thumbnail.png',
    link: null,
    screenshots: [
      { src: '/project/pelita/login.png', caption: 'Login' },
      { src: '/project/pelita/category-list.png', caption: 'List Categories' },
      {
        src: '/project/pelita/user-management.png',
        caption: 'User Management',
      },
    ],
    technologies: [
      { name: 'Laravel', icon: <Laravel key="laravel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
      { name: 'MySQL', icon: <MySQL key="mysql" /> },
    ],
    github: 'https://github.com/BenedictoGeraldo/manajemen-asset-kalvari.git',
    status: 'ongoing',
    type: 'other',
  },
  {
    title: 'House Ilmu Indonesia Company Profile',
    description: 'Responsive company profile website',
    image: '/project/house-ilmu-thumbnail.png',
    link: null,
    screenshots: [
      {
        src: '/project/house-ilmu-indonesia/opportunities-detail.png',
        caption: 'Opportunities Section',
      },
      {
        src: '/project/house-ilmu-indonesia/career.png',
        caption: 'Career Section',
      },
      {
        src: '/project/house-ilmu-indonesia/programme.png',
        caption: 'Programme Section',
      },
    ],
    technologies: [
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'Bootstrap', icon: <BootStrap key="bootstrap" /> },
    ],
    github: 'https://github.com/tech-house-ilmu/web-hi-main-hosting-repo.git',
    status: 'completed',
    type: 'other',
  },
];

// Utility exports untuk filtering
export const featuredProjects = projects.filter((p) => p.type === 'featured');
export const otherProjects = projects.filter((p) => p.type === 'other');
