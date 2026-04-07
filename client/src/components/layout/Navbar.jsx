import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hexagon, Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const navbarRef = useRef(null);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScroll = 0;
    const navbar = navbarRef.current;

    const handleScroll = () => {
      const current = window.pageYOffset;
      if (current > lastScroll && current > 100) {
        gsap.to(navbar, { yPercent: -100, duration: 0.3, ease: "power2.in" });
      } else {
        gsap.to(navbar, { yPercent: 0, duration: 0.4, ease: "power2.out" });
      }
      lastScroll = current;
    };

    window.addEventListener('scroll', handleScroll);

    ScrollTrigger.create({
      start: "top -50px",
      onUpdate: (self) => {
        gsap.to(navbar, { 
          backgroundColor: theme === 'dark' ? `rgba(10,10,15,${0.7 + self.progress * 0.3})` : `rgba(255,255,255,${0.8 + self.progress * 0.2})`,
          backdropFilter: 'blur(20px)',
          borderBottom: self.progress > 0.1 ? '1px solid rgba(0, 212, 255, 0.2)' : '1px solid transparent'
        });
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [theme]);

  // Mobile Menu Animations
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(".mobile-overlay", { x: "0%", duration: 0.5, ease: "power3.inOut" });
      gsap.fromTo(".mobile-nav-link", 
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.08, delay: 0.2 }
      );
    } else {
      document.body.style.overflow = 'auto';
      gsap.to(".mobile-overlay", { x: "100%", duration: 0.5, ease: "power3.inOut" });
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header 
        ref={navbarRef}
        className="fixed top-0 w-full z-50 h-16 md:h-[72px] flex items-center transition-colors duration-300 glass-nav border-b border-transparent"
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-2 group">
            <Hexagon className="w-6 h-6 text-neonPrimary group-hover:rotate-90 transition-transform duration-500" />
            <span className="font-hero font-bold text-lg sm:text-xl md:text-2xl tracking-wide">NexaForge</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm lg:text-base xl:text-base font-medium relative overflow-hidden group ${location.pathname === link.path ? 'text-neonPrimary' : 'text-textPrimary hover:text-textSecondary'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-neonPrimary transform ${location.pathname === link.path ? 'translate-x-0' : '-translate-x-[101%] group-hover:translate-x-0'} transition-transform duration-300 ease-out`} />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <button 
              onClick={() => {
                toggleTheme();
                gsap.fromTo('.theme-icon', { rotation: 0 }, { rotation: 360, duration: 0.5, ease: "back.out(2)" });
              }} 
              className="p-2 rounded-full hover:bg-surfaceElevated transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 theme-icon text-yellow-400" /> : <Moon className="w-5 h-5 theme-icon text-blue-600" />}
            </button>
            <Link to="/quote" className="px-3 sm:px-4 py-2 rounded-full text-sm font-semibold border-1.5 border-neonPrimary text-neonPrimary hover:bg-neonPrimary/10 transition-colors drop-shadow-glow">
              Get a Quote
            </Link>
            <Link to="/book" className="px-3 sm:px-4 py-2 rounded-full text-sm font-semibold bg-gradient-cyan-purple text-textPrimary hover:shadow-btn-glow hover:scale-105 transition-all">
              Book Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div className="mobile-overlay fixed inset-0 z-[60] bg-bgSecondary/95 backdrop-blur-xl translate-x-full pr-4 flex flex-col justify-center items-center noise-texture shadow-2xl">
        <button 
          className="absolute top-6 right-6 p-2 pointer-events-auto text-textPrimary"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        
        <nav className="flex flex-col items-center gap-4 sm:gap-6 pointer-events-auto relative z-20">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link text-2xl sm:text-3xl font-heading font-bold"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-8 w-full max-w-xs mobile-nav-link">
            <Link to="/quote" onClick={() => setMobileMenuOpen(false)} className="w-full text-center px-4 sm:px-6 py-3 rounded-xl border border-neonPrimary text-neonPrimary text-sm">
              Get a Quote
            </Link>
            <Link to="/book" onClick={() => setMobileMenuOpen(false)} className="w-full text-center px-4 sm:px-6 py-3 rounded-xl bg-gradient-cyan-purple text-white text-sm">
              Book Consultation
            </Link>
            <button onClick={() => { toggleTheme(); setMobileMenuOpen(false); }} className="w-full mt-2 flex justify-center py-2 text-textMuted text-sm">
              Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
