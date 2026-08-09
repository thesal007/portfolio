import HeroSection from "@/components/hero-section";
import TechArsenal from "@/components/tech";
import { Badge } from "lucide-react";

export default function About() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-on-surface overflow-hidden">
      <HeroSection />
      <div className="w-full border-t border-outline-variant my-stack-lg"></div>
      <TechArsenal />
      </main>
  );
}
