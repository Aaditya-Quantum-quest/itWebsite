import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    // Simple entry animation
    gsap.fromTo('.not-found-content',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-72px)] flex items-center justify-center pt-10 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-bgPrimary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-error/15 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center not-found-content">
        <h1 className="text-8xl md:text-[12rem] font-hero font-medium text-transparent bg-clip-text bg-gradient-to-b from-textPrimary to-bgPrimary/50 leading-none mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-5xl font-heading font-medium uppercase mb-6">Page Not Found</h2>
        <p className="text-textSecondary text-lg max-w-md mx-auto mb-10 font-body">
          Oops! The page you are looking for seems to have vanished into the digital void. Let's get you back home.
        </p>
        <Link to="/">
          <button className="px-8 py-4 glass rounded-full font-heading font-medium text-textPrimary hover:border-neonPrimary hover:shadow-glow-primary transition-all relative overflow-hidden group">
            <span className="relative z-10">Return to Homepage</span>
            <div className="absolute inset-0 bg-neonPrimary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>
        </Link>
      </div>
    </section>
  );
}
