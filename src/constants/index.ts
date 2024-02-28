import {
  frontend,
  backend,
  student,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  asp,
  csharp,
  codete,
  freelance,
  chat,
  moodCertificate,
  shop,
  vejshnoria,
  threejs,
  mobx,
  framer,
  MUI,
  nestjs,
  nextjs,
  postgres,
  prisma,
  frenchLearner,
  exchanger,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Student at WUT",
    icon: student,
  },
];

const technologies = [
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "ASP.NET",
    icon: asp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "NestJS",
    icon: nestjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "Framer",
    icon: framer,
  },
  {
    name: "Material UI",
    icon: MUI,
  },
  {
    name: "MobX",
    icon: mobx,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
];

const languages = [
  {
    name: "Russian",
    level: "C2",
    progress: 100,
  },
  {
    name: "Belarusian",
    level: "C2",
    progress: 100,
  },
  {
    name: "English",
    level: "C1",
    progress: 90,
  },
  {
    name: "Polish",
    level: "B2",
    progress: 75,
  },
  {
    name: "French",
    level: "A2",
    progress: 30,
  },
];

const experiences = [
  {
    title: "Full stack Developer intern",
    company_name: "Codete",
    icon: codete,
    iconBg: "#11263b",
    date: "Aug 2022 - Nov 2022",
    points: [
      "Developed 70% of user flow pages for a dynamic web application using React and SCSS, significantly improving UX and functionality.",
      "Integrated server and client-side components, ensuring cohesive operation within the application's architecture.",
      "Employed Scrum methodology to collaborate effectively with developers all over the glove, incorporating feedback to refine web interfaces and maintain high code quality",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Dec 2023",
    points: [
      "Developed and maintained the client-side of a medical AI helper application with React, focusing on UI/UX enhancement and interactivity.",
      "Implemented responsive designs ensuring cross-browser compatibility with extensive work on media processing features.",
      "Worked closely with the project lead on custom API integrations and utilized third-party libraries,.",
    ],
  },
];

const projects = [
  {
    name: "Exchanger",
    description:
      "Web application that enables the user to exchange currencies. User may select the currency and the amount of money to exchange and get the result.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: exchanger,
    source_code_link: "https://github.com/Stasnislau/exchanger",
  },
  {
    name: "Chat App",
    description:
      "Web application that enables the user to chat with other users. User may create a room and invite other users to join their rooms or use private messages.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/Stasnislau/Chat",
  },
  {
    name: "French Learner",
    description:
      "Web application that enables the user to learn French words. The learning process is done via interactive cards and engaging atmosphere.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Framer motion",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: frenchLearner,
    source_code_link: "https://github.com/Stasnislau/words-learner",
    live_link: "https://french-learner.netlify.app/",
  },
  {
    name: "Shop website",
    description:
      "Web application that enables the user to buy and sell products online. User may give all the information about the product and can also view the products sold by other users.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "NestJS",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://github.com/Stasnislau/shop-website",
    live_link: "https://starykshop.netlify.app/",
  },
  {
    name: "Mood Certificate",
    description:
      "Web application which can tell your mood based on your face expression. Based on your mood, it will generate a certificate with your name and mood.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: moodCertificate,
    source_code_link: "https://github.com/Stasnislau/shop-website",
  },
  {
    name: "Embassy",
    description:
      "Web application that enables users to apply for a visa or residence permit in Vejshnoria. User may fill in the application form and check the status of the application.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: vejshnoria,
    source_code_link: "https://github.com/Stasnislau/Embassy-of-Veyshnoria",
  },
];

export { services, technologies, experiences, projects, languages };
