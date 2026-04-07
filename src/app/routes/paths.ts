export const paths = {
  home: "/",
  portfolio: "/portfolio",
  projectDetails: "/portfolio/:id",
  contact: "/contact",
} as const;

export const navLinks = [
  { to: paths.home, label: "Home" },
  { to: paths.portfolio, label: "Portfolio" },
  { to: paths.contact, label: "Contact" },
] as const;
