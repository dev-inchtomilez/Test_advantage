import { motion } from 'motion/react';
import { Award, Shield, Star, CheckCircle2, TrendingUp, Globe } from 'lucide-react';
import { GlassCard } from './primitives';

export function TrustBadges() {
  const badges = [
    {
      icon: <Award className="w-6 h-6 text-gray-900" />,
      title: 'Google Partner',
      description: 'Certified Excellence'
    },
    {
      icon: <Shield className="w-6 h-6 text-gray-900" />,
      title: 'ISO 9001:2015',
      description: 'Quality Certified'
    },
    {
      icon: <Star className="w-6 h-6 text-gray-900" />,
      title: 'Top 10 Agency',
      description: 'India 2025'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-gray-900" />,
      title: 'Meta Partner',
      description: 'Business Solutions'
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-gray-900" />,
      title: 'Startup India',
      description: 'Recognized'
    },
    {
      icon: <Globe className="w-6 h-6 text-gray-900" />,
      title: 'Best Marketing',
      description: 'Award 2025'
    }
  ];

  return (
    <section className="section-transparent px-4 sm:px-6 lg:px-8 bg-transparent py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-3 py-1.5 bg-white/70 backdrop-blur-md border border-gray-200/60 rounded-full mb-3 shadow-sm">
            <span className="text-xs font-semibold text-gray-900">Trusted & Certified</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Industry Recognition
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Trusted by growth-focused B2B brands across global markets
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <GlassCard variant="base" rounded="lg" padding="base" hover className="text-center h-full group">
                <div className="icon-minimal mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {badge.icon}
                </div>
                <h3 className="font-bold text-sm text-gray-900 mb-1">{badge.title}</h3>
                <p className="text-xs text-gray-600">{badge.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}