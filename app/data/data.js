import LinkSvg from "../../public/icons/Link.svg";

import figma from "../../public/icons/figma.svg";
import github from "../../public/icons/github.svg";
import linkedin from "../../public/icons/linkedin.svg";
import instagram from "../../public/icons/instagram.svg";

import GesmiaWeb from "../../public/images/projects/GesmiaWeb.png";
import PixelPerfect from "../../public/images/projects/PixelPerfect.png";
import Nothing from "../../public/images/projects/Nothing.png";

export const experience = [
  {
    startDate: "2021",
    endDate: "2024",
    name: "Full-stack Developer at Golabs",
    description: `
        Successfully contributed to six projects, demonstrating expertise in both
        individual and collaborative settings. Proficiently implemented multi-tenancy,
        tenant-aware processes, OAuth.
      `,
    stack: [
      "Laravel",
      "DotNet Core",
      "Angular",
      "Vue",
      "GraphQL",
    ],
    items: [],
    url: "", 
  },
  {
    startDate: "2021",
    endDate: "2024",
    name: "VADI GT – Process Management System",
    description: `
        Development and improvement of a digital valuation platform widely used across
        Latin America, allowing the management of time, impediments, communication,
        flexibility, personalized reporting, and a unique system for each consumer.
      `,
    stack: [
      "Laravel",
      "DotNet Core",
      "Angular",
      "Vue",
      "GraphQL",
      "Docker",
      "TSQL",
    ],
    items: [],
    url: "",
  },
  {
    startDate: "2021",
    endDate: "2024",
    name: "FOURTH PROJECT – American Student Tuition System",
    description: `
        Support team to synchronize student data with organizations through third parties.
        Enrollment Information System that manages important student data for schools
        (emergency contacts, family, and medical information).
      `,
    stack: ["Ruby", "Scripting"],
    items: [],
    url: "",
  },
  {
    startDate: "2021",
    endDate: "2024",
    name: "CRUZ ROJA CR – Benemérita Cruz Roja Costarricense",
    description: `
        Donation project: a new website for the Costa Rican Red Cross. Developed on a CMS
        with coordination from a design team. Implemented specific client requirements for
        more efficient maintenance and functionality.
      `,
    stack: ["CMS", "HTML", "CSS", "JavaScript"],
    items: [],
    url: "",
  },
  {
    startDate: "2021",
    endDate: "2024",
    name: "SECOND PROJECT – Organization Management System",
    description: `
        SaaS application for companies providing outsourcing services, centralizing
        production processes. Features include project cost management, time tracking,
        estimations, project teams, business units, roles/permissions, client satisfaction,
        paid time off management, and more.
      `,
    stack: [
      "Laravel",
      ".NET Core",
      "Docker",
      "Pusher",
      "Multi-tenancy",
      "TSQL",
    ],
    items: [],
    url: "",
  },
  {
    startDate: "2021",
    endDate: "2021",
    name: "FIRST PROJECT – Educational System",
    description: `
        A school program that promotes the use and development of life skills as a protective
        factor against early onset of psychoactive substance use. Developed initially as a 
        high school practice project.
      `,
    stack: ["Java", "MySQL", "HTML", "CSS", "JavaScript"],
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
    icon: figma,
    name: "Figma",
    url: "https://www.figma.com/@matthewvogas",
  },
  {
    icon: github,
    name: "Github",
    url: "https://github.com/matthewvogas",
  },
  {
    icon: linkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/matthewvogas/",
  },
  {
    icon: instagram,
    name: "Instagram",
    url: "https://www.instagram.com/matthewvogas/",
  },
];
