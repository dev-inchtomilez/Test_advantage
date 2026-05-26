import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';
import { Users, TrendingUp, Award, Target, DollarSign } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
  color: string;
}

function AnimatedCounter({ value, suffix, prefix = '' }: { value: number; suffix: string; prefix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + Math.floor(latest).toLocaleString('en-IN') + suffix;
      }
    });
  }, [springValue, suffix, prefix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

function StatItem({ icon, value, suffix, label, prefix, color }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
      className="card-minimal p-8 hover:shadow-2xl transition-all duration-500 group text-center"
    >
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
        <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
      </div>
      <p className="text-sm sm:text-base text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
}

export function LiveStatsCounter() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      value: 250,
      suffix: '+',
      label: 'Happy Clients',
      color: 'from-gray-900 to-gray-800'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      value: 450,
      suffix: 'Cr+',
      prefix: '₹',
      label: 'Revenue Generated',
      color: 'from-gray-800 to-gray-700'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      value: 340,
      suffix: '%',
      label: 'Average ROI',
      color: 'from-gray-700 to-gray-600'
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      value: 15,
      suffix: '+',
      label: 'Expert Team Members',
      color: 'from-gray-600 to-gray-500'
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      color: 'from-gray-900 to-gray-800'
    }
  ];

  return (
    <section className="section-transparent px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full mb-3 shadow-sm">
            <span className="text-xs font-semibold text-gray-900">Real Results</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Numbers That Matter
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Every metric represents real businesses we've helped grow—from startups to enterprises
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 italic">
            * All metrics updated in real-time based on active client engagements and results
          </p>
        </motion.div>
      </div>
    </section>
  );
}