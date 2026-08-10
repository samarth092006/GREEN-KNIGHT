export interface KeyFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface Benefit {
  title: string;
  description: string;
  metric: string;
  category: "ROI" | "Cost Reduction" | "Scalability" | "Performance" | "Security" | "Automation" | "Time Saving";
}

export interface TechItem {
  name: string;
  category: string;
  description: string;
  iconName?: string;
}

export interface IndustryUseCase {
  industry: "Healthcare" | "Finance" | "Retail" | "Education" | "Government" | "Manufacturing" | "Logistics" | "E-Commerce" | "Insurance";
  title: string;
  useCase: string;
  impact: string;
}

export interface Differentiator {
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  phase: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface CaseStudyData {
  clientType: string;
  title: string;
  problem: string;
  solution: string;
  technologiesUsed: string[];
  businessResults: {
    label: string;
    value: string;
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  color: string;
  badge: string;
  heroStats: { label: string; value: string }[];
  overview: {
    summary: string;
    detailedExplanation: string;
    businessProblemsSolved: string[];
    architectureOverview: string;
    enterpriseUseCases: string[];
  };
  features: KeyFeature[];
  benefits: Benefit[];
  technologies: TechItem[];
  industries: IndustryUseCase[];
  whyChooseUs: Differentiator[];
  process: ProcessStep[];
  caseStudy: CaseStudyData;
  faqs: FAQItem[];
  relatedSlugs: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

import { aiSolutions } from "./ai-solutions";
import { softwareDevelopment } from "./software-development";
import { cloudSolutions } from "./cloud-solutions";
import { cybersecurity } from "./cybersecurity";
import { digitalTransformation } from "./digital-transformation";
import { erpSolutions } from "./erp-solutions";
import { itConsulting } from "./it-consulting";
import { dataAnalytics } from "./data-analytics";

export const servicesMap: Record<string, ServiceData> = {
  "ai-solutions": aiSolutions,
  "software-development": softwareDevelopment,
  "cloud-solutions": cloudSolutions,
  "cybersecurity": cybersecurity,
  "digital-transformation": digitalTransformation,
  "erp-solutions": erpSolutions,
  "it-consulting": itConsulting,
  "data-analytics": dataAnalytics,
};

export const allServices: ServiceData[] = Object.values(servicesMap);

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesMap[slug];
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
  return slugs.map((slug) => servicesMap[slug]).filter(Boolean);
}
