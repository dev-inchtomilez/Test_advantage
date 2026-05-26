import { motion } from 'motion/react';
import { ExternalLink, Quote, Newspaper } from 'lucide-react';

export function MediaMentions() {
  const mentions = [
    {
      publication: "Forbes India",
      logo: "📰",
      headline: "How AdvantEdge is Transforming B2B Marketing in India",
      excerpt: "This strategic marketing consultancy has cracked the code on data-driven growth...",
      url: "#",
      date: "December 2025",
      category: "Feature"
    },
    {
      publication: "Business Today",
      logo: "📊",
      headline: "Top 50 Marketing Agencies to Watch in 2026",
      excerpt: "AdvantEdge ranks among India's most innovative marketing agencies...",
      url: "#",
      date: "November 2025",
      category: "List"
    },
    {
      publication: "YourStory",
      logo: "🚀",
      headline: "Scaling Marketing: Lessons from AdvantEdge's Growth Journey",
      excerpt: "From startup to scale-up, the agency shares its proven frameworks...",
      url: "#",
      date: "October 2025",
      category: "Interview"
    },
    {
      publication: "Marketing Mind",
      logo: "🎯",
      headline: "The Future of Strategic Marketing Consulting",
      excerpt: "AdvantEdge CEO shares insights on AI, automation, and the human touch...",
      url: "#",
      date: "September 2025",
      category: "Expert Opinion"
    },
    {
      publication: "Economic Times",
      logo: "💼",
      headline: "Marketing ROI: How One Agency Delivers 300% Returns",
      excerpt: "A deep dive into AdvantEdge's performance-driven approach...",
      url: "#",
      date: "August 2025",
      category: "Case Study"
    },
    {
      publication: "Inc. India",
      logo: "⚡",
      headline: "Building a Marketing Agency That Clients Love",
      excerpt: "What makes AdvantEdge different in a crowded market...",
      url: "#",
      date: "July 2025",
      category: "Profile"
    }
  ];

  const quotes = [
    {
      quote: "AdvantEdge represents the new generation of marketing agencies—strategic, data-driven, and results-obsessed.",
      author: "Rajiv Mehta",
      title: "Editor, Marketing World"
    },
    {
      quote: "What sets them apart is their ability to bridge strategy and execution seamlessly.",
      author: "Anita Desai",
      title: "CMO Advisor, Business Today"
    }
  ];

  return (
    <section className="section-transparent px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full mb-6 shadow-sm"
          >
            <Newspaper className="w-4 h-4 mr-2 text-gray-900" />
            <span className="text-sm font-semibold text-gray-900">In The News</span>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-3"
          >
            Media & Press
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-600 max-w-3xl mx-auto"
          >
            Featured in leading business and marketing publications
          </motion.p>
        </div>

        {/* Media Mentions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mentions.map((mention, index) => (
            <motion.a
              key={index}
              href={mention.url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-minimal group hover:shadow-2xl transition-all duration-500 block"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{mention.logo}</span>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {mention.publication}
                    </h4>
                    <p className="text-xs text-gray-500">{mention.date}</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-semibold">
                  {mention.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors">
                {mention.headline}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                {mention.excerpt}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-3 transition-all duration-300">
                Read Article
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Expert Quotes */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {quotes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-16 h-16 text-white/10" />
              
              <div className="relative z-10">
                <p className="text-sm italic mb-4 leading-relaxed">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold">{item.author}</p>
                    <p className="text-sm text-gray-300">{item.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Press Kit CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Media Inquiries
          </h3>
          <p className="text-gray-600 mb-6">
            Need quotes, images, or information for your story?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-minimal btn-primary"
            >
              Contact Press Team
            </a>
            <button className="btn-minimal btn-secondary">
              Download Press Kit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}