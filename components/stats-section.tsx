const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "15k", label: "Github Commits" },
  { value: "12", label: "Tech Stack Mastery" },
];

export default function StatsSection() {
  return (
    <section className="relative z-10 bg-surface-container-low border-t border-outline-variant py-stack-lg">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-2 md:grid-cols-4 gap-stack-lg text-left">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <span className="font-display-xl text-display-xl text-primary">
              {stat.value}
            </span>
            <span className="font-label-caps text-label-caps text-on-surface-variant">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}