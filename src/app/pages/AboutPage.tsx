/**
 * ============================================
 * ABOUT US PAGE - Complete Premium Rebuild
 * ============================================
 * Industry-leading About page with comprehensive
 * images, premium design, and executive standards
 * ============================================
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Target, 
  Eye,
  Heart,
  Shield,
  TrendingUp,
  Users,
  Award,
  Globe,
  MapPin,
  Lightbulb,
  Zap,
  CheckCircle2,
  Building2,
  Rocket,
  BarChart3,
  Briefcase,
  Star,
  Sparkles
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
import { TiltCard } from '../components/TiltCard';
import { ModernSectionBackground } from '../components/ModernSectionBackground';
import { OptimizedImage } from '../components/OptimizedImage';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { HoverCard3D } from '../components/HoverCard3D';
import { GlowEffect } from '../components/GlowEffect';
import { TextGradient } from '../components/TextGradient';

// Design Tokens
import { colors, gradients } from '../../styles/design-tokens';

// ============================================
// DATA DEFINITIONS
// ============================================

const stats = [
  { number: 15, suffix: '+', label: 'Years of Excellence' },
  { number: 500, suffix: '+', label: 'Clients Served' },
  { number: 98, suffix: '%', label: 'Client Satisfaction' },
  { number: 50, suffix: '+', label: 'Team Members' },
];

const coreValues = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Integrity First',
    description: 'We build trust through honest, transparent communication and ethical business practices in every interaction.',
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Strategic Excellence',
    description: 'We deliver exceptional results through rigorous analysis, strategic thinking, and data-driven decision making.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Client Partnership',
    description: 'We work as an extension of your team, deeply invested in your success and long-term business growth.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Continuous Innovation',
    description: 'We stay ahead of industry trends and constantly evolve our strategies to maintain competitive advantage.',
  },
];

const milestones = [
  {
    year: '2010',
    title: 'Founded in New York',
    description: 'AdvantEdge established with a vision to transform marketing through strategic excellence.',
  },
  {
    year: '2014',
    title: 'Global Expansion',
    description: 'Opened offices in London and Sydney, serving clients across three continents.',
  },
  {
    year: '2018',
    title: 'Industry Recognition',
    description: 'Named Top Marketing Agency by Forbes and won multiple industry awards.',
  },
  {
    year: '2023',
    title: '500+ Clients Served',
    description: 'Reached milestone of serving over 500 enterprise clients with 98% satisfaction rate.',
  },
];

const leadership = [
  {
    name: 'Sarah Mitchell',
    role: 'Chief Executive Officer',
    bio: '20+ years leading strategic marketing initiatives for Fortune 500 companies.',
  },
  {
    name: 'David Chen',
    role: 'Chief Strategy Officer',
    bio: 'Former McKinsey consultant specializing in growth strategy and market positioning.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Chief Creative Officer',
    bio: 'Award-winning creative director with experience at top global advertising agencies.',
  },
];

const locations = [
  {
    city: 'New York',
    country: 'United States',
    address: '123 Park Avenue, Suite 4500, New York, NY 10017',
    phone: '+1 (212) 555-0100',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '45 Grosvenor Street, Mayfair, London W1K 3HN',
    phone: '+44 20 7123 4567',
  },
  {
    city: 'Sydney',
    country: 'Australia',
    address: '88 Cumberland Street, The Rocks, Sydney NSW 2000',
    phone: '+61 2 9876 5432',
  },
];

const awards = [
  {
    year: '2023',
    title: 'Best Marketing Agency',
    organization: 'Forbes Business Awards',
  },
  {
    year: '2022',
    title: 'Excellence in Strategy',
    organization: 'Marketing Excellence Awards',
  },
  {
    year: '2021',
    title: 'Top Workplace',
    organization: 'Great Place to Work',
  },
  {
    year: '2020',
    title: 'Innovation Leader',
    organization: 'Digital Marketing Summit',
  },
];

export function AboutPage() {
  return (
    <PageBackground>
      <PageSEO
        title={PAGE_SEO.about.title}
        description={PAGE_SEO.about.description}
        keywords={PAGE_SEO.about.keywords}
        ogImage={PAGE_SEO.about.ogImage}
        path="/about"
      />







{/* ============================================
    1. ABOUT HERO — INTEGRATED GROWTH SYSTEMS
    HOME PAGE DESIGN LANGUAGE / UNIQUE ABOUT UI
============================================ */}
<ModernSectionBackground
  variant="image-overlay-office"
  className="relative overflow-hidden py-12 lg:py-16"
>
  {/* ============================================
      SUBTLE BACKGROUND DETAIL
  ============================================ */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 overflow-hidden"
  >
    {/* Soft blue atmosphere */}
    <div
      className="absolute -left-48 top-[-160px] h-[460px] w-[460px] rounded-full opacity-[0.055] blur-[135px]"
      style={{ backgroundColor: colors.brand.secondary }}
    />

    {/* Soft accent atmosphere */}
    <div
      className="absolute -right-44 bottom-[-180px] h-[430px] w-[430px] rounded-full opacity-[0.075] blur-[135px]"
      style={{ backgroundColor: colors.brand.accent }}
    />
  </div>

  <Container size="xl">
    <div className="relative z-10 mx-auto max-w-7xl">
      <div className="grid items-center gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-10">

        {/* ============================================
            LEFT COLUMN — CONTENT
        ============================================ */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="max-w-xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="mb-3"
            >
              <GlowEffect
                color={colors.brand.accent}
                intensity={20}
              >
                <motion.span
                  whileHover={{
                    scale: 1.05,
                    borderColor: colors.brand.primary,
                  }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center rounded-full border-2 px-3 py-1.5 shadow-lg"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(12px)",
                    borderColor: colors.brand.accent,
                  }}
                >
                  <Sparkles
                    className="mr-2 h-3.5 w-3.5"
                    style={{ color: colors.brand.accent }}
                  />

                  <span
                    className="text-xs font-bold tracking-wide"
                    style={{ color: colors.brand.primary }}
                  >
                    ABOUT ADVANTEDGE
                  </span>
                </motion.span>
              </GlowEffect>
            </motion.div>

            {/* ============================================
                MAIN HEADING
            ============================================ */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.28,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-4 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-3xl"
              style={{ color: colors.brand.primary }}
            >
              Building Growth Systems That Drive{" "}
              <span className="relative inline-block">
                Business Performance

                <motion.span
                  className="absolute -bottom-1 left-0 right-0 -z-0 h-1.5"
                  style={{
                    backgroundColor: colors.brand.accent,
                    opacity: 0.3,
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                  }}
                />
              </span>
            </motion.h1>

            {/* ============================================
                APPROVED ABOUT COPY
            ============================================ */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.36,
                duration: 0.65,
              }}
              className="space-y-3"
            >
              <p
                className="text-sm font-semibold leading-snug"
                style={{ color: colors.brand.primary }}
              >
                AdvantEdge was built on a simple belief: growth happens when
                strategy, marketing, sales, CRM, and technology work together.
              </p>

              <p className="text-sm leading-relaxed text-gray-700">
                We help organizations eliminate disconnected execution and
                build integrated growth systems designed to improve customer
                acquisition, strengthen market positioning, and create
                measurable business outcomes.
              </p>
            </motion.div>

            {/* ============================================
                GROWTH SYSTEM LABEL
            ============================================ */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.46,
                duration: 0.6,
              }}
              className="mt-5 border-t border-gray-300/50 pt-4"
            >
              <p
                className="mb-3 text-[9px] font-bold uppercase tracking-[0.17em]"
                style={{ color: colors.brand.secondary }}
              >
                One Connected Growth Framework
              </p>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-2">

                {[
                  {
                    label: "Strategy",
                    icon: Target,
                  },
                  {
                    label: "Marketing",
                    icon: TrendingUp,
                  },
                  {
                    label: "Sales",
                    icon: Users,
                  },
                  {
                    label: "CRM",
                    icon: BarChart3,
                  },
                  {
                    label: "Technology",
                    icon: Zap,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center"
                    >
                      <motion.div
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-1.5"
                      >
                        <div
                          className="flex h-7 w-7 items-center justify-center rounded-lg"
                          style={{
                            color: colors.brand.secondary,
                            backgroundColor: `${colors.brand.secondary}0D`,
                          }}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </div>

                        <span
                          className="text-[10px] font-bold"
                          style={{ color: colors.brand.primary }}
                        >
                          {item.label}
                        </span>
                      </motion.div>

                      {index < 4 && (
                        <ArrowRight
                          className="mx-2 hidden h-3 w-3 sm:block"
                          style={{
                            color: colors.brand.accent,
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* ============================================
                POSITIONING STATEMENT
            ============================================ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.62,
                duration: 0.65,
              }}
              className="mt-5 flex items-center gap-3"
            >
              <span
                className="h-[2px] w-7 shrink-0 rounded-full"
                style={{ backgroundColor: colors.brand.accent }}
              />

              <p className="text-[11px] font-semibold leading-relaxed text-gray-500">
                Strategy and execution connected around measurable business
                growth.
              </p>
            </motion.div>

          </div>
        </motion.div>


        {/* ============================================
            RIGHT COLUMN — ABOUT-SPECIFIC VISUAL
        ============================================ */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
          className="relative mt-3 lg:mt-0"
        >

          {/* ============================================
              MAIN IMAGE FRAME
          ============================================ */}
          <div className="group relative min-h-[330px] overflow-hidden rounded-2xl border border-white/80 bg-[#000131] shadow-[0_24px_70px_rgba(0,1,49,0.16)] sm:min-h-[390px] lg:min-h-[430px]">

            <OptimizedImage
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=90"
              alt="AdvantEdge team collaborating on integrated growth strategy"
              priority={true}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1000ms] ease-out group-hover:scale-[1.025]"
            />

            {/* Balanced image treatment */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#000131]/05 via-[#000131]/15 to-[#000131]/90" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/35 via-transparent to-transparent" />


            {/* ============================================
                TOP LABEL
            ============================================ */}
            <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#000131]/35 px-3 py-2 text-white shadow-lg backdrop-blur-xl">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    backgroundColor: colors.brand.accent,
                  }}
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.15em]">
                  Integrated Growth
                </span>
              </div>
            </div>


            {/* ============================================
                IMAGE MESSAGE
            ============================================ */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">

              <p
                className="text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{ color: colors.brand.accent }}
              >
                The AdvantEdge Perspective
              </p>

              <h2 className="mt-2 max-w-lg text-xl font-bold leading-[1.2] tracking-[-0.02em] text-white sm:text-2xl">
                Growth Works Better When Every Part of the Business Moves
                Together.
              </h2>

              <p className="mt-3 max-w-lg text-xs leading-[1.7] text-white/65 sm:text-sm">
                We connect strategic thinking, marketing execution, customer
                engagement, technology, and commercial objectives within one
                coordinated system.
              </p>

            </div>
          </div>


          {/* ============================================
              FLOATING SYSTEM CARD
          ============================================ */}
          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.68,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative -mt-6 mx-4 sm:mx-6 lg:ml-8 lg:mr-[-12px]"
          >
            <div className="overflow-hidden rounded-2xl border border-white/90 bg-white/95 shadow-[0_16px_48px_rgba(0,1,49,0.13)] backdrop-blur-xl">

              <div className="grid grid-cols-[auto_1fr] items-center gap-4 p-4 sm:p-5">

                {/* Icon */}
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    background: gradients.primary,
                  }}
                >
                  <Rocket className="h-5 w-5 text-white" />
                </div>

                {/* Copy */}
                <div>
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.15em]"
                    style={{
                      color: colors.brand.secondary,
                    }}
                  >
                    Connected by Design
                  </p>

                  <p
                    className="mt-1 text-sm font-bold leading-relaxed"
                    style={{
                      color: colors.brand.primary,
                    }}
                  >
                    One strategy. One connected system. One focus on measurable
                    business outcomes.
                  </p>
                </div>

              </div>


              {/* ============================================
                  MICRO SYSTEM MAP
              ============================================ */}
              <div className="border-t border-gray-200">

                <div className="grid grid-cols-5 divide-x divide-gray-200">

                  {[
                    "Strategy",
                    "Marketing",
                    "Sales",
                    "CRM",
                    "Tech",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      whileHover={{
                        backgroundColor: "rgba(0,0,170,0.025)",
                      }}
                      transition={{ duration: 0.2 }}
                      className="px-2 py-3 text-center"
                    >
                      <span
                        className="block text-[8px] font-bold"
                        style={{
                          color: colors.brand.accent,
                        }}
                      >
                        0{index + 1}
                      </span>

                      <span
                        className="mt-0.5 block text-[8px] font-semibold sm:text-[9px]"
                        style={{
                          color: colors.brand.primary,
                        }}
                      >
                        {item}
                      </span>
                    </motion.div>
                  ))}

                </div>

              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </div>
  </Container>
</ModernSectionBackground>


{/* ============================================
    2. WHO WE ARE — COMPACT MODERN UI
============================================ */}
<ModernSectionBackground
  variant="glass-blur"
  className="relative overflow-hidden"
>
  <Section
    spacing="compact"
    animate
    background="transparent"
    className="relative isolate overflow-hidden"
  >
    {/* ============================================
        BACKGROUND DETAILS
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Soft blue glow */}
      <div
        className="absolute -left-48 top-0 h-[380px] w-[380px] rounded-full opacity-[0.06] blur-[130px]"
        style={{
          backgroundColor: colors.brand.secondary,
        }}
      />

      {/* Soft yellow glow */}
      <div
        className="absolute -right-44 bottom-[-100px] h-[360px] w-[360px] rounded-full opacity-[0.08] blur-[130px]"
        style={{
          backgroundColor: colors.brand.accent,
        }}
      />

      {/* Subtle technical grid */}
      <div
        className="absolute inset-0 opacity-[0.028]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,1,49,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.18) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>

    <Container size="xl">
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 shadow-sm backdrop-blur-xl"
              style={{
                color: colors.brand.secondary,
                borderColor: `${colors.brand.secondary}18`,
                backgroundColor: "rgba(255,255,255,0.80)",
              }}
            >
              <Shield className="h-3.5 w-3.5" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2
              className="mt-4 text-2xl font-bold leading-[1.12] tracking-[-0.035em] sm:text-3xl lg:text-[38px]"
              style={{
                color: colors.brand.primary,
              }}
            >
              More Than a{" "}
              <span
                className="relative inline-block"
                style={{
                  color: colors.brand.secondary,
                }}
              >
                Marketing Agency

                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute -bottom-1 left-0 h-1.5 w-full origin-left rounded-full"
                  style={{
                    backgroundColor: colors.brand.accent,
                    opacity: 0.28,
                  }}
                />
              </span>
            </h2>

          </div>
        </ScrollReveal>


        {/* ============================================
            MAIN CONTENT
        ============================================ */}
        <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6">

          {/* ============================================
              LEFT — EXACT DESCRIPTION
          ============================================ */}
          <ScrollReveal>
            <motion.div
              initial={{
                opacity: 0,
                x: -24,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative h-full overflow-hidden rounded-[22px] border border-gray-200/80 bg-white/80 p-5 shadow-[0_18px_55px_rgba(0,1,49,0.07)] backdrop-blur-xl sm:p-6"
            >
              {/* Top accent */}
              <div
                className="absolute left-0 top-0 h-1 w-full"
                style={{
                  background: gradients.primary,
                }}
              />

              {/* Decorative section number */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-5 text-[92px] font-black leading-none tracking-[-0.08em] opacity-[0.025]"
                style={{
                  color: colors.brand.primary,
                }}
              >
                02
              </span>

              <div className="relative z-10">

                <p
                  className="text-sm font-semibold leading-[1.75]"
                  style={{
                    color: colors.brand.primary,
                  }}
                >
                  Most businesses don&apos;t struggle because they lack marketing activity.
                </p>

                <p
                  className="mt-3 text-sm font-bold leading-[1.75]"
                  style={{
                    color: colors.brand.secondary,
                  }}
                >
                  They struggle because their growth systems are disconnected.
                </p>

                {/* Divider */}
                <div className="my-4 flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{
                      backgroundColor: colors.brand.accent,
                    }}
                  />

                  <span className="h-px flex-1 bg-gray-200" />
                </div>

                <p className="text-sm leading-[1.8] text-gray-600">
                  Marketing operates separately from sales. Customer data lives in multiple platforms. Automation is underutilized. Valuable opportunities are lost between teams, tools, and processes.
                </p>

                <div className="my-4 h-px w-full bg-gray-200/80" />

                <p
                  className="text-sm font-bold leading-[1.75]"
                  style={{
                    color: colors.brand.primary,
                  }}
                >
                  AdvantEdge was created to solve that challenge.
                </p>

                <p className="mt-3 text-sm leading-[1.8] text-gray-600">
                  We combine strategic marketing, integrated execution, and AI-powered business solutions to help organizations build scalable systems that support long-term growth.
                </p>

              </div>
            </motion.div>
          </ScrollReveal>


          {/* ============================================
              RIGHT — KEY HIGHLIGHTS
          ============================================ */}
          <StaggerContainer className="grid gap-3 sm:grid-cols-2">

            {/* ============================================
                BUSINESS-LED THINKING
            ============================================ */}
            <motion.div
              variants={staggerItemVariants}
              className="min-w-0"
            >
              <motion.article
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative h-full min-h-[190px] overflow-hidden rounded-[20px] border border-gray-200/80 bg-white/80 p-5 shadow-[0_12px_36px_rgba(0,1,49,0.05)] backdrop-blur-xl transition-all duration-300 hover:border-white hover:bg-white hover:shadow-[0_20px_52px_rgba(0,1,49,0.10)]"
              >
                {/* Accent line */}
                <div
                  className="absolute left-0 top-0 h-1 w-10 rounded-r-full transition-all duration-500 group-hover:w-full"
                  style={{
                    background: gradients.primary,
                  }}
                />

                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      color: colors.brand.secondary,
                      backgroundColor: `${colors.brand.secondary}0D`,
                    }}
                  >
                    <Briefcase className="h-4 w-4" />
                  </div>

                  <span className="text-[9px] font-bold tracking-[0.15em] text-gray-300">
                    01
                  </span>
                </div>

                <h3
                  className="mt-4 text-sm font-bold leading-snug sm:text-base"
                  style={{
                    color: colors.brand.primary,
                  }}
                >
                  Business-Led Thinking
                </h3>

                <p className="mt-2 text-xs leading-[1.7] text-gray-600">
                  Built by leaders with experience across business development, market expansion, operations, and customer engagement.
                </p>
              </motion.article>
            </motion.div>


            {/* ============================================
                INTEGRATED GROWTH APPROACH
            ============================================ */}
            <motion.div
              variants={staggerItemVariants}
              className="min-w-0"
            >
              <motion.article
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative h-full min-h-[190px] overflow-hidden rounded-[20px] border border-gray-200/80 bg-white/80 p-5 shadow-[0_12px_36px_rgba(0,1,49,0.05)] backdrop-blur-xl transition-all duration-300 hover:border-white hover:bg-white hover:shadow-[0_20px_52px_rgba(0,1,49,0.10)]"
              >
                <div
                  className="absolute left-0 top-0 h-1 w-10 rounded-r-full transition-all duration-500 group-hover:w-full"
                  style={{
                    background: gradients.primary,
                  }}
                />

                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      color: colors.brand.secondary,
                      backgroundColor: `${colors.brand.secondary}0D`,
                    }}
                  >
                    <Target className="h-4 w-4" />
                  </div>

                  <span className="text-[9px] font-bold tracking-[0.15em] text-gray-300">
                    02
                  </span>
                </div>

                <h3
                  className="mt-4 text-sm font-bold leading-snug sm:text-base"
                  style={{
                    color: colors.brand.primary,
                  }}
                >
                  Integrated Growth Approach
                </h3>

                <p className="mt-2 text-xs leading-[1.7] text-gray-600">
                  Strategy, marketing, CRM, automation, and AI aligned within one connected framework.
                </p>
              </motion.article>
            </motion.div>


            {/* ============================================
                REVENUE-FOCUSED EXECUTION
            ============================================ */}
            <motion.div
              variants={staggerItemVariants}
              className="min-w-0"
            >
              <motion.article
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative h-full min-h-[190px] overflow-hidden rounded-[20px] border border-gray-200/80 bg-white/80 p-5 shadow-[0_12px_36px_rgba(0,1,49,0.05)] backdrop-blur-xl transition-all duration-300 hover:border-white hover:bg-white hover:shadow-[0_20px_52px_rgba(0,1,49,0.10)]"
              >
                <div
                  className="absolute left-0 top-0 h-1 w-10 rounded-r-full transition-all duration-500 group-hover:w-full"
                  style={{
                    background: gradients.primary,
                  }}
                />

                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      color: colors.brand.secondary,
                      backgroundColor: `${colors.brand.secondary}0D`,
                    }}
                  >
                    <TrendingUp className="h-4 w-4" />
                  </div>

                  <span className="text-[9px] font-bold tracking-[0.15em] text-gray-300">
                    03
                  </span>
                </div>

                <h3
                  className="mt-4 text-sm font-bold leading-snug sm:text-base"
                  style={{
                    color: colors.brand.primary,
                  }}
                >
                  Revenue-Focused Execution
                </h3>

                <p className="mt-2 text-xs leading-[1.7] text-gray-600">
                  Every initiative is designed to support customer acquisition, pipeline growth, and operational efficiency.
                </p>
              </motion.article>
            </motion.div>


            {/* ============================================
                BUILT FOR SCALE
            ============================================ */}
            <motion.div
              variants={staggerItemVariants}
              className="min-w-0"
            >
              <motion.article
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative h-full min-h-[190px] overflow-hidden rounded-[20px] border border-gray-200/80 bg-white/80 p-5 shadow-[0_12px_36px_rgba(0,1,49,0.05)] backdrop-blur-xl transition-all duration-300 hover:border-white hover:bg-white hover:shadow-[0_20px_52px_rgba(0,1,49,0.10)]"
              >
                <div
                  className="absolute left-0 top-0 h-1 w-10 rounded-r-full transition-all duration-500 group-hover:w-full"
                  style={{
                    background: gradients.primary,
                  }}
                />

                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      color: colors.brand.secondary,
                      backgroundColor: `${colors.brand.secondary}0D`,
                    }}
                  >
                    <Rocket className="h-4 w-4" />
                  </div>

                  <span className="text-[9px] font-bold tracking-[0.15em] text-gray-300">
                    04
                  </span>
                </div>

                <h3
                  className="mt-4 text-sm font-bold leading-snug sm:text-base"
                  style={{
                    color: colors.brand.primary,
                  }}
                >
                  Built for Scale
                </h3>

                <p className="mt-2 text-xs leading-[1.7] text-gray-600">
                  Processes, systems, and technology designed to grow with your business.
                </p>
              </motion.article>
            </motion.div>

          </StaggerContainer>
        </div>

      </div>
    </Container>
  </Section>
</ModernSectionBackground>



{/* ============================================
    3. WHAT WE BELIEVE — COMPACT IMAGE-LED UI
============================================ */}
<ModernSectionBackground
  variant="glass-blur"
  className="relative overflow-hidden"
>
  <Section
    spacing="compact"
    animate
    background="transparent"
    className="relative isolate overflow-hidden"
  >
    {/* ============================================
        BACKGROUND DETAILS
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Blue atmosphere */}
      <div
        className="absolute -left-48 top-8 h-[380px] w-[380px] rounded-full opacity-[0.055] blur-[130px]"
        style={{
          backgroundColor: colors.brand.secondary,
        }}
      />

      {/* Yellow atmosphere */}
      <div
        className="absolute -right-44 bottom-[-90px] h-[360px] w-[360px] rounded-full opacity-[0.075] blur-[130px]"
        style={{
          backgroundColor: colors.brand.accent,
        }}
      />

      {/* Technical grid */}
      <div
        className="absolute inset-0 opacity-[0.028]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,1,49,0.17) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.17) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>

    <Container size="xl">
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 shadow-sm backdrop-blur-xl"
              style={{
                color: colors.brand.secondary,
                borderColor: `${colors.brand.secondary}18`,
                backgroundColor: "rgba(255,255,255,0.80)",
              }}
            >
              <Lightbulb className="h-3.5 w-3.5" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Our Philosophy
              </span>
            </div>

            {/* Heading */}
            <h2
              className="mt-4 text-2xl font-bold leading-[1.12] tracking-[-0.035em] sm:text-3xl lg:text-[38px]"
              style={{
                color: colors.brand.primary,
              }}
            >
              Growth Requires More Than{" "}
              <span
                className="relative inline-block"
                style={{
                  color: colors.brand.secondary,
                }}
              >
                Marketing

                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute -bottom-1 left-0 h-1.5 w-full origin-left rounded-full"
                  style={{
                    backgroundColor: colors.brand.accent,
                    opacity: 0.28,
                  }}
                />
              </span>
            </h2>

            {/* Exact description */}
            <div className="mx-auto mt-5 max-w-3xl space-y-2">
              <p className="text-sm leading-[1.8] text-gray-600 sm:text-base">
                Modern businesses need more than campaigns.
              </p>

              <p
                className="text-sm font-semibold leading-[1.8] sm:text-base"
                style={{
                  color: colors.brand.primary,
                }}
              >
                They need connected systems that align strategy, execution,
                customer engagement, and operational intelligence.
              </p>

              <p className="text-sm leading-[1.8] text-gray-600 sm:text-base">
                Our approach combines three core disciplines:
              </p>
            </div>

          </div>
        </ScrollReveal>


        {/* ============================================
            THREE CORE DISCIPLINES
        ============================================ */}
        <div className="mt-8 grid gap-4 lg:grid-cols-3">

          {/* ============================================
              01 — STRATEGIC MARKETING
          ============================================ */}
          <ScrollReveal>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative min-h-[390px] overflow-hidden rounded-[22px] border border-white/80 bg-[#000131] shadow-[0_20px_60px_rgba(0,1,49,0.13)]"
            >
              {/* Real image */}
              <OptimizedImage
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=90"
                alt="Business team developing marketing strategy"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
              />

              {/* Image treatment */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#000131]/10 via-[#000131]/24 to-[#000131]/96" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/28 via-transparent to-transparent" />

              {/* Top row */}
              <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 sm:p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-black/20 backdrop-blur-xl">
                  <Target
                    className="h-4.5 w-4.5"
                    style={{
                      color: colors.brand.accent,
                    }}
                  />
                </div>

                <span className="text-[9px] font-bold tracking-[0.16em] text-white/45">
                  01
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">

                <h3 className="text-lg font-bold leading-tight text-white sm:text-xl">
                  Strategic Marketing
                </h3>

                <div
                  className="mt-3 h-1 w-10 rounded-full"
                  style={{
                    backgroundColor: colors.brand.accent,
                  }}
                />

                <p className="mt-4 text-sm leading-[1.75] text-white/72">
                  Building market clarity through positioning, competitive
                  differentiation, messaging, and growth planning.
                </p>

              </div>
            </motion.article>
          </ScrollReveal>


          {/* ============================================
              02 — INTEGRATED MARKETING
          ============================================ */}
          <ScrollReveal delay={0.08}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative min-h-[390px] overflow-hidden rounded-[22px] border border-white/80 bg-[#000131] shadow-[0_20px_60px_rgba(0,1,49,0.13)]"
            >
              {/* Real image */}
              <OptimizedImage
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=90"
                alt="Team collaborating on integrated marketing programs"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
              />

              {/* Image treatment */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#000131]/10 via-[#000131]/24 to-[#000131]/96" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/28 via-transparent to-transparent" />

              {/* Top row */}
              <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 sm:p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-black/20 backdrop-blur-xl">
                  <Users
                    className="h-4.5 w-4.5"
                    style={{
                      color: colors.brand.accent,
                    }}
                  />
                </div>

                <span className="text-[9px] font-bold tracking-[0.16em] text-white/45">
                  02
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">

                <h3 className="text-lg font-bold leading-tight text-white sm:text-xl">
                  Integrated Marketing
                </h3>

                <div
                  className="mt-3 h-1 w-10 rounded-full"
                  style={{
                    backgroundColor: colors.brand.accent,
                  }}
                />

                <p className="mt-4 text-sm leading-[1.75] text-white/72">
                  Executing coordinated programs across digital, content,
                  communications, CRM, and customer engagement channels.
                </p>

              </div>
            </motion.article>
          </ScrollReveal>


          {/* ============================================
              03 — AI SOLUTIONS
          ============================================ */}
          <ScrollReveal delay={0.16}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative min-h-[390px] overflow-hidden rounded-[22px] border border-white/80 bg-[#000131] shadow-[0_20px_60px_rgba(0,1,49,0.13)]"
            >
              {/* Real image */}
              <OptimizedImage
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90"
                alt="Business analytics and technology systems"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
              />

              {/* Image treatment */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#000131]/10 via-[#000131]/24 to-[#000131]/96" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/28 via-transparent to-transparent" />

              {/* Top row */}
              <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 sm:p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-black/20 backdrop-blur-xl">
                  <Zap
                    className="h-4.5 w-4.5"
                    style={{
                      color: colors.brand.accent,
                    }}
                  />
                </div>

                <span className="text-[9px] font-bold tracking-[0.16em] text-white/45">
                  03
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">

                <h3 className="text-lg font-bold leading-tight text-white sm:text-xl">
                  AI Solutions
                </h3>

                <div
                  className="mt-3 h-1 w-10 rounded-full"
                  style={{
                    backgroundColor: colors.brand.accent,
                  }}
                />

                <p className="mt-4 text-sm leading-[1.75] text-white/72">
                  Leveraging automation, predictive intelligence, customer
                  insights, and workflow optimization to improve business
                  performance.
                </p>

              </div>
            </motion.article>
          </ScrollReveal>

        </div>


        {/* ============================================
            EXACT CLOSING CONTENT
        ============================================ */}
        <ScrollReveal delay={0.22}>
          <div
            className="mt-5 overflow-hidden rounded-2xl"
            style={{
              backgroundColor: colors.brand.primary,
            }}
          >
            <div className="flex items-center gap-4 px-5 py-5 sm:px-6">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08]">
                <TrendingUp
                  className="h-5 w-5"
                  style={{
                    color: colors.brand.accent,
                  }}
                />
              </div>

              <p className="text-sm font-semibold leading-[1.75] text-white/90 sm:text-base">
                Together, these capabilities create a growth ecosystem designed
                to deliver sustainable and measurable results.
              </p>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </Container>
  </Section>
</ModernSectionBackground>


{/* ============================================
    4. LEADERSHIP TEAM — COMPACT EDITORIAL
============================================ */}
<ModernSectionBackground
  variant="glass-blur"
  className="relative overflow-hidden"
>
  <Section
    spacing="compact"
    animate
    background="transparent"
    className="relative isolate overflow-hidden"
  >
    {/* ============================================
        BACKGROUND DETAILS
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute -left-40 top-0 h-[360px] w-[360px] rounded-full opacity-[0.05] blur-[125px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="absolute -right-40 bottom-[-80px] h-[360px] w-[360px] rounded-full opacity-[0.07] blur-[125px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,1,49,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.16) 1px, transparent 1px)",
          backgroundSize: "68px 68px",
        }}
      />
    </div>


    <Container size="xl">
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="mx-auto max-w-4xl text-center">

            <div
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 shadow-sm backdrop-blur-xl"
              style={{
                color: colors.brand.secondary,
                borderColor: `${colors.brand.secondary}18`,
                backgroundColor: "rgba(255,255,255,0.82)",
              }}
            >
              <Users className="h-3.5 w-3.5" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Leadership
              </span>
            </div>

            <h2
              className="mt-4 text-2xl font-bold leading-[1.12] tracking-[-0.035em] sm:text-3xl lg:text-[38px]"
              style={{ color: colors.brand.primary }}
            >
              Experienced Leaders Driving{" "}
              <span
                className="relative inline-block"
                style={{ color: colors.brand.secondary }}
              >
                Strategic Growth

                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute -bottom-1 left-0 h-1.5 w-full origin-left rounded-full"
                  style={{
                    backgroundColor: colors.brand.accent,
                    opacity: 0.28,
                  }}
                />
              </span>
            </h2>

            <div className="mx-auto mt-4 max-w-3xl">
              <p className="text-sm leading-[1.75] text-gray-600">
                Our leadership team brings together expertise across business
                development, strategic marketing, communications, customer
                engagement, operational management, and emerging technologies.
              </p>

              <p className="mt-2 text-sm leading-[1.75] text-gray-600">
                Together, they help organizations navigate growth opportunities,
                market expansion, and digital transformation with greater
                clarity and confidence.
              </p>
            </div>

          </div>
        </ScrollReveal>


        {/* ============================================
            LEADERSHIP PROFILE 01 — JENNIFER
        ============================================ */}
        <ScrollReveal>
          <motion.article
            whileHover={{ y: -3 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative mt-8 overflow-hidden rounded-[24px] border border-gray-200/80 bg-white/82 shadow-[0_18px_55px_rgba(0,1,49,0.07)] backdrop-blur-xl transition-all duration-300 hover:border-white hover:shadow-[0_24px_65px_rgba(0,1,49,0.11)]"
          >
            {/* Top accent */}
            <div
              className="absolute left-0 top-0 z-20 h-1 w-full"
              style={{ background: gradients.primary }}
            />

            <div className="grid lg:grid-cols-[230px_1fr]">

              {/* ============================================
                  IMAGE
              ============================================ */}
              <div className="relative h-[260px] overflow-hidden bg-[#000131] sm:h-[300px] lg:h-auto lg:min-h-[310px]">

                <OptimizedImage
                  src="https://drive.google.com/thumbnail?id=1I6HApgDg2q2niQdyiOC8ULZou7wxY8sg&sz=w1400"
                  alt="Jennifer Jordan"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#000131]/88 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#000131]/10" />

                {/* Mobile name overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 lg:hidden">
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: colors.brand.accent }}
                  >
                    Founder & President
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    Jennifer Jordan
                  </h3>
                </div>
              </div>


              {/* ============================================
                  CONTENT
              ============================================ */}
              <div className="relative p-5 sm:p-6 lg:p-7">

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1 text-[72px] font-black leading-none opacity-[0.025]"
                  style={{ color: colors.brand.primary }}
                >
                  01
                </span>

                <div className="relative z-10">

                  {/* Desktop identity */}
                  <div className="hidden lg:block">
                    <p
                      className="text-[9px] font-bold uppercase tracking-[0.17em]"
                      style={{ color: colors.brand.secondary }}
                    >
                      Founder & President
                    </p>

                    <h3
                      className="mt-1.5 text-xl font-bold"
                      style={{ color: colors.brand.primary }}
                    >
                      Jennifer Jordan
                    </h3>
                  </div>


                  <div className="mt-0 grid gap-5 lg:mt-5 lg:grid-cols-[1.25fr_0.75fr] lg:gap-7">

                    {/* Bio */}
                    <div className="space-y-2.5 text-[12px] leading-[1.72] text-gray-600 sm:text-[13px]">
                      <p>
                        Jennifer brings a unique combination of executive
                        leadership, business development, communications
                        expertise, and organizational management experience
                        developed over more than two decades.
                      </p>

                      <p>
                        Her background spans corporate communications,
                        operational leadership, client relationship management,
                        and educational leadership, enabling her to build strong
                        partnerships while creating systems that support
                        long-term organizational growth.
                      </p>

                      <p>
                        At AdvantEdge, Jennifer focuses on client relationships,
                        strategic direction, and ensuring that every engagement
                        remains aligned with measurable business outcomes.
                      </p>
                    </div>


                    {/* Expertise */}
                    <div className="border-t border-gray-200 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">

                      <p
                        className="text-[9px] font-bold uppercase tracking-[0.17em]"
                        style={{ color: colors.brand.secondary }}
                      >
                        Areas of Expertise
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {[
                          "Executive Leadership",
                          "Strategic Communications",
                          "Client Relationship Management",
                          "Organizational Development",
                          "Community & Stakeholder Engagement",
                          "Business Growth Strategy",
                        ].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[9px] font-semibold leading-tight text-gray-600"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <p className="mt-4 text-[9px] leading-relaxed text-gray-400">
                        Source: Jennifer Jordan professional profile.
                      </p>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.article>
        </ScrollReveal>


        {/* ============================================
            LEADERSHIP PROFILE 02 — DWIGHT
        ============================================ */}
        <ScrollReveal delay={0.08}>
          <motion.article
            whileHover={{ y: -3 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative mt-4 overflow-hidden rounded-[24px] border border-gray-200/80 bg-white/82 shadow-[0_18px_55px_rgba(0,1,49,0.07)] backdrop-blur-xl transition-all duration-300 hover:border-white hover:shadow-[0_24px_65px_rgba(0,1,49,0.11)]"
          >
            <div
              className="absolute left-0 top-0 z-20 h-1 w-full"
              style={{ background: gradients.primary }}
            />

            <div className="grid lg:grid-cols-[1fr_230px]">

              {/* ============================================
                  CONTENT — DESKTOP LEFT
              ============================================ */}
              <div className="order-2 relative p-5 sm:p-6 lg:order-1 lg:p-7">

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1 text-[72px] font-black leading-none opacity-[0.025]"
                  style={{ color: colors.brand.primary }}
                >
                  02
                </span>

                <div className="relative z-10">

                  <div className="hidden lg:block">
                    <p
                      className="text-[9px] font-bold uppercase tracking-[0.17em]"
                      style={{ color: colors.brand.secondary }}
                    >
                      Chief Executive Officer
                    </p>

                    <h3
                      className="mt-1.5 text-xl font-bold"
                      style={{ color: colors.brand.primary }}
                    >
                      Dwight Jordan
                    </h3>
                  </div>


                  <div className="grid gap-5 lg:mt-5 lg:grid-cols-[1.25fr_0.75fr] lg:gap-7">

                    {/* Bio */}
                    <div className="space-y-2.5 text-[12px] leading-[1.72] text-gray-600 sm:text-[13px]">
                      <p>
                        Dwight brings extensive experience in global business
                        development, market expansion, strategic marketing, and
                        technology-driven growth initiatives.
                      </p>

                      <p>
                        Throughout his career, he has led international growth
                        programs, managed global portfolios exceeding $80
                        million, supported market expansion across multiple
                        regions, and worked with some of the world's leading
                        transportation and technology organizations.
                      </p>

                      <p>
                        At AdvantEdge, Dwight leads growth strategy, marketing
                        innovation, market expansion initiatives, and business
                        development programs that help clients unlock new
                        opportunities and accelerate revenue growth.
                      </p>
                    </div>


                    {/* Expertise */}
                    <div className="border-t border-gray-200 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">

                      <p
                        className="text-[9px] font-bold uppercase tracking-[0.17em]"
                        style={{ color: colors.brand.secondary }}
                      >
                        Areas of Expertise
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {[
                          "Strategic Marketing Leadership",
                          "Global Market Expansion",
                          "Business Development",
                          "Growth Strategy",
                          "Opportunity Creation",
                          "Technology Commercialization",
                          "Revenue Growth Programs",
                        ].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[9px] font-semibold leading-tight text-gray-600"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <p className="mt-4 text-[9px] leading-relaxed text-gray-400">
                        Source: Dwight Jordan professional CV.
                      </p>

                    </div>
                  </div>
                </div>
              </div>


              {/* ============================================
                  REAL IMAGE
              ============================================ */}
              <div className="order-1 relative h-[260px] overflow-hidden bg-[#000131] sm:h-[300px] lg:order-2 lg:h-auto lg:min-h-[310px]">

                <OptimizedImage
                  src="https://drive.google.com/thumbnail?id=1T-o9KRJqxqgiW-aHttdg45R6iDGoSiEX&sz=w1400"
                  alt="Dwight Jordan"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#000131]/88 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-[#000131]/10" />

                <div className="absolute inset-x-0 bottom-0 p-5 lg:hidden">
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: colors.brand.accent }}
                  >
                    Chief Executive Officer
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    Dwight Jordan
                  </h3>
                </div>

              </div>

            </div>
          </motion.article>
        </ScrollReveal>


        {/* ============================================
            LEADERSHIP PROFILE 03 — HARISH
        ============================================ */}
        <ScrollReveal delay={0.14}>
          <motion.article
            whileHover={{ y: -3 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative mt-4 overflow-hidden rounded-[24px] border border-gray-200/80 bg-white/82 shadow-[0_18px_55px_rgba(0,1,49,0.07)] backdrop-blur-xl transition-all duration-300 hover:border-white hover:shadow-[0_24px_65px_rgba(0,1,49,0.11)]"
          >
            <div
              className="absolute left-0 top-0 z-20 h-1 w-full"
              style={{ background: gradients.primary }}
            />

            <div className="grid lg:grid-cols-[230px_1fr]">

              {/* ============================================
                  REAL IMAGE
              ============================================ */}
              <div className="relative h-[260px] overflow-hidden bg-[#000131] sm:h-[300px] lg:h-auto lg:min-h-[310px]">

                <OptimizedImage
                  src="https://drive.google.com/thumbnail?id=1BLKTgyrudWdiNjTdUP86ndKPQZLfxAAy&sz=w1400"
                  alt="Harish Banwari"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#000131]/88 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#000131]/10" />

                <div className="absolute inset-x-0 bottom-0 p-5 lg:hidden">
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: colors.brand.accent }}
                  >
                    Co-Founder
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    Harish Banwari
                  </h3>
                </div>

              </div>


              {/* ============================================
                  CONTENT
              ============================================ */}
              <div className="relative p-5 sm:p-6 lg:p-7">

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1 text-[72px] font-black leading-none opacity-[0.025]"
                  style={{ color: colors.brand.primary }}
                >
                  03
                </span>

                <div className="relative z-10">

                  <div className="hidden lg:block">
                    <p
                      className="text-[9px] font-bold uppercase tracking-[0.17em]"
                      style={{ color: colors.brand.secondary }}
                    >
                      Co-Founder
                    </p>

                    <h3
                      className="mt-1.5 text-xl font-bold"
                      style={{ color: colors.brand.primary }}
                    >
                      Harish Banwari
                    </h3>
                  </div>


                  <div className="grid gap-5 lg:mt-5 lg:grid-cols-[1.25fr_0.75fr] lg:gap-7">

                    <div className="space-y-2.5 text-[12px] leading-[1.72] text-gray-600 sm:text-[13px]">
                      <p>
                        Harish brings extensive experience across business
                        strategy, digital transformation, integrated marketing,
                        branding, AI enablement, and growth consulting.
                      </p>

                      <p>
                        His work has focused on helping organizations align
                        strategy, technology, marketing, and customer engagement
                        systems to create scalable growth frameworks. With
                        experience supporting businesses across multiple
                        industries and international markets, he specializes in
                        connecting business objectives with practical execution.
                      </p>

                      <p>
                        At AdvantEdge, Harish leads strategic consulting
                        initiatives focused on integrated marketing systems, AI
                        adoption, business growth acceleration, and operational
                        alignment.
                      </p>
                    </div>


                    <div className="border-t border-gray-200 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">

                      <p
                        className="text-[9px] font-bold uppercase tracking-[0.17em]"
                        style={{ color: colors.brand.secondary }}
                      >
                        Areas of Expertise
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {[
                          "Strategic Growth Consulting",
                          "Integrated Marketing Systems",
                          "Digital Transformation",
                          "AI Business Solutions",
                          "Brand Strategy",
                          "Revenue Growth Frameworks",
                          "Market Expansion",
                        ].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[9px] font-semibold leading-tight text-gray-600"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.article>
        </ScrollReveal>

      </div>
    </Container>
  </Section>
</ModernSectionBackground>


{/* ============================================
    5. WHY CLIENTS WORK WITH US
    COMPACT EXECUTIVE BENTO UI
============================================ */}
<ModernSectionBackground
  variant="glass-blur"
  className="relative overflow-hidden"
>
  <Section
    spacing="compact"
    animate
    background="transparent"
    className="relative isolate overflow-hidden"
  >
    {/* ============================================
        BACKGROUND DETAILS
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Soft blue glow */}
      <div
        className="absolute -left-44 top-8 h-[360px] w-[360px] rounded-full opacity-[0.055] blur-[125px]"
        style={{
          backgroundColor: colors.brand.secondary,
        }}
      />

      {/* Soft accent glow */}
      <div
        className="absolute -right-40 bottom-[-100px] h-[360px] w-[360px] rounded-full opacity-[0.075] blur-[125px]"
        style={{
          backgroundColor: colors.brand.accent,
        }}
      />

      {/* Technical grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,1,49,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.16) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>

    <Container size="xl">
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ============================================
            TOP INTRODUCTION
        ============================================ */}
        <ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

            {/* LEFT — BADGE + HEADING */}
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 shadow-sm backdrop-blur-xl"
                style={{
                  color: colors.brand.secondary,
                  borderColor: `${colors.brand.secondary}18`,
                  backgroundColor: "rgba(255,255,255,0.82)",
                }}
              >
                <CheckCircle2 className="h-3.5 w-3.5" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                  Why AdvantEdge
                </span>
              </div>

              <h2
                className="mt-4 max-w-2xl text-2xl font-bold leading-[1.12] tracking-[-0.035em] sm:text-3xl lg:text-[38px]"
                style={{
                  color: colors.brand.primary,
                }}
              >
                Built for Businesses Focused on{" "}
                <span
                  className="relative inline-block"
                  style={{
                    color: colors.brand.secondary,
                  }}
                >
                  Long-Term Growth

                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute -bottom-1 left-0 h-1.5 w-full origin-left rounded-full"
                    style={{
                      backgroundColor: colors.brand.accent,
                      opacity: 0.28,
                    }}
                  />
                </span>
              </h2>
            </div>


            {/* RIGHT — EXACT DESCRIPTION */}
            <div className="max-w-2xl lg:ml-auto">
              <p className="text-sm leading-[1.8] text-gray-600 sm:text-base">
                Organizations choose AdvantEdge because they need more than
                isolated marketing services.
              </p>

              <p
                className="mt-2 text-sm font-semibold leading-[1.8] sm:text-base"
                style={{
                  color: colors.brand.primary,
                }}
              >
                They need a strategic partner that understands how marketing,
                sales, customer engagement, CRM, automation, and AI influence
                business performance.
              </p>
            </div>

          </div>
        </ScrollReveal>


        {/* ============================================
            PILLARS
        ============================================ */}
        <StaggerContainer className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-12">

          {/* ============================================
              01 — STRATEGIC CLARITY
              FEATURED LARGE CARD
          ============================================ */}
          <motion.div
            variants={staggerItemVariants}
            className="lg:col-span-7"
          >
            <motion.article
              whileHover={{ y: -4 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative h-full min-h-[220px] overflow-hidden rounded-[24px] bg-[#000131] p-5 shadow-[0_22px_65px_rgba(0,1,49,0.18)] sm:p-6"
            >
              {/* Decorative glow */}
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-24 h-64 w-64 rounded-full opacity-25 blur-[90px]"
                style={{
                  backgroundColor: colors.brand.secondary,
                }}
              />

              {/* Grid */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.055]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />

              {/* Number */}
              <span className="absolute right-5 top-4 text-[10px] font-bold tracking-[0.16em] text-white/30">
                01
              </span>

              <div className="relative z-10 flex h-full flex-col">

                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08]"
                >
                  <Target
                    className="h-5 w-5"
                    style={{
                      color: colors.brand.accent,
                    }}
                  />
                </div>

                <div className="mt-auto pt-10">
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    Strategic Clarity
                  </h3>

                  <div
                    className="mt-3 h-1 w-10 rounded-full"
                    style={{
                      backgroundColor: colors.brand.accent,
                    }}
                  />

                  <p className="mt-3 max-w-xl text-sm leading-[1.75] text-white/65">
                    Clear positioning, market focus, and growth direction.
                  </p>
                </div>

              </div>
            </motion.article>
          </motion.div>


          {/* ============================================
              02 — CONNECTED EXECUTION
          ============================================ */}
          <motion.div
            variants={staggerItemVariants}
            className="lg:col-span-5"
          >
            <motion.article
              whileHover={{ y: -4 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative h-full min-h-[220px] overflow-hidden rounded-[24px] border border-gray-200/80 bg-white/82 p-5 shadow-[0_16px_48px_rgba(0,1,49,0.065)] backdrop-blur-xl transition-all duration-300 hover:border-white hover:bg-white hover:shadow-[0_24px_60px_rgba(0,1,49,0.11)] sm:p-6"
            >
              {/* Top accent */}
              <div
                className="absolute left-0 top-0 h-1 w-14 rounded-r-full transition-all duration-500 group-hover:w-full"
                style={{
                  background: gradients.primary,
                }}
              />

              <span className="absolute right-5 top-4 text-[10px] font-bold tracking-[0.16em] text-gray-300">
                02
              </span>

              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  color: colors.brand.secondary,
                  backgroundColor: `${colors.brand.secondary}0D`,
                }}
              >
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <div className="mt-8">
                <h3
                  className="text-lg font-bold"
                  style={{
                    color: colors.brand.primary,
                  }}
                >
                  Connected Execution
                </h3>

                <p className="mt-3 text-sm leading-[1.75] text-gray-600">
                  Integrated systems rather than disconnected activities.
                </p>
              </div>

            </motion.article>
          </motion.div>


          {/* ============================================
              03 — AI-ENABLED OPERATIONS
          ============================================ */}
          <motion.div
            variants={staggerItemVariants}
            className="lg:col-span-5"
          >
            <motion.article
              whileHover={{ y: -4 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative h-full min-h-[210px] overflow-hidden rounded-[24px] border border-gray-200/80 bg-white/82 p-5 shadow-[0_16px_48px_rgba(0,1,49,0.065)] backdrop-blur-xl transition-all duration-300 hover:border-white hover:bg-white hover:shadow-[0_24px_60px_rgba(0,1,49,0.11)] sm:p-6"
            >
              <div
                className="absolute left-0 top-0 h-1 w-14 rounded-r-full transition-all duration-500 group-hover:w-full"
                style={{
                  background: gradients.primary,
                }}
              />

              <span className="absolute right-5 top-4 text-[10px] font-bold tracking-[0.16em] text-gray-300">
                03
              </span>

              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  color: colors.brand.secondary,
                  backgroundColor: `${colors.brand.secondary}0D`,
                }}
              >
                <Zap className="h-5 w-5" />
              </div>

              <div className="mt-8">
                <h3
                  className="text-lg font-bold"
                  style={{
                    color: colors.brand.primary,
                  }}
                >
                  AI-Enabled Operations
                </h3>

                <p className="mt-3 text-sm leading-[1.75] text-gray-600">
                  Automation and intelligence that improve efficiency and
                  customer engagement.
                </p>
              </div>

            </motion.article>
          </motion.div>


          {/* ============================================
              04 — MEASURABLE OUTCOMES
              FEATURED WIDE CARD
          ============================================ */}
          <motion.div
            variants={staggerItemVariants}
            className="lg:col-span-7"
          >
            <motion.article
              whileHover={{ y: -4 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative h-full min-h-[210px] overflow-hidden rounded-[24px] border border-gray-200/80 bg-white/82 p-5 shadow-[0_16px_48px_rgba(0,1,49,0.065)] backdrop-blur-xl transition-all duration-300 hover:border-white hover:bg-white hover:shadow-[0_24px_60px_rgba(0,1,49,0.11)] sm:p-6"
            >
              {/* Accent */}
              <div
                className="absolute left-0 top-0 h-1 w-14 rounded-r-full transition-all duration-500 group-hover:w-full"
                style={{
                  background: gradients.primary,
                }}
              />

              {/* Background number */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 right-2 text-[110px] font-black leading-none opacity-[0.025]"
                style={{
                  color: colors.brand.primary,
                }}
              >
                04
              </span>

              <div className="relative z-10 grid gap-5 sm:grid-cols-[auto_1fr] sm:items-center">

                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    background: gradients.primary,
                  }}
                >
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>

                <div>
                  <h3
                    className="text-lg font-bold"
                    style={{
                      color: colors.brand.primary,
                    }}
                  >
                    Measurable Outcomes
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-[1.75] text-gray-600">
                    Growth initiatives aligned to business performance and
                    revenue objectives.
                  </p>
                </div>

              </div>
            </motion.article>
          </motion.div>

        </StaggerContainer>

      </div>
    </Container>
  </Section>
</ModernSectionBackground>

{/* ============================================
    6. OUR APPROACH — COMPACT 4-STEP FRAMEWORK
============================================ */}
<ModernSectionBackground
  variant="glass-blur"
  className="relative overflow-hidden"
>
  <Section
    spacing="compact"
    animate
    background="transparent"
    className="relative isolate overflow-hidden"
  >
    {/* ============================================
        BACKGROUND DETAILS
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute -left-44 top-10 h-[340px] w-[340px] rounded-full opacity-[0.05] blur-[120px]"
        style={{
          backgroundColor: colors.brand.secondary,
        }}
      />

      <div
        className="absolute -right-40 bottom-[-90px] h-[340px] w-[340px] rounded-full opacity-[0.07] blur-[120px]"
        style={{
          backgroundColor: colors.brand.accent,
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,1,49,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.16) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>

    <Container size="xl">
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ============================================
            HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 shadow-sm backdrop-blur-xl"
              style={{
                color: colors.brand.secondary,
                borderColor: `${colors.brand.secondary}18`,
                backgroundColor: "rgba(255,255,255,0.82)",
              }}
            >
              <Rocket className="h-3.5 w-3.5" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                How We Work
              </span>
            </div>

            {/* Heading */}
            <h2
              className="mt-4 text-2xl font-bold leading-[1.12] tracking-[-0.035em] sm:text-3xl lg:text-[38px]"
              style={{
                color: colors.brand.primary,
              }}
            >
              A Framework Designed for{" "}
              <span
                className="relative inline-block"
                style={{
                  color: colors.brand.secondary,
                }}
              >
                Sustainable Growth

                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute -bottom-1 left-0 h-1.5 w-full origin-left rounded-full"
                  style={{
                    backgroundColor: colors.brand.accent,
                    opacity: 0.28,
                  }}
                />
              </span>
            </h2>

          </div>
        </ScrollReveal>


        {/* ============================================
            FOUR-STEP FRAMEWORK
        ============================================ */}
        {(() => {
          const steps = [
            {
              number: "01",
              icon: Target,
              title: "Discovery & Analysis",
              description:
                "Understanding business goals, market dynamics, customer behavior, and growth opportunities.",
            },
            {
              number: "02",
              icon: Lightbulb,
              title: "Strategy Development",
              description:
                "Creating growth strategies that align positioning, marketing, sales, CRM, and AI initiatives.",
            },
            {
              number: "03",
              icon: Rocket,
              title: "Implementation",
              description:
                "Executing integrated programs across customer acquisition, engagement, automation, and communications.",
            },
            {
              number: "04",
              icon: BarChart3,
              title: "Optimization & Scale",
              description:
                "Improving performance through data, insights, automation, and continuous refinement.",
            },
          ];

          return (
            <div className="relative mt-8">

              {/* ============================================
                  DESKTOP CONNECTION LINE
              ============================================ */}
              <div className="pointer-events-none absolute left-[8%] right-[8%] top-[35px] hidden lg:block">
                <div className="relative h-px bg-gray-200">

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 origin-left"
                    style={{
                      background:
                        "linear-gradient(90deg, #0000aa, #ffb300)",
                      opacity: 0.4,
                    }}
                  />

                </div>
              </div>


              {/* ============================================
                  STEP GRID
              ============================================ */}
              <StaggerContainer className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                {steps.map((step, index) => {
                  const StepIcon = step.icon;

                  return (
                    <motion.div
                      key={step.number}
                      variants={staggerItemVariants}
                      className="relative min-w-0"
                    >
                      <motion.article
                        whileHover={{
                          y: -5,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group relative h-full min-h-[220px] overflow-hidden rounded-[22px] border border-gray-200/80 bg-white/82 p-5 shadow-[0_14px_42px_rgba(0,1,49,0.055)] backdrop-blur-xl transition-all duration-300 hover:border-white hover:bg-white hover:shadow-[0_22px_58px_rgba(0,1,49,0.10)]"
                      >
                        {/* Accent */}
                        <div
                          className="absolute left-0 top-0 h-1 w-10 rounded-r-full transition-all duration-500 group-hover:w-full"
                          style={{
                            background: gradients.primary,
                          }}
                        />

                        {/* Background number */}
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -right-1 -top-4 text-[78px] font-black leading-none tracking-[-0.07em] opacity-[0.025]"
                          style={{
                            color: colors.brand.primary,
                          }}
                        >
                          {step.number}
                        </span>


                        {/* ============================================
                            STEP NODE
                        ============================================ */}
                        <div className="relative z-10 flex items-center justify-between">

                          <div
                            className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-gray-100 bg-white shadow-[0_8px_25px_rgba(0,1,49,0.07)]"
                            style={{
                              color: colors.brand.secondary,
                            }}
                          >
                            <StepIcon className="h-5 w-5" />

                            {/* Connection point */}
                            <span
                              className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white"
                              style={{
                                backgroundColor: colors.brand.accent,
                              }}
                            />
                          </div>

                          <span
                            className="text-[10px] font-bold tracking-[0.16em]"
                            style={{
                              color: colors.brand.secondary,
                            }}
                          >
                            {step.number}
                          </span>

                        </div>


                        {/* ============================================
                            CONTENT
                        ============================================ */}
                        <div className="relative z-10 mt-6">

                          <h3
                            className="text-sm font-bold leading-snug sm:text-base"
                            style={{
                              color: colors.brand.primary,
                            }}
                          >
                            {step.title}
                          </h3>

                          <div
                            className="mt-3 h-0.5 w-8 rounded-full"
                            style={{
                              backgroundColor: colors.brand.accent,
                            }}
                          />

                          <p className="mt-3 text-xs leading-[1.75] text-gray-600">
                            {step.description}
                          </p>

                        </div>


                        {/* ============================================
                            STEP PROGRESS
                        ============================================ */}
                        <div className="absolute inset-x-5 bottom-4">

                          <div className="h-[2px] overflow-hidden rounded-full bg-gray-100">
                            <motion.div
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.65,
                                delay: 0.2 + index * 0.08,
                              }}
                              className="h-full origin-left"
                              style={{
                                width: `${(index + 1) * 25}%`,
                                background: gradients.primary,
                              }}
                            />
                          </div>

                        </div>

                      </motion.article>


                      {/* ============================================
                          MOBILE/TABLET ARROW
                      ============================================ */}
                      {index < steps.length - 1 && (
                        <div className="flex justify-center py-1 lg:hidden">
                          <ArrowRight
                            className="h-4 w-4 rotate-90 sm:rotate-0"
                            style={{
                              color: colors.brand.accent,
                            }}
                          />
                        </div>
                      )}

                    </motion.div>
                  );
                })}

              </StaggerContainer>

            </div>
          );
        })()}

      </div>
    </Container>
  </Section>
</ModernSectionBackground>


    </PageBackground>
  );
}

export default AboutPage;
