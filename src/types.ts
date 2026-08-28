export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  role: string[];
  status: string;
  category: 'AI Product' | 'Digital Growth' | 'Brand & Creative' | 'Travel Marketing';
  period: string;
  summary: string;
  featured: boolean;
  highlightMetric?: string;
  tags: string[];
  problem: string;
  approach: string;
  responsibilities: string[];
  technology: {
    category: string;
    items: string[];
  }[];
  architecture: {
    title: string;
    description: string;
    flowSteps: { step: string; detail: string; icon: string }[];
  };
  productThinking: {
    title: string;
    points: string[];
  };
  caseStudyDetails: {
    research: string[];
    ideation: string[];
    userJourneys: { user: string; need: string; outcome: string }[];
    uiDecisions: { title: string; decision: string; impact: string }[];
    developmentHighlights: string[];
    testingAndValidation: string[];
    reflectionAndLessons: string[];
  };
}

export interface CreativeItem {
  id: string;
  title: string;
  client: 'Flyibat Travel' | 'Steadfast International' | 'XSight Entertainment' | 'KJW25MEDIA' | 'Other Work';
  group: string; // e.g. 'Design Projects', 'Special Creatives', 'Special Offer Designs', 'Customer Service Week', 'Product Designs', 'Inspirational Graphics', 'Wallpapers', 'Celebration Designs'
  description: string;
  year: string;
  tools: string[];
  mediaType: 'image' | 'video';
  mediaUrl: string;
  thumbnailUrl?: string;
  galleryImages?: string[];
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide';
  gradientTheme?: string;
  deliverables?: string[];
  keyInsight?: string;
  youtubeId?: string;
}

export interface MotionProject {
  id: string;
  title: string;
  client: string;
  category: 'Motion Ad' | 'Steadfast Motion Effects' | 'Promotional Motion' | 'Brand Animation' | 'Interactive Game';
  description: string;
  tools: string[];
  duration?: string;
  year: string;
  videoUrl?: string;
  youtubeId?: string;
  posterUrl?: string;
  posterGradient: string;
  highlight: string;
}

export interface CareerMilestone {
  stage: string;
  title: string;
  period: string;
  description: string;
  keySkills: string[];
  iconName: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  actions: string[];
  deliverables: string[];
  tools: string[];
}

export interface Article {
  id: string;
  title: string;
  readTime: string;
  date: string;
  category: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  relationship: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    highlight: string;
  }[];
}

export type UserRole = 'admin' | 'specialist' | 'applicant';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  title: string;
}

export interface ApplicantContext {
  id: string;
  applicantName: string;
  applicantEmail: string;
  country: string;
  university: string;
  programme: string;
  applicationType: 'Study Abroad' | 'Visa Processing' | 'Vacation & Travel' | 'Work & Employment';
  status: 'Drafting' | 'In Review' | 'Verified' | 'Submitted';
  dateAdded: string;
}

export type DocCategory = 'study_abroad' | 'visa' | 'travel' | 'cv' | 'moi' | 'itinerary';

export interface DocTool {
  id: string;
  name: string;
  category: DocCategory;
  description: string;
  iconName: string;
}
