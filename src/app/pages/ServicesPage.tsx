/**
 * ============================================
 * SERVICES PAGE - Our Capabilities
 * ============================================
 * SMALL Typography matching Home.tsx
 * ============================================
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Rocket, 
  Award, 
  MonitorSmartphone, 
  Megaphone, 
  FileText, 
  Search,
  Target,
  BarChart3,
  Share2,
  Edit3,
  Zap,
  Globe,
  TrendingUp,
  CheckCircle2,
  Layers,
  Users,
  Eye,
  Lightbulb,
  Brain,
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
import { BentoGrid, BentoCard } from '../components/BentoGrid';
import { Accordion } from '../components/Accordion';
import { HorizontalCarousel } from '../components/Carousel';
import { ScrollReveal, StaggerContainer, staggerItemVariants } from '../components/ScrollReveal';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import { ModernSectionBackground } from '../components/ModernSectionBackground';
import { ImageFeatureCard } from '../components/ImageFeatureCard';
import { OptimizedImage } from '../components/OptimizedImage';

// Design Tokens
import { colors, gradients } from '../../styles/design-tokens';

// ============================================
// DATA DEFINITIONS
// ============================================

const coreServices = [
  {
    icon: <Rocket className="w-7 h-7" />,
    title: 'Strategic Marketing',
    introLine: 'Growth without strategy creates activity — not market leadership.',
    description: 'We build revenue-aligned marketing strategies designed around positioning, demand generation, customer acquisition, and scalable business growth.',
    sectionId: 'strategic-planning',
    services: [
      'Market positioning & competitive analysis',
      'Strategic brand positioning',
      'Customer segmentation & ICP definition',
      'Go-to-market strategy',
      'Portfolio & pricing strategy',
      'Demand generation strategy',
      'Revenue-focused funnel architecture',
      'KPI & growth measurement systems',
    ],
  },
  {
    icon: <MonitorSmartphone className="w-7 h-7" />,
    title: 'Integrated Marketing',
    introLine: 'Disconnected channels create inconsistent growth.',
    description: 'We connect digital, offline, content, media, and automation into one integrated marketing ecosystem aligned to revenue goals.',
    sectionId: 'digital-marketing',
    services: [
      'Omnichannel campaign strategy & execution',
      'Social media management & optimization',
      'SEO, AEO & GEO',
      'Paid media (Google, LinkedIn, Meta)',
      'LinkedIn management & thought leadership',
      'Content strategy & production',
      'Email marketing & automation',
      'CRM & marketing integration',
      'Conversion optimization',
      'Analytics, attribution & reporting',
    ],
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: 'AI Solutions',
    introLine: 'AI should improve revenue operations — not just automate tasks.',
    description: 'We implement AI-powered systems across customer engagement, lead qualification, CRM workflows, and sales processes to improve efficiency, conversion, and pipeline velocity.',
    sectionId: 'ai-marketing-solutions',
    services: [
      'Lead qualification through customer engagement systems',
      'AI-driven CRM integration',
      'Sales workflow automation',
      'Lead nurturing & revival systems',
      'Automated upselling, cross-selling & negotiation',
      'Predictive analytics & insights',
      'AI-powered reporting & intelligence',
    ],
  },
];

const positioningDetails = [
  {
    id: 'pos-1',
    title: 'Positioning Strategy',
    icon: <Target className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Define a differentiated market position aligned to customer needs, competitive gaps, and long-term business growth. Strong positioning creates pricing power, market clarity, and sales confidence.',
  },
  {
    id: 'pos-2',
    title: 'Value Proposition & Market Differentiation',
    icon: <Lightbulb className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Define how your business competes, communicates value, and stands apart in crowded markets through clear positioning and differentiated messaging frameworks.',
  },
  {
    id: 'pos-3',
    title: 'Messaging Frameworks',
    icon: <Edit3 className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Create consistent communication systems across campaigns, sales conversations, digital platforms, and customer touchpoints — ensuring one unified brand narrative.',
  },
  {
    id: 'pos-4',
    title: 'Executive Thought Leadership',
    icon: <Eye className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Strengthen authority through leadership-driven content, strategic communication, and industry positioning that builds credibility and competitive advantage.',
  },
];

const executionDetails = [
  {
    id: 'exec-1',
    title: 'Paid Media & Performance Marketing',
    icon: <Target className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Performance-focused campaigns designed to generate qualified traffic, improve conversion rates, and maximize return on ad spend across Google, LinkedIn, Meta, and other high-impact platforms.',
  },
  {
    id: 'exec-2',
    title: 'SEO, AEO & GEO',
    icon: <Search className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Search visibility strategies designed for modern search behavior — from traditional SEO to Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO).',
  },
  {
    id: 'exec-3',
    title: 'Email Marketing & Automation',
    icon: <Zap className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Automated customer journeys, lead nurturing systems, and lifecycle campaigns designed to improve engagement and accelerate conversions across the entire funnel.',
  },
  {
    id: 'exec-4',
    title: 'LinkedIn Management & Personal Branding',
    icon: <Users className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Executive positioning and LinkedIn growth strategies that strengthen professional credibility, thought leadership, and B2B visibility for business leaders.',
  },
  {
    id: 'exec-5',
    title: 'CRM & Funnel Integration',
    icon: <Layers className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Integrated CRM systems aligned with marketing, sales, lead tracking, customer journeys, and conversion workflows — connecting every growth channel into one system.',
  },
  {
    id: 'exec-6',
    title: 'Content & Thought Leadership',
    icon: <FileText className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Strategic content systems that strengthen authority, improve visibility, and position your business leadership as industry experts — aligned to revenue goals and customer journeys.',
  },
  {
    id: 'exec-7',
    title: 'Reporting & Attribution',
    icon: <BarChart3 className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Unified reporting systems that connect marketing performance directly to pipeline growth, customer acquisition, and revenue outcomes — enabling continuous optimization.',
  },
  {
    id: 'exec-8',
    title: 'Customer Perception Alignment',
    icon: <Eye className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Ensure your positioning, messaging, customer experience, and marketing execution communicate one consistent brand narrative across every touchpoint.',
  },
];

const aiDetails = [
  {
    id: 'ai-1',
    title: 'Industry-Specific AI Systems',
    icon: <Brain className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'AI solutions customized around your industry dynamics, go-to-market model, operational challenges, and market requirements — ensuring every workflow aligns with real business outcomes instead of generic automation.',
  },
  {
    id: 'ai-2',
    title: 'AI-Powered Go-To-Market Execution',
    icon: <Rocket className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'AI-integrated GTM systems designed to support product launches, market expansion, customer acquisition, lead nurturing, and demand generation across multiple channels and customer touchpoints.',
  },
  {
    id: 'ai-3',
    title: 'AI-Driven Customer Engagement',
    icon: <Sparkles className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Real-time AI interactions designed to engage customers, answer queries, guide decision-making, recommend solutions, and improve customer experience across digital touchpoints.',
  },
  {
    id: 'ai-4',
    title: 'Lead Qualification, CRM & Conversion Optimization',
    icon: <Target className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'AI-powered systems designed to identify high-intent prospects, automate lead qualification, optimize CRM workflows, prioritize sales opportunities, and improve conversion rates across the entire customer journey.',
  },
  {
    id: 'ai-5',
    title: 'Average Order Value & Revenue Growth',
    icon: <TrendingUp className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'AI-driven recommendation systems, upsell workflows, cross-sell strategies, and customer intelligence models designed to increase average order value and maximize customer lifetime value.',
  },
];

const processSteps = [
  {
    id: 'step-1',
    number: '01',
    title: 'Discovery & Revenue Audit',
    description: 'We assess your market positioning, demand generation systems, marketing performance, CRM workflows, customer journeys, and growth bottlenecks.',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-gray-700 leading-relaxed">
          A comprehensive audit across your entire growth system — identifying gaps, opportunities, and the highest-leverage areas for improvement.
        </p>
        <ul className="space-y-2">
          {['Business & market analysis', 'Competitive research', 'Funnel & CRM evaluation', 'Channel performance review', 'Customer journey analysis'].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Growth System Blueprint',
    description: 'We design a connected strategy integrating positioning, channel execution, AI workflows, and revenue operations.',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-gray-700 leading-relaxed">
          Strategy that connects every growth lever — from positioning and messaging to channel execution and AI integration — into one scalable system.
        </p>
        <ul className="space-y-2">
          {['Growth roadmap creation', 'Go-to-market planning', 'Messaging & positioning strategy', 'AI & automation planning', 'KPI & reporting framework'].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Integrated Execution',
    description: 'Campaigns, automation, CRM alignment, content, and performance systems implemented through a unified execution framework.',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-gray-700 leading-relaxed">
          Execution across every growth channel — aligned to one strategy, one message, and one revenue objective.
        </p>
        <ul className="space-y-2">
          {['Campaign deployment', 'Omnichannel execution', 'CRM & AI implementation', 'Automation workflows', 'Content & communication systems'].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Optimization & Scale',
    description: 'We continuously optimize conversion performance, channel efficiency, customer journeys, and pipeline growth.',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-gray-700 leading-relaxed">
          Continuous optimization ensures your growth system improves over time — scaling what works and refining what doesn't.
        </p>
        <ul className="space-y-2">
          {['Performance monitoring', 'Conversion optimization', 'Reporting & insights', 'Funnel refinement', 'Scaling high-performing channels'].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
];

const benefits = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Business-Led Thinking',
    description: 'Built by leaders with business, strategy, and operational experience — not just campaign execution.',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Strategy + Execution + AI',
    description: 'One integrated system instead of disconnected vendors, tools, and agencies.',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Revenue-Focused Approach',
    description: 'Every initiative is aligned to pipeline growth, customer acquisition, and measurable business outcomes.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Built for Scale',
    description: 'Processes, automation, and reporting frameworks designed for long-term operational growth.',
  },
];

export function ServicesPage() {
  return (
    <PageBackground>
      <PageSEO
        title={PAGE_SEO.services.title}
        description={PAGE_SEO.services.description}
        keywords={PAGE_SEO.services.keywords}
        ogImage={PAGE_SEO.services.ogImage}
        path="/services"
        showFAQ={true}
        faqKey="services"
      />
     


{/* ============================================
    1. SERVICES HERO — IMMERSIVE CAPABILITIES
============================================ */}
<section className="services-hero-v2 relative isolate min-h-[720px] overflow-hidden bg-[#080912] lg:min-h-[760px]">
  {/* ============================================
      SELF-CONTAINED HERO ANIMATIONS
  ============================================ */}
  <style>
    {`
      .services-hero-v2 .services-hero-slide {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        opacity: 0;
        transform: scale(1.055);
        animation: servicesHeroCrossfade 24s infinite;
        will-change: opacity, transform;
      }

      .services-hero-v2 .services-hero-slide:nth-child(1) {
        animation-delay: 0s;
      }

      .services-hero-v2 .services-hero-slide:nth-child(2) {
        animation-delay: 8s;
      }

      .services-hero-v2 .services-hero-slide:nth-child(3) {
        animation-delay: 16s;
      }

      @keyframes servicesHeroCrossfade {
        0% {
          opacity: 0;
          transform: scale(1.055);
        }

        6% {
          opacity: 1;
        }

        31% {
          opacity: 1;
        }

        39% {
          opacity: 0;
          transform: scale(1);
        }

        100% {
          opacity: 0;
          transform: scale(1);
        }
      }

      .services-hero-v2 .services-capability-card {
        transition:
          transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
          border-color 0.35s ease,
          background-color 0.35s ease,
          box-shadow 0.4s ease;
      }

      .services-hero-v2 .services-capability-card:hover {
        transform: translateY(-6px);
        border-color: rgba(255, 255, 255, 0.34);
        background-color: rgba(255, 255, 255, 0.13);
        box-shadow: 0 25px 70px rgba(0, 0, 0, 0.28);
      }

      .services-hero-v2 .services-capability-icon {
        transition:
          transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
          background-color 0.35s ease;
      }

      .services-hero-v2
        .services-capability-card:hover
        .services-capability-icon {
        transform: scale(1.06) rotate(-3deg);
        background-color: rgba(255, 255, 255, 0.16);
      }

      .services-hero-v2 .services-capability-arrow {
        opacity: 0;
        transform: translateX(-5px);
        transition:
          opacity 0.3s ease,
          transform 0.3s ease;
      }

      .services-hero-v2
        .services-capability-card:hover
        .services-capability-arrow {
        opacity: 1;
        transform: translateX(0);
      }

      @media (prefers-reduced-motion: reduce) {
        .services-hero-v2 .services-hero-slide {
          animation: none;
          transform: none;
        }

        .services-hero-v2 .services-hero-slide:first-child {
          opacity: 1;
        }

        .services-hero-v2 .services-capability-card,
        .services-hero-v2 .services-capability-icon {
          transition: none;
        }

        .services-hero-v2 .services-capability-card:hover {
          transform: none;
        }
      }
    `}
  </style>

  {/* ============================================
      AUTO-SLIDING BACKGROUND IMAGES
  ============================================ */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
  >
    <img
      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=92"
      alt=""
      loading="eager"
      decoding="async"
      className="services-hero-slide"
    />

    <img
      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=92"
      alt=""
      loading="lazy"
      decoding="async"
      className="services-hero-slide"
    />

    <img
      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=92"
      alt=""
      loading="lazy"
      decoding="async"
      className="services-hero-slide"
    />
  </div>

  {/* ============================================
      CINEMATIC IMAGE TREATMENT
  ============================================ */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10"
  >
    {/* Neutral overlay keeps images visible */}
    <div className="absolute inset-0 bg-black/35" />

    {/* Directional readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#080912]/90 via-[#080912]/58 to-[#080912]/22" />

    <div className="absolute inset-0 bg-gradient-to-b from-[#080912]/35 via-transparent to-[#080912]/92" />

    {/* Soft central light */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_22%,rgba(255,255,255,0.17),transparent_38%)]" />

    {/* Brand atmospheres */}
    <div
      className="absolute -left-52 top-[15%] h-[480px] w-[480px] rounded-full opacity-[0.09] blur-[155px]"
      style={{ backgroundColor: colors.brand.secondary }}
    />

    <div
      className="absolute -right-48 bottom-[-120px] h-[450px] w-[450px] rounded-full opacity-[0.09] blur-[150px]"
      style={{ backgroundColor: colors.brand.accent }}
    />

    {/* Technical grid */}
    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)",
        backgroundSize: "78px 78px",
      }}
    />

    {/* Vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.38)_100%)]" />
  </div>

  {/* ============================================
      HERO CONTENT
  ============================================ */}
  <Container size="xl">
    <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl flex-col justify-center py-20 lg:min-h-[760px] lg:py-24">
      <div className="grid items-end gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        {/* ============================================
            LEFT — PRIMARY MESSAGE
        ============================================ */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-4 py-2 shadow-[0_14px_40px_rgba(0,0,0,0.20)] backdrop-blur-xl"
              style={{ color: colors.brand.accent }}
            >
              <Rocket className="h-3.5 w-3.5" />

              <span className="text-[10px] font-bold uppercase tracking-[0.19em]">
                Our Capabilities
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-4xl text-3xl font-bold leading-[1.05] tracking-[-0.045em] text-white sm:text-4xl lg:text-[58px]"
          >
            Three Disciplines.
            <span className="mt-1 block text-white/70">
              One Connected Revenue Engine.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-3xl text-sm leading-[1.85] text-white/72 sm:text-base lg:text-lg"
          >
            AdvantEdge connects strategic marketing, integrated execution, and
            AI-powered revenue systems into one scalable growth architecture
            designed to strengthen positioning, generate qualified pipeline,
            and improve commercial performance.
          </motion.p>

          {/* Primary actions */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <MagneticButton strength={0.25}>
              <a
                href="#core-services"
                className="group inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-[0_18px_45px_rgba(0,0,170,0.28)] transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: gradients.primary }}
              >
                Explore Our Services

                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </MagneticButton>

            <Link
              to="/contact"
              className="group inline-flex items-center justify-center rounded-xl border border-white/25 bg-black/20 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            >
              Discuss Your Growth Priorities

              <ArrowRight
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: colors.brand.accent }}
              />
            </Link>
          </motion.div>

          {/* Commercial framework */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.52 }}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3"
          >
            {[
              "Positioning",
              "Demand Generation",
              "CRM Integration",
              "AI Automation",
              "Revenue Growth",
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/48">
                  {item}
                </span>

                {index < 4 && (
                  <ArrowRight
                    className="hidden h-3 w-3 sm:block"
                    style={{ color: colors.brand.accent }}
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ============================================
            RIGHT — CAPABILITY SUMMARY
        ============================================ */}
        <motion.div
          initial={{ opacity: 0, x: 26 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.32,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-3"
        >
          {[
            {
              number: "01",
              title: "Strategic Marketing",
              description:
                "Market positioning, go-to-market strategy, demand architecture, and measurable growth planning.",
              icon: <Rocket className="h-5 w-5" />,
              link: "/services/strategic-planning",
            },
            {
              number: "02",
              title: "Integrated Marketing",
              description:
                "Connected digital, content, media, CRM, automation, and customer journey execution.",
              icon: <MonitorSmartphone className="h-5 w-5" />,
              link: "/services/digital-marketing",
            },
            {
              number: "03",
              title: "AI Solutions",
              description:
                "AI-powered engagement, qualification, CRM workflows, conversion, and revenue intelligence.",
              icon: <Brain className="h-5 w-5" />,
              link: "/services/ai-marketing-solutions",
            },
          ].map((item) => (
            <Link
              key={item.number}
              to={item.link}
              className="services-capability-card group relative overflow-hidden rounded-[18px] border border-white/20 bg-black/25 p-4 shadow-[0_16px_45px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-5"
            >
              {/* Accent line */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 top-0 w-1 scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
                style={{
                  background: gradients.primary,
                  transformOrigin: "bottom",
                }}
              />

              <div className="relative z-10 flex items-start gap-4">
                <div
                  className="services-capability-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/[0.08]"
                  style={{ color: colors.brand.accent }}
                >
                  {item.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p
                        className="text-[8px] font-bold uppercase tracking-[0.17em]"
                        style={{ color: colors.brand.accent }}
                      >
                        Capability {item.number}
                      </p>

                      <h2 className="mt-1.5 text-sm font-bold text-white sm:text-base">
                        {item.title}
                      </h2>
                    </div>

                    <ArrowRight className="services-capability-arrow mt-1 h-4 w-4 shrink-0 text-white" />
                  </div>

                  <p className="mt-2 text-[11px] leading-[1.65] text-white/55">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* ============================================
          BOTTOM PERFORMANCE STRIP
      ============================================ */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.65,
          delay: 0.58,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-10 overflow-hidden rounded-2xl border border-white/20 bg-black/20 shadow-[0_20px_65px_rgba(0,0,0,0.20)] backdrop-blur-xl"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Target className="h-4 w-4" />,
              title: "Strategic Clarity",
              text: "A clear direction for growth.",
            },
            {
              icon: <Layers className="h-4 w-4" />,
              title: "Connected Execution",
              text: "Every capability working together.",
            },
            {
              icon: <Brain className="h-4 w-4" />,
              title: "AI-Enabled Systems",
              text: "Automation aligned to revenue.",
            },
            {
              icon: <BarChart3 className="h-4 w-4" />,
              title: "Measurable Outcomes",
              text: "Performance tied to business KPIs.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={[
                "flex items-start gap-3 px-4 py-4 sm:px-5",
                index < 3
                  ? "border-b border-white/15 lg:border-b-0 lg:border-r"
                  : "",
                index === 1
                  ? "sm:border-l sm:border-white/15 lg:border-l-0"
                  : "",
              ].join(" ")}
            >
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.07]"
                style={{ color: colors.brand.accent }}
              >
                {item.icon}
              </div>

              <div>
                <p className="text-xs font-bold text-white">{item.title}</p>

                <p className="mt-1 text-[10px] leading-[1.55] text-white/45">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ============================================
          BACKGROUND SLIDE INDICATOR
      ============================================ */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {[0, 1, 2].map((item) => (
          <span
            key={item}
            className="h-1 w-10 overflow-hidden rounded-full bg-white/20"
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
    </div>
  </Container>
</section>





{/* ============================================
    3. STRATEGIC POSITIONING — MARKET ADVANTAGE
============================================ */}
<ModernSectionBackground
  variant="glass-blur"
  className="relative overflow-hidden"
>
  <Section
    spacing="base"
    animate
    background="transparent"
    className="positioning-v2 relative isolate overflow-hidden"
  >
    {/* ============================================
        SECTION-SPECIFIC STYLES
    ============================================ */}
    <style>
      {`
        .positioning-v2 .positioning-image {
          transition:
            transform 1s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.6s ease;
        }

        .positioning-v2
          .positioning-visual:hover
          .positioning-image {
          transform: scale(1.035);
          filter: saturate(1.06);
        }

        .positioning-v2 .positioning-card {
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.35s ease,
            background-color 0.35s ease,
            box-shadow 0.45s ease;
        }

        .positioning-v2 .positioning-card:hover {
          transform: translateY(-7px);
          border-color: rgba(0, 0, 170, 0.22);
          background-color: rgba(255, 255, 255, 0.98);
          box-shadow:
            0 30px 78px rgba(0, 1, 49, 0.14),
            0 12px 30px rgba(0, 0, 170, 0.05);
        }

        .positioning-v2 .positioning-card-accent {
          transform: scaleX(0.16);
          transform-origin: left;
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .positioning-v2
          .positioning-card:hover
          .positioning-card-accent {
          transform: scaleX(1);
        }

        .positioning-v2 .positioning-card-icon {
          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            background-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .positioning-v2
          .positioning-card:hover
          .positioning-card-icon {
          transform: scale(1.07) rotate(-4deg);
          background-color: rgba(0, 0, 170, 0.1);
          box-shadow: 0 14px 34px rgba(0, 0, 170, 0.1);
        }

        .positioning-v2 .positioning-card-arrow {
          opacity: 0;
          transform: translateX(-5px);
          transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        }

        .positioning-v2
          .positioning-card:hover
          .positioning-card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .positioning-v2 .positioning-flow-card {
          transition:
            transform 0.35s ease,
            background-color 0.35s ease;
        }

        .positioning-v2 .positioning-flow-card:hover {
          transform: translateY(-3px);
          background-color: rgba(255, 255, 255, 0.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .positioning-v2 .positioning-image,
          .positioning-v2 .positioning-card,
          .positioning-v2 .positioning-card-icon,
          .positioning-v2 .positioning-flow-card {
            transition: none;
          }

          .positioning-v2 .positioning-card:hover,
          .positioning-v2
            .positioning-visual:hover
            .positioning-image,
          .positioning-v2 .positioning-flow-card:hover {
            transform: none;
          }
        }
      `}
    </style>

    {/* ============================================
        EDITORIAL BACKGROUND
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#f4f5f9]"
    >
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=86"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute left-0 top-0 h-full w-[52%] object-cover opacity-[0.045] grayscale"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#f4f5f9]/82 via-[#f4f5f9]/96 to-[#f4f5f9]" />

      <div
        className="absolute -left-56 bottom-[-150px] h-[520px] w-[520px] rounded-full opacity-[0.07] blur-[165px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="absolute -right-52 top-[-100px] h-[470px] w-[470px] rounded-full opacity-[0.1] blur-[160px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      <div
        className="absolute inset-0 opacity-[0.26]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,1,49,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.04) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_14%,rgba(244,245,249,0.9)_100%)]" />
    </div>

    <Container size="xl">
      <div className="relative mx-auto max-w-7xl">
        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm"
                style={{
                  borderColor: `${colors.brand.accent}55`,
                  backgroundColor: `${colors.brand.accent}10`,
                  color: colors.brand.primary,
                }}
              >
                <Target
                  className="h-3.5 w-3.5"
                  style={{ color: colors.brand.accent }}
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                  Market Positioning
                </span>
              </div>

              <h2
                className="mt-5 max-w-3xl text-2xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-3xl lg:text-[42px]"
                style={{ color: colors.brand.primary }}
              >
                Positioning That Creates
                <span className="mt-1 block text-gray-500">
                  Defensible Market Advantage.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-[1.8] text-gray-600 sm:text-base">
                Strong positioning defines where your business competes, why
                customers should choose you, and how every marketing and sales
                interaction communicates differentiated value.
              </p>
            </div>

            {/* Positioning principle */}
            <div className="max-w-sm rounded-2xl border border-gray-200 bg-white/85 px-5 py-4 shadow-[0_16px_45px_rgba(0,1,49,0.07)] backdrop-blur-xl">
              <p
                className="text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{ color: colors.brand.secondary }}
              >
                Strategic Principle
              </p>

              <p
                className="mt-2 text-sm font-bold leading-relaxed"
                style={{ color: colors.brand.primary }}
              >
                Better positioning improves market clarity, pricing confidence,
                customer relevance, and sales effectiveness.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            POSITIONING SUMMARY
        ============================================ */}
        <ScrollReveal delay={0.08}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white/85 shadow-[0_18px_55px_rgba(0,1,49,0.07)] backdrop-blur-xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Market Clarity",
                  text: "Define the market and customer problem you own.",
                },
                {
                  number: "02",
                  title: "Differentiated Value",
                  text: "Create meaningful separation from competitors.",
                },
                {
                  number: "03",
                  title: "Message Consistency",
                  text: "Align marketing, sales, and customer communication.",
                },
                {
                  number: "04",
                  title: "Commercial Confidence",
                  text: "Improve pricing power and sales conversations.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  whileHover={{
                    backgroundColor: "rgba(0,0,170,0.025)",
                  }}
                  transition={{ duration: 0.3 }}
                  className={[
                    "px-5 py-5",
                    index < 3
                      ? "border-b border-gray-200 lg:border-b-0 lg:border-r"
                      : "",
                    index === 1
                      ? "sm:border-l sm:border-gray-200 lg:border-l-0"
                      : "",
                  ].join(" ")}
                >
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: colors.brand.accent }}
                  >
                    {item.number}
                  </p>

                  <p
                    className="mt-1.5 text-sm font-bold"
                    style={{ color: colors.brand.primary }}
                  >
                    {item.title}
                  </p>

                  <p className="mt-1 text-[10px] leading-[1.6] text-gray-500">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            MAIN POSITIONING EXPERIENCE
        ============================================ */}
        <div className="mt-7 grid items-stretch gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          {/* ============================================
              IMAGE-LED STRATEGY PANEL
          ============================================ */}
          <ScrollReveal>
            <div className="positioning-visual group relative min-h-[570px] overflow-hidden rounded-[28px] border border-white/80 bg-gray-900 shadow-[0_30px_90px_rgba(0,1,49,0.18)]">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1900&q=92"
                alt="Strategic positioning and market planning workshop"
                className="positioning-image absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-[#000131]/96" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/52 via-transparent to-transparent" />

              {/* Top label */}
              <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5 sm:p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-3 py-2 text-white shadow-xl backdrop-blur-xl">
                  <Target
                    className="h-3.5 w-3.5"
                    style={{ color: colors.brand.accent }}
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.16em]">
                    Strategic Foundation
                  </span>
                </div>

                <span className="text-[10px] font-bold tracking-[0.17em] text-white/55">
                  03
                </span>
              </div>

              {/* Main content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.17em]"
                  style={{ color: colors.brand.accent }}
                >
                  Clarity Before Communication
                </p>

                <h3 className="mt-2 max-w-2xl text-2xl font-bold leading-[1.18] tracking-[-0.03em] text-white sm:text-3xl">
                  Define the Position Before Increasing the Promotion.
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-[1.78] text-white/75">
                  More marketing cannot solve unclear positioning. We establish
                  the strategic foundation that guides your brand, messaging,
                  customer experience, campaigns, and sales conversations.
                </p>

                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  {[
                    "Customer Relevance",
                    "Competitive Separation",
                    "Commercial Alignment",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-white/20 bg-black/20 px-3 py-3 backdrop-blur-xl"
                    >
                      <CheckCircle2
                        className="h-3.5 w-3.5 shrink-0"
                        style={{ color: colors.brand.accent }}
                      />

                      <span className="text-[10px] font-semibold text-white/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Outcome statement */}
                <div className="mt-6 border-t border-white/20 pt-5">
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/[0.08]"
                      style={{ color: colors.brand.accent }}
                    >
                      <TrendingUp className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/40">
                        Commercial Outcome
                      </p>

                      <p className="mt-1 text-xs font-semibold leading-relaxed text-white/80">
                        Stronger pricing confidence, clearer sales narratives,
                        and more relevant market communication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ============================================
              INTERACTIVE POSITIONING CARDS
          ============================================ */}
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {positioningDetails.map((item, index) => {
              const outcomes = [
                "Own a clearer market position",
                "Create meaningful differentiation",
                "Communicate one consistent narrative",
                "Build executive market authority",
              ];

              return (
                <motion.div
                  key={item.id}
                  variants={staggerItemVariants}
                  className="min-w-0"
                >
                  <article className="positioning-card group relative flex h-full min-h-[285px] flex-col overflow-hidden rounded-[22px] border border-gray-200 bg-white/85 p-5 shadow-[0_16px_48px_rgba(0,1,49,0.075)] backdrop-blur-xl sm:p-6">
                    {/* Top accent */}
                    <div
                      aria-hidden="true"
                      className="positioning-card-accent absolute left-0 top-0 h-1 w-full"
                      style={{ background: gradients.primary }}
                    />

                    {/* Decorative glow */}
                    <div
                      aria-hidden="true"
                      className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-[0.055] blur-[65px] transition-opacity duration-500 group-hover:opacity-[0.14]"
                      style={{ backgroundColor: colors.brand.secondary }}
                    />

                    <div className="relative z-10 flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className="positioning-card-icon flex h-11 w-11 items-center justify-center rounded-xl border"
                          style={{
                            borderColor: `${colors.brand.secondary}18`,
                            backgroundColor: `${colors.brand.secondary}0D`,
                            color: colors.brand.secondary,
                          }}
                        >
                          {item.icon}
                        </div>

                        <span className="text-[9px] font-bold tracking-[0.16em] text-gray-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3
                        className="mt-6 text-base font-bold leading-[1.28] tracking-[-0.015em] sm:text-lg"
                        style={{ color: colors.brand.primary }}
                      >
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-[1.72] text-gray-600">
                        {item.content}
                      </p>

                      <div className="mt-auto pt-5">
                        <div className="flex items-center justify-between gap-4 border-t border-gray-200 pt-4">
                          <div>
                            <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-gray-400">
                              Strategic Outcome
                            </p>

                            <p
                              className="mt-1 text-[10px] font-bold leading-relaxed"
                              style={{ color: colors.brand.secondary }}
                            >
                              {outcomes[index]}
                            </p>
                          </div>

                          <ArrowRight
                            className="positioning-card-arrow h-4 w-4 shrink-0"
                            style={{ color: colors.brand.accent }}
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>

        {/* ============================================
            POSITIONING ARCHITECTURE
        ============================================ */}
        <ScrollReveal delay={0.18}>
          <div
            className="mt-7 overflow-hidden rounded-[24px] shadow-[0_24px_75px_rgba(0,1,49,0.17)]"
            style={{ backgroundColor: colors.brand.primary }}
          >
            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              {/* Architecture statement */}
              <div className="border-b border-white/15 px-5 py-6 sm:px-7 lg:border-b-0 lg:border-r">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08]">
                  <Target
                    className="h-5 w-5"
                    style={{ color: colors.brand.accent }}
                  />
                </div>

                <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.17em] text-white/45">
                  Positioning Architecture
                </p>

                <h3 className="mt-2 text-xl font-bold leading-[1.25] tracking-[-0.025em] text-white">
                  One strategic narrative connecting every customer
                  interaction.
                </h3>

                <p className="mt-3 text-xs leading-[1.7] text-white/50">
                  Positioning becomes valuable when it shapes marketing,
                  selling, customer experience, and leadership communication.
                </p>
              </div>

              {/* Architecture flow */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    number: "01",
                    title: "Research",
                    text: "Understand customers, competitors, and market gaps.",
                    icon: <Search className="h-4 w-4" />,
                  },
                  {
                    number: "02",
                    title: "Differentiate",
                    text: "Define the value and position your business can own.",
                    icon: <Target className="h-4 w-4" />,
                  },
                  {
                    number: "03",
                    title: "Communicate",
                    text: "Build consistent messages for every touchpoint.",
                    icon: <Edit3 className="h-4 w-4" />,
                  },
                  {
                    number: "04",
                    title: "Activate",
                    text: "Apply the position across marketing and sales.",
                    icon: <Rocket className="h-4 w-4" />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.number}
                    className={[
                      "positioning-flow-card relative px-5 py-6",
                      index < 3
                        ? "border-b border-white/15 lg:border-b-0 lg:border-r"
                        : "",
                      index === 1
                        ? "sm:border-l sm:border-white/15 lg:border-l-0"
                        : "",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.08]"
                        style={{ color: colors.brand.accent }}
                      >
                        {item.icon}
                      </div>

                      <span className="text-[9px] font-bold tracking-[0.15em] text-white/25">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-white">
                      {item.title}
                    </p>

                    <p className="mt-1.5 text-[10px] leading-[1.65] text-white/48">
                      {item.text}
                    </p>

                    {index < 3 && (
                      <ArrowRight className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-white/25 lg:block" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            SECTION CTA
        ============================================ */}
        <ScrollReveal delay={0.24}>
          <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl border border-gray-200 bg-white/85 px-5 py-5 shadow-[0_16px_50px_rgba(0,1,49,0.07)] backdrop-blur-xl sm:flex-row sm:items-center sm:px-7">
            <div>
              <p
                className="text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{ color: colors.brand.secondary }}
              >
                Is Your Market Position Clear?
              </p>

              <p
                className="mt-1 max-w-3xl text-sm font-bold leading-relaxed"
                style={{ color: colors.brand.primary }}
              >
                We identify where your positioning, messaging, and customer
                perception are limiting growth—and build a stronger strategic
                foundation.
              </p>
            </div>

            <Link
              to="/services/strategic-planning"
              className="group inline-flex shrink-0 items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-white shadow-[0_14px_35px_rgba(0,0,170,0.2)] transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: gradients.primary }}
            >
              Explore Strategic Marketing

              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>




{/* ============================================
    4. INTEGRATED EXECUTION — CONNECTED CHANNELS
============================================ */}
<ModernSectionBackground
  variant="gradient-tech"
  className="relative overflow-hidden"
>
  <Section
    id="integrated-execution"
    spacing="base"
    animate
    background="transparent"
    className="integrated-execution-v2 relative isolate overflow-hidden"
  >
    {/* ============================================
        SECTION-SPECIFIC INTERACTIONS
    ============================================ */}
    <style>
      {`
        .integrated-execution-v2 .execution-visual-image {
          transition:
            transform 1.1s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.7s ease;
        }

        .integrated-execution-v2
          .execution-visual:hover
          .execution-visual-image {
          transform: scale(1.035);
          filter: saturate(1.06);
        }

        .integrated-execution-v2 .execution-card {
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.35s ease,
            background-color 0.35s ease,
            box-shadow 0.45s ease;
        }

        .integrated-execution-v2 .execution-card:hover {
          transform: translateY(-7px);
          border-color: rgba(255, 255, 255, 0.32);
          background-color: rgba(255, 255, 255, 0.11);
          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.28),
            0 10px 30px rgba(0, 0, 170, 0.12);
        }

        .integrated-execution-v2 .execution-card-accent {
          transform: scaleX(0.14);
          transform-origin: left;
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .integrated-execution-v2
          .execution-card:hover
          .execution-card-accent {
          transform: scaleX(1);
        }

        .integrated-execution-v2 .execution-card-icon {
          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            background-color 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .integrated-execution-v2
          .execution-card:hover
          .execution-card-icon {
          transform: scale(1.07) rotate(-4deg);
          border-color: rgba(255, 179, 0, 0.38);
          background-color: rgba(255, 179, 0, 0.14);
          box-shadow: 0 14px 35px rgba(255, 179, 0, 0.12);
        }

        .integrated-execution-v2 .execution-arrow {
          opacity: 0;
          transform: translateX(-5px);
          transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        }

        .integrated-execution-v2
          .execution-card:hover
          .execution-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .integrated-execution-v2 .execution-flow-item {
          transition:
            transform 0.35s ease,
            background-color 0.35s ease;
        }

        .integrated-execution-v2 .execution-flow-item:hover {
          transform: translateY(-3px);
          background-color: rgba(255, 255, 255, 0.08);
        }

        .integrated-execution-v2 .execution-signal {
          animation: executionSignalPulse 2.8s ease-in-out infinite;
        }

        .integrated-execution-v2 .execution-signal:nth-child(2) {
          animation-delay: 0.7s;
        }

        .integrated-execution-v2 .execution-signal:nth-child(3) {
          animation-delay: 1.4s;
        }

        .integrated-execution-v2 .execution-signal:nth-child(4) {
          animation-delay: 2.1s;
        }

        @keyframes executionSignalPulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 179, 0, 0.22);
          }

          50% {
            transform: scale(1.08);
            box-shadow: 0 0 0 9px rgba(255, 179, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .integrated-execution-v2 .execution-visual-image,
          .integrated-execution-v2 .execution-card,
          .integrated-execution-v2 .execution-card-icon,
          .integrated-execution-v2 .execution-flow-item {
            transition: none;
          }

          .integrated-execution-v2 .execution-signal {
            animation: none;
          }

          .integrated-execution-v2 .execution-card:hover,
          .integrated-execution-v2
            .execution-visual:hover
            .execution-visual-image,
          .integrated-execution-v2 .execution-flow-item:hover {
            transform: none;
          }
        }
      `}
    </style>

    {/* ============================================
        DARK IMMERSIVE BACKGROUND
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#080912]"
    >
      <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2400&q=88"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.19]"
      />

      {/* Neutral image treatment */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/82 via-[#080912]/72 to-[#080912]/88" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#080912]/68 via-transparent to-[#080912]/96" />

      {/* Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_18%,rgba(255,255,255,0.13),transparent_38%)]" />

      {/* Brand atmosphere */}
      <div
        className="absolute -left-56 top-[16%] h-[520px] w-[520px] rounded-full opacity-[0.11] blur-[165px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="absolute -right-48 bottom-[-120px] h-[470px] w-[470px] rounded-full opacity-[0.09] blur-[155px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      {/* Technical grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.45)_100%)]" />
    </div>

    <Container size="xl">
      <div className="relative mx-auto max-w-7xl">
        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 shadow-[0_14px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                <Zap
                  className="h-3.5 w-3.5"
                  style={{ color: colors.brand.accent }}
                />

                <span
                  className="text-[10px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: colors.brand.accent }}
                >
                  Connected Execution
                </span>
              </div>

              <h2 className="mt-5 max-w-3xl text-2xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-3xl lg:text-[42px]">
                Every Channel Connected.
                <span className="mt-1 block text-white/60">
                  Every Action Aligned to Growth.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-[1.8] text-white/65 sm:text-base">
                Execution becomes effective when campaigns, content, search,
                media, CRM, automation, and customer journeys operate as one
                coordinated revenue system.
              </p>
            </div>

            {/* Execution philosophy */}
            <div className="max-w-sm rounded-2xl border border-white/16 bg-black/20 px-5 py-4 shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <p
                className="text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{ color: colors.brand.accent }}
              >
                Execution Principle
              </p>

              <p className="mt-2 text-sm font-bold leading-relaxed text-white">
                One strategy. One message. One connected customer journey
                across every channel and commercial touchpoint.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            EXECUTION SYSTEM SUMMARY
        ============================================ */}
        <ScrollReveal delay={0.08}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/16 bg-black/20 shadow-[0_20px_65px_rgba(0,0,0,0.22)] backdrop-blur-xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Attract",
                  text: "Create qualified awareness and market visibility.",
                },
                {
                  number: "02",
                  title: "Engage",
                  text: "Deliver relevant communication across touchpoints.",
                },
                {
                  number: "03",
                  title: "Convert",
                  text: "Connect campaigns, CRM, and sales workflows.",
                },
                {
                  number: "04",
                  title: "Optimize",
                  text: "Improve performance through data and attribution.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                  }}
                  transition={{ duration: 0.3 }}
                  className={[
                    "px-5 py-5",
                    index < 3
                      ? "border-b border-white/15 lg:border-b-0 lg:border-r"
                      : "",
                    index === 1
                      ? "sm:border-l sm:border-white/15 lg:border-l-0"
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

                  <p className="mt-1 text-[10px] leading-[1.65] text-white/45">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            MAIN EXECUTION EXPERIENCE
        ============================================ */}
        <div className="mt-7 grid items-start gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          {/* ============================================
              IMAGE-LED EXECUTION PANEL
          ============================================ */}
          <ScrollReveal>
            <div className="execution-visual group relative min-h-[610px] overflow-hidden rounded-[28px] border border-white/20 bg-black shadow-[0_32px_95px_rgba(0,0,0,0.35)] lg:sticky lg:top-28">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1900&q=92"
                alt="Integrated marketing team coordinating campaigns and growth channels"
                className="execution-visual-image absolute inset-0 h-full w-full object-cover object-center"
              />

              {/* Image remains visible */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-[#000131]/96" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/48 via-transparent to-transparent" />

              {/* Header */}
              <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5 sm:p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-3 py-2 text-white shadow-xl backdrop-blur-xl">
                  <Layers
                    className="h-3.5 w-3.5"
                    style={{ color: colors.brand.accent }}
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.16em]">
                    Integrated Delivery System
                  </span>
                </div>

                <span className="text-[10px] font-bold tracking-[0.17em] text-white/55">
                  04
                </span>
              </div>

              {/* Connected signal points */}
              <div className="absolute left-6 top-24 hidden flex-col gap-4 sm:flex">
                {[0, 1, 2, 3].map((point) => (
                  <div
                    key={point}
                    className="execution-signal h-2.5 w-2.5 rounded-full border-2 border-white"
                    style={{ backgroundColor: colors.brand.accent }}
                  />
                ))}
              </div>

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.17em]"
                  style={{ color: colors.brand.accent }}
                >
                  Connected From First Touch to Revenue
                </p>

                <h3 className="mt-2 max-w-xl text-2xl font-bold leading-[1.18] tracking-[-0.03em] text-white sm:text-3xl">
                  Marketing Performs Better When Nothing Operates in Isolation.
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-[1.78] text-white/72">
                  We coordinate every execution layer around shared messaging,
                  customer intent, commercial priorities, and measurable
                  performance objectives.
                </p>

                {/* Integrated capabilities */}
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {[
                    "Unified Campaign Direction",
                    "Connected Customer Journeys",
                    "CRM and Sales Alignment",
                    "Performance Intelligence",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-white/18 bg-black/20 px-3 py-3 backdrop-blur-xl"
                    >
                      <CheckCircle2
                        className="h-3.5 w-3.5 shrink-0"
                        style={{ color: colors.brand.accent }}
                      />

                      <span className="text-[10px] font-semibold text-white/78">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Outcome */}
                <div className="mt-6 border-t border-white/18 pt-5">
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/18 bg-white/[0.08]"
                      style={{ color: colors.brand.accent }}
                    >
                      <TrendingUp className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/40">
                        Execution Outcome
                      </p>

                      <p className="mt-1 text-xs font-semibold leading-relaxed text-white/80">
                        Greater channel efficiency, stronger customer
                        continuity, and clearer contribution to pipeline and
                        revenue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ============================================
              INTERACTIVE EXECUTION CARDS
          ============================================ */}
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {executionDetails.map((item, index) => {
              const outcomes = [
                "Generate qualified demand",
                "Increase search visibility",
                "Automate customer progression",
                "Build executive credibility",
                "Connect marketing and sales",
                "Strengthen authority and trust",
                "Measure commercial contribution",
                "Create one consistent experience",
              ];

              const categories = [
                "Demand Acquisition",
                "Organic Visibility",
                "Lifecycle Automation",
                "B2B Authority",
                "Revenue Operations",
                "Content Systems",
                "Performance Intelligence",
                "Brand Consistency",
              ];

              return (
                <motion.div
                  key={item.id}
                  variants={staggerItemVariants}
                  className="min-w-0"
                >
                  <article className="execution-card group relative flex h-full min-h-[285px] flex-col overflow-hidden rounded-[22px] border border-white/15 bg-black/20 p-5 shadow-[0_16px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-6">
                    {/* Animated accent */}
                    <div
                      aria-hidden="true"
                      className="execution-card-accent absolute left-0 top-0 h-1 w-full"
                      style={{ background: gradients.primary }}
                    />

                    {/* Background glow */}
                    <div
                      aria-hidden="true"
                      className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-[0.08] blur-[65px] transition-opacity duration-500 group-hover:opacity-[0.18]"
                      style={{ backgroundColor: colors.brand.secondary }}
                    />

                    <div className="relative z-10 flex h-full flex-col">
                      {/* Card header */}
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className="execution-card-icon flex h-11 w-11 items-center justify-center rounded-xl border border-white/16 bg-white/[0.07]"
                          style={{ color: colors.brand.accent }}
                        >
                          {item.icon}
                        </div>

                        <span className="text-[9px] font-bold tracking-[0.16em] text-white/25">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <p
                        className="mt-5 text-[8px] font-bold uppercase tracking-[0.15em]"
                        style={{ color: colors.brand.accent }}
                      >
                        {categories[index]}
                      </p>

                      <h3 className="mt-2 text-base font-bold leading-[1.28] tracking-[-0.015em] text-white sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-[1.72] text-white/56">
                        {item.content}
                      </p>

                      {/* Outcome footer */}
                      <div className="mt-auto pt-5">
                        <div className="flex items-center justify-between gap-4 border-t border-white/15 pt-4">
                          <div>
                            <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-white/30">
                              Business Outcome
                            </p>

                            <p className="mt-1 text-[10px] font-bold leading-relaxed text-white/72">
                              {outcomes[index]}
                            </p>
                          </div>

                          <ArrowRight
                            className="execution-arrow h-4 w-4 shrink-0"
                            style={{ color: colors.brand.accent }}
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>

        {/* ============================================
            CONNECTED EXECUTION FLOW
        ============================================ */}
        <ScrollReveal delay={0.18}>
          <div className="mt-7 overflow-hidden rounded-[24px] border border-white/16 bg-black/20 shadow-[0_24px_75px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              {/* Flow statement */}
              <div className="border-b border-white/15 px-5 py-6 sm:px-7 lg:border-b-0 lg:border-r">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08]">
                  <Zap
                    className="h-5 w-5"
                    style={{ color: colors.brand.accent }}
                  />
                </div>

                <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.17em] text-white/42">
                  Connected Execution Flow
                </p>

                <h3 className="mt-2 text-xl font-bold leading-[1.25] tracking-[-0.025em] text-white">
                  Every interaction moves the customer toward one shared
                  commercial objective.
                </h3>

                <p className="mt-3 text-xs leading-[1.7] text-white/48">
                  Channels are coordinated around audience intent, message
                  consistency, funnel progression, and revenue contribution.
                </p>
              </div>

              {/* Execution flow */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    number: "01",
                    title: "Reach",
                    text: "Connect with the right audiences through the right channels.",
                    icon: <Megaphone className="h-4 w-4" />,
                  },
                  {
                    number: "02",
                    title: "Engage",
                    text: "Deliver relevant messages based on customer context.",
                    icon: <Share2 className="h-4 w-4" />,
                  },
                  {
                    number: "03",
                    title: "Convert",
                    text: "Connect intent, CRM, nurturing, and sales action.",
                    icon: <Target className="h-4 w-4" />,
                  },
                  {
                    number: "04",
                    title: "Improve",
                    text: "Use performance data to continuously optimize results.",
                    icon: <BarChart3 className="h-4 w-4" />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.number}
                    className={[
                      "execution-flow-item relative px-5 py-6",
                      index < 3
                        ? "border-b border-white/15 lg:border-b-0 lg:border-r"
                        : "",
                      index === 1
                        ? "sm:border-l sm:border-white/15 lg:border-l-0"
                        : "",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.07]"
                        style={{ color: colors.brand.accent }}
                      >
                        {item.icon}
                      </div>

                      <span className="text-[9px] font-bold tracking-[0.15em] text-white/25">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-white">
                      {item.title}
                    </p>

                    <p className="mt-1.5 text-[10px] leading-[1.65] text-white/46">
                      {item.text}
                    </p>

                    {index < 3 && (
                      <ArrowRight className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-white/25 lg:block" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            SECTION CTA
        ============================================ */}
        <ScrollReveal delay={0.24}>
          <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/16 bg-black/20 px-5 py-5 shadow-[0_18px_55px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:flex-row sm:items-center sm:px-7">
            <div>
              <p
                className="text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{ color: colors.brand.accent }}
              >
                Are Your Channels Working Together?
              </p>

              <p className="mt-1 max-w-3xl text-sm font-bold leading-relaxed text-white">
                We identify disconnected campaigns, customer journeys, CRM
                workflows, and reporting systems—then connect them around one
                growth strategy.
              </p>
            </div>

            <Link
              to="/services/digital-marketing"
              className="group inline-flex shrink-0 items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-white shadow-[0_16px_40px_rgba(0,0,170,0.25)] transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: gradients.primary }}
            >
              Explore Integrated Marketing

              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>
{/* ============================================
    5. AI-INTEGRATED EXECUTION — REVENUE INTELLIGENCE
============================================ */}
<ModernSectionBackground
  variant="glass-white"
  className="relative overflow-hidden"
>
  <Section
    id="ai-integrated-execution"
    spacing="base"
    animate
    background="transparent"
    className="ai-execution-v2 relative isolate overflow-hidden"
  >
    {/* ============================================
        SECTION-SPECIFIC INTERACTIONS
    ============================================ */}
    <style>
      {`
        .ai-execution-v2 .ai-main-image {
          transition:
            transform 1.1s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.7s ease;
        }

        .ai-execution-v2 .ai-main-panel:hover .ai-main-image {
          transform: scale(1.035);
          filter: saturate(1.06);
        }

        .ai-execution-v2 .ai-capability-card {
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.35s ease,
            box-shadow 0.45s ease,
            background-color 0.35s ease;
        }

        .ai-execution-v2 .ai-capability-card:hover {
          transform: translateY(-7px);
          border-color: rgba(0, 0, 170, 0.22);
          background-color: rgba(255, 255, 255, 0.98);
          box-shadow:
            0 30px 80px rgba(0, 1, 49, 0.14),
            0 12px 30px rgba(0, 0, 170, 0.055);
        }

        .ai-execution-v2 .ai-card-accent {
          transform: scaleX(0.14);
          transform-origin: left;
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ai-execution-v2
          .ai-capability-card:hover
          .ai-card-accent {
          transform: scaleX(1);
        }

        .ai-execution-v2 .ai-card-icon {
          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            background-color 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .ai-execution-v2
          .ai-capability-card:hover
          .ai-card-icon {
          transform: scale(1.08) rotate(-4deg);
          border-color: rgba(0, 0, 170, 0.2);
          background-color: rgba(0, 0, 170, 0.09);
          box-shadow: 0 14px 35px rgba(0, 0, 170, 0.1);
        }

        .ai-execution-v2 .ai-card-arrow {
          opacity: 0;
          transform: translateX(-5px);
          transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        }

        .ai-execution-v2
          .ai-capability-card:hover
          .ai-card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .ai-execution-v2 .ai-system-node {
          animation: aiNodePulse 3s ease-in-out infinite;
        }

        .ai-execution-v2 .ai-system-node:nth-child(2) {
          animation-delay: 0.75s;
        }

        .ai-execution-v2 .ai-system-node:nth-child(3) {
          animation-delay: 1.5s;
        }

        .ai-execution-v2 .ai-system-node:nth-child(4) {
          animation-delay: 2.25s;
        }

        @keyframes aiNodePulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 179, 0, 0.18);
          }

          50% {
            transform: scale(1.08);
            box-shadow: 0 0 0 10px rgba(255, 179, 0, 0);
          }
        }

        .ai-execution-v2 .ai-flow-item {
          transition:
            transform 0.35s ease,
            background-color 0.35s ease;
        }

        .ai-execution-v2 .ai-flow-item:hover {
          transform: translateY(-3px);
          background-color: rgba(0, 0, 170, 0.025);
        }

        @media (prefers-reduced-motion: reduce) {
          .ai-execution-v2 .ai-main-image,
          .ai-execution-v2 .ai-capability-card,
          .ai-execution-v2 .ai-card-icon,
          .ai-execution-v2 .ai-flow-item {
            transition: none;
          }

          .ai-execution-v2 .ai-system-node {
            animation: none;
          }

          .ai-execution-v2 .ai-capability-card:hover,
          .ai-execution-v2 .ai-main-panel:hover .ai-main-image,
          .ai-execution-v2 .ai-flow-item:hover {
            transform: none;
          }
        }
      `}
    </style>

    {/* ============================================
        LIGHT TECHNOLOGY BACKGROUND
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#f7f8fc]"
    >
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2400&q=86"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute right-0 top-0 h-full w-[56%] object-cover opacity-[0.05] grayscale"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f8fc] via-[#f7f8fc]/96 to-[#f7f8fc]/82" />

      <div
        className="absolute -left-52 top-[12%] h-[520px] w-[520px] rounded-full opacity-[0.07] blur-[165px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="absolute -right-44 bottom-[-130px] h-[470px] w-[470px] rounded-full opacity-[0.12] blur-[155px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,1,49,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.04) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(247,248,252,0.9)_100%)]" />
    </div>

    <Container size="xl">
      <div className="relative mx-auto max-w-7xl">
        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm"
                style={{
                  borderColor: `${colors.brand.accent}55`,
                  backgroundColor: `${colors.brand.accent}10`,
                  color: colors.brand.primary,
                }}
              >
                <Brain
                  className="h-3.5 w-3.5"
                  style={{ color: colors.brand.accent }}
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                  AI-Powered Execution
                </span>
              </div>

              <h2
                className="mt-5 max-w-3xl text-2xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-3xl lg:text-[42px]"
                style={{ color: colors.brand.primary }}
              >
                AI Integrated Across
                <span className="mt-1 block text-gray-500">
                  the Complete Revenue System.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-[1.8] text-gray-600 sm:text-base">
                AI creates meaningful value when it is connected to your
                customer journey, CRM, sales process, market strategy, and
                operational workflows—not deployed as an isolated tool.
              </p>
            </div>

            {/* AI principle */}
            <div className="max-w-sm rounded-2xl border border-gray-200 bg-white/85 px-5 py-4 shadow-[0_16px_45px_rgba(0,1,49,0.07)] backdrop-blur-xl">
              <p
                className="text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{ color: colors.brand.secondary }}
              >
                Our AI Principle
              </p>

              <p
                className="mt-2 text-sm font-bold leading-relaxed"
                style={{ color: colors.brand.primary }}
              >
                Automation should improve customer experience, team
                productivity, pipeline velocity, conversion, and revenue.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            AI VALUE STRIP
        ============================================ */}
        <ScrollReveal delay={0.08}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white/85 shadow-[0_18px_55px_rgba(0,1,49,0.07)] backdrop-blur-xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Engage",
                  text: "Create responsive and relevant customer interactions.",
                },
                {
                  number: "02",
                  title: "Qualify",
                  text: "Identify high-intent prospects and prioritize action.",
                },
                {
                  number: "03",
                  title: "Convert",
                  text: "Improve nurturing, sales progression, and decisions.",
                },
                {
                  number: "04",
                  title: "Grow",
                  text: "Increase pipeline speed, order value, and retention.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  whileHover={{
                    backgroundColor: "rgba(0,0,170,0.025)",
                  }}
                  transition={{ duration: 0.3 }}
                  className={[
                    "px-5 py-5",
                    index < 3
                      ? "border-b border-gray-200 lg:border-b-0 lg:border-r"
                      : "",
                    index === 1
                      ? "sm:border-l sm:border-gray-200 lg:border-l-0"
                      : "",
                  ].join(" ")}
                >
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: colors.brand.accent }}
                  >
                    {item.number}
                  </p>

                  <p
                    className="mt-1.5 text-sm font-bold"
                    style={{ color: colors.brand.primary }}
                  >
                    {item.title}
                  </p>

                  <p className="mt-1 text-[10px] leading-[1.65] text-gray-500">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            MAIN AI EXPERIENCE
        ============================================ */}
        <div className="mt-7 grid items-start gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          {/* ============================================
              IMAGE-LED AI PANEL
          ============================================ */}
          <ScrollReveal>
            <div className="ai-main-panel group relative min-h-[640px] overflow-hidden rounded-[28px] border border-white/80 bg-[#080912] shadow-[0_32px_95px_rgba(0,1,49,0.2)] lg:sticky lg:top-28">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1900&q=92"
                alt="AI-powered business intelligence and connected revenue systems"
                className="ai-main-image absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/15 to-[#000131]/97" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/58 via-transparent to-transparent" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.16),transparent_34%)]" />

              {/* Header */}
              <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5 sm:p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-3 py-2 text-white shadow-xl backdrop-blur-xl">
                  <Sparkles
                    className="h-3.5 w-3.5"
                    style={{ color: colors.brand.accent }}
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.16em]">
                    Intelligent Revenue Architecture
                  </span>
                </div>

                <span className="text-[10px] font-bold tracking-[0.17em] text-white/55">
                  05
                </span>
              </div>

              {/* Decorative system nodes */}
              <div className="absolute right-7 top-24 hidden flex-col gap-5 sm:flex">
                {[0, 1, 2, 3].map((node) => (
                  <span
                    key={node}
                    className="ai-system-node h-3 w-3 rounded-full border-2 border-white"
                    style={{ backgroundColor: colors.brand.accent }}
                  />
                ))}
              </div>

              {/* Main content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.17em]"
                  style={{ color: colors.brand.accent }}
                >
                  From Automation to Commercial Intelligence
                </p>

                <h3 className="mt-2 max-w-xl text-2xl font-bold leading-[1.18] tracking-[-0.03em] text-white sm:text-3xl">
                  AI Should Strengthen Decisions, Conversations, and Revenue.
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-[1.78] text-white/74">
                  We design AI systems around real business workflows—connecting
                  customer engagement, lead qualification, CRM activity,
                  pipeline progression, sales actions, and performance
                  intelligence.
                </p>

                {/* System outcomes */}
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {[
                    "Faster Customer Response",
                    "Smarter Lead Prioritization",
                    "Automated Revenue Workflows",
                    "Real-Time Business Intelligence",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-white/18 bg-black/20 px-3 py-3 backdrop-blur-xl"
                    >
                      <CheckCircle2
                        className="h-3.5 w-3.5 shrink-0"
                        style={{ color: colors.brand.accent }}
                      />

                      <span className="text-[10px] font-semibold text-white/78">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Outcome */}
                <div className="mt-6 border-t border-white/18 pt-5">
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/18 bg-white/[0.08]"
                      style={{ color: colors.brand.accent }}
                    >
                      <TrendingUp className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/40">
                        Business Outcome
                      </p>

                      <p className="mt-1 text-xs font-semibold leading-relaxed text-white/80">
                        Faster workflows, better customer engagement, stronger
                        sales productivity, and improved revenue performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ============================================
              INTERACTIVE AI CAPABILITY CARDS
          ============================================ */}
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {aiDetails.map((item, index) => {
              const categories = [
                "Industry Intelligence",
                "Go-To-Market",
                "Customer Experience",
                "Revenue Operations",
                "Revenue Expansion",
              ];

              const outcomes = [
                "AI aligned to your business model",
                "Faster and smarter market execution",
                "More responsive customer journeys",
                "Improved qualification and conversion",
                "Higher order and lifetime value",
              ];

              return (
                <motion.div
                  key={item.id}
                  variants={staggerItemVariants}
                  className={[
                    "min-w-0",
                    index === aiDetails.length - 1
                      ? "sm:col-span-2"
                      : "",
                  ].join(" ")}
                >
                  <article className="ai-capability-card group relative flex h-full min-h-[290px] flex-col overflow-hidden rounded-[22px] border border-gray-200 bg-white/85 p-5 shadow-[0_16px_48px_rgba(0,1,49,0.075)] backdrop-blur-xl sm:p-6">
                    {/* Animated accent */}
                    <div
                      aria-hidden="true"
                      className="ai-card-accent absolute left-0 top-0 h-1 w-full"
                      style={{ background: gradients.primary }}
                    />

                    {/* Background glow */}
                    <div
                      aria-hidden="true"
                      className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-[0.06] blur-[70px] transition-opacity duration-500 group-hover:opacity-[0.15]"
                      style={{ backgroundColor: colors.brand.secondary }}
                    />

                    <div className="relative z-10 flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className="ai-card-icon flex h-11 w-11 items-center justify-center rounded-xl border"
                          style={{
                            borderColor: `${colors.brand.secondary}18`,
                            backgroundColor: `${colors.brand.secondary}0D`,
                            color: colors.brand.secondary,
                          }}
                        >
                          {item.icon}
                        </div>

                        <span className="text-[9px] font-bold tracking-[0.16em] text-gray-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <p
                        className="mt-5 text-[8px] font-bold uppercase tracking-[0.15em]"
                        style={{ color: colors.brand.accent }}
                      >
                        {categories[index]}
                      </p>

                      <h3
                        className="mt-2 text-base font-bold leading-[1.3] tracking-[-0.015em] sm:text-lg"
                        style={{ color: colors.brand.primary }}
                      >
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-[1.72] text-gray-600">
                        {item.content}
                      </p>

                      <div className="mt-auto pt-5">
                        <div className="flex items-center justify-between gap-4 border-t border-gray-200 pt-4">
                          <div>
                            <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-gray-400">
                              System Outcome
                            </p>

                            <p
                              className="mt-1 text-[10px] font-bold leading-relaxed"
                              style={{ color: colors.brand.secondary }}
                            >
                              {outcomes[index]}
                            </p>
                          </div>

                          <ArrowRight
                            className="ai-card-arrow h-4 w-4 shrink-0"
                            style={{ color: colors.brand.accent }}
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>

        {/* ============================================
            AI REVENUE SYSTEM FLOW
        ============================================ */}
        <ScrollReveal delay={0.18}>
          <div
            className="mt-7 overflow-hidden rounded-[24px] shadow-[0_24px_75px_rgba(0,1,49,0.17)]"
            style={{ backgroundColor: colors.brand.primary }}
          >
            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              {/* Flow statement */}
              <div className="border-b border-white/15 px-5 py-6 sm:px-7 lg:border-b-0 lg:border-r">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08]">
                  <Brain
                    className="h-5 w-5"
                    style={{ color: colors.brand.accent }}
                  />
                </div>

                <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.17em] text-white/45">
                  AI Revenue Workflow
                </p>

                <h3 className="mt-2 text-xl font-bold leading-[1.25] tracking-[-0.025em] text-white">
                  Intelligence embedded across the complete customer and
                  revenue journey.
                </h3>

                <p className="mt-3 text-xs leading-[1.7] text-white/50">
                  AI connects engagement, qualification, nurturing, sales,
                  expansion, and reporting into one responsive system.
                </p>
              </div>

              {/* System flow */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    number: "01",
                    title: "Engage",
                    text: "Respond to customers with relevant, contextual interactions.",
                    icon: <Sparkles className="h-4 w-4" />,
                  },
                  {
                    number: "02",
                    title: "Qualify",
                    text: "Identify intent and prioritize high-value opportunities.",
                    icon: <Target className="h-4 w-4" />,
                  },
                  {
                    number: "03",
                    title: "Accelerate",
                    text: "Automate progression across CRM and sales workflows.",
                    icon: <Rocket className="h-4 w-4" />,
                  },
                  {
                    number: "04",
                    title: "Optimize",
                    text: "Use intelligence to improve decisions and revenue.",
                    icon: <BarChart3 className="h-4 w-4" />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.number}
                    className={[
                      "ai-flow-item relative px-5 py-6",
                      index < 3
                        ? "border-b border-white/15 lg:border-b-0 lg:border-r"
                        : "",
                      index === 1
                        ? "sm:border-l sm:border-white/15 lg:border-l-0"
                        : "",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.08]"
                        style={{ color: colors.brand.accent }}
                      >
                        {item.icon}
                      </div>

                      <span className="text-[9px] font-bold tracking-[0.15em] text-white/25">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-white">
                      {item.title}
                    </p>

                    <p className="mt-1.5 text-[10px] leading-[1.65] text-white/48">
                      {item.text}
                    </p>

                    {index < 3 && (
                      <ArrowRight className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-white/25 lg:block" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            AI SYSTEM PRINCIPLES
        ============================================ */}
        <ScrollReveal delay={0.22}>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Business-Specific",
                text: "Built around industry, market, and workflow realities.",
              },
              {
                number: "02",
                title: "Human-Guided",
                text: "Automation supported by judgment and oversight.",
              },
              {
                number: "03",
                title: "System-Integrated",
                text: "Connected to CRM, data, channels, and operations.",
              },
              {
                number: "04",
                title: "Outcome-Measured",
                text: "Evaluated through efficiency, conversion, and revenue.",
              },
            ].map((item) => (
              <motion.div
                key={item.number}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border border-gray-200 bg-white/85 p-4 shadow-[0_12px_35px_rgba(0,1,49,0.055)] backdrop-blur-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{
                      color: colors.brand.secondary,
                      backgroundColor: `${colors.brand.secondary}0D`,
                    }}
                  >
                    <Brain className="h-4 w-4" />
                  </div>

                  <span className="text-[9px] font-bold tracking-[0.15em] text-gray-300">
                    {item.number}
                  </span>
                </div>

                <p
                  className="mt-4 text-xs font-bold"
                  style={{ color: colors.brand.primary }}
                >
                  {item.title}
                </p>

                <p className="mt-1 text-[10px] leading-[1.65] text-gray-500">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* ============================================
            SECTION CTA
        ============================================ */}
        <ScrollReveal delay={0.28}>
          <div className="mt-7 flex flex-col items-start justify-between gap-5 rounded-2xl border border-gray-200 bg-white/85 px-5 py-5 shadow-[0_18px_55px_rgba(0,1,49,0.075)] backdrop-blur-xl sm:flex-row sm:items-center sm:px-7">
            <div>
              <p
                className="text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{ color: colors.brand.secondary }}
              >
                Where Can AI Create the Most Value?
              </p>

              <p
                className="mt-1 max-w-3xl text-sm font-bold leading-relaxed"
                style={{ color: colors.brand.primary }}
              >
                We identify high-impact opportunities across customer
                engagement, CRM, sales workflows, conversion, and revenue
                intelligence.
              </p>
            </div>

            <Link
              to="/services/ai-marketing-solutions"
              className="group inline-flex shrink-0 items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-white shadow-[0_16px_40px_rgba(0,0,170,0.22)] transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: gradients.primary }}
            >
              Explore AI Solutions

              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>
     
     



{/* ============================================
    6. HOW WE WORK — CONNECTED GROWTH PROCESS
============================================ */}
<ModernSectionBackground
  variant="gradient-tech"
  className="relative overflow-hidden"
>
  <Section
    id="our-process"
    spacing="base"
    animate
    background="transparent"
    className="growth-process-v2 relative isolate overflow-hidden"
  >
    {/* ============================================
        SECTION-SPECIFIC INTERACTIONS
    ============================================ */}
    <style>
      {`
        .growth-process-v2 .process-visual-image {
          transition:
            transform 1.1s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.7s ease;
        }

        .growth-process-v2
          .process-visual:hover
          .process-visual-image {
          transform: scale(1.035);
          filter: saturate(1.06);
        }

        .growth-process-v2 .process-card {
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.35s ease,
            box-shadow 0.45s ease,
            background-color 0.35s ease;
        }

        .growth-process-v2 .process-card:hover {
          transform: translateY(-7px);
          border-color: rgba(255, 179, 0, 0.34);
          background-color: rgba(255, 255, 255, 0.99);
          box-shadow:
            0 30px 80px rgba(0, 1, 49, 0.16),
            0 12px 30px rgba(255, 179, 0, 0.07);
        }

        .growth-process-v2 .process-card-accent {
          transform: scaleX(0.16);
          transform-origin: left;
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .growth-process-v2
          .process-card:hover
          .process-card-accent {
          transform: scaleX(1);
        }

        .growth-process-v2 .process-card-icon {
          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.35s ease,
            background-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .growth-process-v2
          .process-card:hover
          .process-card-icon {
          transform: scale(1.07) rotate(-4deg);
          border-color: rgba(0, 0, 170, 0.2);
          background-color: rgba(0, 0, 170, 0.09);
          box-shadow: 0 14px 34px rgba(0, 0, 170, 0.1);
        }

        .growth-process-v2 .process-deliverable {
          transition:
            transform 0.3s ease,
            color 0.3s ease;
        }

        .growth-process-v2
          .process-card:hover
          .process-deliverable {
          color: rgba(0, 1, 49, 0.75);
        }

        .growth-process-v2
          .process-card:hover
          .process-deliverable:nth-child(odd) {
          transform: translateX(2px);
        }

        .growth-process-v2 .process-flow-item {
          transition:
            transform 0.35s ease,
            background-color 0.35s ease;
        }

        .growth-process-v2 .process-flow-item:hover {
          transform: translateY(-3px);
          background-color: rgba(255, 255, 255, 0.08);
        }

        .growth-process-v2 .process-node {
          animation: processNodePulse 2.8s ease-in-out infinite;
        }

        .growth-process-v2 .process-node:nth-child(2) {
          animation-delay: 0.7s;
        }

        .growth-process-v2 .process-node:nth-child(3) {
          animation-delay: 1.4s;
        }

        .growth-process-v2 .process-node:nth-child(4) {
          animation-delay: 2.1s;
        }

        @keyframes processNodePulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 179, 0, 0.22);
          }

          50% {
            transform: scale(1.09);
            box-shadow: 0 0 0 10px rgba(255, 179, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .growth-process-v2 .process-visual-image,
          .growth-process-v2 .process-card,
          .growth-process-v2 .process-card-icon,
          .growth-process-v2 .process-deliverable,
          .growth-process-v2 .process-flow-item {
            transition: none;
          }

          .growth-process-v2 .process-node {
            animation: none;
          }

          .growth-process-v2 .process-card:hover,
          .growth-process-v2
            .process-visual:hover
            .process-visual-image,
          .growth-process-v2 .process-flow-item:hover {
            transform: none;
          }
        }
      `}
    </style>

    {/* ============================================
        DARK PROCESS BACKGROUND
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#080912]"
    >
      <img
        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=88"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.17]"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/84 via-[#080912]/78 to-[#080912]/90" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#080912]/75 via-transparent to-[#080912]/98" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_16%,rgba(255,255,255,0.13),transparent_38%)]" />

      <div
        className="absolute -left-52 top-[18%] h-[520px] w-[520px] rounded-full opacity-[0.1] blur-[165px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="absolute -right-48 bottom-[-140px] h-[470px] w-[470px] rounded-full opacity-[0.09] blur-[155px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_22%,rgba(0,0,0,0.48)_100%)]" />
    </div>

    <Container size="xl">
      <div className="relative mx-auto max-w-7xl">
        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 shadow-[0_14px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                <TrendingUp
                  className="h-3.5 w-3.5"
                  style={{ color: colors.brand.accent }}
                />

                <span
                  className="text-[10px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: colors.brand.accent }}
                >
                  Our Process
                </span>
              </div>

              <h2 className="mt-5 max-w-3xl text-2xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-3xl lg:text-[42px]">
                From Business Diagnosis
                <span className="mt-1 block text-white/60">
                  to Scalable Revenue Growth.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-[1.8] text-white/65 sm:text-base">
                Our structured process connects market strategy, marketing
                execution, CRM, AI, customer journeys, and performance
                intelligence into one measurable growth system.
              </p>
            </div>

            {/* Process principle */}
            <div className="max-w-sm rounded-2xl border border-white/16 bg-black/20 px-5 py-4 shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <p
                className="text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{ color: colors.brand.accent }}
              >
                How We Work
              </p>

              <p className="mt-2 text-sm font-bold leading-relaxed text-white">
                Diagnose before recommending. Design before executing. Measure
                before scaling.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            PROCESS SUMMARY STRIP
        ============================================ */}
        <ScrollReveal delay={0.08}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/16 bg-black/20 shadow-[0_20px_65px_rgba(0,0,0,0.22)] backdrop-blur-xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Discover",
                  text: "Understand the business, market, funnel, and barriers.",
                },
                {
                  number: "02",
                  title: "Design",
                  text: "Build the connected growth architecture and roadmap.",
                },
                {
                  number: "03",
                  title: "Execute",
                  text: "Implement coordinated campaigns, systems, and workflows.",
                },
                {
                  number: "04",
                  title: "Scale",
                  text: "Measure, optimize, and expand what performs.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                  }}
                  transition={{ duration: 0.3 }}
                  className={[
                    "px-5 py-5",
                    index < 3
                      ? "border-b border-white/15 lg:border-b-0 lg:border-r"
                      : "",
                    index === 1
                      ? "sm:border-l sm:border-white/15 lg:border-l-0"
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

                  <p className="mt-1 text-[10px] leading-[1.65] text-white/45">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            MAIN PROCESS EXPERIENCE
        ============================================ */}
        <div className="mt-7 grid items-start gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          {/* ============================================
              PROCESS VISUAL
          ============================================ */}
          <ScrollReveal>
            <div className="process-visual group relative min-h-[660px] overflow-hidden rounded-[28px] border border-white/20 bg-black shadow-[0_32px_95px_rgba(0,0,0,0.36)] lg:sticky lg:top-28">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1900&q=92"
                alt="AdvantEdge team designing an integrated growth strategy"
                className="process-visual-image absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/15 to-[#000131]/97" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/52 via-transparent to-transparent" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_22%,rgba(255,255,255,0.15),transparent_35%)]" />

              {/* Top row */}
              <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5 sm:p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-3 py-2 text-white shadow-xl backdrop-blur-xl">
                  <Layers
                    className="h-3.5 w-3.5"
                    style={{ color: colors.brand.accent }}
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.16em]">
                    Integrated Growth Framework
                  </span>
                </div>

                <span className="text-[10px] font-bold tracking-[0.17em] text-white/55">
                  06
                </span>
              </div>

              {/* Animated process nodes */}
              <div className="absolute right-7 top-24 hidden flex-col gap-5 sm:flex">
                {[0, 1, 2, 3].map((node) => (
                  <span
                    key={node}
                    className="process-node h-3 w-3 rounded-full border-2 border-white"
                    style={{ backgroundColor: colors.brand.accent }}
                  />
                ))}
              </div>

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.17em]"
                  style={{ color: colors.brand.accent }}
                >
                  Structure Creates Scalability
                </p>

                <h3 className="mt-2 max-w-xl text-2xl font-bold leading-[1.18] tracking-[-0.03em] text-white sm:text-3xl">
                  Growth Becomes Repeatable When Strategy and Execution Share
                  One System.
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-[1.78] text-white/75">
                  We do not begin with campaigns or tools. We first understand
                  the commercial problem, then design the connected system
                  required to solve it.
                </p>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {[
                    "Senior Strategic Involvement",
                    "Clear Growth Roadmap",
                    "Connected Implementation",
                    "Continuous Performance Review",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-white/18 bg-black/20 px-3 py-3 backdrop-blur-xl"
                    >
                      <CheckCircle2
                        className="h-3.5 w-3.5 shrink-0"
                        style={{ color: colors.brand.accent }}
                      />

                      <span className="text-[10px] font-semibold text-white/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-white/18 pt-5">
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/18 bg-white/[0.08]"
                      style={{ color: colors.brand.accent }}
                    >
                      <BarChart3 className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/40">
                        Process Outcome
                      </p>

                      <p className="mt-1 text-xs font-semibold leading-relaxed text-white/80">
                        A clearer growth roadmap, stronger execution alignment,
                        and a scalable system for measurable improvement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ============================================
              FOUR PROCESS CARDS
          ============================================ */}
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => {
              const processIcons = [
                <Search className="h-5 w-5" />,
                <Layers className="h-5 w-5" />,
                <Zap className="h-5 w-5" />,
                <TrendingUp className="h-5 w-5" />,
              ];

              const processLabels = [
                "Business Diagnosis",
                "System Architecture",
                "Connected Delivery",
                "Performance Scaling",
              ];

              const processDeliverables = [
                [
                  "Business and market analysis",
                  "Competitive and customer research",
                  "Funnel and CRM evaluation",
                  "Channel performance review",
                  "Customer journey assessment",
                ],
                [
                  "Growth roadmap development",
                  "Go-to-market planning",
                  "Positioning and messaging",
                  "AI and automation planning",
                  "KPI and reporting framework",
                ],
                [
                  "Campaign deployment",
                  "Omnichannel coordination",
                  "CRM and AI implementation",
                  "Automation workflows",
                  "Content and communication systems",
                ],
                [
                  "Performance monitoring",
                  "Conversion optimization",
                  "Reporting and intelligence",
                  "Funnel refinement",
                  "High-performing channel expansion",
                ],
              ];

              const processOutcomes = [
                "Clear understanding of the highest-impact growth opportunities",
                "One connected strategy across marketing, sales, CRM, and AI",
                "Disciplined implementation around one commercial roadmap",
                "Continuous improvement and scalable performance growth",
              ];

              return (
                <motion.div
                  key={step.id}
                  variants={staggerItemVariants}
                  className="min-w-0"
                >
                  <article className="process-card group relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-[22px] border border-gray-200 bg-white/95 p-5 shadow-[0_18px_55px_rgba(0,1,49,0.11)] sm:p-6">
                    {/* Animated accent */}
                    <div
                      aria-hidden="true"
                      className="process-card-accent absolute left-0 top-0 h-1 w-full"
                      style={{ background: gradients.primary }}
                    />

                    {/* Decorative glow */}
                    <div
                      aria-hidden="true"
                      className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-[0.06] blur-[70px] transition-opacity duration-500 group-hover:opacity-[0.16]"
                      style={{ backgroundColor: colors.brand.secondary }}
                    />

                    <div className="relative z-10 flex h-full flex-col">
                      {/* Card header */}
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className="process-card-icon flex h-12 w-12 items-center justify-center rounded-xl border"
                          style={{
                            borderColor: `${colors.brand.secondary}18`,
                            backgroundColor: `${colors.brand.secondary}0D`,
                            color: colors.brand.secondary,
                          }}
                        >
                          {processIcons[index]}
                        </div>

                        <span
                          className="text-3xl font-black tracking-[-0.045em]"
                          style={{ color: `${colors.brand.accent}` }}
                        >
                          {step.number}
                        </span>
                      </div>

                      <p
                        className="mt-5 text-[8px] font-bold uppercase tracking-[0.15em]"
                        style={{ color: colors.brand.secondary }}
                      >
                        {processLabels[index]}
                      </p>

                      <h3
                        className="mt-2 text-base font-bold leading-[1.28] tracking-[-0.015em] sm:text-lg"
                        style={{ color: colors.brand.primary }}
                      >
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-[1.72] text-gray-600">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className="mt-5 border-t border-gray-200 pt-4">
                        <p
                          className="text-[8px] font-bold uppercase tracking-[0.15em]"
                          style={{ color: colors.brand.primary }}
                        >
                          Key Activities
                        </p>

                        <ul className="mt-3 space-y-2">
                          {processDeliverables[index].map((item) => (
                            <li
                              key={item}
                              className="process-deliverable flex items-start gap-2.5 text-[10px] leading-[1.55] text-gray-500"
                            >
                              <span
                                className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ backgroundColor: colors.brand.accent }}
                              />

                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Outcome */}
                      <div className="mt-auto pt-5">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-gray-400">
                            Stage Outcome
                          </p>

                          <p
                            className="mt-1.5 text-[10px] font-bold leading-[1.6]"
                            style={{ color: colors.brand.secondary }}
                          >
                            {processOutcomes[index]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>

        {/* ============================================
            CONNECTED PROCESS FLOW
        ============================================ */}
        <ScrollReveal delay={0.18}>
          <div className="mt-7 overflow-hidden rounded-[24px] border border-white/16 bg-black/20 shadow-[0_24px_75px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              {/* Flow statement */}
              <div className="border-b border-white/15 px-5 py-6 sm:px-7 lg:border-b-0 lg:border-r">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08]">
                  <TrendingUp
                    className="h-5 w-5"
                    style={{ color: colors.brand.accent }}
                  />
                </div>

                <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.17em] text-white/42">
                  One Continuous Growth Cycle
                </p>

                <h3 className="mt-2 text-xl font-bold leading-[1.25] tracking-[-0.025em] text-white">
                  Strategy, execution, measurement, and improvement remain
                  continuously connected.
                </h3>

                <p className="mt-3 text-xs leading-[1.7] text-white/50">
                  The process does not end at launch. Performance insights
                  continuously improve the strategy and execution system.
                </p>
              </div>

              {/* Flow stages */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    number: "01",
                    title: "Diagnose",
                    text: "Identify the business problem and growth opportunity.",
                    icon: <Search className="h-4 w-4" />,
                  },
                  {
                    number: "02",
                    title: "Architect",
                    text: "Design the connected strategy and operating system.",
                    icon: <Layers className="h-4 w-4" />,
                  },
                  {
                    number: "03",
                    title: "Activate",
                    text: "Deploy campaigns, workflows, CRM, content, and AI.",
                    icon: <Rocket className="h-4 w-4" />,
                  },
                  {
                    number: "04",
                    title: "Accelerate",
                    text: "Optimize results and scale high-performing systems.",
                    icon: <BarChart3 className="h-4 w-4" />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.number}
                    className={[
                      "process-flow-item relative px-5 py-6",
                      index < 3
                        ? "border-b border-white/15 lg:border-b-0 lg:border-r"
                        : "",
                      index === 1
                        ? "sm:border-l sm:border-white/15 lg:border-l-0"
                        : "",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.07]"
                        style={{ color: colors.brand.accent }}
                      >
                        {item.icon}
                      </div>

                      <span className="text-[9px] font-bold tracking-[0.15em] text-white/25">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-white">
                      {item.title}
                    </p>

                    <p className="mt-1.5 text-[10px] leading-[1.65] text-white/46">
                      {item.text}
                    </p>

                    {index < 3 && (
                      <ArrowRight className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-white/25 lg:block" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            PROCESS CTA
        ============================================ */}
        <ScrollReveal delay={0.26}>
          <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/16 bg-black/20 px-5 py-5 shadow-[0_18px_55px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:flex-row sm:items-center sm:px-7">
            <div>
              <p
                className="text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{ color: colors.brand.accent }}
              >
                Start With a Growth System Audit
              </p>

              <p className="mt-1 max-w-3xl text-sm font-bold leading-relaxed text-white">
                We assess where strategy, marketing, CRM, sales, data, and AI
                are disconnected—and identify the highest-leverage
                opportunities for improvement.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-white shadow-[0_16px_40px_rgba(0,0,170,0.25)] transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: gradients.primary }}
            >
              Book a Growth Audit

              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>






{/* ============================================
    7. WHY ADVANTEDGE — CONNECTED ADVANTAGE
============================================ */}
<ModernSectionBackground
  variant="glass-blur"
  className="relative overflow-hidden"
>
  <Section
    id="why-advantedge"
    spacing="base"
    animate
    background="transparent"
    className="why-advantedge-v2 relative isolate overflow-hidden"
  >
    {/* ============================================
        SECTION-SPECIFIC INTERACTIONS
    ============================================ */}
    <style>
      {`
        .why-advantedge-v2 .advantage-hero-image,
        .why-advantedge-v2 .advantage-card-image {
          transition:
            transform 1s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.65s ease;
        }

        .why-advantedge-v2
          .advantage-hero-card:hover
          .advantage-hero-image,
        .why-advantedge-v2
          .advantage-card:hover
          .advantage-card-image {
          transform: scale(1.045);
          filter: saturate(1.07);
        }

        .why-advantedge-v2 .advantage-hero-card,
        .why-advantedge-v2 .advantage-card {
          transition:
            transform 0.48s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.35s ease,
            box-shadow 0.48s ease;
        }

        .why-advantedge-v2 .advantage-hero-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 179, 0, 0.34);
          box-shadow:
            0 36px 100px rgba(0, 1, 49, 0.21),
            0 14px 34px rgba(255, 179, 0, 0.08);
        }

        .why-advantedge-v2 .advantage-card:hover {
          transform: translateY(-7px);
          border-color: rgba(0, 0, 170, 0.22);
          box-shadow:
            0 30px 82px rgba(0, 1, 49, 0.17),
            0 12px 30px rgba(0, 0, 170, 0.055);
        }

        .why-advantedge-v2 .advantage-accent {
          transform: scaleX(0.16);
          transform-origin: left;
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .why-advantedge-v2
          .advantage-card:hover
          .advantage-accent,
        .why-advantedge-v2
          .advantage-hero-card:hover
          .advantage-accent {
          transform: scaleX(1);
        }

        .why-advantedge-v2 .advantage-icon {
          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.35s ease,
            background-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .why-advantedge-v2
          .advantage-card:hover
          .advantage-icon {
          transform: scale(1.08) rotate(-4deg);
          border-color: rgba(255, 179, 0, 0.38);
          background-color: rgba(255, 179, 0, 0.14);
          box-shadow: 0 14px 36px rgba(255, 179, 0, 0.13);
        }

        .why-advantedge-v2 .advantage-arrow {
          opacity: 0;
          transform: translateX(-5px);
          transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        }

        .why-advantedge-v2
          .advantage-card:hover
          .advantage-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .why-advantedge-v2 .advantage-principle {
          transition:
            transform 0.35s ease,
            background-color 0.35s ease,
            border-color 0.35s ease;
        }

        .why-advantedge-v2 .advantage-principle:hover {
          transform: translateY(-3px);
          border-color: rgba(0, 0, 170, 0.16);
          background-color: rgba(255, 255, 255, 0.98);
        }

        @media (prefers-reduced-motion: reduce) {
          .why-advantedge-v2 .advantage-hero-image,
          .why-advantedge-v2 .advantage-card-image,
          .why-advantedge-v2 .advantage-hero-card,
          .why-advantedge-v2 .advantage-card,
          .why-advantedge-v2 .advantage-icon,
          .why-advantedge-v2 .advantage-principle {
            transition: none;
          }

          .why-advantedge-v2 .advantage-hero-card:hover,
          .why-advantedge-v2 .advantage-card:hover,
          .why-advantedge-v2 .advantage-principle:hover,
          .why-advantedge-v2
            .advantage-hero-card:hover
            .advantage-hero-image,
          .why-advantedge-v2
            .advantage-card:hover
            .advantage-card-image {
            transform: none;
          }
        }
      `}
    </style>

    {/* ============================================
        PREMIUM LIGHT BACKGROUND
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#f7f8fc]"
    >
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=86"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute right-0 top-0 h-full w-[58%] object-cover opacity-[0.045] grayscale"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f8fc] via-[#f7f8fc]/96 to-[#f7f8fc]/82" />

      <div
        className="absolute -left-56 top-[12%] h-[520px] w-[520px] rounded-full opacity-[0.065] blur-[165px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="absolute -right-48 bottom-[-140px] h-[490px] w-[490px] rounded-full opacity-[0.12] blur-[160px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      <div
        className="absolute inset-0 opacity-[0.27]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,1,49,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.04) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_14%,rgba(247,248,252,0.9)_100%)]" />
    </div>

    <Container size="xl">
      <div className="relative mx-auto max-w-7xl">
        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm"
                style={{
                  borderColor: `${colors.brand.accent}55`,
                  backgroundColor: `${colors.brand.accent}10`,
                  color: colors.brand.primary,
                }}
              >
                <Sparkles
                  className="h-3.5 w-3.5"
                  style={{ color: colors.brand.accent }}
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                  Why AdvantEdge
                </span>
              </div>

              <h2
                className="mt-5 max-w-3xl text-2xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-3xl lg:text-[42px]"
                style={{ color: colors.brand.primary }}
              >
                More Than an Agency.
                <span className="mt-1 block text-gray-500">
                  A Connected Growth Partner.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-[1.8] text-gray-600 sm:text-base">
                Most partners manage isolated campaigns, channels, or tools.
                AdvantEdge connects business strategy, marketing execution,
                revenue operations, data, and AI into one accountable growth
                system.
              </p>
            </div>

            {/* Difference statement */}
            <div className="max-w-sm rounded-2xl border border-gray-200 bg-white/85 px-5 py-4 shadow-[0_16px_45px_rgba(0,1,49,0.07)] backdrop-blur-xl">
              <p
                className="text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{ color: colors.brand.secondary }}
              >
                The AdvantEdge Difference
              </p>

              <p
                className="mt-2 text-sm font-bold leading-relaxed"
                style={{ color: colors.brand.primary }}
              >
                Senior strategic thinking remains directly connected to
                implementation, measurement, and continuous improvement.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            ADVANTAGE SUMMARY
        ============================================ */}
        <ScrollReveal delay={0.08}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white/85 shadow-[0_18px_55px_rgba(0,1,49,0.07)] backdrop-blur-xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Business First",
                  text: "Commercial priorities guide every recommendation.",
                },
                {
                  number: "02",
                  title: "Integrated Thinking",
                  text: "Strategy, execution, CRM, data, and AI work together.",
                },
                {
                  number: "03",
                  title: "Senior Ownership",
                  text: "Experienced leadership remains close to delivery.",
                },
                {
                  number: "04",
                  title: "Measurable Growth",
                  text: "Performance is aligned to meaningful business outcomes.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  whileHover={{
                    backgroundColor: "rgba(0,0,170,0.025)",
                  }}
                  transition={{ duration: 0.3 }}
                  className={[
                    "px-5 py-5",
                    index < 3
                      ? "border-b border-gray-200 lg:border-b-0 lg:border-r"
                      : "",
                    index === 1
                      ? "sm:border-l sm:border-gray-200 lg:border-l-0"
                      : "",
                  ].join(" ")}
                >
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.17em]"
                    style={{ color: colors.brand.accent }}
                  >
                    {item.number}
                  </p>

                  <p
                    className="mt-1.5 text-sm font-bold"
                    style={{ color: colors.brand.primary }}
                  >
                    {item.title}
                  </p>

                  <p className="mt-1 text-[10px] leading-[1.65] text-gray-500">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            IMAGE-LED BENTO EXPERIENCE
        ============================================ */}
        <div className="mt-7 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          {/* ============================================
              PRIMARY STRATEGIC PARTNERSHIP PANEL
          ============================================ */}
          <ScrollReveal>
            <motion.article
              whileHover={{ y: -5 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="advantage-hero-card group relative min-h-[630px] overflow-hidden rounded-[28px] border border-white/80 bg-[#080912] shadow-[0_32px_95px_rgba(0,1,49,0.19)]"
            >
              <OptimizedImage
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1900&q=92"
                alt="Senior strategic consultation and business collaboration"
                className="advantage-hero-image absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-[#000131]/97" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/58 via-transparent to-transparent" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_66%_22%,rgba(255,255,255,0.15),transparent_35%)]" />

              {/* Animated top accent */}
              <div
                aria-hidden="true"
                className="advantage-accent absolute left-0 top-0 z-20 h-1 w-full"
                style={{ background: gradients.primary }}
              />

              {/* Top row */}
              <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5 sm:p-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-3 py-2 text-white shadow-xl backdrop-blur-xl">
                  <Users
                    className="h-3.5 w-3.5"
                    style={{ color: colors.brand.accent }}
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.16em]">
                    Strategic Partnership
                  </span>
                </div>

                <span className="text-[10px] font-bold tracking-[0.17em] text-white/55">
                  07
                </span>
              </div>

              {/* Main content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.17em]"
                  style={{ color: colors.brand.accent }}
                >
                  Senior Thinking Connected to Delivery
                </p>

                <h3 className="mt-2 max-w-2xl text-2xl font-bold leading-[1.16] tracking-[-0.032em] text-white sm:text-3xl lg:text-[36px]">
                  We Work With Your Business, Not Around It.
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-[1.78] text-white/74 sm:text-base">
                  Our team works alongside leadership, marketing, sales, and
                  operations to understand the commercial reality behind the
                  marketing challenge and build a solution the organization can
                  execute and scale.
                </p>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {[
                    "Direct Access to Senior Strategists",
                    "Business and Market Understanding",
                    "Cross-Functional Collaboration",
                    "Transparent Performance Accountability",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-white/18 bg-black/20 px-3 py-3 backdrop-blur-xl"
                    >
                      <CheckCircle2
                        className="h-3.5 w-3.5 shrink-0"
                        style={{ color: colors.brand.accent }}
                      />

                      <span className="text-[10px] font-semibold text-white/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Partnership outcome */}
                <div className="mt-6 border-t border-white/18 pt-5">
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/18 bg-white/[0.08]"
                      style={{ color: colors.brand.accent }}
                    >
                      <Target className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/40">
                        Partnership Outcome
                      </p>

                      <p className="mt-1 text-xs font-semibold leading-relaxed text-white/80">
                        Better strategic decisions, stronger internal alignment,
                        and a growth system designed around real business
                        priorities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </ScrollReveal>

          {/* ============================================
              FOUR INTERACTIVE ADVANTAGE CARDS
          ============================================ */}
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const benefitImages = [
                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=92",
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=92",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71c?auto=format&fit=crop&w=1400&q=92",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=92",
              ];

              const labels = [
                "Strategic Leadership",
                "Integrated Capability",
                "Commercial Accountability",
                "Scalable Systems",
              ];

              const outcomes = [
                "Decisions connected to business reality",
                "Fewer gaps between strategy and execution",
                "Marketing aligned directly to revenue",
                "Processes designed for continued growth",
              ];

              return (
                <motion.div
                  key={benefit.title}
                  variants={staggerItemVariants}
                  className="min-w-0"
                >
                  <article className="advantage-card group relative flex h-full min-h-[305px] flex-col overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_18px_55px_rgba(0,1,49,0.09)]">
                    {/* Image header */}
                    <div className="relative h-[142px] overflow-hidden">
                      <OptimizedImage
                        src={benefitImages[index]}
                        alt={benefit.title}
                        className="advantage-card-image absolute inset-0 h-full w-full object-cover object-center"
                      />

                      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-[#000131]/88" />

                      <div
                        aria-hidden="true"
                        className="advantage-accent absolute left-0 top-0 z-20 h-1 w-full"
                        style={{ background: gradients.primary }}
                      />

                      <div
                        className="advantage-icon absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-black/20 text-white shadow-xl backdrop-blur-xl"
                      >
                        {benefit.icon}
                      </div>

                      <span className="absolute right-4 top-4 rounded-full border border-white/25 bg-black/20 px-2.5 py-1 text-[8px] font-bold tracking-[0.15em] text-white backdrop-blur-xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p
                        className="absolute bottom-4 left-4 right-4 text-[8px] font-bold uppercase tracking-[0.15em]"
                        style={{ color: colors.brand.accent }}
                      >
                        {labels[index]}
                      </p>
                    </div>

                    {/* Card content */}
                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                      <h3
                        className="text-sm font-bold leading-[1.3] tracking-[-0.015em] sm:text-base"
                        style={{ color: colors.brand.primary }}
                      >
                        {benefit.title}
                      </h3>

                      <p className="mt-2 text-[11px] leading-[1.68] text-gray-600">
                        {benefit.description}
                      </p>

                      <div className="mt-auto pt-4">
                        <div className="flex items-center justify-between gap-3 border-t border-gray-200 pt-3">
                          <div>
                            <p className="text-[7px] font-bold uppercase tracking-[0.14em] text-gray-400">
                              Advantage
                            </p>

                            <p
                              className="mt-1 text-[9px] font-bold leading-[1.5]"
                              style={{ color: colors.brand.secondary }}
                            >
                              {outcomes[index]}
                            </p>
                          </div>

                          <ArrowRight
                            className="advantage-arrow h-4 w-4 shrink-0"
                            style={{ color: colors.brand.accent }}
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>

        {/* ============================================
            CONNECTED ADVANTAGE MODEL
        ============================================ */}
        <ScrollReveal delay={0.18}>
          <div
            className="mt-7 overflow-hidden rounded-[24px] shadow-[0_24px_75px_rgba(0,1,49,0.18)]"
            style={{ backgroundColor: colors.brand.primary }}
          >
            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              {/* Statement */}
              <div className="border-b border-white/15 px-5 py-6 sm:px-7 lg:border-b-0 lg:border-r">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08]">
                  <Sparkles
                    className="h-5 w-5"
                    style={{ color: colors.brand.accent }}
                  />
                </div>

                <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.17em] text-white/45">
                  The Connected Advantage
                </p>

                <h3 className="mt-2 text-xl font-bold leading-[1.25] tracking-[-0.025em] text-white">
                  One partner connecting the complete growth system.
                </h3>

                <p className="mt-3 text-xs leading-[1.7] text-white/50">
                  Better outcomes come from reducing the gaps between business
                  strategy, market execution, technology, and revenue
                  operations.
                </p>
              </div>

              {/* Connected system */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    number: "01",
                    title: "Understand",
                    text: "Business model, market, customers, and commercial priorities.",
                    icon: <Lightbulb className="h-4 w-4" />,
                  },
                  {
                    number: "02",
                    title: "Connect",
                    text: "Strategy, channels, CRM, content, sales, data, and AI.",
                    icon: <Layers className="h-4 w-4" />,
                  },
                  {
                    number: "03",
                    title: "Deliver",
                    text: "Execute through one aligned roadmap and operating rhythm.",
                    icon: <Rocket className="h-4 w-4" />,
                  },
                  {
                    number: "04",
                    title: "Improve",
                    text: "Measure commercial performance and continuously optimize.",
                    icon: <BarChart3 className="h-4 w-4" />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.number}
                    whileHover={{
                      backgroundColor: "rgba(255,255,255,0.07)",
                    }}
                    transition={{ duration: 0.3 }}
                    className={[
                      "relative px-5 py-6",
                      index < 3
                        ? "border-b border-white/15 lg:border-b-0 lg:border-r"
                        : "",
                      index === 1
                        ? "sm:border-l sm:border-white/15 lg:border-l-0"
                        : "",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.08]"
                        style={{ color: colors.brand.accent }}
                      >
                        {item.icon}
                      </div>

                      <span className="text-[9px] font-bold tracking-[0.15em] text-white/25">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-white">
                      {item.title}
                    </p>

                    <p className="mt-1.5 text-[10px] leading-[1.65] text-white/48">
                      {item.text}
                    </p>

                    {index < 3 && (
                      <ArrowRight className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-white/25 lg:block" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            PARTNERSHIP PRINCIPLES
        ============================================ */}
        <ScrollReveal delay={0.22}>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Strategic Honesty",
                text: "Clear recommendations grounded in commercial reality.",
              },
              {
                number: "02",
                title: "Shared Accountability",
                text: "Decisions and outcomes owned collaboratively.",
              },
              {
                number: "03",
                title: "Transparent Systems",
                text: "Clear roadmaps, priorities, reporting, and responsibilities.",
              },
              {
                number: "04",
                title: "Long-Term Capability",
                text: "Systems designed to strengthen the organization over time.",
              },
            ].map((item) => (
              <motion.div
                key={item.number}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="advantage-principle rounded-xl border border-gray-200 bg-white/85 p-4 shadow-[0_12px_35px_rgba(0,1,49,0.055)] backdrop-blur-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{
                      color: colors.brand.secondary,
                      backgroundColor: `${colors.brand.secondary}0D`,
                    }}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                  </div>

                  <span className="text-[9px] font-bold tracking-[0.15em] text-gray-300">
                    {item.number}
                  </span>
                </div>

                <p
                  className="mt-4 text-xs font-bold"
                  style={{ color: colors.brand.primary }}
                >
                  {item.title}
                </p>

                <p className="mt-1 text-[10px] leading-[1.65] text-gray-500">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* ============================================
            SECTION CTA
        ============================================ */}
        <ScrollReveal delay={0.28}>
          <div className="mt-7 flex flex-col items-start justify-between gap-5 rounded-2xl border border-gray-200 bg-white/85 px-5 py-5 shadow-[0_18px_55px_rgba(0,1,49,0.075)] backdrop-blur-xl sm:flex-row sm:items-center sm:px-7">
            <div>
              <p
                className="text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{ color: colors.brand.secondary }}
              >
                Looking for More Than Campaign Execution?
              </p>

              <p
                className="mt-1 max-w-3xl text-sm font-bold leading-relaxed"
                style={{ color: colors.brand.primary }}
              >
                Partner with a team that connects market strategy, integrated
                execution, CRM, data, AI, and commercial performance.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-white shadow-[0_16px_40px_rgba(0,0,170,0.22)] transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: gradients.primary }}
            >
              Discuss Your Growth Goals

              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>




{/* ============================================
    8. FINAL CTA — BUILD YOUR REVENUE ENGINE
============================================ */}
<ModernSectionBackground
  variant="gradient-tech"
  className="relative overflow-hidden"
>
  <section
    id="services-final-cta"
    className="services-final-cta relative isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
  >
    {/* ============================================
        SECTION INTERACTIONS
    ============================================ */}
    <style>
      {`
        .services-final-cta .final-cta-panel {
          transition:
            transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.35s ease,
            box-shadow 0.5s ease;
        }

        .services-final-cta .final-cta-panel:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow:
            0 42px 120px rgba(0, 0, 0, 0.44),
            0 16px 38px rgba(0, 0, 170, 0.14);
        }

        .services-final-cta .audit-item {
          transition:
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.35s ease,
            background-color 0.35s ease;
        }

        .services-final-cta .audit-item:hover {
          transform: translateX(5px);
          border-color: rgba(255, 255, 255, 0.28);
          background-color: rgba(255, 255, 255, 0.1);
        }

        .services-final-cta .audit-icon {
          transition:
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            background-color 0.35s ease;
        }

        .services-final-cta .audit-item:hover .audit-icon {
          transform: scale(1.07) rotate(-3deg);
          background-color: rgba(255, 179, 0, 0.15);
        }

        .services-final-cta .cta-image {
          animation: servicesFinalImageMotion 16s ease-in-out infinite alternate;
          will-change: transform;
        }

        @keyframes servicesFinalImageMotion {
          from {
            transform: scale(1.02) translate3d(0, 0, 0);
          }

          to {
            transform: scale(1.07) translate3d(-0.7%, -0.5%, 0);
          }
        }

        .services-final-cta .cta-glow {
          animation: servicesCtaGlow 5s ease-in-out infinite;
        }

        @keyframes servicesCtaGlow {
          0%,
          100% {
            opacity: 0.06;
            transform: scale(1);
          }

          50% {
            opacity: 0.13;
            transform: scale(1.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .services-final-cta .final-cta-panel,
          .services-final-cta .audit-item,
          .services-final-cta .audit-icon {
            transition: none;
          }

          .services-final-cta .cta-image,
          .services-final-cta .cta-glow {
            animation: none;
          }

          .services-final-cta .final-cta-panel:hover,
          .services-final-cta .audit-item:hover {
            transform: none;
          }
        }
      `}
    </style>

    {/* ============================================
        FULL-WIDTH IMAGE BACKGROUND
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-20 overflow-hidden bg-[#070811]"
    >
      <OptimizedImage
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=92"
        alt=""
        className="cta-image absolute inset-0 h-full w-full object-cover object-center"
      />
    </div>

    {/* ============================================
        BACKGROUND TREATMENT
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/95 via-[#000131]/74 to-[#070811]/72" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#070811]/55 via-transparent to-[#070811]/96" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_20%,rgba(255,255,255,0.15),transparent_36%)]" />

      <div
        className="cta-glow absolute -left-52 top-10 h-[520px] w-[520px] rounded-full blur-[165px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="cta-glow absolute -right-48 bottom-[-150px] h-[500px] w-[500px] rounded-full blur-[160px]"
        style={{
          backgroundColor: colors.brand.accent,
          animationDelay: "1.4s",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "78px 78px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_23%,rgba(0,0,0,0.46)_100%)]" />
    </div>

    <Container size="xl">
      <ScrollReveal>
        <div className="final-cta-panel relative mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-white/20 bg-black/[0.24] shadow-[0_36px_110px_rgba(0,0,0,0.38)] backdrop-blur-xl">
          {/* Top brand accent */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 h-1 w-full"
            style={{ background: gradients.primary }}
          />

          {/* Decorative section number */}
          <span
            aria-hidden="true"
            className="absolute right-6 top-5 text-6xl font-black tracking-[-0.06em] text-white/[0.05] sm:text-7xl"
          >
            08
          </span>

          <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
            {/* ============================================
                LEFT — PRIMARY CONVERSION MESSAGE
            ============================================ */}
            <div className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                <Rocket
                  className="h-3.5 w-3.5"
                  style={{ color: colors.brand.accent }}
                />

                <span
                  className="text-[10px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: colors.brand.accent }}
                >
                  Build Your Growth System
                </span>
              </div>

              <h2 className="mt-6 max-w-4xl text-3xl font-bold leading-[1.06] tracking-[-0.045em] text-white sm:text-4xl lg:text-[48px]">
                Stop Managing Disconnected Marketing.
                <span className="mt-2 block text-white/60">
                  Build One Smarter Revenue Engine.
                </span>
              </h2>

              <p className="mt-6 max-w-3xl text-sm leading-[1.85] text-white/[0.68] sm:text-base">
                We identify where strategy, marketing, sales, CRM, customer
                journeys, data, and AI are disconnected—then build an integrated
                growth system aligned to measurable commercial outcomes.
              </p>

              {/* Value indicators */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Clarify market and growth priorities",
                  "Connect marketing, sales, CRM, and AI",
                  "Improve customer acquisition and conversion",
                  "Create measurable and scalable execution",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/15 bg-black/20 px-4 py-3 backdrop-blur-xl"
                  >
                    <CheckCircle2
                      className="h-4 w-4 shrink-0"
                      style={{ color: colors.brand.accent }}
                    />

                    <span className="text-[11px] font-semibold leading-[1.55] text-white/[0.76]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <MagneticButton strength={0.25}>
                  <Link
                    to="/contact"
                    className="group inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-[0_18px_48px_rgba(0,0,170,0.3)] transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
                    style={{ background: gradients.primary }}
                  >
                    Book a Strategy Call

                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </MagneticButton>

                <MagneticButton strength={0.18}>
                  <Link
                    to="/configurator"
                    className="group inline-flex w-full items-center justify-center rounded-xl border border-white/25 bg-black/20 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.08] sm:w-auto"
                  >
                    Explore Growth Solutions

                    <ArrowRight
                      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: colors.brand.accent }}
                    />
                  </Link>
                </MagneticButton>
              </div>

              {/* Availability note */}
              <div className="mt-7 flex items-start gap-3 border-t border-white/15 pt-5">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full shadow-[0_0_0_7px_rgba(255,179,0,0.08)]"
                  style={{ backgroundColor: colors.brand.accent }}
                />

                <p className="max-w-2xl text-[10px] leading-[1.65] text-white/45">
                  We work with a focused number of organizations to maintain
                  senior involvement, strategic attention, execution quality,
                  and measurable accountability.
                </p>
              </div>
            </div>

            {/* ============================================
                RIGHT — GROWTH SYSTEM DIAGNOSTIC
            ============================================ */}
            <div className="relative border-t border-white/15 bg-white/[0.035] px-5 py-8 sm:px-7 lg:border-l lg:border-t-0 lg:px-8 lg:py-10">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.17em]"
                    style={{ color: colors.brand.accent }}
                  >
                    Strategy Call Framework
                  </p>

                  <h3 className="mt-2 text-xl font-bold leading-[1.25] tracking-[-0.025em] text-white sm:text-2xl">
                    What We Assess First
                  </h3>

                  <p className="mt-2 max-w-md text-xs leading-[1.7] text-white/50">
                    The initial conversation focuses on the business system—not
                    only individual campaigns or channels.
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07]">
                  <Target
                    className="h-5 w-5"
                    style={{ color: colors.brand.accent }}
                  />
                </div>
              </div>

              {/* Interactive audit areas */}
              <div className="mt-6 grid gap-3">
                {[
                  {
                    number: "01",
                    title: "Strategic Direction",
                    description:
                      "Positioning, audiences, priorities, market opportunities, and growth objectives.",
                    icon: <Target className="h-4 w-4" />,
                  },
                  {
                    number: "02",
                    title: "Marketing Execution",
                    description:
                      "Channels, campaigns, content, customer journeys, and demand generation performance.",
                    icon: <Layers className="h-4 w-4" />,
                  },
                  {
                    number: "03",
                    title: "CRM and Revenue Operations",
                    description:
                      "Lead management, sales alignment, nurturing, attribution, and conversion workflows.",
                    icon: <BarChart3 className="h-4 w-4" />,
                  },
                  {
                    number: "04",
                    title: "AI and Automation",
                    description:
                      "High-impact opportunities to improve speed, intelligence, engagement, and revenue.",
                    icon: <Brain className="h-4 w-4" />,
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="audit-item group rounded-[16px] border border-white/15 bg-black/20 p-4 backdrop-blur-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="audit-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07]"
                        style={{ color: colors.brand.accent }}
                      >
                        {item.icon}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="text-xs font-bold text-white sm:text-sm">
                            {item.title}
                          </h4>

                          <span className="text-[8px] font-bold tracking-[0.15em] text-white/25">
                            {item.number}
                          </span>
                        </div>

                        <p className="mt-1.5 text-[10px] leading-[1.65] text-white/45">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call outcome */}
              <div className="mt-5 rounded-[18px] border border-white/15 bg-white/[0.06] p-5">
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-black/20"
                    style={{ color: colors.brand.accent }}
                  >
                    <Sparkles className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/35">
                      Strategy Call Outcome
                    </p>

                    <p className="mt-1.5 text-xs font-semibold leading-[1.65] text-white/[0.76]">
                      A clearer view of your primary growth constraints, system
                      gaps, and the highest-leverage opportunities to improve
                      commercial performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================
              BOTTOM TRUST STRIP
          ============================================ */}
          <div className="border-t border-white/15 bg-black/20">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Senior-Led",
                  text: "Direct strategic involvement",
                },
                {
                  title: "Business-Focused",
                  text: "Commercial priorities first",
                },
                {
                  title: "System-Integrated",
                  text: "Strategy, execution, CRM, and AI",
                },
                {
                  title: "Outcome-Measured",
                  text: "Growth aligned to meaningful KPIs",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                  }}
                  transition={{ duration: 0.3 }}
                  className={[
                    "px-5 py-4 text-center",
                    index < 3
                      ? "border-b border-white/15 lg:border-b-0 lg:border-r"
                      : "",
                    index === 1
                      ? "sm:border-l sm:border-white/15 lg:border-l-0"
                      : "",
                  ].join(" ")}
                >
                  <p className="text-xs font-bold text-white">{item.title}</p>

                  <p className="mt-1 text-[9px] leading-[1.55] text-white/40">
                    {item.text}
                  </p>
                </motion.div>
              ))}
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

export default ServicesPage;
