import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Zap, TrendingUp, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface IndustryHeroProps {
  industry?: 'technology' | 'healthcare' | 'education' | 'retail' | 'finance';
}

export function IndustryHero({ industry }: IndustryHeroProps) {
  const industryContent = {
    technology: {
      badge: '🚀 Tech & SaaS Solutions',
      headline: 'Scale Your SaaS with Data-Driven Marketing',
      subheadline: 'Marketing performs best when product-market fit meets growth strategy.',
      description: 'We help technology companies build scalable acquisition engines—from PLG to enterprise sales, with metrics that matter.',
      stats: [
        { value: '5.2x', label: 'Average MRR Growth' },
        { value: '68%', label: 'Lower CAC' },
        { value: '250+', label: 'Tech Clients' }
      ],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    healthcare: {
      badge: '⚕️ Healthcare Marketing',
      headline: 'Patient Acquisition Strategies That Build Trust',
      subheadline: 'Healthcare marketing requires empathy, compliance, and results.',
      description: 'We create patient-centric campaigns that drive acquisition while maintaining regulatory compliance and building lasting trust.',
      stats: [
        { value: '2.3x', label: 'Patient Growth' },
        { value: '78%', label: 'Trust Score' },
        { value: '95+', label: 'Healthcare Clients' }
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    education: {
      badge: '🎓 Education & EdTech',
      headline: 'Enroll More Students with Strategic Marketing',
      subheadline: 'Education marketing bridges aspiration and enrollment.',
      description: 'From traditional institutions to EdTech platforms—we create enrollment funnels that resonate with learners and parents.',
      stats: [
        { value: '2.6x', label: 'Enrollment Growth' },
        { value: '68%', label: 'Completion Rates' },
        { value: '72+', label: 'Education Partners' }
      ],
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    retail: {
      badge: '🛍️ Retail & E-Commerce',
      headline: 'Drive Sales with Omnichannel Marketing',
      subheadline: 'Retail marketing that connects online and offline seamlessly.',
      description: 'We build customer acquisition engines that work across every touchpoint—from social to store, with measurable ROI.',
      stats: [
        { value: '127%', label: 'Online Sales Lift' },
        { value: '34%', label: 'Store Traffic Growth' },
        { value: '110+', label: 'Retail Brands' }
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    finance: {
      badge: '💼 Financial Services',
      headline: 'Build Trust & Acquire Customers in Finance',
      subheadline: 'Financial marketing demands credibility and conversion.',
      description: 'We create compliant, trust-building campaigns for FinTech, banking, and insurance—with acquisition funnels that convert.',
      stats: [
        { value: '2.2x', label: 'Customer Growth' },
        { value: '76%', label: 'Trust Rating' },
        { value: '58+', label: 'Finance Clients' }
      ],
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    }
  };

  // Default to technology if no industry specified or invalid industry
  const content = industry && industryContent[industry] 
    ? industryContent[industry] 
    : industryContent.technology;

  return (
    <section className="min-h-screen relative overflow-hidden bg-white pt-32 pb-20">
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full opacity-[0.08] blur-3xl animate-float" style={{ animationDelay: '0s', animationDuration: '20s' }} />
      <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-gradient-to-br from-gray-600 to-gray-400 rounded-full opacity-[0.06] blur-3xl animate-float" style={{ animationDelay: '2s', animationDuration: '25s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full border border-gray-200">
                <span className="text-sm font-semibold text-gray-900">{content.badge}</span>
              </span>
            </motion.div>
            
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-[1.1] tracking-tight">
                {content.headline}
              </h1>
            </div>
            
            <div className="w-20 h-1 bg-gradient-to-r from-gray-900 to-gray-600 rounded-full" />
            
            <div className="space-y-5">
              <p className="text-xl sm:text-2xl text-gray-900 font-semibold leading-relaxed">
                {content.subheadline}
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {content.description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl inline-flex items-center justify-center gap-2"
              >
                Get Industry-Specific Strategy
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-2xl font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                View Case Studies
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {content.stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:h-[650px] h-[500px]"
          >
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl group">
              <ImageWithFallback
                src={content.image}
                alt={content.headline}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6, type: 'spring', bounce: 0.4 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold text-gray-900 mb-1">Industry Leader</div>
                    <div className="text-sm text-gray-600 font-medium">Specialized Expertise</div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full opacity-20 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-gray-600 to-gray-400 rounded-full opacity-15 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}