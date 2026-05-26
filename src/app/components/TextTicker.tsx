import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Target, Award, Zap, Shield } from 'lucide-react';

interface TextTickerProps {
  items?: string[];
  speed?: number;
  variant?: 'default' | 'gradient' | 'outlined';
}

export function TextTicker({ 
  items = [
    'Strategic Marketing That Delivers Results',
    'Integrated Brand Solutions',
    'Data-Driven Performance',
    'Long-Term Partnerships',
    'Execution Excellence',
    'Measurable Growth',
  ],
  speed = 30,
  variant = 'default'
}: TextTickerProps) {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  const icons = [Sparkles, TrendingUp, Target, Award, Zap, Shield];

  return (
    <div className={`
      relative overflow-hidden py-3
      ${variant === 'gradient' ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900' : ''}
      ${variant === 'outlined' ? 'border-y border-gray-200 bg-transparent' : ''}
      ${variant === 'default' ? 'bg-transparent' : ''}
    `}>
      {/* Gradient Overlays for fade effect - Made transparent to show mesh background */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" 
           style={{ 
             background: variant === 'gradient' 
               ? 'linear-gradient(to right, rgb(17, 24, 39), transparent)' 
               : 'linear-gradient(to right, rgba(255, 255, 255, 0.95), transparent)'
           }} 
      />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
           style={{ 
             background: variant === 'gradient' 
               ? 'linear-gradient(to left, rgb(17, 24, 39), transparent)' 
               : 'linear-gradient(to left, rgba(255, 255, 255, 0.95), transparent)'
           }} 
      />

      {/* Scrolling Content */}
      <motion.div
        className="flex gap-8 items-center whitespace-nowrap"
        animate={{
          x: [0, -100 * items.length + '%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div
              key={index}
              className={`
                flex items-center gap-3 px-6
                ${variant === 'gradient' ? 'text-white' : 'text-gray-900'}
              `}
            >
              <Icon className={`
                w-4 h-4 flex-shrink-0
                ${variant === 'gradient' ? 'text-gray-300' : 'text-gray-600'}
              `} />
              <span className="font-semibold text-sm tracking-tight">
                {item}
              </span>
              <span className={`
                w-1 h-1 rounded-full flex-shrink-0
                ${variant === 'gradient' ? 'bg-gray-500' : 'bg-gray-400'}
              `} />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

// Alternative vertical variant
export function VerticalTextTicker({ 
  items = [
    'Strategic Marketing',
    'Brand Development',
    'Digital Excellence',
    'Growth Focused',
  ],
  speed = 10,
}: TextTickerProps) {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden h-12 bg-transparent border-y border-gray-200">
      <motion.div
        className="flex flex-col"
        animate={{
          y: [0, -100 * items.length + '%'],
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="h-12 flex items-center justify-center text-gray-900 font-semibold"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}