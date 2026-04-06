import React, { useState } from 'react';
import { Mail, Phone as Whatsapp, Clock, ShieldCheck, ArrowRight, UploadCloud, CheckCircle } from 'lucide-react';
import gsap from 'gsap';

export default function GetQuote() {
  const [status, setStatus] = useState('idle'); // idle, loading, success
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', serviceType: '', budget: 50, timeline: '', description: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      // Success GSAP Animation
      gsap.to('.form-container', { opacity: 0, scale: 0.95, duration: 0.3, onComplete: () => setStatus('success') });
    }, 1500);
  };

  const InputField = ({ label, name, type = 'text', required = false }) => (
    <div className="relative mb-6">
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        value={formData[name]}
        onChange={handleChange}
        placeholder=" "
        className="block w-full px-4 pt-6 pb-2 text-textPrimary bg-surfaceElevated border border-neonPrimary/20 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-neonPrimary peer transition-colors"
      />
      <label
        htmlFor={name}
        className="absolute text-sm text-textMuted duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-neonPrimary bg-transparent"
      >
        {label} {required && '*'}
      </label>
    </div>
  );

  return (
    <div className="min-h-screen bg-bgPrimary pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-neonPrimary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row gap-16">
        
        {/* LEFT INFO */}
        <div className="w-full lg:w-[45%] flex flex-col">
          <h1 className="text-4xl md:text-5xl font-hero font-bold mb-4">Start Your Project</h1>
          <p className="text-textSecondary text-lg mb-10">Get a detailed technical estimate within 24 hours. No commitment required.</p>
          
          <div className="space-y-8 mb-12">
            {[
              { title: "Fill the form (2 min)", icon: Clock },
              { title: "We analyze requirements", icon: ShieldCheck },
              { title: "Receive detailed quote", icon: Mail },
              { title: "Free strategy session", icon: Whatsapp }
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-neonPrimary">
                  <step.icon className="w-5 h-5" />
                </div>
                <span className="font-heading font-medium text-textPrimary">{i+1}. {step.title}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto glass p-6 rounded-2xl border-neonPrimary/20">
            <h4 className="font-heading font-semibold text-lg mb-4">Need help immediately?</h4>
            <div className="flex gap-4">
              <a href="mailto:hello@nexaforge.com" className="hover:text-neonPrimary transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email Us
              </a>
              <span className="text-surfaceElevated">|</span>
              <a href="tel:+1234567890" className="hover:text-neonPrimary transition-colors flex items-center gap-2 text-green-400">
                <Whatsapp className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-[55%]">
          {status === 'success' ? (
            <div className="glass p-12 rounded-3xl text-center flex flex-col items-center">
               <CheckCircle className="w-24 h-24 text-success mb-6" />
               <h3 className="text-3xl font-hero font-bold mb-4">Request Sent!</h3>
               <p className="text-textSecondary mb-8">Thank you, {formData.name || 'there'}. We have received your request and will get back to you within 24 hours.</p>
               <a href="/" className="px-8 py-3 rounded-full bg-surfaceElevated hover:bg-surfaceCard transition-colors border border-white/10">Back to Home</a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form-container glass p-8 md:p-12 rounded-3xl shadow-2xl relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <InputField label="Full Name" name="name" required />
                <InputField label="Email Address" name="email" type="email" required />
                <InputField label="Phone Number" name="phone" type="tel" />
                <InputField label="Company (Optional)" name="company" />
              </div>

              <div className="relative mb-6">
                <select 
                  name="serviceType" 
                  value={formData.serviceType} 
                  onChange={handleChange} 
                  required
                  className="block w-full px-4 py-4 text-textPrimary bg-surfaceElevated border border-neonPrimary/20 rounded-xl appearance-none focus:outline-none focus:border-neonPrimary"
                >
                  <option value="" disabled>Select Service Needed *</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="ai">AI / Automation</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm text-texttextMuted mb-4">Budget Range: ${formData.budget}K+</label>
                <input 
                  type="range" min="5" max="250" step="5"
                  name="budget" value={formData.budget} onChange={handleChange}
                  className="w-full h-2 bg-surfaceElevated rounded-lg appearance-none cursor-pointer accent-neonPrimary"
                />
                <div className="flex justify-between text-xs text-textMuted mt-2 font-mono">
                  <span>$5K</span>
                  <span>$250K+</span>
                </div>
              </div>

              <div className="relative mb-8">
                <textarea
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and requirements..."
                  className="block w-full px-4 py-4 h-32 resize-none text-textPrimary bg-surfaceElevated border border-neonPrimary/20 rounded-xl focus:outline-none focus:border-neonPrimary transition-colors"
                ></textarea>
              </div>

              <div className="mb-8 border-2 border-dashed border-surfaceElevated hover:border-neonPrimary/50 rounded-xl p-8 text-center cursor-pointer transition-colors bg-bgPrimary/20">
                <UploadCloud className="w-8 h-8 mx-auto mb-2 text-textMuted" />
                <p className="text-sm text-textSecondary">Drag & drop files or click to upload</p>
                <p className="text-xs text-textMuted mt-1">PDF, DOC, PNG up to 10MB</p>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full py-4 rounded-full bg-gradient-cyan-purple text-white font-semibold flex items-center justify-center gap-2 hover:shadow-btn-glow transition-all disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Send My Request <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
