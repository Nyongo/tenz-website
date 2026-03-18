export type ServiceItem = {
  title: string;
  slug: string;
  description?: string;
  image?: string;
  highlights?: string[];
};

export type ServiceCategory = {
  title: string;
  slug: string;
  description?: string;
  items: ServiceItem[];
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const defaultImage = "/images/services/placeholder.svg";

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Ray Services",
    slug: "ray-services",
    description: "Services to keep your business running smoothly.",
    items: [
      {
        title: "Project Management",
        slug: slugify("Project Management"),
        description:
          "Delivery oversight, roadmap planning, and stakeholder alignment.",
        image: defaultImage,
      },
      {
        title: "Technical Writing",
        slug: slugify("Technical Writing"),
        description:
          "Clear docs, proposals, and technical narratives that stakeholders love.",
        image: defaultImage,
      },
      {
        title: "Resume Writing",
        slug: slugify("Resume Writing"),
        description:
          "Position yourself with a resume that reflects your achievements and impact.",
        image: defaultImage,
      },
      {
        title: "Communications Consultancy",
        slug: slugify("Communications Consultancy"),
        description:
          "Crafting messages, CRMs, and processes that keep teams aligned.",
        image: defaultImage,
      },
      {
        title: "Administrative Support",
        slug: slugify("Administrative Support"),
        description:
          "Operational consistency through coordinated scheduling, tracking, and execution.",
        image: defaultImage,
      },
      {
        title: "Event Management & Production",
        slug: slugify("Event Management & Production"),
        description:
          "Run workshops, launches, and gatherings with smooth logistics and follow-up.",
        image: defaultImage,
      },
    ],
  },
  {
    title: "Software & Development",
    slug: "software-development",
    description: "Full-stack development and architecture support.",
    items: [
      {
        title: "Software & Web Development",
        slug: slugify("Software & Web Development"),
        description:
          "From prototypes to production, build web experiences that scale.",
        image: defaultImage,
      },
      {
        title: "Custom Web Application Development",
        slug: slugify("Custom Web Application Development"),
        description: "Bespoke solutions for your unique business requirements.",
        image: defaultImage,
      },
      {
        title: "Mobile App Development",
        slug: slugify("Mobile App Development"),
        description:
          "Cross-platform experiences that people enjoy using every day.",
        image: defaultImage,
      },
      {
        title: "API Design & Development",
        slug: slugify("API Design & Development"),
        description:
          "Robust APIs that power integrations and scale alongside your product.",
        image: defaultImage,
      },
      {
        title: "Database Design & Architecture",
        slug: slugify("Database Design & Architecture"),
        description:
          "Data models and infrastructure that support reliable, fast queries.",
        image: defaultImage,
      },
      {
        title: "Technical Consulting",
        slug: slugify("Technical Consulting"),
        description:
          "Advisory sessions to help you choose the right architecture and tools.",
        image: defaultImage,
      },
      {
        title: "Software Architecture & System Design",
        slug: slugify("Software Architecture & System Design"),
        description:
          "Design systems with ownership, observability, and evolution in mind.",
        image: defaultImage,
      },
      {
        title: "Technology Stack Advisory",
        slug: slugify("Technology Stack Advisory"),
        description:
          "Select the right tooling and platforms for long-term success.",
        image: defaultImage,
      },
      {
        title: "Code Review Auditing",
        slug: slugify("Code Review Auditing"),
        description:
          "Identify risky patterns and suggest improvements for maintainability.",
        image: defaultImage,
      },
      {
        title: "Legacy System Modernization",
        slug: slugify("Legacy System Modernization"),
        description:
          "Modernize without rewriting everything—incremental, risk-aware upgrades.",
        image: defaultImage,
      },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    slug: "devops-infrastructure",
    description: "Cloud, CI/CD, and infrastructure automation.",
    items: [
      {
        title: "Cloud Solutions & Migrations (AWS, GCP, Azure)",
        slug: slugify("Cloud Solutions & Migrations"),
        description:
          "Move workloads to cloud safely with cost and performance alignment.",
        image: defaultImage,
      },
      {
        title: "CI/CD Pipeline Setup",
        slug: slugify("CI/CD Pipeline Setup"),
        description:
          "Automated build and deploy pipelines that reduce manual friction.",
        image: defaultImage,
      },
      {
        title: "Infrastructure as Code",
        slug: slugify("Infrastructure as Code"),
        description:
          "Repeatable, versioned infrastructure built with Terraform, Pulumi, or similar.",
        image: defaultImage,
      },
    ],
  },
  {
    title: "Data & Integrations",
    slug: "data-integrations",
    description: "Connecting systems and unlocking insights.",
    items: [
      {
        title: "Third-Party API Integrations",
        slug: slugify("Third-Party API Integrations"),
        description:
          "Connect the systems you rely on with robust integration patterns.",
        image: defaultImage,
      },
      {
        title: "Data Engineering & Pipeline Development",
        slug: slugify("Data Engineering & Pipeline Development"),
        description:
          "Reliable pipelines that move data where it needs to go with confidence.",
        image: defaultImage,
      },
      {
        title: "Business Intelligence & Reporting",
        slug: slugify("Business Intelligence & Reporting"),
        description:
          "Actionable dashboards and reports for better decision making.",
        image: defaultImage,
      },
      {
        title: "Support & Maintenance",
        slug: slugify("Support & Maintenance"),
        description:
          "Ongoing support to keep systems running and quietly improving.",
        image: defaultImage,
      },
      {
        title: "Technical Due Diligence",
        slug: slugify("Technical Due Diligence"),
        description:
          "Assess architecture, processes, and risk ahead of investment or acquisition.",
        image: defaultImage,
      },
      {
        title: "Performance Optimisation",
        slug: slugify("Performance Optimisation"),
        description:
          "Find and fix bottlenecks to make systems run faster and cheaper.",
        image: defaultImage,
      },
      {
        title: "Ongoing Software Maintenance & Support",
        slug: slugify("Ongoing Software Maintenance & Support"),
        description:
          "Keep software healthy with patching, updates, and preventative work.",
        image: defaultImage,
      },
    ],
  },
  {
    title: "Ready Solutions",
    slug: "ready-solutions",
    description: "Pre-built solutions to speed up delivery.",
    items: [
      {
        title: "Core Banking Solution (MicroFinance, Banks & Saccos)",
        slug: slugify("Core Banking Solution"),
        description:
          "A full banking backoffice platform designed for lending operations.",
        image: defaultImage,
      },
      {
        title: "BulkSMS",
        slug: slugify("BulkSMS"),
        description:
          "High-volume messaging systems with delivery reporting and templates.",
        image: defaultImage,
      },
      {
        title: "Accounting Software",
        slug: slugify("Accounting Software"),
        description:
          "Ledger and reporting tooling designed for cashflow visibility.",
        image: defaultImage,
      },
      {
        title: "Reconciliation Software",
        slug: slugify("Reconciliation Software"),
        description:
          "Automated matching and exception handling for transactions.",
        image: defaultImage,
      },
      {
        title: "DigiKid (Student Tracking)",
        slug: slugify("DigiKid"),
        description:
          "A student tracking platform to simplify attendance and progress metrics.",
        image: defaultImage,
      },
    ],
  },
];
