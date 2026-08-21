/**
 * ============================================
 * BRAND DEVELOPMENT SERVICE PAGE
 * ============================================
 * ADVANTEDGE — REFINED ENTERPRISE VERSION
 * Compact typography
 * Premium dark/light composition
 * Reduced CTA density
 * ============================================
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';

import {
  ArrowRight,
  Award,
  CheckCircle2,
  TrendingUp,
  Users,
  Palette,
  FileText,
  Globe,
  Target,
  Zap,
  Layers,
  Eye,
  MessageSquare,
  Sparkles,
  Heart,
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
   CAPABILITIES
   ============================================ */

const keyServices = [
  {
    icon: <Target className="h-5 w-5" />,
    title: 'Brand Strategy',
    description:
      'Strategic brand architecture, positioning, and competitive differentiation frameworks.',
  },
  {
    icon: <Palette className="h-5 w-5" />,
    title: 'Visual Identity',
    description:
      'Logo design, color systems, typography, and complete visual identity development.',
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: 'Messaging & Voice',
    description:
      'Brand messaging frameworks, tone of voice, and compelling narrative development.',
  },
  {
    icon: <Eye className="h-5 w-5" />,
    title: 'Brand Experience',
    description:
      'Customer journey design and cohesive brand experiences across all touchpoints.',
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: 'Brand Guidelines',
    description:
      'Comprehensive brand standards documentation ensuring consistency and quality.',
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Brand Activation',
    description:
      'Launch strategies and campaigns that bring your brand to life in the market.',
  },
];

/* ============================================
   PROCESS
   ============================================ */

const processSteps = [
  {
    id: 'step-1',
    number: '01',
    title: 'Brand Discovery',
    description:
      'Uncover brand essence, values, and strategic positioning',
    details: [
      'Stakeholder interviews and workshops',
      'Brand audit and competitive analysis',
      'Customer perception research',
      'Core values and personality definition',
    ],
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Strategic Foundation',
    description:
      'Develop brand strategy and positioning framework',
    details: [
      'Brand architecture and hierarchy',
      'Competitive positioning strategy',
      'Value proposition development',
      'Target audience definition',
    ],
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Identity Creation',
    description:
      'Design visual and verbal brand identity systems',
    details: [
      'Logo and visual identity design',
      'Color palette and typography selection',
      'Brand messaging and voice development',
      'Tagline and narrative creation',
    ],
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Implementation',
    description:
      'Deploy brand across all touchpoints and channels',
    details: [
      'Brand guidelines documentation',
      'Asset creation and templates',
      'Internal brand training',
      'Launch campaign execution',
    ],
  },
];

/* ============================================
   BENEFITS
   ============================================ */

const benefits = [
  {
    icon: <Award className="h-5 w-5" />,
    title: 'Market Differentiation',
    description:
      'Stand out in crowded markets with unique positioning',
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: 'Customer Loyalty',
    description:
      'Build emotional connections that drive retention',
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: 'Premium Pricing',
    description:
      'Strong brands command higher prices and margins',
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Marketing Efficiency',
    description:
      'Consistent branding reduces costs and amplifies impact',
  },
];

/* ============================================
   DELIVERABLES
   ============================================ */

const deliverables = [
  {
    id: 'del-1',
    title: 'Brand Strategy Document',
    icon: <FileText className="h-5 w-5" />,
    content:
      'Comprehensive brand strategy including positioning, values, personality, target audience, competitive analysis, and strategic recommendations.',
  },
  {
    id: 'del-2',
    title: 'Visual Identity System',
    icon: <Palette className="h-5 w-5" />,
    content:
      'Complete visual identity package with logo variations, color palette, typography system, graphic elements, and usage examples.',
  },
  {
    id: 'del-3',
    title: 'Messaging Framework',
    icon: <MessageSquare className="h-5 w-5" />,
    content:
      'Brand messaging architecture, tone of voice guidelines, key messages, taglines, and narrative frameworks for consistent communication.',
  },
  {
    id: 'del-4',
    title: 'Brand Guidelines',
    icon: <Layers className="h-5 w-5" />,
    content:
      "Detailed brand standards manual covering visual identity, messaging, application examples, and do's and don'ts for brand consistency.",
  },
];

/* ============================================
   BRAND ELEMENTS
   ============================================ */

const brandElements = [
  {
    id: 'elem-1',
    title: 'Logo & Visual Mark',
    icon: <Sparkles className="h-5 w-5" />,
    content:
      'Primary logo, secondary marks, monograms, and variations for different applications ensuring versatility and recognition across all contexts.',
  },
  {
    id: 'elem-2',
    title: 'Color System',
    icon: <Palette className="h-5 w-5" />,
    content:
      'Primary and secondary color palettes, tints and shades, color psychology rationale, and application guidelines for digital and print.',
  },
  {
    id: 'elem-3',
    title: 'Typography',
    icon: <FileText className="h-5 w-5" />,
    content:
      'Font families for headlines and body copy, type hierarchy system, sizing guidelines, and recommendations for web and print applications.',
  },
  {
    id: 'elem-4',
    title: 'Graphic Elements',
    icon: <Layers className="h-5 w-5" />,
    content:
      'Patterns, textures, iconography, photography style, illustration approach, and supporting visual elements that reinforce brand identity.',
  },
];

/* ============================================
   INDUSTRIES
   ============================================ */

const industries = [
  {
    name: 'Technology Startups',
    icon: <Zap className="h-4 w-4" />,
  },
  {
    name: 'Professional Services',
    icon: <Users className="h-4 w-4" />,
  },
  {
    name: 'Healthcare',
    icon: <Heart className="h-4 w-4" />,
  },
  {
    name: 'Financial Services',
    icon: <TrendingUp className="h-4 w-4" />,
  },
  {
    name: 'Consumer Products',
    icon: <Award className="h-4 w-4" />,
  },
  {
    name: 'Hospitality',
    icon: <Globe className="h-4 w-4" />,
  },
];

/* ============================================
   FAQs
   ============================================ */

const faqs = [
  {
    id: 'faq-1',
    title: 'How long does brand development take?',
    content:
      'Comprehensive brand development typically takes 8-16 weeks depending on scope. We balance thoroughness with efficiency to deliver exceptional results on schedule.',
  },
  {
    id: 'faq-2',
    title: 'What if we already have a logo?',
    content:
      "We can work with existing brand elements through brand evolution or refresh services. We'll assess what works, what needs refinement, and ensure cohesive brand expression.",
  },
  {
    id: 'faq-3',
    title: 'Do you handle brand rollout?',
    content:
      'Yes. We provide comprehensive brand activation services including internal launch, external campaigns, and ongoing support to ensure successful brand adoption.',
  },
];

/* ============================================
   REUSABLE SECTION LABEL
   ============================================ */

function SectionLabel({
  icon,
  children,
  dark = false,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={[
        'inline-flex items-center gap-2 rounded-full border px-3.5 py-2 backdrop-blur-xl',
        dark
          ? 'border-white/15 bg-white/[0.06]'
          : 'border-gray-200 bg-white/75',
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
          dark ? 'text-white/75' : '',
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

export function BrandDevelopmentPage() {
  return (
    <PageBackground>
      {/* ============================================
          SEO
          ============================================ */}

      <PageSEO
        title={SERVICE_SEO.brandDevelopment.title}
        description={SERVICE_SEO.brandDevelopment.description}
        keywords={SERVICE_SEO.brandDevelopment.keywords}
        ogImage={SERVICE_SEO.brandDevelopment.ogImage}
        path="/services/brand-development"
        serviceSchema={SERVICE_SEO.brandDevelopment.schema}
      />

      {/* ============================================
          1. PREMIUM HERO
          ============================================ */}

      <section className="relative isolate overflow-hidden bg-[#080912]">
        {/* Background image */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-30"
        >
          <img
            src="https://images.unsplash.com/photo-1754663186395-cf35a5efac50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMGNyZWF0aXZlJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0NTY3MjUxfDA&ixlib=rb-4.1.0&q=80&w=1800"
            alt=""
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Cinematic overlays */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20"
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#060711]/98 via-[#080912]/88 to-[#080912]/46" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#080912]/95" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_22%,rgba(255,255,255,0.14),transparent_38%)]" />

          <div
            className="absolute -left-48 top-[8%] h-[500px] w-[500px] rounded-full opacity-[0.10] blur-[160px]"
            style={{
              backgroundColor: colors.brand.secondary,
            }}
          />

          <div
            className="absolute -right-44 bottom-[-140px] h-[480px] w-[480px] rounded-full opacity-[0.10] blur-[155px]"
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
          <div className="mx-auto flex min-h-[660px] max-w-7xl flex-col justify-center py-14 sm:min-h-[680px] lg:min-h-[710px] lg:py-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
              {/* ============================================
                  LEFT
                  ============================================ */}

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
                    icon={<Award className="h-3.5 w-3.5" />}
                  >
                    Brand Development
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
                  Strategy · Identity · Experience · Activation
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
                  className="mt-3 max-w-2xl text-3xl font-bold leading-[1.05] tracking-[-0.045em] text-white sm:text-4xl lg:text-[46px]"
                >
                  Build Brands
                  <span
                    className="block"
                    style={{
                      color: colors.brand.accent,
                    }}
                  >
                    That Matter
                  </span>
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
                  className="mt-5 max-w-2xl"
                >
                  <p className="text-sm font-semibold leading-[1.7] text-white/88">
                    Strategic brand development that creates differentiation.
                  </p>

                  <p className="mt-3 max-w-xl text-sm leading-[1.8] text-white/58 sm:text-[15px]">
                    Build emotional connections, drive long-term business value,
                    and establish market leadership through comprehensive brand
                    strategy and identity systems.
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
                      Start Your Brand Journey

                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </MagneticButton>
                </motion.div>

                {/* Brand architecture line */}

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
                    'Positioning',
                    'Identity',
                    'Messaging',
                    'Experience',
                    'Activation',
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
                  RIGHT — BRAND SYSTEM
                  ============================================ */}

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
                className="relative"
              >
                <div className="relative overflow-hidden rounded-[24px] border border-white/16 bg-black/25 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.30)] backdrop-blur-2xl sm:p-5">
                  {/* soft internal light */}

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
                          Integrated Brand System
                        </p>

                        <p className="mt-1 text-xs font-semibold text-white/55">
                          From strategy to market activation
                        </p>
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07]">
                        <Sparkles
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
                          icon: <Target className="h-4 w-4" />,
                          title: 'Strategic Foundation',
                          text: 'Positioning, architecture and differentiation.',
                        },
                        {
                          number: '02',
                          icon: <Palette className="h-4 w-4" />,
                          title: 'Identity System',
                          text: 'Visual, verbal and experiential consistency.',
                        },
                        {
                          number: '03',
                          icon: <Sparkles className="h-4 w-4" />,
                          title: 'Market Activation',
                          text: 'Translate strategy into real-world brand presence.',
                        },
                      ].map((item) => (
                        <div
                          key={item.number}
                          className="group relative overflow-hidden rounded-[16px] border border-white/12 bg-white/[0.055] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/12 bg-black/20"
                              style={{
                                color: colors.brand.accent,
                              }}
                            >
                              {item.icon}
                            </div>

                            <div className="min-w-0">
                              <p
                                className="text-[7px] font-bold uppercase tracking-[0.17em]"
                                style={{
                                  color: colors.brand.accent,
                                }}
                              >
                                CAPABILITY {item.number}
                              </p>

                              <h2 className="mt-1 text-xs font-bold text-white">
                                {item.title}
                              </h2>

                              <p className="mt-1.5 text-[9px] leading-[1.6] text-white/45">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* value strip */}

                    <div className="mt-4 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-4">
                      {[
                        ['Clarity', 'Position'],
                        ['Consistency', 'System'],
                        ['Impact', 'Growth'],
                      ].map(([title, label]) => (
                        <div
                          key={title}
                          className="px-2 text-center first:pl-0 last:pr-0"
                        >
                          <p className="text-[10px] font-bold text-white">
                            {title}
                          </p>

                          <p className="mt-1 text-[7px] uppercase tracking-[0.14em] text-white/35">
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
          2. CAPABILITIES
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
                <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
                  <div>
                    <SectionLabel
                      icon={<Layers className="h-3.5 w-3.5" />}
                    >
                      Our Capabilities
                    </SectionLabel>

                    <h2
                      className="mt-5 text-2xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-3xl"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      Brand Development Services
                    </h2>
                  </div>

                  <p className="max-w-2xl text-sm leading-[1.8] text-gray-600 lg:justify-self-end">
                    Comprehensive branding services from strategy to execution.
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
                    className="group relative overflow-hidden rounded-[20px] border border-gray-200/90 bg-white/88 p-5 shadow-[0_14px_42px_rgba(0,1,49,0.045)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_20px_54px_rgba(0,1,49,0.08)]"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute right-[-60px] top-[-70px] h-36 w-36 rounded-full opacity-0 blur-[55px] transition-opacity duration-500 group-hover:opacity-[0.08]"
                      style={{
                        backgroundColor: colors.brand.secondary,
                      }}
                    />

                    <div className="relative">
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
                        className="mt-4 text-sm font-bold leading-tight"
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
                    </div>
                  </motion.article>
                ))}
              </StaggerContainer>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          3. BRAND DEVELOPMENT PROCESS
          ============================================ */}

      <section className="relative isolate overflow-hidden bg-[#080912] py-14 sm:py-16">
        {/* Background */}

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
                    Our Approach
                  </SectionLabel>

                  <h2 className="mt-5 text-2xl font-bold tracking-[-0.035em] text-white sm:text-3xl">
                    Brand Development Process
                  </h2>
                </div>

                <p className="max-w-2xl text-sm leading-[1.8] text-white/50 lg:justify-self-end">
                  A strategic 4-phase methodology that delivers distinctive
                  brand identities.
                </p>
              </div>
            </ScrollReveal>

            <div className="relative mt-9">
              {/* desktop line */}

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
          4. VALUE CREATION + INDUSTRIES
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
          <Container size="xl">
            <div className="mx-auto max-w-7xl">
              <ScrollReveal>
                <div className="mx-auto max-w-3xl text-center">
                  <SectionLabel
                    icon={<Award className="h-3.5 w-3.5" />}
                  >
                    Value Creation
                  </SectionLabel>

                  <h2
                    className="mt-5 text-2xl font-bold tracking-[-0.035em] sm:text-3xl"
                    style={{
                      color: colors.brand.primary,
                    }}
                  >
                    Brand Development Benefits
                  </h2>

                  <p className="mx-auto mt-3 max-w-xl text-sm leading-[1.75] text-gray-600">
                    The business impact of strategic brand development.
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

              {/* INDUSTRIES */}

              <ScrollReveal delay={0.08}>
                <div className="mt-7 rounded-[22px] border border-gray-200 bg-white/72 p-5 shadow-[0_14px_44px_rgba(0,1,49,0.045)] backdrop-blur-xl sm:p-6">
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
                        Industries We Brand
                      </h3>
                    </div>

                    <p className="max-w-md text-[11px] leading-[1.7] text-gray-500 sm:text-right">
                      Brand development expertise across diverse market sectors.
                    </p>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
                    {industries.map((industry) => (
                      <div
                        key={industry.name}
                        className="group rounded-xl border border-gray-200/80 bg-white/80 px-3 py-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
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

                        <p className="mt-2 text-[9px] font-semibold leading-[1.5] text-gray-600">
                          {industry.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          5. DELIVERABLES + VISUAL IDENTITY
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
                      What You Receive
                    </SectionLabel>

                    <h2
                      className="mt-5 text-xl font-bold tracking-[-0.03em] sm:text-2xl"
                      style={{
                        color: colors.brand.primary,
                      }}
                    >
                      Brand Development Deliverables
                    </h2>

                    <p className="mt-2 text-xs leading-[1.7] text-gray-500">
                      Comprehensive brand assets and documentation for market
                      success.
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
                              <div className="flex items-start justify-between gap-4">
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

                  {/* BRAND ELEMENTS */}

                  <div className="rounded-[24px] border border-gray-200 bg-[#080912] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-6">
                    <SectionLabel
                      dark
                      icon={<Palette className="h-3.5 w-3.5" />}
                    >
                      Brand Components
                    </SectionLabel>

                    <h2 className="mt-5 text-xl font-bold tracking-[-0.03em] text-white sm:text-2xl">
                      Visual Identity Elements
                    </h2>

                    <p className="mt-2 text-xs leading-[1.7] text-white/44">
                      Every element designed to create a cohesive and memorable
                      brand.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {brandElements.map((item, index) => (
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
          6. BRAND TRANSFORMATION SUCCESS
          ============================================ */}

      <section className="relative isolate overflow-hidden bg-[#080912] py-14 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(0,0,170,0.18),transparent_34%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_70%,rgba(255,179,0,0.08),transparent_28%)]" />
        </div>

        <Container size="lg">
          <ScrollReveal>
            <div className="mx-auto max-w-5xl overflow-hidden rounded-[26px] border border-white/14 bg-white/[0.055] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-7">
              <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
                <div>
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/14 bg-white/[0.07]"
                    style={{
                      color: colors.brand.accent,
                    }}
                  >
                    <TrendingUp className="h-5 w-5" />
                  </div>

                  <p
                    className="mt-5 text-[9px] font-bold uppercase tracking-[0.17em]"
                    style={{
                      color: colors.brand.accent,
                    }}
                  >
                    Brand Transformation
                  </p>

                  <h2 className="mt-2 text-xl font-bold tracking-[-0.03em] text-white sm:text-2xl">
                    Brand Transformation Success
                  </h2>

                  <p className="mt-3 text-xs leading-[1.7] text-white/45">
                    Strategic rebranding that drove market leadership
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      {
                        value: '89%',
                        label: 'Brand Recognition',
                      },
                      {
                        value: '2.5x',
                        label: 'Brand Value',
                      },
                      {
                        value: '56%',
                        label: 'Customer Loyalty',
                      },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-[16px] border border-white/12 bg-black/20 p-4 text-center"
                      >
                        <p
                          className="text-xl font-bold sm:text-2xl"
                          style={{
                            color: colors.brand.accent,
                          }}
                        >
                          {stat.value}
                        </p>

                        <p className="mt-1 text-[8px] font-medium leading-[1.5] text-white/42">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-[11px] leading-[1.75] text-white/52">
                    Professional services firm achieved category leadership
                    through complete brand transformation and strategic
                    positioning.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ============================================
          7. FAQs
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
                    Brand Development FAQs
                  </h2>

                  <p className="mx-auto mt-3 max-w-xl text-sm leading-[1.75] text-gray-600">
                    Answers to common questions about our branding services.
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
                <Award className="h-5 w-5" />
              </div>

              <p
                className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: colors.brand.accent,
                }}
              >
                Brand Development
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-[-0.035em] text-white sm:text-3xl">
                Ready to Build Your Brand?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-[1.8] text-white/52">
                Let's create a distinctive brand that differentiates your
                business and drives lasting value.
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
                    Start Your Brand Journey

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

export default BrandDevelopmentPage;
