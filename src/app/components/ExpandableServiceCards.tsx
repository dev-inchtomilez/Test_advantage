import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon, ChevronRight } from 'lucide-react';
import { colors } from '../../styles/design-tokens';

interface ServiceCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
}

interface ExpandableServiceCardsProps {
  services: ServiceCard[];
}

export function ExpandableServiceCards({ services }: ExpandableServiceCardsProps) {
  const [expandedId, setExpandedId] = useState<string | null>(services[0]?.id || null);

  return (
    <div className="flex gap-3 h-[400px] w-full">
      {services.map((service, index) => {
        const isExpanded = expandedId === service.id;
        
        return (
          <motion.div
            key={service.id}
            className="relative cursor-pointer overflow-hidden border border-gray-200/60 rounded-2xl transition-all duration-500"
            style={{
              background: isExpanded 
                ? 'rgba(255, 255, 255, 0.75)' 
                : 'rgba(255, 255, 255, 0.55)',
              backdropFilter: 'blur(10px)',
            }}
            animate={{
              width: isExpanded ? '60%' : '80px',
            }}
            transition={{ 
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1]
            }}
            onClick={() => setExpandedId(service.id)}
            onHoverStart={() => !isExpanded && setExpandedId(service.id)}
          >
            {/* Collapsed State - Vertical Text */}
            {!isExpanded && (
              <div className="absolute inset-0 flex flex-col items-center pt-8 px-4">
                {/* Icon */}
                <motion.div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    border: '2px solid rgba(0, 0, 0, 0.1)',
                    background: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  <div style={{ color: colors.brand.secondary }} className="scale-90">
                    {service.icon}
                  </div>
                </motion.div>

                {/* Vertical Title Text */}
                <div 
                  className="text-center font-bold text-sm tracking-tight whitespace-nowrap"
                  style={{ 
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    color: colors.brand.primary,
                  }}
                >
                  {service.title}
                </div>
              </div>
            )}

            {/* Expanded State - Full Content */}
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="p-8 h-full flex flex-col overflow-y-auto"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})`,
                    }}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <div style={{ color: '#ffffff' }}>
                      {service.icon}
                    </div>
                  </motion.div>

                  <div className="flex-1">
                    <h3
                      className="text-xl font-bold leading-tight"
                      style={{ color: colors.brand.primary }}
                    >
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="mb-5"
                >
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </motion.div>

                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="space-y-2.5 mb-6"
                  >
                    <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: colors.brand.secondary }}>
                      Key Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + idx * 0.05, duration: 0.3 }}
                        >
                          <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.brand.accent }} />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Learn More Link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="mt-auto pt-4"
                >
                  <button 
                    className="text-sm font-semibold hover:underline transition-all duration-200 flex items-center gap-1 group"
                    style={{ color: colors.brand.secondary }}
                  >
                    Learn more about this service
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>

                {/* Bottom Accent Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                  style={{
                    background: `linear-gradient(90deg, ${colors.brand.secondary}, ${colors.brand.accent})`,
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                />
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}