import ScrollText from './ScrollText';
import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from '../router';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-28 md:py-36 px-6 md:px-8 bg-[#0111A2] font-sans text-white text-center relative overflow-hidden">
      {/* Background Abstract Geometric Shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#1638C8] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-48 h-48 rounded-[24px] border border-white/10 rotate-12 pointer-events-none hidden md:block" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Small Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[6px] bg-white/10 border border-white/20 text-xs font-mono font-bold tracking-[0.2em] text-white uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E86A1C]" />
          <span>START THE CONVERSATION</span>
        </div>

        {/* Big Headline */}
        <ScrollText as="h2" from="#6E79C4" className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white leading-[1.08] tracking-tight mb-6">Let's Engineer What's Next</ScrollText>

        {/* Supporting Paragraph */}
        <p
          className="text-base sm:text-xl text-white/85 max-w-2xl mx-auto font-normal leading-relaxed mb-10"
        >
          Whether you are modernizing a plant, building an industrial data platform, deploying AI or
          transforming your operations, DHGsoft can help turn your vision into measurable results.
        </p>

        {/* Orange CTA Button */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <Link
            to="/contact"
            className="sheen w-full sm:w-auto px-10 py-4 rounded-[8px] bg-[#E86A1C] hover:bg-[#d55e15] text-white font-bold text-[15px] shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>Talk to an Expert</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="mailto:contact@dhgsoft.com"
            className="w-full sm:w-auto px-8 py-4 rounded-[8px] bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-[15px] transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-white/80" />
            <span>Start a Conversation</span>
          </a>
        </div>

        {/* Direct Email */}
        <div className="mt-10 text-xs font-mono text-white/60">
          Direct Engagement: <span className="text-white font-semibold underline">contact@dhgsoft.com</span>
        </div>

      </div>
    </section>
  );
}
