import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Button({ children, variant = 'primary', icon: Icon, className = '', onClick, type = 'button', href, ...props }) {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn || variant === 'ghost') return;

    let isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, { x: 0, y: 0, scale: 1, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    };

    const handleMouseEnter = () => {
      if (variant === 'primary') {
        gsap.to(btn, { scale: 1.03, duration: 0.3 });
      }
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);
    btn.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
      btn.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [variant]);

  const baseStyles = "inline-flex items-center justify-center font-heading rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95 z-10 relative overflow-hidden";

  const variants = {
    primary: "bg-gradient-cyan-purple py-3 px-6 md:py-4 md:px-8 text-white text-sm md:text-base font-medium shadow-glow-primary hover:brightness-110",
    secondary: "bg-transparent border-[1.5px] border-neonPrimary text-sm md:text-base py-3 px-6 md:py-4 md:px-8 text-neonPrimary font-medium hover:bg-neonPrimary/10 hover:shadow-glow-primary",
    ghost: "bg-transparent text-textSecondary font-medium py-2 hover:text-neonPrimary relative group",
    icon: "p-3 rounded-full border border-surfaceElevated hover:border-neonPrimary hover:text-neonPrimary bg-surfaceCard"
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      ref={btnRef}
      href={href}
      type={!href ? type : undefined}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {variant === 'ghost' && (
        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-neonPrimary transition-all duration-300 group-hover:w-full" />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />}
      </span>
    </Component>
  );
}
