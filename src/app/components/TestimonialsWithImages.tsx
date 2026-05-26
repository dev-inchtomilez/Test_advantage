import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScrollReveal } from './ScrollReveal';
import { GlassCard } from './primitives';

export function TestimonialsWithImages() {
  const testimonials = [
    {
      name: 'David Martinez',
      role: 'CEO, TechVision Solutions',
      image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzYyMjk2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'AdvantEdge transformed our marketing from disconnected tactics into a cohesive growth engine. Their strategic approach delivered measurable results within the first quarter.'
    },
    {
      name: 'Jennifer Liu',
      role: 'CMO, GlobalHealth Corp',
      image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NjQ3NDE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'Working with AdvantEdge feels like having an experienced marketing team embedded in our organization. They understand our business and deliver results consistently.'
    },
    {
      name: 'Robert Kim',
      role: 'Founder, Innovation Labs',
      image: 'https://images.unsplash.com/photo-1683786835917-5d4d2672b1a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNsaWVudCUyMHRlc3RpbW9uaWFsfGVufDF8fHx8MTc2NzY0NzQxNnww&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'The strategic clarity and execution discipline that AdvantEdge brings has elevated our entire marketing function. We now have a predictable system for growth.'
    }
  ];

  return (
    <section className="section-transparent px-4 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <GlassCard variant="base" rounded="lg" padding="base" hover className="h-full">
                <Quote className="w-10 h-10 text-gray-300 mb-4" />
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-200">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}