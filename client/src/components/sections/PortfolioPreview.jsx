import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

export default function PortfolioPreview() {
  const [activeTab, setActiveTab] = useState('All');
  
  const tabs = ['All', 'Web', 'Mobile', 'AI'];
  const projects = [
    { title: "E-Commerce Platform", category: "Web", tags: ["Next.js", "Stripe"], img: "linear-gradient(45deg, #1e293b, #0f172a)" },
    { title: "Finance Dashboard", category: "Web", tags: ["React", "Chart.js"], img: "linear-gradient(45deg, #0f172a, #1e1b4b)" },
    { title: "Health Tracker App", category: "Mobile", tags: ["React Native"], img: "linear-gradient(45deg, #064e3b, #022c22)" },
    { title: "AI Chat Assistant", category: "AI", tags: ["Python", "OpenAI"], img: "linear-gradient(45deg, #312e81, #1e1b4b)" }
  ];

  const filtered = activeTab === 'All' ? projects : projects.filter(p => p.category === activeTab);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-bgPrimary">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16">
        <SectionHeader label="Our Work" title="Featured Projects" />
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 reveal-heading">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2 rounded-full font-heading text-sm transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-gradient-cyan-purple text-textPrimary shadow-glow-primary' 
                  : 'bg-transparent border border-surfaceElevated text-textSecondary hover:border-textSecondary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {filtered.map((proj, i) => (
            <div key={i} className="reveal-card group rounded-2xl overflow-hidden glass hover:border-neonPrimary/50 transition-colors">
              <div 
                className="w-full aspect-[4/3] relative overflow-hidden"
              >
                <div className="absolute inset-0" style={{ background: proj.img }} />
                {/* Fake App Mockup */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-surfaceCard rounded-t-xl overflow-hidden border border-white/5 border-b-0 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                  <div className="h-6 bg-surfaceElevated border-b border-white/5 flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/20"/>
                    <div className="w-2 h-2 rounded-full bg-white/20"/>
                    <div className="w-2 h-2 rounded-full bg-white/20"/>
                  </div>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-bgPrimary/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-white text-bgPrimary flex items-center justify-center hover:scale-110 transition-transform overlay-btn">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-surfaceCard border border-white/20 text-white flex items-center justify-center hover:scale-110 hover:border-white transition-transform overlay-btn">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg sm:text-xl font-bold font-heading">{proj.title}</h3>
                  <Badge className="bg-transparent border-neonPrimary/50 text-sm">{proj.category}</Badge>
                </div>
                <div className="flex gap-2">
                  {proj.tags.map(tag => <span key={tag} className="text-xs text-textMuted font-mono">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center reveal-heading">
          <Button href="/portfolio" variant="secondary">View Full Portfolio</Button>
        </div>
      </div>
    </section>
  );
}
