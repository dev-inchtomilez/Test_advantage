import { motion } from 'motion/react';
import { Play, Quote, Star } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { GlassCard } from './primitives';

export function VideoTestimonial() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Malhotra',
      role: 'CEO, TechNova Solutions',
      company: 'B2B SaaS - Mumbai',
      thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      quote: 'AdvantEdge helped us scale from ₹5Cr to ₹45Cr in just 18 months',
      stats: '9x growth',
      videoUrl: '#' // In production, replace with actual video URL
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      role: 'Founder, HealthFirst Clinics',
      company: 'Healthcare - Bangalore',
      thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      quote: 'Patient acquisition costs dropped 68% while quality improved dramatically',
      stats: '68% lower CAC',
      videoUrl: '#'
    },
    {
      id: 3,
      name: 'Vikram Mehta',
      role: 'CMO, EduLearn Platform',
      company: 'EdTech - Delhi',
      thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      quote: 'From 2,000 to 45,000 monthly enrollments in one year',
      stats: '22.5x enrollments',
      videoUrl: '#'
    }
  ];

  return (
    <section className="section-transparent px-4 sm:px-6 lg:px-8 bg-transparent py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <GlassCard variant="base" rounded="lg" padding="none" hover className="overflow-hidden group h-full">
                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden cursor-pointer">
                  <ImageWithFallback
                    src={testimonial.thumbnail}
                    alt={testimonial.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Play Button */}
                  <button
                    onClick={() => setSelectedVideo(testimonial.id)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group/play"
                  >
                    <Play className="w-8 h-8 text-gray-900 ml-1 group-hover/play:text-gray-700" fill="currentColor" />
                  </button>

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-bold text-gray-900">{testimonial.stats}</span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-white text-xs font-semibold">
                    2:34
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gray-900 text-gray-900" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-gray-300 mb-2" />
                    <p className="text-gray-900 font-semibold leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500 mt-1">{testimonial.company}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Video Modal Placeholder */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[10000] flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full max-w-4xl aspect-video bg-gray-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-white text-2xl">×</span>
              </button>

              {/* Video Player Placeholder */}
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center">
                  <Play className="w-20 h-20 mx-auto mb-4 opacity-50" />
                  <p className="text-lg opacity-75">Video player would load here</p>
                  <p className="text-sm opacity-50 mt-2">
                    In production, integrate YouTube, Vimeo, or custom video player
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}