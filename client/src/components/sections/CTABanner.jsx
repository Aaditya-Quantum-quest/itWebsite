import React from 'react';
import Button from '../ui/Button';

export default function CTABanner() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute inset-0 bg-bgPrimary" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-cyan-purple rounded-full opacity-[0.05] blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 relative z-10">
        <div className="max-w-4xl mx-auto glass rounded-2xl p-6 sm:p-8 md:p-16 text-center border-neonPrimary/40 shadow-glow-primary relative overflow-hidden">
          {/* Orbiting rings decor */}
          <div className="absolute top-0 left-0 w-full h-full border-[1px] border-white/[0.03] rounded-[40%] scale-150 animate-[spin_40s_linear_infinite] pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-full border-[1px] border-neonPrimary/[0.05] rounded-[40%] scale-125 animate-[spin_30s_linear_infinite_reverse] pointer-events-none" />

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-hero font-medium mb-4 sm:mb-6 text-textPrimary relative z-10">
            Ready to Build Something <span className="text-transparent bg-clip-text bg-gradient-cyan-purple">Amazing?</span>
          </h2>
          <p className="text-base sm:text-lg text-textSecondary font-body mb-6 sm:mb-10 max-w-2xl mx-auto relative z-10">
            Let's discuss your project. Free technical consultation, architectural roadmap, and detailed quote—no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 relative z-10">
            <Button href="/quote" variant="primary">Get a Quote</Button>
            <Button href="/book" variant="secondary">Book Consultation</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
