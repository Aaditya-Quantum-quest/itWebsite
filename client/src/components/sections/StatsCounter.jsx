import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function StatsCounter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stats = [
    { num: 150, suffix: "+", label: "Projects Completed" },
    { num: 50, suffix: "+", label: "Global Clients" },
    { num: 8, suffix: "+", label: "Years Experience" },
    { num: 99, suffix: ".9%", label: "Client Satisfaction" }
  ];

  return (
    <section className="py-20 relative bg-[linear-gradient(to_bottom,#0A0A0F,#0D1117)] border-t border-surfaceElevated relative">
      <div className="absolute inset-0 bg-gradient-cyan-purple opacity-[0.03]" />
      <div className="container mx-auto px-4 md:px-8 lg:px-16" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-surfaceElevated relative z-10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl lg:text-7xl font-hero font-extrabold text-transparent bg-clip-text bg-gradient-cyan-purple mb-4">
                {inView ? <CountUp end={stat.num} duration={2.5} /> : "0"}
                {stat.suffix}
              </span>
              <span className="text-sm md:text-base text-textMuted font-body font-medium uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
