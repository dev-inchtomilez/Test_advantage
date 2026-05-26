/**
 * ============================================
 * ENHANCED FOOTER - Premium Glass Design
 * ============================================
 * Upgraded with glass morphism, animations, and comprehensive content
 * Matches the premium aesthetic across the entire website
 * ============================================
 */

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
  Zap,
  CheckCircle,
  Shield,
  Heart,
  Send,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

// Design Tokens
import { colors, gradients } from '../../styles/design-tokens';
import { GlassCard } from './primitives';

export function BigFooter() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    // Submit newsletter signup
    submitNewsletterSignup({ email })
      .then(() => {
        toast.success('Thank you for subscribing! We\'ll send you our latest insights.');
        e.currentTarget.reset();
      })
      .catch(() => {
        toast.error('There was an error subscribing. Please try again.');
      });
  };

  const services = [
    { name: 'Strategic Planning', icon: <Target className="w-4 h-4" />, path: '/services' },
    { name: 'Brand Development', icon: <Award className="w-4 h-4" />, path: '/services' },
    { name: 'Digital Marketing', icon: <Rocket className="w-4 h-4" />, path: '/services' },
    { name: 'Content Strategy', icon: <MonitorSmartphone className="w-4 h-4" />, path: '/services' },
    { name: 'Marketing Analytics', icon: <TrendingUp className="w-4 h-4" />, path: '/services' },
  ];

  const industries = [
    { name: 'B2B Technology & SaaS', icon: <MonitorSmartphone className="w-4 h-4" />, path: '/industries' },
    { name: 'Professional Services', icon: <Briefcase className="w-4 h-4" />, path: '/industries' },
    { name: 'Healthcare & Medical', icon: <Hospital className="w-4 h-4" />, path: '/industries' },
    { name: 'Financial Services', icon: <Building2 className="w-4 h-4" />, path: '/industries' },
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
    { name: 'Marketing Insights', path: '#' },
    { name: 'Success Stories', path: '/case-studies' },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' },
  ];

  const trustBadges = [
    { icon: <Shield className="w-5 h-5" />, text: 'Strategic Integrity' },
    { icon: <CheckCircle className="w-5 h-5" />, text: '94% Client Satisfaction' },
    { icon: <Heart className="w-5 h-5" />, text: '87% Client Retention' },
  ];

  return (
    <footer 
      className="relative overflow-hidden mt-16 sm:mt-24 lg:mt-32"
      style={{ background: gradients.soft }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{ background: gradients.primary }}
        />
        <div 
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: gradients.secondary }}
        />
      </div>

      <div className="relative z-10">
        {/* CTA Banner */}
        <div className="border-b border-gray-200/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard variant="base" rounded="2xl" padding="base" className="shadow-2xl border border-gray-200/60">
                <div className="text-center max-w-3xl mx-auto">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: gradients.primary }}>
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: colors.brand.primary }}>
                    Ready to Transform Your Marketing?
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Partner with AdvantEdge to build marketing systems that deliver clarity, consistency, and measurable results.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                      style={{ background: gradients.primary }}
                    >
                      Schedule a Consultation
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/configurator"
                      className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold border-2 transition-all duration-300 hover:shadow-lg bg-white"
                      style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
                    >
                      Explore Our Configurator
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
              {/* Company Info - Larger Column */}
              <div className="lg:col-span-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Logo */}
                  <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
                      style={{ background: gradients.primary }}
                    >
                      <span className="text-white font-bold text-2xl">A</span>
                    </div>
                    <span className="font-bold text-2xl" style={{ color: colors.brand.primary }}>
                      AdvantEdge
                    </span>
                  </Link>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Strategic marketing consultancy that brings clarity, structure, and accountability to marketing initiatives. We serve organizations that value substance over hype.
                  </p>
                  
                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                    <a 
                      href="mailto:hello@advantedge.com" 
                      className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(0, 1, 49, 0.05)' }}>
                        <Mail className="w-5 h-5" style={{ color: colors.brand.primary }} />
                      </div>
                      <span className="text-sm font-medium">hello@advantedge.com</span>
                    </a>
                    <a 
                      href="tel:+15551234567" 
                      className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(0, 1, 49, 0.05)' }}>
                        <Phone className="w-5 h-5" style={{ color: colors.brand.primary }} />
                      </div>
                      <span className="text-sm font-medium">+1 (555) 123-4567</span>
                    </a>
                    <div className="flex items-start gap-3 text-gray-700">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0, 1, 49, 0.05)' }}>
                        <MapPin className="w-5 h-5" style={{ color: colors.brand.primary }} />
                      </div>
                      <span className="text-sm font-medium">
                        123 Marketing Street, Suite 500<br />
                        New York, NY 10001
                      </span>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div>
                    <p className="text-sm font-bold mb-3" style={{ color: colors.brand.primary }}>
                      Follow Us
                    </p>
                    <div className="flex items-center gap-2">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          aria-label={social.label}
                          className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg"
                          style={{ background: 'rgba(0, 1, 49, 0.05)' }}
                          whileHover={{ 
                            scale: 1.1,
                            background: gradients.primary,
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="text-gray-700 hover:text-white transition-colors">
                            {social.icon}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Services */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-lg font-bold mb-6" style={{ color: colors.brand.primary }}>
                    Services
                  </h3>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li key={index}>
                        <Link 
                          to={service.path} 
                          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
                        >
                          <span className="opacity-50 group-hover:opacity-100 transition-opacity">
                            {service.icon}
                          </span>
                          <span className="text-sm font-medium">{service.name}</span>
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link 
                        to="/services" 
                        className="flex items-center gap-2 font-semibold text-sm transition-colors group"
                        style={{ color: colors.brand.secondary }}
                      >
                        View All Services
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Industries */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-lg font-bold mb-6" style={{ color: colors.brand.primary }}>
                    Industries
                  </h3>
                  <ul className="space-y-3">
                    {industries.map((industry, index) => (
                      <li key={index}>
                        <Link 
                          to={industry.path} 
                          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
                        >
                          <span className="opacity-50 group-hover:opacity-100 transition-opacity">
                            {industry.icon}
                          </span>
                          <span className="text-sm font-medium">{industry.name}</span>
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link 
                        to="/industries" 
                        className="flex items-center gap-2 font-semibold text-sm transition-colors group"
                        style={{ color: colors.brand.secondary }}
                      >
                        View All Industries
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Company */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-lg font-bold mb-6" style={{ color: colors.brand.primary }}>
                    Company
                  </h3>
                  <ul className="space-y-3">
                    {company.map((item, index) => (
                      <li key={index}>
                        <Link 
                          to={item.path} 
                          className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium block"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Resources */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-lg font-bold mb-6" style={{ color: colors.brand.primary }}>
                    Resources
                  </h3>
                  <ul className="space-y-3">
                    {resources.map((item, index) => (
                      <li key={index}>
                        <Link 
                          to={item.path} 
                          className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium block"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200/50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard variant="base" rounded="xl" padding="base" className="border border-gray-200/60">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Send className="w-6 h-6" style={{ color: colors.brand.primary }} />
                      <h3 className="text-xl font-bold" style={{ color: colors.brand.primary }}>
                        Stay Informed
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Subscribe to receive strategic marketing insights, industry trends, and best practices delivered to your inbox.
                    </p>
                  </div>
                  <div>
                    <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-400 outline-none text-gray-900 placeholder-gray-400 bg-white transition-colors w-full"
                      />
                      <button 
                        type="submit" 
                        className="px-6 py-3 rounded-lg text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
                        style={{ background: gradients.primary }}
                      >
                        Subscribe
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-2">
                      No spam. Unsubscribe anytime. We respect your privacy.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-200/50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(0, 1, 49, 0.05)' }}
                  >
                    <span style={{ color: colors.brand.accent }}>
                      {badge.icon}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200/50 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">
                © {currentYear} AdvantEdge. All rights reserved. Built with integrity and excellence.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}