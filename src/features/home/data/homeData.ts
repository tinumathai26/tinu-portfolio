export type Experience = {
  role: string;
  company: string;
  period: string;
  description?: string;
};

export const heroData = {
  introLabel: "I’m",
  name: "Tinu Mathai",
  imageAlt: "Tinu Mathai",
  roles: ["Product Designer", "Software Developer"],
} as const;

export const aboutData = {
  title: "About",
  paragraphs: [
    "I design and build digital products focused on clarity, usability, and meaningful user experiences. As an impact-driven designer and developer, I aim to create products that deliver real value to users.",
    "With over five years of experience in UX design, I have worked on intuitive interfaces, improved user flows, and product experiences that balance user needs with technical feasibility. Alongside design, I also develop modern web and mobile applications, turning ideas into functional products.",
    "My approach combines design thinking with technical implementation, allowing me to view products from both a user experience and engineering perspective.",
    "Outside of work, I enjoy organizing living spaces, reading novels, collecting die-cast cars, traveling, exploring new technologies, and continuously learning tools that help me grow as a designer and developer.",
  ],
} as const;

export const experienceData = {
  title: "Experience",
  items: [
    {
      role: "Product Designer | Software Developer",
      company: "Freelance",
      period: "2025 - Today",
      description: "Designing products and developing modern web applications.",
    },
    {
      role: "Senior UI/UX Designer",
      company: "Polus Solution Pvt Ltd",
      period: "2019 - 2023",
      description: "Led UX design for enterprise and product platforms.",
    },
    {
      role: "Graphic Designer | Photo Editor",
      company: "Freelance",
      period: "2016 - 2019",
      description: "Created branding, graphics, and digital media designs.",
    },
  ] satisfies Experience[],
} as const;
