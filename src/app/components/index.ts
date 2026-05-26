/**
 * ============================================
 * COMPONENTS MASTER INDEX
 * ============================================
 * Central barrel export for all components
 * Organized by category for better code organization
 * ============================================
 */

// ============================================
// LAYOUT COMPONENTS
// ============================================
export { Header } from './layout/Header';
export { Footer } from './layout/Footer';
export { PageBackground } from './layout/PageBackground';
export { MainLayout } from './MainLayout';
// @deprecated — stub only. Real RootLayout lives inside routes.tsx
export { RootLayout } from './RootLayout';

// ============================================
// SEO COMPONENTS
// ============================================
export { SEO, pageSEO } from './seo';

// ============================================
// PRIMITIVE COMPONENTS
// ============================================
export { Container } from './primitives/Container';
export { Section } from './primitives/Section';
export { SectionHeader } from './primitives/SectionHeader';
export { GlassCard } from './primitives/GlassCard';
export { IconBadge } from './primitives/IconBadge';

// ============================================
// BACKGROUND COMPONENTS
// ============================================
export { BackgroundSystem } from './background/BackgroundSystem';
export { MeshGradient } from './background/MeshGradient';
export { GradientOrbs } from './background/GradientOrbs';
export { NoiseTexture } from './background/NoiseTexture';
export { ParallaxLayer } from './background/ParallaxLayer';

// ============================================
// COMMON SHARED COMPONENTS
// ============================================
// Animation & Scroll
export { ScrollReveal, StaggerContainer, staggerItemVariants } from './ScrollReveal';
export { ScrollProgress } from './ScrollProgress';
export { ScrollDepthIndicator } from './ScrollDepthIndicator';
export { AnimatedCounter } from './AnimatedCounter';
export { SmoothScroll } from './SmoothScroll';
export { FastReveal, FastFade } from './FastReveal';

// Buttons & Interactive
export { GlowButton } from './GlowButton';
export { MagneticButton } from './MagneticButton';

// Cards & Content Blocks
export { HoverCard3D } from './HoverCard3D';
export { TiltCard } from './TiltCard';
export { ImageFeatureCard } from './ImageFeatureCard';
export { MetricCard } from './MetricCard';
export { BentoGrid, BentoCard } from './BentoGrid';

// Text & Typography
export { TextGradient } from './TextGradient';
export { TextTicker } from './TextTicker';
export { ParallaxText } from './ParallaxText';

// Layout Effects
export { ModernSectionBackground } from './ModernSectionBackground';
export { GlowEffect } from './GlowEffect';
export { GradientBorder } from './GradientBorder';
export { GradientMeshBackground } from './GradientMeshBackground';
export { HeroBackground } from './HeroBackground';
export { ParallaxSection } from './ParallaxSection';
export { FloatingParticles } from './FloatingParticles';

// Navigation & UI Elements
export { Accordion } from './Accordion';
export { Carousel } from './Carousel';
export { AutoHorizontalCarousel } from './AutoHorizontalCarousel';
export { ComparisonTable } from './ComparisonTable';

// Social Proof & Trust
export { TestimonialsWithImages } from './TestimonialsWithImages';
export { VideoTestimonial } from './VideoTestimonial';
export { AwardsShowcase } from './AwardsShowcase';
export { MediaMentions } from './MediaMentions';
export { TrustBadges } from './TrustBadges';
export { ClientLogoCarousel } from './ClientLogoCarousel';
export { ClientMilestones } from './ClientMilestones';

// Team & About
export { TeamSection } from './TeamSection';
export { TeamIntro } from './TeamIntro';

// Content & Media
export { ImageGallery } from './ImageGallery';
export { BlogPreview } from './BlogPreview';
export { SuccessTimeline } from './SuccessTimeline';

// Hero Sections
export { AsymmetricHero } from './AsymmetricHero';
export { IndustryHero } from './IndustryHero';
export { EnhancedHomeSections } from './EnhancedHomeSections';

// CTAs & Forms
export { FloatingCTA } from './FloatingCTA';
export { NewsletterSignup } from './NewsletterSignup';
export { WhatsAppButton } from './WhatsAppButton';

// Footers
export { BigFooter } from './BigFooter';

// ============================================
// FEATURE COMPONENTS (Interactive Tools)
// ============================================
export { ROICalculator } from './ROICalculator';
export { CostSavingsCalculator } from './CostSavingsCalculator';
export { PackageConfigurator } from './PackageConfigurator';
export { MarketingScoreQuiz } from './MarketingScoreQuiz';
export { QuickWinGenerator } from './QuickWinGenerator';
export { InteractiveSkillChart } from './InteractiveSkillChart';
export { AIChatbot } from './AIChatbot';
export { PricingTransparency } from './PricingTransparency';
export { ExpandableServiceCards } from './ExpandableServiceCards';
export { ResourceLibrary } from './ResourceLibrary';

// ============================================
// UTILITY COMPONENTS
// ============================================
export { CustomCursor } from './CustomCursor';
export { SimpleCustomCursor } from './SimpleCustomCursor';
export { ExitIntentPopup } from './ExitIntentPopup';
export { UrgencyNotification } from './UrgencyNotification';
export { LiveActivityFeed } from './LiveActivityFeed';
export { LiveStatsCounter } from './LiveStatsCounter';
export { PerformanceMonitor } from './PerformanceMonitor';
export { VisualSitemap } from './VisualSitemap';

// ============================================
// FIGMA COMPONENTS
// ============================================
export { ImageWithFallback } from './figma/ImageWithFallback';