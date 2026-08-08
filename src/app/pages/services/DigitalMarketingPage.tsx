/**
 * ============================================
 * DIGITAL MARKETING SERVICE PAGE
 * AdvantEdge
 * ============================================
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';

import {
  ArrowRight,
  Rocket,
  CheckCircle2,
  TrendingUp,
  Users,
  BarChart3,
  Target,
  Zap,
  Search,
  Share2,
  Mail,
  Globe,
  Eye,
  MonitorSmartphone,
  Layers,
} from 'lucide-react';

import { Section, Container } from '../../components/primitives';
import { Accordion } from '../../components/Accordion';

import {
  ScrollReveal,
  StaggerContainer,
  staggerItemVariants,
} from '../../components/ScrollReveal';

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
    icon: <Search className="h-5 w-5" />,
    title: 'SEO & SEM',
    description:
      'Search engine optimization and paid search campaigns that drive qualified traffic and conversions.',
  },
  {
    icon: <Share2 className="h-5 w-5" />,
    title: 'Social Media',
    description:
      'Strategic social media marketing across all major platforms with content and community management.',
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: 'PPC Advertising',
    description:
      'Performance-driven paid advertising campaigns optimized for ROI across Google, social, and display.',
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: 'Email Marketing',
    description:
      'Email strategy, automation, and campaigns that nurture leads and drive customer engagement.',
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Analytics & Tracking',
    description:
      'Comprehensive tracking, attribution, and analytics to measure and optimize campaign performance.',
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Conversion Optimization',
    description:
      'CRO strategies and A/B testing to maximize conversions and revenue from existing traffic.',
  },
];

const processSteps = [
  {
    id: 'step-1',
    number: '01',
    title: 'Audit & Analysis',
    description: 'Comprehensive digital presence audit',
    details: [
      'Website and SEO analysis',
      'Competitor research',
      'Audience insights',
      'Channel performance review',
    ],
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Strategy Development',
    description: 'Create integrated digital marketing plan',
    details: [
      'Channel strategy and mix',
      'Campaign planning',
      'Budget allocation',
      'KPI definition',
    ],
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Campaign Execution',
    description: 'Launch and manage campaigns across channels',
    details: [
      'Campaign setup and launch',
      'Content creation',
      'Ad creative development',
      'Multi-channel coordination',
    ],
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Optimization',
    description: 'Continuous testing and performance improvement',
    details: [
      'Performance monitoring',
      'A/B testing',
      'Budget optimization',
      'Strategy refinement',
    ],
  },
];

const benefits = [
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: 'Measurable ROI',
    description: 'Track every dollar and optimize for maximum return',
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: 'Precision Targeting',
    description: 'Reach the right audience at the right time',
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Rapid Scaling',
    description: 'Scale successful campaigns quickly and efficiently',
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Data-Driven',
    description: 'Decisions based on analytics and insights',
  },
];

const deliverables = [
  {
    id: 'del-1',
    title: 'Digital Marketing Strategy',
    icon: (
      <Target
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Comprehensive digital strategy covering all channels, audience targeting, campaign plans, and success metrics.',
  },
  {
    id: 'del-2',
    title: 'Campaign Management',
    icon: (
      <Rocket
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Ongoing campaign setup, execution, monitoring, and optimization across SEO, PPC, social, email, and other channels.',
  },
  {
    id: 'del-3',
    title: 'Performance Reports',
    icon: (
      <BarChart3
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Regular reporting on traffic, conversions, ROI, and key metrics with insights and recommendations for improvement.',
  },
  {
    id: 'del-4',
    title: 'Creative Assets',
    icon: (
      <MonitorSmartphone
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Ad creative, landing pages, email templates, social content, and all assets needed for campaign success.',
  },
];

const channels = [
  {
    id: 'ch-1',
    title: 'Search Engine Optimization',
    icon: (
      <Search
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Technical SEO, on-page optimization, content strategy, link building, and local SEO to improve organic rankings and traffic.',
  },
  {
    id: 'ch-2',
    title: 'Paid Search (Google Ads)',
    icon: (
      <Target
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Google Ads campaigns including search, display, shopping, and video ads optimized for conversions and ROI.',
  },
  {
    id: 'ch-3',
    title: 'Social Media Marketing',
    icon: (
      <Share2
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Facebook, Instagram, LinkedIn, Twitter/X, TikTok strategies with organic and paid campaigns tailored to each platform.',
  },
  {
    id: 'ch-4',
    title: 'Email Marketing',
    icon: (
      <Mail
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Email campaigns, automation workflows, list segmentation, and personalization to nurture leads and drive conversions.',
  },
];

const industries = [
  { name: 'E-commerce', icon: <Globe className="h-4 w-4" /> },
  { name: 'SaaS & Technology', icon: <Rocket className="h-4 w-4" /> },
  { name: 'B2B Services', icon: <Users className="h-4 w-4" /> },
  { name: 'Healthcare', icon: <Target className="h-4 w-4" /> },
  { name: 'Finance', icon: <BarChart3 className="h-4 w-4" /> },
  { name: 'Education', icon: <Search className="h-4 w-4" /> },
];

const faqs = [
  {
    id: 'faq-1',
    title: 'How quickly will we see results?',
    icon: (
      <TrendingUp
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'PPC and social ads show results immediately. SEO takes 3-6 months for significant improvement. We provide quick wins while building long-term performance.',
  },
  {
    id: 'faq-2',
    title: "What's the minimum budget needed?",
    icon: (
      <BarChart3
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'We work with businesses at all stages. Minimum recommended spend is $3,000-5,000/month for meaningful results across multiple channels.',
  },
  {
    id: 'faq-3',
    title: 'Do you provide reporting?',
    icon: (
      <Eye
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Yes. Comprehensive monthly reports with traffic, conversions, ROI, and actionable insights. Plus real-time dashboard access anytime.',
  },
];

/* ============================================
   PAGE
   ============================================ */

export function DigitalMarketingPage() {
  return (
    <PageBackground>
      <PageSEO
        title={SERVICE_SEO.digitalMarketing.title}
        description={SERVICE_SEO.digitalMarketing.description}
        keywords={SERVICE_SEO.digitalMarketing.keywords}
        ogImage={SERVICE_SEO.digitalMarketing.ogImage}
        path="/services/digital-marketing"
        serviceSchema={SERVICE_SEO.digitalMarketing.schema}
      />

      {/* ============================================
          1. HERO
          ============================================ */}

      <section className="relative isolate overflow-hidden bg-[#080912]">
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

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#080912]/96 via-[#080912]/72 to-[#080912]/36" />

          <div className="absolute inset-0 bg-gradient-to-b from-[#080912]/35 via-transparent to-[#080912]/96" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_18%,rgba(255,255,255,0.15),transparent_38%)]" />

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

              {/* Left */}

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
                    <MonitorSmartphone className="h-3.5 w-3.5" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                      Integrated Marketing
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1,
                  }}
                  className="mt-5 max-w-3xl text-3xl font-bold leading-[1.07] tracking-[-0.04em] text-white sm:text-4xl lg:text-[48px]"
                >
                  Digital Marketing
                  <span className="mt-1 block text-white/65">
                    Built Around Measurable Growth.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.18,
                  }}
                  className="mt-5 max-w-2xl text-sm leading-[1.8] text-white/70 sm:text-base"
                >
                  Performance-driven digital marketing strategies that
                  connect SEO, paid media, social, email, analytics, and
                  conversion optimization into one integrated growth system.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.28 }}
                  className="mt-4 text-sm font-bold text-white"
                >
                  Every channel aligned to traffic, leads, conversions, and revenue.
                </motion.p>

                {/* CTA 1 */}

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32 }}
                  className="mt-7"
                >
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(0,0,170,0.28)] transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: gradients.primary }}
                  >
                    Discuss Your Growth Goals

                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>

                <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2">
                  {[
                    'SEO',
                    'Paid Media',
                    'Social',
                    'Automation',
                    'Analytics',
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

              {/* Right */}

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
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
                          Channel 0{index + 1}
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

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 }}
              className="mt-8 overflow-hidden rounded-2xl border border-white/20 bg-black/20 backdrop-blur-xl"
            >
              <div className="grid grid-cols-3 divide-x divide-white/15">
                {[
                  ['245%', 'Avg. Traffic Lift'],
                  ['180%', 'Lead Growth'],
                  ['4.2x', 'Avg. ROI'],
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
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ============================================
          2. DIGITAL GROWTH + BENEFITS
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
                        Digital Growth
                      </span>
                    </div>

                    <h2
                      className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-0.03em] sm:text-3xl"
                      style={{ color: colors.brand.primary }}
                    >
                      Connected Channels.
                      <span className="mt-1 block text-gray-500">
                        One Performance System.
                      </span>
                    </h2>
                  </div>

                  <p className="text-sm leading-[1.8] text-gray-600 sm:text-base">
                    In the digital age, your online presence is your
                    business. We connect SEO, PPC, social media, email,
                    analytics, and conversion optimization around common
                    business objectives instead of managing channels in isolation.
                  </p>
                </div>
              </ScrollReveal>

              <StaggerContainer className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit.title}
                    variants={staggerItemVariants}
                    whileHover={{ y: -3 }}
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
          3. DIGITAL MARKETING SERVICES
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
                        Our Capabilities
                      </span>
                    </div>

                    <h2
                      className="mt-3 text-2xl font-bold tracking-[-0.03em] sm:text-3xl"
                      style={{ color: colors.brand.primary }}
                    >
                      Digital Marketing Services
                    </h2>
                  </div>

                  <p className="max-w-lg text-sm leading-relaxed text-gray-600 lg:text-right">
                    Comprehensive digital capabilities designed to attract,
                    engage, convert, and retain customers.
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
                        {String(index + 1).padStart(2, '0')}
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
          4. PROCESS — DARK
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
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#080912]"
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=88"
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/84 via-[#080912]/76 to-[#080912]/92" />

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
                        Our Process
                      </span>
                    </div>

                    <h2 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">
                      Digital Marketing Methodology
                    </h2>
                  </div>

                  <p className="max-w-lg text-sm leading-relaxed text-white/50 lg:text-right">
                    A four-stage framework connecting insight, execution,
                    measurement, and continuous performance improvement.
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

                    <p className="mt-2 text-[10px] leading-[1.65] text-white/50">
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
          5. DELIVERABLES + CHANNELS + RESULTS
          ============================================ */}

      <ModernSectionBackground
        variant="glass-blur"
        className="relative overflow-hidden"
      >
        <Section spacing="base" animate background="transparent">
          <Container size="xl">
            <div className="mx-auto max-w-7xl">

              <div className="grid gap-5 lg:grid-cols-2">

                {/* Deliverables */}

                <ScrollReveal>
                  <div className="h-full rounded-[22px] border border-gray-200 bg-white/85 p-5 shadow-[0_16px_50px_rgba(0,1,49,0.06)] backdrop-blur-xl sm:p-6">
                    <div className="flex items-center gap-2">
                      <BarChart3
                        className="h-4 w-4"
                        style={{ color: colors.brand.accent }}
                      />

                      <span
                        className="text-[9px] font-bold uppercase tracking-[0.16em]"
                        style={{ color: colors.brand.secondary }}
                      >
                        Deliverables
                      </span>
                    </div>

                    <h2
                      className="mt-3 text-xl font-bold sm:text-2xl"
                      style={{ color: colors.brand.primary }}
                    >
                      What You Receive
                    </h2>

                    <p className="mt-2 text-sm text-gray-600">
                      Strategy, execution, creative assets, and measurable reporting.
                    </p>

                    <div className="mt-5">
                      <Accordion items={deliverables} />
                    </div>
                  </div>
                </ScrollReveal>

                {/* Channels */}

                <ScrollReveal delay={0.06}>
                  <div className="h-full rounded-[22px] border border-gray-200 bg-white/85 p-5 shadow-[0_16px_50px_rgba(0,1,49,0.06)] backdrop-blur-xl sm:p-6">
                    <div className="flex items-center gap-2">
                      <Globe
                        className="h-4 w-4"
                        style={{ color: colors.brand.accent }}
                      />

                      <span
                        className="text-[9px] font-bold uppercase tracking-[0.16em]"
                        style={{ color: colors.brand.secondary }}
                      >
                        Channel Execution
                      </span>
                    </div>

                    <h2
                      className="mt-3 text-xl font-bold sm:text-2xl"
                      style={{ color: colors.brand.primary }}
                    >
                      Digital Marketing Channels
                    </h2>

                    <p className="mt-2 text-sm text-gray-600">
                      Multi-channel strategies designed around customer journeys.
                    </p>

                    <div className="mt-5">
                      <Accordion items={channels} />
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Results */}

              <ScrollReveal delay={0.1}>
                <div className="relative mt-5 overflow-hidden rounded-[22px] bg-[#080912] p-5 shadow-[0_22px_65px_rgba(0,1,49,0.16)] sm:p-6">
                  <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#ffb300]/10 blur-[90px]" />

                  <div className="relative grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
                    <div>
                      <div className="flex items-center gap-2">
                        <TrendingUp
                          className="h-4 w-4"
                          style={{ color: colors.brand.accent }}
                        />

                        <span
                          className="text-[9px] font-bold uppercase tracking-[0.16em]"
                          style={{ color: colors.brand.accent }}
                        >
                          Campaign Performance
                        </span>
                      </div>

                      <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                        Measurable Digital Growth
                      </h2>

                      <p className="mt-2 text-[11px] leading-[1.7] text-white/50">
                        B2B SaaS company achieved significant growth through
                        integrated SEO, PPC, and social media strategy.
                      </p>
                    </div>

                    <div className="grid grid-cols-3 divide-x divide-white/15 overflow-hidden rounded-xl border border-white/15 bg-white/[0.05]">
                      {[
                        ['285%', 'Traffic Increase'],
                        ['4.7x', 'ROAS'],
                        ['156%', 'Lead Growth'],
                      ].map(([value, label]) => (
                        <div
                          key={label}
                          className="px-2 py-5 text-center"
                        >
                          <p
                            className="text-xl font-bold sm:text-2xl"
                            style={{ color: colors.brand.accent }}
                          >
                            {value}
                          </p>

                          <p className="mt-1 text-[8px] leading-relaxed text-white/45">
                            {label}
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
                    Digital marketing expertise across diverse business models.
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

              <ScrollReveal delay={0.07}>
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
                    Common questions about digital marketing services.
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
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=88"
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/94 via-[#080912]/82 to-[#080912]/90" />
          </div>

          <Container size="lg">
            <ScrollReveal>
              <div className="rounded-[24px] border border-white/20 bg-black/25 px-5 py-8 text-center shadow-[0_28px_80px_rgba(0,0,0,0.30)] backdrop-blur-xl sm:px-8 sm:py-10">
                <div
                  className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08]"
                  style={{ color: colors.brand.accent }}
                >
                  <Rocket className="h-5 w-5" />
                </div>

                <h2 className="mt-5 text-2xl font-bold text-white">
                  Ready to Accelerate Digital Growth?
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-[1.75] text-white/55">
                  Build an integrated digital marketing system designed around
                  measurable traffic, qualified leads, conversions, and revenue.
                </p>

                {/* CTA 2 */}

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: gradients.primary }}
                  >
                    Start Your Growth Strategy

                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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

export default DigitalMarketingPage;
