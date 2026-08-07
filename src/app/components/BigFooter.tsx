/**
 * ============================================
 * ADVANTEDGE BIG FOOTER — REFINED PRODUCTION VERSION
 * ============================================
 * Preserves the original footer content and dependencies
 * while improving contrast, routes, responsiveness, hierarchy,
 * accessibility, and newsletter submission behavior.
 * ============================================
 */

import { useState, type FormEvent, type ReactNode } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { submitNewsletterSignup } from '../utils/emailService';
import { toast } from 'sonner';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  Rocket,
  Award,
  MonitorSmartphone,
  TrendingUp,
  Building2,
  Hospital,
  Briefcase,
  Target,
  CheckCircle,
  Shield,
  Heart,
  Send,
  ChevronRight,
} from 'lucide-react';

import { colors, gradients } from '../../styles/design-tokens';
import {
  contactConfig,
  getMailtoUrl,
  getTelUrl,
  getMapsUrl,
} from '../config/contact.config';
import { GlassCard } from './primitives';

const services = [
  {
    name: 'Strategic Planning',
    icon: <Target className="h-4 w-4" />,
    path: '/services/strategic-planning',
  },
  {
    name: 'Brand Development',
    icon: <Award className="h-4 w-4" />,
    path: '/services/brand-development',
  },
  {
    name: 'Digital Marketing',
    icon: <Rocket className="h-4 w-4" />,
    path: '/services/digital-marketing',
  },
  {
    name: 'Content Strategy',
    icon: <MonitorSmartphone className="h-4 w-4" />,
    path: '/services/content-strategy',
  },
  {
    name: 'Marketing Analytics',
    icon: <TrendingUp className="h-4 w-4" />,
    path: '/services/analytics-optimization',
  },
];

const industries = [
  {
    name: 'B2B Technology & SaaS',
    icon: <MonitorSmartphone className="h-4 w-4" />,
    path: '/industries',
  },
  {
    name: 'Professional Services',
    icon: <Briefcase className="h-4 w-4" />,
    path: '/industries',
  },
  {
    name: 'Healthcare & Medical',
    icon: <Hospital className="h-4 w-4" />,
    path: '/industries',
  },
  {
    name: 'Financial Services',
    icon: <Building2 className="h-4 w-4" />,
    path: '/industries',
  },
];

const company = [
  { name: 'About Us', path: '/about' },
  { name: 'Our Approach', path: '/about' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Contact Us', path: '/contact' },
];

const resources = [
  { name: 'Service Configurator', path: '/configurator' },
  { name: 'Industries We Serve', path: '/industries' },
  { name: 'Marketing Insights', path: null },
  { name: 'Success Stories', path: '/case-studies' },
] as const;

const socialLinks = [
  {
    icon: <Linkedin className="h-4 w-4" />,
    href: contactConfig.social.linkedin,
    label: 'LinkedIn',
  },
  {
    icon: <Twitter className="h-4 w-4" />,
    href: contactConfig.social.twitter,
    label: 'Twitter',
  },
  {
    icon: <Facebook className="h-4 w-4" />,
    href: contactConfig.social.facebook,
    label: 'Facebook',
  },
  {
    icon: <Instagram className="h-4 w-4" />,
    href: contactConfig.social.instagram,
    label: 'Instagram',
  },
  {
    icon: <Youtube className="h-4 w-4" />,
    href: contactConfig.social.youtube,
    label: 'YouTube',
  },
];

const trustBadges = [
  { icon: <Shield className="h-4 w-4" />, text: 'Strategic Integrity' },
  { icon: <CheckCircle className="h-4 w-4" />, text: '94% Client Satisfaction' },
  { icon: <Heart className="h-4 w-4" />, text: '87% Client Retention' },
];

export function BigFooter() {
  const currentYear = new Date().getFullYear();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get('email') || '').trim();

    if (!email) {
      toast.error('Please enter your email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitNewsletterSignup({ email });

      if (result.success) {
        toast.success("Thank you for subscribing! We'll send you our latest insights.");
        form.reset();
      } else {
        toast.error(result.message || 'There was an error subscribing. Please try again.');
      }
    } catch {
      toast.error('There was an error subscribing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      className="relative isolate mt-16 w-full overflow-hidden sm:mt-20 lg:mt-24"
      style={{ zIndex: 2, backgroundColor: '#ffffff' }}
    >
      {/* ============================================
          CTA — LIGHT PREMIUM SURFACE
      ============================================ */}
      <section
        className="relative overflow-hidden border-y border-gray-200/70"
        style={{ background: gradients.soft }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-32 h-[360px] w-[360px] rounded-full opacity-30 blur-[120px]"
          style={{ backgroundColor: '#dbeafe' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -right-32 h-[380px] w-[380px] rounded-full opacity-30 blur-[120px]"
          style={{ backgroundColor: '#fef3c7' }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard
              variant="base"
              rounded="2xl"
              padding="base"
              className="overflow-hidden border border-white/80 bg-white/80 shadow-[0_24px_70px_rgba(0,1,49,0.10)] backdrop-blur-xl"
            >
              <div className="grid items-center gap-7 lg:grid-cols-[1fr_auto] lg:gap-10">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-[0_10px_28px_rgba(0,0,170,0.18)] sm:h-12 sm:w-12"
                    style={{ background: gradients.primary }}
                  >
                    <Rocket className="h-5 w-5 text-white" />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="text-[9px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: colors.brand.secondary }}
                    >
                      AdvantEdge
                    </p>

                    <h2
                      className="mt-1.5 text-xl font-bold leading-[1.18] tracking-[-0.025em] sm:text-2xl lg:text-[28px]"
                      style={{ color: colors.brand.primary }}
                    >
                      Ready to Transform Your Marketing?
                    </h2>

                    <p className="mt-2 max-w-2xl text-sm leading-[1.7] text-gray-600">
                      Partner with AdvantEdge to build marketing systems that deliver clarity,
                      consistency, and measurable results.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 sm:flex-row lg:justify-end">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center rounded-xl px-5 py-3 text-[12px] font-bold text-white shadow-[0_12px_30px_rgba(0,0,170,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(0,0,170,0.28)]"
                    style={{ background: gradients.primary }}
                  >
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/configurator"
                    className="group inline-flex items-center justify-center rounded-xl border px-5 py-3 text-[12px] font-bold transition-all duration-300 hover:bg-white hover:shadow-md"
                    style={{
                      color: colors.brand.primary,
                      borderColor: 'rgba(0,1,49,0.16)',
                      backgroundColor: 'rgba(255,255,255,0.68)',
                    }}
                  >
                    Explore Our Configurator
                    <ChevronRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          MAIN FOOTER — EXPLICIT NAVY SURFACE
      ============================================ */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          backgroundColor: '#000131',
          backgroundImage:
            'radial-gradient(circle at 8% 5%, rgba(0,0,170,0.45), transparent 28%), radial-gradient(circle at 95% 90%, rgba(255,179,0,0.12), transparent 25%)',
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* MAIN CONTENT */}
          <div className="py-10 sm:py-12 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
              {/* COMPANY INFO */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-4"
              >
                <Link to="/" className="inline-flex items-center gap-3 group">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 shadow-[0_12px_32px_rgba(0,0,0,0.20)]"
                    style={{ background: gradients.primary }}
                  >
                    <Rocket className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <span className="block text-xl font-bold leading-none tracking-[-0.025em] text-white">
                      AdvantEdge
                    </span>
                    <span
                      className="mt-1.5 block text-[8px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: colors.brand.accent }}
                    >
                      Strategic Marketing
                    </span>
                  </div>
                </Link>

                <p className="mt-5 max-w-md text-[13px] leading-[1.8] text-white/[0.62]">
                  Strategic marketing consultancy that brings clarity, structure, and
                  accountability to marketing initiatives. We serve organizations that value
                  substance over hype.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href={getMailtoUrl('primary')}
                    className="group flex items-center gap-3 text-white/[0.65] transition-colors hover:text-white"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06]">
                      <Mail className="h-4 w-4" style={{ color: colors.brand.accent }} />
                    </span>
                    <span className="text-[12px] font-medium">{contactConfig.email.primary}</span>
                  </a>

                  <a
                    href={getTelUrl('main')}
                    className="group flex items-center gap-3 text-white/[0.65] transition-colors hover:text-white"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06]">
                      <Phone className="h-4 w-4" style={{ color: colors.brand.accent }} />
                    </span>
                    <span className="text-[12px] font-medium">{contactConfig.phone.main}</span>
                  </a>

                  <a
                    href={getMapsUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-3 text-white/[0.65] transition-colors hover:text-white"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06]">
                      <MapPin className="h-4 w-4" style={{ color: colors.brand.accent }} />
                    </span>
                    <span className="pt-1 text-[12px] font-medium leading-[1.55]">
                      {contactConfig.address.full}
                    </span>
                  </a>
                </div>

                <div className="mt-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/80">
                    Follow Us
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-white/[0.65] transition-colors hover:border-white/20 hover:bg-white/[0.10] hover:text-white"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* LINK COLUMNS */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-4 lg:col-span-8 lg:gap-x-7">
                <FooterColumn title="Services" delay={0.05}>
                  {services.map((service) => (
                    <li key={service.path}>
                      <Link
                        to={service.path}
                        className="group flex items-start gap-2 text-[12px] font-medium leading-[1.5] text-white/[0.55] transition-colors hover:text-white"
                      >
                        <span className="mt-[1px] shrink-0 text-white/30 transition-colors group-hover:text-[#ffb300]">
                          {service.icon}
                        </span>
                        <span>{service.name}</span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/services"
                      className="group inline-flex items-center gap-1.5 text-[11px] font-bold"
                      style={{ color: colors.brand.accent }}
                    >
                      View All Services
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                </FooterColumn>

                <FooterColumn title="Industries" delay={0.1}>
                  {industries.map((industry) => (
                    <li key={industry.name}>
                      <Link
                        to={industry.path}
                        className="group flex items-start gap-2 text-[12px] font-medium leading-[1.5] text-white/[0.55] transition-colors hover:text-white"
                      >
                        <span className="mt-[1px] shrink-0 text-white/30 transition-colors group-hover:text-[#ffb300]">
                          {industry.icon}
                        </span>
                        <span>{industry.name}</span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/industries"
                      className="group inline-flex items-center gap-1.5 text-[11px] font-bold"
                      style={{ color: colors.brand.accent }}
                    >
                      View All Industries
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                </FooterColumn>

                <FooterColumn title="Company" delay={0.15}>
                  {company.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="text-[12px] font-medium leading-[1.5] text-white/[0.55] transition-colors hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </FooterColumn>

                <FooterColumn title="Resources" delay={0.2}>
                  {resources.map((item) => (
                    <li key={item.name}>
                      {item.path ? (
                        <Link
                          to={item.path}
                          className="text-[12px] font-medium leading-[1.5] text-white/[0.55] transition-colors hover:text-white"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <span className="text-[12px] font-medium leading-[1.5] text-white/[0.32]">
                          {item.name}
                        </span>
                      )}
                    </li>
                  ))}
                </FooterColumn>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="border-t border-white/10 py-7 sm:py-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid items-center gap-5 lg:grid-cols-[0.85fr_1.15fr]"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                  <Send className="h-4 w-4" style={{ color: colors.brand.accent }} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Stay Informed</h3>
                  <p className="mt-1 max-w-xl text-[11px] leading-[1.65] text-white/[0.48]">
                    Subscribe to receive strategic marketing insights, industry trends, and best
                    practices delivered to your inbox.
                  </p>
                </div>
              </div>

              <div>
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col gap-2.5 sm:flex-row"
                >
                  <label htmlFor="footer-newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="footer-newsletter-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="Enter your email address"
                    className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/[0.08] px-4 py-3 text-[12px] text-white outline-none transition-all placeholder:text-white/30 focus:border-white/30 focus:bg-white/[0.11]"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex min-w-[128px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-[12px] font-bold text-white shadow-[0_10px_26px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                    style={{ background: gradients.primary }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Subscribe'}
                    {!isSubmitting && (
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    )}
                  </button>
                </form>
                <p className="mt-2 text-[9px] text-white/30">
                  No spam. Unsubscribe anytime. We respect your privacy.
                </p>
              </div>
            </motion.div>
          </div>

          {/* TRUST BADGES */}
          <div className="border-t border-white/10 py-5 sm:py-6">
            <div className="grid gap-3 sm:grid-cols-3">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.045] px-4 py-3"
                >
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: 'rgba(255,179,0,0.10)', color: colors.brand.accent }}
                  >
                    {badge.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-white/[0.65]">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-white/10 py-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[10px] leading-relaxed text-white/[0.35]">
                © {currentYear} AdvantEdge. All rights reserved. Built with integrity and excellence.
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="text-[10px] font-medium text-white/[0.35]">Privacy Policy</span>
                <span className="text-[10px] font-medium text-white/[0.35]">Terms of Service</span>
                <span className="text-[10px] font-medium text-white/[0.35]">Cookie Policy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  delay?: number;
  children: ReactNode;
}

function FooterColumn({ title, delay = 0, children }: FooterColumnProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/90">
        {title}
      </h3>
      <div
        className="mt-2.5 h-[2px] w-7 rounded-full"
        style={{ backgroundColor: colors.brand.accent }}
      />
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </motion.div>
  );
}
