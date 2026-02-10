import Link from 'next/link';
import { Metadata } from 'next';
import type { ComponentType } from 'react';

export const metadata: Metadata = {
  title: 'Site Map - Sonate by YCQ Labs | Complete Website Navigation',
  description: 'Complete sitemap of Sonate by YCQ Labs website. Find all pages, resources, and documentation for AI trust infrastructure, SONATE Trust Framework, and enterprise solutions.',
  keywords: 'sitemap, site map, navigation, AI trust, SONATE, Sonate, YCQ Labs, enterprise solutions',
  openGraph: {
    title: 'Site Map - Sonate by YCQ Labs',
    description: 'Complete navigation overview of Sonate AI trust infrastructure platform',
    url: 'https://yseeku.com/sitemap',
  },
};

const sitemapData = {
  mainPages: [
    {
      title: 'Home',
      href: '/',
      description: 'AI Trust Infrastructure with SONATE Trust Framework',
      priority: 'high'
    },
    {
      title: 'Solutions',
      href: '/solutions',
      description: 'Business solutions and enterprise offerings',
      priority: 'high'
    },
    {
      title: 'Technology',
      href: '/technology',
      description: 'Technical architecture and SONATE Trust Protocol details',
      priority: 'high'
    },
    {
      title: 'Trust Demo',
      href: '/trust-demo',
      description: 'Interactive demo of cryptographic trust receipts',
      priority: 'high'
    },
  ],
  businessPages: [
    {
      title: 'Case Studies',
      href: '/case-studies',
      description: 'Real-world implementations and success stories'
    },
    {
      title: 'Investors',
      href: '/investors',
      description: 'Investment opportunities and company information'
    },
    {
      title: 'Risk Assessment',
      href: '/risk-assessment',
      description: 'Comprehensive risk analysis and mitigation strategies'
    },
    {
      title: 'Contact',
      href: '/contact',
      description: 'Get in touch with our team'
    },
  ],
  technicalPages: [
    {
      title: 'Demo',
      href: '/demo',
      description: 'Platform demonstration and walkthrough'
    },
    {
      title: 'Metrics & Methodology',
      href: '/metrics-methodology',
      description: 'Detailed metrics, assumptions, and methodology'
    },
    {
      title: 'Governance',
      href: '/governance',
      description: 'Governance framework and compliance information'
    },
    {
      title: 'Changelog',
      href: '/changelog',
      description: 'Platform updates and version history'
    },
  ],
  externalResources: [
    {
      title: 'Full Platform',
      href: 'https://symbi-website-main-git-clean-master-ycq.vercel.app/',
      description: 'Complete production platform',
      external: true
    },
    {
      title: 'GitHub Repository',
      href: 'https://github.com/s8ken/YCQ-Website',
      description: 'Source code and development',
      external: true
    },
    {
      title: 'Live Verify Demo',
      href: 'https://symbi-synergy-pa9k82n5m-ycq.vercel.app',
      description: 'Test hash-chain integrity verification',
      external: true
    },
  ],
  apiEndpoints: [
    {
      title: 'Trust Demo Analytics API',
      href: '/api/trust-demo/analytics',
      description: 'Analytics data for trust demo',
      type: 'API'
    },
    {
      title: 'Declarations API',
      href: '/api/trust-demo/declarations',
      description: 'Trust declaration management',
      type: 'API'
    },
    {
      title: 'Generate API',
      href: '/api/trust-demo/generate',
      description: 'Generate AI responses with trust receipts',
      type: 'API'
    },
    {
      title: 'Verify API',
      href: '/api/trust-demo/verify',
      description: 'Verify cryptographic trust receipts',
      type: 'API'
    },
    {
      title: 'Receipts Demo API',
      href: '/api/receipts/demo',
      description: 'Demo receipt functionality',
      type: 'API'
    },
  ]
};

const SitemapIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6l4 6-4 6" />
  </svg>
);

const ExternalIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const APIIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

type SitemapItem = {
  title: string;
  href: string;
  description: string;
  priority?: string;
  type?: string;
  external?: boolean;
};

type SitemapIconComponent = ComponentType<{ className?: string }>;

const SitemapSection = ({
  title,
  items,
  icon: Icon,
  color,
}: {
  title: string;
  items: SitemapItem[];
  icon: SitemapIconComponent;
  color: string;
}) => (
  <div className={`bg-white rounded-lg shadow-sm border-2 ${color} p-6`}>
    <div className="flex items-center mb-6">
      <div className={`w-10 h-10 ${color.replace('border-', 'bg-').replace('200', '100')} rounded-lg flex items-center justify-center mr-3`}>
        <Icon className={`w-5 h-5 ${color.replace('border-', 'text-').replace('200', '600')}`} />
      </div>
      <h3 className="text-xl font-bold text-stone-900">{title}</h3>
    </div>
    <div className="space-y-3">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noopener noreferrer' : undefined}
          className="block p-4 rounded-lg border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all duration-200 group"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center">
                <h4 className="font-semibold text-stone-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                {item.external && <ExternalIcon className="w-4 h-4 ml-2 text-stone-400" />}
                {item.type === 'API' && <APIIcon className="w-4 h-4 ml-2 text-stone-400" />}
                {item.priority === 'high' && (
                  <span className="ml-2 px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded">
                    Priority
                  </span>
                )}
              </div>
              <p className="text-sm text-stone-600 mt-1">{item.description}</p>
              {!item.external && !item.type && (
                <p className="text-xs text-stone-400 mt-2">yseeku.com{item.href}</p>
              )}
              {item.type === 'API' && (
                <p className="text-xs text-stone-400 mt-2">API Endpoint</p>
              )}
              {item.external && (
                <p className="text-xs text-blue-600 mt-2">{item.href}</p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default function Sitemap() {
  return (
    <div className="bg-gradient-to-b from-stone-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                <SitemapIcon className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Site Map
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Complete navigation overview of Sonate by YCQ Labs. Find all pages, resources, and documentation for our AI trust infrastructure platform.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-sm text-stone-500">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                13 Main Pages
              </div>
              <div className="flex items-center text-sm text-stone-500">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                3 External Resources
              </div>
              <div className="flex items-center text-sm text-stone-500">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                5 API Endpoints
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Primary Pages */}
          <SitemapSection 
            title="Primary Pages" 
            items={sitemapData.mainPages}
            icon={SitemapIcon}
            color="border-blue-200"
          />

          {/* Business Pages */}
          <SitemapSection 
            title="Business & Commercial" 
            items={sitemapData.businessPages}
            icon={SitemapIcon}
            color="border-green-200"
          />

          {/* Technical Pages */}
          <SitemapSection 
            title="Technical & Documentation" 
            items={sitemapData.technicalPages}
            icon={SitemapIcon}
            color="border-purple-200"
          />

          {/* External Resources */}
          <SitemapSection 
            title="External Resources" 
            items={sitemapData.externalResources}
            icon={ExternalIcon}
            color="border-amber-200"
          />
        </div>

        {/* API Endpoints */}
        <div className="mt-8">
          <SitemapSection 
            title="API Endpoints & Services" 
            items={sitemapData.apiEndpoints}
            icon={APIIcon}
            color="border-indigo-200"
          />
        </div>

        {/* Quick Stats */}
        <div className="mt-12 bg-gradient-to-r from-stone-800 to-stone-700 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Platform Overview</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">80K+</div>
              <div className="text-sm text-stone-300">Lines of Code</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">90+</div>
              <div className="text-sm text-stone-300">Test Files</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">6</div>
              <div className="text-sm text-stone-300">Trust Principles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-stone-300">Availability</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/trust-demo" 
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Live Demo
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
