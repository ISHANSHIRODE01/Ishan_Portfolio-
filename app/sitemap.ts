import { MetadataRoute } from 'next';
import { projects } from '@/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ishanshirode.dev';
  
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...projectUrls,
  ];
}