/**
 * ============================================
 * ABOUT US PAGE - AdvantEdge
 * ============================================
 * Updated with approved About page content
 * UI/UX aligned with Home, Services, and Industries
 * ============================================
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Target,
  Users,
  CheckCircle2,
  Building2,
  Sparkles,
  Layers,
  Brain,
  Briefcase,
  TrendingUp,
  Rocket,
  BarChart3,
  Search,
  Lightbulb,
  Zap,
  Shield,
  Network,
  Workflow
} from 'lucide-react';

// Primitive Components
import {
  Section,
  Container,
  SectionHeader,
  GlassCard,
  IconBadge
} from '../components/primitives';

// Layout Components
import { PageBackground } from '../components/layout';

// SEO Components
import { PageSEO } from '../components/seo';
import { PAGE_SEO } from '../utils/seo-config';

// UI Components
import {
  ScrollReveal,
  StaggerContainer,
  staggerItemVariants
} from '../components/ScrollReveal';
import { MagneticButton } from '../components/MagneticButton';
import { ModernSectionBackground } from '../components/ModernSectionBackground';
import { OptimizedImage } from '../components/OptimizedImage';
import { GlowEffect } from '../components/GlowEffect';

// Design Tokens
import { colors, gradients } from '../../styles/design-tokens';

// ============================================
// DATA DEFINITIONS
// ============================================

const keyHighlights = [
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Business-Led Thinking',
    description:
      'Built by leaders with experience across business development, market expansion, operations, and customer engagement.',
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: 'Integrated Growth Approach',
    description:
      'Strategy, marketing, CRM, automation, and AI aligned within one connected framework.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Revenue-Focused Execution',
    description:
      'Every initiative is designed to support customer acquisition, pipeline growth, and operational efficiency.',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Built for Scale',
    description:
      'Processes, systems, and technology designed to grow with your business.',
  },
];

const philosophyPillars = [
  {
    icon: <Target className="w-7 h-7" />,
    title: 'Strategic Marketing',
    description:
      'Building market clarity through positioning, competitive differentiation, messaging, and growth planning.',
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: 'Integrated Marketing',
    description:
      'Executing coordinated programs across digital, content, communications, CRM, and customer engagement channels.',
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: 'AI Solutions',
    description:
      'Leveraging automation, predictive intelligence, customer insights, and workflow optimization to improve business performance.',
  },
];

const leadership = [
  {
    number: '01',
    name: 'Jennifer Jordan',
    role: 'Founder & President',
    initials: 'JJ',
    bio: [
      'Jennifer brings a unique combination of executive leadership, business development, communications expertise, and organizational management experience developed over more than two decades.',
      'Her background spans corporate communications, operational leadership, client relationship management, and educational leadership, enabling her to build strong partnerships while creating systems that support long-term organizational growth.',
      'At AdvantEdge, Jennifer focuses on client relationships, strategic direction, and ensuring that every engagement remains aligned with measurable business outcomes.',
    ],
    expertise: [
      'Executive Leadership',
      'Strategic Communications',
      'Client Relationship Management',
      'Organizational Development',
      'Community & Stakeholder Engagement',
      'Business Growth Strategy',
    ],
    source: 'Source: Jennifer Jordan professional profile.',
  },
  {
    number: '02',
    name: 'Dwight Jordan',
    role: 'Chief Executive Officer',
    initials: 'DJ',
    bio: [
      'Dwight brings extensive experience in global business development, market expansion, strategic marketing, and technology-driven growth initiatives.',
      "Throughout his career, he has led international growth programs, managed global portfolios exceeding $80 million, supported market expansion across multiple regions, and worked with some of the world's leading transportation and technology organizations.",
      'At AdvantEdge, Dwight leads growth strategy, marketing innovation, market expansion initiatives, and business development programs that help clients unlock new opportunities and accelerate revenue growth.',
    ],
    expertise: [
      'Strategic Marketing Leadership',
      'Global Market Expansion',
      'Business Development',
      'Growth Strategy',
      'Opportunity Creation',
      'Technology Commercialization',
      'Revenue Growth Programs',
    ],
    source: 'Source: Dwight Jordan professional CV.',
  },
  {
    number: '03',
    name: 'Harish Banwari',
    role: 'Co-Founder',
    initials: 'HB',
    bio: [
      'Harish brings extensive experience across business strategy, digital transformation, integrated marketing, branding, AI enablement, and growth consulting.',
      'His work has focused on helping organizations align strategy, technology, marketing, and customer engagement systems to create scalable growth frameworks. With experience supporting businesses across multiple industries and international markets, he specializes in connecting business objectives with practical execution.',
      'At AdvantEdge, Harish leads strategic consulting initiatives focused on integrated marketing systems, AI adoption, business growth acceleration, and operational alignment.',
    ],
    expertise: [
      'Strategic Growth Consulting',
      'Integrated Marketing Systems',
      'Digital Transformation',
      'AI Business Solutions',
      'Brand Strategy',
      'Revenue Growth Frameworks',
      'Market Expansion',
    ],
    source: '',
  },
];

const whyPillars = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Strategic Clarity',
    description: 'Clear positioning, market focus, and growth direction.',
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: 'Connected Execution',
    description: 'Integrated systems rather than disconnected activities.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'AI-Enabled Operations',
    description:
      'Automation and intelligence that improve efficiency and customer engagement.',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Measurable Outcomes',
    description:
      'Growth initiatives aligned to business performance and revenue objectives.',
  },
];

const approachSteps = [
  {
    number: '01',
    icon: <Search className="w-6 h-6" />,
    title: 'Discovery & Analysis',
    description:
      'Understanding business goals, market dynamics, customer behavior, and growth opportunities.',
  },
  {
    number: '02',
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Strategy Development',
    description:
      'Creating growth strategies that align positioning, marketing, sales, CRM, and AI initiatives.',
  },
  {
    number: '03',
    icon: <Layers className="w-6 h-6" />,
    title: 'Implementation',
    description:
      'Executing integrated programs across customer acquisition, engagement, automation, and communications.',
  },
  {
    number: '04',
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Optimization & Scale',
    description:
      'Improving performance through data, insights, automation, and continuous refinement.',
  },
];

// ============================================
// ABOUT PAGE
// ============================================

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
          1. HERO SECTION
          ============================================ */}
      <ModernSectionBackground
        variant="mesh-gradient-blue"
        className="relative overflow-hidden"
      >
        <Section
          spacing="base"
          animate
          background="transparent"
          className="relative overflow-hidden"
        >
          {/* Ambient brand effects */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.22]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,1,49,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.04) 1px, transparent 1px)',
                backgroundSize: '54px 54px',
                maskImage:
                  'linear-gradient(to right, black 0%, black 48%, transparent 90%)',
                WebkitMaskImage:
                  'linear-gradient(to right, black 0%, black 48%, transparent 90%)',
              }}
            />

            <div
              className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full opacity-[0.08] blur-[140px]"
              style={{ backgroundColor: colors.brand.secondary }}
            />

            <div
              className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full opacity-[0.10] blur-[140px]"
              style={{ backgroundColor: colors.brand.accent }}
            />
          </div>

          <Container size="xl">
            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -45 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.6 }}
                  className="mb-4"
                >
                  <GlowEffect color={colors.brand.accent} intensity={20}>
                    <motion.span
                      className="inline-flex items-center rounded-full border-2 px-3.5 py-1.5 shadow-lg"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.94)',
                        backdropFilter: 'blur(12px)',
                        borderColor: colors.brand.accent,
                      }}
                      whileHover={{
                        scale: 1.04,
                        borderColor: colors.brand.primary,
                      }}
                      transition={{ duration: 0.25 }}
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

                <h1
                  className="max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-4xl lg:text-[48px]"
                  style={{ color: colors.brand.primary }}
                >
                  Building Growth Systems That Drive Business Performance
                </h1>

                <div className="mt-5 max-w-2xl space-y-3">
                  <p className="text-sm leading-[1.8] text-gray-700 sm:text-[15px]">
                    AdvantEdge was built on a simple belief: growth happens when
                    strategy, marketing, sales, CRM, and technology work
                    together.
                  </p>

                  <p className="text-sm leading-[1.8] text-gray-700 sm:text-[15px]">
                    We help organizations eliminate disconnected execution and
                    build integrated growth systems designed to improve
                    customer acquisition, strengthen market positioning, and
                    create measurable business outcomes.
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-2.5">
                  {[
                    'Strategy',
                    'Marketing',
                    'Sales',
                    'CRM',
                    'Technology',
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/90 bg-white/68 px-3 py-1.5 text-[10px] font-bold backdrop-blur-xl"
                      style={{ color: colors.brand.primary }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Right */}
              <motion.div
                initial={{ opacity: 0, x: 45 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-[28px] border border-white/90 bg-white/55 p-2 shadow-[0_28px_80px_rgba(0,1,49,0.14)] backdrop-blur-xl">
                  <div className="relative h-[320px] overflow-hidden rounded-[22px] sm:h-[380px]">
                    <OptimizedImage
                      src="https://images.unsplash.com/photo-1758691736424-4b4273948341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwYm9hcmRyb29tfGVufDF8fHx8MTc3NDU2MDg5NHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="AdvantEdge business strategy and leadership"
                      className="h-full w-full object-cover"
                      priority={true}
                    />

                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(0,1,49,0.02) 0%, rgba(0,1,49,0.12) 54%, rgba(0,1,49,0.84) 100%)',
                      }}
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <p
                        className="text-[9px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: colors.brand.accent }}
                      >
                        Connected Growth
                      </p>
                      <p className="mt-2 max-w-md text-base font-bold leading-[1.35] text-white sm:text-lg">
                        Strategy, marketing, sales, CRM, and technology working
                        together.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative floating system card */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.55 }}
                  className="absolute -bottom-5 left-5 hidden rounded-2xl border border-white/90 bg-white/88 px-4 py-3 shadow-[0_18px_45px_rgba(0,1,49,0.12)] backdrop-blur-xl sm:block"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-xl"
                      style={{
                        color: colors.brand.secondary,
                        backgroundColor: `${colors.brand.secondary}0D`,
                      }}
                    >
                      <Workflow className="h-4 w-4" />
                    </div>

                    <div>
                      <p
                        className="text-[9px] font-bold uppercase tracking-[0.15em]"
                        style={{ color: colors.brand.secondary }}
                      >
                        Integrated
                      </p>
                      <p
                        className="mt-0.5 text-xs font-bold"
                        style={{ color: colors.brand.primary }}
                      >
                        Growth Systems
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          2. WHO WE ARE
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
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div
              className="absolute -left-44 top-20 h-[440px] w-[440px] rounded-full opacity-[0.05] blur-[130px]"
              style={{ backgroundColor: colors.brand.secondary }}
            />
            <div
              className="absolute -right-44 bottom-0 h-[440px] w-[440px] rounded-full opacity-[0.07] blur-[130px]"
              style={{ backgroundColor: colors.brand.accent }}
            />
          </div>

          <Container size="xl">
            <div className="relative z-10 mx-auto max-w-7xl">
              <div className="grid items-start gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10">
                {/* Narrative */}
                <ScrollReveal>
                  <div className="lg:sticky lg:top-24">
                    <div
                      className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
                      style={{
                        color: colors.brand.secondary,
                        borderColor: `${colors.brand.secondary}20`,
                        backgroundColor: 'rgba(255,255,255,0.76)',
                      }}
                    >
                      <Building2 className="h-3.5 w-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                        Who We Are
                      </span>
                    </div>

                    <h2
                      className="mt-5 text-2xl font-bold leading-[1.15] tracking-[-0.03em] sm:text-3xl lg:text-[40px]"
                      style={{ color: colors.brand.primary }}
                    >
                      More Than a Marketing Agency
                    </h2>

                    <div className="mt-5 space-y-3 text-sm leading-[1.82] text-gray-700">
                      <p>
                        Most businesses don't struggle because they lack
                        marketing activity.
                      </p>

                      <p className="font-semibold" style={{ color: colors.brand.primary }}>
                        They struggle because their growth systems are
                        disconnected.
                      </p>

                      <p>
                        Marketing operates separately from sales. Customer data
                        lives in multiple platforms. Automation is underutilized.
                        Valuable opportunities are lost between teams, tools,
                        and processes.
                      </p>

                      <p>AdvantEdge was created to solve that challenge.</p>

                      <p>
                        We combine strategic marketing, integrated execution,
                        and AI-powered business solutions to help organizations
                        build scalable systems that support long-term growth.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Highlights */}
                <StaggerContainer className="grid gap-4 sm:grid-cols-2">
                  {keyHighlights.map((item, index) => (
                    <motion.div
                      key={item.title}
                      variants={staggerItemVariants}
                      className="h-full"
                    >
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{
                          duration: 0.28,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group relative h-full overflow-hidden rounded-[22px] border border-white/90 bg-white/72 p-5 shadow-[0_16px_46px_rgba(0,1,49,0.055)] backdrop-blur-xl transition-all duration-300 hover:bg-white/95 hover:shadow-[0_24px_65px_rgba(0,1,49,0.10)]"
                      >
                        <div
                          className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                          style={{ background: gradients.primary }}
                        />

                        <span
                          className="pointer-events-none absolute -right-1 -top-5 text-[72px] font-black leading-none opacity-[0.035]"
                          style={{ color: colors.brand.primary }}
                        >
                          0{index + 1}
                        </span>

                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-xl border"
                          style={{
                            color: colors.brand.secondary,
                            borderColor: `${colors.brand.secondary}14`,
                            backgroundColor: `${colors.brand.secondary}0D`,
                          }}
                        >
                          {item.icon}
                        </div>

                        <h3
                          className="mt-5 text-base font-bold leading-[1.25]"
                          style={{ color: colors.brand.primary }}
                        >
                          {item.title}
                        </h3>

                        <p className="mt-3 text-xs leading-[1.75] text-gray-600 sm:text-[13px]">
                          {item.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          3. WHAT WE BELIEVE
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
              className="absolute inset-0 opacity-[0.22]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,1,49,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.04) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          <Container size="xl">
            <div className="relative z-10 mx-auto max-w-7xl">
              <SectionHeader
                badge="Our Philosophy"
                badgeIcon={<Target className="h-4 w-4" />}
                title="Growth Requires More Than Marketing"
                description="Modern businesses need more than campaigns."
                align="center"
                maxWidth="md"
              />

              <ScrollReveal>
                <div className="mx-auto mt-5 max-w-3xl text-center">
                  <p className="text-sm leading-[1.8] text-gray-600 sm:text-[15px]">
                    They need connected systems that align strategy, execution,
                    customer engagement, and operational intelligence.
                  </p>

                  <p
                    className="mt-3 text-sm font-bold sm:text-[15px]"
                    style={{ color: colors.brand.primary }}
                  >
                    Our approach combines three core disciplines:
                  </p>
                </div>
              </ScrollReveal>

              <StaggerContainer className="mt-10 grid gap-5 lg:grid-cols-3">
                {philosophyPillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    variants={staggerItemVariants}
                    className="h-full"
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group relative h-full overflow-hidden rounded-[24px] border border-white/90 bg-white/74 p-6 shadow-[0_18px_55px_rgba(0,1,49,0.065)] backdrop-blur-xl transition-all duration-300 hover:bg-white/96 hover:shadow-[0_28px_78px_rgba(0,1,49,0.12)]"
                    >
                      <div
                        className="absolute left-0 top-0 h-1 w-full"
                        style={{
                          background:
                            index === 2
                              ? `linear-gradient(90deg, ${colors.brand.secondary}, ${colors.brand.accent})`
                              : gradients.primary,
                        }}
                      />

                      <div className="flex items-start justify-between gap-4">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-xl border"
                          style={{
                            color: colors.brand.secondary,
                            borderColor: `${colors.brand.secondary}15`,
                            backgroundColor: `${colors.brand.secondary}0D`,
                          }}
                        >
                          {pillar.icon}
                        </div>

                        <span
                          className="text-[42px] font-black leading-none opacity-[0.05]"
                          style={{ color: colors.brand.primary }}
                        >
                          0{index + 1}
                        </span>
                      </div>

                      <h3
                        className="mt-6 text-lg font-bold leading-[1.2]"
                        style={{ color: colors.brand.primary }}
                      >
                        {pillar.title}
                      </h3>

                      <p className="mt-3 text-sm leading-[1.78] text-gray-600">
                        {pillar.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </StaggerContainer>

              <ScrollReveal delay={0.15}>
                <div
                  className="relative mt-8 overflow-hidden rounded-[24px] px-5 py-6 text-center shadow-[0_20px_65px_rgba(0,1,49,0.16)] sm:px-7"
                  style={{
                    background:
                      'linear-gradient(135deg, #000131 0%, #0000aa 130%)',
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-20 blur-[80px]"
                    style={{ backgroundColor: colors.brand.accent }}
                  />

                  <p className="relative z-10 mx-auto max-w-3xl text-sm font-medium leading-[1.8] text-white/80 sm:text-[15px]">
                    Together, these capabilities create a growth ecosystem
                    designed to deliver sustainable and measurable results.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          4. LEADERSHIP TEAM
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
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div
              className="absolute -left-48 top-[20%] h-[500px] w-[500px] rounded-full opacity-[0.05] blur-[145px]"
              style={{ backgroundColor: colors.brand.secondary }}
            />
            <div
              className="absolute -right-48 bottom-[5%] h-[500px] w-[500px] rounded-full opacity-[0.07] blur-[145px]"
              style={{ backgroundColor: colors.brand.accent }}
            />
          </div>

          <Container size="xl">
            <div className="relative z-10 mx-auto max-w-7xl">
              <SectionHeader
                badge="Leadership"
                badgeIcon={<Users className="h-4 w-4" />}
                title="Experienced Leaders Driving Strategic Growth"
                description="Our leadership team brings together expertise across business development, strategic marketing, communications, customer engagement, operational management, and emerging technologies."
                align="center"
                maxWidth="md"
              />

              <ScrollReveal>
                <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-[1.8] text-gray-600">
                  Together, they help organizations navigate growth
                  opportunities, market expansion, and digital transformation
                  with greater clarity and confidence.
                </p>
              </ScrollReveal>

              <div className="mt-10 space-y-6">
                {leadership.map((leader, index) => (
                  <ScrollReveal
                    key={leader.name}
                    delay={Math.min(index * 0.08, 0.16)}
                  >
                    <motion.article
                      whileHover={{ y: -3 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group relative overflow-hidden rounded-[28px] border border-white/90 bg-white/74 shadow-[0_20px_68px_rgba(0,1,49,0.07)] backdrop-blur-2xl transition-all duration-300 hover:bg-white/94 hover:shadow-[0_30px_90px_rgba(0,1,49,0.12)]"
                    >
                      <div
                        className="absolute inset-y-0 left-0 w-1"
                        style={{ background: gradients.primary }}
                      />

                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-3 -top-10 text-[130px] font-black leading-none tracking-[-0.08em] opacity-[0.028]"
                        style={{ color: colors.brand.primary }}
                      >
                        {leader.number}
                      </span>

                      <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
                        {/* Profile identity */}
                        <div
                          className={`relative border-b border-gray-200/70 p-5 sm:p-6 lg:border-b-0 lg:p-7 ${
                            index % 2 === 0
                              ? 'lg:border-r'
                              : 'lg:order-2 lg:border-l'
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-lg font-black text-white shadow-[0_14px_34px_rgba(0,0,170,0.20)]"
                              style={{ background: gradients.primary }}
                            >
                              {leader.initials}
                            </div>

                            <div>
                              <p
                                className="text-[9px] font-bold uppercase tracking-[0.18em]"
                                style={{ color: colors.brand.secondary }}
                              >
                                Leadership Profile {leader.number}
                              </p>

                              <h3
                                className="mt-1.5 text-xl font-bold leading-[1.15] tracking-[-0.025em] sm:text-2xl"
                                style={{ color: colors.brand.primary }}
                              >
                                {leader.name}
                              </h3>

                              <p
                                className="mt-1 text-sm font-bold"
                                style={{ color: colors.brand.secondary }}
                              >
                                {leader.role}
                              </p>
                            </div>
                          </div>

                          <div className="mt-6">
                            <p
                              className="text-[9px] font-bold uppercase tracking-[0.17em]"
                              style={{ color: colors.brand.secondary }}
                            >
                              Areas of Expertise
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                              {leader.expertise.map((item) => (
                                <span
                                  key={item}
                                  className="rounded-full border border-gray-200/80 bg-white/70 px-3 py-1.5 text-[10px] font-semibold text-gray-600"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>

                          {leader.source && (
                            <p className="mt-5 text-[10px] italic text-gray-400">
                              {leader.source}
                            </p>
                          )}
                        </div>

                        {/* Biography */}
                        <div
                          className={`p-5 sm:p-6 lg:p-7 ${
                            index % 2 === 0 ? '' : 'lg:order-1'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className="h-2 w-2 rounded-full"
                              style={{ backgroundColor: colors.brand.accent }}
                            />
                            <p
                              className="text-[9px] font-bold uppercase tracking-[0.18em]"
                              style={{ color: colors.brand.secondary }}
                            >
                              Leadership Perspective
                            </p>
                          </div>

                          <div className="mt-5 space-y-4">
                            {leader.bio.map((paragraph) => (
                              <p
                                key={paragraph}
                                className="text-sm leading-[1.84] text-gray-650"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          5. WHY CLIENTS WORK WITH US
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
                badge="Why AdvantEdge"
                badgeIcon={<Shield className="h-4 w-4" />}
                title="Built for Businesses Focused on Long-Term Growth"
                description="Organizations choose AdvantEdge because they need more than isolated marketing services."
                align="center"
                maxWidth="md"
              />

              <ScrollReveal>
                <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-[1.8] text-gray-600">
                  They need a strategic partner that understands how marketing,
                  sales, customer engagement, CRM, automation, and AI influence
                  business performance.
                </p>
              </ScrollReveal>

              <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {whyPillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    variants={staggerItemVariants}
                    className="h-full"
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{
                        duration: 0.28,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group relative h-full overflow-hidden rounded-[22px] border border-white/90 bg-white/72 p-5 shadow-[0_16px_48px_rgba(0,1,49,0.06)] backdrop-blur-xl transition-all duration-300 hover:bg-white/95 hover:shadow-[0_26px_72px_rgba(0,1,49,0.11)]"
                    >
                      <span
                        className="pointer-events-none absolute -right-2 -top-5 text-[74px] font-black leading-none opacity-[0.035]"
                        style={{ color: colors.brand.primary }}
                      >
                        0{index + 1}
                      </span>

                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl border"
                        style={{
                          color: colors.brand.secondary,
                          borderColor: `${colors.brand.secondary}14`,
                          backgroundColor: `${colors.brand.secondary}0D`,
                        }}
                      >
                        {pillar.icon}
                      </div>

                      <h3
                        className="mt-5 text-base font-bold leading-[1.25]"
                        style={{ color: colors.brand.primary }}
                      >
                        {pillar.title}
                      </h3>

                      <p className="mt-3 text-xs leading-[1.75] text-gray-600 sm:text-[13px]">
                        {pillar.description}
                      </p>

                      <div
                        className="mt-5 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-16"
                        style={{ background: gradients.primary }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          6. OUR APPROACH
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
            <div className="mx-auto max-w-7xl">
              <SectionHeader
                badge="How We Work"
                badgeIcon={<Workflow className="h-4 w-4" />}
                title="A Framework Designed for Sustainable Growth"
                align="center"
                maxWidth="md"
              />

              <div className="relative mt-10">
                {/* Desktop connector */}
                <div
                  aria-hidden="true"
                  className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px lg:block"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${colors.brand.secondary}35 8%, ${colors.brand.secondary}35 92%, transparent)`,
                  }}
                />

                <StaggerContainer className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                  {approachSteps.map((step, index) => (
                    <motion.div
                      key={step.number}
                      variants={staggerItemVariants}
                      className="h-full"
                    >
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{
                          duration: 0.28,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group relative h-full"
                      >
                        <div className="relative z-10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-[5px] border-white text-sm font-black text-white shadow-[0_10px_30px_rgba(0,1,49,0.18)] lg:mb-5"
                          style={{ background: gradients.primary }}
                        >
                          {step.number}
                        </div>

                        <div className="h-[calc(100%-72px)] overflow-hidden rounded-[22px] border border-white/90 bg-white/72 p-5 text-center shadow-[0_16px_48px_rgba(0,1,49,0.06)] backdrop-blur-xl transition-all duration-300 group-hover:bg-white/95 group-hover:shadow-[0_26px_72px_rgba(0,1,49,0.11)]">
                          <div
                            className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl"
                            style={{
                              color: colors.brand.secondary,
                              backgroundColor: `${colors.brand.secondary}0D`,
                            }}
                          >
                            {step.icon}
                          </div>

                          <h3
                            className="mt-4 text-base font-bold leading-[1.25]"
                            style={{ color: colors.brand.primary }}
                          >
                            {step.title}
                          </h3>

                          <p className="mt-3 text-xs leading-[1.75] text-gray-600 sm:text-[13px]">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          7. FINAL CTA
          ============================================ */}
      <ModernSectionBackground
        variant="image-overlay-workspace"
        className="relative overflow-hidden"
      >
        <section className="relative overflow-hidden bg-transparent px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(0,1,49,0.94) 0%, rgba(0,1,49,0.84) 46%, rgba(0,0,170,0.66) 100%)',
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full opacity-20 blur-[125px]"
            style={{ backgroundColor: colors.brand.accent }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full opacity-18 blur-[125px]"
            style={{ backgroundColor: colors.brand.secondary }}
          />

          <Container size="lg">
            <ScrollReveal>
              <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[30px] border border-white/15 bg-white/[0.075] px-5 py-8 text-center shadow-[0_32px_110px_rgba(0,1,49,0.36)] backdrop-blur-2xl sm:px-8 sm:py-10 lg:px-10 lg:py-11">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
                    backgroundSize: '54px 54px',
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10"
                    style={{ color: colors.brand.accent }}
                  >
                    <Rocket className="h-6 w-6" />
                  </div>

                  <h2 className="mx-auto mt-5 max-w-3xl text-2xl font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-3xl lg:text-[40px]">
                    Build a Smarter Growth Engine
                  </h2>

                  <p className="mx-auto mt-4 max-w-3xl text-sm leading-[1.85] text-white/66">
                    Let's identify where your strategy, marketing, CRM,
                    customer engagement, and AI systems are limiting growth-and
                    build a connected framework designed for measurable
                    business outcomes.
                  </p>

                  <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                    <MagneticButton strength={0.3}>
                      <Link
                        to="/contact"
                        className="group inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-[0_15px_38px_rgba(0,0,170,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(0,0,170,0.42)]"
                        style={{ background: gradients.primary }}
                      >
                        Book a Strategy Call
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </MagneticButton>

                    <MagneticButton strength={0.2}>
                      <Link
                        to="/services"
                        className="group inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/16"
                      >
                        Explore Growth Solutions
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </MagneticButton>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="mx-auto max-w-3xl text-xs font-medium leading-[1.7] text-white/52 sm:text-sm">
                      We partner with growth-focused organizations seeking
                      strategic clarity, integrated execution, and scalable
                      growth.
                    </p>
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

export default AboutPage;
