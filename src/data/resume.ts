export const profile = {
  name: "Mohsan Iqbal",
  title: "AI-Powered Full-Stack Web Developer",
  remoteOnly: false,
  email: "mohsaniqbal041@gmail.com",
  location: "Bahawalpur, Pakistan",
 locationUrl: "https://maps.google.com/?q=Bahawalpur,Pakistan",
  phone: "+92 3043285741",
  whatsappUrl: "https://web.whatsapp.com/send?phone=+923043285741",
  image: "/images/Untitled-1.png",
  pdf: "/Mohsan_Resume.pdf",
  github: {
    url: "https://github.com/MohsanCodes",
    username: "MohsanCodes",
    bio: "AI-Powered Full-Stack Web Developer | React, Next.js, Go & TypeScript",
    avatar: "https://github.com/MohsanCodes.png",
  },
  linkedinVanity: "mohsan-iqbal-1b581a327",
  social: [
    {
      label: "linkedin.com/in/mohsan-iqbal",
      href: "https://www.linkedin.com/in/mohsan-iqbal-1b581a327/",
      icon: "linkedin",
    },
    {
      label: "github.com/MohsanCodes",
      href: "https://www.github.com/MohsanCodes",
      icon: "github",
    },
    {
      label: "stackoverflow.com/mohsan-iqbal",
      href: "https://stackoverflow.com/users/32572176/mohsan-iqbal",
      icon: "stackoverflow",
    },
    {
      label: "mohsan-iqbal.com",
      href: "https://logiccrackstudio.netlify.app/",
      icon: "globe",
    },
  ],
};

export const careerSummary = `AI-powered Full-Stack Web Developer focused on building modern, responsive, and scalable web applications with React, Next.js, TypeScript, Go, REST APIs, and database-backed architectures. Skilled in turning UI/UX designs into reusable components, integrating APIs, managing authentication flows, and delivering production-ready web experiences across desktop and mobile.

Comfortable using modern AI-assisted development workflows to speed up research, debugging, UI iteration, testing, and code quality while keeping the final implementation clean, maintainable, and user-focused.`;

export type Job = {
  title: string;
  remote?: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
  technologiesHeading?: string;
  timeline?: "line" | "no-line";
};

export const workExperience: Job[] = [
 {
  title: "Full-Stack Web Developer | React, Next.js & Go",
  remote: "",
  company: "",
  companyUrl: "",
  period: "Apr 2025 - Present",
  description:
    "Building responsive, user-friendly, and full-stack web applications using modern JavaScript and TypeScript technologies.",

  achievements: [
    "Developed responsive and scalable web applications using React.js, Next.js, TypeScript, Go REST APIs, and Tailwind CSS.",
    "Converted Figma and UI/UX designs into pixel-perfect, reusable, and maintainable frontend components.",
    "Built dynamic user interfaces with reusable components, custom hooks, and modern React patterns.",
    "Integrated REST APIs, handled client-side state, and connected frontend features with backend services.",
    "Worked with database-driven application patterns using MongoDB, PostgreSQL, and API-first development.",
    "Optimized website performance, accessibility, SEO, and responsiveness across desktop, tablet, and mobile devices.",
    "Collaborated with designers and backend developers to implement new features and improve existing products.",
    "Maintained clean, reusable, and well-documented code following industry best practices."
  ],

  technologies: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "HTML5",
    "CSS3",
    "Go",
    "JWT Auth",
    "bcrypt",
    "REST APIs",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Git & GitHub"
  ],

  timeline: "no-line",
},
 {
title: "Web UI & Frontend Developer",
remote: "(Practice / Portfolio Projects)",
company: "Personal Projects",
companyUrl: "https://logiccrackstudio.netlify.app/",
period: "2024 - Present",
description: "Built frontend-focused web projects to strengthen practical experience with modern UI development, responsive layouts, and API-connected interfaces.",

achievements: [
"Created responsive landing pages, portfolio screens, dashboard layouts, and reusable UI sections using React, Next.js, Tailwind CSS, and Bootstrap.",
"Practiced converting design references into clean frontend components with attention to spacing, typography, mobile responsiveness, and browser consistency.",
"Implemented forms, navigation, cards, grids, modals, and reusable component patterns for real-world web app interfaces.",
"Used GitHub, npm, VS Code, Chrome DevTools, and deployment platforms to manage, debug, and publish web projects."
],

technologies: [
"React.js",
"Next.js",
"TypeScript",
"JavaScript",
"Tailwind CSS",
"Bootstrap",
"HTML5",
"CSS3",
"Responsive Design",
"GitHub",
"Netlify"
],

timeline: "line",
},
 {
title: "Full-Stack Platform Developer",
remote: "(Project)",
company: "Logic Crack Hub",
companyUrl: "https://warm-souffle-2d4fb3.netlify.app/",
period: "2025 - Present",
description: "Designed and documented a production-oriented premium assets platform with a Next.js frontend, Go REST API backend, Supabase database/storage, JWT authentication, Stripe payments, and Netlify deployment.",

achievements: [
"Built the platform architecture around a Next.js frontend calling protected Go REST API endpoints through Netlify Functions.",
"Implemented authentication requirements including registration, login, JWT bearer tokens, bcrypt password hashing, email verification OTPs, and password reset flows.",
"Planned role-based access for guests, registered users, and admins, including protected user routes and admin-only asset/user management.",
"Designed credit economy workflows for asset purchases, ownership checks, credit transactions, and Stripe Checkout webhook confirmation.",
"Defined database responsibilities for users, assets, favorites, reviews, downloads, credit purchases, requests, messages, notifications, and OTP verification records.",
"Integrated production services including Supabase PostgreSQL, Supabase Storage, Brevo transactional email, Stripe Checkout, GitHub, and Netlify environment variables."
],

technologiesHeading: "Technologies used in Logic Crack Hub:",

technologies: [
"Next.js",
"React",
"TypeScript",
"Tailwind CSS",
"Go",
"REST APIs",
"JWT",
"bcrypt",
"Supabase PostgreSQL",
"Supabase Storage",
"Brevo Email API",
"Stripe Checkout",
"Stripe Webhooks",
"Netlify Functions",
"Git",
"GitHub"
],

timeline: "no-line",
},
];

export type Project = {
  name: string;
  tag: string;
  tagline: string;
  href: string;
  icon: string;
};

export const projects: Project[] = [
  {
    name: "Logic Crack Hub",
    tag: "(Full-Stack)",
    tagline: "Next.js + Go platform with auth, credits, Stripe, and Supabase.",
    href: "https://warm-souffle-2d4fb3.netlify.app/",
    icon: "server",
  },
  {
    name: "ChatSphere",
    tag: "(Web App)",
    tagline: "Responsive real-time chat web application.",
    href: "https://chatsphere-orpin-xi.vercel.app/",
    icon: "globe",
  },
  {
    name: "Logic Crack Studio",
    tag: "(Portfolio)",
    tagline: "Responsive web portfolio and digital presence.",
    href: "https://logiccrackstudio.netlify.app/",
    icon: "globe",
  },
  {
    name: "Mini Games",
    tag: "(Web App)",
    tagline: "Collection of fun and interactive browser mini-games.",
    href: "https://mini-games-peach.vercel.app/",
    icon: "globe",
  },
];

export type SkillGroup = {
  title: string;
  icon: string;
  skills: { label: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI Development",
    icon: "robot",
    skills: [
      { label: "AI-Assisted Development", level: 4 },
      { label: "Prompt Engineering", level: 3 },
      { label: "LLM Integration Basics", level: 3 },
      { label: "Cursor AI / Copilot", level: 4 },
      { label: "Debugging with AI Tools", level: 4 },
    ],
  },
  {
    title: "Frontend Stack",
    icon: "layers",
    skills: [
      { label: "React.js", level: 4 },
      { label: "Next.js", level: 4 },
      { label: "TypeScript", level: 4 },
      { label: "JavaScript (ES6+)", level: 4 },
      { label: "Tailwind CSS", level: 4 },
      { label: "HTML5 & CSS3", level: 4 },
      { label: "Bootstrap", level: 3 },
      { label: "State Management", level: 3 },
      { label: "Figma to Code", level: 4 },
    ],
  },
  {
    title: "Backend & APIs",
    icon: "server",
    skills: [
      { label: "Go REST APIs", level: 3 },
      { label: "REST API Development", level: 3 },
      { label: "JWT Authentication", level: 3 },
      { label: "bcrypt Hashing", level: 3 },
      { label: "MongoDB", level: 3 },
      { label: "PostgreSQL", level: 3 },
      { label: "Supabase", level: 3 },
      { label: "Authentication Flows", level: 3 },
      { label: "API Integration", level: 4 },
      { label: "Server-Side Rendering", level: 4 },
    ],
  },
  {
    title: "Infrastructure",
    icon: "cloud",
    skills: [
      { label: "Git & GitHub", level: 4 },
      { label: "Visual Studio / VS Code", level: 4 },
      { label: "npm / Yarn", level: 4 },
      { label: "Chrome DevTools", level: 4 },
      { label: "Deployment & Hosting", level: 3 },
      { label: "Firebase", level: 3 },
      { label: "AWS Basics", level: 3 },
      { label: "Netlify Functions", level: 3 },
      { label: "Stripe Checkout", level: 3 },
    ],
  }
];

export const webFocus = [
  { label: "Frontend Development", icon: "layers" },
  { label: "Full-Stack Web Apps", icon: "server" },
  { label: "Go REST APIs", icon: "server" },
  { label: "JWT Authentication", icon: "tools" },
  { label: "REST API Integration", icon: "cloud" },
  { label: "Responsive UI", icon: "globe" },
  { label: "AI-Assisted Coding", icon: "robot" },
  { label: "Clean Code", icon: "laptop-code" },
];

export const education = {
  degree: "BS in Software Engineering",
  org: "Islamia University Bahawalpur",
  time: "Sep 2021 - Apr 2025",
};

export const languages = [
  { name: "Urdu", level: "Native" },
  { name: "English", level: "Intermediate" },
];

export const interests = [
  { label: "AI", icon: "robot" },
  { label: "Tech", icon: "microchip" },
  { label: "Web Apps", icon: "globe" },
  { label: "Coding", icon: "laptop-code" },
];

export const atsKeywords =
  "Full-Stack Developer, Frontend Developer, Backend Developer, AI-Powered Developer, React, Next.js, TypeScript, JavaScript, Go, Golang, REST APIs, API Integration, JWT Authentication, bcrypt, OTP Verification, Role-Based Access Control, Supabase, Supabase PostgreSQL, Supabase Storage, MongoDB, PostgreSQL, Stripe Checkout, Stripe Webhooks, Brevo Email API, Netlify Functions, GitHub Deployment, Tailwind CSS, Bootstrap, HTML5, CSS3, Responsive Web Design, SEO, Accessibility, Performance Optimization, Remote Developer.";
