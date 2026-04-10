import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { Code2, Smartphone, MonitorPlay, Cloud, BrainCircuit, Database } from 'lucide-react';

export default function ServicesOverview() {
  const services = [
    {
      title: "Web Development",
      description: "High-performance, scalable web applications built with modern frontend frameworks and robust backends.",
      icon: Code2,
      tags: ["React", "Next.js", "Vue"]
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform iOS and Android applications that deliver native-like performance and seamless UX.",
      icon: Smartphone,
      tags: ["React Native", "Flutter", "Swift"]
    },
    {
      title: "UI/UX Design",
      description: "Data-driven, user-centric interfaces that engage users and drive conversions with stunning aesthetics.",
      icon: MonitorPlay,
      tags: ["Figma", "Prototyping", "Wireframing"]
    },
    {
      title: "Cloud Solutions",
      description: "Secure, highly-available cloud architectures and DevOps pipelines for deploying your apps worry-free.",
      icon: Cloud,
      tags: ["AWS", "Docker", "Kubernetes"]
    },
    {
      title: "AI / Automation",
      description: "Intelligent systems and workflows to automate repetitive processes and generate insights.",
      icon: BrainCircuit,
      tags: ["OpenAI API", "Python", "LangChain"]
    },
    {
      title: "Backend & APIs",
      description: "Secure, high-throughput microservices and REST/GraphQL APIs powering complex ecosystems.",
      icon: Database,
      tags: ["Node.js", "PostgreSQL", "MongoDB"]
    }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-bgPrimary relative">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16">
        <SectionHeader
          label="Our Services"
          title="End-to-End Digital Engineering"
          subtitle="We provide a full spectrum of software development services to help you build, scale, and optimize your digital products."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((svc, i) => (
            <Card key={i} className="reveal-card flex flex-col h-full relative group">
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-gradient-cyan-purple flex items-center justify-center mb-4 sm:mb-6 shadow-glow-primary">
                <svc.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white service-icon" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium font-heading mb-2 sm:mb-3 text-textPrimary">{svc.title}</h3>
              <p className="text-textSecondary mb-4 sm:mb-6 flex-grow leading-relaxed font-body text-sm">
                {svc.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {svc.tags.map(tag => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <a href="/services" className="text-neonPrimary font-medium text-sm inline-flex items-center group-hover:text-white transition-colors mt-auto">
                Learn More <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center reveal-heading">
          <Button href="/services" variant="primary">View All Services</Button>
        </div>
      </div>
    </section>
  );
}
