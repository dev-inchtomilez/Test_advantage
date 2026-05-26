/**
 * ============================================
 * AI MARKETING SOLUTIONS SERVICE PAGE
 * ============================================
 * Premium AI-powered marketing solutions page
 * with comprehensive SEO and content structure
 * ============================================
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  ArrowRight, Sparkles, CheckCircle2, TrendingUp, Users, BarChart3, 
  Target, Zap, Brain, Bot, Cpu, Network, LineChart, MessageSquare,
  Eye, Lightbulb, Rocket, Shield, Award, Globe
} from 'lucide-react';
import { Section, Container, SectionHeader, GlassCard, IconBadge } from '../../components/primitives';
import { Accordion } from '../../components/Accordion';
import { ScrollReveal, StaggerContainer, staggerItemVariants } from '../../components/ScrollReveal';
import { MagneticButton } from '../../components/MagneticButton';
import { TiltCard } from '../../components/TiltCard';
import { colors, gradients } from '../../../styles/design-tokens';
import { PageBackground } from '../../components/layout';
import { ModernSectionBackground } from '../../components/ModernSectionBackground';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

// SEO Components
import { PageSEO } from '../../components/seo';
import { SERVICE_SEO } from '../../utils/seo-config';

const keyServices = [
  { icon: <Brain className="w-6 h-6" />, title: 'Predictive Analytics', description: 'AI-powered predictive models that forecast customer behavior, market trends, and campaign performance.' },
  { icon: <Bot className="w-6 h-6" />, title: 'Marketing Automation', description: 'Intelligent automation systems that personalize customer journeys and optimize marketing workflows.' },
  { icon: <MessageSquare className="w-6 h-6" />, title: 'AI Chatbots & Virtual Assistants', description: '24/7 AI-powered customer engagement with natural language processing and sentiment analysis.' },
  { icon: <Target className="w-6 h-6" />, title: 'Hyper-Personalization', description: 'AI-driven content and offer personalization at scale across all customer touchpoints.' },
  { icon: <Cpu className="w-6 h-6" />, title: 'Machine Learning Optimization', description: 'Continuous ML models that optimize campaigns, bidding strategies, and content performance in real-time.' },
  { icon: <Network className="w-6 h-6" />, title: 'AI Content Generation', description: 'Advanced AI systems for creating and optimizing marketing content, copy, and creative assets.' },
];

const processSteps = [
  { id: 'step-1', number: '01', title: 'AI Audit & Assessment', description: 'Evaluate your marketing technology and data readiness', details: ['Current tech stack analysis', 'Data quality assessment', 'AI opportunity identification', 'ROI modeling and projections'] },
  { id: 'step-2', number: '02', title: 'AI Strategy & Roadmap', description: 'Develop comprehensive AI implementation plan', details: ['Use case prioritization', 'Technology selection', 'Implementation timeline', 'Change management planning'] },
  { id: 'step-3', number: '03', title: 'AI Solution Deployment', description: 'Implement and integrate AI marketing systems', details: ['Platform configuration', 'Model training and optimization', 'System integration', 'Team training and enablement'] },
  { id: 'step-4', number: '04', title: 'Continuous Optimization', description: 'Ongoing AI model refinement and performance enhancement', details: ['Model performance monitoring', 'Continuous learning cycles', 'Feature enhancement', 'Strategic optimization'] },
];

const benefits = [
  { icon: <TrendingUp className="w-5 h-5" />, title: 'Increased ROI', description: 'AI optimization delivers 35-50% improvement in marketing ROI' },
  { icon: <Zap className="w-5 h-5" />, title: 'Real-Time Decisions', description: 'Make data-driven decisions in milliseconds, not days' },
  { icon: <Target className="w-5 h-5" />, title: 'Precision Targeting', description: 'Micro-segment audiences with 95%+ accuracy' },
  { icon: <Rocket className="w-5 h-5" />, title: 'Scale Effortlessly', description: 'Personalize at scale without linear cost increases' },
];

const deliverables = [
  { id: 'del-1', title: 'AI Marketing Strategy', icon: <Brain className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Comprehensive AI strategy document detailing use cases, technology requirements, implementation roadmap, and expected ROI across all marketing functions.' },
  { id: 'del-2', title: 'Deployed AI Systems', icon: <Cpu className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Fully configured and operational AI marketing platforms including predictive analytics, automation, personalization engines, and chatbot systems.' },
  { id: 'del-3', title: 'Custom AI Models', icon: <Network className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Proprietary machine learning models trained on your data for customer scoring, churn prediction, content optimization, and campaign performance.' },
  { id: 'del-4', title: 'Training & Documentation', icon: <Award className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Complete team training programs, user guides, best practices documentation, and ongoing support for your marketing team.' },
];

const aiCapabilities = [
  { id: 'cap-1', title: 'Predictive Customer Scoring', icon: <Brain className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'AI models that predict customer lifetime value, purchase probability, churn risk, and optimal engagement timing with 90%+ accuracy.' },
  { id: 'cap-2', title: 'Dynamic Content Optimization', icon: <Lightbulb className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Real-time AI-powered content personalization that adapts messaging, offers, and creative based on individual user behavior and context.' },
  { id: 'cap-3', title: 'Intelligent Campaign Management', icon: <Target className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Automated campaign optimization using reinforcement learning to continuously improve performance across channels and maximize conversions.' },
  { id: 'cap-4', title: 'Natural Language Processing', icon: <MessageSquare className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Advanced NLP for sentiment analysis, social listening, customer feedback analysis, and AI-powered content creation and optimization.' },
];

const industries = [
  { name: 'SaaS & Technology', icon: <Cpu className="w-4 h-4" /> },
  { name: 'E-commerce & Retail', icon: <Globe className="w-4 h-4" /> },
  { name: 'Financial Services', icon: <LineChart className="w-4 h-4" /> },
  { name: 'Healthcare & Pharma', icon: <Shield className="w-4 h-4" /> },
  { name: 'B2B Enterprise', icon: <Users className="w-4 h-4" /> },
  { name: 'Media & Entertainment', icon: <Eye className="w-4 h-4" /> },
];

const faqs = [
  { id: 'faq-1', title: 'Do we need a data science team to use AI marketing?', icon: <Brain className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'No. We provide fully managed AI solutions with our expert team handling model development, training, and optimization. Your team focuses on strategy and insights.' },
  { id: 'faq-2', title: 'How much data is needed to start with AI marketing?', icon: <BarChart3 className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Minimum 6-12 months of customer and campaign data is ideal. We can start with smaller datasets and improve models over time as more data accumulates.' },
  { id: 'faq-3', title: 'What\'s the typical ROI and payback period?', icon: <TrendingUp className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Most clients see 35-50% improvement in marketing ROI within 6-9 months. Payback period is typically 4-6 months depending on implementation scope and data readiness.' },
  { id: 'faq-4', title: 'Is our data secure with AI solutions?', icon: <Shield className="w-5 h-5" style={{ color: colors.brand.primary }} />, content: 'Absolutely. All AI systems follow enterprise security standards with encryption, access controls, and compliance with GDPR, CCPA, and industry regulations.' },
];

const stats = [
  { value: '35-50%', label: 'Increase in Marketing ROI', gradient: gradients.primary },
  { value: '90%+', label: 'Prediction Accuracy', gradient: gradients.secondary },
  { value: '24/7', label: 'Automated Engagement', gradient: gradients.accent },
  { value: '3-5x', label: 'Productivity Gain', gradient: gradients.primary },
];

export default function AIMarketingSolutionsPage() {
  return (
    <PageBackground>
      {/* SEO Meta Tags */}
      <PageSEO
        title={SERVICE_SEO.aiMarketing.title}
        description={SERVICE_SEO.aiMarketing.description}
        keywords={SERVICE_SEO.aiMarketing.keywords}
        ogImage={SERVICE_SEO.aiMarketing.ogImage}
        path="/services/ai-marketing-solutions"
        serviceSchema={SERVICE_SEO.aiMarketing.schema}
      />
      
      {/* Hero Section */}
      <ModernSectionBackground variant="mesh-gradient-light">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left: Content */}
              <div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ duration: 0.6, delay: 0.2 }} 
                  className="mb-4"
                >
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full border-2 shadow-lg" style={{ backgroundColor: '#ffffff', borderColor: colors.brand.accent }}>
                    <Sparkles className="w-3.5 h-3.5 mr-2" style={{ color: colors.brand.accent }} />
                    <span className="text-xs font-bold tracking-wide" style={{ color: colors.brand.primary }}>AI MARKETING SOLUTIONS</span>
                  </span>
                </motion.div>
                
                <motion.h1 
                  className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-[1.1] tracking-tight mb-4" 
                  style={{ color: colors.brand.primary }} 
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  AI-Powered Marketing Solutions
                </motion.h1>
                
                <motion.p 
                  className="text-sm text-gray-600 leading-relaxed mb-5" 
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Harness the power of artificial intelligence and machine learning to transform your marketing performance, personalize at scale, and drive unprecedented ROI.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3"
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <MagneticButton>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold shadow-lg hover:shadow-xl transition-all text-center"
                      style={{ background: gradients.primary }}
                    >
                      Start AI Transformation
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </MagneticButton>
                  
                  <MagneticButton>
                    <Link
                      to="/case-studies"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold border-2 transition-all bg-white hover:shadow-lg text-center"
                      style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
                    >
                      View AI Results
                    </Link>
                  </MagneticButton>
                </motion.div>
              </div>
              
              {/* Right: Hero Image with Floating Stats */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMHJvYm90JTIwZnV0dXJlfGVufDF8fHx8MTc3NDU2ODIyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="AI Marketing Technology and Innovation"
                    className="w-full h-auto"
                  />
                  
                  {/* Floating Glass Stats Badges - hidden on mobile to prevent overflow */}
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="hidden md:block absolute backdrop-blur-xl rounded-xl p-3 shadow-2xl border"
                      style={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        borderColor: 'rgba(0, 1, 49, 0.1)',
                        top: index === 0 ? '10%' : index === 1 ? '30%' : index === 2 ? '55%' : '75%',
                        left: index % 2 === 0 ? '-8%' : 'auto',
                        right: index % 2 === 1 ? '-8%' : 'auto',
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    >
                      <div className="text-xl font-bold mb-0.5" style={{ background: stat.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        {stat.value}
                      </div>
                      <div className="text-xs font-medium whitespace-nowrap" style={{ color: colors.brand.primary }}>
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Mobile Stats Grid - shown only on mobile */}
                <div className="md:hidden grid grid-cols-2 gap-3 mt-3">
                  {stats.map((stat, index) => (
                    <div key={index} className="rounded-xl p-3 text-center border" style={{ background: 'rgba(255,255,255,0.92)', borderColor: 'rgba(0,1,49,0.1)' }}>
                      <div className="text-xl font-bold" style={{ background: stat.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div>
                      <div className="text-xs font-medium leading-tight mt-0.5" style={{ color: colors.brand.primary }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* Key Services Section */}
      <ModernSectionBackground variant="glass-blur">
        <Section spacing="compact">
          <Container>
            <SectionHeader
              badge="AI CAPABILITIES"
              title="Intelligent Marketing Solutions"
              description="Comprehensive AI-powered marketing capabilities that drive performance and efficiency"
              alignment="center"
            />
            
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {keyServices.map((service, index) => (
                <ScrollReveal key={index} variants={staggerItemVariants}>
                  <TiltCard>
                    <GlassCard className="h-full p-6 hover:shadow-2xl transition-all duration-300">
                      <div className="mb-5">
                        <IconBadge icon={service.icon} gradient={gradients.primary} size="md" />
                      </div>
                      <h3 className="text-base font-bold mb-2" style={{ color: colors.brand.primary }}>
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </GlassCard>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* AI Implementation Process */}
      <Section spacing="compact" background="white">
        <Container>
          <SectionHeader
            badge="OUR PROCESS"
            title="AI Implementation Methodology"
            description="Proven framework for successful AI marketing transformation"
            alignment="center"
          />
          
          <div className="mt-8 space-y-6">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.id}>
                <div className="relative">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold text-white shadow-lg"
                        style={{ background: gradients.primary }}
                      >
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold mb-1" style={{ color: colors.brand.primary }}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.brand.accent }} />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div
                      className="absolute left-6 top-16 bottom-0 w-0.5"
                      style={{ background: `linear-gradient(to bottom, ${colors.brand.primary}, transparent)` }}
                    />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits Grid */}
      <ModernSectionBackground variant="subtle-pattern">
        <Section spacing="compact">
          <Container>
            <SectionHeader
              badge="BENEFITS"
              title="Why Choose AI Marketing?"
              description="Measurable advantages that transform your marketing performance"
              alignment="center"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={index}>
                  <GlassCard className="p-5 text-center hover:shadow-xl transition-all">
                    <div className="mb-4 flex justify-center">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                        style={{ background: gradients.primary }}
                      >
                        {benefit.icon}
                      </div>
                    </div>
                    <h4 className="text-sm font-bold mb-2" style={{ color: colors.brand.primary }}>
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-gray-600">{benefit.description}</p>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* AI Capabilities Accordion */}
      <Section spacing="compact" background="white">
        <Container>
          <SectionHeader
            badge="AI CAPABILITIES"
            title="Advanced AI Marketing Features"
            description="Enterprise-grade AI capabilities that power marketing excellence"
            alignment="center"
          />
          
          <div className="mt-8 max-w-4xl mx-auto">
            <Accordion items={aiCapabilities} />
          </div>
        </Container>
      </Section>

      {/* Deliverables Accordion */}
      <ModernSectionBackground variant="glass-blur">
        <Section spacing="compact">
          <Container>
            <SectionHeader
              badge="DELIVERABLES"
              title="What You Receive"
              description="Complete AI marketing solutions from strategy to deployment"
              alignment="center"
            />
            
            <div className="mt-8 max-w-4xl mx-auto">
              <Accordion items={deliverables} />
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* Industries We Serve */}
      <Section spacing="compact" background="white">
        <Container>
          <SectionHeader
            badge="INDUSTRIES"
            title="AI Marketing Across Industries"
            description="Tailored AI solutions for diverse business sectors"
            alignment="center"
          />
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {industries.map((industry, index) => (
              <ScrollReveal key={index}>
                <div
                  className="px-6 py-3 rounded-full border-2 flex items-center gap-2 bg-white hover:shadow-lg transition-all cursor-default"
                  style={{ borderColor: colors.brand.primary }}
                >
                  <span style={{ color: colors.brand.primary }}>{industry.icon}</span>
                  <span className="font-medium" style={{ color: colors.brand.primary }}>
                    {industry.name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <ModernSectionBackground variant="subtle-pattern">
        <Section spacing="compact">
          <Container>
            <SectionHeader
              badge="FAQ"
              title="Frequently Asked Questions"
              description="Common questions about AI marketing implementation"
              alignment="center"
            />
            
            <div className="mt-8 max-w-4xl mx-auto">
              <Accordion items={faqs} />
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* CTA Section */}
      <Section spacing="compact" background="white">
        <Container size="md">
          <ScrollReveal>
            <div className="text-center">
              <div className="mb-4">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4"
                  style={{ background: gradients.primary }}
                >
                  <Brain className="w-7 h-7 text-white" />
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: colors.brand.primary }}>
                Ready to Transform Your Marketing with AI?
              </h2>
              <p className="text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
                Schedule a consultation to discover how AI can revolutionize your marketing performance and deliver measurable ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold shadow-lg hover:shadow-xl transition-all"
                    style={{ background: gradients.primary }}
                  >
                    Start Your AI Journey
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold border-2 transition-all bg-white hover:shadow-lg"
                    style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
                  >
                    Explore All Services
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </PageBackground>
  );
}