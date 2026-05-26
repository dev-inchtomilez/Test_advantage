import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Target, Users, Rocket, TrendingUp, Award } from 'lucide-react';

export function ClientMilestones() {
  const [counts, setCounts] = useState({
    campaigns: 0,
    leads: 0,
    revenue: 0,
    clients: 0
  });

  const targets = {
    campaigns: 1247,
    leads: 45000,
    revenue: 125,
    clients: 247
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        campaigns: Math.floor(targets.campaigns * progress),
        leads: Math.floor(targets.leads * progress),
        revenue: Math.floor(targets.revenue * progress),
        clients: Math.floor(targets.clients * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const milestones = [
    {
      icon: <Rocket className="w-8 h-8" />,
      count: counts.campaigns,
      label: "Campaigns Launched",
      suffix: "+",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      count: counts.leads,
      label: "Leads Generated",
      suffix: "+",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      count: counts.revenue,
      label: "Crores in Revenue",
      suffix: "Cr+",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      count: counts.clients,
      label: "Happy Clients",
      suffix: "+",
      color: "from-orange-500 to-red-500"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      text: "Average 287% ROI across all campaigns",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      text: "98% client retention rate",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "3.5x average lead volume increase",
      color: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <section className="section-transparent px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6"
          >
            <Trophy className="w-4 h-4 mr-2 text-white" />
            <span className="text-sm font-semibold text-white">Our Impact</span>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl font-bold text-white mb-3"
          >
            Milestones That Matter
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-300 max-w-3xl mx-auto"
          >
            Real numbers from real client success stories
          </motion.p>
        </div>

        {/* Milestone Counter Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center group hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-2xl mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {milestone.icon}
              </div>
              <motion.div
                className="text-5xl sm:text-6xl font-bold text-white mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 100 }}
              >
                {milestone.count.toLocaleString('en-IN')}
                <span className="text-3xl">{milestone.suffix}</span>
              </motion.div>
              <p className="text-gray-300 font-medium">
                {milestone.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-start gap-4 group hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {achievement.icon}
              </div>
              <p className="text-white font-medium leading-relaxed">
                {achievement.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6">
            Ready to become our next success story?
          </p>
          <a
            href="/contact"
            className="btn-minimal bg-white text-gray-900 hover:bg-gray-100 inline-flex items-center gap-2 shadow-xl"
          >
            Start Your Journey
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}