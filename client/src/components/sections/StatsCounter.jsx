import React from 'react';

export default function StatsCounter() {
  const stats = [
    { num: "150+", suffix: "", label: "Projects Completed" },
    { num: "50+", suffix: "", label: "Global Clients" },
    { num: "8+", suffix: "", label: "Years Experience" },
    { num: "99.9%", suffix: "", label: "Client Satisfaction" }
  ];

  return (
    <section className="py-16 sm:py-20 relative bg-[linear-gradient(to_bottom,#0A0A0F,#0D1117)] border-t border-surfaceElevated relative">
      <div className="absolute inset-0 bg-gradient-cyan-purple opacity-[0.03]" />
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center divide-x-0 sm:divide-x divide-surfaceElevated relative z-10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl sm:text-5xl lg:text-7xl font-hero font-medium text-transparent bg-clip-text bg-gradient-cyan-purple mb-3">
                {stat.num}{stat.suffix}
              </span>
              <span className="text-xs sm:text-sm text-textMuted font-body font-medium uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
