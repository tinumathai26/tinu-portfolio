import type { ProjectStatus } from "@/features/portfolio/data/portfolioData";
import clsx from "clsx";

interface StatusBadgeProps {
  status: ProjectStatus;
}

const statusDot: Record<ProjectStatus, string> = {
  Planning: "bg-slate-400",
  "In Progress": "bg-blue-500 animate-pulse",
  Completed: "bg-emerald-500",
  Delivered: "bg-orange-500",
  Live: "bg-green-500 animate-pulse",
  "On Hold": "bg-amber-500",
  Archived: "bg-zinc-400",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-base text-muted-foreground bg-background/60 backdrop-blur-sm">
      <span className={clsx("w-1.5 h-1.5 rounded-full", statusDot[status])} />
      {status}
    </span>
  );
}
