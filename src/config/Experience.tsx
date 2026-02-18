export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website?: string;
  linkedin?: string;
  isCurrent: boolean;
}

export const experiences: Experience[] = [
  {
    company: 'Gereja Kalvari Lubang Buaya',
    position: 'IT Creative Team Member (Volunteer)',
    location: 'Remote',
    image: '/company/komsos-kalvari.png',
    description: [
      'Developed a full-stack website using Laravel framework named "Pelita" for church asset management',
      'Coordinated with IT Creative team members and other divisions to provide guidance and socialization to congregation',
    ],
    startDate: 'May 2025',
    endDate: 'Present',
    isCurrent: false,
  },
  {
    company: 'Ministry of Defense - Codification Center',
    position: 'Web Developer Intern',
    location: 'Jakarta, Indonesia',
    image: '/company/kemhan.png',
    description: [
      'Developed a full-stack website using Laravel framework to facilitate companies in obtaining NCAGE (NATO Commercial and Government Entity) code',
      'Responsible as the PIC for coordinating presentation materials, delivering project outcomes, and facilitating discussions with internal stakeholders to gather feedback for further system improvements',
    ],
    startDate: 'June 2025',
    endDate: 'August 2025',
    isCurrent: false,
  },
  {
    company: 'KSM Multimedia UPNVJ',
    position: 'Web Development Member',
    location: 'Jakarta, Indonesia',
    image: '/company/ksm-multimedia.png',
    description: [
      'Built a full-stack "Freelance Project Management System" using Next.js for Front-End and Express.js for Back-End',
      'Learned Docker usage to create consistent development environments that run seamlessly when moving to different environments',
      'Studied API design and consumption basics, including understanding HTTP status codes, methods, and implementing best practices for integrating Back-End API to Frontend',
    ],
    startDate: 'March 2025',
    endDate: 'December 2025',
    isCurrent: false,
  },
  {
    company: 'House Ilmu Indonesia',
    position: 'Head of Web Development (Volunteer)',
    location: 'Remote',
    image: '/company/logo-house-ilmu.jpg',
    description: [
      'Led a web development team of 5 members in planning, task distribution, and monitoring project progress until launch phase',
      'Responsible for 4 website projects in total since the beginning of tenure, two of which were full-stack projects',
      'Coordinated with Vice President of Technology to determine monthly division activity plans',
      'Maintained community website and ensured optimal performance',
      'Collaborated with other divisions such as marketing and research to build joint projects',
    ],
    startDate: 'August 2024',
    endDate: 'September 2025',
    isCurrent: false,
  },
];
