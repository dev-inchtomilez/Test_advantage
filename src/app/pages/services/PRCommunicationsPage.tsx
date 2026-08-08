/**
 * ============================================
 * PR & COMMUNICATIONS SERVICE PAGE
 * AdvantEdge
 * ============================================
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';

import {
  ArrowRight,
  Megaphone,
  CheckCircle2,
  TrendingUp,
  Users,
  BarChart3,
  Target,
  Zap,
  Newspaper,
  Tv,
  Award,
  Eye,
  Globe,
  Heart,
  MessageSquare,
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
    icon: <Newspaper className="h-5 w-5" />,
    title: 'Media Relations',
    description:
      'Strategic media outreach, press releases, and journalist relationship building.',
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: 'Thought Leadership',
    description:
      'Executive positioning, byline articles, and industry expert development.',
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: 'Crisis Communication',
    description:
      'Reputation management and crisis response planning and execution.',
  },
  {
    icon: <Tv className="h-5 w-5" />,
    title: 'Broadcast PR',
    description:
      'TV and radio media opportunities, interviews, and broadcast placements.',
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: 'Influencer Relations',
    description:
      'Strategic partnerships and campaigns with industry influencers and advocates.',
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: 'Corporate Communications',
    description:
      'Internal and external communications, announcements, and stakeholder messaging.',
  },
];

const processSteps = [
  {
    id: 'step-1',
    number: '01',
    title: 'PR Audit & Planning',
    description: 'Assess current position and develop strategy',
    details: [
      'Current coverage analysis',
      'Media landscape mapping',
      'Message development',
      'Target media identification',
    ],
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Media Outreach',
    description: 'Build relationships and secure coverage',
    details: [
      'Media list development',
      'Pitch creation',
      'Press release distribution',
      'Follow-up and relationship building',
    ],
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Content Creation',
    description: 'Develop compelling PR content',
    details: [
      'Press releases',
      'Byline articles',
      'Executive statements',
      'Media kits',
    ],
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Measurement & Reporting',
    description: 'Track coverage and demonstrate impact',
    details: [
      'Media monitoring',
      'Coverage analysis',
      'Share of voice tracking',
      'Impact reporting',
    ],
  },
];

const benefits = [
  {
    icon: <Award className="h-5 w-5" />,
    title: 'Credibility & Trust',
    description: 'Third-party validation builds market credibility',
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: 'Brand Visibility',
    description: 'Amplify reach through earned media coverage',
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: 'Reputation Management',
    description: 'Control narrative and protect brand reputation',
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Thought Leadership',
    description: 'Position executives as industry experts',
  },
];

const deliverables = [
  {
    id: 'del-1',
    title: 'PR Strategy & Plan',
    icon: (
      <Target
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Comprehensive PR strategy including messaging, target media, campaign themes, and measurement framework.',
  },
  {
    id: 'del-2',
    title: 'Media Coverage',
    icon: (
      <Newspaper
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Secured placements in target publications, broadcast appearances, and ongoing media relationship management.',
  },
  {
    id: 'del-3',
    title: 'PR Content',
    icon: (
      <FileText
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Press releases, media pitches, byline articles, executive quotes, and all PR content assets.',
  },
  {
    id: 'del-4',
    title: 'Coverage Reports',
    icon: (
      <BarChart3
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Monthly coverage analysis, share of voice metrics, sentiment tracking, and ROI measurement.',
  },
];

const prServices = [
  {
    id: 'pr-1',
    title: 'Press Release Distribution',
    icon: (
      <Newspaper
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Professional press release writing, distribution through major wire services, and targeted media outreach for maximum coverage.',
  },
  {
    id: 'pr-2',
    title: 'Executive Positioning',
    icon: (
      <Users
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Thought leadership programs, speaking opportunities, interview preparation, and executive profile building across media and events.',
  },
  {
    id: 'pr-3',
    title: 'Crisis Management',
    icon: (
      <Award
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Crisis communication planning, rapid response protocols, stakeholder communication, and reputation recovery strategies.',
  },
  {
    id: 'pr-4',
    title: 'Event PR',
    icon: (
      <Megaphone
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Event promotion, media invitations, press conferences, on-site media relations, and post-event coverage maximization.',
  },
];

const industries = [
  {
    name: 'Technology',
    icon: <Zap className="h-4 w-4" />,
  },
  {
    name: 'Healthcare',
    icon: <Heart className="h-4 w-4" />,
  },
  {
    name: 'Finance',
    icon: <BarChart3 className="h-4 w-4" />,
  },
  {
    name: 'Professional Services',
    icon: <Users className="h-4 w-4" />,
  },
  {
    name: 'Consumer Brands',
    icon: <Globe className="h-4 w-4" />,
  },
  {
    name: 'Non-Profit',
    icon: <Heart className="h-4 w-4" />,
  },
];

const faqs = [
  {
    id: 'faq-1',
    title: 'Can you guarantee media coverage?',
    icon: (
      <Newspaper
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      "While we can't guarantee specific placements, our track record and media relationships consistently deliver strong coverage for newsworthy stories.",
  },
  {
    id: 'faq-2',
    title: 'How do you measure PR success?',
    icon: (
      <BarChart3
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'We track coverage quantity and quality, reach, sentiment, share of voice, website traffic from PR, and business impact metrics.',
  },
  {
    id: 'faq-3',
    title: 'Do you handle crisis situations?',
    icon: (
      <Award
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Yes. We provide crisis communication planning and rapid response services to protect and restore reputation during challenges.',
  },
];

/* ============================================
   PAGE
   ============================================ */

export function PRCommunicationsPage() {
  return (
    <PageBackground>
      <PageSEO
        title={SERVICE_SEO.prCommunications.title}
        description={SERVICE_SEO.prCommunications.description}
        keywords={SERVICE_SEO.prCommunications.keywords}
        ogImage={SERVICE_SEO.prCommunications.ogImage}
        path="/services/pr-communications"
        serviceSchema={SERVICE_SEO.prCommunications.schema}
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
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=2400&q=90"
            alt=""
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Cinematic treatment */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#080912]/95 via-[#080912]/72 to-[#080912]/38" />

          <div className="absolute inset-0 bg-gradient-to-b from-[#080912]/35 via-transparent to-[#080912]/95" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_18%,rgba(255,255,255,0.14),transparent_38%)]" />

          {/* Brand atmosphere */}

          <div
            className="absolute -left-52 top-[15%] h-[480px] w-[480px] rounded-full opacity-[0.09] blur-[155px]"
            style={{
              backgroundColor: colors.brand.secondary,
            }}
          />

          <div
            className="absolute -right-48 bottom-[-120px] h-[450px] w-[450px] rounded-full opacity-[0.08] blur-[150px]"
            style={{
              backgroundColor: colors.brand.accent,
            }}
          />

          {/* Technical grid */}

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
              {/* Main message */}

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
                    <Megaphone className="h-3.5 w-3.5" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                      PR & Communications
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
                  Strategic Public Relations
                  <span className="mt-1 block text-white/65">
                    That Build Credibility.
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
                  Media relations, thought leadership, crisis management,
                  and reputation building that positions your brand as an
                  industry leader.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.28,
                  }}
                  className="mt-4 text-sm font-bold text-white"
                >
                  Earn trust and amplify your message through strategic PR.
                </motion.p>

                {/* Only hero CTA */}

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.32,
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
                    Build Your Reputation

                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>

                {/* PR framework */}

                <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2">
                  {[
                    'Narrative',
                    'Media',
                    'Authority',
                    'Reputation',
                    'Measurement',
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/45">
                        {item}
                      </span>

                      {index < 4 && (
                        <ArrowRight
                          className="h-3 w-3"
                          style={{
                            color: colors.brand.accent,
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Capability summary */}

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
                        style={{
                          color: colors.brand.accent,
                        }}
                      >
                        {service.icon}
                      </div>

                      <div>
                        <p
                          className="text-[8px] font-bold uppercase tracking-[0.17em]"
                          style={{
                            color: colors.brand.accent,
                          }}
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

            {/* Performance rail */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.42,
              }}
              className="mt-8 overflow-hidden rounded-2xl border border-white/20 bg-black/20 backdrop-blur-xl"
            >
              <div className="grid grid-cols-3 divide-x divide-white/15">
                {[
                  ['850+', 'Media Placements'],
                  ['125M', 'Reach'],
                  ['94%', 'Avg. Sentiment'],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="px-3 py-4 text-center"
                  >
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
          2. PR VALUE + BENEFITS
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
                <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                  <div>
                    <div
                      className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
                      style={{
                        borderColor: `${colors.brand.accent}55`,
                        backgroundColor: `${colors.brand.accent}10`,
                      }}
                    >
                      <Award
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
                        Reputation Advantage
                      </span>
                    </div>

                    <h2
                      className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-0.03em] sm:text-3xl"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      Visibility Is Valuable.
                      <span className="mt-1 block text-gray-500">
                        Credibility Is More Powerful.
                      </span>
                    </h2>
                  </div>

                  <p className="text-sm leading-[1.8] text-gray-600 sm:text-base">
                    Strategic public relations strengthens how your
                    organization is perceived by customers, journalists,
                    investors, employees, partners, and the wider market.
                    The goal is not simply more exposure — it is stronger
                    authority, trust, and reputation.
                  </p>
                </div>
              </ScrollReveal>

              {/* Benefits */}

              <StaggerContainer className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit.title}
                    variants={staggerItemVariants}
                    whileHover={{
                      y: -3,
                    }}
                    className="rounded-[18px] border border-gray-200 bg-white/85 p-4 shadow-[0_12px_35px_rgba(0,1,49,0.05)] backdrop-blur-xl"
                  >
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{
                        color: colors.brand.secondary,
                        backgroundColor:
                          `${colors.brand.secondary}0D`,
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
          3. CORE PR SERVICES
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
                    <div className="flex items-center gap-2">
                      <Layers
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
                        Our Services
                      </span>
                    </div>

                    <h2
                      className="mt-3 text-2xl font-bold tracking-[-0.03em] sm:text-3xl"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      PR & Communications Services
                    </h2>
                  </div>

                  <p className="max-w-lg text-sm leading-relaxed text-gray-600 lg:text-right">
                    Comprehensive public relations and corporate communications.
                  </p>
                </div>
              </ScrollReveal>

              <StaggerContainer className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {keyServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    variants={staggerItemVariants}
                    whileHover={{
                      y: -4,
                    }}
                    className="group relative overflow-hidden rounded-[20px] border border-gray-200 bg-white/90 p-5 shadow-[0_16px_45px_rgba(0,1,49,0.06)]"
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{
                          color: colors.brand.secondary,
                          backgroundColor:
                            `${colors.brand.secondary}0D`,
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
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      {service.title}
                    </h3>

                    <p className="mt-2 text-[11px] leading-[1.7] text-gray-600">
                      {service.description}
                    </p>

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
          4. PR PROCESS
          DARK — MATCHES PARENT SERVICES PAGE
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
          {/* Background */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#080912]"
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=86"
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-[0.17]"
            />

            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/85 via-[#080912]/78 to-[#080912]/92" />

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
                        Our Process
                      </span>
                    </div>

                    <h2 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">
                      PR Methodology
                    </h2>
                  </div>

                  <p className="max-w-lg text-sm leading-relaxed text-white/50 lg:text-right">
                    A strategic 4-step approach to media relations and PR success.
                  </p>
                </div>
              </ScrollReveal>

              <StaggerContainer className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step) => (
                  <motion.div
                    key={step.id}
                    variants={staggerItemVariants}
                    whileHover={{
                      y: -4,
                    }}
                    className="relative overflow-hidden rounded-[20px] border border-white/15 bg-black/25 p-5 backdrop-blur-xl"
                  >
                    <span
                      className="text-[9px] font-bold tracking-[0.16em]"
                      style={{
                        color: colors.brand.accent,
                      }}
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
                            style={{
                              color: colors.brand.accent,
                            }}
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
          5. DELIVERABLES + SPECIALIZED CAPABILITIES
          + RESULTS
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
              {/* Accordions */}

              <div className="grid gap-5 lg:grid-cols-2">
                {/* Deliverables */}

                <ScrollReveal>
                  <div className="h-full rounded-[22px] border border-gray-200 bg-white/85 p-5 shadow-[0_16px_50px_rgba(0,1,49,0.06)] backdrop-blur-xl sm:p-6">
                    <div className="flex items-center gap-2">
                      <FileText
                        className="h-4 w-4"
                        style={{
                          color: colors.brand.accent,
                        }}
                      />

                      <span
                        className="text-[9px] font-bold uppercase tracking-[0.16em]"
                        style={{
                          color: colors.brand.secondary,
                        }}
                      >
                        Deliverables
                      </span>
                    </div>

                    <h2
                      className="mt-3 text-xl font-bold sm:text-2xl"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      PR Deliverables
                    </h2>

                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      Comprehensive PR services and measurable results.
                    </p>

                    <div className="mt-5">
                      <Accordion items={deliverables} />
                    </div>
                  </div>
                </ScrollReveal>

                {/* Specialized PR */}

                <ScrollReveal delay={0.06}>
                  <div className="h-full rounded-[22px] border border-gray-200 bg-white/85 p-5 shadow-[0_16px_50px_rgba(0,1,49,0.06)] backdrop-blur-xl sm:p-6">
                    <div className="flex items-center gap-2">
                      <Award
                        className="h-4 w-4"
                        style={{
                          color: colors.brand.accent,
                        }}
                      />

                      <span
                        className="text-[9px] font-bold uppercase tracking-[0.16em]"
                        style={{
                          color: colors.brand.secondary,
                        }}
                      >
                        Specialized Services
                      </span>
                    </div>

                    <h2
                      className="mt-3 text-xl font-bold sm:text-2xl"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      PR Capabilities
                    </h2>

                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      Specialized PR services tailored to your needs.
                    </p>

                    <div className="mt-5">
                      <Accordion items={prServices} />
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
                          Campaign Performance
                        </span>
                      </div>

                      <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                        PR Campaign Results
                      </h2>

                      <p className="mt-2 text-[11px] leading-[1.7] text-white/50">
                        Technology startup achieved category leadership
                        through strategic PR and thought leadership campaign.
                      </p>
                    </div>

                    <div className="grid grid-cols-3 divide-x divide-white/15 overflow-hidden rounded-xl border border-white/15 bg-white/[0.05]">
                      {[
                        ['127', 'Media Placements'],
                        ['45M', 'Total Reach'],
                        ['92%', 'Positive Sentiment'],
                      ].map(([value, label]) => (
                        <div
                          key={label}
                          className="px-2 py-5 text-center"
                        >
                          <p
                            className="text-xl font-bold sm:text-2xl"
                            style={{
                              color: colors.brand.accent,
                            }}
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
        <Section
          spacing="base"
          animate
          background="transparent"
        >
          <Container size="xl">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              {/* Industries */}

              <ScrollReveal>
                <div>
                  <div className="flex items-center gap-2">
                    <Globe
                      className="h-4 w-4"
                      style={{
                        color: colors.brand.accent,
                      }}
                    />

                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.16em]"
                      style={{
                        color: colors.brand.secondary,
                      }}
                    >
                      Industry Expertise
                    </span>
                  </div>

                  <h2
                    className="mt-3 text-xl font-bold sm:text-2xl"
                    style={{
                      color: colors.brand.primary,
                    }}
                  >
                    Industries We Serve
                  </h2>

                  <p className="mt-2 text-sm text-gray-600">
                    PR expertise across diverse sectors.
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {industries.map((industry) => (
                      <motion.div
                        key={industry.name}
                        whileHover={{
                          y: -3,
                        }}
                        className="rounded-[16px] border border-gray-200 bg-white/85 p-4 shadow-[0_10px_30px_rgba(0,1,49,0.04)]"
                      >
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-lg"
                          style={{
                            color: colors.brand.secondary,
                            backgroundColor:
                              `${colors.brand.secondary}0D`,
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
                      style={{
                        color: colors.brand.accent,
                      }}
                    />

                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.16em]"
                      style={{
                        color: colors.brand.secondary,
                      }}
                    >
                      Common Questions
                    </span>
                  </div>

                  <h2
                    className="mt-3 text-xl font-bold sm:text-2xl"
                    style={{
                      color: colors.brand.primary,
                    }}
                  >
                    Frequently Asked Questions
                  </h2>

                  <p className="mt-2 text-sm text-gray-600">
                    Common questions about PR services.
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
          ONLY ONE CTA HERE
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
                  <Megaphone className="h-5 w-5" />
                </div>

                <h2 className="mt-5 text-2xl font-bold text-white">
                  Ready to Amplify Your Story?
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-[1.75] text-white/55">
                  Let's build a PR strategy that elevates your brand and
                  establishes thought leadership.
                </p>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: gradients.primary,
                    }}
                  >
                    Launch Your PR Program

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

export default PRCommunicationsPage;
