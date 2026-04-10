import React from 'react';
import SectionHeader from '../ui/SectionHeader';

export default function TechStack() {
  const row1 = ['React', 'Next.js', 'Vue.js', 'Angular', 'Tailwind', 'TypeScript', 'Svelte', 'GSAP'];
  const row2 = ['Node.js', 'Express', 'Python', 'Django', 'FastAPI', 'Go', 'GraphQL', 'Docker'];
  const row3 = ['React Native', 'Flutter', 'Swift', 'Kotlin', 'AWS', 'MongoDB', 'PostgreSQL', 'Redis'];

  const renderRow = (items, direction) => (
    <div className={`flex space-x-6 w-max ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}>
      {[...items, ...items, ...items, ...items].map((tech, i) => (
        <div key={i} className="glass px-4 sm:px-6 py-3 sm:py-4 rounded-xl flex items-center justify-center min-w-[120px] sm:min-w-[160px] border border-white/5 hover:border-neonPrimary/50 transition-colors">
          <span className="font-heading font-medium text-textSecondary text-sm">{tech}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-16 sm:py-12 bg-bgSecondary overflow-hidden relative border-t border-b border-surfaceElevated relative">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 relative z-20">
        <SectionHeader
          label="Technologies We Master"
          title="Tools That Drive Innovation"
        />
      </div>

      <div className="relative w-full flex flex-col gap-6">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bgSecondary to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bgSecondary to-transparent z-10" />

        {renderRow(row1, 'left')}
        {renderRow(row2, 'right')}
        {renderRow(row3, 'left')}
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left { animation: scroll-left 40s linear infinite; }
        .animate-scroll-right { animation: scroll-right 40s linear infinite; }
      `}</style>
    </section>
  );
}
