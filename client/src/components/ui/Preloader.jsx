import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const [complete, setComplete] = useState(false);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const topPanelRef = useRef(null);
  const bottomPanelRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    // Check if session storage has preloader loaded
    if (sessionStorage.getItem('preloader_done')) {
      setComplete(true);
      return;
    }

    const t1 = gsap.timeline();
    const letters = textRef.current.children;

    document.body.style.overflow = "hidden";

    t1.to(letters, { 
      opacity: 1, y: 0, stagger: 0.05, duration: 0.4 
    })
    .to(barRef.current, { 
      width: "100%", duration: 1.5, ease: "power2.inOut" 
    }, "-=0.2")
    .to([topPanelRef.current, bottomPanelRef.current], {
      y: (i) => i === 0 ? "-100%" : "100%",
      duration: 0.8, ease: "power4.inOut",
      onComplete: () => {
        document.body.style.overflow = "auto";
        sessionStorage.setItem('preloader_done', 'true');
        setComplete(true);
      }
    }, "+=0.2");

  }, []);

  if (complete) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-none">
      <div ref={topPanelRef} className="absolute top-0 left-0 w-full h-1/2 bg-bgPrimary pointer-events-auto origin-top" />
      <div ref={bottomPanelRef} className="absolute bottom-0 left-0 w-full h-1/2 bg-bgPrimary pointer-events-auto origin-bottom" />
      
      <div className="relative z-10 flex flex-col items-center">
        <h1 ref={textRef} className="text-4xl md:text-6xl font-hero font-bold tracking-widest text-textPrimary flex overflow-hidden">
          {'NexaForge'.split('').map((char, i) => (
            <span key={i} className="opacity-0 translate-y-8 inline-block drop-shadow-glow">
              {char}
            </span>
          ))}
        </h1>
        <div className="w-48 md:w-64 h-[2px] bg-bgSecondary mt-8 rounded overflow-hidden">
          <div ref={barRef} className="h-full bg-gradient-cyan-purple w-0" />
        </div>
      </div>
    </div>
  );
}
