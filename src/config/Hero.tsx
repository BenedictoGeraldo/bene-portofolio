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
  title: 'Junior Web developer.',
  avatar: '/assets/logo.jpg',

  // Description Configuration
  description: {
    template:
      'Web Developer focused on developing modern, scalable, and maintainable applications with strong attention to system architecture, performance, and user experience. Experienced in developing web-based systems from planning and implementation to deployment to help solve user problems effectively.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/assets/CV.pdf',
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
