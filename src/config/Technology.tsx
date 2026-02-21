import CSS from '@/components/technologies/CSS';
import Cypress from '@/components/technologies/Cypress';
import Docker from '@/components/technologies/Docker';
import GithubAction from '@/components/technologies/GithubAction';
import Html from '@/components/technologies/Html';
import InfinityFree from '@/components/technologies/InfinityFree';
import JavaScript from '@/components/technologies/JavaScript';
import Jest from '@/components/technologies/Jest';
import Laravel from '@/components/technologies/Laravel';
import MongoDB from '@/components/technologies/MongoDB';
import MySQL from '@/components/technologies/MySQL';
import NextJs from '@/components/technologies/NextJs';
import Php from '@/components/technologies/Php';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import ReactIcon from '@/components/technologies/ReactIcon';
import SonarQube from '@/components/technologies/SonarQube';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import WordPress from '@/components/technologies/WordPress';
import Zap from '@/components/technologies/Zap';

export const technologyConfig = {
  categories: [
    {
      title: 'Frontend Foundation',
      technologies: [
        {
          name: 'HTML',
          component: Html,
          href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        },
        {
          name: 'CSS',
          component: CSS,
          href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        },
        {
          name: 'Tailwind CSS',
          component: TailwindCss,
          href: 'https://tailwindcss.com/',
        },
      ],
    },
    {
      title: 'Programming Languages',
      technologies: [
        {
          name: 'JavaScript',
          component: JavaScript,
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: 'TypeScript',
          component: TypeScript,
          href: 'https://www.typescriptlang.org/',
        },
        {
          name: 'PHP',
          component: Php,
          href: 'https://www.php.net/',
        },
      ],
    },
    {
      title: 'Frontend Frameworks',
      technologies: [
        {
          name: 'React',
          component: ReactIcon,
          href: 'https://react.dev/',
        },
        {
          name: 'Next.js',
          component: NextJs,
          href: 'https://nextjs.org/',
        },
      ],
    },
    {
      title: 'Backend & CMS',
      technologies: [
        {
          name: 'Laravel',
          component: Laravel,
          href: 'https://laravel.com/',
        },
        {
          name: 'WordPress',
          component: WordPress,
          href: 'https://wordpress.org/',
        },
      ],
    },
    {
      title: 'Databases',
      technologies: [
        {
          name: 'MySQL',
          component: MySQL,
          href: 'https://www.mysql.com/',
        },
        {
          name: 'PostgreSQL',
          component: PostgreSQL,
          href: 'https://www.postgresql.org/',
        },
        {
          name: 'MongoDB',
          component: MongoDB,
          href: 'https://www.mongodb.com/',
        },
      ],
    },
    {
      title: 'Quality Assurance & CI/CD',
      technologies: [
        {
          name: 'Cypress',
          component: Cypress,
          href: 'https://cypress.io/',
        },
        {
          name: 'SonarQube',
          component: SonarQube,
          href: 'https://www.sonarqube.org/',
        },
        {
          name: 'Jest',
          component: Jest,
          href: 'https://jestjs.io/',
        },
        {
          name: 'OWASP ZAP',
          component: Zap,
          href: 'https://www.zaproxy.org/',
        },
        {
          name: 'Postman',
          component: Postman,
          href: 'https://www.postman.com/',
        },
        {
          name: 'Docker',
          component: Docker,
          href: 'https://www.docker.com/',
        },
        {
          name: 'Github Actions',
          component: GithubAction,
          href: 'https://github.com/features/actions',
        },
      ],
    },
    {
      title: 'Deployment & Hosting',
      technologies: [
        {
          name: 'Vercel',
          component: Vercel,
          href: 'https://vercel.com/',
        },
        {
          name: 'InfinityFree',
          component: InfinityFree,
          href: 'https://www.infinityfree.com/',
        },
      ],
    },
  ],
};
