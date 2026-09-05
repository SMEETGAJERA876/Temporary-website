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
  { target: 150, suffix: '+', label: 'Projects Delivered' },
  { target: 10, suffix: '+', label: 'Industries Served' },
  { target: 15, suffix: '+', label: 'Countries Served' },
  { target: 100, suffix: '+', label: 'Engineering Team' }
];

export default function CompanyCredibility() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-8 bg-white font-sans text-center border-t border-[#E2E6EF]">
      <div className="max-w-4xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-3 block">
          ● COMPANY
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0111A2] tracking-tight mb-6">
          Built for What's Next
        </h2>
        <p className="text-base sm:text-lg text-[#5B6475] leading-relaxed font-normal">
          DHGsoft is an engineering, automation, data and AI company built for industrial operations.
          We bring together the technical depth and the business discipline needed to carry a
          transformation from vision through to measurable results.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-left">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="text-4xl sm:text-5xl font-display font-extrabold text-[#0111A2] tracking-tight mb-2">
              <AnimatedCounter target={m.target} suffix={m.suffix} />
            </div>
            <div className="text-sm font-semibold text-[#5B6475]">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
