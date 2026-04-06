import React from 'react';
import SectionHeader from '../ui/SectionHeader';

export default function Process() {
  const steps = [
    { num: "01", icon: "🔍", title: "Discovery", desc: "Requirements gathering and technical feasibility analysis." },
    { num: "02", icon: "📋", title: "Planning", desc: "Architecture design, roadmaps, and agile sprint planning." },
    { num: "03", icon: "🎨", title: "UI/UX Design", desc: "Wireframing, prototyping, and high-fidelity visual design." },
    { num: "04", icon: "⚙️", title: "Development", desc: "Iterative coding with continuous integration and testing." },
    { num: "05", icon: "🚀", title: "Launch", desc: "Deployment, monitoring, and ongoing support/maintenance." }
  ];

  return (
    <section className="py-24 lg:py-32 bg-bgPrimary">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeader label="How We Work" title="Our Development Process" subtitle="A transparent, agile workflow designed to deliver results on time and within budget." />

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-surfaceElevated overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-[0%] bg-gradient-cyan-purple opacity-50" />
            <div className="w-full border-t-2 border-dashed border-neonPrimary/30 absolute top-0 left-0" />
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-4 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group w-full lg:w-[200px] reveal-card">
                <div className="relative mb-6">
                  {/* Vertical line mobile */}
                  {i !== steps.length - 1 && (
                    <div className="lg:hidden absolute top-[80px] left-1/2 w-[2px] h-[calc(100%+32px)] border-l-2 border-dashed border-neonPrimary/30 transform -translate-x-1/2 -z-10" />
                  )}
                  <div className="w-20 h-20 rounded-full border-2 border-neonPrimary bg-bgPrimary flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:shadow-glow-primary">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-surfaceCard border border-neonPrimary flex items-center justify-center text-xs font-mono font-bold text-neonPrimary">
                    {step.num}
                  </div>
                </div>
                <h4 className="text-xl font-heading font-semibold text-textPrimary mb-3">{step.title}</h4>
                <p className="text-sm text-textSecondary font-body leading-relaxed max-w-[240px] mx-auto lg:max-w-none">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
