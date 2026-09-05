import React from 'react';

const items = [
  'Consulting & Transformation', 'Industrial Engineering', 'Automation & Integration',
  'Data & Artificial Intelligence', 'Digital & Cloud', 'Managed Services',
  'Industrial AI', 'OT/IT Integration'
];

/**
 * Always-in-motion capability strip. The track holds the list twice and
 * translates exactly -50%, so the loop is seamless. Pauses on hover.
 */
export default function CapabilityStrip() {
  return (
    <section
      className="marquee relative overflow-hidden border-y border-[#E2E6EF] bg-white py-5"
      aria-label="Capabilities"
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {items.map((label) => (
              <span key={label} className="flex items-center gap-6 px-6">
                <span className="text-sm sm:text-base font-display font-bold uppercase tracking-[0.14em] text-[#0111A2]/80 whitespace-nowrap">
                  {label}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E86A1C] shrink-0" />
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Fade the strip into the page edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
    </section>
  );
}
