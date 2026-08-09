"use client";
import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { StatusBadge } from "./status-badge";
import Image from "next/image";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      ref.current.style.setProperty("--x", `${x}%`);
      ref.current.style.setProperty("--y", `${y}%`);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      ref={ref}
      className="homepage relative grid md:grid-cols-2 gap-12 w-full max-w-container-max px-gutter py-section-padding z-10"
    >
      {/* Left Content */}
      <div className="flex flex-col justify-center text-left">
        <h1 className="font-display-xl text-display-xl mb-stack-md leading-tight">
          Engineering digital{" "}
          <span className="text-blue-500 italic">experiences</span> with
          precision.
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-xl">
          I am a full-stack developer based in San Francisco, specializing in
          building high-performance web applications. My journey started in
          2018, and since then, I've focused on bridging the gap between elegant
          design and robust architecture.
        </p>

        <StatusBadge
          status="active"
          description=" Available for new opportunities"
        />
      </div>

      {/* Right Image */}
      <div className="flex justify-center items-center">
        <Card className="overflow-hidden rounded-xl border border-outline-variant grayscale hover:grayscale-0 transition-all duration-500 w-[400px] h-[400px]">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7-QB1cnqYoB2FvrONoLm6eSW2gQ1XJqGT_lDUxuAp0GMzWo8y-MHKin23pnhhRp8WvbM9avsuPNRymH-5Vo7eCDvqx4D3asbfPdqjvXfxiWbSJPkUBrnIS-HBI7GBgs0b9rvOS2nmDr2JVv98yxDPyDXOkCGnCxBml4POUfnyPoMHW69z19bqKiTm3S9UFFMTJ3d-ade0zYnxJyCPlheoPFxBDF3y8miKI627Nof7xC62lMtQ0KHFFdWcNG2LcAKPxkcoFNxq3DhE"
            alt="Developer typing on keyboard"
            className="w-full h-full object-cover"
          />
        </Card>
      </div>
    </section>
  );
}
