import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Card({ children, className = '', hoverEffect = true }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!hoverEffect) return;
    const card = cardRef.current;
    
    // Check mobile
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const handleMouseEnter = () => {
      gsap.to(card, { y: -8, duration: 0.3, ease: "power2.out" });
      gsap.to(card, { 
        boxShadow: "0 0 40px rgba(0,212,255,0.25)",
        borderColor: "rgba(0,212,255,0.4)",
        duration: 0.3 
      });
      const icon = card.querySelector('.service-icon, .card-icon-hover');
      if (icon) {
        gsap.to(icon, { scale: 1.15, rotation: 5, duration: 0.3 });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(card, { y: 0, boxShadow: "none", borderColor: "rgba(0, 212, 255, 0.1)", duration: 0.3 });
      const icon = card.querySelector('.service-icon, .card-icon-hover');
      if (icon) {
        gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3 });
      }
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hoverEffect]);

  return (
    <div
      ref={cardRef}
      className={`glass rounded-2xl p-6 md:p-8 transition-colors ${className}`}
    >
      {children}
    </div>
  );
}
