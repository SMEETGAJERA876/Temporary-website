import React from 'react';
import { motion } from 'motion/react';

export default function HumanCompany() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-8 bg-brand-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Human-Focused Industrial Photograph */}
        <div className="lg:col-span-6 relative h-[350px] sm:h-[450px] lg:h-[550px] w-full order-2 lg:order-1">
          
          {/* Accent block backgrounds */}
          <div className="absolute top-4 -left-4 w-32 h-32 bg-brand-blue rounded-3xl -rotate-12 -z-10 pointer-events-none" />
          <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-brand-yellow rounded-full blur-xl opacity-30 -z-10 pointer-events-none" />

          {/* Main image container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 35 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full rounded-[2.5rem] overflow-hidden border border-brand-charcoal/10 shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80"
              alt="Engineering team debugging control script alongside robot cell"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            {/* Soft gradient screen */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Right Column: Statement & Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 text-left flex flex-col items-start order-1 lg:order-2"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-blue" />
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-brand-charcoal/60 uppercase">
              Human Engineering
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-charcoal leading-[1.05] tracking-tighter mb-8">
            Technology is powerful. <br />
            <span className="text-brand-blue">People make it possible.</span>
          </h2>

          {/* Narratives */}
          <p className="text-lg text-brand-charcoal/80 mb-6 leading-relaxed">
            At AURA, we believe that elite machinery is only as effective as the human intellect guiding it. Our strength doesn't just lie in structural frames and control units, but in our team of controls designers, robot programmers, and integration engineers.
          </p>
          <p className="text-base text-brand-charcoal/60 mb-8 leading-relaxed">
            We work as an extension of your company, deploying support teams who remain on-site to handle calibration, logical safety drills, and operator training long after initial system commissioning.
          </p>

          {/* Text link CTA */}
          <a
            href="#about"
            onClick={(e) => e.preventDefault()} // static mockup click override
            className="group inline-flex items-center gap-2 font-bold text-brand-charcoal hover:text-brand-blue transition-colors duration-300 text-sm md:text-base border-b border-brand-charcoal hover:border-brand-blue pb-1"
          >
            <span>Meet our team</span>
            <motion.span 
              className="inline-block"
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
