export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  process: { step: number; title: string; description: string }[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  year: number;
  budget: string;
  duration: string;
  description: string;
  results: string[];
  tags: string[];
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  projectType: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  author: string;
}
