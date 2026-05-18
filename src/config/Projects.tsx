import Axios from '@/components/technologies/Axios';
import BootStrap from '@/components/technologies/BootStrap';
import CSS from '@/components/technologies/CSS';
import Docker from '@/components/technologies/Docker';
import Express from '@/components/technologies/Express';
import FramerMotion from '@/components/technologies/FramerMotion';
import Html from '@/components/technologies/Html';
import InfinityFree from '@/components/technologies/InfinityFree';
import JQuery from '@/components/technologies/JQuery';
import JavaScript from '@/components/technologies/JavaScript';
import Laravel from '@/components/technologies/Laravel';
import MySQL from '@/components/technologies/MySQL';
import NestJs from '@/components/technologies/NestJs';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import Oracle from '@/components/technologies/Oracle';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import Replit from '@/components/technologies/Replit';
import Shadcn from '@/components/technologies/Shadcn';
import Supabase from '@/components/technologies/Supabase';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import WordPress from '@/components/technologies/WordPress';
import { Project } from '@/types/project';

import Java from '../components/technologies/Java';
import SpringBoot from '../components/technologies/SpringBoot';
import Vue from '../components/technologies/vue';

export const projects: Project[] = [
  {
    title: 'Pelayanan Kode NCAGE (Remake)',
    description:
      'Official digital platform for NCAGE code registration, verification, and status tracking in Indonesia managed by the Codification Center (Puskod) of the Indonesian Ministry of Defense. The system provides a company portal for NCAGE submission and tracking, as well as an admin portal for verification, approval, revision, and NCAGE certificate management.',
    image: '/project/ncage/beranda-company.png',
    link: 'https://ncage-next.vercel.app/',
    screenshots: [
      {
        src: '/project/ncage/login-company.png',
        caption: 'Login Page Company Side',
      },
      {
        src: '/project/ncage/dashboard-admin.png',
        caption: 'Dashboard Admin',
      },
      {
        src: '/project/ncage/pantau-status-company.png',
        caption: 'Registration NCAGE Status Monitoring',
      },
      {
        src: '/project/ncage/data-ncage-records-admin(dummy).png',
        caption: 'NCAGE Records Data Management Admin (dummy data)',
      },
    ],
    technologies: [
      { name: 'NextJs', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
      { name: 'Supabase', icon: <Supabase key="supabase" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'ShadcnUI', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/BenedictoGeraldo/ncage-next.git',
    status: 'completed',
    type: 'featured',
    details: false,
    projectDetailsPageSlug: '/projects/ncage',
  },

  {
    title: 'QuickO',
    description:
      'QuickO is a web-based student data management system built with Vue 3 and TypeScript. The application integrates with a Spring Boot backend through REST APIs to handle authentication and CRUD operations within a responsive and modern user interface.',
    image: '/project/quicko/login-page.png',
    link: 'https://quicko-vue.netlify.app/',
    screenshots: [
      {
        src: '/project/quicko/login-page.png',
        caption: 'Login Page',
      },
      {
        src: '/project/quicko/register-page.png',
        caption: 'Register Page',
      },
      {
        src: '/project/quicko/view-mahasiswa.png',
        caption: 'List Mahasiswa',
      },
      {
        src: '/project/quicko/tambah-mahasiswa.png',
        caption: 'Add New Mahasiswa',
      },
    ],
    technologies: [
      { name: 'VueJs', icon: <Vue key="vue" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Java', icon: <Java key="java" /> },
      { name: 'Oracle', icon: <Oracle key="oracle" /> },
      { name: 'Spring Boot', icon: <SpringBoot key="spring-boot" /> },
      { name: 'Postman', icon: <Postman key="postman" /> },
    ],
    github: 'https://github.com/BenedictoGeraldo/mahasiswa-crud-vue',
    status: 'completed',
    type: 'featured',
    details: false,
    projectDetailsPageSlug: '/projects/stqa-evershop',
  },

  {
    title: 'STARK',
    tagline: 'Better Teams Start With STARK',
    date: 'January 06, 2025',
    fullDescription:
      'STARK is a comprehensive fullstack project management platform designed to streamline task tracking, manage strict deadlines, and facilitate seamless team collaboration. With dedicated dashboards for users and admins, STARK transforms chaotic workflows into organized success.',
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
    title: 'Sinemaku',
    tagline: 'Your Personal Movie Discovery Platform',
    date: 'February 15, 2024',
    fullDescription:
      'Sinemaku is a comprehensive movie discovery platform that enables users to explore films, view detailed information, and manage personal watchlists. Built with Next.js and Tailwind CSS for a highly responsive frontend, it leverages NestJS and PostgreSQL to provide robust backend services and smooth user experiences.',
    description:
      'Sinemaku is a movie discovery platform that lets users explore films, search for titles, and manage a personal watchlist.',
    image: '/project/sinemaku/sinemaku-thumbnail.png',
    link: 'https://sinemaku-bybeneben.vercel.app/',
    screenshots: [
      {
        src: '/project/sinemaku/sinemaku-thumbnail.png',
        caption: 'Home Page',
      },
      {
        src: '/project/sinemaku/login-page.png',
        caption: 'Login Page',
      },
      {
        src: '/project/sinemaku/search-page.png',
        caption: 'Search Page',
      },
      {
        src: '/project/sinemaku/watchlist-page.png',
        caption: 'Watchlist Page',
      },
    ],
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
      { name: 'Axios', icon: <Axios key="axios" /> },
      { name: 'NestJs', icon: <NestJs key="nestjs" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'Postman', icon: <Postman key="postman" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Replit', icon: <Replit key="replit" /> },
    ],
    github: 'https://github.com/BenedictoGeraldo/sinemaku-fe.git',
    status: 'completed',
    type: 'featured',
    details: false,
    projectDetailsPageSlug: '/projects/sinemaku',
  },

  {
    title: 'Can Do',
    description:
      'A clean and minimal to-do list app enhanced with AI assistance to keep you focused and productive',
    image: '/project/can-do/can-do-thumbnail.png',
    link: 'https://can-do-bybeneben.netlify.app/',
    screenshots: [
      {
        src: '/project/can-do/can-do-thumbnail.png',
        caption: 'Landing Page',
      },
      {
        src: '/project/can-do/can-do-2.png',
        caption: 'To Do List Page',
      },
    ],
    technologies: [
      { name: 'NextJS', icon: <NextJs key="nextjs" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Netlify', icon: <Netlify key="netlify" /> },
      { name: 'Axios', icon: <Axios key="axios" /> },
    ],
    github: 'https://github.com/BenedictoGeraldo/mini-todolist.git',
    status: 'completed',
    type: 'featured',
    details: false,
    projectDetailsPageSlug: '/projects/can-do',
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

  // {
  //   title: 'MyHR',
  //   description:
  //     'An enterprise-scale information system focusing on modular architecture, scalability, and clean design',
  //   image: '/project/myhr-thumbnail.png',
  //   link: null,
  //   technologies: [
  //     { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
  //     { name: 'NextJs', icon: <NextJs key="nextjs" /> },
  //     { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
  //     { name: 'Axios', icon: <Axios key="axios" /> },
  //     { name: 'NestJs', icon: <NestJs key="nestjs" /> },
  //     { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
  //     { name: 'Postman', icon: <Postman key="postman" /> },
  //     { name: 'Docker', icon: <Docker key="docker" /> },
  //   ],
  //   github: null,
  //   status: 'ongoing',
  //   type: 'featured',
  //   details: false,
  //   projectDetailsPageSlug: '/projects/myhr',
  // },

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
