/**
 * ============================================
 * BRAND DEVELOPMENT SERVICE PAGE
 * AdvantEdge
 * ============================================
 *
 * STRUCTURE / FLOW:
 * Uses the Strategic Marketing page as the master blueprint.
 * Brand Development content is preserved and reorganized
 * into the same 7-section page system.
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
import { SERVICE_SEO } from '../../utils/seo-config';

/* ============================================
   DATA
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

const heroCapabilities = [
  {
    icon: <Target className="h-5 w-5" />,
    title: 'Strategic Foundation',
    description: 'Positioning, architecture and differentiation.',
  },
  {
    icon: <Palette className="h-5 w-5" />,
    title: 'Identity System',
    description: 'Visual, verbal and experiential consistency.',
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Market Activation',
    description: 'Translate strategy into real-world brand presence.',
  },
];

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

const deliverables = [
  {
    id: 'del-1',
    title: 'Brand Strategy Document',
    icon: (
      <FileText
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Comprehensive brand strategy including positioning, values, personality, target audience, competitive analysis, and strategic recommendations.',
  },
  {
    id: 'del-2',
    title: 'Visual Identity System',
    icon: (
      <Palette
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Complete visual identity package with logo variations, color palette, typography system, graphic elements, and usage examples.',
  },
  {
    id: 'del-3',
    title: 'Messaging Framework',
    icon: (
      <MessageSquare
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Brand messaging architecture, tone of voice guidelines, key messages, taglines, and narrative frameworks for consistent communication.',
  },
  {
    id: 'del-4',
    title: 'Brand Guidelines',
    icon: (
      <Layers
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      "Detailed brand standards manual covering visual identity, messaging, application examples, and do's and don'ts for brand consistency.",
  },
];

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

const brandExpertise = [
  {
    name: 'Brand Positioning',
    icon: <Globe className="h-4 w-4" />,
  },
  {
    name: 'Brand Architecture',
    icon: <Eye className="h-4 w-4" />,
  },
  {
    name: 'Visual Identity',
    icon: <Eye className="h-4 w-4" />,
  },
  {
    name: 'Messaging Framework',
    icon: <Globe className="h-4 w-4" />,
  },
  {
    name: 'Brand Guidelines',
    icon: <Eye className="h-4 w-4" />,
  },
  {
    name: 'Rebranding & Refresh',
    icon: <Globe className="h-4 w-4" />,
  },
];

const faqs = [
  {
    id: 'brand-faq-1',
    title: 'What does your brand development service include?',
    icon: (
      <Target
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Our brand development process can include positioning, brand architecture, audience definition, messaging, visual identity, brand guidelines, and implementation frameworks designed to create a consistent and differentiated market presence.',
  },
  {
    id: 'brand-faq-2',
    title: 'How is brand development different from logo design?',
    icon: (
      <Palette
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'A logo is only one visual component of a brand. Brand development defines the strategic foundation behind how your organization is positioned, communicated, experienced, and recognized across every customer touchpoint.',
  },
  {
    id: 'brand-faq-3',
    title: 'Can you help reposition or refresh an existing brand?',
    icon: (
      <TrendingUp
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Yes. We work with existing organizations to evaluate current brand perception, positioning, communication, and identity before developing a refreshed or repositioned brand system aligned with future business goals.',
  },
  {
    id: 'brand-faq-4',
    title: 'Do you create brand guidelines for internal teams?',
    icon: (
      <FileText
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'Yes. We develop practical brand guidelines that establish standards for visual identity, typography, colors, messaging, tone of voice, and brand application so internal and external teams can maintain consistency.',
  },
  {
    id: 'brand-faq-5',
    title: 'How does brand development support business growth?',
    icon: (
      <Award
        className="h-5 w-5"
        style={{ color: colors.brand.primary }}
      />
    ),
    content:
      'A stronger brand improves differentiation, recognition, customer trust, communication consistency, and perceived value. This creates a clearer foundation for marketing, sales, customer experience, and long-term commercial growth.',
  },
];

/* ============================================
   PAGE
   ============================================ */

export function BrandDevelopmentPage() {
  return (
    <PageBackground>
      <PageSEO
        title={SERVICE_SEO.brandDevelopment.title}
        description={SERVICE_SEO.brandDevelopment.description}
        keywords={SERVICE_SEO.brandDevelopment.keywords}
        ogImage={SERVICE_SEO.brandDevelopment.ogImage}
        path="/services/brand-development"
        serviceSchema={SERVICE_SEO.brandDevelopment.schema}
      />

      {/* ============================================
          1. HERO
          MATCHES STRATEGIC MARKETING BLUEPRINT
          ============================================ */}

      <section className="relative isolate overflow-hidden bg-[#080912]">
        {/* Background */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20"
        >
          <img
            src="https://images.unsplash.com/photo-1754663186395-cf35a5efac50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMGNyZWF0aXZlJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0NTY3MjUxfDA&ixlib=rb-4.1.0&q=80&w=1800"
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
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#080912]/95 via-[#080912]/70 to-[#080912]/35" />

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
                    <Award className="h-3.5 w-3.5" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                      Brand Development
                    </span>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.06 }}
                  className="mt-4 text-[9px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: colors.brand.accent }}
                >
                  Strategy · Identity · Experience · Activation
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="mt-3 max-w-3xl text-3xl font-bold leading-[1.07] tracking-[-0.04em] text-white sm:text-4xl lg:text-[48px]"
                >
                  Build Brands
                  <span className="mt-1 block text-white/65">
                    That Matter
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.18 }}
                  className="mt-5 max-w-2xl text-sm leading-[1.8] text-white/68 sm:text-base"
                >
                  Build emotional connections, drive long-term business value,
                  and establish market leadership through comprehensive brand
                  strategy and identity systems.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 text-sm font-bold text-white"
                >
                  Strategic brand development that creates differentiation.
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
                      Start Your Brand Journey
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </MagneticButton>
                </motion.div>

                {/* Brand architecture */}

                <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2">
                  {[
                    'Positioning',
                    'Identity',
                    'Messaging',
                    'Experience',
                    'Activation',
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
                <div className="mb-1 border-b border-white/10 pb-3">
                  <p
                    className="text-[8px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: colors.brand.accent }}
                  >
                    Integrated Brand System
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white/55">
                    From strategy to market activation
                  </p>
                </div>

                {heroCapabilities.map((service, index) => (
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

            {/* Value strip */}

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/20 bg-black/20 backdrop-blur-xl">
              <div className="grid grid-cols-3 divide-x divide-white/15">
                {[
                  ['Clarity', 'Position'],
                  ['Consistency', 'System'],
                  ['Impact', 'Growth'],
                ].map(([value, label]) => (
                  <div key={value} className="px-3 py-4 text-center">
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
          2. VALUE CREATION + BENEFITS
          MATCHES "WHY" SECTION OF MASTER
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
                      <Award
                        className="h-3.5 w-3.5"
                        style={{ color: colors.brand.accent }}
                      />

                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: colors.brand.primary }}
                      >
                        Value Creation
                      </span>
                    </div>

                    <h2
                      className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-0.03em] sm:text-3xl"
                      style={{ color: colors.brand.primary }}
                    >
                      Brand Development Benefits
                    </h2>
                  </div>

                  <p className="text-sm leading-[1.8] text-gray-600 sm:text-base">
                    The business impact of strategic brand development.
                  </p>
                </div>
              </ScrollReveal>

              <StaggerContainer className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit.title}
                    variants={staggerItemVariants}
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
          3. BRAND DEVELOPMENT SERVICES
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
                      Brand Development Services
                    </h2>
                  </div>

                  <p className="max-w-lg text-sm leading-relaxed text-gray-600 lg:text-right">
                    Comprehensive branding services from strategy to execution.
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
          4. BRAND DEVELOPMENT PROCESS — DARK
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
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=86"
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
                      <Target
                        className="h-3.5 w-3.5"
                        style={{ color: colors.brand.accent }}
                      />

                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: colors.brand.accent }}
                      >
                        Our Approach
                      </span>
                    </div>

                    <h2 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">
                      Brand Development Process
                    </h2>
                  </div>

                  <p className="max-w-lg text-sm leading-relaxed text-white/50 lg:text-right">
                    A strategic 4-phase methodology that delivers distinctive
                    brand identities.
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
          5. DELIVERABLES + VISUAL IDENTITY
          ============================================ */}

      <ModernSectionBackground
        variant="glass-blur"
        className="relative overflow-hidden"
      >
        <Section spacing="base" animate background="transparent">
          <Container size="xl">
            <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
              {/* Deliverables */}

              <ScrollReveal>
                <div className="h-full rounded-[24px] border border-gray-200 bg-white/85 p-5 shadow-[0_18px_55px_rgba(0,1,49,0.06)] backdrop-blur-xl sm:p-6">
                  <div className="flex items-center gap-2">
                    <FileText
                      className="h-4 w-4"
                      style={{ color: colors.brand.accent }}
                    />

                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: colors.brand.secondary }}
                    >
                      What You Receive
                    </span>
                  </div>

                  <h2
                    className="mt-3 text-xl font-bold sm:text-2xl"
                    style={{ color: colors.brand.primary }}
                  >
                    Brand Development Deliverables
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Comprehensive brand assets and documentation for market
                    success.
                  </p>

                  <div className="mt-5">
                    <Accordion items={deliverables} />
                  </div>
                </div>
              </ScrollReveal>

              {/* Visual Identity */}

              <ScrollReveal delay={0.08}>
                <div className="relative h-full overflow-hidden rounded-[24px] bg-[#080912] p-5 shadow-[0_24px_70px_rgba(0,1,49,0.18)] sm:p-6">
                  <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[#ffb300]/10 blur-[90px]" />

                  <div className="relative">
                    <div className="flex items-center gap-2">
                      <Palette
                        className="h-4 w-4"
                        style={{ color: colors.brand.accent }}
                      />

                      <span
                        className="text-[9px] font-bold uppercase tracking-[0.16em]"
                        style={{ color: colors.brand.accent }}
                      >
                        Brand Components
                      </span>
                    </div>

                    <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                      Visual Identity Elements
                    </h2>

                    <p className="mt-2 text-sm text-white/50">
                      Every element designed to create a cohesive and memorable
                      brand.
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {brandElements.map((item, index) => (
                        <motion.div
                          key={item.id}
                          whileHover={{ y: -3 }}
                          className="rounded-[16px] border border-white/12 bg-white/[0.055] p-4 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.075]"
                        >
                          <div className="flex items-center justify-between">
                            <div
                              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-black/20"
                              style={{ color: colors.brand.accent }}
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
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Brand Development Expertise */}
            <ScrollReveal delay={0.1}>
              <div className="mx-auto mt-6 max-w-7xl rounded-[24px] border border-gray-200 bg-white/85 p-5 shadow-[0_18px_55px_rgba(0,1,49,0.05)] backdrop-blur-xl sm:p-6">
                <div className="flex items-center gap-2">
                  <Sparkles
                    className="h-4 w-4"
                    style={{ color: colors.brand.accent }}
                  />

                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: colors.brand.secondary }}
                  >
                    Brand Development Expertise
                  </span>
                </div>

                <h3
                  className="mt-3 text-lg font-bold sm:text-xl"
                  style={{ color: colors.brand.primary }}
                >
                  What We Build for Your Brand
                </h3>

                <p className="mt-2 max-w-4xl text-sm leading-[1.75] text-gray-600">
                  We develop clear, differentiated, and scalable brand systems that
                  strengthen positioning, communication, recognition, and long-term
                  market relevance.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                  {brandExpertise.map((item) => (
                    <motion.div
                      key={item.name}
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
                        {item.icon}
                      </div>

                      <p className="mt-3 text-[10px] font-bold leading-relaxed text-gray-700">
                        {item.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
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
                    Industries We Brand
                  </h2>

                  <p className="mt-2 text-sm text-gray-600">
                    Brand development expertise across diverse market sectors.
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

              <ScrollReveal delay={0.08}>
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
                    Everything you need to know about our brand development approach,
                    positioning process, identity systems, and implementation support.
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
                  <Award className="h-5 w-5" />
                </div>

                <p
                  className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: colors.brand.accent }}
                >
                  Brand Development
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white">
                  Ready to Build Your Brand?
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-[1.75] text-white/55">
                  Let's create a distinctive brand that differentiates your
                  business and drives lasting value.
                </p>

                <div className="mt-6 flex justify-center">
                  <MagneticButton strength={0.25}>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold text-white shadow-xl transition-all hover:-translate-y-0.5"
                      style={{ background: gradients.primary }}
                    >
                      Start Your Brand Journey

                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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

export default BrandDevelopmentPage;
