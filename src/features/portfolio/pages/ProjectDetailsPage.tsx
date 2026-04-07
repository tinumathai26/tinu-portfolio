import { Link, useParams } from "react-router-dom";
import { projectDetailsData } from "@/features/portfolio/data/projectDetailsData";

import {
  PageTitle,
  SectionHeading,
  CardTitle,
  BodyText,
  LeadText,
  LabelText,
} from "@/features/shared/components/Typography";

import trackingAppThumb from "@/assets/tracker-app-thumb.jpg";
import { paths } from "@/app/routes/paths";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const projectId = Number(id);
  const project = projectDetailsData.find((proj) => proj.id === projectId);

  if (!project) {
    return (
      <section className="max-w-lg mx-auto px-3 pt-20 pb-24 text-center">
        <PageTitle className="mb-3">Project Not Found</PageTitle>

        <LeadText className="mb-10 text-muted-foreground">
          Sorry, I couldn’t find that project.
        </LeadText>

        <Link
          to={paths.portfolio}
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 shadow-lg hover:bg-foreground/90 transition-all active:scale-95"
          aria-label="Back to Portfolio"
        >
          <span className="text-lg">←</span>
          <span className="font-medium">Back to Portfolio</span>
        </Link>
      </section>
    );
  }

  return (
    <article className="max-w-5xl mx-auto px-6 pb-24">
      {/* Hero Image Section */}
      <div className="mb-12 -mx-6">
        <div className="relative aspect-[16/9] bg-secondary overflow-hidden">
          <img
            src={project.image ?? trackingAppThumb}
            alt={project.heroTitle}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Hero Header */}
      <div className="mb-16 text-center">
        <LabelText className="block mb-5 md:mb-10 tracking-widest">
          PROJECT CASE STUDY
        </LabelText>
        <PageTitle className="mb-4">{project.heroTitle}</PageTitle>
        {project.subtitle && (
          <LeadText className="max-w-3xl mx-auto !text-xl text-muted-foreground">
            {project.subtitle}
          </LeadText>
        )}
      </div>

      {/* Overview */}
      {project.overview && (
        <section className="mb-20">
          <SectionHeading className="mb-8">Overview</SectionHeading>
          <BodyText className="max-w-3xl text-lg leading-relaxed">
            {project.overview}
          </BodyText>
        </section>
      )}

      {/* Problem - Simple Bullet List */}
      {project.problem && (
        <section className="mb-16">
          <SectionHeading className="mb-8">The Problem</SectionHeading>
          <div className="space-y-4 max-w-3xl">
            {Array.isArray(project.problem) ? (
              project.problem.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <span className="flex-shrink-0 text-foreground/50 mt-1 text-lg">
                    •
                  </span>
                  <BodyText className="leading-relaxed ">{item}</BodyText>
                </div>
              ))
            ) : (
              <BodyText>{project.problem}</BodyText>
            )}
          </div>
        </section>
      )}

      {/* Goal - Simple Bullet List */}
      {project.goal && (
        <section className="mb-16">
          <SectionHeading className="mb-8">Project Goal</SectionHeading>
          <div className="space-y-4 max-w-3xl">
            {Array.isArray(project.goal) ? (
              project.goal.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <span className="flex-shrink-0 text-foreground/50 mt-1 text-lg">
                    •
                  </span>
                  <BodyText className="leading-relaxed ">{item}</BodyText>
                </div>
              ))
            ) : (
              <BodyText>{project.goal}</BodyText>
            )}
          </div>
        </section>
      )}

      {/* Solution - Simple Bullet List */}
      {project.solution && (
        <section className="mb-16">
          <SectionHeading className="mb-8">Our Solution</SectionHeading>
          <div className="space-y-4 max-w-3xl">
            {Array.isArray(project.solution) ? (
              project.solution.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <span className="flex-shrink-0 text-foreground/50 mt-1 text-lg">
                    •
                  </span>
                  <BodyText className="leading-relaxed ">{item}</BodyText>
                </div>
              ))
            ) : (
              <BodyText>{project.solution}</BodyText>
            )}
          </div>
        </section>
      )}

      {/* Results & Impact - Minimal Tick Lists */}
      {project.results && (
        <section className="mb-20">
          <SectionHeading className="mb-8">Results & Impact</SectionHeading>

          <div className="space-y-7 max-w-3xl">
            {Array.isArray(project.results) ? (
              project.results.map((result, index) => (
                <div key={index} className="flex gap-6">
                  {/* Tick Mark */}
                  <div className="flex-shrink-0 mt-1 text-emerald-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={4}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  {/* Result Text */}
                  <BodyText className="leading-relaxed">{result}</BodyText>
                </div>
              ))
            ) : (
              <BodyText className="max-w-3xl">{project.results}</BodyText>
            )}
          </div>
        </section>
      )}
      {/* Challenges & Solutions */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="mb-20">
          <SectionHeading className="mb-8">
            Challenges & Solutions
          </SectionHeading>
          <div className="space-y-10">
            {project.challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl overflow-hidden border border-border shadow-sm"
              >
                <div className="p-8 border-b border-border bg-muted/30">
                  <CardTitle className="!text-xl">{challenge.title}</CardTitle>
                </div>
                <div className="p-8 grid md:grid-cols-2 gap-10">
                  <div>
                    <LabelText className="mb-3 block text-sm tracking-widest">
                      PROBLEM
                    </LabelText>
                    <BodyText className="leading-relaxed">
                      {challenge.problem}
                    </BodyText>
                  </div>
                  <div>
                    <LabelText className="mb-3 block text-sm tracking-widest text-emerald-600">
                      SOLUTION
                    </LabelText>
                    <BodyText className="leading-relaxed">
                      {challenge.solution}
                    </BodyText>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Role & Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
        {project.role && project.role.length > 0 && (
          <div>
            <SectionHeading className="mb-6">My Role</SectionHeading>
            <div className="space-y-4">
              {project.role.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-foreground/50 mt-1 text-lg">•</span>
                  <BodyText className="leading-relaxed">{item}</BodyText>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.tools && project.tools.length > 0 && (
          <div>
            <SectionHeading className="mb-6">
              Tools & Technologies
            </SectionHeading>
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="inline-block px-5 py-2.5 bg-muted text-muted-foreground rounded-full text-sm font-medium border border-border/50"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <Link
        to={paths.portfolio}
        aria-label="Back to Portfolio"
        className=" fixed bottom-6 right-6 z-50 inline-flex items-center justify-center
                    h-14 w-14 md:h-auto md:w-auto rounded-full border border-glass-border
                    bg-glass backdrop-blur-xl md:px-5 md:py-3"
      >
        <span className="text-xl leading-none">←</span>
        <span className="hidden md:inline font-medium ml-2">
          Back to Portfolio
        </span>
      </Link>
    </article>
  );
}
