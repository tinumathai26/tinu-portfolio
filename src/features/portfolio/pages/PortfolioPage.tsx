import { useState } from "react";
import {
  portfolioData,
  categories,
} from "@/features/portfolio/data/portfolioData";
import {
  PageTitle,
  CardTitle,
  BodyText,
} from "@/features/shared/components/Typography";
import defaultImage from "@/assets/ibn-suite-thumb.jpg";
import { Link } from "react-router-dom";
import { ProjectMeta } from "@/features/portfolio/components/ProjectMeta";
import { paths } from "@/app/routes/paths";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((p) => p.category === activeCategory);

  return (
    <section className="max-w-6xl mx-auto px-6 pt-16">
      <PageTitle className="mb-12 text-center">Portfolio</PageTitle>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-md border text-lg font-medium transition-all text-muted-foreground cursor-pointer ${
              activeCategory === cat
                ? "bg-foreground text-background border-foreground"
                : "border-border hover:border-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            to={`${paths.portfolio}/${project.id}`}
            className="group rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className="relative aspect-[4/3] bg-secondary">
              <img
                src={project.image ?? defaultImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute top-3 right-3">
                <StatusBadge status={project.status} />
              </div> */}
            </div>

            <div className="p-6">
              <ProjectMeta
                category={project.category}
                status={project.status}
              />

              <CardTitle className="mt-2 !text-lg md:!text-xl">
                {project.title}
              </CardTitle>

              <BodyText className="mt-2 md:!text-base">
                {project.description}
              </BodyText>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
