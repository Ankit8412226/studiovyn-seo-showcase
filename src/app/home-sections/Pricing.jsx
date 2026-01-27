'use client';

import { Check, Sparkles } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function Pricing() {
  const tiers = [
    {
      name: 'Web Starter',
      segment: 'Web Development',
      price: '₹29,000',
      period: 'starting from',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO setup',
        'Contact form',
        'Performance optimization',
        'Mobile-friendly',
      ],
      highlight: false,
      popular: false,
    },
    {
      name: 'App Starter',
      segment: 'Mobile/App',
      price: '₹89,000',
      period: 'starting from',
      features: [
        'MVP scope',
        'React Native/Flutter',
        'Auth & API integration',
        'Play Store readiness',
        'Analytics integration',
        'Push notifications',
      ],
      highlight: true,
      popular: true,
    },
    {
      name: 'E‑commerce Starter',
      segment: 'E‑commerce',
      price: '₹79,000',
      period: 'starting from',
      features: [
        'Product catalog',
        'Checkout (UPI/cards)',
        'Order management',
        'SEO product templates',
        'Payment gateway integration',
        'Inventory management',
      ],
      highlight: false,
      popular: false,
    },
    {
      name: 'Design Starter',
      segment: 'UI/UX Design',
      price: '₹19,000',
      period: 'starting from',
      features: [
        'Landing page UI',
        'Design system basics',
        'Mobile-first layouts',
        'Handoff files (Figma)',
        '2 revision rounds',
        'Style guide',
      ],
      highlight: false,
      popular: false,
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 mb-6">
            <Sparkles className="w-8 h-8 text-blue-600" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-secondary mb-4 text-gray-900">
            Startup‑Friendly Pricing
          </h2>
          <p className="text-lg text-gray-600 font-primary mb-4">
            Transparent pricing with flexible payment options. All prices are exclusive of 18% GST.
          </p>
          <p className="text-sm text-gray-500 font-primary">
            Final quotes depend on scope. Flexible payment milestones available for startups.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              variant={tier.highlight ? 'gradient' : 'elevated'}
              hover
              padding="lg"
              className={`relative ${
                tier.popular
                  ? 'ring-2 ring-blue-500 ring-offset-2 scale-105 lg:scale-110'
                  : ''
              } transition-all duration-300`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 font-primary">
                  {tier.segment}
                </div>
                <h3 className="text-2xl font-bold font-secondary text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <div className="mb-1">
                  <span className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-secondary">
                    {tier.price}
                  </span>
                </div>
                <div className="text-sm text-gray-500 font-primary">{tier.period}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-green-600" aria-hidden="true" />
                    </div>
                    <span className="text-sm text-gray-700 font-primary leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={tier.popular ? 'primary' : 'secondary'}
                fullWidth
                className="mt-auto"
              >
                Request Proposal
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-sm text-gray-600 font-primary mb-4">
            Need a custom solution? We offer tailored packages for enterprise clients.
          </p>
          <Button href="/contact" variant="ghost" size="sm">
            Contact for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}


