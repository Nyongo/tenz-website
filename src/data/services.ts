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
    title: "Digital Banking Products",
    slug: "digital-banking-products",
    description: "Secure digital channels for modern banking operations.",
    items: [
      {
        title: "Mobile Banking",
        slug: slugify("Mobile Banking"),
        description:
          "Customer-friendly mobile banking experiences connected to core systems.",
        image: defaultImage,
      },
      {
        title: "Internet Banking",
        slug: slugify("Internet Banking"),
        description:
          "Web banking portals for retail and business customers.",
        image: defaultImage,
      },
      {
        title: "Agency Banking",
        slug: slugify("Agency Banking"),
        description:
          "Agent channel tools for onboarding, transactions, and settlements.",
        image: defaultImage,
      },
      {
        title: "WhatsApp Banking",
        slug: slugify("WhatsApp Banking"),
        description:
          "Conversational banking journeys on WhatsApp for always-on service.",
        image: defaultImage,
      },
      {
        title: "Payments Gateways",
        slug: slugify("Payments Gateways"),
        description:
          "Flexible payment orchestration for digital products and channels.",
        image: defaultImage,
      },
    ],
  },
  {
    title: "VAS Services",
    slug: "vas-services",
    description: "Value-added communication and customer engagement services.",
    items: [
      {
        title: "Bulk SMS",
        slug: slugify("Bulk SMS"),
        description:
          "Enterprise-scale SMS distribution with campaign and alert support.",
        image: defaultImage,
      },
      {
        title: "USSD Solutions",
        slug: slugify("USSD Solutions"),
        description: "USSD workflows for onboarding, servicing, and transaction requests.",
        image: defaultImage,
      },
      {
        title: "Bulk Email Solution",
        slug: slugify("Bulk Email Solution"),
        description:
          "Reliable high-volume email communication for operations and campaigns.",
        image: defaultImage,
      },
      {
        title: "Airtime & Data Distribution",
        slug: slugify("Airtime and Data Distribution"),
        description:
          "Automated airtime and data voucher distribution capabilities.",
        image: defaultImage,
      },
      {
        title: "Chatbots",
        slug: slugify("Chatbots"),
        description:
          "Conversational bots for service requests, FAQs, and lead qualification.",
        image: defaultImage,
      },
      {
        title: "Social Media Integration",
        slug: slugify("Social Media Integration"),
        description:
          "Unified customer engagement through integrated social touchpoints.",
        image: defaultImage,
      },
    ],
  },
  {
    title: "Other Custom Solutions",
    slug: "other-custom-solutions",
    description: "Tailored enterprise systems for financial and operational efficiency.",
    items: [
      {
        title: "Automated Reconciliation Solution",
        slug: slugify("Automated Reconciliation Solution"),
        description:
          "Automate transaction matching and exception handling for finance teams.",
        image: defaultImage,
      },
      {
        title: "Digital Loan Origination and Management Solution",
        slug: slugify("Digital Loan Origination and Management Solution"),
        description:
          "Digitize loan onboarding, approvals, disbursement, and repayment tracking.",
        image: defaultImage,
      },
      {
        title: "Agent Network Management Solution",
        slug: slugify("Agent Network Management Solution"),
        description:
          "Manage agent onboarding, monitoring, commissions, and settlements at scale.",
        image: defaultImage,
      },
      {
        title: "Digital Cash Management & Distribution Solutions",
        slug: slugify("Digital Cash Management and Distribution Solutions"),
        description:
          "Improve cash flow visibility and distribution operations.",
        image: defaultImage,
      },
      {
        title: "Automated Leasing Solution",
        slug: slugify("Automated Leasing Solution"),
        description:
          "Streamline lease lifecycle management from onboarding to collections.",
        image: defaultImage,
      },
      {
        title: "Finance & Accounting Module",
        slug: slugify("Finance and Accounting Module"),
        description:
          "Integrated finance operations, reporting, and controls for growing firms.",
        image: defaultImage,
      },
      {
        title: "Payroll and HR Solution",
        slug: slugify("Payroll and HR Solution"),
        description:
          "Automate payroll processing and human resource workflows.",
        image: defaultImage,
      },
    ],
  },
  {
    title: "Other Services",
    slug: "other-services",
    description: "Technology advisory and implementation support services.",
    items: [
      {
        title: "Website Development",
        slug: slugify("Website Development"),
        description:
          "Build modern, responsive websites with strong user experience.",
        image: defaultImage,
      },
      {
        title: "Technology Consulting",
        slug: slugify("Technology Consulting"),
        description:
          "Get strategic guidance for architecture, integrations, and digitization.",
        image: defaultImage,
      },
      {
        title: "Custom Solution Development",
        slug: slugify("Custom Solution Development"),
        description:
          "Develop bespoke systems around your organization's requirements.",
        image: defaultImage,
      },
      {
        title: "Hosting",
        slug: slugify("Hosting"),
        description:
          "Reliable deployment and hosting support for digital products.",
        image: defaultImage,
      },
      {
        title: "Technical Support",
        slug: slugify("Technical Support"),
        description:
          "Ongoing operational and technical assistance for business continuity.",
        image: defaultImage,
      },
    ],
  },
];
