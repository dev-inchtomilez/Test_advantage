import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TeamIntro() {
  const team = [
    {
      name: 'Aditya Sharma',
      role: 'Founder & Chief Strategist',
      bio: '12+ years crafting marketing systems for growth-stage companies',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      linkedin: '#',
      email: 'aditya@advantedge.com'
    },
    {
      name: 'Kavya Reddy',
      role: 'Head of Digital Strategy',
      bio: 'Ex-Google | Performance marketing expert with ₹50Cr+ managed budget',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      linkedin: '#',
      email: 'kavya@advantedge.com'
    },
    {
      name: 'Rohan Gupta',
      role: 'Creative Director',
      bio: 'Award-winning designer | Built brand systems for 100+ companies',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      linkedin: '#',
      email: 'rohan@advantedge.com'
    },
    {
      name: 'Priya Iyer',
      role: 'Head of Content & SEO',
      bio: 'Content strategist | Scaled organic traffic 10x for SaaS companies',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      linkedin: '#',
      email: 'priya@advantedge.com'
    },
    {
      name: 'Arjun Patel',
      role: 'Lead Developer',
      bio: 'Full-stack engineer | Building high-performance web experiences',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      linkedin: '#',
      email: 'arjun@advantedge.com'
    },
    {
      name: 'Meera Desai',
      role: 'Client Success Manager',
      bio: 'Relationship builder | Ensuring client goals become measurable outcomes',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      linkedin: '#',
      email: 'meera@advantedge.com'
    }
  ];

  return (
    <section className="section-transparent px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full mb-3 shadow-sm">
            <span className="text-xs font-semibold text-gray-900">Our Team</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Meet Your Marketing Team
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Strategic thinkers, creative experts, and execution specialists working as one integrated unit
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-minimal p-6 hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Social Links - Appear on Hover */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <a
                    href={member.linkedin}
                    className="flex-1 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-gray-900" />
                    <span className="text-sm font-semibold text-gray-900">LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-gray-900" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-gray-600 mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}