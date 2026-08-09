import { Badge } from "./ui/badge";

type StatusBadgeProps = {
  description: string;
  status: "active" | "offline";
};

export function StatusBadge({ description, status }: StatusBadgeProps) {
  return (
    <Badge className="flex items-center gap-2 bg-surface-container-high text-on-surface border border-outline-variant">
      {/* Dot indicator */}
      <span
        className={`w-2 h-2 rounded-full ${
          status === "active" ? "bg-green-500 animate-pulse" : "bg-gray-400"
        }`}
      />
      {description}
    </Badge>
  );
}
