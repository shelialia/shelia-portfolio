export type Experience = {
  company: string;
  role: string;
  dateRange: string;
  bullets: string[];
  color: string;
  initials: string;
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export type Hackathon = {
  event: string;
  year: number;
  project: string;
  achievement: string;
  description: string;
};

export type SkillGroup = {
  label: string;
  skills: string[];
  color: string;
};

export const experiences: Experience[] = [
  {
    company: "Stripe",
    role: "Incoming SWE Intern",
    dateRange: "May 2026",
    bullets: [
      "Incoming software engineering intern at one of the world's leading fintech companies.",
    ],
    color: "#b5a4f5",
    initials: "S",
  },
  {
    company: "PayPal",
    role: "Full-Stack SWE Intern, Global Compliance",
    dateRange: "May – Dec 2025",
    bullets: [
      "Extended customer onboarding system with new compliance flows using Java and Spring Boot.",
      "Built a compliance SME chatbot with a RAG pipeline; cut solution-discovery time by 30%.",
      "Set up MCP server and a configurable Slack bot adopted by multiple internal teams.",
    ],
    color: "#a8d8c8",
    initials: "P",
  },
  {
    company: "Jane Street Capital",
    role: "INSIGHT Program — SWE Track",
    dateRange: "Jan 2025",
    bullets: [
      "1 of 20 students selected across Asia for Jane Street's competitive INSIGHT program.",
      "Placed 1st in the OCaml Bee, a functional programming competition among participants.",
    ],
    color: "#fde8c2",
    initials: "JS",
  },
];

export const projects: Project[] = [
  {
    name: "Synthesize",
    description:
      "AI-driven user feedback analysis tool with a real-time dashboard. Integrates GPT-4o with CO-STAR prompt engineering to surface actionable product insights at scale.",
    tags: ["React", "Next.js", "FastAPI", "OpenAI", "Firebase", "TypeScript"],
    githubUrl: "https://github.com/shelialia",
    featured: true,
  },
];

export const hackathons: Hackathon[] = [
  {
    event: "NUS Fintech Hackathon",
    year: 2024,
    project: "TrustChain Lite",
    achievement: "🥈 1st Runner Up",
    description: "Blockchain-based trust verification system for financial transactions.",
  },
  {
    event: "OGP Build For Good Environment",
    year: 2024,
    project: "PackBack",
    achievement: "Participant",
    description: "Mobile app for packaging waste redistribution and circular economy.",
  },
  {
    event: "Morgan Stanley Code To Give",
    year: 2025,
    project: "DonorConnect",
    achievement: "Participant",
    description: "FastAPI + Gemini LLM backend for intelligent donor tracking and engagement.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "OCaml"],
    color: "bg-primary/20 text-foreground border-primary/30",
  },
  {
    label: "Frontend",
    skills: ["React", "React Native", "Next.js", "Tailwind CSS"],
    color: "bg-secondary/40 text-foreground border-secondary/50",
  },
  {
    label: "Backend",
    skills: ["FastAPI", "Spring Boot", "Node.js"],
    color: "bg-accent/30 text-foreground border-accent/40",
  },
  {
    label: "Data & AI",
    skills: ["PostgreSQL", "BigQuery", "RAG", "OpenAI API", "Gemini API"],
    color: "bg-accent2/40 text-foreground border-accent2/50",
  },
  {
    label: "Tools",
    skills: ["Firebase", "Supabase", "Postman", "Git", "MCP"],
    color: "bg-muted text-foreground border-border",
  },
];

export const socialLinks = {
  email: "sheliateo842@gmail.com",
  linkedin: "https://linkedin.com/in/shelia-teo",
  github: "https://github.com/shelialia",
};
