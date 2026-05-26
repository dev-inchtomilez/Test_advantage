import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

export function ROICalculator() {
  const [budget, setBudget] = useState(5);
  const [industry, setIndustry] = useState('technology');

  // ROI multipliers by industry
  const roiMultipliers: Record<string, number> = {
    technology: 3.4,
    healthcare: 3.1,
    education: 2.8,
    retail: 3.7,
    finance: 3.2
  };

  const multiplier = roiMultipliers[industry];
  const monthlyBudget = budget * 100000; // Convert lakhs to rupees
  const projectedRevenue = monthlyBudget * multiplier;
  const revenueIncrease = projectedRevenue - monthlyBudget;

  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(1)}Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)}L`;
    } else {
      return `₹${(value / 1000).toFixed(0)}K`;
    }
  };

  return (
    <section className="section-transparent px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full opacity-[0.03] blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-gray-600 to-gray-400 rounded-full opacity-[0.03] blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-full mb-3 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-gray-900 mr-2" />
            <span className="text-xs font-semibold text-gray-900">ROI Calculator</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Calculate Your Potential ROI
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            See how AdvantEdge can transform your marketing investment into measurable revenue growth
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="card-minimal p-8 lg:p-12 hover:shadow-2xl transition-all duration-500"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Inputs */}
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-4">
                  Your Monthly Marketing Budget
                </label>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
                  />
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gray-900 mb-2">
                      {formatCurrency(monthlyBudget)}
                    </div>
                    <div className="text-sm text-gray-600">per month</div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-4">
                  Your Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl font-semibold text-gray-900 focus:border-gray-900 focus:outline-none transition-colors hover:border-gray-400 cursor-pointer"
                >
                  <option value="technology">Technology & SaaS</option>
                  <option value="healthcare">Healthcare & Medical</option>
                  <option value="education">Education & EdTech</option>
                  <option value="retail">Retail & E-Commerce</option>
                  <option value="finance">Financial Services</option>
                </select>
              </div>
            </div>

            {/* Right - Results */}
            <div className="flex flex-col justify-center">
              <div className="card-minimal bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold opacity-90">Projected Results</h3>
                  <Sparkles className="w-6 h-6" />
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-sm opacity-70 mb-2">Potential Revenue Increase</div>
                    <div className="text-4xl font-bold flex items-baseline gap-2">
                      {formatCurrency(revenueIncrease)}
                      <span className="text-sm opacity-70">/month</span>
                    </div>
                  </div>

                  <div className="h-px bg-white/20" />

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm opacity-70 mb-1">ROI Multiplier</div>
                      <div className="text-3xl font-bold">{multiplier}x</div>
                    </div>
                    <div>
                      <div className="text-sm opacity-70 mb-1">Projected Revenue</div>
                      <div className="text-3xl font-bold">{formatCurrency(projectedRevenue)}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                    <TrendingUp className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed">
                      Based on actual results from 250+ clients across similar industries
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="mt-6 group px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                Get Your Custom ROI Plan
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              * Projections based on historical client data. Actual results may vary based on market conditions, 
              competition, and execution quality. ROI calculations are estimates for illustrative purposes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}