/**
 * ============================================
 * CONTACT PAGE - Get In Touch
 * ============================================
 * SMALL Typography matching Home.tsx
 * ============================================
 */

import { motion } from 'motion/react';
import { TiltCard } from '../components/TiltCard';
import { useState, FormEvent } from 'react';
import { submitContactForm } from '../utils/emailService';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Clock,
  MessageSquare,
  CheckCircle2,
  Rocket
} from 'lucide-react';
import { toast } from 'sonner';

// Primitive Components
import { Section, Container, SectionHeader, GlassCard, IconBadge } from '../components/primitives';

// Layout Components
import { PageBackground } from '../components/layout';
import { ModernSectionBackground } from '../components/ModernSectionBackground';

// SEO Components
import { PageSEO } from '../components/seo';
import { PAGE_SEO } from '../utils/seo-config';

// UI Components
import { ScrollReveal, StaggerContainer, staggerItemVariants } from '../components/ScrollReveal';
import { MagneticButton } from '../components/MagneticButton';

// Design Tokens
import { colors, gradients } from '../../styles/design-tokens';

// ============================================
// DATA DEFINITIONS
// ============================================

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email Us',
    detail: 'info@advantedge.com',
    description: 'We respond within 24 hours',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Call Us',
    detail: '+1 (555) 123-4567',
    description: 'Mon-Fri, 9AM-6PM EST',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Visit Us',
    detail: 'New York, NY',
    description: 'Office by appointment',
  },
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Submit form data
    const success = await submitContactForm(formData);

    if (success) {
      toast.success('Message sent successfully! We\'ll be in touch soon.', {
        duration: 5000,
        icon: <CheckCircle2 className="w-5 h-5" style={{ color: colors.brand.primary }} />,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
      });
    } else {
      toast.error('Failed to send message. Please try again later.', {
        duration: 5000,
        icon: <CheckCircle2 className="w-5 h-5" style={{ color: colors.brand.primary }} />,
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PageBackground>
      <PageSEO
        title={PAGE_SEO.contact.title}
        description={PAGE_SEO.contact.description}
        keywords={PAGE_SEO.contact.keywords}
        ogImage={PAGE_SEO.contact.ogImage}
        path="/contact"
      />
      {/* ============================================
    1. CONTACT HERO — START THE CONVERSATION
============================================ */}
<section className="contact-hero-v2 relative isolate min-h-[720px] overflow-hidden bg-[#080912]">
  {/* ============================================
      HERO-SPECIFIC STYLES
  ============================================ */}
  <style>
    {`
      .contact-hero-v2 .contact-hero-slide {
        position: absolute;
        inset: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
        opacity: 0;
        transform: scale(1.055);
        animation: contactHeroCrossfade 24s infinite;
        will-change: opacity, transform;
      }

      .contact-hero-v2 .contact-hero-slide:nth-child(1) {
        animation-delay: 0s;
      }

      .contact-hero-v2 .contact-hero-slide:nth-child(2) {
        animation-delay: 8s;
      }

      .contact-hero-v2 .contact-hero-slide:nth-child(3) {
        animation-delay: 16s;
      }

      @keyframes contactHeroCrossfade {
        0% {
          opacity: 0;
          transform: scale(1.055);
        }

        6% {
          opacity: 1;
        }

        31% {
          opacity: 1;
        }

        39% {
          opacity: 0;
          transform: scale(1);
        }

        100% {
          opacity: 0;
          transform: scale(1);
        }
      }

      .contact-hero-v2 .contact-route-card {
        transition:
          transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
          border-color 0.35s ease,
          background-color 0.35s ease,
          box-shadow 0.4s ease;
      }

      .contact-hero-v2 .contact-route-card:hover {
        transform: translateX(6px);
        border-color: rgba(255, 255, 255, 0.34);
        background-color: rgba(255, 255, 255, 0.11);
        box-shadow: 0 24px 65px rgba(0, 0, 0, 0.28);
      }

      .contact-hero-v2 .contact-route-icon {
        transition:
          transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
          background-color 0.35s ease,
          border-color 0.35s ease;
      }

      .contact-hero-v2
        .contact-route-card:hover
        .contact-route-icon {
        transform: scale(1.07) rotate(-3deg);
        border-color: rgba(255, 179, 0, 0.38);
        background-color: rgba(255, 179, 0, 0.14);
      }

      .contact-hero-v2 .contact-quick-card {
        transition:
          transform 0.35s ease,
          background-color 0.35s ease,
          border-color 0.35s ease;
      }

      .contact-hero-v2 .contact-quick-card:hover {
        transform: translateY(-4px);
        border-color: rgba(255, 255, 255, 0.28);
        background-color: rgba(255, 255, 255, 0.1);
      }

      .contact-hero-v2 .contact-status-dot {
        animation: contactStatusPulse 2.4s ease-in-out infinite;
      }

      @keyframes contactStatusPulse {
        0%,
        100% {
          box-shadow: 0 0 0 0 rgba(255, 179, 0, 0.22);
        }

        50% {
          box-shadow: 0 0 0 9px rgba(255, 179, 0, 0);
        }
      }

      @media (max-width: 1023px) {
        .contact-hero-v2 .contact-route-card:hover {
          transform: translateY(-4px);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .contact-hero-v2 .contact-hero-slide {
          animation: none;
          transform: none;
        }

        .contact-hero-v2 .contact-hero-slide:first-child {
          opacity: 1;
        }

        .contact-hero-v2 .contact-route-card,
        .contact-hero-v2 .contact-route-icon,
        .contact-hero-v2 .contact-quick-card {
          transition: none;
        }

        .contact-hero-v2 .contact-status-dot {
          animation: none;
        }

        .contact-hero-v2 .contact-route-card:hover,
        .contact-hero-v2 .contact-quick-card:hover {
          transform: none;
        }
      }
    `}
  </style>

  {/* ============================================
      AUTO-SLIDING BACKGROUND IMAGES
  ============================================ */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
  >
    <img
      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=92"
      alt=""
      loading="eager"
      decoding="async"
      className="contact-hero-slide"
    />

    <img
      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=92"
      alt=""
      loading="lazy"
      decoding="async"
      className="contact-hero-slide"
    />

    <img
      src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=92"
      alt=""
      loading="lazy"
      decoding="async"
      className="contact-hero-slide"
    />
  </div>

  {/* ============================================
      IMAGE TREATMENT
  ============================================ */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10"
  >
    <div className="absolute inset-0 bg-black/40" />

    <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/94 via-[#080912]/66 to-[#080912]/32" />

    <div className="absolute inset-0 bg-gradient-to-b from-[#080912]/40 via-transparent to-[#080912]/94" />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_18%,rgba(255,255,255,0.16),transparent_38%)]" />

    <div
      className="absolute -left-52 top-[16%] h-[500px] w-[500px] rounded-full opacity-[0.10] blur-[160px]"
      style={{ backgroundColor: colors.brand.secondary }}
    />

    <div
      className="absolute -right-48 bottom-[-120px] h-[470px] w-[470px] rounded-full opacity-[0.09] blur-[155px]"
      style={{ backgroundColor: colors.brand.accent }}
    />

    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
        backgroundSize: "78px 78px",
      }}
    />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_24%,rgba(0,0,0,0.42)_100%)]" />
  </div>

  <Container size="xl">
    <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl flex-col justify-center py-20 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        {/* ============================================
            LEFT — PRIMARY MESSAGE
        ============================================ */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/22 bg-black/20 px-4 py-2 shadow-[0_14px_40px_rgba(0,0,0,0.20)] backdrop-blur-xl">
              <MessageSquare
                className="h-3.5 w-3.5"
                style={{ color: colors.brand.accent }}
              />

              <span
                className="text-[10px] font-bold uppercase tracking-[0.19em]"
                style={{ color: colors.brand.accent }}
              >
                Get in Touch
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-4xl text-3xl font-bold leading-[1.05] tracking-[-0.045em] text-white sm:text-4xl lg:text-[58px]"
          >
            Let’s Start With
            <span className="mt-1 block text-white/68">
              the Business Challenge.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-3xl text-sm leading-[1.85] text-white/70 sm:text-base lg:text-lg"
          >
            Tell us where growth is slowing, where your marketing and revenue
            systems feel disconnected, or what your organization needs to
            achieve next. We will help you identify the right strategic
            starting point.
          </motion.p>

          {/* Primary actions */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <MagneticButton strength={0.25}>
              <a
                href="#contact-form"
                className="group inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-[0_18px_48px_rgba(0,0,170,0.28)] transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
                style={{ background: gradients.primary }}
              >
                Start the Conversation

                <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </MagneticButton>

            <a
              href="mailto:info@advantedge.com"
              className="group inline-flex items-center justify-center rounded-xl border border-white/24 bg-black/20 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.08]"
            >
              Email Our Team

              <Mail
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: colors.brand.accent }}
              />
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
          >
            {[
              "Senior strategic response",
              "Confidential discussion",
              "No generic sales pitch",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2
                  className="h-3.5 w-3.5"
                  style={{ color: colors.brand.accent }}
                />

                <span className="text-[10px] font-semibold text-white/50">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ============================================
            RIGHT — CONVERSATION FRAMEWORK
        ============================================ */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden rounded-[26px] border border-white/20 bg-black/[0.24] shadow-[0_30px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl"
        >
          {/* Panel header */}
          <div className="border-b border-white/15 px-5 py-5 sm:px-6">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.17em]"
                  style={{ color: colors.brand.accent }}
                >
                  Start Here
                </p>

                <h2 className="mt-2 text-xl font-bold leading-[1.25] tracking-[-0.025em] text-white sm:text-2xl">
                  What Would You Like to Discuss?
                </h2>

                <p className="mt-2 max-w-md text-xs leading-[1.7] text-white/48">
                  Share the challenge, opportunity, or transformation priority
                  currently facing your business.
                </p>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07]">
                <Rocket
                  className="h-5 w-5"
                  style={{ color: colors.brand.accent }}
                />
              </div>
            </div>
          </div>

          {/* Discussion paths */}
          <div className="grid gap-3 p-4 sm:p-5">
            {[
              {
                number: "01",
                title: "Marketing and Growth Strategy",
                description:
                  "Positioning, go-to-market planning, demand generation, and commercial growth priorities.",
                icon: <MessageSquare className="h-4 w-4" />,
              },
              {
                number: "02",
                title: "Integrated Marketing Execution",
                description:
                  "Campaigns, content, digital channels, CRM, customer journeys, and performance.",
                icon: <Send className="h-4 w-4" />,
              },
              {
                number: "03",
                title: "AI and Revenue Systems",
                description:
                  "Automation, customer engagement, qualification, CRM workflows, and sales acceleration.",
                icon: <Rocket className="h-4 w-4" />,
              },
            ].map((item) => (
              <a
                key={item.number}
                href="#contact-form"
                className="contact-route-card group rounded-[17px] border border-white/15 bg-black/20 p-4 outline-none focus-visible:ring-2 focus-visible:ring-[#ffb300]"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="contact-route-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07]"
                    style={{ color: colors.brand.accent }}
                  >
                    {item.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xs font-bold leading-[1.45] text-white sm:text-sm">
                        {item.title}
                      </h3>

                      <span className="text-[8px] font-bold tracking-[0.15em] text-white/25">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-1.5 text-[10px] leading-[1.65] text-white/44">
                      {item.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Response status */}
          <div className="border-t border-white/15 bg-white/[0.035] px-5 py-4 sm:px-6">
            <div className="flex items-start gap-3">
              <span
                className="contact-status-dot mt-1.5 h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: colors.brand.accent }}
              />

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/38">
                  Response Standard
                </p>

                <p className="mt-1 text-[11px] font-semibold leading-[1.6] text-white/72">
                  Our team normally responds within one business day.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ============================================
          QUICK CONTACT STRIP
      ============================================ */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.65,
          delay: 0.56,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-10 overflow-hidden rounded-2xl border border-white/18 bg-black/20 shadow-[0_20px_65px_rgba(0,0,0,0.22)] backdrop-blur-xl"
      >
        <div className="grid md:grid-cols-3">
          {[
            {
              title: "Email",
              detail: "info@advantedge.com",
              description: "For enquiries and project discussions",
              href: "mailto:info@advantedge.com",
              icon: <Mail className="h-4 w-4" />,
            },
            {
              title: "Phone",
              detail: "+1 (555) 123-4567",
              description: "Monday–Friday, 9 AM–6 PM EST",
              href: "tel:+15551234567",
              icon: <Phone className="h-4 w-4" />,
            },
            {
              title: "Office",
              detail: "New York, NY",
              description: "Meetings available by appointment",
              href: "#contact-form",
              icon: <MapPin className="h-4 w-4" />,
            },
          ].map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              className={[
                "contact-quick-card group flex items-start gap-4 px-5 py-5 sm:px-6",
                index < 2
                  ? "border-b border-white/15 md:border-b-0 md:border-r"
                  : "",
              ].join(" ")}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07]"
                style={{ color: colors.brand.accent }}
              >
                {item.icon}
              </div>

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/35">
                  {item.title}
                </p>

                <p className="mt-1 text-xs font-bold text-white">
                  {item.detail}
                </p>

                <p className="mt-1 text-[9px] leading-[1.55] text-white/42">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>

      {/* ============================================
          SLIDER INDICATORS
      ============================================ */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {[0, 1, 2].map((item) => (
          <span
            key={item}
            className="h-1 w-10 overflow-hidden rounded-full bg-white/18"
          >
            <motion.span
              className="block h-full w-full origin-left"
              style={{ background: gradients.primary }}
              animate={{
                scaleX: [0, 1, 1, 0],
                opacity: [0.2, 1, 1, 0.2],
              }}
              transition={{
                duration: 8,
                delay: item * 8,
                repeat: Infinity,
                repeatDelay: 16,
                ease: "linear",
              }}
            />
          </span>
        ))}
      </div>
    </div>
  </Container>
</section>

      {/* ============================================
          3. CONTACT FORM - COMPACT
          ============================================ */}
      <ModernSectionBackground variant="gradient-soft">
        <Section spacing="compact" animate background="transparent">
          <Container size="md">
            <SectionHeader
              badge="Send a Message"
              badgeIcon={<Send className="w-4 h-4" />}
              title="Contact Form"
              description="Fill out the form below and we'll get back to you within 24 hours."
              align="center"
              maxWidth="md"
            />

            <ScrollReveal>
              <GlassCard variant="base" rounded="2xl" padding="base" className="shadow-2xl border border-gray-200/60">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: colors.brand.primary }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none text-sm"
                        style={{ 
                          borderColor: colors.border.default,
                          backgroundColor: 'white'
                        }}
                        onFocus={(e) => e.target.style.borderColor = colors.brand.secondary}
                        onBlur={(e) => e.target.style.borderColor = colors.border.default}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: colors.brand.primary }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none text-sm"
                        style={{ 
                          borderColor: colors.border.default,
                          backgroundColor: 'white'
                        }}
                        onFocus={(e) => e.target.style.borderColor = colors.brand.secondary}
                        onBlur={(e) => e.target.style.borderColor = colors.border.default}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Company & Phone Row */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2" style={{ color: colors.brand.primary }}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none text-sm"
                        style={{ 
                          borderColor: colors.border.default,
                          backgroundColor: 'white'
                        }}
                        onFocus={(e) => e.target.style.borderColor = colors.brand.secondary}
                        onBlur={(e) => e.target.style.borderColor = colors.border.default}
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2" style={{ color: colors.brand.primary }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none text-sm"
                        style={{ 
                          borderColor: colors.border.default,
                          backgroundColor: 'white'
                        }}
                        onFocus={(e) => e.target.style.borderColor = colors.brand.secondary}
                        onBlur={(e) => e.target.style.borderColor = colors.border.default}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2" style={{ color: colors.brand.primary }}>
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none text-sm"
                      style={{ 
                        borderColor: colors.border.default,
                        backgroundColor: 'white',
                        color: formData.subject ? colors.brand.primary : '#9ca3af'
                      }}
                      onFocus={(e) => e.target.style.borderColor = colors.brand.secondary}
                      onBlur={(e) => e.target.style.borderColor = colors.border.default}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="services">Services & Pricing</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="support">Support Request</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: colors.brand.primary }}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none resize-none text-sm"
                      style={{ 
                        borderColor: colors.border.default,
                        backgroundColor: 'white'
                      }}
                      onFocus={(e) => e.target.style.borderColor = colors.brand.secondary}
                      onBlur={(e) => e.target.style.borderColor = colors.border.default}
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <MagneticButton 
                      strength={0.3}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold text-sm shadow-2xl hover:shadow-3xl transition-all duration-300 group border-2 border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ background: gradients.primary }}
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </MagneticButton>
                  </div>

                  {/* Privacy Notice */}
                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    By submitting this form, you agree to our privacy policy. We respect your privacy and will never share your information.
                  </p>
                </form>
              </GlassCard>
            </ScrollReveal>
          </Container>
        </Section>
      </ModernSectionBackground>
    </PageBackground>
  );
}

export default ContactPage;
