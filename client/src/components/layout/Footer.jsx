import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, Phone as Whatsapp, Mail, MapPin, ArrowUp } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as Twitter, FaInstagram as Instagram } from 'react-icons/fa';
import gsap from 'gsap';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        gsap.to('.back-to-top', { opacity: 1, scale: 1, duration: 0.3 });
      } else {
        gsap.to('.back-to-top', { opacity: 0, scale: 0.8, duration: 0.3 });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-[#060609] relative pt-16 pb-8 border-t border-transparent" style={{ borderImage: 'linear-gradient(to right, #00D4FF, #7B61FF, transparent) 1' }}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-12">

          {/* Col 1: Brand & Socials */}
          <div>
            <Link to="/" className="flex items-center gap-2 group mb-6">
              <Hexagon className="w-6 h-6 text-neonPrimary" />
              <span className="font-hero font-medium text-2xl tracking-wide text-textPrimary">Skyzen It Services</span>
            </Link>
            <p className="text-textSecondary mb-6 font-body text-sm leading-relaxed">
              We engineer digital products that scale. From MVP to enterprise platforms, building the future one line at a time.
            </p>
            <div className="flex items-center gap-4">
              {[Github, Linkedin, Twitter, Instagram, Whatsapp].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-surfaceElevated flex items-center justify-center text-textSecondary hover:text-neonPrimary hover:border-neonPrimary hover:shadow-glow-primary transition-all duration-300 transform hover:-translate-y-1">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-textPrimary font-heading font-semibold text-lg mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions', 'AI & Automation'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-textSecondary hover:text-neonPrimary transition-colors text-sm font-body">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-textPrimary font-heading font-semibold text-lg mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              {['About Us', 'Portfolio', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-textSecondary hover:text-neonPrimary transition-colors text-sm font-body">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-textPrimary font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-neonPrimary mt-0.5" />
                <div>
                  <p className="text-sm text-textSecondary font-body">Email</p>
                  <a href="mailto:hello@skyzenitservices.com" className="text-textPrimary hover:text-neonPrimary text-sm font-medium transition-colors">hello@skyzenitservices.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Whatsapp className="w-5 h-5 text-neonPrimary mt-0.5" />
                <div>
                  <p className="text-sm text-textSecondary font-body">Phone / WhatsApp</p>
                  <div className="flex flex-col">
                    <a href="tel:+919389491488" className="text-textPrimary hover:text-neonPrimary text-sm font-medium transition-colors">+91 93894 91488</a>
                    <a href="tel:+919411129755" className="text-textPrimary hover:text-neonPrimary text-sm font-medium transition-colors">+91 94111 29755</a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neonPrimary mt-0.5" />
                <div>
                  <p className="text-sm text-textSecondary font-body">Location</p>
                  <p className="text-textPrimary text-sm font-medium">Remote-first, Global Hub</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surfaceElevated flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-textMuted text-xs font-body">
            &copy; {new Date().getFullYear()} Skyzen It Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-textMuted font-body">
            <Link to="/privacy" className="hover:text-textSecondary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-textSecondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <button
          onClick={scrollToTop}
          className="back-to-top opacity-0 scale-80 w-12 h-12 bg-surfaceElevated border border-neonPrimary/30 rounded-full flex items-center justify-center text-neonPrimary hover:bg-neonPrimary/10 hover:shadow-glow-primary transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
        <a
          href="https://wa.me/919389491488"
          target="_blank" rel="noreferrer"
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg animate-pulse hover:animate-none hover:scale-110 transition-transform relative group"
        >
          <Whatsapp className="w-7 h-7" />
          <span className="absolute right-full mr-4 bg-surfaceCard text-textPrimary text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">Chat with us</span>
        </a>
      </div>
    </footer>
  );
}
