import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, CheckCircle2, Gift, TrendingUp, FileText, Zap, ArrowRight } from 'lucide-react';
import { GlassCard } from './primitives';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const benefits = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: "Weekly marketing insights & strategies"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      text: "Exclusive templates & resources"
    },
    {
      icon: <Gift className="w-5 h-5" />,
      text: "Early access to new tools & guides"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Case studies from real campaigns"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="section-transparent px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md border border-white/60 rounded-full mb-6">
              <Mail className="w-4 h-4 text-gray-900" />
              <span className="text-sm font-semibold text-gray-900">Join 12,000+ Marketers</span>
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
              Get Marketing Gold in Your Inbox
            </h2>

            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Subscribe to our newsletter for actionable strategies, exclusive templates, and insider insights that actually move the needle.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white/70 backdrop-blur-md rounded-xl flex items-center justify-center text-gray-900 border border-white/60">
                    {benefit.icon}
                  </div>
                  <span className="text-gray-200">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-2 border-gray-900" />
                ))}
              </div>
              <span>Trusted by leading marketers worldwide</span>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <GlassCard variant="strong" rounded="2xl" padding="lg" className="shadow-2xl bg-white/95">
              {!isSubmitted ? (
                <>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl mb-6">
                    <Mail className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    Start Your Free Subscription
                  </h3>
                  <p className="text-gray-600 mb-8">
                    No spam, ever. Unsubscribe anytime.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-gray-900 focus:outline-none transition-colors text-gray-900"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full btn-minimal btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Subscribe Now
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-xs text-gray-500 text-center mt-6">
                    By subscribing, you agree to receive marketing emails. We respect your privacy.
                  </p>

                  {/* Bonus Badge */}
                  <div className="mt-6 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <Gift className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">Free Bonus</p>
                        <p className="text-xs text-gray-600">Get our Marketing ROI Calculator ($99 value)</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    You're In! 🎉
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Check your inbox for a confirmation email. Your free Marketing ROI Calculator is on its way!
                  </p>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <p className="text-sm text-gray-700 mb-4">
                      <strong className="text-gray-900">What's next?</strong>
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2 text-left">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Confirm your subscription via email</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Download your free ROI Calculator</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Get weekly insights every Monday at 9 AM</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </GlassCard>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl -z-10 rotate-12" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}