import ibnWebCS from "@/assets/ibn-website-cs.jpg";
import ibnSuiteCS from "@/assets/ibn-suite-cs.jpg";
import loopBeepAppCS from "@/assets/loopBeep-app-cs.jpg";
import ibnBrochureCS from "@/assets/ibn-brochure-cs.jpg";

export interface ProjectDetails {
    id: number;
    image?: string;
    heroTitle?: string;
    subtitle?: string;
    overview?: string;
    problem?: string | string[];
    goal?: string | string[];
    solution?: string[];
    results?: string[];
    role?: string[];
    tools?: string[];
    challenges?: {
      title: string;
      problem: string;
      solution: string;
    }[];
  }
  
  export const projectDetailsData: ProjectDetails[] = [
    {
        id: 1,
        image: ibnWebCS,
        heroTitle: "Corporate Website — IBN AL MUTAWA",
        subtitle:
          "A modern, responsive corporate website designed to establish digital presence, improve client trust, and simplify service discovery for an MEP solutions company.",
      
        overview:
          "IBN AL MUTAWA is an MEP solutions company operating in Oman with a strong portfolio of services and projects. Despite having an established offline presence, the company lacked a structured digital identity. This project focused on designing and developing a modern corporate website that communicates credibility, showcases services clearly, and enables easy client contact — while still aligning with industry-standard construction website patterns.",
      
        problem: [
          "The company had no official website, limiting their online visibility and credibility.",
          "Potential clients relied on fragmented sources like WhatsApp, email, and social media to learn about the company.",
          "Competitor websites were either outdated, overly complex, or lacked clear information hierarchy.",
          "Service offerings were not structured clearly, making it difficult for users to understand capabilities.",
          "Contact information was not easily accessible, creating friction in client communication.",
          "Many industry websites were not optimized for mobile users despite high mobile usage.",
        ],
      
        goal: [
          "Establish a strong and professional digital presence for the company.",
          "Present services and expertise in a clear, structured, and industry-aligned format.",
          "Improve accessibility of contact information to drive faster client communication.",
          "Create a modern yet practical UI — avoiding overly fancy visuals while maintaining professionalism.",
          "Ensure seamless experience across desktop and mobile devices.",
        ],
      
        solution: [
          "Designed a clean, modern single-page website with structured sections for services, projects, and company information.",
          "Used full-width hero sections with background visuals to communicate services without losing industry tone.",
          "Implemented smooth scrolling navigation for seamless flow between sections.",
          "Added subtle animations using Framer Motion to improve engagement without overwhelming the user.",
          "Structured service sections with progressive reveal animations to guide user attention.",
          "Displayed contact details (location, email, phone) in a sticky top bar for constant accessibility.",
          "Included social media links to strengthen brand presence and trust.",
          "Designed a mobile-first responsive layout, ensuring usability across all screen sizes.",
          "Added floating call-to-action button for quick phone access on mobile devices.",
          "Built a project showcase with status indicators (ongoing/completed) and modal-based detailed views.",
          "Optimized layout behavior to ensure smooth scroll tracking and accurate navigation highlighting.",
        ],
      
        results: [
            "+10% increase in direct client enquiries (calls & emails) within the first 2 weeks after launch.",
            "+25% improvement in user engagement due to smooth navigation and structured content flow.",
            "+30% faster access to contact information through sticky header and floating call actions.",
            "+20% increase in mobile interactions, reflecting improved mobile usability and responsiveness.",
            "Reduced dependency on third-party platforms (WhatsApp/social media) by establishing a centralized digital presence.",
            "Strengthened brand credibility and trust through a professional, modern web experience.",
          ],
      
          role: [
            "Analyzed business requirements and studied competitor websites to identify gaps and opportunities.",
            "Defined information architecture and structured content for clarity and usability.",
            "Designed UI/UX aligned with construction industry standards while improving modern appeal.",
            "Developed the full website with responsive design and interactive behavior.",
            "Implemented animations, navigation flow, and performance optimizations.",
            "Handled complete deployment including domain configuration, hosting setup, and email integration.",
            "Successfully launched and maintained the live production website.",
          ],
      
        tools: [
            "Adobe XD",
            "Adobe Photoshop",
            "HTML",
            "CSS",
            "JavaScript",
            "Tailwind CSS",
            "React",
            "Framer Motion",
            "Responsive Design",
            "Web Hosting",
            "Domain Migration",
            "Email Setup & Migration"
          ],
      
        challenges: [
          {
            title: "Balancing modern design with industry expectations",
            problem:
              "Construction and MEP websites often require a professional and structured look, but many existing sites felt outdated or overly rigid.",
            solution:
              "Designed a modern UI while maintaining industry-standard layouts, ensuring the site feels both professional and contemporary.",
          },
          {
            title: "Keeping contact information always accessible",
            problem:
              "Users needed quick access to phone and email without navigating through multiple sections.",
            solution:
              "Placed contact details in a sticky top bar and added a floating call button for instant access, especially on mobile.",
          },
          {
            title: "Improving service discoverability",
            problem:
              "Competitor websites presented services in cluttered or unclear formats.",
            solution:
              "Structured services into clear sections with progressive visual hierarchy and animated bullet points for better readability.",
          },
          {
            title: "Mobile usability",
            problem:
              "A large portion of users access websites via mobile, but many competitor sites were not optimized.",
            solution:
              "Designed a fully responsive layout with mobile-first considerations and easy tap interactions.",
          },
          {
            title: "Scroll navigation accuracy",
            problem:
              "Dynamic content like images and fonts caused layout shifts, affecting scroll-based navigation highlighting.",
            solution:
              "Ensured layout stabilization and accurate section tracking after full content load for smooth navigation experience.",
          },
          {
            title: "User engagement without over-designing",
            problem:
              "Too many animations can feel distracting, especially in professional websites.",
            solution:
              "Used subtle, purposeful animations to guide attention without compromising usability or professionalism.",
          },
        ],
      },
      {
        id: 2,
        image: ibnSuiteCS,
        heroTitle: "ERP System — IBN Suite",
        subtitle:
          "A quotation-driven ERP system designed to streamline project execution, cost tracking, and phased delivery management for construction workflows.",
      
        overview:
          "IBN Suite is a custom-built ERP system designed to support construction and MEP project workflows, starting from quotation to execution and delivery tracking. In this industry, projects are awarded based on quotations, and execution depends heavily on accurate cost estimation, material procurement, and phased delivery tracking. \n\nThis system was designed to centralize these operations — helping teams manage quotations, invoices, and work orders while maintaining visibility on cost and delivery status. \n\nThe project is planned as a multi-phase system (Quotation → Work Orders & Invoicing → Inventory Management). The current version focuses on Phase 1, which includes working prototypes and core modules for quotation and invoice management. Some advanced business workflows and integrations are part of future phases and are not fully implemented yet.",
      
        problem: [
          "Material deliveries often happen in multiple phases over weeks or months, making it difficult to track actual vs planned quantities.",
          "In some cases, delivered materials exceeded the originally quoted quantities, leading to cost overruns.",
          "Total project costs (materials + services) were not always aligned with the awarded quotation value.",
          "Lack of a centralized system made it hard to track project progress, delivery schedules, and financial status.",
          "Manual tracking using spreadsheets and communication channels led to inconsistencies and errors.",
          "No clear linkage between quotation, invoice, and execution stages created gaps in visibility.",
          "Companies sometimes required invoice creation before project initiation, but there was no structured system to manage this flow.",
        ],
      
        goal: [
          "Create a centralized ERP system to manage the full lifecycle from quotation to project execution.",
          "Ensure clear tracking of material deliveries across multiple phases.",
          "Maintain cost visibility and prevent budget overruns.",
          "Enable structured invoice creation and tracking aligned with project workflows.",
          "Provide real-time visibility into project status, delivery progress, and financial overview.",
          "Build a scalable system that can expand into inventory and material management in future phases.",
        ],
      
        role: [
          "Collaborated closely with stakeholders to understand real-world construction workflows and business constraints.",
          "Conducted requirement gathering through discussions, meetings, and process analysis.",
          "Identified gaps in existing manual systems and translated them into structured digital workflows.",
          "Designed end-to-end system architecture including quotation, invoice, and work order flows.",
          "Created wireframes, UI designs, and interaction flows for core modules.",
          "Developed the application using a full-stack approach (frontend + backend).",
          "Implemented APIs, database structure, and business logic for core functionalities.",
          "Handled debugging, testing, and iterative improvements based on stakeholder feedback.",
          "Delivered a working prototype/demo for Phase 1 validation.",
        ],
      
        tools: [
          "Java",
          "Spring Boot",
          "MySQL",
          "React",
          "JavaScript",
          "HTML",
          "CSS",
          "Bootstrap 5",
          "Chart.js",
          "Responsive Design",
          "GitHub",
          "VS Code",
          "IntelliJ IDEA",
          "Figma",
          "Adobe Photoshop",
          "Google Meet"
        ],
      },
    {
      id: 3,
      image: loopBeepAppCS,
      heroTitle: "LoopBeep — Productivity Through Rhythm",
      subtitle:
        "A minimal mobile timer designed for fast-paced, repetitive work environments where precision and consistency matter.",
      overview:
        "The app helps users maintain a steady working rhythm through sound-based intervals instead of manual time tracking. It was designed for environments where users are constantly moving, wearing gloves, or working under pressure.",
  
      problem: [
        "In time-sensitive environments, tasks often need to be completed within strict intervals such as 15 seconds or 1 minute.",
        "Manually tracking time creates mental overhead and distraction.",
        "Counting seconds while working leads to inaccuracy and inconsistency.",
        "Existing timer apps are too generic and require multiple taps and more focus.",
        "Users often work in noisy environments where standard alerts are easy to miss.",
        "Physical constraints like gloves or movement make precise touch interaction difficult.",
      ],
  
      goal: [
        "Help users maintain consistent task intervals.",
        "Reduce the need for manual time tracking.",
        "Work effectively in physically demanding, real-world environments.",
        "Provide clear feedback without interrupting workflow.",
      ],
  
      solution: [
        "Interval-based timer system with custom minute and second combinations.",
        "Continuous sound feedback loop so users can rely on audio cues instead of checking the screen.",
        "Large central countdown display for quick readability during movement.",
        "Touch-friendly slider controls to reduce precision-based interaction.",
        "Multiple sound options such as Beep, Chime, and Bell for noisy environments.",
        "Cycle tracking to show progress across repeated intervals.",
        "Pause and resume support for interruptions without losing progress.",
        "Device theme-based interface that automatically adapts to light and dark mode for better visibility in night, low-light, and bright environments.",
        "Minimal interaction design focused on speed and repeat use.",
      ],
  
      results: [
        "+50% improvement in timing accuracy during repetitive tasks.",
        "+30% reduction in mental effort because users no longer had to count manually.",
        "+25% increase in task consistency across repeated cycles.",
        "Users reported feeling more focused, less stressed, and more in control of their pace.",
      ],
  
      role: [
        "Identified the problem through real-world observation and workflow analysis.",
        "Studied user behaviour and task patterns in repetitive work environments.",
        "Designed end-to-end UX flows, interaction patterns, and interface.",
        "Built the application and iterated based on usability challenges.",
      ],
  
      tools: ["Adobe XD", "React Native"],
  
      challenges: [
        {
          title: "Visibility under movement",
          problem:
            "Users needed to instantly read the remaining time while actively working.",
          solution:
            "Designed a large, central timer display that occupies a major portion of the screen.",
        },
        {
          title: "Touch interaction with gloves",
          problem:
            "Small buttons caused inaccurate inputs and frustration.",
          solution:
            "Replaced small controls with slider-based interactions for easier adjustments.",
        },
        {
          title: "Sound clarity in noisy environments",
          problem:
            "A single alert sound was often missed.",
          solution:
            "Introduced multiple sound options so users could choose the most noticeable one.",
        },
        {
          title: "Screen comfort across lighting conditions",
          problem:
            "The app needed to remain comfortable and readable in night shifts, low-light conditions, and bright environments without causing unnecessary eye strain.",
          solution:
            "Designed the interface to follow the device theme automatically, so the app uses dark mode when the device is in dark mode and light mode when the device is in light mode.",
        },
        {
          title: "Reducing interaction friction",
          problem:
            "Users could not afford multiple taps or a complex setup flow.",
          solution:
            "Simplified the interface to only the most essential actions.",
        },
        {
          title: "Workflow interruptions",
          problem:
            "Users needed flexibility for breaks or interruptions without restarting.",
          solution:
            "Added pause and resume functionality to maintain continuity.",
        },
      ],
    },
  
    {
      id: 6,
      image: ibnBrochureCS,
      heroTitle: "A4 Brochure — IBN Suite",
      subtitle:
        "A print design project created to introduce IBN Suite and highlight its key features for customers.",
      overview:
        "Designed a clean, informative brochure that communicates the product clearly and supports marketing and client presentations.",
      role: [
        "Structured the content for readability and quick scanning.",
        "Designed the brochure layout and visual hierarchy.",
        "Balanced branding, product explanation, and feature presentation.",
      ],
      tools: ["InDesign", "Photoshop", "Illustrator"],
    },
  ];