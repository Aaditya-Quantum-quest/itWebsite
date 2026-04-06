import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const fadeInUp = (element, delay = 0) => {
  gsap.fromTo(element, 
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration: 0.8, delay, ease: "power3.out" }
  );
};

export const staggerReveal = (elements, staggerAmount = 0.1) => {
  gsap.fromTo(elements,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.6, stagger: staggerAmount, 
      ease: "power2.out" }
  );
};

export const initScrollAnimations = () => {
  // Cards stagger reveal
  gsap.utils.toArray('.reveal-card').forEach((card) => {
    gsap.fromTo(card, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6,
        scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" }
      }
    );
  });
  
  // Section headings
  gsap.utils.toArray('.reveal-heading').forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: { trigger: el, start: "top 90%" }
    });
  });
  
  // Left-slide elements
  gsap.utils.toArray('.reveal-left').forEach(el => {
    gsap.fromTo(el, { opacity: 0, x: -60 }, {
      opacity: 1, x: 0, duration: 0.8,
      scrollTrigger: { trigger: el, start: "top 80%" }
    });
  });
};
