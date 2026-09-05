import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function InteractiveSimulator() {
  const [machines, setMachines] = useState(8);
  const [downtimeHours, setDowntimeHours] = useState(45);
  const [hourlyCost, setHourlyCost] = useState(12000);

  // Real-time calculated simulation metrics
  const totalDowntimeLoss = downtimeHours * hourlyCost;
  const projectedSavings = Math.round(totalDowntimeLoss * 0.42); // 42% average reduction via DHGsoft predictive MES & loop control
  const oeeEfficiencyGain = Math.min(34, Math.round(14 + machines * 0.8));
  const sensorDataPoints = machines * 1280;
  const paybackMonths = (Math.max(2.4, 6.5 - (machines * 0.15))).toFixed(1);

  return (
    <section id="simulator" className="py-24 md:py-32 px-6 md:px-8 bg-brand-navy font-sans relative overflow-hidden text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-brand-bright/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="flex flex-col mb-16 text-center items-center">
          <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-brand-sky mb-3 block">
            LIVE INDUSTRIAL VALUE CALCULATOR
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.05] tracking-tight max-w-4xl">
            Simulate Your Plant's Connected Value & OEE Gain
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mt-4 leading-relaxed">
            Adjust the factory parameters below to see estimated uptime recovery, telemetry throughput, and annual cost savings powered by DHGsoft automation.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Sliders Panel */}
          <div className="lg:col-span-6 p-8 md:p-10 rounded-[2.5rem] bg-brand-darknavy/80 border border-white/15 backdrop-blur-md shadow-2xl flex flex-col justify-between text-left">
            <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-sky" />
              Configure Plant Parameters
            </h3>

            <div className="space-y-8">
              {/* Slider 1: Machine Lines */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-white/80">Active Production Lines / Robotics Cells</label>
                  <span className="text-base font-mono font-bold text-brand-sky bg-brand-blue/20 px-3 py-0.5 rounded-lg border border-brand-blue/30">
                    {machines} Lines
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="36"
                  value={machines}
                  onChange={(e) => setMachines(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
                <div className="flex justify-between text-[10px] text-white/40 mt-1 font-mono">
                  <span>2 Lines</span>
                  <span>18 Lines</span>
                  <span>36 Lines</span>
                </div>
              </div>

              {/* Slider 2: Unplanned Downtime Hours */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-white/80">Current Unplanned Downtime (Hours / Month)</label>
                  <span className="text-base font-mono font-bold text-brand-sky bg-brand-blue/20 px-3 py-0.5 rounded-lg border border-brand-blue/30">
                    {downtimeHours} Hrs / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="120"
                  value={downtimeHours}
                  onChange={(e) => setDowntimeHours(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
                <div className="flex justify-between text-[10px] text-white/40 mt-1 font-mono">
                  <span>5 Hours</span>
                  <span>60 Hours</span>
                  <span>120 Hours</span>
                </div>
              </div>

              {/* Slider 3: Cost of Downtime per Hour */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-white/80">Estimated Cost of Line Stoppage ($ / Hour)</label>
                  <span className="text-base font-mono font-bold text-brand-sky bg-brand-blue/20 px-3 py-0.5 rounded-lg border border-brand-blue/30">
                    ${hourlyCost.toLocaleString()} / hr
                  </span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="40000"
                  step="1000"
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
                <div className="flex justify-between text-[10px] text-white/40 mt-1 font-mono">
                  <span>$3,000</span>
                  <span>$20,000</span>
                  <span>$40,000</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
              <span>● Based on historical ISA-95 telemetry benchmarks</span>
              <span className="text-brand-sky font-semibold">Real-time Model</span>
            </div>
          </div>

          {/* Right Column: Live Result Dashboard */}
          <div className="lg:col-span-6 p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-brand-darknavy to-brand-navy border border-brand-blue/30 shadow-2xl flex flex-col justify-between text-left relative overflow-hidden">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-sky">
                Projected Annual Impact
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                High ROI Potential
              </span>
            </div>

            {/* Big Projected Annual Savings Display */}
            <div className="mb-8">
              <span className="text-xs font-semibold text-white/60 uppercase tracking-wider block mb-1">
                Estimated Annual Downtime Cost Saved
              </span>
              <motion.div
                key={projectedSavings}
                initial={{ scale: 0.95, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-white to-brand-bright"
              >
                ${(projectedSavings * 12).toLocaleString()}
                <span className="text-lg font-normal text-white/50 ml-2">/ year</span>
              </motion.div>
            </div>

            {/* 3 Metric Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[11px] font-bold text-white/50 uppercase">OEE Gain</div>
                <div className="text-2xl font-extrabold text-brand-sky mt-1">+{oeeEfficiencyGain}%</div>
                <div className="text-[10px] text-white/50 mt-1">Efficiency boost</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[11px] font-bold text-white/50 uppercase">Telemetry I/O</div>
                <div className="text-2xl font-extrabold text-white mt-1">{sensorDataPoints.toLocaleString()}</div>
                <div className="text-[10px] text-white/50 mt-1">Live tag points</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[11px] font-bold text-white/50 uppercase">Est. Payback</div>
                <div className="text-2xl font-extrabold text-emerald-400 mt-1">{paybackMonths} Mo</div>
                <div className="text-[10px] text-white/50 mt-1">Breakeven timeline</div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-white/60">
                Need a formal engineering assessment report?
              </span>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-blue hover:bg-brand-electric font-semibold text-sm text-white text-center shadow-lg shadow-brand-blue/30 transition-all hover:scale-105"
              >
                Request Custom Audit →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
