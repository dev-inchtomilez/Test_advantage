import { motion } from 'motion/react';
import { Award, Trophy, Star, Medal, Target, Zap } from 'lucide-react';

export function AwardsShowcase() {
  const awards = [
    {
      icon: <Trophy className="w-8 h-8" />,
      year: "2025",
      title: "Best Marketing Agency",
      organization: "India Marketing Awards",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      year: "2024",
      title: "Excellence in Digital Strategy",
      organization: "APAC Business Excellence",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      year: "2024",
      title: "Top 10 Innovative Agencies",
      organization: "Forbes India",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Medal className="w-8 h-8" />,
      year: "2023",
      title: "B2B Marketing Excellence",
      organization: "Digital Marketing Institute",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      year: "2023",
      title: "Client Success Award",
      organization: "Agency Excellence Awards",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      year: "2023",
      title: "Fastest Growing Agency",
      organization: "Entrepreneur India",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const certifications = [
    "Google Partner",
    "Meta Business Partner",
    "HubSpot Certified",
    "AWS Partner",
    "LinkedIn Marketing Partner"
  ];

  return (
    <section className="section-transparent px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full mb-6 shadow-lg"
          >
            <Trophy className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Industry Recognition</span>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-3"
          >
            Awards & Recognition
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-600 max-w-3xl mx-auto"
          >
            Recognized by industry leaders for excellence in marketing strategy and execution
          </motion.p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-minimal group hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${award.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${award.color} rounded-2xl mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {award.icon}
                </div>

                {/* Year Badge */}
                <div className="inline-block px-3 py-1 bg-gray-900 text-white rounded-full text-xs font-bold mb-4">
                  {award.year}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {award.organization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Certified Partners
            </h3>
            <p className="text-sm text-gray-300 mb-6 max-w-2xl mx-auto">
              Official partners with the world's leading marketing and technology platforms
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300 cursor-default"
                >
                  {cert}
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">15+</div>
                <div className="text-sm text-gray-400">Industry Awards</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">8+</div>
                <div className="text-sm text-gray-400">Certifications</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-gray-400">Client Success</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">247+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}