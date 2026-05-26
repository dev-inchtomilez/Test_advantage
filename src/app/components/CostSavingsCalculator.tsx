import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingDown, CheckCircle2, ArrowRight, DollarSign } from 'lucide-react';

export function CostSavingsCalculator() {
  const [currentSpend, setCurrentSpend] = useState(50000);
  const [teamSize, setTeamSize] = useState(2);

  const inHouseCost = (teamSize * 60000 * 12) + (currentSpend * 12); // ₹60k/month per person
  const advantEdgeCost = 120000 * 12; // ₹1.2L/month average
  const savings = inHouseCost - advantEdgeCost;
  const savingsPercent = Math.round((savings / inHouseCost) * 100);

  return (
    <section className="section-transparent px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full mb-6 shadow-lg"
          >
            <Calculator className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Cost Analysis</span>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-3"
          >
            Calculate Your Savings
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-600 max-w-3xl mx-auto"
          >
            See how much you can save vs. building an in-house marketing team
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-minimal p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Your Current Situation
            </h3>

            <div className="space-y-6">
              {/* Monthly Ad Spend */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  Monthly Marketing Spend
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">
                    ₹
                  </span>
                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="10000"
                    value={currentSpend}
                    onChange={(e) => setCurrentSpend(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500">₹10,000</span>
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{currentSpend.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm text-gray-500">₹5,00,000</span>
                </div>
              </div>

              {/* Team Size */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  In-House Team Size
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500">1 person</span>
                  <span className="text-2xl font-bold text-gray-900">
                    {teamSize} {teamSize === 1 ? 'person' : 'people'}
                  </span>
                  <span className="text-sm text-gray-500">10 people</span>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Annual Salaries:</span>
                  <span className="font-bold text-gray-900">
                    ₹{(teamSize * 60000 * 12).toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Annual Ad Spend:</span>
                  <span className="font-bold text-gray-900">
                    ₹{(currentSpend * 12).toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tools & Software:</span>
                  <span className="font-bold text-gray-900">₹2,40,000</span>
                </div>
                <div className="pt-3 border-t border-gray-200 flex justify-between">
                  <span className="font-bold text-gray-900">Total Annual Cost:</span>
                  <span className="text-xl font-bold text-red-600">
                    ₹{inHouseCost.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Savings Card */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <TrendingDown className="w-4 h-4" />
                <span className="text-sm font-bold">Your Potential Savings</span>
              </div>

              <div className="mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                  className="text-6xl sm:text-7xl font-bold mb-2"
                >
                  ₹{Math.max(0, savings).toLocaleString('en-IN')}
                </motion.div>
                <p className="text-xl text-green-100">per year with AdvantEdge</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-green-100">Savings Percentage</span>
                  <span className="text-3xl font-bold">{Math.max(0, savingsPercent)}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.max(0, savingsPercent)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-white h-3 rounded-full"
                  />
                </div>
              </div>

              <div className="space-y-3 text-green-50">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>No hiring or onboarding costs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>No employee benefits or overhead</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Access to full marketing stack</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Senior-level strategy included</span>
                </div>
              </div>
            </div>

            {/* AdvantEdge Cost */}
            <div className="card-minimal p-6">
              <h4 className="font-bold text-gray-900 mb-4">AdvantEdge Partnership</h4>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-gray-900">₹14.4L</span>
                <span className="text-gray-600">/ year</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Full-service marketing with strategy, execution, and ongoing optimization
              </p>
              <a
                href="/contact"
                className="btn-minimal btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-500 text-center">
              * Estimates based on industry averages. Actual costs may vary.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}