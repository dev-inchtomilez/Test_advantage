/**
 * CONTENT STRATEGY SERVICE PAGE
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, FileText, CheckCircle2, TrendingUp, Users, BarChart3, Target, Zap, Edit3, Video, Mic, Image, Eye, MonitorSmartphone, Layers, Globe, Heart, Sparkles } from 'lucide-react';
import { Section, Container, SectionHeader, GlassCard, IconBadge } from '../../components/primitives';
import { Accordion } from '../../components/Accordion';
import { ScrollReveal, StaggerContainer, staggerItemVariants } from '../../components/ScrollReveal';
import { MagneticButton } from '../../components/MagneticButton';
import { TiltCard } from '../../components/TiltCard';
import { colors, gradients } from '../../../styles/design-tokens';
import { PageBackground } from '../../components/layout';
import { ModernSectionBackground } from '../../components/ModernSectionBackground';

// SEO Components
import { PageSEO } from '../../components/seo';
import { SERVICE_SEO } from '../../utils/seo-config';

const keyServices = [
  { icon: <Target className="w-6 h-6" />, title: 'Content Strategy', description: 'Strategic content planning aligned with business goals and audience needs.' },
  { icon: <Edit3 className="w-6 h-6" />, title: 'Copywriting', description: 'Compelling copy that engages audiences and drives action across all channels.' },
  { icon: <Video className="w-6 h-6" />, title: 'Video Production', description: 'Professional video content from concept to final delivery.' },
  { icon: <Image className="w-6 h-6" />, title: 'Visual Content', description: 'Graphics, infographics, and visual assets that capture attention.' },
  { icon: <Mic className="w-6 h-6" />, title: 'Thought Leadership', description: 'Executive content and industry insights that position expertise.' },
  { icon: <Globe className="w-6 h-6" />, title: 'Content Distribution', description: 'Multi-channel content distribution and amplification strategies.' },
];

const processSteps = [
  { id: 'step-1', number: '01', title: 'Content Audit', description: 'Analyze existing content and identify gaps', details: ['Content inventory', 'Performance analysis', 'Competitive review', 'Audience research'] },
  { id: 'step-2', number: '02', title: 'Strategy Development', description: 'Create comprehensive content strategy', details: ['Content pillars and themes', 'Editorial calendar', 'Format and channel mix', 'Resource planning'] },
  { id: 'step-3', number: '03', title: 'Content Creation', description: 'Produce high-quality content assets', details: ['Writing and design', 'Video production', 'Asset optimization', 'Quality assurance'] },
  { id: 'step-4', number: '04', title: 'Distribution & Optimization', description: 'Publish, promote, and refine content', details: ['Multi-channel publishing', 'Promotion campaigns', 'Performance tracking', 'Continuous improvement'] },
];

const benefits = [
  { icon: <Heart className="w-5 h-5" />, title: 'Audience Engagement', description: 'Content that resonates and builds relationships' },
  { icon: <Target className="w-5 h-5" />, title: 'Brand Authority', description: 'Establish thought leadership and credibility' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'Lead Generation', description: 'Content that attracts and converts prospects' },
  { icon: <Zap className="w-5 h-5" />, title: 'SEO Performance', description: 'Optimized content that ranks and drives organic traffic' },
];

const deliverables = [
  { id: 'del-1', title: 'Content Strategy Document', icon: <FileText className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Comprehensive content strategy including themes, formats, channels, editorial calendar, and success metrics.' },
  { id: 'del-2', title: 'Content Assets', icon: <Sparkles className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Blog posts, articles, whitepapers, videos, infographics, social content, and all agreed deliverables.' },
  { id: 'del-3', title: 'Distribution Plan', icon: <Globe className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Multi-channel distribution strategy and promotion playbooks for maximum content reach and impact.' },
  { id: 'del-4', title: 'Performance Reports', icon: <BarChart3 className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Monthly content performance analytics with engagement, traffic, lead generation, and optimization recommendations.' },
];

const contentTypes = [
  { id: 'ct-1', title: 'Blog & Articles', icon: <Edit3 className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'SEO-optimized blog posts, thought leadership articles, and long-form content that educates and engages your audience.' },
  { id: 'ct-2', title: 'Video Content', icon: <Video className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Explainer videos, product demos, customer testimonials, webinars, and social video content optimized for each platform.' },
  { id: 'ct-3', title: 'Whitepapers & E-books', icon: <FileText className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'In-depth research, industry reports, and comprehensive guides that generate leads and demonstrate expertise.' },
  { id: 'ct-4', title: 'Social Content', icon: <Globe className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Platform-specific social media content including posts, stories, reels, and campaigns that drive engagement.' },
];

const industries = [
  { name: 'Technology', icon: <MonitorSmartphone className="w-4 h-4" /> },
  { name: 'Healthcare', icon: <Heart className="w-4 h-4" /> },
  { name: 'Finance', icon: <BarChart3 className="w-4 h-4" /> },
  { name: 'B2B Services', icon: <Users className="w-4 h-4" /> },
  { name: 'E-commerce', icon: <Globe className="w-4 h-4" /> },
  { name: 'Education', icon: <FileText className="w-4 h-4" /> },
];

const faqs = [
  { id: 'faq-1', title: 'How much content should we create?', icon: <Target className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Volume depends on goals and resources. We typically recommend 2-4 blog posts, 8-12 social posts, and 1-2 premium assets monthly for B2B.' },
  { id: 'faq-2', title: 'Do you handle all content types?', icon: <Sparkles className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Yes. We produce written content, video, graphics, podcasts, and more. Our team includes writers, designers, and videographers.' },
  { id: 'faq-3', title: 'How do you measure content success?', icon: <BarChart3 className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'We track traffic, engagement, conversions, and lead generation. Every piece is measured against specific KPIs aligned with your goals.' },
];

export function ContentStrategyPage() {
  return (
    <PageBackground>
      <PageSEO
        title={SERVICE_SEO.contentStrategy.title}
        description={SERVICE_SEO.contentStrategy.description}
        keywords={SERVICE_SEO.contentStrategy.keywords}
        ogImage={SERVICE_SEO.contentStrategy.ogImage}
        path="/services/content-strategy"
        serviceSchema={SERVICE_SEO.contentStrategy.schema}
      />
      
      {/* ============================================
          HERO SECTION - Premium Image with Content
          ============================================ */}
      <ModernSectionBackground variant="image-overlay-workspace" className="relative overflow-hidden py-12 lg:py-16">
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
                  <FileText className="w-3.5 h-3.5 mr-2" style={{ color: colors.brand.accent }} />
                  <span className="text-xs font-bold tracking-wide" style={{ color: colors.brand.primary }}>CONTENT STRATEGY</span>
                </span>
              </motion.div>

              <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight tracking-tight mb-4" style={{ color: colors.brand.primary }}>
                Content That Connects & Converts
              </h1>

              <div className="space-y-3 mb-5">
                <p className="text-sm font-semibold leading-snug" style={{ color: colors.brand.primary }}>
                  Strategic content that drives business results.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Engage audiences, build authority, and accelerate growth through data-driven content creation and multi-channel distribution strategies.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <MagneticButton strength={0.3}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    style={{ background: gradients.primary }}
                  >
                    Start Creating Content
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
                  src="https://images.unsplash.com/photo-1758874385949-cec80d549f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwc3RyYXRlZ3klMjB3cml0aW5nJTIwbGFwdG9wfGVufDF8fHx8MTc3NDU2NzI1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Content strategy and writing"
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
                        <p className="text-xs font-bold text-gray-700 mb-1">Content Pieces</p>
                        <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>5K+</span>
                      </div>
                      <div className="border-x border-gray-300/40">
                        <p className="text-xs font-bold text-gray-700 mb-1">Engagement Rate</p>
                        <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>78%</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-700 mb-1">Lead Conv.</p>
                        <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>32%</span>
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
            <SectionHeader badge="Services" badgeIcon={<Layers className="w-4 h-4" />} title="Content Services" description="End-to-end content strategy and production capabilities." align="center" maxWidth="md" />
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
            <SectionHeader badge="Process" badgeIcon={<Target className="w-4 h-4" />} title="Content Development Process" description="A proven methodology for content that performs." align="center" maxWidth="md" />
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
            <SectionHeader badge="Benefits" badgeIcon={<Zap className="w-4 h-4" />} title="Content Strategy Benefits" description="The business impact of strategic content." align="center" maxWidth="md" />
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
            <SectionHeader badge="Deliverables" badgeIcon={<FileText className="w-4 h-4" />} title="What You Receive" description="Comprehensive content assets and strategic guidance." align="center" maxWidth="md" />
            <ScrollReveal><Accordion items={deliverables} /></ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="mesh-gradient-light">
        <Section spacing="compact" animate background="transparent">
          <Container size="md">
            <SectionHeader badge="Content Types" badgeIcon={<Edit3 className="w-4 h-4" />} title="Content Formats We Create" description="Diverse content types optimized for each channel." align="center" maxWidth="md" />
            <ScrollReveal><Accordion items={contentTypes} /></ScrollReveal>
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
                  <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: colors.brand.primary }}>Content Performance</h2>
                  <p className="text-sm text-gray-600">Real results from our content programs</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-white/60 rounded-xl">
                    <div className="text-xl font-bold mb-1" style={{ color: colors.brand.primary }}>425%</div>
                    <div className="text-sm text-gray-600">Traffic Growth</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-xl">
                    <div className="text-xl font-bold mb-1" style={{ color: colors.brand.primary }}>3.8x</div>
                    <div className="text-sm text-gray-600">Lead Generation</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-xl">
                    <div className="text-xl font-bold mb-1" style={{ color: colors.brand.primary }}>89%</div>
                    <div className="text-sm text-gray-600">Engagement Rate</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 text-center leading-relaxed">
                  B2B technology company achieved explosive growth through strategic content marketing program.
                </p>
              </GlassCard>
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="mesh-gradient-warm">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader badge="Industries" badgeIcon={<Globe className="w-4 h-4" />} title="Industries We Serve" description="Content expertise across sectors." align="center" maxWidth="md" />
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
            <SectionHeader badge="FAQs" badgeIcon={<Eye className="w-4 h-4" />} title="Frequently Asked Questions" description="Common questions about content services." align="center" maxWidth="md" />
            <ScrollReveal><Accordion items={faqs} /></ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="glass-white">
        <section className="relative px-4 sm:px-6 lg:px-8 py-12 overflow-hidden bg-transparent">
          <Container size="md">
            <ScrollReveal>
              <GlassCard variant="base" rounded="2xl" padding="base" className="text-center">
                <IconBadge icon={<FileText className="w-8 h-8" />} size="lg" variant="gradient" animated className="mx-auto mb-4" />
                <h2 className="text-xl sm:text-2xl font-bold mb-3 leading-tight" style={{ color: colors.brand.primary }}>Ready to Create Great Content?</h2>
                <p className="text-sm text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
                  Let's build a content strategy that engages your audience and drives business results.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <MagneticButton strength={0.3}>
                    <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 group" style={{ background: gradients.primary }}>
                      Start Your Content Program<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

export default ContentStrategyPage;