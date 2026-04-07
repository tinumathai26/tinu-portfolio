import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import HomePage from "@/features/home/pages/HomePage";
import PortfolioPage from "@/features/portfolio/pages/PortfolioPage";
import ContactPage from "@/features/contact/pages/ContactPage";
import NotFoundPage from "@/features/shared/pages/NotFoundPage";
import { paths } from "@/app/routes/paths";

const ProjectDetailsPage = lazy(
  () => import("@/features/portfolio/pages/ProjectDetailsPage")
);

const AppRouter = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<HomePage />} />
      <Route path={paths.portfolio} element={<PortfolioPage />} />
      <Route
        path={paths.projectDetails}
        element={
          <Suspense fallback={<div className="p-6">Loading project...</div>}>
            <ProjectDetailsPage />
          </Suspense>
        }
      />
      <Route path={paths.contact} element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
