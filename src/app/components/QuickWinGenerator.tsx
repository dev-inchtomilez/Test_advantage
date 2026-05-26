import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Zap, Target, ArrowRight, Lightbulb, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';

export function QuickWinGenerator() {
  const [industry, setIndustry] = useState('');
  const [goal, setGoal] = useState('');
  const [showResults, setShowResults] = useState(false);

  const quickWins: Record<string, Record<string, string[]>> = {
    technology: {
      leads: [
        'Launch a LinkedIn thought leadership campaign targeting CTOs with 5 high-value posts per week',
        'Create a free ROI calculator tool and promote it through targeted PPC ads',
        'Start a webinar series on industry pain points with lead capture forms'
      ],
      sales: [
        'Implement retargeting campaigns for website visitors who viewed pricing pages',
        'Create case study landing pages optimized for bottom-funnel keywords',
        'Set up automated email sequences for trial users with personalized demos'
      ],
      awareness: [
        'Guest post on top 10 SaaS industry blogs with backlinks to your content hub',
        'Launch a podcast interviewing industry leaders and promote on social media',
        'Create shareable infographics about industry trends and distribute via LinkedIn'
      ]
    },
    healthcare: {
      leads: [
        'Create patient education videos and gate them behind email capture forms',
        'Run local Google Ads targeting specific treatment-related searches',
        'Partner with insurance companies for co-branded patient acquisition campaigns'
      ],
      sales: [
        'Implement online appointment booking with automated follow-up sequences',
        'Create treatment package landing pages with clear pricing and benefits',
        'Run seasonal health check-up promotions with limited-time offers'
      ],
      awareness: [
        'Start a health tips blog optimized for local SEO and patient concerns',
        'Launch community health workshops and promote through Facebook Local',
        'Create doctor profile videos and share on YouTube and social media'
      ]
    },
    education: {
      leads: [
        'Offer free trial classes or demo sessions with enrollment incentives',
        'Create scholarship programs and promote through education portals',
        'Partner with schools for exclusive course offerings and referral programs'
      ],
      sales: [
        'Implement early bird discounts with urgency-driven email campaigns',
        'Create student success stories with video testimonials and conversion-focused CTAs',
        'Launch flexible payment plans prominently featured on landing pages'
      ],
      awareness: [
        'Start a YouTube channel with free educational content in your niche',
        'Host free webinars on trending topics and promote through education forums',
        'Create career guidance content targeting parents on WhatsApp and Facebook'
      ]
    },
    retail: {
      leads: [
        'Launch a first-purchase discount popup to capture email addresses',
        'Create a loyalty program with points for email signups and referrals',
        'Run Instagram contests requiring email entry and user-generated content'
      ],
      sales: [
        'Implement cart abandonment emails with time-limited discount codes',
        'Create urgency with low-stock indicators and countdown timers on product pages',
        'Launch flash sales promoted through SMS and push notifications'
      ],
      awareness: [
        'Start an Instagram Reels series showcasing product styling and usage tips',
        'Partner with micro-influencers for authentic product reviews',
        'Create seasonal lookbooks and share across Pinterest and Facebook'
      ]
    },
    finance: {
      leads: [
        'Create a free financial health assessment tool with personalized recommendations',
        'Launch educational webinars on investment strategies with CTA for consultations',
        'Run LinkedIn ads targeting professionals with wealth management content'
      ],
      sales: [
        'Implement comparison calculators showing your rates vs. competitors',
        'Create trust-building content like security certifications and client testimonials',
        'Offer limited-time reduced fees for new account openings'
      ],
      awareness: [
        'Start a financial literacy blog with SEO-optimized content for common queries',
        'Launch a podcast on personal finance tips featuring expert guests',
        'Create animated explainer videos for complex financial products'
      ]
    }
  };

  const handleGenerate = () => {
    if (industry && goal) {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setIndustry('');
    setGoal('');
    setShowResults(false);
  };

  const ideas = industry && goal ? quickWins[industry]?.[goal] || [] : [];

  return (
    <section className="section-transparent px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full opacity-[0.03] blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-gray-600 to-gray-400 rounded-full opacity-[0.03] blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full mb-3 shadow-sm">
            <span className="text-xs font-semibold text-gray-900">Quick Win Generator</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Get 3 Free Marketing Ideas
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Instant, actionable marketing strategies tailored to your business and goals
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="card-minimal p-8 lg:p-12"
        >
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                {/* Industry Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-4">
                    1. Select Your Industry
                  </label>
                  <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                    {['technology', 'healthcare', 'education', 'retail', 'finance'].map((ind) => (
                      <button
                        key={ind}
                        onClick={() => setIndustry(ind)}
                        className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                          industry === ind
                            ? 'bg-gray-900 text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                      >
                        {ind.charAt(0).toUpperCase() + ind.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Goal Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-4">
                    2. Choose Your Primary Goal
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: 'leads', label: 'Generate Leads', icon: <Target className="w-5 h-5" /> },
                      { value: 'sales', label: 'Increase Sales', icon: <TrendingUp className="w-5 h-5" /> },
                      { value: 'awareness', label: 'Build Awareness', icon: <Zap className="w-5 h-5" /> }
                    ].map((g) => (
                      <button
                        key={g.value}
                        onClick={() => setGoal(g.value)}
                        className={`px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex flex-col items-center gap-2 ${
                          goal === g.value
                            ? 'bg-gray-900 text-white shadow-xl scale-105'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                      >
                        {g.icon}
                        <span className="text-sm">{g.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  disabled={!industry || !goal}
                  className="w-full px-8 py-5 bg-gray-900 text-white rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] shadow-xl flex items-center justify-center gap-3 group"
                >
                  <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  Generate My Marketing Ideas
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                {/* Header */}
                <div className="text-center pb-6 border-b border-gray-200">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full mb-4">
                    <Sparkles className="w-5 h-5" />
                    <span className="font-bold">Your Personalized Ideas</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {industry.charAt(0).toUpperCase() + industry.slice(1)} • {goal.charAt(0).toUpperCase() + goal.slice(1)}
                  </h3>
                  <p className="text-gray-600">3 quick-win strategies you can implement this week</p>
                </div>

                {/* Ideas List */}
                <div className="space-y-4">
                  {ideas.map((idea, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15, duration: 0.5 }}
                      className="card-minimal bg-gradient-to-br from-gray-50 to-white p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-900 leading-relaxed flex-1">{idea}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  <Link
                    to="/contact"
                    className="flex-1 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] shadow-lg inline-flex items-center justify-center gap-2"
                  >
                    Get Full Strategy & Implementation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={handleReset}
                    className="px-8 py-4 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
                  >
                    Generate New Ideas
                  </button>
                </div>

                {/* Disclaimer */}
                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    Want more personalized strategies? Our team can create a custom 90-day marketing 
                    plan specific to your business goals and budget.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}