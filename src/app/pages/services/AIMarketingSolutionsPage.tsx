/**
 * ============================================
 * B2B SALES REINVENTION
 * AI MARKETING SOLUTIONS
 * ============================================
 * ADVANTEDGE — ENTERPRISE SERVICE PAGE
 *
 * Compact typography
 * Premium dark / light composition
 * AI-enabled sales transformation
 * Only 2 primary CTAs
 * ============================================
 */

import type { ReactNode } from 'react';

import { Link } from 'react-router';
import { motion } from 'motion/react';

import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock3,
  MessageSquare,
  Target,
  RefreshCw,
  Database,
  BarChart3,
  Users,
  Bot,
  Layers,
  Workflow,
  Search,
  Rocket,
  TrendingUp,
  Eye,
  Zap,
  UserCheck,
  CalendarCheck,
  Gauge,
  Repeat2,
  Building2,
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

/* ============================================
   PROBLEMS
   ============================================ */

const salesProblems = [
  {
    icon: <Clock3 className="h-5 w-5" />,
    title: 'Leads wait too long for a response.',
    content:
      "Prospects expect quick answers. When they don't receive them, they move on or lose interest before your sales team even makes contact.",
  },

  {
    icon: <Workflow className="h-5 w-5" />,
    title: 'Sales teams spend too much time on repetitive work.',
    content:
      'Instead of building relationships and closing deals, sales representatives spend hours answering basic questions, qualifying leads, updating CRMs, booking meetings, and chasing follow-ups.',
  },

  {
    icon: <Target className="h-5 w-5" />,
    title: 'High-quality opportunities are missed.',
    content:
      'Not every inquiry deserves the same level of attention, yet many businesses treat every lead the same. As a result, valuable prospects are overlooked while time is spent on opportunities that are unlikely to convert.',
  },

  {
    icon: <RefreshCw className="h-5 w-5" />,
    title: 'Follow-ups are inconsistent.',
    content:
      `Deals rarely disappear because customers say "no." More often, they disappear because nobody followed up at the right time. When follow-ups rely on memory or manual reminders, opportunities quietly fall through the cracks.`,
  },

  {
    icon: <Database className="h-5 w-5" />,
    title: 'CRM data becomes unreliable.',
    content:
      'Sales teams are busy. Updating CRM records often becomes an afterthought, leaving managers with incomplete information and making forecasting difficult.',
  },

  {
    icon: <Eye className="h-5 w-5" />,
    title: 'Sales leaders lack visibility.',
    content:
      "Without reliable data, it's difficult to understand where deals are slowing down, which activities are producing results, or how to improve overall sales performance.",
  },

  {
    icon: <Users className="h-5 w-5" />,
    title: 'Scaling means hiring more people.',
    content:
      'As enquiries increase, businesses often respond by growing the sales team. This increases costs while creating new challenges around consistency, onboarding, and performance management.',
  },
];

/* ============================================
   SOLUTION STEPS
   ============================================ */

const solutionSteps = [
  {
    number: '01',
    icon: <MessageSquare className="h-5 w-5" />,
    title: 'Engage Every Prospect Immediately',
    content: [
      'Every inquiry receives an instant response.',
      'Whether someone visits your website, submits an inquiry, or starts a conversation, they receive immediate assistance instead of waiting for someone to become available.',
      'This creates a professional first impression and keeps prospects engaged while interest is highest.',
    ],
  },

  {
    number: '02',
    icon: <Target className="h-5 w-5" />,
    title: 'Qualify Leads Automatically',
    content: [
      'Not every lead is ready to buy.',
      'Instead of asking your sales team to manually assess every inquiry, the system gathers the right information, understands customer needs, and identifies which prospects are ready for a sales conversation.',
      'Your team receives qualified opportunities rather than raw enquiries.',
    ],
  },

  {
    number: '03',
    icon: <UserCheck className="h-5 w-5" />,
    title: 'Prepare Your Sales Team',
    content: [
      'When a lead is ready, your sales representative receives the complete conversation history, qualification details, customer requirements, and relevant context.',
      "Instead of spending the first meeting collecting information, they can focus on understanding the customer's goals and moving the opportunity forward.",
    ],
  },

  {
    number: '04',
    icon: <Workflow className="h-5 w-5" />,
    title: 'Keep Every Opportunity Moving',
    content: [
      "The sales process doesn't stop after the first conversation.",
      'The solution helps manage follow-ups, reminders, customer communications, and sales activities to ensure opportunities continue progressing without relying on manual tracking.',
      'Nothing gets forgotten.',
    ],
  },

  {
    number: '05',
    icon: <Repeat2 className="h-5 w-5" />,
    title: 'Re-engage Lost Opportunities',
    content: [
      "Many prospects aren't ready to buy immediately.",
      'Rather than allowing those opportunities to disappear, the system automatically reconnects with inactive prospects through personalised follow-ups, bringing them back into the sales pipeline when the timing is right.',
    ],
  },

  {
    number: '06',
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Give Leaders Complete Visibility',
    content: [
      'Every conversation, activity, and opportunity is captured in one place.',
      'Sales leaders gain a clear understanding of pipeline health, team performance, conversion rates, and areas that need attention, allowing better decisions based on real data.',
    ],
  },
];

/* ============================================
   AI SALES TEAM
   ============================================ */

const aiSalesTeam = [
  {
    number: '01',
    icon: <Bot className="h-6 w-6" />,
    title: 'AI Sales Representative',
    tagline: 'Your first salesperson never sleeps.',
    content:
      'The AI Sales Representative engages prospects the moment they arrive, answers questions, gathers information, qualifies leads, updates your CRM, and schedules meetings with the right person when appropriate.',
    closing:
      'Your team starts every conversation already informed.',
    outcomes: [
      'Respond instantly to every inquiry',
      'Qualify leads automatically',
      'Book meetings',
      'Capture customer information',
      'Reduce manual administrative work',
      'Improve first response times',
    ],
  },

  {
    number: '02',
    icon: <RefreshCw className="h-6 w-6" />,
    title: 'Lead Revival',
    tagline: 'Your second chance to win the deal.',
    content:
      "Many promising opportunities become inactive-not because they weren't interested, but because the timing wasn't right.",
    closing:
      'Lead Revival automatically reconnects with prospects using personalised email, SMS, chat, and other digital channels, bringing qualified opportunities back into your pipeline.',
    outcomes: [
      'Recover dormant opportunities',
      'Increase pipeline value',
      'Improve marketing ROI',
      'Generate more sales from existing leads',
      'Reduce lost revenue',
    ],
  },

  {
    number: '03',
    icon: <Layers className="h-6 w-6" />,
    title: 'Sales Orchestrator',
    tagline: 'Your command centre for modern sales.',
    content:
      'The Sales Orchestrator brings together your sales activities, customer conversations, pipeline information, and performance metrics into one organised workspace.',
    closing:
      'Instead of switching between multiple systems, your team has everything they need to manage opportunities efficiently while sales leaders gain complete visibility into business performance.',
    outcomes: [
      'Track every sales opportunity',
      'Improve pipeline visibility',
      'Monitor team performance',
      'Keep CRM records up to date',
      'Support better forecasting',
      'Create a consistent sales process',
    ],
  },
];

/* ============================================
   HOW WE WORK
   ============================================ */

const implementationSteps = [
  {
    number: '01',
    icon: <Search className="h-5 w-5" />,
    title: 'Discover',
    content:
      'We begin by understanding your current sales process, business objectives, customer journey, and operational challenges.',
  },

  {
    number: '02',
    icon: <Target className="h-5 w-5" />,
    title: 'Define the Future State',
    content:
      'Together, we identify where improvements can be made and design a sales process that supports your growth goals.',
  },

  {
    number: '03',
    icon: <Workflow className="h-5 w-5" />,
    title: 'Build Together',
    content:
      'We configure the solution around your business, integrating it into your existing sales process and ensuring it reflects the way your organisation works.',
  },

  {
    number: '04',
    icon: <Rocket className="h-5 w-5" />,
    title: 'Launch and Embed',
    content:
      'We deploy the solution with minimal disruption, helping your sales team adopt new ways of working while maintaining business continuity.',
  },

  {
    number: '05',
    icon: <TrendingUp className="h-5 w-5" />,
    title: 'Continuously Improve',
    content:
      'Sales is constantly evolving. We continue measuring performance, identifying opportunities for improvement, and refining the solution so your business continues to grow over time.',
  },
];

/* ============================================
   WHY CHOOSE US
   ============================================ */

const reasons = [
  {
    number: '01',
    title: 'We redesign your sales process-not just your software.',
    content:
      'Our goal is to improve the way your organisation sells, not simply automate existing tasks.',
  },

  {
    number: '02',
    title: 'Built around your business.',
    content:
      'Every organisation has a different sales journey. We tailor every implementation to your products, customers, teams, and objectives.',
  },

  {
    number: '03',
    title: 'Sales and technology working together.',
    content:
      'Instead of replacing your sales team, our solution supports them by removing repetitive work and providing better visibility across the sales pipeline.',
  },

  {
    number: '04',
    title: 'Designed for long-term growth.',
    content:
      'As your business grows, your sales operation continues to improve through continuous optimisation and learning.',
  },
];

/* ============================================
   BUSINESS OUTCOMES
   ============================================ */

const outcomes = [
  'Increase qualified opportunities',
  'Improve conversion rates',
  'Reduce sales cycle times',
  'Recover lost deals',
  'Improve sales productivity',
  'Scale revenue without proportionally increasing headcount',
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
          ? 'border-white/15 bg-white/[0.06]'
          : 'border-gray-200 bg-white/80',
      ].join(' ')}
    >
      <span
        style={{
          color: colors.brand.accent,
        }}
      >
        {icon}
      </span>

      <span
        className={[
          'text-[9px] font-bold uppercase tracking-[0.17em]',
          dark ? 'text-white/70' : '',
        ].join(' ')}
        style={
          dark
            ? undefined
            : {
                color: colors.brand.primary,
              }
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

export function B2BSalesReinventionPage() {
  return (
    <PageBackground>

      {/* ============================================
          SEO
          ============================================ */}

      <PageSEO
        title="B2B Sales Reinvention | AI Marketing Solutions | AdvantEdge"
        description="B2B Sales Reinvention helps businesses engage prospects instantly, qualify opportunities automatically, maintain consistent follow-ups, improve CRM visibility, and help sales teams convert more opportunities."
        path="/services/ai-marketing-solutions/b2b-sales-reinvention"
      />

      {/* ============================================
          1. HERO
          ============================================ */}

      <section className="relative isolate overflow-hidden bg-[#080912]">

        {/* BACKGROUND */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-30"
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=88"
            alt=""
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* OVERLAYS */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20"
        >
          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#060711]/98 via-[#080912]/90 to-[#080912]/48" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#080912]/96" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(255,255,255,0.13),transparent_36%)]" />

          <div
            className="absolute -left-48 top-[8%] h-[500px] w-[500px] rounded-full opacity-10 blur-[160px]"
            style={{
              backgroundColor: colors.brand.secondary,
            }}
          />

          <div
            className="absolute -right-44 bottom-[-140px] h-[480px] w-[480px] rounded-full opacity-10 blur-[155px]"
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
          <div className="mx-auto flex min-h-[720px] max-w-7xl flex-col justify-center py-14 lg:min-h-[740px] lg:py-16">

            <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">

              {/* LEFT */}

              <div className="max-w-3xl">

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 14,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.55,
                  }}
                >
                  <SectionLabel
                    dark
                    icon={<Brain className="h-3.5 w-3.5" />}
                  >
                    AI Marketing Solutions
                  </SectionLabel>
                </motion.div>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.08,
                    duration: 0.55,
                  }}
                  className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em]"
                  style={{
                    color: colors.brand.accent,
                  }}
                >
                  B2B Sales Reinvention
                </motion.p>

                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.12,
                    duration: 0.68,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-3 max-w-3xl text-3xl font-bold leading-[1.06] tracking-[-0.045em] text-white sm:text-4xl lg:text-[46px]"
                >
                  Stop Losing Deals Before Your Sales Team Even Gets a Chance.
                </motion.h1>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.65,
                  }}
                  className="mt-5 max-w-2xl space-y-3"
                >
                  <p className="text-sm leading-[1.8] text-white/60 sm:text-[15px]">
                    Every inquiry matters. But slow responses, inconsistent
                    follow-ups, and manual sales processes cause promising
                    opportunities to disappear long before a deal is won.
                  </p>

                  <p className="text-sm leading-[1.8] text-white/60 sm:text-[15px]">
                    B2B Sales Reinvention helps your business engage prospects
                    instantly, qualify leads automatically, keep every opportunity
                    moving, and give your sales team everything they need to close
                    more business.
                  </p>

                  <p className="text-sm font-bold leading-[1.7] text-white">
                    More qualified opportunities. Faster sales cycles. Higher
                    conversion rates.
                  </p>
                </motion.div>

                {/* CTA 1 */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 14,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
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
                      Book a Discovery Call

                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </MagneticButton>
                </motion.div>

                {/* FLOW */}

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.42,
                  }}
                  className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2"
                >
                  {[
                    'Engage',
                    'Qualify',
                    'Handover',
                    'Follow-up',
                    'Optimize',
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4"
                    >
                      <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/40">
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

              {/* RIGHT — AI SALES SYSTEM */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 24,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.72,
                  delay: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="relative overflow-hidden rounded-[24px] border border-white/15 bg-black/30 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.30)] backdrop-blur-2xl sm:p-5">

                  <div
                    aria-hidden="true"
                    className="absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-10 blur-[90px]"
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
                          AI Sales Operating System
                        </p>

                        <p className="mt-1 text-xs font-semibold text-white/60">
                          From enquiry to opportunity
                        </p>
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07]">
                        <Brain
                          className="h-4 w-4"
                          style={{
                            color: colors.brand.accent,
                          }}
                        />
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">

                      {[
                        {
                          number: '01',
                          icon: <Bot className="h-4 w-4" />,
                          title: 'AI Sales Representative',
                          text: 'Instant engagement, qualification and meeting booking.',
                        },

                        {
                          number: '02',
                          icon: <RefreshCw className="h-4 w-4" />,
                          title: 'Lead Revival',
                          text: 'Reconnect dormant prospects when timing improves.',
                        },

                        {
                          number: '03',
                          icon: <Layers className="h-4 w-4" />,
                          title: 'Sales Orchestrator',
                          text: 'Pipeline, conversations and performance in one place.',
                        },
                      ].map((item) => (
                        <div
                          key={item.number}
                          className="group rounded-[16px] border border-white/10 bg-white/[0.05] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
                        >
                          <div className="flex items-start gap-3">

                            <div
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/20"
                              style={{
                                color: colors.brand.accent,
                              }}
                            >
                              {item.icon}
                            </div>

                            <div>
                              <p
                                className="text-[7px] font-bold uppercase tracking-[0.17em]"
                                style={{
                                  color: colors.brand.accent,
                                }}
                              >
                                AI SYSTEM {item.number}
                              </p>

                              <h2 className="mt-1 text-xs font-bold text-white">
                                {item.title}
                              </h2>

                              <p className="mt-1.5 text-[9px] leading-[1.6] text-white/50">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-4">

                      {[
                        ['Instant', 'Response'],
                        ['Qualified', 'Pipeline'],
                        ['Visible', 'Performance'],
                      ].map(([value, label]) => (
                        <div
                          key={value}
                          className="px-2 text-center"
                        >
                          <p className="text-[10px] font-bold text-white">
                            {value}
                          </p>

                          <p className="mt-1 text-[7px] uppercase tracking-[0.13em] text-white/40">
                            {label}
                          </p>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* HERO OUTCOME STRIP */}

            <motion.div
              initial={{
                opacity: 0,
                y: 14,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.48,
              }}
              className="mt-8 overflow-hidden rounded-[18px] border border-white/15 bg-black/20 backdrop-blur-xl"
            >
              <div className="grid grid-cols-3 divide-x divide-white/10">

                {[
                  'More qualified opportunities.',
                  'Faster sales cycles.',
                  'Higher conversion rates.',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[72px] items-center justify-center px-3 py-4 text-center"
                  >
                    <p className="text-[9px] font-bold leading-relaxed text-white/70 sm:text-[11px]">
                      {item}
                    </p>
                  </div>
                ))}

              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ============================================
          2. PROBLEMS
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
                <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">

                  <div>
                    <SectionLabel
                      icon={<Gauge className="h-3.5 w-3.5" />}
                    >
                      Sales Friction
                    </SectionLabel>

                    <h2
                      className="mt-5 text-2xl font-bold tracking-[-0.035em] sm:text-3xl"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      The Problems We Solve
                    </h2>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm leading-[1.8] text-gray-600">
                      Growing revenue isn't just about generating more leads.
                      It's about making sure every opportunity is handled quickly,
                      consistently, and professionally.
                    </p>

                    <p className="text-sm leading-[1.8] text-gray-600">
                      Unfortunately, many sales teams spend more time managing the
                      sales process than actually selling.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <StaggerContainer className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                {salesProblems.map((problem, index) => (
                  <motion.article
                    key={problem.title}
                    variants={staggerItemVariants}
                    whileHover={{
                      y: -4,
                    }}
                    className={[
                      'group relative overflow-hidden rounded-[20px] border border-gray-200 bg-white/90 p-5 shadow-[0_14px_42px_rgba(0,1,49,0.045)] transition-shadow duration-300 hover:shadow-[0_20px_54px_rgba(0,1,49,0.08)]',
                      index === salesProblems.length - 1
                        ? 'md:col-span-2 lg:col-span-3'
                        : '',
                    ].join(' ')}
                  >
                    <div className="flex items-start justify-between">

                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{
                          color: colors.brand.secondary,
                          backgroundColor: `${colors.brand.secondary}0D`,
                        }}
                      >
                        {problem.icon}
                      </div>

                      <span className="text-[8px] font-bold tracking-[0.16em] text-gray-300">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3
                      className="mt-4 text-sm font-bold leading-[1.45]"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      {problem.title}
                    </h3>

                    <p className="mt-2 text-[11px] leading-[1.75] text-gray-600">
                      {problem.content}
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
          3. INTRODUCING B2B SALES REINVENTION
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
                <div className="relative overflow-hidden rounded-[26px] border border-gray-200 bg-white/90 p-5 shadow-[0_20px_60px_rgba(0,1,49,0.06)] sm:p-7 lg:p-9">

                  <div
                    aria-hidden="true"
                    className="absolute -right-24 -top-28 h-72 w-72 rounded-full opacity-[0.07] blur-[100px]"
                    style={{
                      backgroundColor: colors.brand.accent,
                    }}
                  />

                  <div className="relative grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">

                    <div>
                      <SectionLabel
                        icon={<Brain className="h-3.5 w-3.5" />}
                      >
                        Introducing B2B Sales Reinvention
                      </SectionLabel>

                      <h2
                        className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-0.035em] sm:text-3xl"
                        style={{
                          color: colors.brand.primary,
                        }}
                      >
                        Build a Sales Process That Never Misses an Opportunity.
                      </h2>
                    </div>

                    <div className="space-y-3 lg:border-l lg:border-gray-200 lg:pl-8">

                      <p className="text-sm leading-[1.8] text-gray-600">
                        B2B Sales Reinvention transforms the way your business
                        captures, qualifies, manages, and converts sales
                        opportunities.
                      </p>

                      <p className="text-sm leading-[1.8] text-gray-600">
                        Instead of relying on manual processes and disconnected
                        tools, the solution works alongside your sales team to
                        engage prospects instantly, gather the right information,
                        qualify opportunities, schedule meetings, maintain CRM
                        records, and ensure every lead receives the attention it
                        deserves.
                      </p>

                      <p className="text-sm leading-[1.8] text-gray-600">
                        Your salespeople spend less time on administration and
                        more time doing what they do best-building relationships
                        and closing deals.
                      </p>

                      <p
                        className="text-sm font-semibold leading-[1.8]"
                        style={{
                          color: colors.brand.primary,
                        }}
                      >
                        The result is a faster, more organised sales operation
                        that helps your business convert more opportunities
                        without increasing headcount.
                      </p>

                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          4. HOW THE SOLUTION WORKS
          ============================================ */}

      <section className="relative isolate overflow-hidden bg-[#080912] py-14 sm:py-16">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=86"
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-[0.13]"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/90 via-[#080912]/88 to-[#080912]/95" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)',
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
                    icon={<Workflow className="h-3.5 w-3.5" />}
                  >
                    How the Solution Works
                  </SectionLabel>

                  <h2 className="mt-5 text-2xl font-bold tracking-[-0.035em] text-white sm:text-3xl">
                    From First Inquiry to Successful Handover
                  </h2>
                </div>

                <p className="max-w-2xl text-sm leading-[1.8] text-white/50 lg:justify-self-end">
                  Our solution supports your sales process from the very first
                  inquiry through to a successful handover.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

              {solutionSteps.map((step) => (
                <motion.article
                  key={step.number}
                  variants={staggerItemVariants}
                  whileHover={{
                    y: -4,
                  }}
                  className="rounded-[20px] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between">

                    <span
                      className="text-[9px] font-bold tracking-[0.16em]"
                      style={{
                        color: colors.brand.accent,
                      }}
                    >
                      STEP {step.number}
                    </span>

                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/20"
                      style={{
                        color: colors.brand.accent,
                      }}
                    >
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-white">
                    {step.title}
                  </h3>

                  <div className="mt-3 space-y-2">

                    {step.content.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[10px] leading-[1.7] text-white/50"
                      >
                        {paragraph}
                      </p>
                    ))}

                  </div>
                </motion.article>
              ))}

            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* ============================================
          5. AI TEAM
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
                <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">

                  <div>
                    <SectionLabel
                      icon={<Bot className="h-3.5 w-3.5" />}
                    >
                      AI Sales Workforce
                    </SectionLabel>

                    <h2
                      className="mt-5 text-2xl font-bold tracking-[-0.035em] sm:text-3xl"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      Meet the AI Team Behind Your Sales
                    </h2>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm leading-[1.8] text-gray-600">
                      Behind every successful sales process is a team working
                      together.
                    </p>

                    <p className="text-sm leading-[1.8] text-gray-600">
                      Our solution combines specialised AI agents that support
                      both your customers and your salespeople.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <StaggerContainer className="mt-8 grid gap-5 lg:grid-cols-3">

                {aiSalesTeam.map((agent) => (
                  <motion.article
                    key={agent.number}
                    variants={staggerItemVariants}
                    whileHover={{
                      y: -4,
                    }}
                    className="group relative overflow-hidden rounded-[22px] border border-gray-200 bg-white/90 p-5 shadow-[0_16px_50px_rgba(0,1,49,0.055)] sm:p-6"
                  >
                    <div className="flex items-start justify-between">

                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{
                          color: colors.brand.secondary,
                          backgroundColor: `${colors.brand.secondary}0D`,
                        }}
                      >
                        {agent.icon}
                      </div>

                      <span className="text-[8px] font-bold tracking-[0.16em] text-gray-300">
                        AI {agent.number}
                      </span>
                    </div>

                    <h3
                      className="mt-5 text-base font-bold"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      {agent.title}
                    </h3>

                    <p
                      className="mt-1.5 text-xs font-bold"
                      style={{
                        color: colors.brand.secondary,
                      }}
                    >
                      {agent.tagline}
                    </p>

                    <p className="mt-4 text-[11px] leading-[1.75] text-gray-600">
                      {agent.content}
                    </p>

                    <p className="mt-2 text-[11px] leading-[1.75] text-gray-600">
                      {agent.closing}
                    </p>

                    <div className="my-5 h-px bg-gray-200" />

                    <p
                      className="text-[9px] font-bold uppercase tracking-[0.15em]"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      What it helps you achieve
                    </p>

                    <ul className="mt-3 space-y-2">

                      {agent.outcomes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-[10px] leading-[1.6] text-gray-600"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-3.5 w-3.5 shrink-0"
                            style={{
                              color: colors.brand.accent,
                            }}
                          />

                          <span>{item}</span>
                        </li>
                      ))}

                    </ul>

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
          6. HOW WE WORK
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
                <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">

                  <div>
                    <SectionLabel
                      icon={<Building2 className="h-3.5 w-3.5" />}
                    >
                      How We Work
                    </SectionLabel>

                    <h2
                      className="mt-5 text-2xl font-bold tracking-[-0.035em] sm:text-3xl"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      Sales Transformation Built Around Your Business
                    </h2>
                  </div>

                  <p className="text-sm leading-[1.8] text-gray-600">
                    Technology is only one part of successful sales
                    transformation. That's why we work closely with your business
                    to redesign your sales process before implementing the
                    solution.
                  </p>
                </div>
              </ScrollReveal>

              <StaggerContainer className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">

                {implementationSteps.map((step) => (
                  <motion.article
                    key={step.number}
                    variants={staggerItemVariants}
                    whileHover={{
                      y: -3,
                    }}
                    className="rounded-[18px] border border-gray-200 bg-white/90 p-4 shadow-[0_12px_36px_rgba(0,1,49,0.04)]"
                  >
                    <div className="flex items-center justify-between">

                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg"
                        style={{
                          color: colors.brand.secondary,
                          backgroundColor: `${colors.brand.secondary}0D`,
                        }}
                      >
                        {step.icon}
                      </div>

                      <span className="text-[8px] font-bold text-gray-300">
                        {step.number}
                      </span>
                    </div>

                    <h3
                      className="mt-4 text-xs font-bold leading-[1.45]"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[10px] leading-[1.7] text-gray-600">
                      {step.content}
                    </p>
                  </motion.article>
                ))}

              </StaggerContainer>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          7. WHY CHOOSE US + BUSINESS OUTCOMES
          ============================================ */}

      <section className="relative isolate overflow-hidden bg-[#080912] py-14 sm:py-16">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,170,0.18),transparent_35%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_72%,rgba(255,179,0,0.09),transparent_28%)]" />
        </div>

        <Container size="xl">

          <div className="mx-auto max-w-7xl">

            <ScrollReveal>
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

                {/* LEFT */}

                <div>
                  <SectionLabel
                    dark
                    icon={<Users className="h-3.5 w-3.5" />}
                  >
                    Why Choose Us?
                  </SectionLabel>

                  <h2 className="mt-5 text-2xl font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-3xl">
                    Technology doesn't close deals.
                    <span
                      className="mt-1 block"
                      style={{
                        color: colors.brand.accent,
                      }}
                    >
                      People do.
                    </span>
                  </h2>

                  <p className="mt-4 max-w-lg text-sm leading-[1.8] text-white/50">
                    Our role is to give your people better information, better
                    processes, and better tools so they can focus on building
                    relationships and winning business.
                  </p>
                </div>

                {/* RIGHT */}

                <div className="grid gap-3 sm:grid-cols-2">

                  {reasons.map((item) => (
                    <div
                      key={item.number}
                      className="rounded-[18px] border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl"
                    >
                      <span
                        className="text-[8px] font-bold tracking-[0.16em]"
                        style={{
                          color: colors.brand.accent,
                        }}
                      >
                        {item.number}
                      </span>

                      <h3 className="mt-2 text-xs font-bold leading-[1.5] text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[10px] leading-[1.7] text-white/50">
                        {item.content}
                      </p>
                    </div>
                  ))}

                </div>
              </div>
            </ScrollReveal>

            {/* BUSINESS OUTCOMES */}

            <ScrollReveal delay={0.08}>
              <div className="mt-7 overflow-hidden rounded-[22px] border border-white/10 bg-black/20 p-5 backdrop-blur-xl sm:p-6">

                <div className="grid gap-6 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">

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
                        Measurable Business Outcomes
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold text-white">
                      Focused on measurable business outcomes.
                    </h3>

                    <p className="mt-2 text-[11px] leading-[1.7] text-white/50">
                      Everything we do is designed to help you:
                    </p>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">

                    {outcomes.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.05] p-3"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-3.5 w-3.5 shrink-0"
                          style={{
                            color: colors.brand.accent,
                          }}
                        />

                        <span className="text-[10px] leading-[1.6] text-white/60">
                          {item}
                        </span>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ============================================
          8. FINAL CTA
          ============================================ */}

      <ModernSectionBackground
        variant="gradient-soft"
        className="relative overflow-hidden"
      >
        <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">

          <Container size="lg">

            <ScrollReveal>
              <div className="mx-auto max-w-4xl overflow-hidden rounded-[26px] border border-gray-200 bg-white/90 px-5 py-8 text-center shadow-[0_24px_70px_rgba(0,1,49,0.08)] sm:px-8 sm:py-10">

                <div
                  className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    color: colors.brand.secondary,
                    backgroundColor: `${colors.brand.secondary}0D`,
                  }}
                >
                  <Brain className="h-5 w-5" />
                </div>

                <p
                  className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em]"
                  style={{
                    color: colors.brand.secondary,
                  }}
                >
                  B2B Sales Reinvention
                </p>

                <h2
                  className="mt-2 text-2xl font-bold tracking-[-0.035em] sm:text-3xl"
                  style={{
                    color: colors.brand.primary,
                  }}
                >
                  Ready to Reinvent Your Sales Process?
                </h2>

                <div className="mx-auto mt-4 max-w-2xl space-y-2">

                  <p className="text-sm leading-[1.8] text-gray-600">
                    Winning more business isn't always about generating more
                    leads.
                  </p>

                  <p className="text-sm leading-[1.8] text-gray-600">
                    It's about making the most of every opportunity you already
                    have.
                  </p>

                  <p className="text-sm leading-[1.8] text-gray-600">
                    B2B Sales Reinvention helps your organisation respond faster,
                    sell smarter, and grow revenue through a more connected,
                    consistent, and efficient sales process.
                  </p>

                  <p
                    className="pt-1 text-sm font-bold"
                    style={{
                      color: colors.brand.primary,
                    }}
                  >
                    Let's reinvent the way your business sells.
                  </p>

                </div>

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
                      Book Your Discovery Call

                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </MagneticButton>

                </div>
              </div>
            </ScrollReveal>

          </Container>
        </section>
      </ModernSectionBackground>
    </PageBackground>
  );
}

export default B2BSalesReinventionPage;
