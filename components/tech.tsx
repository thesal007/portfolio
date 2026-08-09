"use client";
import { Card } from "@/components/ui/card";
import {
  Code,
  Terminal,
  Layers,
  Globe,
  Palette,
  Database,
  Cloud,
  GitBranch,
  Box,
} from "lucide-react";

export default function TechArsenal() {
  const techStack = [
    { icon: <Code />, label: "JavaScript" },
    { icon: <Terminal />, label: "TypeScript" },
    { icon: <Layers />, label: "React" },
    { icon: <Globe />, label: "Node.js" },
    { icon: <Palette />, label: "CSS" },
    { icon: <Palette />, label: "Tailwind" },
    { icon: <Database />, label: "PostgreSQL" },
    { icon: <Cloud />, label: "AWS" },
    { icon: <GitBranch />, label: "Git" },
    { icon: <Box />, label: "Docker" },
    { icon: <Layers />, label: "GraphQL" },
    { icon: <Globe />, label: "Next.js" },
    { icon: <Palette />, label: "Figma" },
  ];

  return (
    <section className="max-w-container-max mx-auto px-gutter py-section-padding w-full">
      <div className="flex justify-between items-end mb-stack-lg">
        <div>
          <h2 className="font-headline-lg text-headline-lg mb-2">
            Technical Arsenal
          </h2>
          <p className="text-on-surface-variant text-body-md max-w-xl">
            Tools and frameworks I leverage to build scalable, performant
            products for the modern web.
          </p>
        </div>
        <span className="text-primary font-code-sm text-code-sm opacity-70">
          /EXPERTISE
        </span>
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {techStack.map((tech, i) => (
          <Card
            key={i}
            className="flex flex-col items-center justify-center gap-2 p-6 bg-surface-container-high/50 backdrop-blur-sm border border-outline-variant rounded-xl hover:bg-surface-container-high transition-all"
          >
            <div className="text-primary">{tech.icon}</div>
            <span className="font-label-caps text-label-caps text-on-surface-variant">
              {tech.label}
            </span>
          </Card>
        ))}
      </div>
    </section>
  );
}
    