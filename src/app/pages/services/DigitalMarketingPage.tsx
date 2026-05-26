/**
 * ============================================
 * DIGITAL MARKETING SERVICE PAGE
 * ============================================
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Rocket, CheckCircle2, TrendingUp, Users, BarChart3, Target, Zap, Search, Share2, Mail, Globe, Eye, MonitorSmartphone } from 'lucide-react';
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
  { icon: <Search className="w-6 h-6" />, title: 'SEO & SEM', description: 'Search engine optimization and paid search campaigns that drive qualified traffic and conversions.' },
  { icon: <Share2 className="w-6 h-6" />, title: 'Social Media', description: 'Strategic social media marketing across all major platforms with content and community management.' },
  { icon: <Target className="w-6 h-6" />, title: 'PPC Advertising', description: 'Performance-driven paid advertising campaigns optimized for ROI across Google, social, and display.' },
  { icon: <Mail className="w-6 h-6" />, title: 'Email Marketing', description: 'Email strategy, automation, and campaigns that nurture leads and drive customer engagement.' },
  { icon: <BarChart3 className="w-6 h-6" />, title: 'Analytics & Tracking', description: 'Comprehensive tracking, attribution, and analytics to measure and optimize campaign performance.' },
  { icon: <Zap className="w-6 h-6" />, title: 'Conversion Optimization', description: 'CRO strategies and A/B testing to maximize conversions and revenue from existing traffic.' },
];

const processSteps = [
  { id: 'step-1', number: '01', title: 'Audit & Analysis', description: 'Comprehensive digital presence audit', details: ['Website and SEO analysis', 'Competitor research', 'Audience insights', 'Channel performance review'] },
  { id: 'step-2', number: '02', title: 'Strategy Development', description: 'Create integrated digital marketing plan', details: ['Channel strategy and mix', 'Campaign planning', 'Budget allocation', 'KPI definition'] },
  { id: 'step-3', number: '03', title: 'Campaign Execution', description: 'Launch and manage campaigns across channels', details: ['Campaign setup and launch', 'Content creation', 'Ad creative development', 'Multi-channel coordination'] },
  { id: 'step-4', number: '04', title: 'Optimization', description: 'Continuous testing and performance improvement', details: ['Performance monitoring', 'A/B testing', 'Budget optimization', 'Strategy refinement'] },
];

const benefits = [
  { icon: <TrendingUp className="w-5 h-5" />, title: 'Measurable ROI', description: 'Track every dollar and optimize for maximum return' },
  { icon: <Target className="w-5 h-5" />, title: 'Precision Targeting', description: 'Reach the right audience at the right time' },
  { icon: <Zap className="w-5 h-5" />, title: 'Rapid Scaling', description: 'Scale successful campaigns quickly and efficiently' },
  { icon: <BarChart3 className="w-5 h-5" />, title: 'Data-Driven', description: 'Decisions based on analytics and insights' },
];

const deliverables = [
  { id: 'del-1', title: 'Digital Marketing Strategy', icon: <Target className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Comprehensive digital strategy covering all channels, audience targeting, campaign plans, and success metrics.' },
  { id: 'del-2', title: 'Campaign Management', icon: <Rocket className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Ongoing campaign setup, execution, monitoring, and optimization across SEO, PPC, social, email, and other channels.' },
  { id: 'del-3', title: 'Performance Reports', icon: <BarChart3 className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Regular reporting on traffic, conversions, ROI, and key metrics with insights and recommendations for improvement.' },
  { id: 'del-4', title: 'Creative Assets', icon: <MonitorSmartphone className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Ad creative, landing pages, email templates, social content, and all assets needed for campaign success.' },
];

const channels = [
  { id: 'ch-1', title: 'Search Engine Optimization', icon: <Search className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Technical SEO, on-page optimization, content strategy, link building, and local SEO to improve organic rankings and traffic.' },
  { id: 'ch-2', title: 'Paid Search (Google Ads)', icon: <Target className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Google Ads campaigns including search, display, shopping, and video ads optimized for conversions and ROI.' },
  { id: 'ch-3', title: 'Social Media Marketing', icon: <Share2 className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Facebook, Instagram, LinkedIn, Twitter/X, TikTok strategies with organic and paid campaigns tailored to each platform.' },
  { id: 'ch-4', title: 'Email Marketing', icon: <Mail className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Email campaigns, automation workflows, list segmentation, and personalization to nurture leads and drive conversions.' },
];

const industries = [
  { name: 'E-commerce', icon: <Globe className="w-4 h-4" /> },
  { name: 'SaaS & Technology', icon: <Rocket className="w-4 h-4" /> },
  { name: 'B2B Services', icon: <Users className="w-4 h-4" /> },
  { name: 'Healthcare', icon: <Target className="w-4 h-4" /> },
  { name: 'Finance', icon: <BarChart3 className="w-4 h-4" /> },
  { name: 'Education', icon: <Search className="w-4 h-4" /> },
];

const faqs = [
  { id: 'faq-1', title: 'How quickly will we see results?', icon: <TrendingUp className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'PPC and social ads show results immediately. SEO takes 3-6 months for significant improvement. We provide quick wins while building long-term performance.' },
  { id: 'faq-2', title: 'What\'s the minimum budget needed?', icon: <BarChart3 className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'We work with businesses at all stages. Minimum recommended spend is $3,000-5,000/month for meaningful results across multiple channels.' },
  { id: 'faq-3', title: 'Do you provide reporting?', icon: <Eye className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Yes. Comprehensive monthly reports with traffic, conversions, ROI, and actionable insights. Plus real-time dashboard access anytime.' },
];

export function DigitalMarketingPage() {
  return (
    <PageBackground>
      <PageSEO
        title={SERVICE_SEO.digitalMarketing.title}
        description={SERVICE_SEO.digitalMarketing.description}
        keywords={SERVICE_SEO.digitalMarketing.keywords}
        ogImage={SERVICE_SEO.digitalMarketing.ogImage}
        path="/services/digital-marketing"
        serviceSchema={SERVICE_SEO.digitalMarketing.schema}
      />
      
      <ModernSectionBackground variant="mesh-gradient-light">
        <Section spacing="base" animate background="transparent">
          <Container size="lg">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full border-2 shadow-lg" style={{ backgroundColor: '#ffffff', borderColor: colors.brand.accent }}>
                  <Rocket className="w-3.5 h-3.5 mr-2" style={{ color: colors.brand.accent }} />
                  <span className="text-xs font-bold tracking-wide" style={{ color: colors.brand.primary }}>DIGITAL MARKETING</span>
                </span>
              </motion.div>
              <motion.h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-[1.1] tracking-tight mb-4" style={{ color: colors.brand.primary }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                Digital Marketing & Growth
              </motion.h1>
              <motion.p className="text-sm text-gray-600 leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
                Performance-driven digital marketing strategies that drive traffic, generate leads, and accelerate revenue growth.
              </motion.p>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="glass-blur">
        <Section spacing="compact" animate background="transparent">
          <Container size="xl">
            {/* Premium Hero Image Section */}
            <ScrollReveal>
              <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto mb-6">
                {/* Left: Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1657727534685-36b09f84e193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGF0YSUyMGNvbXB1dGVyfGVufDF8fHx8MTc3NDU1OTM2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Digital marketing analytics and data"
                      className="w-full h-[280px] lg:h-[360px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Floating performance badge */}
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
                            <p className="text-xs font-bold text-gray-700 mb-1">Avg. Traffic Lift</p>
                            <div className="flex items-baseline justify-center gap-1">
                              <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>245%</span>
                            </div>
                          </div>
                          <div className="border-x border-gray-300/40">
                            <p className="text-xs font-bold text-gray-700 mb-1">Lead Growth</p>
                            <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>180%</span>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gray-700 mb-1">Avg. ROI</p>
                            <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>4.2x</span>
                          </div>
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
                  className="space-y-5"
                >
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: colors.brand.primary }}>
                      Performance-Driven{' '}
                      <span style={{ color: colors.brand.secondary }}>Digital Growth</span>
                    </h2>
                    <div className="h-1 w-16 rounded-full mb-4" style={{ background: gradients.primary }}></div>
                    <p className="text-sm text-gray-700 leading-relaxed mb-5">
                      We deliver integrated digital marketing strategies across SEO, PPC, social media, email, and content marketing—all optimized for measurable results, qualified leads, and maximum ROI. Every channel works together toward your business objectives.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: Search, title: 'SEO & Organic Growth', desc: 'Sustainable traffic from search engines' },
                      { icon: Target, title: 'Paid Media Excellence', desc: 'ROI-focused advertising campaigns' },
                      { icon: Share2, title: 'Social Media Strategy', desc: 'Engagement that drives action' },
                      { icon: BarChart3, title: 'Analytics & Optimization', desc: 'Data-driven continuous improvement' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      >
                        <GlassCard variant="base" rounded="lg" padding="sm" hover>
                          <div className="flex items-start gap-3">
                            <div 
                              className="p-2 rounded-lg flex-shrink-0"
                              style={{ backgroundColor: `${colors.brand.secondary}10` }}
                            >
                              <item.icon className="w-5 h-5" style={{ color: colors.brand.secondary }} />
                            </div>
                            <div>
                              <h4 className="text-sm font-bold mb-1" style={{ color: colors.brand.primary }}>
                                {item.title}
                              </h4>
                              <p className="text-xs text-gray-600">{item.desc}</p>
                            </div>
                          </div>
                        </GlassCard>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Original intro card below hero */}
            <ScrollReveal>
              <GlassCard variant="base" rounded="2xl" padding="base" className="text-center">
                <IconBadge icon={<MonitorSmartphone className="w-7 h-7" />} size="md" variant="gradient" animated className="mx-auto mb-4" />
                <h2 className="text-lg sm:text-xl font-bold mb-3" style={{ color: colors.brand.primary }}>Digital-First Marketing</h2>
                <p className="text-gray-700 leading-relaxed text-sm max-w-3xl mx-auto">
                  In the digital age, your online presence is your business. We deliver integrated digital marketing strategies across SEO, PPC, social media, email, and more—all optimized for measurable results and maximum ROI.
                </p>
              </GlassCard>
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="mesh-gradient-warm">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader badge="Our Services" badgeIcon={<Rocket className="w-4 h-4" />} title="Digital Marketing Services" description="Comprehensive digital capabilities to grow your business online." align="center" maxWidth="md" />
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
            <SectionHeader badge="Our Process" badgeIcon={<Target className="w-4 h-4" />} title="Digital Marketing Methodology" description="A proven 4-step approach to digital marketing success." align="center" maxWidth="md" />
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
            <SectionHeader badge="Benefits" badgeIcon={<Zap className="w-4 h-4" />} title="Digital Marketing Advantages" description="Why digital marketing delivers exceptional ROI." align="center" maxWidth="md" />
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
            <SectionHeader badge="Deliverables" badgeIcon={<BarChart3 className="w-4 h-4" />} title="What You Receive" description="Comprehensive digital marketing services and reporting." align="center" maxWidth="md" />
            <ScrollReveal><Accordion items={deliverables} /></ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="mesh-gradient-light">
        <Section spacing="compact" animate background="transparent">
          <Container size="md">
            <SectionHeader badge="Channels" badgeIcon={<Globe className="w-4 h-4" />} title="Digital Marketing Channels" description="Multi-channel strategies for maximum reach and impact." align="center" maxWidth="md" />
            <ScrollReveal><Accordion items={channels} /></ScrollReveal>
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
                  <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: colors.brand.primary }}>Campaign Performance</h2>
                  <p className="text-sm text-gray-600">Real results from our digital marketing campaigns</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-white/60 rounded-xl">
                    <div className="text-2xl font-bold mb-1" style={{ color: colors.brand.primary }}>285%</div>
                    <div className="text-sm text-gray-600">Traffic Increase</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-xl">
                    <div className="text-2xl font-bold mb-1" style={{ color: colors.brand.primary }}>4.7x</div>
                    <div className="text-sm text-gray-600">ROAS</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-xl">
                    <div className="text-2xl font-bold mb-1" style={{ color: colors.brand.primary }}>156%</div>
                    <div className="text-sm text-gray-600">Lead Growth</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 text-center leading-relaxed">
                  B2B SaaS company achieved explosive growth through integrated SEO, PPC, and social media strategy.
                </p>
              </GlassCard>
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="mesh-gradient-warm">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader badge="Industries" badgeIcon={<Globe className="w-4 h-4" />} title="Industries We Serve" description="Digital marketing expertise across sectors." align="center" maxWidth="md" />
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
            <SectionHeader badge="FAQs" badgeIcon={<Eye className="w-4 h-4" />} title="Frequently Asked Questions" description="Common questions about digital marketing services." align="center" maxWidth="md" />
            <ScrollReveal><Accordion items={faqs} /></ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="glass-white">
        <section className="relative px-4 sm:px-6 lg:px-8 py-12 overflow-hidden bg-transparent">
          <Container size="md">
            <ScrollReveal>
              <GlassCard variant="base" rounded="2xl" padding="base" className="text-center">
                <IconBadge icon={<Rocket className="w-8 h-8" />} size="lg" variant="gradient" animated className="mx-auto mb-4" />
                <h2 className="text-xl sm:text-2xl font-bold mb-3 leading-tight" style={{ color: colors.brand.primary }}>Ready to Accelerate Growth?</h2>
                <p className="text-sm text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
                  Let's build a digital marketing strategy that drives measurable results for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <MagneticButton strength={0.3}>
                    <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 group" style={{ background: gradients.primary }}>
                      Get Started Today<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

export default DigitalMarketingPage;