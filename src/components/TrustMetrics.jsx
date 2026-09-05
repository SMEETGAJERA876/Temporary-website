import ScrollText from './ScrollText';
import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

function AnimatedCounter({ target, suffix = '', duration = 2.0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // expo.out, as the reference site uses
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const metrics = [
  { target: 10, suffix: '+', label: 'Years Experience', desc: 'Proven enterprise technology consulting track record.' },
  { target: 150, suffix: '+', label: 'Projects Delivered', desc: 'Transforming digital architecture for global brands.' },
  { target: 40, suffix: '+', label: 'Industry Solutions', desc: 'Tailored business systems across key market sectors.' },
  { target: 98, suffix: '%', label: 'Client Satisfaction', desc: 'Long-term partnerships rooted in measurable outcomes.' }
];

export default function TrustMetrics() {
  return (
    <section className="py-20 px-6 md:px-8 bg-[#F5F7FA] border-y border-[#E2E6EF] font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Tagline */}
        <div className="text-center mb-14">
          <p className="text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-2">
            ● PROVEN PERFORMANCE
          </p>
          <ScrollText as="h2" className="text-2xl sm:text-3xl font-display font-extrabold text-[#111827]">Trusted by teams building what comes next.</ScrollText>
        </div>

        {/* 4 Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-left">
          {metrics.map((m, idx) => (
            <div
              key={m.label}
              style={{ '--d': `${idx * 0.08}s` }}
              className="reveal-up hover:-translate-y-1 p-8 rounded-[12px] bg-white border border-[#E2E6EF] shadow-sm hover:border-[#0111A2] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Large BLUE Number */}
              <div className="text-5xl lg:text-6xl font-display font-extrabold text-[#0111A2] tracking-tight mb-3">
                <AnimatedCounter target={m.target} suffix={m.suffix} />
              </div>

              <div>
                <h3 className="text-base font-bold text-[#111827] mb-1">
                  {m.label}
                </h3>
                <p className="text-xs text-[#5B6475] leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
