/**
 * ============================================
 * CASE STUDIES PAGE - Success Stories
 * ============================================
 * SMALL Typography matching Home.tsx
 * ============================================
 */

import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { 
  ArrowRight, 
  Award, 
  TrendingUp,
  Users,
  BarChart3,
  Target,
  Rocket,
  Building2,
  MonitorSmartphone,
  Hospital,
  CheckCircle2
} from 'lucide-react';

// Primitive Components
import { Section, Container, SectionHeader, GlassCard, IconBadge } from '../components/primitives';

// Layout Components
import { PageBackground } from '../components/layout';

// SEO Components
import { PageSEO } from '../components/seo';
import { PAGE_SEO } from '../utils/seo-config';

// UI Components
import { ScrollReveal, StaggerContainer, staggerItemVariants } from '../components/ScrollReveal';
import { MagneticButton } from '../components/MagneticButton';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ModernSectionBackground } from '../components/ModernSectionBackground';

// Design Tokens
import { colors, gradients } from '../../styles/design-tokens';

// ============================================
// DATA DEFINITIONS
// ============================================

const caseStudies = [
  {
    id: 'cs-1',
    industry: 'B2B Technology',
    industryIcon: <MonitorSmartphone className="w-5 h-5" />,
    title: 'SaaS Platform Launch & Market Penetration',
    challenge: 'New B2B SaaS platform needed to establish market presence and generate qualified leads in a competitive enterprise software market.',
    solution: 'Developed comprehensive go-to-market strategy including brand positioning, content marketing, demand generation campaigns, and strategic PR to establish thought leadership.',
    results: [
      { metric: '340%', label: 'Increase in qualified leads' },
      { metric: '92%', label: 'Target audience reach' },
      { metric: '5.2x', label: 'ROI on marketing spend' },
    ],
    highlights: [
      'Strategic market positioning',
      'Integrated demand generation',
      'Thought leadership program',
      'Performance tracking & optimization',
    ],
  },
  {
    id: 'cs-2',
    industry: 'Professional Services',
    industryIcon: <Building2 className="w-5 h-5" />,
    title: 'Brand Repositioning for Growth',
    challenge: 'Established consulting firm needed brand refresh and new client acquisition strategy to support geographic expansion and service line growth.',
    solution: 'Complete brand repositioning, new visual identity, website redesign, and integrated marketing campaigns targeting high-value client segments.',
    results: [
      { metric: '215%', label: 'Growth in new client inquiries' },
      { metric: '78%', label: 'Brand awareness increase' },
      { metric: '4.8x', label: 'Pipeline value growth' },
    ],
    highlights: [
      'Brand strategy & repositioning',
      'Visual identity redesign',
      'Client acquisition campaigns',
      'Website & digital optimization',
    ],
  },
  {
    id: 'cs-3',
    industry: 'Healthcare',
    industryIcon: <Hospital className="w-5 h-5" />,
    title: 'Patient Acquisition & Engagement',
    challenge: 'Healthcare provider group needed to increase patient volume and improve engagement while maintaining compliance with healthcare marketing regulations.',
    solution: 'Developed compliant digital marketing strategy including SEO, local search optimization, patient education content, and reputation management.',
    results: [
      { metric: '186%', label: 'Increase in new patients' },
      { metric: '4.9', label: 'Average review rating' },
      { metric: '67%', label: 'Patient retention improvement' },
    ],
    highlights: [
      'Compliance-first marketing',
      'Local search optimization',
      'Patient education content',
      'Reputation management',
    ],
  },
  {
    id: 'cs-4',
    industry: 'Manufacturing',
    industryIcon: <Target className="w-5 h-5" />,
    title: 'Digital Transformation & Lead Generation',
    challenge: 'Industrial manufacturer needed to modernize marketing approach and generate qualified B2B leads in a traditionally offline industry.',
    solution: 'Digital transformation strategy including website modernization, content marketing, LinkedIn advertising, and sales enablement tools.',
    results: [
      { metric: '298%', label: 'Increase in qualified leads' },
      { metric: '85%', label: 'Distributor engagement growth' },
      { metric: '6.1x', label: 'Digital marketing ROI' },
    ],
    highlights: [
      'Digital transformation roadmap',
      'B2B content marketing',
      'LinkedIn lead generation',
      'Sales enablement integration',
    ],
  },
];

const allIndustries = ['All Industries', 'B2B Technology', 'Professional Services', 'Healthcare', 'Manufacturing'];

export function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');

  const filteredCaseStudies = selectedIndustry === 'All Industries'
    ? caseStudies
    : caseStudies.filter(cs => cs.industry === selectedIndustry);

  return (
    <PageBackground>
      <PageSEO
        title={PAGE_SEO.caseStudies.title}
        description={PAGE_SEO.caseStudies.description}
        keywords={PAGE_SEO.caseStudies.keywords}
        ogImage={PAGE_SEO.caseStudies.ogImage}
        path="/case-studies"
      />
      {/* ============================================
          1. HERO SECTION - COMPACT
          ============================================ */}
      <ModernSectionBackground variant="mesh-gradient-blue">
        <Section spacing="base" animate background="transparent">
          <Container size="lg">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4"
              >
                <span 
                  className="inline-flex items-center px-3 py-1.5 rounded-full border-2 shadow-lg"
                  style={{ backgroundColor: '#ffffff', borderColor: colors.brand.accent }}
                >
                  <Award className="w-3.5 h-3.5 mr-2" style={{ color: colors.brand.accent }} />
                  <span className="text-xs font-bold tracking-wide" style={{ color: colors.brand.primary }}>
                    SUCCESS STORIES
                  </span>
                </span>
              </motion.div>

              <motion.h1 
                className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-[1.1] tracking-tight mb-4"
                style={{ color: colors.brand.primary }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Proven Results Across Industries
              </motion.h1>

              <motion.p 
                className="text-sm text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Real clients. Real challenges. Real results. See how strategic marketing drives measurable business growth.
              </motion.p>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          2. INDUSTRY FILTER - COMPACT
          ============================================ */}
      <ModernSectionBackground variant="glass-white">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {allIndustries.map((industry) => (
                <motion.button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className="px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border-2"
                  style={{
                    backgroundColor: selectedIndustry === industry ? colors.brand.primary : 'white',
                    color: selectedIndustry === industry ? 'white' : colors.brand.primary,
                    borderColor: selectedIndustry === industry ? colors.brand.primary : colors.border.default,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {industry}
                </motion.button>
              ))}
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          3. CASE STUDIES GRID - COMPACT
          ============================================ */}
      <ModernSectionBackground variant="gradient-abstract">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndustry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-8"
              >
                {filteredCaseStudies.map((study, index) => (
                  <ScrollReveal key={study.id}>
                    <GlassCard variant="base" rounded="xl" padding="base" hover className="shadow-xl border border-gray-200/60">
                      <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left - Info & Challenge */}
                        <div className="lg:col-span-2 space-y-6">
                          {/* Header */}
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <IconBadge 
                                icon={study.industryIcon} 
                                size="sm" 
                                variant="gradient" 
                                animated 
                              />
                              <span className="text-sm font-bold" style={{ color: colors.brand.secondary }}>
                                {study.industry}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold leading-tight mb-3" style={{ color: colors.brand.primary }}>
                              {study.title}
                            </h3>
                          </div>

                          {/* Challenge */}
                          <div>
                            <h4 className="text-sm font-bold mb-2 flex items-center gap-2" style={{ color: colors.brand.primary }}>
                              <Target className="w-4 h-4" />
                              Challenge
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {study.challenge}
                            </p>
                          </div>

                          {/* Solution */}
                          <div>
                            <h4 className="text-sm font-bold mb-2 flex items-center gap-2" style={{ color: colors.brand.primary }}>
                              <Rocket className="w-4 h-4" />
                              Solution
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {study.solution}
                            </p>
                          </div>

                          {/* Highlights */}
                          <div>
                            <h4 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: colors.brand.primary }}>
                              <CheckCircle2 className="w-4 h-4" />
                              Key Highlights
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-2">
                              {study.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.brand.secondary }} />
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right - Results */}
                        <div className="lg:col-span-1">
                          <div 
                            className="p-6 rounded-xl h-full text-white"
                            style={{ background: gradients.primary }}
                          >
                            <div className="flex items-center gap-2 mb-6">
                              <TrendingUp className="w-5 h-5" />
                              <h4 className="text-sm font-bold">Results Achieved</h4>
                            </div>
                            <div className="space-y-5">
                              {study.results.map((result, idx) => (
                                <div key={idx} className="text-center py-3 px-4 bg-white/10 rounded-lg backdrop-blur-sm">
                                  <div className="text-2xl font-bold mb-1">
                                    {result.metric}
                                  </div>
                                  <div className="text-xs text-gray-200">
                                    {result.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </ScrollReveal>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-16">
                <p className="text-base text-gray-600">No case studies found for this industry.</p>
              </div>
            )}
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          4. SUCCESS METRICS - COMPACT
          ============================================ */}
      <ModernSectionBackground variant="animated-dots">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader
              badge="Proven Impact"
              badgeIcon={<BarChart3 className="w-4 h-4" />}
              title="Aggregate Results"
              description="Combined performance metrics across all client engagements."
              align="center"
              maxWidth="md"
            />

            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <GlassCard variant="base" rounded="lg" padding="sm" className="text-center shadow-xl border border-gray-200/60">
                <IconBadge icon={<TrendingUp className="w-6 h-6" />} size="md" variant="gradient" animated className="mx-auto mb-4" />
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <AnimatedCounter end={258} duration={2.5} className="text-3xl font-bold" style={{ color: colors.brand.primary }} />
                  <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>%</span>
                </div>
                <p className="text-xs text-gray-600 font-semibold">Avg. Lead Growth</p>
              </GlassCard>

              <GlassCard variant="base" rounded="lg" padding="sm" className="text-center shadow-xl border border-gray-200/60">
                <IconBadge icon={<Award className="w-6 h-6" />} size="md" variant="gradient" animated className="mx-auto mb-4" />
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <AnimatedCounter end={5} decimals={1} duration={2.5} className="text-3xl font-bold" style={{ color: colors.brand.primary }} />
                  <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>x</span>
                </div>
                <p className="text-xs text-gray-600 font-semibold">Avg. Marketing ROI</p>
              </GlassCard>

              <GlassCard variant="base" rounded="lg" padding="sm" className="text-center shadow-xl border border-gray-200/60">
                <IconBadge icon={<Users className="w-6 h-6" />} size="md" variant="gradient" animated className="mx-auto mb-4" />
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <AnimatedCounter end={80} duration={2.5} className="text-3xl font-bold" style={{ color: colors.brand.primary }} />
                  <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>%</span>
                </div>
                <p className="text-xs text-gray-600 font-semibold">Brand Awareness</p>
              </GlassCard>

              <GlassCard variant="base" rounded="lg" padding="sm" className="text-center shadow-xl border border-gray-200/60">
                <IconBadge icon={<BarChart3 className="w-6 h-6" />} size="md" variant="gradient" animated className="mx-auto mb-4" />
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <AnimatedCounter end={92} duration={2.5} className="text-3xl font-bold" style={{ color: colors.brand.primary }} />
                  <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>%</span>
                </div>
                <p className="text-xs text-gray-600 font-semibold">Client Satisfaction</p>
              </GlassCard>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          5. CTA SECTION - COMPACT
          ============================================ */}
      <ModernSectionBackground variant="image-overlay-team">
        <section className="relative px-4 sm:px-6 lg:px-8 py-10 overflow-hidden bg-transparent">
          <Container size="md">
            <div className="text-center">
              <ScrollReveal>
                <GlassCard variant="base" rounded="2xl" padding="base" className="shadow-xl border border-gray-200/60">
                  <IconBadge 
                    icon={<Rocket className="w-6 h-6" />}
                    size="md"
                    variant="gradient"
                    animated
                    className="mx-auto mb-4"
                  />

                  <h2 className="text-xl sm:text-2xl font-bold mb-3 leading-tight" style={{ color: colors.brand.primary }}>
                    Ready for Similar Results?
                  </h2>

                  <p className="text-sm text-gray-700 mb-5 max-w-2xl mx-auto leading-relaxed">
                    Let's discuss how strategic marketing can drive measurable growth for your organization.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <MagneticButton strength={0.3}>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold text-sm shadow-2xl hover:shadow-3xl transition-all duration-300 group border-2 border-transparent"
                        style={{ background: gradients.primary }}
                      >
                        Start Your Project
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </MagneticButton>

                    <MagneticButton strength={0.2}>
                      <Link
                        to="/services"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all duration-300 hover:shadow-lg bg-transparent"
                        style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
                      >
                        View Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </MagneticButton>
                  </div>
                </GlassCard>
              </ScrollReveal>
            </div>
          </Container>
        </section>
      </ModernSectionBackground>
    </PageBackground>
  );
}

export default CaseStudiesPage;