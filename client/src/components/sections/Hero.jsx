import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { Play } from 'lucide-react';

// Working Typewriter Component
function Typewriter({ words }) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentWord.length) {
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Finished typing, pause then delete
          setIsTypingComplete(true);
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setIsTypingComplete(false);
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
  const [currentWord, setCurrentWord] = useState(words[0]);

  // Fallback typewriter
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setCurrentWord(words[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    // Main Card float
    gsap.to(".hero-main-card", {
      y: -15, duration: 2, ease: "sine.inOut", repeat: -1, yoyo: true
    });
    gsap.to(".floating-badge-1", { y: -10, duration: 2.5, ease: "sine.inOut", repeat: -1, yoyo: true });
    gsap.to(".floating-badge-2", { y: 12, duration: 3, ease: "sine.inOut", repeat: -1, yoyo: true });

    // Title reveal
    gsap.fromTo('.hero-headline-line',
      { opacity: 0, y: 80, rotateX: -90 },
      { opacity: 1, y: 0, rotateX: 0, stagger: 0.2, duration: 0.8, ease: "back.out(1.7)", delay: 0.5 }
    );
  }, []);

  return (
    <section className="relative flex items-center pt-8 md:pt-15 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-bgPrimary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-neonPrimary/15 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Particles temporarily disabled to prevent crashes */}
      {false && init && (
        <Particles
          id="tsparticles"
          options={{
            particles: {
              number: { value: 30, density: { enable: true, value_area: 800 } },
              color: { value: "#00D4FF" },
              shape: { type: "circle" },
              opacity: { value: 0.3, random: true },
              size: { value: { min: 1, max: 3 } },
              move: { enable: true, speed: 0.5 },
              size: { value: { min: 1, max: 3 } }
            },
            interactivity: { events: { onHover: { enable: false }, onClick: { enable: false } } },
            background: { color: "transparent" }
          }}
          className="absolute inset-0 z-0"
        />
      )}

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

        {/* Left Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-start perspective-[400px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-6rem font-hero font-medium leading-[1.1] mb-4 sm:mb-6">
            <div className="hero-headline-line opacity-0 origin-bottom text-4xl md:text-5xl">We Build</div>
            <div className="hero-headline-line opacity-0 origin-bottom bg-gradient-cyan-purple bg-clip-text text-transparent min-h-[1.2em]">
              <Typewriter words={words} />
            </div>
            <div className="hero-headline-line opacity-0 origin-bottom text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">for Global Businesses</div>
          </h1>

          <p className="text-textSecondary text-base sm:text-xl md:text-xl max-w-lg mb-6 sm:mb-10 reveal-left font-body">
            From startup MVPs to enterprise platforms — Skyzen It Services engineers digital products that scale.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-14 reveal-left">
            <Button href="/quote" variant="primary">Get a Quote</Button>
            <Button href="/book" variant="secondary">Book Consultation</Button>
            <button className="flex items-center gap-2 sm:gap-3 text-textPrimary hover:text-neonPrimary transition-colors px-3 sm:px-4 group">
              <span className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-surfaceElevated group-hover:border-neonPrimary glass transition-all"><Play className="w-3 sm:w-4 h-3 sm:h-4 ml-1" /></span>
              <span className="font-heading font-medium text-sm">Watch Showreel</span>
            </button>
          </div>

          {/* Stats Row */}
          <div className="flex items-center justify-start gap-4 sm:gap-8 md:gap-12 w-full pt-6 sm:pt-8 border-t border-surfaceElevated reveal-left">
            {[
              { num: "150+", label: "Projects Delivered" },
              { num: "50+", label: "Happy Clients" },
              { num: "8+", label: "Years Experience" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-xl sm:text-3xl md:text-4xl font-hero font-medium text-neonPrimary">{stat.num}</span>
                <span className="text-xs sm:text-sm text-textMuted uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div className="w-full lg:w-[45%] relative h-[400px] sm:h-[500px] md:h-[500px] lg:h-[600px] hidden md:block">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] hero-main-card glass rounded-2xl border-neonPrimary/30 shadow-glow-primary overflow-hidden border">
            {/* Fake Browser window */}
            <div className="h-8 border-b border-surfaceElevated bg-bgSecondary/50 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-error/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-success/80" />
            </div>
            {/* Fake Dashboard UI */}
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
