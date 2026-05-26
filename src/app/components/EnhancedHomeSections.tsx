/**
 * ============================================
 * ENHANCED HOME SECTIONS
 * Bento Grid & Auto Carousel Sections
 * ============================================
 */

import { Link } from 'react-router';
import { 
  Target, 
  Zap, 
  TrendingUp, 
  Users,
  Rocket,
  BarChart3,
  Award,
  Lightbulb,
  ArrowRight,
  Shield,
  Globe,
  Heart,
  CheckCircle2
} from 'lucide-react';
import { Section, Container, SectionHeader } from './primitives';
import { BentoGrid, BentoItem } from './BentoGrid';
import { 
  AutoHorizontalCarousel, 
  TestimonialCard, 
  FeatureCard,
  StatCard 
} from './AutoHorizontalCarousel';
import { colors, gradients } from '../../styles/design-tokens';
import { ScrollReveal } from './ScrollReveal';
import { AnimatedCounter } from './AnimatedCounter';

// ============================================
// BENTO GRID - WHY CHOOSE US
// ============================================
export function WhyChooseUsBento() {
  const features = [
    {
      title: 'Strategic Excellence',
      description: 'Every engagement begins with strategic clarity. We define positioning, competitive advantage, and measurable objectives before activating any channel.',
      icon: <Target className="w-8 h-8" />,
      size: 'large' as const,
      content: (
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" style={{ color: colors.brand.secondary }} />
            <span className="text-sm text-gray-700">Market positioning analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" style={{ color: colors.brand.secondary }} />
            <span className="text-sm text-gray-700">Competitive differentiation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" style={{ color: colors.brand.secondary }} />
            <span className="text-sm text-gray-700">Value architecture</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Integrated Execution',
      description: 'Brand, content, digital, and sales work in unison — not as disconnected efforts.',
      icon: <Zap className="w-7 h-7" />,
      size: 'medium' as const,
    },
    {
      title: 'Data-Driven',
      description: 'Performance intelligence guides every decision. We optimize for outcomes, not activities.',
      icon: <BarChart3 className="w-7 h-7" />,
      size: 'small' as const,
    },
    {
      title: 'Proven Results',
      description: 'Track record across B2B technology, professional services, healthcare, and education.',
      icon: <Award className="w-7 h-7" />,
      size: 'small' as const,
    },
    {
      title: 'Full-Service Capability',
      description: 'Strategy, branding, digital, content, web, PR, and offline — all under one roof with strategic alignment.',
      icon: <Globe className="w-7 h-7" />,
      size: 'medium' as const,
    },
    {
      title: 'Accountability',
      description: 'Clear deliverables, transparent reporting, measurable ROI.',
      icon: <Shield className="w-7 h-7" />,
      size: 'small' as const,
    },
  ];

  return (
    <Section spacing="compact" animate>
      <Container size="xl">
        <SectionHeader
          badge="Why AdvantEdge"
          badgeIcon={<Lightbulb className="w-4 h-4" />}
          title="Built for Business Impact"
          description="Strategic marketing infrastructure engineered for measurable growth."
          align="center"
          maxWidth="2xl"
        />

        <div className="mt-12">
          <BentoGrid columns={3}>
            {features.map((feature, index) => (
              <BentoItem
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                size={feature.size}
              >
                {feature.content}
              </BentoItem>
            ))}
          </BentoGrid>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-semibold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 group"
              style={{ background: gradients.primary }}
            >
              Learn More About Our Approach
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

// ============================================
// AUTO CAROUSEL - CLIENT TESTIMONIALS
// ============================================
export function TestimonialsCarousel() {
  const testimonials = [
    {
      quote: "AdvantEdge transformed our marketing from scattered tactics into a strategic growth engine. Revenue is up 145% year-over-year.",
      author: "Michael Chen",
      role: "CEO",
      company: "TechVision Solutions",
      rating: 5,
    },
    {
      quote: "Finally, a marketing partner that understands business objectives first. Their strategic approach eliminated waste and drove real pipeline growth.",
      author: "Sarah Martinez",
      role: "CMO",
      company: "CloudScale Systems",
      rating: 5,
    },
    {
      quote: "Working with AdvantEdge feels like having a senior marketing executive on your team. Strategic, disciplined, and results-focused.",
      author: "David Thompson",
      role: "Founder",
      company: "DataFlow Analytics",
      rating: 5,
    },
    {
      quote: "Our brand positioning was unclear for years. AdvantEdge brought clarity, consistency, and competitive advantage. Game-changer.",
      author: "Emily Rodriguez",
      role: "VP Marketing",
      company: "SecureNet Technologies",
      rating: 5,
    },
    {
      quote: "ROI-focused, data-driven, and refreshingly honest. They don't sell you services you don't need. They build what works.",
      author: "James Wilson",
      role: "Managing Director",
      company: "Apex Consulting Group",
      rating: 5,
    },
    {
      quote: "The integration of our brand, digital, and content strategies created compounding returns. Best marketing investment we've made.",
      author: "Lisa Anderson",
      role: "Chief Growth Officer",
      company: "HealthTech Innovations",
      rating: 5,
    },
  ];

  return (
    <Section spacing="compact" className="bg-gradient-to-b from-white via-blue-50/20 to-white">
      <Container size="full">
        <SectionHeader
          badge="Client Testimonials"
          badgeIcon={<Heart className="w-4 h-4" />}
          title="Trusted by Growth-Focused Leaders"
          description="Real results from real clients."
          align="center"
          maxWidth="2xl"
        />

        <div className="mt-12">
          <AutoHorizontalCarousel speed={35} pauseOnHover>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </AutoHorizontalCarousel>
        </div>
      </Container>
    </Section>
  );
}

// ============================================
// AUTO CAROUSEL - KEY CAPABILITIES
// ============================================
export function CapabilitiesCarousel() {
  const capabilities = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Strategic Positioning',
      description: 'Market positioning, competitive differentiation, and messaging architecture that creates clarity and competitive advantage.',
      metric: '98% clarity score',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'SEO authority, paid acquisition, conversion optimization, and marketing automation engineered for pipeline quality.',
      metric: '3.2x avg ROI',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Brand Systems',
      description: 'Strategic identity, visual governance, and brand architecture that scales across all touchpoints.',
      metric: '85% brand lift',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Content Strategy',
      description: 'Thought leadership, executive visibility, and content distribution systems that build authority.',
      metric: '12x engagement',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Website Strategy',
      description: 'High-performance digital infrastructure optimized for credibility, usability, and conversion.',
      metric: '67% conv. lift',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Performance Analytics',
      description: 'Unified measurement frameworks that track true contribution, attribution, and business impact.',
      metric: 'Real-time insights',
    },
  ];

  return (
    <Section spacing="compact">
      <Container size="full">
        <SectionHeader
          badge="Core Capabilities"
          badgeIcon={<Zap className="w-4 h-4" />}
          title="Integrated Marketing Excellence"
          description="Full-service capabilities unified under strategic alignment."
          align="center"
          maxWidth="2xl"
        />

        <div className="mt-12">
          <AutoHorizontalCarousel speed={40} direction="right" pauseOnHover>
            {capabilities.map((capability, index) => (
              <FeatureCard key={index} {...capability} />
            ))}
          </AutoHorizontalCarousel>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm border-2 transition-all duration-300 hover:shadow-xl group bg-transparent"
              style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
            >
              View All Services & Capabilities
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

// ============================================
// AUTO CAROUSEL - STATS & ACHIEVEMENTS
// ============================================
export function StatsCarousel() {
  const stats = [
    {
      value: '350+',
      label: 'Clients Served',
      icon: <Users className="w-10 h-10" />,
      trend: '↑ 23% this year',
    },
    {
      value: '15+',
      label: 'Years Experience',
      icon: <Award className="w-10 h-10" />,
      trend: 'Industry veterans',
    },
    {
      value: '$2.4B+',
      label: 'Client Revenue Impact',
      icon: <TrendingUp className="w-10 h-10" />,
      trend: '↑ Verified results',
    },
    {
      value: '94%',
      label: 'Client Retention',
      icon: <Heart className="w-10 h-10" />,
      trend: 'Long-term partners',
    },
    {
      value: '3.8x',
      label: 'Average Marketing ROI',
      icon: <BarChart3 className="w-10 h-10" />,
      trend: 'Proven performance',
    },
    {
      value: '12',
      label: 'Industries Served',
      icon: <Globe className="w-10 h-10" />,
      trend: 'Cross-sector expertise',
    },
  ];

  return (
    <Section spacing="compact" className="bg-gradient-to-b from-white via-yellow-50/10 to-white">
      <Container size="full">
        <SectionHeader
          badge="Track Record"
          badgeIcon={<BarChart3 className="w-4 h-4" />}
          title="Numbers That Speak"
          description="Performance data from real client engagements."
          align="center"
          maxWidth="2xl"
        />

        <div className="mt-12">
          <AutoHorizontalCarousel speed={30} pauseOnHover>
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </AutoHorizontalCarousel>
        </div>
      </Container>
    </Section>
  );
}

// ============================================
// BENTO GRID - PROCESS FRAMEWORK
// ============================================
export function ProcessFrameworkBento() {
  const process = [
    {
      title: 'Discovery & Strategy',
      description: 'We audit your market position, competitive landscape, and business objectives. Strategy is defined before any execution begins.',
      icon: <Target className="w-8 h-8" />,
      size: 'medium' as const,
      content: (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs font-bold uppercase tracking-wide" style={{ color: colors.brand.secondary }}>
            Foundation Phase
          </p>
        </div>
      ),
    },
    {
      title: 'Integrated Planning',
      description: 'Brand, content, digital, and sales strategies are architected in unison — not as independent silos.',
      icon: <Zap className="w-8 h-8" />,
      size: 'large' as const,
      content: (
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="text-center p-3 rounded-lg bg-white/50">
            <p className="font-bold text-sm mb-1" style={{ color: colors.brand.primary }}>Brand</p>
            <p className="text-xs text-gray-600">Identity & messaging</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/50">
            <p className="font-bold text-sm mb-1" style={{ color: colors.brand.primary }}>Digital</p>
            <p className="text-xs text-gray-600">SEO, PPC, CRO</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/50">
            <p className="font-bold text-sm mb-1" style={{ color: colors.brand.primary }}>Content</p>
            <p className="text-xs text-gray-600">Thought leadership</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/50">
            <p className="font-bold text-sm mb-1" style={{ color: colors.brand.primary }}>Sales</p>
            <p className="text-xs text-gray-600">Enablement & tools</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Execution',
      description: 'Disciplined implementation with clear milestones, resource allocation, and accountability.',
      icon: <Rocket className="w-7 h-7" />,
      size: 'small' as const,
    },
    {
      title: 'Measurement',
      description: 'Unified analytics track contribution, attribution, and ROI across all channels.',
      icon: <BarChart3 className="w-7 h-7" />,
      size: 'small' as const,
    },
    {
      title: 'Optimization',
      description: 'Continuous refinement based on performance data and changing market conditions.',
      icon: <TrendingUp className="w-7 h-7" />,
      size: 'medium' as const,
      content: (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs font-bold uppercase tracking-wide" style={{ color: colors.brand.accent }}>
            Continuous Improvement
          </p>
        </div>
      ),
    },
  ];

  return (
    <Section spacing="compact" animate>
      <Container size="xl">
        <SectionHeader
          badge="Our Process"
          badgeIcon={<Lightbulb className="w-4 h-4" />}
          title="How We Work"
          description="A proven framework for strategic marketing execution."
          align="center"
          maxWidth="2xl"
        />

        <div className="mt-12">
          <BentoGrid columns={3}>
            {process.map((step, index) => (
              <BentoItem
                key={index}
                title={step.title}
                description={step.description}
                icon={step.icon}
                size={step.size}
              >
                {step.content}
              </BentoItem>
            ))}
          </BentoGrid>
        </div>
      </Container>
    </Section>
  );
}
