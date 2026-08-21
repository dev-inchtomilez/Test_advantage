/**
 * ============================================
 * ANALYTICS & OPTIMIZATION SERVICE PAGE
 * AdvantEdge
 * ============================================
 * Compact enterprise UI
 * Parent Services theme
 * Reduced CTA density
 * ============================================
 */

import type { ReactNode } from 'react';
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

import {
  Section,
  Container,
} from '../../components/primitives';

import {
  ScrollReveal,
  StaggerContainer,
  staggerItemVariants,
} from '../../components/ScrollReveal';

import { MagneticButton } from '../../components/MagneticButton';

import {
  colors,
  gradients,
} from '../../../styles/design-tokens';

import { PageBackground } from '../../components/layout';
import { ModernSectionBackground } from '../../components/ModernSectionBackground';

import { PageSEO } from '../../components/seo';
import { SERVICE_SEO } from '../../utils/seo-config';

/* ============================================
   SERVICES
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

/* ============================================
   PROCESS
   ============================================ */

const processSteps = [
  {
    id: 'step-1',
    number: '01',
    title: 'Analytics Audit',
    description: 'Assess current tracking and identify gaps',
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
    description: 'Set up comprehensive tracking and analytics',
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
    description: 'Analyze data and extract actionable insights',
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
    description: 'Test, refine, and continuously improve',
    details: [
      'A/B testing',
      'Multivariate testing',
      'Implementation support',
      'Performance monitoring',
    ],
  },
];

/* ============================================
   BENEFITS
   ============================================ */

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

/* ============================================
   DELIVERABLES
   ============================================ */

const deliverables = [
  {
    id: 'del-1',
    title: 'Analytics Setup',
    icon: <Database className="h-5 w-5" />,
    content:
      'Complete analytics implementation including GA4, conversion tracking, event tracking, and integration with all marketing platforms.',
  },
  {
    id: 'del-2',
    title: 'Custom Dashboards',
    icon: <BarChart3 className="h-5 w-5" />,
    content:
      'Tailored reporting dashboards with key metrics, KPIs, and visualizations aligned with your business objectives.',
  },
  {
    id: 'del-3',
    title: 'Performance Reports',
    icon: <FileText className="h-5 w-5" />,
    content:
      'Monthly analytics reports with insights, trends, benchmarks, and actionable recommendations for improvement.',
  },
  {
    id: 'del-4',
    title: 'Optimization Tests',
    icon: <Target className="h-5 w-5" />,
    content:
      'Ongoing A/B and multivariate testing programs to optimize conversions, user experience, and campaign performance.',
  },
];

/* ============================================
   SPECIALIST ANALYTICS CAPABILITIES
   ============================================ */

const analyticsServices = [
  {
    id: 'an-1',
    title: 'Google Analytics 4',
    icon: <BarChart3 className="h-5 w-5" />,
    content:
      'Complete GA4 setup, migration, event tracking, conversion tracking, enhanced ecommerce, and custom reporting configuration.',
  },
  {
    id: 'an-2',
    title: 'Tag Management',
    icon: <Layers className="h-5 w-5" />,
    content:
      'Google Tag Manager implementation and management for tracking codes, pixels, and marketing tags across your website.',
  },
  {
    id: 'an-3',
    title: 'Heat Mapping & Session Recording',
    icon: <Eye className="h-5 w-5" />,
    content:
      'User behavior analysis through heat maps, scroll maps, click tracking, and session recordings to understand UX issues.',
  },
  {
    id: 'an-4',
    title: 'Marketing Dashboards',
    icon: <PieChart className="h-5 w-5" />,
    content:
      'Custom dashboards in Looker Studio, Tableau, or Power BI integrating data from all marketing channels for unified reporting.',
  },
];

/* ============================================
   INDUSTRIES
   ============================================ */

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

/* ============================================
   FAQ
   ============================================ */

const faqs = [
  {
    id: 'faq-1',
    title: 'What analytics platforms do you work with?',
    content:
      'We work with Google Analytics 4, Adobe Analytics, Mixpanel, Amplitude, and all major marketing platforms including social, email, and advertising.',
  },
  {
    id: 'faq-2',
    title: 'How long until we see optimization results?',
    content:
      'Initial insights are immediate once tracking is implemented. Optimization results typically show within 4-8 weeks of testing and refinement.',
  },
  {
    id: 'faq-3',
    title: 'Do you provide ongoing support?',
    content:
      'Yes. We offer ongoing analytics management, monthly reporting, continuous optimization, and strategic recommendations.',
  },
];

/* ============================================
   SECTION LABEL
   ============================================ */

function SectionLabel({
  icon,
  children,
  dark = false,
}: {
  icon: ReactNode;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={[
        'inline-flex items-center gap-2 rounded-full border px-3.5 py-2 backdrop-blur-xl',
        dark
          ? 'border-white/15 bg-white/[0.055]'
          : 'border-gray-200 bg-white/75',
      ].join(' ')}
    >
      <span style={{ color: colors.brand.accent }}>
        {icon}
      </span>

      <span
        className={[
          'text-[9px] font-bold uppercase tracking-[0.17em]',
          dark ? 'text-white/72' : '',
        ].join(' ')}
        style={
          dark
            ? undefined
            : { color: colors.brand.primary }
        }
      >
        {children}
      </span>
    </div>
  );
}

/* ============================================
   PAGE
   ============================================ */

export function AnalyticsOptimizationPage() {
  return (
    <PageBackground>

      {/* ============================================
          SEO
          ============================================ */}

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
          ============================================ */}

      <section className="relative isolate overflow-hidden bg-[#080912]">

        {/* Background */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-30"
        >
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=88"
            alt=""
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Treatment */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20"
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#060711]/98 via-[#080912]/86 to-[#080912]/45" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#080912]/96" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.14),transparent_38%)]" />

          <div
            className="absolute -left-48 top-[8%] h-[500px] w-[500px] rounded-full opacity-[0.10] blur-[160px]"
            style={{
              backgroundColor: colors.brand.secondary,
            }}
          />

          <div
            className="absolute -right-44 bottom-[-130px] h-[470px] w-[470px] rounded-full opacity-[0.09] blur-[155px]"
            style={{
              backgroundColor: colors.brand.accent,
            }}
          />

          <div
            className="absolute inset-0 opacity-[0.032]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '78px 78px',
            }}
          />
        </div>

        <Container size="xl">
          <div className="mx-auto flex min-h-[670px] max-w-7xl flex-col justify-center py-14 sm:min-h-[690px] lg:min-h-[710px] lg:py-16">

            <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">

              {/* HERO COPY */}

              <div className="max-w-3xl">

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55 }}
                >
                  <SectionLabel
                    dark
                    icon={<BarChart3 className="h-3.5 w-3.5" />}
                  >
                    Analytics & Optimization
                  </SectionLabel>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08,
                    duration: 0.55,
                  }}
                  className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em]"
                  style={{
                    color: colors.brand.accent,
                  }}
                >
                  Measure · Understand · Optimize · Grow
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.12,
                    duration: 0.68,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-3 max-w-3xl text-3xl font-bold leading-[1.05] tracking-[-0.045em] text-white sm:text-4xl lg:text-[46px]"
                >
                  Data-Driven Marketing
                  <span
                    className="block"
                    style={{
                      color: colors.brand.accent,
                    }}
                  >
                    Excellence
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.65,
                  }}
                  className="mt-5 max-w-2xl"
                >
                  <p className="text-sm font-semibold leading-[1.7] text-white/88">
                    Turn data into actionable insights and measurable growth.
                  </p>

                  <p className="mt-3 max-w-xl text-sm leading-[1.8] text-white/58 sm:text-[15px]">
                    Comprehensive analytics, conversion optimization, and
                    performance measurement that drives continuous improvement
                    and maximum ROI.
                  </p>
                </motion.div>

                {/* CTA 1 */}

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.32,
                    duration: 0.55,
                  }}
                  className="mt-7"
                >
                  <MagneticButton strength={0.25}>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold text-white shadow-[0_16px_42px_rgba(0,0,170,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_52px_rgba(0,0,170,0.40)]"
                      style={{
                        background: gradients.primary,
                      }}
                    >
                      Start Optimizing

                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </MagneticButton>
                </motion.div>

                {/* SYSTEM PATH */}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.42,
                  }}
                  className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2"
                >
                  {[
                    'Tracking',
                    'Analysis',
                    'Insights',
                    'Testing',
                    'Growth',
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4"
                    >
                      <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/38">
                        {item}
                      </span>

                      {index < 4 && (
                        <ArrowRight
                          className="hidden h-3 w-3 sm:block"
                          style={{
                            color: colors.brand.accent,
                          }}
                        />
                      )}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* ============================================
                  ANALYTICS COMMAND PANEL
                  ============================================ */}

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.72,
                  delay: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="relative overflow-hidden rounded-[24px] border border-white/16 bg-black/25 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.30)] backdrop-blur-2xl sm:p-5">

                  <div
                    aria-hidden="true"
                    className="absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-[0.12] blur-[90px]"
                    style={{
                      backgroundColor: colors.brand.accent,
                    }}
                  />

                  <div className="relative">

                    <div className="flex items-center justify-between border-b border-white/10 pb-4">

                      <div>
                        <p
                          className="text-[8px] font-bold uppercase tracking-[0.18em]"
                          style={{
                            color: colors.brand.accent,
                          }}
                        >
                          Performance Intelligence
                        </p>

                        <p className="mt-1 text-xs font-semibold text-white/55">
                          Unified analytics and optimization
                        </p>
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07]">
                        <Activity
                          className="h-4 w-4"
                          style={{
                            color: colors.brand.accent,
                          }}
                        />
                      </div>
                    </div>

                    {/* capability cards */}

                    <div className="mt-4 space-y-3">

                      {keyServices.slice(0, 3).map((service, index) => (
                        <div
                          key={service.title}
                          className="group rounded-[16px] border border-white/12 bg-white/[0.055] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
                        >
                          <div className="flex items-start gap-3">

                            <div
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-black/20"
                              style={{
                                color: colors.brand.accent,
                              }}
                            >
                              {service.icon}
                            </div>

                            <div>
                              <p
                                className="text-[7px] font-bold uppercase tracking-[0.17em]"
                                style={{
                                  color: colors.brand.accent,
                                }}
                              >
                                CAPABILITY {String(index + 1).padStart(2, '0')}
                              </p>

                              <h2 className="mt-1 text-xs font-bold text-white">
                                {service.title}
                              </h2>

                              <p className="mt-1.5 text-[9px] leading-[1.6] text-white/45">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* source stats */}

                    <div className="mt-4 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-4">

                      {[
                        ['285%', 'Avg. ROI Lift'],
                        ['67%', 'Conv. Increase'],
                        ['99%', 'Data Accuracy'],
                      ].map(([value, label]) => (
                        <div
                          key={label}
                          className="px-2 text-center"
                        >
                          <p
                            className="text-base font-bold sm:text-lg"
                            style={{
                              color: colors.brand.accent,
                            }}
                          >
                            {value}
                          </p>

                          <p className="mt-1 text-[7px] leading-[1.4] text-white/35">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================
          2. BUSINESS VALUE + BENEFITS
          ============================================ */}

      <ModernSectionBackground
        variant="glass-blur"
        className="relative overflow-hidden"
      >
        <Section
          spacing="base"
          animate
          background="transparent"
        >
          <Container size="xl">

            <div className="mx-auto max-w-7xl">

              <ScrollReveal>
                <div className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">

                  <div>
                    <SectionLabel
                      icon={<TrendingUp className="h-3.5 w-3.5" />}
                    >
                      Performance Intelligence
                    </SectionLabel>

                    <h2
                      className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-0.035em] sm:text-3xl"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      Turn Performance Data
                      <span className="mt-1 block text-gray-500">
                        Into Better Decisions.
                      </span>
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

              <StaggerContainer className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                {benefits.map((benefit) => (
                  <motion.article
                    key={benefit.title}
                    variants={staggerItemVariants}
                    whileHover={{
                      y: -3,
                    }}
                    className="rounded-[18px] border border-gray-200 bg-white/88 p-5 shadow-[0_12px_36px_rgba(0,1,49,0.04)]"
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
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-[10px] leading-[1.7] text-gray-600">
                      {benefit.description}
                    </p>
                  </motion.article>
                ))}

              </StaggerContainer>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          3. CORE SERVICES
          ============================================ */}

      <ModernSectionBackground
        variant="mesh-gradient-light"
        className="relative overflow-hidden"
      >
        <Section
          spacing="base"
          animate
          background="transparent"
        >
          <Container size="xl">

            <div className="mx-auto max-w-7xl">

              <ScrollReveal>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

                  <div>
                    <SectionLabel
                      icon={<Layers className="h-3.5 w-3.5" />}
                    >
                      Our Services
                    </SectionLabel>

                    <h2
                      className="mt-5 text-2xl font-bold tracking-[-0.035em] sm:text-3xl"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      Analytics & Optimization Services
                    </h2>
                  </div>

                  <p className="max-w-xl text-sm leading-[1.75] text-gray-600 lg:text-right">
                    Complete analytics implementation and optimization
                    capabilities.
                  </p>
                </div>
              </ScrollReveal>

              <StaggerContainer className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                {keyServices.map((service, index) => (
                  <motion.article
                    key={service.title}
                    variants={staggerItemVariants}
                    whileHover={{
                      y: -4,
                    }}
                    className="group relative overflow-hidden rounded-[20px] border border-gray-200/90 bg-white/90 p-5 shadow-[0_14px_42px_rgba(0,1,49,0.045)] transition-shadow duration-300 hover:shadow-[0_20px_54px_rgba(0,1,49,0.08)]"
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

                      <span className="text-[8px] font-bold tracking-[0.16em] text-gray-300">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3
                      className="mt-4 text-sm font-bold"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      {service.title}
                    </h3>

                    <p className="mt-2 text-[11px] leading-[1.75] text-gray-600">
                      {service.description}
                    </p>

                    <div
                      className="mt-5 h-[2px] w-7 transition-all duration-500 group-hover:w-14"
                      style={{
                        background: gradients.primary,
                      }}
                    />
                  </motion.article>
                ))}

              </StaggerContainer>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          4. METHODOLOGY
          DARK
          ============================================ */}

      <section className="relative isolate overflow-hidden bg-[#080912] py-14 sm:py-16">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,0,170,0.16),transparent_34%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_76%,rgba(255,179,0,0.08),transparent_30%)]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
            }}
          />
        </div>

        <Container size="xl">

          <div className="mx-auto max-w-7xl">

            <ScrollReveal>
              <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">

                <div>
                  <SectionLabel
                    dark
                    icon={<Target className="h-3.5 w-3.5" />}
                  >
                    Our Process
                  </SectionLabel>

                  <h2 className="mt-5 text-2xl font-bold tracking-[-0.035em] text-white sm:text-3xl">
                    Analytics & Optimization Methodology
                  </h2>
                </div>

                <p className="max-w-2xl text-sm leading-[1.8] text-white/50 lg:justify-self-end">
                  A systematic 4-step approach to data-driven growth.
                </p>
              </div>
            </ScrollReveal>

            <div className="relative mt-9">

              <div
                aria-hidden="true"
                className="absolute left-0 right-0 top-[29px] hidden h-px lg:block"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent)',
                }}
              />

              <StaggerContainer className="grid gap-4 lg:grid-cols-4">

                {processSteps.map((step) => (
                  <motion.article
                    key={step.id}
                    variants={staggerItemVariants}
                    whileHover={{
                      y: -4,
                    }}
                    className="group relative"
                  >
                    <div
                      className="relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-[16px] border border-white/18 text-sm font-bold text-white shadow-[0_12px_34px_rgba(0,0,0,0.25)]"
                      style={{
                        background: gradients.primary,
                      }}
                    >
                      {step.number}
                    </div>

                    <div className="mt-4 rounded-[20px] border border-white/12 bg-white/[0.055] p-5 backdrop-blur-xl">

                      <h3 className="text-sm font-bold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-2 min-h-[42px] text-[10px] leading-[1.65] text-white/48">
                        {step.description}
                      </p>

                      <div className="my-4 h-px bg-white/10" />

                      <ul className="space-y-2">

                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-2 text-[10px] leading-[1.6] text-white/58"
                          >
                            <CheckCircle2
                              className="mt-0.5 h-3.5 w-3.5 shrink-0"
                              style={{
                                color: colors.brand.accent,
                              }}
                            />

                            <span>{detail}</span>
                          </li>
                        ))}

                      </ul>
                    </div>
                  </motion.article>
                ))}

              </StaggerContainer>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================
          5. DELIVERABLES + ANALYTICS CAPABILITIES
          ============================================ */}

      <ModernSectionBackground
        variant="glass-blur"
        className="relative overflow-hidden"
      >
        <Section
          spacing="base"
          animate
          background="transparent"
        >
          <Container size="xl">

            <div className="mx-auto max-w-7xl">

              <ScrollReveal>
                <div className="grid gap-6 lg:grid-cols-2">

                  {/* DELIVERABLES */}

                  <div className="rounded-[24px] border border-gray-200 bg-white/90 p-5 shadow-[0_18px_52px_rgba(0,1,49,0.05)] sm:p-6">

                    <SectionLabel
                      icon={<FileText className="h-3.5 w-3.5" />}
                    >
                      Deliverables
                    </SectionLabel>

                    <h2
                      className="mt-5 text-xl font-bold tracking-[-0.03em] sm:text-2xl"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      What You Receive
                    </h2>

                    <p className="mt-2 text-xs leading-[1.7] text-gray-500">
                      Comprehensive analytics and optimization services.
                    </p>

                    <div className="mt-6 space-y-3">

                      {deliverables.map((item, index) => (
                        <div
                          key={item.id}
                          className="group rounded-[16px] border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-gray-300 hover:shadow-[0_10px_30px_rgba(0,1,49,0.045)]"
                        >
                          <div className="flex items-start gap-3">

                            <div
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                              style={{
                                color: colors.brand.secondary,
                                backgroundColor: `${colors.brand.secondary}0D`,
                              }}
                            >
                              {item.icon}
                            </div>

                            <div className="min-w-0 flex-1">

                              <div className="flex items-start justify-between gap-3">

                                <h3
                                  className="text-xs font-bold"
                                  style={{
                                    color: colors.brand.primary,
                                  }}
                                >
                                  {item.title}
                                </h3>

                                <span className="text-[8px] font-bold text-gray-300">
                                  {String(index + 1).padStart(2, '0')}
                                </span>
                              </div>

                              <p className="mt-2 text-[10px] leading-[1.7] text-gray-600">
                                {item.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>

                  {/* SPECIALIST CAPABILITIES */}

                  <div className="rounded-[24px] border border-gray-200 bg-[#080912] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-6">

                    <SectionLabel
                      dark
                      icon={<Database className="h-3.5 w-3.5" />}
                    >
                      Analytics Services
                    </SectionLabel>

                    <h2 className="mt-5 text-xl font-bold tracking-[-0.03em] text-white sm:text-2xl">
                      Analytics Capabilities
                    </h2>

                    <p className="mt-2 text-xs leading-[1.7] text-white/44">
                      Full-service analytics implementation and management.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">

                      {analyticsServices.map((item, index) => (
                        <div
                          key={item.id}
                          className="group rounded-[16px] border border-white/12 bg-white/[0.055] p-4 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.075]"
                        >
                          <div className="flex items-center justify-between">

                            <div
                              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-black/20"
                              style={{
                                color: colors.brand.accent,
                              }}
                            >
                              {item.icon}
                            </div>

                            <span className="text-[8px] font-bold text-white/20">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>

                          <h3 className="mt-4 text-xs font-bold text-white">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-[9px] leading-[1.7] text-white/45">
                            {item.content}
                          </p>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          6. RESULTS + INDUSTRIES
          ============================================ */}

      <ModernSectionBackground
        variant="mesh-gradient-light"
        className="relative overflow-hidden"
      >
        <Section
          spacing="base"
          animate
          background="transparent"
        >
          <Container size="xl">

            <div className="mx-auto max-w-7xl">

              {/* RESULTS */}

              <ScrollReveal>
                <div className="relative overflow-hidden rounded-[24px] bg-[#080912] p-5 shadow-[0_22px_65px_rgba(0,1,49,0.15)] sm:p-6 lg:p-7">

                  <div
                    aria-hidden="true"
                    className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#ffb300]/10 blur-[90px]"
                  />

                  <div className="relative grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

                    <div>
                      <div className="flex items-center gap-2">

                        <TrendingUp
                          className="h-4 w-4"
                          style={{
                            color: colors.brand.accent,
                          }}
                        />

                        <span
                          className="text-[9px] font-bold uppercase tracking-[0.16em]"
                          style={{
                            color: colors.brand.accent,
                          }}
                        >
                          Optimization Results
                        </span>
                      </div>

                      <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                        Measurable Performance Improvement
                      </h2>

                      <p className="mt-3 text-[11px] leading-[1.75] text-white/48">
                        E-commerce company achieved dramatic revenue growth
                        through systematic conversion rate optimization program.
                      </p>
                    </div>

                    <div className="grid grid-cols-3 divide-x divide-white/12 overflow-hidden rounded-[18px] border border-white/12 bg-white/[0.045]">

                      {[
                        {
                          value: '183%',
                          label: 'Conversion Increase',
                        },
                        {
                          value: '$2.4M',
                          label: 'Revenue Impact',
                        },
                        {
                          value: '34%',
                          label: 'Cost Reduction',
                        },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="px-2 py-5 text-center sm:px-4"
                        >
                          <p
                            className="text-xl font-bold sm:text-2xl"
                            style={{
                              color: colors.brand.accent,
                            }}
                          >
                            {stat.value}
                          </p>

                          <p className="mt-1 text-[8px] leading-[1.45] text-white/42">
                            {stat.label}
                          </p>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* INDUSTRIES */}

              <ScrollReveal delay={0.08}>
                <div className="mt-6 rounded-[22px] border border-gray-200 bg-white/78 p-5 shadow-[0_14px_44px_rgba(0,1,49,0.045)] backdrop-blur-xl sm:p-6">

                  <div className="flex flex-col gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                      <p
                        className="text-[9px] font-bold uppercase tracking-[0.17em]"
                        style={{
                          color: colors.brand.secondary,
                        }}
                      >
                        Industry Expertise
                      </p>

                      <h3
                        className="mt-1.5 text-base font-bold"
                        style={{
                          color: colors.brand.primary,
                        }}
                      >
                        Industries We Serve
                      </h3>
                    </div>

                    <p className="max-w-md text-[11px] leading-[1.7] text-gray-500 sm:text-right">
                      Analytics expertise across sectors.
                    </p>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">

                    {industries.map((industry) => (
                      <motion.div
                        key={industry.name}
                        whileHover={{
                          y: -2,
                        }}
                        className="rounded-xl border border-gray-200/80 bg-white/82 px-3 py-4 text-center"
                      >
                        <div
                          className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg"
                          style={{
                            color: colors.brand.secondary,
                            backgroundColor: `${colors.brand.secondary}0D`,
                          }}
                        >
                          {industry.icon}
                        </div>

                        <p className="mt-2 text-[9px] font-semibold text-gray-600">
                          {industry.name}
                        </p>
                      </motion.div>
                    ))}

                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          7. FAQ
          ============================================ */}

      <ModernSectionBackground
        variant="gradient-soft"
        className="relative overflow-hidden"
      >
        <Section
          spacing="base"
          animate
          background="transparent"
        >
          <Container size="lg">

            <div className="mx-auto max-w-5xl">

              <ScrollReveal>
                <div className="mx-auto max-w-3xl text-center">

                  <SectionLabel
                    icon={<Eye className="h-3.5 w-3.5" />}
                  >
                    Common Questions
                  </SectionLabel>

                  <h2
                    className="mt-5 text-2xl font-bold tracking-[-0.035em] sm:text-3xl"
                    style={{
                      color: colors.brand.primary,
                    }}
                  >
                    Frequently Asked Questions
                  </h2>

                  <p className="mx-auto mt-3 max-w-xl text-sm leading-[1.75] text-gray-600">
                    Common questions about analytics and optimization.
                  </p>
                </div>
              </ScrollReveal>

              <StaggerContainer className="mt-8 space-y-3">

                {faqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    variants={staggerItemVariants}
                    className="rounded-[18px] border border-gray-200 bg-white/88 p-5 shadow-[0_10px_32px_rgba(0,1,49,0.035)] backdrop-blur-xl sm:p-6"
                  >
                    <div className="flex items-start gap-4">

                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[9px] font-bold"
                        style={{
                          color: colors.brand.secondary,
                          backgroundColor: `${colors.brand.secondary}0D`,
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <div>
                        <h3
                          className="text-sm font-bold"
                          style={{
                            color: colors.brand.primary,
                          }}
                        >
                          {faq.title}
                        </h3>

                        <p className="mt-2 text-[11px] leading-[1.75] text-gray-600">
                          {faq.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

              </StaggerContainer>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          8. FINAL CTA
          ============================================ */}

      <section className="relative isolate overflow-hidden bg-[#080912] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),transparent_40%)]" />

          <div
            className="absolute -left-40 bottom-[-160px] h-[420px] w-[420px] rounded-full opacity-[0.10] blur-[140px]"
            style={{
              backgroundColor: colors.brand.secondary,
            }}
          />

          <div
            className="absolute -right-36 top-[-120px] h-[380px] w-[380px] rounded-full opacity-[0.08] blur-[130px]"
            style={{
              backgroundColor: colors.brand.accent,
            }}
          />
        </div>

        <Container size="lg">

          <ScrollReveal>
            <div className="mx-auto max-w-4xl rounded-[26px] border border-white/15 bg-white/[0.055] px-5 py-8 text-center shadow-[0_30px_85px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-8 sm:py-10">

              <div
                className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-white/14 bg-white/[0.07]"
                style={{
                  color: colors.brand.accent,
                }}
              >
                <BarChart3 className="h-5 w-5" />
              </div>

              <p
                className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: colors.brand.accent,
                }}
              >
                Analytics & Optimization
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-[-0.035em] text-white sm:text-3xl">
                Ready to Optimize Performance?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-[1.8] text-white/52">
                Let's implement analytics and optimization programs that drive
                measurable growth.
              </p>

              {/* CTA 2 */}

              <div className="mt-7 flex justify-center">

                <MagneticButton strength={0.25}>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold text-white shadow-[0_16px_42px_rgba(0,0,170,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_52px_rgba(0,0,170,0.40)]"
                    style={{
                      background: gradients.primary,
                    }}
                  >
                    Start Optimizing Today

                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </MagneticButton>

              </div>
            </div>
          </ScrollReveal>

        </Container>
      </section>
    </PageBackground>
  );
}

export default AnalyticsOptimizationPage;
