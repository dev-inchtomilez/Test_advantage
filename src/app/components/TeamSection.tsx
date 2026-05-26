import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScrollReveal } from './ScrollReveal';
import { GlassCard } from './primitives';

export function TeamSection() {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1612116144183-d1ba477239f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGNlb3xlbnwxfHx8fDE3Njc2NDc0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: '15+ years driving marketing excellence across Fortune 500 companies'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Strategy Officer',
      image: 'https://images.unsplash.com/photo-1713946598467-fcf9332c56ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBtYW5hZ2VyfGVufDF8fHx8MTc2NzY0NzQxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Strategic planning & business transformation specialist'
    },
    {
      name: 'Emily Thompson',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3Njc1NDg0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Award-winning design & brand innovation leader'
    },
    {
      name: 'James Wilson',
      role: 'Head of Digital',
      image: 'https://images.unsplash.com/photo-1758599543129-f12d83d5dbae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMGNvbmZpZGVudHxlbnwxfHx8fDE3Njc2MDAwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Digital transformation & growth marketing expert'
    }
  ];

  return (
    <section className="section-transparent px-4 bg-transparent py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Meet Our Leadership Team
            </h2>
            <div className="divider-minimal mx-auto mb-6" />
            <p className="text-lg text-gray-600">
              Industry veterans dedicated to your success
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <GlassCard variant="base" rounded="lg" padding="base" hover className="text-center h-full group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 px-4">{member.bio}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/about"
            className="btn-minimal btn-primary inline-flex items-center gap-2"
          >
            Meet the Full Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}