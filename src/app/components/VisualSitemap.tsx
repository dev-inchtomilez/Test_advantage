/**
 * ============================================
 * VISUAL SITEMAP COMPONENT
 * ============================================
 * Displays all available routes in a visual hierarchy
 * ============================================
 */

import { Link } from 'react-router';
import { routes, routesByCategory } from '../utils/sitemap';
import { Home, Briefcase, Building2, FileText, Mail, Settings, ArrowRight } from 'lucide-react';
import { colors } from '../../styles/design-tokens';

export function VisualSitemap() {
  const icons: Record<string, React.ReactNode> = {
    '/': <Home className="w-5 h-5" />,
    '/about': <Building2 className="w-5 h-5" />,
    '/services': <Briefcase className="w-5 h-5" />,
    '/case-studies': <FileText className="w-5 h-5" />,
    '/contact': <Mail className="w-5 h-5" />,
    '/configurator': <Settings className="w-5 h-5" />,
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: colors.brand.primary }}>
            Complete Site Map
          </h2>
          <p className="text-gray-600">
            All 13 pages of the AdvantEdge website - each optimized for SEO and indexing
          </p>
        </div>

        {/* Main Pages */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: colors.brand.primary }}>
            <Home className="w-5 h-5" />
            Main Pages
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {routesByCategory.main.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className="group p-6 rounded-xl bg-white border-2 hover:border-[#0000aa] transition-all duration-300 shadow-sm hover:shadow-lg"
                style={{ borderColor: '#e5e7eb' }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="p-3 rounded-lg flex-shrink-0 transition-colors"
                    style={{ 
                      backgroundColor: '#f3f4f6',
                      color: colors.brand.primary 
                    }}
                  >
                    {icons[route.path] || <FileText className="w-5 h-5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold mb-1 group-hover:text-[#0000aa] transition-colors">
                      {route.name}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {route.description}
                    </p>
                    <div className="mt-2 flex items-center text-sm font-semibold" style={{ color: colors.brand.secondary }}>
                      View Page
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Service Pages */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: colors.brand.primary }}>
            <Briefcase className="w-5 h-5" />
            Service Detail Pages
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {routesByCategory.services.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className="group p-6 rounded-xl bg-white border-2 hover:border-[#0000aa] transition-all duration-300 shadow-sm hover:shadow-lg"
                style={{ borderColor: '#e5e7eb' }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="p-3 rounded-lg flex-shrink-0 transition-colors"
                    style={{ 
                      backgroundColor: '#f3f4f6',
                      color: colors.brand.primary 
                    }}
                  >
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold mb-1 group-hover:text-[#0000aa] transition-colors">
                      {route.name}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {route.description}
                    </p>
                    <div className="mt-2 flex items-center text-sm font-semibold" style={{ color: colors.brand.secondary }}>
                      View Service
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: colors.brand.primary }}>
            <Settings className="w-5 h-5" />
            Interactive Tools
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {routesByCategory.tools.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className="group p-6 rounded-xl bg-white border-2 hover:border-[#0000aa] transition-all duration-300 shadow-sm hover:shadow-lg"
                style={{ borderColor: '#e5e7eb' }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="p-3 rounded-lg flex-shrink-0 transition-colors"
                    style={{ 
                      backgroundColor: '#f3f4f6',
                      color: colors.brand.primary 
                    }}
                  >
                    {icons[route.path] || <Settings className="w-5 h-5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold mb-1 group-hover:text-[#0000aa] transition-colors">
                      {route.name}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {route.description}
                    </p>
                    <div className="mt-2 flex items-center text-sm font-semibold" style={{ color: colors.brand.secondary }}>
                      Try Tool
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SEO Info Box */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border-2" style={{ borderColor: colors.brand.accent }}>
          <h3 className="text-lg font-bold mb-3" style={{ color: colors.brand.primary }}>
            SEO & Indexing Information
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>All 13 pages have unique meta titles and descriptions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Each page has targeted keywords and Open Graph tags</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Canonical URLs are set for all pages</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>React Router configured with individual routes for each page</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>All pages are directly accessible via their URLs</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
