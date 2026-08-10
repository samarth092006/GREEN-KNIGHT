export interface TechFeature {
  title: string;
  description: string;
}

export interface BusinessBenefit {
  title: string;
  description: string;
}

export interface RelatedService {
  name: string;
  slug: string;
}

export interface TechnologyData {
  slug: string;
  name: string;
  category: string;
  categoryEmoji: string;
  shortIntro: string;
  overview: {
    description: string;
    importance: string;
    enterpriseUseCases: string[];
  };
  whyGreenKnightsUsesIt: string;
  keyFeatures: TechFeature[];
  businessBenefits: BusinessBenefit[];
  relatedServices: RelatedService[];
  relatedTechSlugs: string[];
}

export const technologiesData: Record<string, TechnologyData> = {
  python: {
    slug: "python",
    name: "Python",
    category: "Backend Development",
    categoryEmoji: "🐍",
    shortIntro: "The foundational language for artificial intelligence, asynchronous web backends, and enterprise data pipelines.",
    overview: {
      description: "Python is a high-level, interpreted programming language known for its clean syntax, extensive library ecosystem, and high developer productivity.",
      importance: "Python is the undisputed leader in artificial intelligence, machine learning, and data engineering, offering rich frameworks for enterprise automation.",
      enterpriseUseCases: [
        "Machine Learning Model Training & Fine-Tuning",
        "High-Performance Asynchronous Microservice APIs",
        "Automated Data Pipeline Processing & Analytics",
        "Enterprise Process Automation & Web Scraping",
      ],
    },
    whyGreenKnightsUsesIt: "Green Knights uses Python as the core engine for AI solution development, vector memory orchestration, and high-concurrency microservice architectures.",
    keyFeatures: [
      { title: "Rich AI Ecosystem", description: "Native integration with PyTorch, TensorFlow, NumPy, and Pandas." },
      { title: "High Developer Productivity", description: "Readable syntax accelerating time-to-market for enterprise apps." },
      { title: "Asynchronous Concurrency", description: "AsyncIO support for high-throughput non-blocking API backends." },
      { title: "Cross-Platform Portability", description: "Runs seamlessly across Docker containers, Linux servers, and cloud microservices." },
      { title: "Extensible Architecture", description: "Easy integration with low-level C/C++ libraries for performance-critical logic." },
      { title: "Enterprise Security", description: "Vast tooling ecosystem for static analysis and vulnerability scanning." },
    ],
    businessBenefits: [
      { title: "Accelerated Time-to-Market", description: "Rapid prototyping and deployment of complex business logic." },
      { title: "AI & ML Ready", description: "Seamless transition from AI research to production deployment." },
      { title: "Cost Optimization", description: "Reduced development hours and simplified long-term codebase maintenance." },
      { title: "Scalability", description: "Containerized microservice scalability handling high concurrency workloads." },
    ],
    relatedServices: [
      { name: "AI Solutions", slug: "ai-solutions" },
      { name: "Software Development", slug: "software-development" },
      { name: "Data Analytics", slug: "data-analytics" },
    ],
    relatedTechSlugs: ["fastapi", "django", "postgresql", "docker"],
  },

  openai: {
    slug: "openai",
    name: "OpenAI",
    category: "Artificial Intelligence",
    categoryEmoji: "🤖",
    shortIntro: "Frontier foundation models for artificial intelligence, automated reasoning, and natural language understanding.",
    overview: {
      description: "OpenAI delivers industry-leading large language models (GPT-4o) capable of multi-modal reasoning, text generation, and code synthesis.",
      importance: "Empowers enterprises to build intelligent virtual assistants, automated document analysis engines, and autonomous agent workflows.",
      enterpriseUseCases: [
        "Autonomous Customer Support & Intelligent Chatbots",
        "Multi-hundred Page Enterprise Document Analysis",
        "Automated Code Generation & Legacy Refactoring",
        "Predictive Business Intelligence & Summarization",
      ],
    },
    whyGreenKnightsUsesIt: "Green Knights leverages OpenAI models within secure, zero-data-retention enterprise perimeters for RAG systems and autonomous agent workflows.",
    keyFeatures: [
      { title: "Multi-Modal Reasoning", description: "Simultaneous processing of text, audio, image, and vision data." },
      { title: "Function Calling", description: "Deterministic connection to external APIs and enterprise SQL databases." },
      { title: "Custom Fine-Tuning", description: "Domain-specific model adaptations for specialized industry terminologies." },
      { title: "Structured JSON Output", description: "Guaranteed schema-compliant outputs for automated pipeline ingestion." },
      { title: "High Token Context", description: "128K+ token context windows for extensive document comprehension." },
    ],
    businessBenefits: [
      { title: "Operational Efficiency", description: "Automates repetitive cognitive tasks, reducing operational overhead." },
      { title: "Customer Engagement", description: "Delivers 24/7 human-grade conversational responses." },
      { title: "Data Insights", description: "Extracts actionable insights from unstructured enterprise data." },
    ],
    relatedServices: [
      { name: "AI Solutions", slug: "ai-solutions" },
      { name: "Digital Transformation", slug: "digital-transformation" },
    ],
    relatedTechSlugs: ["claude", "gemini", "langchain", "python"],
  },

  react: {
    slug: "react",
    name: "React",
    category: "Frontend Development",
    categoryEmoji: "⚛️",
    shortIntro: "The world's leading component-driven UI library for rendering dynamic, high-performance web applications.",
    overview: {
      description: "React is an open-source JavaScript library developed by Meta for building modular, interactive user interfaces with a declarative component model.",
      importance: "Powers modern enterprise web portals, ensuring fast rendering speeds and consistent user interface components.",
      enterpriseUseCases: [
        "Complex Enterprise Web Portals & Dashboards",
        "Single-Page Web Applications (SPAs)",
        "Cross-Platform Web & Mobile Interfaces",
        "Interactive Real-Time Analytics Views",
      ],
    },
    whyGreenKnightsUsesIt: "Green Knights uses React to build responsive, accessible, and fast web application interfaces tailored to enterprise specifications.",
    keyFeatures: [
      { title: "Component Architecture", description: "Encapsulated, reusable UI components for scalable codebases." },
      { title: "Virtual DOM", description: "High-speed DOM diffing algorithm for fluid user interactions." },
      { title: "Rich Ecosystem", description: "Extensive library ecosystem for state management and UI utilities." },
      { title: "Server Components", description: "Zero-bundle-size server components for faster page loads." },
      { title: "Strong Typing", description: "Seamless integration with TypeScript for type-safe UI engineering." },
    ],
    businessBenefits: [
      { title: "Superior User Experience", description: "Sub-second response times and fluid interactive transitions." },
      { title: "Maintainability", description: "Modular component architecture simplifies future feature updates." },
      { title: "Cross-Platform Code Reuse", description: "Shared component logic across web and mobile platforms." },
    ],
    relatedServices: [
      { name: "Software Development", slug: "software-development" },
      { name: "Digital Transformation", slug: "digital-transformation" },
    ],
    relatedTechSlugs: ["nextjs", "typescript", "tailwindcss", "framermotion"],
  },

  aws: {
    slug: "aws",
    name: "AWS Cloud",
    category: "Cloud & DevOps",
    categoryEmoji: "☁️",
    shortIntro: "Global cloud computing infrastructure powering resilient enterprise deployments, microservices, and databases.",
    overview: {
      description: "Amazon Web Services (AWS) offers a comprehensive suite of cloud services including elastic compute (EC2), Kubernetes (EKS), databases (RDS), and serverless functions.",
      importance: "Provides the global backbone for secure, multi-region cloud infrastructure with 99.999% uptime guarantees.",
      enterpriseUseCases: [
        "Multi-Region Kubernetes Microservice Hosting",
        "Serverless API Gateways & Lambda Workloads",
        "Enterprise Cloud Migration & Disaster Recovery",
        "Secure Big Data Warehousing & Object Storage",
      ],
    },
    whyGreenKnightsUsesIt: "Green Knights architects hardened AWS cloud perimeters with automated Infrastructure as Code (Terraform) and Zero Trust network access.",
    keyFeatures: [
      { title: "Global Availability Zones", description: "Multi-region redundancy ensuring high availability." },
      { title: "Auto-Scaling Groups", description: "Dynamic resource scaling based on live traffic demands." },
      { title: "Strict Compliance", description: "ISO 27001, SOC 2, FedRAMP, and HIPAA compliant cloud services." },
      { title: "Serverless Compute", description: "Event-driven Lambda execution for optimal cloud spending." },
      { title: "Managed Kubernetes", description: "Production EKS clusters with automated security patching." },
    ],
    businessBenefits: [
      { title: "High Availability", description: "Guaranteed 99.999% cloud infrastructure SLA." },
      { title: "Cost Efficiency", description: "Pay-as-you-go pricing model with automated cost optimization." },
      { title: "Enterprise Security", description: "Bank-grade cloud perimeters and continuous threat monitoring." },
    ],
    relatedServices: [
      { name: "Cloud Solutions", slug: "cloud-solutions" },
      { name: "Cybersecurity", slug: "cybersecurity" },
    ],
    relatedTechSlugs: ["docker", "kubernetes", "terraform", "azure"],
  },

  fastapi: {
    slug: "fastapi",
    name: "FastAPI",
    category: "Backend Development",
    categoryEmoji: "⚡",
    shortIntro: "High-performance asynchronous Python framework for building sub-5ms REST APIs and microservices.",
    overview: {
      description: "FastAPI is a modern, fast Python web framework based on standard Python type hints and Pydantic data validation.",
      importance: "Combines Node.js/Go execution speeds with Python's AI library ecosystem for enterprise API backends.",
      enterpriseUseCases: [
        "Sub-5ms Asynchronous REST API Gateways",
        "AI & Machine Learning Inference Microservices",
        "Real-Time Data Streaming & WebSocket Servers",
      ],
    },
    whyGreenKnightsUsesIt: "Green Knights builds high-concurrency microservice backends with FastAPI to serve real-time AI and database requests.",
    keyFeatures: [
      { title: "High Performance", description: "On par with NodeJS and Go execution speeds." },
      { title: "Auto Documentation", description: "Automatic interactive Swagger/OpenAPI documentation generation." },
      { title: "Data Validation", description: "Strict schema validation via Pydantic." },
      { title: "Async Native", description: "First-class support for async/await non-blocking I/O." },
    ],
    businessBenefits: [
      { title: "Sub-5ms Latency", description: "Rapid API responses for superior application performance." },
      { title: "Reduced Bugs", description: "Type safety prevents up to 40% of developer errors." },
    ],
    relatedServices: [
      { name: "Software Development", slug: "software-development" },
      { name: "AI Solutions", slug: "ai-solutions" },
    ],
    relatedTechSlugs: ["python", "postgresql", "docker", "redis"],
  },

  nextjs: {
    slug: "nextjs",
    name: "Next.js",
    category: "Frontend Development",
    categoryEmoji: "▲",
    shortIntro: "The premier React framework for server-side rendering, static site generation, and enterprise web platforms.",
    overview: {
      description: "Next.js provides server-side rendering (SSR), static site generation (SSG), and edge API routes for high-performance React web applications.",
      importance: "Ensures sub-second initial page load speeds, automatic image optimization, and superior search engine indexing.",
      enterpriseUseCases: [
        "Enterprise Marketing & Customer Portals",
        "High-Traffic E-Commerce Applications",
        "Dynamic Web Applications with Edge API Routes",
      ],
    },
    whyGreenKnightsUsesIt: "Green Knights utilizes Next.js App Router for enterprise web builds, ensuring maximum lighthouse performance and clean modular architecture.",
    keyFeatures: [
      { title: "App Router", description: "Layouts, server components, and streaming support." },
      { title: "Server-Side Rendering", description: "Dynamic server rendering for personalized user content." },
      { title: "Static Generation", description: "Pre-rendered static HTML for instant global CDN delivery." },
      { title: "Built-In Optimization", description: "Automatic font, image, and script optimizations." },
    ],
    businessBenefits: [
      { title: "SEO Advantage", description: "Superior search engine indexing and rankings." },
      { title: "Instant Load Times", description: "Pre-rendered static assets deliver sub-second response." },
    ],
    relatedServices: [
      { name: "Software Development", slug: "software-development" },
      { name: "Digital Transformation", slug: "digital-transformation" },
    ],
    relatedTechSlugs: ["react", "typescript", "tailwindcss", "framermotion"],
  },

  postgresql: {
    slug: "postgresql",
    name: "PostgreSQL",
    category: "Databases",
    categoryEmoji: "🐘",
    shortIntro: "Advanced open-source relational database supporting ACID transactions, JSONB, and pgvector AI embeddings.",
    overview: {
      description: "PostgreSQL is a powerful, open-source object-relational database system known for reliability, data integrity, and extensible feature sets.",
      importance: "Serves as the primary transactional data store for enterprise software, offering native vector search via pgvector.",
      enterpriseUseCases: [
        "Transactional Enterprise Core Storage",
        "AI Vector Embedding Search (pgvector)",
        "Complex Spatial & GIS Data Processing",
      ],
    },
    whyGreenKnightsUsesIt: "Green Knights relies on PostgreSQL as the primary relational database for enterprise platforms, ensuring transactional integrity and AI vector support.",
    keyFeatures: [
      { title: "ACID Compliance", description: "Guaranteed transactional reliability and data consistency." },
      { title: "pgvector Extension", description: "Native storage and search for AI vector embeddings." },
      { title: "JSONB Support", description: "Flexible semi-structured document queries inside SQL." },
      { title: "High Availability", description: "Streaming replication and multi-node standby failover." },
    ],
    businessBenefits: [
      { title: "Data Integrity", description: "Zero risk of data corruption or inconsistent states." },
      { title: "Cost Control", description: "Open-source licensing eliminates expensive vendor database fees." },
    ],
    relatedServices: [
      { name: "Software Development", slug: "software-development" },
      { name: "Data Analytics", slug: "data-analytics" },
    ],
    relatedTechSlugs: ["python", "fastapi", "docker", "supabase"],
  },

  docker: {
    slug: "docker",
    name: "Docker",
    category: "Cloud & DevOps",
    categoryEmoji: "🐋",
    shortIntro: "Containerization platform for packaging applications and dependencies into lightweight immutable containers.",
    overview: {
      description: "Docker automates software deployment inside isolated containers, ensuring identical execution environments across local machines and cloud servers.",
      importance: "Eliminates environment discrepancies and accelerates CI/CD release velocity.",
      enterpriseUseCases: [
        "Standardized Containerized Application Packaging",
        "Microservice Isolation & Local Development",
        "Automated CI/CD Deployment Workflows",
      ],
    },
    whyGreenKnightsUsesIt: "Green Knights packages all applications into Docker containers to guarantee environment consistency across staging and production.",
    keyFeatures: [
      { title: "Environment Isolation", description: "Consistent container execution regardless of underlying OS." },
      { title: "Lightweight Footprint", description: "Shares host OS kernel for minimal resource consumption." },
      { title: "Fast Startup", description: "Sub-second container spin-up times for rapid scaling." },
    ],
    businessBenefits: [
      { title: "Consistent Quality", description: "Eliminates deployment failures caused by environment bugs." },
      { title: "Cloud Portability", description: "Runs seamlessly across AWS, Azure, GCP, or on-premise servers." },
    ],
    relatedServices: [
      { name: "Cloud Solutions", slug: "cloud-solutions" },
      { name: "Software Development", slug: "software-development" },
    ],
    relatedTechSlugs: ["kubernetes", "aws", "terraform", "python"],
  },
};

// Fallback generator for technologies not explicitly listed in full detail
export function getTechnologyData(slug: string): TechnologyData {
  if (technologiesData[slug]) {
    return technologiesData[slug];
  }

  // Format slug to readable title (e.g., 'google-cloud' -> 'Google Cloud')
  const readableName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    slug,
    name: readableName,
    category: "Enterprise Technology",
    categoryEmoji: "⚙️",
    shortIntro: `${readableName} is an industry-standard technology utilized by Green Knights to build secure enterprise applications.`,
    overview: {
      description: `${readableName} provides essential architecture capabilities for high-performance enterprise systems.`,
      importance: `Empowers modern enterprises with reliable execution, scalability, and security standards.`,
      enterpriseUseCases: [
        `Enterprise Application Architecture with ${readableName}`,
        `Scalable Microservices & Data Pipelines`,
        `Secure Infrastructure & Cloud Deployments`,
      ],
    },
    whyGreenKnightsUsesIt: `Green Knights integrates ${readableName} into client tech stacks to ensure performance, security compliance, and long-term maintainability.`,
    keyFeatures: [
      { title: "Enterprise Scalability", description: "Engineered to support high-throughput corporate workloads." },
      { title: "Security Hardening", description: "Adheres to modern zero-trust cybersecurity specifications." },
      { title: "High Reliability", description: "Proven uptime stability across production environments." },
      { title: "Modular Architecture", description: "Seamless interoperability with cloud infrastructure." },
    ],
    businessBenefits: [
      { title: "Operational Efficiency", description: "Streamlines business workflows and reduces operational bottlenecks." },
      { title: "Risk Mitigation", description: "Enterprise-grade reliability and security protections." },
    ],
    relatedServices: [
      { name: "Software Development", slug: "software-development" },
      { name: "Cloud Solutions", slug: "cloud-solutions" },
    ],
    relatedTechSlugs: ["python", "aws", "docker", "react"],
  };
}

export const allTechSlugs = Object.keys(technologiesData);
