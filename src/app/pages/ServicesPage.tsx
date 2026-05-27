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
    description: 'Growth without strategy creates activity — not market leadership. We build revenue-aligned marketing strategies designed around positioning, demand generation, customer acquisition, and scalable business growth.',
    sectionId: 'strategic-planning',
  },
  {
    icon: <MonitorSmartphone className="w-7 h-7" />,
    title: 'Integrated Marketing',
    description: 'Disconnected channels create inconsistent growth. We connect digital, offline, content, media, and automation into one integrated marketing ecosystem aligned to revenue goals.',
    sectionId: 'digital-marketing',
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: 'AI Solutions',
    description: 'AI should improve revenue operations — not just automate tasks. We implement AI-powered systems across customer engagement, lead qualification, CRM workflows, and sales processes to improve efficiency, conversion, and pipeline velocity.',
    sectionId: 'ai-marketing-solutions',
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: 'Brand Development',
    description: 'Strong positioning creates pricing power, market clarity, and sales confidence. We help businesses define how they compete, communicate, and scale through differentiated brand strategy and identity systems.',
    sectionId: 'brand-development',
  },
  {
    icon: <Megaphone className="w-7 h-7" />,
    title: 'PR & Communications',
    description: 'Executive thought leadership and strategic communication that strengthen authority, build industry positioning, and create consistent brand narratives across all touchpoints.',
    sectionId: 'pr-communications',
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: 'Content Strategy',
    description: 'Strategic content systems that strengthen authority, improve visibility, and position your business leadership as industry experts — aligned to revenue goals and customer journeys.',
    sectionId: 'content-strategy',
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: 'Analytics & Optimization',
    description: 'Unified reporting systems that connect marketing performance directly to pipeline growth, customer acquisition, and revenue outcomes — with continuous optimization for maximum impact.',
    sectionId: 'analytics-optimization',
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
    title: 'Reporting & Attribution',
    icon: <BarChart3 className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Unified reporting systems that connect marketing performance directly to pipeline growth, customer acquisition, and revenue outcomes — enabling continuous optimization.',
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
          1. HERO SECTION - COMPACT
          ============================================ */}
      <ModernSectionBackground variant="mesh-gradient-blue">
        <Section spacing="base" animate background="transparent">
          <Container size="lg">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4"
              >
                <span 
                  className="inline-flex items-center px-3 py-1.5 rounded-full border-2 shadow-lg"
                  style={{ backgroundColor: '#ffffff', borderColor: colors.brand.accent }}
                >
                  <Rocket className="w-3.5 h-3.5 mr-2" style={{ color: colors.brand.accent }} />
                  <span className="text-xs font-bold tracking-wide" style={{ color: colors.brand.primary }}>
                    OUR CAPABILITIES
                  </span>
                </span>
              </motion.div>

              <motion.h1 
                className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-[1.1] tracking-tight mb-4"
                style={{ color: colors.brand.primary }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Three Disciplines. One Revenue Engine.
              </motion.h1>

              <motion.p 
                className="text-sm text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                We integrate strategic marketing, connected execution, and AI-powered systems into one scalable growth engine — built to drive pipeline, revenue, and long-term market positioning.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-6"
              >
                <MagneticButton strength={0.3}>
                  <a
                    href="#core-services"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold text-sm shadow-2xl transition-all duration-300 group"
                    style={{ background: gradients.primary }}
                  >
                    Explore Our Services
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </MagneticButton>
              </motion.div>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          1B. HERO IMAGE
          ============================================ */}
      <Section spacing="compact" animate>
        <Container size="lg">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1758873272414-c0bf30332738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBzdHJhdGVneSUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc0NTYwNDYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AdvantEdge marketing strategy team at work"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  Built for Growth-Focused Businesses
                </h3>
                <p className="text-base lg:text-lg opacity-95 max-w-3xl">
                  From strategy and execution to CRM and AI integration, we help businesses build connected marketing systems designed for measurable business growth.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* ============================================
          2. CORE SERVICES GRID
          ============================================ */}
      <ModernSectionBackground variant="image-overlay-workspace">
        <Section spacing="compact" animate id="core-services" background="transparent">
          <Container size="lg">
            <SectionHeader
              badge="What We Do"
              badgeIcon={<Layers className="w-4 h-4" />}
              title="Integrated Services Designed for Revenue Growth"
              description="Most agencies focus on isolated execution. We build connected growth systems where strategy, marketing, sales, CRM, and AI work together to drive measurable business outcomes."
              align="center"
              maxWidth="2xl"
            />

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service, index) => (
                <motion.div key={index} variants={staggerItemVariants}>
                  <Link to={`/services/${service.sectionId}`} className="block h-full">
                    <GlassCard variant="base" rounded="lg" padding="sm" hover className="h-full transition-all duration-300">
                      <IconBadge icon={service.icon} size="md" variant="gradient" animated />
                      <h3 className="text-base font-bold mt-6 mb-4 leading-tight" style={{ color: colors.brand.primary }}>
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-sm font-semibold mt-auto" style={{ color: colors.brand.secondary }}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          3. STRATEGIC POSITIONING & MESSAGING
          ============================================ */}
      <ModernSectionBackground variant="mesh-gradient-purple">
        <Section spacing="compact" animate background="transparent">
          <Container size="md">
            <SectionHeader
              badge="Market Positioning"
              badgeIcon={<Target className="w-4 h-4" />}
              title="Positioning That Creates Competitive Advantage"
              description="Strong positioning creates pricing power, market clarity, and sales confidence. We help businesses define how they compete, communicate, and scale."
              align="center"
              maxWidth="md"
            />

            <ScrollReveal>
              <Accordion items={positioningDetails} />
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          4. INTEGRATED EXECUTION
          ============================================ */}
      <ModernSectionBackground variant="gradient-abstract">
        <Section spacing="compact" animate background="transparent">
          <Container size="md">
            <SectionHeader
              badge="Connected Execution"
              badgeIcon={<Zap className="w-4 h-4" />}
              title="Integrated Execution Across Every Growth Channel"
              description="Execution only works when every channel supports the same growth objective. We align messaging, campaigns, content, CRM, and customer journeys into one connected system."
              align="center"
              maxWidth="md"
            />

            <ScrollReveal>
              <Accordion items={executionDetails} />
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          5. AI INTEGRATED EXECUTION
          ============================================ */}
      <ModernSectionBackground variant="glass-white">
        <Section spacing="compact" animate background="transparent">
          <Container size="md">
            <SectionHeader
              badge="AI-Powered Execution"
              badgeIcon={<Brain className="w-4 h-4" />}
              title="AI Integrated Execution Across Your Revenue System"
              description="AI delivers the highest impact when it is aligned with your industry, customer journey, workflows, and growth objectives. We build customized AI execution systems that integrate across marketing, sales, CRM, customer engagement, and operational workflows."
              align="center"
              maxWidth="2xl"
            />

            <ScrollReveal>
              <Accordion items={aiDetails} />
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          6. HOW WE WORK - PROCESS CAROUSEL
          ============================================ */}
      <ModernSectionBackground variant="animated-dots">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader
              badge="Our Process"
              badgeIcon={<TrendingUp className="w-4 h-4" />}
              title="From Strategy to Scalable Growth"
              description="A structured execution framework designed to align strategy, marketing, AI, and revenue operations into one connected growth system."
              align="center"
              maxWidth="md"
            />

            <ScrollReveal>
              <HorizontalCarousel
                items={processSteps.map((step) => ({
                  id: step.id,
                  content: (
                    <TiltCard className="h-full">
                      <GlassCard variant="base" rounded="xl" padding="base" className="h-full shadow-xl border border-gray-200/60">
                        <div className="relative">
                          <div 
                            className="absolute -top-2 -left-2 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg"
                            style={{ background: gradients.primary }}
                          >
                            <span className="text-white font-bold text-lg">{step.number}</span>
                          </div>
                          <div className="pt-12">
                            <h3 className="text-lg font-bold mb-2 leading-tight" style={{ color: colors.brand.primary }}>
                              {step.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                              {step.description}
                            </p>
                            {step.content}
                          </div>
                        </div>
                      </GlassCard>
                    </TiltCard>
                  ),
                }))}
                autoPlay={false}
                className="max-w-xl mx-auto"
              />
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          5B. CONSULTATION & COLLABORATION IMAGES
          ============================================ */}
      <Section spacing="compact" animate>
        <Container size="lg">
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[300px]">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1765020553734-2c050ddb9494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc0NTMyOTY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Client consultation meeting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-lg font-bold mb-1">Strategic Consultation</h4>
                  <p className="text-sm opacity-90">Direct access to senior strategists</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[300px]">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwcHJlc2VudGF0aW9uJTIwY29uZmVyZW5jZSUyMHJvb218ZW58MXx8fHwxNzc0NTYwNDY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team presentation and collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-lg font-bold mb-1">Collaborative Approach</h4>
                  <p className="text-sm opacity-90">Working together for measurable results</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ============================================
          7. WHY ADVANTEDGE
          ============================================ */}
      <ModernSectionBackground variant="image-overlay-workspace">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader
              badge="Why AdvantEdge"
              badgeIcon={<Sparkles className="w-4 h-4" />}
              title="Built for Businesses That Want Scalable Growth"
              description="Most marketing partners deliver isolated execution. We build connected revenue systems designed for long-term business growth."
              align="center"
              maxWidth="md"
            />

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={staggerItemVariants}>
                  <GlassCard variant="base" rounded="lg" padding="sm" hover className="h-full text-center">
                    <IconBadge icon={benefit.icon} size="md" variant="gradient" animated className="mx-auto" />
                    <h3 className="text-base font-bold mt-6 mb-3 leading-tight" style={{ color: colors.brand.primary }}>
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </StaggerContainer>

            {/* Service Images */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <ScrollReveal>
                <ImageFeatureCard
                  title="Integrated Marketing Systems"
                  description="Connected growth systems where strategy, marketing, sales, CRM, and AI work together for measurable outcomes."
                  imageUrl="https://images.unsplash.com/photo-1682336869523-2c6859f781cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NDUwMTQzMHww&ixlib=rb-4.1.0&q=80&w=1080"
                />
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <ImageFeatureCard
                  title="Revenue-Focused Strategy"
                  description="Every initiative aligned to pipeline growth, customer acquisition, and measurable business outcomes."
                  imageUrl="https://images.unsplash.com/photo-1634671495197-fb9ec3230ef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc3NDQ5Mjc0MHww&ixlib=rb-4.1.0&q=80&w=1080"
                />
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <ImageFeatureCard
                  title="AI-Powered Growth"
                  description="Customized AI execution systems integrated across marketing, sales, CRM, and operational workflows."
                  imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3NDU0NTk5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                />
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          8. FINAL CTA SECTION
          ============================================ */}
      <ModernSectionBackground variant="image-overlay-team">
        <section className="relative px-4 sm:px-6 lg:px-8 py-10 overflow-hidden bg-transparent">
          <Container size="md">
            <div className="text-center">
              <ScrollReveal>
                <GlassCard variant="base" rounded="2xl" padding="base" className="shadow-xl border border-gray-200/60">
                  <IconBadge 
                    icon={<Rocket className="w-6 h-6" />}
                    size="md"
                    variant="gradient"
                    animated
                    className="mx-auto mb-4"
                  />

                  <h2 className="text-xl sm:text-2xl font-bold mb-3 leading-tight" style={{ color: colors.brand.primary }}>
                    Build a Smarter Revenue Engine
                  </h2>

                  <p className="text-sm text-gray-700 mb-2 max-w-2xl mx-auto leading-relaxed">
                    Let's identify where your marketing, sales, CRM, and AI systems are disconnected — and build a growth strategy designed for measurable business outcomes.
                  </p>

                  <p className="text-xs text-gray-500 mb-5 italic">
                    We work with a limited number of businesses to ensure strategic focus, execution quality, and measurable impact.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <MagneticButton strength={0.3}>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold text-sm shadow-2xl hover:shadow-3xl transition-all duration-300 group border-2 border-transparent"
                        style={{ background: gradients.primary }}
                      >
                        Book a Strategy Call
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </MagneticButton>

                    <MagneticButton strength={0.2}>
                      <Link
                        to="/configurator"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all duration-300 hover:shadow-lg bg-transparent"
                        style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
                      >
                        Explore Growth Solutions
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </MagneticButton>
                  </div>
                </GlassCard>
              </ScrollReveal>
            </div>
          </Container>
        </section>
      </ModernSectionBackground>
    </PageBackground>
  );
}

export default ServicesPage;
