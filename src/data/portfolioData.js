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
    "Passionate developer creating modern web and mobile applications using cutting-edge technologies.",
  about:
    "I am a third-year undergraduate at the Sri Lanka Institute of Information Technology (SLIIT), pursuing a BSc in Software Engineering. I am a motivated and organized individual with hands-on experience in programming, Kotlin-based mobile app development, and full-stack web development using the MERN stack. I have strong analytical skills, a collaborative mindset, and a diligent work ethic that enables me to contribute effectively to projects and continuously learn and improve.",
  location: "Sri Lanka",
  languages: ["English", "Sinhala"],
  email: "himasha.indiwari@example.com",
  github: "https://github.com/himashaindiwari",
  linkedin: "https://linkedin.com/in/himashaindiwari",
  cvPath: "/cv.pdf",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["Java", "JavaScript", "C", "C++", "SQL", "Kotlin", "Python", "PHP", "C#"],
  },
  {
    title: "Frontend",
    icon: "frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    icon: "tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Kubernetes",
      "Postman",
      "Android Studio",
      "Visual Studio Code",
      "Eclipse",
    ],
  },
  {
    title: "Soft Skills",
    icon: "soft",
    skills: [
      "Problem Solving",
      "Critical Thinking",
      "Analytical Thinking",
      "Team Collaboration",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "MindHaven — Cognitive Wellness Platform",
    category: "fullstack",
    featured: false,
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
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 2,
    title: "Ayubo — Appointment Booking Platform",
    category: "fullstack",
    featured: false,
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
    gradient: "from-cyan-400/20 to-teal-500/20",
  },
  {
    id: 4,
    title: "Music E-commerce User Management System",
    category: "web",
    featured: false,
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
