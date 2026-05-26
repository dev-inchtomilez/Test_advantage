import { motion } from 'motion/react';

export function ClientLogoCarousel() {
  // Indian company logos - using text-based logos for demonstration
  // In production, replace with actual logo images
  const clients = [
    { name: 'Tata Consultancy Services', logo: 'TCS' },
    { name: 'Infosys', logo: 'Infosys' },
    { name: 'Wipro', logo: 'Wipro' },
    { name: 'Reliance Industries', logo: 'Reliance' },
    { name: 'HDFC Bank', logo: 'HDFC' },
    { name: 'ICICI Bank', logo: 'ICICI' },
    { name: 'Mahindra Group', logo: 'Mahindra' },
    { name: 'Bharti Airtel', logo: 'Airtel' },
    { name: 'Asian Paints', logo: 'Asian Paints' },
    { name: 'Tech Mahindra', logo: 'Tech Mahindra' },
    { name: 'HCL Technologies', logo: 'HCL' },
    { name: 'Bajaj Auto', logo: 'Bajaj' }
  ];

  return (
    <section className="section-transparent px-4 sm:px-6 lg:px-8 bg-transparent py-16 sm:py-20 overflow-hidden">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-3 py-1.5 bg-white/70 backdrop-blur-md border border-gray-200/60 rounded-full mb-3 shadow-sm">
            <span className="text-xs font-semibold text-gray-900">Trusted By Industry Leaders</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Brands That Trust Us
          </h2>
          <p className="text-sm text-gray-600">
            Partnering with India's most recognized companies
          </p>
        </motion.div>

        {/* Scrolling Marquee */}
        <div className="relative">
          {/* Gradient Overlays - Made transparent to show mesh background */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" 
               style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.6), transparent)' }} 
          />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" 
               style={{ background: 'linear-gradient(to left, rgba(255,255,255,0.6), transparent)' }}
          />

          {/* Scrolling Container */}
          <div className="overflow-hidden py-8 w-full">
            <motion.div
              className="flex gap-12"
              animate={{
                x: [0, -1800]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear"
                }
              }}
            >
              {/* Duplicate the array for seamless loop */}
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 flex items-center justify-center rounded-2xl hover:shadow-lg transition-all duration-300 group grayscale hover:grayscale-0 border border-gray-200/60 hover:border-gray-900"
                  style={{
                    background: 'rgba(255, 255, 255, 0.55)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div className="text-2xl font-bold text-gray-400 group-hover:text-gray-900 transition-colors duration-300">
                    {client.logo}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-500">
            <span className="font-bold text-gray-900">250+ brands</span> across technology, healthcare, education, and finance sectors
          </p>
        </motion.div>
      </div>
    </section>
  );
}