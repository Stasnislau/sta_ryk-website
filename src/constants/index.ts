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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    name: "Framer",
    icon: framer,
  },
  {
    name: "MobX",
    icon: mobx,
  },
  {
    name: "Material UI",
    icon: MUI,
  },
  {
    name: "NestJS",
    icon: nestjs,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
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
      "Developing and maintaining web applications using React.ts.",
      "Integrating Server and Client parts of the applications.",
      "Working in SCRUM methodology alongside other developers, designers, and product managers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Dec 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Working with multimedia content, APIs, and third-party libraries.",
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
    description: "Web application that enables the user to learn French words. The learning process is done via interactive cards and engaging atmosphere.",
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
