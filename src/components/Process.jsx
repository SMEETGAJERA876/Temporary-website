import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const steps = [
  {
    num: '01',
    phase: 'Discovery & Audit',
    title: 'Operational Baseline & ISA-95 Mapping',
    badge: 'Phase 1: Architecture Audit',
    description: 'We audit your physical machine lines, I/O distribution, fieldbus protocols, and network boundaries to architect an ISA-95 compliant digital blueprint.',
    deliverables: ['Fieldbus & I/O Topology Map', 'Cyber Threat & DMZ Assessment', 'Hardware Bill of Materials (BOM)', 'ROI & Velocity Forecast'],
    compliance: 'ISA-95 Level 0-4 Framework'
  },
  {
    num: '02',
    phase: 'Schematic Design',
    title: 'Electrical CAD & Control Schematics',
    badge: 'Phase 2: Detailed Engineering',
    description: 'Our electrical engineers model custom UL 508A control enclosures, power distributions, loop drawings, and safety interlock circuits in AutoCAD Electrical.',
    deliverables: ['AutoCAD Electrical Schematics', 'Loop Diagram Documentation', 'Panel Layout 3D Twin', 'Safety Relay Interlock Maps'],
    compliance: 'UL 508A / NFPA 79 Standard'
  },
  {
    num: '03',
    phase: 'Software & Kinematics',
    title: 'Deterministic PLC & SCADA Development',
    badge: 'Phase 3: Control Programming',
    description: 'Custom programming for Beckhoff TwinCAT, Rockwell Studio 5000, and Siemens TIA Portal with modular IEC 61131-3 logic routines and responsive SCADA screens.',
    deliverables: ['Modular PLC Logic Libraries', 'SCADA & HMI Vector Screens', 'Robotics Kinematics Scripts', 'SECS/GEM Integration Handlers'],
    compliance: 'IEC 61131-3 Standard'
  },
  {
    num: '04',
    phase: 'Virtual Commissioning',
    title: 'Digital Twin Hardware-in-the-Loop (HIL)',
    badge: 'Phase 4: Risk Mitigation',
    description: 'Testing every line of code against a 3D digital physics model before physical delivery to guarantee zero mechanical clashes and optimized cycle times.',
    deliverables: ['Hardware-in-the-Loop (HIL) Test', 'Cycle Time Optimization Log', 'Virtual FAT Clearance', 'Operator Ergonomics Run'],
    compliance: 'ISO 9001 / GAMP 5 Standard'
  },
  {
    num: '05',
    phase: 'Site Commissioning',
    title: 'Physical Integration & SAT Signoff',
    badge: 'Phase 5: Field Deployment',
    description: 'Our field engineers deploy on-site to verify sensor loops, terminate fieldbus cables, tune servo PID controllers, and execute formal Site Acceptance Testing.',
    deliverables: ['On-Site SAT Validation', 'Loop Tuning Sign-Off', 'OT Firewall Configuration', 'Live Machine Handover'],
    compliance: 'IEC 62443 OT Security'
  },
  {
    num: '06',
    phase: 'Operator Training',
    title: 'Knowledge Transfer & Safety Drills',
    badge: 'Phase 6: Workforce Enablement',
    description: 'Comprehensive operator training, interactive maintenance standard operating procedures (SOPs), and safety interlock demonstration runs.',
    deliverables: ['Interactive SOP Documentation', 'Operator Maintenance Manuals', 'Emergency E-Stop Protocols', 'Training Certification'],
    compliance: 'OSHA / ISO 13849 Safety'
  },
  {
    num: '07',
    phase: '24/7 Intelligence',
    title: 'Continuous Telemetry & Anomaly Radar',
    badge: 'Phase 7: Long-Term Scaling',
    description: 'Continuous cloud/edge telemetry streaming, predictive component wear alerts, automated compliance logging, and 24/7 engineering support SLA.',
    deliverables: ['24/7 SLA Telemetry Monitoring', 'Predictive Maintenance Alerts', 'Continuous OEE Optimization', 'Quarterly Firmware Upgrades'],
    compliance: '24×7 Active SLA Guarantee'
  }
];

export default function Process() {
  const [selectedStep, setSelectedStep] = useState(0);
  const active = steps[selectedStep];

  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-8 bg-brand-bg font-sans overflow-hidden border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-left items-start">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-brand-blue mb-3 block">
            PROVEN INDUSTRIAL METHODOLOGY
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-brand-text leading-[1.05] tracking-tight">
            From Blueprint to 24/7 Autonomous Intelligence
          </h2>
          <p className="text-base md:text-lg text-brand-gray mt-4 max-w-2xl leading-relaxed">
            A disciplined 7-stage industrial delivery lifecycle engineered to minimize downtime, accelerate commissioning, and assure total compliance.
          </p>
        </div>

        {/* Interactive Steps Grid Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {steps.map((step, idx) => {
            const isSelected = selectedStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setSelectedStep(idx)}
                className={`relative p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/20 translate-y-[-2px]'
                    : 'bg-white text-brand-navy border-brand-border hover:border-brand-blue/40 hover:bg-brand-offwhite'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-white' : 'text-brand-blue'}`}>
                    {step.num}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white' : 'bg-brand-gray/30'}`} />
                </div>
                <div className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${isSelected ? 'text-white/80' : 'text-brand-gray'}`}>
                  {step.phase}
                </div>
                <div className={`text-xs font-extrabold leading-snug line-clamp-2 ${isSelected ? 'text-white' : 'text-brand-navy'}`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Step Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.num}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-brand-border shadow-xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left: Summary & Deliverables */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3.5 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-extrabold border border-brand-blue/20">
                  {active.badge}
                </span>
                <span className="px-3 py-1 rounded-full bg-brand-offwhite text-brand-navy text-xs font-bold border border-brand-border">
                  Compliance: {active.compliance}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-brand-navy mb-3">
                {active.num}. {active.title}
              </h3>
              <p className="text-base text-brand-gray leading-relaxed mb-8 max-w-2xl">
                {active.description}
              </p>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block mb-3">
                  Stage Deliverables & Verification Artefacts:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {active.deliverables.map(d => (
                    <div key={d} className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-brand-offwhite border border-brand-border text-xs font-semibold text-brand-navy">
                      <span className="w-4 h-4 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-[10px]">
                        ✓
                      </span>
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Quick Action & Callout */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-brand-darknavy text-white text-left flex flex-col justify-between h-full border border-white/10 shadow-lg">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-sky block mb-2">
                  Delivery Guarantee
                </span>
                <div className="text-lg font-bold font-display text-white mb-2">
                  Zero-Defect FAT/SAT Deployment
                </div>
                <p className="text-xs text-white/70 leading-relaxed mb-6">
                  Every stage is verified with automated test suites and compliance logs before physical site commissioning.
                </p>
              </div>

              <a
                href="#contact"
                className="w-full px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-electric text-white text-xs font-bold text-center transition-all shadow-md shadow-brand-blue/30 inline-block"
              >
                Discuss Phase {active.num} Scope →
              </a>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
