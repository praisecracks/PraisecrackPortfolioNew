export const BRAND = {
  name: "Durotoluwa Praise",
  alias: "PC.dev",
  role: "Senior Full-Stack Developer",
  location: "Nigeria (Remote Global-Ready)",
};

export const TECHNOLOGIES = {
  Frontend: [
    "React",
    "Nativewind",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "NextJs"
  ],
  Backend: [
    "Node.js",
    "Express",
    "Firebase",
    "Ruby",
    "Go",
    "SQL",
    "MongoDB"
  ],
  Tools: [
    "Git",
    "GitHub",
    "NPM",
    "Postman",
    "Figma",
    "Docker",
    "AI"
  ]
};

export const SOCIALS = {
  github: import.meta.env.VITE_GITHUB_URL || "https://github.com/praisecracks",
  linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/praise-durotoluwa-9b3767357",
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER
    ? `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`
    : "https://wa.me/2347069991171",
  email: import.meta.env.VITE_EMAIL || "praiseoluwabumi@gmail.com",
};

export const EXPERIENCE = [
  {
    period: "Mar 2026 – Present",
    role: "Full Stack Engineer",
    company: "OgunTech Hub (Oguntechies)",
    location: "Abeokuta, Nigeria · Hybrid",
    description: "Engineer and maintain the backend notification system using Node.js and Express, handling real-time chat systems, ticket updates and live data events via WebSockets. Develop and ship mobile application features using React Native and Expo, working across both iOS and Android targets. Collaborate closely with the product team to design scalable API architecture.",
  },
  {
    period: "Jan 2021 – Mar 2026",
    role: "Full-Stack Web Developer",
    company: "PC Tech (Freelance)",
    location: "Remote",
    description: "Designed and developed responsive, user-friendly web applications using React, TypeScript, JavaScript, and Ruby. Built scalable full-stack applications with React/Bootstrap/Tailwind CSS frontends and Node.js/Firebase/Ruby on Rails backends.",
  },
  {
    period: "Jul 2025 – Jan 2026",
    role: "Mobile & Web Developer",
    company: "chikini Monie",
    location: "Akure, Nigeria · Hybrid",
    description: "Built and maintained MVP web and mobile applications, delivering feature-complete releases within tight iteration cycles. Improved UI consistency across the product and implemented new feature updates based on user feedback.",
  },
  {
    period: "Jun 2023 – Aug 2024",
    role: "Full Stack Engineer",
    company: "Rehort (Startup)",
    location: "Lagos, Nigeria · On-site",
    description: "Collaborated with a cross-functional team to develop scalable MERN stack applications from design to deployment. Built reusable frontend components and supported backend API integration to ensure consistent data flow.",
  },
  {
    period: "Jul 2020 – Sep 2022",
    role: "Tech Educator",
    company: "Transfer Multi-sort Electronics",
    location: "Remote",
    description: "Delivered interactive web development workshops training 15+ students in HTML5, CSS3, JavaScript, and React.js. Created beginner-friendly curricula introducing modern frontend frameworks.",
  }
];

export const PROJECTS = [
    {
      title: "CUSTOMHUB",
      description: "Workplace Management - Manage teams, track insights, and make smarter decisions, all in one place.",
      link: "https://github.com/praisecracks/CustomHub.git",
      tech: ["ReactNative", "Firebase", "Vite", "Tailwind CSS", "Google"],
      github: "https://github.com/praisecracks/CustomHub.git",
      image: "/customHub.jpg",
      platform: "Mobile",
      architecture: {
        overview: "A distributed system designed for real-time team synchronization across multiple platforms.",
        why: "Firebase was chosen for its real-time 'listener' capabilities, reducing server latency to <100ms for data synchronization.",
        flow: [
          "React Native Frontend → Mobile Request",
          "Firebase Auth → Secure Identity Verification",
          "Firestore NoSQL Database → Real-time State Sync",
          "Cloud Storage → Asset Management"
        ]
      }
    },
    {
      title: "CODEMASTER",
      description: "A competitive coding platform for learning, practicing, and solving real-world programming challenges with live code execution.",
      link: "https://codemasterx.com.ng",
      tech: ["NextJs", "Typescript", "Go", "Tailwind CSS", "Motion", "MongoDb", "AI"],
      github: "https://github.com/praisecracks/OBA-Luxury-Bespoke.git",
      image: "/codemaster.png",
      platform: "Web",
      architecture: {
        overview: "High-concurrency platform designed to execute untrusted code in secure, isolated environments.",
        why: "Go was chosen for the backend due to its native support for concurrency and efficient garbage collection, vital for handling thousands of simultaneous code executions.",
        flow: [
          "Next.js Frontend → Code Submission",
          "Go Backend → Request Queuing",
          "Isolated Runner (Sandbox) → Code Execution",
          "MongoDB → Result Persistence"
        ]
      }
    },
    {
      title: "IMILE GASTRONOMY",
      description: "ÌMÍLÈ • Gastronomy is a tribute to the eternal radiance of West African heritage.",
      link: "https://imile-gastronomy.netlify.app/",
      tech: ["Vite", "GSAP & Motion", "React", "Tailwind CSS", "Lenis"],
      github: "https://github.com/praisecracks/IMILE-Resturant.git",
      image: "/IMILE-Resturant.png",
      platform: "Web"
    },
   {
     title: "FAMCHAT",
     description: "Real-time family chat app with private, secure communication.",
     link: "https://famchatt.netlify.app",
     tech: ["React", "Firebase", "Vite", "Express.js", "Tailwind CSS", "Open AI"],
     github: "https://github.com/praisecracks/FamChat",
     image: "/Famchat.jpg",
     platform: "Web",
     architecture: {
       overview: "Secure messaging ecosystem utilizing serverless triggers for AI-powered features.",
       why: "WebSockets via Express and Firebase allow for instantaneous message propagation with minimal overhead.",
       flow: [
         "Client App → WebSocket Connection",
         "Express Server → Message Sanitization",
         "OpenAI API → Contextual Smart Reply Generation",
         "Firebase → Persistence & Push Notifications"
       ]
     }
   },
   {
     title: "PORTFOLINK",
     description: "Portfolio builder with sharable one-time links.",
     link: "https://rebrand.ly/portfolink7adb28",
     tech: ["React", "Tailwind CSS", "Vite", "Node.js", "Express.js", "Open AI"],
     github: "https://github.com/praisecracks/Portfolink",
     image: "/portfolink.jpg",
     platform: "Web"
   },
   {
     title: "DU FEED",
     description: "News/reporting system for Dominion University.",
     link: "https://du-feed.netlify.app",
     tech: ["React", "Tailwind CSS", "Vite", "Firebase"],
     github: "https://github.com/praisecracks/DU-FEED-APP",
     image: "/du-feed.jpg",
     platform: "Web"
   },
   {
     title: "ANIMAL HEALTH TRACKER",
     description: "Mobile app tracking animal health, connects to vet clinics.",
     link: "https://github.com/praisecracks/Animal-health-Tracker",
     tech: ["React Native", "Tailwind CSS", "Google Maps API"],
     github: "https://github.com/praisecracks/Animal-health-Tracker",
     image: "/animal-health-tracker.jpeg",
     platform: "Mobile"
    },
    {
      title: "OBA LUXURY",
      description: "OBA is a premium digital fashion experience crafted for a futuristic Nigerian luxury brand.",
      link: "https://oba-Luxury.netlify.app",
      tech: ["Vite", "Tailwind CSS", "Motion", "Lenis", "React", "emailjs"],
      github: "https://github.com/praisecracks/OBA-Luxury-Bespoke.git",
     image: "/OBA-Luxury-Bespoke.png",
     platform: "Web"
   }
];

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
