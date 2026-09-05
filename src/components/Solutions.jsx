import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = [
  'All Capabilities',
  'Automation & Controls',
  'IIoT & Cloud AI',
  'Plant Engineering & EPC',
  'Cyber & Infrastructure'
];

const solutionsData = [
  {
    num: '01',
    title: 'Industrial Automation & Process Control',
    category: 'Automation & Controls',
    description: 'Deterministic PLC, DCS, and SCADA programming, advanced loop PID tuning, safety interlocks, and turnkey machine controllers.',
    tags: ['Beckhoff TwinCAT', 'Rockwell Studio 5000', 'Siemens TIA Portal', 'SCADA HMI'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    color: '#00D2FF'
  },
  {
    num: '02',
    title: 'Industrial IoT (IIoT) & Edge Computing',
    category: 'IIoT & Cloud AI',
    description: 'Deploying smart sensor modules, configuring edge gateways, and managing high-frequency MQTT/OPC UA telemetry pipelines.',
    tags: ['OPC UA', 'MQTT Sparkplug B', 'Edge AI Inferences', 'SECS/GEM 300mm'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    color: '#0866FF'
  },
  {
    num: '03',
    title: 'Smart Manufacturing & Industry 4.0',
    category: 'IIoT & Cloud AI',
    description: 'MES integrations, overall equipment effectiveness (OEE) metrics dashboards, automated batch records, and digital execution.',
    tags: ['MES Integration', 'OEE Dashboards', 'GAMP 5 Validation', 'Digital Workflows'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    color: '#38BDF8'
  },
  {
    num: '04',
    title: 'AI & Advanced Data Analytics',
    category: 'IIoT & Cloud AI',
    description: 'Predictive maintenance analytics, machine learning classifiers, acoustic bearing diagnosis, and automated optical inspection.',
    tags: ['Predictive ML', 'Visual Optical Inspection', 'Anomaly Scoring', 'Databricks'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    color: '#00D2FF'
  },
  {
    num: '05',
    title: 'OT & IT Infrastructure Integration',
    category: 'Cyber & Infrastructure',
    description: 'Bridging shop floor equipment directly to enterprise ERP systems, databases, managed switches, and centralized dashboards.',
    tags: ['Zero-Trust DMZ', 'ERP Connectors', 'Industrial Managed Switches', 'Fiber Backbones'],
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
    color: '#0866FF'
  },
  {
    num: '06',
    title: 'Electrical Systems & Panel Builds',
    category: 'Plant Engineering & EPC',
    description: 'Fabrication of UL-certified enclosures, loop diagrams, AutoCAD Electrical layouts, and factory safety validations.',
    tags: ['UL 508A Panels', 'AutoCAD Electrical', 'Safety Relays', 'FAT/SAT Testing'],
    image: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&w=800&q=80',
    color: '#38BDF8'
  },
  {
    num: '07',
    title: 'Engineering & EPC Services',
    category: 'Plant Engineering & EPC',
    description: 'Turnkey plant layout design, validation loops, HAZOP safety evaluations, and multi-disciplinary site commissioning.',
    tags: ['Plant Layout Modeling', 'Commissioning Services', 'HAZOP Reviews', 'Multi-disciplinary EPC'],
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    color: '#00D2FF'
  },
  {
    num: '08',
    title: 'Industrial Cybersecurity',
    category: 'Cyber & Infrastructure',
    description: 'IEC 62443 compliance audits, firewall setups, intrusion detection systems, and continuous telemetry anomaly scanning.',
    tags: ['IEC 62443', 'OT Firewalls', 'Vulnerability Scans', 'Perimeter Defense'],
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
    color: '#0866FF'
  }
];

export default function Solutions() {
  const [selectedCategory, setSelectedCategory] = useState('All Capabilities');
  const [hoveredIdx, setHoveredIdx] = useState(0);

  const filteredSolutions = selectedCategory === 'All Capabilities'
    ? solutionsData
    : solutionsData.filter(s => s.category === selectedCategory);

  const activeSolution = solutionsData[hoveredIdx] || filteredSolutions[0] || solutionsData[0];

  return (
    <section id="solutions" className="py-24 md:py-32 px-6 md:px-8 bg-brand-darknavy font-sans relative overflow-hidden border-b border-white/10 text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col mb-10 text-left items-start">
          <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-brand-sky mb-3 block">
            CORE ENGINEERING CAPABILITIES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.05] tracking-tight">
            Advanced Industrial Solutions
          </h2>
          <p className="text-base sm:text-lg text-white/70 mt-4 max-w-2xl leading-relaxed">
            From deterministic machine logic to edge telemetry, cloud AI, and certified cybersecurity frameworks.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map(cat => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  const firstIdx = solutionsData.findIndex(s => cat === 'All Capabilities' || s.category === cat);
                  if (firstIdx !== -1) setHoveredIdx(firstIdx);
                }}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border ${
                  isSelected
                    ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/30 scale-105'
                    : 'bg-white/5 text-white/70 hover:text-white border-white/10 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* List Layout with sticky dynamic side preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Numbered list items */}
          <div className="lg:col-span-7 flex flex-col border-t border-white/10">
            <AnimatePresence mode="popLayout">
              {filteredSolutions.map((sol) => {
                const originalIdx = solutionsData.findIndex(s => s.num === sol.num);
                const isHovered = hoveredIdx === originalIdx;

                return (
                  <motion.div
                    key={sol.num}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="border-b border-white/10"
                  >
                    <div
                      onMouseEnter={() => setHoveredIdx(originalIdx)}
                      onClick={() => setHoveredIdx(originalIdx)}
                      className={`flex items-center justify-between py-6 md:py-7 cursor-pointer relative group transition-all duration-300 px-4 rounded-2xl ${
                        isHovered ? 'bg-brand-navy/60' : 'hover:bg-white/[0.02]'
                      }`}
                    >
                      <div className="flex items-center gap-5 md:gap-8 z-10 transition-transform duration-300 group-hover:translate-x-2 text-left">
                        <span 
                          className="text-2xl md:text-3xl font-extrabold font-mono"
                          style={{ color: isHovered ? sol.color : 'rgba(255,255,255,0.25)' }}
                        >
                          {sol.num}
                        </span>

                        <div>
                          <span className={`text-xl md:text-2xl font-bold tracking-tight block ${isHovered ? 'text-white' : 'text-white/80'}`}>
                            {sol.title}
                          </span>
                          <span className="text-xs font-semibold text-white/50 mt-1 block font-mono">
                            {sol.category}
                          </span>
                        </div>
                      </div>

                      <div className={`z-10 transition-all mr-2 ${isHovered ? 'text-brand-sky translate-x-2' : 'text-white/30 group-hover:text-white'}`}>
                        <span className="text-xl md:text-2xl font-bold">→</span>
                      </div>

                      {/* Active Left Indicator Bar */}
                      <div 
                        className={`absolute left-0 bottom-2 top-2 w-1.5 rounded-r-md transition-all duration-300 ${
                          isHovered ? 'bg-brand-sky opacity-100 shadow-md shadow-brand-sky/50' : 'opacity-0'
                        }`} 
                      />
                    </div>

                    {/* Mobile Expansion Accordion */}
                    <div className="block lg:hidden overflow-hidden transition-all duration-300">
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pb-6 pl-12 pr-4 flex flex-col gap-4 text-left"
                        >
                          <p className="text-sm text-white/70 leading-relaxed">
                            {sol.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {sol.tags.map(t => (
                              <span key={t} className="px-2.5 py-0.5 rounded-md bg-white/10 border border-white/10 text-[11px] font-bold text-white/90">
                                {t}
                              </span>
                            ))}
                          </div>
                          <div className="w-full h-48 rounded-xl overflow-hidden border border-white/10 shadow-md">
                            <img 
                              src={sol.image} 
                              alt={sol.title} 
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </motion.div>
                      )}
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Right Column: Sticky preview card (Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative w-full rounded-[2.5rem] bg-brand-navy border border-white/15 overflow-hidden shadow-2xl p-8 flex flex-col justify-between backdrop-blur-md">
              
              <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6 border border-white/10">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSolution.num}
                    src={activeSolution.image}
                    alt={activeSolution.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />
              </div>

              <div className="flex-1 flex flex-col justify-end text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSolution.num}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-brand-blue/30 text-brand-sky border border-brand-blue/40">
                        {activeSolution.category}
                      </span>
                      <span className="font-mono text-xs font-bold text-white/50">
                        Module #{activeSolution.num}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold font-display tracking-tight text-white mb-3">
                      {activeSolution.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-6">
                      {activeSolution.description}
                    </p>

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {activeSolution.tags.map(t => (
                        <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white/90">
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center text-xs font-bold text-brand-sky hover:text-white transition-colors gap-1.5"
                    >
                      <span>Request Engineering Specification</span>
                      <span>→</span>
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
