/**
 * ============================================
 * CASE STUDIES PAGE - Success Stories
 * ============================================
 * Advanced UI/UX aligned with Home, About & Services
 * Preserves approved case study content and metrics
 * ============================================
 */

import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
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
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Layers,
  Sparkles,
  Search,
  Gauge,
} from 'lucide-react';

// Primitive Components
import { Section, Container, SectionHeader } from '../components/primitives';

// Layout Components
import { PageBackground } from '../components/layout';

// SEO Components
import { PageSEO } from '../components/seo';
import { PAGE_SEO } from '../utils/seo-config';

// UI Components
import {
  ScrollReveal,
  StaggerContainer,
  staggerItemVariants,
} from '../components/ScrollReveal';
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

const aggregateMetrics = [
  {
    icon: <TrendingUp className="h-5 w-5" />,
    value: 258,
    suffix: '%',
    decimals: 0,
    label: 'Avg. Lead Growth',
    note: 'Across featured growth engagements',
  },
  {
    icon: <Award className="h-5 w-5" />,
    value: 5,
    suffix: 'x',
    decimals: 1,
    label: 'Avg. Marketing ROI',
    note: 'Performance relative to marketing spend',
  },
  {
    icon: <Users className="h-5 w-5" />,
    value: 80,
    suffix: '%',
    decimals: 0,
    label: 'Brand Awareness',
    note: 'Average visibility improvement',
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    value: 92,
    suffix: '%',
    decimals: 0,
    label: 'Client Satisfaction',
    note: 'Measured across client engagements',
  },
];

export function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [activeCaseId, setActiveCaseId] = useState(caseStudies[0].id);
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);

  const filteredCaseStudies = useMemo(
    () =>
      selectedIndustry === 'All Industries'
        ? caseStudies
        : caseStudies.filter((study) => study.industry === selectedIndustry),
    [selectedIndustry]
  );

  const activeStudy =
    filteredCaseStudies.find((study) => study.id === activeCaseId) ??
    filteredCaseStudies[0] ??
    caseStudies[0];

  const heroStudy = caseStudies[heroIndex];

  const goToHero = useCallback((index: number) => {
    const normalized = (index + caseStudies.length) % caseStudies.length;
    setHeroIndex(normalized);
  }, []);

  const nextHero = useCallback(() => {
    setHeroIndex((prev) => (prev + 1) % caseStudies.length);
  }, []);

  const previousHero = useCallback(() => {
    setHeroIndex(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
  }, []);

  useEffect(() => {
    if (heroPaused) return;

    const timer = window.setInterval(nextHero, 6000);
    return () => window.clearInterval(timer);
  }, [heroPaused, nextHero]);

  useEffect(() => {
    if (
      filteredCaseStudies.length > 0 &&
      !filteredCaseStudies.some((study) => study.id === activeCaseId)
    ) {
      setActiveCaseId(filteredCaseStudies[0].id);
    }
  }, [filteredCaseStudies, activeCaseId]);

  const selectIndustry = (industry: string) => {
    setSelectedIndustry(industry);

    const firstStudy =
      industry === 'All Industries'
        ? caseStudies[0]
        : caseStudies.find((study) => study.industry === industry);

    if (firstStudy) {
      setActiveCaseId(firstStudy.id);
    }
  };

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
          1. HERO — PROOF OF GROWTH
          ============================================ */}
      <ModernSectionBackground
        variant="mesh-gradient-blue"
        className="relative overflow-hidden"
      >
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.20]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,0,170,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,170,0.05) 1px, transparent 1px)',
                backgroundSize: '54px 54px',
                maskImage:
                  'linear-gradient(to bottom, transparent, black 10%, black 88%, transparent)',
                WebkitMaskImage:
                  'linear-gradient(to bottom, transparent, black 10%, black 88%, transparent)',
              }}
            />

            <div
              className="absolute -left-52 top-8 h-[520px] w-[520px] rounded-full opacity-[0.10] blur-[145px]"
              style={{ backgroundColor: colors.brand.secondary }}
            />

            <div
              className="absolute -right-40 top-[12%] h-[430px] w-[430px] rounded-full opacity-[0.13] blur-[135px]"
              style={{ backgroundColor: colors.brand.accent }}
            />
          </div>

          <Container size="xl">
            <div className="relative z-10 grid min-h-[620px] items-center gap-10 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:py-16">
              <motion.div
                initial={{ opacity: 0, x: -34 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-2xl"
              >
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <div
                    className="inline-flex items-center gap-2 rounded-full border px-3.5 py-2 shadow-[0_8px_30px_rgba(0,1,49,0.07)] backdrop-blur-xl"
                    style={{
                      borderColor: `${colors.brand.accent}55`,
                      backgroundColor: 'rgba(255,255,255,0.78)',
                    }}
                  >
                    <Award
                      className="h-3.5 w-3.5"
                      style={{ color: colors.brand.accent }}
                    />
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: colors.brand.primary }}
                    >
                      Success Stories
                    </span>
                  </div>

                  <span className="hidden h-px w-12 bg-gray-300/70 sm:block" />

                  <span
                    className="hidden text-[9px] font-bold uppercase tracking-[0.16em] sm:block"
                    style={{ color: colors.brand.secondary }}
                  >
                    Strategy Proven by Performance
                  </span>
                </div>

                <h1
                  className="max-w-3xl text-3xl font-bold leading-[1.07] tracking-[-0.04em] sm:text-4xl lg:text-[50px]"
                  style={{ color: colors.brand.primary }}
                >
                  Proven Results.
                  <span
                    className="mt-1 block"
                    style={{ color: colors.brand.secondary }}
                  >
                    Built Across Industries.
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-[1.8] text-gray-600 sm:text-base">
                  Real clients. Real challenges. Real results. See how strategic
                  marketing drives measurable business growth across technology,
                  professional services, healthcare, and manufacturing.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <MagneticButton strength={0.3}>
                    <a
                      href="#case-study-explorer"
                      className="group inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_38px_rgba(0,0,170,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(0,0,170,0.34)]"
                      style={{ background: gradients.primary }}
                    >
                      Explore Case Studies
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </MagneticButton>

                  <MagneticButton strength={0.2}>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center rounded-xl border bg-white/70 px-6 py-3.5 text-sm font-bold shadow-[0_8px_24px_rgba(0,1,49,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_34px_rgba(0,1,49,0.09)]"
                      style={{
                        borderColor: `${colors.brand.primary}25`,
                        color: colors.brand.primary,
                      }}
                    >
                      Discuss Your Growth Goals
                    </Link>
                  </MagneticButton>
                </div>

                <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 border-t border-gray-200/80 pt-5">
                  {[
                    ['4', 'Featured Cases'],
                    ['4', 'Industries'],
                    ['5.0x', 'Avg. ROI'],
                  ].map(([value, label], index) => (
                    <div
                      key={label}
                      className={
                        index === 0
                          ? ''
                          : 'border-l border-gray-200/80 pl-3 sm:pl-5'
                      }
                    >
                      <p
                        className="text-xl font-bold tracking-[-0.03em] sm:text-2xl"
                        style={{ color: colors.brand.primary }}
                      >
                        {value}
                      </p>
                      <p className="mt-1 text-[10px] font-semibold text-gray-500 sm:text-xs">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 34 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-[30px] bg-[#000131] p-5 shadow-[0_34px_100px_rgba(0,1,49,0.24)] sm:p-6 lg:p-7">
                  <div
                    className="absolute left-0 top-0 h-1 w-full"
                    style={{ background: gradients.primary }}
                  />

                  <div
                    aria-hidden="true"
                    className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-25 blur-[95px]"
                    style={{ backgroundColor: colors.brand.secondary }}
                  />

                  <div
                    aria-hidden="true"
                    className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-15 blur-[95px]"
                    style={{ backgroundColor: colors.brand.accent }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p
                          className="text-[9px] font-bold uppercase tracking-[0.18em]"
                          style={{ color: colors.brand.accent }}
                        >
                          Featured Result
                        </p>

                        <div className="mt-2 flex items-center gap-2 text-white/55">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.07]">
                            {heroStudy.industryIcon}
                          </span>
                          <span className="text-[10px] font-semibold">
                            {heroStudy.industry}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={previousHero}
                          aria-label="Previous case study"
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition-all duration-300 hover:bg-white/12 hover:text-white"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => setHeroPaused((prev) => !prev)}
                          aria-label={
                            heroPaused
                              ? 'Resume case study slider'
                              : 'Pause case study slider'
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition-all duration-300 hover:bg-white/12 hover:text-white"
                        >
                          {heroPaused ? (
                            <Play className="h-3.5 w-3.5" />
                          ) : (
                            <Pause className="h-3.5 w-3.5" />
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={nextHero}
                          aria-label="Next case study"
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 transition-all duration-300 hover:bg-white/12 hover:text-white"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={heroStudy.id}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h2 className="mt-6 max-w-lg text-xl font-bold leading-[1.2] tracking-[-0.025em] text-white sm:text-2xl">
                          {heroStudy.title}
                        </h2>

                        <p className="mt-3 line-clamp-3 text-xs leading-[1.75] text-white/55 sm:text-[13px]">
                          {heroStudy.challenge}
                        </p>

                        <div className="mt-6 grid grid-cols-3 gap-2.5">
                          {heroStudy.results.map((result) => (
                            <div
                              key={result.label}
                              className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-4 text-center backdrop-blur-md"
                            >
                              <p
                                className="text-xl font-bold tracking-[-0.03em] sm:text-2xl"
                                style={{ color: colors.brand.accent }}
                              >
                                {result.metric}
                              </p>
                              <p className="mt-1 text-[9px] leading-[1.45] text-white/45 sm:text-[10px]">
                                {result.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <div className="mt-6 flex items-center gap-3">
                      <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          key={`hero-progress-${heroIndex}-${heroPaused}`}
                          className="h-full origin-left rounded-full"
                          style={{ background: gradients.primary }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: heroPaused ? 0.55 : 1 }}
                          transition={{
                            duration: heroPaused ? 0.25 : 6,
                            ease: heroPaused ? 'easeOut' : 'linear',
                          }}
                        />
                      </div>

                      <span className="text-[9px] font-bold tracking-[0.16em] text-white/35">
                        {String(heroIndex + 1).padStart(2, '0')} /{' '}
                        {String(caseStudies.length).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="mt-4 flex gap-2">
                      {caseStudies.map((study, index) => (
                        <button
                          key={study.id}
                          type="button"
                          aria-label={`View ${study.title}`}
                          onClick={() => goToHero(index)}
                          className="h-1.5 rounded-full transition-all duration-300"
                          style={{
                            width: index === heroIndex ? '34px' : '10px',
                            backgroundColor:
                              index === heroIndex
                                ? colors.brand.accent
                                : 'rgba(255,255,255,0.20)',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
      </ModernSectionBackground>

      {/* ============================================
          2. PROOF SNAPSHOT
          ============================================ */}
      <ModernSectionBackground
        variant="glass-white"
        className="relative overflow-hidden"
      >
        <Section
          spacing="base"
          animate
          background="transparent"
          className="relative overflow-hidden"
        >
          <Container size="xl">
            <div className="mx-auto max-w-7xl">
              <SectionHeader
                badge="Proven Impact"
                badgeIcon={<BarChart3 className="h-4 w-4" />}
                title="Results That Connect Marketing to Business Growth"
                description="A consolidated view of the performance outcomes represented across our featured client engagements."
                align="center"
                maxWidth="md"
              />

              <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {aggregateMetrics.map((metric) => (
                  <motion.div
                    key={metric.label}
                    variants={staggerItemVariants}
                    className="h-full"
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{
                        duration: 0.28,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group relative h-full overflow-hidden rounded-[22px] border border-white/90 bg-white/72 p-5 shadow-[0_16px_48px_rgba(0,1,49,0.06)] backdrop-blur-xl transition-all duration-300 hover:bg-white/94 hover:shadow-[0_24px_66px_rgba(0,1,49,0.11)]"
                    >
                      <div
                        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                        style={{ background: gradients.primary }}
                      />

                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl border"
                        style={{
                          color: colors.brand.secondary,
                          borderColor: `${colors.brand.secondary}14`,
                          backgroundColor: `${colors.brand.secondary}0C`,
                        }}
                      >
                        {metric.icon}
                      </div>

                      <div className="mt-5 flex items-baseline gap-1">
                        <AnimatedCounter
                          end={metric.value}
                          decimals={metric.decimals}
                          duration={2.4}
                          className="text-3xl font-bold tracking-[-0.04em]"
                          style={{ color: colors.brand.primary }}
                        />
                        <span
                          className="text-xl font-bold"
                          style={{ color: colors.brand.accent }}
                        >
                          {metric.suffix}
                        </span>
                      </div>

                      <h3
                        className="mt-2 text-sm font-bold"
                        style={{ color: colors.brand.primary }}
                      >
                        {metric.label}
                      </h3>

                      <p className="mt-2 text-[11px] leading-[1.65] text-gray-500">
                        {metric.note}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          3. CASE STUDY EXPLORER
          ============================================ */}
      <ModernSectionBackground
        variant="gradient-abstract"
        className="relative overflow-hidden"
      >
        <Section
          spacing="base"
          animate
          background="transparent"
          className="relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.24]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,1,49,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.04) 1px, transparent 1px)',
                backgroundSize: '62px 62px',
              }}
            />

            <div
              className="absolute left-1/2 top-[14%] h-[620px] w-[620px] -translate-x-1/2 rounded-full opacity-[0.04] blur-[150px]"
              style={{ backgroundColor: colors.brand.secondary }}
            />
          </div>

          <Container size="xl">
            <div
              id="case-study-explorer"
              className="relative z-10 mx-auto max-w-7xl scroll-mt-24"
            >
              <SectionHeader
                badge="Case Study Explorer"
                badgeIcon={<Search className="h-4 w-4" />}
                title="Explore the Challenge, Strategy, and Outcome"
                description="Filter by industry and inspect the complete growth story behind each featured engagement."
                align="center"
                maxWidth="md"
              />

              <ScrollReveal>
                <div className="mt-9 flex flex-wrap justify-center gap-2.5">
                  {allIndustries.map((industry) => {
                    const active = selectedIndustry === industry;
                    const count =
                      industry === 'All Industries'
                        ? caseStudies.length
                        : caseStudies.filter(
                            (study) => study.industry === industry
                          ).length;

                    return (
                      <motion.button
                        key={industry}
                        type="button"
                        onClick={() => selectIndustry(industry)}
                        whileTap={{ scale: 0.97 }}
                        className="group inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold transition-all duration-300"
                        style={{
                          color: active ? 'white' : colors.brand.primary,
                          borderColor: active
                            ? colors.brand.primary
                            : `${colors.brand.primary}18`,
                          background: active
                            ? gradients.primary
                            : 'rgba(255,255,255,0.72)',
                          boxShadow: active
                            ? '0 12px 30px rgba(0,0,170,0.20)'
                            : '0 7px 22px rgba(0,1,49,0.04)',
                        }}
                      >
                        <span>{industry}</span>
                        <span
                          className="flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[9px]"
                          style={{
                            color: active
                              ? colors.brand.primary
                              : colors.brand.secondary,
                            backgroundColor: active
                              ? colors.brand.accent
                              : `${colors.brand.secondary}0D`,
                          }}
                        >
                          {count}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </ScrollReveal>

              <div className="mt-8 grid items-start gap-5 lg:grid-cols-[330px_1fr] lg:gap-7">
                <ScrollReveal>
                  <div className="overflow-hidden rounded-[24px] border border-white/90 bg-white/68 p-3 shadow-[0_18px_58px_rgba(0,1,49,0.06)] backdrop-blur-xl lg:sticky lg:top-24">
                    <div className="flex items-center justify-between px-2 pb-3 pt-1">
                      <div>
                        <p
                          className="text-[9px] font-bold uppercase tracking-[0.17em]"
                          style={{ color: colors.brand.secondary }}
                        >
                          Selected Industry
                        </p>
                        <p
                          className="mt-1 text-sm font-bold"
                          style={{ color: colors.brand.primary }}
                        >
                          {selectedIndustry}
                        </p>
                      </div>

                      <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[9px] font-bold text-gray-500">
                        {filteredCaseStudies.length}{' '}
                        {filteredCaseStudies.length === 1 ? 'Case' : 'Cases'}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {filteredCaseStudies.map((study, index) => {
                        const active = study.id === activeStudy.id;

                        return (
                          <button
                            key={study.id}
                            type="button"
                            onClick={() => setActiveCaseId(study.id)}
                            className="group relative w-full overflow-hidden rounded-2xl border p-3.5 text-left transition-all duration-300"
                            style={{
                              borderColor: active
                                ? `${colors.brand.secondary}25`
                                : 'rgba(229,231,235,0.80)',
                              backgroundColor: active
                                ? `${colors.brand.secondary}08`
                                : 'rgba(255,255,255,0.58)',
                            }}
                          >
                            {active && (
                              <motion.span
                                layoutId="case-study-active-edge"
                                className="absolute inset-y-0 left-0 w-1"
                                style={{ background: gradients.primary }}
                              />
                            )}

                            <div className="flex items-start gap-3">
                              <div
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border"
                                style={{
                                  color: active
                                    ? colors.brand.secondary
                                    : colors.brand.primary,
                                  borderColor: `${colors.brand.secondary}12`,
                                  backgroundColor: active
                                    ? `${colors.brand.secondary}10`
                                    : 'rgba(255,255,255,0.85)',
                                }}
                              >
                                {study.industryIcon}
                              </div>

                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <span
                                    className="text-[8px] font-bold uppercase tracking-[0.14em]"
                                    style={{ color: colors.brand.secondary }}
                                  >
                                    Case 0{index + 1}
                                  </span>
                                  <span className="h-1 w-1 rounded-full bg-gray-300" />
                                  <span className="truncate text-[8px] font-bold uppercase tracking-[0.12em] text-gray-400">
                                    {study.industry}
                                  </span>
                                </div>

                                <p
                                  className="mt-1.5 line-clamp-2 text-xs font-bold leading-[1.45]"
                                  style={{ color: colors.brand.primary }}
                                >
                                  {study.title}
                                </p>

                                <div className="mt-2 flex items-center gap-1.5">
                                  {study.results.slice(0, 2).map((result) => (
                                    <span
                                      key={result.label}
                                      className="rounded-full px-2 py-1 text-[8px] font-bold"
                                      style={{
                                        color: colors.brand.secondary,
                                        backgroundColor: `${colors.brand.secondary}08`,
                                      }}
                                    >
                                      {result.metric}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.08}>
                  <AnimatePresence mode="wait">
                    <motion.article
                      key={activeStudy.id}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{
                        duration: 0.42,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative overflow-hidden rounded-[28px] border border-white/90 bg-white/74 shadow-[0_24px_78px_rgba(0,1,49,0.08)] backdrop-blur-2xl"
                    >
                      <div
                        className="absolute left-0 top-0 h-1 w-full"
                        style={{ background: gradients.primary }}
                      />

                      <div className="border-b border-gray-200/70 p-5 sm:p-6 lg:p-7">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                          <div className="max-w-2xl">
                            <div className="flex items-center gap-2.5">
                              <div
                                className="flex h-10 w-10 items-center justify-center rounded-xl border"
                                style={{
                                  color: colors.brand.secondary,
                                  borderColor: `${colors.brand.secondary}15`,
                                  backgroundColor: `${colors.brand.secondary}0D`,
                                }}
                              >
                                {activeStudy.industryIcon}
                              </div>

                              <div>
                                <p
                                  className="text-[9px] font-bold uppercase tracking-[0.17em]"
                                  style={{ color: colors.brand.secondary }}
                                >
                                  {activeStudy.industry}
                                </p>
                                <p className="mt-0.5 text-[9px] font-semibold text-gray-400">
                                  Featured Client Engagement
                                </p>
                              </div>
                            </div>

                            <h2
                              className="mt-5 text-xl font-bold leading-[1.18] tracking-[-0.025em] sm:text-2xl lg:text-[30px]"
                              style={{ color: colors.brand.primary }}
                            >
                              {activeStudy.title}
                            </h2>
                          </div>

                          <div className="flex shrink-0 items-center gap-2 rounded-full border border-gray-200/80 bg-white/70 px-3 py-2">
                            <span
                              className="h-2 w-2 rounded-full"
                              style={{ backgroundColor: colors.brand.accent }}
                            />
                            <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-gray-500">
                              Measurable Outcome
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-2">
                        <div className="border-b border-gray-200/70 p-5 sm:p-6 lg:border-b-0 lg:border-r lg:p-7">
                          <div className="flex items-center gap-3">
                            <div
                              className="flex h-9 w-9 items-center justify-center rounded-xl"
                              style={{
                                color: colors.brand.accent,
                                backgroundColor: `${colors.brand.accent}12`,
                              }}
                            >
                              <Target className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-gray-400">
                                Business Context
                              </p>
                              <h3
                                className="mt-0.5 text-sm font-bold"
                                style={{ color: colors.brand.primary }}
                              >
                                The Challenge
                              </h3>
                            </div>
                          </div>

                          <p className="mt-4 text-xs leading-[1.8] text-gray-600 sm:text-[13px]">
                            {activeStudy.challenge}
                          </p>
                        </div>

                        <div className="p-5 sm:p-6 lg:p-7">
                          <div className="flex items-center gap-3">
                            <div
                              className="flex h-9 w-9 items-center justify-center rounded-xl"
                              style={{
                                color: colors.brand.secondary,
                                backgroundColor: `${colors.brand.secondary}0D`,
                              }}
                            >
                              <Rocket className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-gray-400">
                                Strategic Response
                              </p>
                              <h3
                                className="mt-0.5 text-sm font-bold"
                                style={{ color: colors.brand.primary }}
                              >
                                The Solution
                              </h3>
                            </div>
                          </div>

                          <p className="mt-4 text-xs leading-[1.8] text-gray-600 sm:text-[13px]">
                            {activeStudy.solution}
                          </p>
                        </div>
                      </div>

                      <div className="grid border-t border-gray-200/70 lg:grid-cols-[0.9fr_1.1fr]">
                        <div className="border-b border-gray-200/70 p-5 sm:p-6 lg:border-b-0 lg:border-r lg:p-7">
                          <div className="flex items-center gap-2.5">
                            <Layers
                              className="h-4 w-4"
                              style={{ color: colors.brand.secondary }}
                            />
                            <h3
                              className="text-sm font-bold"
                              style={{ color: colors.brand.primary }}
                            >
                              Key Highlights
                            </h3>
                          </div>

                          <div className="mt-4 space-y-2.5">
                            {activeStudy.highlights.map((highlight, index) => (
                              <div
                                key={highlight}
                                className="flex items-center gap-3 rounded-xl border border-gray-100/90 bg-white/55 px-3.5 py-3"
                              >
                                <span
                                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[8px] font-bold"
                                  style={{
                                    color: colors.brand.primary,
                                    backgroundColor: colors.brand.accent,
                                  }}
                                >
                                  0{index + 1}
                                </span>
                                <span className="text-[11px] font-medium leading-[1.5] text-gray-600 sm:text-xs">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="relative overflow-hidden bg-[#000131] p-5 sm:p-6 lg:p-7">
                          <div
                            aria-hidden="true"
                            className="absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-25 blur-[80px]"
                            style={{ backgroundColor: colors.brand.secondary }}
                          />

                          <div
                            aria-hidden="true"
                            className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full opacity-14 blur-[80px]"
                            style={{ backgroundColor: colors.brand.accent }}
                          />

                          <div className="relative z-10">
                            <div className="flex items-center justify-between gap-4">
                              <div className="flex items-center gap-2.5">
                                <TrendingUp className="h-4 w-4 text-white" />
                                <div>
                                  <p
                                    className="text-[8px] font-bold uppercase tracking-[0.15em]"
                                    style={{ color: colors.brand.accent }}
                                  >
                                    Commercial Impact
                                  </p>
                                  <h3 className="mt-0.5 text-sm font-bold text-white">
                                    Results Achieved
                                  </h3>
                                </div>
                              </div>

                              <Gauge
                                className="h-5 w-5"
                                style={{ color: colors.brand.accent }}
                              />
                            </div>

                            <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
                              {activeStudy.results.map((result) => (
                                <motion.div
                                  key={result.label}
                                  whileHover={{ y: -3 }}
                                  transition={{ duration: 0.22 }}
                                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-4 text-center backdrop-blur-md"
                                >
                                  <p
                                    className="text-2xl font-bold tracking-[-0.04em]"
                                    style={{ color: colors.brand.accent }}
                                  >
                                    {result.metric}
                                  </p>
                                  <p className="mt-1.5 text-[9px] leading-[1.45] text-white/48">
                                    {result.label}
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </AnimatePresence>
                </ScrollReveal>
              </div>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          4. ALL FEATURED STORIES
          ============================================ */}
      <ModernSectionBackground
        variant="animated-dots"
        className="relative overflow-hidden"
      >
        <Section
          spacing="base"
          animate
          background="transparent"
          className="relative overflow-hidden"
        >
          <Container size="xl">
            <div className="mx-auto max-w-7xl">
              <SectionHeader
                badge="Cross-Industry Perspective"
                badgeIcon={<Building2 className="h-4 w-4" />}
                title="Four Growth Challenges. Four Different Strategic Responses."
                description="Each engagement required a different combination of positioning, digital infrastructure, demand generation, content, and performance optimization."
                align="center"
                maxWidth="md"
              />

              <StaggerContainer className="mt-10 grid gap-5 md:grid-cols-2">
                {caseStudies.map((study, index) => (
                  <motion.article
                    key={study.id}
                    variants={staggerItemVariants}
                    whileHover={{ y: -5 }}
                    transition={{
                      duration: 0.28,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative overflow-hidden rounded-[24px] border border-white/90 bg-white/70 p-5 shadow-[0_17px_52px_rgba(0,1,49,0.06)] backdrop-blur-xl transition-all duration-300 hover:bg-white/94 hover:shadow-[0_25px_72px_rgba(0,1,49,0.11)] sm:p-6"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-3 -top-7 text-[96px] font-black leading-none tracking-[-0.07em] opacity-[0.03]"
                      style={{ color: colors.brand.primary }}
                    >
                      0{index + 1}
                    </span>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-10 w-10 items-center justify-center rounded-xl border"
                            style={{
                              color: colors.brand.secondary,
                              borderColor: `${colors.brand.secondary}14`,
                              backgroundColor: `${colors.brand.secondary}0C`,
                            }}
                          >
                            {study.industryIcon}
                          </div>

                          <div>
                            <p
                              className="text-[9px] font-bold uppercase tracking-[0.16em]"
                              style={{ color: colors.brand.secondary }}
                            >
                              {study.industry}
                            </p>
                            <p className="mt-0.5 text-[9px] font-medium text-gray-400">
                              Featured Case Study
                            </p>
                          </div>
                        </div>

                        <span className="rounded-full bg-gray-100/80 px-2.5 py-1 text-[9px] font-bold text-gray-400">
                          0{index + 1}
                        </span>
                      </div>

                      <h3
                        className="mt-5 max-w-xl text-lg font-bold leading-[1.25] tracking-[-0.02em]"
                        style={{ color: colors.brand.primary }}
                      >
                        {study.title}
                      </h3>

                      <p className="mt-3 line-clamp-2 text-xs leading-[1.7] text-gray-600">
                        {study.challenge}
                      </p>

                      <div className="mt-5 grid grid-cols-3 gap-2">
                        {study.results.map((result) => (
                          <div
                            key={result.label}
                            className="rounded-xl border border-gray-100/90 bg-white/55 px-2.5 py-3 text-center"
                          >
                            <p
                              className="text-base font-bold"
                              style={{ color: colors.brand.primary }}
                            >
                              {result.metric}
                            </p>
                            <p className="mt-1 line-clamp-2 text-[8px] leading-[1.35] text-gray-400">
                              {result.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setSelectedIndustry(study.industry);
                          setActiveCaseId(study.id);
                          document
                            .getElementById('case-study-explorer')
                            ?.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start',
                            });
                        }}
                        className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] transition-all duration-300 group-hover:gap-3"
                        style={{ color: colors.brand.secondary }}
                      >
                        View Full Case
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </StaggerContainer>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          5. RESULTS FRAMEWORK
          ============================================ */}
      <ModernSectionBackground
        variant="mesh-gradient-purple"
        className="relative overflow-hidden"
      >
        <Section
          spacing="base"
          animate
          background="transparent"
          className="relative overflow-hidden"
        >
          <Container size="xl">
            <ScrollReveal>
              <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/90 bg-white/68 shadow-[0_25px_82px_rgba(0,1,49,0.09)] backdrop-blur-2xl">
                <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
                  <div className="relative overflow-hidden bg-[#000131] px-5 py-8 sm:px-7 lg:px-8 lg:py-10">
                    <div
                      aria-hidden="true"
                      className="absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-24 blur-[85px]"
                      style={{ backgroundColor: colors.brand.secondary }}
                    />

                    <div
                      aria-hidden="true"
                      className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full opacity-16 blur-[90px]"
                      style={{ backgroundColor: colors.brand.accent }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center gap-2">
                        <Sparkles
                          className="h-3.5 w-3.5"
                          style={{ color: colors.brand.accent }}
                        />
                        <p
                          className="text-[9px] font-bold uppercase tracking-[0.18em]"
                          style={{ color: colors.brand.accent }}
                        >
                          Performance Architecture
                        </p>
                      </div>

                      <h2 className="mt-4 max-w-md text-xl font-bold leading-[1.2] tracking-[-0.025em] text-white sm:text-2xl lg:text-[30px]">
                        Strong Results Start With a Connected Growth System
                      </h2>

                      <p className="mt-4 max-w-md text-xs leading-[1.75] text-white/55 sm:text-[13px]">
                        The featured cases differ by industry, but the underlying
                        operating principle remains consistent: diagnose the
                        business challenge, build the right strategy, execute
                        across connected channels, and measure commercial impact.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-0 sm:grid-cols-2">
                    {[
                      {
                        number: '01',
                        icon: <Target className="h-4 w-4" />,
                        title: 'Business Challenge',
                        text: 'Start with the commercial problem rather than isolated marketing activity.',
                      },
                      {
                        number: '02',
                        icon: <Layers className="h-4 w-4" />,
                        title: 'Integrated Strategy',
                        text: 'Connect positioning, content, digital, channels, and sales enablement.',
                      },
                      {
                        number: '03',
                        icon: <Rocket className="h-4 w-4" />,
                        title: 'Disciplined Execution',
                        text: 'Activate the strategy with clear priorities, ownership, and coordination.',
                      },
                      {
                        number: '04',
                        icon: <TrendingUp className="h-4 w-4" />,
                        title: 'Measured Outcome',
                        text: 'Evaluate performance through lead quality, visibility, ROI, and business impact.',
                      },
                    ].map((item, index) => (
                      <div
                        key={item.number}
                        className={`group p-5 transition-colors duration-300 hover:bg-white/55 sm:p-6 ${
                          index % 2 === 0
                            ? 'sm:border-r sm:border-gray-200/80'
                            : ''
                        } ${
                          index < 2 ? 'border-b border-gray-200/80' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl"
                            style={{
                              color: colors.brand.secondary,
                              backgroundColor: `${colors.brand.secondary}0D`,
                            }}
                          >
                            {item.icon}
                          </span>

                          <div>
                            <p
                              className="text-[8px] font-bold uppercase tracking-[0.15em]"
                              style={{ color: colors.brand.secondary }}
                            >
                              {item.number}
                            </p>
                            <h3
                              className="mt-1 text-sm font-bold"
                              style={{ color: colors.brand.primary }}
                            >
                              {item.title}
                            </h3>
                            <p className="mt-2 text-[11px] leading-[1.65] text-gray-500 sm:text-xs">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          6. FINAL CTA
          ============================================ */}
      <ModernSectionBackground
        variant="image-overlay-team"
        className="relative overflow-hidden"
      >
        <section className="relative overflow-hidden bg-transparent px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(0,1,49,0.94) 0%, rgba(0,1,49,0.84) 48%, rgba(0,0,170,0.64) 100%)',
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full opacity-20 blur-[125px]"
            style={{ backgroundColor: colors.brand.accent }}
          />

          <Container size="lg">
            <ScrollReveal>
              <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.075] px-5 py-8 text-center shadow-[0_32px_105px_rgba(0,1,49,0.34)] backdrop-blur-2xl sm:px-8 sm:py-10 lg:px-10">
                <div
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10"
                  style={{ color: colors.brand.accent }}
                >
                  <Rocket className="h-6 w-6" />
                </div>

                <p
                  className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: colors.brand.accent }}
                >
                  Build the Next Success Story
                </p>

                <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-3xl lg:text-[38px]">
                  Ready for Similar Results?
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-[1.8] text-white/65">
                  Let's discuss how strategic marketing can drive measurable
                  growth for your organization.
                </p>

                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <MagneticButton strength={0.3}>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-[0_15px_38px_rgba(0,0,170,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(0,0,170,0.42)]"
                      style={{ background: gradients.primary }}
                    >
                      Start Your Project
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </MagneticButton>

                  <MagneticButton strength={0.2}>
                    <Link
                      to="/services"
                      className="group inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/16"
                    >
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </MagneticButton>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="flex flex-wrap justify-center gap-2.5">
                    {[
                      'Strategic Positioning',
                      'Integrated Execution',
                      'Measurable Performance',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 backdrop-blur-md"
                      >
                        <CheckCircle2
                          className="h-3.5 w-3.5"
                          style={{ color: colors.brand.accent }}
                        />
                        <span className="text-[10px] font-bold text-white/70 sm:text-xs">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      </ModernSectionBackground>
    </PageBackground>
  );
}

export default CaseStudiesPage;
