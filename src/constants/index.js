export const myProjects = [
  {
    id: 1,
    title: "Kyu Pal - Social Party App",
    description:
      "Social party planning and event management app built with Flutter, featuring group coordination and interactive party features.",
    subDescription: [
      "Developed cross-platform social app using Flutter for iOS and Android with party planning features.",
      "Implemented group management, event coordination, and real-time messaging capabilities.",
      "Built interactive party features with gamification elements and social engagement tools.",
      "Integrated Google Groups for community management and Play Store distribution.",
    ],
    href: "https://play.google.com/store/apps/details?id=com.partypal.app&pcampaignid=web_share",
    logo: "",
    image: "/assets/projects/kyupal.png",
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: "/assets/logos/flutter.svg",
      },
      {
        id: 3,
        name: "Firebase",
        path: "/assets/logos/firebase.svg",
      },
      {
        id: 4,
        name: "Google Play",
        path: "/assets/logos/playstore.svg",
      },
    ],
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.partypal.app&pcampaignid=web_share",
    communityUrl: "https://groups.google.com/g/kyu-pal-testers",
  },
  {
    id: 7,
    title: "Snake and Ladder Game",
    description:
      "Classic Snake and Ladder board game implemented as a mobile application with modern UI and multiplayer capabilities.",
    subDescription: [
      "Built classic Snake and Ladder game using modern mobile development frameworks.",
      "Implemented smooth animations, interactive gameplay, and engaging user experience.",
      "Added multiplayer functionality and game state management for competitive play.",
      "Optimized for mobile devices with responsive design and touch-friendly controls.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/snake_and_ladder.png",
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: "/assets/logos/flutter.svg",
      },
      {
        id: 3,
        name: "Firebase",
        path: "/assets/logos/firebase.svg",
      },
      {
        id: 4,
        name: "Google Play",
        path: "/assets/logos/playstore.svg",
      },
    ],
    demoUrl: "https://appetize.io/embed/b_5wtyh7oqxs6aguvk4wxr4fzwdu",
  },
  {
    id: 8,
    title: "Paraphraser — Next.js + NestJS",
    description:
      "Paraphraser tool with a Next.js frontend and a NestJS backend that uses a RapidAPI paraphrasing service and a deterministic fallback when the external API fails.",
    subDescription: [
      "Built a Next.js frontend that connects to a NestJS backend API.",
      "Backend integrates with RapidAPI (rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com) and falls back to a lightweight deterministic paraphraser when needed.",
      "Designed to preserve important phrases and provide a consistent fallback to avoid incorrect substitutions.",
      "Frontend deployed to Netlify (live demo) and backend is hosted on Render",
    ],
    href: "https://paraphraser-me.netlify.app/",
    logo: "",
    image: "/assets/projects/paraphraser.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 5,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 2,
        name: "NestJS",
        path: "/assets/logos/nestjs.svg",
      },
      {
        id: 3,
        name: "RapidAPI",
        path: "/assets/logos/api.svg",
      },
    ],
    demoUrl: "https://paraphraser-me.netlify.app/",
    communityUrl: "",
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/robert-cumahig-4992aa329",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/thirteenthbert/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Tech Lead / Frontend Software Engineer",
    job: "Project Moonshot (Fintech)",
    date: "2023 - Present",
    contents: [
      "Leading frontend engineering initiatives in the fintech domain with focus on scalable architecture.",
      "Making key architecture decisions to ensure scalability and performance across multiple projects.",
      "Mentoring and guiding team members to improve technical skills and delivery quality.",
      "Overseeing delivery timelines and ensuring alignment with product goals and business objectives.",
      "Built Mobile Banking App, Core Banking System, Water Utility System, and Online Voting System using Flutter (Dart).",
    ],
  },
  {
    title: "Frontend Software Engineer",
    job: "Project Moonshot (Fintech)",
    date: "2022 - 2023",
    contents: [
      "Built and maintained cross-platform fintech applications using Flutter and modern web technologies.",
      "Collaborated with backend engineers and UI/UX designers to deliver responsive, scalable interfaces.",
      "Contributed to the development of secure and high-performance features for financial platforms.",
      "Developed Voter Management System using Next.js (TypeScript) and Marketplace Platform using React.",
      "Implemented security best practices and regulatory compliance for financial applications.",
    ],
  },
  {
    title: "Part-time Fullstack Developer",
    job: "Visitant Corporation",
    date: "2022 - 2023",
    contents: [
      "Built backend services in Node.js to support scalable APIs, authentication, and data management.",
      "Developed mobile interfaces in Flutter, delivering responsive experiences across iOS and Android.",
      "Participated in feature planning and iteration with product owners and cross-functional teams.",
      "Collaborated on requirement refinement, effort estimation, and feature delivery scheduling.",
      "Worked on confidential enterprise project under NDA with focus on scalability and performance.",
    ],
  },
  {
    title: "Web Developer - Frontend",
    job: "Crescode Corporation",
    date: "2021 - 2023",
    contents: [
      "Built Wine Management System with Next.js storefront and React + Ant Design Pro admin portal.",
      "Developed Sports Betting Platform storefront using Next.js and admin dashboard with Ant Design.",
      "Created company website and branding pages with optimized performance using React and Next.js.",
      "Built multiple client web applications focusing on scalability, usability, and maintainability.",
      "Delivered responsive interfaces and enhanced user experiences across various industry projects.",
    ],
  },
];

export const reviews = [
  {
    name: "Sarah Johnson",
    username: "@sarahj",
    body: "Robert's technical leadership transformed our fintech platform. His Flutter expertise delivered exceptional results.",
    img: "https://robohash.org/sarah",
  },
  {
    name: "Mike Chen",
    username: "@mikechen",
    body: "Working with Robert was incredible. His attention to detail and architecture decisions are outstanding.",
    img: "https://robohash.org/mike",
  },
  {
    name: "Emily Rodriguez",
    username: "@emily",
    body: "Robert mentored our team to new heights. His passion for clean code is truly inspiring.",
    img: "https://robohash.org/emily",
  },
  {
    name: "David Kim",
    username: "@davidk",
    body: "The mobile banking app Robert built exceeded all expectations. Highly recommend his expertise!",
    img: "https://robohash.org/david",
  },
  {
    name: "Lisa Wang",
    username: "@lisaw",
    body: "Incredible work! Robert's cross-platform development skills are phenomenal.",
    img: "https://robohash.org/lisa",
  },
  {
    name: "Alex Thompson",
    username: "@alexthompson",
    body: "Robert's fintech solutions are cutting-edge. The best developer I've worked with.",
    img: "https://robohash.org/alex",
  },
];
