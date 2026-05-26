import { motion } from 'motion/react';
import { FileText, Download, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';

export function ResourceLibrary() {
  const resources = [
    {
      type: 'Guide',
      title: '2025 Digital Marketing Playbook for Indian Businesses',
      description: '67-page comprehensive guide covering SEO, PPC, social media, and content marketing strategies tailored for the Indian market.',
      downloads: '3,420',
      readTime: '45 min read',
      icon: <FileText className="w-6 h-6" />,
      popular: true
    },
    {
      type: 'Checklist',
      title: 'SEO Audit Checklist: 47 Points for 2025',
      description: 'The exact checklist we use to audit websites with ₹1Cr+ marketing budgets. Identify gaps and opportunities instantly.',
      downloads: '2,890',
      readTime: '15 min read',
      icon: <TrendingUp className="w-6 h-6" />,
      popular: true
    },
    {
      type: 'Template',
      title: 'Social Media Content Calendar Template',
      description: 'Plan 90 days of content in advance with our proven framework. Includes post ideas, hashtag strategies, and scheduling tips.',
      downloads: '4,120',
      readTime: '10 min setup',
      icon: <Download className="w-6 h-6" />,
      popular: false
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
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full mb-3 shadow-sm">
            <span className="text-xs font-semibold text-gray-900">Free Resources</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Marketing Resources Library
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Free guides, templates, and checklists to accelerate your marketing success
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-minimal p-8 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
            >
              {resource.popular && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gray-900 text-white text-xs font-bold rounded-full">
                    POPULAR
                  </span>
                </div>
              )}

              {/* Type Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full mb-6">
                <div className="icon-minimal !w-5 !h-5 !p-0">
                  {resource.icon}
                </div>
                <span className="text-xs font-bold text-gray-900">{resource.type}</span>
              </div>

              {/* Content */}
              <h3 className="font-bold text-xl text-gray-900 mb-3 leading-tight">
                {resource.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {resource.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  <span>{resource.downloads} downloads</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{resource.readTime}</span>
                </div>
              </div>

              {/* Download Button */}
              <Link
                to="/contact"
                className="group/btn w-full px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 inline-flex items-center justify-center gap-2 hover:scale-[1.02] shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download Free
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-2xl font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            View All Resources
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}