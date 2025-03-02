import LinkSvg from "../../public/icons/Link.svg";

import github from "../../public/icons/github.svg";
import linkedin from "../../public/icons/linkedin.svg";
import GesmiaWeb from "../../public/images/projects/GesmiaWeb.png";
import Xengly from "../../public/images/projects/xengly.png";

export const experience = [
  {
    startDate: "2024",
    endDate: "2025",
    name: "Nitel  ",
    description: `
     Creation, maintenance and development of new functionalities in an internal Nitel system, with Express and Angular
      `,
    stack: ["Angular", "Express", "Node"],
    items: [],
    url: "",
  },
  {
    startDate: "2024",
    endDate: "2025",
    name: "STN S.A.",
    description: `
     Developed a CMS-based website to meet specific client requirements.
Collaborated with designers to create a functional, user-friendly platform that aligned with organizational goals.
        
      `,
    stack: ["Laravel", "DotNet Core", "Vue", "GraphQL"],
    items: [],
    url: "",
  },
  {
    startDate: "2023",
    endDate: "2024",
    name: "Vadi GT",
    description: `
       Designed and enhanced a valuation platform used across Latin America.
Migrated the architecture to micro-frontends for improved scalability and state management.
Introduced new security layers and implemented custom solutions for client-specific needs.
      `,
    stack: ["Ruby on Rails", "Scripting"],
    items: [],
    url: "",
  },
  {
    startDate: "2022",
    endDate: "2023",
    name: "American Student Tuition System",
    description: `
        Supported third-party integrations to synchronize student data.
Created and modified Ruby scripts, assisted with quality assurance, and provided guidance on complex use cases.
      `,
    stack: [
      "Multi-tenancy",
      "Laravel",
      ".NET Core",
      "Docker",
      "Pusher",
      "TSQL",
    ],
    items: [],
    url: "",
  },
  {
    startDate: "2022",
    endDate: "2023",
    name: "Costa Rican Red Cross Website",
    description: `
        Donation project: a new website for the Costa Rican Red Cross. Developed on a CMS
        with coordination from a design team. Implemented specific client requirements for
        more efficient maintenance and functionality.
      `,
    stack: ["Go", "MySQL", "HTML", "CSS", "JavaScript"],
    items: [],
    url: "",
  },
  {
    startDate: "2021",
    endDate: "2022",
    name: "Golabs Tech",
    description: `
        Successfully contributed to six projects, demonstrating expertise in both
        individual and collaborative settings. Proficiently implemented multi-tenancy,
        tenant-aware processes, OAuth.
      `,
    stack: ["Strapi", "Supabase", "Node", "React", "Go", "PostgreSQL"],
    items: [],
    url: "",
  },
];

export const projects = [
  {
    image: GesmiaWeb,
    name: "Gesmia",
    description: "From launching landing pages to creating fast MVPs",
    items: [{}],
    url: "https://gesmia.com/",
  },
  {
    image: Xengly,
    name: "Xengly",
    description: "Building for startups and enterprises",
    items: [{}],
    url: "https://gesmia.com/",
  },
];

export const blogs = [
  {
    name: "¿Levantar inversión con criptomonedas, futurista o una estupidez?",
    time: "4 minutes",
    items: [
      {
        url: "https://medium.com/@mvttheo/levantar-inversi%C3%B3n-con-criptomonedas-futurista-o-una-estupidez-80dbfb5bc3a",
        icon: LinkSvg,
        description: "Read in Medium",
      },
    ],
  },
  {
    name: "¿Cómo un niño de 16 años crea una app para suprimir la depresión de los profesores?",
    time: "3 minutes",
    items: [
      {
        url: "https://medium.com/@mvttheo/como-un-ni%C3%B1o-de-16-a%C3%B1os-crea-una-app-para-suprimir-la-depresi%C3%B3n-de-los-profesores-4a6417fe8efe",
        icon: LinkSvg,
        description: "Read in Medium",
      },
    ],
  },
];

export const social = [
  {
    icon: github,
    name: "Github",
    url: "https://github.com/my-rv",
  },
  {
    icon: linkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/my-rv/",
  },
];
