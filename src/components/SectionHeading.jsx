import React from 'react';
import { motion } from 'motion/react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left', // 'left' | 'center'
  accent = 'coral', // 'coral' | 'yellow' | 'green' | 'blue' | 'purple'
  className = '',
}) {
  const textAlignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const descMaxW = align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl';

  return (
    <div className={`flex flex-col mb-12 md:mb-16 ${textAlignment} ${className}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-brand-charcoal/60 mb-3 flex items-center gap-2"
        >
          <span className={`w-2 h-2 rounded-full bg-brand-${accent}`} />
          {eyebrow}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-charcoal leading-[1.1] mb-6 max-w-4xl"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`text-base md:text-lg text-brand-charcoal/70 leading-relaxed font-normal ${descMaxW}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
