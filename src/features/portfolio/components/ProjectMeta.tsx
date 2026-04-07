import type {
  ProjectCategory,
  ProjectStatus,
} from "@/features/portfolio/data/portfolioData";
import { StatusBadge } from "./StatusBadge";
import { Badge } from "@/features/shared/components/Typography";

interface ProjectMetaProps {
  category: ProjectCategory;
  status: ProjectStatus;
}

export function ProjectMeta({ category, status }: ProjectMetaProps) {
  return (
    <div className="flex justify-between">
      <Badge>{category}</Badge>
      <StatusBadge status={status} />
    </div>
  );
}
