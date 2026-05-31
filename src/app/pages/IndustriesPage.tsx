/**
 * ============================================
 * INDUSTRIES PAGE - Updated with Approved Content
 * ============================================
 * Industry-aligned growth systems content
 * Last Updated: May 2026
 * ============================================
 */

import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Building2, 
  Hospital, 
  Briefcase, 
  Factory,
  Target,
  BarChart3,
  TrendingUp,
  Zap,
  CheckCircle2,
  Users,
  Award,
  Rocket,
  Shield,
  Layers,
  Search,
  MessageSquare,
  Brain,
  Megaphone,
  UtensilsCrossed,
  HardHat,
  ShoppingBag
} from 'lucide-react';

// Primitive Components
import { Section, Container, SectionHeader, GlassCard, IconBadge } from '../components/primitives';

// Layout Components
import { PageBackground } from '../components/layout';

// SEO Components
import { PageSEO } from '../components/seo';
import { PAGE_SEO } from '../utils/seo-config';

// UI Components
import { ScrollReveal, StaggerContainer, staggerItemVariants } from '../components/ScrollReveal';
import { MagneticButton } from '../components/MagneticButton';
import { ModernSectionBackground } from '../components/ModernSectionBackground';
import { ImageFeatureCard } from '../components/ImageFeatureCard';
import { Accordion } from '../components/Accordion';

// Design Tokens
import { colors, gradients } from '../../styles/design-tokens';

// ============================================
// DATA DEFINITIONS
// ============================================

const industries = [
  {
    id: '01',
    icon: <Factory className="w-7 h-7" />,
    title: 'Manufacturing & Industrial',
    tagline: 'Complex products need clear positioning and connected demand generation.',
    description: 'We help manufacturers, engineering companies, industrial product businesses, and B2B suppliers modernize their marketing systems, strengthen market positioning, and improve lead generation across traditional and digital channels.',
    challenges: [
      'Long sales cycles and multiple decision-makers',
      'Technical products difficult to communicate',
      'Weak digital presence in competitive markets',
      'Disconnected distributor and channel communication',
    ],
    solutions: [
      'Strategic positioning for industrial markets',
      'Technical content & product communication',
      'B2B lead generation systems',
      'SEO, LinkedIn & performance marketing',
      'CRM integration & lead tracking',
      'Trade show & offline-online integration',
    ],
    outcomes: [
      'Improved lead quality',
      'Stronger distributor engagement',
      'Better visibility in competitive markets',
      'Increased pipeline consistency',
    ],
  },
  {
    id: '02',
    icon: <ShoppingBag className="w-7 h-7" />,
    title: 'FMCG & Consumer Brands',
    tagline: 'Growth depends on visibility, distribution, and customer engagement.',
    description: 'We help FMCG and consumer-focused brands improve market visibility, strengthen customer engagement, and create integrated campaigns that support brand growth and sales performance.',
    challenges: [
      'Highly competitive and crowded markets',
      'Low customer retention & loyalty',
      'Inconsistent omnichannel presence',
      'Difficulty measuring campaign effectiveness',
    ],
    solutions: [
      'Omnichannel campaign execution',
      'Consumer engagement strategies',
      'Performance marketing & media buying',
      'Brand positioning & communication',
      'Retail & digital integration',
      'Marketing analytics & reporting',
    ],
    outcomes: [
      'Improved customer engagement',
      'Higher campaign performance',
      'Stronger brand recall',
      'Better conversion across channels',
    ],
  },
  {
    id: '03',
    icon: <Hospital className="w-7 h-7" />,
    title: 'Healthcare & Medical',
    tagline: 'Trust, credibility, and communication drive healthcare growth.',
    description: 'We support healthcare providers, medical manufacturers, wellness brands, and healthcare service businesses with compliant, trust-focused marketing and patient engagement systems.',
    challenges: [
      'Building patient trust & credibility',
      'Complex healthcare communication',
      'Compliance-sensitive marketing',
      'Low digital engagement & visibility',
    ],
    solutions: [
      'Patient-focused communication systems',
      'Healthcare positioning & visibility',
      'SEO & local search optimization',
      'CRM & patient engagement workflows',
      'Reputation & trust-building strategies',
      'Content-led authority building',
    ],
    outcomes: [
      'Increased patient engagement',
      'Improved brand trust',
      'Better digital visibility',
      'Higher inquiry & appointment quality',
    ],
  },
  {
    id: '04',
    icon: <Building2 className="w-7 h-7" />,
    title: 'Hospitality & Tourism',
    tagline: 'Customer experience starts before the booking happens.',
    description: 'We help hospitality brands, hotels, travel businesses, and tourism companies improve customer acquisition, digital engagement, and brand visibility through integrated marketing systems.',
    challenges: [
      'Seasonal demand fluctuations',
      'High competition across platforms',
      'Low direct bookings',
      'Inconsistent customer engagement',
    ],
    solutions: [
      'Performance-driven booking campaigns',
      'Social media & visual storytelling',
      'SEO & local search optimization',
      'Customer engagement automation',
      'Review & reputation management',
      'Brand positioning & experience marketing',
    ],
    outcomes: [
      'Increased direct bookings',
      'Stronger customer retention',
      'Improved online visibility',
      'Better customer engagement',
    ],
  },
  {
    id: '05',
    icon: <UtensilsCrossed className="w-7 h-7" />,
    title: 'Food & Beverage (F&B)',
    tagline: 'Visibility, experience, and customer loyalty drive growth.',
    description: 'We help restaurants, café chains, food brands, and F&B businesses build stronger customer engagement systems, improve digital visibility, and drive repeat business.',
    challenges: [
      'High customer acquisition costs',
      'Low repeat customer rates',
      'Intense local competition',
      'Inconsistent digital communication',
    ],
    solutions: [
      'Local SEO & discovery optimization',
      'Social media & content strategy',
      'Performance marketing campaigns',
      'Loyalty & retention automation',
      'Brand storytelling & positioning',
      'Customer engagement systems',
    ],
    outcomes: [
      'Increased customer retention',
      'Higher footfall & online orders',
      'Better local visibility',
      'Stronger brand engagement',
    ],
  },
  {
    id: '06',
    icon: <HardHat className="w-7 h-7" />,
    title: 'Infrastructure & Construction',
    tagline: 'Complex industries require strategic communication and market credibility.',
    description: 'We work with infrastructure companies, construction businesses, industrial contractors, and engineering firms to strengthen positioning, improve visibility, and support business development initiatives.',
    challenges: [
      'Low market visibility',
      'Traditional sales dependency',
      'Weak digital positioning',
      'Difficulty communicating capabilities clearly',
    ],
    solutions: [
      'Corporate positioning strategies',
      'Project-focused communication systems',
      'LinkedIn & B2B visibility campaigns',
      'Industry branding & thought leadership',
      'Website & digital transformation',
      'Lead generation & CRM systems',
    ],
    outcomes: [
      'Improved industry visibility',
      'Better project inquiries',
      'Stronger stakeholder confidence',
      'Enhanced market positioning',
    ],
  },
  {
    id: '07',
    icon: <Briefcase className="w-7 h-7" />,
    title: 'Professional Services',
    tagline: 'Expertise only creates growth when the market sees it.',
    description: 'We help consulting firms, advisory businesses, legal firms, and professional service providers build authority, strengthen positioning, and improve client acquisition through thought leadership and strategic visibility.',
    challenges: [
      'Differentiating in crowded markets',
      'Low visibility for expertise',
      'Inconsistent lead generation',
      'Difficulty scaling through referrals alone',
    ],
    solutions: [
      'Executive thought leadership',
      'LinkedIn management & visibility',
      'Authority-driven content strategy',
      'Lead generation systems',
      'Positioning & messaging frameworks',
      'CRM & client nurturing workflows',
    ],
    outcomes: [
      'Improved market authority',
      'Higher-quality inbound inquiries',
      'Better client acquisition consistency',
      'Stronger executive visibility',
    ],
  },
];

const whyIndustryExpertise = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Faster Market Understanding',
    description: 'Industry familiarity reduces learning curves and accelerates strategic execution.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Better Buyer Alignment',
    description: 'Messaging, channels, and campaigns aligned to real buyer behavior improve engagement and conversion quality.',
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Smarter Positioning',
    description: 'Competitive landscape understanding helps create stronger market differentiation and clearer value communication.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Revenue-Focused Execution',
    description: 'Every strategy is aligned to industry-specific sales processes, customer journeys, and growth objectives.',
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

const heroSlides = [
  {
    title: 'Manufacturing & Industrial',
    tagline: 'Complex products need clear positioning and connected demand generation.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',
  },
  {
    title: 'FMCG & Consumer Brands',
    tagline: 'Growth depends on visibility, distribution, and customer engagement.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',
  },
  {
    title: 'Healthcare & Medical',
    tagline: 'Trust, credibility, and communication drive healthcare growth.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',
  },
  {
    title: 'Hospitality & Tourism',
    tagline: 'Customer experience starts before the booking happens.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',
  },
  {
    title: 'Food & Beverage',
    tagline: 'Visibility, experience, and customer loyalty drive growth.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',
  },
  {
    title: 'Professional Services',
    tagline: 'Authority and trust are the foundation of professional growth.',
    image: 'https://images.unsplash.com/photo-1664575198308-3959904fa430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',
  },
  {
    title: 'Real Estate & Construction',
    tagline: 'Visibility and trust convert prospects into long-term clients.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400',
  },
];

export function IndustriesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const next = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 2000);
    return () => clearInterval(timer);
  }, [next]);

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
          1. HERO SLIDER
          ============================================ */}
      <div className="relative w-full overflow-hidden" style={{ height: '520px' }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover object-center"
              style={{ transform: 'scale(1.03)' }}
            />
            {/* Gradient overlay — no blue tint, pure dark */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.1) 100%)' }} />

            <div className="absolute inset-0 flex items-center">
              <Container size="lg">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="max-w-2xl"
                >
                  <span
                    className="inline-flex items-center px-3 py-1.5 rounded-full border-2 mb-5"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: colors.brand.accent, backdropFilter: 'blur(8px)' }}
                  >
                    <Building2 className="w-3.5 h-3.5 mr-2" style={{ color: colors.brand.accent }} />
                    <span className="text-xs font-bold tracking-wide text-white">INDUSTRIES WE SERVE</span>
                  </span>

                  {/* Title with subtle text shadow instead of background highlight */}
                  <h1
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-4"
                    style={{ textShadow: '0 2px 20px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.8)' }}
                  >
                    {heroSlides[currentSlide].title}
                  </h1>

                  <p
                    className="text-base leading-relaxed max-w-xl"
                    style={{ color: 'rgba(255,255,255,0.88)', textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}
                  >
                    {heroSlides[currentSlide].tagline}
                  </p>
                </motion.div>
              </Container>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators only */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: idx === currentSlide ? '24px' : '8px',
                height: '8px',
                background: idx === currentSlide ? colors.brand.accent : 'rgba(255,255,255,0.45)',
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className="absolute top-6 right-6 text-white/70 text-xs font-semibold">
          {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
        </div>
      </div>

      {/* ============================================
          2. WHY INDUSTRY EXPERTISE MATTERS
          ============================================ */}
      <ModernSectionBackground variant="glass-white">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader
              badge="Why Industry Expertise Matters"
              badgeIcon={<Award className="w-4 h-4" />}
              title="Growth Strategies Work Better When Built for Your Industry"
              description="Generic marketing creates disconnected execution. Industry-specific strategy creates stronger positioning, better lead quality, faster decision-making, and higher conversion efficiency."
              align="center"
              maxWidth="md"
            />

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {whyIndustryExpertise.map((item, index) => (
                <motion.div key={index} variants={staggerItemVariants}>
                  <GlassCard variant="base" rounded="lg" padding="sm" hover className="h-full text-center border border-gray-200/60">
                    <div className="flex justify-center">
                      <IconBadge icon={item.icon} size="md" variant="gradient" animated />
                    </div>
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
              badge="Focused Industry Expertise"
              badgeIcon={<Building2 className="w-4 h-4" />}
              title="Industries We Help Scale"
              description="We work with growth-focused businesses across sectors where strategic positioning, integrated execution, and operational alignment directly impact revenue growth."
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
                        <p className="text-sm font-semibold mb-3 italic" style={{ color: colors.brand.secondary }}>
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

                          {/* How We Help */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Layers className="w-4 h-4" style={{ color: colors.brand.secondary }} />
                              <h4 className="text-sm font-bold text-gray-900">How We Help</h4>
                            </div>
                            <ul className="space-y-2">
                              {industry.solutions.map((solution, idx) => (
                                <li key={idx} className="text-xs text-gray-600 leading-relaxed">
                                  • {solution}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Business Outcomes */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <TrendingUp className="w-4 h-4" style={{ color: colors.brand.primary }} />
                              <h4 className="text-sm font-bold text-gray-900">Business Outcomes</h4>
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
                  title="Manufacturing & Industrial"
                  description="Modernize marketing systems, strengthen market positioning, and improve lead generation across channels."
                  imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                />
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <ImageFeatureCard
                  title="Healthcare & Medical"
                  description="Compliant, trust-focused marketing and patient engagement systems for healthcare businesses."
                  imageUrl="https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMG1lZGljYWx8ZW58MXx8fHwxNzc0NTQ2MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                />
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <ImageFeatureCard
                  title="Professional Services"
                  description="Build authority, strengthen positioning, and improve client acquisition through thought leadership."
                  imageUrl="https://images.unsplash.com/photo-1774195044152-19c8c002bb6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzZXJ2aWNlcyUyMG9mZmljZXxlbnwxfHx8fDE3NzQ0Mjc2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                />
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          4. TRANSITION PARAGRAPH
          ============================================ */}
      <ModernSectionBackground variant="mesh-gradient-purple">
        <Section spacing="compact" animate background="transparent">
          <Container size="md">
            <div className="text-center max-w-3xl mx-auto">
              <ScrollReveal>
                <GlassCard variant="base" rounded="xl" padding="base" className="border border-gray-200/60">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 leading-tight" style={{ color: colors.brand.primary }}>
                    Turning Industry Complexity Into Competitive Advantage
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Every industry operates differently — from customer expectations and buying behavior to sales cycles and market competition. That's why we build tailored growth systems designed around the realities of your business, helping you create stronger positioning, improve customer acquisition, and scale with greater operational clarity.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Whether you're modernizing traditional processes, strengthening digital visibility, or integrating AI into your growth ecosystem, our focus remains the same: building systems that support long-term business performance and measurable impact.
                  </p>
                </GlassCard>
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          5. INDUSTRY APPROACH - ACCORDION
          ============================================ */}
      <ModernSectionBackground variant="animated-dots">
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
                    Build a Growth Strategy Designed for Your Industry
                  </h2>

                  <p className="text-sm text-gray-700 mb-5 max-w-2xl mx-auto leading-relaxed">
                    Let's identify where your positioning, marketing, CRM, and customer engagement systems are limiting growth — and build a connected strategy designed for measurable business outcomes.
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
                        Explore Case Studies
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </MagneticButton>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 font-medium mb-3">
                      We partner with growth-focused businesses that want strategic clarity, integrated execution, and scalable revenue growth.
                    </p>
                    <div className="flex justify-center gap-8 flex-wrap">
                      <div className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="w-4 h-4" style={{ color: colors.brand.accent }} />
                        <span className="text-sm font-semibold">Strategic Clarity</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="w-4 h-4" style={{ color: colors.brand.accent }} />
                        <span className="text-sm font-semibold">Integrated Execution</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="w-4 h-4" style={{ color: colors.brand.accent }} />
                        <span className="text-sm font-semibold">Scalable Revenue Growth</span>
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
