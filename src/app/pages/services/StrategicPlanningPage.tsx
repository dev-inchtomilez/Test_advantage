/**
 * ============================================
 * STRATEGIC PLANNING SERVICE PAGE
 * ============================================
 * Comprehensive 9-section service page
 * ============================================
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  ArrowRight, Target, CheckCircle2, TrendingUp, Users, BarChart3, Lightbulb, FileText, Globe, Award, Zap, Layers, Eye, Map, LineChart
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
  { icon: <Target className="w-6 h-6" />, title: 'Market Analysis', description: 'Comprehensive market research, competitive intelligence, and customer insights to inform strategic decisions.' },
  { icon: <Map className="w-6 h-6" />, title: 'Go-to-Market Strategy', description: 'Integrated launch plans covering positioning, messaging, channels, and tactical execution roadmaps.' },
  { icon: <LineChart className="w-6 h-6" />, title: 'Growth Strategy', description: 'Data-driven strategies for market expansion, customer acquisition, and revenue acceleration.' },
  { icon: <Users className="w-6 h-6" />, title: 'Customer Segmentation', description: 'Detailed audience analysis, persona development, and targeting strategies for maximum impact.' },
  { icon: <Lightbulb className="w-6 h-6" />, title: 'Brand Positioning', description: 'Strategic differentiation and value proposition development that resonates with target markets.' },
  { icon: <BarChart3 className="w-6 h-6" />, title: 'Performance Frameworks', description: 'KPI definition, measurement systems, and optimization frameworks for continuous improvement.' },
];

const processSteps = [
  { id: 'step-1', number: '01', title: 'Business Discovery', description: 'Deep dive into business model, objectives, and market context', details: ['Stakeholder interviews and alignment sessions', 'Business model and value chain analysis', 'Current state marketing audit', 'Organizational capability assessment'] },
  { id: 'step-2', number: '02', title: 'Market Research', description: 'Comprehensive analysis of market dynamics and opportunities', details: ['Market sizing and trend analysis', 'Competitive landscape mapping', 'Customer research and persona development', 'Industry best practice benchmarking'] },
  { id: 'step-3', number: '03', title: 'Strategy Development', description: 'Craft integrated marketing strategy aligned with business goals', details: ['Strategic positioning and differentiation', 'Target market selection and prioritization', 'Channel strategy and mix optimization', 'Budget allocation and resource planning'] },
  { id: 'step-4', number: '04', title: 'Roadmap Creation', description: 'Develop actionable implementation plans and timelines', details: ['Phased implementation roadmap', 'Campaign planning and scheduling', 'Resource and budget requirements', 'Risk mitigation strategies'] },
];

const benefits = [
  { icon: <Target className="w-5 h-5" />, title: 'Strategic Clarity', description: 'Clear direction and aligned priorities across the organization' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'Accelerated Growth', description: 'Faster market penetration and revenue growth' },
  { icon: <Zap className="w-5 h-5" />, title: 'Resource Efficiency', description: 'Optimized budget allocation and ROI maximization' },
  { icon: <Award className="w-5 h-5" />, title: 'Competitive Advantage', description: 'Differentiation that captures market share' },
];

const deliverables = [
  { id: 'del-1', title: 'Marketing Strategy Document', icon: <FileText className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Comprehensive strategy documentation including market analysis, positioning, messaging frameworks, channel strategy, and success metrics.' },
  { id: 'del-2', title: 'Go-to-Market Roadmap', icon: <Map className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Detailed implementation plan with phased approach, campaign calendar, resource requirements, and milestone tracking.' },
  { id: 'del-3', title: 'Competitive Analysis', icon: <BarChart3 className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'In-depth competitive intelligence, market positioning map, and strategic recommendations for differentiation.' },
  { id: 'del-4', title: 'Performance Framework', icon: <LineChart className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'KPI dashboard, measurement methodology, reporting templates, and optimization guidelines for continuous improvement.' },
];

const industries = [
  { name: 'Technology & SaaS', icon: <Zap className="w-4 h-4" /> },
  { name: 'Healthcare & Life Sciences', icon: <Target className="w-4 h-4" /> },
  { name: 'Financial Services', icon: <BarChart3 className="w-4 h-4" /> },
  { name: 'Professional Services', icon: <Users className="w-4 h-4" /> },
  { name: 'Manufacturing & Industrial', icon: <Layers className="w-4 h-4" /> },
  { name: 'Retail & E-commerce', icon: <Globe className="w-4 h-4" /> },
];

const faqs = [
  { id: 'faq-1', title: 'How long does strategic planning take?', icon: <Target className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Typical engagements range from 6-12 weeks depending on scope and complexity. We work efficiently while ensuring thorough analysis and stakeholder alignment.' },
  { id: 'faq-2', title: 'What if our market is constantly changing?', icon: <TrendingUp className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'We build agile strategies with flexibility built in. Our frameworks include quarterly review cycles and adjustment mechanisms to adapt to market dynamics.' },
  { id: 'faq-3', title: 'Do you help with implementation?', icon: <Zap className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Absolutely. We offer both strategy development and ongoing implementation support, ensuring your plans translate into measurable results.' },
];

export function StrategicPlanningPage() {
  return (
    <PageBackground>
      <PageSEO
        title={SERVICE_SEO.strategicPlanning.title}
        description={SERVICE_SEO.strategicPlanning.description}
        keywords={SERVICE_SEO.strategicPlanning.keywords}
        ogImage={SERVICE_SEO.strategicPlanning.ogImage}
        path="/services/strategic-planning"
        serviceSchema={SERVICE_SEO.strategicPlanning.schema}
      />
      
      {/* ============================================
          HERO SECTION - Premium Image with Content
          ============================================ */}
      <ModernSectionBackground variant="image-overlay-architecture" className="relative overflow-hidden py-12 lg:py-16">
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
                  <Target className="w-3.5 h-3.5 mr-2" style={{ color: colors.brand.accent }} />
                  <span className="text-xs font-bold tracking-wide" style={{ color: colors.brand.primary }}>STRATEGIC PLANNING</span>
                </span>
              </motion.div>

              <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight tracking-tight mb-4" style={{ color: colors.brand.primary }}>
                Strategic Marketing That Drives Growth
              </h1>

              <div className="space-y-3 mb-5">
                <p className="text-sm font-semibold leading-snug" style={{ color: colors.brand.primary }}>
                  Transform ambition into executable strategy.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Data-driven market analysis, competitive positioning, and integrated go-to-market strategies that accelerate business growth and market leadership.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <MagneticButton strength={0.3}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    style={{ background: gradients.primary }}
                  >
                    Build Your Strategy
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
                  src="https://images.unsplash.com/photo-1769739576456-0aefcff3f4b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVnaWMlMjBwbGFubmluZyUyMGJ1c2luZXNzJTIwbWVldGluZ3xlbnwxfHx8fDE3NzQ1NjcyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Strategic planning business meeting"
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
                        <p className="text-xs font-bold text-gray-700 mb-1">Strategies Built</p>
                        <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>200+</span>
                      </div>
                      <div className="border-x border-gray-300/40">
                        <p className="text-xs font-bold text-gray-700 mb-1">Avg. Growth</p>
                        <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>3.8x</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-700 mb-1">Success Rate</p>
                        <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>96%</span>
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
        <Section spacing="base" animate background="transparent">
          <Container size="lg">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full border-2 shadow-lg" style={{ backgroundColor: '#ffffff', borderColor: colors.brand.accent }}>
                  <Target className="w-3.5 h-3.5 mr-2" style={{ color: colors.brand.accent }} />
                  <span className="text-xs font-bold tracking-wide" style={{ color: colors.brand.primary }}>STRATEGIC PLANNING</span>
                </span>
              </motion.div>
              <motion.h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-[1.1] tracking-tight mb-4" style={{ color: colors.brand.primary }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                Strategic Marketing Planning
              </motion.h1>
              <motion.p className="text-sm text-gray-600 leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
                Comprehensive marketing strategy development that aligns with business objectives, drives market leadership, and delivers measurable ROI.
              </motion.p>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="glass-blur">
        <Section spacing="compact" animate background="transparent">
          <Container size="md">
            <ScrollReveal>
              <GlassCard variant="base" rounded="2xl" padding="base" className="text-center">
                <IconBadge icon={<Lightbulb className="w-8 h-8" />} size="lg" variant="gradient" animated className="mx-auto mb-6" />
                <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: colors.brand.primary }}>Why Strategic Planning Matters</h2>
                <p className="text-gray-700 leading-relaxed text-sm max-w-3xl mx-auto">
                  In today's complex market environment, success requires more than tactical execution. Our strategic planning services provide the clarity, direction, and frameworks needed to make informed decisions, allocate resources effectively, and achieve sustainable competitive advantage.
                </p>
              </GlassCard>
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="mesh-gradient-warm">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader badge="What We Deliver" badgeIcon={<Layers className="w-4 h-4" />} title="Core Strategic Services" description="Comprehensive planning services that drive business growth and market success." align="center" maxWidth="md" />
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
            <SectionHeader badge="Our Methodology" badgeIcon={<Map className="w-4 h-4" />} title="Strategic Planning Process" description="A proven 4-phase approach that delivers actionable strategies and measurable results." align="center" maxWidth="md" />
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
            <SectionHeader badge="Key Benefits" badgeIcon={<Award className="w-4 h-4" />} title="Strategic Planning Advantages" description="The measurable impact of strategic marketing planning on your business." align="center" maxWidth="md" />
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
            <SectionHeader badge="What You Receive" badgeIcon={<FileText className="w-4 h-4" />} title="Strategic Deliverables" description="Comprehensive documentation and frameworks to guide your marketing success." align="center" maxWidth="md" />
            <ScrollReveal><Accordion items={deliverables} /></ScrollReveal>
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
                  <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: colors.brand.primary }}>Real Results</h2>
                  <p className="text-sm text-gray-600">Strategic planning that drives measurable business outcomes</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-white/60 rounded-xl">
                    <div className="text-xl font-bold mb-1" style={{ color: colors.brand.primary }}>47%</div>
                    <div className="text-sm text-gray-600">Revenue Growth</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-xl">
                    <div className="text-xl font-bold mb-1" style={{ color: colors.brand.primary }}>3.2x</div>
                    <div className="text-sm text-gray-600">Marketing ROI</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 rounded-xl">
                    <div className="text-xl font-bold mb-1" style={{ color: colors.brand.primary }}>62%</div>
                    <div className="text-sm text-gray-600">Market Share Gain</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 text-center leading-relaxed">
                  Technology company leveraged strategic planning to reposition in competitive market, resulting in dramatic growth and market leadership.
                </p>
              </GlassCard>
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="mesh-gradient-warm">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader badge="Industry Expertise" badgeIcon={<Globe className="w-4 h-4" />} title="Industries We Serve" description="Strategic planning expertise across diverse market sectors." align="center" maxWidth="md" />
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
            <SectionHeader badge="Common Questions" badgeIcon={<Eye className="w-4 h-4" />} title="Frequently Asked Questions" description="Everything you need to know about our strategic planning services." align="center" maxWidth="md" />
            <ScrollReveal><Accordion items={faqs} /></ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      <ModernSectionBackground variant="glass-white">
        <section className="relative px-4 sm:px-6 lg:px-8 py-12 overflow-hidden bg-transparent">
          <Container size="md">
            <ScrollReveal>
              <GlassCard variant="base" rounded="2xl" padding="base" className="text-center">
                <IconBadge icon={<Target className="w-8 h-8" />} size="lg" variant="gradient" animated className="mx-auto mb-4" />
                <h2 className="text-xl sm:text-2xl font-bold mb-3 leading-tight" style={{ color: colors.brand.primary }}>Ready to Build Your Strategy?</h2>
                <p className="text-sm text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your business objectives and develop a strategic marketing plan that drives measurable results.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <MagneticButton strength={0.3}>
                    <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 group" style={{ background: gradients.primary }}>
                      Schedule Consultation<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

export default StrategicPlanningPage;