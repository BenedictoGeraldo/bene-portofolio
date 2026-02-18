export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  images: string[];
}

export const certifications: Certification[] = [
  {
    title: 'Head of Web Development',
    issuer: 'House Ilmu Indonesia',
    issueDate: 'September 2025',
    images: [
      '/certifications/ho-web-hi-1.png',
      '/certifications/ho-web-hi-2.png',
    ],
  },
  {
    title: 'Maju Bareng AI',
    issuer: 'Hacktiv8',
    issueDate: 'August 2025',
    images: ['/certifications/maju-bareng-ai.png'],
  },
  {
    title: 'Fundamental Junior Web Developer',
    issuer: 'KOMDIGI',
    issueDate: 'August 2025',
    images: [
      '/certifications/fundamental-junior-web-1.png',
      '/certifications/fundamental-junior-web-2.png',
    ],
  },
  {
    title: 'Intermediate Junior Web Developer',
    issuer: 'KOMDIGI',
    issueDate: 'August 2025',
    images: [
      '/certifications/intermediate-junior-web-1.png',
      '/certifications/intermediate-junior-web-2.png',
    ],
  },
  {
    title: 'Konsep Pemrograman',
    issuer: 'KOMDIGI',
    issueDate: 'August 2025',
    images: [
      '/certifications/konsep-pemrograman-1.png',
      '/certifications/konsep-pemrograman-2.png',
    ],
  },
  {
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding',
    issueDate: 'May 2024',
    images: [
      '/certifications/dasar-web-1.png',
      '/certifications/dasar-web-2.png',
      '/certifications/dasar-web-3.png',
    ],
  },
];
