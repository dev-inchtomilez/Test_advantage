/**
 * ============================================
 * AI MARKETING SOLUTIONS
 * B2B SALES REINVENTION
 * AdvantEdge
 * ============================================
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';

import {
  ArrowRight,
  Brain,
  CheckCircle2,
  MessageSquare,
  Clock,
  Workflow,
  Target,
  RefreshCw,
  Database,
  BarChart3,
  Users,
  CalendarCheck,
  Bot,
  Layers,
  TrendingUp,
  Zap,
  Search,
  Eye,
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
    icon: <Clock className="h-5 w-5" />,
    title: 'Leads wait too long for a response.',
    paragraphs: [
      `Prospects expect quick answers. When they don't receive them, they move on or lose interest before your sales team even makes contact.`,
    ],
  },

  {
    icon: <Workflow className="h-5 w-5" />,
    title: 'Sales teams spend too much time on repetitive work.',
    paragraphs: [
      `Instead of building relationships and closing deals, sales representatives spend hours answering basic questions, qualifying leads, updating CRMs, booking meetings, and chasing follow-ups.`,
    ],
  },

  {
    icon: <Target className="h-5 w-5" />,
    title: 'High-quality opportunities are missed.',
    paragraphs: [
      `Not every inquiry deserves the same level of attention, yet many businesses treat every lead the same. As a result, valuable prospects are overlooked while time is spent on opportunities that are unlikely to convert.`,
    ],
  },

  {
    icon: <RefreshCw className="h-5 w-5" />,
    title: 'Follow-ups are inconsistent.',
    paragraphs: [
      `Deals rarely disappear because customers say "no."`,
      `More often, they disappear because nobody followed up at the right time.`,
      `When follow-ups rely on memory or manual reminders, opportunities quietly fall through the cracks.`,
    ],
  },

  {
    icon: <Database className="h-5 w-5" />,
    title: 'CRM data becomes unreliable.',
    paragraphs: [
      `Sales teams are busy.`,
      `Updating CRM records often becomes an afterthought, leaving managers with incomplete information and making forecasting difficult.`,
    ],
  },

  {
    icon: <Eye className="h-5 w-5" />,
    title: 'Sales leaders lack visibility.',
    paragraphs: [
      `Without reliable data, it's difficult to understand where deals are slowing down, which activities are producing results, or how to improve overall sales performance.`,
    ],
  },

  {
    icon: <Users className="h-5 w-5" />,
    title: 'Scaling means hiring more people.',
    paragraphs: [
      `As enquiries increase, businesses often respond by growing the sales team.`,
      `This increases costs while creating new challenges around consistency, onboarding, and performance management.`,
    ],
  },
];

/* ============================================
   HOW SOLUTION WORKS
   ============================================ */

const solutionSteps = [
  {
    number: '01',
    icon: <MessageSquare className="h-5 w-5" />,
    title: 'Step 1 - Engage Every Prospect Immediately',
    paragraphs: [
      `Every inquiry receives an instant response.`,
      `Whether someone visits your website, submits an inquiry, or starts a conversation, they receive immediate assistance instead of waiting for someone to become available.`,
      `This creates a professional first impression and keeps prospects engaged while interest is highest.`,
    ],
  },

  {
    number: '02',
    icon: <Target className="h-5 w-5" />,
    title: 'Step 2 - Qualify Leads Automatically',
    paragraphs: [
      `Not every lead is ready to buy.`,
      `Instead of asking your sales team to manually assess every inquiry, the system gathers the right information, understands customer needs, and identifies which prospects are ready for a sales conversation.`,
      `Your team receives qualified opportunities rather than raw enquiries.`,
    ],
  },

  {
    number: '03',
    icon: <Users className="h-5 w-5" />,
    title: 'Step 3 - Prepare Your Sales Team',
    paragraphs: [
      `When a lead is ready, your sales representative receives the complete conversation history, qualification details, customer requirements, and relevant context.`,
      `Instead of spending the first meeting collecting information, they can focus on understanding the customer's goals and moving the opportunity forward.`,
    ],
  },

  {
    number: '04',
    icon: <Workflow className="h-5 w-5" />,
    title: 'Step 4 - Keep Every Opportunity Moving',
    paragraphs: [
      `The sales process doesn't stop after the first conversation.`,
      `The solution helps manage follow-ups, reminders, customer communications, and sales activities to ensure opportunities continue progressing without relying on manual tracking.`,
      `Nothing gets forgotten.`,
    ],
  },

  {
    number: '05',
    icon: <RefreshCw className="h-5 w-5" />,
    title: 'Step 5 - Re-engage Lost Opportunities',
    paragraphs: [
      `Many prospects aren't ready to buy immediately.`,
      `Rather than allowing those opportunities to disappear, the system automatically reconnects with inactive prospects through personalised follow-ups, bringing them back into the sales pipeline when the timing is right.`,
    ],
  },

  {
    number: '06',
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Step 6 - Give Leaders Complete Visibility',
    paragraphs: [
      `Every conversation, activity, and opportunity is captured in one place.`,
      `Sales leaders gain a clear understanding of pipeline health, team performance, conversion rates, and areas that need attention, allowing better decisions based on real data.`,
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
    description:
      `The AI Sales Representative engages prospects the moment they arrive, answers questions, gathers information, qualifies leads, updates your CRM, and schedules meetings with the right person when appropriate.`,
    closing:
      `Your team starts every conversation already informed.`,
    benefits: [
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
    description:
      `Many promising opportunities become inactive-not because they weren't interested, but because the timing wasn't right.`,
    closing:
      `Lead Revival automatically reconnects with prospects using personalised email, SMS, chat, and other digital channels, bringing qualified opportunities back into your pipeline.`,
    benefits: [
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
    description:
      `The Sales Orchestrator brings together your sales activities, customer conversations, pipeline information, and performance metrics into one organised workspace.`,
    closing:
      `Instead of switching between multiple systems, your team has everything they need to manage opportunities efficiently while sales leaders gain complete visibility into business performance.`,
    benefits: [
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

const workingProcess = [
  {
    number: '01',
    icon: <Search className="h-5 w-5" />,
    title: '1. Discover',
    description:
      `We begin by understanding your current sales process, business objectives, customer journey, and operational challenges.`,
  },

  {
    number: '02',
    icon: <Target className="h-5 w-5" />,
    title: '2. Define the Future State',
    description:
      `Together, we identify where improvements can be made and design a sales process that supports your growth goals.`,
  },

  {
    number: '03',
    icon: <Workflow className="h-5 w-5" />,
    title: '3. Build Together',
    description:
      `We configure the solution around your business, integrating it into your existing sales process and ensuring it reflects the way your organisation works.`,
  },

  {
    number: '04',
    icon: <Zap className="h-5 w-5" />,
    title: '4. Launch and Embed',
    description:
      `We deploy the solution with minimal disruption, helping your sales team adopt new ways of working while maintaining business continuity.`,
  },

  {
    number: '05',
    icon: <TrendingUp className="h-5 w-5" />,
    title: '5. Continuously Improve',
    description:
      `Sales is constantly evolving.`,
    secondary:
      `We continue measuring performance, identifying opportunities for improvement, and refining the solution so your business continues to grow over time.`,
  },
];

/* ============================================
   WHY CHOOSE US
   ============================================ */

const whyChooseUs = [
  {
    number: '01',
    title: 'We redesign your sales process-not just your software.',
    description:
      `Our goal is to improve the way your organisation sells, not simply automate existing tasks.`,
  },

  {
    number: '02',
    title: 'Built around your business.',
    description:
      `Every organisation has a different sales journey.`,
    secondary:
      `We tailor every implementation to your products, customers, teams, and objectives.`,
  },

  {
    number: '03',
    title: 'Sales and technology working together.',
    description:
      `Instead of replacing your sales team, our solution supports them by removing repetitive work and providing better visibility across the sales pipeline.`,
  },

  {
    number: '04',
    title: 'Designed for long-term growth.',
    description:
      `As your business grows, your sales operation continues to improve through continuous optimisation and learning.`,
  },
];

const measurableOutcomes = [
  'Increase qualified opportunities',
  'Improve conversion rates',
  'Reduce sales cycle times',
  'Recover lost deals',
  'Improve sales productivity',
  'Scale revenue without proportionally increasing headcount',
];

/* ============================================
   PAGE
   ============================================ */

export function AIMarketingSolutionsPage() {
  return (
    <PageBackground>

      {/* ============================================
          SEO
          ============================================ */}

      <PageSEO
        title="AI Marketing Solutions | B2B Sales Reinvention | AdvantEdge"
        description="B2B Sales Reinvention helps businesses engage prospects instantly, qualify leads automatically, keep opportunities moving, improve sales productivity, and increase conversion."
        path="/services/ai-marketing-solutions"
      />

      {/* ============================================
          1. HERO
          ============================================ */}

      <section className="relative isolate overflow-hidden bg-[#080912]">

        {/* Background */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20"
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=88"
            alt=""
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Overlay */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#080912]/98 via-[#080912]/78 to-[#080912]/42" />

          <div className="absolute inset-0 bg-gradient-to-b from-[#080912]/25 via-transparent to-[#080912]/96" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_20%,rgba(255,255,255,0.14),transparent_38%)]" />

          <div
            className="absolute -left-52 top-[15%] h-[500px] w-[500px] rounded-full opacity-[0.10] blur-[160px]"
            style={{
              backgroundColor: colors.brand.secondary,
            }}
          />

          <div
            className="absolute -right-48 bottom-[-120px] h-[460px] w-[460px] rounded-full opacity-[0.08] blur-[150px]"
            style={{
              backgroundColor: colors.brand.accent,
            }}
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
          <div className="mx-auto flex min-h-[680px] max-w-7xl flex-col justify-center py-16 lg:min-h-[720px] lg:py-20">

            <div className="grid items-center gap-9 lg:grid-cols-[1.08fr_0.92fr]">

              {/* ============================================
                  HERO CONTENT
                  ============================================ */}

              <div className="max-w-3xl">

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55 }}
                >
                  <div
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-4 py-2 backdrop-blur-xl"
                    style={{
                      color: colors.brand.accent,
                    }}
                  >
                    <Brain className="h-3.5 w-3.5" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                      AI Marketing Solutions
                    </span>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.08,
                  }}
                  className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em]"
                  style={{
                    color: colors.brand.accent,
                  }}
                >
                  B2B Sales Reinvention
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.12,
                  }}
                  className="mt-3 max-w-3xl text-3xl font-bold leading-[1.07] tracking-[-0.04em] text-white sm:text-4xl lg:text-[46px]"
                >
                  Stop Losing Deals Before Your Sales Team Even Gets a Chance.
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                  }}
                  className="mt-5 max-w-2xl space-y-3"
                >
                  <p className="text-sm leading-[1.8] text-white/68 sm:text-base">
                    Every inquiry matters. But slow responses, inconsistent
                    follow-ups, and manual sales processes cause promising
                    opportunities to disappear long before a deal is won.
                  </p>

                  <p className="text-sm leading-[1.8] text-white/68 sm:text-base">
                    B2B Sales Reinvention helps your business engage prospects
                    instantly, qualify leads automatically, keep every opportunity
                    moving, and give your sales team everything they need to close
                    more business.
                  </p>

                  <p className="text-sm font-bold text-white">
                    More qualified opportunities. Faster sales cycles. Higher
                    conversion rates.
                  </p>
                </motion.div>

                {/* CTA 1 */}

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.34,
                  }}
                  className="mt-7"
                >
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(0,0,170,0.28)] transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: gradients.primary,
                    }}
                  >
                    Book a Discovery Call

                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>

              {/* ============================================
                  HERO AI SOLUTION SUMMARY
                  ============================================ */}

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.22,
                }}
                className="grid gap-3"
              >
                {[
                  {
                    number: '01',
                    icon: <Bot className="h-5 w-5" />,
                    title: 'AI Sales Representative',
                    text: 'Your first salesperson never sleeps.',
                  },
                  {
                    number: '02',
                    icon: <RefreshCw className="h-5 w-5" />,
                    title: 'Lead Revival',
                    text: 'Your second chance to win the deal.',
                  },
                  {
                    number: '03',
                    icon: <Layers className="h-5 w-5" />,
                    title: 'Sales Orchestrator',
                    text: 'Your command centre for modern sales.',
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="group rounded-[18px] border border-white/20 bg-black/25 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.09] sm:p-5"
                  >
                    <div className="flex items-start gap-4">

                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/[0.08]"
                        style={{
                          color: colors.brand.accent,
                        }}
                      >
                        {item.icon}
                      </div>

                      <div>
                        <p
                          className="text-[8px] font-bold uppercase tracking-[0.17em]"
                          style={{
                            color: colors.brand.accent,
                          }}
                        >
                          AI SALES SYSTEM {item.number}
                        </p>

                        <h2 className="mt-1 text-sm font-bold text-white">
                          {item.title}
                        </h2>

                        <p className="mt-1.5 text-[10px] leading-[1.65] text-white/50">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ============================================
                HERO OUTCOME STRIP
                ============================================ */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.44,
              }}
              className="mt-8 overflow-hidden rounded-2xl border border-white/20 bg-black/20 backdrop-blur-xl"
            >
              <div className="grid grid-cols-3 divide-x divide-white/15">

                {[
                  'More qualified opportunities.',
                  'Faster sales cycles.',
                  'Higher conversion rates.',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[78px] items-center justify-center px-3 py-4 text-center"
                  >
                    <p className="text-[10px] font-bold leading-relaxed text-white/75 sm:text-xs">
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
          2. THE PROBLEMS WE SOLVE
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
                <div className="grid gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">

                  <div>
                    <div
                      className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
                      style={{
                        borderColor: `${colors.brand.accent}55`,
                        backgroundColor: `${colors.brand.accent}10`,
                      }}
                    >
                      <Target
                        className="h-3.5 w-3.5"
                        style={{
                          color: colors.brand.accent,
                        }}
                      />

                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.18em]"
                        style={{
                          color: colors.brand.primary,
                        }}
                      >
                        Sales Friction
                      </span>
                    </div>

                    <h2
                      className="mt-5 text-2xl font-bold tracking-[-0.03em] sm:text-3xl"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      The Problems We Solve
                    </h2>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm leading-[1.8] text-gray-600 sm:text-base">
                      Growing revenue isn't just about generating more leads. It's
                      about making sure every opportunity is handled quickly,
                      consistently, and professionally.
                    </p>

                    <p className="text-sm leading-[1.8] text-gray-600 sm:text-base">
                      Unfortunately, many sales teams spend more time managing the
                      sales process than actually selling.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <StaggerContainer className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                {salesProblems.map((problem, index) => (
                  <motion.div
                    key={problem.title}
                    variants={staggerItemVariants}
                    whileHover={{
                      y: -4,
                    }}
                    className={[
                      'group relative overflow-hidden rounded-[20px] border border-gray-200 bg-white/90 p-5 shadow-[0_14px_42px_rgba(0,1,49,0.05)]',
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

                      <span className="text-[9px] font-bold tracking-[0.14em] text-gray-300">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3
                      className="mt-4 text-sm font-bold"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      {problem.title}
                    </h3>

                    <div className="mt-2 space-y-2">
                      {problem.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-[11px] leading-[1.7] text-gray-600"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div
                      className="mt-5 h-[2px] w-8 transition-all duration-500 group-hover:w-16"
                      style={{
                        background: gradients.primary,
                      }}
                    />
                  </motion.div>
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
                <div className="relative overflow-hidden rounded-[26px] border border-gray-200 bg-white/90 p-5 shadow-[0_20px_60px_rgba(0,1,49,0.07)] sm:p-7 lg:p-9">

                  <div
                    aria-hidden="true"
                    className="absolute -right-28 -top-28 h-80 w-80 rounded-full opacity-[0.07] blur-[100px]"
                    style={{
                      backgroundColor: colors.brand.accent,
                    }}
                  />

                  <div className="relative grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">

                    <div>
                      <div className="flex items-center gap-2">
                        <Brain
                          className="h-4 w-4"
                          style={{
                            color: colors.brand.accent,
                          }}
                        />

                        <span
                          className="text-[9px] font-bold uppercase tracking-[0.17em]"
                          style={{
                            color: colors.brand.secondary,
                          }}
                        >
                          Introducing B2B Sales Reinvention
                        </span>
                      </div>

                      <h2
                        className="mt-4 text-2xl font-bold leading-[1.12] tracking-[-0.03em] sm:text-3xl"
                        style={{
                          color: colors.brand.primary,
                        }}
                      >
                        Build a Sales Process That Never Misses an Opportunity.
                      </h2>
                    </div>

                    <div className="space-y-3 border-gray-200 lg:border-l lg:pl-8">

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
                        Your salespeople spend less time on administration and more
                        time doing what they do best-building relationships and
                        closing deals.
                      </p>

                      <p className="text-sm font-semibold leading-[1.8] text-gray-800">
                        The result is a faster, more organised sales operation that
                        helps your business convert more opportunities without
                        increasing headcount.
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

          {/* Dark background */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#080912]"
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=86"
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-[0.16]"
            />

            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/88 via-[#080912]/82 to-[#080912]/94" />

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

                      <Workflow
                        className="h-3.5 w-3.5"
                        style={{
                          color: colors.brand.accent,
                        }}
                      />

                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.18em]"
                        style={{
                          color: colors.brand.accent,
                        }}
                      >
                        How the Solution Works
                      </span>
                    </div>

                    <h2 className="mt-5 max-w-xl text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">
                      From First Inquiry to Successful Handover
                    </h2>
                  </div>

                  <p className="max-w-lg text-sm leading-[1.75] text-white/52 lg:text-right">
                    Our solution supports your sales process from the very first
                    inquiry through to a successful handover.
                  </p>
                </div>
              </ScrollReveal>

              <StaggerContainer className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                {solutionSteps.map((step) => (
                  <motion.div
                    key={step.number}
                    variants={staggerItemVariants}
                    whileHover={{
                      y: -4,
                    }}
                    className="relative overflow-hidden rounded-[20px] border border-white/15 bg-black/25 p-5 backdrop-blur-xl"
                  >
                    <div className="flex items-center justify-between">

                      <span
                        className="text-[9px] font-bold tracking-[0.16em]"
                        style={{
                          color: colors.brand.accent,
                        }}
                      >
                        {step.number}
                      </span>

                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06]"
                        style={{
                          color: colors.brand.accent,
                        }}
                      >
                        {step.icon}
                      </div>
                    </div>

                    <h3 className="mt-4 text-sm font-bold leading-[1.4] text-white">
                      {step.title}
                    </h3>

                    <div className="mt-3 space-y-2">
                      {step.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-[10px] leading-[1.7] text-white/55"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}

              </StaggerContainer>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          5. AI SALES TEAM
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
                <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">

                  <div>
                    <div className="flex items-center gap-2">

                      <Bot
                        className="h-4 w-4"
                        style={{
                          color: colors.brand.accent,
                        }}
                      />

                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.17em]"
                        style={{
                          color: colors.brand.secondary,
                        }}
                      >
                        AI Sales Workforce
                      </span>
                    </div>

                    <h2
                      className="mt-3 text-2xl font-bold tracking-[-0.03em] sm:text-3xl"
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
                  <motion.div
                    key={agent.number}
                    variants={staggerItemVariants}
                    whileHover={{
                      y: -4,
                    }}
                    className="group relative overflow-hidden rounded-[22px] border border-gray-200 bg-white/90 p-5 shadow-[0_16px_50px_rgba(0,1,49,0.06)] sm:p-6"
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

                      <span className="text-[9px] font-bold tracking-[0.16em] text-gray-300">
                        {agent.number}
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
                      {agent.description}
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

                      {agent.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2 text-[10px] leading-relaxed text-gray-600"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-3.5 w-3.5 shrink-0"
                            style={{
                              color: colors.brand.accent,
                            }}
                          />

                          <span>{benefit}</span>
                        </li>
                      ))}

                    </ul>

                    <div
                      className="mt-5 h-[2px] w-8 transition-all duration-500 group-hover:w-16"
                      style={{
                        background: gradients.primary,
                      }}
                    />
                  </motion.div>
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
                <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

                  <div>
                    <div className="flex items-center gap-2">

                      <Workflow
                        className="h-4 w-4"
                        style={{
                          color: colors.brand.accent,
                        }}
                      />

                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.17em]"
                        style={{
                          color: colors.brand.secondary,
                        }}
                      >
                        Implementation Approach
                      </span>
                    </div>

                    <h2
                      className="mt-3 text-2xl font-bold tracking-[-0.03em] sm:text-3xl"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      How We Work
                    </h2>
                  </div>

                  <p className="text-sm leading-[1.8] text-gray-600 sm:text-base">
                    Technology is only one part of successful sales
                    transformation.
                    <br />
                    That's why we work closely with your business to redesign
                    your sales process before implementing the solution.
                  </p>
                </div>
              </ScrollReveal>

              <StaggerContainer className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">

                {workingProcess.map((step) => (
                  <motion.div
                    key={step.number}
                    variants={staggerItemVariants}
                    whileHover={{
                      y: -3,
                    }}
                    className="rounded-[18px] border border-gray-200 bg-white/88 p-4 shadow-[0_12px_35px_rgba(0,1,49,0.045)]"
                  >
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{
                        color: colors.brand.secondary,
                        backgroundColor: `${colors.brand.secondary}0D`,
                      }}
                    >
                      {step.icon}
                    </div>

                    <h3
                      className="mt-4 text-xs font-bold leading-[1.5]"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[10px] leading-[1.7] text-gray-600">
                      {step.description}
                    </p>

                    {step.secondary && (
                      <p className="mt-2 text-[10px] leading-[1.7] text-gray-600">
                        {step.secondary}
                      </p>
                    )}
                  </motion.div>
                ))}

              </StaggerContainer>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          7. WHY CHOOSE US
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
                <div className="relative overflow-hidden rounded-[26px] border border-gray-200 bg-white/90 p-5 shadow-[0_18px_55px_rgba(0,1,49,0.06)] sm:p-7 lg:p-9">

                  <div
                    aria-hidden="true"
                    className="absolute -right-24 -top-28 h-72 w-72 rounded-full opacity-[0.07] blur-[100px]"
                    style={{
                      backgroundColor: colors.brand.accent,
                    }}
                  />

                  <div className="relative grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">

                    <div>

                      <div className="flex items-center gap-2">

                        <Users
                          className="h-4 w-4"
                          style={{
                            color: colors.brand.accent,
                          }}
                        />

                        <span
                          className="text-[10px] font-bold uppercase tracking-[0.17em]"
                          style={{
                            color: colors.brand.secondary,
                          }}
                        >
                          Why Choose Us?
                        </span>
                      </div>

                      <h2
                        className="mt-4 text-2xl font-bold leading-[1.12] tracking-[-0.03em] sm:text-3xl"
                        style={{
                          color: colors.brand.primary,
                        }}
                      >
                        Technology doesn't close deals.
                        <span className="mt-1 block text-gray-500">
                          People do.
                        </span>
                      </h2>

                      <p className="mt-4 text-sm leading-[1.8] text-gray-600">
                        Our role is to give your people better information,
                        better processes, and better tools so they can focus on
                        building relationships and winning business.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">

                      {whyChooseUs.map((item) => (
                        <div
                          key={item.number}
                          className="rounded-[18px] border border-gray-200 bg-white p-4"
                        >
                          <span
                            className="text-[8px] font-bold tracking-[0.16em]"
                            style={{
                              color: colors.brand.accent,
                            }}
                          >
                            {item.number}
                          </span>

                          <h3
                            className="mt-2 text-xs font-bold leading-[1.5]"
                            style={{
                              color: colors.brand.primary,
                            }}
                          >
                            {item.title}
                          </h3>

                          <p className="mt-2 text-[10px] leading-[1.7] text-gray-600">
                            {item.description}
                          </p>

                          {item.secondary && (
                            <p className="mt-2 text-[10px] leading-[1.7] text-gray-600">
                              {item.secondary}
                            </p>
                          )}
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* ============================================
                  MEASURABLE OUTCOMES
                  ============================================ */}

              <ScrollReveal delay={0.08}>
                <div className="mt-5 overflow-hidden rounded-[22px] bg-[#080912] p-5 shadow-[0_20px_60px_rgba(0,1,49,0.16)] sm:p-6">

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
                          Business Outcomes
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

                      {measurableOutcomes.map((outcome) => (
                        <div
                          key={outcome}
                          className="flex items-start gap-2 rounded-xl border border-white/12 bg-white/[0.05] p-3"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-3.5 w-3.5 shrink-0"
                            style={{
                              color: colors.brand.accent,
                            }}
                          />

                          <span className="text-[10px] leading-relaxed text-white/65">
                            {outcome}
                          </span>
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
          8. FINAL CTA
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
                  style={{
                    color: colors.brand.accent,
                  }}
                >
                  <Brain className="h-5 w-5" />
                </div>

                <h2 className="mt-5 text-2xl font-bold text-white">
                  Ready to Reinvent Your Sales Process?
                </h2>

                <div className="mx-auto mt-4 max-w-3xl space-y-3">

                  <p className="text-sm leading-[1.75] text-white/55">
                    Winning more business isn't always about generating more
                    leads.
                  </p>

                  <p className="text-sm leading-[1.75] text-white/55">
                    It's about making the most of every opportunity you already
                    have.
                  </p>

                  <p className="text-sm leading-[1.75] text-white/55">
                    B2B Sales Reinvention helps your organisation respond
                    faster, sell smarter, and grow revenue through a more
                    connected, consistent, and efficient sales process.
                  </p>

                  <p className="text-sm font-bold text-white">
                    Let's reinvent the way your business sells.
                  </p>
                </div>

                {/* CTA 2 */}

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: gradients.primary,
                    }}
                  >
                    Book Your Discovery Call

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

/* ============================================
   EXPORT
   ============================================ */

export const AISolutionsPage = AIMarketingSolutionsPage;

export default AIMarketingSolutionsPage;
