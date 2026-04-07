import { aboutData } from "@/features/home/data/homeData";
import {
  BodyText,
  SectionHeading,
} from "@/features/shared/components/Typography";

export default function AboutSection() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 py-0 md:py-16"
      style={{ animationDelay: "0.1s" }}
    >
      <SectionHeading>{aboutData.title}</SectionHeading>

      <div className="space-y-4">
        {aboutData.paragraphs.map((paragraph) => (
          <BodyText key={paragraph}>{paragraph}</BodyText>
        ))}
      </div>
    </section>
  );
}
