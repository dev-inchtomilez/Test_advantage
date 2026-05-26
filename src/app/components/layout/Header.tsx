/**
 * ============================================
 * ULTRA-PREMIUM HEADER - With Services Dropdown
 * ============================================
 * Modern, minimal, and blazing fast
 * Advanced glass morphism with blur effects
 * Services dropdown on hover (desktop) and tap (mobile)
 * Performance optimized
 * ============================================
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronDown,
  Rocket,
  ArrowRight,
  Zap,
  Phone,
  Mail,
  Target,
  Award,
  MonitorSmartphone,
  Megaphone,
  BarChart3
} from 'lucide-react';

// Design Tokens
import { colors, gradients } from '../../../styles/design-tokens';

// Service Categories for Dropdown
const serviceCategories = [
  { 
    name: 'Strategic Planning', 
    path: '/services/strategic-planning',
    icon: <Target className="w-4 h-4" />,
    description: 'Comprehensive marketing strategy & planning'
  },
  { 
    name: 'Brand Development', 
    path: '/services/brand-development',
    icon: <Award className="w-4 h-4" />,
    description: 'Brand strategy, identity & positioning'
  },
  { 
    name: 'Digital Marketing', 
    path: '/services/digital-marketing',
    icon: <Rocket className="w-4 h-4" />,
    description: 'SEO, PPC, social media & growth'
  },
  { 
    name: 'Content Strategy', 
    path: '/services/content-strategy',
    icon: <MonitorSmartphone className="w-4 h-4" />,
    description: 'Content creation & distribution'
  },
  { 
    name: 'PR & Communications', 
    path: '/services/pr-communications',
    icon: <Megaphone className="w-4 h-4" />,
    description: 'Media relations & thought leadership'
  },
  { 
    name: 'Analytics & Optimization', 
    path: '/services/analytics-optimization',
    icon: <BarChart3 className="w-4 h-4" />,
    description: 'Performance tracking & optimization'
  },
];

// Navigation Links
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services', hasDropdown: true },
  { name: 'Industries', path: '/industries' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Header Container */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0"
        style={{ zIndex: 99999 }}
      >
        <div className="relative">
          {/* Background with glass effect */}
          <div 
            className={`absolute inset-0 transition-all duration-500 ${
              scrolled 
                ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
                : 'bg-white/60 backdrop-blur-md'
            }`}
          />

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              
              {/* Logo */}
              <Link 
                to="/" 
                className="flex items-center gap-2 group relative z-10"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg"
                    style={{ background: gradients.primary }}
                  >
                    <Rocket className="w-4 h-4 text-white" />
                  </div>
                  <motion.div
                    className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
                    style={{ background: gradients.primary }}
                  />
                </motion.div>
                <div className="flex flex-col">
                  <span 
                    className="text-base font-bold tracking-tight"
                    style={{ color: colors.brand.primary }}
                  >
                    AdvantEdge
                  </span>
                  <span 
                    className="text-xs font-semibold tracking-wide"
                    style={{ color: colors.brand.secondary }}
                  >
                    Strategic Marketing
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => link.hasDropdown && setServicesDropdownOpen(true)}
                    onMouseLeave={() => link.hasDropdown && setServicesDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className="relative px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 group flex items-center gap-1"
                      style={{ 
                        color: isActive(link.path) ? colors.brand.primary : colors.text.secondary 
                      }}
                    >
                      <span className="relative z-10">{link.name}</span>
                      {link.hasDropdown && (
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-300 ${
                            servicesDropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                      
                      {/* Hover background */}
                      <motion.div
                        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: 'rgba(0, 0, 170, 0.05)' }}
                      />
                      
                      {/* Active indicator */}
                      {isActive(link.path) && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 rounded-lg"
                          style={{ backgroundColor: 'rgba(0, 0, 170, 0.1)' }}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>

                    {/* Services Dropdown */}
                    {link.hasDropdown && (
                      <AnimatePresence>
                        {servicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-80 rounded-2xl shadow-2xl border border-gray-200/60 overflow-hidden"
                            style={{ 
                              background: 'rgba(255, 255, 255, 0.95)',
                              backdropFilter: 'blur(20px)'
                            }}
                          >
                            <div className="p-3">
                              {serviceCategories.map((service, idx) => (
                                <Link
                                  key={idx}
                                  to={service.path}
                                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
                                >
                                  <div 
                                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                                    style={{ backgroundColor: 'rgba(0, 0, 170, 0.1)' }}
                                  >
                                    {service.icon}
                                  </div>
                                  <div className="flex-1">
                                    <div 
                                      className="font-semibold text-sm mb-0.5"
                                      style={{ color: colors.brand.primary }}
                                    >
                                      {service.name}
                                    </div>
                                    <div className="text-xs text-gray-600 leading-snug">
                                      {service.description}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            
                            {/* View All Services Link */}
                            <div 
                              className="px-4 py-3 border-t border-gray-100"
                              style={{ backgroundColor: 'rgba(0, 0, 170, 0.02)' }}
                            >
                              <Link
                                to="/services"
                                className="flex items-center justify-between text-sm font-bold group"
                                style={{ color: colors.brand.secondary }}
                              >
                                <span>View All Services</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </nav>

              {/* CTA Buttons - Desktop */}
              <div className="hidden lg:flex items-center gap-2">
                {/* Contact Quick Link */}
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-gray-100"
                  style={{ color: colors.brand.primary }}
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden xl:inline">+1 (555) 123-4567</span>
                </a>

                {/* Primary CTA */}
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative px-5 py-2 rounded-xl text-white text-sm font-bold shadow-lg overflow-hidden group"
                  >
                    {/* Gradient Background */}
                    <div 
                      className="absolute inset-0"
                      style={{ background: gradients.primary }}
                    />
                    
                    {/* Hover Shine Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ 
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' 
                      }}
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    />
                    
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg transition-colors duration-300 hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" style={{ color: colors.brand.primary }} />
                ) : (
                  <Menu className="w-6 h-6" style={{ color: colors.brand.primary }} />
                )}
              </button>
            </div>
          </div>

          {/* Scroll Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
            style={{ 
              background: gradients.primary,
              scaleX: scrolled ? 1 : 0,
              opacity: scrolled ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
              style={{ zIndex: 99990 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl lg:hidden overflow-y-auto"
              style={{ zIndex: 99995 }}
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ background: gradients.primary }}
                  >
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold" style={{ color: colors.brand.primary }}>
                      AdvantEdge
                    </span>
                    <span className="text-xs font-semibold" style={{ color: colors.brand.secondary }}>
                      Strategic Marketing
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <X className="w-6 h-6" style={{ color: colors.brand.primary }} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.hasDropdown ? (
                      <div>
                        {/* Services with dropdown */}
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                            isActive(link.path)
                              ? 'bg-gradient-to-r from-blue-50 to-purple-50 shadow-sm'
                              : 'hover:bg-gray-50'
                          }`}
                          style={{ 
                            color: isActive(link.path) ? colors.brand.primary : colors.text.secondary 
                          }}
                        >
                          <span>{link.name}</span>
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform duration-300 ${
                              mobileServicesOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        {/* Mobile Services Dropdown */}
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-2 ml-4 space-y-1"
                            >
                              {serviceCategories.map((service, idx) => (
                                <Link
                                  key={idx}
                                  to={service.path}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
                                >
                                  <div 
                                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: 'rgba(0, 0, 170, 0.1)' }}
                                  >
                                    {service.icon}
                                  </div>
                                  <span className="text-sm font-medium text-gray-700">
                                    {service.name}
                                  </span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                          isActive(link.path)
                            ? 'bg-gradient-to-r from-blue-50 to-purple-50 shadow-sm'
                            : 'hover:bg-gray-50'
                        }`}
                        style={{ 
                          color: isActive(link.path) ? colors.brand.primary : colors.text.secondary 
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{link.name}</span>
                          {isActive(link.path) && (
                            <div 
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: colors.brand.accent }}
                            />
                          )}
                        </div>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Quick Actions */}
              <div className="p-6 border-t border-gray-200 space-y-3">
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0, 0, 170, 0.1)' }}
                  >
                    <Phone className="w-5 h-5" style={{ color: colors.brand.secondary }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500">Call Us</div>
                    <div className="text-sm font-bold" style={{ color: colors.brand.primary }}>
                      +1 (555) 123-4567
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:hello@advantedge.com"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(255, 179, 0, 0.1)' }}
                  >
                    <Mail className="w-5 h-5" style={{ color: colors.brand.accent }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500">Email Us</div>
                    <div className="text-sm font-bold" style={{ color: colors.brand.primary }}>
                      hello@advantedge.com
                    </div>
                  </div>
                </a>

                {/* Mobile CTA */}
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    className="w-full px-6 py-4 rounded-xl text-white font-bold shadow-xl"
                    style={{ background: gradients.primary }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get Started
                      <Zap className="w-5 h-5" />
                    </span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}