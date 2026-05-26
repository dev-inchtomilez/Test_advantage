/**
 * ============================================
 * ABOUT US PAGE - Complete Premium Rebuild
 * ============================================
 * Industry-leading About page with comprehensive
 * images, premium design, and executive standards
 * ============================================
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Target, 
  Eye,
  Heart,
  Shield,
  TrendingUp,
  Users,
  Award,
  Globe,
  MapPin,
  Lightbulb,
  Zap,
  CheckCircle2,
  Building2,
  Rocket,
  BarChart3,
  Briefcase,
  Star,
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
import { ScrollReveal, StaggerContainer, staggerItemVariants } from '../components/ScrollReveal';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import { ModernSectionBackground } from '../components/ModernSectionBackground';
import { OptimizedImage } from '../components/OptimizedImage';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { HoverCard3D } from '../components/HoverCard3D';
import { GlowEffect } from '../components/GlowEffect';
import { TextGradient } from '../components/TextGradient';

// Design Tokens
import { colors, gradients } from '../../styles/design-tokens';

// ============================================
// DATA DEFINITIONS
// ============================================

const stats = [
  { number: 15, suffix: '+', label: 'Years of Excellence' },
  { number: 500, suffix: '+', label: 'Clients Served' },
  { number: 98, suffix: '%', label: 'Client Satisfaction' },
  { number: 50, suffix: '+', label: 'Team Members' },
];

const coreValues = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Integrity First',
    description: 'We build trust through honest, transparent communication and ethical business practices in every interaction.',
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Strategic Excellence',
    description: 'We deliver exceptional results through rigorous analysis, strategic thinking, and data-driven decision making.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Client Partnership',
    description: 'We work as an extension of your team, deeply invested in your success and long-term business growth.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Continuous Innovation',
    description: 'We stay ahead of industry trends and constantly evolve our strategies to maintain competitive advantage.',
  },
];

const milestones = [
  {
    year: '2010',
    title: 'Founded in New York',
    description: 'AdvantEdge established with a vision to transform marketing through strategic excellence.',
  },
  {
    year: '2014',
    title: 'Global Expansion',
    description: 'Opened offices in London and Sydney, serving clients across three continents.',
  },
  {
    year: '2018',
    title: 'Industry Recognition',
    description: 'Named Top Marketing Agency by Forbes and won multiple industry awards.',
  },
  {
    year: '2023',
    title: '500+ Clients Served',
    description: 'Reached milestone of serving over 500 enterprise clients with 98% satisfaction rate.',
  },
];

const leadership = [
  {
    name: 'Sarah Mitchell',
    role: 'Chief Executive Officer',
    bio: '20+ years leading strategic marketing initiatives for Fortune 500 companies.',
  },
  {
    name: 'David Chen',
    role: 'Chief Strategy Officer',
    bio: 'Former McKinsey consultant specializing in growth strategy and market positioning.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Chief Creative Officer',
    bio: 'Award-winning creative director with experience at top global advertising agencies.',
  },
];

const locations = [
  {
    city: 'New York',
    country: 'United States',
    address: '123 Park Avenue, Suite 4500, New York, NY 10017',
    phone: '+1 (212) 555-0100',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '45 Grosvenor Street, Mayfair, London W1K 3HN',
    phone: '+44 20 7123 4567',
  },
  {
    city: 'Sydney',
    country: 'Australia',
    address: '88 Cumberland Street, The Rocks, Sydney NSW 2000',
    phone: '+61 2 9876 5432',
  },
];

const awards = [
  {
    year: '2023',
    title: 'Best Marketing Agency',
    organization: 'Forbes Business Awards',
  },
  {
    year: '2022',
    title: 'Excellence in Strategy',
    organization: 'Marketing Excellence Awards',
  },
  {
    year: '2021',
    title: 'Top Workplace',
    organization: 'Great Place to Work',
  },
  {
    year: '2020',
    title: 'Innovation Leader',
    organization: 'Digital Marketing Summit',
  },
];

export function AboutPage() {
  return (
    <PageBackground>
      <PageSEO
        title={PAGE_SEO.about.title}
        description={PAGE_SEO.about.description}
        keywords={PAGE_SEO.about.keywords}
        ogImage={PAGE_SEO.about.ogImage}
        path="/about"
      />

      {/* ============================================
          1. HERO SECTION - PREMIUM TWO-COLUMN
          ============================================ */}
      <ModernSectionBackground variant="mesh-gradient-blue">
        <Section spacing="base" animate background="transparent">
          <Container size="xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Content */}
              <motion.div
                className="order-2 lg:order-1"
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
                  <GlowEffect color={colors.brand.accent} intensity={20}>
                    <motion.span 
                      className="inline-flex items-center px-3 py-1.5 rounded-full shadow-lg border-2"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(12px)',
                        borderColor: colors.brand.accent 
                      }}
                      whileHover={{ scale: 1.05, borderColor: colors.brand.primary }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sparkles className="w-3.5 h-3.5 mr-2" style={{ color: colors.brand.accent }} />
                      <span className="text-xs font-bold tracking-wide" style={{ color: colors.brand.primary }}>About AdvantEdge</span>
                    </motion.span>
                  </GlowEffect>
                </motion.div>

                <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight tracking-tight mb-4" style={{ color: colors.brand.primary }}>
                  Transforming Businesses Through{' '}
                  <span className="relative inline-block">
                    <TextGradient animated className="relative z-10 text-2xl sm:text-3xl lg:text-3xl font-bold">
                      Strategic Excellence
                    </TextGradient>
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-2 -z-0"
                      style={{ backgroundColor: colors.brand.accent, opacity: 0.3 }}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    />
                  </span>
                </h1>

                <div className="space-y-3 mb-4">
                  <p className="text-sm font-semibold leading-snug" style={{ color: colors.brand.primary }}>
                    15+ years of strategic marketing leadership.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We partner with industry leaders to deliver integrated marketing solutions that drive measurable business growth through strategic insight and operational excellence.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-5">
                  <MagneticButton strength={0.3}>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 group"
                      style={{ background: gradients.primary }}
                    >
                      Partner With Us
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </MagneticButton>

                  <MagneticButton strength={0.2}>
                    <Link
                      to="/case-studies"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all duration-300 hover:shadow-lg hover:bg-white/70 bg-white/50 backdrop-blur-md"
                      style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
                    >
                      View Our Work
                    </Link>
                  </MagneticButton>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-300/50">
                  <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    <div className="flex items-baseline gap-0.5">
                      <AnimatedCounter end={15} duration={2} className="text-xl font-bold" style={{ color: colors.brand.primary }} />
                      <span className="text-lg font-bold" style={{ color: colors.brand.accent }}>+</span>
                    </div>
                    <p className="text-xs text-gray-600 font-medium mt-1">Years</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    <div className="flex items-baseline gap-0.5">
                      <AnimatedCounter end={500} duration={2} className="text-xl font-bold" style={{ color: colors.brand.primary }} />
                      <span className="text-lg font-bold" style={{ color: colors.brand.accent }}>+</span>
                    </div>
                    <p className="text-xs text-gray-600 font-medium mt-1">Clients</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    <div className="flex items-baseline gap-0.5">
                      <AnimatedCounter end={98} duration={2} className="text-xl font-bold" style={{ color: colors.brand.primary }} />
                      <span className="text-lg font-bold" style={{ color: colors.brand.accent }}>%</span>
                    </div>
                    <p className="text-xs text-gray-600 font-medium mt-1">Satisfaction</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column - Image */}
              <motion.div
                className="relative flex items-center justify-center w-full order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1758691736424-4b4273948341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwYm9hcmRyb29tfGVufDF8fHx8MTc3NDU2MDg5NHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="AdvantEdge executive team in boardroom meeting"
                    className="w-full h-[280px] lg:h-[360px] object-cover"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  {/* Floating Stats Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="absolute bottom-3 right-3 sm:-bottom-6 sm:-right-6 lg:-right-8"
                  >
                    <GlassCard variant="strong" rounded="xl" padding="base" className="shadow-2xl">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl" style={{ background: gradients.primary }}>
                          <Award className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-bold" style={{ color: colors.brand.primary }}>500+</span>
                          </div>
                          <p className="text-xs text-gray-600 font-medium mt-0.5">Clients Served</p>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          2. STATS - ANIMATED COUNTERS
          ============================================ */}
      <ModernSectionBackground variant="glass-white">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div key={index} variants={staggerItemVariants}>
                  <GlassCard variant="base" rounded="xl" padding="md" hover className="text-center h-full">
                    <div className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: colors.brand.primary }}>
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-gray-600 font-semibold">
                      {stat.label}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          3. OUR STORY - WITH IMAGE
          ============================================ */}
      <Section spacing="compact" animate>
        <Container size="lg">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Content */}
            <ScrollReveal>
              <div>
                <div className="mb-4">
                  <span 
                    className="inline-flex items-center px-3 py-1.5 rounded-full border-2"
                    style={{ backgroundColor: '#ffffff', borderColor: colors.brand.accent }}
                  >
                    <Rocket className="w-3.5 h-3.5 mr-2" style={{ color: colors.brand.accent }} />
                    <span className="text-xs font-bold tracking-wide" style={{ color: colors.brand.primary }}>
                      OUR STORY
                    </span>
                  </span>
                </div>

                <h2 className="text-xl lg:text-2xl font-bold mb-4 leading-tight" style={{ color: colors.brand.primary }}>
                  Built on Strategic Excellence
                </h2>

                <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                  <p>
                    AdvantEdge was founded in 2010 with a clear mission: to bring strategic rigor and measurable accountability to marketing. Our founders, coming from top management consulting firms and leading global brands, saw an opportunity to transform how organizations approach marketing.
                  </p>
                  <p>
                    Today, we've grown into a full-service marketing agency serving Fortune 500 companies and high-growth enterprises across three continents. Our success is built on a simple principle: marketing should be a strategic function that drives measurable business outcomes.
                  </p>
                  <p>
                    We combine the strategic thinking of a consultancy with the creative execution of an agency, delivering integrated solutions that generate real business impact.
                  </p>
                </div>

                <div className="mt-5">
                  <Link
                    to="/services"
                    className="inline-flex items-center text-sm font-bold transition-all group"
                    style={{ color: colors.brand.secondary }}
                  >
                    Explore Our Services
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Image */}
            <ScrollReveal delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[280px] lg:h-[360px]">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1643391448961-621e0b1bc5b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBoZWFkcXVhcnRlcnMlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3NDU2MDg5NXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="AdvantEdge corporate headquarters"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-bold opacity-95">Global Headquarters • New York, USA</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ============================================
          4. MISSION & VISION - PREMIUM
          ============================================ */}
      <ModernSectionBackground variant="gradient-abstract">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader
              badge="Our Purpose"
              badgeIcon={<Target className="w-4 h-4" />}
              title="Mission & Vision"
              align="center"
              maxWidth="2xl"
            />

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Mission */}
              <ScrollReveal>
                <TiltCard>
                  <div 
                    className="relative p-6 lg:p-8 rounded-2xl text-white shadow-2xl overflow-hidden h-full"
                    style={{ background: gradients.primary }}
                  >
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl" />
                    </div>
                    
                    <div className="relative z-10">
                      <IconBadge 
                        icon={<Target className="w-8 h-8" />}
                        size="md"
                        variant="solid"
                        className="bg-white !text-gray-900 mb-4"
                      />
                      <h3 className="text-lg font-bold mb-3">Our Mission</h3>
                      <p className="text-sm leading-relaxed opacity-95">
                        To bring clarity, structure, and accountability to marketing by replacing fragmentation with integration, activity with purpose, and complexity with strategic focus—delivering measurable business outcomes through disciplined execution.
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>

              {/* Vision */}
              <ScrollReveal delay={0.1}>
                <TiltCard>
                  <div 
                    className="relative p-6 lg:p-8 rounded-2xl text-white shadow-2xl overflow-hidden h-full"
                    style={{ background: 'linear-gradient(135deg, #0000aa 0%, #000131 100%)' }}
                  >
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute bottom-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl" />
                    </div>
                    
                    <div className="relative z-10">
                      <IconBadge 
                        icon={<Eye className="w-8 h-8" />}
                        size="md"
                        variant="solid"
                        className="bg-white !text-gray-900 mb-4"
                      />
                      <h3 className="text-lg font-bold mb-3">Our Vision</h3>
                      <p className="text-sm leading-relaxed opacity-95">
                        To be the most trusted strategic marketing partner for enterprise organizations, recognized globally for transforming marketing into a measurable driver of business growth and competitive advantage.
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            </div>

            {/* Mission Image */}
            <ScrollReveal delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mt-8">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1765438868883-43efce4fd145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmclMjBzZXNzaW9uJTIwd2hpdGVib2FyZHxlbnwxfHx8fDE3NzQ1NjA4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Strategic planning session and business strategy"
                  className="w-full h-[260px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="p-6 lg:p-10 text-white max-w-2xl">
                    <h4 className="text-base lg:text-lg font-bold mb-2">
                      Strategy First, Always
                    </h4>
                    <p className="text-xs lg:text-sm opacity-95">
                      Every engagement begins with strategic clarity. We define objectives, develop roadmaps, and ensure every tactical execution aligns with broader business goals.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          5. CORE VALUES - WITH IMAGE
          ============================================ */}
      <Section spacing="compact" animate>
        <Container size="lg">
          <SectionHeader
            badge="What Drives Us"
            badgeIcon={<Heart className="w-4 h-4" />}
            title="Our Core Values"
            description="The principles that guide everything we do, from strategy development to client relationships."
            align="center"
            maxWidth="2xl"
          />

          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-8">
            {coreValues.map((value, index) => (
              <motion.div key={index} variants={staggerItemVariants}>
                <HoverCard3D>
                  <GlassCard variant="base" rounded="xl" padding="md" hover className="h-full">
                    <IconBadge icon={value.icon} size="md" variant="gradient" animated className="mb-4" />
                    <h3 className="text-base font-bold mb-2 leading-tight" style={{ color: colors.brand.primary }}>
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </GlassCard>
                </HoverCard3D>
              </motion.div>
            ))}
          </StaggerContainer>

          {/* Values Image */}
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2UlMjBwYXJ0bmVyc2hpcCUyMGJ1c2luZXNzJTIwZGVhbHxlbnwxfHx8fDE3NzQ1NjA4OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional partnership and business collaboration"
                className="w-full h-[260px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 text-white">
                <h4 className="text-base lg:text-lg font-bold mb-1">
                  Partnership Built on Trust
                </h4>
                <p className="text-xs lg:text-sm opacity-95 max-w-3xl">
                  We build long-term relationships based on integrity, transparency, and mutual success. Our clients become partners, and their goals become our mission.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* ============================================
          6. COMPANY MILESTONES - TIMELINE
          ============================================ */}
      <ModernSectionBackground variant="animated-dots">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader
              badge="Our Journey"
              badgeIcon={<TrendingUp className="w-4 h-4" />}
              title="Company Milestones"
              description="Key moments in our growth from a startup to a global marketing leader."
              align="center"
              maxWidth="2xl"
            />

            <div className="max-w-4xl mx-auto">
              <div className="space-y-5">
                {milestones.map((milestone, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="relative pl-8 border-l-4" style={{ borderColor: colors.brand.accent }}>
                      <div 
                        className="absolute -left-3 top-0 w-6 h-6 rounded-full border-4 border-white shadow-lg"
                        style={{ backgroundColor: colors.brand.accent }}
                      />
                      <GlassCard variant="base" rounded="xl" padding="sm" hover>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-base font-bold" style={{ color: colors.brand.primary }}>
                            {milestone.title}
                          </h3>
                          <span 
                            className="text-sm font-bold mt-1 sm:mt-0"
                            style={{ color: colors.brand.accent }}
                          >
                            {milestone.year}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {milestone.description}
                        </p>
                      </GlassCard>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Timeline Image */}
            <ScrollReveal delay={0.4}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mt-8">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1744854185466-cf95c3064cec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0JTIwc3VjY2VzcyUyMG1ldHJpY3N8ZW58MXx8fHwxNzc0NTYwODk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Business growth metrics and success charts"
                  className="w-full h-[220px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="p-6 text-white">
                    <h4 className="text-base font-bold mb-1">Consistent Growth, Proven Results</h4>
                    <p className="text-xs opacity-95 max-w-xl">15 years of sustained growth and client success</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          7. LEADERSHIP TEAM
          ============================================ */}
      <Section spacing="compact" animate>
        <Container size="lg">
          <SectionHeader
            badge="Leadership"
            badgeIcon={<Users className="w-4 h-4" />}
            title="Executive Team"
            description="Seasoned leaders with decades of combined experience in strategy, marketing, and business transformation."
            align="center"
            maxWidth="2xl"
          />

          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-8">
            {leadership.map((leader, index) => (
              <motion.div key={index} variants={staggerItemVariants}>
                <HoverCard3D>
                  <GlassCard variant="base" rounded="xl" padding="md" hover className="text-center h-full">
                    <div 
                      className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl"
                      style={{ background: gradients.primary }}
                    >
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-base font-bold mb-1" style={{ color: colors.brand.primary }}>
                      {leader.name}
                    </h3>
                    <p className="text-xs font-semibold text-gray-600 mb-2">
                      {leader.role}
                    </p>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {leader.bio}
                    </p>
                  </GlassCard>
                </HoverCard3D>
              </motion.div>
            ))}
          </StaggerContainer>

          {/* Team Collaboration Image */}
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjBtb2Rlcm4lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc0NTYwODk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Diverse team collaboration in modern workspace"
                className="w-full h-[260px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 text-white">
                <h4 className="text-base lg:text-lg font-bold mb-1">
                  Diverse Expertise, Unified Vision
                </h4>
                <p className="text-xs lg:text-sm opacity-95 max-w-3xl">
                  Our team brings together strategists, creatives, analysts, and technologists—all working seamlessly to deliver integrated marketing solutions.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* ============================================
          8. AWARDS & RECOGNITION
          ============================================ */}
      <ModernSectionBackground variant="glass-blur">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <SectionHeader
              badge="Recognition"
              badgeIcon={<Award className="w-4 h-4" />}
              title="Awards & Achievements"
              description="Industry recognition for our commitment to excellence and innovation."
              align="center"
              maxWidth="2xl"
            />

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {awards.map((award, index) => (
                <motion.div key={index} variants={staggerItemVariants}>
                  <HoverCard3D>
                    <GlassCard variant="base" rounded="xl" padding="sm" hover className="text-center h-full">
                      <IconBadge 
                        icon={<Star className="w-6 h-6" />} 
                        size="md" 
                        variant="gradient" 
                        animated 
                        className="mx-auto mb-4" 
                      />
                      <div className="text-2xl font-bold mb-2" style={{ color: colors.brand.accent }}>
                        {award.year}
                      </div>
                      <h4 className="text-base font-bold mb-2 leading-tight" style={{ color: colors.brand.primary }}>
                        {award.title}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {award.organization}
                      </p>
                    </GlassCard>
                  </HoverCard3D>
                </motion.div>
              ))}
            </StaggerContainer>

            {/* Awards Image */}
            <ScrollReveal>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1764874299025-d8b2251f307d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF3YXJkcyUyMHRyb3BoeSUyMGFjaGlldmVtZW50fGVufDF8fHx8MTc3NDU2MDg5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Business awards and achievements"
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="p-8 text-white">
                    <h4 className="text-xl font-bold mb-2">Industry-Leading Excellence</h4>
                    <p className="text-sm opacity-95 max-w-xl">Recognized by leading organizations for our innovation and results</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          9. GLOBAL LOCATIONS
          ============================================ */}
      <Section spacing="base" animate>
        <Container size="lg">
          <SectionHeader
            badge="Global Presence"
            badgeIcon={<Globe className="w-4 h-4" />}
            title="Our Locations"
            description="Strategic presence in key business centers across three continents."
            align="center"
            maxWidth="2xl"
          />

          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12">
            {locations.map((location, index) => (
              <motion.div key={index} variants={staggerItemVariants}>
                <HoverCard3D>
                  <GlassCard variant="base" rounded="xl" padding="md" hover className="h-full">
                    <IconBadge 
                      icon={<MapPin className="w-6 h-6" />} 
                      size="md" 
                      variant="gradient" 
                      animated 
                      className="mb-6" 
                    />
                    <h3 className="text-xl font-bold mb-2" style={{ color: colors.brand.primary }}>
                      {location.city}
                    </h3>
                    <p className="text-sm font-semibold text-gray-600 mb-4">
                      {location.country}
                    </p>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p className="leading-relaxed">{location.address}</p>
                      <p className="font-semibold" style={{ color: colors.brand.secondary }}>
                        {location.phone}
                      </p>
                    </div>
                  </GlassCard>
                </HoverCard3D>
              </motion.div>
            ))}
          </StaggerContainer>

          {/* Global Network Image */}
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1570106413982-7f2897b8d0c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMHdvcmxkJTIwbWFwJTIwbmV0d29ya3xlbnwxfHx8fDE3NzQ0NDg1OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Global business network and world map"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white text-center">
                <h4 className="text-lg lg:text-xl font-bold mb-2">
                  Global Reach, Local Expertise
                </h4>
                <p className="text-sm lg:text-base opacity-95 max-w-3xl mx-auto">
                  With offices across three continents, we combine global perspective with deep local market knowledge to serve clients worldwide.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* ============================================
          10. COMPANY CULTURE - WITH IMAGE
          ============================================ */}
      <ModernSectionBackground variant="image-overlay-workspace">
        <Section spacing="base" animate background="transparent">
          <Container size="lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image First */}
              <ScrollReveal>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1761912915167-558fa68f16b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwY3VsdHVyZSUyMHRlYW0lMjBidWlsZGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NzQ1NjA4OTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Company culture and team building"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
                </div>
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal delay={0.2}>
                <div>
                  <div className="mb-6">
                    <span 
                      className="inline-flex items-center px-4 py-2 rounded-full border-2"
                      style={{ backgroundColor: '#ffffff', borderColor: colors.brand.accent }}
                    >
                      <Heart className="w-4 h-4 mr-2" style={{ color: colors.brand.accent }} />
                      <span className="text-sm font-bold tracking-wide" style={{ color: colors.brand.primary }}>
                        OUR CULTURE
                      </span>
                    </span>
                  </div>

                  <h2 className="text-xl lg:text-2xl font-bold mb-4 leading-tight" style={{ color: colors.brand.primary }}>
                    Where Excellence Meets Collaboration
                  </h2>

                  <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                    <p>
                      At AdvantEdge, we've built a culture that attracts top talent and fosters continuous innovation. We believe in challenging work, professional growth, and maintaining work-life balance.
                    </p>
                    <p>
                      Our team members are encouraged to think strategically, collaborate openly, and take ownership of their work. We invest heavily in professional development and create opportunities for career advancement.
                    </p>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
                      <span className="text-sm font-semibold text-gray-700">Continuous Learning</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
                      <span className="text-sm font-semibold text-gray-700">Career Growth</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
                      <span className="text-sm font-semibold text-gray-700">Work-Life Balance</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.brand.primary }} />
                      <span className="text-sm font-semibold text-gray-700">Collaborative Teams</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          11. CAREERS - JOIN OUR TEAM
          ============================================ */}
      <Section spacing="base" animate>
        <Container size="lg">
          <SectionHeader
            badge="Careers"
            badgeIcon={<Briefcase className="w-4 h-4" />}
            title="Join Our Team"
            description="We're always looking for talented professionals who are passionate about strategic marketing and driving business results."
            align="center"
            maxWidth="2xl"
          />

          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1758518727653-5650fd9e146c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXJlZXIlMjBvcHBvcnR1bml0eSUyMGhpcmluZ3xlbnwxfHx8fDE3NzQ1NjA4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Career opportunities and professional hiring"
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white text-center">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                  Build Your Career at AdvantEdge
                </h3>
                <p className="text-base lg:text-lg opacity-95 max-w-3xl mx-auto mb-5">
                  Work with top brands, solve complex challenges, and grow alongside industry-leading professionals.
                </p>
                <MagneticButton strength={0.3}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm shadow-2xl transition-all duration-300 group border-2"
                    style={{ backgroundColor: colors.brand.accent, borderColor: colors.brand.accent, color: colors.brand.primary }}
                  >
                    View Open Positions
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Competitive Compensation', icon: <BarChart3 className="w-6 h-6" /> },
              { title: 'Professional Development', icon: <Lightbulb className="w-6 h-6" /> },
              { title: 'Global Opportunities', icon: <Globe className="w-6 h-6" /> },
            ].map((benefit, index) => (
              <motion.div key={index} variants={staggerItemVariants}>
                <GlassCard variant="base" rounded="xl" padding="md" hover className="text-center">
                  <IconBadge icon={benefit.icon} size="md" variant="gradient" animated className="mx-auto mb-4" />
                  <h4 className="text-base font-bold" style={{ color: colors.brand.primary }}>
                    {benefit.title}
                  </h4>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* ============================================
          12. FINAL CTA - GET IN TOUCH
          ============================================ */}
      <ModernSectionBackground variant="mesh-gradient-purple">
        <Section spacing="compact" animate background="transparent">
          <Container size="md">
            <div className="text-center">
              <ScrollReveal>
                <GlassCard variant="base" rounded="2xl" padding="base" className="shadow-2xl border border-white/40">
                  <IconBadge 
                    icon={<Rocket className="w-6 h-6" />}
                    size="md"
                    variant="gradient"
                    animated
                    className="mx-auto mb-4"
                  />

                  <h2 className="text-xl sm:text-2xl font-bold mb-3 leading-tight" style={{ color: colors.brand.primary }}>
                    Ready to Transform Your Marketing?
                  </h2>

                  <p className="text-sm text-gray-700 mb-5 max-w-2xl mx-auto leading-relaxed">
                    Let's discuss how AdvantEdge can help you achieve your business objectives through strategic, integrated marketing solutions.
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
                        to="/services"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all duration-300 hover:shadow-lg bg-white"
                        style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
                      >
                        Explore Services
                      </Link>
                    </MagneticButton>
                  </div>
                </GlassCard>
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>
    </PageBackground>
  );
}

export default AboutPage;