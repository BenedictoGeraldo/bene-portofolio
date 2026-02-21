import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import Bun from '@/components/technologies/Bun';
import Cypress from '@/components/technologies/Cypress';
import JavaScript from '@/components/technologies/JavaScript';
import Jest from '@/components/technologies/Jest';
import Laravel from '@/components/technologies/Laravel';
import MongoDB from '@/components/technologies/MongoDB';
import MySQL from '@/components/technologies/MySQL';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import WordPress from '@/components/technologies/WordPress';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
  WordPress: WordPress,
  Laravel: Laravel,
  Cypress: Cypress,
  Jest: Jest,
  MySQL: MySQL,
};

export const heroConfig = {
  // Personal Information
  name: 'Benedicto Geraldo Doa Dawa',
  title: 'Web developer & QA Enthusiast.',
  avatar: '/assets/logo.jpg',

  // Skills Configuration
  skills: [
    {
      name: 'Typescript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Wordpress',
      href: 'https://wordpress.org/',
      component: 'WordPress',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
    {
      name: 'Laravel',
      href: 'https://laravel.com/',
      component: 'Laravel',
    },
    {
      name: 'MySQL',
      href: 'https://www.mysql.com/',
      component: 'MySQL',
    },
    {
      name: 'Cypress',
      href: 'https://www.cypress.io/',
      component: 'Cypress',
    },
    {
      name: 'Jest',
      href: 'https://jestjs.io/',
      component: 'Jest',
    },
  ],

  // Description Configuration
  description: {
    template:
      'Web developer and QA enthusiast focused on delivering reliable, scalable, and well-tested applications. I combine modern web technologies such as {skills:1}, {skills:2}, and {skills:5} with automated testing using {skills:7} and {skills:8} to ensure consistent quality, stability, and performance.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/assets/cv.pdf',
      target: '_blank',
      icon: 'CV',
    },
    // {
    //   variant: 'default',
    //   text: 'Get in touch',
    //   href: '/contact',
    //   icon: 'Chat',
    // },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/benedicto-geraldo/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/BenedictoGeraldo',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:geraldodawa@gmail.com',
    icon: <Mail />,
  },
];
