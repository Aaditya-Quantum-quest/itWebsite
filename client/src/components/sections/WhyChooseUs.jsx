import React from 'react';
import Button from '../ui/Button';
import { Zap, Shield, Headphones, Layers, Globe, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    { title: "Fast Delivery", icon: Zap, desc: "Agile sprints and quick iterations to get your product to market faster." },
    { title: "Scalable Architecture", icon: Layers, desc: "Built to handle 10 or 10,000,000 users without breaking a sweat." },
    { title: "24/7 Support", icon: Headphones, desc: "Round-the-clock maintenance and emergency support when you need it." },
    { title: "NDA Protected", icon: Shield, desc: "Your IP is secure. We sign NDAs before discussing any sensitive details." },
    { title: "Global Standards", icon: Globe, desc: "Code quality that meets stringent Silicon Valley engineering standards." },
    { title: "Agile Process", icon: Clock, desc: "Transparent progress tracking with weekly demos and clear communication." }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-bgSecondary overflow-hidden relative">
      {/* Decorative text */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -rotate-90 origin-left text-[20vw] font-hero font-medium tracking-tighter text-white opacity-[0.02] pointer-events-none select-none z-0 whitespace-nowrap">
        WHY SKYZEN IT
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 flex flex-col lg:flex-row gap-8 lg:gap-16 relative z-10">

        {/* Left */}
        <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left reveal-left">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-4 w-full">
            <div className="w-10 h-[1px] bg-neonPrimary/40 hidden sm:block lg:block" />
            <span className="text-neonPrimary font-mono text-sm uppercase tracking-[0.15em] font-semibold">WHY SKYZEN IT</span>
            <div className="w-10 h-[1px] bg-neonPrimary/40 lg:hidden" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-hero font-medium mb-4 sm:mb-6 !leading-tight uppercase">
            Built Different.<br />
            <span className="text-transparent bg-clip-text bg-gradient-cyan-purple">Delivered Better.</span>
          </h2>
          <p className="text-textSecondary mb-6 sm:mb-8 text-base sm:text-lg font-body leading-relaxed max-w-lg lg:max-w-none">
            We don't just write code. We partner with you to solve complex business problems, mitigate risks, and build platforms that drive actual revenue growth.
          </p>
          <Button className="sm:hidden lg:block" href="/about" variant="secondary">Our Story</Button>
        </div>

        {/* Right Grid */}
        <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
          {features.map((item, i) => (
            <div key={i} className="reveal-card relative group p-3 sm:p-4 -m-3 sm:-m-4 rounded-2xl hover:bg-surfaceCard transition-colors">
              <span className="absolute top-0 right-3 sm:right-4 text-4xl sm:text-5xl font-mono font-medium text-surfaceElevated group-hover:text-neonPrimary/10 transition-colors pointer-events-none">
                0{i + 1}
              </span>
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-neonPrimary/10 flex items-center justify-center mb-3 sm:mb-4 text-neonPrimary">
                <item.icon className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <h4 className="text-lg sm:text-xl font-heading font-semibold text-textPrimary mb-2 relative z-10">{item.title}</h4>
              <p className="text-textSecondary text-sm font-body leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
