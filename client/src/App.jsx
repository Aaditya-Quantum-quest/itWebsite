import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Cursor from './components/ui/Cursor';
import Preloader from './components/ui/Preloader';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import GetQuote from './pages/GetQuote';
import BookConsultation from './pages/BookConsultation';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();
  const mainRef = useRef(null);
  const progressBarRef = useRef(null);

  // Scroll progress bar
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      
      if (progressBarRef.current) {
        gsap.to(progressBarRef.current, {
          scaleX: scrollProgress / 100,
          duration: 0.05,
          ease: "power2.out"
        });
      }
    };

    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: updateProgress
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Scroll to top and animate page transitions on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.4, delay: 0.1 }
      );
    }
  }, [location.pathname]);

  return (
    <>
      <Preloader />
      <Cursor />
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <div 
        ref={progressBarRef}
        className="scroll-progress-bar fixed top-0 left-0 h-[2px] bg-neonPrimary z-[100] w-full scale-x-0 origin-left" 
      />

      <main className="min-h-screen pt-[72px]" ref={mainRef}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/quote" element={<GetQuote />} />
          <Route path="/book" element={<BookConsultation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
