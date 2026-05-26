import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, TrendingUp, Users, Zap, BarChart3, Lightbulb } from 'lucide-react';

export function InteractiveSkillChart() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    { name: "Strategy", score: 98, icon: <Target className="w-5 h-5" />, color: "from-blue-500 to-cyan-500", description: "Data-driven strategic planning and market positioning" },
    { name: "Digital Marketing", score: 95, icon: <TrendingUp className="w-5 h-5" />, color: "from-purple-500 to-pink-500", description: "SEO, PPC, social media, and content marketing excellence" },
    { name: "Brand Development", score: 92, icon: <Lightbulb className="w-5 h-5" />, color: "from-yellow-500 to-orange-500", description: "Complete brand identity and positioning systems" },
    { name: "Analytics", score: 96, icon: <BarChart3 className="w-5 h-5" />, color: "from-green-500 to-emerald-500", description: "Advanced analytics, reporting, and performance tracking" },
    { name: "Lead Generation", score: 94, icon: <Users className="w-5 h-5" />, color: "from-red-500 to-rose-500", description: "Proven systems for capturing and converting leads" },
    { name: "Automation", score: 90, icon: <Zap className="w-5 h-5" />, color: "from-indigo-500 to-purple-500", description: "Marketing automation and workflow optimization" }
  ];

  return (
    <section className="section-transparent px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-full mb-6 shadow-lg"
          >
            <span className="text-sm font-semibold">Our Expertise</span>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-3"
          >
            Proven Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive marketing expertise backed by measurable results
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Skill Bars */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <span className="font-bold text-gray-900 text-lg">{skill.name}</span>
                  </div>
                  <motion.span
                    className="text-2xl font-bold text-gray-900"
                    animate={{ scale: hoveredSkill === skill.name ? 1.1 : 1 }}
                  >
                    {skill.score}%
                  </motion.span>
                </div>

                {/* Progress Bar */}
                <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                  </motion.div>
                </div>

                {/* Description on Hover */}
                <AnimatePresence>
                  {hoveredSkill === skill.name && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-gray-600 mt-2 pl-13"
                    >
                      {skill.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Visual Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="card-minimal p-12 text-center relative overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-900 rounded-full"
                      style={{
                        width: `${(i + 1) * 60}px`,
                        height: `${(i + 1) * 60}px`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Center Stats */}
              <div className="relative z-10 mb-8">
                <motion.div
                  animate={{ rotate: hoveredSkill ? 360 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full shadow-2xl mb-6"
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-1">94</div>
                    <div className="text-xs text-gray-300">Average</div>
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Industry-Leading Expertise
                </h3>
                <p className="text-gray-600">
                  Across all marketing disciplines
                </p>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-3 justify-center relative z-10">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`px-4 py-2 bg-gradient-to-r ${skill.color} text-white rounded-full text-sm font-bold shadow-md cursor-default transition-all duration-300 ${
                      hoveredSkill === skill.name ? 'scale-110 shadow-xl' : ''
                    }`}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Want to see how our expertise can transform your marketing?
          </p>
          <a
            href="/contact"
            className="btn-minimal btn-primary inline-flex items-center gap-2"
          >
            Book a Free Consultation
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}