import { IoLogoFirebase, IoLogoReact } from "react-icons/io5";
import {
  SiFirebase,
  SiNextdotjs,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiAntdesign,
  SiMui,
  SiJest,
  SiNodedotjs,
  SiExpressvpn,
} from "react-icons/si";
import { FaBootstrap, FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BsGithub, BsGitlab } from "react-icons/bs";
import { FaReact } from "react-icons/fa";

/**
 * An array of objects representing the user's skills, including the skill name and an icon component to display.
 * These skills are used to showcase the user's technical expertise.
 */
export const MySkills = [
  {
    name: "ReactJs",
    Icon: IoLogoReact,
  },
  {
    name: "React Native",
    Icon: FaReact,
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
  },
  {
    name: "NextJs",
    Icon: SiNextdotjs,
  },
  {
    name: "JavaScript",
    Icon: IoLogoJavascript,
  },
  {
    name: "TailwindCss",
    Icon: SiTailwindcss,
  },
  {
    name: "redux",
    Icon: SiRedux,
  },
  {
    name: "React-Query",
    Icon: SiReactquery,
  },
  {
    name: "Ant Design",
    Icon: SiAntdesign,
  },
  {
    name: "material ui",
    Icon: SiMui,
  },
  {
    name: "Html",
    Icon: FaHtml5,
  },
  {
    name: "react bootstrap",
    Icon: FaBootstrap,
  },
  {
    name: "Jest",
    Icon: SiJest,
  },
  {
    name: "Node js",
    Icon: SiNodedotjs,
  },
  {
    name: "express",
    Icon: SiExpressvpn,
  },
  {
    name: "GitHub",
    Icon: BsGithub,
  },
  {
    name: "GitLab",
    Icon: BsGitlab,
  },
  {
    name: "firebase",
    Icon: SiFirebase,
  },
];
/**
 * An array of navigation link data objects, each with an ID, title, and link.
 * These links are used to populate the navigation menu in the application.
 */
export const NavBarLinksData = [
  {
    id: 1,
    title: "Home",
    link: "home",
  },
  {
    id: 2,
    title: "Features",
    link: "features",
  },
  {
    id: 3,
    title: "Projects",
    link: "projects",
  },
  {
    id: 4,
    title: "Contact",
    link: "contact",
  },
];

/**
 * The name of the user.
 */
export const MyName = "Niraj Makwana";

/**
 * The phone number of the user.
 */
export const MyNumber = "+919033574679";

/**
 * The URL of the user's LinkedIn profile.
 */
export const MyLinkedin = "https://www.linkedin.com/in/nirajmakwana12/";

export const MyGithub = "https://github.com/Nirajmakwana";

export const MyEmail = "makwananiraj12994@gmail.com";
