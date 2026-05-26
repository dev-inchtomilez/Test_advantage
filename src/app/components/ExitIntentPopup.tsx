import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router';

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves from top of viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // Add delay to prevent immediate triggering
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000); // Wait 5 seconds before activating

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] w-full max-w-2xl mx-4"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Left Side - Visual */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-12 flex flex-col justify-center items-center text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
                  
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative z-10"
                  >
                    <Gift className="w-24 h-24 mb-6" />
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold mb-3 text-center relative z-10">Wait!</h3>
                  <p className="text-white/90 text-center relative z-10">Don't leave empty-handed</p>
                </div>

                {/* Right Side - Content */}
                <div className="p-10">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      Get Your Free Marketing Audit Checklist
                    </h2>
                    <p className="text-gray-600 mb-2">
                      <span className="font-semibold text-gray-900">₹25,000 Value</span> — Absolutely Free
                    </p>
                    <p className="text-sm text-gray-600">
                      The exact 47-point checklist we use to audit ₹1Cr+ marketing budgets
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Download className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-sm text-gray-700">Instant PDF download—no waiting</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Download className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-sm text-gray-700">Identify gaps costing you revenue</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Download className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-sm text-gray-700">Actionable improvements for today</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link
                      to="/contact"
                      onClick={handleClose}
                      className="w-full px-6 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:shadow-xl inline-flex items-center justify-center gap-2"
                    >
                      Claim Free Checklist
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <button
                      onClick={handleClose}
                      className="w-full text-sm text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      No thanks, I'll pass on this
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}