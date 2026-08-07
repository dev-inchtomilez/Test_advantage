/**
 * ============================================
 * HOME PAGE - AdvantEdge Main Landing Page
 * ============================================
 * REORGANIZED VERSION - 22 SECTIONS
 * Bold. Executive. Decisive.
 * 
 * Color System:
 * - Primary: #000131 (Deep Navy)
 * - Secondary: #0000aa (Bright Blue)
 * - Accent: #ffb300 (Yellow)
 * - Background: Light Pastel Gradient
 * ============================================
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';

// Lucide Icons
import { 
  ArrowRight, 
  Target, 
  Zap, 
  TrendingUp, 
  Eye, 
  Rocket, 
  BarChart3, 
  Users,
  Globe, 
  Megaphone,
  Layers,
  LineChart,
  MonitorSmartphone,
  Shield,
  Sparkles,
  CheckCircle2,
  Building2,
  Store,
  Hospital,
  GraduationCap,
  Briefcase,
  Factory,
  Heart,
  Lightbulb,
  Search,
  PenTool,
  RefreshCw,
  Award,
  Palette
} from 'lucide-react';

// Primitive Components
import { Section, Container, SectionHeader, GlassCard, IconBadge } from '../components/primitives';

// Layout Components
import { PageBackground } from '../components/layout';

// SEO Components
import { PageSEO } from '../components/seo';
import { PAGE_SEO } from '../utils/seo-config';

// UI Components
import { Accordion } from '../components/Accordion';
import { ScrollReveal, StaggerContainer, staggerItemVariants } from '../components/ScrollReveal';
import { TeamSection } from '../components/TeamSection';
import { TestimonialsWithImages } from '../components/TestimonialsWithImages';
import { VideoTestimonial } from '../components/VideoTestimonial';
import { TrustBadges } from '../components/TrustBadges';
import { ClientLogoCarousel } from '../components/ClientLogoCarousel';
import { NewsletterSignup } from '../components/NewsletterSignup';
import { BlogPreview } from '../components/BlogPreview';
import { ExpandableServiceCards } from '../components/ExpandableServiceCards';
import { ImageGallery } from '../components/ImageGallery';

// Enhanced UI Components
import { AnimatedCounter } from '../components/AnimatedCounter';
import { MagneticButton } from '../components/MagneticButton';
import { GlowEffect } from '../components/GlowEffect';
import { TextGradient } from '../components/TextGradient';
import { ImageFeatureCard } from '../components/ImageFeatureCard';
import { ParticleGlobe } from '../components/ParticleGlobe';

// Enhanced Home Sections with Bento Grid & Carousels
import { 
  WhyChooseUsBento, 
  TestimonialsCarousel, 
  CapabilitiesCarousel,
  StatsCarousel,
  ProcessFrameworkBento
} from '../components/EnhancedHomeSections';

// Modern Background Component
import { ModernSectionBackground } from '../components/ModernSectionBackground';

// Design Tokens
import { colors, gradients } from '../../styles/design-tokens';

// ============================================
// DATA DEFINITIONS
// ============================================

// The AdvantEdge Way Principles
const principles = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Strategy Guides Every Move',
    description: 'Business objectives define direction. Execution follows with discipline.',
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: 'Positioning Shapes Every Message',
    description: 'Consistency is engineered — not assumed.',
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'Integration Removes Friction',
    description: 'Brand, digital, content, and sales move in alignment.',
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Performance Validates Direction',
    description: 'Measurement is continuous. Refinement is systematic.',
  },
];

// Business Objectives
const objectives = [
  {
    icon: <Target className="w-7 h-7" />,
    title: 'Distinct and defensible brand positioning',
    description: 'Strategic market position that creates competitive advantage.',
  },
  {
    icon: <Megaphone className="w-7 h-7" />,
    title: 'Structured and consistent communication',
    description: 'Messaging systems engineered for clarity and impact.',
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: 'High-quality demand and pipeline growth',
    description: 'Lead generation built for conversion and revenue.',
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Sales and marketing alignment',
    description: 'Coordinated execution across all revenue functions.',
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: 'Scalable multi-channel presence',
    description: 'Integrated systems across digital and offline touchpoints.',
  },
];

// Core Capabilities
const capabilities = [
  {
    id: 'capability-1',
    icon: <MonitorSmartphone className="w-7 h-7" />,
    title: 'Digital Marketing',
    description: 'Search authority. Paid acquisition precision. Conversion engineering. Automation systems. Demand generation built for pipeline quality — not vanity metrics.',
    features: [
      'SEO & organic search authority',
      'Performance advertising (Google, Meta, LinkedIn)',
      'Conversion rate optimization',
      'Marketing automation & lead scoring',
    ],
  },
  {
    id: 'capability-2',
    icon: <Eye className="w-7 h-7" />,
    title: 'Branding & Brand Systems',
    description: 'Strategic positioning, messaging architecture, and identity governance that create clarity, differentiation, and competitive advantage.',
    features: [
      'Brand strategy & market positioning',
      'Messaging architecture & voice systems',
      'Visual identity & design governance',
      'Brand asset management',
    ],
  },
  {
    id: 'capability-3',
    icon: <Rocket className="w-7 h-7" />,
    title: 'Website Strategy & Development',
    description: 'High-performance digital infrastructure engineered for credibility, usability, and measurable conversion.',
    features: [
      'UX/UI strategy & user research',
      'Conversion-optimized development',
      'Performance engineering & technical SEO',
      'CMS implementation & governance',
    ],
  },
  {
    id: 'capability-4',
    icon: <Megaphone className="w-7 h-7" />,
    title: 'Online PR & Reputation',
    description: 'Authority-building visibility across digital ecosystems and industry media.',
    features: [
      'Digital media relations',
      'Executive thought leadership',
      'Online reputation management',
      'Strategic content distribution',
    ],
  },
  {
    id: 'capability-5',
    icon: <Building2 className="w-7 h-7" />,
    title: 'Offline Marketing',
    description: 'Strategic integration across events, exhibitions, print, and channel marketing.',
    features: [
      'Event & exhibition strategy',
      'Print design & production',
      'Collateral development',
      'Channel marketing programs',
    ],
  },
  {
    id: 'capability-6',
    icon: <Target className="w-7 h-7" />,
    title: 'Strategic Marketing',
    description: 'Comprehensive marketing strategy and planning that aligns business objectives with market opportunities and competitive positioning.',
    features: [
      'Marketing audits & opportunity analysis',
      'Competitive intelligence & market research',
      'Go-to-market strategy & planning',
      'Marketing roadmap development',
    ],
  },
  {
    id: 'capability-7',
    icon: <Layers className="w-7 h-7" />,
    title: 'Integrated Marketing',
    description: 'Unified cross-channel marketing execution where brand, digital, content, and sales activation move in coordinated alignment.',
    features: [
      'Channel integration & orchestration',
      'Campaign coordination across touchpoints',
      'Unified messaging architecture',
      'Cross-functional marketing alignment',
    ],
  },
];

// Process Steps
const processSteps = [
  {
    number: 1,
    icon: <Search className="w-7 h-7" />,
    title: 'Discover',
    description: 'Define business objectives and context.',
  },
  {
    number: 2,
    icon: <Lightbulb className="w-7 h-7" />,
    title: 'Define',
    description: 'Build strategy, positioning, and integrated roadmaps.',
  },
  {
    number: 3,
    icon: <PenTool className="w-7 h-7" />,
    title: 'Execute',
    description: 'Activate across channels with coordination and control.',
  },
  {
    number: 4,
    icon: <RefreshCw className="w-7 h-7" />,
    title: 'Optimize',
    description: 'Measure performance. Refine continuously. Improve systematically.',
  },
];

// Industries
const industries = [
  {
    icon: <Globe className="w-12 h-12" />,
    title: 'B2B Technology & SaaS',
    description: 'Enterprise software, cloud platforms, cybersecurity, AI/ML solutions, developer tools, and emerging technology companies.',
  },
  {
    icon: <Briefcase className="w-12 h-12" />,
    title: 'Professional Services',
    description: 'Management consulting, legal, accounting, financial advisory, and specialized professional services.',
  },
  {
    icon: <Hospital className="w-12 h-12" />,
    title: 'Healthcare & Life Sciences',
    description: 'Medical devices, pharmaceuticals, biotech, health systems, telemedicine, and digital health.',
  },
  {
    icon: <Store className="w-12 h-12" />,
    title: 'Retail & E-Commerce',
    description: 'Consumer brands, direct-to-consumer businesses, omnichannel retail, and marketplace platforms.',
  },
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: 'Education & EdTech',
    description: 'Higher education, K-12 schools, online learning platforms, training providers, and educational technology.',
  },
  {
    icon: <Factory className="w-12 h-12" />,
    title: 'Manufacturing & Industrial',
    description: 'Advanced manufacturing, industrial equipment, supply chain solutions, and B2B distribution.',
  },
];

// FAQ Data
const faqItems = [
  {
    id: 'faq-1',
    title: 'What makes AdvantEdge different from other marketing agencies?',
    icon: <Sparkles className="w-6 h-6" style={{ color: colors.brand.primary }} />,
    content: 'AdvantEdge operates as a strategic marketing partner—not a task executor. We bridge strategic thinking and execution, ensuring every initiative serves a business priority and delivers measurable outcomes through integrated marketing systems.',
  },
  {
    id: 'faq-2',
    title: 'How do you measure marketing success and ROI?',
    icon: <LineChart className="w-6 h-6" style={{ color: colors.brand.primary }} />,
    content: 'We track visibility, engagement quality, conversion performance, and revenue impact. Every channel has defined KPIs with transparent reporting. We measure, analyze, refine, and optimize based on data-driven insights aligned with business objectives.',
  },
  {
    id: 'faq-3',
    title: 'What industries and company sizes do you work with?',
    icon: <Building2 className="w-6 h-6" style={{ color: colors.brand.primary }} />,
    content: 'We serve B2B technology, professional services, healthcare, education, retail, and financial services across startups to enterprise organizations. Our frameworks adapt to industry-specific challenges while maintaining core marketing principles.',
  },
  {
    id: 'faq-4',
    title: 'Do you offer long-term partnerships or project-based engagements?',
    icon: <Shield className="w-6 h-6" style={{ color: colors.brand.primary }} />,
    content: 'Both. We excel at long-term strategic partnerships where we become an extension of your leadership team, and we deliver focused project-based engagements for brand launches, website development, or strategic consulting.',
  },
  {
    id: 'faq-5',
    title: 'What is your typical engagement process and timeline?',
    icon: <RefreshCw className="w-6 h-6" style={{ color: colors.brand.primary }} />,
    content: 'Our proven four-phase process begins with discovery (2-3 weeks), strategy development (2-4 weeks), execution launch (ongoing), and continuous optimization. Most clients see initial results within 60-90 days.',
  },
];

export function HomePage() {
  return (
    <PageBackground>
      <PageSEO
        title={PAGE_SEO.home.title}
        description={PAGE_SEO.home.description}
        keywords={PAGE_SEO.home.keywords}
        ogImage={PAGE_SEO.home.ogImage}
        path="/"
        showFAQ={true}
        faqKey="home"
      />
      
      {/* ============================================
          1. HERO SECTION
          ============================================ */}
      <ModernSectionBackground variant="image-overlay-office" className="relative overflow-hidden py-12 lg:py-16">
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-3"
              >
                <GlowEffect color={colors.brand.accent} intensity={20}>
                  <motion.span 
                    className="inline-flex items-center px-3 py-1.5 rounded-full shadow-lg border-2"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(12px)',
                      borderColor: colors.brand.accent 
                    }}
                    whileHover={{ scale: 1.05, borderColor: colors.brand.primary }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sparkles className="w-3.5 h-3.5 mr-2" style={{ color: colors.brand.accent }} />
                    <span className="text-xs font-bold tracking-wide" style={{ color: colors.brand.primary }}>Strategic Growth Partner</span>
                  </motion.span>
                </GlowEffect>
              </motion.div>

              <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight tracking-tight mb-3" style={{ color: colors.brand.primary }}>
                Strategic Marketing.{' '}
                <span className="relative inline-block">
                  Integrated Execution.
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-1.5 -z-0"
                    style={{ backgroundColor: colors.brand.accent, opacity: 0.3 }}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  />
                </span>
                <br />
                AI-Powered Growth.
              </h1>

              <div className="space-y-2 mb-4">
                <p className="text-sm font-semibold leading-snug" style={{ color: colors.brand.primary }}>
                  Growth is not accidental. It is engineered.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                 We build revenue-driven marketing systems that connect strategy, execution, and AI - so every effort drives measurable growth.

                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <MagneticButton strength={0.3}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    style={{ background: gradients.primary }}
                  >
                    Book a 30-Minute Revenue Strategy Call
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>

                <MagneticButton strength={0.2}>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all duration-300 hover:shadow-lg hover:bg-white/70 bg-white/50 backdrop-blur-md"
                    style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
                  >
                    Explore Services
                  </Link>
                </MagneticButton>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-300/50">
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <div className="flex items-baseline gap-0.5">
                    <AnimatedCounter end={350} duration={2} className="text-xl font-bold" style={{ color: colors.brand.primary }} />
                    <span className="text-lg font-bold" style={{ color: colors.brand.accent }}>+</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium mt-0.5">Clients</p>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <div className="flex items-baseline gap-0.5">
                    <AnimatedCounter end={94} duration={2} className="text-xl font-bold" style={{ color: colors.brand.primary }} />
                    <span className="text-lg font-bold" style={{ color: colors.brand.accent }}>%</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium mt-0.5">Satisfaction</p>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <div className="flex items-baseline gap-0.5">
                    <AnimatedCounter end={4.1} decimals={1} duration={2} className="text-xl font-bold" style={{ color: colors.brand.primary }} />
                    <span className="text-lg font-bold" style={{ color: colors.brand.accent }}>x</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium mt-0.5">ROI</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Globe */}
            <motion.div
              className="relative flex items-center justify-center w-full mt-4 lg:mt-0 overflow-hidden rounded-2xl"
              style={{ height: 'clamp(200px, 50vw, 380px)' }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="scale-[0.52] sm:scale-[0.75] lg:scale-100 origin-center">
                  <ParticleGlobe 
                    width={450}
                    height={450}
                    particleCount={1200}
                    rotationSpeed={0.0015}
                    radius={160}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </ModernSectionBackground>




      



{/* ============================================
    2. WHO WE ARE — PREMIUM INTRODUCTION
============================================ */}
<ModernSectionBackground
  variant="image-overlay-team"
  className="relative overflow-hidden"
>
  <Section
    spacing="base"
    animate
    background="transparent"
    className="who-we-are-section relative overflow-hidden"
  >
    {/* ============================================
        SELF-CONTAINED ANIMATION CSS
    ============================================ */}
    <style>
      {`
        .who-we-are-section .who-image-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transform: scale(1.07);
          animation: whoImageSlider 15s infinite;
          will-change: opacity, transform;
        }

        .who-we-are-section .who-image-slide:nth-child(1) {
          animation-delay: 0s;
        }

        .who-we-are-section .who-image-slide:nth-child(2) {
          animation-delay: 5s;
        }

        .who-we-are-section .who-image-slide:nth-child(3) {
          animation-delay: 10s;
        }

        @keyframes whoImageSlider {
          0% {
            opacity: 0;
            transform: scale(1.07);
          }

          5% {
            opacity: 1;
          }

          31% {
            opacity: 1;
          }

          38% {
            opacity: 0;
            transform: scale(1);
          }

          100% {
            opacity: 0;
            transform: scale(1);
          }
        }

        .who-we-are-section .who-slider-progress {
          transform-origin: left;
          animation: whoSliderProgress 5s linear infinite;
        }

        @keyframes whoSliderProgress {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        .who-we-are-section .who-value-card {
          transition:
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.35s ease,
            background-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .who-we-are-section .who-value-card:hover {
          transform: translateY(-4px);
        }

        .who-we-are-section .who-value-line {
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .who-we-are-section
          .who-value-card:hover
          .who-value-line {
          transform: scaleY(1);
        }

        @media (prefers-reduced-motion: reduce) {
          .who-we-are-section .who-image-slide {
            animation: none;
            transform: none;
          }

          .who-we-are-section .who-image-slide:first-child {
            opacity: 1;
          }

          .who-we-are-section .who-slider-progress {
            animation: none;
            transform: scaleX(1);
          }
        }
      `}
    </style>

    {/* ============================================
        SECTION BACKGROUND DETAILS
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute -left-44 top-16 h-[420px] w-[420px] rounded-full opacity-[0.08] blur-[130px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full opacity-[0.09] blur-[140px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,1,49,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.18) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
    </div>

    <Container size="xl">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ============================================
            TOP SECTION HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="mx-auto max-w-4xl text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm backdrop-blur-xl"
              style={{
                color: colors.brand.secondary,
                borderColor: `${colors.brand.secondary}18`,
                backgroundColor: "rgba(255,255,255,0.76)",
              }}
            >
              <Shield className="h-3.5 w-3.5" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Who We Are
              </span>
            </div>

            <h2
              className="mt-5 text-2xl font-bold leading-[1.12] tracking-[-0.035em] sm:text-3xl lg:text-[42px]"
              style={{ color: colors.brand.primary }}
            >
              Built for Organizations
              <span
                className="block"
                style={{ color: colors.brand.secondary }}
              >
                That Expect More
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-[1.8] text-gray-600 sm:text-base">
              AdvantEdge is a strategic and integrated marketing solutions
              partner combining business leadership, execution expertise, and
              AI capabilities to build customized growth systems.
            </p>
          </div>
        </ScrollReveal>

        {/* ============================================
            MAIN EDITORIAL SPLIT
        ============================================ */}
        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* ============================================
              LEFT — AUTOMATIC IMAGE STORY
          ============================================ */}
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative h-full min-h-[480px] overflow-hidden rounded-[26px] border border-white/80 bg-[#000131] shadow-[0_30px_90px_rgba(0,1,49,0.18)] sm:min-h-[540px]"
            >
              {/* Automatic image slider */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=90"
                  alt="Executive team collaborating on business strategy"
                  loading="eager"
                  decoding="async"
                  className="who-image-slide object-center"
                />

                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=90"
                  alt="Leadership team developing a strategic roadmap"
                  loading="lazy"
                  decoding="async"
                  className="who-image-slide object-center"
                />

                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=90"
                  alt="Business consultants discussing integrated growth"
                  loading="lazy"
                  decoding="async"
                  className="who-image-slide object-center"
                />
              </div>

              {/* Image overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000131]/96 via-[#000131]/40 to-[#000131]/08" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/42 via-transparent to-transparent" />

              {/* Top badge */}
              <div className="absolute left-5 top-5 z-10 sm:left-6 sm:top-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#000131]/40 px-3 py-2 text-white shadow-lg backdrop-blur-xl">
                  <Sparkles
                    className="h-3.5 w-3.5"
                    style={{ color: colors.brand.accent }}
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.16em]">
                    Strategic Growth Partner
                  </span>
                </div>
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.55 }}
                className="absolute right-5 top-5 z-10 sm:right-6 sm:top-6"
              >
                <div className="rounded-2xl border border-white/20 bg-white/[0.13] px-4 py-3 text-right shadow-xl backdrop-blur-xl">
                  <div className="flex items-center justify-end gap-2">
                    <Award
                      className="h-4 w-4"
                      style={{ color: colors.brand.accent }}
                    />

                    <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/55">
                      Experience
                    </span>
                  </div>

                  <p className="mt-1 text-2xl font-black tracking-[-0.04em] text-white">
                    15+
                    <span
                      className="ml-1 text-xs font-bold"
                      style={{ color: colors.brand.accent }}
                    >
                      Years
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* Bottom story content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.17em]"
                  style={{ color: colors.brand.accent }}
                >
                  Leadership Meets Execution
                </p>

                <h3 className="mt-3 max-w-xl text-2xl font-bold leading-[1.18] tracking-[-0.025em] text-white sm:text-3xl">
                  Strategy Should Not End With a Presentation.
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-[1.7] text-white/65">
                  We convert leadership priorities into coordinated marketing,
                  technology, content, and sales execution—supported by
                  measurement and continuous improvement.
                </p>

                {/* Slider status */}
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-1 w-24 overflow-hidden rounded-full bg-white/20">
                    <span
                      className="who-slider-progress block h-full w-full"
                      style={{ background: gradients.primary }}
                    />
                  </div>

                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/40">
                    Our People. Our Process. Our Perspective.
                  </span>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* ============================================
              RIGHT — BRAND POSITIONING
          ============================================ */}
          <ScrollReveal delay={0.08}>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex h-full flex-col rounded-[26px] border border-white/85 bg-white/72 p-5 shadow-[0_28px_85px_rgba(0,1,49,0.10)] backdrop-blur-2xl sm:p-7 lg:p-8"
            >
              {/* Main positioning */}
              <div>
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.17em]"
                  style={{ color: colors.brand.secondary }}
                >
                  The AdvantEdge Approach
                </p>

                <h3
                  className="mt-3 text-xl font-bold leading-[1.2] tracking-[-0.025em] sm:text-2xl lg:text-[30px]"
                  style={{ color: colors.brand.primary }}
                >
                  We Don&apos;t Execute Tasks.
                  <span
                    className="mt-1 block"
                    style={{ color: colors.brand.secondary }}
                  >
                    We Engineer Growth.
                  </span>
                </h3>

                <div
                  className="mt-4 h-1 w-20 rounded-full"
                  style={{ background: gradients.primary }}
                />

                <p className="mt-5 text-sm leading-[1.8] text-gray-600">
                  AdvantEdge partners with growth-focused organizations to turn
                  marketing into a coordinated and accountable business
                  function. We align strategy, execution, data, technology, and
                  commercial priorities around measurable outcomes.
                </p>
              </div>

              {/* Value cards */}
              <div className="mt-6 space-y-3">
                {[
                  {
                    number: "01",
                    icon: <Target className="h-5 w-5" />,
                    title: "Strategic Leadership",
                    text: "We work as an extension of leadership, connecting every marketing priority with the wider business strategy.",
                  },
                  {
                    number: "02",
                    icon: <Layers className="h-5 w-5" />,
                    title: "Integrated Growth Systems",
                    text: "Brand, digital, content, technology, automation, and sales activation operate as one connected system.",
                  },
                  {
                    number: "03",
                    icon: <BarChart3 className="h-5 w-5" />,
                    title: "Performance Accountability",
                    text: "Every initiative is measured, analyzed, and optimized around commercial impact, pipeline, conversion, and ROI.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.18 + index * 0.09,
                      duration: 0.45,
                    }}
                    className="who-value-card group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white/70 p-4 shadow-[0_12px_35px_rgba(0,1,49,0.045)] hover:border-white hover:bg-white hover:shadow-[0_20px_55px_rgba(0,1,49,0.10)]"
                  >
                    <div
                      aria-hidden="true"
                      className="who-value-line absolute bottom-0 left-0 top-0 w-1"
                      style={{ background: gradients.primary }}
                    />

                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                        style={{
                          color: colors.brand.secondary,
                          backgroundColor: `${colors.brand.secondary}0D`,
                        }}
                      >
                        {item.icon}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <h4
                            className="text-sm font-bold sm:text-base"
                            style={{ color: colors.brand.primary }}
                          >
                            {item.title}
                          </h4>

                          <span className="text-[9px] font-bold tracking-[0.14em] text-gray-300">
                            {item.number}
                          </span>
                        </div>

                        <p className="mt-1.5 text-xs leading-[1.7] text-gray-600 sm:text-[13px]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto pt-6">
                <div className="flex flex-col gap-4 border-t border-gray-200/80 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p
                      className="text-xs font-bold"
                      style={{ color: colors.brand.primary }}
                    >
                      Built around your business.
                    </p>

                    <p className="mt-1 text-[11px] text-gray-500">
                      Not a fixed package. Not a generic agency model.
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Link
                      to="/about"
                      className="group inline-flex items-center gap-2 text-sm font-bold"
                      style={{ color: colors.brand.secondary }}
                    >
                      Discover Our Story

                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* ============================================
            BUSINESS POSITIONING STRIP
        ============================================ */}
        <ScrollReveal delay={0.16}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/85 bg-white/72 shadow-[0_20px_65px_rgba(0,1,49,0.08)] backdrop-blur-2xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Business-Led",
                  text: "Marketing aligned with commercial priorities",
                },
                {
                  number: "02",
                  title: "Integrated",
                  text: "Strategy and execution under one system",
                },
                {
                  number: "03",
                  title: "AI-Enabled",
                  text: "Technology improving speed and precision",
                },
                {
                  number: "04",
                  title: "Outcome-Focused",
                  text: "Performance measured through business impact",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.92)",
                  }}
                  transition={{ duration: 0.3 }}
                  className={[
                    "px-5 py-5 text-center",
                    index === 0
                      ? "border-b border-gray-200/80 sm:border-r lg:border-b-0"
                      : "",
                    index === 1
                      ? "border-b border-gray-200/80 lg:border-r lg:border-b-0"
                      : "",
                    index === 2
                      ? "border-b border-gray-200/80 sm:border-r sm:border-b-0 lg:border-r"
                      : "",
                  ].join(" ")}
                >
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: colors.brand.secondary }}
                  >
                    {item.number}
                  </p>

                  <p
                    className="mt-1.5 text-sm font-bold"
                    style={{ color: colors.brand.primary }}
                  >
                    {item.title}
                  </p>

                  <p className="mt-1 text-[11px] leading-relaxed text-gray-500">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>











{/* ============================================
    3. WHY YOU NEED US / BUSINESS CHALLENGES
============================================ */}
<ModernSectionBackground variant="gradient-tech">
  <Section
    spacing="base"
    animate
    background="transparent"
    className="relative overflow-hidden"
  >
    {/* ============================================
        INFOGRAPHIC BACKGROUND SYSTEM
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Technical grid */}
      <div
        className="absolute inset-0 opacity-55"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 170, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 170, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "46px 46px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
        }}
      />

      {/* Ambient glows */}
      <div
        className="absolute -left-44 top-12 h-[420px] w-[420px] rounded-full opacity-[0.06] blur-[120px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="absolute -right-44 bottom-0 h-[420px] w-[420px] rounded-full opacity-[0.08] blur-[120px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      <div
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.035] blur-[130px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />
    </div>

    <Container size="xl">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <SectionHeader
          badge="Why You Need Us"
          badgeIcon={<Target className="h-4 w-4" />}
          title={`Most Marketing Doesn't Fail
Because of Ideas.`}
          description="It fails because strategy, channels, technology, data, and sales operate as separate parts. More activity does not create growth when the system itself is disconnected."
          align="center"
          maxWidth="4xl"
        />

        {(() => {
          const challenges = [
            {
              number: "01",
              icon: Target,
              title: "Unclear Strategic Direction",
              text: "No clear positioning, growth strategy, or unified roadmap guiding marketing decisions.",
            },
            {
              number: "02",
              icon: Layers,
              title: "Disconnected Marketing Channels",
              text: "Campaigns, content, digital platforms, and offline activities operate independently.",
            },
            {
              number: "03",
              icon: TrendingUp,
              title: "Low-Quality Demand",
              text: "Traffic and enquiries increase, but conversion quality and commercial impact remain weak.",
            },
            {
              number: "04",
              icon: Users,
              title: "Sales and Marketing Misalignment",
              text: "Sales teams spend valuable time pursuing leads that are not ready or properly qualified.",
            },
            {
              number: "05",
              icon: BarChart3,
              title: "Technology Without Intelligence",
              text: "CRM and marketing tools collect information but fail to convert data into meaningful action.",
            },
            {
              number: "06",
              icon: RefreshCw,
              title: "No Repeatable Growth System",
              text: "Performance depends on isolated campaigns instead of a measurable and scalable process.",
            },
          ];

          const leftChallenges = challenges.slice(0, 3);
          const rightChallenges = challenges.slice(3);

          return (
            <>
              {/* ============================================
                  SYSTEM DIAGNOSIS INTRODUCTION
              ============================================ */}
              <ScrollReveal>
                <div className="mt-10 flex flex-col gap-4 border-y border-gray-200/80 py-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: colors.brand.secondary }}
                    >
                      Growth System Diagnosis
                    </p>

                    <h3
                      className="mt-1.5 text-lg font-bold tracking-[-0.02em] sm:text-xl"
                      style={{ color: colors.brand.primary }}
                    >
                      Six visible symptoms. One underlying problem.
                    </h3>
                  </div>

                  <div className="flex w-fit items-center gap-3 rounded-full border border-white/90 bg-white/65 px-4 py-2.5 shadow-[0_8px_26px_rgba(0,1,49,0.055)] backdrop-blur-xl">
                    <span
                      className="h-2 w-2 animate-pulse rounded-full"
                      style={{ backgroundColor: colors.brand.accent }}
                    />

                    <p
                      className="text-xs font-bold"
                      style={{ color: colors.brand.primary }}
                    >
                      Activity without integration is not a growth system.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* ============================================
                  MAIN DIAGNOSTIC INFOGRAPHIC
              ============================================ */}
              <div className="relative mt-8 grid gap-5 lg:grid-cols-[1fr_310px_1fr] lg:items-center lg:gap-9">
                {/* ============================================
                    LEFT CHALLENGE NODES
                ============================================ */}
                <div className="order-2 space-y-4 lg:order-1">
                  {leftChallenges.map((item, index) => {
                    const ItemIcon = item.icon;

                    return (
                      <ScrollReveal
                        key={item.number}
                        delay={index * 0.08}
                      >
                        <motion.div
                          whileHover={{ y: -4 }}
                          transition={{
                            duration: 0.28,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="group relative"
                        >
                          {/* Desktop connector */}
                          <div className="pointer-events-none absolute left-full top-1/2 hidden w-9 -translate-y-1/2 items-center lg:flex">
                            <div
                              className="h-px flex-1 opacity-25 transition-opacity duration-300 group-hover:opacity-70"
                              style={{ backgroundColor: colors.brand.secondary }}
                            />

                            <div
                              className="h-2 w-2 rounded-full opacity-35 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100"
                              style={{
                                backgroundColor: colors.brand.secondary,
                              }}
                            />
                          </div>

                          <div className="relative min-h-[130px] overflow-hidden rounded-2xl border border-white/85 bg-white/68 p-4 shadow-[0_13px_38px_rgba(0,1,49,0.065)] backdrop-blur-xl transition-all duration-300 group-hover:border-white group-hover:bg-white/90 group-hover:shadow-[0_20px_55px_rgba(0,1,49,0.12)] sm:p-5">
                            {/* Hover edge */}
                            <div
                              className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 rounded-r-full transition-transform duration-300 group-hover:scale-y-100"
                              style={{ background: gradients.primary }}
                            />

                            {/* Large background number */}
                            <span
                              className="pointer-events-none absolute -right-2 -top-5 text-[74px] font-bold leading-none tracking-[-0.08em] opacity-[0.035]"
                              style={{ color: colors.brand.primary }}
                            >
                              {item.number}
                            </span>

                            <div className="relative z-10 flex items-start gap-4">
                              <div className="relative shrink-0">
                                <div
                                  className="flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-105"
                                  style={{
                                    color: colors.brand.secondary,
                                    borderColor: `${colors.brand.secondary}12`,
                                    backgroundColor: `${colors.brand.secondary}0B`,
                                  }}
                                >
                                  <ItemIcon className="h-5 w-5" />
                                </div>

                                <span
                                  className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white text-[8px] font-bold text-white"
                                  style={{
                                    backgroundColor: colors.brand.primary,
                                  }}
                                >
                                  {item.number}
                                </span>
                              </div>

                              <div className="min-w-0">
                                <h4
                                  className="text-sm font-bold leading-snug sm:text-[15px]"
                                  style={{ color: colors.brand.primary }}
                                >
                                  {item.title}
                                </h4>

                                <p className="mt-1.5 text-xs leading-[1.7] text-gray-600 sm:text-[13px]">
                                  {item.text}
                                </p>

                                <div className="mt-3 flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                  <span
                                    className="h-px w-5"
                                    style={{
                                      backgroundColor: colors.brand.accent,
                                    }}
                                  />

                                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-gray-400">
                                    System Friction
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </ScrollReveal>
                    );
                  })}
                </div>

                {/* ============================================
                    CENTRAL ROOT-CAUSE ENGINE
                ============================================ */}
                <ScrollReveal delay={0.12}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="order-1 lg:order-2"
                  >
                    <div className="relative overflow-hidden rounded-[28px] bg-[#000131] px-5 py-7 shadow-[0_28px_85px_rgba(0,1,49,0.25)] sm:px-6 lg:min-h-[500px] lg:px-6 lg:py-8">
                      {/* Top accent */}
                      <div
                        className="absolute left-0 top-0 h-1 w-full"
                        style={{ background: gradients.primary }}
                      />

                      {/* Decorative glow */}
                      <div
                        aria-hidden="true"
                        className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-25 blur-[90px]"
                        style={{ backgroundColor: colors.brand.secondary }}
                      />

                      <div
                        aria-hidden="true"
                        className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full opacity-15 blur-[90px]"
                        style={{ backgroundColor: colors.brand.accent }}
                      />

                      {/* Concentric system rings */}
                      <div
                        aria-hidden="true"
                        className="absolute left-1/2 top-[39%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]"
                      />

                      <div
                        aria-hidden="true"
                        className="absolute left-1/2 top-[39%] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]"
                      />

                      <div
                        aria-hidden="true"
                        className="absolute left-1/2 top-[39%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.09]"
                      />

                      <div className="relative z-10 flex h-full flex-col text-center">
                        <p
                          className="text-[9px] font-bold uppercase tracking-[0.2em]"
                          style={{ color: colors.brand.accent }}
                        >
                          The Root Cause
                        </p>

                        {/* Core icon */}
                        <div className="relative mx-auto mt-6 flex h-24 w-24 items-center justify-center">
                          <motion.div
                            animate={{
                              scale: [1, 1.08, 1],
                              opacity: [0.35, 0.12, 0.35],
                            }}
                            transition={{
                              duration: 3.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute inset-0 rounded-full"
                            style={{
                              backgroundColor: colors.brand.secondary,
                            }}
                          />

                          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl">
                            <Layers className="h-7 w-7 text-white" />
                          </div>
                        </div>

                        <h3 className="mx-auto mt-6 max-w-[240px] text-xl font-bold leading-[1.15] tracking-[-0.025em] text-white sm:text-2xl">
                          Your Growth Engine Is Fragmented
                        </h3>

                        <p className="mx-auto mt-3 max-w-[250px] text-xs leading-[1.7] text-white/60">
                          Strategy, execution, sales, technology, and data are
                          operating as separate systems.
                        </p>

                        {/* System status grid */}
                        <div className="mt-7 grid grid-cols-2 gap-2">
                          {[
                            "Strategy",
                            "Execution",
                            "Technology",
                            "Sales",
                          ].map((item) => (
                            <div
                              key={item}
                              className="rounded-xl border border-white/10 bg-white/[0.055] px-3 py-3 text-left backdrop-blur-md"
                            >
                              <div className="flex items-center gap-2">
                                <span
                                  className="h-1.5 w-1.5 rounded-full"
                                  style={{
                                    backgroundColor: colors.brand.accent,
                                  }}
                                />

                                <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/45">
                                  {item}
                                </span>
                              </div>

                              <p className="mt-1.5 text-[11px] font-semibold text-white/80">
                                Disconnected
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 border-t border-white/10 pt-5">
                          <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/35">
                            The Result
                          </p>

                          <p
                            className="mt-1.5 text-sm font-bold"
                            style={{ color: colors.brand.accent }}
                          >
                            More activity. Less predictable growth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>

                {/* ============================================
                    RIGHT CHALLENGE NODES
                ============================================ */}
                <div className="order-3 space-y-4">
                  {rightChallenges.map((item, index) => {
                    const ItemIcon = item.icon;

                    return (
                      <ScrollReveal
                        key={item.number}
                        delay={0.12 + index * 0.08}
                      >
                        <motion.div
                          whileHover={{ y: -4 }}
                          transition={{
                            duration: 0.28,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="group relative"
                        >
                          {/* Desktop connector */}
                          <div className="pointer-events-none absolute right-full top-1/2 hidden w-9 -translate-y-1/2 items-center lg:flex">
                            <div
                              className="h-2 w-2 rounded-full opacity-35 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100"
                              style={{
                                backgroundColor: colors.brand.secondary,
                              }}
                            />

                            <div
                              className="h-px flex-1 opacity-25 transition-opacity duration-300 group-hover:opacity-70"
                              style={{ backgroundColor: colors.brand.secondary }}
                            />
                          </div>

                          <div className="relative min-h-[130px] overflow-hidden rounded-2xl border border-white/85 bg-white/68 p-4 shadow-[0_13px_38px_rgba(0,1,49,0.065)] backdrop-blur-xl transition-all duration-300 group-hover:border-white group-hover:bg-white/90 group-hover:shadow-[0_20px_55px_rgba(0,1,49,0.12)] sm:p-5">
                            {/* Hover edge */}
                            <div
                              className="absolute inset-y-0 right-0 w-1 origin-bottom scale-y-0 rounded-l-full transition-transform duration-300 group-hover:scale-y-100"
                              style={{ background: gradients.primary }}
                            />

                            <span
                              className="pointer-events-none absolute -left-2 -top-5 text-[74px] font-bold leading-none tracking-[-0.08em] opacity-[0.035]"
                              style={{ color: colors.brand.primary }}
                            >
                              {item.number}
                            </span>

                            <div className="relative z-10 flex items-start gap-4">
                              <div className="relative shrink-0">
                                <div
                                  className="flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-105"
                                  style={{
                                    color: colors.brand.secondary,
                                    borderColor: `${colors.brand.secondary}12`,
                                    backgroundColor: `${colors.brand.secondary}0B`,
                                  }}
                                >
                                  <ItemIcon className="h-5 w-5" />
                                </div>

                                <span
                                  className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white text-[8px] font-bold text-white"
                                  style={{
                                    backgroundColor: colors.brand.primary,
                                  }}
                                >
                                  {item.number}
                                </span>
                              </div>

                              <div className="min-w-0">
                                <h4
                                  className="text-sm font-bold leading-snug sm:text-[15px]"
                                  style={{ color: colors.brand.primary }}
                                >
                                  {item.title}
                                </h4>

                                <p className="mt-1.5 text-xs leading-[1.7] text-gray-600 sm:text-[13px]">
                                  {item.text}
                                </p>

                                <div className="mt-3 flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                  <span
                                    className="h-px w-5"
                                    style={{
                                      backgroundColor: colors.brand.accent,
                                    }}
                                  />

                                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-gray-400">
                                    System Friction
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </ScrollReveal>
                    );
                  })}
                </div>
              </div>

              {/* ============================================
                  BUSINESS IMPACT INFOGRAPHIC
              ============================================ */}
              <ScrollReveal delay={0.2}>
                <div className="mt-8 overflow-hidden rounded-2xl border border-white/85 bg-white/62 shadow-[0_16px_48px_rgba(0,1,49,0.07)] backdrop-blur-xl">
                  <div className="grid lg:grid-cols-[230px_1fr]">
                    <div
                      className="flex items-center gap-3 px-5 py-5 lg:border-r lg:border-white/10 lg:px-6"
                      style={{ background: gradients.primary }}
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/50">
                          Business Impact
                        </p>

                        <p className="mt-1 text-sm font-bold text-white">
                          What fragmentation creates
                        </p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 sm:divide-x sm:divide-gray-200/80">
                      {[
                        {
                          number: "01",
                          title: "Higher Cost of Growth",
                          text: "Budget is distributed across activities that do not reinforce one another.",
                        },
                        {
                          number: "02",
                          title: "Slower Sales Velocity",
                          text: "Poor qualification and fragmented journeys delay customer decisions.",
                        },
                        {
                          number: "03",
                          title: "Unpredictable Revenue",
                          text: "Performance depends on campaigns instead of a repeatable operating system.",
                        },
                      ].map((item) => (
                        <div
                          key={item.number}
                          className="group px-5 py-5 transition-colors duration-300 hover:bg-white/55"
                        >
                          <div className="flex items-start gap-3">
                            <span
                              className="mt-0.5 text-[10px] font-bold"
                              style={{ color: colors.brand.secondary }}
                            >
                              {item.number}
                            </span>

                            <div>
                              <h4
                                className="text-sm font-bold"
                                style={{ color: colors.brand.primary }}
                              >
                                {item.title}
                              </h4>

                              <p className="mt-1 text-xs leading-[1.65] text-gray-500">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* ============================================
                  CLOSING SOLUTION STRIP
              ============================================ */}
              <ScrollReveal delay={0.26}>
                <div className="mt-5 flex flex-col gap-5 rounded-2xl border border-white/85 bg-white/65 px-5 py-5 shadow-[0_14px_42px_rgba(0,1,49,0.06)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        color: colors.brand.secondary,
                        backgroundColor: `${colors.brand.secondary}0D`,
                      }}
                    >
                      <RefreshCw className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">
                        The Real Requirement
                      </p>

                      <h3
                        className="mt-1 text-base font-bold sm:text-lg"
                        style={{ color: colors.brand.primary }}
                      >
                        You do not need more disconnected marketing activity.
                      </h3>

                      <p
                        className="mt-1 text-sm font-bold"
                        style={{ color: colors.brand.secondary }}
                      >
                        You need one coordinated growth system.
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-[0_12px_32px_rgba(0,0,170,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_17px_42px_rgba(0,0,170,0.34)]"
                    style={{ background: gradients.primary }}
                  >
                    Diagnose Your Growth System

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>
            </>
          );
        })()}
      </div>
    </Container>
  </Section>
</ModernSectionBackground>






{/* ============================================
    4. THREE DISCIPLINES. ONE REVENUE ENGINE.
============================================ */}
<ModernSectionBackground variant="glass-blur">
  <Section
    spacing="base"
    animate
    background="transparent"
    className="relative overflow-hidden"
  >
    {/* ============================================
        SUBTLE SECTION IMAGE BACKGROUND
    ============================================ */}
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80"
        alt=""
        loading="lazy"
        className="h-full w-full object-cover opacity-[0.055]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white/95" />

      <div
        className="absolute -left-40 top-16 h-80 w-80 rounded-full opacity-[0.05] blur-[100px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="absolute -right-40 bottom-0 h-80 w-80 rounded-full opacity-[0.07] blur-[100px]"
        style={{ backgroundColor: colors.brand.accent }}
      />
    </div>

    <Container size="xl">
      <div className="visual-discipline-tabs relative z-10 mx-auto max-w-7xl">
        {/* ============================================
            SELF-CONTAINED TAB STYLES
        ============================================ */}
        <style>
          {`
            .visual-discipline-tabs .visual-discipline-panel {
              display: none;
            }

            .visual-discipline-tabs:has(
                #visual-discipline-strategy:checked
              )
              .visual-strategy-panel,
            .visual-discipline-tabs:has(
                #visual-discipline-integrated:checked
              )
              .visual-integrated-panel,
            .visual-discipline-tabs:has(
                #visual-discipline-ai:checked
              )
              .visual-ai-panel {
              display: grid;
            }

            .visual-discipline-tabs .visual-tab-label {
              position: relative;
              color: rgba(0, 1, 49, 0.42);
              transition: color 0.28s ease;
            }

            .visual-discipline-tabs .visual-tab-label:hover {
              color: ${colors.brand.primary};
            }

            .visual-discipline-tabs .visual-tab-label::after {
              content: "";
              position: absolute;
              right: 0;
              bottom: -1px;
              left: 0;
              height: 3px;
              border-radius: 999px 999px 0 0;
              background: ${gradients.primary};
              opacity: 0;
              transform: scaleX(0);
              transform-origin: center;
              transition:
                opacity 0.28s ease,
                transform 0.34s cubic-bezier(0.22, 1, 0.36, 1);
            }

            .visual-discipline-tabs:has(
                #visual-discipline-strategy:checked
              )
              label[for="visual-discipline-strategy"],
            .visual-discipline-tabs:has(
                #visual-discipline-integrated:checked
              )
              label[for="visual-discipline-integrated"],
            .visual-discipline-tabs:has(
                #visual-discipline-ai:checked
              )
              label[for="visual-discipline-ai"] {
              color: ${colors.brand.primary};
            }

            .visual-discipline-tabs:has(
                #visual-discipline-strategy:checked
              )
              label[for="visual-discipline-strategy"]::after,
            .visual-discipline-tabs:has(
                #visual-discipline-integrated:checked
              )
              label[for="visual-discipline-integrated"]::after,
            .visual-discipline-tabs:has(
                #visual-discipline-ai:checked
              )
              label[for="visual-discipline-ai"]::after {
              opacity: 1;
              transform: scaleX(1);
            }

            .visual-discipline-tabs:has(
                #visual-discipline-strategy:checked
              )
              label[for="visual-discipline-strategy"]
              .visual-tab-number,
            .visual-discipline-tabs:has(
                #visual-discipline-integrated:checked
              )
              label[for="visual-discipline-integrated"]
              .visual-tab-number,
            .visual-discipline-tabs:has(
                #visual-discipline-ai:checked
              )
              label[for="visual-discipline-ai"]
              .visual-tab-number {
              color: ${colors.brand.secondary};
              opacity: 1;
            }

            .visual-discipline-tabs .visual-discipline-panel {
              animation: visualDisciplineReveal 0.45s
                cubic-bezier(0.22, 1, 0.36, 1);
            }

            @keyframes visualDisciplineReveal {
              from {
                opacity: 0;
                transform: translateY(12px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @media (max-width: 639px) {
              .visual-discipline-tabs .visual-tab-navigation {
                scrollbar-width: none;
              }

              .visual-discipline-tabs
                .visual-tab-navigation::-webkit-scrollbar {
                display: none;
              }
            }
          `}
        </style>

        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <SectionHeader
          badge="Three Disciplines. One Revenue Engine."
          badgeIcon={<Sparkles className="h-4 w-4" />}
          title="Strategy, Execution and Intelligence—Working as One"
          description="Three connected disciplines combine to create a focused marketing system designed for stronger demand, better conversion, and measurable revenue growth."
          align="center"
          maxWidth="4xl"
        />

        {/* ============================================
            HIDDEN TAB CONTROLS
        ============================================ */}
        <input
          id="visual-discipline-strategy"
          type="radio"
          name="visual-discipline-tabs"
          defaultChecked
          className="sr-only"
        />

        <input
          id="visual-discipline-integrated"
          type="radio"
          name="visual-discipline-tabs"
          className="sr-only"
        />

        <input
          id="visual-discipline-ai"
          type="radio"
          name="visual-discipline-tabs"
          className="sr-only"
        />

        {/* ============================================
            SIMPLE TEXT TAB NAVIGATION
        ============================================ */}
        <ScrollReveal>
          <div className="mx-auto mt-8 max-w-5xl">
            <div
              role="tablist"
              aria-label="AdvantEdge core disciplines"
              className="visual-tab-navigation flex items-end gap-8 overflow-x-auto border-b border-gray-200/80 px-1 sm:justify-center sm:gap-12 lg:gap-16"
            >
              <label
                htmlFor="visual-discipline-strategy"
                className="visual-tab-label flex shrink-0 cursor-pointer items-baseline gap-2 pb-4"
              >
                <span className="visual-tab-number text-[10px] font-bold tracking-[0.16em] opacity-40 transition-all duration-300">
                  01
                </span>

                <span className="whitespace-nowrap text-sm font-bold tracking-[-0.015em] sm:text-base">
                  Strategic Marketing
                </span>
              </label>

              <label
                htmlFor="visual-discipline-integrated"
                className="visual-tab-label flex shrink-0 cursor-pointer items-baseline gap-2 pb-4"
              >
                <span className="visual-tab-number text-[10px] font-bold tracking-[0.16em] opacity-40 transition-all duration-300">
                  02
                </span>

                <span className="whitespace-nowrap text-sm font-bold tracking-[-0.015em] sm:text-base">
                  Integrated Marketing
                </span>
              </label>

              <label
                htmlFor="visual-discipline-ai"
                className="visual-tab-label flex shrink-0 cursor-pointer items-baseline gap-2 pb-4"
              >
                <span className="visual-tab-number text-[10px] font-bold tracking-[0.16em] opacity-40 transition-all duration-300">
                  03
                </span>

                <span className="whitespace-nowrap text-sm font-bold tracking-[-0.015em] sm:text-base">
                  AI Solutions
                </span>
              </label>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            MAIN TAB CONTAINER
        ============================================ */}
        <ScrollReveal delay={0.08}>
          <div className="relative mt-6 overflow-hidden rounded-[24px] border border-white/90 bg-white/75 shadow-[0_24px_70px_rgba(0,1,49,0.10)] backdrop-blur-xl">
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 z-30 h-1 w-full"
              style={{ background: gradients.primary }}
            />

            {/* ============================================
                TAB 1 — STRATEGIC MARKETING
            ============================================ */}
            <div className="visual-discipline-panel visual-strategy-panel lg:grid-cols-[0.86fr_1.14fr]">
              {/* Image-backed overview */}
              <div className="relative min-h-[370px] overflow-hidden lg:min-h-[440px]">
                <motion.img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85"
                  alt="Business leadership team developing a growth strategy"
                  loading="lazy"
                  decoding="async"
                  initial={{ scale: 1.06 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#000131] via-[#000131]/80 to-[#000131]/20" />

                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-25 blur-3xl"
                  style={{ backgroundColor: colors.brand.accent }}
                />

                <div className="relative z-10 flex h-full min-h-[370px] flex-col justify-between p-5 sm:p-7 lg:min-h-[440px] lg:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                      <Target className="h-5 w-5 text-white" />
                    </div>

                    <span className="text-4xl font-bold tracking-[-0.06em] text-white/15">
                      01
                    </span>
                  </div>

                  <div className="mt-16">
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: colors.brand.accent }}
                    >
                      Define the Direction
                    </p>

                    <h3 className="mt-2 max-w-lg text-2xl font-bold leading-[1.16] tracking-[-0.025em] text-white">
                      Build a Clear, Market-Backed Growth Strategy
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-[1.75] text-white/72">
                      We translate business priorities, customer expectations,
                      and competitive realities into a focused strategy
                      designed to support measurable commercial growth.
                    </p>

                    <div className="mt-6 flex items-start gap-3 border-t border-white/15 pt-5">
                      <TrendingUp
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: colors.brand.accent }}
                      />

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/45">
                          Primary Outcome
                        </p>

                        <p className="mt-1 text-sm font-semibold text-white">
                          Market-Backed Growth Strategy
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Capabilities */}
              <div className="relative flex flex-col justify-center p-5 sm:p-7 lg:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full opacity-[0.045] blur-3xl"
                  style={{ backgroundColor: colors.brand.secondary }}
                />

                <div className="relative z-10">
                  <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                        Core Capabilities
                      </p>

                      <h4
                        className="mt-1 text-lg font-bold tracking-[-0.015em] sm:text-xl"
                        style={{ color: colors.brand.primary }}
                      >
                        What Strategic Marketing Includes
                      </h4>
                    </div>

                    <span
                      className="w-fit text-[10px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: colors.brand.secondary }}
                    >
                      Revenue-Aligned
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 sm:gap-x-7">
                    {[
                      "Market positioning and competitive analysis",
                      "Value proposition and differentiation strategy",
                      "Go-to-market planning across products and segments",
                      "Portfolio and pricing strategy",
                      "Demand generation and funnel architecture",
                      "KPIs aligned with pipeline and revenue",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.035,
                          duration: 0.28,
                        }}
                        className="group flex min-h-[59px] items-start gap-3 border-b border-gray-200/75 py-3"
                      >
                        <div
                          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105"
                          style={{
                            color: colors.brand.secondary,
                            backgroundColor: `${colors.brand.secondary}0D`,
                          }}
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </div>

                        <p
                          className="text-[12px] font-medium leading-[1.55] sm:text-[13px]"
                          style={{ color: colors.brand.primary }}
                        >
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-col gap-3 border-t border-gray-200/80 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-sm text-xs leading-relaxed text-gray-500">
                      Strategy creates the clarity required for focused and
                      accountable execution.
                    </p>

                    <Link
                      to="/services"
                      className="group inline-flex shrink-0 items-center gap-1.5 text-xs font-bold"
                      style={{ color: colors.brand.secondary }}
                    >
                      Explore Strategy

                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ============================================
                TAB 2 — INTEGRATED MARKETING
            ============================================ */}
            <div className="visual-discipline-panel visual-integrated-panel lg:grid-cols-[0.86fr_1.14fr]">
              {/* Image-backed overview */}
              <div className="relative min-h-[370px] overflow-hidden lg:min-h-[440px]">
                <motion.img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                  alt="Marketing team coordinating integrated campaigns"
                  loading="lazy"
                  decoding="async"
                  initial={{ scale: 1.06 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#000131] via-[#000131]/80 to-[#000131]/20" />

                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-25 blur-3xl"
                  style={{ backgroundColor: colors.brand.accent }}
                />

                <div className="relative z-10 flex h-full min-h-[370px] flex-col justify-between p-5 sm:p-7 lg:min-h-[440px] lg:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                      <Rocket className="h-5 w-5 text-white" />
                    </div>

                    <span className="text-4xl font-bold tracking-[-0.06em] text-white/15">
                      02
                    </span>
                  </div>

                  <div className="mt-16">
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: colors.brand.accent }}
                    >
                      Connect the Execution
                    </p>

                    <h3 className="mt-2 max-w-lg text-2xl font-bold leading-[1.16] tracking-[-0.025em] text-white">
                      Make Every Marketing Channel Work Together
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-[1.75] text-white/72">
                      We connect campaigns, content, media, automation,
                      technology, and sales touchpoints into one coordinated
                      marketing ecosystem.
                    </p>

                    <div className="mt-6 flex items-start gap-3 border-t border-white/15 pt-5">
                      <Layers
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: colors.brand.accent }}
                      />

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/45">
                          Primary Outcome
                        </p>

                        <p className="mt-1 text-sm font-semibold text-white">
                          One Connected Marketing Ecosystem
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Capabilities */}
              <div className="relative flex flex-col justify-center p-5 sm:p-7 lg:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full opacity-[0.045] blur-3xl"
                  style={{ backgroundColor: colors.brand.secondary }}
                />

                <div className="relative z-10">
                  <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                        Core Capabilities
                      </p>

                      <h4
                        className="mt-1 text-lg font-bold tracking-[-0.015em] sm:text-xl"
                        style={{ color: colors.brand.primary }}
                      >
                        What Integrated Marketing Includes
                      </h4>
                    </div>

                    <span
                      className="w-fit text-[10px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: colors.brand.secondary }}
                    >
                      Cross-Channel
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 sm:gap-x-7">
                    {[
                      "Omnichannel campaign strategy and execution",
                      "Content, performance marketing and thought leadership",
                      "Paid media across Google, LinkedIn and Meta",
                      "SEO, AEO and GEO optimization systems",
                      "Email marketing and marketing automation",
                      "Offline and online channel integration",
                      "Unified attribution and performance reporting",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.035,
                          duration: 0.28,
                        }}
                        className="group flex min-h-[59px] items-start gap-3 border-b border-gray-200/75 py-3"
                      >
                        <div
                          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105"
                          style={{
                            color: colors.brand.secondary,
                            backgroundColor: `${colors.brand.secondary}0D`,
                          }}
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </div>

                        <p
                          className="text-[12px] font-medium leading-[1.55] sm:text-[13px]"
                          style={{ color: colors.brand.primary }}
                        >
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-col gap-3 border-t border-gray-200/80 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-sm text-xs leading-relaxed text-gray-500">
                      Every channel supports one message, journey, and
                      commercial objective.
                    </p>

                    <Link
                      to="/services"
                      className="group inline-flex shrink-0 items-center gap-1.5 text-xs font-bold"
                      style={{ color: colors.brand.secondary }}
                    >
                      Explore Integration

                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ============================================
                TAB 3 — AI SOLUTIONS
            ============================================ */}
            <div className="visual-discipline-panel visual-ai-panel lg:grid-cols-[0.86fr_1.14fr]">
              {/* Image-backed overview */}
              <div className="relative min-h-[370px] overflow-hidden lg:min-h-[440px]">
                <motion.img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85"
                  alt="Artificial intelligence technology and connected data"
                  loading="lazy"
                  decoding="async"
                  initial={{ scale: 1.06 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#000131] via-[#000131]/82 to-[#000131]/20" />

                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-25 blur-3xl"
                  style={{ backgroundColor: colors.brand.accent }}
                />

                <div className="relative z-10 flex h-full min-h-[370px] flex-col justify-between p-5 sm:p-7 lg:min-h-[440px] lg:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>

                    <span className="text-4xl font-bold tracking-[-0.06em] text-white/15">
                      03
                    </span>
                  </div>

                  <div className="mt-16">
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: colors.brand.accent }}
                    >
                      Scale with Intelligence
                    </p>

                    <h3 className="mt-2 max-w-lg text-2xl font-bold leading-[1.16] tracking-[-0.025em] text-white">
                      Apply AI Where It Creates Commercial Impact
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-[1.75] text-white/72">
                      We integrate practical AI across customer engagement,
                      CRM, sales workflows, marketing operations, and business
                      decision-making.
                    </p>

                    <div className="mt-6 flex items-start gap-3 border-t border-white/15 pt-5">
                      <Zap
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: colors.brand.accent }}
                      />

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/45">
                          Primary Outcome
                        </p>

                        <p className="mt-1 text-sm font-semibold text-white">
                          AI-Powered Growth Multiplier
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Capabilities */}
              <div className="relative flex flex-col justify-center p-5 sm:p-7 lg:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full opacity-[0.045] blur-3xl"
                  style={{ backgroundColor: colors.brand.secondary }}
                />

                <div className="relative z-10">
                  <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                        Core Capabilities
                      </p>

                      <h4
                        className="mt-1 text-lg font-bold tracking-[-0.015em] sm:text-xl"
                        style={{ color: colors.brand.primary }}
                      >
                        What AI Solutions Include
                      </h4>
                    </div>

                    <span
                      className="w-fit text-[10px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: colors.brand.secondary }}
                    >
                      Intelligence-Led
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 sm:gap-x-7">
                    {[
                      "Real-time customer engagement systems",
                      "AI-powered requirement understanding",
                      "Intelligent product and service recommendations",
                      "Automated upsell and cross-sell workflows",
                      "Lead qualification and predictive scoring",
                      "Dormant lead reactivation systems",
                      "High-intent lead escalation workflows",
                      "AI-driven CRM and sales automation",
                      "Customer journey intelligence",
                      "Pipeline acceleration systems",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.03,
                          duration: 0.26,
                        }}
                        className="group flex min-h-[54px] items-start gap-3 border-b border-gray-200/75 py-2.5"
                      >
                        <div
                          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105"
                          style={{
                            color: colors.brand.secondary,
                            backgroundColor: `${colors.brand.secondary}0D`,
                          }}
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </div>

                        <p
                          className="text-[12px] font-medium leading-[1.55] sm:text-[13px]"
                          style={{ color: colors.brand.primary }}
                        >
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-col gap-3 border-t border-gray-200/80 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-sm text-xs leading-relaxed text-gray-500">
                      AI improves speed and intelligence while strategy
                      maintains control.
                    </p>

                    <Link
                      to="/services"
                      className="group inline-flex shrink-0 items-center gap-1.5 text-xs font-bold"
                      style={{ color: colors.brand.secondary }}
                    >
                      Explore AI Solutions

                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            CONNECTED FRAMEWORK
        ============================================ */}
        <ScrollReveal delay={0.12}>
          <div className="mt-5 flex flex-col gap-3 rounded-xl border border-white/80 bg-white/55 px-4 py-3.5 shadow-[0_10px_30px_rgba(0,1,49,0.05)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                style={{
                  color: colors.brand.secondary,
                  backgroundColor: `${colors.brand.secondary}0D`,
                }}
              >
                <Layers className="h-4 w-4" />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-gray-400">
                  One Connected Revenue Framework
                </p>

                <p
                  className="mt-1 text-xs font-semibold sm:text-sm"
                  style={{ color: colors.brand.primary }}
                >
                  Strategy → Integrated Execution → AI Intelligence → Growth
                </p>
              </div>
            </div>

            <Link
              to="/services"
              className="group inline-flex shrink-0 items-center gap-1.5 text-xs font-bold"
              style={{ color: colors.brand.secondary }}
            >
              Explore All Services

              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>






{/* ============================================
    9. CORE CAPABILITIES — FULL-WIDTH IMAGE TABS
============================================ */}
<ModernSectionBackground variant="mesh-gradient-purple">
  <Section
    spacing="base"
    animate
    background="transparent"
    className="relative !py-0"
  >
    {/* Full viewport-width capability showcase */}
    <div className="capability-showcase-v2 relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#000131]">
      {/* ============================================
          SELF-CONTAINED TAB SYSTEM
      ============================================ */}
      <style>
        {`
          .capability-showcase-v2 .capability-slide-v2 {
            display: none;
          }

          .capability-showcase-v2:has(#cap-digital-v2:checked)
            .cap-slide-digital-v2,
          .capability-showcase-v2:has(#cap-brand-v2:checked)
            .cap-slide-brand-v2,
          .capability-showcase-v2:has(#cap-website-v2:checked)
            .cap-slide-website-v2,
          .capability-showcase-v2:has(#cap-pr-v2:checked)
            .cap-slide-pr-v2,
          .capability-showcase-v2:has(#cap-offline-v2:checked)
            .cap-slide-offline-v2,
          .capability-showcase-v2:has(#cap-strategy-v2:checked)
            .cap-slide-strategy-v2,
          .capability-showcase-v2:has(#cap-integrated-v2:checked)
            .cap-slide-integrated-v2 {
            display: block;
          }

          .capability-showcase-v2 .capability-tab-v2 {
            color: ${colors.brand.primary};
            background: rgba(255, 255, 255, 0.92);
            border-color: rgba(255, 255, 255, 0.8);
            box-shadow: 0 8px 24px rgba(0, 1, 49, 0.12);
            transition:
              color 0.3s ease,
              background 0.3s ease,
              border-color 0.3s ease,
              box-shadow 0.3s ease,
              transform 0.3s ease;
          }

          .capability-showcase-v2 .capability-tab-v2:hover {
            color: ${colors.brand.primary};
            background: #ffffff;
            border-color: #ffffff;
            box-shadow: 0 14px 34px rgba(0, 1, 49, 0.2);
            transform: translateY(-2px);
          }

          .capability-showcase-v2:has(#cap-digital-v2:checked)
            label[for="cap-digital-v2"],
          .capability-showcase-v2:has(#cap-brand-v2:checked)
            label[for="cap-brand-v2"],
          .capability-showcase-v2:has(#cap-website-v2:checked)
            label[for="cap-website-v2"],
          .capability-showcase-v2:has(#cap-pr-v2:checked)
            label[for="cap-pr-v2"],
          .capability-showcase-v2:has(#cap-offline-v2:checked)
            label[for="cap-offline-v2"],
          .capability-showcase-v2:has(#cap-strategy-v2:checked)
            label[for="cap-strategy-v2"],
          .capability-showcase-v2:has(#cap-integrated-v2:checked)
            label[for="cap-integrated-v2"] {
            color: #ffffff;
            background: ${gradients.primary};
            border-color: rgba(255, 255, 255, 0.22);
            box-shadow: 0 14px 36px rgba(0, 0, 170, 0.36);
            transform: translateY(-2px);
          }

          .capability-showcase-v2:has(#cap-digital-v2:checked)
            label[for="cap-digital-v2"]
            .cap-tab-number-v2,
          .capability-showcase-v2:has(#cap-brand-v2:checked)
            label[for="cap-brand-v2"]
            .cap-tab-number-v2,
          .capability-showcase-v2:has(#cap-website-v2:checked)
            label[for="cap-website-v2"]
            .cap-tab-number-v2,
          .capability-showcase-v2:has(#cap-pr-v2:checked)
            label[for="cap-pr-v2"]
            .cap-tab-number-v2,
          .capability-showcase-v2:has(#cap-offline-v2:checked)
            label[for="cap-offline-v2"]
            .cap-tab-number-v2,
          .capability-showcase-v2:has(#cap-strategy-v2:checked)
            label[for="cap-strategy-v2"]
            .cap-tab-number-v2,
          .capability-showcase-v2:has(#cap-integrated-v2:checked)
            label[for="cap-integrated-v2"]
            .cap-tab-number-v2 {
            color: ${colors.brand.accent};
            opacity: 1;
          }

          .capability-showcase-v2 .capability-slide-v2 {
            animation: capabilitySlideRevealV2 0.62s
              cubic-bezier(0.22, 1, 0.36, 1);
          }

          @keyframes capabilitySlideRevealV2 {
            from {
              opacity: 0;
              transform: scale(1.015);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .capability-showcase-v2 .capability-tab-scroll-v2 {
            scrollbar-width: none;
            scroll-behavior: smooth;
          }

          .capability-showcase-v2
            .capability-tab-scroll-v2::-webkit-scrollbar {
            display: none;
          }

          @media (max-width: 767px) {
            .capability-showcase-v2 .capability-tab-v2 {
              box-shadow: 0 6px 20px rgba(0, 1, 49, 0.14);
            }
          }
        `}
      </style>

      {/* ============================================
          HIDDEN TAB CONTROLS
      ============================================ */}
      <input
        id="cap-digital-v2"
        type="radio"
        name="capability-showcase-tabs-v2"
        defaultChecked
        className="sr-only"
      />

      <input
        id="cap-brand-v2"
        type="radio"
        name="capability-showcase-tabs-v2"
        className="sr-only"
      />

      <input
        id="cap-website-v2"
        type="radio"
        name="capability-showcase-tabs-v2"
        className="sr-only"
      />

      <input
        id="cap-pr-v2"
        type="radio"
        name="capability-showcase-tabs-v2"
        className="sr-only"
      />

      <input
        id="cap-offline-v2"
        type="radio"
        name="capability-showcase-tabs-v2"
        className="sr-only"
      />

      <input
        id="cap-strategy-v2"
        type="radio"
        name="capability-showcase-tabs-v2"
        className="sr-only"
      />

      <input
        id="cap-integrated-v2"
        type="radio"
        name="capability-showcase-tabs-v2"
        className="sr-only"
      />

      {/* ============================================
          SECTION HEADING AND TAB NAVIGATION
      ============================================ */}
      <div className="absolute inset-x-0 top-0 z-50">
        <Container size="xl">
          <div className="pt-6 sm:pt-8 lg:pt-9">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2">
                <Layers
                  className="h-3.5 w-3.5"
                  style={{ color: colors.brand.accent }}
                />

                <p className="text-[9px] font-bold uppercase tracking-[0.19em] text-white/60">
                  Complete Capability Architecture
                </p>
              </div>

              <h2 className="mt-2 text-xl font-bold tracking-[-0.025em] text-white sm:text-2xl lg:text-[28px]">
                Explore the Full Marketing System
              </h2>

              <p className="mt-2 hidden max-w-2xl text-xs leading-[1.7] text-white/60 sm:block">
                Each capability solves a focused requirement. Together, they
                create one coordinated infrastructure for stronger positioning,
                disciplined execution, and measurable growth.
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Complete marketing capability architecture"
              className="capability-tab-scroll-v2 mt-5 flex items-center gap-2 overflow-x-auto pb-3"
            >
              <label
                htmlFor="cap-digital-v2"
                role="tab"
                className="capability-tab-v2 flex min-h-[42px] shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold backdrop-blur-xl"
              >
                <span className="cap-tab-number-v2 text-[9px] font-bold tracking-[0.14em] opacity-40">
                  01
                </span>

                <span className="whitespace-nowrap">Digital Marketing</span>
              </label>

              <label
                htmlFor="cap-brand-v2"
                role="tab"
                className="capability-tab-v2 flex min-h-[42px] shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold backdrop-blur-xl"
              >
                <span className="cap-tab-number-v2 text-[9px] font-bold tracking-[0.14em] opacity-40">
                  02
                </span>

                <span className="whitespace-nowrap">Brand Systems</span>
              </label>

              <label
                htmlFor="cap-website-v2"
                role="tab"
                className="capability-tab-v2 flex min-h-[42px] shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold backdrop-blur-xl"
              >
                <span className="cap-tab-number-v2 text-[9px] font-bold tracking-[0.14em] opacity-40">
                  03
                </span>

                <span className="whitespace-nowrap">
                  Website Development
                </span>
              </label>

              <label
                htmlFor="cap-pr-v2"
                role="tab"
                className="capability-tab-v2 flex min-h-[42px] shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold backdrop-blur-xl"
              >
                <span className="cap-tab-number-v2 text-[9px] font-bold tracking-[0.14em] opacity-40">
                  04
                </span>

                <span className="whitespace-nowrap">Online PR</span>
              </label>

              <label
                htmlFor="cap-offline-v2"
                role="tab"
                className="capability-tab-v2 flex min-h-[42px] shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold backdrop-blur-xl"
              >
                <span className="cap-tab-number-v2 text-[9px] font-bold tracking-[0.14em] opacity-40">
                  05
                </span>

                <span className="whitespace-nowrap">Offline Marketing</span>
              </label>

              <label
                htmlFor="cap-strategy-v2"
                role="tab"
                className="capability-tab-v2 flex min-h-[42px] shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold backdrop-blur-xl"
              >
                <span className="cap-tab-number-v2 text-[9px] font-bold tracking-[0.14em] opacity-40">
                  06
                </span>

                <span className="whitespace-nowrap">
                  Strategic Marketing
                </span>
              </label>

              <label
                htmlFor="cap-integrated-v2"
                role="tab"
                className="capability-tab-v2 flex min-h-[42px] shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold backdrop-blur-xl"
              >
                <span className="cap-tab-number-v2 text-[9px] font-bold tracking-[0.14em] opacity-40">
                  07
                </span>

                <span className="whitespace-nowrap">
                  Integrated Marketing
                </span>
              </label>
            </div>
          </div>
        </Container>
      </div>

      {/* ============================================
          SLIDE 1 — DIGITAL MARKETING
      ============================================ */}
      <div className="capability-slide-v2 cap-slide-digital-v2">
        <div className="group/slide relative min-h-[780px] overflow-hidden sm:min-h-[735px] lg:min-h-[670px]">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=90"
            alt="Digital marketing analytics and campaign performance"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover/slide:scale-[1.025]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#000131] via-[#000131]/82 to-[#000131]/35 lg:bg-gradient-to-r lg:from-[#000131]/98 lg:via-[#000131]/82 lg:to-[#000131]/12" />

          <div
            aria-hidden="true"
            className="absolute -left-32 top-20 h-96 w-96 rounded-full opacity-20 blur-[120px]"
            style={{ backgroundColor: colors.brand.secondary }}
          />

          <div
            aria-hidden="true"
            className="absolute -right-32 bottom-0 h-96 w-96 rounded-full opacity-15 blur-[120px]"
            style={{ backgroundColor: colors.brand.accent }}
          />

          <Container size="xl" className="relative z-20">
            <div className="grid min-h-[780px] gap-8 pb-10 pt-64 sm:min-h-[735px] sm:pt-60 lg:min-h-[670px] lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:pb-14 lg:pt-56">
              {/* Main content */}
              <div className="max-w-2xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                    <MonitorSmartphone className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: colors.brand.accent }}
                    >
                      Core Capability 01
                    </p>

                    <p className="mt-0.5 text-xs font-semibold text-white/60">
                      Visibility, acquisition and conversion
                    </p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold leading-[1.06] tracking-[-0.04em] text-white sm:text-4xl lg:text-[46px]">
                  Digital Marketing
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-[1.8] text-white/72">
                  Search authority, paid acquisition, conversion engineering,
                  automation, and demand generation built around pipeline
                  quality—not vanity metrics.
                </p>

                <Link
                  to="/services/digital-marketing"
                  className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-[0_14px_36px_rgba(0,0,170,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(0,0,170,0.44)]"
                  style={{ background: gradients.primary }}
                >
                  Learn More

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Deliverables */}
              <div className="flex items-end justify-end">
                <div className="w-full rounded-2xl border border-white/20 bg-[#000131]/60 p-5 shadow-[0_22px_65px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:max-w-md">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                    Key Deliverables
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      "SEO, AEO and organic search authority",
                      "Performance advertising across Google, Meta and LinkedIn",
                      "Conversion rate optimization",
                      "Marketing automation and lead scoring",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: colors.brand.accent }}
                        />

                        <p className="text-xs font-medium leading-[1.6] text-white/78">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* ============================================
          SLIDE 2 — BRANDING & BRAND SYSTEMS
      ============================================ */}
      <div className="capability-slide-v2 cap-slide-brand-v2">
        <div className="group/slide relative min-h-[780px] overflow-hidden sm:min-h-[735px] lg:min-h-[670px]">
          <img
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2400&q=90"
            alt="Brand identity design, typography and color systems"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[center_48%] transition-transform duration-[1400ms] ease-out group-hover/slide:scale-[1.025]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#000131] via-[#000131]/82 to-[#000131]/35 lg:bg-gradient-to-r lg:from-[#000131]/98 lg:via-[#000131]/82 lg:to-[#000131]/12" />

          <div
            aria-hidden="true"
            className="absolute -left-32 top-20 h-96 w-96 rounded-full opacity-20 blur-[120px]"
            style={{ backgroundColor: colors.brand.secondary }}
          />

          <div
            aria-hidden="true"
            className="absolute -right-32 bottom-0 h-96 w-96 rounded-full opacity-15 blur-[120px]"
            style={{ backgroundColor: colors.brand.accent }}
          />

          <Container size="xl" className="relative z-20">
            <div className="grid min-h-[780px] gap-8 pb-10 pt-64 sm:min-h-[735px] sm:pt-60 lg:min-h-[670px] lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:pb-14 lg:pt-56">
              <div className="max-w-2xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                    <Eye className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: colors.brand.accent }}
                    >
                      Core Capability 02
                    </p>

                    <p className="mt-0.5 text-xs font-semibold text-white/60">
                      Positioning, identity and governance
                    </p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold leading-[1.06] tracking-[-0.04em] text-white sm:text-4xl lg:text-[46px]">
                  Branding & Brand Systems
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-[1.8] text-white/72">
                  Strategic positioning, messaging architecture, identity, and
                  governance systems that create clarity, differentiation, and
                  competitive advantage.
                </p>

                <Link
                  to="/services/brand-development"
                  className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-[0_14px_36px_rgba(0,0,170,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(0,0,170,0.44)]"
                  style={{ background: gradients.primary }}
                >
                  Learn More

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="flex items-end justify-end">
                <div className="w-full rounded-2xl border border-white/20 bg-[#000131]/60 p-5 shadow-[0_22px_65px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:max-w-md">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                    Key Deliverables
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      "Brand strategy and market positioning",
                      "Messaging architecture and brand voice",
                      "Visual identity and design governance",
                      "Brand asset management systems",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: colors.brand.accent }}
                        />

                        <p className="text-xs font-medium leading-[1.6] text-white/78">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* ============================================
          SLIDE 3 — WEBSITE STRATEGY & DEVELOPMENT
      ============================================ */}
      <div className="capability-slide-v2 cap-slide-website-v2">
        <div className="group/slide relative min-h-[780px] overflow-hidden sm:min-h-[735px] lg:min-h-[670px]">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2400&q=90"
            alt="Website strategy, interface design and development workspace"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[center_52%] transition-transform duration-[1400ms] ease-out group-hover/slide:scale-[1.025]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#000131] via-[#000131]/82 to-[#000131]/35 lg:bg-gradient-to-r lg:from-[#000131]/98 lg:via-[#000131]/82 lg:to-[#000131]/12" />

          <div
            aria-hidden="true"
            className="absolute -left-32 top-20 h-96 w-96 rounded-full opacity-20 blur-[120px]"
            style={{ backgroundColor: colors.brand.secondary }}
          />

          <Container size="xl" className="relative z-20">
            <div className="grid min-h-[780px] gap-8 pb-10 pt-64 sm:min-h-[735px] sm:pt-60 lg:min-h-[670px] lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:pb-14 lg:pt-56">
              <div className="max-w-2xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                    <Rocket className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: colors.brand.accent }}
                    >
                      Core Capability 03
                    </p>

                    <p className="mt-0.5 text-xs font-semibold text-white/60">
                      Experience, usability and conversion
                    </p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold leading-[1.06] tracking-[-0.04em] text-white sm:text-4xl lg:text-[46px]">
                  Website Strategy & Development
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-[1.8] text-white/72">
                  High-performance digital infrastructure engineered for
                  credibility, customer experience, usability, visibility, and
                  measurable conversion.
                </p>

                <Link
                  to="/services"
                  className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-[0_14px_36px_rgba(0,0,170,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(0,0,170,0.44)]"
                  style={{ background: gradients.primary }}
                >
                  Learn More

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="flex items-end justify-end">
                <div className="w-full rounded-2xl border border-white/20 bg-[#000131]/60 p-5 shadow-[0_22px_65px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:max-w-md">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                    Key Deliverables
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      "UX and UI strategy with user research",
                      "Conversion-optimized website development",
                      "Performance engineering and technical SEO",
                      "CMS implementation and governance",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: colors.brand.accent }}
                        />

                        <p className="text-xs font-medium leading-[1.6] text-white/78">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* ============================================
          SLIDE 4 — ONLINE PR & REPUTATION
      ============================================ */}
      <div className="capability-slide-v2 cap-slide-pr-v2">
        <div className="group/slide relative min-h-[780px] overflow-hidden sm:min-h-[735px] lg:min-h-[670px]">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=2400&q=90"
            alt="Digital media, public relations and reputation communication"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover/slide:scale-[1.025]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#000131] via-[#000131]/82 to-[#000131]/35 lg:bg-gradient-to-r lg:from-[#000131]/98 lg:via-[#000131]/82 lg:to-[#000131]/12" />

          <div
            aria-hidden="true"
            className="absolute -left-32 top-20 h-96 w-96 rounded-full opacity-20 blur-[120px]"
            style={{ backgroundColor: colors.brand.secondary }}
          />

          <Container size="xl" className="relative z-20">
            <div className="grid min-h-[780px] gap-8 pb-10 pt-64 sm:min-h-[735px] sm:pt-60 lg:min-h-[670px] lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:pb-14 lg:pt-56">
              <div className="max-w-2xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                    <Megaphone className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: colors.brand.accent }}
                    >
                      Core Capability 04
                    </p>

                    <p className="mt-0.5 text-xs font-semibold text-white/60">
                      Authority, credibility and visibility
                    </p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold leading-[1.06] tracking-[-0.04em] text-white sm:text-4xl lg:text-[46px]">
                  Online PR & Reputation
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-[1.8] text-white/72">
                  Authority-building communication and visibility across
                  digital media, industry ecosystems, executive channels, and
                  customer touchpoints.
                </p>

                <Link
                  to="/services"
                  className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-[0_14px_36px_rgba(0,0,170,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(0,0,170,0.44)]"
                  style={{ background: gradients.primary }}
                >
                  Learn More

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="flex items-end justify-end">
                <div className="w-full rounded-2xl border border-white/20 bg-[#000131]/60 p-5 shadow-[0_22px_65px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:max-w-md">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                    Key Deliverables
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      "Digital media relations",
                      "Executive thought leadership",
                      "Online reputation management",
                      "Strategic content distribution",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: colors.brand.accent }}
                        />

                        <p className="text-xs font-medium leading-[1.6] text-white/78">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* ============================================
          SLIDE 5 — OFFLINE MARKETING
      ============================================ */}
      <div className="capability-slide-v2 cap-slide-offline-v2">
        <div className="group/slide relative min-h-[780px] overflow-hidden sm:min-h-[735px] lg:min-h-[670px]">
          <img
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=2400&q=90"
            alt="Business exhibition, event and offline marketing activation"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover/slide:scale-[1.025]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#000131] via-[#000131]/82 to-[#000131]/35 lg:bg-gradient-to-r lg:from-[#000131]/98 lg:via-[#000131]/82 lg:to-[#000131]/12" />

          <div
            aria-hidden="true"
            className="absolute -left-32 top-20 h-96 w-96 rounded-full opacity-20 blur-[120px]"
            style={{ backgroundColor: colors.brand.secondary }}
          />

          <Container size="xl" className="relative z-20">
            <div className="grid min-h-[780px] gap-8 pb-10 pt-64 sm:min-h-[735px] sm:pt-60 lg:min-h-[670px] lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:pb-14 lg:pt-56">
              <div className="max-w-2xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: colors.brand.accent }}
                    >
                      Core Capability 05
                    </p>

                    <p className="mt-0.5 text-xs font-semibold text-white/60">
                      Physical visibility and market activation
                    </p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold leading-[1.06] tracking-[-0.04em] text-white sm:text-4xl lg:text-[46px]">
                  Offline Marketing
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-[1.8] text-white/72">
                  Strategic integration across events, exhibitions, print,
                  field activation, collateral, partnerships, and channel
                  marketing.
                </p>

                <Link
                  to="/services"
                  className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-[0_14px_36px_rgba(0,0,170,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(0,0,170,0.44)]"
                  style={{ background: gradients.primary }}
                >
                  Learn More

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="flex items-end justify-end">
                <div className="w-full rounded-2xl border border-white/20 bg-[#000131]/60 p-5 shadow-[0_22px_65px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:max-w-md">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                    Key Deliverables
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      "Event and exhibition strategy",
                      "Print design and production",
                      "Marketing collateral development",
                      "Channel marketing programs",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: colors.brand.accent }}
                        />

                        <p className="text-xs font-medium leading-[1.6] text-white/78">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* ============================================
          SLIDE 6 — STRATEGIC MARKETING
      ============================================ */}
      <div className="capability-slide-v2 cap-slide-strategy-v2">
        <div className="group/slide relative min-h-[780px] overflow-hidden sm:min-h-[735px] lg:min-h-[670px]">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=90"
            alt="Leadership team developing a strategic marketing plan"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[center_45%] transition-transform duration-[1400ms] ease-out group-hover/slide:scale-[1.025]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#000131] via-[#000131]/82 to-[#000131]/35 lg:bg-gradient-to-r lg:from-[#000131]/98 lg:via-[#000131]/82 lg:to-[#000131]/12" />

          <div
            aria-hidden="true"
            className="absolute -left-32 top-20 h-96 w-96 rounded-full opacity-20 blur-[120px]"
            style={{ backgroundColor: colors.brand.secondary }}
          />

          <Container size="xl" className="relative z-20">
            <div className="grid min-h-[780px] gap-8 pb-10 pt-64 sm:min-h-[735px] sm:pt-60 lg:min-h-[670px] lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:pb-14 lg:pt-56">
              <div className="max-w-2xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                    <Target className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: colors.brand.accent }}
                    >
                      Core Capability 06
                    </p>

                    <p className="mt-0.5 text-xs font-semibold text-white/60">
                      Market intelligence and growth direction
                    </p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold leading-[1.06] tracking-[-0.04em] text-white sm:text-4xl lg:text-[46px]">
                  Strategic Marketing
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-[1.8] text-white/72">
                  Comprehensive marketing strategy and planning that aligns
                  commercial priorities with market opportunities, customer
                  requirements, and competitive positioning.
                </p>

                <Link
                  to="/services"
                  className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-[0_14px_36px_rgba(0,0,170,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(0,0,170,0.44)]"
                  style={{ background: gradients.primary }}
                >
                  Learn More

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="flex items-end justify-end">
                <div className="w-full rounded-2xl border border-white/20 bg-[#000131]/60 p-5 shadow-[0_22px_65px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:max-w-md">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                    Key Deliverables
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      "Marketing audits and opportunity analysis",
                      "Competitive intelligence and market research",
                      "Go-to-market strategy and planning",
                      "Marketing roadmap development",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: colors.brand.accent }}
                        />

                        <p className="text-xs font-medium leading-[1.6] text-white/78">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* ============================================
          SLIDE 7 — INTEGRATED MARKETING
      ============================================ */}
      <div className="capability-slide-v2 cap-slide-integrated-v2">
        <div className="group/slide relative min-h-[780px] overflow-hidden sm:min-h-[735px] lg:min-h-[670px]">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=90"
            alt="Cross-functional team coordinating integrated marketing"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[center_42%] transition-transform duration-[1400ms] ease-out group-hover/slide:scale-[1.025]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#000131] via-[#000131]/82 to-[#000131]/35 lg:bg-gradient-to-r lg:from-[#000131]/98 lg:via-[#000131]/82 lg:to-[#000131]/12" />

          <div
            aria-hidden="true"
            className="absolute -left-32 top-20 h-96 w-96 rounded-full opacity-20 blur-[120px]"
            style={{ backgroundColor: colors.brand.secondary }}
          />

          <div
            aria-hidden="true"
            className="absolute -right-32 bottom-0 h-96 w-96 rounded-full opacity-15 blur-[120px]"
            style={{ backgroundColor: colors.brand.accent }}
          />

          <Container size="xl" className="relative z-20">
            <div className="grid min-h-[780px] gap-8 pb-10 pt-64 sm:min-h-[735px] sm:pt-60 lg:min-h-[670px] lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:pb-14 lg:pt-56">
              <div className="max-w-2xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                    <Layers className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: colors.brand.accent }}
                    >
                      Core Capability 07
                    </p>

                    <p className="mt-0.5 text-xs font-semibold text-white/60">
                      Every channel working together
                    </p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold leading-[1.06] tracking-[-0.04em] text-white sm:text-4xl lg:text-[46px]">
                  Integrated Marketing
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-[1.8] text-white/72">
                  Unified cross-channel execution where brand, digital,
                  content, automation, public relations, offline marketing, and
                  sales activation move together.
                </p>

                <Link
                  to="/services"
                  className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-[0_14px_36px_rgba(0,0,170,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(0,0,170,0.44)]"
                  style={{ background: gradients.primary }}
                >
                  Learn More

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="flex items-end justify-end">
                <div className="w-full rounded-2xl border border-white/20 bg-[#000131]/60 p-5 shadow-[0_22px_65px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:max-w-md">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                    Key Deliverables
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      "Channel integration and orchestration",
                      "Campaign coordination across touchpoints",
                      "Unified messaging architecture",
                      "Cross-functional marketing alignment",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: colors.brand.accent }}
                        />

                        <p className="text-xs font-medium leading-[1.6] text-white/78">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* ============================================
          INTERACTION AND CTA BAR
      ============================================ */}
      <div className="relative z-40 border-t border-white/10 bg-[#000131]/96 backdrop-blur-xl">
        <Container size="xl">
          <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:py-6">
            <div className="flex items-start gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                style={{
                  color: colors.brand.accent,
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
              >
                <Layers className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/45">
                  Hover to Preview. Click to Explore.
                </p>

                <p className="mt-1 max-w-3xl text-sm font-bold leading-relaxed text-white">
                  Every capability operates as part of one coordinated
                  marketing system.
                </p>

                <p className="mt-1 text-xs text-white/50">
                  One capability always remains active for a continuous,
                  user-friendly experience.
                </p>
              </div>
            </div>

            <Link
              to="/services"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(0,0,170,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,170,0.38)]"
              style={{ background: gradients.primary }}
            >
              Explore All Services

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </div>
    </div>
  </Section>
</ModernSectionBackground>




{/* ============================================
    6. HOW WE HELP YOU — INTERACTIVE GROWTH SYSTEM
============================================ */}
<ModernSectionBackground variant="mesh-gradient-purple">
  <Section
    spacing="base"
    animate
    background="transparent"
    className="relative overflow-hidden"
  >
    {/* ============================================
        SECTION BACKGROUND
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white/95" />

      <div
        className="absolute -left-48 top-0 h-[440px] w-[440px] rounded-full opacity-[0.055] blur-[120px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="absolute -right-44 bottom-0 h-[420px] w-[420px] rounded-full opacity-[0.075] blur-[120px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      <div
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.025] blur-[140px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />
    </div>

    <Container size="xl">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <SectionHeader
          badge="Execution-Focused Growth Systems"
          badgeIcon={<Sparkles className="h-4 w-4" />}
          title="How We Help You Build Predictable Growth"
          description="We connect strategy, execution, AI, and operating systems into one coordinated growth infrastructure designed around measurable commercial outcomes."
          align="center"
          maxWidth="4xl"
        />

        {(() => {
          const helpSystems = [
            {
              id: "strategy",
              number: "01",
              tabTitle: "Revenue Strategy",
              tabText: "Define the direction",
              icon: Target,
              outcomeIcon: BarChart3,
              eyebrow: "Revenue-Tied Strategic Marketing",
              title: "Every Marketing Decision Maps Back to Revenue",
              description:
                "We build focused growth strategies around business priorities, market realities, customer demand, pipeline targets, and measurable commercial outcomes.",
              image:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=90",
              imageAlt:
                "Business leadership team creating a revenue growth strategy",
              imagePosition: "object-center",
              features: [
                "Growth roadmap aligned with business priorities",
                "Target segments, positioning and differentiation",
                "Revenue-linked KPIs and measurement systems",
                "Continuous refinement through performance data",
              ],
              outcome: "A Clear Revenue-Aligned Roadmap",
              outcomeText:
                "Marketing priorities, investments, channels, and performance measures connected to one commercial direction.",
              linkLabel: "Explore Strategic Marketing",
            },
            {
              id: "connected",
              number: "02",
              tabTitle: "Connected Stack",
              tabText: "Unify every channel",
              icon: Rocket,
              outcomeIcon: Layers,
              eyebrow: "Fully Connected Marketing Stack",
              title: "Every Channel Works as One Coordinated System",
              description:
                "We connect paid media, content, SEO, social, email, CRM, automation, offline activity, and sales touchpoints into one integrated marketing ecosystem.",
              image:
                "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=90",
              imageAlt:
                "Marketing team coordinating campaigns and connected channels",
              imagePosition: "object-center",
              features: [
                "Paid media, SEO, content and social activation",
                "Email, automation and CRM integration",
                "Offline marketing and sales coordination",
                "Unified analytics, attribution and reporting",
              ],
              outcome: "One Connected Marketing Ecosystem",
              outcomeText:
                "Consistent communication, coordinated execution, and shared measurement across every customer touchpoint.",
              linkLabel: "Explore Integrated Marketing",
            },
            {
              id: "ai",
              number: "03",
              tabTitle: "AI Revenue Systems",
              tabText: "Scale with intelligence",
              icon: Sparkles,
              outcomeIcon: Zap,
              eyebrow: "AI That Solves Revenue Problems",
              title: "Apply AI Where It Creates Commercial Impact",
              description:
                "We implement practical AI across customer engagement, lead qualification, sales workflows, CRM systems, automation, and performance intelligence.",
              image:
                "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2200&q=90",
              imageAlt:
                "Artificial intelligence and connected business data systems",
              imagePosition: "object-center",
              features: [
                "AI-powered lead qualification and scoring",
                "Dormant lead reactivation workflows",
                "Intelligent customer engagement systems",
                "Predictive analytics and sales intelligence",
              ],
              outcome: "An AI-Powered Growth Multiplier",
              outcomeText:
                "Faster engagement, better decisions, improved lead quality, and more scalable marketing operations.",
              linkLabel: "Explore AI Revenue Systems",
            },
            {
              id: "gtm",
              number: "04",
              tabTitle: "Scalable GTM",
              tabText: "Build repeatable growth",
              icon: BarChart3,
              outcomeIcon: Rocket,
              eyebrow: "Repeatable Go-to-Market Playbook",
              title: "Build a Growth System Your Team Can Scale",
              description:
                "We turn strategy into repeatable operating processes, execution frameworks, defined ownership, learning loops, and scalable go-to-market playbooks.",
              image:
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2200&q=90",
              imageAlt:
                "Cross-functional business team executing a scalable growth plan",
              imagePosition: "object-[center_42%]",
              features: [
                "End-to-end growth strategy and execution",
                "Defined processes, ownership and accountability",
                "Scalable playbooks for internal teams",
                "Continuous optimization and learning loops",
              ],
              outcome: "A Repeatable Growth Operating System",
              outcomeText:
                "A structured execution model your team can operate, measure, improve, and scale over time.",
              linkLabel: "Explore GTM Systems",
            },
          ];

          return (
            <div className="help-system-tabs mt-10">
              {/* ============================================
                  SELF-CONTAINED INTERACTION STYLES
              ============================================ */}
              <style>
                {`
                  .help-system-tabs .help-system-panel {
                    display: none;
                  }

                  ${helpSystems
                    .map(
                      (item) => `
                        .help-system-tabs:has(
                          #help-system-${item.id}:checked
                        )
                        .help-panel-${item.id} {
                          display: block;
                        }
                      `,
                    )
                    .join("")}

                  .help-system-tabs .help-system-tab {
                    position: relative;
                    overflow: hidden;
                    color: rgba(0, 1, 49, 0.62);
                    background: rgba(255, 255, 255, 0.54);
                    border-color: rgba(255, 255, 255, 0.78);
                    transition:
                      color 0.32s ease,
                      background 0.32s ease,
                      border-color 0.32s ease,
                      transform 0.32s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.32s ease;
                  }

                  .help-system-tabs .help-system-tab::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    opacity: 0;
                    background: ${gradients.primary};
                    transition: opacity 0.32s ease;
                  }

                  .help-system-tabs .help-system-tab:hover {
                    color: ${colors.brand.primary};
                    background: rgba(255, 255, 255, 0.92);
                    border-color: rgba(255, 255, 255, 0.98);
                    transform: translateX(4px);
                    box-shadow: 0 12px 32px rgba(0, 1, 49, 0.09);
                  }

                  ${helpSystems
                    .map(
                      (item) => `
                        .help-system-tabs:has(
                          #help-system-${item.id}:checked
                        )
                        label[for="help-system-${item.id}"] {
                          color: #ffffff;
                          border-color: rgba(255, 255, 255, 0.2);
                          box-shadow: 0 16px 38px rgba(0, 0, 170, 0.22);
                          transform: translateX(5px);
                        }

                        .help-system-tabs:has(
                          #help-system-${item.id}:checked
                        )
                        label[for="help-system-${item.id}"]::before {
                          opacity: 1;
                        }

                        .help-system-tabs:has(
                          #help-system-${item.id}:checked
                        )
                        label[for="help-system-${item.id}"]
                        .help-system-tab-number {
                          color: ${colors.brand.accent};
                          opacity: 1;
                        }

                        .help-system-tabs:has(
                          #help-system-${item.id}:checked
                        )
                        label[for="help-system-${item.id}"]
                        .help-system-tab-arrow {
                          color: #ffffff;
                          opacity: 1;
                          transform: translateX(2px);
                        }

                        .help-system-tabs:has(
                          #help-system-${item.id}:checked
                        )
                        label[for="help-system-${item.id}"]
                        .help-system-tab-icon {
                          color: #ffffff !important;
                          background: rgba(255, 255, 255, 0.12) !important;
                          border-color: rgba(255, 255, 255, 0.18) !important;
                        }
                      `,
                    )
                    .join("")}

                  .help-system-tabs .help-system-panel {
                    animation: helpSystemReveal 0.58s
                      cubic-bezier(0.22, 1, 0.36, 1);
                  }

                  @keyframes helpSystemReveal {
                    from {
                      opacity: 0;
                      transform: scale(1.015);
                    }

                    to {
                      opacity: 1;
                      transform: scale(1);
                    }
                  }

                  @media (max-width: 1023px) {
                    .help-system-tabs .help-system-tab:hover {
                      transform: translateY(-2px);
                    }

                    ${helpSystems
                      .map(
                        (item) => `
                          .help-system-tabs:has(
                            #help-system-${item.id}:checked
                          )
                          label[for="help-system-${item.id}"] {
                            transform: translateY(-2px);
                          }
                        `,
                      )
                      .join("")}
                  }

                  @media (prefers-reduced-motion: reduce) {
                    .help-system-tabs .help-system-panel {
                      animation: none;
                    }

                    .help-system-tabs .help-system-tab,
                    .help-system-tabs .help-system-tab::before {
                      transition: none;
                    }
                  }
                `}
              </style>

              {/* ============================================
                  HIDDEN TAB CONTROLS
              ============================================ */}
              {helpSystems.map((item, index) => (
                <input
                  key={item.id}
                  id={`help-system-${item.id}`}
                  type="radio"
                  name="help-system-tabs"
                  defaultChecked={index === 0}
                  className="sr-only"
                />
              ))}

              <ScrollReveal>
                <div className="overflow-hidden rounded-[30px] border border-white/85 bg-white/68 shadow-[0_30px_90px_rgba(0,1,49,0.13)] backdrop-blur-xl">
                  <div className="grid lg:grid-cols-[340px_1fr]">
                    {/* ============================================
                        LEFT CONTROL PANEL
                    ============================================ */}
                    <aside className="relative border-b border-gray-200/70 bg-white/72 p-4 sm:p-5 lg:border-b-0 lg:border-r lg:p-6">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full opacity-[0.055] blur-3xl"
                        style={{ backgroundColor: colors.brand.secondary }}
                      />

                      <div className="relative z-10 flex h-full flex-col">
                        {/* Control-panel introduction */}
                        <div className="hidden lg:block">
                          <p
                            className="text-[10px] font-bold uppercase tracking-[0.18em]"
                            style={{ color: colors.brand.secondary }}
                          >
                            Select a Growth System
                          </p>

                          <h3
                            className="mt-2 text-xl font-bold leading-[1.2] tracking-[-0.025em]"
                            style={{ color: colors.brand.primary }}
                          >
                            Four Systems.
                            <span
                              className="mt-1 block"
                              style={{ color: colors.brand.secondary }}
                            >
                              One Growth Infrastructure.
                            </span>
                          </h3>

                          <p className="mt-3 text-xs leading-[1.7] text-gray-500">
                            Explore how strategy, connected execution, AI, and
                            scalable operations work together.
                          </p>
                        </div>

                        {/* Tab navigation */}
                        <div
                          role="tablist"
                          aria-label="How AdvantEdge helps businesses grow"
                          className="mt-0 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:mt-6 lg:grid-cols-1 lg:gap-2.5"
                        >
                          {helpSystems.map((item) => {
                            const TabIcon = item.icon;

                            return (
                              <label
                                key={item.id}
                                htmlFor={`help-system-${item.id}`}
                                className="help-system-tab group relative flex min-h-[78px] cursor-pointer items-center gap-3 rounded-2xl border px-3 py-3 text-left sm:min-h-[84px] lg:min-h-[82px] lg:px-4"
                              >
                                <div
                                  className="help-system-tab-icon relative z-10 hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border sm:flex"
                                  style={{
                                    color: colors.brand.secondary,
                                    borderColor: `${colors.brand.secondary}12`,
                                    backgroundColor: `${colors.brand.secondary}08`,
                                  }}
                                >
                                  <TabIcon className="h-4.5 w-4.5" />
                                </div>

                                <div className="relative z-10 min-w-0">
                                  <span className="help-system-tab-number block text-[9px] font-bold uppercase tracking-[0.16em] opacity-45">
                                    {item.number}
                                  </span>

                                  <span className="mt-1 block text-xs font-bold leading-tight sm:text-[13px]">
                                    {item.tabTitle}
                                  </span>

                                  <span className="mt-0.5 hidden text-[10px] font-medium opacity-55 lg:block">
                                    {item.tabText}
                                  </span>
                                </div>

                                <ArrowRight className="help-system-tab-arrow relative z-10 ml-auto hidden h-3.5 w-3.5 shrink-0 opacity-25 transition-all duration-300 lg:block" />
                              </label>
                            );
                          })}
                        </div>

                        {/* Connected system summary */}
                        <div className="mt-5 hidden border-t border-gray-200/80 pt-5 lg:block">
                          <div className="flex items-start gap-3">
                            <div
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                              style={{
                                color: colors.brand.secondary,
                                backgroundColor: `${colors.brand.secondary}0D`,
                              }}
                            >
                              <Layers className="h-4 w-4" />
                            </div>

                            <div>
                              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-gray-400">
                                Connected Growth Flow
                              </p>

                              <p
                                className="mt-1 text-xs font-semibold leading-relaxed"
                                style={{ color: colors.brand.primary }}
                              >
                                Define → Connect → Automate → Scale
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </aside>

                    {/* ============================================
                        RIGHT VISUAL EXPERIENCE
                    ============================================ */}
                    <div className="relative min-h-[650px] overflow-hidden sm:min-h-[620px] lg:min-h-[640px]">
                      {helpSystems.map((item) => {
                        const PanelIcon = item.icon;
                        const OutcomeIcon = item.outcomeIcon;

                        return (
                          <div
                            key={item.id}
                            className={`help-system-panel help-panel-${item.id} absolute inset-0`}
                          >
                            <div className="group/panel relative h-full min-h-[650px] overflow-hidden sm:min-h-[620px] lg:min-h-[640px]">
                              {/* Main contextual image */}
                              <img
                                src={item.image}
                                alt={item.imageAlt}
                                loading="lazy"
                                decoding="async"
                                className={`absolute inset-0 h-full w-full object-cover ${item.imagePosition} transition-transform duration-[1400ms] ease-out group-hover/panel:scale-[1.035]`}
                              />

                              {/* Controlled overlays */}
                              <div className="absolute inset-0 bg-gradient-to-t from-[#000131] via-[#000131]/76 to-[#000131]/20 lg:bg-gradient-to-r lg:from-[#000131]/98 lg:via-[#000131]/78 lg:to-[#000131]/08" />

                              <div
                                aria-hidden="true"
                                className="absolute -left-24 top-10 h-80 w-80 rounded-full opacity-20 blur-[100px]"
                                style={{
                                  backgroundColor: colors.brand.secondary,
                                }}
                              />

                              <div
                                aria-hidden="true"
                                className="absolute -right-24 bottom-0 h-72 w-72 rounded-full opacity-14 blur-[110px]"
                                style={{
                                  backgroundColor: colors.brand.accent,
                                }}
                              />

                              {/* Large background number */}
                              <span className="pointer-events-none absolute right-6 top-5 text-[100px] font-bold leading-none tracking-[-0.09em] text-white/[0.055] sm:right-9 sm:top-7 sm:text-[130px]">
                                {item.number}
                              </span>

                              <div className="relative z-10 grid min-h-[650px] gap-8 p-5 sm:min-h-[620px] sm:p-8 lg:min-h-[640px] lg:grid-cols-[1fr_310px] lg:items-end lg:p-10 xl:p-12">
                                {/* Main content */}
                                <div className="max-w-2xl self-end">
                                  <div className="mb-5 flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                                      <PanelIcon className="h-5 w-5 text-white" />
                                    </div>

                                    <div>
                                      <p
                                        className="text-[10px] font-bold uppercase tracking-[0.18em]"
                                        style={{
                                          color: colors.brand.accent,
                                        }}
                                      >
                                        {item.eyebrow}
                                      </p>

                                      <p className="mt-0.5 text-xs font-semibold text-white/55">
                                        Growth system {item.number} of 04
                                      </p>
                                    </div>
                                  </div>

                                  <h3 className="max-w-2xl text-2xl font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-3xl lg:text-[38px]">
                                    {item.title}
                                  </h3>

                                  <p className="mt-4 max-w-xl text-sm leading-[1.8] text-white/70">
                                    {item.description}
                                  </p>

                                  {/* Feature grid */}
                                  <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                                    {item.features.map((feature, index) => (
                                      <motion.div
                                        key={feature}
                                        initial={{ opacity: 0, y: 8 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                          delay: index * 0.05,
                                          duration: 0.32,
                                        }}
                                        className="flex min-h-[54px] items-start gap-2.5 rounded-xl border border-white/15 bg-white/[0.08] px-3 py-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.13]"
                                      >
                                        <CheckCircle2
                                          className="mt-0.5 h-3.5 w-3.5 shrink-0"
                                          style={{
                                            color: colors.brand.accent,
                                          }}
                                        />

                                        <p className="text-[11px] font-medium leading-[1.55] text-white/82 sm:text-xs">
                                          {feature}
                                        </p>
                                      </motion.div>
                                    ))}
                                  </div>

                                  <Link
                                    to="/services"
                                    className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-[0_14px_36px_rgba(0,0,170,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(0,0,170,0.42)]"
                                    style={{ background: gradients.primary }}
                                  >
                                    {item.linkLabel}

                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                  </Link>
                                </div>

                                {/* Outcome panel */}
                                <div className="flex self-end lg:justify-end">
                                  <motion.div
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                      delay: 0.18,
                                      duration: 0.45,
                                    }}
                                    className="w-full rounded-2xl border border-white/20 bg-[#000131]/58 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl"
                                  >
                                    <div className="flex items-start justify-between gap-4">
                                      <div>
                                        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                                          Primary Business Outcome
                                        </p>

                                        <h4 className="mt-2 text-lg font-bold leading-tight text-white">
                                          {item.outcome}
                                        </h4>
                                      </div>

                                      <div
                                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                                        style={{
                                          color: colors.brand.accent,
                                          backgroundColor:
                                            "rgba(255,255,255,0.08)",
                                        }}
                                      >
                                        <OutcomeIcon className="h-4 w-4" />
                                      </div>
                                    </div>

                                    <p className="mt-3 text-xs leading-[1.7] text-white/62">
                                      {item.outcomeText}
                                    </p>

                                    <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">
                                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45">
                                        Growth Infrastructure
                                      </span>

                                      <div className="flex items-center gap-1.5">
                                        {helpSystems.map(
                                          (systemItem, systemIndex) => (
                                            <span
                                              key={systemItem.id}
                                              className="h-1.5 rounded-full"
                                              style={{
                                                width:
                                                  systemIndex ===
                                                  Number(item.number) - 1
                                                    ? "22px"
                                                    : "6px",
                                                backgroundColor:
                                                  systemIndex ===
                                                  Number(item.number) - 1
                                                    ? colors.brand.accent
                                                    : "rgba(255,255,255,0.22)",
                                              }}
                                            />
                                          ),
                                        )}
                                      </div>
                                    </div>
                                  </motion.div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* ============================================
                  CONNECTED SYSTEM FOOTER
              ============================================ */}
              <ScrollReveal delay={0.18}>
                <div className="mt-5 overflow-hidden rounded-2xl border border-white/85 bg-white/62 shadow-[0_14px_42px_rgba(0,1,49,0.06)] backdrop-blur-xl">
                  <div className="grid sm:grid-cols-[1fr_auto] sm:items-stretch">
                    <div className="flex items-start gap-3 px-5 py-4 sm:items-center sm:px-6">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          color: colors.brand.secondary,
                          backgroundColor: `${colors.brand.secondary}0D`,
                        }}
                      >
                        <Layers className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">
                          One Connected Growth Infrastructure
                        </p>

                        <p
                          className="mt-1 text-sm font-bold"
                          style={{ color: colors.brand.primary }}
                        >
                          Revenue Strategy → Connected Marketing → AI
                          Intelligence → Scalable GTM Operations
                        </p>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="group flex items-center justify-center gap-2 border-t px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:shadow-xl sm:border-l sm:border-t-0"
                      style={{ background: gradients.primary }}
                    >
                      Build Your Growth System

                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          );
        })()}
      </div>
    </Container>
  </Section>
</ModernSectionBackground>

{/* ============================================
    8. WHY ADVANTEDGE — AUTO-SLIDING BACKGROUND
============================================ */}
<ModernSectionBackground
  variant="gradient-tech"
  className="relative overflow-hidden"
>
  <Section
    spacing="base"
    animate
    background="transparent"
    className="why-advantedge-slider relative overflow-hidden"
  >
    {/* ============================================
        SELF-CONTAINED BACKGROUND SLIDER CSS
    ============================================ */}
    <style>
      {`
        .why-advantedge-slider .why-background-slide {
          opacity: 0;
          transform: scale(1.08);
          animation: whyBackgroundCrossfade 24s infinite;
          will-change: opacity, transform;
        }

        .why-advantedge-slider .why-background-slide:nth-child(1) {
          animation-delay: 0s;
        }

        .why-advantedge-slider .why-background-slide:nth-child(2) {
          animation-delay: 6s;
        }

        .why-advantedge-slider .why-background-slide:nth-child(3) {
          animation-delay: 12s;
        }

        .why-advantedge-slider .why-background-slide:nth-child(4) {
          animation-delay: 18s;
        }

        @keyframes whyBackgroundCrossfade {
          0% {
            opacity: 0;
            transform: scale(1.08);
          }

          5% {
            opacity: 1;
          }

          25% {
            opacity: 1;
          }

          32% {
            opacity: 0;
            transform: scale(1);
          }

          100% {
            opacity: 0;
            transform: scale(1);
          }
        }

        .why-advantedge-slider .why-advantage-card-image {
          opacity: 0;
          transform: scale(1.12);
          filter: saturate(0.8);
          transition:
            opacity 0.65s ease,
            transform 0.85s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.65s ease;
        }

        .why-advantedge-slider
          .why-advantage-card:hover
          .why-advantage-card-image {
          opacity: 0.5;
          transform: scale(1);
          filter: saturate(1);
        }

        .why-advantedge-slider
          .why-advantage-card
          .why-card-accent {
          transform: scaleX(0.18);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .why-advantedge-slider
          .why-advantage-card:hover
          .why-card-accent {
          transform: scaleX(1);
        }

        @media (prefers-reduced-motion: reduce) {
          .why-advantedge-slider .why-background-slide {
            animation: none;
            transform: none;
          }

          .why-advantedge-slider .why-background-slide:first-child {
            opacity: 1;
          }
        }
      `}
    </style>

    {/* ============================================
        AUTO-SLIDING FULL-SECTION BACKGROUNDS
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#000131]"
    >
      <div className="absolute inset-0">
        {/* Slide 1 — Global team */}
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=90"
          alt=""
          loading="eager"
          decoding="async"
          className="why-background-slide absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Slide 2 — Strategic planning */}
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=90"
          alt=""
          loading="lazy"
          decoding="async"
          className="why-background-slide absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Slide 3 — Executive collaboration */}
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=90"
          alt=""
          loading="lazy"
          decoding="async"
          className="why-background-slide absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Slide 4 — Analytics and measurable growth */}
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=90"
          alt=""
          loading="lazy"
          decoding="async"
          className="why-background-slide absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      {/* Readability treatment */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000131]/65 via-[#000131]/72 to-[#000131]/94" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/78 via-[#000131]/45 to-[#000131]/68" />

      {/* Subtle center light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.16),transparent_38%)]" />

      {/* Blue atmospheric glow */}
      <div
        className="absolute -left-48 top-[15%] h-[520px] w-[520px] rounded-full opacity-[0.17] blur-[155px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      {/* Yellow atmospheric glow */}
      <div
        className="absolute -right-48 bottom-[8%] h-[480px] w-[480px] rounded-full opacity-[0.10] blur-[150px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      {/* Technical grid */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Outer vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(0,1,49,0.58)_100%)]" />
    </div>

    <Container size="xl">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="mx-auto max-w-4xl text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.10] px-4 py-2 shadow-[0_14px_45px_rgba(0,0,0,0.18)] backdrop-blur-xl"
              style={{ color: colors.brand.accent }}
            >
              <Sparkles className="h-3.5 w-3.5" />

              <span className="text-[10px] font-bold uppercase tracking-[0.19em]">
                Why AdvantEdge
              </span>
            </div>

            <h2 className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-0.035em] text-white sm:text-3xl lg:text-[42px]">
              We Are Not Just Another
              <span className="relative mt-1 block">
                Marketing Agency.

                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full"
                  style={{ background: gradients.primary }}
                />
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-[1.8] text-white/[0.72] sm:text-base">
              Global expertise, leadership-level thinking, integrated
              execution, and commercial discipline—built to create measurable
              business outcomes rather than disconnected marketing activity.
            </p>
          </div>
        </ScrollReveal>

        {/* ============================================
            CORE POSITIONING STRIP
        ============================================ */}
        <ScrollReveal delay={0.08}>
          <div className="mx-auto mt-9 max-w-6xl overflow-hidden rounded-2xl border border-white/20 bg-white/[0.10] shadow-[0_22px_65px_rgba(0,0,0,0.20)] backdrop-blur-2xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Strategic Clarity",
                  text: "Direction before execution",
                },
                {
                  number: "02",
                  title: "Connected Systems",
                  text: "Every channel works together",
                },
                {
                  number: "03",
                  title: "Commercial Focus",
                  text: "Pipeline, conversion and revenue",
                },
                {
                  number: "04",
                  title: "Measured Growth",
                  text: "Performance continuously improved",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                  }}
                  transition={{ duration: 0.3 }}
                  className={[
                    "relative px-5 py-5 text-center",
                    index < 3
                      ? "border-b border-white/12 lg:border-b-0 lg:border-r"
                      : "",
                    index === 1 ? "sm:border-l sm:border-white/12 lg:border-l-0" : "",
                  ].join(" ")}
                >
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.17em]"
                    style={{ color: colors.brand.accent }}
                  >
                    {item.number}
                  </p>

                  <p className="mt-1.5 text-sm font-bold text-white">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[11px] text-white/[0.48]">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            ADVANTAGE CARDS
        ============================================ */}
        <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              number: "01",
              icon: <Globe className="h-5 w-5" />,
              title: "Global Experts",
              desc: "Business leadership and consulting experience across markets, industries, and complex commercial environments.",
              insight: "Global perspective. Market relevance.",
              image:
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=88",
            },
            {
              number: "02",
              icon: <Layers className="h-5 w-5" />,
              title: "Strategy + Execution",
              desc: "Strategic planning supported by hands-on implementation—not recommendations that stop at a presentation.",
              insight: "Direction supported by delivery.",
              image:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=88",
            },
            {
              number: "03",
              icon: <Sparkles className="h-5 w-5" />,
              title: "Integrated Approach",
              desc: "Marketing, sales, data, technology, and AI operate as one coordinated commercial growth system.",
              insight: "Every function working together.",
              image:
                "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=88",
            },
            {
              number: "04",
              icon: <BarChart3 className="h-5 w-5" />,
              title: "Measurable Outcomes",
              desc: "Every initiative is designed around pipeline, conversion, revenue, and ROI—not activity or vanity metrics.",
              insight: "Performance leadership can evaluate.",
              image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=88",
            },
            {
              number: "05",
              icon: <Target className="h-5 w-5" />,
              title: "Revenue Focus",
              desc: "A commercial focus on qualified pipeline, lead quality, sales velocity, and sustainable business growth.",
              insight: "Marketing accountable to revenue.",
              image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=88",
            },
            {
              number: "06",
              icon: <Rocket className="h-5 w-5" />,
              title: "Leadership-Level Thinking",
              desc: "Executive-level strategic perspective combined with ownership, implementation, and continuous optimization.",
              insight: "Senior thinking embedded in delivery.",
              image:
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=88",
            },
          ].map((item, index) => (
            <ScrollReveal key={item.number} delay={index * 0.06}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{
                  duration: 0.36,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="why-advantage-card group relative min-h-[294px] overflow-hidden rounded-[22px] border border-white/20 bg-[#000131]/45 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-500 hover:border-white/35 hover:bg-[#000131]/38 hover:shadow-[0_34px_90px_rgba(0,0,0,0.38)]"
              >
                {/* Individual card hover image */}
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="why-advantage-card-image absolute inset-0 h-full w-full object-cover"
                />

                {/* Card image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000131]/98 via-[#000131]/80 to-[#000131]/42 transition-colors duration-500 group-hover:from-[#000131]/96 group-hover:via-[#000131]/68 group-hover:to-[#000131]/20" />

                {/* Background glow */}
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-[0.12] blur-[75px] transition-all duration-500 group-hover:scale-125 group-hover:opacity-30"
                  style={{ backgroundColor: colors.brand.secondary }}
                />

                {/* Animated top accent */}
                <div
                  aria-hidden="true"
                  className="why-card-accent absolute left-0 top-0 h-1 w-full"
                  style={{ background: gradients.primary }}
                />

                <div className="relative z-10 flex min-h-[294px] flex-col p-5 sm:p-6">
                  {/* Card header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/[0.10] text-white shadow-lg backdrop-blur-xl transition-all duration-300 group-hover:scale-105 group-hover:bg-white/[0.18]">
                      {item.icon}
                    </div>

                    <span className="text-[10px] font-bold tracking-[0.16em] text-white/[0.30] transition-colors duration-300 group-hover:text-white/[0.65]">
                      {item.number}
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="mt-6">
                    <h3 className="text-base font-bold tracking-[-0.015em] text-white sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-[1.72] text-white/[0.62] transition-colors duration-300 group-hover:text-white/[0.82]">
                      {item.desc}
                    </p>
                  </div>

                  {/* Insight */}
                  <div className="mt-auto pt-5">
                    <div className="flex items-center gap-2 border-t border-white/12 pt-4">
                      <ArrowRight
                        className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        style={{ color: colors.brand.accent }}
                      />

                      <p className="text-[11px] font-semibold text-white/[0.42] transition-colors duration-300 group-hover:text-white/[0.82]">
                        {item.insight}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>

        {/* ============================================
            CLOSING STATEMENT AND CTA
        ============================================ */}
        <ScrollReveal delay={0.22}>
          <div className="mt-7 overflow-hidden rounded-2xl border border-white/20 bg-white/[0.10] shadow-[0_22px_70px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
            <div className="grid items-center lg:grid-cols-[1fr_auto]">
              <div className="flex items-start gap-4 px-5 py-5 sm:px-7">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/12"
                  style={{
                    color: colors.brand.accent,
                    backgroundColor: "rgba(255,255,255,0.09)",
                  }}
                >
                  <Sparkles className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/[0.42]">
                    The AdvantEdge Difference
                  </p>

                  <p className="mt-1 text-sm font-bold leading-relaxed text-white sm:text-base">
                    Senior strategic thinking connected directly to disciplined
                    execution and measurable commercial performance.
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-white/[0.50]">
                    We work as an extension of your leadership—not as a
                    disconnected vendor completing isolated tasks.
                  </p>
                </div>
              </div>

              <Link
                to="/about"
                className="group flex h-full items-center justify-center gap-2 border-t border-white/12 px-7 py-5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/[0.08] lg:border-l lg:border-t-0"
              >
                Discover Our Approach

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: colors.brand.accent }}
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            SLIDER PROGRESS INDICATOR
        ============================================ */}
        <ScrollReveal delay={0.3}>
          <div className="mt-6 flex items-center justify-center gap-2">
            {[0, 1, 2, 3].map((item) => (
              <span
                key={item}
                className="h-1 w-8 overflow-hidden rounded-full bg-white/15"
              >
                <motion.span
                  className="block h-full w-full origin-left"
                  style={{ background: gradients.primary }}
                  animate={{
                    scaleX: [0, 1, 1, 0],
                    opacity: [0.2, 1, 1, 0.2],
                  }}
                  transition={{
                    duration: 6,
                    delay: item * 6,
                    repeat: Infinity,
                    repeatDelay: 18,
                    ease: "linear",
                  }}
                />
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>





{/* ============================================
    9. CASE STUDIES — AUTO-SLIDING BACKGROUND
============================================ */}
<ModernSectionBackground
  variant="glass-blur"
  className="relative overflow-hidden"
>
  <Section
    spacing="base"
    animate
    background="transparent"
    className="case-studies-visual relative overflow-hidden"
  >
    {/* ============================================
        SELF-CONTAINED ANIMATION CSS
    ============================================ */}
    <style>
      {`
        .case-studies-visual .case-bg-slide {
          opacity: 0;
          transform: scale(1.07);
          animation: caseBackgroundCrossfade 28s infinite;
          will-change: opacity, transform;
        }

        .case-studies-visual .case-bg-slide:nth-child(1) {
          animation-delay: 0s;
        }

        .case-studies-visual .case-bg-slide:nth-child(2) {
          animation-delay: 7s;
        }

        .case-studies-visual .case-bg-slide:nth-child(3) {
          animation-delay: 14s;
        }

        .case-studies-visual .case-bg-slide:nth-child(4) {
          animation-delay: 21s;
        }

        @keyframes caseBackgroundCrossfade {
          0% {
            opacity: 0;
            transform: scale(1.07);
          }

          5% {
            opacity: 1;
          }

          25% {
            opacity: 1;
          }

          32% {
            opacity: 0;
            transform: scale(1);
          }

          100% {
            opacity: 0;
            transform: scale(1);
          }
        }

        .case-studies-visual .case-feature-image,
        .case-studies-visual .case-support-image {
          transition: transform 1s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .case-studies-visual .case-feature-card:hover .case-feature-image,
        .case-studies-visual .case-support-card:hover .case-support-image {
          transform: scale(1.035);
        }

        .case-studies-visual .case-accent-line {
          transform: scaleX(0.18);
          transform-origin: left;
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .case-studies-visual article:hover .case-accent-line {
          transform: scaleX(1);
        }

        @media (prefers-reduced-motion: reduce) {
          .case-studies-visual .case-bg-slide {
            animation: none;
            transform: none;
          }

          .case-studies-visual .case-bg-slide:first-child {
            opacity: 1;
          }

          .case-studies-visual .case-feature-image,
          .case-studies-visual .case-support-image {
            transition: none;
          }
        }
      `}
    </style>

    {/* ============================================
        FULL-SECTION AUTO-SLIDING BACKGROUND
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#11131a]"
    >
      <div className="absolute inset-0">
        {/* Slide 1 — Analytics */}
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=90"
          alt=""
          loading="eager"
          decoding="async"
          className="case-bg-slide absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Slide 2 — Leadership strategy */}
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=90"
          alt=""
          loading="lazy"
          decoding="async"
          className="case-bg-slide absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Slide 3 — Professional services */}
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=90"
          alt=""
          loading="lazy"
          decoding="async"
          className="case-bg-slide absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Slide 4 — Industrial transformation */}
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2400&q=90"
          alt=""
          loading="lazy"
          decoding="async"
          className="case-bg-slide absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      {/* 
        Softer neutral overlays:
        images remain clearly visible instead of becoming fully blue
      */}
      <div className="absolute inset-0 bg-black/[0.38]" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.26] via-black/[0.20] to-[#080915]/[0.78]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.12),transparent_42%)]" />

      {/* Very subtle brand atmospheres */}
      <div
        className="absolute -left-56 top-[20%] h-[500px] w-[500px] rounded-full opacity-[0.08] blur-[160px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="absolute -right-52 bottom-[8%] h-[470px] w-[470px] rounded-full opacity-[0.08] blur-[150px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      {/* Fine texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />
    </div>

    <Container size="xl">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/[0.18] px-4 py-2 shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                style={{ color: colors.brand.accent }}
              >
                <TrendingUp className="h-3.5 w-3.5" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                  Case Studies
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-0.035em] text-white sm:text-3xl lg:text-[42px]">
                Real Transformations.
                <span className="mt-1 block text-white/[0.72]">
                  Measurable Business Growth.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-[1.8] text-white/[0.76] sm:text-base">
                See how strategy, technology, creative execution, and
                operational alignment transformed complex challenges into
                stronger market positions and measurable commercial outcomes.
              </p>
            </div>

            {/* Process panel */}
            <div className="max-w-sm rounded-2xl border border-white/25 bg-black/[0.20] px-5 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-xl">
              <p
                className="text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{ color: colors.brand.accent }}
              >
                Transformation Framework
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-white/[0.72]">
                <span>Challenge</span>
                <ArrowRight className="h-3 w-3 text-white/40" />

                <span>Strategy</span>
                <ArrowRight className="h-3 w-3 text-white/40" />

                <span>Execution</span>
                <ArrowRight className="h-3 w-3 text-white/40" />

                <span>Growth</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            RESULTS SUMMARY
        ============================================ */}
        <ScrollReveal delay={0.08}>
          <div className="mt-9 overflow-hidden rounded-2xl border border-white/25 bg-black/[0.18] shadow-[0_20px_60px_rgba(0,0,0,0.20)] backdrop-blur-xl">
            <div className="grid sm:grid-cols-3">
              {[
                {
                  metric: "4.2x",
                  label: "Qualified Pipeline Growth",
                  context: "B2B SaaS",
                },
                {
                  metric: "340%",
                  label: "Brand Recall Improvement",
                  context: "Professional Services",
                },
                {
                  metric: "97%",
                  label: "Lead Quality Score",
                  context: "Industrial Manufacturing",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.metric}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                  }}
                  transition={{ duration: 0.3 }}
                  className={[
                    "relative px-5 py-5 text-center sm:px-6",
                    index < 2
                      ? "border-b border-white/15 sm:border-b-0 sm:border-r"
                      : "",
                  ].join(" ")}
                >
                  <p
                    className="text-2xl font-black tracking-[-0.04em] sm:text-3xl"
                    style={{ color: colors.brand.accent }}
                  >
                    {item.metric}
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    {item.label}
                  </p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45">
                    {item.context}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            CASE-STUDY CARDS
        ============================================ */}
        <div className="mt-7 grid gap-5 lg:grid-cols-12">
          {/* ============================================
              FEATURED CASE STUDY
          ============================================ */}
          <ScrollReveal className="lg:col-span-7">
            <motion.article
              whileHover={{ y: -7 }}
              transition={{
                duration: 0.38,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="case-feature-card group relative min-h-[590px] overflow-hidden rounded-[26px] border border-white/30 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.32)] transition-all duration-500 hover:border-white/50 hover:shadow-[0_42px_115px_rgba(0,0,0,0.46)]"
            >
              {/* Highly visible image */}
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=92"
                alt="Analytics dashboard showing SaaS marketing and pipeline performance"
                loading="lazy"
                decoding="async"
                className="case-feature-image absolute inset-0 h-full w-full object-cover object-center"
              />

              {/* 
                Minimal image overlay:
                top stays almost clear, bottom darkens only behind content
              */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/[0.04] via-black/[0.12] via-[42%] to-black/[0.92]" />

              <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-[#080912]/95 via-[#080912]/68 to-transparent" />

              {/* Accent */}
              <div
                className="case-accent-line absolute left-0 top-0 z-20 h-1 w-full"
                style={{ background: gradients.primary }}
              />

              <div className="relative z-10 flex min-h-[590px] flex-col p-5 sm:p-7 lg:p-8">
                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/[0.26] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-xl">
                    <Rocket className="h-3.5 w-3.5" />

                    B2B SaaS
                  </span>

                  <div className="rounded-2xl border border-white/30 bg-black/[0.28] px-4 py-3 text-right shadow-xl backdrop-blur-xl">
                    <p
                      className="text-3xl font-black tracking-[-0.05em]"
                      style={{ color: colors.brand.accent }}
                    >
                      4.2x
                    </p>

                    <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white/60">
                      Pipeline Growth
                    </p>
                  </div>
                </div>

                {/* Bottom content */}
                <div className="mt-auto max-w-3xl pt-32">
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: colors.brand.accent }}
                  >
                    Featured Transformation
                  </p>

                  <h3 className="mt-3 text-2xl font-bold leading-[1.18] tracking-[-0.03em] text-white sm:text-3xl">
                    From Disconnected Campaigns to a Unified Revenue Engine
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-[1.75] text-white/[0.76]">
                    A growing SaaS company had strong market potential but no
                    unified demand system. Lead quality varied, attribution was
                    unclear, and sales teams lacked reliable visibility into
                    buyer intent.
                  </p>

                  {/* Transformation cards */}
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {[
                      {
                        label: "Challenge",
                        value: "Disconnected acquisition channels",
                      },
                      {
                        label: "Solution",
                        value: "Unified GTM and AI qualification",
                      },
                      {
                        label: "Outcome",
                        value: "4.2x qualified pipeline growth",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl border border-white/20 bg-black/[0.24] px-3 py-3 backdrop-blur-xl"
                      >
                        <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-white/45">
                          {item.label}
                        </p>

                        <p className="mt-1 text-xs font-semibold leading-relaxed text-white/85">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-6 flex flex-col gap-4 border-t border-white/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Strategic Marketing",
                        "AI Qualification",
                        "CRM Integration",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/20 bg-black/[0.20] px-2.5 py-1.5 text-[10px] font-semibold text-white/70 backdrop-blur-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/case-studies"
                      className="group/link inline-flex shrink-0 items-center gap-2 text-xs font-bold text-white"
                    >
                      View Full Case Study

                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
                        style={{ color: colors.brand.accent }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          </ScrollReveal>

          {/* ============================================
              SUPPORTING CASE STUDIES
          ============================================ */}
          <div className="grid gap-5 lg:col-span-5">
            {/* Professional Services */}
            <ScrollReveal delay={0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="case-support-card group overflow-hidden rounded-[24px] border border-white/30 bg-white shadow-[0_24px_75px_rgba(0,0,0,0.28)] transition-all duration-500 hover:border-white/50 hover:shadow-[0_35px_100px_rgba(0,0,0,0.40)]"
              >
                {/* Visible image area */}
                <div className="relative h-[190px] overflow-hidden sm:h-[205px]">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1500&q=92"
                    alt="Professional consulting team discussing brand positioning"
                    loading="lazy"
                    decoding="async"
                    className="case-support-image h-full w-full object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/[0.46] via-transparent to-transparent" />

                  <div
                    className="case-accent-line absolute left-0 top-0 h-1 w-full"
                    style={{ background: gradients.primary }}
                  />

                  <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
                    <span className="rounded-full border border-white/35 bg-black/[0.24] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-xl">
                      Professional Services
                    </span>

                    <div className="rounded-xl border border-white/35 bg-black/[0.24] px-3 py-2 text-right backdrop-blur-xl">
                      <p
                        className="text-xl font-black tracking-[-0.04em]"
                        style={{ color: colors.brand.accent }}
                      >
                        340%
                      </p>

                      <p className="text-[8px] uppercase tracking-[0.1em] text-white/70">
                        Brand Recall
                      </p>
                    </div>
                  </div>
                </div>

                {/* Light content body */}
                <div className="p-5 sm:p-6">
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.15em]"
                    style={{ color: colors.brand.secondary }}
                  >
                    Positioning Transformation
                  </p>

                  <h3
                    className="mt-2 text-lg font-bold leading-[1.28] tracking-[-0.02em]"
                    style={{ color: colors.brand.primary }}
                  >
                    Building Market Authority Through Clear Positioning
                  </h3>

                  <p className="mt-3 text-xs leading-[1.7] text-gray-600">
                    A consulting company transformed an unclear proposition
                    into a differentiated brand, executive content platform,
                    and structured inbound demand system.
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {["Brand Strategy", "Content", "Authority"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-gray-200 bg-gray-50 px-2 py-1 text-[9px] font-semibold text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/case-studies"
                      aria-label="View professional services case study"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 hover:scale-105"
                      style={{ background: gradients.primary }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>

            {/* Manufacturing */}
            <ScrollReveal delay={0.18}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="case-support-card group overflow-hidden rounded-[24px] border border-white/30 bg-white shadow-[0_24px_75px_rgba(0,0,0,0.28)] transition-all duration-500 hover:border-white/50 hover:shadow-[0_35px_100px_rgba(0,0,0,0.40)]"
              >
                {/* Visible image area */}
                <div className="relative h-[190px] overflow-hidden sm:h-[205px]">
                  <img
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1500&q=92"
                    alt="Modern industrial manufacturing facility"
                    loading="lazy"
                    decoding="async"
                    className="case-support-image h-full w-full object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/[0.44] via-transparent to-transparent" />

                  <div
                    className="case-accent-line absolute left-0 top-0 h-1 w-full"
                    style={{ background: gradients.primary }}
                  />

                  <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
                    <span className="rounded-full border border-white/35 bg-black/[0.24] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-xl">
                      Manufacturing
                    </span>

                    <div className="rounded-xl border border-white/35 bg-black/[0.24] px-3 py-2 text-right backdrop-blur-xl">
                      <p
                        className="text-xl font-black tracking-[-0.04em]"
                        style={{ color: colors.brand.accent }}
                      >
                        97%
                      </p>

                      <p className="text-[8px] uppercase tracking-[0.1em] text-white/70">
                        Lead Quality
                      </p>
                    </div>
                  </div>
                </div>

                {/* Light content body */}
                <div className="p-5 sm:p-6">
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.15em]"
                    style={{ color: colors.brand.secondary }}
                  >
                    Sales Pipeline Transformation
                  </p>

                  <h3
                    className="mt-2 text-lg font-bold leading-[1.28] tracking-[-0.02em]"
                    style={{ color: colors.brand.primary }}
                  >
                    AI Qualification That Improved Sales Productivity
                  </h3>

                  <p className="mt-3 text-xs leading-[1.7] text-gray-600">
                    AI scoring, CRM automation, and sales alignment replaced
                    manual lead processing and focused the sales team on
                    commercially valuable opportunities.
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {["AI Scoring", "CRM", "Sales Alignment"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-gray-200 bg-gray-50 px-2 py-1 text-[9px] font-semibold text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/case-studies"
                      aria-label="View manufacturing case study"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 hover:scale-105"
                      style={{ background: gradients.primary }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          </div>
        </div>

        {/* ============================================
            CASE-STUDY PRINCIPLES
        ============================================ */}
        <ScrollReveal delay={0.24}>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Target className="h-4 w-4" />,
                title: "Business Problem First",
                text: "Every engagement starts with the commercial challenge.",
              },
              {
                icon: <Layers className="h-4 w-4" />,
                title: "Connected Strategy",
                text: "Channels and systems work toward one shared objective.",
              },
              {
                icon: <Sparkles className="h-4 w-4" />,
                title: "Technology Enabled",
                text: "Automation and AI improve precision, speed, and scale.",
              },
              {
                icon: <BarChart3 className="h-4 w-4" />,
                title: "Measured Performance",
                text: "Success is evaluated through meaningful business KPIs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-xl border border-white/25 bg-black/[0.20] px-4 py-4 shadow-lg backdrop-blur-xl"
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15"
                  style={{
                    color: colors.brand.accent,
                    backgroundColor: "rgba(0,0,0,0.18)",
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <p className="text-xs font-bold text-white">{item.title}</p>

                  <p className="mt-1 text-[10px] leading-[1.6] text-white/55">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ============================================
            FINAL CTA
        ============================================ */}
        <ScrollReveal delay={0.32}>
          <div className="mt-7 overflow-hidden rounded-2xl border border-white/25 bg-black/[0.20] shadow-[0_24px_75px_rgba(0,0,0,0.24)] backdrop-blur-xl">
            <div className="grid items-center lg:grid-cols-[1fr_auto]">
              <div className="flex items-start gap-4 px-5 py-5 sm:px-7">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15"
                  style={{
                    color: colors.brand.accent,
                    backgroundColor: "rgba(0,0,0,0.16)",
                  }}
                >
                  <TrendingUp className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                    Strategy Connected to Results
                  </p>

                  <p className="mt-1 text-sm font-bold text-white sm:text-base">
                    Every transformation starts by connecting the commercial
                    challenge with the right strategy, systems, and execution.
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-white/55">
                    Explore more examples of measurable marketing and revenue
                    transformation.
                  </p>
                </div>
              </div>

              <Link
                to="/case-studies"
                className="group flex h-full items-center justify-center gap-2 border-t border-white/15 px-7 py-5 text-sm font-bold text-white transition-all duration-300 hover:shadow-xl lg:border-l lg:border-t-0"
                style={{ background: gradients.primary }}
              >
                View All Case Studies

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            BACKGROUND-SLIDER INDICATOR
        ============================================ */}
        <ScrollReveal delay={0.38}>
          <div className="mt-6 flex items-center justify-center gap-2">
            {[0, 1, 2, 3].map((item) => (
              <span
                key={item}
                className="relative h-1 w-8 overflow-hidden rounded-full bg-white/20"
              >
                <motion.span
                  className="block h-full w-full origin-left"
                  style={{ background: gradients.primary }}
                  animate={{
                    scaleX: [0, 1, 1, 0],
                    opacity: [0.25, 1, 1, 0.25],
                  }}
                  transition={{
                    duration: 7,
                    delay: item * 7,
                    repeat: Infinity,
                    repeatDelay: 21,
                    ease: "linear",
                  }}
                />
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>




{/* ============================================
    17. TESTIMONIALS — FULL-WIDTH REFINED SECTION
============================================ */}
<ModernSectionBackground
  variant="glass-blur"
  className="relative overflow-hidden"
>
  <Section
    spacing="base"
    animate
    background="transparent"
    className="testimonials-fullwidth-section relative isolate overflow-hidden"
  >
    {/* ============================================
        SECTION-SPECIFIC CSS
    ============================================ */}
    <style>
      {`
        /* --------------------------------------------
           BACKGROUND SLIDER
        -------------------------------------------- */
        .testimonials-fullwidth-section .testimonial-section-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transform: scale(1.04);
          animation: testimonialSectionBackground 24s infinite;
          will-change: opacity, transform;
        }

        .testimonials-fullwidth-section
          .testimonial-section-bg:nth-child(1) {
          animation-delay: 0s;
        }

        .testimonials-fullwidth-section
          .testimonial-section-bg:nth-child(2) {
          animation-delay: 8s;
        }

        .testimonials-fullwidth-section
          .testimonial-section-bg:nth-child(3) {
          animation-delay: 16s;
        }

        @keyframes testimonialSectionBackground {
          0% {
            opacity: 0;
            transform: scale(1.04);
          }

          6% {
            opacity: 1;
          }

          30% {
            opacity: 1;
          }

          38% {
            opacity: 0;
            transform: scale(1);
          }

          100% {
            opacity: 0;
            transform: scale(1);
          }
        }

        /* --------------------------------------------
           TRUE FULL-WIDTH CAROUSEL
        -------------------------------------------- */
        .testimonials-fullwidth-section
          .testimonial-component-fullwidth {
          position: relative;
          width: 100%;
          max-width: none;
          min-width: 0;
          margin: 0;
        }

        .testimonials-fullwidth-section
          .testimonial-component-fullwidth
          > * {
          width: 100% !important;
          max-width: none !important;
          min-width: 0 !important;
          margin: 0 !important;

          /*
            Removes the large white-to-grey background
            visible in the supplied screenshot.
          */
          background-color: #ffffff !important;
          background-image: none !important;
          box-shadow: none !important;
        }

        /*
          Removes pseudo-element gradients added by
          the existing TestimonialsCarousel root.
        */
        .testimonials-fullwidth-section
          .testimonial-component-fullwidth
          > *::before,
        .testimonials-fullwidth-section
          .testimonial-component-fullwidth
          > *::after {
          content: none !important;
          display: none !important;
          background: none !important;
          box-shadow: none !important;
        }

        /*
          Removes white edge-fade elements without
          modifying the testimonial cards themselves.
        */
        .testimonials-fullwidth-section
          .testimonial-component-fullwidth
          [class*="absolute"][class*="from-white"],
        .testimonials-fullwidth-section
          .testimonial-component-fullwidth
          [class*="absolute"][class*="via-white"],
        .testimonials-fullwidth-section
          .testimonial-component-fullwidth
          [class*="absolute"][class*="to-white"] {
          display: none !important;
        }

        /*
          Removes CSS masks that may create faded edges.
        */
        .testimonials-fullwidth-section
          .testimonial-component-fullwidth
          [class*="mask"],
        .testimonials-fullwidth-section
          .testimonial-component-fullwidth
          [style*="mask-image"] {
          -webkit-mask-image: none !important;
          mask-image: none !important;
        }

        /*
          Keeps common carousel roots full width.
          Internal viewport clipping remains unchanged.
        */
        .testimonials-fullwidth-section
          .testimonial-component-fullwidth
          :where(
            .swiper,
            .slick-slider,
            [class*="carousel"],
            [class*="slider"]
          ) {
          width: 100% !important;
          max-width: none !important;
          min-width: 0 !important;
        }

        /*
          Removes unnecessary outer max-width rules
          that may exist inside TestimonialsCarousel.
        */
        .testimonials-fullwidth-section
          .testimonial-component-fullwidth
          :where(
            [class*="max-w-"],
            [class*="container"]
          ) {
          max-width: none !important;
        }

        /* --------------------------------------------
           PROOF STRIP HOVER
        -------------------------------------------- */
        .testimonials-fullwidth-section .testimonial-proof-item {
          transition:
            background-color 0.3s ease,
            border-color 0.3s ease;
        }

        .testimonials-fullwidth-section
          .testimonial-proof-item:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.25);
        }

        /* --------------------------------------------
           MOBILE
        -------------------------------------------- */
        @media (max-width: 767px) {
          .testimonials-fullwidth-section
            .testimonial-component-fullwidth
            > * {
            border-radius: 16px !important;
          }
        }

        /* --------------------------------------------
           REDUCED MOTION
        -------------------------------------------- */
        @media (prefers-reduced-motion: reduce) {
          .testimonials-fullwidth-section
            .testimonial-section-bg {
            animation: none;
            transform: none;
          }

          .testimonials-fullwidth-section
            .testimonial-section-bg:first-child {
            opacity: 1;
          }
        }
      `}
    </style>

    {/* ============================================
        FULL-SECTION IMAGE BACKGROUND
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#101116]"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=90"
          alt=""
          loading="eager"
          decoding="async"
          className="testimonial-section-bg"
        />

        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=90"
          alt=""
          loading="lazy"
          decoding="async"
          className="testimonial-section-bg"
        />

        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=90"
          alt=""
          loading="lazy"
          decoding="async"
          className="testimonial-section-bg"
        />
      </div>

      {/* Softer overlay with visible photography */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#080912]/55 via-[#080912]/38 to-[#080912]/82" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#080912]/45 via-transparent to-[#080912]/35" />

      {/* Content focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(255,255,255,0.13),transparent_44%)]" />

      {/* Minimal brand atmosphere */}
      <div
        className="absolute -left-52 top-[12%] h-[450px] w-[450px] rounded-full opacity-[0.07] blur-[150px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="absolute -right-52 bottom-[-120px] h-[450px] w-[450px] rounded-full opacity-[0.07] blur-[150px]"
        style={{ backgroundColor: colors.brand.accent }}
      />
    </div>

    <Container size="xl">
      <div className="relative mx-auto w-full max-w-7xl">
        {/* ============================================
            CENTERED HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="mx-auto max-w-4xl text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-4 py-2 shadow-lg backdrop-blur-xl"
              style={{ color: colors.brand.accent }}
            >
              <Sparkles className="h-3.5 w-3.5" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Client Testimonials
              </span>
            </div>

            <h2 className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-0.035em] text-white sm:text-3xl lg:text-[42px]">
              Trusted for the Strategy.

              <span className="mt-1 block text-white/70">
                Valued for the Transformation.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-[1.8] text-white/72 sm:text-base">
              Hear directly from the leaders and teams who partnered with
              AdvantEdge to create clearer strategies, connected marketing
              systems, and measurable commercial growth.
            </p>
          </div>
        </ScrollReveal>

        {/* ============================================
            PROOF STRIP
        ============================================ */}
        <ScrollReveal delay={0.08}>
          <div className="mt-8 w-full overflow-hidden rounded-2xl border border-white/20 bg-black/25 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <div className="grid sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Strategic Partnership",
                  text: "Senior-level involvement from direction through delivery.",
                },
                {
                  number: "02",
                  title: "Execution Ownership",
                  text: "Recommendations supported by hands-on implementation.",
                },
                {
                  number: "03",
                  title: "Measurable Value",
                  text: "Performance evaluated through commercial outcomes.",
                },
              ].map((item, index) => (
                <div
                  key={item.number}
                  className={[
                    "testimonial-proof-item px-5 py-5 text-center",
                    index < 2
                      ? "border-b border-white/15 sm:border-b-0 sm:border-r"
                      : "",
                  ].join(" ")}
                >
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.17em]"
                    style={{ color: colors.brand.accent }}
                  >
                    {item.number}
                  </p>

                  <p className="mt-1.5 text-sm font-bold text-white">
                    {item.title}
                  </p>

                  <p className="mx-auto mt-1 max-w-sm text-[10px] leading-[1.6] text-white/52">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            FULL-WIDTH TESTIMONIAL PANEL
        ============================================ */}
        <ScrollReveal delay={0.14}>
          <div className="relative mt-5 w-full">
            {/* Main panel */}
            <div className="relative w-full rounded-[24px] border border-white/25 bg-black/30 p-3 shadow-[0_26px_80px_rgba(0,0,0,0.30)] backdrop-blur-xl sm:p-4">
              {/* Panel heading */}
              <div className="mb-3 flex flex-col gap-3 border-b border-white/15 px-1 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-black/30 text-xl font-black"
                    style={{ color: colors.brand.accent }}
                  >
                    “
                  </div>

                  <div>
                    <p
                      className="text-[9px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: colors.brand.accent }}
                    >
                      In Their Own Words
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      Real experiences from real client partnerships
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Sparkles
                        key={item}
                        className="h-3.5 w-3.5"
                        style={{ color: colors.brand.accent }}
                      />
                    ))}
                  </div>

                  <span className="text-[9px] font-bold uppercase tracking-[0.13em] text-white/45">
                    Client Feedback
                  </span>
                </div>
              </div>

              {/* 
                Full-width carousel.

                No additional glass, gradient or shadow wrapper
                is placed around TestimonialsCarousel.
              */}
              <div className="testimonial-component-fullwidth w-full overflow-hidden rounded-[18px] bg-white">
                <TestimonialsCarousel />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            BOTTOM PARTNERSHIP STRIP
        ============================================ */}
        <ScrollReveal delay={0.22}>
          <div className="mt-5 w-full overflow-hidden rounded-2xl border border-white/20 bg-black/25 shadow-[0_18px_55px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <div className="grid items-center lg:grid-cols-[1fr_auto]">
              <div className="flex items-start gap-4 px-5 py-5 sm:px-7">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08]"
                  style={{ color: colors.brand.accent }}
                >
                  <TrendingUp className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                    Built as a Strategic Partnership
                  </p>

                  <p className="mt-1 text-sm font-bold leading-relaxed text-white sm:text-base">
                    We work as an extension of leadership, marketing, and
                    revenue teams—not as a disconnected external agency.
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-white/50">
                    Every engagement is built around strategic clarity,
                    execution ownership, and measurable business progress.
                  </p>
                </div>
              </div>

              <Link
                to="/about"
                className="group flex h-full items-center justify-center gap-2 border-t border-white/15 px-7 py-5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/[0.08] lg:border-l lg:border-t-0"
              >
                Discover Our Approach

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: colors.brand.accent }}
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>





{/* ============================================
    18. INDUSTRIES WE SERVE — IMAGE-LED BENTO
============================================ */}
<ModernSectionBackground
  variant="glass-blur"
  className="relative overflow-hidden"
>
  <Section
    spacing="base"
    animate
    background="transparent"
    className="industries-section-v2 relative isolate overflow-hidden"
  >
    {/* ============================================
        SECTION-SPECIFIC STYLES
    ============================================ */}
    <style>
      {`
        .industries-section-v2 .industry-image-v2 {
          transition:
            transform 0.9s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.6s ease;
        }

        .industries-section-v2 .industry-card-v2:hover .industry-image-v2 {
          transform: scale(1.04);
          filter: saturate(1.06);
        }

        .industries-section-v2 .industry-accent-v2 {
          transform: scaleX(0.14);
          transform-origin: left;
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .industries-section-v2 .industry-card-v2:hover .industry-accent-v2 {
          transform: scaleX(1);
        }

        .industries-section-v2 .industry-arrow-v2 {
          transition:
            transform 0.3s ease,
            background-color 0.3s ease;
        }

        .industries-section-v2 .industry-card-v2:hover .industry-arrow-v2 {
          transform: translateX(4px);
        }

        @media (prefers-reduced-motion: reduce) {
          .industries-section-v2 .industry-image-v2,
          .industries-section-v2 .industry-accent-v2,
          .industries-section-v2 .industry-arrow-v2 {
            transition: none;
          }
        }
      `}
    </style>

    {/* ============================================
        LIGHT EDITORIAL BACKGROUND
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#f7f8fc]"
    >
      {/* Soft architectural image */}
      <img
        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=84"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute right-0 top-0 h-full w-[58%] object-cover opacity-[0.055] grayscale"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f8fc] via-[#f7f8fc]/95 to-[#f7f8fc]/80" />

      {/* Brand atmospheres */}
      <div
        className="absolute -left-56 top-[-100px] h-[500px] w-[500px] rounded-full opacity-[0.055] blur-[150px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="absolute -right-52 bottom-[-140px] h-[480px] w-[480px] rounded-full opacity-[0.09] blur-[150px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,1,49,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.04) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(247,248,252,0.84)_100%)]" />
    </div>

    <Container size="xl">
      <div className="mx-auto max-w-7xl">
        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
                style={{
                  color: colors.brand.secondary,
                  borderColor: `${colors.brand.secondary}22`,
                  backgroundColor: `${colors.brand.secondary}08`,
                }}
              >
                <Building2 className="h-3.5 w-3.5" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                  Industry-Specific Expertise
                </span>
              </div>

              <h2
                className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-0.035em] sm:text-3xl lg:text-[42px]"
                style={{ color: colors.brand.primary }}
              >
                Industries We Understand.
                <span className="mt-1 block text-gray-500">
                  Growth Systems We Know How to Build.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-[1.8] text-gray-600 sm:text-base">
                Every sector has different buyers, sales cycles, regulations,
                competitive pressures, and routes to growth. Our approach is
                designed around those realities.
              </p>
            </div>

            {/* Framework panel */}
            <div className="max-w-sm rounded-2xl border border-gray-200 bg-white/75 px-5 py-4 shadow-[0_16px_45px_rgba(0,1,49,0.07)] backdrop-blur-xl">
              <p
                className="text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{ color: colors.brand.secondary }}
              >
                Our Sector Approach
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-gray-600">
                <span>Market Context</span>
                <ArrowRight className="h-3 w-3 text-gray-400" />

                <span>Buyer Journey</span>
                <ArrowRight className="h-3 w-3 text-gray-400" />

                <span>Growth System</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            INDUSTRY BENTO GRID
        ============================================ */}
        <div className="mt-9 grid gap-5 lg:grid-cols-12">
          {[
            {
              number: "01",
              title: "Healthcare & Life Sciences",
              description:
                "Strategic marketing for medical devices, pharmaceuticals, biotechnology, healthcare services, and digital health businesses.",
              image:
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=92",
              icon: Hospital,
              eyebrow: "Regulated Growth Environments",
              linkText: "Explore Healthcare Expertise",
              sectors: [
                "Medical Devices",
                "Pharmaceuticals",
                "Digital Health",
              ],
              className: "lg:col-span-7 lg:row-span-2",
              cardHeight: "min-h-[470px] lg:min-h-[520px]",
              featured: true,
            },
            {
              number: "02",
              title: "Professional Services",
              description:
                "Positioning, authority building, and qualified demand generation for expertise-led organizations.",
              image:
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=92",
              icon: Briefcase,
              eyebrow: "Expertise-Led Businesses",
              linkText: "Professional Services",
              sectors: ["Consulting", "Legal", "Advisory"],
              className: "lg:col-span-5",
              cardHeight: "min-h-[310px] lg:min-h-[250px]",
              featured: false,
            },
            {
              number: "03",
              title: "Retail & E-Commerce",
              description:
                "Connected acquisition, brand, content, and conversion systems for consumer-focused growth.",
              image:
                "https://images.unsplash.com/photo-1441986300917-64674bd6008?auto=format&fit=crop&w=1400&q=92",
              icon: Store,
              eyebrow: "Consumer Growth Systems",
              linkText: "Retail & Commerce",
              sectors: ["D2C", "Omnichannel", "Marketplaces"],
              className: "lg:col-span-5",
              cardHeight: "min-h-[310px] lg:min-h-[250px]",
              featured: false,
            },
            {
              number: "04",
              title: "Manufacturing & Industrial",
              description:
                "Complex B2B marketing for manufacturers, industrial technology providers, equipment companies, and supply-chain organizations.",
              image:
                "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1900&q=92",
              icon: Factory,
              eyebrow: "Complex B2B Markets",
              linkText: "Explore Industrial Expertise",
              sectors: [
                "Industrial Equipment",
                "Advanced Manufacturing",
                "Supply Chain",
              ],
              className: "lg:col-span-12",
              cardHeight: "min-h-[350px] lg:min-h-[330px]",
              featured: false,
            },
          ].map((industry, index) => {
            const IndustryIcon = industry.icon;

            return (
              <ScrollReveal
                key={industry.title}
                delay={index * 0.08}
                className={industry.className}
              >
                <Link
                  to="/industries"
                  className={[
                    "industry-card-v2 group relative block h-full overflow-hidden rounded-[24px]",
                    "border border-white/80 bg-[#11131a]",
                    "shadow-[0_24px_75px_rgba(0,1,49,0.14)]",
                    "transition-all duration-500",
                    "hover:-translate-y-1.5",
                    "hover:shadow-[0_36px_105px_rgba(0,1,49,0.23)]",
                    industry.cardHeight,
                  ].join(" ")}
                >
                  {/* Clearly visible image */}
                  <img
                    src={industry.image}
                    alt={industry.title}
                    loading="lazy"
                    decoding="async"
                    className="industry-image-v2 absolute inset-0 h-full w-full object-cover object-center"
                  />

                  {/* Only the content area receives a strong overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/[0.94] via-black/[0.36] via-[54%] to-black/[0.03]" />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/[0.36] via-transparent to-transparent" />

                  {/* Accent line */}
                  <div
                    className="industry-accent-v2 absolute left-0 top-0 z-20 h-1 w-full"
                    style={{ background: gradients.primary }}
                  />

                  <div
                    className={[
                      "relative z-10 flex h-full flex-col p-5 sm:p-6",
                      industry.cardHeight,
                    ].join(" ")}
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-black/20 text-white shadow-xl backdrop-blur-xl">
                        <IndustryIcon className="h-5 w-5" />
                      </div>

                      <span className="text-[10px] font-bold tracking-[0.16em] text-white/65">
                        {industry.number}
                      </span>
                    </div>

                    {/* Bottom content */}
                    <div
                      className={[
                        "mt-auto",
                        industry.featured ? "max-w-2xl pt-24" : "max-w-3xl pt-16",
                      ].join(" ")}
                    >
                      <p
                        className="text-[9px] font-bold uppercase tracking-[0.16em]"
                        style={{ color: colors.brand.accent }}
                      >
                        {industry.eyebrow}
                      </p>

                      <h3
                        className={[
                          "mt-2 font-bold leading-[1.18] tracking-[-0.025em] text-white",
                          industry.featured
                            ? "text-2xl sm:text-3xl"
                            : "text-xl sm:text-2xl",
                        ].join(" ")}
                      >
                        {industry.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-xs leading-[1.75] text-white/[0.76] sm:text-sm">
                        {industry.description}
                      </p>

                      {/* Sector tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {industry.sectors.map((sector) => (
                          <span
                            key={sector}
                            className="rounded-full border border-white/25 bg-black/20 px-2.5 py-1.5 text-[9px] font-semibold text-white/80 backdrop-blur-md"
                          >
                            {sector}
                          </span>
                        ))}
                      </div>

                      {/* Card footer */}
                      <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4">
                        <span className="text-xs font-bold text-white">
                          {industry.linkText}
                        </span>

                        <span
                          className="industry-arrow-v2 flex h-9 w-9 items-center justify-center rounded-full text-white shadow-lg"
                          style={{ background: gradients.primary }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ============================================
            INDUSTRY EXPERTISE STRIP
        ============================================ */}
        <ScrollReveal delay={0.28}>
          <div className="mt-7 overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-[0_18px_60px_rgba(0,1,49,0.08)] backdrop-blur-xl">
            <div className="grid sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Sector Context",
                  text: "We understand the commercial forces shaping each market.",
                },
                {
                  number: "02",
                  title: "Audience Precision",
                  text: "Messaging is built around real buyer needs and behaviour.",
                },
                {
                  number: "03",
                  title: "Relevant Execution",
                  text: "Channels and campaigns reflect how each sector buys.",
                },
              ].map((item, index) => (
                <div
                  key={item.number}
                  className={[
                    "px-5 py-5",
                    index < 2
                      ? "border-b border-gray-200 sm:border-b-0 sm:border-r"
                      : "",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: colors.brand.secondary }}
                    >
                      {item.number}
                    </span>

                    <div>
                      <p
                        className="text-sm font-bold"
                        style={{ color: colors.brand.primary }}
                      >
                        {item.title}
                      </p>

                      <p className="mt-1 text-[10px] leading-[1.65] text-gray-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            FINAL CTA
        ============================================ */}
        <ScrollReveal delay={0.34}>
          <div
            className="mt-5 overflow-hidden rounded-2xl shadow-[0_22px_65px_rgba(0,1,49,0.16)]"
            style={{ backgroundColor: colors.brand.primary }}
          >
            <div className="grid items-center lg:grid-cols-[1fr_auto]">
              <div className="flex items-start gap-4 px-5 py-5 sm:px-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08]">
                  <Building2
                    className="h-5 w-5"
                    style={{ color: colors.brand.accent }}
                  />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                    Industry Knowledge Connected to Growth
                  </p>

                  <p className="mt-1 text-sm font-bold leading-relaxed text-white sm:text-base">
                    Your marketing system should reflect how your market
                    actually works—not follow a generic agency formula.
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-white/50">
                    Explore our sector expertise and industry-specific
                    capabilities.
                  </p>
                </div>
              </div>

              <Link
                to="/industries"
                className="group flex h-full items-center justify-center gap-2 border-t border-white/15 px-7 py-5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/[0.08] lg:border-l lg:border-t-0"
              >
                Explore All Industries

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: colors.brand.accent }}
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>




{/* ============================================
    19. STRATEGIC INTELLIGENCE / NEWSLETTER
============================================ */}
<ModernSectionBackground
  variant="glass-blur"
  className="relative overflow-hidden"
>
  <Section
    spacing="base"
    animate
    background="transparent"
    className="newsletter-intelligence-v2 relative isolate overflow-hidden"
  >
    {/* ============================================
        SECTION-SPECIFIC CSS
    ============================================ */}
    <style>
      {`
        /* Background slideshow */
        .newsletter-intelligence-v2 .newsletter-bg-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transform: scale(1.045);
          animation: newsletterBackgroundSlide 24s infinite;
          will-change: opacity, transform;
        }

        .newsletter-intelligence-v2 .newsletter-bg-slide:nth-child(1) {
          animation-delay: 0s;
        }

        .newsletter-intelligence-v2 .newsletter-bg-slide:nth-child(2) {
          animation-delay: 8s;
        }

        .newsletter-intelligence-v2 .newsletter-bg-slide:nth-child(3) {
          animation-delay: 16s;
        }

        @keyframes newsletterBackgroundSlide {
          0% {
            opacity: 0;
            transform: scale(1.045);
          }

          6% {
            opacity: 1;
          }

          30% {
            opacity: 1;
          }

          38% {
            opacity: 0;
            transform: scale(1);
          }

          100% {
            opacity: 0;
            transform: scale(1);
          }
        }

        /* Keeps NewsletterSignup properly full-width */
        .newsletter-intelligence-v2 .newsletter-signup-wrapper {
          width: 100%;
          max-width: 100%;
          min-width: 0;
        }

        .newsletter-intelligence-v2
          .newsletter-signup-wrapper
          > * {
          width: 100% !important;
          max-width: none !important;
          min-width: 0 !important;
          margin: 0 !important;
        }

        /* Removes unnecessary outer backgrounds from component root */
        .newsletter-intelligence-v2
          .newsletter-signup-wrapper
          > * {
          background: transparent !important;
          box-shadow: none !important;
        }

        .newsletter-intelligence-v2 .newsletter-benefit-card {
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background-color 0.3s ease;
        }

        .newsletter-intelligence-v2 .newsletter-benefit-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 255, 255, 0.32);
          background-color: rgba(255, 255, 255, 0.12);
        }

        @media (prefers-reduced-motion: reduce) {
          .newsletter-intelligence-v2 .newsletter-bg-slide {
            animation: none;
            transform: none;
          }

          .newsletter-intelligence-v2 .newsletter-bg-slide:first-child {
            opacity: 1;
          }

          .newsletter-intelligence-v2 .newsletter-benefit-card {
            transition: none;
          }
        }
      `}
    </style>

    {/* ============================================
        FULL-SECTION IMAGE BACKGROUND
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#11131a]"
    >
      <div className="absolute inset-0">
        {/* Strategic planning */}
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=90"
          alt=""
          loading="eager"
          decoding="async"
          className="newsletter-bg-slide object-center"
        />

        {/* Executive discussion */}
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=90"
          alt=""
          loading="lazy"
          decoding="async"
          className="newsletter-bg-slide object-center"
        />

        {/* Business intelligence */}
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=90"
          alt=""
          loading="lazy"
          decoding="async"
          className="newsletter-bg-slide object-center"
        />
      </div>

      {/* Lighter treatment for better image visibility */}
      <div className="absolute inset-0 bg-black/[0.34]" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#080912]/[0.88] via-[#080912]/[0.50] to-[#080912]/[0.26]" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.10] via-transparent to-[#080912]/[0.72]" />

      {/* Focus light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(255,255,255,0.15),transparent_38%)]" />

      {/* Subtle brand glow */}
      <div
        className="absolute -left-48 top-[10%] h-[440px] w-[440px] rounded-full opacity-[0.07] blur-[150px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="absolute -right-48 bottom-[-120px] h-[430px] w-[430px] rounded-full opacity-[0.08] blur-[145px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "78px 78px",
        }}
      />
    </div>

    <Container size="xl">
      <div className="mx-auto max-w-7xl">
        {/* ============================================
            MAIN NEWSLETTER PANEL
        ============================================ */}
        <ScrollReveal>
          <div className="overflow-hidden rounded-[28px] border border-white/25 bg-black/[0.23] shadow-[0_32px_100px_rgba(0,0,0,0.32)] backdrop-blur-xl">
            <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
              {/* ============================================
                  LEFT CONTENT
              ============================================ */}
              <div className="relative px-5 py-7 sm:px-7 sm:py-9 lg:px-9 lg:py-10">
                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className="absolute -left-28 -top-28 h-72 w-72 rounded-full opacity-[0.12] blur-[100px]"
                  style={{ backgroundColor: colors.brand.secondary }}
                />

                <div className="relative z-10">
                  <div
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-4 py-2 backdrop-blur-xl"
                    style={{ color: colors.brand.accent }}
                  >
                    <Lightbulb className="h-3.5 w-3.5" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                      Strategic Intelligence
                    </span>
                  </div>

                  <h2 className="mt-5 max-w-xl text-2xl font-bold leading-[1.1] tracking-[-0.035em] text-white sm:text-3xl lg:text-[40px]">
                    Better Intelligence.
                    <span className="mt-1 block text-white/[0.70]">
                      Better Marketing Decisions.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-[1.8] text-white/[0.72] sm:text-base">
                    Receive practical frameworks, market perspectives, and
                    strategic insights designed to help leadership and
                    marketing teams make clearer, faster, and more commercially
                    relevant decisions.
                  </p>

                  {/* Benefit grid */}
                  <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {[
                      {
                        icon: <TrendingUp className="h-4 w-4" />,
                        title: "Growth Insights",
                        text: "Practical ideas for measurable performance.",
                      },
                      {
                        icon: <Layers className="h-4 w-4" />,
                        title: "Strategic Frameworks",
                        text: "Structured approaches that improve execution.",
                      },
                      {
                        icon: <Sparkles className="h-4 w-4" />,
                        title: "AI Intelligence",
                        text: "Useful perspectives on technology and automation.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="newsletter-benefit-card rounded-xl border border-white/20 bg-black/20 px-4 py-4 backdrop-blur-xl"
                      >
                        <div
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.08]"
                          style={{ color: colors.brand.accent }}
                        >
                          {item.icon}
                        </div>

                        <p className="mt-3 text-xs font-bold text-white">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[10px] leading-[1.6] text-white/50">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Publishing statement */}
                  <div className="mt-6 flex items-center gap-3">
                    <div
                      className="h-1 w-14 shrink-0 rounded-full"
                      style={{ background: gradients.primary }}
                    />

                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/45">
                      Relevant Thinking. No Unnecessary Noise.
                    </p>
                  </div>
                </div>
              </div>

              {/* ============================================
                  RIGHT SIGNUP PANEL
              ============================================ */}
              <div className="border-t border-white/15 bg-white/[0.08] p-4 backdrop-blur-2xl sm:p-6 lg:border-l lg:border-t-0 lg:p-8">
                <div className="flex h-full flex-col rounded-[22px] border border-white/25 bg-white/[0.94] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.20)] sm:p-7">
                  {/* Panel heading */}
                  <div className="border-b border-gray-200 pb-5">
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          color: colors.brand.secondary,
                          backgroundColor: `${colors.brand.secondary}0D`,
                        }}
                      >
                        <Lightbulb className="h-5 w-5" />
                      </div>

                      <div>
                        <p
                          className="text-[9px] font-bold uppercase tracking-[0.16em]"
                          style={{ color: colors.brand.secondary }}
                        >
                          Join the AdvantEdge Insights List
                        </p>

                        <h3
                          className="mt-1 text-lg font-bold tracking-[-0.02em] sm:text-xl"
                          style={{ color: colors.brand.primary }}
                        >
                          Strategic Thinking Delivered Directly
                        </h3>

                        <p className="mt-2 text-xs leading-[1.7] text-gray-500">
                          Curated insights for business leaders, marketing
                          teams, and growth-focused organizations.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Existing newsletter component */}
                  <div className="newsletter-signup-wrapper mt-5 flex-grow">
                    <NewsletterSignup />
                  </div>

                  {/* Trust points */}
                  <div className="mt-5 grid gap-2 border-t border-gray-200 pt-5 sm:grid-cols-3">
                    {[
                      "No spam",
                      "Practical insights",
                      "Easy unsubscribe",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-[10px] font-semibold text-gray-500"
                      >
                        <CheckCircle2
                          className="h-3.5 w-3.5 shrink-0"
                          style={{ color: colors.brand.secondary }}
                        />

                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            SUPPORTING VALUE STRIP
        ============================================ */}
        <ScrollReveal delay={0.14}>
          <div className="mt-5 overflow-hidden rounded-2xl border border-white/20 bg-black/[0.22] shadow-[0_18px_55px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <div className="grid sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Leadership Perspective",
                  text: "Insights focused on business priorities—not marketing trends alone.",
                },
                {
                  number: "02",
                  title: "Actionable Frameworks",
                  text: "Ideas that can be applied across strategy and execution.",
                },
                {
                  number: "03",
                  title: "Commercial Relevance",
                  text: "Content designed around measurable organizational growth.",
                },
              ].map((item, index) => (
                <div
                  key={item.number}
                  className={[
                    "px-5 py-5",
                    index < 2
                      ? "border-b border-white/15 sm:border-b-0 sm:border-r"
                      : "",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: colors.brand.accent }}
                    >
                      {item.number}
                    </span>

                    <div>
                      <p className="text-xs font-bold text-white">
                        {item.title}
                      </p>

                      <p className="mt-1 text-[10px] leading-[1.65] text-white/50">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            BACKGROUND SLIDER INDICATOR
        ============================================ */}
        <ScrollReveal delay={0.22}>
          <div className="mt-6 flex items-center justify-center gap-2">
            {[0, 1, 2].map((item) => (
              <span
                key={item}
                className="relative h-1 w-9 overflow-hidden rounded-full bg-white/20"
              >
                <motion.span
                  className="block h-full w-full origin-left"
                  style={{ background: gradients.primary }}
                  animate={{
                    scaleX: [0, 1, 1, 0],
                    opacity: [0.2, 1, 1, 0.2],
                  }}
                  transition={{
                    duration: 8,
                    delay: item * 8,
                    repeat: Infinity,
                    repeatDelay: 16,
                    ease: "linear",
                  }}
                />
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>





{/* ============================================
    20. INSIGHTS & BLOG PREVIEW
============================================ */}
<ModernSectionBackground
  variant="glass-blur"
  className="relative overflow-hidden"
>
  <Section
    spacing="base"
    animate
    background="transparent"
    className="insights-section-v3 relative isolate overflow-hidden"
  >
    {/* ============================================
        SECTION-SPECIFIC STYLES
    ============================================ */}
    <style>
      {`
        .insights-section-v3 .blog-preview-fullwidth {
          width: 100%;
          min-width: 0;
          max-width: none;
        }

        .insights-section-v3 .blog-preview-fullwidth > * {
          width: 100% !important;
          min-width: 0 !important;
          max-width: none !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }

        .insights-section-v3
          .blog-preview-fullwidth
          :where([class*="max-w-"], [class*="container"]) {
          max-width: none !important;
        }

        .insights-section-v3 .insight-topic {
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .insights-section-v3 .insight-topic:hover {
          transform: translateY(-2px);
          border-color: ${colors.brand.secondary}33;
          background-color: ${colors.brand.secondary}08;
          box-shadow: 0 10px 28px rgba(0, 1, 49, 0.07);
        }

        @media (prefers-reduced-motion: reduce) {
          .insights-section-v3 .insight-topic {
            transition: none;
          }
        }
      `}
    </style>

    {/* ============================================
        EDITORIAL BACKGROUND
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#f7f8fc]"
    >
      {/* Editorial image */}
      <img
        src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=2400&q=88"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute right-0 top-0 h-full w-[62%] object-cover object-center opacity-[0.08] grayscale"
      />

      {/* Readability treatment */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f8fc] via-[#f7f8fc]/95 to-[#f7f8fc]/78" />

      {/* Brand atmosphere */}
      <div
        className="absolute -left-56 bottom-[-150px] h-[500px] w-[500px] rounded-full opacity-[0.055] blur-[155px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="absolute -right-52 top-[-130px] h-[470px] w-[470px] rounded-full opacity-[0.09] blur-[150px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,1,49,0.038) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.038) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(247,248,252,0.86)_100%)]" />
    </div>

    <Container size="xl">
      <div className="mx-auto max-w-7xl">
        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="grid items-end gap-7 lg:grid-cols-[1fr_0.42fr]">
            {/* Main heading */}
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
                style={{
                  color: colors.brand.secondary,
                  borderColor: `${colors.brand.secondary}22`,
                  backgroundColor: `${colors.brand.secondary}08`,
                }}
              >
                <Lightbulb className="h-3.5 w-3.5" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                  Insights & Resources
                </span>
              </div>

              <h2
                className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-0.035em] sm:text-3xl lg:text-[42px]"
                style={{ color: colors.brand.primary }}
              >
                Strategic Thinking for
                <span className="mt-1 block text-gray-500">
                  Better Business Decisions.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-[1.8] text-gray-600 sm:text-base">
                Explore practical perspectives, proven frameworks, and market
                intelligence designed to improve marketing decisions,
                execution quality, and commercial performance.
              </p>
            </div>

            {/* Editorial promise */}
            <div className="rounded-2xl border border-gray-200 bg-white/75 p-5 shadow-[0_18px_55px_rgba(0,1,49,0.07)] backdrop-blur-xl">
              <p
                className="text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{ color: colors.brand.secondary }}
              >
                What You Will Find
              </p>

              <div className="mt-4 space-y-3">
                {[
                  "Practical strategic frameworks",
                  "Commercially relevant perspectives",
                  "Ideas designed for real execution",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2
                      className="h-4 w-4 shrink-0"
                      style={{ color: colors.brand.secondary }}
                    />

                    <p className="text-xs font-semibold text-gray-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            CONTENT TOPICS
        ============================================ */}
        <ScrollReveal delay={0.08}>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              {
                icon: <Target className="h-3.5 w-3.5" />,
                title: "Marketing Strategy",
              },
              {
                icon: <Sparkles className="h-3.5 w-3.5" />,
                title: "Brand Leadership",
              },
              {
                icon: <Layers className="h-3.5 w-3.5" />,
                title: "Integrated Marketing",
              },
              {
                icon: <TrendingUp className="h-3.5 w-3.5" />,
                title: "Revenue Growth",
              },
              {
                icon: <Lightbulb className="h-3.5 w-3.5" />,
                title: "AI & Automation",
              },
            ].map((topic) => (
              <div
                key={topic.title}
                className="insight-topic inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/75 px-3.5 py-2 text-[10px] font-bold text-gray-600 backdrop-blur-md"
              >
                <span style={{ color: colors.brand.secondary }}>
                  {topic.icon}
                </span>

                {topic.title}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ============================================
            FULL-WIDTH BLOG CONTENT FRAME
        ============================================ */}
        <ScrollReveal delay={0.14}>
          <div className="relative mt-7 w-full overflow-hidden rounded-[28px] border border-gray-200 bg-white/80 p-3 shadow-[0_30px_95px_rgba(0,1,49,0.11)] backdrop-blur-xl sm:p-5">
            {/* Decorative atmosphere */}
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-[0.08] blur-[100px]"
              style={{ backgroundColor: colors.brand.accent }}
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full opacity-[0.05] blur-[100px]"
              style={{ backgroundColor: colors.brand.secondary }}
            />

            {/* Frame header */}
            <div className="relative z-10 mb-5 grid gap-4 border-b border-gray-200 px-1 pb-5 sm:px-2 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.16em]"
                  style={{ color: colors.brand.secondary }}
                >
                  Featured Strategic Thinking
                </p>

                <h3
                  className="mt-1 text-base font-bold tracking-[-0.015em] sm:text-lg"
                  style={{ color: colors.brand.primary }}
                >
                  Ideas Built for Practical Business Application
                </h3>

                <p className="mt-1 max-w-2xl text-xs leading-[1.7] text-gray-500">
                  Selected perspectives on positioning, customer experience,
                  demand generation, technology, and commercial
                  transformation.
                </p>
              </div>

              <Link
                to="/blog"
                className="group inline-flex w-fit items-center gap-2 rounded-xl border-2 px-4 py-2.5 text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  borderColor: colors.brand.primary,
                  color: colors.brand.primary,
                }}
              >
                View All Insights

                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Existing BlogPreview component */}
            <div className="blog-preview-fullwidth relative z-10 w-full">
              <BlogPreview />
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            EDITORIAL VALUE STRIP
        ============================================ */}
        <ScrollReveal delay={0.22}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-[0_18px_60px_rgba(0,1,49,0.07)] backdrop-blur-xl">
            <div className="grid sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Leadership Perspective",
                  text: "Content focused on business priorities, not surface-level trends.",
                },
                {
                  number: "02",
                  title: "Practical Application",
                  text: "Frameworks designed to guide strategy and improve execution.",
                },
                {
                  number: "03",
                  title: "Commercial Relevance",
                  text: "Ideas connected to positioning, pipeline, conversion, and growth.",
                },
              ].map((item, index) => (
                <div
                  key={item.number}
                  className={[
                    "px-5 py-5",
                    index < 2
                      ? "border-b border-gray-200 sm:border-b-0 sm:border-r"
                      : "",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: colors.brand.secondary }}
                    >
                      {item.number}
                    </span>

                    <div>
                      <p
                        className="text-xs font-bold"
                        style={{ color: colors.brand.primary }}
                      >
                        {item.title}
                      </p>

                      <p className="mt-1 text-[10px] leading-[1.65] text-gray-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            FINAL CTA
        ============================================ */}
        <ScrollReveal delay={0.3}>
          <div
            className="mt-5 overflow-hidden rounded-2xl shadow-[0_22px_70px_rgba(0,1,49,0.17)]"
            style={{ backgroundColor: colors.brand.primary }}
          >
            <div className="grid items-center lg:grid-cols-[1fr_auto]">
              <div className="flex items-start gap-4 px-5 py-5 sm:px-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08]">
                  <Lightbulb
                    className="h-5 w-5"
                    style={{ color: colors.brand.accent }}
                  />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                    Intelligence for Better Decisions
                  </p>

                  <p className="mt-1 text-sm font-bold leading-relaxed text-white sm:text-base">
                    Explore ideas created for leadership teams, marketers, and
                    growth-focused organizations.
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-white/50">
                    Practical thinking that connects marketing decisions with
                    meaningful commercial outcomes.
                  </p>
                </div>
              </div>

              <Link
                to="/blog"
                className="group flex h-full items-center justify-center gap-2 border-t border-white/15 px-7 py-5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/[0.08] lg:border-l lg:border-t-0"
              >
                Visit the Insights Hub

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: colors.brand.accent }}
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>

     


{/* ============================================
    21. FAQ — PREMIUM FULL-WIDTH SECTION
============================================ */}
<ModernSectionBackground
  variant="glass-blur"
  className="relative overflow-hidden"
>
  <Section
    spacing="base"
    animate
    background="transparent"
    className="faq-premium-section relative isolate overflow-hidden"
  >
    {/* ============================================
        SECTION-SPECIFIC STYLES
    ============================================ */}
    <style>
      {`
        .faq-premium-section .faq-accordion-wrap {
          width: 100%;
          min-width: 0;
          max-width: none;
        }

        .faq-premium-section .faq-accordion-wrap > * {
          width: 100% !important;
          min-width: 0 !important;
          max-width: none !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }

        .faq-premium-section .faq-accordion-wrap button {
          width: 100%;
        }

        .faq-premium-section .faq-support-item {
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .faq-premium-section .faq-support-item:hover {
          transform: translateY(-3px);
          border-color: ${colors.brand.secondary}2e;
          background-color: rgba(255, 255, 255, 0.94);
          box-shadow: 0 16px 38px rgba(0, 1, 49, 0.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-premium-section .faq-support-item {
            transition: none;
          }
        }
      `}
    </style>

    {/* ============================================
        FULL SECTION BACKGROUND
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#f7f8fc]"
    >
      {/* Professional image */}
      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=88"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute left-0 top-0 h-full w-full object-cover object-center opacity-[0.13]"
      />

      {/* Light treatment */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f8fc]/95 via-[#f7f8fc]/88 to-[#f7f8fc]/82" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#f7f8fc]/45 via-transparent to-[#f7f8fc]/88" />

      {/* Soft brand atmosphere */}
      <div
        className="absolute -left-52 top-[-100px] h-[470px] w-[470px] rounded-full opacity-[0.055] blur-[150px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="absolute -right-48 bottom-[-130px] h-[450px] w-[450px] rounded-full opacity-[0.10] blur-[145px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.24]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,1,49,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.04) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />
    </div>

    <Container size="xl">
      <div className="mx-auto max-w-7xl">
        {/* ============================================
            TWO-COLUMN FAQ LAYOUT
        ============================================ */}
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-10">
          {/* ============================================
              LEFT — INTRODUCTION
          ============================================ */}
          <ScrollReveal>
            <div className="lg:sticky lg:top-28">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm"
                style={{
                  color: colors.brand.secondary,
                  borderColor: `${colors.brand.secondary}22`,
                  backgroundColor: `${colors.brand.secondary}08`,
                }}
              >
                <Heart className="h-3.5 w-3.5" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                  Questions & Answers
                </span>
              </div>

              <h2
                className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-0.035em] sm:text-3xl lg:text-[42px]"
                style={{ color: colors.brand.primary }}
              >
                Frequently Asked
                <span className="mt-1 block text-gray-500">
                  Questions.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-[1.8] text-gray-600 sm:text-base">
                Clear answers about our approach, capabilities, engagement
                models, performance measurement, and what it is like to partner
                with AdvantEdge.
              </p>

              {/* Quick topics */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {[
                  {
                    icon: <Sparkles className="h-4 w-4" />,
                    title: "Our Difference",
                    text: "How our strategic partnership model works.",
                  },
                  {
                    icon: <LineChart className="h-4 w-4" />,
                    title: "Performance",
                    text: "How marketing success and ROI are measured.",
                  },
                  {
                    icon: <Building2 className="h-4 w-4" />,
                    title: "Who We Serve",
                    text: "Industries, business sizes, and growth stages.",
                  },
                  {
                    icon: <RefreshCw className="h-4 w-4" />,
                    title: "Engagement Process",
                    text: "How projects and partnerships progress.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="faq-support-item rounded-xl border border-gray-200 bg-white/75 px-4 py-4 backdrop-blur-xl"
                  >
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{
                        color: colors.brand.secondary,
                        backgroundColor: `${colors.brand.secondary}0D`,
                      }}
                    >
                      {item.icon}
                    </div>

                    <p
                      className="mt-3 text-xs font-bold"
                      style={{ color: colors.brand.primary }}
                    >
                      {item.title}
                    </p>

                    <p className="mt-1 text-[10px] leading-[1.6] text-gray-500">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Trust statement */}
              <div className="mt-6 rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-[0_16px_45px_rgba(0,1,49,0.06)] backdrop-blur-xl">
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      color: colors.brand.secondary,
                      backgroundColor: `${colors.brand.secondary}0D`,
                    }}
                  >
                    <Shield className="h-4 w-4" />
                  </div>

                  <div>
                    <p
                      className="text-xs font-bold"
                      style={{ color: colors.brand.primary }}
                    >
                      Transparent From the Beginning
                    </p>

                    <p className="mt-1 text-[10px] leading-[1.7] text-gray-500">
                      We define responsibilities, deliverables, success
                      measures, timelines, and reporting expectations before
                      execution begins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ============================================
              RIGHT — FULL-WIDTH ACCORDION
          ============================================ */}
          <ScrollReveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-white/85 p-3 shadow-[0_30px_95px_rgba(0,1,49,0.11)] backdrop-blur-xl sm:p-5 lg:p-6">
              {/* Decorative glows */}
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-60 w-60 rounded-full opacity-[0.08] blur-[95px]"
                style={{ backgroundColor: colors.brand.accent }}
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-24 -left-24 h-60 w-60 rounded-full opacity-[0.05] blur-[95px]"
                style={{ backgroundColor: colors.brand.secondary }}
              />

              {/* Accordion heading */}
              <div className="relative z-10 mb-5 flex flex-col gap-4 border-b border-gray-200 px-1 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: colors.brand.secondary }}
                  >
                    Partnership Information
                  </p>

                  <h3
                    className="mt-1 text-base font-bold tracking-[-0.015em] sm:text-lg"
                    style={{ color: colors.brand.primary }}
                  >
                    Everything You Need to Know Before Getting Started
                  </h3>

                  <p className="mt-1 max-w-xl text-xs leading-[1.7] text-gray-500">
                    Select a question to learn more about our model, process,
                    services, and performance approach.
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2">
                  <CheckCircle2
                    className="h-3.5 w-3.5"
                    style={{ color: colors.brand.secondary }}
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-gray-500">
                    Clear & Transparent
                  </span>
                </div>
              </div>

              {/* Existing accordion component */}
              <div className="faq-accordion-wrap relative z-10 w-full">
                <Accordion items={faqItems} />
              </div>

              {/* Accordion footer */}
              <div className="relative z-10 mt-5 flex flex-col gap-4 border-t border-gray-200 px-1 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p
                    className="text-xs font-bold"
                    style={{ color: colors.brand.primary }}
                  >
                    Have a question that is not listed?
                  </p>

                  <p className="mt-1 text-[10px] leading-relaxed text-gray-500">
                    Speak directly with our team about your goals, priorities,
                    and current marketing challenges.
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-bold text-white shadow-[0_14px_35px_rgba(0,0,170,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(0,0,170,0.25)]"
                  style={{ background: gradients.primary }}
                >
                  Ask Our Team

                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ============================================
            BOTTOM PARTNERSHIP STRIP
        ============================================ */}
        <ScrollReveal delay={0.2}>
          <div
            className="mt-7 overflow-hidden rounded-2xl shadow-[0_22px_70px_rgba(0,1,49,0.16)]"
            style={{ backgroundColor: colors.brand.primary }}
          >
            <div className="grid items-center lg:grid-cols-[1fr_auto]">
              <div className="flex items-start gap-4 px-5 py-5 sm:px-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08]">
                  <Heart
                    className="h-5 w-5"
                    style={{ color: colors.brand.accent }}
                  />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                    Start With a Clear Conversation
                  </p>

                  <p className="mt-1 text-sm font-bold leading-relaxed text-white sm:text-base">
                    Tell us where your marketing is today and where the business
                    needs it to go.
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-white/50">
                    We will help identify the strategic, operational, and
                    technology gaps limiting growth.
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                className="group flex h-full items-center justify-center gap-2 border-t border-white/15 px-7 py-5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/[0.08] lg:border-l lg:border-t-0"
              >
                Start the Conversation

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: colors.brand.accent }}
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>
   
    </PageBackground>
  );
}

export default HomePage;
