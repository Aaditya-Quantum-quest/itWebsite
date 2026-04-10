import React, { useEffect } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import CTABanner from '../components/sections/CTABanner';
import { Target, Eye, Lightbulb, Users, Diamond, Handshake } from 'lucide-react';
import { initScrollAnimations } from '../lib/gsap';

export default function About() {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  const milestones = [
    { year: "2016", title: "Founded", desc: "Started as a small team of passionate developers in a garage." },
    { year: "2018", title: "First Enterprise Client", desc: "Delivered a game-changing ERP system for a Fortune 500 company." },
    { year: "2021", title: "Global Expansion", desc: "Opened offices in 3 countries to support our growing international client base." },
    { year: "2024", title: "AI Integration Focus", desc: "Pivoted heavily into building smart automated systems for modern businesses." }
  ];

  const team = [
    { name: "Alex Mercer", role: "CEO & Founder", img: "linear-gradient(45deg, #1e293b, #0f172a)" },
    { name: "Sarah Chen", role: "Head of Engineering", img: "linear-gradient(45deg, #064e3b, #022c22)" },
    { name: "Marcus Johnson", role: "Creative Director", img: "linear-gradient(45deg, #312e81, #1e1b4b)" },
    { name: "Elena Rodriguez", role: "Lead Data Scientist", img: "linear-gradient(45deg, #7f1d1d, #450a0a)" }
  ];

  return (
    <div className="flex flex-col bg-bgPrimary">
      <section className=" min-h-[350px] md:min-h-[400px] md:h-[40vh] flex items-center bg-bgSecondary border-b border-surfaceElevated relative overflow-hidden reveal-heading">
        <div className="absolute inset-0 bg-gradient-cyan-purple opacity-[0.03]" />
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center mt-12 md:mt-0">
          <div className="text-sm font-mono text-textMuted mb-6 space-x-2">
            <span className="hover:text-neonPrimary cursor-pointer transition-colors">Home</span>
            <span>/</span>
            <span className="text-neonPrimary">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-hero font-medium uppercase mb-4">
            Built by Builders.<br />Driven by <span className="text-transparent bg-clip-text bg-gradient-cyan-purple">Impact.</span>
          </h1>

          <p className="text-textSecondary max-w-xl mx-auto text-base leading-relaxed">
            Skyzen IT Services builds clean, intuitive solutions to solve real problems.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-bgSecondary border-y border-surfaceElevated relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neonPrimary/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div className="glass p-10 rounded-3xl border-t-4 border-t-neonPrimary shadow-lg reveal-card">
            <Target className="w-12 h-12 text-neonPrimary mb-6" />
            <h3 className="text-2xl font-heading font-medium mb-4">Our Mission</h3>
            <p className="text-textSecondary leading-relaxed">
              To empower forward-thinking organizations with robust, scalable technology that acts as a catalyst for their growth, efficiency, and market dominance.
            </p>
          </div>
          <div className="glass p-10 rounded-3xl border-t-4 border-t-neonSecondary shadow-lg reveal-card">
            <Eye className="w-12 h-12 text-neonSecondary mb-6" />
            <h3 className="text-2xl font-heading font-medium mb-4">Our Vision</h3>
            <p className="text-textSecondary leading-relaxed">
              We envision a digital landscape where complex software is built on an unbreakable foundation of security, performance, and aesthetic brilliance.
            </p>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-24 container mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeader label="Our Journey" title="The Story So Far" />

        <div className="max-w-4xl mx-auto relative pl-8 md:pl-0">
          {/* Vertical line desktop/mobile */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-surfaceElevated transform md:-translate-x-1/2" />

          {milestones.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`relative flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-16 reveal-card ${isEven ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12" />

                <div className="absolute left-[-11px] md:left-1/2 w-6 h-6 rounded-full border-4 border-bgPrimary bg-neonPrimary transform md:-translate-x-1/2 shadow-[0_0_15px_rgba(0,212,255,0.8)] z-10" />

                <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? 'md:text-left md:pr-12' : 'md:text-right md:pl-12'}`}>
                  <span className="text-neonPrimary font-mono font-medium text-xl mb-2 block">{item.year}</span>
                  <h4 className="text-2xl font-heading font-medium mb-3">{item.title}</h4>
                  <p className="text-textSecondary">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-bgSecondary">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeader label="What Drives Us" title="Core Values" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: "Innovation", desc: "Always exploring next-gen tech." },
              { icon: Diamond, title: "Quality", desc: "No compromises on clean code." },
              { icon: Hands, title: "Transparency", desc: "Honest communication always." },
              { icon: Target, title: "Ownership", desc: "We act as your technical co-founders." }
            ].map((v, i) => (
              <div key={i} className="glass p-8 rounded-2xl text-center hover:bg-surfaceCard transition-colors reveal-card">
                <v.icon className="w-10 h-10 mx-auto text-neonPrimary mb-4" />
                <h4 className="text-xl font-heading font-semibold mb-2">{v.title}</h4>
                <p className="text-textMuted text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-24 container mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeader label="The Minds Behind It" title="Meet Leadership" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden glass aspect-[3/4] flex flex-col justify-end p-6 reveal-card cursor-pointer">
              <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110" style={{ background: member.img }} />
              <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary/90 via-bgPrimary/20 to-transparent z-10" />
              <div className="relative z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-xl font-heading font-medium mb-1">{member.name}</h4>
                <p className="text-neonPrimary font-mono text-xs uppercase">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <CTABanner />
    </div>
  );
}

// Quick fallback for Hands icon not existing
function Hands(props) { return <Handshake {...props} /> }
