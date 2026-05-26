/**
 * ============================================
 * BRAND DEVELOPMENT SERVICE PAGE
 * ============================================
 * Comprehensive 9-section service page
 * ============================================
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  ArrowRight, Award, CheckCircle2, TrendingUp, Users, Palette, Lightbulb, FileText, Globe, Target, Zap, Layers, Eye, MessageSquare, Sparkles, Heart
} from 'lucide-react';

import { Section, Container, SectionHeader, GlassCard, IconBadge } from '../../components/primitives';
import { Accordion } from '../../components/Accordion';
import { ScrollReveal, StaggerContainer, staggerItemVariants } from '../../components/ScrollReveal';
import { MagneticButton } from '../../components/MagneticButton';
import { TiltCard } from '../../components/TiltCard';
import { colors, gradients } from '../../../styles/design-tokens';
import { PageBackground } from '../../components/layout';
import { ModernSectionBackground } from '../../components/ModernSectionBackground';
import { PageSEO } from '../../components/seo';
import { SERVICE_SEO } from '../../utils/seo-config';

const keyServices = [
  { icon: <Target className="w-6 h-6" />, title: 'Brand Strategy', description: 'Strategic brand architecture, positioning, and competitive differentiation frameworks.' },
  { icon: <Palette className="w-6 h-6" />, title: 'Visual Identity', description: 'Logo design, color systems, typography, and complete visual identity development.' },
  { icon: <MessageSquare className="w-6 h-6" />, title: 'Messaging & Voice', description: 'Brand messaging frameworks, tone of voice, and compelling narrative development.' },
  { icon: <Eye className="w-6 h-6" />, title: 'Brand Experience', description: 'Customer journey design and cohesive brand experiences across all touchpoints.' },
  { icon: <FileText className="w-6 h-6" />, title: 'Brand Guidelines', description: 'Comprehensive brand standards documentation ensuring consistency and quality.' },
  { icon: <Sparkles className="w-6 h-6" />, title: 'Brand Activation', description: 'Launch strategies and campaigns that bring your brand to life in the market.' },
];

const processSteps = [
  { id: 'step-1', number: '01', title: 'Brand Discovery', description: 'Uncover brand essence, values, and strategic positioning', details: ['Stakeholder interviews and workshops', 'Brand audit and competitive analysis', 'Customer perception research', 'Core values and personality definition'] },
  { id: 'step-2', number: '02', title: 'Strategic Foundation', description: 'Develop brand strategy and positioning framework', details: ['Brand architecture and hierarchy', 'Competitive positioning strategy', 'Value proposition development', 'Target audience definition'] },
  { id: 'step-3', number: '03', title: 'Identity Creation', description: 'Design visual and verbal brand identity systems', details: ['Logo and visual identity design', 'Color palette and typography selection', 'Brand messaging and voice development', 'Tagline and narrative creation'] },
  { id: 'step-4', number: '04', title: 'Implementation', description: 'Deploy brand across all touchpoints and channels', details: ['Brand guidelines documentation', 'Asset creation and templates', 'Internal brand training', 'Launch campaign execution'] },
];

const benefits = [
  { icon: <Award className="w-5 h-5" />, title: 'Market Differentiation', description: 'Stand out in crowded markets with unique positioning' },
  { icon: <Heart className="w-5 h-5" />, title: 'Customer Loyalty', description: 'Build emotional connections that drive retention' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'Premium Pricing', description: 'Strong brands command higher prices and margins' },
  { icon: <Zap className="w-5 h-5" />, title: 'Marketing Efficiency', description: 'Consistent branding reduces costs and amplifies impact' },
];

const deliverables = [
  { id: 'del-1', title: 'Brand Strategy Document', icon: <FileText className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Comprehensive brand strategy including positioning, values, personality, target audience, competitive analysis, and strategic recommendations.' },
  { id: 'del-2', title: 'Visual Identity System', icon: <Palette className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Complete visual identity package with logo variations, color palette, typography system, graphic elements, and usage examples.' },
  { id: 'del-3', title: 'Messaging Framework', icon: <MessageSquare className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Brand messaging architecture, tone of voice guidelines, key messages, taglines, and narrative frameworks for consistent communication.' },
  { id: 'del-4', title: 'Brand Guidelines', icon: <Layers className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Detailed brand standards manual covering visual identity, messaging, application examples, and do\'s and don\'ts for brand consistency.' },
];

const brandElements = [
  { id: 'elem-1', title: 'Logo & Visual Mark', icon: <Sparkles className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Primary logo, secondary marks, monograms, and variations for different applications ensuring versatility and recognition across all contexts.' },
  { id: 'elem-2', title: 'Color System', icon: <Palette className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Primary and secondary color palettes, tints and shades, color psychology rationale, and application guidelines for digital and print.' },
  { id: 'elem-3', title: 'Typography', icon: <FileText className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Font families for headlines and body copy, type hierarchy system, sizing guidelines, and recommendations for web and print applications.' },
  { id: 'elem-4', title: 'Graphic Elements', icon: <Layers className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Patterns, textures, iconography, photography style, illustration approach, and supporting visual elements that reinforce brand identity.' },
];

const industries = [
  { name: 'Technology Startups', icon: <Zap className="w-4 h-4" /> },
  { name: 'Professional Services', icon: <Users className="w-4 h-4" /> },
  { name: 'Healthcare', icon: <Heart className="w-4 h-4" /> },
  { name: 'Financial Services', icon: <TrendingUp className="w-4 h-4" /> },
  { name: 'Consumer Products', icon: <Award className="w-4 h-4" /> },
  { name: 'Hospitality', icon: <Globe className="w-4 h-4" /> },
];

const faqs = [
  { id: 'faq-1', title: 'How long does brand development take?', icon: <Target className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Comprehensive brand development typically takes 8-16 weeks depending on scope. We balance thoroughness with efficiency to deliver exceptional results on schedule.' },
  { id: 'faq-2', title: 'What if we already have a logo?', icon: <Palette className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'We can work with existing brand elements through brand evolution or refresh services. We\'ll assess what works, what needs refinement, and ensure cohesive brand expression.' },
  { id: 'faq-3', title: 'Do you handle brand rollout?', icon: <Sparkles className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Yes. We provide comprehensive brand activation services including internal launch, external campaigns, and ongoing support to ensure successful brand adoption.' },
];

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
          HERO SECTION - Premium Image with Content
          ============================================ */}
      <ModernSectionBackground variant="image-overlay-office" className="relative overflow-hidden py-12 lg:py-16">
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
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
                className="mb-4"
              >
                <span className="inline-flex items-center px-3 py-1.5 rounded-full shadow-lg border-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(12px)', borderColor: colors.brand.accent }}>
                  <Award className="w-3.5 h-3.5 mr-2" style={{ color: colors.brand.accent }} />
                  <span className="text-xs font-bold tracking-wide" style={{ color: colors.brand.primary }}>BRAND DEVELOPMENT</span>
                </span>
              </motion.div>

              <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight tracking-tight mb-4" style={{ color: colors.brand.primary }}>
                Build Brands That Matter
              </h1>

              <div className="space-y-3 mb-5">
                <p className="text-sm font-semibold leading-snug" style={{ color: colors.brand.primary }}>
                  Strategic brand development that creates differentiation.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Build emotional connections, drive long-term business value, and establish market leadership through comprehensive brand strategy and identity systems.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <MagneticButton strength={0.3}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    style={{ background: gradients.primary }}
                  >
                    Start Your Brand Journey
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>

                <MagneticButton strength={0.2}>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all duration-300 hover:shadow-lg hover:bg-white/70 bg-white/50 backdrop-blur-md"
                    style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
                  >
                    All Services
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>

            {/* Right Column - Premium Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1754663186395-cf35a5efac50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMGNyZWF0aXZlJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0NTY3MjUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Brand development creative design"
                  className="w-full h-[280px] lg:h-[360px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Floating stats badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <GlassCard variant="strong" rounded="xl" padding="base" className="backdrop-blur-md">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-xs font-bold text-gray-700 mb-1">Brand Projects</p>
                        <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>150+</span>
                      </div>
                      <div className="border-x border-gray-300/40">
                        <p className="text-xs font-bold text-gray-700 mb-1">Avg. Value Lift</p>
                        <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>3.5x</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-700 mb-1">Client NPS</p>
                        <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>92</span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </ModernSectionBackground>

      <ModernSectionBackground variant="mesh-gradient-light">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader badge="Our Capabilities" badgeIcon={<Layers className="w-4 h-4" />} title="Brand Development Services" description="Comprehensive branding services from strategy to execution." align="center" maxWidth="md" />
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyServices.map((service, index) => (
                <motion.div key={index} variants={staggerItemVariants}>
                  <GlassCard variant="base" rounded="lg" padding="sm" hover className="h-full">
                    <IconBadge icon={service.icon} size="md" variant="gradient" animated />
                    <h3 className="text-base font-bold mt-6 mb-4 leading-tight" style={{ color: colors.brand.primary }}>{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="gradient-soft">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader badge="Our Approach" badgeIcon={<Target className="w-4 h-4" />} title="Brand Development Process" description="A strategic 4-phase methodology that delivers distinctive brand identities." align="center" maxWidth="md" />
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-6">
                {processSteps.map((step) => (
                  <TiltCard key={step.id}>
                    <GlassCard variant="base" rounded="xl" padding="base" className="h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg" style={{ background: gradients.primary }}>
                          <span className="text-white font-bold text-lg">{step.number}</span>
                        </div>
                        <div>
                          <h3 className="text-base font-bold mb-1 leading-tight" style={{ color: colors.brand.primary }}>{step.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </TiltCard>
                ))}
              </div>
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="glass-white">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader badge="Value Creation" badgeIcon={<Award className="w-4 h-4" />} title="Brand Development Benefits" description="The business impact of strategic brand development." align="center" maxWidth="md" />
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={staggerItemVariants}>
                  <GlassCard variant="base" rounded="lg" padding="sm" hover className="h-full text-center">
                    <IconBadge icon={benefit.icon} size="md" variant="gradient" animated className="mx-auto" />
                    <h3 className="text-base font-bold mt-6 mb-3 leading-tight" style={{ color: colors.brand.primary }}>{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="animated-dots">
        <Section spacing="compact" animate background="transparent">
          <Container size="md">
            <SectionHeader badge="What You Receive" badgeIcon={<FileText className="w-4 h-4" />} title="Brand Development Deliverables" description="Comprehensive brand assets and documentation for market success." align="center" maxWidth="md" />
            <ScrollReveal><Accordion items={deliverables} /></ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="mesh-gradient-light">
        <Section spacing="compact" animate background="transparent">
          <Container size="md">
            <SectionHeader badge="Brand Components" badgeIcon={<Palette className="w-4 h-4" />} title="Visual Identity Elements" description="Every element designed to create a cohesive and memorable brand." align="center" maxWidth="md" />
            <ScrollReveal><Accordion items={brandElements} /></ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="glass-blur">
        <Section spacing="compact" animate background="transparent">
          <Container size="md">
            <ScrollReveal>
              <GlassCard variant="base" rounded="2xl" padding="base">
                <div className="text-center mb-6">
                  <IconBadge icon={<TrendingUp className="w-8 h-8" />} size="lg" variant="gradient" animated className="mx-auto mb-4" />
                  <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: colors.brand.primary }}>Brand Transformation Success</h2>
                  <p className="text-sm text-gray-600">Strategic rebranding that drove market leadership</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-white/60 rounded-xl">
                    <div className="text-xl font-bold mb-1" style={{ color: colors.brand.primary }}>89%</div>
                    <div className="text-sm text-gray-600">Brand Recognition</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-xl">
                    <div className="text-xl font-bold mb-1" style={{ color: colors.brand.primary }}>2.5x</div>
                    <div className="text-sm text-gray-600">Brand Value</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-xl">
                    <div className="text-xl font-bold mb-1" style={{ color: colors.brand.primary }}>56%</div>
                    <div className="text-sm text-gray-600">Customer Loyalty</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 text-center leading-relaxed">
                  Professional services firm achieved category leadership through complete brand transformation and strategic positioning.
                </p>
              </GlassCard>
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="mesh-gradient-warm">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader badge="Industry Expertise" badgeIcon={<Globe className="w-4 h-4" />} title="Industries We Brand" description="Brand development expertise across diverse market sectors." align="center" maxWidth="md" />
            <ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {industries.map((industry, index) => (
                  <GlassCard key={index} variant="base" rounded="lg" padding="sm" hover className="text-center">
                    <IconBadge icon={industry.icon} size="sm" variant="gradient" animated className="mx-auto mb-2" />
                    <p className="text-xs font-semibold text-gray-700">{industry.name}</p>
                  </GlassCard>
                ))}
              </div>
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="gradient-soft">
        <Section spacing="compact" animate background="transparent">
          <Container size="md">
            <SectionHeader badge="Common Questions" badgeIcon={<Eye className="w-4 h-4" />} title="Brand Development FAQs" description="Answers to common questions about our branding services." align="center" maxWidth="md" />
            <ScrollReveal><Accordion items={faqs} /></ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="glass-white">
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 overflow-hidden bg-transparent">
          <Container size="md">
            <ScrollReveal>
              <GlassCard variant="base" rounded="2xl" padding="base" className="text-center">
                <IconBadge icon={<Award className="w-8 h-8" />} size="lg" variant="gradient" animated className="mx-auto mb-4" />
                <h2 className="text-xl sm:text-2xl font-bold mb-3 leading-tight" style={{ color: colors.brand.primary }}>Ready to Build Your Brand?</h2>
                <p className="text-sm text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
                  Let's create a distinctive brand that differentiates your business and drives lasting value.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <MagneticButton strength={0.3}>
                    <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 group" style={{ background: gradients.primary }}>
                      Start Your Brand Journey<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </MagneticButton>
                  <MagneticButton strength={0.2}>
                    <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold border-2 transition-all duration-300 hover:shadow-lg bg-transparent" style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}>
                      View All Services
                    </Link>
                  </MagneticButton>
                </div>
              </GlassCard>
            </ScrollReveal>
          </Container>
        </section>
      </ModernSectionBackground>
    </PageBackground>
  );
}

export default BrandDevelopmentPage;