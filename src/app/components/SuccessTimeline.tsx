import { motion } from 'motion/react';
import { Calendar, Target, Rocket, TrendingUp, BarChart3 } from 'lucide-react';

export function SuccessTimeline() {
  const timeline = [
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      phase: 'Week 1',
      title: 'Strategy Session',
      description: 'Deep-dive discovery, goal alignment, and strategic roadmap creation',
      color: 'from-gray-900 to-gray-800'
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      phase: 'Week 2-4',
      title: 'Foundation Building',
      description: 'Brand positioning, messaging framework, and channel setup',
      color: 'from-gray-800 to-gray-700'
    },
    {
      icon: <Rocket className="w-6 h-6 text-white" />,
      phase: 'Week 5-8',
      title: 'Campaign Launch',
      description: 'Execute multi-channel campaigns with real-time optimization',
      color: 'from-gray-700 to-gray-600'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      phase: 'Month 3-6',
      title: 'Optimization & Scale',
      description: 'Data analysis, A/B testing, and performance amplification',
      color: 'from-gray-600 to-gray-500'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      phase: 'Month 6+',
      title: 'Sustained Growth',
      description: 'Continuous improvement, expansion, and strategic evolution',
      color: 'from-gray-500 to-gray-400'
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
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full mb-3 shadow-sm">
            <span className="text-xs font-semibold text-gray-900">Your Journey</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Success Path with AdvantEdge
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            A proven roadmap from strategy to sustained growth—with clear milestones at every stage
          </p>
        </motion.div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-400" />
            
            <div className="grid grid-cols-5 gap-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative"
                >
                  {/* Icon Circle */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} mx-auto mb-6 flex items-center justify-center shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>

                  {/* Content Card */}
                  <div className="card-minimal p-6 hover:shadow-xl transition-all duration-300 h-64">
                    <div className="text-sm font-bold text-gray-900 mb-2 bg-gray-100 px-3 py-1 rounded-full inline-block">
                      {item.phase}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="lg:hidden space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative flex gap-4"
            >
              {/* Icon Circle */}
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                {item.icon}
              </div>

              {/* Content Card */}
              <div className="card-minimal p-5 flex-1 hover:shadow-xl transition-all duration-300">
                <div className="text-xs font-bold text-gray-900 mb-2 bg-gray-100 px-3 py-1 rounded-full inline-block">
                  {item.phase}
                </div>
                <h3 className="font-bold text-base text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>

              {/* Vertical Line */}
              {index < timeline.length - 1 && (
                <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-transparent -z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}