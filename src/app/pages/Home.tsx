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
                Strategic Marketing. Integrated Execution AI Powered Growth{' '}
                <span className="relative inline-block">
                  
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-1.5 -z-0"
                    style={{ backgroundColor: colors.brand.accent, opacity: 0.3 }}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  />
                </span>{' '}
               
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
                    Start Conversation
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
  2.Who We Are (Built for Organizations That Expect More)
  ============================================ */}
<ModernSectionBackground variant="image-overlay-team">
  <Section spacing="base" animate background="transparent">
    <Container size="xl">
      <SectionHeader
        badge="Who We Are"
        badgeIcon={<Shield className="w-4 h-4" />}
        title="Built for Organizations That Expect More"
        description="A strategic and integrated marketing solution provider with AI capabilities - customized for every business to achieve its growth goals.
"
        align="center"
        maxWidth="3xl"
      />

      {/* Main Value Proposition */}
      <ScrollReveal>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto mb-16">
          {/* Left: Image */}
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

            {/* Floating Stats Badge */}
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

          {/* Right: Content */}
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
              AdvantEdge partners with growth-focused businesses to transform marketing into a predictable revenue engine.
We don’t just advise - we align strategy, execution, and technology to deliver measurable business outcomes.

            </p>

            <div className="space-y-4 pt-4">
              {[
                {
                  icon: <Target className="w-5 h-5" />,
                  title: 'Strategic Leadership',
                  text: 'We function as an extension of your executive team, aligning marketing initiatives directly with business priorities.'
                },
                {
                  icon: <Layers className="w-5 h-5" />,
                  title: 'Integrated Systems',
                  text: 'Our frameworks coordinate brand, digital, content, and sales activation into unified growth systems.'
                },
                {
                  icon: <BarChart3 className="w-5 h-5" />,
                  title: 'Performance Obsession',
                  text: 'Every initiative is measured, analyzed, and optimized for maximum business impact and ROI.'
                }
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

            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
              className="pt-4"
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-base font-bold group"
                style={{ color: colors.brand.secondary }}
              >
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
          3. CLIENT LOGO CAROUSEL
          ============================================ */}
      <ClientLogoCarousel />






{/* ============================================
    6. THREE DISCIPLINES. ONE REVENUE ENGINE.
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
          9. CORE CAPABILITIES, UNIFIED BY STRATEGY
          ============================================ */}
      <ModernSectionBackground variant="mesh-gradient-purple">
        <Section spacing="base" animate background="transparent">
        <Container size="lg">
          <SectionHeader
            badge="Core Capabilities, Unified by Strategy"
            badgeIcon={<Layers className="w-4 h-4" />}
            title="Everything Required to Build, Activate, and Scale Marketing"
            description="Integrated marketing is not a collection of tactics. It is an architecture."
            align="center"
            maxWidth="2xl"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-8 mb-10">
            <ScrollReveal>
              <ImageFeatureCard
                title="Digital Marketing Excellence"
                description="Performance-driven campaigns engineered for pipeline quality and measurable ROI."
                imageUrl="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ1NDI3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                icon={MonitorSmartphone}
                link="/services/digital-marketing"
                linkText="Learn More"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <ImageFeatureCard
                title="Brand Development"
                description="Strategic positioning and identity systems that create competitive advantage."
                imageUrl="https://images.unsplash.com/photo-1764740109279-c7a8abd78821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMGNyZWF0aXZlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NDQ2Mjk0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                icon={Eye}
                link="/services/brand-development"
                linkText="Explore Services"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <ImageFeatureCard
                title="Website Strategy"
                description="High-performance digital infrastructure built for credibility and conversion."
                imageUrl="https://images.unsplash.com/photo-1540397106260-e24a507a08ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzQ0MzcwODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                icon={Rocket}
                link="/services"
                linkText="View Details"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                We align positioning, messaging, digital infrastructure, demand generation, brand systems, and performance measurement into one coordinated framework.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-6">
            <ExpandableServiceCards services={capabilities} />
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-6 text-center">
              <GlassCard variant="base" rounded="lg" padding="base" className="max-w-3xl mx-auto">
                <p className="text-sm font-bold mb-2" style={{ color: colors.brand.primary }}>
                  We do not deploy disconnected activities.
                </p>
                <p className="text-base font-bold" style={{ color: colors.brand.secondary }}>
                  We build coordinated systems.
                </p>
              </GlassCard>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-6">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm bg-transparent border-2 transition-all duration-300 hover:shadow-lg group"
                style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
              >
                Explore All Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </Container>
        </Section>
      </ModernSectionBackground>









      {/* ============================================
    9. CORE CAPABILITIES, UNIFIED BY STRATEGY
============================================ */}
<ModernSectionBackground variant="mesh-gradient-purple">
  <Section spacing="lg" animate background="transparent">
    <Container size="xl">

      {/* ============================================
          SECTION HEADER
      ============================================ */}
      <SectionHeader
        badge="Core Capabilities"
        badgeIcon={<Layers className="w-4 h-4" />}
        title="Everything Required to Build, Activate & Scale Growth"
        description="Integrated marketing is not a collection of tactics. It is a coordinated business growth system."
        align="center"
        maxWidth="3xl"
      />

      {/* ============================================
          NEW PREMIUM CAPABILITIES GRID
      ============================================ */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-16">

        {[
          {
            number: "01",
            title: "Strategic Marketing",
            description:
              "Revenue-focused marketing systems aligned with business objectives, market positioning, and long-term growth.",
            points: [
              "Positioning & messaging",
              "Campaign architecture",
              "Pipeline-driven execution"
            ]
          },

          {
            number: "02",
            title: "Brand Systems",
            description:
              "Distinct identity systems engineered for credibility, market authority, and competitive differentiation.",
            points: [
              "Brand identity systems",
              "Communication frameworks",
              "Market differentiation"
            ]
          },

          {
            number: "03",
            title: "Digital Infrastructure",
            description:
              "High-performance websites, CRM ecosystems, automation workflows, and conversion systems.",
            points: [
              "Website strategy",
              "CRM & automation",
              "Conversion optimization"
            ]
          },

          {
            number: "04",
            title: "AI & Growth Operations",
            description:
              "AI-enhanced workflows and operational systems designed for scalability, efficiency, and measurable ROI.",
            points: [
              "AI workflow systems",
              "Operational automation",
              "Performance intelligence"
            ]
          }

        ].map((item, index) => (

          <motion.div
            key={index}
            variants={staggerItemVariants}
            className="h-full"
          >

            <GlassCard
              variant="base"
              rounded="3xl"
              padding="none"
              hover
              className="h-full relative overflow-hidden border border-white/20 group backdrop-blur-xl"
            >

              {/* Hover Top Line */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: gradients.primary }}
              ></div>

              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-br from-[#0000aa]/10 to-transparent rounded-full blur-3xl"></div>

              {/* Inner */}
              <div className="relative z-10 flex flex-col h-full p-8 lg:p-9">

                {/* ============================================
                    TOP
                ============================================ */}
                <div className="flex items-center justify-between mb-8">

                  {/* Number Box */}
                  <GlowEffect
                    color={colors.brand.secondary}
                    intensity={14}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-black"
                      style={{
                        backgroundColor: `${colors.brand.secondary}12`,
                        color: colors.brand.secondary
                      }}
                    >
                      {item.number}
                    </div>
                  </GlowEffect>

                  {/* Mini Badge */}
                  <div
                    className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{
                      backgroundColor: `${colors.brand.secondary}10`,
                      color: colors.brand.primary
                    }}
                  >
                    Capability
                  </div>

                </div>

                {/* ============================================
                    TITLE
                ============================================ */}
                <h3
                  className="text-[24px] leading-[1.2] font-black tracking-tight mb-5"
                  style={{ color: colors.brand.primary }}
                >
                  {item.title}
                </h3>

                {/* ============================================
                    DESCRIPTION
                ============================================ */}
                <p className="text-[15px] text-gray-600 leading-[1.9] mb-9 min-h-[125px]">
                  {item.description}
                </p>

                {/* ============================================
                    FEATURE LIST
                ============================================ */}
                <div className="space-y-5 mt-auto">

                  {item.points.map((point, i) => (

                    <div
                      key={i}
                      className="flex items-start gap-4"
                    >

                      <div
                        className="w-2.5 h-2.5 rounded-full mt-[9px] shrink-0"
                        style={{
                          background: colors.brand.secondary
                        }}
                      ></div>

                      <p className="text-[14px] text-gray-700 leading-[1.7]">
                        {point}
                      </p>

                    </div>

                  ))}

                </div>

              </div>
            </GlassCard>
          </motion.div>
        ))}

      </StaggerContainer>

      {/* ============================================
          BOTTOM STRATEGY STRIP
      ============================================ */}
      <ScrollReveal delay={0.3}>
        <div className="mt-16 lg:mt-20">

          <GlassCard
            variant="strong"
            rounded="3xl"
            padding="none"
            className="relative overflow-hidden border border-white/20"
          >

            {/* Glow Effects */}
            <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-gradient-to-br from-[#0000aa]/8 to-transparent rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-gradient-to-tl from-[#ffb300]/8 to-transparent rounded-full blur-3xl"></div>

            {/* Inner */}
            <div className="relative z-10 px-8 py-10 lg:px-14 lg:py-12">

              <div className="grid lg:grid-cols-[1.5fr_0.7fr] gap-10 items-center">

                {/* LEFT */}
                <div>

                  <div
                    className="inline-flex items-center px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] mb-6"
                    style={{
                      backgroundColor: `${colors.brand.secondary}10`,
                      color: colors.brand.primary
                    }}
                  >
                    Unified Growth Infrastructure
                  </div>

                  <h3
                    className="text-3xl lg:text-[46px] font-black leading-[1.05] tracking-tight mb-5"
                    style={{ color: colors.brand.primary }}
                  >
                    We Don't Deploy
                    <br />

                    <span
                      style={{
                        background: gradients.primary,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}
                    >
                      Disconnected Activities.
                    </span>
                  </h3>

                  <p className="text-[15px] lg:text-[17px] text-gray-700 leading-[1.9] max-w-3xl">
                    We align positioning, messaging, digital infrastructure,
                    automation systems, AI workflows, and performance marketing
                    into one coordinated growth architecture.
                  </p>

                </div>

                {/* RIGHT */}
                <div className="flex lg:justify-end">

                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-2xl text-sm font-bold text-white shadow-2xl hover:scale-[1.03] transition-all duration-300 group"
                    style={{
                      background: gradients.primary
                    }}
                  >
                    Explore All Services

                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>

                </div>

              </div>
            </div>
          </GlassCard>
        </div>
      </ScrollReveal>

    </Container>
  </Section>
</ModernSectionBackground>

































   

{/* ============================================
    HOW WE WORK — PREMIUM PROCESS SECTION
============================================ */}
<ModernSectionBackground variant="gradient-abstract">
  <Section spacing="xl" animate background="transparent">
    <Container size="xl">

      {/* ============================================
          HEADER
      ============================================ */}
      <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-24">

        {/* Badge */}
        <div
          className="inline-flex items-center justify-center px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] mb-7 border backdrop-blur-xl"
          style={{
            borderColor: `${colors.brand.secondary}25`,
            backgroundColor: "rgba(255,255,255,0.6)",
            color: colors.brand.primary
          }}
        >
          How We Work
        </div>

        {/* Title */}
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-7"
          style={{ color: colors.brand.primary }}
        >
          From First Call
          <br />

          <span
            style={{
              background: gradients.primary,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            To Deal Conversion
          </span>
        </h2>

        {/* Description */}
        <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          A structured approach designed for measurable outcomes —
          aligned to your goals, built for real growth.
        </p>

      </div>

      {/* ============================================
          PROCESS CARDS
      ============================================ */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 xl:gap-8">

        {[
          {
            number: "01",
            title: "Discovery & Audit",
            description:
              "We evaluate your current business ecosystem, positioning, marketing systems, and growth bottlenecks.",
            points: [
              "Business strategy & positioning",
              "Digital & offline marketing",
              "Lead generation systems"
            ]
          },

          {
            number: "02",
            title: "Strategy Blueprint",
            description:
              "We architect a complete revenue-focused growth framework integrating marketing, automation, CRM, and AI workflows.",
            points: [
              "Strategic marketing planning",
              "Integrated campaign systems",
              "AI & CRM integration"
            ]
          },

          {
            number: "03",
            title: "Integrated Execution",
            description:
              "We execute coordinated campaigns, automation workflows, CRM alignment, and reporting systems across channels.",
            points: [
              "Campaign execution",
              "AI implementation",
              "Performance reporting"
            ]
          },

          {
            number: "04",
            title: "Optimize & Scale",
            description:
              "We continuously optimize performance, improve conversion efficiency, and scale high-performing channels.",
            points: [
              "Campaign optimization",
              "Scaling winning channels",
              "Long-term growth systems"
            ]
          }

        ].map((item, index) => (

          <motion.div
            key={index}
            variants={staggerItemVariants}
            className="h-full"
          >

            <GlassCard
              variant="base"
              rounded="2xl"
              padding="none"
              hover
              className="h-full relative overflow-hidden group border border-white/20 backdrop-blur-xl"
            >

              {/* Hover Gradient */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: gradients.primary }}
              ></div>

              {/* Soft Glow */}
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-gradient-to-br from-[#0000aa]/10 to-transparent rounded-full blur-3xl"></div>

              {/* Card Inner */}
              <div className="relative z-10 flex flex-col h-full p-7 lg:p-8">

                {/* ============================================
                    TOP ROW
                ============================================ */}
                <div className="flex items-center justify-between mb-8">

                  {/* Number Box */}
                  <GlowEffect
                    color={colors.brand.secondary}
                    intensity={14}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-[13px] font-black shadow-sm"
                      style={{
                        backgroundColor: `${colors.brand.secondary}12`,
                        color: colors.brand.secondary
                      }}
                    >
                      {item.number}
                    </div>
                  </GlowEffect>

                  {/* Step Badge */}
                  <div
                    className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.16em]"
                    style={{
                      backgroundColor: `${colors.brand.secondary}10`,
                      color: colors.brand.primary
                    }}
                  >
                    Step {item.number}
                  </div>

                </div>

                {/* ============================================
                    TITLE
                ============================================ */}
                <h3
                  className="text-[22px] leading-[1.2] font-black mb-5 tracking-tight"
                  style={{ color: colors.brand.primary }}
                >
                  {item.title}
                </h3>

                {/* ============================================
                    DESCRIPTION
                ============================================ */}
                <p className="text-[14px] text-gray-600 leading-[1.8] mb-8 min-h-[110px]">
                  {item.description}
                </p>

                {/* ============================================
                    FEATURE LIST
                ============================================ */}
                <div className="space-y-4 mt-auto pt-2">

                  {item.points.map((point, i) => (

                    <div
                      key={i}
                      className="flex items-start gap-3"
                    >

                      {/* Dot */}
                      <div
                        className="w-2 h-2 rounded-full mt-[9px] shrink-0"
                        style={{
                          background: colors.brand.secondary
                        }}
                      ></div>

                      {/* Text */}
                      <p className="text-[13px] text-gray-700 leading-[1.7]">
                        {point}
                      </p>

                    </div>

                  ))}

                </div>

              </div>
            </GlassCard>
          </motion.div>
        ))}

      </StaggerContainer>

      {/* ============================================
          BOTTOM CTA STRIP
      ============================================ */}
      <ScrollReveal delay={0.4}>
        <div className="mt-14 lg:mt-16">

          <GlassCard
            variant="strong"
            rounded="3xl"
            padding="none"
            className="relative overflow-hidden border border-white/20"
          >

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0000aa]/8 to-transparent rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-[#ffb300]/8 to-transparent rounded-full blur-3xl"></div>

            {/* Inner */}
            <div className="relative z-10 px-8 py-9 lg:px-12 lg:py-10">

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                {/* LEFT */}
                <div className="max-w-3xl">

                  <h3
                    className="text-2xl lg:text-[38px] font-black leading-[1.08] tracking-tight mb-4"
                    style={{ color: colors.brand.primary }}
                  >
                    Strategy. Execution. Optimization.
                    <br />

                    <span
                      style={{
                        background: gradients.primary,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}
                    >
                      One Connected Growth System.
                    </span>
                  </h3>

                  <p className="text-[15px] lg:text-base text-gray-700 leading-[1.9] max-w-2xl">
                    Every stage is engineered to remove inefficiencies,
                    improve execution quality, and create predictable,
                    scalable business growth.
                  </p>

                </div>

                {/* RIGHT */}
                <div className="flex lg:justify-end">

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-2xl text-sm font-bold text-white shadow-2xl hover:scale-[1.03] transition-all duration-300 group"
                    style={{
                      background: gradients.primary
                    }}
                  >
                    Start Your Growth Journey

                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>

                </div>

              </div>
            </div>
          </GlassCard>
        </div>
      </ScrollReveal>

    </Container>
  </Section>
</ModernSectionBackground>










{/* ============================================
    6. WHY ORGANIZATIONS CHOOSE ADVANTEDGE
============================================ */}
<ModernSectionBackground variant="glass-blur">
  <Section spacing="base" animate background="transparent">
    <Container size="xl">

      {/* ============================================
          SECTION HEADER
      ============================================ */}
      <SectionHeader
        badge="Why AdvantEdge"
        badgeIcon={<Sparkles className="w-4 h-4" />}
        title="Built for Businesses That Require More Than Traditional Marketing"
        description="We combine strategic intelligence, AI-powered systems, and disciplined execution to create scalable growth infrastructures designed for measurable business performance."
        align="center"
        maxWidth="4xl"
      />

      {/* ============================================
          MAIN BENTO GRID
      ============================================ */}
      <div className="grid lg:grid-cols-3 gap-6 mt-12">

        {/* ============================================
            LARGE FEATURE CARD
        ============================================ */}
        <ScrollReveal className="lg:col-span-2">

          <GlassCard
            variant="base"
            rounded="2xl"
            padding="lg"
            className="h-full relative overflow-hidden"
          >

            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
              style={{
                background: colors.brand.secondary
              }}
            ></div>

            <div className="relative z-10">

              {/* Top Label */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                style={{
                  borderColor: `${colors.brand.secondary}20`,
                  backgroundColor: "rgba(255,255,255,0.65)"
                }}
              >
                <Sparkles
                  className="w-4 h-4"
                  style={{ color: colors.brand.secondary }}
                />

                <span
                  className="text-sm font-semibold"
                  style={{ color: colors.brand.primary }}
                >
                  AI-Integrated Strategic Systems
                </span>
              </div>

              {/* Heading */}
              <h3
                className="text-2xl lg:text-3xl font-black leading-tight mb-6"
                style={{ color: colors.brand.primary }}
              >
                We Build Connected
                <br />

                <span
                  style={{
                    background: gradients.primary,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  Growth Ecosystems
                </span>

              </h3>

              {/* Description */}
              <div className="space-y-5 text-gray-700 leading-relaxed">

                <p className="text-base">
                  Traditional marketing often fails because execution becomes
                  fragmented across channels, teams, platforms, and disconnected
                  campaigns. We eliminate fragmentation through integrated
                  growth systems built around strategic alignment and measurable
                  performance.
                </p>

                <p className="text-base">
                  Our approach combines AI-assisted intelligence, strategic
                  positioning, automation, digital infrastructure, analytics,
                  conversion systems, and customer acquisition into one unified
                  operational framework.
                </p>

              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-5 mt-8">

                <GlassCard
                  variant="base"
                  rounded="xl"
                  padding="base"
                  className="text-center"
                >
                  <div
                    className="text-2xl lg:text-3xl font-black mb-1"
                    style={{ color: colors.brand.secondary }}
                  >
                    250+
                  </div>

                  <p className="text-xs text-gray-600 font-medium">
                    Integrated Campaigns
                  </p>
                </GlassCard>

                <GlassCard
                  variant="base"
                  rounded="xl"
                  padding="base"
                  className="text-center"
                >
                  <div
                    className="text-2xl lg:text-3xl font-black mb-1"
                    style={{ color: colors.brand.secondary }}
                  >
                    AI+
                  </div>

                  <p className="text-xs text-gray-600 font-medium">
                    Intelligent Systems
                  </p>
                </GlassCard>

                <GlassCard
                  variant="base"
                  rounded="xl"
                  padding="base"
                  className="text-center"
                >
                  <div
                    className="text-2xl lg:text-3xl font-black mb-1"
                    style={{ color: colors.brand.secondary }}
                  >
                    4.8x
                  </div>

                  <p className="text-xs text-gray-600 font-medium">
                    Average ROI
                  </p>
                </GlassCard>

              </div>

            </div>

          </GlassCard>

        </ScrollReveal>

        {/* ============================================
            RIGHT STACKED CARDS
        ============================================ */}
        <div className="space-y-6">

          {/* Card 1 */}
          <ScrollReveal delay={0.1}>

            <GlassCard
              variant="base"
              rounded="2xl"
              padding="lg"
              hover
              className="relative overflow-hidden"
            >

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

              <h3
                className="text-xl font-bold mb-4"
                style={{ color: colors.brand.primary }}
              >
                Strategic Alignment
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                Every initiative is aligned with customer positioning,
                business goals, conversion performance, and scalable
                commercial outcomes.
              </p>

            </GlassCard>

          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal delay={0.2}>

            <GlassCard
              variant="base"
              rounded="2xl"
              padding="lg"
              hover
              className="relative overflow-hidden"
            >

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  backgroundColor: `${colors.brand.secondary}12`
                }}
              >
                <BarChart3
                  className="w-7 h-7"
                  style={{ color: colors.brand.secondary }}
                />
              </div>

              <h3
                className="text-xl font-bold mb-4"
                style={{ color: colors.brand.primary }}
              >
                Performance Intelligence
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                AI-assisted optimization, analytics, behavioral insights,
                and conversion tracking frameworks designed for measurable
                and continuously improving performance.
              </p>

            </GlassCard>

          </ScrollReveal>

        </div>

      </div>

    </Container>
  </Section>
</ModernSectionBackground>









      {/* ============================================
    8. OUR EXPERTISE (Integrated Marketing, Strategy, Execution Combined)
    ============================================ */}
<ModernSectionBackground variant="gradient-tech">
  <Section spacing="base" animate background="transparent">
    <Container size="xl">
      <SectionHeader
        badge="Strategic Execution Excellence"
        badgeIcon={<Zap className="w-4 h-4" />}
        title="Where Strategy Becomes Action"
        description="The gap between strategy and execution is where most marketing fails. We eliminate that gap through disciplined integration."
        align="center"
        maxWidth="3xl"
      />

      {/* Hero Image + Content */}
      <ScrollReveal>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1758691736424-4b4273948341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBzdHJhdGVneXxlbnwxfHx8fDE3NzQ1NTg3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Executive business strategy meeting"
                className="w-full h-[280px] lg:h-[380px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Floating stat badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <GlassCard
                  variant="strong"
                  rounded="xl"
                  padding="base"
                  className="backdrop-blur-md"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-gray-700 mb-1">
                        Execution Success Rate
                      </p>

                      <div className="flex items-baseline gap-1">
                        <span
                          className="text-2xl font-bold"
                          style={{ color: colors.brand.secondary }}
                        >
                          97%
                        </span>

                        <span className="text-sm text-gray-600">
                          on-time delivery
                        </span>
                      </div>
                    </div>

                    <Zap
                      className="w-8 h-8"
                      style={{ color: colors.brand.accent }}
                    />
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3
                className="text-xl lg:text-2xl font-bold mb-3"
                style={{ color: colors.brand.primary }}
              >
                From Planning to{" "}
                <span style={{ color: colors.brand.secondary }}>
                  Performance
                </span>
              </h3>

              <div
                className="h-1 w-16 rounded-full mb-4"
                style={{ background: gradients.primary }}
              ></div>

              <p className="text-sm text-gray-700 leading-relaxed mb-5">
                We bridge strategic intent and tactical execution through
                disciplined implementation frameworks. Every initiative includes
                resource allocation, channel orchestration, performance
                benchmarks, and accountability at every phase.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Target,
                  title: "Strategic Clarity",
                  desc: "Positioning defined before activation",
                },
                {
                  icon: Rocket,
                  title: "Disciplined Execution",
                  desc: "Systematic implementation frameworks",
                },
                {
                  icon: BarChart3,
                  title: "Continuous Optimization",
                  desc: "Performance-driven refinement",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    duration: 0.5,
                  }}
                >
                  <GlassCard
                    variant="base"
                    rounded="lg"
                    padding="base"
                    hover
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="p-2.5 rounded-lg flex-shrink-0"
                        style={{
                          backgroundColor: `${colors.brand.secondary}10`,
                        }}
                      >
                        <item.icon
                          className="w-6 h-6"
                          style={{ color: colors.brand.secondary }}
                        />
                      </div>

                      <div>
                        <h4
                          className="text-base font-bold mb-1"
                          style={{ color: colors.brand.primary }}
                        >
                          {item.title}
                        </h4>

                        <p className="text-sm text-gray-600">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </ScrollReveal>
    </Container>
  </Section>
</ModernSectionBackground>

     





{/* ============================================
    7. HOW WE HELP YOU
============================================ */}
<ModernSectionBackground variant="mesh-gradient-purple">
  <Section spacing="base" animate background="transparent">
    <Container size="xl">

      {/* ============================================
          SECTION HEADER
      ============================================ */}
      <SectionHeader
        badge="Execution-Focused Growth Systems"
        badgeIcon={<Sparkles className="w-4 h-4" />}
        title="How We Help You Build Scalable Revenue Growth"
        description="We combine strategic marketing, integrated execution, AI-powered systems, and operational discipline into one connected growth infrastructure."
        align="center"
        maxWidth="4xl"
      />

      {/* ============================================
          PERFECT 2x2 BENTO GRID
      ============================================ */}
      <div className="grid lg:grid-cols-2 gap-7 mt-14 items-stretch">

        {/* ============================================
            CARD 1
        ============================================ */}
        <ScrollReveal>

          <GlassCard
            variant="base"
            rounded="2xl"
            padding="lg"
            className="h-full relative overflow-hidden border border-white/40"
          >

            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10"
              style={{
                background: colors.brand.secondary
              }}
            ></div>

            <div className="relative z-10 h-full flex flex-col">

              {/* Label */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7 border w-fit"
                style={{
                  borderColor: `${colors.brand.secondary}20`,
                  backgroundColor: "rgba(255,255,255,0.65)"
                }}
              >
                <Target
                  className="w-4 h-4"
                  style={{ color: colors.brand.secondary }}
                />

                <span
                  className="text-xs font-bold uppercase tracking-wide"
                  style={{ color: colors.brand.primary }}
                >
                  Revenue-Tied Strategic Marketing
                </span>

              </div>

              {/* Heading */}
              <h3
                className="text-3xl font-black leading-tight mb-5"
                style={{ color: colors.brand.primary }}
              >
                Every Strategic Decision
                <br />

                <span
                  style={{
                    background: gradients.primary,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  Connected to Revenue
                </span>

              </h3>

              {/* Description */}
              <p className="text-base text-gray-700 leading-relaxed mb-8">
                We don’t build strategies in isolation.
                Every decision is mapped to revenue,
                pipeline growth, customer acquisition,
                and long-term business scalability.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-5 mt-auto">

                {[
                  "Clear growth roadmap aligned to business goals",
                  "Defined target segments & positioning",
                  "Measurable KPIs tied to revenue",
                  "Continuous strategy refinement based on performance"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl border border-white/30 bg-white/40 backdrop-blur-sm"
                  >

                    <div className="flex items-start gap-4">

                      <div
                        className="w-3 h-3 rounded-full mt-1.5 shrink-0"
                        style={{
                          background: colors.brand.secondary
                        }}
                      ></div>

                      <p className="text-sm text-gray-700 leading-relaxed">
                        {item}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </GlassCard>

        </ScrollReveal>

        {/* ============================================
            CARD 2
        ============================================ */}
        <ScrollReveal delay={0.1}>

          <GlassCard
            variant="base"
            rounded="2xl"
            padding="lg"
            className="h-full relative overflow-hidden border border-white/40"
          >

            <div
              className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-10"
              style={{
                background: colors.brand.secondary
              }}
            ></div>

            <div className="relative z-10 h-full flex flex-col">

              {/* Label */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7 border w-fit"
                style={{
                  borderColor: `${colors.brand.secondary}20`,
                  backgroundColor: "rgba(255,255,255,0.65)"
                }}
              >
                <Rocket
                  className="w-4 h-4"
                  style={{ color: colors.brand.secondary }}
                />

                <span
                  className="text-xs font-bold uppercase tracking-wide"
                  style={{ color: colors.brand.primary }}
                >
                  Fully Connected Marketing Stack
                </span>

              </div>

              {/* Heading */}
              <h3
                className="text-3xl font-black leading-tight mb-5"
                style={{ color: colors.brand.primary }}
              >
                One Unified
                <br />

                <span
                  style={{
                    background: gradients.primary,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  Marketing Ecosystem
                </span>

              </h3>

              {/* Description */}
              <p className="text-base text-gray-700 leading-relaxed mb-8">
                We connect all your marketing efforts —
                online and offline — into one unified,
                performance-driven ecosystem.
              </p>

              {/* Features */}
              <div className="space-y-5 mt-auto">

                {[
                  "Paid media, SEO, content, and social",
                  "Email, automation, and CRM",
                  "Offline channels & sales touchpoints",
                  "Analytics and reporting systems"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >

                    <div
                      className="w-3 h-3 rounded-full mt-1.5 shrink-0"
                      style={{
                        background: colors.brand.secondary
                      }}
                    ></div>

                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </GlassCard>

        </ScrollReveal>

        {/* ============================================
            CARD 3
        ============================================ */}
        <ScrollReveal delay={0.2}>

          <GlassCard
            variant="base"
            rounded="2xl"
            padding="lg"
            className="h-full relative overflow-hidden border border-white/40"
          >

            <div
              className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-10"
              style={{
                background: colors.brand.secondary
              }}
            ></div>

            <div className="relative z-10 h-full flex flex-col">

              {/* Label */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7 border w-fit"
                style={{
                  borderColor: `${colors.brand.secondary}20`,
                  backgroundColor: "rgba(255,255,255,0.65)"
                }}
              >
                <Sparkles
                  className="w-4 h-4"
                  style={{ color: colors.brand.secondary }}
                />

                <span
                  className="text-xs font-bold uppercase tracking-wide"
                  style={{ color: colors.brand.primary }}
                >
                  AI Revenue Systems
                </span>

              </div>

              {/* Heading */}
              <h3
                className="text-3xl font-black leading-tight mb-5"
                style={{ color: colors.brand.primary }}
              >
                AI That Solves
                <br />

                <span
                  style={{
                    background: gradients.primary,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  Revenue Problems
                </span>

              </h3>

              {/* Description */}
              <p className="text-base text-gray-700 leading-relaxed mb-8">
                We implement AI where it creates measurable
                operational efficiency, lead quality,
                and revenue outcomes.
              </p>

              {/* Problems */}
              <div className="space-y-5 mt-auto">

                {[
                  {
                    issue: "Low lead quality",
                    solution: "AI-based qualification"
                  },
                  {
                    issue: "Missed opportunities",
                    solution: "Lead revival systems"
                  },
                  {
                    issue: "Slow sales cycles",
                    solution: "Intelligent automation"
                  },
                  {
                    issue: "Poor customer engagement",
                    solution: "AI-driven interactions"
                  },
                  {
                    issue: "Lack of insights",
                    solution: "Predictive analytics"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between gap-4 pb-4 border-b border-white/20 last:border-none"
                  >

                    <div>

                      <p
                        className="text-sm font-semibold mb-1"
                        style={{ color: colors.brand.primary }}
                      >
                        {item.issue}
                      </p>

                      <p className="text-xs text-gray-500">
                        {item.solution}
                      </p>

                    </div>

                    <div
                      className="w-3 h-3 rounded-full mt-2 shrink-0"
                      style={{
                        background: colors.brand.secondary
                      }}
                    ></div>

                  </div>
                ))}

              </div>

            </div>

          </GlassCard>

        </ScrollReveal>

        {/* ============================================
            CARD 4
        ============================================ */}
        <ScrollReveal delay={0.3}>

          <GlassCard
            variant="base"
            rounded="2xl"
            padding="lg"
            className="h-full relative overflow-hidden border border-white/40"
          >

            <div
              className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10"
              style={{
                background: colors.brand.secondary
              }}
            ></div>

            <div className="relative z-10 h-full flex flex-col">

              {/* Label */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7 border w-fit"
                style={{
                  borderColor: `${colors.brand.secondary}20`,
                  backgroundColor: "rgba(255,255,255,0.65)"
                }}
              >
                <BarChart3
                  className="w-4 h-4"
                  style={{ color: colors.brand.secondary }}
                />

                <span
                  className="text-xs font-bold uppercase tracking-wide"
                  style={{ color: colors.brand.primary }}
                >
                  Repeatable GTM Playbook
                </span>

              </div>

              {/* Heading */}
              <h3
                className="text-3xl font-black leading-tight mb-5"
                style={{ color: colors.brand.primary }}
              >
                A Repeatable System
                <br />

                <span
                  style={{
                    background: gradients.primary,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  Your Team Can Scale
                </span>

              </h3>

              {/* Description */}
              <p className="text-base text-gray-700 leading-relaxed mb-8">
                We don’t just plan — we build and execute with you.
                Our frameworks are designed for operational clarity,
                scalable execution, and continuous optimization.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-5 mt-auto">

                {[
                  "End-to-end growth strategy development",
                  "Hands-on execution support",
                  "Defined processes & systems",
                  "Playbooks your team can scale with",
                  "Continuous optimization & learning loops"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl border border-white/30 bg-white/40 backdrop-blur-sm"
                  >

                    <div className="flex items-start gap-4">

                      <div
                        className="w-3 h-3 rounded-full mt-1.5 shrink-0"
                        style={{
                          background: colors.brand.secondary
                        }}
                      ></div>

                      <p className="text-sm text-gray-700 leading-relaxed">
                        {item}
                      </p>

                    </div>

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
          11. DIGITAL EXECUTION WITH ACCOUNTABILITY
          ============================================ */}
      <ModernSectionBackground variant="mesh-gradient-blue">
        <Section spacing="base" animate background="transparent">
        <Container size="xl">
          <SectionHeader
            badge="Performance-Driven Digital"
            badgeIcon={<MonitorSmartphone className="w-4 h-4" />}
            title="Digital Execution with Accountability"
            description="Every digital channel must deliver measurable contribution to pipeline quality and revenue growth."
            align="center"
            maxWidth="3xl"
          />

          {/* Hero Image Section */}
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto mb-16">
              {/* Right: Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYW5hbHl0aWNzJTIwcGVyZm9ybWFuY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzc0NTU5MTUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Digital analytics performance dashboard"
                    className="w-full h-[280px] lg:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Floating metrics badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <GlassCard variant="strong" rounded="xl" padding="base" className="backdrop-blur-md">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-xs font-bold text-gray-700 mb-1">Avg. ROAS</p>
                          <div className="flex items-baseline justify-center gap-1">
                            <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>5.8</span>
                            <span className="text-xs text-gray-600">:1</span>
                          </div>
                        </div>
                        <div className="border-x border-gray-300/40">
                          <p className="text-xs font-bold text-gray-700 mb-1">Channel Mix</p>
                          <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>8+</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-700 mb-1">Attribution</p>
                          <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>Full</span>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>
              </motion.div>

              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2 space-y-6"
              >
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-3" style={{ color: colors.brand.primary }}>
                    Transparent, Controlled,{' '}
                    <span style={{ color: colors.brand.secondary }}>Accountable</span>
                  </h3>
                  <div className="h-1 w-16 rounded-full mb-4" style={{ background: gradients.primary }}></div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-5">
                    We engineer technical SEO, multi-platform acquisition (Google, LinkedIn, Meta), conversion optimization, marketing automation, and attribution modeling. Every channel has defined objectives. Every action supports pipeline quality.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'SEO Authority', value: 'Technical' },
                    { label: 'Paid Media', value: 'Multi-Platform' },
                    { label: 'Automation', value: 'Full-Stack' },
                    { label: 'Analytics', value: 'Real-Time' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    >
                      <GlassCard variant="base" rounded="lg" padding="sm" hover>
                        <p className="text-xs text-gray-600 mb-1">{stat.label}</p>
                        <p className="text-base font-bold" style={{ color: colors.brand.primary }}>
                          {stat.value}
                        </p>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mt-8 mb-10">
          </div>

          <ScrollReveal>
            <GlassCard variant="base" rounded="lg" padding="none" className="mt-10 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-10 bg-gradient-to-br from-[#0000aa]/5 to-transparent">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#000131] to-[#0000aa] flex items-center justify-center flex-shrink-0">
                      <Search className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-base font-bold" style={{ color: colors.brand.primary }}>
                      We Engineer
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5" style={{ color: colors.brand.secondary }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-1" style={{ color: colors.brand.primary }}>Technical SEO and authority growth</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5" style={{ color: colors.brand.secondary }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-1" style={{ color: colors.brand.primary }}>Multi-platform acquisition (Google, LinkedIn, Meta)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5" style={{ color: colors.brand.secondary }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-1" style={{ color: colors.brand.primary }}>Conversion rate optimization</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5" style={{ color: colors.brand.secondary }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-1" style={{ color: colors.brand.primary }}>Marketing automation and lead scoring</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5" style={{ color: colors.brand.secondary }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-1" style={{ color: colors.brand.primary }}>Attribution modeling and ROI analysis</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-10 bg-gradient-to-bl from-[#ffb300]/5 to-transparent border-l border-gray-300/40 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-10 h-10 mx-auto mb-3" style={{ color: colors.brand.secondary }} />
                    <p className="text-sm font-bold mb-2 leading-tight" style={{ color: colors.brand.primary }}>
                      Every channel has defined objectives.
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Every action supports pipeline quality and revenue growth.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-300/40">
                      <p className="text-sm font-bold" style={{ color: colors.brand.secondary }}>
                        Digital becomes transparent. Controlled. Accountable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <ScrollReveal delay={0.1}>
              <GlassCard variant="base" rounded="lg" padding="base" className="text-center">
                <MonitorSmartphone className="w-7 h-7 mx-auto mb-2" style={{ color: colors.brand.secondary }} />
                <p className="text-base font-bold mb-1" style={{ color: colors.brand.primary }}>100%</p>
                <p className="text-sm text-gray-600">Channel Accountability</p>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <GlassCard variant="base" rounded="lg" padding="base" className="text-center border-2" style={{ borderColor: colors.brand.secondary }}>
                <LineChart className="w-7 h-7 mx-auto mb-2" style={{ color: colors.brand.accent }} />
                <p className="text-base font-bold mb-1" style={{ color: colors.brand.primary }}>Real-Time</p>
                <p className="text-sm text-gray-600">Performance Tracking</p>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <GlassCard variant="base" rounded="lg" padding="base" className="text-center">
                <TrendingUp className="w-7 h-7 mx-auto mb-2" style={{ color: colors.brand.secondary }} />
                <p className="text-base font-bold mb-1" style={{ color: colors.brand.primary }}>Continuous</p>
                <p className="text-sm text-gray-600">Optimization Cycles</p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          12. BRAND PRESENCE THAT CREATES RECALL
          ============================================ */}
      <ModernSectionBackground variant="glass-blur">
        <Section spacing="base" animate background="transparent">
        <Container size="xl">
          <SectionHeader
            badge="Strategic Brand Building"
            badgeIcon={<Eye className="w-4 h-4" />}
            title="Brand Presence That Creates Recall"
            description="Brand is leverage. Strategic positioning, visual identity, and consistent presence compound recognition into revenue-generating advantage."
            align="center"
            maxWidth="3xl"
          />

          {/* Hero Image Section */}
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto mb-16">
              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1764383381195-5daa5902c3f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc3NDU1OTE1MHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Corporate brand identity design"
                    className="w-full h-[280px] lg:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Floating brand stat */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <GlassCard variant="strong" rounded="xl" padding="base" className="backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-gray-700 mb-1">Brand Recall Increase</p>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold" style={{ color: colors.brand.secondary }}>340%</span>
                            <span className="text-sm text-gray-600">avg. lift</span>
                          </div>
                        </div>
                        <Eye className="w-8 h-8" style={{ color: colors.brand.accent }} />
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right: Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-3" style={{ color: colors.brand.primary }}>
                    Recognition Becomes{' '}
                    <span style={{ color: colors.brand.secondary }}>Revenue Advantage</span>
                  </h3>
                  <div className="h-1 w-16 rounded-full mb-4" style={{ background: gradients.primary }}></div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-5">
                    We develop strategic positioning, visual identity systems, brand architecture, messaging frameworks, and market presence that transform recognition into competitive advantage. Brand creates preference before the conversation begins.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Target, title: 'Strategic Positioning', desc: 'Market differentiation & value definition' },
                    { icon: Palette, title: 'Identity Systems', desc: 'Cohesive visual & verbal language' },
                    { icon: TrendingUp, title: 'Market Presence', desc: 'Consistent multi-channel visibility' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    >
                      <GlassCard variant="base" rounded="lg" padding="base" hover>
                        <div className="flex items-start gap-4">
                          <div 
                            className="p-2.5 rounded-lg flex-shrink-0"
                            style={{ backgroundColor: `${colors.brand.accent}10` }}
                          >
                            <item.icon className="w-6 h-6" style={{ color: colors.brand.accent }} />
                          </div>
                          <div>
                            <h4 className="text-base font-bold mb-1" style={{ color: colors.brand.primary }}>
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid md:grid-cols-4 gap-6">
            <ScrollReveal className="md:col-span-2 md:row-span-2">
              <GlassCard variant="base" rounded="lg" padding="lg" hover className="h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#0000aa]/10 to-transparent rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#000131] to-[#0000aa] flex items-center justify-center mb-4">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-sm font-bold mb-3" style={{ color: colors.brand.primary }}>
                    When positioning, messaging, and identity align across all touchpoints, organizations command attention and earn trust.
                  </p>
                  <div className="space-y-3 text-sm">
                    <p className="font-bold" style={{ color: colors.brand.secondary }}>We build:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.secondary }} />
                        <span className="text-gray-700">Strategic market positioning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.secondary }} />
                        <span className="text-gray-700">Messaging systems with narrative consistency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.secondary }} />
                        <span className="text-gray-700">Visual identity frameworks with governance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-300/40">
                    <Award className="w-6 h-6" style={{ color: colors.brand.accent }} />
                    <p className="text-sm font-semibold" style={{ color: colors.brand.secondary }}>
                      Strong brands compete on clarity, not noise.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="md:col-span-2">
              <GlassCard variant="base" rounded="lg" padding="base" hover className="h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0000aa]/10 to-[#000131]/10 flex items-center justify-center">
                    <Target className="w-6 h-6" style={{ color: colors.brand.secondary }} />
                  </div>
                  <h3 className="text-base font-bold" style={{ color: colors.brand.primary }}>
                    Positioning Strategy
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Distinct market position rooted in competitive differentiation and authentic value propositions.
                </p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <GlassCard variant="base" rounded="lg" padding="sm" hover className="h-full text-center">
                <Megaphone className="w-8 h-8 mx-auto mb-2" style={{ color: colors.brand.secondary }} />
                <h3 className="text-base font-bold mb-2" style={{ color: colors.brand.primary }}>
                  Messaging Architecture
                </h3>
                <p className="text-xs text-gray-600">
                  Unified voice across all touchpoints
                </p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <GlassCard variant="base" rounded="lg" padding="sm" hover className="h-full text-center bg-gradient-to-br from-[#ffb300]/5 to-transparent">
                <PenTool className="w-8 h-8 mx-auto mb-2" style={{ color: colors.brand.accent }} />
                <h3 className="text-base font-bold mb-2" style={{ color: colors.brand.primary }}>
                  Visual Identity
                </h3>
                <p className="text-xs text-gray-600">
                  Cohesive design systems
                </p>
              </GlassCard>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <ScrollReveal delay={0.4}>
              <GlassCard variant="base" rounded="lg" padding="base" hover className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#000131]/10 to-[#0000aa]/10 flex items-center justify-center">
                  <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>01</span>
                </div>
                <p className="text-sm font-semibold" style={{ color: colors.brand.primary }}>Brand Guidelines</p>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <GlassCard variant="base" rounded="lg" padding="base" hover className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#0000aa]/10 to-[#000131]/10 flex items-center justify-center">
                  <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>02</span>
                </div>
                <p className="text-sm font-semibold" style={{ color: colors.brand.primary }}>Voice & Tone</p>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              <GlassCard variant="base" rounded="lg" padding="base" hover className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#ffb300]/10 to-[#ff8c00]/10 flex items-center justify-center">
                  <span className="text-xl font-bold" style={{ color: colors.brand.accent }}>03</span>
                </div>
                <p className="text-sm font-semibold" style={{ color: colors.brand.primary }}>Asset Management</p>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.7}>
              <GlassCard variant="base" rounded="lg" padding="base" hover className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#000131]/10 to-[#0000aa]/10 flex items-center justify-center">
                  <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>04</span>
                </div>
                <p className="text-sm font-semibold" style={{ color: colors.brand.primary }}>Brand Governance</p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          13. A DISCIPLINED OPERATING MODEL
          ============================================ */}
      <ModernSectionBackground variant="animated-dots">
        <Section spacing="base" animate background="transparent">
        <Container size="xl">
          <SectionHeader
            badge="Proven Methodology"
            badgeIcon={<RefreshCw className="w-4 h-4" />}
            title="A Disciplined Operating Model"
            description="Sustainable growth requires structure. Our operating model delivers strategic clarity, execution discipline, and measurable outcomes."
            align="center"
            maxWidth="3xl"
          />

          {/* Hero Image Section */}
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto mb-16">
              {/* Right: Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1758518729706-b1810dd39cc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVnaWMlMjBidXNpbmVzcyUyMHBsYW5uaW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NDU1OTE1MXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Strategic business planning professional"
                    className="w-full h-[280px] lg:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Floating process badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <GlassCard variant="strong" rounded="xl" padding="base" className="backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-gray-700 mb-1">Operating Framework</p>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold" style={{ color: colors.brand.secondary }}>4-Phase</span>
                            <span className="text-sm text-gray-600">repeatable model</span>
                          </div>
                        </div>
                        <RefreshCw className="w-8 h-8" style={{ color: colors.brand.accent }} />
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>
              </motion.div>

              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2 space-y-6"
              >
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-3" style={{ color: colors.brand.primary }}>
                    Structure Produces{' '}
                    <span style={{ color: colors.brand.secondary }}>Sustainable Results</span>
                  </h3>
                  <div className="h-1 w-16 rounded-full mb-4" style={{ background: gradients.primary }}></div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-5">
                    Our repeatable four-phase methodology integrates strategic planning, disciplined execution, performance measurement, and systematic optimization. Every engagement follows this proven framework to ensure accountability and results.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Target, title: 'Strategic Foundation', desc: 'Discovery, positioning, planning' },
                    { icon: Rocket, title: 'Tactical Execution', desc: 'Coordinated implementation & launch' },
                    { icon: BarChart3, title: 'Performance Measurement', desc: 'Analytics, reporting, attribution' },
                    { icon: RefreshCw, title: 'Continuous Optimization', desc: 'Testing, refinement, scaling' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    >
                      <GlassCard variant="base" rounded="lg" padding="base" hover>
                        <div className="flex items-start gap-4">
                          <div 
                            className="p-2.5 rounded-lg flex-shrink-0"
                            style={{ backgroundColor: `${colors.brand.secondary}10` }}
                          >
                            <item.icon className="w-6 h-6" style={{ color: colors.brand.secondary }} />
                          </div>
                          <div>
                            <h4 className="text-base font-bold mb-1" style={{ color: colors.brand.primary }}>
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          <div className="mt-12 relative">
            <div className="hidden lg:block absolute top-28 left-0 right-0 h-2 bg-gradient-to-r from-[#000131] via-[#0000aa] via-[#ffb300] to-[#000131] opacity-20 rounded-full"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
              {processSteps.map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="relative">
                    <div className="relative mb-5">
                      <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-[#000131] to-[#0000aa] flex items-center justify-center shadow-2xl relative z-10">
                        <span className="text-white font-bold text-base">{step.number}</span>
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 left-full w-12 h-0.5 bg-gradient-to-r from-[#0000aa] to-transparent"></div>
                      )}
                    </div>

                    <GlassCard variant="base" rounded="lg" padding="base" hover className="h-full text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-[#0000aa]/10 to-[#000131]/10 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <h3 className="text-base font-bold mb-2 leading-tight" style={{ color: colors.brand.primary }}>
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm mb-3">
                        {step.description}
                      </p>
                      
                      <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-[#0000aa]/10 to-[#000131]/10">
                        <span className="text-xs font-bold tracking-wide uppercase" style={{ color: colors.brand.secondary }}>
                          Phase {step.number}
                        </span>
                      </div>
                    </GlassCard>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={0.5}>
            <div className="mt-12 max-w-5xl mx-auto">
              <GlassCard variant="base" rounded="lg" padding="lg" className="text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-[#0000aa]/5 via-[#ffb300]/5 to-transparent rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <RefreshCw className="w-9 h-9 mx-auto mb-3 text-[#0000aa]" />
                  <p className="text-sm font-bold mb-2" style={{ color: colors.brand.primary }}>
                    Process creates predictability.
                  </p>
                  <p className="text-sm font-bold" style={{ color: colors.brand.secondary }}>
                    Discipline creates momentum.
                  </p>
                </div>
              </GlassCard>
            </div>
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
