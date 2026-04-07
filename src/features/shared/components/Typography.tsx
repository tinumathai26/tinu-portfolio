import type { ReactNode } from "react";
import clsx from "clsx";

type TypographyProps = {
  children: ReactNode;
  className?: string;
};

export function DisplayText({ children, className }: TypographyProps) {
  return (
    <h1
      className={clsx(
        "text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight leading-none text-foreground",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function PageTitle({ children, className }: TypographyProps) {
  return (
    <h1
      className={clsx(
        "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function SectionHeading({ children, className }: TypographyProps) {
  return (
    <h2
      className={clsx(
        "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function CardTitle({ children, className }: TypographyProps) {
  return (
    <h3
      className={clsx(
        "text-xl md:text-2xl font-semibold tracking-tight text-foreground",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function LeadText({ children, className }: TypographyProps) {
  return (
    <p
      className={clsx(
        "text-lg md:text-xl leading-relaxed text-muted-foreground",
        className
      )}
    >
      {children}
    </p>
  );
}

export function BodyText({ children, className }: TypographyProps) {
  return (
    <p
      className={clsx(
        "text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground",
        className
      )}
    >
      {children}
    </p>
  );
}

export function MetaText({ children, className }: TypographyProps) {
  return (
    <p
      className={clsx(
        "text-sm md:text-base lg:text-lg text-muted-foreground",
        className
      )}
    >
      {children}
    </p>
  );
}

export function LabelText({ children, className }: TypographyProps) {
  return (
    <span
      className={clsx(
        "text-xs md:text-sm font-medium tracking-wide text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}

export function Badge({ children, className }: TypographyProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-2 py-[2px] text-sm rounded bg-badge text-badge",
        className
      )}
    >
      {children}
    </span>
  );
}
