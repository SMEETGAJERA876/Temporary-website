import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    industry: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTicketId(`DHG-ENG-${Math.floor(10000 + Math.random() * 90000)}`);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-8 bg-brand-darknavy font-sans relative z-10 border-t border-white/10 text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-brand-blue/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Left Info Column */}
        <div className="lg:col-span-5 text-left">
          <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-brand-sky mb-3 block">
            COLLABORATE WITH US
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.05] tracking-tight mb-8">
            Let's Engineer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-white to-brand-bright">
              What's Next.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-12">
            Tell us about your machine controls, SCADA modernizations, cleanroom automation, or digital twin goals. Our senior integration engineers will prepare a customized technical proposal.
          </p>

          <div className="space-y-4 text-sm font-semibold">
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-brand-navy/60 border border-white/10 shadow-lg backdrop-blur-md">
              <span className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-sky font-bold text-base border border-brand-blue/30">
                @
              </span>
              <div>
                <div className="text-xs text-white/50">Direct Engineering Inquiries</div>
                <div className="text-sm font-bold text-white">integration@dhgsoft.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-brand-navy/60 border border-white/10 shadow-lg backdrop-blur-md">
              <span className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-sky font-bold text-base border border-brand-blue/30">
                24/7
              </span>
              <div>
                <div className="text-xs text-white/50">Global Plant Engineering Support</div>
                <div className="text-sm font-bold text-white">+1 (800) 555-DHGSOFT</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-7 bg-brand-navy/80 border border-white/15 rounded-[3rem] p-8 md:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6" 
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="text-left">
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">First Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full px-4 py-3.5 bg-brand-darknavy/80 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-brand-sky focus:bg-brand-darknavy transition-colors placeholder-white/30" 
                      placeholder="John"
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full px-4 py-3.5 bg-brand-darknavy/80 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-brand-sky focus:bg-brand-darknavy transition-colors placeholder-white/30" 
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="text-left">
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">Company Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3.5 bg-brand-darknavy/80 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-brand-sky focus:bg-brand-darknavy transition-colors placeholder-white/30" 
                      placeholder="Global Manufacturing Corp"
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">Job Title</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                      className="w-full px-4 py-3.5 bg-brand-darknavy/80 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-brand-sky focus:bg-brand-darknavy transition-colors placeholder-white/30" 
                      placeholder="VP of Engineering / Plant Manager"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="text-left">
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">Work Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3.5 bg-brand-darknavy/80 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-brand-sky focus:bg-brand-darknavy transition-colors placeholder-white/30" 
                      placeholder="john@company.com"
                    />
                  </div>
                  <div className="text-left">
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3.5 bg-brand-darknavy/80 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-brand-sky focus:bg-brand-darknavy transition-colors placeholder-white/30" 
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">Target Industry</label>
                  <select 
                    required 
                    value={formData.industry}
                    onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    className="w-full px-4 py-3.5 bg-brand-darknavy/80 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-brand-sky focus:bg-brand-darknavy transition-colors"
                  >
                    <option value="" className="bg-brand-darknavy text-white">Select your industry</option>
                    <option value="Semiconductor Fabrication" className="bg-brand-darknavy text-white">Semiconductor Fabrication</option>
                    <option value="Life Sciences & Pharmaceuticals" className="bg-brand-darknavy text-white">Life Sciences & Pharmaceuticals</option>
                    <option value="Industrial Manufacturing" className="bg-brand-darknavy text-white">Industrial Manufacturing</option>
                    <option value="Automotive Assembly & Robotics" className="bg-brand-darknavy text-white">Automotive Assembly & Robotics</option>
                    <option value="Food & Beverages" className="bg-brand-darknavy text-white">Food & Beverages</option>
                    <option value="Chemical Process Control" className="bg-brand-darknavy text-white">Chemical Process Control</option>
                    <option value="EPC Plant Engineering" className="bg-brand-darknavy text-white">EPC Plant Engineering</option>
                    <option value="Other" className="bg-brand-darknavy text-white">Other</option>
                  </select>
                </div>

                <div className="text-left">
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">Project Scope / Automation Requirements</label>
                  <textarea 
                    required 
                    rows="4" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe your machine controls, SCADA, edge telemetry, or AI goals..."
                    className="w-full px-4 py-3.5 bg-brand-darknavy/80 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:border-brand-sky focus:bg-brand-darknavy transition-colors placeholder-white/30" 
                  />
                </div>

                <div className="flex items-start gap-3 text-left">
                  <input type="checkbox" required className="mt-1 w-4 h-4 rounded text-brand-blue focus:ring-brand-sky bg-brand-darknavy border-white/20 cursor-pointer" id="consent" />
                  <label htmlFor="consent" className="text-xs text-white/60 leading-relaxed cursor-pointer">
                    I agree to DHGsoft collecting and processing my data in accordance with the Privacy Policy for engineering consultation.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full font-bold tracking-wide transition-all duration-300 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-electric text-white py-4 hover:scale-[1.01] shadow-xl shadow-brand-blue/30 cursor-pointer"
                >
                  Submit Engineering Request →
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-3xl mb-6">
                  ✓
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-3">
                  Request Dispatched Successfully
                </h3>
                <p className="text-sm text-white/70 max-w-md mb-6 leading-relaxed">
                  Thank you, <strong className="text-brand-sky">{formData.firstName}</strong>. Your ticket has been registered in the DHGsoft engineering queue for <strong className="text-brand-sky">{formData.company || 'your team'}</strong>.
                </p>
                <div className="p-4 rounded-xl bg-brand-darknavy border border-white/10 font-mono text-xs text-brand-sky mb-8">
                  Routing ID: #{ticketId} • ETA: &lt; 24h
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-white/20 text-xs font-bold text-white hover:bg-white/10 cursor-pointer"
                >
                  ← Submit Another Inquest
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
