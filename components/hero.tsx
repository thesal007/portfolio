import { Code, Terminal, ArrowRight } from "lucide-react";
import { StatusBadge } from "./status-badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-clouds" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />

      <div className="relative z-10 max-w-container-max mx-auto px-gutter py-section-padding min-h-[calc(100vh-72px)] flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left content */}
        <div className="max-w-3xl text-left">
          <div className="flex items-center gap-2 mb-stack-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <StatusBadge
              status="active"
              description="Available for new opportunities"
            />
          </div>

          <h1 className="font-display-xl text-display-xl mb-stack-md text-on-surface">
            Building digital experiences that{" "}
            <span className="text-primary italic">matter</span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-xl">
            Full-stack developer specialized in high-performance web
            architectures, clean code principles, and intuitive user interface
            design.
          </p>

          <div className="flex flex-wrap gap-stack-md">
            <button className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-lg flex items-center gap-2 hover:brightness-110 transition-all">
              View My Work
              <ArrowRight className="w-[18px] h-[18px]" />
            </button>
            <button className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 rounded-lg hover:bg-primary/10 transition-all">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right side: icon cards + keyboard image, 2x2 grid with image spanning both rows */}
        <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-4 shrink-0">
          <div className="w-40 h-40 flex items-center justify-center bg-surface-container-high/60 backdrop-blur-sm rounded-xl border border-outline-variant">
            <Code className="w-10 h-10 text-on-surface-variant" />
          </div>

          <div className="row-span-2 w-40 overflow-hidden rounded-xl border border-outline-variant grayscale hover:grayscale-0 transition-all duration-500">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7-QB1cnqYoB2FvrONoLm6eSW2gQ1XJqGT_lDUxuAp0GMzWo8y-MHKin23pnhhRp8WvbM9avsuPNRymH-5Vo7eCDvqx4D3asbfPdqjvXfxiWbSJPkUBrnIS-HBI7GBgs0b9rvOS2nmDr2JVv98yxDPyDXOkCGnCxBml4POUfnyPoMHW69z19bqKiTm3S9UFFMTJ3d-ade0zYnxJyCPlheoPFxBDF3y8miKI627Nof7xC62lMtQ0KHFFdWcNG2LcAKPxkcoFNxq3DhE"
              alt="Mechanical keyboard close-up"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-40 h-40 flex items-center justify-center bg-surface-container-high/60 backdrop-blur-sm rounded-xl border border-outline-variant">
            <Terminal className="w-10 h-10 text-on-surface-variant" />
          </div>
        </div>
      </div>
    </section>
  );
}
