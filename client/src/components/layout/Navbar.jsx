import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hexagon, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const navbarRef = useRef(null);
  const drawerRef = useRef(null);
  const overlayRef = useRef(null);
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
          backgroundColor: `rgba(10,10,15,${0.7 + self.progress * 0.3})`,
          backdropFilter: 'blur(20px)',
          borderBottom: self.progress > 0.1 ? '1px solid rgba(0, 212, 255, 0.2)' : '1px solid transparent'
        });
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  useEffect(() => {
    const drawer = drawerRef.current;
    const overlay = overlayRef.current;

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // fade in backdrop
      gsap.to(overlay, { opacity: 1, duration: 0.3, ease: "power2.out", pointerEvents: 'auto' });
      // slide drawer in from right
      gsap.to(drawer, { x: '0%', duration: 0.45, ease: "power3.out" });
      // stagger nav links
      gsap.fromTo(".m-nav-item",
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.07, delay: 0.2, ease: "power2.out" }
      );
      gsap.fromTo(".m-nav-footer",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.45, duration: 0.4, ease: "power2.out" }
      );
    } else {
      document.body.style.overflow = 'auto';
      gsap.to(overlay, { opacity: 0, duration: 0.3, ease: "power2.in", pointerEvents: 'none' });
      gsap.to(drawer, { x: '100%', duration: 0.4, ease: "power3.in" });
    }
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        ref={navbarRef}
        className="fixed top-0 w-full z-50 h-20 md:h-24 lg:h-[72px] flex items-center transition-colors duration-300 glass-nav border-b border-transparent"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Hexagon className="w-6 h-6 text-neonPrimary group-hover:rotate-90 transition-transform duration-500" />
            <span className="font-hero font-medium text-xl tracking-wide">Skyzen It Services</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium relative overflow-hidden group ${location.pathname === link.path ? 'text-neonPrimary' : 'text-textPrimary hover:text-textSecondary'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-neonPrimary transform ${location.pathname === link.path ? 'translate-x-0' : '-translate-x-[101%] group-hover:translate-x-0'} transition-transform duration-300 ease-out`} />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/quote" className="px-4 py-2 rounded-full text-sm font-semibold border border-neonPrimary text-neonPrimary hover:bg-neonPrimary/10 transition-colors">
              Get a Quote
            </Link>
            <Link to="/book" className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-cyan-purple text-textPrimary hover:scale-105 transition-all">
              Book Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-textPrimary hover:text-neonPrimary transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        ref={overlayRef}
        onClick={closeMenu}
        className="lg:hidden fixed inset-0 z-[60] bg-black/60"
        style={{ opacity: 0, pointerEvents: 'none' }}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="lg:hidden fixed top-0 right-0 h-full w-[80vw] max-w-xs z-[70] bg-black flex flex-col"
        style={{ transform: 'translateX(100%)' }}
      >
        {/* Cyan accent line at top */}
        <div className="h-[3px] w-full bg-neonPrimary" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
            <Hexagon className="w-5 h-5 text-neonPrimary" />
            <span className="font-hero font-medium text-base tracking-wide text-white">Skyzen</span>
          </Link>
          <button
            onClick={closeMenu}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-white hover:border-neonPrimary hover:text-neonPrimary transition-colors"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col flex-1 px-6 pt-8 gap-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={`m-nav-item flex items-center justify-between py-4 border-b border-white/8 group ${location.pathname === link.path ? 'text-neonPrimary' : 'text-white/80 hover:text-white'}`}
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-white/25 w-5">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-lg font-medium tracking-wide">{link.name}</span>
              </div>
              <ArrowUpRight
                className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 ${location.pathname === link.path ? 'opacity-100 text-neonPrimary' : 'text-white/50'}`}
              />
            </Link>
          ))}
        </nav>

        {/* Footer CTAs */}
        <div className="m-nav-footer px-6 pb-8 pt-6 flex flex-col gap-3 border-t border-white/10">
          <Link
            to="/quote"
            onClick={closeMenu}
            className="w-full text-center py-3 rounded-xl border border-neonPrimary text-neonPrimary text-sm font-semibold hover:bg-neonPrimary/10 transition-colors"
          >
            Get a Quote
          </Link>
          <Link
            to="/book"
            onClick={closeMenu}
            className="w-full text-center py-3 rounded-xl bg-gradient-cyan-purple text-white text-sm font-semibold hover:scale-[1.02] transition-transform"
          >
            Book Consultation
          </Link>
          <p className="text-center text-xs text-white/25 mt-2 tracking-wider uppercase">Skyzen It Services</p>
        </div>
      </div>
    </>
  );
}