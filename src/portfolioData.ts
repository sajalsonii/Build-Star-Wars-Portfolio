export type Skill = {
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "Tools";
  level: number;
  years: number;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  demo: string;
  year: number;
  status: "Deployed" | "In development";
  features: string[];
};

export const portfolio = {
  personal: {
    name: "Arjun Mehta",
    initials: "AM",
    title: "Full-Stack Developer & Computer Science Student",
    location: "Mumbai, India",
    email: "arjun.mehta.dev@example.com",
    github: "https://github.com/arjunmehta-dev",
    linkedin: "https://www.linkedin.com/in/arjunmehta-dev",
    resume: "/resume.pdf",
    university: "Vidyatech Institute of Technology",
    graduationYear: 2026,
    intro:
      "I build modern web applications, explore emerging technologies, and turn complex ideas into simple digital experiences. Currently pursuing my Computer Science degree while building products that live at the intersection of technology, design, and problem solving.",
  },
  about: {
    eyebrow: "Operator profile",
    headline: "Turning complex problems into clear digital experiences.",
    paragraphs: [
      "I'm a Computer Science student and aspiring software engineer who enjoys building full-stack applications and experimenting with new technologies. My journey started with curiosity about how websites work and gradually evolved into a passion for creating complete products from the ground up.",
      "I enjoy working across the entire development stack, from designing intuitive interfaces to building APIs and database architectures behind them. Outside of coding, I spend time exploring open-source projects, learning about AI, and working on side projects that challenge me to think differently.",
    ],
    principles: ["Build with purpose", "Keep learning", "Solve problems, not symptoms"],
  },
  education: [
    {
      id: "uni",
      period: "2022 — 2026",
      degree: "B.Tech in Computer Science and Engineering",
      university: "Vidyatech Institute of Technology",
      description:
        "Pursuing a Bachelor's degree in Computer Science with a focus on software engineering, web technologies, databases, and artificial intelligence.",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Artificial Intelligence",
      ],
      achievements: [
        "Maintained a 8.7/10 CGPA",
        "Winner of the 2025 University Hackathon",
        "Technical Lead for the university coding club",
      ],
    },
  ],
  skills: [
    { name: "JavaScript", category: "Languages", level: 92, years: 3 },
    { name: "TypeScript", category: "Languages", level: 86, years: 2 },
    { name: "Python", category: "Languages", level: 84, years: 3 },
    { name: "Java", category: "Languages", level: 76, years: 2 },
    { name: "React", category: "Frontend", level: 94, years: 3 },
    { name: "Next.js", category: "Frontend", level: 88, years: 2 },
    { name: "Tailwind CSS", category: "Frontend", level: 91, years: 2 },
    { name: "Node.js", category: "Backend", level: 87, years: 2 },
    { name: "Express.js", category: "Backend", level: 84, years: 2 },
    { name: "PostgreSQL", category: "Backend", level: 79, years: 2 },
    { name: "MongoDB", category: "Backend", level: 75, years: 2 },
    { name: "Git", category: "Tools", level: 91, years: 3 },
    { name: "Docker", category: "Tools", level: 72, years: 1 },
    { name: "Figma", category: "Tools", level: 78, years: 2 },
  ] satisfies Skill[],
  projects: [
    {
      id: "01",
      name: "NovaBoard",
      description: "A collaborative project management platform for student teams.",
      longDescription:
        "NovaBoard is a full-stack collaboration platform designed to help student teams organize projects, assign tasks, track deadlines, and communicate in one place. The application includes real-time updates, role-based access, project analytics, and a responsive dashboard.",
      technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      github: "https://github.com/arjunmehta-dev/novaboard",
      demo: "https://novaboard-demo.example.com",
      year: 2026,
      status: "Deployed",
      features: [
        "Real-time task updates",
        "Role-based project management",
        "Interactive analytics dashboard",
      ],
    },
    {
      id: "02",
      name: "Astra AI",
      description: "An AI-powered study assistant for university students.",
      longDescription:
        "Astra AI is an intelligent study companion that helps students summarize notes, generate practice questions, organize study sessions, and interact with their learning material through a conversational interface.",
      technologies: ["React", "Python", "FastAPI", "PostgreSQL"],
      github: "https://github.com/arjunmehta-dev/astra-ai",
      demo: "https://astra-ai-demo.example.com",
      year: 2025,
      status: "Deployed",
      features: [
        "AI-powered note summarization",
        "Automatic quiz generation",
        "Personalized study sessions",
      ],
    },
    {
      id: "03",
      name: "Orbit Finance",
      description: "A personal finance dashboard for tracking expenses and budgets.",
      longDescription:
        "Orbit Finance is a personal finance application that helps users understand their spending habits through interactive visualizations, budget tracking, recurring expense management, and monthly financial insights.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      github: "https://github.com/arjunmehta-dev/orbit-finance",
      demo: "https://orbit-finance-demo.example.com",
      year: 2025,
      status: "Deployed",
      features: [
        "Interactive expense charts",
        "Monthly budget tracking",
        "Spending category insights",
      ],
    },
    {
      id: "04",
      name: "Sentinel",
      description: "A developer-focused API monitoring and alerting platform.",
      longDescription:
        "Sentinel monitors APIs and services, tracks response times and availability, and alerts developers when a service becomes unavailable or starts showing abnormal behavior.",
      technologies: ["Node.js", "Express.js", "React", "Docker"],
      github: "https://github.com/arjunmehta-dev/sentinel",
      demo: "",
      year: 2024,
      status: "In development",
      features: [
        "API uptime monitoring",
        "Response-time analytics",
        "Automated service alerts",
      ],
    },
  ] satisfies Project[],
  experience: [
    {
      year: "2022",
      type: "ORIGIN",
      title: "The Beginning",
      text: "Started my Computer Science journey and wrote my first lines of code. What began as curiosity quickly became an obsession with understanding how software works.",
    },
    {
      year: "2023",
      type: "BUILD",
      title: "Learning to Build",
      text: "Moved beyond coursework and started building real applications with JavaScript, React, Python, and Node.js. Began contributing to university coding projects and open-source repositories.",
    },
    {
      year: "2024",
      type: "EXPAND",
      title: "Going Full-Stack",
      text: "Started developing complete products from frontend to backend, learning about databases, APIs, authentication, deployment, and scalable application architecture.",
    },
    {
      year: "2025",
      type: "DISCOVER",
      title: "Exploring AI",
      text: "Began exploring artificial intelligence and integrated AI capabilities into personal projects. Built Astra AI to experiment with how AI could improve the learning experience for students.",
    },
    {
      year: "2026",
      type: "EXPAND",
      title: "Building for the Future",
      text: "Currently focused on becoming a stronger software engineer, contributing to meaningful projects, exploring emerging technologies, and preparing for the next stage of my career.",
    },
  ],
};

export const navItems = [
  "home",
  "about",
  "education",
  "skills",
  "projects",
  "experience",
  "contact",
];
