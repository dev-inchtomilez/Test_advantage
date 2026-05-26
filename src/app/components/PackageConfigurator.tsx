/**
 * ============================================
 * PACKAGE CONFIGURATOR - Interactive Builder
 * ============================================
 * Refactored with Primitives System v2.0
 * ============================================
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  X, 
  Info, 
  ArrowRight, 
  Download, 
  Mail,
  Sparkles,
  TrendingUp,
  Users,
  Target,
  Zap,
  Award,
  MonitorSmartphone,
  Palette,
  Megaphone,
  BarChart3,
  Globe,
  MessageSquare
} from 'lucide-react';

// Primitive Components
import { Section, Container, GlassCard, IconBadge } from './primitives';

// Design Tokens
import { colors, gradients } from '../../styles/design-tokens';

// ============================================
// DATA DEFINITIONS
// ============================================

interface Service {
  id: string;
  name: string;
  icon: any;
  description: string;
  category: string;
  basePrice: number;
  dependencies?: string[];
  recommended?: string[];
}

interface PricingTier {
  id: string;
  name: string;
  multiplier: number;
  features: string[];
  bestFor: string;
}

const services: Service[] = [
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    icon: Megaphone,
    description: 'Comprehensive online marketing strategy and execution',
    category: 'Marketing',
    basePrice: 4000,
    recommended: ['seo', 'social-media']
  },
  {
    id: 'seo',
    name: 'SEO Optimization',
    icon: TrendingUp,
    description: 'Search engine optimization for organic growth',
    category: 'Marketing',
    basePrice: 2500,
    dependencies: ['website']
  },
  {
    id: 'branding',
    name: 'Brand Strategy & Identity',
    icon: Palette,
    description: 'Complete brand development and positioning',
    category: 'Creative',
    basePrice: 6500
  },
  {
    id: 'website',
    name: 'Website Development',
    icon: Globe,
    description: 'Modern, responsive website design and development',
    category: 'Development',
    basePrice: 8000,
    recommended: ['seo']
  },
  {
    id: 'social-media',
    name: 'Social Media Management',
    icon: MessageSquare,
    description: 'Social media strategy, content, and community management',
    category: 'Marketing',
    basePrice: 2800
  },
  {
    id: 'paid-ads',
    name: 'Paid Advertising (PPC)',
    icon: Target,
    description: 'Google Ads, Facebook Ads, and paid campaign management',
    category: 'Marketing',
    basePrice: 3200
  },
  {
    id: 'content',
    name: 'Content Marketing',
    icon: Award,
    description: 'Blog posts, eBooks, whitepapers, and educational content',
    category: 'Marketing',
    basePrice: 2800
  },
  {
    id: 'analytics',
    name: 'Analytics & Reporting',
    icon: BarChart3,
    description: 'Data tracking, analysis, and performance reporting',
    category: 'Strategy',
    basePrice: 1600
  },
  {
    id: 'automation',
    name: 'Marketing Automation',
    icon: Zap,
    description: 'Email automation, lead nurturing, and CRM integration',
    category: 'Technology',
    basePrice: 3600
  }
];

const tiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    multiplier: 1.0,
    bestFor: 'Small businesses just getting started',
    features: [
      'Monthly strategy call',
      'Email support',
      'Basic reporting',
      'Standard turnaround times'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    multiplier: 1.5,
    bestFor: 'Growing businesses scaling up',
    features: [
      'Bi-weekly strategy calls',
      'Priority email & chat support',
      'Advanced analytics & reporting',
      'Faster turnaround times',
      'Quarterly strategy review',
      'Dedicated account manager'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    multiplier: 2.2,
    bestFor: 'Established companies seeking premium service',
    features: [
      'Weekly strategy calls',
      '24/7 priority support',
      'Real-time analytics dashboard',
      'Fastest turnaround times',
      'Monthly executive reviews',
      'Senior strategist + dedicated team',
      'Custom integrations',
      'White-glove service'
    ]
  }
];

export function PackageConfigurator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedTier, setSelectedTier] = useState<string>('growth');
  const [industry, setIndustry] = useState<string>('');
  const [companySize, setCompanySize] = useState<string>('');
  const [step, setStep] = useState(1);
  const [showProposal, setShowProposal] = useState(false);

  const industries = [
    'Technology', 'Healthcare', 'Education', 'Retail', 'Finance', 
    'Real Estate', 'Food & Beverage', 'Professional Services', 'Other'
  ];

  const companySizes = [
    '1-10 employees', '11-50 employees', '51-200 employees', 
    '201-500 employees', '500+ employees'
  ];

  const toggleService = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(prev => prev.filter(id => id !== serviceId));
    } else {
      let toAdd = [serviceId];
      
      if (service?.dependencies) {
        service.dependencies.forEach(dep => {
          if (!selectedServices.includes(dep) && !toAdd.includes(dep)) {
            toAdd.push(dep);
          }
        });
      }
      
      setSelectedServices(prev => [...prev, ...toAdd]);
    }
  };

  const calculateTotal = () => {
    const tier = tiers.find(t => t.id === selectedTier);
    if (!tier) return 0;
    
    const servicesTotal = selectedServices.reduce((sum, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return sum + (service?.basePrice || 0);
    }, 0);
    
    return servicesTotal * tier.multiplier;
  };

  const getRecommendedServices = () => {
    const recommended = new Set<string>();
    
    selectedServices.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      service?.recommended?.forEach(rec => {
        if (!selectedServices.includes(rec)) {
          recommended.add(rec);
        }
      });
    });
    
    return Array.from(recommended);
  };

  const handleDownloadProposal = () => {
    const tier = tiers.find(t => t.id === selectedTier);
    const selectedServicesData = services.filter(s => selectedServices.includes(s.id));
    
    let proposal = `ADVANTEDGE - CUSTOM MARKETING PACKAGE PROPOSAL\n\n`;
    proposal += `Industry: ${industry}\n`;
    proposal += `Company Size: ${companySize}\n\n`;
    proposal += `SELECTED TIER: ${tier?.name.toUpperCase()}\n`;
    proposal += `${tier?.bestFor}\n\n`;
    proposal += `SELECTED SERVICES:\n`;
    selectedServicesData.forEach(service => {
      proposal += `- ${service.name}: $${service.basePrice.toLocaleString()}/month\n`;
    });
    proposal += `\nMONTHLY INVESTMENT: $${calculateTotal().toLocaleString()}\n\n`;
    proposal += `TIER FEATURES:\n`;
    tier?.features.forEach(feature => {
      proposal += `✓ ${feature}\n`;
    });
    
    const blob = new Blob([proposal], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `advantedge-proposal-${Date.now()}.txt`;
    a.click();
  };

  const total = calculateTotal();
  const recommendedServices = getRecommendedServices();

  return (
    <Section spacing="base" className="pt-20" background="transparent">
      <Container size="lg">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span 
              className="inline-flex items-center px-3 py-1.5 rounded-full border-2 shadow-lg"
              style={{ backgroundColor: '#ffffff', borderColor: colors.brand.accent }}
            >
              <Sparkles className="w-3.5 h-3.5 mr-2" style={{ color: colors.brand.accent }} />
              <span className="text-xs font-bold tracking-wide" style={{ color: colors.brand.primary }}>
                INTERACTIVE TOOL
              </span>
            </span>
          </motion.div>
          <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: colors.brand.primary }}>
            Build Your Custom Package
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl">
            Select the services you need and choose your engagement level. Get instant pricing and a custom proposal.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {[1, 2, 3].map(num => (
            <div key={num} className="flex items-center gap-4">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all"
                style={{
                  background: step >= num ? gradients.primary : '#e5e7eb',
                  color: step >= num ? '#ffffff' : '#9ca3af'
                }}
              >
                {num}
              </div>
              {num < 3 && (
                <div 
                  className="w-16 h-1 transition-all rounded-full"
                  style={{ background: step > num ? gradients.primary : '#e5e7eb' }}
                />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1: Company Info */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-2xl mx-auto"
            >
              <GlassCard variant="base" rounded="lg" padding="base" className="shadow-xl border border-gray-200/60">
                <h3 className="text-2xl font-bold mb-6" style={{ color: colors.brand.primary }}>Tell Us About Your Business</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2" style={{ color: colors.brand.primary }}>
                      Industry
                    </label>
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors text-sm"
                      style={{ borderColor: 'rgba(0, 1, 49, 0.2)' }}
                      onFocus={(e) => e.target.style.borderColor = colors.brand.primary}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(0, 1, 49, 0.2)'}
                    >
                      <option value="">Select your industry</option>
                      {industries.map(ind => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2" style={{ color: colors.brand.primary }}>
                      Company Size
                    </label>
                    <select
                      value={companySize}
                      onChange={(e) => setCompanySize(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors text-sm"
                      style={{ borderColor: 'rgba(0, 1, 49, 0.2)' }}
                      onFocus={(e) => e.target.style.borderColor = colors.brand.primary}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(0, 1, 49, 0.2)'}
                    >
                      <option value="">Select company size</option>
                      {companySizes.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!industry || !companySize}
                  className="w-full mt-8 px-8 py-4 rounded-xl text-white font-bold shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: gradients.primary }}
                >
                  Continue to Services
                  <ArrowRight className="w-5 h-5" />
                </button>
              </GlassCard>
            </motion.div>
          )}

          {/* Step 2: Select Services */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="max-w-5xl mx-auto">
                <GlassCard variant="base" rounded="lg" padding="base" className="shadow-xl border border-gray-200/60 mb-8">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: colors.brand.primary }}>Select Services</h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map(service => {
                      const isSelected = selectedServices.includes(service.id);
                      const Icon = service.icon;
                      
                      return (
                        <motion.div
                          key={service.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <button
                            onClick={() => toggleService(service.id)}
                            className="w-full text-left p-4 rounded-lg border-2 transition-all duration-300"
                            style={{
                              borderColor: isSelected ? colors.brand.primary : '#e5e7eb',
                              backgroundColor: isSelected ? 'rgba(0, 1, 49, 0.05)' : '#ffffff'
                            }}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <IconBadge 
                                icon={<Icon className="w-5 h-5" />} 
                                size="sm" 
                                variant={isSelected ? "gradient" : "solid"}
                                className={!isSelected ? "bg-gray-100" : ""}
                              />
                              <div 
                                className="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                                style={{
                                  borderColor: isSelected ? colors.brand.primary : '#d1d5db',
                                  backgroundColor: isSelected ? colors.brand.primary : '#ffffff'
                                }}
                              >
                                {isSelected && <Check className="w-4 h-4 text-white" />}
                              </div>
                            </div>
                            <h4 className="text-sm font-bold mb-2" style={{ color: colors.brand.primary }}>
                              {service.name}
                            </h4>
                            <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                              {service.description}
                            </p>
                            <p className="text-sm font-bold" style={{ color: colors.brand.secondary }}>
                              ${service.basePrice.toLocaleString()}/mo
                            </p>
                          </button>
                        </motion.div>
                      );
                    })}
                  </div>

                  {recommendedServices.length > 0 && (
                    <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Info className="w-5 h-5" style={{ color: colors.brand.secondary }} />
                        <h4 className="text-sm font-bold" style={{ color: colors.brand.primary }}>Recommended Add-ons</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {recommendedServices.map(serviceId => {
                          const service = services.find(s => s.id === serviceId);
                          return (
                            <button
                              key={serviceId}
                              onClick={() => toggleService(serviceId)}
                              className="px-3 py-1 rounded-full text-xs font-bold border-2 transition-all"
                              style={{
                                borderColor: colors.brand.secondary,
                                color: colors.brand.secondary,
                                backgroundColor: '#ffffff'
                              }}
                            >
                              + {service?.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </GlassCard>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 px-8 py-4 rounded-xl font-bold border-2 transition-all duration-300"
                    style={{ borderColor: colors.brand.primary, color: colors.brand.primary, backgroundColor: '#ffffff' }}
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={selectedServices.length === 0}
                    className="flex-1 px-8 py-4 rounded-xl text-white font-bold shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ background: gradients.primary }}
                  >
                    Continue to Pricing
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Select Tier & Review */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="max-w-6xl mx-auto">
                {/* Pricing Tiers */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {tiers.map(tier => (
                    <motion.div
                      key={tier.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        onClick={() => setSelectedTier(tier.id)}
                        className="w-full text-left p-6 rounded-lg border-2 transition-all duration-300 h-full"
                        style={{
                          borderColor: selectedTier === tier.id ? colors.brand.primary : '#e5e7eb',
                          backgroundColor: selectedTier === tier.id ? 'rgba(0, 1, 49, 0.05)' : '#ffffff'
                        }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-xl font-bold" style={{ color: colors.brand.primary }}>
                            {tier.name}
                          </h4>
                          <div 
                            className="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                            style={{
                              borderColor: selectedTier === tier.id ? colors.brand.primary : '#d1d5db',
                              backgroundColor: selectedTier === tier.id ? colors.brand.primary : '#ffffff'
                            }}
                          >
                            {selectedTier === tier.id && <Check className="w-4 h-4 text-white" />}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{tier.bestFor}</p>
                        <div className="space-y-2">
                          {tier.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <Check className="w-4 h-4 mt-0.5" style={{ color: colors.brand.secondary }} />
                              <span className="text-xs text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </div>

                {/* Summary */}
                <GlassCard variant="base" rounded="lg" padding="base" className="shadow-xl border border-gray-200/60 mb-8">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: colors.brand.primary }}>Package Summary</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold mb-4" style={{ color: colors.brand.primary }}>Selected Services</h4>
                      <div className="space-y-3">
                        {services.filter(s => selectedServices.includes(s.id)).map(service => (
                          <div key={service.id} className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">{service.name}</span>
                            <span className="text-sm font-bold" style={{ color: colors.brand.secondary }}>
                              ${service.basePrice.toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-bold mb-4" style={{ color: colors.brand.primary }}>Pricing Details</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">Tier Multiplier</span>
                          <span className="text-sm font-bold">{tiers.find(t => t.id === selectedTier)?.multiplier}x</span>
                        </div>
                        <div className="h-px bg-gray-200" />
                        <div className="flex items-center justify-between">
                          <span className="text-base font-bold" style={{ color: colors.brand.primary }}>Total Monthly</span>
                          <span className="text-2xl font-bold" style={{ color: colors.brand.secondary }}>
                            ${total.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                {/* Actions */}
                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 px-8 py-4 rounded-xl font-bold border-2 transition-all duration-300"
                    style={{ borderColor: colors.brand.primary, color: colors.brand.primary, backgroundColor: '#ffffff' }}
                  >
                    Back
                  </button>
                  <button
                    onClick={handleDownloadProposal}
                    className="flex-1 px-8 py-4 rounded-xl text-white font-bold shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ background: gradients.primary }}
                  >
                    <Download className="w-5 h-5" />
                    Download Proposal
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}