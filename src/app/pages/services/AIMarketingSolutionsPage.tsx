/**
 * ============================================
 * B2B SALES REINVENTION SERVICE PAGE
 * AdvantEdge
 * ============================================
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';

import {
  ArrowRight,
  Target,
  CheckCircle2,
  TrendingUp,
  Users,
  BarChart3,
  Lightbulb,
  FileText,
  Globe,
  Award,
  Zap,
  Layers,
  Eye,
  Map,
  LineChart,
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

/* ============================================
   DATA
   ============================================ */

const salesProblems = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Slow Lead Response',
    description:
      'Prospects expect quick answers. When they wait too long, interest drops and valuable opportunities can disappear before your sales team makes contact.',
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: 'Too Much Repetitive Work',
    description:
      'Sales representatives spend valuable time answering basic questions, qualifying leads, updating CRMs, booking meetings, and managing routine follow-ups.',
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: 'High-Quality Leads Get Missed',
    description:
      'When every enquiry is treated the same, valuable prospects can be overlooked while sales teams spend time on opportunities that are unlikely to convert.',
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: 'Inconsistent Follow-Ups',
    description:
      'Deals often disappear because nobody followed up at the right time. Manual reminders and memory-based processes allow opportunities to quietly fall through the cracks.',
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: 'Unreliable CRM Data',
    description:
      'CRM updates often become an afterthought, leaving managers with incomplete customer histories, inaccurate pipeline information, and difficult forecasting.',
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Limited Sales Visibility',
    description:
      'Without reliable data, sales leaders struggle to see where opportunities are slowing down, which activities are working, and where performance can improve.',
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: 'Growth Depends on Headcount',
    description:
      'As enquiries increase, businesses often respond by hiring more salespeople, increasing costs while creating new challenges around consistency, onboarding, and performance.',
  },
];

const keyServices = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Instant Prospect Engagement',
    description:
      'Respond to every new prospect immediately across your digital sales journey while customer interest is at its highest.',
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: 'Automated Lead Qualification',
    description:
      'Gather the right information, understand customer requirements, and identify which opportunities are ready for a sales conversation.',
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: 'Sales-Ready Handover',
    description:
      'Give sales representatives complete conversation history, qualification details, requirements, and context before they engage.',
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: 'Consistent Opportunity Follow-Up',
    description:
      'Keep prospects moving through the pipeline with structured reminders, communications, and sales activities that do not depend on memory.',
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: 'Lead Re-Engagement',
    description:
      'Reconnect with inactive prospects through personalised digital communication and bring valuable opportunities back into the sales pipeline.',
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Complete Pipeline Visibility',
    description:
      'Capture conversations, activities, opportunities, and performance data in one connected environment for better sales decisions.',
  },
];

const solutionSteps = [
  {
    id: 'step-1',
    number: '01',
    title: 'Engage Every Prospect Immediately',
    description:
      'Give every inquiry an instant and professional first response.',
    details: [
      'Respond the moment a prospect arrives',
      'Support website and digital enquiries',
      'Answer initial customer questions',
      'Keep prospects engaged while interest is high',
    ],
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Qualify Leads Automatically',
    description:
      'Understand customer needs before involving your sales team.',
    details: [
      'Gather relevant qualification information',
      'Understand customer requirements',
      'Identify sales-ready prospects',
      'Reduce time spent assessing raw enquiries',
    ],
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Prepare Your Sales Team',
    description:
      'Give representatives the context they need before the conversation begins.',
    details: [
      'Provide complete conversation history',
      'Share qualification details',
      'Capture customer requirements',
      'Allow meetings to focus on progressing the deal',
    ],
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Keep Every Opportunity Moving',
    description:
      'Maintain sales momentum after the first interaction.',
    details: [
      'Manage follow-up activity',
      'Coordinate reminders',
      'Support ongoing customer communication',
      'Reduce opportunities lost through inactivity',
    ],
  },
  {
    id: 'step-5',
    number: '05',
    title: 'Re-engage Lost Opportunities',
    description:
      'Reconnect when previously inactive prospects are ready to continue.',
    details: [
      'Identify dormant opportunities',
      'Run personalised follow-up communication',
      'Bring prospects back into the pipeline',
      'Generate more value from existing leads',
    ],
  },
  {
    id: 'step-6',
    number: '06',
    title: 'Give Leaders Complete Visibility',
    description:
      'Turn sales activity into reliable information for better decision-making.',
    details: [
      'Capture conversations and activity',
      'Monitor pipeline health',
      'Understand conversion performance',
      'Identify areas that need attention',
    ],
  },
];

const aiTeam = [
  {
    id: 'ai-1',
    title: 'AI Sales Representative',
    icon: (
      <Zap
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Your first salesperson never sleeps. The AI Sales Representative engages prospects the moment they arrive, answers questions, gathers information, qualifies leads, captures customer information, updates your CRM, and schedules meetings with the right person when appropriate. It helps you respond instantly, qualify leads automatically, book meetings, reduce administrative work, and improve first-response times.',
  },
  {
    id: 'ai-2',
    title: 'Lead Revival',
    icon: (
      <TrendingUp
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Your second chance to win the deal. Lead Revival reconnects with promising but inactive prospects through personalised email, SMS, chat, and other digital channels. It helps recover dormant opportunities, increase pipeline value, improve marketing ROI, generate more sales from existing leads, and reduce lost revenue.',
  },
  {
    id: 'ai-3',
    title: 'Sales Orchestrator',
    icon: (
      <Layers
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Your command centre for modern sales. The Sales Orchestrator brings sales activities, customer conversations, pipeline information, CRM records, and performance metrics together into one organised workspace. It helps track every opportunity, improve pipeline visibility, monitor team performance, support forecasting, and create a more consistent sales process.',
  },
];

const workSteps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We begin by understanding your current sales process, business objectives, customer journey, systems, and operational challenges.',
  },
  {
    number: '02',
    title: 'Define the Future State',
    description:
      'Together, we identify where improvements can be made and design a sales process that supports your growth goals.',
  },
  {
    number: '03',
    title: 'Build Together',
    description:
      'We configure the solution around your business and integrate it into the way your organisation actually sells.',
  },
  {
    number: '04',
    title: 'Launch and Embed',
    description:
      'We deploy the solution with minimal disruption and help your sales team adopt new ways of working while maintaining business continuity.',
  },
  {
    number: '05',
    title: 'Continuously Improve',
    description:
      'We measure performance, identify improvement opportunities, and refine the solution as your sales operation continues to evolve.',
  },
];

const whyChooseUs = [
  {
    id: 'why-1',
    title: 'We Redesign Your Sales Process — Not Just Your Software',
    icon: (
      <Target
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Our goal is to improve the way your organisation sells, not simply automate existing tasks. We examine how opportunities move through your business and redesign the process around better customer experiences, stronger sales execution, and measurable business outcomes.',
  },
  {
    id: 'why-2',
    title: 'Built Around Your Business',
    icon: (
      <Layers
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Every organisation has a different sales journey. We tailor the implementation around your products, customers, teams, objectives, processes, and existing ways of working.',
  },
  {
    id: 'why-3',
    title: 'Sales and Technology Working Together',
    icon: (
      <Users
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Technology does not close deals — people do. Instead of replacing your sales team, the solution supports them by removing repetitive work, providing better information, and improving visibility across the sales pipeline.',
  },
  {
    id: 'why-4',
    title: 'Designed for Long-Term Growth',
    icon: (
      <TrendingUp
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'As your business grows, your sales operation continues to improve through measurement, optimisation, learning, and ongoing refinement rather than remaining locked into a static process.',
  },
];

const businessOutcomes = [
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

export function B2BSalesReinventionPage() {
  return (
    <PageBackground>
      <PageSEO
        title="B2B Sales Reinvention | AdvantEdge"
        description="Transform your B2B sales process with faster prospect engagement, automated qualification, intelligent follow-ups, lead revival, CRM orchestration, and complete pipeline visibility."
        keywords={[
          'B2B Sales Reinvention',
          'B2B Sales Automation',
          'AI Sales Representative',
          'Lead Qualification',
          'Lead Revival',
          'Sales Orchestration',
          'Sales Process Transformation',
          'CRM Automation',
          'Sales Pipeline Management',
          'B2B Revenue Growth',
        ]}
        path="/services/b2b-sales-reinvention"
      />

      {/* ============================================
          1. HERO
          MATCHES MASTER SERVICES PAGE
          ============================================ */}

      <section className="relative isolate overflow-hidden bg-[#080912]">
        {/* Background */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20"
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=90"
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
          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#080912]/95 via-[#080912]/72 to-[#080912]/38" />

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
                    <Target className="h-3.5 w-3.5" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                      B2B Sales Reinvention
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="mt-5 max-w-3xl text-3xl font-bold leading-[1.07] tracking-[-0.04em] text-white sm:text-4xl lg:text-[48px]"
                >
                  Stop Losing Deals Before
                  <span className="mt-1 block text-white/65">
                    Your Sales Team Even Gets a Chance.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.18 }}
                  className="mt-5 max-w-2xl text-sm leading-[1.8] text-white/68 sm:text-base"
                >
                  Every inquiry matters. But slow responses, inconsistent
                  follow-ups, and manual sales processes cause promising
                  opportunities to disappear long before a deal is won.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.24 }}
                  className="mt-3 max-w-2xl text-sm leading-[1.8] text-white/60"
                >
                  B2B Sales Reinvention helps your business engage prospects
                  instantly, qualify leads automatically, keep every opportunity
                  moving, and give your sales team everything they need to close
                  more business.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 text-sm font-bold text-white"
                >
                  More qualified opportunities. Faster sales cycles. Higher
                  conversion rates.
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
                      Book a Discovery Call
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
                    'Engage',
                    'Qualify',
                    'Convert',
                    'Revive',
                    'Optimise',
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

            {/* Performance Strip */}

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/20 bg-black/20 backdrop-blur-xl">
              <div className="grid grid-cols-3 divide-x divide-white/15">
                {[
                  ['Instant', 'Lead Response'],
                  ['24/7', 'Prospect Engagement'],
                  ['One', 'Connected Sales Process'],
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
          2. THE PROBLEMS WE SOLVE
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
                      <Lightbulb
                        className="h-3.5 w-3.5"
                        style={{ color: colors.brand.accent }}
                      />

                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: colors.brand.primary }}
                      >
                        The Problems We Solve
                      </span>
                    </div>

                    <h2
                      className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-0.03em] sm:text-3xl"
                      style={{ color: colors.brand.primary }}
                    >
                      More Leads Alone Won&apos;t Fix a Broken Sales Process.
                    </h2>
                  </div>

                  <div>
                    <p className="text-sm leading-[1.8] text-gray-600 sm:text-base">
                      Growing revenue isn&apos;t just about generating more
                      leads. It&apos;s about making sure every opportunity is
                      handled quickly, consistently, and professionally.
                    </p>

                    <p className="mt-3 text-sm leading-[1.8] text-gray-600">
                      Unfortunately, many sales teams spend more time managing
                      the sales process than actually selling.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <StaggerContainer className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {salesProblems.map((problem) => (
                  <motion.div
                    key={problem.title}
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
                      {problem.icon}
                    </div>

                    <h3
                      className="mt-4 text-xs font-bold"
                      style={{ color: colors.brand.primary }}
                    >
                      {problem.title}
                    </h3>

                    <p className="mt-1.5 text-[10px] leading-[1.65] text-gray-500">
                      {problem.description}
                    </p>
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
        <Section spacing="base" animate background="transparent">
          <Container size="xl">
            <div className="mx-auto max-w-7xl">
              <ScrollReveal>
                <div className="grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
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
                        Introducing B2B Sales Reinvention
                      </span>
                    </div>

                    <h2
                      className="mt-3 text-2xl font-bold tracking-[-0.03em] sm:text-3xl"
                      style={{ color: colors.brand.primary }}
                    >
                      Build a Sales Process That Never Misses an Opportunity.
                    </h2>
                  </div>

                  <div>
                    <p className="text-sm leading-[1.8] text-gray-600 sm:text-base">
                      B2B Sales Reinvention transforms the way your business
                      captures, qualifies, manages, and converts sales
                      opportunities.
                    </p>

                    <p className="mt-3 text-sm leading-[1.8] text-gray-600">
                      Instead of relying on manual processes and disconnected
                      tools, the solution works alongside your sales team to
                      engage prospects instantly, gather the right information,
                      qualify opportunities, schedule meetings, maintain CRM
                      records, and ensure every lead receives the attention it
                      deserves.
                    </p>

                    <p className="mt-3 text-sm font-semibold leading-[1.8] text-gray-700">
                      Your salespeople spend less time on administration and
                      more time building relationships and closing deals.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <div
                  className="mt-7 rounded-[20px] border p-5 sm:p-6"
                  style={{
                    borderColor: `${colors.brand.secondary}18`,
                    backgroundColor: `${colors.brand.secondary}06`,
                  }}
                >
                  <p
                    className="max-w-5xl text-sm font-medium leading-[1.85] sm:text-base"
                    style={{ color: colors.brand.primary }}
                  >
                    The result is a faster, more organised sales operation that
                    helps your business convert more opportunities without
                    increasing headcount.
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
          4. HOW THE SOLUTION WORKS — DARK
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
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=86"
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
                      <Map
                        className="h-3.5 w-3.5"
                        style={{ color: colors.brand.accent }}
                      />

                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: colors.brand.accent }}
                      >
                        How the Solution Works
                      </span>
                    </div>

                    <h2 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">
                      From First Inquiry to Successful Handover.
                    </h2>
                  </div>

                  <p className="max-w-lg text-sm leading-relaxed text-white/50 lg:text-right">
                    Our solution supports your sales process from the very
                    first inquiry through qualification, conversion,
                    follow-up, re-engagement, and performance visibility.
                  </p>
                </div>
              </ScrollReveal>

              <StaggerContainer className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {solutionSteps.map((step) => (
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
                      STEP {step.number}
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
          5. AI SALES TEAM + BUSINESS OUTCOMES
          ============================================ */}

      <ModernSectionBackground
        variant="glass-blur"
        className="relative overflow-hidden"
      >
        <Section spacing="base" animate background="transparent">
          <Container size="xl">
            <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
              {/* AI Team */}

              <ScrollReveal>
                <div className="h-full rounded-[24px] border border-gray-200 bg-white/85 p-5 shadow-[0_18px_55px_rgba(0,1,49,0.06)] backdrop-blur-xl sm:p-6">
                  <div className="flex items-center gap-2">
                    <Users
                      className="h-4 w-4"
                      style={{ color: colors.brand.accent }}
                    />

                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: colors.brand.secondary }}
                    >
                      Meet the AI Team Behind Your Sales
                    </span>
                  </div>

                  <h2
                    className="mt-3 text-xl font-bold sm:text-2xl"
                    style={{ color: colors.brand.primary }}
                  >
                    Specialised Intelligence. One Connected Sales Process.
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Behind every successful sales process is a team working
                    together. Our solution combines specialised AI agents that
                    support both your customers and your salespeople.
                  </p>

                  <div className="mt-5">
                    <Accordion items={aiTeam} />
                  </div>
                </div>
              </ScrollReveal>

              {/* Outcomes */}

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
                        Measurable Business Outcomes
                      </span>
                    </div>

                    <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                      Sell Smarter. Convert More. Scale Efficiently.
                    </h2>

                    <p className="mt-2 text-sm leading-[1.75] text-white/50">
                      Everything we do is designed to improve how efficiently
                      your organisation turns opportunities into revenue.
                    </p>

                    <div className="mt-6 grid grid-cols-3 divide-x divide-white/15 overflow-hidden rounded-xl border border-white/15 bg-white/[0.05]">
                      {[
                        ['Instant', 'Engagement'],
                        ['Always', 'Follow-Up'],
                        ['Clear', 'Visibility'],
                      ].map(([value, label]) => (
                        <div
                          key={label}
                          className="px-2 py-5 text-center"
                        >
                          <p
                            className="text-lg font-bold sm:text-xl"
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

                    <div className="mt-5 border-t border-white/15 pt-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                        Business Impact
                      </p>

                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {businessOutcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex items-start gap-2 text-[10px] leading-[1.65] text-white/60"
                          >
                            <CheckCircle2
                              className="mt-0.5 h-3.5 w-3.5 shrink-0"
                              style={{ color: colors.brand.accent }}
                            />

                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          6. HOW WE WORK + WHY CHOOSE US
          ============================================ */}

      <ModernSectionBackground
        variant="mesh-gradient-light"
        className="relative overflow-hidden"
      >
        <Section spacing="base" animate background="transparent">
          <Container size="xl">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              {/* How We Work */}

              <ScrollReveal>
                <div>
                  <div className="flex items-center gap-2">
                    <Map
                      className="h-4 w-4"
                      style={{ color: colors.brand.accent }}
                    />

                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: colors.brand.secondary }}
                    >
                      How We Work
                    </span>
                  </div>

                  <h2
                    className="mt-3 text-xl font-bold sm:text-2xl"
                    style={{ color: colors.brand.primary }}
                  >
                    Transformation Starts With the Sales Process.
                  </h2>

                  <p className="mt-2 text-sm leading-[1.75] text-gray-600">
                    Technology is only one part of successful sales
                    transformation. That&apos;s why we work closely with your
                    business to redesign your sales process before implementing
                    the solution.
                  </p>

                  <div className="mt-5 space-y-3">
                    {workSteps.map((step) => (
                      <motion.div
                        key={step.number}
                        whileHover={{ x: 3 }}
                        className="group rounded-[16px] border border-gray-200 bg-white/85 p-4 shadow-[0_10px_30px_rgba(0,1,49,0.04)]"
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold"
                            style={{
                              color: colors.brand.secondary,
                              backgroundColor: `${colors.brand.secondary}0D`,
                            }}
                          >
                            {step.number}
                          </div>

                          <div>
                            <h3
                              className="text-xs font-bold"
                              style={{ color: colors.brand.primary }}
                            >
                              {step.title}
                            </h3>

                            <p className="mt-1.5 text-[10px] leading-[1.65] text-gray-500">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Why Choose Us */}

              <ScrollReveal delay={0.08}>
                <div>
                  <div className="flex items-center gap-2">
                    <Award
                      className="h-4 w-4"
                      style={{ color: colors.brand.accent }}
                    />

                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: colors.brand.secondary }}
                    >
                      Why Choose Us?
                    </span>
                  </div>

                  <h2
                    className="mt-3 text-xl font-bold sm:text-2xl"
                    style={{ color: colors.brand.primary }}
                  >
                    Technology Doesn&apos;t Close Deals. People Do.
                  </h2>

                  <p className="mt-2 text-sm leading-[1.75] text-gray-600">
                    Our role is to give your people better information, better
                    processes, and better tools so they can focus on building
                    relationships and winning business.
                  </p>

                  <div className="mt-5 rounded-[20px] border border-gray-200 bg-white/85 p-3 shadow-[0_14px_40px_rgba(0,1,49,0.05)]">
                    <Accordion items={whyChooseUs} />
                  </div>

                  <div
                    className="mt-5 rounded-[20px] border p-5"
                    style={{
                      borderColor: `${colors.brand.accent}35`,
                      backgroundColor: `${colors.brand.accent}08`,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <LineChart
                        className="h-4 w-4"
                        style={{ color: colors.brand.accent }}
                      />

                      <p
                        className="text-[9px] font-bold uppercase tracking-[0.16em]"
                        style={{ color: colors.brand.secondary }}
                      >
                        Focused on Measurable Business Outcomes
                      </p>
                    </div>

                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {businessOutcomes.map((outcome) => (
                        <div
                          key={outcome}
                          className="flex items-start gap-2 text-[10px] leading-[1.6] text-gray-600"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-3.5 w-3.5 shrink-0"
                            style={{ color: colors.brand.secondary }}
                          />

                          <span>{outcome}</span>
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
                  <Target className="h-5 w-5" />
                </div>

                <div
                  className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5"
                  style={{ color: colors.brand.accent }}
                >
                  <span className="text-[8px] font-bold uppercase tracking-[0.18em]">
                    B2B Sales Reinvention
                  </span>
                </div>

                <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Ready to Reinvent Your Sales Process?
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-[1.75] text-white/55">
                  Winning more business isn&apos;t always about generating
                  more leads. It&apos;s about making the most of every
                  opportunity you already have.
                </p>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-[1.75] text-white/55">
                  B2B Sales Reinvention helps your organisation respond faster,
                  sell smarter, and grow revenue through a more connected,
                  consistent, and efficient sales process.
                </p>

                <p className="mx-auto mt-4 max-w-2xl text-sm font-bold text-white">
                  Let&apos;s reinvent the way your business sells.
                </p>

                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <MagneticButton strength={0.25}>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold text-white shadow-xl transition-all hover:-translate-y-0.5"
                      style={{ background: gradients.primary }}
                    >
                      Book Your Discovery Call

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

export default B2BSalesReinventionPage;
