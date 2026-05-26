import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, User, TrendingUp } from 'lucide-react';
import { GlassCard } from './primitives';

export function BlogPreview() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Marketing Strategies That Actually Work in 2026",
      excerpt: "Discover proven tactics that deliver real results in today's competitive landscape. From AI-powered personalization to community-driven growth.",
      author: "Priya Sharma",
      date: "Jan 3, 2026",
      readTime: "8 min read",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      trending: true
    },
    {
      id: 2,
      title: "How to Calculate Marketing ROI (With Free Template)",
      excerpt: "A comprehensive guide to measuring your marketing investment returns. Includes downloadable ROI calculator and frameworks.",
      author: "Rajesh Kumar",
      date: "Dec 28, 2025",
      readTime: "12 min read",
      category: "Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      trending: false
    },
    {
      id: 3,
      title: "The Ultimate Guide to B2B Content Marketing",
      excerpt: "Build a content engine that drives qualified leads. Learn from real case studies and proven frameworks.",
      author: "Amit Patel",
      date: "Dec 22, 2025",
      readTime: "15 min read",
      category: "Content",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
      trending: true
    }
  ];

  return (
    <section className="section-transparent px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard variant="base" rounded="lg" padding="none" hover className="h-full overflow-hidden group">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {post.trending && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-md">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-3 transition-all duration-300">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </GlassCard>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/blog"
            className="btn-minimal btn-primary inline-flex items-center gap-2"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}