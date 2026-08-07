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
  Shield,
  Layers,
  Search,
  Brain,
  Megaphone,
  UtensilsCrossed,
  HardHat,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

// Primitive Components
import { Section, Container, SectionHeader } from '../components/primitives';

// Layout Components
import { PageBackground } from '../components/layout';

// SEO Components
import { PageSEO } from '../components/seo';
import { PAGE_SEO } from '../utils/seo-config';

// UI Components
import { ScrollReveal, StaggerContainer, staggerItemVariants } from '../components/ScrollReveal';
import { MagneticButton } from '../components/MagneticButton';
import { ModernSectionBackground } from '../components/ModernSectionBackground';

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
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const [activeIndustryId, setActiveIndustryId] = useState(industries[0].id);
  const [activeApproachId, setActiveApproachId] = useState(industryApproach[0].id);

  const next = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const previous = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    if (isHeroPaused) return;

    const timer = window.setInterval(next, 5500);
    return () => window.clearInterval(timer);
  }, [next, isHeroPaused]);

  const activeIndustry =
    industries.find((industry) => industry.id === activeIndustryId) ??
    industries[0];

  const activeApproachIndex = Math.max(
    0,
    industryApproach.findIndex((item) => item.id === activeApproachId)
  );

  const activeApproach = industryApproach[activeApproachIndex];

  const industryImageById: Record<string, string> = {
    '01': heroSlides[0].image,
    '02': heroSlides[1].image,
    '03': heroSlides[2].image,
    '04': heroSlides[3].image,
    '05': heroSlides[4].image,
    '06': heroSlides[6].image,
    '07': heroSlides[5].image,
  };

  const setPreviousApproach = () => {
    const nextIndex =
      (activeApproachIndex - 1 + industryApproach.length) %
      industryApproach.length;
    setActiveApproachId(industryApproach[nextIndex].id);
  };

  const setNextApproach = () => {
    const nextIndex = (activeApproachIndex + 1) % industryApproach.length;
    setActiveApproachId(industryApproach[nextIndex].id);
  };

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
          1. HERO — INDUSTRIES WE SERVE
          ============================================ */}
      <section className="relative min-h-[590px] overflow-hidden sm:min-h-[640px] lg:min-h-[690px]">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.95, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <motion.img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="h-full w-full object-cover object-center"
              loading={currentSlide === 0 ? 'eager' : 'lazy'}
              decoding="async"
              initial={{ scale: 1.055 }}
              animate={{ scale: 1.01 }}
              transition={{ duration: 7.5, ease: 'linear' }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Primary cinematic overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,1,49,0.98) 0%, rgba(0,1,49,0.91) 34%, rgba(0,1,49,0.62) 64%, rgba(0,1,49,0.22) 100%)',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,1,49,0.08) 0%, rgba(0,1,49,0.02) 47%, rgba(0,1,49,0.82) 100%)',
          }}
        />

        {/* Technical texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.11) 1px, transparent 1px)',
            backgroundSize: '58px 58px',
            maskImage:
              'linear-gradient(to right, black 0%, black 52%, transparent 88%)',
            WebkitMaskImage:
              'linear-gradient(to right, black 0%, black 52%, transparent 88%)',
          }}
        />

        {/* Ambient brand glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-10 h-[470px] w-[470px] rounded-full opacity-25 blur-[135px]"
          style={{ backgroundColor: colors.brand.secondary }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[8%] top-[17%] h-[350px] w-[350px] rounded-full opacity-[0.13] blur-[125px]"
          style={{ backgroundColor: colors.brand.accent }}
        />

        <Container size="xl">
          <div className="relative z-10 flex min-h-[590px] items-center sm:min-h-[640px] lg:min-h-[690px]">
            <div className="grid w-full items-center gap-10 py-16 lg:grid-cols-[1.06fr_0.94fr] lg:gap-14">
              {/* Left — primary narrative */}
              <motion.div
                key={`hero-copy-${currentSlide}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.72,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-[720px]"
              >
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <div
                    className="inline-flex items-center gap-2 rounded-full border px-3.5 py-2 shadow-[0_10px_35px_rgba(0,0,0,0.12)] backdrop-blur-xl"
                    style={{
                      borderColor: `${colors.brand.accent}75`,
                      backgroundColor: 'rgba(255,255,255,0.09)',
                    }}
                  >
                    <Building2
                      className="h-3.5 w-3.5"
                      style={{ color: colors.brand.accent }}
                    />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                      Industries We Serve
                    </span>
                  </div>

                  <span className="hidden h-px w-12 bg-white/[0.20] sm:block" />

                  <span className="text-[10px] font-bold tracking-[0.15em] text-white/[0.45]">
                    {String(currentSlide + 1).padStart(2, '0')} /{' '}
                    {String(heroSlides.length).padStart(2, '0')}
                  </span>
                </div>

                <h1 className="max-w-2xl text-3xl font-bold leading-[1.04] tracking-[-0.045em] text-white sm:text-4xl lg:text-[54px] xl:text-[58px]">
                  {heroSlides[currentSlide].title}
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-[1.85] text-white/[0.72] sm:text-base lg:text-[17px]">
                  {heroSlides[currentSlide].tagline}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <div
                    className="h-1 w-16 rounded-full"
                    style={{ background: gradients.primary }}
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/[0.42]">
                    Industry-Aligned Growth Systems
                  </span>
                </div>

                {/* Hero utility controls */}
                <div className="mt-8 flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={previous}
                    aria-label="Previous industry"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.15] bg-white/[0.07] text-white/[0.75] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.13] hover:text-white"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next industry"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.15] bg-white/[0.07] text-white/[0.75] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.13] hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsHeroPaused((paused) => !paused)}
                    aria-label={isHeroPaused ? 'Resume industry slider' : 'Pause industry slider'}
                    className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/[0.15] bg-white/[0.07] px-3.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/[0.65] backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.13] hover:text-white"
                  >
                    {isHeroPaused ? (
                      <Play className="h-3.5 w-3.5" />
                    ) : (
                      <Pause className="h-3.5 w-3.5" />
                    )}
                    {isHeroPaused ? 'Resume' : 'Pause'}
                  </button>
                </div>
              </motion.div>

              {/* Right — sector navigator */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.78,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="hidden justify-end lg:flex"
              >
                <div className="relative w-full max-w-[410px] overflow-hidden rounded-[28px] border border-white/[0.15] bg-white/[0.075] p-5 shadow-[0_32px_100px_rgba(0,1,49,0.26)] backdrop-blur-2xl">
                  <div
                    aria-hidden="true"
                    className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-15 blur-[60px]"
                    style={{ backgroundColor: colors.brand.accent }}
                  />

                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/[0.40]">
                        Sector Navigator
                      </p>
                      <p className="mt-1 text-xs font-semibold text-white/[0.75]">
                        Explore our industry focus
                      </p>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.05] px-3 py-1.5">
                      <span
                        className="h-2 w-2 animate-pulse rounded-full"
                        style={{ backgroundColor: colors.brand.accent }}
                      />
                      <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-white/[0.45]">
                        Live
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 mt-4 space-y-1.5">
                    {heroSlides.map((slide, index) => {
                      const active = index === currentSlide;

                      return (
                        <button
                          key={slide.title}
                          type="button"
                          onClick={() => goTo(index)}
                          className="group relative flex w-full items-center gap-3 overflow-hidden rounded-xl border px-3 py-2.5 text-left transition-all duration-300"
                          style={{
                            borderColor: active
                              ? 'rgba(255,255,255,0.19)'
                              : 'rgba(255,255,255,0.06)',
                            backgroundColor: active
                              ? 'rgba(255,255,255,0.11)'
                              : 'rgba(255,255,255,0.024)',
                          }}
                        >
                          {active && (
                            <motion.span
                              layoutId="industry-hero-active"
                              className="absolute inset-y-0 left-0 w-1"
                              style={{ backgroundColor: colors.brand.accent }}
                            />
                          )}

                          <span
                            className="w-6 text-[9px] font-bold tracking-[0.1em]"
                            style={{
                              color: active
                                ? colors.brand.accent
                                : 'rgba(255,255,255,0.30)',
                            }}
                          >
                            {String(index + 1).padStart(2, '0')}
                          </span>

                          <span
                            className={`min-w-0 flex-1 truncate text-[11px] font-semibold transition-colors ${
                              active
                                ? 'text-white'
                                : 'text-white/[0.52] group-hover:text-white/[0.82]'
                            }`}
                          >
                            {slide.title}
                          </span>

                          <ArrowUpRight
                            className={`h-3.5 w-3.5 transition-all duration-300 ${
                              active
                                ? 'translate-x-0 opacity-100'
                                : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60'
                            }`}
                            style={{
                              color: active
                                ? colors.brand.accent
                                : 'rgba(255,255,255,0.55)',
                            }}
                          />
                        </button>
                      );
                    })}
                  </div>

                  <div className="relative z-10 mt-4 border-t border-white/[0.10] pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/[0.30]">
                        Auto Rotation
                      </span>
                      <span
                        className="text-[9px] font-bold"
                        style={{ color: colors.brand.accent }}
                      >
                        {isHeroPaused ? 'Paused' : '5.5 sec'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>

        {/* Mobile indicators */}
        <div className="absolute inset-x-0 bottom-6 z-20 lg:hidden">
          <Container size="xl">
            <div className="flex items-center justify-center gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Go to industry slide ${index + 1}`}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: index === currentSlide ? '34px' : '10px',
                    backgroundColor:
                      index === currentSlide
                        ? colors.brand.accent
                        : 'rgba(255,255,255,0.34)',
                  }}
                />
              ))}
            </div>
          </Container>
        </div>

        {/* Auto slide progress */}
        {!isHeroPaused && (
          <motion.div
            key={`progress-${currentSlide}`}
            className="absolute bottom-0 left-0 z-20 h-[3px]"
            style={{ background: gradients.primary }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5.5, ease: 'linear' }}
          />
        )}
      </section>

      {/* ============================================
          2. WHY INDUSTRY EXPERTISE MATTERS
          ============================================ */}
      <ModernSectionBackground
        variant="glass-white"
        className="relative overflow-hidden"
      >
        <Section
          spacing="base"
          animate
          background="transparent"
          className="relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.28]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,0,170,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,170,0.035) 1px, transparent 1px)',
                backgroundSize: '52px 52px',
                maskImage:
                  'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)',
                WebkitMaskImage:
                  'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)',
              }}
            />

            <div
              className="absolute -left-44 top-14 h-[430px] w-[430px] rounded-full opacity-[0.06] blur-[130px]"
              style={{ backgroundColor: colors.brand.secondary }}
            />

            <div
              className="absolute -right-44 bottom-0 h-[430px] w-[430px] rounded-full opacity-[0.08] blur-[130px]"
              style={{ backgroundColor: colors.brand.accent }}
            />
          </div>

          <Container size="xl">
            <div className="relative z-10 mx-auto max-w-7xl">
              <SectionHeader
                badge="Why Industry Expertise Matters"
                badgeIcon={<Award className="h-4 w-4" />}
                title="Growth Strategies Work Better When Built for Your Industry"
                description="Generic marketing creates disconnected execution. Industry-specific strategy creates stronger positioning, better lead quality, faster decision-making, and higher conversion efficiency."
                align="center"
                maxWidth="md"
              />

              <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {whyIndustryExpertise.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={staggerItemVariants}
                    className="h-full"
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{
                        duration: 0.28,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group relative h-full overflow-hidden rounded-[24px] border border-white/[0.90] bg-white/[0.72] p-5 shadow-[0_16px_46px_rgba(0,1,49,0.06)] backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.94] hover:shadow-[0_24px_65px_rgba(0,1,49,0.11)]"
                    >
                      <div
                        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                        style={{ background: gradients.primary }}
                      />

                      <span
                        className="pointer-events-none absolute -right-2 -top-6 text-[80px] font-black leading-none opacity-[0.035]"
                        style={{ color: colors.brand.primary }}
                      >
                        0{index + 1}
                      </span>

                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105"
                        style={{
                          color: colors.brand.secondary,
                          borderColor: `${colors.brand.secondary}14`,
                          backgroundColor: `${colors.brand.secondary}0C`,
                        }}
                      >
                        {item.icon}
                      </div>

                      <p
                        className="mt-5 text-[9px] font-bold uppercase tracking-[0.16em]"
                        style={{ color: colors.brand.secondary }}
                      >
                        Industry Advantage 0{index + 1}
                      </p>

                      <h3
                        className="mt-2 text-base font-bold leading-[1.25]"
                        style={{ color: colors.brand.primary }}
                      >
                        {item.title}
                      </h3>

                      <p className="mt-3 text-xs leading-[1.75] text-gray-600 sm:text-[13px]">
                        {item.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <span
                          className="h-px w-7"
                          style={{ backgroundColor: colors.brand.accent }}
                        />
                        <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-gray-400">
                          Context Creates Advantage
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </StaggerContainer>

              {/* Strategic summary */}
              <ScrollReveal delay={0.12}>
                <div className="mt-5 grid overflow-hidden rounded-[24px] border border-white/[0.90] bg-white/[0.64] shadow-[0_18px_55px_rgba(0,1,49,0.06)] backdrop-blur-xl lg:grid-cols-[260px_1fr]">
                  <div
                    className="relative flex items-center gap-3 px-5 py-5 lg:border-r lg:border-white/[0.10] lg:px-6"
                    style={{ background: gradients.primary }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.15] bg-white/[0.10]">
                      <Brain className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/[0.45]">
                        Strategic Principle
                      </p>
                      <p className="mt-1 text-sm font-bold text-white">
                        Context before execution
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 sm:divide-x sm:divide-gray-200/[0.80]">
                    {[
                      'Understand the buyer',
                      'Align the message',
                      'Measure commercial impact',
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 px-5 py-5 transition-colors duration-300 hover:bg-white/[0.60]"
                      >
                        <span
                          className="text-[9px] font-bold"
                          style={{ color: colors.brand.secondary }}
                        >
                          0{index + 1}
                        </span>
                        <span
                          className="text-xs font-bold"
                          style={{ color: colors.brand.primary }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          3. INTERACTIVE INDUSTRY EXPLORER
          ============================================ */}
      <ModernSectionBackground
        variant="gradient-abstract"
        className="relative overflow-hidden"
      >
        <Section
          spacing="base"
          animate
          background="transparent"
          className="relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.22]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,1,49,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.04) 1px, transparent 1px)',
                backgroundSize: '64px 64px',
              }}
            />

            <div
              className="absolute left-1/2 top-[18%] h-[620px] w-[620px] -translate-x-1/2 rounded-full opacity-[0.045] blur-[150px]"
              style={{ backgroundColor: colors.brand.secondary }}
            />
          </div>

          <Container size="xl">
            <div className="relative z-10 mx-auto max-w-7xl">
              <SectionHeader
                badge="Focused Industry Expertise"
                badgeIcon={<Building2 className="h-4 w-4" />}
                title="Industries We Help Scale"
                description="We work with growth-focused businesses across sectors where strategic positioning, integrated execution, and operational alignment directly impact revenue growth."
                align="center"
                maxWidth="md"
              />

              {/* Interactive sector selector */}
              <ScrollReveal>
                <div className="mt-9 overflow-hidden rounded-[22px] border border-white/[0.90] bg-white/[0.66] p-2 shadow-[0_14px_44px_rgba(0,1,49,0.055)] backdrop-blur-xl">
                  <div
                    role="tablist"
                    aria-label="Industry sectors"
                    className="flex gap-2 overflow-x-auto pb-1 lg:grid lg:grid-cols-7 lg:overflow-visible lg:pb-0"
                  >
                    {industries.map((industry) => {
                      const active = industry.id === activeIndustryId;

                      return (
                        <button
                          key={industry.id}
                          type="button"
                          role="tab"
                          aria-selected={active}
                          onClick={() => setActiveIndustryId(industry.id)}
                          className="group relative min-w-[165px] overflow-hidden rounded-xl border px-3.5 py-3 text-left transition-all duration-300 lg:min-w-0"
                          style={{
                            borderColor: active
                              ? `${colors.brand.secondary}28`
                              : 'rgba(226,232,240,0.9)',
                            backgroundColor: active
                              ? `${colors.brand.secondary}0B`
                              : 'rgba(255,255,255,0.52)',
                          }}
                        >
                          {active && (
                            <motion.span
                              layoutId="active-industry-tab"
                              className="absolute inset-x-0 top-0 h-[3px]"
                              style={{ background: gradients.primary }}
                            />
                          )}

                          <div className="flex items-center gap-2.5">
                            <span
                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                              style={{
                                color: active
                                  ? colors.brand.secondary
                                  : colors.brand.primary,
                                backgroundColor: active
                                  ? `${colors.brand.secondary}12`
                                  : 'rgba(15,23,42,0.04)',
                              }}
                            >
                              {industry.icon}
                            </span>

                            <div className="min-w-0">
                              <p
                                className="text-[8px] font-bold tracking-[0.14em]"
                                style={{
                                  color: active
                                    ? colors.brand.secondary
                                    : '#9ca3af',
                                }}
                              >
                                {industry.id}
                              </p>

                              <p
                                className="mt-0.5 line-clamp-2 text-[10px] font-bold leading-[1.35]"
                                style={{
                                  color: active
                                    ? colors.brand.primary
                                    : '#4b5563',
                                }}
                              >
                                {industry.title}
                              </p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>

              {/* Active industry system */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.42,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-5 overflow-hidden rounded-[28px] border border-white/[0.90] bg-white/[0.74] shadow-[0_24px_75px_rgba(0,1,49,0.09)] backdrop-blur-xl"
                >
                  <div className="grid xl:grid-cols-[0.82fr_1.18fr]">
                    {/* Visual identity panel */}
                    <div className="relative min-h-[420px] overflow-hidden sm:min-h-[460px] xl:min-h-full">
                      <img
                        src={industryImageById[activeIndustry.id]}
                        alt={activeIndustry.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#000131]/95 via-[#000131]/52 to-[#000131]/12" />

                      <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/45 via-transparent to-transparent" />

                      <div className="absolute left-5 top-5 z-10 sm:left-6 sm:top-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.18] bg-[#000131]/35 px-3 py-2 backdrop-blur-xl">
                          <span
                            className="text-[9px] font-bold tracking-[0.16em]"
                            style={{ color: colors.brand.accent }}
                          >
                            INDUSTRY {activeIndustry.id}
                          </span>
                        </div>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.15] bg-white/[0.10] text-white backdrop-blur-xl"
                        >
                          {activeIndustry.icon}
                        </div>

                        <h3 className="mt-4 max-w-lg text-2xl font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-3xl">
                          {activeIndustry.title}
                        </h3>

                        <p
                          className="mt-3 max-w-lg text-sm font-bold leading-[1.6]"
                          style={{ color: colors.brand.accent }}
                        >
                          {activeIndustry.tagline}
                        </p>

                        <p className="mt-3 max-w-xl text-xs leading-[1.75] text-white/[0.62] sm:text-sm">
                          {activeIndustry.description}
                        </p>

                        <div className="mt-5 grid grid-cols-3 gap-2">
                          {[
                            {
                              value: activeIndustry.challenges.length,
                              label: 'Challenges',
                            },
                            {
                              value: activeIndustry.solutions.length,
                              label: 'Solution Areas',
                            },
                            {
                              value: activeIndustry.outcomes.length,
                              label: 'Outcomes',
                            },
                          ].map((item) => (
                            <div
                              key={item.label}
                              className="rounded-xl border border-white/[0.10] bg-white/[0.07] px-3 py-3 backdrop-blur-xl"
                            >
                              <p className="text-lg font-black tracking-[-0.03em] text-white">
                                {String(item.value).padStart(2, '0')}
                              </p>
                              <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.12em] text-white/[0.38]">
                                {item.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Detailed operating system */}
                    <div className="p-5 sm:p-6 lg:p-7">
                      <div className="flex flex-col gap-4 border-b border-gray-200/[0.80] pb-5 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <p
                            className="text-[9px] font-bold uppercase tracking-[0.18em]"
                            style={{ color: colors.brand.secondary }}
                          >
                            Industry Growth System
                          </p>

                          <h3
                            className="mt-1.5 text-lg font-bold tracking-[-0.02em] sm:text-xl"
                            style={{ color: colors.brand.primary }}
                          >
                            Diagnose. Activate. Measure.
                          </h3>
                        </div>

                        <Link
                          to="/contact"
                          className="group inline-flex w-fit items-center gap-2 text-xs font-bold"
                          style={{ color: colors.brand.secondary }}
                        >
                          Discuss this industry
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>

                      <div className="mt-5 grid gap-4 lg:grid-cols-3">
                        {/* Challenges */}
                        <div className="rounded-2xl border border-gray-100/[0.90] bg-white/[0.62] p-4">
                          <div className="flex items-center gap-2.5">
                            <div
                              className="flex h-9 w-9 items-center justify-center rounded-lg"
                              style={{
                                color: colors.brand.accent,
                                backgroundColor: `${colors.brand.accent}14`,
                              }}
                            >
                              <Target className="h-4 w-4" />
                            </div>

                            <div>
                              <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-gray-400">
                                Diagnose
                              </p>
                              <h4
                                className="mt-0.5 text-xs font-bold"
                                style={{ color: colors.brand.primary }}
                              >
                                Key Challenges
                              </h4>
                            </div>
                          </div>

                          <ul className="mt-4 space-y-2.5">
                            {activeIndustry.challenges.map((challenge) => (
                              <li
                                key={challenge}
                                className="flex items-start gap-2 text-[11px] leading-[1.6] text-gray-600"
                              >
                                <span
                                  className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full"
                                  style={{
                                    backgroundColor: colors.brand.accent,
                                  }}
                                />
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Solutions */}
                        <div className="rounded-2xl border border-gray-100/[0.90] bg-white/[0.62] p-4">
                          <div className="flex items-center gap-2.5">
                            <div
                              className="flex h-9 w-9 items-center justify-center rounded-lg"
                              style={{
                                color: colors.brand.secondary,
                                backgroundColor: `${colors.brand.secondary}0E`,
                              }}
                            >
                              <Layers className="h-4 w-4" />
                            </div>

                            <div>
                              <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-gray-400">
                                Activate
                              </p>
                              <h4
                                className="mt-0.5 text-xs font-bold"
                                style={{ color: colors.brand.primary }}
                              >
                                How We Help
                              </h4>
                            </div>
                          </div>

                          <ul className="mt-4 space-y-2.5">
                            {activeIndustry.solutions.map((solution) => (
                              <li
                                key={solution}
                                className="flex items-start gap-2 text-[11px] leading-[1.6] text-gray-600"
                              >
                                <CheckCircle2
                                  className="mt-[2px] h-3.5 w-3.5 shrink-0"
                                  style={{ color: colors.brand.secondary }}
                                />
                                {solution}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Outcomes */}
                        <div
                          className="relative overflow-hidden rounded-2xl border p-4"
                          style={{
                            borderColor: `${colors.brand.primary}12`,
                            background:
                              'linear-gradient(145deg, rgba(0,1,49,0.99), rgba(0,0,170,0.94))',
                          }}
                        >
                          <div
                            aria-hidden="true"
                            className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-20 blur-[45px]"
                            style={{ backgroundColor: colors.brand.accent }}
                          />

                          <div className="relative z-10">
                            <div className="flex items-center gap-2.5">
                              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.10] bg-white/[0.10]">
                                <TrendingUp className="h-4 w-4 text-white" />
                              </div>

                              <div>
                                <p
                                  className="text-[8px] font-bold uppercase tracking-[0.15em]"
                                  style={{ color: colors.brand.accent }}
                                >
                                  Impact
                                </p>
                                <h4 className="mt-0.5 text-xs font-bold text-white">
                                  Business Outcomes
                                </h4>
                              </div>
                            </div>

                            <ul className="mt-4 space-y-2.5">
                              {activeIndustry.outcomes.map((outcome) => (
                                <li
                                  key={outcome}
                                  className="flex items-start gap-2 text-[11px] leading-[1.6] text-white/[0.70]"
                                >
                                  <span
                                    className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full"
                                    style={{
                                      backgroundColor: colors.brand.accent,
                                    }}
                                  />
                                  {outcome}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Sector switching footer */}
                      <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-gray-100/[0.90] bg-white/[0.55] px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-gray-400">
                            Current Sector
                          </p>
                          <p
                            className="mt-1 text-xs font-bold"
                            style={{ color: colors.brand.primary }}
                          >
                            {activeIndustry.title}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {industries.map((industry) => (
                            <button
                              key={industry.id}
                              type="button"
                              onClick={() => setActiveIndustryId(industry.id)}
                              aria-label={`View ${industry.title}`}
                              className="flex h-8 w-8 items-center justify-center rounded-lg border text-[9px] font-bold transition-all duration-300"
                              style={{
                                borderColor:
                                  industry.id === activeIndustryId
                                    ? `${colors.brand.secondary}35`
                                    : 'rgba(229,231,235,0.95)',
                                color:
                                  industry.id === activeIndustryId
                                    ? colors.brand.secondary
                                    : '#9ca3af',
                                backgroundColor:
                                  industry.id === activeIndustryId
                                    ? `${colors.brand.secondary}0D`
                                    : 'rgba(255,255,255,0.7)',
                              }}
                            >
                              {industry.id}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          4. INDUSTRY COMPLEXITY → ADVANTAGE
          ============================================ */}
      <ModernSectionBackground
        variant="mesh-gradient-purple"
        className="relative overflow-hidden"
      >
        <Section
          spacing="base"
          animate
          background="transparent"
          className="relative overflow-hidden"
        >
          <Container size="xl">
            <div className="mx-auto max-w-7xl">
              <ScrollReveal>
                <div className="grid overflow-hidden rounded-[28px] border border-white/[0.90] bg-white/[0.70] shadow-[0_26px_82px_rgba(0,1,49,0.09)] backdrop-blur-2xl lg:grid-cols-[0.74fr_1.26fr]">
                  {/* Strategic panel */}
                  <div
                    className="relative overflow-hidden px-5 py-8 sm:px-7 lg:px-8 lg:py-10"
                    style={{
                      background:
                        'linear-gradient(145deg, #000131 0%, #0000aa 130%)',
                    }}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-20 blur-[85px]"
                      style={{ backgroundColor: colors.brand.accent }}
                    />

                    <div
                      aria-hidden="true"
                      className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full opacity-25 blur-[90px]"
                      style={{ backgroundColor: colors.brand.secondary }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center gap-2">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: colors.brand.accent }}
                        />
                        <p
                          className="text-[9px] font-bold uppercase tracking-[0.18em]"
                          style={{ color: colors.brand.accent }}
                        >
                          Industry-Led Strategy
                        </p>
                      </div>

                      <h2 className="mt-4 max-w-md text-xl font-bold leading-[1.18] tracking-[-0.03em] text-white sm:text-2xl lg:text-[31px]">
                        Turning Industry Complexity Into Competitive Advantage
                      </h2>

                      <div
                        className="mt-6 h-1 w-16 rounded-full"
                        style={{ background: gradients.primary }}
                      />

                      {/* Context architecture */}
                      <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                        {[
                          'Customer expectations',
                          'Buying behavior',
                          'Sales cycles',
                          'Market competition',
                        ].map((item, index) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 rounded-xl border border-white/[0.10] bg-white/[0.055] px-3.5 py-3 backdrop-blur-md"
                          >
                            <span
                              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[8px] font-bold"
                              style={{
                                color: colors.brand.primary,
                                backgroundColor: colors.brand.accent,
                              }}
                            >
                              0{index + 1}
                            </span>
                            <span className="text-[11px] font-semibold text-white/[0.72]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content / operating model */}
                  <div className="px-5 py-7 sm:px-7 lg:px-8 lg:py-9">
                    <p className="text-sm leading-[1.85] text-gray-600">
                      Every industry operates differently — from customer
                      expectations and buying behavior to sales cycles and
                      market competition. That's why we build tailored growth
                      systems designed around the realities of your business,
                      helping you create stronger positioning, improve customer
                      acquisition, and scale with greater operational clarity.
                    </p>

                    <div className="my-6 h-px bg-gray-200/[0.80]" />

                    <p className="text-sm leading-[1.85] text-gray-600">
                      Whether you're modernizing traditional processes,
                      strengthening digital visibility, or integrating AI into
                      your growth ecosystem, our focus remains the same:
                      building systems that support long-term business
                      performance and measurable impact.
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
                      {[
                        {
                          number: '01',
                          title: 'Understand',
                          text: 'Market context and buyer realities.',
                        },
                        {
                          number: '02',
                          title: 'Align',
                          text: 'Strategy, channels, systems, and communication.',
                        },
                        {
                          number: '03',
                          title: 'Scale',
                          text: 'What improves performance and commercial impact.',
                        },
                      ].map((item) => (
                        <motion.div
                          key={item.number}
                          whileHover={{ y: -3 }}
                          transition={{ duration: 0.25 }}
                          className="rounded-2xl border border-gray-100/[0.90] bg-white/[0.60] p-4 transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(0,1,49,0.06)]"
                        >
                          <p
                            className="text-[9px] font-bold tracking-[0.15em]"
                            style={{ color: colors.brand.secondary }}
                          >
                            {item.number}
                          </p>
                          <p
                            className="mt-2 text-sm font-bold"
                            style={{ color: colors.brand.primary }}
                          >
                            {item.title}
                          </p>
                          <p className="mt-1.5 text-[11px] leading-[1.6] text-gray-500">
                            {item.text}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          5. INDUSTRY-SPECIFIC APPROACH — INTERACTIVE
          ============================================ */}
      <ModernSectionBackground
        variant="animated-dots"
        className="relative overflow-hidden"
      >
        <Section
          spacing="base"
          animate
          background="transparent"
          className="relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div
              className="absolute -left-40 top-1/4 h-[430px] w-[430px] rounded-full opacity-[0.055] blur-[135px]"
              style={{ backgroundColor: colors.brand.secondary }}
            />

            <div
              className="absolute -right-40 bottom-0 h-[430px] w-[430px] rounded-full opacity-[0.075] blur-[135px]"
              style={{ backgroundColor: colors.brand.accent }}
            />
          </div>

          <Container size="xl">
            <div className="relative z-10 mx-auto max-w-7xl">
              <SectionHeader
                badge="Our Methodology"
                badgeIcon={<Brain className="h-4 w-4" />}
                title="Industry-Specific Approach"
                description="How we leverage sector expertise to accelerate results and reduce risk."
                align="center"
                maxWidth="md"
              />

              <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">
                {/* Method index */}
                <ScrollReveal>
                  <div className="relative h-full overflow-hidden rounded-[28px] bg-[#000131] p-5 shadow-[0_30px_90px_rgba(0,1,49,0.24)] sm:p-6">
                    <div
                      className="absolute left-0 top-0 h-1 w-full"
                      style={{ background: gradients.primary }}
                    />

                    <div
                      aria-hidden="true"
                      className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-25 blur-[90px]"
                      style={{ backgroundColor: colors.brand.secondary }}
                    />

                    <div
                      aria-hidden="true"
                      className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full opacity-15 blur-[90px]"
                      style={{ backgroundColor: colors.brand.accent }}
                    />

                    <div className="relative z-10">
                      <p
                        className="text-[9px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: colors.brand.accent }}
                      >
                        Six Strategic Inputs
                      </p>

                      <h3 className="mt-3 max-w-md text-xl font-bold leading-[1.2] tracking-[-0.025em] text-white sm:text-2xl">
                        Industry context shapes every growth decision.
                      </h3>

                      <p className="mt-3 max-w-md text-xs leading-[1.7] text-white/[0.50]">
                        Select a strategic input to see how it influences our
                        industry-led planning and execution.
                      </p>

                      <div
                        role="tablist"
                        aria-label="Industry methodology"
                        className="mt-6 space-y-2"
                      >
                        {industryApproach.map((item, index) => {
                          const active = item.id === activeApproachId;

                          return (
                            <button
                              key={item.id}
                              type="button"
                              role="tab"
                              aria-selected={active}
                              onClick={() => setActiveApproachId(item.id)}
                              className="group relative flex w-full items-center gap-3 overflow-hidden rounded-xl border px-3.5 py-3 text-left transition-all duration-300"
                              style={{
                                borderColor: active
                                  ? 'rgba(255,255,255,0.16)'
                                  : 'rgba(255,255,255,0.08)',
                                backgroundColor: active
                                  ? 'rgba(255,255,255,0.10)'
                                  : 'rgba(255,255,255,0.045)',
                              }}
                            >
                              {active && (
                                <motion.span
                                  layoutId="active-methodology"
                                  className="absolute inset-y-0 left-0 w-1"
                                  style={{
                                    backgroundColor: colors.brand.accent,
                                  }}
                                />
                              )}

                              <span
                                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[8px] font-bold"
                                style={{
                                  color: active
                                    ? colors.brand.primary
                                    : 'rgba(255,255,255,0.45)',
                                  backgroundColor: active
                                    ? colors.brand.accent
                                    : 'rgba(255,255,255,0.08)',
                                }}
                              >
                                0{index + 1}
                              </span>

                              <span
                                className={`text-[11px] font-semibold leading-[1.4] ${
                                  active
                                    ? 'text-white'
                                    : 'text-white/[0.60] group-hover:text-white/[0.82]'
                                }`}
                              >
                                {item.title}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Active methodology detail */}
                <ScrollReveal delay={0.08}>
                  <div className="flex h-full min-h-[500px] flex-col overflow-hidden rounded-[28px] border border-white/[0.90] bg-white/[0.72] shadow-[0_24px_75px_rgba(0,1,49,0.08)] backdrop-blur-2xl">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeApproach.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex flex-1 flex-col p-5 sm:p-7 lg:p-8"
                      >
                        <div className="flex items-start justify-between gap-5">
                          <div className="flex items-start gap-4">
                            <div
                              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border"
                              style={{
                                color: colors.brand.secondary,
                                borderColor: `${colors.brand.secondary}15`,
                                backgroundColor: `${colors.brand.secondary}0D`,
                              }}
                            >
                              {activeApproach.icon}
                            </div>

                            <div>
                              <p
                                className="text-[9px] font-bold uppercase tracking-[0.18em]"
                                style={{ color: colors.brand.secondary }}
                              >
                                Strategic Input{' '}
                                {String(activeApproachIndex + 1).padStart(2, '0')}
                              </p>

                              <h3
                                className="mt-2 max-w-2xl text-xl font-bold leading-[1.2] tracking-[-0.025em] sm:text-2xl lg:text-[30px]"
                                style={{ color: colors.brand.primary }}
                              >
                                {activeApproach.title}
                              </h3>
                            </div>
                          </div>

                          <span
                            className="hidden text-[52px] font-black leading-none tracking-[-0.06em] opacity-[0.04] sm:block"
                            style={{ color: colors.brand.primary }}
                          >
                            {String(activeApproachIndex + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <div
                          className="mt-6 h-1 w-16 rounded-full"
                          style={{ background: gradients.primary }}
                        />

                        <p className="mt-7 max-w-3xl text-sm leading-[1.9] text-gray-600 sm:text-[15px]">
                          {activeApproach.content}
                        </p>

                        {/* Application system */}
                        <div className="mt-8 grid gap-3 sm:grid-cols-3">
                          {[
                            {
                              icon: <Target className="h-4 w-4" />,
                              label: 'Strategic Relevance',
                            },
                            {
                              icon: <Layers className="h-4 w-4" />,
                              label: 'Execution Alignment',
                            },
                            {
                              icon: <BarChart3 className="h-4 w-4" />,
                              label: 'Performance Context',
                            },
                          ].map((item) => (
                            <div
                              key={item.label}
                              className="rounded-2xl border border-gray-100/[0.90] bg-white/[0.60] p-4"
                            >
                              <div
                                className="flex h-8 w-8 items-center justify-center rounded-lg"
                                style={{
                                  color: colors.brand.secondary,
                                  backgroundColor: `${colors.brand.secondary}0C`,
                                }}
                              >
                                {item.icon}
                              </div>

                              <p
                                className="mt-3 text-xs font-bold"
                                style={{ color: colors.brand.primary }}
                              >
                                {item.label}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-auto pt-8">
                          <div className="flex flex-col gap-4 border-t border-gray-200/[0.80] pt-5 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-gray-400">
                                Methodology Progress
                              </p>

                              <div className="mt-2 flex gap-1">
                                {industryApproach.map((item, index) => (
                                  <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setActiveApproachId(item.id)}
                                    aria-label={`Open methodology ${index + 1}`}
                                    className="h-1.5 rounded-full transition-all duration-300"
                                    style={{
                                      width:
                                        item.id === activeApproachId
                                          ? '28px'
                                          : '9px',
                                      backgroundColor:
                                        item.id === activeApproachId
                                          ? colors.brand.secondary
                                          : 'rgba(148,163,184,0.35)',
                                    }}
                                  />
                                ))}
                              </div>
                            </div>

                            <div className="flex gap-2">
                              <button
                                type="button"
                                onClick={setPreviousApproach}
                                aria-label="Previous methodology"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm"
                              >
                                <ChevronLeft className="h-4 w-4" />
                              </button>

                              <button
                                type="button"
                                onClick={setNextApproach}
                                aria-label="Next methodology"
                                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl px-4 text-xs font-bold text-white shadow-[0_10px_28px_rgba(0,0,170,0.20)] transition-all duration-300 hover:-translate-y-0.5"
                                style={{ background: gradients.primary }}
                              >
                                Next Input
                                <ChevronRight className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          6. CTA — INDUSTRY GROWTH PARTNERSHIP
          ============================================ */}
      <ModernSectionBackground
        variant="image-overlay-workspace"
        className="relative overflow-hidden"
      >
        <section className="relative overflow-hidden bg-transparent px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(0,1,49,0.94) 0%, rgba(0,1,49,0.84) 46%, rgba(0,0,170,0.66) 100%)',
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full opacity-20 blur-[125px]"
            style={{ backgroundColor: colors.brand.accent }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-28 bottom-[-140px] h-[420px] w-[420px] rounded-full opacity-[0.16] blur-[125px]"
            style={{ backgroundColor: colors.brand.secondary }}
          />

          <Container size="lg">
            <ScrollReveal>
              <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[30px] border border-white/[0.15] bg-white/[0.075] px-5 py-8 text-center shadow-[0_32px_110px_rgba(0,1,49,0.34)] backdrop-blur-2xl sm:px-8 sm:py-10 lg:px-11 lg:py-11">
                <div
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.15] bg-white/[0.10]"
                  style={{ color: colors.brand.accent }}
                >
                  <Building2 className="h-6 w-6" />
                </div>

                <p
                  className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: colors.brand.accent }}
                >
                  Industry Growth Partnership
                </p>

                <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-bold leading-[1.14] tracking-[-0.035em] text-white sm:text-3xl lg:text-[40px]">
                  Build a Growth Strategy Designed for Your Industry
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-[1.8] text-white/[0.64]">
                  Let's identify where your positioning, marketing, CRM, and
                  customer engagement systems are limiting growth — and build a
                  connected strategy designed for measurable business outcomes.
                </p>

                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <MagneticButton strength={0.3}>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-[0_15px_38px_rgba(0,0,170,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(0,0,170,0.42)]"
                      style={{ background: gradients.primary }}
                    >
                      Discuss Your Industry
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </MagneticButton>

                  <MagneticButton strength={0.2}>
                    <Link
                      to="/case-studies"
                      className="group inline-flex items-center justify-center rounded-xl border border-white/[0.25] bg-white/[0.10] px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.16]"
                    >
                      Explore Case Studies
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </MagneticButton>
                </div>

                <div className="mt-8 border-t border-white/[0.10] pt-6">
                  <p className="mx-auto max-w-3xl text-xs font-medium leading-[1.7] text-white/[0.50] sm:text-sm">
                    We partner with growth-focused businesses that want
                    strategic clarity, integrated execution, and scalable
                    revenue growth.
                  </p>

                  <div className="mt-5 flex flex-wrap justify-center gap-2.5">
                    {[
                      'Strategic Clarity',
                      'Integrated Execution',
                      'Scalable Revenue Growth',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.06] px-3.5 py-2 backdrop-blur-md"
                      >
                        <CheckCircle2
                          className="h-3.5 w-3.5"
                          style={{ color: colors.brand.accent }}
                        />
                        <span className="text-[10px] font-bold text-white/[0.70] sm:text-xs">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-2">
                    <Sparkles
                      className="h-3.5 w-3.5"
                      style={{ color: colors.brand.accent }}
                    />
                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/[0.35]">
                      Strategy aligned to the realities of your market
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      </ModernSectionBackground>
    </PageBackground>
  );
}

export default IndustriesPage;
