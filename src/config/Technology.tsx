import CSS from '@/components/technologies/CSS';
import Docker from '@/components/technologies/Docker';
import Express from '@/components/technologies/Express';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import Jest from '@/components/technologies/Jest';
import Laravel from '@/components/technologies/Laravel';
import MongoDB from '@/components/technologies/MongoDB';
import MySQL from '@/components/technologies/MySQL';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import Php from '@/components/technologies/Php';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import ReactIcon from '@/components/technologies/ReactIcon';
import SpringBoot from '@/components/technologies/SpringBoot';
import TailwindCss from '@/components/technologies/TailwindCss';
import TanStack from '@/components/technologies/TanStack';
import TypeScript from '@/components/technologies/TypeScript';

import Java from '../components/technologies/Java';
import Shadcn from '../components/technologies/Shadcn';
import Vue from '../components/technologies/vue';

export const technologyConfig = {
  categories: [
    {
      title: 'Frontend Foundation',
      technologies: [
        {
          name: 'HTML',
          component: Html,
        },
        {
          name: 'CSS',
          component: CSS,
        },
        {
          name: 'Tailwind CSS',
          component: TailwindCss,
        },
        {
          name: 'Shadcn UI',
          component: Shadcn,
        },
        {
          name: 'TanStack',
          component: TanStack,
        },
      ],
    },
    {
      title: 'Programming Languages',
      technologies: [
        {
          name: 'JavaScript',
          component: JavaScript,
        },
        {
          name: 'TypeScript',
          component: TypeScript,
        },
        {
          name: 'Java',
          component: Java,
        },
        {
          name: 'PHP',
          component: Php,
        },
      ],
    },
    {
      title: 'Frontend Frameworks',
      technologies: [
        {
          name: 'React',
          component: ReactIcon,
        },
        {
          name: 'Next.js',
          component: NextJs,
        },
        {
          name: 'Vue.js',
          component: Vue,
        },
      ],
    },
    {
      title: 'Backend Frameworks',
      technologies: [
        {
          name: 'Express.Js',
          component: Express,
        },
        {
          name: 'NestJs',
          component: NestJs,
        },
        {
          name: 'Spring Boot',
          component: SpringBoot,
        },
        {
          name: 'Laravel',
          component: Laravel,
        },
      ],
    },
    {
      title: 'Databases',
      technologies: [
        {
          name: 'MySQL',
          component: MySQL,
        },
        {
          name: 'PostgreSQL',
          component: PostgreSQL,
        },
        {
          name: 'MongoDB',
          component: MongoDB,
        },
      ],
    },
    {
      title: 'Others',
      technologies: [
        {
          name: 'Postman',
          component: Postman,
        },
        {
          name: 'Docker',
          component: Docker,
        },
        {
          name: 'Jest',
          component: Jest,
        },
      ],
    },
  ],
};
