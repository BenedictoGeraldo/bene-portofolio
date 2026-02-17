export type ProjectStatus = 'completed' | 'ongoing';
export type ProjectType = 'featured' | 'other';

export interface ScreenshotItem {
  src: string;
  caption: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  link?: string | null;
  technologies: { name: string; icon: React.ReactNode }[];
  github?: string | null;
  screenshots?: ScreenshotItem[];
  status: ProjectStatus;
  type: ProjectType;
  details?: boolean;
  projectDetailsPageSlug?: string;
}

export interface ProjectCaseStudyFrontmatter {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  timeline: string;
  role: string;
  team?: string;
  status: 'completed' | 'in-progress' | 'archived';
  featured: boolean;
  challenges?: string[];
  learnings?: string[];
  isPublished: boolean;
}

export interface ProjectCaseStudy {
  slug: string;
  frontmatter: ProjectCaseStudyFrontmatter;
  content: string;
}

export interface ProjectCaseStudyPreview {
  slug: string;
  frontmatter: ProjectCaseStudyFrontmatter;
}
