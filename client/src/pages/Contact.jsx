import React, { useState } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import gsap from 'gsap';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/skyzenitservices@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        gsap.to('.contact-form', { opacity: 0, scale: 0.95, duration: 0.3, onComplete: () => setStatus('success') });
      } else {
        setStatus('idle');
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus('idle');
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen pt-10 md:pt-15 lg:pt-20 pb-24 bg-bgPrimary flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-cyan-purple opacity-[0.03] blur-[150px] rounded-full" />

      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row gap-16 relative z-10 w-full mb-20">

        {/* Left: Info */}
        <div className="w-full lg:w-5/12">
          <SectionHeader
            label="Contact Us"
            title="Let's Start a Conversation."
            subtitle="Whether you have a question about services, pricing, or our team, we're ready to answer."
            className="lg:!items-start lg:!text-left"
          />

          <div className="grid grid-cols-1 gap-6 mt-8">
            <div className="glass p-6 rounded-2xl flex items-start gap-4 hover:border-neonPrimary/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-neonPrimary/10 flex flex-shrink-0 items-center justify-center text-neonPrimary hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-heading font-semibold mb-1 text-white">Email Us</h4>
                <p className="text-textSecondary text-sm mb-3">We'll respond within 24 hours.</p>
                <a href="mailto:hello@skyzenitservices.com" className="text-neonPrimary text-sm font-medium hover:underline">hello@skyzenitservices.com</a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-start gap-4 hover:border-neonPrimary/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex flex-shrink-0 items-center justify-center text-[#25D366] hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-heading font-semibold mb-1 text-white">WhatsApp / Phone</h4>
                <p className="text-textSecondary text-sm mb-3">Available Mon-Fri, 9am - 6pm (GMT +5:30).</p>
                <div className="flex flex-col gap-1">
                  <a href="tel:+919389491488" className="text-[#25D366] text-sm font-medium hover:underline">+91 93894 91488</a>
                  <a href="tel:+919411129755" className="text-[#25D366] text-sm font-medium hover:underline">+91 94111 29755</a>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-start gap-4 hover:border-neonPrimary/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-neonSecondary/10 flex flex-shrink-0 items-center justify-center text-neonSecondary hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-heading font-semibold mb-1 text-white">Headquarters</h4>
                <p className="text-textSecondary text-sm">Noida Sector 59, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-7/12">
          {status === 'success' ? (
            <div className="glass h-full min-h-[500px] rounded-3xl flex flex-col items-center justify-center p-12 text-center border-success/30 shadow-[0_0_50px_rgba(0,255,136,0.1)]">
              <CheckCircle className="w-20 h-20 text-success mb-6" />
              <h3 className="text-3xl font-hero font-medium mb-4">Message Received!</h3>
              <p className="text-textSecondary">Thanks for reaching out. A team member will reply shortly.</p>
            </div>
          ) : (
            <form action="https://formsubmit.co/skyzenitservices@gmail.com" method="POST" onSubmit={handleSubmit} className="contact-form glass p-8 md:p-12 rounded-3xl shadow-2xl relative border-neonPrimary/20">
              <h3 className="text-2xl font-heading font-medium mb-8">Send a Message</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-textSecondary px-1">Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 bg-surfaceElevated border border-white/5 focus:border-neonPrimary rounded-xl outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-textSecondary px-1">Email</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 bg-surfaceElevated border border-white/5 focus:border-neonPrimary rounded-xl outline-none transition-colors" />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium text-textSecondary px-1">Subject</label>
                <select name="subject" className="w-full px-4 py-3 bg-surfaceElevated border border-white/5 focus:border-neonPrimary rounded-xl outline-none appearance-none transition-colors text-textPrimary">
                  <option>General Inquiry</option>
                  <option>Partnership</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-sm font-medium text-textSecondary px-1">Message</label>
                <textarea name="message" required className="w-full h-40 px-4 py-3 bg-surfaceElevated border border-white/5 focus:border-neonPrimary rounded-xl outline-none resize-none transition-colors" />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-xl bg-gradient-cyan-purple text-textPrimary font-semibold flex justify-center items-center gap-2 hover:shadow-btn-glow transition-all"
              >
                {status === 'loading' ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Send Message <Send className="w-4 h-4 ml-1" /></>
                )}
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Embedded Map Visual */}
      <div className="w-full h-[400px] mt-10 bg-bgSecondary border-y border-surfaceElevated relative overflow-hidden flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.7646554380194!2d77.37281417549988!3d28.60683627567864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM2JzI0LjYiTiA3N8KwMjInMzEuNCJF!5e0!3m2!1sen!2sin!4v1775840842123!5m2!1sen!2sin" 
          className="w-full h-full border-0"
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
