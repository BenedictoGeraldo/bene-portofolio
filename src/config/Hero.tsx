/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import Laravel from '@/components/technologies/Laravel';
import MongoDB from '@/components/technologies/MongoDB';
import MySQL from '@/components/technologies/MySQL';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
// Technology Components
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
  MySQL: MySQL,
};

export const heroConfig = {
  // Personal Information
  name: 'Benedicto Geraldo Doa Dawa',
  title: 'Junior web developer.',
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
  ],

  // Description Configuration
  description: {
    template:
      'I build interactive web apps using {skills:1}, {skills:5}, {skills:2}, {skills:3} and {skills:6} I enjoy crafting clean UI, developing reliable backend systems, and continuously improving my skills. I am passionate about learning new technologies and staying up-to-date with industry trends',
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
