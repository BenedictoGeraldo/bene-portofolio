import { getPublishedProjectCaseStudies } from '@/lib/project';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://benedicto-geraldo-doa-dawa.vercel.app';

  // Base routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];

  // Projects
  const caseStudies = getPublishedProjectCaseStudies();
  const projectRoutes: MetadataRoute.Sitemap = caseStudies.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...routes, ...projectRoutes];
}
