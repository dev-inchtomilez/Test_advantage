import { motion } from 'motion/react';
import { Check, ArrowRight, Zap, Rocket, Building2 } from 'lucide-react';
import { Link } from 'react-router';

export function PricingTransparency() {
  const packages = [
    {
      name: 'Starter',
      icon: <Zap className="w-8 h-8 text-white" />,
      priceRange: '₹3-5L',
      period: '/month',
      description: 'Perfect for startups and small businesses ready to establish their market presence',
      features: [
        'Brand strategy & positioning',
        '2-3 marketing channels',
        'Social media management',
        'Content marketing',
        'Monthly reporting',
        'Email support'
      ],
      idealFor: 'Startups with ₹50L-2Cr revenue',
      color: 'from-gray-700 to-gray-600'
    },
    {
      name: 'Growth',
      icon: <Rocket className="w-8 h-8 text-white" />,
      priceRange: '₹8-15L',
      period: '/month',
      description: 'For growing businesses scaling their marketing efforts across multiple channels',
      features: [
        'Everything in Starter',
        'Full-funnel strategy',
        '4-6 marketing channels',
        'SEO & paid advertising',
        'Marketing automation',
        'Weekly reporting',
        'Dedicated account manager',
        'Priority support'
      ],
      idealFor: 'Companies with ₹2-10Cr revenue',
      color: 'from-gray-900 to-gray-800',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: <Building2 className="w-8 h-8 text-white" />,
      priceRange: '₹20L+',
      period: '/month',
      description: 'Comprehensive marketing systems for established companies with complex needs',
      features: [
        'Everything in Growth',
        'Multi-brand management',
        'Advanced analytics & BI',
        'Custom integrations',
        'Executive dashboards',
        'Dedicated team',
        'Quarterly strategy reviews',
        '24/7 support'
      ],
      idealFor: 'Enterprises with ₹10Cr+ revenue',
      color: 'from-gray-800 to-gray-700'
    }
  ];

  return (
    <section className="section-transparent px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full mb-3 shadow-sm">
            <span className="text-xs font-semibold text-gray-900">Transparent Pricing</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Investment Ranges
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Clear pricing based on your business size and marketing needs—no hidden costs or surprises
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`card-minimal overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                pkg.popular ? 'ring-2 ring-gray-900 scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="bg-gray-900 text-white text-center py-2 text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-6 shadow-lg`}>
                  {pkg.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">{pkg.priceRange}</span>
                    <span className="text-gray-600">{pkg.period}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <p className="text-xs font-semibold text-gray-900 mb-1">Ideal for:</p>
                  <p className="text-sm text-gray-600">{pkg.idealFor}</p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className={`w-full px-6 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 hover:scale-[1.02] ${
                    pkg.popular
                      ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="card-minimal p-8 text-center bg-gradient-to-br from-gray-50 to-white"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Not sure which package is right for you?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every business is unique. We'll recommend the right package based on your goals, 
            current marketing maturity, and growth objectives.
          </p>
          <Link
            to="/configurator"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] shadow-lg"
          >
            Use Package Configurator
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Fine Print */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-gray-500">
            * Pricing shown is indicative and may vary based on specific requirements, industry complexity, 
            and scope of work. Final pricing determined after consultation. Minimum 3-month engagement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}