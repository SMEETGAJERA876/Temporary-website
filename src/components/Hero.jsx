import React from 'react';
import Parallax from './Parallax';
import { Link } from '../router';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 lg:pt-40 pb-20 md:pb-28 px-6 md:px-8 bg-white font-sans overflow-hidden">
      {/* Background Subtle Corporate Grid */}
      <div className="absolute inset-0 bg-corporate-grid opacity-60 pointer-events-none" />
      
      {/* Background Abstract Geometric Shapes */}
      <div className="drift absolute top-20 right-10 w-[550px] h-[550px] bg-[#EEF2FF] rounded-full blur-[90px] pointer-events-none -z-0" />
      <div className="drift-alt absolute -bottom-10 left-1/3 w-[400px] h-[400px] bg-[#EEF2FF]/70 rounded-full blur-[80px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Eyebrow, Heading, Paragraph & CTAs */}
          <div className="lg:col-span-7 text-left">
            
            {/* Small Eyebrow Label */}
            <div
              style={{ '--d': '0.05s' }}
              className="fade-up-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[6px] bg-[#EEF2FF] border border-[#0111A2]/15 text-xs font-mono font-bold tracking-[0.18em] text-[#0111A2] uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E86A1C]" />
              <span>SMARTER BUSINESS SOLUTIONS</span>
            </div>

            {/* Large H1 Headline in PRIMARY BLUE */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-display font-extrabold text-[#0111A2] leading-[1.06] tracking-tight mb-6">
              <span className="mask-line"><span style={{ '--d': '0.15s' }}>Transforming Ideas Into</span></span>
              <span className="mask-line"><span style={{ '--d': '0.28s' }}>Meaningful Results.</span></span>
            </h1>

            {/* Supporting Paragraph */}
            <p
              style={{ '--d': '0.42s' }}
              className="fade-up-in text-base sm:text-lg md:text-xl text-[#5B6475] leading-relaxed max-w-xl mb-10 font-normal"
            >
              We help organizations simplify complex challenges, improve processes, and create scalable digital experiences that deliver measurable impact.
            </p>

            {/* CTA Buttons */}
            <div
              style={{ '--d': '0.52s' }}
              className="fade-up-in flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
            >
              {/* PRIMARY CTA */}
              <Link
                to="/contact"
                className="sheen px-8 py-4 rounded-[8px] bg-[#E86A1C] hover:bg-[#d55e15] text-white font-semibold text-[15px] shadow-sm hover:shadow-md transition-all duration-200 text-center flex items-center justify-center gap-2 group"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* SECONDARY CTA */}
              <Link
                to="/solutions"
                className="px-8 py-4 rounded-[8px] bg-white hover:bg-[#EEF2FF]/60 border-2 border-[#0111A2] text-[#0111A2] font-semibold text-[15px] transition-all duration-200 text-center"
              >
                Explore Solutions
              </Link>
            </div>

            {/* Key Value Points */}
            <div
              style={{ '--d': '0.62s' }}
              className="fade-up-in flex flex-wrap items-center gap-6 pt-6 border-t border-[#E2E6EF] text-sm text-[#5B6475] font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#0111A2]" />
                <span>Enterprise Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#0111A2]" />
                <span>Human-Centered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#0111A2]" />
                <span>Measurable ROI</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Artistic Geometric Composition + Human Image */}
          <div
            style={{ '--d': '0.3s' }}
            className="fade-up-in lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Background Geometric Layer 1: Abstract Oversized Blue Block */}
            <div className="absolute -top-6 -right-6 w-72 h-72 rounded-[24px] bg-[#0111A2]/10 -rotate-6 pointer-events-none" />
            
            {/* Background Geometric Layer 2: Translucent Soft Blue Card */}
            <div className="absolute -bottom-6 -left-6 w-64 h-64 rounded-[24px] bg-[#EEF2FF] border border-[#0111A2]/15 rotate-3 pointer-events-none" />

            {/* Main Human/Business Image Container */}
            <div className="relative z-10 w-full max-w-md rounded-[16px] overflow-hidden border border-[#E2E6EF] shadow-xl bg-white">
              <Parallax amount={34}>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
                  alt="Executive Technology Consultant at dhgsoft"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top scale-110"
                  loading="eager"
                />
              </Parallax>

              {/* Subtle Floating Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-[10px] bg-white/95 backdrop-blur-md border border-[#E2E6EF] shadow-lg flex items-center justify-between text-left">
                <div>
                  <div className="text-xs font-mono font-bold text-[#0111A2] uppercase tracking-wider">Client Impact</div>
                  <div className="text-base font-display font-extrabold text-[#111827]">98% Success Benchmark</div>
                </div>
                <span className="w-3 h-3 rounded-full bg-[#E86A1C] animate-pulse" />
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Thin BLUE Decorative Strip at bottom of Hero */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#0111A2] to-transparent" />
    </section>
  );
}
