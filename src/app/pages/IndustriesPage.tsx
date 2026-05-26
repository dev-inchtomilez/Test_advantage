/**
 * ============================================
 * INDUSTRIES PAGE - Enhanced & Comprehensive
 * ============================================
 * Deep industry expertise with realistic insights
 * Focused on value, methodology, and outcomes
 * Last Updated: March 2026
 * ============================================
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Building2, 
  MonitorSmartphone, 
  Hospital, 
  GraduationCap, 
  Briefcase, 
  Factory,
  Target,
  BarChart3,
  Globe,
  TrendingUp,
  Zap,
  CheckCircle2,
  Users,
  Award,
  Rocket,
  Shield,
  Database,
  FileText,
  LineChart,
  Settings,
  Code,
  Layers,
  Book,
  Lock,
  Search,
  MessageSquare,
  HeartPulse,
  DollarSign,
  Brain,
  Megaphone
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
import { ScrollReveal, StaggerContainer, staggerItemVariants } from '../components/ScrollReveal';
import { MagneticButton } from '../components/MagneticButton';
import { ModernSectionBackground } from '../components/ModernSectionBackground';
import { ImageFeatureCard } from '../components/ImageFeatureCard';

// Design Tokens
import { colors, gradients } from '../../styles/design-tokens';

// ============================================
// DATA DEFINITIONS
// ============================================

const industries = [
  {
    icon: <MonitorSmartphone className="w-7 h-7" />,
    title: 'B2B Technology & SaaS',
    tagline: 'Complex solutions require clear messaging',
    description: 'Strategic marketing for software companies, SaaS platforms, cloud services, and enterprise technology providers. We help translate technical complexity into clear value propositions.',
    challenges: [
      'Long sales cycles and complex buying committees',
      'Technical differentiation that buyers understand',
      'Product-led growth vs. sales-led strategies',
      'Competitive markets with noise and saturation',
    ],
    solutions: [
      'Clear positioning and messaging frameworks',
      'Demand generation programs that qualify leads',
      'Technical content that educates and converts',
      'Product marketing aligned to buyer journeys',
    ],
    outcomes: [
      'Improved lead quality and conversion rates',
      'Shortened sales cycles through education',
      'Clear competitive differentiation',
      'Scalable demand generation systems',
    ],
  },
  {
    icon: <Briefcase className="w-7 h-7" />,
    title: 'Professional Services',
    tagline: 'Expertise must be visible to be valued',
    description: 'Marketing for consulting firms, legal practices, accounting firms, and advisory services. We build thought leadership platforms and client acquisition systems.',
    challenges: [
      'Differentiation in crowded professional markets',
      'Building credibility with sophisticated buyers',
      'Partner involvement in marketing efforts',
      'Maintaining quality while scaling growth',
    ],
    solutions: [
      'Thought leadership content and positioning',
      'Executive visibility and speaking programs',
      'Strategic client acquisition frameworks',
      'Professional brand building and authority',
    ],
    outcomes: [
      'Enhanced market reputation and authority',
      'Higher-quality client inquiries',
      'Improved win rates and project margins',
      'Sustainable referral and network growth',
    ],
  },
  {
    icon: <Hospital className="w-7 h-7" />,
    title: 'Healthcare & Medical Devices',
    tagline: 'Patient trust meets regulatory compliance',
    description: 'Marketing for healthcare providers, medical device manufacturers, health technology, and clinical services. Strategy that balances patient needs with compliance requirements.',
    challenges: [
      'Strict regulatory and compliance requirements',
      'Building patient trust and confidence',
      'Complex provider and payer relationships',
      'Balancing education with promotion',
    ],
    solutions: [
      'Compliant marketing frameworks and review',
      'Patient education and trust-building content',
      'Provider relationship and referral programs',
      'Digital marketing within regulatory bounds',
    ],
    outcomes: [
      'Compliant marketing that drives results',
      'Improved patient acquisition and retention',
      'Stronger provider and referral networks',
      'Clear differentiation in competitive markets',
    ],
  },
  {
    icon: <Factory className="w-7 h-7" />,
    title: 'Manufacturing & Industrial',
    tagline: 'Engineering excellence requires strategic marketing',
    description: 'B2B marketing for manufacturers, industrial equipment providers, and engineering firms. We help technical organizations communicate value to business buyers.',
    challenges: [
      'Technical products with complex specifications',
      'Long buying cycles and multiple stakeholders',
      'Distributor and channel partner coordination',
      'Digital transformation of traditional sales',
    ],
    solutions: [
      'Technical marketing and specifications content',
      'Channel partner enablement and support',
      'Digital transformation and web presence',
      'Trade show and industry event strategies',
    ],
    outcomes: [
      'Improved lead generation and qualification',
      'Stronger channel partner performance',
      'Modernized digital presence and capabilities',
      'Clear product differentiation and positioning',
    ],
  },
  {
    icon: <DollarSign className="w-7 h-7" />,
    title: 'Financial Services',
    tagline: 'Trust is the foundation of financial relationships',
    description: 'Marketing for banks, insurance companies, wealth management, and FinTech firms. Strategy that builds trust while driving client acquisition.',
    challenges: [
      'Regulatory compliance and disclosure requirements',
      'Building trust in competitive markets',
      'Digital transformation and technology adoption',
      'Client education on complex products',
    ],
    solutions: [
      'Trust-building brand and content strategies',
      'Compliant digital marketing and advertising',
      'Client education and financial literacy content',
      'Multi-channel acquisition and retention programs',
    ],
    outcomes: [
      'Increased client acquisition and deposits',
      'Improved client retention and lifetime value',
      'Compliant marketing across all channels',
      'Enhanced brand trust and market position',
    ],
  },
  {
    icon: <Megaphone className="w-7 h-7" />,
    title: 'Business Services & Platforms',
    tagline: 'B2B solutions that solve real business problems',
    description: 'Marketing for business service providers, B2B platforms, and enterprise solution vendors. Clear value proposition for buyers seeking operational improvements.',
    challenges: [
      'Articulating ROI and business value clearly',
      'Differentiating in crowded solution markets',
      'Educating buyers on new approaches',
      'Building credibility with enterprise buyers',
    ],
    solutions: [
      'Value-based positioning and messaging',
      'ROI calculators and business case content',
      'Enterprise marketing and account-based strategies',
      'Customer success stories and proof points',
    ],
    outcomes: [
      'Clear articulation of business value',
      'Higher enterprise deal velocity',
      'Improved sales and marketing alignment',
      'Stronger competitive positioning',
    ],
  },
];

const industryApproach = [
  {
    id: 'approach-1',
    title: 'Industry-Specific Buyer Understanding',
    icon: <Users className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'We understand who buys in each industry, how decisions are made, what criteria matter, and what content influences buyers. This knowledge informs strategy, messaging, and channel selection to improve conversion rates and reduce wasted effort.',
  },
  {
    id: 'approach-2',
    title: 'Regulatory & Compliance Expertise',
    icon: <Shield className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Marketing in regulated industries requires understanding compliance requirements, approval processes, and disclosure obligations. Our strategies respect these constraints while still driving business growth and competitive advantage.',
  },
  {
    id: 'approach-3',
    title: 'Proven Industry Frameworks',
    icon: <Layers className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Industry-specific marketing frameworks, messaging templates, and campaign structures are adapted to your specific context. This reduces development time, improves quality, and accelerates results based on proven approaches.',
  },
  {
    id: 'approach-4',
    title: 'Competitive Landscape Intelligence',
    icon: <Search className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Understanding competitive positioning, messaging strategies, and market trends within each industry allows us to identify opportunities for differentiation and develop strategies that create competitive advantage.',
  },
  {
    id: 'approach-5',
    title: 'Channel & Media Expertise',
    icon: <Megaphone className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Different industries have different preferred channels, media consumption patterns, and content formats. Our industry knowledge ensures marketing investment is focused on channels that actually reach and influence target buyers.',
  },
  {
    id: 'approach-6',
    title: 'Metrics & Benchmarks',
    icon: <BarChart3 className="w-5 h-5" style={{ color: colors.brand.primary }} />,
    content: 'Industry-specific benchmarks for conversion rates, cost per acquisition, pipeline velocity, and other key metrics provide context for performance evaluation and realistic goal setting.',
  },
];

const crossIndustryCapabilities = [
  {
    icon: <Target className="w-7 h-7" />,
    title: 'Strategic Positioning',
    description: 'Market analysis, competitive differentiation, and clear positioning that resonates with target buyers.',
    details: [
      'Market and competitive analysis',
      'Value proposition development',
      'Messaging and positioning frameworks',
      'Brand architecture and strategy',
    ],
  },
  {
    icon: <Megaphone className="w-7 h-7" />,
    title: 'Demand Generation',
    description: 'Integrated campaigns that generate qualified leads and support sales pipeline development.',
    details: [
      'Multi-channel campaign development',
      'Lead generation and nurturing',
      'Marketing automation implementation',
      'Performance tracking and optimization',
    ],
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: 'Content Strategy',
    description: 'Strategic content that educates buyers, builds authority, and supports the sales process.',
    details: [
      'Content strategy and planning',
      'Thought leadership development',
      'Sales enablement content',
      'SEO and organic visibility',
    ],
  },
  {
    icon: <Code className="w-7 h-7" />,
    title: 'Digital Marketing',
    description: 'Modern digital presence, performance marketing, and technology enablement.',
    details: [
      'Website strategy and optimization',
      'Digital advertising and PPC',
      'Marketing technology stack',
      'Analytics and measurement',
    ],
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: 'Brand Building',
    description: 'Consistent brand experiences that build recognition, trust, and preference.',
    details: [
      'Brand identity and guidelines',
      'Brand messaging and voice',
      'Customer experience design',
      'Brand consistency and governance',
    ],
  },
  {
    icon: <MessageSquare className="w-7 h-7" />,
    title: 'Public Relations',
    description: 'Strategic PR that builds credibility, visibility, and industry reputation.',
    details: [
      'Media relations and outreach',
      'Executive positioning programs',
      'Crisis communication planning',
      'Industry awards and recognition',
    ],
  },
];

const whyIndustryExpertise = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Faster Time to Value',
    description: 'Industry knowledge reduces learning curves and accelerates strategy development and execution.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Reduced Risk',
    description: 'Understanding industry-specific challenges and compliance requirements minimizes costly mistakes.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Better Performance',
    description: 'Industry benchmarks and proven frameworks improve campaign performance and ROI.',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Strategic Insight',
    description: 'Deep sector knowledge enables more sophisticated strategic thinking and competitive positioning.',
  },
];

export function IndustriesPage() {
  return (
    <PageBackground>
      <PageSEO
        title={PAGE_SEO.industries.title}
        description={PAGE_SEO.industries.description}
        keywords={PAGE_SEO.industries.keywords}
        ogImage={PAGE_SEO.industries.ogImage}
        path="/industries"
      />
      {/* ============================================
          1. HERO SECTION
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
                  <Building2 className="w-3.5 h-3.5 mr-2" style={{ color: colors.brand.accent }} />
                  <span className="text-xs font-bold tracking-wide" style={{ color: colors.brand.primary }}>
                    INDUSTRIES WE SERVE
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
                Industry Expertise That Drives Results
              </motion.h1>

              <motion.p 
                className="text-sm text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Deep knowledge of B2B sectors, buyer behaviors, competitive dynamics, and regulatory requirements. Industry expertise accelerates strategy development and improves marketing performance.
              </motion.p>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          2. WHY INDUSTRY EXPERTISE MATTERS
          ============================================ */}
      <ModernSectionBackground variant="glass-white">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader
              badge="The Value of Expertise"
              badgeIcon={<Award className="w-4 h-4" />}
              title="Why Industry Knowledge Matters"
              description="Specific sector experience delivers tangible advantages in strategy, execution, and results."
              align="center"
              maxWidth="md"
            />

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {whyIndustryExpertise.map((item, index) => (
                <motion.div key={index} variants={staggerItemVariants}>
                  <GlassCard variant="base" rounded="lg" padding="sm" hover className="h-full text-center border border-gray-200/60">
                    <IconBadge icon={item.icon} size="md" variant="gradient" animated className="mx-auto" />
                    <h3 className="text-base font-bold mt-6 mb-3 leading-tight" style={{ color: colors.brand.primary }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          3. INDUSTRIES WE SERVE - DETAILED
          ============================================ */}
      <ModernSectionBackground variant="gradient-abstract">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader
              badge="Our Sectors"
              badgeIcon={<Building2 className="w-4 h-4" />}
              title="Industries We Serve"
              description="Focused B2B expertise with proven frameworks and deep market understanding."
              align="center"
              maxWidth="md"
            />

            <div className="space-y-8 max-w-6xl mx-auto">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard variant="base" rounded="xl" padding="base" hover className="border border-gray-200/60">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon & Title */}
                      <div className="flex-shrink-0">
                        <IconBadge icon={industry.icon} size="xl" variant="gradient" animated />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1" style={{ color: colors.brand.primary }}>
                          {industry.title}
                        </h3>
                        <p className="text-sm font-semibold mb-3" style={{ color: colors.brand.secondary }}>
                          {industry.tagline}
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {industry.description}
                        </p>

                        {/* Three-Column Layout */}
                        <div className="grid md:grid-cols-3 gap-6">
                          {/* Challenges */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Target className="w-4 h-4" style={{ color: colors.brand.accent }} />
                              <h4 className="text-sm font-bold text-gray-900">Key Challenges</h4>
                            </div>
                            <ul className="space-y-2">
                              {industry.challenges.map((challenge, idx) => (
                                <li key={idx} className="text-xs text-gray-600 leading-relaxed">
                                  • {challenge}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Solutions */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Layers className="w-4 h-4" style={{ color: colors.brand.secondary }} />
                              <h4 className="text-sm font-bold text-gray-900">Our Solutions</h4>
                            </div>
                            <ul className="space-y-2">
                              {industry.solutions.map((solution, idx) => (
                                <li key={idx} className="text-xs text-gray-600 leading-relaxed">
                                  • {solution}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Outcomes */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <TrendingUp className="w-4 h-4" style={{ color: colors.brand.primary }} />
                              <h4 className="text-sm font-bold text-gray-900">Expected Outcomes</h4>
                            </div>
                            <ul className="space-y-2">
                              {industry.outcomes.map((outcome, idx) => (
                                <li key={idx} className="text-xs text-gray-600 leading-relaxed">
                                  • {outcome}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Industry Images */}
            <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
              <ScrollReveal>
                <ImageFeatureCard
                  title="B2B Technology & SaaS"
                  description="Strategic marketing for complex software solutions, cloud platforms, and enterprise technology."
                  imageUrl="https://images.unsplash.com/photo-1631624217902-d14c634ab17c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwc29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzQ1MDgzODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                />
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <ImageFeatureCard
                  title="Healthcare & Medical Devices"
                  description="Compliant marketing strategies for healthcare providers and medical device manufacturers."
                  imageUrl="https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMG1lZGljYWx8ZW58MXx8fHwxNzc0NTQ2MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                />
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <ImageFeatureCard
                  title="Professional Services"
                  description="Thought leadership and expertise marketing for consulting, legal, and advisory firms."
                  imageUrl="https://images.unsplash.com/photo-1774195044152-19c8c002bb6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzZXJ2aWNlcyUyMG9mZmljZXxlbnwxfHx8fDE3NzQ0Mjc2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                />
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          4. INDUSTRY APPROACH - ACCORDION
          ============================================ */}
      <ModernSectionBackground variant="mesh-gradient-purple">
        <Section spacing="compact" animate background="transparent">
          <Container size="md">
            <SectionHeader
              badge="Our Methodology"
              badgeIcon={<Brain className="w-4 h-4" />}
              title="Industry-Specific Approach"
              description="How we leverage sector expertise to accelerate results and reduce risk."
              align="center"
              maxWidth="md"
            />

            <ScrollReveal>
              <Accordion items={industryApproach} />
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          5. CROSS-INDUSTRY CAPABILITIES
          ============================================ */}
      <ModernSectionBackground variant="animated-dots">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader
              badge="Core Capabilities"
              badgeIcon={<Rocket className="w-4 h-4" />}
              title="Cross-Industry Marketing Capabilities"
              description="Strategic and tactical capabilities that drive success across all sectors we serve."
              align="center"
              maxWidth="md"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {crossIndustryCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard variant="base" rounded="lg" padding="base" hover className="h-full border border-gray-200/60">
                    <IconBadge icon={capability.icon} size="md" variant="gradient" animated className="mb-4" />
                    <h3 className="text-lg font-bold mb-2" style={{ color: colors.brand.primary }}>
                      {capability.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {capability.description}
                    </p>
                    <div className="space-y-2">
                      {capability.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: colors.brand.secondary }} />
                          <span className="text-xs text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          6. CTA SECTION
          ============================================ */}
      <ModernSectionBackground variant="image-overlay-workspace">
        <section className="relative px-4 sm:px-6 lg:px-8 py-10 overflow-hidden bg-transparent">
          <Container size="md">
            <div className="text-center">
              <ScrollReveal>
                <GlassCard variant="base" rounded="2xl" padding="base" className="shadow-2xl border border-gray-200/60">
                  <IconBadge 
                    icon={<Building2 className="w-6 h-6" />}
                    size="md"
                    variant="gradient"
                    animated
                    className="mx-auto mb-4"
                  />

                  <h2 className="text-xl sm:text-2xl font-bold mb-3 leading-tight" style={{ color: colors.brand.primary }}>
                    Ready to Leverage Industry Expertise?
                  </h2>

                  <p className="text-sm text-gray-700 mb-5 max-w-2xl mx-auto leading-relaxed">
                    Let's discuss how deep industry knowledge can accelerate your marketing strategy, improve campaign performance, and drive measurable business results.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                    <MagneticButton strength={0.3}>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold text-sm shadow-2xl hover:shadow-3xl transition-all duration-300 group border-2 border-transparent"
                        style={{ background: gradients.primary }}
                      >
                        Discuss Your Industry
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </MagneticButton>

                    <MagneticButton strength={0.2}>
                      <Link
                        to="/case-studies"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all duration-300 hover:shadow-lg bg-white"
                        style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
                      >
                        View Case Studies
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </MagneticButton>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 font-medium mb-3">
                      Industry expertise across B2B sectors
                    </p>
                    <div className="flex justify-center gap-8 flex-wrap">
                      <div className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="w-4 h-4" style={{ color: colors.brand.accent }} />
                        <span className="text-sm font-semibold">Proven Frameworks</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="w-4 h-4" style={{ color: colors.brand.accent }} />
                        <span className="text-sm font-semibold">Compliance Knowledge</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="w-4 h-4" style={{ color: colors.brand.accent }} />
                        <span className="text-sm font-semibold">Faster Results</span>
                      </div>
                    </div>
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

export default IndustriesPage;