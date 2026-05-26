import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AsymmetricHeroProps {
  badge?: string;
  title: string;
  highlightText?: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  image: string;
  imageAlt: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export function AsymmetricHero({
  badge,
  title,
  highlightText,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  image,
  imageAlt,
  stats
}: AsymmetricHeroProps) {
  return (
    <section className="min-h-[90vh] relative overflow-hidden pt-32 pb-16">
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-black rounded-full opacity-10 blur-3xl float-animation" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-40 left-20 w-72 h-72 bg-black rounded-full opacity-10 blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {badge && (
              <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-6">
                <span className="text-sm font-semibold text-gray-900">{badge}</span>
              </div>
            )}
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
              {highlightText && (
                <>
                  <br />
                  <span className="block mt-2 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent">
                    {highlightText}
                  </span>
                </>
              )}
            </h1>
            
            <p className="text-sm text-gray-600 mb-6 leading-relaxed max-w-xl">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to={primaryButtonLink}
                className="btn-minimal btn-primary inline-flex items-center justify-center gap-2 text-base px-8 py-4"
              >
                {primaryButtonText}
                <ArrowRight className="w-5 h-5" />
              </Link>
              {secondaryButtonText && secondaryButtonLink && (
                <Link
                  to={secondaryButtonLink}
                  className="btn-minimal btn-secondary inline-flex items-center justify-center gap-2 text-base px-8 py-4"
                >
                  {secondaryButtonText}
                </Link>
              )}
            </div>

            {/* Stats */}
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    <div className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating Card */}
            {stats && stats.length > 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stats[2].value}</div>
                    <div className="text-sm text-gray-600">{stats[2].label}</div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}