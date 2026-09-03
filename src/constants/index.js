import {
  SiReact,
  SiNextdotjs,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiAntdesign,
  SiMui,
  SiJest,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FiCheckCircle } from "react-icons/fi";

/**
 * User personal and contact constants
 */
export const MyName = "Niraj Makwana";
export const MyRole = "Senior Full Stack Developer";
export const MyNumber = "+919033574679";
export const MyFormattedPhone = "+91 90335 74679";
export const MyEmail = "makwananiraj12994@gmail.com";
export const MyLinkedin = "https://www.linkedin.com/in/nirajmakwana12/";
export const MyGithub = "https://github.com/Nirajmakwana";
export const MyLocation = "India";
export const YearsExperience = "5+";
export const dynamicResumeName = `${MyName.replace(/\s+/g, "-")}-Resume(${new Date().getFullYear()}).pdf`;

/**
 * Categorized technical skills prioritizing Core Frontend
 */
export const SkillCategories = [
  {
    category: "Core Frontend & Mobile",
    description: "Component architecture, cross-platform mobile apps, and modern web applications",
    skills: [
      { name: "React.js", level: "Expert", Icon: SiReact, priority: true },
      { name: "React Native", level: "Advanced", Icon: TbBrandReactNative, priority: true },
      { name: "TypeScript", level: "Advanced", Icon: SiTypescript, priority: true },
      { name: "JavaScript (ES6+)", level: "Expert", Icon: SiJavascript, priority: true },
      { name: "Next.js", level: "Advanced", Icon: SiNextdotjs, priority: true },
      { name: "HTML5", level: "Expert", Icon: SiHtml5, priority: false },
      { name: "CSS3 / Sass", level: "Expert", Icon: SiCss3, priority: false },
    ],
  },
  {
    category: "State & Data Management",
    description: "Predictable client-state and asynchronous cache synchronization",
    skills: [
      { name: "Redux / Redux Toolkit", level: "Expert", Icon: SiRedux, priority: true },
      { name: "React Query (TanStack)", level: "Advanced", Icon: SiReactquery, priority: true },
      { name: "Context API", level: "Expert", Icon: SiReact, priority: false },
    ],
  },
  {
    category: "UI & Component Systems",
    description: "Design systems, responsive styling, and accessible component libraries",
    skills: [
      { name: "Tailwind CSS", level: "Expert", Icon: SiTailwindcss, priority: true },
      { name: "Material UI (MUI)", level: "Expert", Icon: SiMui, priority: true },
      { name: "Ant Design", level: "Advanced", Icon: SiAntdesign, priority: false },
      { name: "React Bootstrap", level: "Advanced", Icon: SiBootstrap, priority: false },
    ],
  },
  {
    category: "Backend & Cloud",
    description: "Server integration, RESTful API design, and cloud services",
    skills: [
      { name: "Node.js", level: "Intermediate", Icon: SiNodedotjs, priority: true },
      { name: "Express.js", level: "Intermediate", Icon: SiExpress, priority: true },
      { name: "Firebase", level: "Advanced", Icon: SiFirebase, priority: false },
      { name: "REST APIs", level: "Expert", Icon: FiCheckCircle, priority: true },
    ],
  },
  {
    category: "Testing & DevOps",
    description: "Unit testing, version control, and CI/CD deployment pipelines",
    skills: [
      { name: "Jest", level: "Advanced", Icon: SiJest, priority: true },
      { name: "React Testing Library", level: "Advanced", Icon: SiReact, priority: true },
      { name: "Git", level: "Expert", Icon: SiGit, priority: true },
      { name: "GitHub", level: "Expert", Icon: SiGithub, priority: true },
      { name: "GitLab", level: "Advanced", Icon: SiGitlab, priority: false },
      { name: "CI / CD", level: "Advanced", Icon: FiCheckCircle, priority: false },
    ],
  },
];

/**
 * Flat list of highlighted skills for hero bar
 */
export const HighlightSkills = [
  { name: "React.js", Icon: SiReact },
  { name: "React Native", Icon: TbBrandReactNative },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express.js", Icon: SiExpress },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Redux Toolkit", Icon: SiRedux },
  { name: "React Query", Icon: SiReactquery },
  { name: "Material UI", Icon: SiMui },
  { name: "Jest", Icon: SiJest },
];

/**
 * Navigation Bar links
 */
export const NavBarLinksData = [
  { id: "home", title: "Home", link: "home" },
  { id: "about", title: "About", link: "about" },
  { id: "skills", title: "Skills", link: "skills" },
  { id: "experience", title: "Experience", link: "experience" },
  { id: "projects", title: "Projects", link: "projects" },
  { id: "services", title: "Services", link: "services" },
  { id: "contact", title: "Contact", link: "contact" },
];
