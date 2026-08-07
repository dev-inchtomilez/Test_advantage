/**
 * ============================================
 * ABOUT US PAGE - AdvantEdge
 * ============================================
 * Premium full-page rebuild
 * Content preserved from approved About page copy
 * UI/UX aligned with Home / Services / Industries
 * ============================================
 */

import { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
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
  Megaphone,
  RefreshCw,
  Award
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
  staggerItemVariants
} from '../components/ScrollReveal';
import { MagneticButton } from '../components/MagneticButton';
import { ModernSectionBackground } from '../components/ModernSectionBackground';
import { OptimizedImage } from '../components/OptimizedImage';
import { GlowEffect } from '../components/GlowEffect';

// Design Tokens
import { colors, gradients } from '../../styles/design-tokens';

// ============================================
// IMAGE ASSETS
// ============================================

const aboutImages = {
  hero:
    'https://images.unsplash.com/photo-1758691736424-4b4273948341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',

  whoWeAre:
    'https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1400',

  strategy:
    'https://images.unsplash.com/photo-1765438868883-43efce4fd145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1400',

  integrated:
    'https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1400',

  ai:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',

  leadership:
    'https://images.unsplash.com/photo-1761912915167-558fa68f16b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',

  partnership:
    'https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',

  approach:
    'https://images.unsplash.com/photo-1744854185466-cf95c3064cec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',

  cta:
    'https://images.unsplash.com/photo-1643391448961-621e0b1bc5b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600',
};

// ============================================
// DATA DEFINITIONS
// ============================================

const connectedGrowthSystem = [
  {
    label: 'Strategy',
    icon: <Target className="h-4 w-4" />,
  },
  {
    label: 'Marketing',
    icon: <Megaphone className="h-4 w-4" />,
  },
  {
    label: 'Sales',
    icon: <TrendingUp className="h-4 w-4" />,
  },
  {
    label: 'CRM',
    icon: <Users className="h-4 w-4" />,
  },
  {
    label: 'Technology',
    icon: <Brain className="h-4 w-4" />,
  },
];

const keyHighlights = [
  {
    number: '01',
    icon: <Briefcase className="h-6 w-6" />,
    title: 'Business-Led Thinking',
    description:
      'Built by leaders with experience across business development, market expansion, operations, and customer engagement.',
  },
  {
    number: '02',
    icon: <Layers className="h-6 w-6" />,
    title: 'Integrated Growth Approach',
    description:
      'Strategy, marketing, CRM, automation, and AI aligned within one connected framework.',
  },
  {
    number: '03',
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Revenue-Focused Execution',
    description:
      'Every initiative is designed to support customer acquisition, pipeline growth, and operational efficiency.',
  },
  {
    number: '04',
    icon: <Rocket className="h-6 w-6" />,
    title: 'Built for Scale',
    description:
      'Processes, systems, and technology designed to grow with your business.',
  },
];

const philosophyPillars = [
  {
    number: '01',
    eyebrow: 'Strategic Marketing',
    icon: <Target className="h-6 w-6" />,
    title: 'Strategic Marketing',
    description:
      'Building market clarity through positioning, competitive differentiation, messaging, and growth planning.',
    image: aboutImages.strategy,
  },
  {
    number: '02',
    eyebrow: 'Integrated Marketing',
    icon: <Layers className="h-6 w-6" />,
    title: 'Integrated Marketing',
    description:
      'Executing coordinated programs across digital, content, communications, CRM, and customer engagement channels.',
    image: aboutImages.integrated,
  },
  {
    number: '03',
    eyebrow: 'AI Solutions',
    icon: <Brain className="h-6 w-6" />,
    title: 'AI Solutions',
    description:
      'Leveraging automation, predictive intelligence, customer insights, and workflow optimization to improve business performance.',
    image: aboutImages.ai,
  },
];

const leadership = [
  {
    number: '01',
    name: 'Jennifer Jordan',
    role: 'Founder & President',
    initials: 'JJ',
    image:
      'https://drive.google.com/thumbnail?id=1I6HApgDg2q2niQdyiOC8ULZou7wxY8sg&sz=w1200',
    imageAlt: 'Jennifer Jordan, Founder & President of AdvantEdge',
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
    image:
      'https://drive.google.com/thumbnail?id=1T-o9KRJqxqgiW-aHttdg45R6iDGoSiEX&sz=w1200',
    imageAlt: 'Dwight Jordan, Chief Executive Officer of AdvantEdge',
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
    image: '',
    imageAlt: 'Harish Banwari, Co-Founder of AdvantEdge',
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
    number: '01',
    icon: <Target className="h-6 w-6" />,
    title: 'Strategic Clarity',
    description: 'Clear positioning, market focus, and growth direction.',
  },
  {
    number: '02',
    icon: <Layers className="h-6 w-6" />,
    title: 'Connected Execution',
    description: 'Integrated systems rather than disconnected activities.',
  },
  {
    number: '03',
    icon: <Zap className="h-6 w-6" />,
    title: 'AI-Enabled Operations',
    description:
      'Automation and intelligence that improve efficiency and customer engagement.',
  },
  {
    number: '04',
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Measurable Outcomes',
    description:
      'Growth initiatives aligned to business performance and revenue objectives.',
  },
];

const approachSteps = [
  {
    number: '01',
    icon: <Search className="h-6 w-6" />,
    title: 'Discovery & Analysis',
    description:
      'Understanding business goals, market dynamics, customer behavior, and growth opportunities.',
  },
  {
    number: '02',
    icon: <Lightbulb className="h-6 w-6" />,
    title: 'Strategy Development',
    description:
      'Creating growth strategies that align positioning, marketing, sales, CRM, and AI initiatives.',
  },
  {
    number: '03',
    icon: <Layers className="h-6 w-6" />,
    title: 'Implementation',
    description:
      'Executing integrated programs across customer acquisition, engagement, automation, and communications.',
  },
  {
    number: '04',
    icon: <RefreshCw className="h-6 w-6" />,
    title: 'Optimization & Scale',
    description:
      'Improving performance through data, insights, automation, and continuous refinement.',
  },
];

// ============================================
// ABOUT PAGE
// ============================================

export function AboutPage() {
  const [activePhilosophy, setActivePhilosophy] = useState(0);
  const [activeLeader, setActiveLeader] = useState(0);
  const [activeApproach, setActiveApproach] = useState(0);

  const selectedPhilosophy = philosophyPillars[activePhilosophy];
  const selectedLeader = leadership[activeLeader];
  const selectedApproach = approachSteps[activeApproach];

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
          1. HERO — ABOUT ADVANTEDGE
          ============================================ */}
      <section className="relative min-h-[650px] overflow-hidden sm:min-h-[700px] lg:min-h-[720px]">
        {/* Background image */}
        <OptimizedImage
          src={aboutImages.hero}
          alt="AdvantEdge strategy and business leadership"
          className="absolute inset-0 h-full w-full object-cover object-center"
          priority={true}
        />

        {/* Brand overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,1,49,0.985) 0%, rgba(0,1,49,0.94) 38%, rgba(0,1,49,0.70) 64%, rgba(0,1,49,0.30) 100%)',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,1,49,0.12) 0%, rgba(0,1,49,0.04) 46%, rgba(0,1,49,0.82) 100%)',
          }}
        />

        {/* Technical grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)',
            backgroundSize: '58px 58px',
            maskImage:
              'linear-gradient(to right, black 0%, black 52%, transparent 90%)',
            WebkitMaskImage:
              'linear-gradient(to right, black 0%, black 52%, transparent 90%)',
          }}
        />

        {/* Ambient glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-44 top-14 h-[520px] w-[520px] rounded-full opacity-30 blur-[155px]"
          style={{ backgroundColor: colors.brand.secondary }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[10%] top-[16%] h-[360px] w-[360px] rounded-full opacity-15 blur-[135px]"
          style={{ backgroundColor: colors.brand.accent }}
        />

        <Container size="xl">
          <div className="relative z-10 flex min-h-[650px] items-center py-16 sm:min-h-[700px] lg:min-h-[720px]">
            <div className="grid w-full items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
              {/* Left content */}
              <motion.div
                initial={{ opacity: 0, x: -42 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.82,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-3xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="mb-5"
                >
                  <GlowEffect color={colors.brand.accent} intensity={20}>
                    <span
                      className="inline-flex items-center rounded-full border px-3.5 py-2 backdrop-blur-xl"
                      style={{
                        borderColor: `${colors.brand.accent}80`,
                        backgroundColor: 'rgba(255,255,255,0.08)',
                      }}
                    >
                      <Sparkles
                        className="mr-2 h-3.5 w-3.5"
                        style={{ color: colors.brand.accent }}
                      />
                      <span className="text-[10px] font-bold uppercase tracking-[0.19em] text-white">
                        ABOUT ADVANTEDGE
                      </span>
                    </span>
                  </GlowEffect>
                </motion.div>

                <h1 className="max-w-3xl text-3xl font-bold leading-[1.04] tracking-[-0.045em] text-white sm:text-4xl lg:text-[54px]">
                  Building Growth Systems That Drive Business Performance
                </h1>

                <div className="mt-6 max-w-2xl space-y-4">
                  <p className="text-sm leading-[1.85] text-white/76 sm:text-[16px]">
                    AdvantEdge was built on a simple belief: growth happens when
                    strategy, marketing, sales, CRM, and technology work
                    together.
                  </p>

                  <p className="text-sm leading-[1.85] text-white/68 sm:text-[15px]">
                    We help organizations eliminate disconnected execution and
                    build integrated growth systems designed to improve
                    customer acquisition, strengthen market positioning, and
                    create measurable business outcomes.
                  </p>
                </div>

                {/* Connected system chips */}
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {connectedGrowthSystem.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.065] px-3.5 py-2 backdrop-blur-lg"
                    >
                      <span style={{ color: colors.brand.accent }}>
                        {item.icon}
                      </span>
                      <span className="text-[10px] font-bold text-white/72">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right system panel */}
              <motion.div
                initial={{ opacity: 0, x: 42 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.84,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="hidden justify-end lg:flex"
              >
                <div className="w-full max-w-[410px] overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.075] p-5 shadow-[0_34px_105px_rgba(0,1,49,0.34)] backdrop-blur-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/42">
                        Connected Growth System
                      </p>
                      <p className="mt-1 text-xs font-bold text-white">
                        Strategy, marketing, sales, CRM, and technology.
                      </p>
                    </div>

                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07]"
                      style={{ color: colors.brand.accent }}
                    >
                      <Layers className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="mt-5 space-y-2">
                    {connectedGrowthSystem.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.4 + index * 0.07,
                          duration: 0.4,
                        }}
                        className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] px-3.5 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="flex h-8 w-8 items-center justify-center rounded-lg"
                            style={{
                              color: colors.brand.accent,
                              backgroundColor: 'rgba(255,255,255,0.07)',
                            }}
                          >
                            {item.icon}
                          </span>

                          <div className="min-w-0 flex-1">
                            <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-white/32">
                              0{index + 1}
                            </p>
                            <p className="mt-0.5 text-[11px] font-bold text-white/78">
                              {item.label}
                            </p>
                          </div>

                          <ArrowRight
                            className="h-3.5 w-3.5 text-white/25"
                            style={{
                              color:
                                index === connectedGrowthSystem.length - 1
                                  ? colors.brand.accent
                                  : undefined,
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-[10px] font-semibold leading-[1.65] text-white/45">
                      AdvantEdge was built on a simple belief: growth happens
                      when strategy, marketing, sales, CRM, and technology work
                      together.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>

        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{
            background:
              'linear-gradient(to bottom, transparent, rgba(247,248,252,0.8))',
          }}
        />
      </section>

      {/* ============================================
          2. WHO WE ARE — NARRATIVE + BENTO
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
            <OptimizedImage
              src={aboutImages.whoWeAre}
              alt="AdvantEdge collaboration and integrated growth"
              className="absolute right-0 top-0 h-full w-[54%] object-cover opacity-[0.08]"
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(247,248,252,1) 0%, rgba(247,248,252,0.96) 47%, rgba(247,248,252,0.82) 100%)',
              }}
            />

            <div
              className="absolute -left-44 top-20 h-[450px] w-[450px] rounded-full opacity-[0.06] blur-[135px]"
              style={{ backgroundColor: colors.brand.secondary }}
            />

            <div
              className="absolute -right-44 bottom-0 h-[450px] w-[450px] rounded-full opacity-[0.08] blur-[135px]"
              style={{ backgroundColor: colors.brand.accent }}
            />
          </div>

          <Container size="xl">
            <div className="relative z-10 mx-auto max-w-7xl">
              <div className="grid items-start gap-8 lg:grid-cols-[0.90fr_1.10fr] lg:gap-10">
                {/* Narrative */}
                <ScrollReveal>
                  <div className="lg:sticky lg:top-24">
                    <div
                      className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 backdrop-blur-xl"
                      style={{
                        color: colors.brand.secondary,
                        borderColor: `${colors.brand.secondary}20`,
                        backgroundColor: 'rgba(255,255,255,0.78)',
                      }}
                    >
                      <Building2 className="h-3.5 w-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                        Who We Are
                      </span>
                    </div>

                    <h2
                      className="mt-5 text-2xl font-bold leading-[1.14] tracking-[-0.035em] sm:text-3xl lg:text-[42px]"
                      style={{ color: colors.brand.primary }}
                    >
                      More Than a Marketing Agency
                    </h2>

                    <div className="mt-5 space-y-4 text-sm leading-[1.82] text-gray-700">
                      <p>
                        Most businesses don't struggle because they lack
                        marketing activity.
                      </p>

                      <p
                        className="text-base font-bold leading-[1.6]"
                        style={{ color: colors.brand.primary }}
                      >
                        They struggle because their growth systems are
                        disconnected.
                      </p>

                      <p>
                        Marketing operates separately from sales. Customer data
                        lives in multiple platforms. Automation is
                        underutilized. Valuable opportunities are lost between
                        teams, tools, and processes.
                      </p>

                      <p
                        className="font-bold"
                        style={{ color: colors.brand.secondary }}
                      >
                        AdvantEdge was created to solve that challenge.
                      </p>

                      <p>
                        We combine strategic marketing, integrated execution,
                        and AI-powered business solutions to help organizations
                        build scalable systems that support long-term growth.
                      </p>
                    </div>

                    {/* Visual divider */}
                    <div className="mt-7 flex items-center gap-3">
                      <div
                        className="h-1 w-16 rounded-full"
                        style={{ background: gradients.primary }}
                      />
                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-gray-400">
                        AdvantEdge was created to solve that challenge.
                      </span>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Highlights bento */}
                <StaggerContainer className="grid gap-4 sm:grid-cols-2">
                  {keyHighlights.map((item, index) => (
                    <motion.div
                      key={item.title}
                      variants={staggerItemVariants}
                      className={index === 0 || index === 3 ? 'sm:row-span-2' : ''}
                    >
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{
                          duration: 0.28,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group relative h-full overflow-hidden rounded-[24px] border border-white/90 bg-white/74 p-5 shadow-[0_18px_52px_rgba(0,1,49,0.06)] backdrop-blur-xl transition-all duration-300 hover:bg-white/96 hover:shadow-[0_28px_76px_rgba(0,1,49,0.11)]"
                      >
                        <div
                          className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                          style={{ background: gradients.primary }}
                        />

                        <span
                          className="pointer-events-none absolute -right-2 -top-7 text-[88px] font-black leading-none opacity-[0.035]"
                          style={{ color: colors.brand.primary }}
                        >
                          {item.number}
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

                        {(index === 0 || index === 3) && (
                          <div
                            className="mt-6 rounded-2xl border px-4 py-4"
                            style={{
                              borderColor: `${colors.brand.secondary}12`,
                              backgroundColor: `${colors.brand.secondary}08`,
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <CheckCircle2
                                className="h-4 w-4 shrink-0"
                                style={{ color: colors.brand.secondary }}
                              />
                              <span
                                className="text-[10px] font-bold uppercase tracking-[0.12em]"
                                style={{ color: colors.brand.primary }}
                              >
                                {item.title}
                              </span>
                            </div>
                          </div>
                        )}
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
          3. WHAT WE BELIEVE — INTERACTIVE DISCIPLINES
          ============================================ */}
      <section className="relative overflow-hidden bg-[#000131]">
        {/* Active background image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPhilosophy.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55 }}
            className="absolute inset-0"
          >
            <OptimizedImage
              src={selectedPhilosophy.image}
              alt={selectedPhilosophy.title}
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,1,49,0.985) 0%, rgba(0,1,49,0.93) 42%, rgba(0,1,49,0.70) 70%, rgba(0,1,49,0.52) 100%)',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,1,49,0.42) 0%, rgba(0,1,49,0.14) 48%, rgba(0,1,49,0.78) 100%)',
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
            backgroundSize: '58px 58px',
          }}
        />

        <Section spacing="base" animate background="transparent">
          <Container size="xl">
            <div className="relative z-10 mx-auto max-w-7xl">
              <div className="mx-auto max-w-4xl text-center">
                <div
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-2 backdrop-blur-xl"
                  style={{ color: colors.brand.accent }}
                >
                  <Target className="h-3.5 w-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                    Our Philosophy
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold leading-[1.14] tracking-[-0.035em] text-white sm:text-3xl lg:text-[42px]">
                  Growth Requires More Than Marketing
                </h2>

                <div className="mx-auto mt-5 max-w-3xl space-y-3">
                  <p className="text-sm leading-[1.8] text-white/72 sm:text-[15px]">
                    Modern businesses need more than campaigns.
                  </p>

                  <p className="text-sm leading-[1.8] text-white/62 sm:text-[15px]">
                    They need connected systems that align strategy, execution,
                    customer engagement, and operational intelligence.
                  </p>

                  <p
                    className="text-sm font-bold"
                    style={{ color: colors.brand.accent }}
                  >
                    Our approach combines three core disciplines:
                  </p>
                </div>
              </div>

              {/* Tabs */}
              <ScrollReveal>
                <div className="mx-auto mt-9 max-w-5xl">
                  <div className="grid gap-2 rounded-2xl border border-white/12 bg-white/[0.055] p-2 backdrop-blur-2xl sm:grid-cols-3">
                    {philosophyPillars.map((pillar, index) => {
                      const active = index === activePhilosophy;

                      return (
                        <button
                          key={pillar.title}
                          type="button"
                          onClick={() => setActivePhilosophy(index)}
                          className="group relative overflow-hidden rounded-xl px-4 py-3.5 text-left transition-all duration-300"
                          style={{
                            backgroundColor: active
                              ? 'rgba(255,255,255,0.12)'
                              : 'rgba(255,255,255,0.02)',
                          }}
                        >
                          {active && (
                            <motion.span
                              layoutId="philosophy-active"
                              className="absolute inset-x-0 bottom-0 h-1"
                              style={{ background: gradients.primary }}
                            />
                          )}

                          <div className="flex items-center gap-3">
                            <span
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                              style={{
                                color: active
                                  ? colors.brand.accent
                                  : 'rgba(255,255,255,0.55)',
                                backgroundColor: active
                                  ? 'rgba(255,255,255,0.09)'
                                  : 'rgba(255,255,255,0.04)',
                              }}
                            >
                              {pillar.icon}
                            </span>

                            <div>
                              <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-white/32">
                                {pillar.number}
                              </p>
                              <p
                                className={`mt-0.5 text-[11px] font-bold ${
                                  active ? 'text-white' : 'text-white/58'
                                }`}
                              >
                                {pillar.title}
                              </p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>

              {/* Active discipline */}
              <ScrollReveal delay={0.08}>
                <div className="mx-auto mt-5 max-w-5xl overflow-hidden rounded-[26px] border border-white/12 bg-white/[0.075] shadow-[0_26px_90px_rgba(0,0,0,0.20)] backdrop-blur-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedPhilosophy.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                      className="grid lg:grid-cols-[0.78fr_1.22fr]"
                    >
                      <div className="border-b border-white/10 p-5 sm:p-6 lg:border-b-0 lg:border-r lg:p-7">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08]"
                          style={{ color: colors.brand.accent }}
                        >
                          {selectedPhilosophy.icon}
                        </div>

                        <p
                          className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em]"
                          style={{ color: colors.brand.accent }}
                        >
                          {selectedPhilosophy.eyebrow}
                        </p>

                        <h3 className="mt-2 text-xl font-bold leading-[1.2] tracking-[-0.02em] text-white">
                          {selectedPhilosophy.title}
                        </h3>
                      </div>

                      <div className="flex items-center p-5 sm:p-6 lg:p-7">
                        <p className="text-sm leading-[1.9] text-white/68 sm:text-[15px]">
                          {selectedPhilosophy.description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.14}>
                <div className="mx-auto mt-6 max-w-5xl border-t border-white/10 pt-5 text-center">
                  <p className="text-sm font-medium leading-[1.8] text-white/68">
                    Together, these capabilities create a growth ecosystem
                    designed to deliver sustainable and measurable results.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      </section>

      {/* ============================================
          4. LEADERSHIP — INTERACTIVE COMMAND CENTER
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
          {/* Leadership background image */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <OptimizedImage
              src={aboutImages.leadership}
              alt="AdvantEdge leadership collaboration"
              className="absolute inset-x-0 top-0 h-[560px] w-full object-cover object-center opacity-[0.14]"
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(247,248,252,0.84) 0%, rgba(247,248,252,0.94) 36%, rgba(247,248,252,1) 72%)',
              }}
            />

            <div
              className="absolute -left-48 top-[20%] h-[500px] w-[500px] rounded-full opacity-[0.055] blur-[145px]"
              style={{ backgroundColor: colors.brand.secondary }}
            />

            <div
              className="absolute -right-48 bottom-[5%] h-[500px] w-[500px] rounded-full opacity-[0.075] blur-[145px]"
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

              <div className="mt-10 grid items-start gap-5 lg:grid-cols-[330px_1fr] lg:gap-6">
                {/* Leadership navigator */}
                <ScrollReveal>
                  <div className="overflow-hidden rounded-[24px] border border-white/90 bg-white/72 p-3 shadow-[0_20px_62px_rgba(0,1,49,0.07)] backdrop-blur-2xl lg:sticky lg:top-24">
                    <div className="px-2 pb-3 pt-2">
                      <p
                        className="text-[9px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: colors.brand.secondary }}
                      >
                        Leadership Team
                      </p>

                      <p
                        className="mt-1 text-sm font-bold"
                        style={{ color: colors.brand.primary }}
                      >
                        Select a leadership profile
                      </p>
                    </div>

                    <div className="space-y-2">
                      {leadership.map((leader, index) => {
                        const active = index === activeLeader;

                        return (
                          <button
                            key={leader.name}
                            type="button"
                            onClick={() => setActiveLeader(index)}
                            className="group relative flex w-full items-center gap-3 overflow-hidden rounded-xl border px-3 py-3 text-left transition-all duration-300"
                            style={{
                              borderColor: active
                                ? `${colors.brand.secondary}24`
                                : 'rgba(226,232,240,0.85)',
                              backgroundColor: active
                                ? `${colors.brand.secondary}0C`
                                : 'rgba(255,255,255,0.62)',
                            }}
                          >
                            {active && (
                              <motion.span
                                layoutId="active-leader"
                                className="absolute inset-y-0 left-0 w-1"
                                style={{ background: gradients.primary }}
                              />
                            )}

                            <span
                              className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl text-xs font-black text-white shadow-[0_8px_22px_rgba(0,1,49,0.14)]"
                              style={{ background: gradients.primary }}
                            >
                              <span className="relative z-0">{leader.initials}</span>

                              {leader.image && (
                                <img
                                  src={leader.image}
                                  alt={leader.imageAlt}
                                  loading="lazy"
                                  referrerPolicy="no-referrer"
                                  onError={(event) => {
                                    event.currentTarget.style.display = 'none';
                                  }}
                                  className="absolute inset-0 z-10 h-full w-full object-cover object-top"
                                />
                              )}
                            </span>

                            <div className="min-w-0 flex-1">
                              <p
                                className="text-[8px] font-bold uppercase tracking-[0.14em]"
                                style={{
                                  color: active
                                    ? colors.brand.secondary
                                    : '#9ca3af',
                                }}
                              >
                                Profile {leader.number}
                              </p>

                              <p
                                className="mt-0.5 truncate text-[11px] font-bold"
                                style={{ color: colors.brand.primary }}
                              >
                                {leader.name}
                              </p>

                              <p className="mt-0.5 truncate text-[10px] text-gray-500">
                                {leader.role}
                              </p>
                            </div>

                            <ArrowRight
                              className={`h-4 w-4 shrink-0 transition-all ${
                                active
                                  ? 'translate-x-0 opacity-100'
                                  : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-45'
                              }`}
                              style={{ color: colors.brand.secondary }}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Active leadership profile */}
                <ScrollReveal delay={0.08}>
                  <AnimatePresence mode="wait">
                    <motion.article
                      key={selectedLeader.name}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden rounded-[28px] border border-white/90 bg-white/76 shadow-[0_26px_82px_rgba(0,1,49,0.09)] backdrop-blur-2xl"
                    >
                      {/* Identity header */}
                      <div className="relative overflow-hidden border-b border-gray-200/70 p-5 sm:p-6 lg:p-7">
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -right-5 -top-12 text-[150px] font-black leading-none tracking-[-0.08em] opacity-[0.028]"
                          style={{ color: colors.brand.primary }}
                        >
                          {selectedLeader.number}
                        </span>

                        <div
                          aria-hidden="true"
                          className="absolute -left-20 -top-28 h-64 w-64 rounded-full opacity-[0.07] blur-[90px]"
                          style={{ backgroundColor: colors.brand.secondary }}
                        />

                        <div className="relative z-10 grid gap-5 sm:grid-cols-[180px_1fr] sm:items-stretch lg:grid-cols-[210px_1fr]">
                          {/* Real leadership portrait / graceful fallback */}
                          <div className="relative min-h-[210px] overflow-hidden rounded-[22px] border border-white/90 bg-white shadow-[0_18px_50px_rgba(0,1,49,0.12)] sm:min-h-[230px]">
                            <div
                              className="absolute inset-0 flex items-center justify-center"
                              style={{ background: gradients.primary }}
                            >
                              <span className="text-4xl font-black text-white/90">
                                {selectedLeader.initials}
                              </span>
                            </div>

                            {selectedLeader.image && (
                              <img
                                src={selectedLeader.image}
                                alt={selectedLeader.imageAlt}
                                loading="eager"
                                referrerPolicy="no-referrer"
                                onError={(event) => {
                                  event.currentTarget.style.display = 'none';
                                }}
                                className="absolute inset-0 h-full w-full object-cover object-top"
                              />
                            )}

                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#000131]/88 via-[#000131]/38 to-transparent px-4 pb-4 pt-12">
                              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/55">
                                Leadership {selectedLeader.number}
                              </p>
                              <p className="mt-1 text-xs font-bold text-white">
                                {selectedLeader.role}
                              </p>
                            </div>
                          </div>

                          {/* Identity + navigation */}
                          <div className="flex min-w-0 flex-col justify-between py-1">
                            <div>
                              <div className="flex flex-wrap items-center justify-between gap-3">
                                <p
                                  className="text-[9px] font-bold uppercase tracking-[0.18em]"
                                  style={{ color: colors.brand.secondary }}
                                >
                                  Leadership Profile {selectedLeader.number}
                                </p>

                                <div className="flex gap-2">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setActiveLeader((prev) =>
                                        prev === 0
                                          ? leadership.length - 1
                                          : prev - 1
                                      )
                                    }
                                    aria-label="Previous leader"
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white/80 text-gray-500 transition-all hover:-translate-y-0.5 hover:bg-white hover:text-gray-800"
                                  >
                                    <ArrowRight className="h-4 w-4 rotate-180" />
                                  </button>

                                  <button
                                    type="button"
                                    onClick={() =>
                                      setActiveLeader(
                                        (prev) =>
                                          (prev + 1) % leadership.length
                                      )
                                    }
                                    aria-label="Next leader"
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white/80 text-gray-500 transition-all hover:-translate-y-0.5 hover:bg-white hover:text-gray-800"
                                  >
                                    <ArrowRight className="h-4 w-4" />
                                  </button>
                                </div>
                              </div>

                              <h3
                                className="mt-4 text-2xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-[32px] lg:text-[36px]"
                                style={{ color: colors.brand.primary }}
                              >
                                {selectedLeader.name}
                              </h3>

                              <p
                                className="mt-2 text-sm font-bold"
                                style={{ color: colors.brand.secondary }}
                              >
                                {selectedLeader.role}
                              </p>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                              {selectedLeader.expertise.slice(0, 3).map((item) => (
                                <div
                                  key={item}
                                  className="rounded-xl border border-gray-100 bg-white/65 px-3 py-2.5"
                                >
                                  <CheckCircle2
                                    className="h-3.5 w-3.5"
                                    style={{ color: colors.brand.secondary }}
                                  />
                                  <p className="mt-1.5 text-[9px] font-bold leading-[1.35] text-gray-600">
                                    {item}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-[1.14fr_0.86fr]">
                        {/* Biography */}
                        <div className="border-b border-gray-200/70 p-5 sm:p-6 lg:border-b-0 lg:border-r lg:p-7">
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
                            {selectedLeader.bio.map((paragraph) => (
                              <p
                                key={paragraph}
                                className="text-sm leading-[1.84] text-gray-600"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>

                        {/* Expertise */}
                        <div className="p-5 sm:p-6 lg:p-7">
                          <div
                            className="rounded-2xl border p-4"
                            style={{
                              borderColor: `${colors.brand.secondary}14`,
                              backgroundColor: `${colors.brand.secondary}08`,
                            }}
                          >
                            <p
                              className="text-[9px] font-bold uppercase tracking-[0.17em]"
                              style={{ color: colors.brand.secondary }}
                            >
                              Areas of Expertise
                            </p>

                            <div className="mt-4 space-y-2.5">
                              {selectedLeader.expertise.map((item, index) => (
                                <div
                                  key={item}
                                  className="flex items-start gap-3 rounded-xl border border-white/90 bg-white/70 px-3.5 py-3"
                                >
                                  <span
                                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[8px] font-black"
                                    style={{
                                      color: colors.brand.primary,
                                      backgroundColor: `${colors.brand.accent}28`,
                                    }}
                                  >
                                    {String(index + 1).padStart(2, '0')}
                                  </span>

                                  <span className="text-xs font-semibold leading-[1.5] text-gray-600">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {selectedLeader.source && (
                            <p className="mt-4 text-[10px] italic leading-relaxed text-gray-400">
                              {selectedLeader.source}
                            </p>
                          )}
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
          5. WHY CLIENTS WORK WITH US
          ============================================ */}
      <section className="relative overflow-hidden">
        <OptimizedImage
          src={aboutImages.partnership}
          alt="Strategic partnership and client collaboration"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,1,49,0.96) 0%, rgba(0,1,49,0.90) 42%, rgba(0,0,170,0.76) 100%)',
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />

        <Section spacing="base" animate background="transparent">
          <Container size="xl">
            <div className="relative z-10 mx-auto max-w-7xl">
              <div className="mx-auto max-w-4xl text-center">
                <div
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-2 backdrop-blur-xl"
                  style={{ color: colors.brand.accent }}
                >
                  <Shield className="h-3.5 w-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                    Why AdvantEdge
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold leading-[1.14] tracking-[-0.035em] text-white sm:text-3xl lg:text-[42px]">
                  Built for Businesses Focused on Long-Term Growth
                </h2>

                <div className="mx-auto mt-5 max-w-3xl space-y-3">
                  <p className="text-sm leading-[1.8] text-white/72 sm:text-[15px]">
                    Organizations choose AdvantEdge because they need more than
                    isolated marketing services.
                  </p>

                  <p className="text-sm leading-[1.8] text-white/62 sm:text-[15px]">
                    They need a strategic partner that understands how
                    marketing, sales, customer engagement, CRM, automation, and
                    AI influence business performance.
                  </p>
                </div>
              </div>

              <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {whyPillars.map((pillar) => (
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
                      className="group relative h-full overflow-hidden rounded-[22px] border border-white/14 bg-white/[0.075] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur-2xl transition-all duration-300 hover:bg-white/[0.12]"
                    >
                      <span className="pointer-events-none absolute -right-2 -top-6 text-[78px] font-black leading-none text-white/[0.045]">
                        {pillar.number}
                      </span>

                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08]"
                        style={{ color: colors.brand.accent }}
                      >
                        {pillar.icon}
                      </div>

                      <h3 className="mt-5 text-base font-bold leading-[1.25] text-white">
                        {pillar.title}
                      </h3>

                      <p className="mt-3 text-xs leading-[1.75] text-white/58 sm:text-[13px]">
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
      </section>

      {/* ============================================
          6. OUR APPROACH — INTERACTIVE FRAMEWORK
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
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <OptimizedImage
              src={aboutImages.approach}
              alt="Business performance and growth optimization"
              className="absolute right-0 top-0 h-full w-[54%] object-cover opacity-[0.08]"
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(247,248,252,1) 0%, rgba(247,248,252,0.96) 48%, rgba(247,248,252,0.84) 100%)',
              }}
            />
          </div>

          <Container size="xl">
            <div className="relative z-10 mx-auto max-w-7xl">
              <SectionHeader
                badge="How We Work"
                badgeIcon={<RefreshCw className="h-4 w-4" />}
                title="A Framework Designed for Sustainable Growth"
                align="center"
                maxWidth="md"
              />

              <div className="mt-10 grid items-start gap-6 lg:grid-cols-[0.82fr_1.18fr]">
                {/* Step navigator */}
                <ScrollReveal>
                  <div className="overflow-hidden rounded-[24px] border border-white/90 bg-white/72 p-3 shadow-[0_20px_62px_rgba(0,1,49,0.07)] backdrop-blur-2xl lg:sticky lg:top-24">
                    <div className="px-2 pb-3 pt-2">
                      <p
                        className="text-[9px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: colors.brand.secondary }}
                      >
                        Four-Step Framework
                      </p>

                      <p
                        className="mt-1 text-sm font-bold"
                        style={{ color: colors.brand.primary }}
                      >
                        A Framework Designed for Sustainable Growth
                      </p>
                    </div>

                    <div className="space-y-2">
                      {approachSteps.map((step, index) => {
                        const active = index === activeApproach;

                        return (
                          <button
                            key={step.number}
                            type="button"
                            onClick={() => setActiveApproach(index)}
                            className="group relative flex w-full items-center gap-3 overflow-hidden rounded-xl border px-3.5 py-3 text-left transition-all duration-300"
                            style={{
                              borderColor: active
                                ? `${colors.brand.secondary}22`
                                : 'rgba(226,232,240,0.85)',
                              backgroundColor: active
                                ? `${colors.brand.secondary}0C`
                                : 'rgba(255,255,255,0.60)',
                            }}
                          >
                            {active && (
                              <motion.span
                                layoutId="active-approach"
                                className="absolute inset-y-0 left-0 w-1"
                                style={{ background: gradients.primary }}
                              />
                            )}

                            <span
                              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                              style={{
                                color: active
                                  ? colors.brand.secondary
                                  : colors.brand.primary,
                                backgroundColor: active
                                  ? `${colors.brand.secondary}0E`
                                  : '#f8fafc',
                              }}
                            >
                              {step.icon}
                            </span>

                            <div className="min-w-0 flex-1">
                              <p
                                className="text-[8px] font-bold uppercase tracking-[0.14em]"
                                style={{
                                  color: active
                                    ? colors.brand.secondary
                                    : '#9ca3af',
                                }}
                              >
                                Step {step.number}
                              </p>

                              <p
                                className="mt-0.5 text-[11px] font-bold leading-[1.45]"
                                style={{ color: colors.brand.primary }}
                              >
                                {step.title}
                              </p>
                            </div>

                            <ArrowRight
                              className={`h-4 w-4 transition-all ${
                                active
                                  ? 'translate-x-0 opacity-100'
                                  : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-45'
                              }`}
                              style={{ color: colors.brand.secondary }}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Active step */}
                <ScrollReveal delay={0.08}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedApproach.number}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.38 }}
                      className="relative min-h-[430px] overflow-hidden rounded-[28px] bg-[#000131] p-6 shadow-[0_30px_90px_rgba(0,1,49,0.24)] sm:p-7"
                    >
                      <div
                        className="absolute left-0 top-0 h-1 w-full"
                        style={{ background: gradients.primary }}
                      />

                      <OptimizedImage
                        src={aboutImages.approach}
                        alt="Growth framework and business performance"
                        className="absolute inset-0 h-full w-full object-cover opacity-20"
                      />

                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(90deg, rgba(0,1,49,0.985), rgba(0,1,49,0.91) 62%, rgba(0,1,49,0.70))',
                        }}
                      />

                      <div
                        aria-hidden="true"
                        className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-22 blur-[100px]"
                        style={{ backgroundColor: colors.brand.secondary }}
                      />

                      <div
                        aria-hidden="true"
                        className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full opacity-14 blur-[100px]"
                        style={{ backgroundColor: colors.brand.accent }}
                      />

                      <div className="relative z-10 flex min-h-[376px] flex-col">
                        <div className="flex items-start justify-between gap-5">
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10"
                            style={{ color: colors.brand.accent }}
                          >
                            {selectedApproach.icon}
                          </div>

                          <span className="text-[72px] font-black leading-none text-white/[0.06]">
                            {selectedApproach.number}
                          </span>
                        </div>

                        <div className="mt-8 max-w-2xl">
                          <p
                            className="text-[9px] font-bold uppercase tracking-[0.2em]"
                            style={{ color: colors.brand.accent }}
                          >
                            {selectedApproach.number} - {selectedApproach.title}
                          </p>

                          <h3 className="mt-3 text-2xl font-bold leading-[1.15] tracking-[-0.025em] text-white sm:text-[30px]">
                            {selectedApproach.title}
                          </h3>

                          <p className="mt-5 text-sm leading-[1.9] text-white/64 sm:text-[15px]">
                            {selectedApproach.description}
                          </p>
                        </div>

                        <div className="mt-auto border-t border-white/10 pt-5">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">
                              Sustainable Growth Framework
                            </span>

                            <div className="flex gap-2">
                              {approachSteps.map((step, index) => (
                                <button
                                  key={step.number}
                                  type="button"
                                  onClick={() => setActiveApproach(index)}
                                  aria-label={`Go to ${step.title}`}
                                  className="h-1.5 rounded-full transition-all duration-300"
                                  style={{
                                    width:
                                      index === activeApproach ? '32px' : '10px',
                                    backgroundColor:
                                      index === activeApproach
                                        ? colors.brand.accent
                                        : 'rgba(255,255,255,0.18)',
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </ScrollReveal>
              </div>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          7. CONNECTED GROWTH VISUAL — SUPPORTING IMAGE
          ============================================ */}
      <ModernSectionBackground
        variant="gradient-abstract"
        className="relative overflow-hidden"
      >
        <Section
          spacing="compact"
          animate
          background="transparent"
          className="relative overflow-hidden"
        >
          <Container size="xl">
            <ScrollReveal>
              <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-white/90 bg-white/72 shadow-[0_28px_90px_rgba(0,1,49,0.10)] backdrop-blur-2xl">
                <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                  {/* Image */}
                  <div className="relative min-h-[320px] overflow-hidden sm:min-h-[360px]">
                    <OptimizedImage
                      src={aboutImages.cta}
                      alt="AdvantEdge connected growth systems"
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(0,1,49,0.20), rgba(0,1,49,0.04))',
                      }}
                    />

                    <div className="absolute bottom-5 left-5 rounded-xl border border-white/15 bg-[#000131]/82 px-4 py-3 backdrop-blur-xl sm:bottom-6 sm:left-6">
                      <div className="flex items-center gap-3">
                        <Award
                          className="h-4 w-4"
                          style={{ color: colors.brand.accent }}
                        />
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/78">
                          Connected Growth
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex items-center p-6 sm:p-7 lg:p-9">
                    <div>
                      <p
                        className="text-[9px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: colors.brand.secondary }}
                      >
                        AdvantEdge
                      </p>

                      <p
                        className="mt-3 text-xl font-bold leading-[1.35] tracking-[-0.02em] sm:text-2xl"
                        style={{ color: colors.brand.primary }}
                      >
                        We combine strategic marketing, integrated execution,
                        and AI-powered business solutions to help organizations
                        build scalable systems that support long-term growth.
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {[
                          'Strategic Marketing',
                          'Integrated Execution',
                          'AI-Powered Business Solutions',
                        ].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border px-3 py-1.5 text-[10px] font-bold"
                            style={{
                              color: colors.brand.secondary,
                              borderColor: `${colors.brand.secondary}16`,
                              backgroundColor: `${colors.brand.secondary}08`,
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          8. FINAL CTA
          ============================================ */}
      <section className="relative overflow-hidden">
        <OptimizedImage
          src={aboutImages.cta}
          alt="AdvantEdge business growth partnership"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,1,49,0.96) 0%, rgba(0,1,49,0.88) 46%, rgba(0,0,170,0.72) 100%)',
          }}
        />

        <div
          aria-hidden="true"
          className="absolute -right-24 top-0 h-[430px] w-[430px] rounded-full opacity-20 blur-[130px]"
          style={{ backgroundColor: colors.brand.accent }}
        />

        <div
          aria-hidden="true"
          className="absolute -left-32 bottom-0 h-[430px] w-[430px] rounded-full opacity-18 blur-[130px]"
          style={{ backgroundColor: colors.brand.secondary }}
        />

        <section className="relative overflow-hidden bg-transparent px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Container size="lg">
            <ScrollReveal>
              <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-white/15 bg-white/[0.075] px-5 py-9 text-center shadow-[0_34px_120px_rgba(0,1,49,0.38)] backdrop-blur-2xl sm:px-8 sm:py-11 lg:px-10 lg:py-12">
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

                  <h2 className="mx-auto mt-5 max-w-3xl text-2xl font-bold leading-[1.14] tracking-[-0.035em] text-white sm:text-3xl lg:text-[42px]">
                    Build a Smarter Growth Engine
                  </h2>

                  <p className="mx-auto mt-4 max-w-3xl text-sm leading-[1.85] text-white/66 sm:text-[15px]">
                    Let's identify where your strategy, marketing, CRM,
                    customer engagement, and AI systems are limiting growth-and
                    build a connected framework designed for measurable
                    business outcomes.
                  </p>

                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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
                    <p className="mx-auto max-w-3xl text-xs font-medium leading-[1.7] text-white/54 sm:text-sm">
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
      </section>
    </PageBackground>
  );
}

export default AboutPage;
