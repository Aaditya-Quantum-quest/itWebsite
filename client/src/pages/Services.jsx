import React, { useEffect } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import CTABanner from '../components/sections/CTABanner';
import { Code2, Smartphone, MonitorPlay, Cloud, BrainCircuit, Database, CheckCircle2 } from 'lucide-react';
import { initScrollAnimations } from '../lib/gsap';

export default function Services() {
  useEffect(() => {
    const timer = setTimeout(() => {
      initScrollAnimations();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "We build blazing-fast, highly interactive single-page applications and complex enterprise web platforms. Utilizing the latest React/Next.js features, we ensure perfect SEO, accessibility, and dynamic UX.",
      icon: Code2,
      offers: ["Custom Web Applications", "E-Commerce Platforms", "SaaS Dashboards", "Progressive Web Apps (PWAs)"],
      stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      benefits: ["SEO Optimized", "Millisecond Load Times", "Responsive Design"]
    },
    {
      title: "Mobile App Development",
      description: "Our mobile solutions provide native performance on both iOS and Android from a single codebase. We craft experiences that users love, with smooth animations and robust offline capabilities.",
      icon: Smartphone,
      offers: ["iOS & Android Apps", "Cross-Platform with React Native", "App Store Optimization", "legacy App Modernization"],
      stack: ["React Native", "Expo", "Flutter", "Swift/Kotlin"],
      benefits: ["Native Feel", "Offline Support", "Push Notifications"]
    },
    {
      title: "Cloud Solutions",
      description: "We design and implement secure, scalable cloud architectures. From migrating monolithic apps to microservices to setting up full CI/CD pipelines, we've got your infrastructure covered.",
      icon: Cloud,
      offers: ["Cloud Migration", "Serverless Architecture", "DevOps & CI/CD", "Database Optimization"],
      stack: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
      benefits: ["99.9% Uptime", "Auto-scaling", "Cost Efficiency"]
    },
    {
      title: "UI/UX Design",
      description: "We create intuitive, engaging, and beautiful product experiences. From wireframes to high-fidelity prototypes, our design process ensures your users are always front and center.",
      icon: MonitorPlay,
      offers: ["Wireframing", "Interactive Prototyping", "User Research", "Design Systems"],
      stack: ["Figma", "Framer", "Adobe CC", "Webflow"],
      benefits: ["User Centric", "Pixel Perfect", "High Conversion"]
    },
    {
      title: "AI & Automations",
      description: "Leverage the power of artificial intelligence to optimize your business. We build custom LLM integrations, automated workflows, and intelligent chatbots to scale your operations.",
      icon: BrainCircuit,
      offers: ["Custom LLMs", "Workflow Automation", "Smart Chatbots", "Predictive Analytics"],
      stack: ["Python", "OpenAI API", "LangChain", "TensorFlow"],
      benefits: ["24/7 Operations", "Data Driven", "Time Saving"]
    },
    {
      title: "Backend & APIs",
      description: "Robust, scalable, and secure backend architectures to power your applications. We design high-performance REST and GraphQL APIs backed by optimized databases.",
      icon: Database,
      offers: ["RESTful APIs", "GraphQL Services", "Database Design", "Microservices"],
      stack: ["Node.js", "Go", "PostgreSQL", "MongoDB"],
      benefits: ["Highly Scalable", "Secure Data", "Fast Execution"]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Subsection */}
      <section className="h-[50vh] min-h-[400px] flex items-center bg-bgSecondary border-b border-surfaceElevated relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cyan-purple opacity-[0.03]" />
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 text-center">
          <div className="text-sm font-mono text-textMuted mb-6 space-x-2">
            <span className="hover:text-neonPrimary cursor-pointer transition-colors">Home</span>
            <span>/</span>
            <span className="text-neonPrimary">Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-hero font-medium uppercase mb-4">End-to-End Digital Solutions</h1>
          <p className="text-textSecondary max-w-2xl mx-auto text-lg">We bring your boldest ideas to life through rigorous engineering and stunning design.</p>
        </div>
      </section>

      {/* Services List Alternating Layout */}
      <section className="py-24 bg-bgPrimary">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col gap-32">
          {services.map((svc, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''} reveal-card`}>

                {/* Visual Side */}
                <div className="w-full lg:w-1/2 relative group perspective-[800px]">
                  <div className="absolute inset-0 bg-gradient-cyan-purple blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className={`relative w-full aspect-square md:aspect-video lg:aspect-square max-h-[500px] rounded-2xl border border-neonPrimary/30 glass overflow-hidden ${isEven ? 'rotate-y-[-5deg]' : 'rotate-y-[5deg]'} transition-transform duration-500 group-hover:rotate-y-0`}>
                    <div className="absolute inset-0 flex items-center justify-center bg-bgSecondary/50">
                      <svc.icon className="w-32 h-32 text-neonPrimary/40 drop-shadow-glow" />
                    </div>
                  </div>
                  {/* Floating Tags */}
                  <Badge className="absolute top-8 -right-4 shadow-lg lg:-right-8">{svc.benefits[0]}</Badge>
                  <Badge className="absolute bottom-16 -left-4 shadow-lg lg:-left-8">{svc.benefits[1]}</Badge>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                  <div className="w-16 h-16 rounded-2xl bg-surfaceElevated border border-neonPrimary/20 flex items-center justify-center mb-6 text-neonPrimary">
                    <svc.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-heading font-medium mb-4">{svc.title}</h2>
                  <p className="text-textSecondary mb-8 text-lg font-body leading-relaxed">{svc.description}</p>

                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-heading font-semibold mb-4 text-white">What We Offer</h4>
                      <ul className="space-y-3">
                        {svc.offers.map((offer, i) => (
                          <li key={i} className="flex items-start gap-2 text-textMuted text-sm">
                            <CheckCircle2 className="w-5 h-5 text-neonPrimary flex-shrink-0" />
                            <span>{offer}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-4 text-white">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {svc.stack.map((tech, i) => (
                          <Badge key={i} className="bg-surfaceCard">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button href={`/quote?service=${svc.title.toLowerCase().replace('/', '').replace(' ', '-')}`} variant="secondary" className="mt-4">
                    Get a Quote for This Service →
                  </Button>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
