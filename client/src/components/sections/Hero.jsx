import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { Play } from 'lucide-react';

function Typewriter({ words }) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 120);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <span>
      {text}
      <span className="inline-block w-[3px] h-[0.8em] bg-neonPrimary ml-2 animate-pulse align-middle" />
    </span>
  );
}

export default function Hero() {
  const [init, setInit] = useState(false);
  const words = ["Scalable Web Apps", "Mobile Solutions", "AI Systems", "Cloud Platforms"];

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));

    gsap.to(".hero-main-card", {
      y: -15, duration: 2, ease: "sine.inOut", repeat: -1, yoyo: true
    });
    gsap.to(".floating-badge-1", { y: -10, duration: 2.5, ease: "sine.inOut", repeat: -1, yoyo: true });
    gsap.to(".floating-badge-2", { y: 12, duration: 3, ease: "sine.inOut", repeat: -1, yoyo: true });

    gsap.fromTo('.hero-headline-line',
      { opacity: 0, y: 80, rotateX: -90 },
      { opacity: 1, y: 0, rotateX: 0, stagger: 0.2, duration: 0.8, ease: "back.out(1.7)", delay: 0.5 }
    );

    // Mobile-specific staggered fade-ins
    gsap.fromTo('.hero-mobile-badge',
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: "power2.out" }
    );
    gsap.fromTo('.hero-mobile-cta',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.9, ease: "power2.out" }
    );
    gsap.fromTo('.hero-mobile-stats',
      { opacity: 0 },
      { opacity: 1, duration: 0.6, delay: 1.1, ease: "power2.out" }
    );
  }, []);

  const stats = [
    { num: "150+", label: "Projects" },
    { num: "50+", label: "Clients" },
    { num: "8+", label: "Years" },
  ];

  return (
    <section className="relative flex items-center pt-8 md:pt-15 overflow-hidden">

      {/* Backgrounds */}
      <div className="absolute inset-0 bg-bgPrimary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-neonPrimary/15 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-16 relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

        {/* ── LEFT CONTENT ── */}
        <div className="w-full lg:w-[55%] flex flex-col items-start perspective-[400px]">

          {/* Availability badge — mobile/tablet only */}
          <div className="hero-mobile-badge lg:hidden flex items-center gap-2 bg-neonPrimary/8 border border-neonPrimary/20 rounded-full px-4 py-2 mb-6 opacity-0">
            <span className="w-2 h-2 rounded-full bg-neonPrimary animate-pulse" />
            <span className="text-[11px] text-neonPrimary font-medium tracking-[0.08em] uppercase">
              Available for Projects
            </span>
          </div>

          {/* Headline */}
          <h1 className="w-full text-5xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-hero font-medium leading-[1.1] mb-4 sm:mb-6">

            {/* "We Build" — tighter on mobile */}
            <div className="hero-headline-line opacity-0 origin-bottom text-[clamp(1.6rem,6vw,2.5rem)] sm:text-4xl uppercase tracking-widest text-white/70">
              We Build
            </div>

            {/* Typewriter gradient line */}
            <div className="hero-headline-line opacity-0 origin-bottom bg-gradient-cyan-purple bg-clip-text text-transparent min-h-[1.2em] text-[clamp(2rem,9vw,3.5rem)] sm:text-5xl md:text-6xl leading-[1.05]">
              <Typewriter words={words} />
            </div>

            {/* "for Global Businesses" */}
            <div className="hero-headline-line opacity-0 origin-bottom text-[clamp(1.4rem,5.5vw,2.2rem)] sm:text-4xl md:text-5xl lg:text-6xl mt-2 text-white/85 font-medium">
              for Global Businesses
            </div>
          </h1>

          {/* Description */}
          <p className="text-textSecondary text-[15px] sm:text-lg md:text-xl max-w-lg mb-6 sm:mb-8 reveal-left font-body leading-relaxed">
            From startup MVPs to enterprise platforms — Skyzen It Services engineers digital products that scale.
          </p>

          {/* CTAs */}
          <div className="hero-mobile-cta opacity-0 lg:opacity-100 w-full sm:w-auto flex flex-col xs:flex-row sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12 reveal-left">
            <Button href="/quote" variant="primary" className="flex-1 sm:flex-none text-center justify-center">
              Get a Quote
            </Button>
            <Button href="/book" variant="secondary" className="flex-1 sm:flex-none text-center justify-center">
              Book Consultation
            </Button>
            <button className="flex items-center justify-center sm:justify-start gap-3 text-textPrimary hover:text-neonPrimary transition-colors px-4 group">
              <span className="flex items-center justify-center w-11 h-11 rounded-full border border-surfaceElevated group-hover:border-neonPrimary glass transition-all shrink-0">
                <Play className="w-3.5 h-3.5 ml-0.5" />
              </span>
              <span className="font-heading font-medium text-sm">Watch Showreel</span>
            </button>
          </div>

          {/* Stats Row */}
          <div className="hero-mobile-stats opacity-0 lg:opacity-100 w-full flex items-center justify-between sm:justify-start sm:gap-10 md:gap-14 pt-6 border-t border-surfaceElevated reveal-left">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-start">
                <span className="text-2xl sm:text-3xl md:text-4xl font-hero font-medium text-neonPrimary leading-none">
                  {stat.num}
                </span>
                <span className="text-[10px] sm:text-xs text-textMuted uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT VISUAL (desktop + tablet landscape only) ── */}
        <div className="w-full lg:w-[45%] relative h-[400px] sm:h-[480px] md:h-[500px] lg:h-[600px] hidden md:block">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] hero-main-card glass rounded-2xl border-neonPrimary/30 shadow-glow-primary overflow-hidden border">
            <div className="h-8 border-b border-surfaceElevated bg-bgSecondary/50 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-error/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-success/80" />
            </div>
            <div className="p-6 bg-surfaceCard/40 h-full flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="w-1/3 h-24 rounded-lg bg-surfaceElevated/50 border border-white/5" />
                <div className="w-2/3 h-24 rounded-lg bg-gradient-cyan-purple opacity-20" />
              </div>
              <div className="flex-1 rounded-lg bg-surfaceElevated/30 border border-white/5" />
            </div>
          </div>

          <div className="absolute top-[15%] right-[5%] floating-badge-1 glass px-4 py-3 rounded-xl flex items-center gap-3 border border-white/10 shadow-lg">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400">⚡</span>
            <span className="font-heading font-medium">React.js</span>
          </div>

          <div className="absolute bottom-[20%] left-[5%] floating-badge-2 glass px-4 py-3 rounded-xl flex items-center gap-3 border border-white/10 shadow-lg">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500/20 text-green-400">🟢</span>
            <span className="font-heading font-medium">Node.js</span>
          </div>

          <div className="absolute top-[25%] left-[0%] floating-badge-1 rotate-12 glass px-3 py-2 rounded-lg border border-neonPrimary/20">
            <span className="text-xs text-neonPrimary font-mono">🔒 Secure</span>
          </div>

          <div className="absolute bottom-[30%] right-[0%] floating-badge-2 -rotate-6 glass px-3 py-2 rounded-lg border border-neonSecondary/20">
            <span className="text-xs text-neonSecondary font-mono">99.9% Uptime</span>
          </div>
        </div>

      </div>
    </section>
  );
}