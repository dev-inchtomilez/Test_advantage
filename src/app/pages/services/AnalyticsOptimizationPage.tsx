/**
 * ANALYTICS & OPTIMIZATION SERVICE PAGE
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, BarChart3, CheckCircle2, TrendingUp, Users, Target, Zap, LineChart, PieChart, Activity, Database, Eye, Globe, Award, Sparkles, MonitorSmartphone, FileText, Layers } from 'lucide-react';
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
  { icon: <BarChart3 className="w-6 h-6" />, title: 'Web Analytics', description: 'Comprehensive website tracking, analysis, and performance measurement.' },
  { icon: <Target className="w-6 h-6" />, title: 'Conversion Optimization', description: 'CRO strategies and A/B testing to maximize conversions and revenue.' },
  { icon: <PieChart className="w-6 h-6" />, title: 'Marketing Attribution', description: 'Multi-touch attribution models to understand customer journey and ROI.' },
  { icon: <Activity className="w-6 h-6" />, title: 'Campaign Analytics', description: 'Campaign performance tracking and optimization across all channels.' },
  { icon: <Database className="w-6 h-6" />, title: 'Data Integration', description: 'Connect and unify data from all marketing platforms and systems.' },
  { icon: <LineChart className="w-6 h-6" />, title: 'Custom Reporting', description: 'Tailored dashboards and reports aligned with business objectives.' },
];

const processSteps = [
  { id: 'step-1', number: '01', title: 'Analytics Audit', description: 'Assess current tracking and identify gaps', details: ['Current setup review', 'Data quality assessment', 'Goal and conversion tracking', 'Measurement framework'] },
  { id: 'step-2', number: '02', title: 'Implementation', description: 'Set up comprehensive tracking and analytics', details: ['Analytics platform setup', 'Conversion tracking', 'Custom event tracking', 'Dashboard configuration'] },
  { id: 'step-3', number: '03', title: 'Analysis & Insights', description: 'Analyze data and extract actionable insights', details: ['Performance analysis', 'Trend identification', 'Opportunity discovery', 'Recommendation development'] },
  { id: 'step-4', number: '04', title: 'Optimization', description: 'Test, refine, and continuously improve', details: ['A/B testing', 'Multivariate testing', 'Implementation support', 'Performance monitoring'] },
];

const benefits = [
  { icon: <Eye className="w-5 h-5" />, title: 'Data-Driven Decisions', description: 'Make informed decisions based on actual performance data' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'Increased ROI', description: 'Optimize spend and maximize return on investment' },
  { icon: <Target className="w-5 h-5" />, title: 'Better Targeting', description: 'Understand audiences and target more effectively' },
  { icon: <Zap className="w-5 h-5" />, title: 'Continuous Improvement', description: 'Ongoing optimization drives compound growth' },
];

const deliverables = [
  { id: 'del-1', title: 'Analytics Setup', icon: <Database className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Complete analytics implementation including GA4, conversion tracking, event tracking, and integration with all marketing platforms.' },
  { id: 'del-2', title: 'Custom Dashboards', icon: <BarChart3 className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Tailored reporting dashboards with key metrics, KPIs, and visualizations aligned with your business objectives.' },
  { id: 'del-3', title: 'Performance Reports', icon: <FileText className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Monthly analytics reports with insights, trends, benchmarks, and actionable recommendations for improvement.' },
  { id: 'del-4', title: 'Optimization Tests', icon: <Target className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Ongoing A/B and multivariate testing programs to optimize conversions, user experience, and campaign performance.' },
];

const analyticsServices = [
  { id: 'an-1', title: 'Google Analytics 4', icon: <BarChart3 className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Complete GA4 setup, migration, event tracking, conversion tracking, enhanced ecommerce, and custom reporting configuration.' },
  { id: 'an-2', title: 'Tag Management', icon: <Layers className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Google Tag Manager implementation and management for tracking codes, pixels, and marketing tags across your website.' },
  { id: 'an-3', title: 'Heat Mapping & Session Recording', icon: <Eye className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'User behavior analysis through heat maps, scroll maps, click tracking, and session recordings to understand UX issues.' },
  { id: 'an-4', title: 'Marketing Dashboards', icon: <PieChart className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Custom dashboards in Looker Studio, Tableau, or Power BI integrating data from all marketing channels for unified reporting.' },
];

const industries = [
  { name: 'E-commerce', icon: <Globe className="w-4 h-4" /> },
  { name: 'SaaS', icon: <MonitorSmartphone className="w-4 h-4" /> },
  { name: 'B2B', icon: <Users className="w-4 h-4" /> },
  { name: 'Finance', icon: <BarChart3 className="w-4 h-4" /> },
  { name: 'Healthcare', icon: <Activity className="w-4 h-4" /> },
  { name: 'Education', icon: <FileText className="w-4 h-4" /> },
];

const faqs = [
  { id: 'faq-1', title: 'What analytics platforms do you work with?', icon: <Database className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'We work with Google Analytics 4, Adobe Analytics, Mixpanel, Amplitude, and all major marketing platforms including social, email, and advertising.' },
  { id: 'faq-2', title: 'How long until we see optimization results?', icon: <TrendingUp className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Initial insights are immediate once tracking is implemented. Optimization results typically show within 4-8 weeks of testing and refinement.' },
  { id: 'faq-3', title: 'Do you provide ongoing support?', icon: <Zap className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Yes. We offer ongoing analytics management, monthly reporting, continuous optimization, and strategic recommendations.' },
];

export function AnalyticsOptimizationPage() {
  return (
    <PageBackground>
      <PageSEO
        title={SERVICE_SEO.analyticsOptimization.title}
        description={SERVICE_SEO.analyticsOptimization.description}
        keywords={SERVICE_SEO.analyticsOptimization.keywords}
        ogImage={SERVICE_SEO.analyticsOptimization.ogImage}
        path="/services/analytics-optimization"
        serviceSchema={SERVICE_SEO.analyticsOptimization.schema}
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
                  <BarChart3 className="w-3.5 h-3.5 mr-2" style={{ color: colors.brand.accent }} />
                  <span className="text-xs font-bold tracking-wide" style={{ color: colors.brand.primary }}>ANALYTICS & OPTIMIZATION</span>
                </span>
              </motion.div>

              <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight tracking-tight mb-4" style={{ color: colors.brand.primary }}>
                Data-Driven Marketing Excellence
              </h1>

              <div className="space-y-3 mb-5">
                <p className="text-sm font-semibold leading-snug" style={{ color: colors.brand.primary }}>
                  Turn data into actionable insights and measurable growth.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Comprehensive analytics, conversion optimization, and performance measurement that drives continuous improvement and maximum ROI.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <MagneticButton strength={0.3}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    style={{ background: gradients.primary }}
                  >
                    Start Optimizing
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXRhJTIwZGFzaGJvYXJkJTIwY2hhcnRzfGVufDF8fHx8MTc3NDU2NzI1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Analytics dashboard with data charts"
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
                        <p className="text-xs font-bold text-gray-700 mb-1">Avg. ROI Lift</p>
                        <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>285%</span>
                      </div>
                      <div className="border-x border-gray-300/40">
                        <p className="text-xs font-bold text-gray-700 mb-1">Conv. Increase</p>
                        <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>67%</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-700 mb-1">Data Accuracy</p>
                        <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>99%</span>
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
            <SectionHeader badge="Our Services" badgeIcon={<Layers className="w-4 h-4" />} title="Analytics & Optimization Services" description="Complete analytics implementation and optimization capabilities." align="center" maxWidth="md" />
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
            <SectionHeader badge="Our Process" badgeIcon={<Target className="w-4 h-4" />} title="Analytics & Optimization Methodology" description="A systematic 4-step approach to data-driven growth." align="center" maxWidth="md" />
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
            <SectionHeader badge="Benefits" badgeIcon={<Zap className="w-4 h-4" />} title="Analytics & Optimization Benefits" description="The business impact of data-driven optimization." align="center" maxWidth="md" />
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
            <SectionHeader badge="Deliverables" badgeIcon={<FileText className="w-4 h-4" />} title="What You Receive" description="Comprehensive analytics and optimization services." align="center" maxWidth="md" />
            <ScrollReveal><Accordion items={deliverables} /></ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="mesh-gradient-light">
        <Section spacing="compact" animate background="transparent">
          <Container size="md">
            <SectionHeader badge="Analytics Services" badgeIcon={<Database className="w-4 h-4" />} title="Analytics Capabilities" description="Full-service analytics implementation and management." align="center" maxWidth="md" />
            <ScrollReveal><Accordion items={analyticsServices} /></ScrollReveal>
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
                  <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: colors.brand.primary }}>Optimization Results</h2>
                  <p className="text-sm text-gray-600">Real performance improvements from our analytics & CRO work</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-white/60 rounded-xl">
                    <div className="text-xl font-bold mb-1" style={{ color: colors.brand.primary }}>183%</div>
                    <div className="text-sm text-gray-600">Conversion Increase</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-xl">
                    <div className="text-xl font-bold mb-1" style={{ color: colors.brand.primary }}>$2.4M</div>
                    <div className="text-sm text-gray-600">Revenue Impact</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-xl">
                    <div className="text-xl font-bold mb-1" style={{ color: colors.brand.primary }}>34%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 text-center leading-relaxed">
                  E-commerce company achieved dramatic revenue growth through systematic conversion rate optimization program.
                </p>
              </GlassCard>
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="mesh-gradient-warm">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader badge="Industries" badgeIcon={<Globe className="w-4 h-4" />} title="Industries We Serve" description="Analytics expertise across sectors." align="center" maxWidth="md" />
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
            <SectionHeader badge="FAQs" badgeIcon={<Eye className="w-4 h-4" />} title="Frequently Asked Questions" description="Common questions about analytics and optimization." align="center" maxWidth="md" />
            <ScrollReveal><Accordion items={faqs} /></ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="glass-white">
        <section className="relative px-4 sm:px-6 lg:px-8 py-12 overflow-hidden bg-transparent">
          <Container size="md">
            <ScrollReveal>
              <GlassCard variant="base" rounded="2xl" padding="base" className="text-center">
                <IconBadge icon={<BarChart3 className="w-8 h-8" />} size="lg" variant="gradient" animated className="mx-auto mb-4" />
                <h2 className="text-xl sm:text-2xl font-bold mb-3 leading-tight" style={{ color: colors.brand.primary }}>Ready to Optimize Performance?</h2>
                <p className="text-sm text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
                  Let's implement analytics and optimization programs that drive measurable growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <MagneticButton strength={0.3}>
                    <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 group" style={{ background: gradients.primary }}>
                      Start Optimizing Today<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

export default AnalyticsOptimizationPage;