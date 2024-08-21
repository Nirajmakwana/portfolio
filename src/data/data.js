import { FaMobile } from "react-icons/fa";
import { SiLiquibase, SiProgress } from "react-icons/si";
import { MdOutlineDesignServices, MdWeb } from "react-icons/md";
import { GrPerformance, GrTestDesktop } from "react-icons/gr";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <MdWeb />,
    title: "Web Development",
    des: "Crafting responsive, high-performance websites using modern technologies like React.js, HTML, and CSS to deliver seamless user experiences.",
  },
  {
    id: 2,
    icon: <FaMobile />,
    title: "Mobile Development",
    des: "Building intuitive and efficient mobile applications with React Native, ensuring a consistent and engaging user experience across platforms.",
  },
  {
    id: 3,
    icon: <FaMobile />,
    title: "Team Leadership",
    des: "Leading development teams by delegating tasks, providing guidance, and ensuring high-quality code through best practices and continuous improvement.",
  },
  {
    id: 4,
    icon: <SiProgress />,
    title: "SEO Optimisation",
    des: "Implementing SEO best practices to enhance website visibility, improve search engine rankings, and drive organic traffic.",
  },
  {
    id: 5,
    icon: <MdOutlineDesignServices />,
    title: "UI/UX Design",
    des: "Translating complex designs into interactive interfaces that prioritize user experience and accessibility, ensuring visually appealing and functional designs.",
  },
  {
    id: 6,
    icon: <GrPerformance />,
    title: "Performance Optimization",
    des: "Enhancing website speed and performance through optimized code, reducing load times, and ensuring smooth user interactions.",
  },
  {
    id: 7,
    icon: <GrTestDesktop />,
    title: "Cross-Browser Testing",
    des: "Ensuring consistent functionality and design across all major browsers, identifying and resolving compatibility issues with precision.",
  },
];

export const ProjectsData = [
  {
    name: "Chat App Landing Page",
    TechName: ["Next.Js", "React.js", "Mui"],
    des: [
      "Responsible for design and development of user as well as delivery partner application",
    ],
    code: false,
    worklike: "WhatsApp",
    WorklikeLink: "https://www.whatsapp.com/",
  },
  {
    name: "doctor consultation platform",
    TechName: ["Next.Js", "React.js", "Ant Design", "redux"],
    des: [
      "Mange roles and permissions for users and admin",
      "Doctors can manage patient treatment history and invoices.",
      "Doctors can give guidance throw chat and zoom video call.",
      "Pharmacists handle stock and invoices.",
      "Patients can access invoices and check doctor availability in different cities and book appointment.",
      "Admin can manage all users and doctors.",
    ],
  },
  {
    name: "Spiritual Guidance Platform",
    TechName: ["Next.Js", "React.js", "Mui"],
    des: [
      "Providing quality spiritual direction.",
      "Managing donations.",
      "Organizing events and sending emails to participants.",
    ],
  },
  {
    name: "Dental Hospital Management System",
    TechName: ["Next.Js", "React.js", "Mui", "redux"],
    des: [
      "Doctors to manage patient X-rays and invoices medicine.",
      "Nurse can see X-rays and assist Patients",
      "Patients can access invoices and check doctor availability and book appointment",
      "Admin can manage all users every role",
    ],
  },
  {
    name: "marketplace for digital services",
    TechName: ["React.js", "Mui", "redux"],
    worklike: "Upwork",
    WorklikeLink: "https://www.upwork.com/",
    des: [
      "Freelancers can create their profile and services.",
      "Customers can search for freelancers and services.",
      "Customers can book services and make payments in crypto.",
      "Freelancers can manage their services and invoices and demand any one crypto currency.",
    ],
  },
  {
    name: "Innovative Driver Education",
    TechName: ["React.js", "Mui", "redux"],
    worklike: "Uber",
    WorklikeLink: "https://www.uber.com/",
    des: [
      "Student can take online classes and give exam",
      "Book driving lesson with driver with nearest location or any other location",
      "Make payment in different phases like booking fees, driving lesson fees, exam fees, license fees",
    ],
  },
  {
    name: "HR Management Platform",
    TechName: ["React.js", "Mui", "redux"],
    des: [
      "Schedule interview throw video call",
      "manage candidate and assign to interviewer",
      "create online meeting with different HR and seniors",
      "Share result in excel sheet and pdf with link",
      "Create questions answer set different marks",
      "Create a questions with different type like image question video question",
      "Manage employee attendance,leaves and their details",
      "Create different users like senior HR junior HR admin candidate role and permissions",
    ],
  },
  {
    name: "Digital Wallet System",
    worklike: "Google Pay",
    WorklikeLink: "https://pay.google.com/",
    TechName: ["React.js", "Mui", "redux"],
    des: [
      "Make payments With QR",
      "Manage transactions",
      "Make investment",
      "two factor authentication",
      "Manage wallets",
    ],
  },
  {
    name: "Transshipment Network Platform.",
    TechName: ["React.js", "Mui", "redux"],
    des: [
      "Create different users like buyer and seller",
      "Seller and buyer can book a container track container",
      "Seller and Buyer can adjust price off container and make request for price",
      "super admin can switch there role and give permission to other to change roles",
      "Manage payments in every currency",
    ],
  },
  {
    name: "Design Studio App.",
    worklike: "Canva",
    WorklikeLink: "https://www.canva.com/",
    TechName: ["React.js", "Mui", "redux-toolkit"],
    des: [
      "Youtube video Url to PDF with AI",
      "limited prompt for AI help",
      "Create PDF With different templates",
      "Integrate AI in PDF generator",
    ],
  },
];
