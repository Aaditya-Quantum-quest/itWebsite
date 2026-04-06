import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const cursorOuter = useRef(null);
  const cursorInner = useRef(null);
  
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      if(cursorOuter.current) cursorOuter.current.style.display = 'none';
      if(cursorInner.current) cursorInner.current.style.display = 'none';
      document.body.style.cursor = 'auto';
      return;
    }

    const onMouseMove = (e) => {
      gsap.to(cursorInner.current, { 
        x: e.clientX, y: e.clientY, duration: 0 
      });
      gsap.to(cursorOuter.current, { 
        x: e.clientX, y: e.clientY, duration: 0.15, ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    
    const handleMouseEnter = () => {
      gsap.to(cursorOuter.current, { scale: 1.8, opacity: 0.6, 
        duration: 0.3, backgroundColor: 'rgba(0, 212, 255, 0.2)' });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorOuter.current, { scale: 1, opacity: 1, 
        duration: 0.3, backgroundColor: 'transparent' });
    };

    const addListeners = () => {
      document.querySelectorAll('a, button, input, textarea, [data-cursor="pointer"]')
        .forEach(el => {
          el.addEventListener('mouseenter', handleMouseEnter);
          el.addEventListener('mouseleave', handleMouseLeave);
        });
    };

    addListeners();

    // Re-add on DOM changes ideally, but for now this works initially
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      document.querySelectorAll('a, button, input, textarea, [data-cursor="pointer"]')
        .forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorOuter}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neonPrimary pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2"
      />
      <div 
        ref={cursorInner}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-neonPrimary rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}
