/**
 * ============================================
 * ANALYTICS & OPTIMIZATION SERVICE PAGE
 * AdvantEdge
 * ============================================
 * Rebuilt to match the approved Strategic Marketing
 * service-page blueprint and visual system.
 * ============================================
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Users,
  Target,
  Zap,
  LineChart,
  PieChart,
  Activity,
  Database,
  Eye,
  Globe,
  MonitorSmartphone,
  FileText,
  Layers,
} from 'lucide-react';

import { Section, Container } from '../../components/primitives';
import { Accordion } from '../../components/Accordion';

import {
  ScrollReveal,
  StaggerContainer,
  staggerItemVariants,
} from '../../components/ScrollReveal';

import { MagneticButton } from '../../components/MagneticButton';
import { colors, gradients } from '../../../styles/design-tokens';
import { PageBackground } from '../../components/layout';
import { ModernSectionBackground } from '../../components/ModernSectionBackground';
import { PageSEO } from '../../components/seo';
import { SERVICE_SEO } from '../../utils/seo-config';

/* ============================================
   DATA
   ============================================ */

const keyServices = [
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Web Analytics',
    description:
      'Comprehensive website tracking, analysis, and performance measurement.',
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: 'Conversion Optimization',
    description:
      'CRO strategies and A/B testing to maximize conversions and revenue.',
  },
  {
    icon: <PieChart className="h-5 w-5" />,
    title: 'Marketing Attribution',
    description:
      'Multi-touch attribution models to understand customer journey and ROI.',
  },
  {
    icon: <Activity className="h-5 w-5" />,
    title: 'Campaign Analytics',
    description:
      'Campaign performance tracking and optimization across all channels.',
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: 'Data Integration',
    description:
      'Connect and unify data from all marketing platforms and systems.',
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: 'Custom Reporting',
    description:
      'Tailored dashboards and reports aligned with business objectives.',
  },
];

const processSteps = [
  {
    id: 'step-1',
    number: '01',
    title: 'Analytics Audit',
    description:
      'Assess current tracking and identify gaps',
    details: [
      'Current setup review',
      'Data quality assessment',
      'Goal and conversion tracking',
      'Measurement framework',
    ],
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Implementation',
    description:
      'Set up comprehensive tracking and analytics',
    details: [
      'Analytics platform setup',
      'Conversion tracking',
      'Custom event tracking',
      'Dashboard configuration',
    ],
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Analysis & Insights',
    description:
      'Analyze data and extract actionable insights',
    details: [
      'Performance analysis',
      'Trend identification',
      'Opportunity discovery',
      'Recommendation development',
    ],
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Optimization',
    description:
      'Test, refine, and continuously improve',
    details: [
      'A/B testing',
      'Multivariate testing',
      'Implementation support',
      'Performance monitoring',
    ],
  },
];

const benefits = [
  {
    icon: <Eye className="h-5 w-5" />,
    title: 'Data-Driven Decisions',
    description:
      'Make informed decisions based on actual performance data',
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: 'Increased ROI',
    description:
      'Optimize spend and maximize return on investment',
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: 'Better Targeting',
    description:
      'Understand audiences and target more effectively',
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Continuous Improvement',
    description:
      'Ongoing optimization drives compound growth',
  },
];

const deliverables = [
  {
    id: 'del-1',
    title: 'Analytics Setup',
    icon: (
      <Database
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Complete analytics implementation including GA4, conversion tracking, event tracking, and integration with all marketing platforms.',
  },
  {
    id: 'del-2',
    title: 'Custom Dashboards',
    icon: (
      <BarChart3
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Tailored reporting dashboards with key metrics, KPIs, and visualizations aligned with your business objectives.',
  },
  {
    id: 'del-3',
    title: 'Performance Reports',
    icon: (
      <FileText
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Monthly analytics reports with insights, trends, benchmarks, and actionable recommendations for improvement.',
  },
  {
    id: 'del-4',
    title: 'Optimization Tests',
    icon: (
      <Target
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Ongoing A/B and multivariate testing programs to optimize conversions, user experience, and campaign performance.',
  },
];

const industries = [
  {
    name: 'E-commerce',
    icon: <Globe className="h-4 w-4" />,
  },
  {
    name: 'SaaS',
    icon: <MonitorSmartphone className="h-4 w-4" />,
  },
  {
    name: 'B2B',
    icon: <Users className="h-4 w-4" />,
  },
  {
    name: 'Finance',
    icon: <BarChart3 className="h-4 w-4" />,
  },
  {
    name: 'Healthcare',
    icon: <Activity className="h-4 w-4" />,
  },
  {
    name: 'Education',
    icon: <FileText className="h-4 w-4" />,
  },
];

const faqs = [
  {
    id: 'faq-1',
    title: 'What analytics platforms do you work with?',
    icon: (
      <BarChart3
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'We work with Google Analytics 4, Adobe Analytics, Mixpanel, Amplitude, and all major marketing platforms including social, email, and advertising.',
  },
  {
    id: 'faq-2',
    title: 'How long until we see optimization results?',
    icon: (
      <TrendingUp
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Initial insights are immediate once tracking is implemented. Optimization results typically show within 4-8 weeks of testing and refinement.',
  },
  {
    id: 'faq-3',
    title: 'Do you provide ongoing support?',
    icon: (
      <Zap
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Yes. We offer ongoing analytics management, monthly reporting, continuous optimization, and strategic recommendations.',
  },
];

/* ============================================
   PAGE
   ============================================ */

export function AnalyticsOptimizationPage() {
  return (
    <PageBackground>
      <PageSEO
        title={SERVICE_SEO.analyticsOptimization.title}
        description={SERVICE_SEO.analyticsOptimization.description}
        keywords={SERVICE_SEO.analyticsOptimization.keywords}
        ogImage={SERVICE_SEO.analyticsOptimization.ogImage}
        path="/services/analytics-optimization"
        serviceSchema={SERVICE_SEO.analyticsOptimization.schema}
      />

      {/* ============================================
          1. HERO
          MATCHES APPROVED SERVICE PAGE BLUEPRINT
          ============================================ */}

      <section className="relative isolate overflow-hidden bg-[#080912]">
        {/* Background */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20"
        >
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=90"
            alt=""
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Treatment */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#080912]/95 via-[#080912]/70 to-[#080912]/35" />

          <div className="absolute inset-0 bg-gradient-to-b from-[#080912]/30 via-transparent to-[#080912]/96" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_20%,rgba(255,255,255,0.14),transparent_38%)]" />

          <div
            className="absolute -left-52 top-[15%] h-[480px] w-[480px] rounded-full opacity-[0.09] blur-[155px]"
            style={{ backgroundColor: colors.brand.secondary }}
          />

          <div
            className="absolute -right-48 bottom-[-120px] h-[450px] w-[450px] rounded-full opacity-[0.08] blur-[150px]"
            style={{ backgroundColor: colors.brand.accent }}
          />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)',
              backgroundSize: '78px 78px',
            }}
          />
        </div>

        <Container size="xl">
          <div className="mx-auto flex min-h-[650px] max-w-7xl flex-col justify-center py-16 lg:min-h-[700px] lg:py-20">
            <div className="grid items-center gap-9 lg:grid-cols-[1.08fr_0.92fr]">
              {/* Content */}

              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55 }}
                >
                  <div
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-4 py-2 backdrop-blur-xl"
                    style={{ color: colors.brand.accent }}
                  >
                    <BarChart3 className="h-3.5 w-3.5" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                      Analytics & Optimization
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="mt-5 max-w-3xl text-3xl font-bold leading-[1.07] tracking-[-0.04em] text-white sm:text-4xl lg:text-[48px]"
                >
                  Data-Driven Marketing
                  <span className="mt-1 block text-white/65">
                    Excellence
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.18 }}
                  className="mt-5 max-w-2xl text-sm leading-[1.8] text-white/68 sm:text-base"
                >
                  Comprehensive analytics, conversion optimization, and performance
                  measurement that drives continuous improvement and maximum ROI.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 text-sm font-bold text-white"
                >
                  Turn data into actionable insights and measurable growth.
                </motion.p>

                {/* CTA */}

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-7 flex flex-col gap-3 sm:flex-row"
                >
                  <MagneticButton strength={0.25}>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(0,0,170,0.28)] transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background: gradients.primary }}
                    >
                      Start Optimizing
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </MagneticButton>

                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-black/20 px-6 py-3 text-sm font-bold text-white backdrop-blur-xl transition-all hover:bg-white/10"
                  >
                    View All Services
                  </Link>
                </motion.div>

                {/* Framework */}

                <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2">
                  {[
                    'Tracking',
                    'Analysis',
                    'Insights',
                    'Testing',
                    'Growth',
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/45">
                        {item}
                      </span>

                      {index < 4 && (
                        <ArrowRight
                          className="h-3 w-3"
                          style={{ color: colors.brand.accent }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Capability Summary */}

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="grid gap-3"
              >
                {keyServices.slice(0, 3).map((service, index) => (
                  <div
                    key={service.title}
                    className="group rounded-[18px] border border-white/20 bg-black/25 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.10] sm:p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/[0.08]"
                        style={{ color: colors.brand.accent }}
                      >
                        {service.icon}
                      </div>

                      <div>
                        <p
                          className="text-[8px] font-bold uppercase tracking-[0.17em]"
                          style={{ color: colors.brand.accent }}
                        >
                          Capability 0{index + 1}
                        </p>

                        <h2 className="mt-1 text-sm font-bold text-white">
                          {service.title}
                        </h2>

                        <p className="mt-1.5 text-[10px] leading-[1.65] text-white/50">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Performance strip */}

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/20 bg-black/20 backdrop-blur-xl">
              <div className="grid grid-cols-3 divide-x divide-white/15">
                {[
                  ['285%', 'Avg. ROI Lift'],
                  ['67%', 'Conversion Increase'],
                  ['99%', 'Data Accuracy'],
                ].map(([value, label]) => (
                  <div key={label} className="px-3 py-4 text-center">
                    <p className="text-lg font-bold text-white sm:text-xl">
                      {value}
                    </p>

                    <p className="mt-1 text-[9px] text-white/45">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================
          2. WHY ANALYTICS & OPTIMIZATION
          + BENEFITS
          ============================================ */}

      <ModernSectionBackground
        variant="glass-blur"
        className="relative overflow-hidden"
      >
        <Section spacing="base" animate background="transparent">
          <Container size="xl">
            <div className="mx-auto max-w-7xl">
              <ScrollReveal>
                <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                  <div>
                    <div
                      className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
                      style={{
                        borderColor: `${colors.brand.accent}55`,
                        backgroundColor: `${colors.brand.accent}10`,
                      }}
                    >
                      <TrendingUp
                        className="h-3.5 w-3.5"
                        style={{ color: colors.brand.accent }}
                      />

                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: colors.brand.primary }}
                      >
                        Performance Intelligence
                      </span>
                    </div>

                    <h2
                      className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-0.03em] sm:text-3xl"
                      style={{ color: colors.brand.primary }}
                    >
                      Turn Performance Data Into Better Decisions.
                    </h2>
                  </div>

                  <p className="text-sm leading-[1.8] text-gray-600 sm:text-base">
                    Analytics should do more than report what already happened.
                    The right measurement system reveals why performance changes,
                    where opportunities exist, and which actions can improve
                    marketing efficiency, customer experience, and revenue.
                  </p>
                </div>
              </ScrollReveal>

              <StaggerContainer className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit.title}
                    variants={staggerItemVariants}
                    className="rounded-[18px] border border-gray-200 bg-white/85 p-4 shadow-[0_12px_35px_rgba(0,1,49,0.05)] backdrop-blur-xl"
                  >
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{
                        color: colors.brand.secondary,
                        backgroundColor: `${colors.brand.secondary}0D`,
                      }}
                    >
                      {benefit.icon}
                    </div>

                    <h3
                      className="mt-4 text-xs font-bold"
                      style={{ color: colors.brand.primary }}
                    >
                      {benefit.title}
                    </h3>

                    <p className="mt-1.5 text-[10px] leading-[1.65] text-gray-500">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          3. CORE ANALYTICS & OPTIMIZATION SERVICES
          ============================================ */}

      <ModernSectionBackground
        variant="mesh-gradient-light"
        className="relative overflow-hidden"
      >
        <Section spacing="base" animate background="transparent">
          <Container size="xl">
            <div className="mx-auto max-w-7xl">
              <ScrollReveal>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <Layers
                        className="h-4 w-4"
                        style={{ color: colors.brand.accent }}
                      />

                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.17em]"
                        style={{ color: colors.brand.secondary }}
                      >
                        What We Deliver
                      </span>
                    </div>

                    <h2
                      className="mt-3 text-2xl font-bold tracking-[-0.03em] sm:text-3xl"
                      style={{ color: colors.brand.primary }}
                    >
                      Core Analytics & Optimization Services
                    </h2>
                  </div>

                  <p className="max-w-lg text-sm leading-relaxed text-gray-600 lg:text-right">
                    Complete analytics implementation and optimization capabilities.
                  </p>
                </div>
              </ScrollReveal>

              <StaggerContainer className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {keyServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    variants={staggerItemVariants}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-[20px] border border-gray-200 bg-white/90 p-5 shadow-[0_16px_45px_rgba(0,1,49,0.06)]"
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{
                          color: colors.brand.secondary,
                          backgroundColor: `${colors.brand.secondary}0D`,
                        }}
                      >
                        {service.icon}
                      </div>

                      <span className="text-[9px] font-bold tracking-[0.15em] text-gray-300">
                        0{index + 1}
                      </span>
                    </div>

                    <h3
                      className="mt-5 text-sm font-bold"
                      style={{ color: colors.brand.primary }}
                    >
                      {service.title}
                    </h3>

                    <p className="mt-2 text-[11px] leading-[1.7] text-gray-600">
                      {service.description}
                    </p>

                    <div
                      className="mt-5 h-[2px] w-8 transition-all duration-500 group-hover:w-16"
                      style={{ background: gradients.primary }}
                    />
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          4. ANALYTICS & OPTIMIZATION PROCESS — DARK
          ============================================ */}

      <ModernSectionBackground
        variant="gradient-tech"
        className="relative overflow-hidden"
      >
        <Section
          spacing="base"
          animate
          background="transparent"
          className="relative isolate overflow-hidden"
        >
          {/* Dark Background */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#080912]"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=86"
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-[0.17]"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/84 via-[#080912]/78 to-[#080912]/92" />

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)',
                backgroundSize: '76px 76px',
              }}
            />
          </div>

          <Container size="xl">
            <div className="mx-auto max-w-7xl">
              <ScrollReveal>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-xl">
                      <Target
                        className="h-3.5 w-3.5"
                        style={{ color: colors.brand.accent }}
                      />

                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: colors.brand.accent }}
                      >
                        Our Methodology
                      </span>
                    </div>

                    <h2 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">
                      Analytics & Optimization Process
                    </h2>
                  </div>

                  <p className="max-w-lg text-sm leading-relaxed text-white/50 lg:text-right">
                    A systematic 4-step approach to data-driven growth.
                  </p>
                </div>
              </ScrollReveal>

              <StaggerContainer className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step) => (
                  <motion.div
                    key={step.id}
                    variants={staggerItemVariants}
                    whileHover={{ y: -4 }}
                    className="relative overflow-hidden rounded-[20px] border border-white/15 bg-black/25 p-5 backdrop-blur-xl"
                  >
                    <span
                      className="text-[9px] font-bold tracking-[0.16em]"
                      style={{ color: colors.brand.accent }}
                    >
                      {step.number}
                    </span>

                    <h3 className="mt-3 text-sm font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[10px] leading-[1.65] text-white/48">
                      {step.description}
                    </p>

                    <div className="my-4 h-px bg-white/15" />

                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-[10px] leading-relaxed text-white/60"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-3.5 w-3.5 shrink-0"
                            style={{ color: colors.brand.accent }}
                          />

                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          5. DELIVERABLES + RESULTS
          ============================================ */}

      <ModernSectionBackground
        variant="glass-blur"
        className="relative overflow-hidden"
      >
        <Section spacing="base" animate background="transparent">
          <Container size="xl">
            <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
              {/* Deliverables */}

              <ScrollReveal>
                <div className="h-full rounded-[24px] border border-gray-200 bg-white/85 p-5 shadow-[0_18px_55px_rgba(0,1,49,0.06)] backdrop-blur-xl sm:p-6">
                  <div className="flex items-center gap-2">
                    <FileText
                      className="h-4 w-4"
                      style={{ color: colors.brand.accent }}
                    />

                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: colors.brand.secondary }}
                    >
                      What You Receive
                    </span>
                  </div>

                  <h2
                    className="mt-3 text-xl font-bold sm:text-2xl"
                    style={{ color: colors.brand.primary }}
                  >
                    Analytics & Optimization Deliverables
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Comprehensive analytics and optimization services.
                  </p>

                  <div className="mt-5">
                    <Accordion items={deliverables} />
                  </div>
                </div>
              </ScrollReveal>

              {/* Results */}

              <ScrollReveal delay={0.08}>
                <div className="relative h-full overflow-hidden rounded-[24px] bg-[#080912] p-5 shadow-[0_24px_70px_rgba(0,1,49,0.18)] sm:p-6">
                  <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[#ffb300]/10 blur-[90px]" />

                  <div className="relative">
                    <div className="flex items-center gap-2">
                      <TrendingUp
                        className="h-4 w-4"
                        style={{ color: colors.brand.accent }}
                      />

                      <span
                        className="text-[9px] font-bold uppercase tracking-[0.16em]"
                        style={{ color: colors.brand.accent }}
                      >
                        Performance Evidence
                      </span>
                    </div>

                    <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                      Real Results
                    </h2>

                    <p className="mt-2 text-sm text-white/50">
                      E-commerce company achieved dramatic revenue growth through systematic conversion rate optimization program.
                    </p>

                    <div className="mt-6 grid grid-cols-3 divide-x divide-white/15 overflow-hidden rounded-xl border border-white/15 bg-white/[0.05]">
                      {[
                        ['183%', 'Conversion Increase'],
                        ['$2.4M', 'Revenue Impact'],
                        ['34%', 'Cost Reduction'],
                      ].map(([value, label]) => (
                        <div
                          key={label}
                          className="px-2 py-5 text-center"
                        >
                          <p
                            className="text-xl font-bold"
                            style={{ color: colors.brand.accent }}
                          >
                            {value}
                          </p>

                          <p className="mt-1 text-[8px] text-white/45">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="mt-5 border-t border-white/15 pt-5 text-[11px] leading-[1.75] text-white/55">
                      E-commerce company achieved dramatic revenue growth through systematic conversion rate optimization program.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          6. INDUSTRIES + FAQ
          ============================================ */}

      <ModernSectionBackground
        variant="mesh-gradient-light"
        className="relative overflow-hidden"
      >
        <Section spacing="base" animate background="transparent">
          <Container size="xl">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              {/* Industries */}

              <ScrollReveal>
                <div>
                  <div className="flex items-center gap-2">
                    <Globe
                      className="h-4 w-4"
                      style={{ color: colors.brand.accent }}
                    />

                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: colors.brand.secondary }}
                    >
                      Industry Expertise
                    </span>
                  </div>

                  <h2
                    className="mt-3 text-xl font-bold sm:text-2xl"
                    style={{ color: colors.brand.primary }}
                  >
                    Industries We Serve
                  </h2>

                  <p className="mt-2 text-sm text-gray-600">
                    Analytics expertise across sectors.
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {industries.map((industry) => (
                      <motion.div
                        key={industry.name}
                        whileHover={{ y: -3 }}
                        className="rounded-[16px] border border-gray-200 bg-white/85 p-4 shadow-[0_10px_30px_rgba(0,1,49,0.04)]"
                      >
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-lg"
                          style={{
                            color: colors.brand.secondary,
                            backgroundColor: `${colors.brand.secondary}0D`,
                          }}
                        >
                          {industry.icon}
                        </div>

                        <p className="mt-3 text-[10px] font-bold leading-relaxed text-gray-700">
                          {industry.name}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* FAQ */}

              <ScrollReveal delay={0.08}>
                <div>
                  <div className="flex items-center gap-2">
                    <Eye
                      className="h-4 w-4"
                      style={{ color: colors.brand.accent }}
                    />

                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: colors.brand.secondary }}
                    >
                      Common Questions
                    </span>
                  </div>

                  <h2
                    className="mt-3 text-xl font-bold sm:text-2xl"
                    style={{ color: colors.brand.primary }}
                  >
                    Frequently Asked Questions
                  </h2>

                  <p className="mt-2 text-sm text-gray-600">
                    Common questions about analytics and optimization.
                  </p>

                  <div className="mt-5 rounded-[20px] border border-gray-200 bg-white/85 p-3 shadow-[0_14px_40px_rgba(0,1,49,0.05)]">
                    <Accordion items={faqs} />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          7. FINAL CTA
          ============================================ */}

      <ModernSectionBackground
        variant="gradient-tech"
        className="relative overflow-hidden"
      >
        <section className="relative isolate overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[#080912]"
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=88"
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/94 via-[#080912]/80 to-[#080912]/90" />
          </div>

          <Container size="lg">
            <ScrollReveal>
              <div className="rounded-[24px] border border-white/20 bg-black/25 px-5 py-8 text-center shadow-[0_28px_80px_rgba(0,0,0,0.30)] backdrop-blur-xl sm:px-8 sm:py-10">
                <div
                  className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08]"
                  style={{ color: colors.brand.accent }}
                >
                  <BarChart3 className="h-5 w-5" />
                </div>

                <h2 className="mt-5 text-2xl font-bold text-white">
                  Ready to Optimize Performance?
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-[1.75] text-white/55">
                  Let's implement analytics and optimization programs that drive
                  measurable growth.
                </p>

                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <MagneticButton strength={0.25}>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold text-white shadow-xl transition-all hover:-translate-y-0.5"
                      style={{ background: gradients.primary }}
                    >
                      Start Optimizing Today

                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </MagneticButton>

                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-black/20 px-6 py-3 text-sm font-bold text-white backdrop-blur-xl transition-all hover:bg-white/10"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      </ModernSectionBackground>
    </PageBackground>
  );
}

export default AnalyticsOptimizationPage;
