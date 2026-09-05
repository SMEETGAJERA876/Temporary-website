import ScrollText from './ScrollText';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const stories = [
  {
    category: 'AI-DRIVEN YIELD IMPROVEMENT',
    client: 'Global Chemicals Manufacturer',
    headline: 'Turning process data into a measurable yield gain.',
    challenge: 'Yield varied significantly between shifts and lines, and no one could pinpoint why in real time.',
    approach: 'Instrumented the process, unified historian and lab data, and modeled the drivers of variation.',
    solution: 'An AI model that flags yield-limiting conditions early enough for operators to act on them.',
    technology: 'AVEVA PI, OPC UA, Python/ML, cloud data platform',
    outcome: 'A sustained, measurable lift in yield with no new capital equipment.',
    metrics: [
      { label: 'Yield Improvement', value: '+6.4%' },
      { label: 'Time to Insight', value: '↓ 70%' }
    ],
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'ENTERPRISE INDUSTRIAL DATA PLATFORM',
    client: 'Multi-Site Manufacturing Group',
    headline: 'One data foundation across a dozen plants.',
    challenge: 'Every site ran its own historian and reporting stack, so nothing rolled up into a single view.',
    approach: 'Standardized tag naming and contextual models, then unified ingestion across every site.',
    solution: 'A single industrial data platform feeding dashboards, analytics and AI use cases enterprise-wide.',
    technology: 'AVEVA PI, Historians, Databricks, Azure',
    outcome: 'Enterprise-wide visibility and a foundation for every future analytics initiative.',
    metrics: [
      { label: 'Sites Unified', value: '12' },
      { label: 'Reporting Effort', value: '↓ 55%' }
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'GOLDEN BATCH INTELLIGENCE',
    client: 'Life Sciences Producer',
    headline: 'Modeling the perfect batch, then chasing it every time.',
    challenge: 'Batch-to-batch quality drifted, and root cause was found only after the fact.',
    approach: 'Analyzed historical batches to define the golden batch profile and its critical parameters.',
    solution: 'Real-time comparison of every running batch against the golden profile, with early deviation alerts.',
    technology: 'AVEVA PI, MES data, statistical process control, AI/ML',
    outcome: 'Fewer rejected batches and faster root-cause resolution.',
    metrics: [
      { label: 'Batch Rejections', value: '↓ 38%' },
      { label: 'Deviation Detection', value: '↑ Early' }
    ],
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'INDUSTRIAL DATA & AI TRANSFORMATION',
    client: 'Energy & Utilities Operator',
    headline: 'From spreadsheets to a connected, predictive operation.',
    challenge: 'Maintenance and operations decisions relied on manual reports and tribal knowledge.',
    approach: 'Built a phased roadmap connecting assets, building the data layer, then layering AI on top.',
    solution: 'Connected asset telemetry, a governed data platform, and predictive models for critical equipment.',
    technology: 'OPC UA, MQTT, cloud data platform, AI/ML',
    outcome: 'A measurable shift from reactive to predictive operations.',
    metrics: [
      { label: 'Unplanned Downtime', value: '↓ 22%' },
      { label: 'Assets Connected', value: '450+' }
    ],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'AVEVA PI MODERNIZATION',
    client: 'Metals & Mining Operator',
    headline: 'Modernizing a legacy historian without losing a decade of data.',
    challenge: 'An aging, unsupported historian put decades of operational history at risk.',
    approach: 'Migrated and validated historical data while modernizing the architecture in parallel.',
    solution: 'A modernized AVEVA PI deployment with expanded connectivity and analytics-ready structure.',
    technology: 'AVEVA PI, Historians, OPC UA, cloud integration',
    outcome: 'Zero data loss, lower support risk, and a platform ready for AI.',
    metrics: [
      { label: 'Historical Data Preserved', value: '100%' },
      { label: 'System Downtime', value: 'Zero' }
    ],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80'
  }
];

export default function TransformationStories() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-8 bg-white font-sans text-left">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-3 block">
            ● TRANSFORMATION STORIES
          </span>
          <ScrollText as="h2" className="text-4xl sm:text-5xl font-display font-extrabold text-[#0111A2] tracking-tight mb-4">Real Challenges. Real Transformation.</ScrollText>
          <p className="text-base text-[#5B6475] leading-relaxed">
            How we work: challenge, approach, solution, technology and the business outcome that resulted.
          </p>
        </div>

        {/* Stories Stack */}
        <div className="space-y-10">
          {stories.map((story, idx) => (
            <div
              key={story.headline}
              style={{ '--d': `${idx * 0.05}s` }}
              className="reveal-up grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch rounded-[16px] border border-[#E2E6EF] bg-white shadow-sm hover:shadow-lg transition-all duration-300 p-6 sm:p-8 lg:p-10"
            >
              {/* Left: Narrative */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5 flex-wrap">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#E86A1C] uppercase">
                      {story.category}
                    </span>
                    <span className="text-xs text-[#5B6475]">• {story.client}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#111827] mb-5 leading-snug">
                    {story.headline}
                  </h3>

                  <div className="space-y-3 text-sm text-[#5B6475] leading-relaxed font-normal mb-6">
                    <p><strong className="text-[#111827] font-semibold">Challenge:</strong> {story.challenge}</p>
                    <p><strong className="text-[#111827] font-semibold">Approach:</strong> {story.approach}</p>
                    <p><strong className="text-[#111827] font-semibold">Solution:</strong> {story.solution}</p>
                    <p><strong className="text-[#111827] font-semibold">Technology:</strong> {story.technology}</p>
                    <p><strong className="text-[#0111A2] font-semibold">Business Outcome:</strong> {story.outcome}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#E2E6EF]">
                  {story.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#0111A2] mb-1">
                        {m.value}
                      </div>
                      <div className="text-xs text-[#5B6475]">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Visual */}
              <div className="lg:col-span-5 relative min-h-[240px] rounded-[12px] overflow-hidden border border-[#E2E6EF]">
                <img
                  src={story.image}
                  alt={story.headline}
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1.5 rounded-[6px] bg-white/95 backdrop-blur-md text-xs font-bold text-[#0111A2] shadow-sm">
                    {story.client}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-[#E86A1C] flex items-center justify-center text-white shadow-lg">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
