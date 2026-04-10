import React, { useEffect, useRef } from 'react';
import Hero from '../components/sections/Hero';
import ServicesOverview from '../components/sections/ServicesOverview';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import TechStack from '../components/sections/TechStack';
import Process from '../components/sections/Process';
import StatsCounter from '../components/sections/StatsCounter';
import CTABanner from '../components/sections/CTABanner';
// import { initScrollAnimations } from '../lib/gsap';

export default function Home() {
  const isInitialized = useRef(false);

  useEffect(() => {
    // Prevent multiple initializations
    if (isInitialized.current) return;

    try {
      // Temporarily disabled animations to prevent crashes
      console.log('Home component mounted - animations disabled temporarily');
      isInitialized.current = true;

      return () => {
        // Clean up ScrollTriggers on unmount
        if (typeof window !== 'undefined' && window.gsap) {
          window.gsap.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
      };
    } catch (error) {
      console.warn('Home component error:', error);
    }
  }, []);

  return (
    <div className="flex flex-col">
      <Hero />
      {/* <TrustedBy /> */}
      <ServicesOverview />
      <WhyChooseUs />
      <PortfolioPreview />
      <TechStack />
      <Process />
      {/* Testimonials */}
      <StatsCounter />
      <CTABanner />
    </div>
  );
}

// Inline TrustedBy since it's a small strip
function TrustedBy() {
  const logos = ['Acme Corp', 'GlobalTech', 'InnovateInc', 'Nexus', 'FutureAI', 'CloudSync'];
  return (
    <section className="h-[100px] bg-bgSecondary flex flex-col justify-center overflow-hidden border-t border-b border-surfaceElevated relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bgSecondary to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bgSecondary to-transparent z-10" />

      <p className="text-center text-textMuted text-xs font-mono tracking-widest mb-3 relative z-20">TRUSTED BY GLOBAL COMPANIES</p>

      <div className="flex space-x-12 animate-marquee whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <span key={i} className="text-xl font-hero font-medium tracking-wider text-textSecondary grayscale hover:grayscale-0 hover:text-white transition-all cursor-default">
            {logo}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: 300%;
        }
      `}</style>
    </section>
  );
}
