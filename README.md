## Portfolio Website — Tinu Mathai

A modern portfolio showcasing my work as a Product Designer and Software Developer, built with React, TypeScript, and a scalable feature-based architecture.

---

## TECH STACK

- React + Vite
- TypeScript
- Tailwind CSS (custom design tokens)
- React Router
- EmailJS

---

## ARCHITECTURE

This project follows a feature-based architecture instead of a traditional type-based structure.

Why?

- Improves scalability
- Keeps related logic together
- Easier to maintain in large applications

## Structure:

src/
├── app/
├── features/
│   ├── home/
│   ├── portfolio/
│   ├── contact/
│   └── shared/

---

## DESIGN SYSTEM & THEMING

The project uses a token-based design system powered by CSS variables.

Key Highlights:

- Supports light and dark theme
- Theme values are controlled using :root and .dark classes
- Uses semantic tokens like:
  - background
  - foreground
  - primary
  - secondary
- Consistent styling across components using Tailwind utility mapping

Example:

- Light theme → defined in :root
- Dark theme → overridden using .dark class

## This approach ensures:

- Scalability
- Consistency
- Easy theme switching

---

## FEATURES

- Lazy loaded routes for performance optimization
- Reusable component structure
- Responsive design across devices
- Light/Dark theme support
- Smooth UI transitions and animations

---

## LEARNINGS

- Transitioned from a type-based structure to a feature-based architecture
- Implemented a scalable design system using CSS variables
- Improved performance using code splitting and lazy loading
- Built reusable UI components for maintainability

---

## Live Demo
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-green?style=for-the-badge)](https://tinumathai.com)