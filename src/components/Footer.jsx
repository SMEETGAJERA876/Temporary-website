import React from 'react';
import { Link } from '../router';
import Logo from './Logo';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#000E2E] font-sans text-white pt-20 pb-12 relative overflow-hidden text-left border-t border-white/10">
      {/* Thin Orange Visual Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#E86A1C] to-transparent" />

      {/* Ambient background motion */}
      <div className="drift absolute -top-40 right-0 w-[520px] h-[520px] bg-[#0111A2]/30 rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Company Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link to="/" className="flex items-center mb-5" aria-label="dhgsoft home">
              <Logo className="h-8 w-auto" variant="white" />
            </Link>
            
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mb-6 font-normal">
              dhgsoft engineers intelligent industries — transforming industrial operations through engineering, automation, data, AI and digital technologies.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 text-slate-300">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E86A1C] hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E86A1C] hover:text-white transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E86A1C] hover:text-white transition-colors" aria-label="GitHub">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E86A1C] mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link to="/services" className="hover:text-white transition-colors">Industrial Digital Transformation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">OT / IT Integration</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Industrial Data Platforms</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">AI & Analytics</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Managed Services</Link></li>
            </ul>
          </div>

          {/* Column 3: Solutions (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E86A1C] mb-5">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link to="/solutions" className="hover:text-white transition-colors">AI-Powered Operations</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Industrial Data Platform</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Predictive Maintenance</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Yield Optimization</Link></li>
              <li><Link to="/technology" className="hover:text-white transition-colors">Technology</Link></li>
            </ul>
          </div>

          {/* Column 4: Case Studies (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E86A1C] mb-5">
              Case Studies
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link to="/resources" className="hover:text-white transition-colors">Transformation Stories</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Methodology</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><a href="#login" className="hover:text-white transition-colors">Client Portal</a></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E86A1C] mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E86A1C] shrink-0" />
                <a href="mailto:contact@dhgsoft.com" className="hover:text-white transition-colors">contact@dhgsoft.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E86A1C] shrink-0" />
                <a href="tel:+1000000000" className="hover:text-white transition-colors">+1 (800) 450-DHG</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E86A1C] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-slate-400">London • Zurich • New York</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-mono">
          <div>Copyright © 2026 dhgsoft. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security Architecture</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
