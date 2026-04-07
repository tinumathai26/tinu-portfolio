import ibnSuiteThumb from "@/assets/ibn-suite-thumb.jpg";
import ibnWebThumb from "@/assets/ibn-website-thumb.jpg";
import trackingAppThumb from "@/assets/tracker-app-thumb.jpg";
import switchWebThumb from "@/assets/switchup-redesign-thumb.jpg";
import ecoBeautyThumb from "@/assets/eco-website-thumb.jpg";
import ibnBrochureThumb from "@/assets/ibn-brochure-thumb.jpg";

export type ProjectStatus =
  | "Planning"
  | "In Progress"
  | "Completed"
  | "Delivered"
  | "Live"
  | "On Hold"
  | "Archived";

  export type ProjectCategory =
  | "Websites"
  | "Web Applications"
  | "Mobile Applications"
  | "Print Design";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  image?: string;
  status: ProjectStatus;
}

export const portfolioData: Project[] = [
  {
    id: 1,
    title: "Corporate Website — IBN",
    category: "Websites",
    description: "Corporate website built to showcase services and strengthen brand presence.",
    image: ibnWebThumb,
    status: "Live",
  },
  {
    id: 2,
    title: "ERP System — IBN Suite",
    category: "Web Applications",
    description: "Business management platform for quotations and work orders.",
    image: ibnSuiteThumb,
    status: "Delivered",
  },
  {
    id: 3,
    title: "LoopBeep - Productivity App",
    category: "Mobile Applications",
    description: "Mobile time tracking application for managing work sessions and productivity.",
    image: trackingAppThumb,
    status: "Completed",
  },
  {
    id: 4,
    title: "Website Redesign",
    category: "Websites",
    description: "Redesigned the website with a modern interface and improved user experience.",
    image: switchWebThumb,
    status: "Archived",
  },
  {
    id: 5,
    title: "E-commerce Application",
    category: "Web Applications",
    description: "E-commerce application designed to showcase and sell products.",
    image: ecoBeautyThumb,
    status: "Archived",
  },
  {
    id: 6,
    title: "A4 Brochure — IBN Suite",
    category: "Print Design",
    description: "A4 brochure introducing IBN Suite and highlighting key features for customers.",
    image: ibnBrochureThumb,
    status: "Delivered",
  },
];

export const categories = ["All", "Websites", "Web Applications", "Mobile Applications", "Print Design"] as const;