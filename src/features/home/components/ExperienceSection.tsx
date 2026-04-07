import { experienceData } from "@/features/home/data/homeData";
import {
  BodyText,
  CardTitle,
  LeadText,
  MetaText,
  SectionHeading,
} from "@/features/shared/components/Typography";

export default function ExperienceSection() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 py-16 animate-fade-in"
      style={{ animationDelay: "0.2s" }}
    >
      <SectionHeading>{experienceData.title}</SectionHeading>

      <div className="relative space-y-12">
        <div className="absolute left-[6px] top-3 bottom-5 w-px bg-[hsl(var(--border))]" />

        {experienceData.items.map((experience, index) => (
          <div key={index} className="relative pl-10">
            <div className="absolute left-0 top-2.5 h-3 w-3 rounded-full bg-[hsl(var(--border))]" />

            <CardTitle>{experience.role}</CardTitle>
            <LeadText className="italic">{experience.company}</LeadText>
            <BodyText>{experience.description}</BodyText>
            <MetaText>{experience.period}</MetaText>
          </div>
        ))}
      </div>
    </section>
  );
}
