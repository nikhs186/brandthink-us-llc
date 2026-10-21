export const site = {
  name: "BrandThink",
  email: "contact@brandthink.app",
  tagline: "Websites and web apps that make brands think bigger.",
  founded: 2022,
};

export type ServiceKey = "development" | "design" | "webapp" | "maintenance";

export type Service = {
  key: ServiceKey;
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  deliverables: string[];
  startingAt: string;
  timeline: string;
};

export const services: Service[] = [
  {
    key: "development",
    slug: "website-development",
    title: "Website Development",
    short: "Fast, secure and SEO-ready websites built on modern frameworks that scale with your business.",
    description:
      "We turn designs into lightning-fast, accessible websites using Next.js, React and headless CMS platforms. Every build is optimised for Core Web Vitals, search engines and easy content editing, so your team can update pages without calling a developer.",
    features: [
      "Next.js, React & headless CMS builds",
      "Core Web Vitals & performance tuning",
      "Technical SEO & structured data",
      "WCAG 2.1 accessibility standards",
      "Analytics, tracking & integrations",
    ],
    deliverables: ["Production-ready website", "CMS setup & training", "Launch checklist & handover docs"],
    startingAt: "₹2,50,000",
    timeline: "3–6 weeks",
  },
  {
    key: "design",
    slug: "website-design",
    title: "Website Design",
    short: "Strategic, conversion-focused UI/UX design that reflects your brand and turns visitors into customers.",
    description:
      "Great design starts with understanding your audience. We run discovery workshops, map user journeys and craft pixel-perfect interfaces in Figma, complete with a reusable design system so your brand stays consistent across every page.",
    features: [
      "Discovery workshops & UX research",
      "Wireframes & interactive prototypes",
      "High-fidelity UI in Figma",
      "Responsive, mobile-first layouts",
      "Reusable design systems",
    ],
    deliverables: ["Sitemap & wireframes", "Clickable Figma prototype", "Design system & style guide"],
    startingAt: "₹1,80,000",
    timeline: "2–4 weeks",
  },
  {
    key: "webapp",
    slug: "web-app-development",
    title: "Web App Development",
    short: "Custom web applications, dashboards and SaaS products engineered for reliability and growth.",
    description:
      "From MVPs to enterprise portals, we design and build web applications that solve real business problems. We handle the full stack: front-end, APIs, databases, authentication, payments and cloud deployment, with clean, documented code you fully own.",
    features: [
      "SaaS platforms & MVPs",
      "Customer portals & admin dashboards",
      "REST & GraphQL APIs",
      "Auth, payments & third-party integrations",
      "Cloud deployment on AWS, Vercel & GCP",
    ],
    deliverables: ["Scalable web application", "Source code & documentation", "CI/CD pipeline & hosting setup"],
    startingAt: "₹8,00,000",
    timeline: "8–16 weeks",
  },
  {
    key: "maintenance",
    slug: "website-maintenance",
    title: "Website Maintenance",
    short: "Proactive care plans that keep your site secure, updated, backed up and performing at its best.",
    description:
      "Launch day is just the beginning. Our care plans cover security patches, uptime monitoring, daily backups, performance checks and a bank of monthly development hours for content updates and small improvements.",
    features: [
      "24/7 uptime & security monitoring",
      "Daily off-site backups",
      "Plugin, framework & dependency updates",
      "Monthly performance reports",
      "Priority support & content edits",
    ],
    deliverables: ["Monthly health report", "Guaranteed response times", "Dedicated support channel"],
    startingAt: "₹14,999/mo",
    timeline: "Ongoing",
  },
];

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: "Website" | "Web App" | "Design" | "E-commerce";
  year: number;
  summary: string;
  results: string[];
  tags: string[];
  gradient: string;
  industry: string;
  location: string;
  duration: string;
  services: string[];
};

export const projects: Project[] = [
  {
    slug: "northpeak-outdoors",
    title: "A storefront built for the wild",
    client: "NorthPeak Outdoors",
    category: "E-commerce",
    year: 2025,
    summary:
      "Re-platformed an outdoor gear retailer to a headless Shopify storefront with blazing-fast product discovery.",
    results: ["+64% online revenue", "1.2s average load time"],
    tags: ["Next.js", "Shopify", "Tailwind"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    industry: "Retail & Outdoor Gear",
    location: "Denver, USA",
    duration: "10 weeks",
    services: ["Website Design", "Website Development", "Website Maintenance"],
  },
  {
    slug: "ledgerly",
    title: "Finance dashboard for growing teams",
    client: "Ledgerly",
    category: "Web App",
    year: 2025,
    summary:
      "Designed and built a real-time expense management SaaS with role-based access, approvals and bank sync.",
    results: ["3,000+ active companies", "40% faster month-end close"],
    tags: ["React", "Node.js", "PostgreSQL"],
    gradient: "from-indigo-500 via-violet-500 to-purple-600",
    industry: "Fintech / SaaS",
    location: "London, UK",
    duration: "16 weeks",
    services: ["Web App Development", "Website Design"],
  },
  {
    slug: "bloom-clinic",
    title: "A calmer way to book care",
    client: "Bloom Wellness Clinic",
    category: "Website",
    year: 2024,
    summary:
      "A warm, accessible website with online appointment booking and practitioner profiles for a multi-site clinic.",
    results: ["+120% online bookings", "AA accessibility score"],
    tags: ["Next.js", "Sanity CMS", "Calendly"],
    gradient: "from-rose-400 via-pink-500 to-fuchsia-500",
    industry: "Healthcare",
    location: "Toronto, Canada",
    duration: "6 weeks",
    services: ["Website Design", "Website Development"],
  },
  {
    slug: "urbanbrew",
    title: "Brand-led redesign for a coffee chain",
    client: "UrbanBrew Coffee",
    category: "Design",
    year: 2024,
    summary:
      "Full UX/UI redesign with a new design system, menu explorer and store locator for 28 locations.",
    results: ["+38% time on site", "Design system with 120+ components"],
    tags: ["Figma", "Design System", "UX Research"],
    gradient: "from-amber-400 via-orange-500 to-red-500",
    industry: "Food & Beverage",
    location: "Melbourne, Australia",
    duration: "5 weeks",
    services: ["Website Design", "Website Maintenance"],
  },
  {
    slug: "fleetwise",
    title: "Logistics tracking in real time",
    client: "FleetWise Logistics",
    category: "Web App",
    year: 2023,
    summary:
      "A live fleet-tracking portal with route optimisation, driver management and automated customer notifications.",
    results: ["12,000 deliveries tracked daily", "-22% fuel costs"],
    tags: ["Next.js", "Mapbox", "AWS"],
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
    industry: "Logistics",
    location: "Dubai, UAE",
    duration: "14 weeks",
    services: ["Web App Development", "Website Maintenance"],
  },
  {
    slug: "atelier-nova",
    title: "Portfolio site for an architecture studio",
    client: "Atelier Nova",
    category: "Website",
    year: 2023,
    summary:
      "An editorial, image-led portfolio with smooth transitions and a CMS the studio updates themselves.",
    results: ["Awwwards Honorable Mention", "+3x project enquiries"],
    tags: ["Next.js", "Framer Motion", "Contentful"],
    gradient: "from-slate-700 via-slate-800 to-zinc-900",
    industry: "Architecture",
    location: "Lisbon, Portugal",
    duration: "7 weeks",
    services: ["Website Design", "Website Development"],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "BrandThink rebuilt our store from the ground up and the results were immediate. Pages load instantly, our conversion rate jumped and the team was a joy to work with from kickoff to launch.",
    name: "Hannah Rivera",
    role: "Head of E-commerce",
    company: "NorthPeak Outdoors",
    initials: "HR",
  },
  {
    quote:
      "They didn't just write code, they challenged our assumptions and helped us shape a better product. Our dashboard went from idea to paying customers in under four months.",
    name: "Daniel Okafor",
    role: "Co-founder & CEO",
    company: "Ledgerly",
    initials: "DO",
  },
  {
    quote:
      "Our patients constantly tell us how easy it is to book online now. The site feels exactly like our clinic: calm, warm and professional.",
    name: "Dr. Priya Nair",
    role: "Clinical Director",
    company: "Bloom Wellness Clinic",
    initials: "PN",
  },
  {
    quote:
      "The maintenance plan is the best money we spend each month. Updates, backups, small changes: everything is handled quickly and we never worry about downtime.",
    name: "Marcus Lee",
    role: "Operations Manager",
    company: "UrbanBrew Coffee",
    initials: "ML",
  },
];

export const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "60+", label: "Happy clients" },
  { value: "98%", label: "Client retention" },
  { value: "4.9/5", label: "Average rating" },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    text: "We dig into your goals, audience and competitors to define a clear, measurable plan.",
  },
  {
    step: "02",
    title: "Design",
    text: "Wireframes and high-fidelity designs that balance your brand with what users actually need.",
  },
  {
    step: "03",
    title: "Develop",
    text: "Clean, tested code built in weekly sprints, with a live staging link so you see progress.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    text: "We launch, measure and keep improving, with ongoing support whenever you need it.",
  },
];
