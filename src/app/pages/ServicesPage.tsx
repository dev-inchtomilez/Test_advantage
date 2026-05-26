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
    title: 'Strategic Marketing Planning',
    description: 'Comprehensive marketing strategy development, competitive analysis, market positioning, and integrated go-to-market roadmaps aligned with business objectives.',
    sectionId: 'strategic-planning',
  },
  {
    icon: <MonitorSmartphone className="w-7 h-7" />,
    title: 'Digital Marketing & Growth',
    description: 'SEO/SEM, paid advertising, social media, content marketing, conversion optimization, and performance-driven digital strategies.',
    sectionId: 'digital-marketing',
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: 'AI Marketing Solutions',
    description: 'AI-powered marketing automation, predictive analytics, machine learning optimization, and intelligent personalization at scale.',
    sectionId: 'ai-marketing-solutions',
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: 'Brand Development',
    description: 'Brand strategy, identity design, messaging frameworks, visual systems, and consistent brand experiences across all customer touchpoints.',
    sectionId: 'brand-development',
  },
  {
    icon: <Megaphone className="w-7 h-7" />,
    title: 'PR & Communications',
    description: 'Media relations, thought leadership, crisis communication, press strategy, and comprehensive reputation management programs.',
    sectionId: 'pr-communications',
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: 'Content Production',
    description: 'Content strategy, copywriting, design, video production, asset creation, and multi-channel content distribution.',
    sectionId: 'content-strategy',
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: 'Analytics & Optimization',
    description: 'Performance tracking, data analysis, A/B testing, marketing attribution, and continuous optimization for maximum ROI.',
    sectionId: 'analytics-optimization',
  },
];

const digitalMarketingDetails = [
  {
    id: 'digital-1',
    title: 'Search Engine Optimization (SEO)',
    icon: <Search className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Technical SEO, on-page optimization, content strategy, link building, and local SEO to improve organic visibility and drive qualified traffic to your website.',
  },
  {
    id: 'digital-2',
    title: 'Performance Advertising (PPC)',
    icon: <Target className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Google Ads, Microsoft Advertising, social media ads, display advertising, and retargeting campaigns optimized for maximum ROI and conversion performance.',
  },
  {
    id: 'digital-3',
    title: 'Social Media Marketing',
    icon: <Share2 className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Strategy development, content creation, community management, influencer partnerships, and paid social campaigns across all major platforms.',
  },
  {
    id: 'digital-4',
    title: 'Email Marketing & Automation',
    icon: <Zap className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Email strategy, list segmentation, campaign design, marketing automation workflows, and performance optimization for nurturing and conversion.',
  },
];

const brandingDetails = [
  {
    id: 'brand-1',
    title: 'Brand Strategy & Positioning',
    icon: <Target className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Strategic brand architecture, competitive positioning, value proposition development, and comprehensive brand guidelines that differentiate your organization.',
  },
  {
    id: 'brand-2',
    title: 'Visual Identity Design',
    icon: <Edit3 className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Logo design, color systems, typography, graphic standards, and complete visual identity systems that ensure brand consistency across all touchpoints.',
  },
  {
    id: 'brand-3',
    title: 'Messaging & Voice',
    icon: <Megaphone className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Brand messaging frameworks, tone of voice guidelines, key messages, taglines, and narrative development that resonates with your target audience.',
  },
  {
    id: 'brand-4',
    title: 'Brand Experience Design',
    icon: <Eye className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Customer journey mapping, touchpoint design, experiential branding, and ensuring cohesive brand experiences across digital and physical channels.',
  },
];

const processSteps = [
  {
    id: 'step-1',
    number: '01',
    title: 'Discovery & Analysis',
    description: 'Deep dive into your business, market, competition, and objectives',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-gray-700 leading-relaxed">
          We begin with comprehensive discovery - understanding your business model, market position, competitive landscape, and strategic objectives.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
            <span>Business & market analysis</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
            <span>Competitive research</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
            <span>Stakeholder interviews</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Strategy Development',
    description: 'Create integrated marketing strategy aligned with business goals',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-gray-700 leading-relaxed">
          Strategy development translates insights into action - defining clear positioning, messaging, and integrated marketing approaches.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
            <span>Strategic positioning</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
            <span>Channel strategy</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
            <span>Campaign planning</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Implementation',
    description: 'Execute campaigns with precision across all marketing channels',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-gray-700 leading-relaxed">
          Implementation brings strategy to life - creating content, launching campaigns, and executing across all relevant channels.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
            <span>Content creation</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
            <span>Campaign launch</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
            <span>Multi-channel execution</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Measurement & Optimization',
    description: 'Track performance and continuously improve results',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-gray-700 leading-relaxed">
          Continuous measurement and optimization ensure marketing delivers maximum impact and ROI over time.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
            <span>Performance tracking</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
            <span>Data analysis</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
            <span>Ongoing optimization</span>
          </li>
        </ul>
      </div>
    ),
  },
];

const benefits = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Integrated Approach',
    description: 'All services work together as one cohesive system',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Expert Team',
    description: 'Senior-level strategists and executors on every account',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Measurable Results',
    description: 'Data-driven optimization and transparent reporting',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Scalable Solutions',
    description: 'Services that grow with your business needs',
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
                    OUR SERVICES
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
                Integrated Marketing Solutions
              </motion.h1>

              <motion.p 
                className="text-sm text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Strategic clarity meets operational excellence. We deliver end-to-end marketing services that drive measurable business growth.
              </motion.p>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          1B. HERO IMAGE - SERVICES IN ACTION
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
                  Full-Service Marketing Capabilities
                </h3>
                <p className="text-base lg:text-lg opacity-95 max-w-3xl">
                  From strategic planning to execution and optimization, we deliver integrated marketing solutions that drive measurable business growth.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* ============================================
          2. CORE SERVICES GRID - COMPACT
          ============================================ */}
      <ModernSectionBackground variant="image-overlay-workspace">
        <Section spacing="compact" animate id="strategic-planning" background="transparent">
          <Container size="lg">
            <SectionHeader
              badge="What We Do"
              badgeIcon={<Layers className="w-4 h-4" />}
              title="Core Services"
              description="Comprehensive marketing capabilities designed to drive business growth and market leadership."
              align="center"
              maxWidth="md"
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
          3. DIGITAL MARKETING - ACCORDION - COMPACT
          ============================================ */}
      <ModernSectionBackground variant="mesh-gradient-purple">
        <Section spacing="compact" animate id="digital-marketing" background="transparent">
          <Container size="md">
            <SectionHeader
              badge="Digital Expertise"
              badgeIcon={<MonitorSmartphone className="w-4 h-4" />}
              title="Digital Marketing Services"
              description="Performance-driven digital strategies that generate visibility, engagement, and conversion."
              align="center"
              maxWidth="md"
            />

            <ScrollReveal>
              <Accordion items={digitalMarketingDetails} />
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          4. BRANDING - ACCORDION - COMPACT
          ============================================ */}
      <ModernSectionBackground variant="gradient-abstract">
        <Section spacing="compact" animate id="brand-development" background="transparent">
          <Container size="md">
            <SectionHeader
              badge="Brand Development"
              badgeIcon={<Award className="w-4 h-4" />}
              title="Branding & Identity"
              description="Strategic brand development that creates differentiation and builds lasting market presence."
              align="center"
              maxWidth="md"
            />

            <ScrollReveal>
              <Accordion items={brandingDetails} />
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          5. PROCESS - CAROUSEL - COMPACT
          ============================================ */}
      <ModernSectionBackground variant="glass-white">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader
              badge="Our Methodology"
              badgeIcon={<TrendingUp className="w-4 h-4" />}
              title="How We Work"
              description="A proven 4-step process that delivers strategic clarity and measurable results."
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
                          <div className="pt-8">
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
          6. SERVICE BENEFITS - COMPACT
          ============================================ */}
      <ModernSectionBackground variant="animated-dots">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader
              badge="Our Advantages"
              badgeIcon={<Zap className="w-4 h-4" />}
              title="Why Our Services Work"
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
                  title="Digital Marketing Excellence"
                  description="Comprehensive digital strategies that drive qualified traffic, engagement, and conversion."
                  imageUrl="https://images.unsplash.com/photo-1682336869523-2c6859f781cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NDUwMTQzMHww&ixlib=rb-4.1.0&q=80&w=1080"
                />
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <ImageFeatureCard
                  title="Brand Strategy & Development"
                  description="Strategic positioning and identity systems that create lasting competitive advantage."
                  imageUrl="https://images.unsplash.com/photo-1634671495197-fb9ec3230ef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc3NDQ5Mjc0MHww&ixlib=rb-4.1.0&q=80&w=1080"
                />
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <ImageFeatureCard
                  title="Analytics & Optimization"
                  description="Data-driven insights and continuous improvement for maximum marketing ROI."
                  imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3NDU0NTk5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                />
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          7. CTA SECTION - COMPACT
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
                    Ready to Get Started?
                  </h2>

                  <p className="text-sm text-gray-700 mb-5 max-w-2xl mx-auto leading-relaxed">
                    Let's discuss which services align with your business objectives and how we can drive measurable results.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <MagneticButton strength={0.3}>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold text-sm shadow-2xl hover:shadow-3xl transition-all duration-300 group border-2 border-transparent"
                        style={{ background: gradients.primary }}
                      >
                        Contact Us
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </MagneticButton>

                    <MagneticButton strength={0.2}>
                      <Link
                        to="/configurator"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all duration-300 hover:shadow-lg bg-transparent"
                        style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
                      >
                        Build Your Package
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