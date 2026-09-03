import React from "react";
import {
  MdWeb,
  MdOutlineDesignServices,
  MdOutlineSpeed,
} from "react-icons/md";
import { TbBrandReactNative } from "react-icons/tb";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { FiLayers } from "react-icons/fi";

// Services / Features Data
export const featuresData = [
  {
    id: "web-dev",
    icon: <MdWeb className="w-8 h-8" />,
    title: "Frontend Architecture & Web Apps",
    des: "Engineering responsive, component-driven Single Page Applications (SPAs) and Server-Side Rendered (SSR) web applications using React.js, Next.js, and TypeScript with clean modular codebases.",
  },
  {
    id: "mobile-dev",
    icon: <TbBrandReactNative className="w-8 h-8" />,
    title: "Cross-Platform Mobile Apps",
    des: "Building fluid iOS and Android mobile experiences using React Native, native modules, custom gesture handlers, and unified design token systems.",
  },
  {
    id: "ui-ux",
    icon: <MdOutlineDesignServices className="w-8 h-8" />,
    title: "Design Systems & UI Engineering",
    des: "Translating complex Figma specifications into robust, accessible component libraries utilizing Tailwind CSS, Material UI (MUI), and Ant Design with strict WCAG accessibility compliance.",
  },
  {
    id: "performance",
    icon: <MdOutlineSpeed className="w-8 h-8" />,
    title: "Performance & Core Web Vitals",
    des: "Profiling and eliminating unnecessary re-renders, optimizing bundle sizes via code-splitting, tree-shaking, and fine-tuning rendering pipelines for fast page load times.",
  },
  {
    id: "state-mgmt",
    icon: <FiLayers className="w-8 h-8" />,
    title: "State & Data Layer Architecture",
    des: "Designing predictable client-side state models using Redux Toolkit and implementing efficient asynchronous cache synchronization with TanStack React Query.",
  },
  {
    id: "api-backend",
    icon: <HiOutlineCodeBracket className="w-8 h-8" />,
    title: "API Integration & Backend Flow",
    des: "Connecting frontends with RESTful APIs, authentication flows (JWT/OAuth), role-based access control (RBAC), and server-side integrations with Node.js and Express.js.",
  },
];

// Real Professional Experience Data
export const ExperienceData = [
  {
    id: "tecvisio",
    role: "Senior Full Stack Engineer / Senior React Developer",
    company: "Tecvisio.AI",
    period: "May 2025 – Present",
    location: "Remote",
    type: "Full-Time",
    highlights: [
      "Develop and maintain production-grade web applications using React.js, Next.js, TypeScript, Node.js, and modern frontend technologies.",
      "Architect scalable frontend structures, reusable component libraries, API integrations, state management, and performance optimizations.",
      "Build responsive, user-friendly interfaces with a rigorous focus on performance, accessibility (WCAG), and long-term maintainability.",
      "Collaborate closely with backend engineers, product designers, and stakeholders to deliver high-priority client-facing features.",
      "Contribute actively to technical architecture decisions, structured code reviews, debugging, and production issue resolution.",
      "Maintain robust CI/CD pipelines, Git workflows, automated testing, and staging/production release deployments.",
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "Tailwind CSS", "Git", "CI/CD"],
  },
  {
    id: "stratosphere",
    role: "Senior React Developer",
    company: "StratoSphere IT Services",
    period: "September 2024 – Present",
    location: "Remote / Hybrid",
    type: "Full-Time",
    clientContext: "Builder.ai Client & Internal Projects",
    projects: [
      "AI-powered Design Studio",
      "Marketplace for Digital Services",
      "HR Management Platform",
      "Digital Wallet System",
    ],
    highlights: [
      "Delivered complex and scalable enterprise applications on Builder.ai client and internal product ecosystems as a Senior React Developer.",
      "Engineered frontend architecture and reusable UI component libraries using React.js, Next.js, TypeScript, React Query, and Redux.",
      "Architected key product suites including AI-powered Design Studio, Freelance Marketplace, HR Management Platform, and Digital Wallet System.",
      "Collaborated directly with client stakeholders and product owners to translate business requirements into clean technical implementations.",
      "Optimized application performance through Lighthouse audits, bundle-size analysis, page-load acceleration, and rendering profiling.",
      "Implemented comprehensive unit testing with Jest, maintained Git/GitLab workflows, and supported multi-environment release deployments.",
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "React Query", "Redux Toolkit", "Material UI", "Jest", "GitLab"],
  },
  {
    id: "spectus",
    role: "Senior Front-End Developer / Team Lead",
    company: "Spectus Infotech",
    period: "March 2022 – June 2024",
    location: "India",
    type: "Full-Time",
    projects: [
      "Transshipment Network Platform (SlotXpert)",
      "Marketplace Platform",
      "HR Management Platform",
      "Innovative Driver Education (EcoDrive)",
    ],
    highlights: [
      "Led frontend development teams across multiple product initiatives using React.js, TypeScript, JavaScript, Redux, React Query, and UI libraries.",
      "Designed core frontend architectures and established standardized, reusable component structures adopted across different product lines.",
      "Engineered key applications including Transshipment Network Platform (SlotXpert), Driver Education (EcoDrive), and HR Portals.",
      "Managed sprint task distribution, conducted comprehensive code reviews, and led technical architectural discussions.",
      "Worked in close tandem with backend teams to integrate REST APIs and coordinate complex role-based application workflows.",
      "Improved frontend performance, cross-device responsiveness, and accessibility across all delivered web applications.",
      "Implemented Jest unit testing to ensure codebase reliability and participated in client-facing technical solution discussions.",
    ],
    technologies: ["React.js", "TypeScript", "JavaScript", "Redux", "React Query", "Material UI", "Ant Design", "Jest"],
  },
  {
    id: "groovyweb",
    role: "Front-End Developer",
    company: "Groovy Web",
    period: "May 2021 – January 2022",
    location: "India",
    type: "Full-Time",
    highlights: [
      "Developed responsive web applications using React.js, JavaScript, HTML5, CSS3, and modern UI libraries.",
      "Constructed modular, reusable UI components and integrated backend REST APIs seamlessly.",
      "Ensured pixel-perfect responsiveness and cross-browser consistency across mobile, tablet, and desktop screens.",
      "Diagnosed and resolved UI bugs, optimized rendering performance, and implemented new client features on schedule.",
      "Collaborated effectively with UI/UX designers and backend developers within standard Git version-controlled workflows.",
    ],
    technologies: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "REST APIs", "Bootstrap", "Git"],
  },
];

// Comprehensive Real Projects Data
export const ProjectsData = [
  {
    id: "iaudix",
    title: "iAudix",
    subtitle: "Maritime Compliance & Inspection Platform",
    category: "Full Stack",
    company: "Tecvisio.AI",
    role: "Senior Full Stack Engineer / Senior React Developer",
    period: "May 2025 – Present",
    location: "Remote",
    featured: true,

    tagline:
      "Enterprise maritime compliance platform for vessel inspections, navigational audits, and fleet-wide analytics.",

    description:
      "iAudix is a cloud-based maritime compliance platform that helps ship owners, operators, auditors, and marine management teams plan, conduct, monitor, and report vessel inspections. The platform replaces paper-based checklists and disconnected systems with a centralized digital inspection workflow.",

    challenge:
      "The platform needed to support inspections in environments with unreliable or no internet connectivity while handling complex role-based access, large inspection datasets, and strict availability requirements.",

    solution:
      "Built an offline-first inspection architecture with local data persistence and automatic synchronization. Implemented role-based workspaces, compliance templates, inspection workflows, audit trails, and fleet analytics dashboards.",

    features: [
      "Offline-first inspection workflows",
      "Automatic data synchronization",
      "Role-based workspaces",
      "SIRE 2.0, PSC, ISM, ISPS & MLC compliance templates",
      "Observation management and audit trails",
      "Fleet analytics dashboards",
      "Risk matrices and compliance scoring",
      "Recurring defect detection",
      "Custom inspection template builder",
    ],

    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "REST APIs",
    ],

    link: "https://iaudix.com/login",
  },

  {
    id: "isail-marine",
    title: "iSail Marine",
    subtitle: "Maritime Recruitment Platform",
    category: "Full Stack",
    company: "Tecvisio.AI",
    role: "Senior Full Stack Engineer / Senior React Developer",
    period: "May 2025 – Present",
    location: "Remote",
    featured: true,

    tagline:
      "Technology-driven maritime recruitment platform connecting global seafarers, cadets, and maritime companies.",

    description:
      "iSail Marine is a specialized maritime recruitment ecosystem connecting seafarers, cadets, recruiters, and maritime companies. The platform provides job discovery, candidate screening, recruiter workflows, subscriptions, competency evaluation, and compliance tracking.",

    challenge:
      "The platform required a dual-sided recruitment experience supporting both jobseekers and recruiters while handling maritime-specific qualifications, competency screening, subscriptions, and compliance workflows.",

    solution:
      "Developed dedicated Jobseeker and Recruiter workflows with advanced job discovery, candidate management, competency screening, subscription plans, and mobile experiences for iOS and Android.",

    features: [
      "Jobseeker and Recruiter portals",
      "Maritime job discovery",
      "Advanced job filtering",
      "Candidate screening",
      "Recruiter dashboard",
      "Candidate shortlisting",
      "Competency-based evaluation",
      "Subscription-based recruiter plans",
      "Compliance tracking",
      "iOS and Android applications",
      "Blog and newsletter system",
    ],

    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "REST APIs",
    ],

    link: "https://isailmarine.ai/",
  },

  {
    id: "slotxpert",
    title: "SlotXpert",
    subtitle: "Transshipment Network Platform",
    category: "Web",
    company: "Spectus Infotech",
    role: "Senior Front-End Developer / Team Lead",
    period: "March 2022 – June 2024",
    location: "India",
    featured: true,

    tagline:
      "Enterprise container booking, logistics tracking, and multi-currency global billing platform.",

    description:
      "SlotXpert is a digital logistics platform connecting cargo buyers, vessel sellers, and port operators for container booking and transshipment management.",

    challenge:
      "The platform required complex role permissions across multiple user types while supporting dynamic pricing, real-time booking workflows, container tracking, and multi-currency transactions.",

    solution:
      "Architected scalable Redux state management with granular role-based route protection and real-time quote adjustment workflows for seamless container booking and logistics management.",

    features: [
      "Role-based access control",
      "Container booking",
      "Real-time container tracking",
      "Buyer and seller negotiations",
      "Dynamic pricing",
      "Multi-currency transactions",
      "Automated invoicing",
      "Dispute management",
      "Admin CMS",
      "User audit logs",
    ],

    technologies: [
      "React.js",
      "TypeScript",
      "Material UI",
      "Redux Toolkit",
      "Formik",
      "REST APIs",
    ],

    link: "https://www.slotxpert.com/",
  },

  {
    id: "ai-design-studio",
    title: "AI Design Studio",
    subtitle: "AI-Powered Design & PDF Generator",
    category: "Full Stack",
    company: "StratoSphere IT Services / Builder.ai",
    role: "Senior React Developer",
    period: "September 2024 – Present",
    location: "Remote / Hybrid",
    featured: true,

    tagline:
      "Canva-inspired design studio featuring AI-powered content generation and PDF creation.",

    description:
      "AI Design Studio is a browser-based design and document creation platform that converts multimedia content into structured, editable presentations and high-resolution PDFs using AI-powered workflows.",

    challenge:
      "The application required complex canvas manipulation, layered templates, asynchronous AI processing, and high-resolution PDF generation without negatively impacting browser performance.",

    solution:
      "Designed modular canvas state management using Redux Toolkit and asynchronous AI processing workflows. Built reusable design components and custom print-ready PDF export functionality.",

    features: [
      "AI-powered content generation",
      "YouTube video to PDF",
      "Drag-and-drop canvas editor",
      "Template-based designs",
      "AI prompt assistant",
      "Multi-page PDF export",
      "High-resolution output",
      "Template management",
      "Typography library",
    ],

    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Material UI",
      "Redux Toolkit",
      "AI APIs",
    ],
  },

  {
    id: "digital-wallet",
    title: "Digital Wallet",
    subtitle: "Fintech & Digital Payment Platform",
    category: "Mobile + Web",
    company: "StratoSphere IT Services / Builder.ai",
    role: "Senior React Developer",
    period: "September 2024 – Present",
    location: "Remote / Hybrid",
    featured: true,

    tagline:
      "Secure cross-platform digital wallet supporting payments, QR checkout, investments, and biometric authentication.",

    description:
      "A cross-platform fintech solution enabling peer-to-peer transfers, QR payments, micro-investments, bank reconciliation, and secure account management through mobile and web applications.",

    challenge:
      "The application required secure transaction handling, biometric authentication, real-time balance synchronization, and reliable QR payment workflows across different mobile devices.",

    solution:
      "Implemented secure authentication flows, encrypted transaction payloads, biometric login, QR scanning, and reusable React Native components for consistent cross-platform experiences.",

    features: [
      "Peer-to-peer payments",
      "QR code payments",
      "Bank account transfers",
      "Biometric authentication",
      "2FA verification",
      "Investment tracking",
      "Real-time balance synchronization",
      "PDF and CSV statements",
      "Transaction limits",
      "Fraud prevention workflows",
    ],

    technologies: [
      "React Native",
      "React.js",
      "TypeScript",
      "Redux",
      "Formik",
      "Material UI",
      "Biometrics",
    ],
  },

  {
    id: "hr-talent-suite",
    title: "Enterprise HR & Talent Suite",
    subtitle: "HR Management & Recruitment Platform",
    category: "Mobile + Web",
    company: "StratoSphere IT Services / Spectus Infotech",
    role: "Senior React Developer",
    period: "2022 – Present",
    location: "Remote / Hybrid",
    featured: true,

    tagline:
      "Enterprise HR platform with video interviews, assessments, candidate scoring, attendance, and employee management.",

    description:
      "An enterprise workforce platform combining recruitment, candidate assessments, video interviews, employee lifecycle management, attendance, and leave workflows.",

    challenge:
      "The platform needed to support synchronous video interviews, multi-format assessments, dynamic candidate scoring, and complex role-based enterprise workflows.",

    solution:
      "Built WebRTC-based video interview rooms, dynamic assessment workflows, real-time scoring interfaces, automated report generation, and centralized employee management modules.",

    features: [
      "Candidate management",
      "WebRTC video interviews",
      "Online assessments",
      "Video, audio and image questions",
      "Candidate scoring",
      "PDF report generation",
      "Excel report generation",
      "Attendance management",
      "Leave management",
      "Role-based dashboards",
    ],

    technologies: [
      "React.js",
      "React Native",
      "TypeScript",
      "Material UI",
      "Redux",
      "Formik",
      "WebRTC",
    ],
  },

  {
    id: "ecodrive",
    title: "EcoDrive",
    subtitle: "Innovative Driver Education Platform",
    category: "Mobile + Web",
    company: "Spectus Infotech",
    role: "Senior Front-End Developer / Team Lead",
    period: "March 2022 – June 2024",
    location: "India / UAE",
    featured: true,

    tagline:
      "Smart driving school platform with live GPS tracking, lesson booking, online learning, and licensing workflows.",

    description:
      "EcoDrive is a driver education ecosystem supporting classroom learning, online lessons, practical driving bookings, instructor tracking, mock examinations, and licensing workflows.",

    challenge:
      "The platform required accurate real-time instructor tracking, proximity-based booking, multi-stage payments, and synchronized student learning and licensing workflows.",

    solution:
      "Integrated Google Maps and React Native location services for real-time instructor tracking and built modular booking, learning, examination, and checkout workflows.",

    features: [
      "Live instructor GPS tracking",
      "Instructor booking",
      "Location-based instructor discovery",
      "Digital learning curriculum",
      "Online mock tests",
      "Student progress tracking",
      "Lesson package payments",
      "Government fee payments",
      "Licensing workflows",
      "Instructor competency logs",
    ],

    technologies: [
      "React Native",
      "React.js",
      "JavaScript",
      "TypeScript",
      "MUI",
      "Redux",
      "Google Maps SDK",
    ],

    link: "https://ecodrive.ae/en",
  },

  {
    id: "digital-services-marketplace",
    title: "Digital Services Marketplace",
    subtitle: "Freelance Marketplace",
    category: "Mobile + Web",
    company: "StratoSphere IT Services / Spectus Infotech",
    role: "Senior React Developer",
    period: "2022 – Present",
    location: "Remote",
    featured: false,

    tagline:
      "Global freelance marketplace with milestone payments, escrow, real-time messaging, and multi-currency support.",

    description:
      "A global freelance marketplace connecting clients with digital service providers through customizable service packages, skill-based discovery, secure payments, milestone workflows, and real-time communication.",

    challenge:
      "The platform needed secure milestone-based transactions, real-time buyer-seller communication, multi-currency payments, and flexible freelancer service packages.",

    solution:
      "Built modular marketplace interfaces, real-time messaging workflows, milestone invoice generation, payment states, and responsive freelancer portfolio and service management experiences.",

    features: [
      "Freelancer profiles",
      "Portfolio builder",
      "Service packages",
      "Skill-based search",
      "Advanced filtering",
      "Milestone payments",
      "Escrow workflows",
      "Crypto payments",
      "Real-time chat",
      "File sharing",
      "Invoice generation",
    ],

    technologies: [
      "React.js",
      "Material UI",
      "Redux",
      "Formik",
      "Web3",
      "Stripe",
      "WebSockets",
    ],

    link: "https://www.upwork.com/",
  },

  {
    id: "dental-hospital",
    title: "Dental Hospital Management System",
    subtitle: "Healthcare & Clinical Management Platform",
    category: "Full Stack",
    company: "Independent Project",
    role: "Full Stack Developer",
    period: "Project Based",
    location: "India",

    tagline:
      "Clinical healthcare platform for digital records, X-ray diagnostics, appointments, prescriptions, and billing.",

    description:
      "A dental hospital management system designed to manage electronic medical records, high-resolution X-ray images, appointments, prescriptions, treatment history, billing, insurance claims, and multi-clinic administration.",

    challenge:
      "The application required responsive medical imaging workflows while maintaining secure role-based access to sensitive patient information.",

    solution:
      "Implemented optimized Next.js interfaces for medical records and designed role-specific dashboards for doctors, nurses, patients, and administrators.",

    features: [
      "Digital dental X-ray viewer",
      "Electronic medical records",
      "Doctor appointment scheduling",
      "Patient portal",
      "Prescription management",
      "Treatment history",
      "Billing management",
      "Insurance claims",
      "Multi-clinic administration",
    ],

    technologies: [
      "Next.js",
      "React.js",
      "Material UI",
      "Redux",
      "Formik",
      "REST APIs",
    ],

    link: null,
  },

  {
    id: "seek-direction",
    title: "Seek Direction",
    subtitle: "Spiritual Guidance & Community Platform",
    category: "Web",
    company: "Independent Project",
    role: "Full Stack Developer",
    period: "Project Based",
    location: "Remote",

    tagline:
      "Community platform for mentorship, donations, live events, and digital content.",

    description:
      "A community-focused platform providing spiritual mentorship, charitable donation processing, event management, digital content, and virtual community experiences for global participants.",

    challenge:
      "The platform required an accessible, responsive, SEO-friendly experience with secure donations, event registration, automated communication, and content publishing.",

    solution:
      "Built the platform using Next.js with SEO-focused rendering, integrated Stripe donation workflows, event registration, automated email triggers, and content management functionality.",

    features: [
      "Recurring donations",
      "One-time donations",
      "Event calendar",
      "Event registration",
      "Automated email invitations",
      "Community CMS",
      "Articles and video content",
      "Responsive mobile-first design",
    ],

    technologies: [
      "Next.js",
      "React.js",
      "Material UI",
      "Formik",
      "Stripe API",
    ],

    link: "https://seekdirection.app/#/home",
  },

  {
    id: "doctor-consultation",
    title: "Telemedicine Platform",
    subtitle: "Doctor Consultation & Healthcare Platform",
    category: "Web",
    company: "Independent Project",
    role: "Full Stack Developer",
    period: "Project Based",
    location: "Remote",

    tagline:
      "Telemedicine platform with video consultations, e-prescriptions, doctor scheduling, and pharmacy management.",

    description:
      "A multi-city telemedicine platform connecting patients with doctors through browser-based video consultations. The system supports appointment booking, medical records, live consultation, e-prescriptions, pharmacy inventory, and dispatch workflows.",

    challenge:
      "The platform required reliable browser-based video consultations while allowing doctors to access patient information and issue prescriptions during active sessions.",

    solution:
      "Built a dual-pane consultation interface integrating Zoom Web SDK with synchronized patient information, live chat, medical documents, and prescription workflows.",

    features: [
      "HD video consultations",
      "Doctor discovery",
      "Appointment scheduling",
      "Live consultation chat",
      "Medical document sharing",
      "E-prescriptions",
      "Pharmacy inventory",
      "Medicine dispatch tracking",
      "Role-based dashboards",
    ],

    technologies: [
      "Next.js",
      "React.js",
      "Ant Design",
      "Redux",
      "Zoom Web SDK",
    ],

    link: null,
  },

  {
    id: "chat-app",
    title: "Modern Chat App Experience",
    subtitle: "High-Performance Messaging Product Experience",
    category: "Mobile + Web",
    company: "Independent Project",
    role: "Front-End Developer",
    period: "Project Based",
    location: "Remote",

    tagline:
      "High-performance marketing experience showcasing modern messaging and multi-device communication.",

    description:
      "A pixel-perfect responsive marketing experience designed to showcase messaging capabilities, real-time communication concepts, end-to-end encryption, and multi-device synchronization through interactive UI previews.",

    challenge:
      "The primary challenge was delivering a visually rich experience with minimal layout shift and fast loading performance across mobile, tablet, and desktop devices.",

    solution:
      "Used Next.js image optimization, responsive SVGs, lightweight Tailwind CSS utilities, and reusable React components to create a fast and responsive experience.",

    features: [
      "Fully responsive design",
      "Interactive chat previews",
      "Optimized image delivery",
      "Responsive SVG graphics",
      "Smooth page transitions",
      "Performance-focused architecture",
    ],

    technologies: [
      "Next.js",
      "React.js",
      "Material UI",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
    ],

    link: null,
  },
];
