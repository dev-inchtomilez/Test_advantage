import { motion } from 'motion/react';
import { Check, X, Star, Zap } from 'lucide-react';

export function ComparisonTable() {
  const features = [
    {
      category: 'Cost Efficiency',
      advantEdge: { value: '₹4-8L/month', highlight: true },
      traditional: { value: '₹15-25L/month', highlight: false },
      inHouse: { value: '₹20-40L/month', highlight: false }
    },
    {
      category: 'Setup Time',
      advantEdge: { value: '1 week', highlight: true },
      traditional: { value: '4-8 weeks', highlight: false },
      inHouse: { value: '3-6 months', highlight: false }
    },
    {
      category: 'Team Expertise',
      advantEdge: { value: '15+ specialists', highlight: true },
      traditional: { value: '3-5 generalists', highlight: false },
      inHouse: { value: '1-2 people', highlight: false }
    },
    {
      category: 'Strategic Planning',
      advantEdge: { icon: <Check className="w-6 h-6 text-white" />, highlight: true },
      traditional: { icon: <Check className="w-6 h-6 text-gray-400" />, highlight: false },
      inHouse: { icon: <X className="w-6 h-6 text-gray-400" />, highlight: false }
    },
    {
      category: 'Multi-Channel Execution',
      advantEdge: { icon: <Check className="w-6 h-6 text-white" />, highlight: true },
      traditional: { icon: <Check className="w-6 h-6 text-gray-400" />, highlight: false },
      inHouse: { icon: <X className="w-6 h-6 text-gray-400" />, highlight: false }
    },
    {
      category: 'ROI Guarantee',
      advantEdge: { icon: <Check className="w-6 h-6 text-white" />, highlight: true },
      traditional: { icon: <X className="w-6 h-6 text-gray-400" />, highlight: false },
      inHouse: { icon: <X className="w-6 h-6 text-gray-400" />, highlight: false }
    },
    {
      category: 'Advanced Analytics',
      advantEdge: { icon: <Check className="w-6 h-6 text-white" />, highlight: true },
      traditional: { icon: <X className="w-6 h-6 text-gray-400" />, highlight: false },
      inHouse: { icon: <X className="w-6 h-6 text-gray-400" />, highlight: false }
    },
    {
      category: 'Scalability',
      advantEdge: { icon: <Check className="w-6 h-6 text-white" />, highlight: true },
      traditional: { icon: <Check className="w-6 h-6 text-gray-400" />, highlight: false },
      inHouse: { icon: <X className="w-6 h-6 text-gray-400" />, highlight: false }
    },
    {
      category: 'Latest Tools & Tech',
      advantEdge: { icon: <Check className="w-6 h-6 text-white" />, highlight: true },
      traditional: { icon: <X className="w-6 h-6 text-gray-400" />, highlight: false },
      inHouse: { icon: <X className="w-6 h-6 text-gray-400" />, highlight: false }
    },
    {
      category: 'Ongoing Optimization',
      advantEdge: { icon: <Check className="w-6 h-6 text-white" />, highlight: true },
      traditional: { icon: <Check className="w-6 h-6 text-gray-400" />, highlight: false },
      inHouse: { icon: <X className="w-6 h-6 text-gray-400" />, highlight: false }
    }
  ];

  return (
    <section className="section-transparent px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full mb-3 shadow-sm">
            <span className="text-xs font-semibold text-gray-900">The Smart Choice</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Why Choose AdvantEdge?
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Compare our strategic partnership model with traditional agencies and in-house teams
          </p>
        </motion.div>

        {/* Mobile View - Cards */}
        <div className="lg:hidden space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-minimal bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                <Star className="w-4 h-4 fill-white" />
                <span className="text-xs font-bold">BEST VALUE</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-6">AdvantEdge</h3>
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                  <span className="text-sm opacity-90">{feature.category}</span>
                  <div className="font-bold">
                    {feature.advantEdge.value || feature.advantEdge.icon}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-minimal p-4"
            >
              <h3 className="font-bold text-lg mb-4 text-gray-900">Traditional Agency</h3>
              <div className="space-y-3">
                {features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="text-xs text-gray-600">
                    {feature.traditional.value || <X className="w-4 h-4" />}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-minimal p-4"
            >
              <h3 className="font-bold text-lg mb-4 text-gray-900">In-House Team</h3>
              <div className="space-y-3">
                {features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="text-xs text-gray-600">
                    {feature.inHouse.value || <X className="w-4 h-4" />}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop View - Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="hidden lg:block overflow-hidden rounded-3xl border border-gray-200 shadow-xl"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-8 py-6 text-left text-sm font-semibold text-gray-900">
                  Feature
                </th>
                <th className="px-8 py-6 text-center bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
                  <div className="absolute top-2 right-2">
                    <div className="flex items-center gap-1 px-2 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                      <Star className="w-3 h-3 fill-white" />
                      <span className="text-xs font-bold">RECOMMENDED</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5" />
                    <span className="text-lg font-bold">AdvantEdge</span>
                  </div>
                </th>
                <th className="px-8 py-6 text-center text-sm font-semibold text-gray-900">
                  Traditional Agency
                </th>
                <th className="px-8 py-6 text-center text-sm font-semibold text-gray-900">
                  In-House Team
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-gray-100 transition-colors`}
                >
                  <td className="px-8 py-5 text-sm font-medium text-gray-900 border-b border-gray-200">
                    {feature.category}
                  </td>
                  <td className="px-8 py-5 text-center bg-gradient-to-br from-gray-900/5 to-gray-800/5 border-b border-gray-200">
                    <div className="flex items-center justify-center">
                      {feature.advantEdge.value ? (
                        <span className="font-bold text-gray-900">{feature.advantEdge.value}</span>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
                          {feature.advantEdge.icon}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-8 py-5 text-center border-b border-gray-200">
                    <div className="flex items-center justify-center">
                      {feature.traditional.value ? (
                        <span className="text-gray-600">{feature.traditional.value}</span>
                      ) : (
                        feature.traditional.icon
                      )}
                    </div>
                  </td>
                  <td className="px-8 py-5 text-center border-b border-gray-200">
                    <div className="flex items-center justify-center">
                      {feature.inHouse.value ? (
                        <span className="text-gray-600">{feature.inHouse.value}</span>
                      ) : (
                        feature.inHouse.icon
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">Bottom line:</span> Get enterprise-level 
            marketing expertise at a fraction of the cost with faster setup and guaranteed results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}