import CSS from '@/components/technologies/CSS';
import Html from '@/components/technologies/Html';
import InfinityFree from '@/components/technologies/InfinityFree';
import JavaScript from '@/components/technologies/JavaScript';
import Laravel from '@/components/technologies/Laravel';
import MongoDB from '@/components/technologies/MongoDB';
import MySQL from '@/components/technologies/MySQL';
import NextJs from '@/components/technologies/NextJs';
import Php from '@/components/technologies/Php';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import WordPress from '@/components/technologies/WordPress';

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
