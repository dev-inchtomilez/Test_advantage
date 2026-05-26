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
          2. CLIENT LOGO CAROUSEL + TRUST STRIP
          ============================================ */}
      <ClientLogoCarousel />

      {/* Trust Strip Tagline */}
      <div className="py-6 text-center" style={{ background: 'rgba(0,1,49,0.03)' }}>
        <p className="text-base lg:text-lg font-semibold italic" style={{ color: colors.brand.primary }}>
          "Strategic. Integrated. Built for revenue — not vanity metrics."
        </p>
      </div>






{/* ============================================
    3. WHY YOU NEED US (Pain Points)
============================================ */}
<ModernSectionBackground variant="gradient-tech">
  <Section spacing="base" animate background="transparent">
    <Container size="xl">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border"
              style={{ borderColor: `${colors.brand.secondary}25`, backgroundColor: 'rgba(255,255,255,0.6)', color: colors.brand.primary }}
            >
              Why You Need Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6" style={{ color: colors.brand.primary }}>
              Most marketing doesn't fail
              <br />
              <span style={{ color: colors.brand.secondary }}>because of ideas.</span>
            </h2>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              It fails because nothing works together. You invest in campaigns. You hire agencies. You implement tools. But effort alone doesn't build a system.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5 mt-8">
          {[
            { icon: <Target className="w-5 h-5" />, text: 'No clear strategy or market positioning' },
            { icon: <Layers className="w-5 h-5" />, text: 'Disconnected channels, invisible results' },
            { icon: <TrendingUp className="w-5 h-5" />, text: 'Poor traffic quality and low lead conversion' },
            { icon: <Users className="w-5 h-5" />, text: 'Sales team chasing unqualified leads' },
            { icon: <BarChart3 className="w-5 h-5" />, text: 'CRM that stores data but drives nothing' },
            { icon: <RefreshCw className="w-5 h-5" />, text: 'No repeatable growth system' },
          ].map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.07}>
              <GlassCard variant="base" rounded="xl" padding="base" hover className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg flex-shrink-0" style={{ backgroundColor: `${colors.brand.secondary}12` }}>
                  <div style={{ color: colors.brand.secondary }}>{item.icon}</div>
                </div>
                <p className="text-sm font-semibold leading-snug" style={{ color: colors.brand.primary }}>{item.text}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-10 text-center">
            <GlassCard variant="base" rounded="2xl" padding="lg" className="relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-gradient-to-br from-[#0000aa]/8 to-transparent rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-black mb-3" style={{ color: colors.brand.primary }}>
                  We're here to solve all of it —
                </h3>
                <p className="text-base font-bold" style={{ color: colors.brand.secondary }}>
                  with one connected system.
                </p>
              </div>
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>

{/* ============================================
    4. WHO WE ARE / INTRODUCTION
============================================ */}
<ModernSectionBackground variant="image-overlay-team">
  <Section spacing="base" animate background="transparent">
    <Container size="xl">
      <SectionHeader
        badge="Who We Are"
        badgeIcon={<Shield className="w-4 h-4" />}
        title="Built for Organizations That Expect More"
        description="A strategic and integrated marketing solution provider with AI capabilities - customized for every business to achieve its growth goals."
        align="center"
        maxWidth="3xl"
      />

      <ScrollReveal>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjB0ZWFtJTIwYnVzaW5lc3MlMjBtZWV0aW5nfGVufDF8fHx8MTc3NDU1ODI0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Executive team collaboration"
                className="w-full h-[320px] lg:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-3 right-3 sm:-bottom-6 sm:-right-6 lg:-right-8"
            >
              <GlassCard variant="strong" rounded="xl" padding="base" className="shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl" style={{ background: gradients.primary }}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold" style={{ color: colors.brand.primary }}>15+</span>
                      <span className="text-sm font-bold" style={{ color: colors.brand.accent }}>Years</span>
                    </div>
                    <p className="text-xs text-gray-600 font-medium mt-0.5">Strategic Excellence</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-xl lg:text-2xl font-bold leading-tight" style={{ color: colors.brand.primary }}>
                We Don't Execute Tasks.{" "}
                <span style={{ color: colors.brand.secondary }}>We Engineer Growth.</span>
              </h3>
              <div className="h-1 w-24 rounded-full" style={{ background: gradients.primary }}></div>
            </div>

            <p className="text-sm leading-relaxed text-gray-700">
              AdvantEdge partners with growth-focused businesses to transform marketing into a predictable revenue engine. We don't just advise — we align strategy, execution, and technology to deliver measurable business outcomes.
            </p>

            <div className="space-y-4 pt-4">
              {[
                { icon: <Target className="w-5 h-5" />, title: 'Strategic Leadership', text: 'We function as an extension of your executive team, aligning marketing initiatives directly with business priorities.' },
                { icon: <Layers className="w-5 h-5" />, title: 'Integrated Systems', text: 'Our frameworks coordinate brand, digital, content, and sales activation into unified growth systems.' },
                { icon: <BarChart3 className="w-5 h-5" />, title: 'Performance Obsession', text: 'Every initiative is measured, analyzed, and optimized for maximum business impact and ROI.' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 p-2.5 rounded-lg" style={{ backgroundColor: `${colors.brand.secondary}15` }}>
                    <div style={{ color: colors.brand.secondary }}>{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold mb-1" style={{ color: colors.brand.primary }}>{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }} className="pt-4">
              <Link to="/about" className="inline-flex items-center gap-2 text-base font-bold group" style={{ color: colors.brand.secondary }}>
                <span>Discover Our Story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </ScrollReveal>
    </Container>
  </Section>
</ModernSectionBackground>

{/* ============================================
    5. THREE DISCIPLINES. ONE REVENUE ENGINE.
============================================ */}
<ModernSectionBackground variant="glass-blur">
  <Section spacing="base" animate background="transparent">
    <Container size="xl">

      {/* ============================================
          SECTION HEADER
      ============================================ */}
      <SectionHeader
        badge="Three Disciplines. One Revenue Engine."
        badgeIcon={<Sparkles className="w-4 h-4" />}
        title="Strategy, Execution, and AI Unified Into One Growth System"
        description="Most agencies specialize in one piece. We connect strategic marketing, integrated execution, and AI-powered systems into one coordinated framework designed to drive measurable revenue growth."
        align="center"
        maxWidth="4xl"
      />

      {/* ============================================
          INTRO CONTENT
      ============================================ */}
      <ScrollReveal>
        <div className="max-w-5xl mx-auto text-center mt-8 mb-12">

          <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
            Sustainable growth happens when strategic direction, integrated
            marketing execution, and AI-powered intelligence operate together.
            We eliminate fragmented systems and build connected revenue
            ecosystems designed for scalability, efficiency, and measurable
            business impact.
          </p>

        </div>
      </ScrollReveal>

      {/* ============================================
          THREE CORE DISCIPLINES
      ============================================ */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* ============================================
            STRATEGIC MARKETING
        ============================================ */}
        <ScrollReveal>

          <GlassCard
            variant="base"
            rounded="2xl"
            padding="lg"
            hover
            className="h-full relative overflow-hidden"
          >

            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl opacity-10"
              style={{
                background: colors.brand.secondary
              }}
            ></div>

            <div className="relative z-10">

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  backgroundColor: `${colors.brand.secondary}12`
                }}
              >
                <Target
                  className="w-7 h-7"
                  style={{ color: colors.brand.secondary }}
                />
              </div>

              {/* Heading */}
              <h3
                className="text-2xl font-black mb-3"
                style={{ color: colors.brand.primary }}
              >
                🎯 Strategic Marketing
              </h3>

              {/* Intro */}
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                A strategy that doesn’t drive revenue is just theory.
                We build market-backed growth strategies aligned directly
                to business outcomes and scalable performance.
              </p>

              {/* Features */}
              <div className="space-y-3">

                {[
                  "Market positioning & competitive analysis",
                  "Value proposition & differentiation strategy",
                  "Go-to-market planning across products & segments",
                  "Portfolio & pricing strategy",
                  "Demand generation & funnel architecture",
                  "KPI systems aligned to pipeline & revenue"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >

                    <div
                      className="w-2 h-2 rounded-full mt-2"
                      style={{
                        background: colors.brand.secondary
                      }}
                    ></div>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </GlassCard>

        </ScrollReveal>

        {/* ============================================
            INTEGRATED MARKETING
        ============================================ */}
        <ScrollReveal delay={0.1}>

          <GlassCard
            variant="base"
            rounded="2xl"
            padding="lg"
            hover
            className="h-full relative overflow-hidden"
          >

            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl opacity-10"
              style={{
                background: colors.brand.secondary
              }}
            ></div>

            <div className="relative z-10">

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  backgroundColor: `${colors.brand.secondary}12`
                }}
              >
                <Rocket
                  className="w-7 h-7"
                  style={{ color: colors.brand.secondary }}
                />
              </div>

              {/* Heading */}
              <h3
                className="text-2xl font-black mb-3"
                style={{ color: colors.brand.primary }}
              >
                ⚡ Integrated Marketing
              </h3>

              {/* Intro */}
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                Disconnected marketing creates inconsistent growth.
                We unify every channel into one performance-driven
                marketing ecosystem engineered for measurable impact.
              </p>

              {/* Features */}
              <div className="space-y-3">

                {[
                  "Omnichannel campaign strategy & execution",
                  "Content, performance marketing & thought leadership",
                  "Paid media across Google, LinkedIn & Meta",
                  "SEO, AEO & GEO optimization systems",
                  "Email marketing & marketing automation",
                  "Offline + online channel integration",
                  "Unified attribution & performance reporting"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >

                    <div
                      className="w-2 h-2 rounded-full mt-2"
                      style={{
                        background: colors.brand.secondary
                      }}
                    ></div>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </GlassCard>

        </ScrollReveal>

        {/* ============================================
            AI SOLUTIONS
        ============================================ */}
        <ScrollReveal delay={0.2}>

          <GlassCard
            variant="base"
            rounded="2xl"
            padding="lg"
            hover
            className="h-full relative overflow-hidden"
          >

            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl opacity-10"
              style={{
                background: colors.brand.secondary
              }}
            ></div>

            <div className="relative z-10">

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  backgroundColor: `${colors.brand.secondary}12`
                }}
              >
                <Sparkles
                  className="w-7 h-7"
                  style={{ color: colors.brand.secondary }}
                />
              </div>

              {/* Heading */}
              <h3
                className="text-2xl font-black mb-3"
                style={{ color: colors.brand.primary }}
              >
                🤖 AI Solutions
              </h3>

              {/* Intro */}
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                AI is not just a tool — it is a growth multiplier.
                We integrate AI across customer journeys, CRM systems,
                sales processes, and marketing workflows.
              </p>

              {/* Features */}
              <div className="space-y-3">

                {[
                  "Real-time customer engagement systems",
                  "AI-powered requirement understanding",
                  "Intelligent product & service recommendations",
                  "Automated upsell & cross-sell workflows",
                  "Lead qualification & scoring",
                  "Dormant lead reactivation systems",
                  "High-intent lead escalation workflows",
                  "AI-driven CRM integration & sales automation",
                  "Customer journey intelligence",
                  "Pipeline acceleration systems"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >

                    <div
                      className="w-2 h-2 rounded-full mt-2"
                      style={{
                        background: colors.brand.secondary
                      }}
                    ></div>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </GlassCard>

        </ScrollReveal>

      </div>

      

    </Container>
  </Section>
</ModernSectionBackground>



{/* ============================================
    6. HOW WE HELP YOU
============================================ */}
<ModernSectionBackground variant="mesh-gradient-purple">
  <Section spacing="base" animate background="transparent">
    <Container size="xl">

      <SectionHeader
        badge="Execution-Focused Growth Systems"
        badgeIcon={<Sparkles className="w-4 h-4" />}
        title="How We Help You"
        description="We combine strategic marketing, integrated execution, AI-powered systems, and operational discipline into one connected growth infrastructure."
        align="center"
        maxWidth="4xl"
      />

      <div className="grid lg:grid-cols-2 gap-7 mt-14 items-stretch">

        {/* Card 1 - Revenue-Tied Strategic Marketing */}
        <ScrollReveal>
          <GlassCard variant="base" rounded="2xl" padding="lg" className="h-full relative overflow-hidden border border-white/40">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10" style={{ background: colors.brand.secondary }}></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7 border w-fit" style={{ borderColor: `${colors.brand.secondary}20`, backgroundColor: "rgba(255,255,255,0.65)" }}>
                <Target className="w-4 h-4" style={{ color: colors.brand.secondary }} />
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: colors.brand.primary }}>Revenue-Tied Strategic Marketing</span>
              </div>
              <h3 className="text-2xl font-black leading-tight mb-4" style={{ color: colors.brand.primary }}>
                We don't build strategies in isolation.
                <br /><span style={{ background: gradients.primary, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Every decision maps to revenue.</span>
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-6">Every decision is mapped to revenue, pipeline, and growth targets.</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-auto">
                {["Clear growth roadmap aligned to business goals","Defined target segments & positioning","Measurable KPIs tied to revenue","Continuous strategy refinement based on performance"].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl border border-white/30 bg-white/40 backdrop-blur-sm flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0" style={{ background: colors.brand.secondary }}></div>
                    <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>

        {/* Card 2 - Fully Connected Marketing Stack */}
        <ScrollReveal delay={0.1}>
          <GlassCard variant="base" rounded="2xl" padding="lg" className="h-full relative overflow-hidden border border-white/40">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-10" style={{ background: colors.brand.secondary }}></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7 border w-fit" style={{ borderColor: `${colors.brand.secondary}20`, backgroundColor: "rgba(255,255,255,0.65)" }}>
                <Rocket className="w-4 h-4" style={{ color: colors.brand.secondary }} />
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: colors.brand.primary }}>Fully Connected Marketing Stack</span>
              </div>
              <h3 className="text-2xl font-black leading-tight mb-4" style={{ color: colors.brand.primary }}>
                We connect all your marketing efforts
                <br /><span style={{ background: gradients.primary, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>into one unified ecosystem.</span>
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-6">Online and offline — one performance-driven system.</p>
              <div className="space-y-4 mt-auto">
                {["Paid media, SEO, content, and social","Email, automation, and CRM","Offline channels & sales touchpoints","Analytics and reporting systems"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0" style={{ background: colors.brand.secondary }}></div>
                    <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>

        {/* Card 3 - AI That Solves Revenue Problems */}
        <ScrollReveal delay={0.2}>
          <GlassCard variant="base" rounded="2xl" padding="lg" className="h-full relative overflow-hidden border border-white/40">
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-10" style={{ background: colors.brand.secondary }}></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7 border w-fit" style={{ borderColor: `${colors.brand.secondary}20`, backgroundColor: "rgba(255,255,255,0.65)" }}>
                <Sparkles className="w-4 h-4" style={{ color: colors.brand.secondary }} />
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: colors.brand.primary }}>AI Revenue Systems</span>
              </div>
              <h3 className="text-2xl font-black leading-tight mb-4" style={{ color: colors.brand.primary }}>
                AI That Solves
                <br /><span style={{ background: gradients.primary, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Real Revenue Problems</span>
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-6">We implement AI where it actually drives outcomes.</p>
              <div className="space-y-4 mt-auto">
                {[
                  { issue: "Low lead quality", solution: "AI-based qualification" },
                  { issue: "Missed opportunities", solution: "Lead revival systems" },
                  { issue: "Slow sales cycles", solution: "Intelligent automation" },
                  { issue: "Poor customer engagement", solution: "AI-driven interactions" },
                  { issue: "Lack of insights", solution: "Predictive analytics" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between pb-3 border-b border-white/20 last:border-none">
                    <div>
                      <p className="text-sm font-semibold" style={{ color: colors.brand.primary }}>{item.issue}</p>
                      <p className="text-xs text-gray-500">{item.solution}</p>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: colors.brand.secondary }}></div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>

        {/* Card 4 - Repeatable GTM Playbook */}
        <ScrollReveal delay={0.3}>
          <GlassCard variant="base" rounded="2xl" padding="lg" className="h-full relative overflow-hidden border border-white/40">
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10" style={{ background: colors.brand.secondary }}></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7 border w-fit" style={{ borderColor: `${colors.brand.secondary}20`, backgroundColor: "rgba(255,255,255,0.65)" }}>
                <BarChart3 className="w-4 h-4" style={{ color: colors.brand.secondary }} />
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: colors.brand.primary }}>Repeatable GTM Playbook</span>
              </div>
              <h3 className="text-2xl font-black leading-tight mb-4" style={{ color: colors.brand.primary }}>
                We don't just plan —
                <br /><span style={{ background: gradients.primary, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>we build and execute with you.</span>
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-6">End-to-end growth strategy your team can scale with.</p>
              <div className="space-y-4 mt-auto">
                {["End-to-end growth strategy development","Hands-on execution support","Defined processes & systems","Playbooks your team can scale with","Continuous optimization & learning loops"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: colors.brand.secondary }} />
                    <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>

      </div>
    </Container>
  </Section>
</ModernSectionBackground>


{/* ============================================
    7. HOW WE WORK
============================================ */}
<ModernSectionBackground variant="gradient-abstract">
  <Section spacing="xl" animate background="transparent">
    <Container size="xl">

      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center justify-center px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border backdrop-blur-xl" style={{ borderColor: `${colors.brand.secondary}25`, backgroundColor: "rgba(255,255,255,0.6)", color: colors.brand.primary }}>
          How We Work
        </div>
        <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-6" style={{ color: colors.brand.primary }}>
          From First Call
          <br />
          <span style={{ background: gradients.primary, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>To Deal Conversion</span>
        </h2>
        <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          A structured approach designed for measurable outcomes — aligned to your goals, built for real growth.
        </p>
      </div>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
        {[
          {
            number: "01",
            title: "Discovery & Audit",
            description: "We evaluate your current state across business strategy, digital & offline marketing, lead generation, CRM performance, AI readiness, and marketing ROI.",
            points: ["Business strategy & positioning","Digital & offline marketing efforts","Lead generation & conversion systems","CRM performance & data utilization","AI readiness & automation gaps"]
          },
          {
            number: "02",
            title: "Strategy Blueprint",
            description: "We design a complete growth system covering strategic marketing, integrated channel mix, and AI/CRM integration — with a clear execution roadmap.",
            points: ["Positioning, portfolio & pricing strategy","Channel mix & campaign strategy","CRM integration & automation workflows","Execution roadmap with milestones"]
          },
          {
            number: "03",
            title: "Integrated Execution",
            description: "We move from planning to action with defined timelines, responsibilities, campaign execution, AI implementation, and continuous monitoring.",
            points: ["Defined timelines & responsibilities","Campaign execution across channels","AI implementation & CRM alignment","Continuous monitoring & reporting"]
          },
          {
            number: "04",
            title: "Optimize & Scale",
            description: "We track performance against goals, optimize campaigns and funnels, scale high-performing channels, and build internal capabilities for long-term growth.",
            points: ["Performance tracking against goals","Optimization of campaigns & funnels","Scaling high-performing channels","Building internal capabilities"]
          }
        ].map((item, index) => (
          <motion.div key={index} variants={staggerItemVariants} className="h-full">
            <GlassCard variant="base" rounded="2xl" padding="none" hover className="h-full relative overflow-hidden group border border-white/20 backdrop-blur-xl">
              <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: gradients.primary }}></div>
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-gradient-to-br from-[#0000aa]/10 to-transparent rounded-full blur-3xl"></div>
              <div className="relative z-10 flex flex-col h-full p-7">
                <div className="flex items-center justify-between mb-8">
                  <GlowEffect color={colors.brand.secondary} intensity={14}>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black shadow-sm" style={{ backgroundColor: `${colors.brand.secondary}12`, color: colors.brand.secondary }}>
                      {item.number}
                    </div>
                  </GlowEffect>
                  <div className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide" style={{ backgroundColor: `${colors.brand.secondary}10`, color: colors.brand.primary }}>
                    Step {item.number}
                  </div>
                </div>
                <h3 className="text-xl font-black mb-4 tracking-tight" style={{ color: colors.brand.primary }}>{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">{item.description}</p>
                <div className="space-y-3 mt-auto">
                  {item.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: colors.brand.secondary }}></div>
                      <p className="text-xs text-gray-700 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </StaggerContainer>

    </Container>
  </Section>
</ModernSectionBackground>


{/* ============================================
    8. WHY ADVANTEDGE
============================================ */}
<ModernSectionBackground variant="glass-blur">
  <Section spacing="base" animate background="transparent">
    <Container size="xl">

      <SectionHeader
        badge="Why AdvantEdge"
        badgeIcon={<Sparkles className="w-4 h-4" />}
        title="We Are Not Just Another Marketing Agency."
        description="Global experts with business leadership and consulting experience — built for measurable outcomes, not activity."
        align="center"
        maxWidth="3xl"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {[
          { icon: <Globe className="w-6 h-6" />, title: "Global Experts", desc: "Business leadership & consulting experience across markets and industries." },
          { icon: <Layers className="w-6 h-6" />, title: "Strategy + Execution", desc: "Deep expertise in both strategy and hands-on execution — not just advice." },
          { icon: <Sparkles className="w-6 h-6" />, title: "Integrated Approach", desc: "Marketing, sales, and AI working as one connected revenue system." },
          { icon: <BarChart3 className="w-6 h-6" />, title: "Measurable Outcomes", desc: "Built for revenue, pipeline, and ROI — not vanity metrics or activity reports." },
          { icon: <Target className="w-6 h-6" />, title: "Revenue Focus", desc: "Strong focus on pipeline growth, lead quality, and commercial performance." },
          { icon: <Rocket className="w-6 h-6" />, title: "Leadership-Level Thinking", desc: "Hands-on execution combined with executive-level strategic perspective." },
        ].map((item, index) => (
          <ScrollReveal key={index} delay={index * 0.08}>
            <GlassCard variant="base" rounded="2xl" padding="lg" hover className="h-full relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${colors.brand.secondary}12` }}>
                <div style={{ color: colors.brand.secondary }}>{item.icon}</div>
              </div>
              <h3 className="text-base font-bold mb-3" style={{ color: colors.brand.primary }}>{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>

    </Container>
  </Section>
</ModernSectionBackground>


{/* ============================================
    9. CASE STUDIES
============================================ */}
<ModernSectionBackground variant="gradient-tech">
  <Section spacing="base" animate background="transparent">
    <Container size="xl">

      <SectionHeader
        badge="Case Studies"
        badgeIcon={<TrendingUp className="w-4 h-4" />}
        title="Real Transformations. Measurable Growth."
        description="Strategy → Execution → Measurable results. See how we've helped businesses build revenue-generating marketing systems."
        align="center"
        maxWidth="3xl"
      />

      <div className="grid md:grid-cols-3 gap-7 mt-12">
        {[
          {
            industry: "B2B SaaS",
            result: "4.2x Pipeline Growth",
            headline: "From scattered campaigns to a unified revenue engine",
            description: "A SaaS company struggling with disconnected marketing channels and low-quality leads transformed their entire GTM approach — resulting in a 4.2x increase in qualified pipeline within 6 months.",
            tags: ["Strategic Marketing", "AI Lead Qualification", "CRM Integration"],
            metric: "4.2x",
            metricLabel: "Pipeline Growth"
          },
          {
            industry: "Professional Services",
            result: "340% Brand Recall Lift",
            headline: "Positioning-first strategy that became a market authority",
            description: "A consulting firm with no clear market position built a differentiated brand, content engine, and lead nurturing system — establishing thought leadership and tripling inbound inquiries.",
            tags: ["Brand Strategy", "Content Marketing", "LinkedIn Authority"],
            metric: "340%",
            metricLabel: "Brand Recall Lift"
          },
          {
            industry: "Manufacturing",
            result: "97% Lead Quality Score",
            headline: "AI-powered qualification that transformed the sales pipeline",
            description: "An industrial manufacturer with a sales team chasing unqualified leads implemented AI-driven scoring and CRM automation — dramatically improving lead quality and shortening the sales cycle.",
            tags: ["AI Solutions", "CRM Automation", "Sales Alignment"],
            metric: "97%",
            metricLabel: "Lead Quality Score"
          }
        ].map((study, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <GlassCard variant="base" rounded="2xl" padding="lg" hover className="h-full relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-8" style={{ background: colors.brand.secondary }}></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full" style={{ backgroundColor: `${colors.brand.secondary}12`, color: colors.brand.secondary }}>{study.industry}</span>
                  <div className="text-right">
                    <div className="text-2xl font-black" style={{ color: colors.brand.secondary }}>{study.metric}</div>
                    <div className="text-xs text-gray-500">{study.metricLabel}</div>
                  </div>
                </div>
                <h3 className="text-base font-black mb-3 leading-snug" style={{ color: colors.brand.primary }}>{study.headline}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">{study.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {study.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-full border" style={{ borderColor: `${colors.brand.secondary}20`, color: colors.brand.primary, backgroundColor: "rgba(255,255,255,0.5)" }}>{tag}</span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="text-center mt-10">
          <Link to="/case-studies" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all duration-300 hover:shadow-lg group" style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}>
            View All Case Studies
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </ScrollReveal>

    </Container>
  </Section>
</ModernSectionBackground>


{/* ============================================
    10. CTA SECTION — AI MARKETING READINESS ASSESSMENT
============================================ */}
<ModernSectionBackground variant="gradient-abstract">
  <Section spacing="base" animate background="transparent">
    <Container size="xl">
      <ScrollReveal>
        <GlassCard variant="strong" rounded="3xl" padding="none" className="relative overflow-hidden border border-white/20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#0000aa]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#ffb300]/8 to-transparent rounded-full blur-3xl"></div>

          <div className="relative z-10 px-8 py-12 lg:px-16 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left */}
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border" style={{ borderColor: `${colors.brand.accent}40`, backgroundColor: `${colors.brand.accent}10`, color: colors.brand.primary }}>
                  Free Assessment
                </div>
                <h2 className="text-3xl lg:text-4xl font-black leading-tight mb-5" style={{ color: colors.brand.primary }}>
                  Get Your Free AI Marketing
                  <br />
                  <span style={{ background: gradients.primary, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Readiness Assessment</span>
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  In one focused session, we evaluate your marketing, CRM, and AI readiness — and identify exactly where you're losing revenue.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "CRM health & data utilization audit",
                    "Channel-wise performance & ROI insights",
                    "AI readiness score with quick-win opportunities",
                    "Custom 90-day growth roadmap"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: colors.brand.secondary }} />
                      <p className="text-sm font-medium" style={{ color: colors.brand.primary }}>{item}</p>
                    </div>
                  ))}
                </div>
                <MagneticButton strength={0.3}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    style={{ background: gradients.primary }}
                  >
                    Claim Your Free Assessment
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>
                <p className="text-xs text-gray-500 mt-4">We onboard a limited number of clients each quarter to ensure execution quality.</p>
              </div>

              {/* Right - Focus Areas */}
              <div>
                <p className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: colors.brand.secondary }}>Focus Areas</p>
                <div className="space-y-3">
                  {[
                    { icon: <TrendingUp className="w-5 h-5" />, label: "More qualified leads / pipeline" },
                    { icon: <Sparkles className="w-5 h-5" />, label: "AI & CRM implementation" },
                    { icon: <Layers className="w-5 h-5" />, label: "Integrated marketing strategy" },
                    { icon: <Users className="w-5 h-5" />, label: "Sales & marketing alignment" },
                    { icon: <Target className="w-5 h-5" />, label: "All of the above" },
                  ].map((item, i) => (
                    <GlassCard key={i} variant="base" rounded="xl" padding="base" hover className="flex items-center gap-4">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.brand.secondary}12` }}>
                        <div style={{ color: colors.brand.secondary }}>{item.icon}</div>
                      </div>
                      <p className="text-sm font-semibold" style={{ color: colors.brand.primary }}>{item.label}</p>
                    </GlassCard>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </GlassCard>
      </ScrollReveal>
    </Container>
  </Section>
</ModernSectionBackground>


      
      {/* ============================================
          17. TESTIMONIALS (Single Combined Section)
          ============================================ */}
      <div className="flex flex-col">
        <TestimonialsCarousel />
        
      </div>
{/* ============================================
    18. INDUSTRIES WE SERVE
============================================ */}
<ModernSectionBackground variant="mesh-gradient-purple">
  <Section spacing="base" animate background="transparent">
    <Container size="xl">

      <SectionHeader
        badge="Industry-Specific Expertise"
        badgeIcon={<Building2 className="w-4 h-4" />}
        title="Industries We Serve"
        description="We bring sector-specific expertise to every engagement."
        align="center"
        maxWidth="2xl"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        
        <ScrollReveal>
          <ImageFeatureCard
            title="Healthcare & Life Sciences"
            description="Medical devices, pharmaceuticals, biotech, and digital health solutions."
            imageUrl="https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            icon={Hospital}
            link="/industries"
            linkText="Healthcare Solutions"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ImageFeatureCard
            title="Professional Services"
            description="Consulting, legal, accounting, financial advisory, and specialized services."
            imageUrl="https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            icon={Briefcase}
            link="/industries"
            linkText="Professional Services"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <ImageFeatureCard
            title="Retail & E-Commerce"
            description="Consumer brands, D2C businesses, omnichannel retail, and marketplaces."
            imageUrl="https://images.unsplash.com/photo-1605513524006-063ed6ed31e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            icon={Store}
            link="/industries"
            linkText="Retail Solutions"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <ImageFeatureCard
            title="Manufacturing & Industrial"
            description="Advanced manufacturing, industrial equipment, and supply chain solutions."
            imageUrl="https://images.unsplash.com/photo-1764114235891-66ff86abaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            icon={Factory}
            link="/industries"
            linkText="Industrial Marketing"
          />
        </ScrollReveal>

      </div>

    </Container>
  </Section>
</ModernSectionBackground>
      

      {/* ============================================
    20. BLOG PREVIEW
============================================ */}
<ModernSectionBackground variant="glass-blur">
  <Section spacing="base" animate background="transparent">
    <Container size="xl">

      <SectionHeader
        badge="Insights & Resources"
        badgeIcon={<Lightbulb className="w-4 h-4" />}
        title="Latest Insights & Strategic Thinking"
        description="Perspectives, frameworks, and marketing intelligence designed for growth-focused organizations."
        align="center"
        maxWidth="2xl"
      />

      <div className="mt-8">
        <BlogPreview />
      </div>

    </Container>
  </Section>
</ModernSectionBackground>

      {/* ============================================
          21. FAQ SECTION
          ============================================ */}
      <ModernSectionBackground variant="mesh-gradient-blue">
        <Section spacing="compact" animate background="transparent">
        <Container size="md">
          <SectionHeader
            badge="Questions & Answers"
            badgeIcon={<Heart className="w-4 h-4" />}
            title="Frequently Asked Questions"
            description="Everything you need to know about partnering with AdvantEdge for strategic marketing excellence."
            align="center"
            maxWidth="md"
          />

          <ScrollReveal>
            <Accordion items={faqItems} />
          </ScrollReveal>
        </Container>
        </Section>
      </ModernSectionBackground>

   
    </PageBackground>
  );
}

export default HomePage;
