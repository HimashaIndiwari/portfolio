

import cricketXpertImage from "../assets/crickerexpert.png";
import lifeAppImage from "../assets/lifeapp.png";
import musicImage from "../assets/music.png";
import mindHavenImage from "../assets/mindhaven.png";
import ayuboImage from "../assets/ayubo.png";
import onlineAuctionImage from "../assets/onlineauction.png";

/**
 * Centralized portfolio content data.
 * Update links, email, and CV path here for easy maintenance.
 */

export const personalInfo = {
  name: "Himasha Indiwari",
  title: "BSc (Hons) in Information Technology",
  specialization: "Specializing in Software Engineering",
  roles: [
    "Software Engineering Undergraduate",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Mobile App Developer",
  ],
  greeting: "Hello, I'm",
  intro:
    "Software Engineering undergraduate at SLIIT with experience in MERN stack development, Java applications, and Kotlin mobile solutions.",
  about:
    "I am a third-year Software Engineering undergraduate at the Sri Lanka Institute of Information Technology (SLIIT) with hands-on experience in full-stack web development, mobile application development, and software engineering principles.",
  location: "Sri Lanka",
  languages: ["English", "Sinhala"],
  email: "himasha.indiwari@example.com",
  github: "https://github.com/himashaindiwari",
  linkedin: "https://linkedin.com/in/himashaindiwari",
  cvPath: "/cv.pdf",
};

export const sectionIllustrations = {
  hero: "/illustrations/hero-studio.svg",
  about: "/illustrations/about-profile.svg",
  skills: "/illustrations/skills-architecture.svg",
  education: "/illustrations/education-campus.svg",
  contact: "/illustrations/contact-recruiter.svg",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Stack", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const skillCategories = [
  {
    title: "Frontend",
    icon: "code",
    skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "frontend",
    skills: ["Node.js", "Express.js", "Java", "Kotlin"],
  },
  {
    title: "Database",
    icon: "backend",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Others",
    icon: "database",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

export const projects = [
  {
    id: 1,
    title: "MindHaven — Cognitive Wellness Platform",
    category: "fullstack",
    featured: false,
    image: mindHavenImage,
    kicker: "Cognitive Wellness Platform",
    collaboration: "Team Project",
    year: "2026",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Clerk", "Gemini API"],
    description:
      "Developed mood tracking and medication reminder features for an elderly-focused cognitive wellness platform.",
    features: [
      "Mood logging",
      "Mood analytics",
      "Mood history",
      "Medication reminders",
      "Streak tracking",
      "Caregiver support",
    ],
    actions: [{ label: "Live Demo", href: "#projects", variant: "primary" }],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 2,
    title: "Ayubo — Appointment Booking Platform",
    category: "fullstack",
    featured: false,
    image: ayuboImage,
    kicker: "Healthcare Management Platform",
    collaboration: "Team Project",
    year: "2026",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Clerk"],
    description:
      "Developed appointment booking and management features for a healthcare platform.",
    features: [
      "Appointment creation",
      "Slot selection",
      "Availability checking",
      "Booking management",
      "Schedule handling",
    ],
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: 3,
    title: "CricketXpert – Full-Stack E-commerce & Booking System",
    category: "fullstack",
    featured: true,
    image: cricketXpertImage,
    kicker: "E-commerce & Booking System",
    collaboration: "Team Project",
    year: "2026",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Mongoose",
      "NodeMailer",
    ],
    description:
      "Developed a full-stack e-commerce and cricket ground booking platform.",
    features: [
      "Product management",
      "Search and filtering",
      "Shopping cart",
      "Secure checkout",
      "Order tracking",
      "Venue booking",
      "Admin dashboard",
      "Sales reports",
      "Email notifications",
    ],
    actions: [
      { label: "Frontend Repo", href: "https://github.com/himashaindiwari" },
      { label: "Backend Repo", href: "https://github.com/himashaindiwari" },
    ],
    gradient: "from-cyan-400/20 to-teal-500/20",
  },
  {
    id: 4,
    title: "Music E-commerce User Management System",
    category: "web",
    featured: false,
    image: musicImage,
    kicker: "Music E-commerce Platform",
    collaboration: "Individual Work",
    year: "2025",
    techStack: ["Java", "MySQL", "HTML", "JavaScript"],
    description:
      "Developed a complete user management system using MVC architecture.",
    features: [
      "Registration",
      "CRUD operations",
      "Profile management",
      "MVC architecture",
    ],
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: 5,
    title: "Online Auction Platform",
    category: "web",
    featured: false,
    image: onlineAuctionImage,
    kicker: "Online Auction Platform",
    collaboration: "Individual Work",
    year: "2025",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    description:
      "Developed a secure registration and profile management system.",
    features: ["Authentication", "Profile management", "Database integration"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 6,
    title: "Wellness Mate Daily Habit Tracker",
    category: "mobile",
    featured: false,
    image: lifeAppImage,
    kicker: "Daily Habit Tracker",
    collaboration: "Individual Work",
    year: "2026",
    techStack: ["Kotlin", "Android Studio"],
    description:
      "Mobile application for personal wellness and habit tracking.",
    features: [
      "Habit tracking",
      "Mood journal",
      "Hydration reminders",
      "Charts and analytics",
      "Widgets",
      "Sensor integration",
    ],
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
];

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
];

export const education = [
  {
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    degree: "BSc (Hons) in Information Technology",
    specialization: "Specializing in Software Engineering",
    period: "2023 - Present",
    icon: "university",
  },
  {
    institution: "President's Girls' College, Sri Jayawardenepura Kotte",
    degree: "G.C.E Advanced Level — Commerce Stream",
    subjects: ["Business Studies", "Accounting", "Economics"],
    results: "1C and 2S",
    period: "",
    icon: "school",
  },
];

export const stats = [
  { label: "Projects", value: 6, suffix: "+" },
  { label: "Technologies", value: 25, suffix: "+" },
  { label: "Years of Study", value: 3, suffix: "" },
];
