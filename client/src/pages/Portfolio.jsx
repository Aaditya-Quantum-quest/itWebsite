import React, { useState, useEffect } from 'react';
import Badge from '../components/ui/Badge';
import { ExternalLink, X } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import gsap from 'gsap';
import CTABanner from '../components/sections/CTABanner';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');
  const [modalProject, setModalProject] = useState(null);

  const tabs = ['All', 'Web', 'Mobile', 'UI-UX', 'AI', 'Cloud'];
  const projects = [
    { id: 1, title: "FinSight Analytics", client: "Finance Inc.", duration: "3 Months", category: "Web", tags: ["Next.js", "D3.js", "Node"], img: "linear-gradient(45deg, #1e293b, #0f172a)", results: "Increased data parsing speed by 400%", challenge: "Client needed a high-performance dashboard to visualize gigabytes of trading data in real-time.", solution: "Built a custom Next.js frontend with specialized WebGL and D3.js charting hooked into a Redis-backed Node microservice." },
    { id: 2, title: "HealthTrack Mobile", client: "Wellness Co.", duration: "5 Months", category: "Mobile", tags: ["React Native", "Firebase"], img: "linear-gradient(45deg, #064e3b, #022c22)", results: "1M+ App Store downloads", challenge: "Creating a seamless cross-platform experience that handles background biometric syncing.", solution: "Leveraged React Native with custom Swift/Kotlin bridging for battery-efficient background processing." },
    { id: 3, title: "Nexus E-Commerce", client: "Retail Giant", duration: "6 Months", category: "Web", tags: ["React", "Stripe", "GraphQL"], img: "linear-gradient(45deg, #312e81, #1e1b4b)" },
    { id: 4, title: "AI Sales Agent", client: "B2B SaaS", duration: "2 Months", category: "AI", tags: ["Python", "OpenAI", "React"], img: "linear-gradient(45deg, #4c1d95, #2e1065)" },
    { id: 5, title: "SmartHome Controller", client: "IoT Startup", duration: "4 Months", category: "Mobile", tags: ["Flutter", "AWS IoT"], img: "linear-gradient(45deg, #7f1d1d, #450a0a)" },
    { id: 6, title: "Cloud Infrastructure", client: "Enterprise", duration: "8 Months", category: "Cloud", tags: ["AWS", "Terraform"], img: "linear-gradient(45deg, #0f766e, #042f2e)" }
  ];

  const filtered = activeTab === 'All' ? projects : projects.filter(p => p.category === activeTab);

  const openModal = (proj) => {
    setModalProject(proj);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      gsap.fromTo('.portfolio-modal', 
        { opacity: 0, scale: 0.9, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.2)" }
      );
    }, 10);
  };

  const closeModal = () => {
    gsap.to('.portfolio-modal', { opacity: 0, scale: 0.9, y: 50, duration: 0.3 });
    setTimeout(() => {
      setModalProject(null);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  return (
    <div className="flex flex-col min-h-screen bg-bgPrimary pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-hero font-bold mb-6">Our Work Speaks for Itself</h1>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">Explore our diverse portfolio of successfully delivered digital products across multiple industries.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-heading text-sm transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-gradient-cyan-purple text-textPrimary shadow-glow-primary' 
                  : 'bg-transparent border border-surfaceElevated text-textSecondary hover:border-textSecondary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filtered.map((proj) => (
            <div key={proj.id} className="group rounded-2xl overflow-hidden glass border-neonPrimary/10 hover:border-neonPrimary/40 transition-colors cursor-pointer" onClick={() => openModal(proj)}>
              <div className="w-full aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{ background: proj.img }} />
                <Badge className="absolute top-4 left-4 bg-bgPrimary/80 backdrop-blur-md">{proj.category}</Badge>
                <div className="absolute inset-0 bg-bgPrimary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-3 rounded-full bg-neonPrimary text-bgPrimary font-semibold hover:scale-105 transition-transform">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-2">{proj.title}</h3>
                <p className="text-textMuted text-sm mb-4 line-clamp-2">{proj.challenge || "A cutting edge scalable architectural solution."}</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {proj.tags.slice(0,2).map(tag => <span key={tag} className="text-xs text-neonPrimary/80 font-mono bg-neonPrimary/10 px-2 py-1 rounded">{tag}</span>)}
                  </div>
                  <div className="flex gap-2 text-textSecondary">
                    <ExternalLink className="w-4 h-4 hover:text-white" />
                    <Github className="w-4 h-4 hover:text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTABanner />

      {/* Modal */}
      {modalProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          <div className="absolute inset-0 bg-bgPrimary/90 backdrop-blur-sm" onClick={closeModal} />
          
          <div className="portfolio-modal relative w-full max-w-5xl max-h-[90vh] bg-surfaceCard rounded-3xl overflow-hidden shadow-2xl border border-neonPrimary/20 flex flex-col">
            <div className="h-16 border-b border-surfaceElevated flex items-center justify-between px-6 bg-bgSecondary">
              <span className="font-heading font-semibold text-lg">{modalProject.title}</span>
              <button onClick={closeModal} className="p-2 text-textMuted hover:text-white rounded-full hover:bg-surfaceElevated transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
              <div className="w-full aspect-video rounded-xl overflow-hidden mb-10 border border-white/5 shadow-inner" style={{ background: modalProject.img }}>
                {/* Images slider would go here typically */}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h4 className="text-2xl font-heading font-bold mb-4">The Challenge</h4>
                    <p className="text-textSecondary leading-relaxed">{modalProject.challenge || "Standard project overview and challenges faced during initial planning."}</p>
                  </div>
                  <div className="w-16 h-1 bg-surfaceElevated rounded-full" />
                  <div>
                    <h4 className="text-2xl font-heading font-bold mb-4">The Solution</h4>
                    <p className="text-textSecondary leading-relaxed">{modalProject.solution || "Implementation details and architectural decisions that led to success."}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="glass p-6 rounded-xl">
                    <h5 className="font-heading font-semibold mb-4 text-white">Project Details</h5>
                    <ul className="space-y-4 text-sm">
                      <li>
                        <span className="text-textMuted block mb-1">Client</span>
                        <strong className="text-textPrimary">{modalProject.client}</strong>
                      </li>
                      <li>
                        <span className="text-textMuted block mb-1">Duration</span>
                        <strong className="text-textPrimary">{modalProject.duration}</strong>
                      </li>
                      <li>
                        <span className="text-textMuted block mb-1">Tech Stack</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {modalProject.tags.map(t => <Badge key={t}>{t}</Badge>)}
                        </div>
                      </li>
                    </ul>
                  </div>

                  {modalProject.results && (
                    <div className="bg-gradient-cyan-purple/10 border border-neonPrimary/30 p-6 rounded-xl relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-neonPrimary" />
                      <h5 className="font-heading font-semibold mb-2 text-neonPrimary">Key Results</h5>
                      <p className="text-textPrimary font-medium">{modalProject.results}</p>
                    </div>
                  )}

                  <a href="/quote" className="block w-full py-4 text-center rounded-xl bg-gradient-cyan-purple text-textPrimary font-semibold hover:shadow-btn-glow transition-shadow">
                    Like this? Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
