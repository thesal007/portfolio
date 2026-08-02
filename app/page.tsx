import Hero from "@/components/hero";
import StatsSection from "@/components/stats-section";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Hero />
      <StatsSection />
    </main>
  );
}
