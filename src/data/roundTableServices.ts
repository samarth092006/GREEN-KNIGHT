export interface KnightService {
  id: string;
  number: string;
  name: string;
  shortName: string;
  slug: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export const roundTableServices: KnightService[] = [
  {
    id: "ai-solutions",
    number: "01",
    name: "AI Solutions",
    shortName: "AI",
    slug: "/services/ai-solutions",
    description:
      "Enterprise AI systems designed for intelligent automation, decision support, custom predictive models, and modern autonomous digital operations.",
    iconName: "Brain",
    highlights: ["Custom LLMs & Agents", "Predictive Analytics", "Computer Vision"],
  },
  {
    id: "software-development",
    number: "02",
    name: "Software Development",
    shortName: "Software",
    slug: "/services/software-development",
    description:
      "High-performance custom software engineering, scalable web platforms, and mobile enterprise applications built with modern architectures.",
    iconName: "Code2",
    highlights: ["Full-Stack Engineering", "API & Microservices", "Mobile & Web Apps"],
  },
  {
    id: "cloud-solutions",
    number: "03",
    name: "Cloud Solutions",
    shortName: "Cloud",
    slug: "/services/cloud-solutions",
    description:
      "Secure multi-cloud migrations, serverless architectures, Kubernetes orchestration, and continuous cloud optimization for resilient scaling.",
    iconName: "Cloud",
    highlights: ["Cloud Architecture", "DevOps & CI/CD", "Serverless & Containers"],
  },
  {
    id: "cybersecurity",
    number: "04",
    name: "Cybersecurity",
    shortName: "Security",
    slug: "/services/cybersecurity",
    description:
      "Robust cybersecurity defense, Zero Trust access frameworks, automated threat detection, and continuous compliance monitoring.",
    iconName: "ShieldCheck",
    highlights: ["Zero Trust Architecture", "Threat Detection", "Compliance Guardrails"],
  },
  {
    id: "digital-transformation",
    number: "05",
    name: "Digital Transformation",
    shortName: "Digital",
    slug: "/services/digital-transformation",
    description:
      "End-to-end digital modernization replacing legacy systems with modern cloud, AI, and workflow automation solutions.",
    iconName: "Zap",
    highlights: ["Legacy Modernization", "Process Automation", "Digital Ecosystems"],
  },
  {
    id: "erp-solutions",
    number: "06",
    name: "ERP Solutions",
    shortName: "ERP",
    slug: "/services/erp-solutions",
    description:
      "Tailored enterprise resource planning implementations and data integrations connecting operations, finance, supply chain, and HR.",
    iconName: "Cog",
    highlights: ["ERP Implementation", "System Integration", "Operational Analytics"],
  },
  {
    id: "it-consulting",
    number: "07",
    name: "IT Consulting",
    shortName: "Consulting",
    slug: "/services/it-consulting",
    description:
      "Strategic technology advisement, enterprise architecture roadmaps, technical audit, and executive digital leadership.",
    iconName: "Lightbulb",
    highlights: ["Technology Roadmaps", "Architecture Audit", "Executive Advisory"],
  },
  {
    id: "data-analytics",
    number: "08",
    name: "Data Analytics",
    shortName: "Analytics",
    slug: "/services/data-analytics",
    description:
      "Transform raw corporate data into actionable business intelligence through real-time data pipelines, data warehouses, and interactive dashboards.",
    iconName: "BarChart2",
    highlights: ["Data Warehousing", "Real-Time Dashboards", "BI Pipelines"],
  },
];
