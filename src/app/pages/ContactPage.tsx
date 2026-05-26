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
          1. HERO SECTION - COMPACT
          ============================================ */}
      <ModernSectionBackground variant="mesh-gradient-light">
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
                  <MessageSquare className="w-3.5 h-3.5 mr-2" style={{ color: colors.brand.accent }} />
                  <span className="text-xs font-bold tracking-wide" style={{ color: colors.brand.primary }}>
                    GET IN TOUCH
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
                Let's Start a Conversation
              </motion.h1>

              <motion.p 
                className="text-sm text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Ready to transform your marketing? Reach out and let's discuss how we can drive measurable results for your business.
              </motion.p>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          2. CONTACT INFO CARDS - COMPACT
          ============================================ */}
      <ModernSectionBackground variant="glass-blur">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-6">
              {contactInfo.map((info, index) => (
                <motion.div key={index} variants={staggerItemVariants}>
                  <GlassCard variant="base" rounded="lg" padding="sm" hover className="h-full text-center shadow-xl border border-gray-200/60">
                    <IconBadge icon={info.icon} size="md" variant="gradient" animated className="mx-auto mb-4" />
                    <h3 className="text-base font-bold mb-2" style={{ color: colors.brand.primary }}>
                      {info.title}
                    </h3>
                    <p className="text-base font-semibold mb-1" style={{ color: colors.brand.secondary }}>
                      {info.detail}
                    </p>
                    <p className="text-sm text-gray-600">
                      {info.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      </ModernSectionBackground>

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