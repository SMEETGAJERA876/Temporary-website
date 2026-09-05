import React from 'react';

const partners = [
  { name: 'Beckhoff', tech: 'TwinCAT 3 / EtherCAT' },
  { name: 'Siemens', tech: 'TIA Portal / S7-1500' },
  { name: 'Rockwell Automation', tech: 'ControlLogix / Studio 5000' },
  { name: 'Inductive Automation', tech: 'Ignition SCADA' },
  { name: 'ABB Robotics', tech: 'RobotStudio & IRC5' },
  { name: 'Fanuc', tech: 'iRVision & CNC Controls' },
  { name: 'KUKA Robotics', tech: 'KSS Motion Control' },
  { name: 'Schneider Electric', tech: 'EcoStruxure Automation' },
  { name: 'Microsoft Azure', tech: 'Azure IoT Hub & Edge' },
  { name: 'AWS IoT', tech: 'SiteWise & Greengrass' }
];

export default function PartnerTicker() {
  return (
    <section className="w-full bg-[#000E2E] border-b border-white/10 py-16 overflow-hidden relative font-sans select-none">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-brand-orange mb-2 block">
            ECOSYSTEM INTEGRATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
            Built on trusted technology.
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-white/50 border border-white/10 px-3.5 py-1.5 rounded-full bg-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
          <span>Multi-Vendor Certified Engineering</span>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full flex overflow-x-hidden pt-4">
        
        {/* Left & Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#000E2E] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#000E2E] to-transparent z-10 pointer-events-none" />

        {/* Track 1 */}
        <div className="flex shrink-0 items-center gap-8 py-2 animate-marquee">
          {partners.map((p, idx) => (
            <div
              key={`p1-${idx}`}
              className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-[#00143D] border border-white/10 text-white/70 hover:text-white hover:border-brand-orange/60 hover:bg-[#032063] transition-all duration-300 shadow-lg cursor-default group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-brand-orange transition-colors" />
              <span className="font-display font-bold text-sm tracking-wide text-white/80 group-hover:text-white">
                {p.name}
              </span>
              <span className="text-xs font-mono text-white/40 group-hover:text-white/60">
                / {p.tech}
              </span>
            </div>
          ))}
        </div>

        {/* Track 2 (Seamless loop) */}
        <div className="flex shrink-0 items-center gap-8 py-2 animate-marquee" aria-hidden="true">
          {partners.map((p, idx) => (
            <div
              key={`p2-${idx}`}
              className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-[#00143D] border border-white/10 text-white/70 hover:text-white hover:border-brand-orange/60 hover:bg-[#032063] transition-all duration-300 shadow-lg cursor-default group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-brand-orange transition-colors" />
              <span className="font-display font-bold text-sm tracking-wide text-white/80 group-hover:text-white">
                {p.name}
              </span>
              <span className="text-xs font-mono text-white/40 group-hover:text-white/60">
                / {p.tech}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
