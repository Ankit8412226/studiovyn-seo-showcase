'use client';

import { Quote, Star, Linkedin } from 'lucide-react';
import Card from '@/components/ui/Card';
import OptimizedImage from '@/components/ui/OptimizedImage';

export default function TestimonialsShowcase() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, TechStart India',
      company: 'TechStart',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces',
      content: 'StudioVyn transformed our online presence completely. The website they built increased our leads by 300% in just 3 months. Their attention to detail and professionalism is unmatched.',
      rating: 5,
      result: '300% increase in leads',
    },
    {
      name: 'Priya Sharma',
      role: 'Founder, EcomHub',
      company: 'EcomHub',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces',
      content: 'Working with StudioVyn was a game-changer. They delivered our e-commerce platform ahead of schedule, and the quality exceeded our expectations. Highly recommend!',
      rating: 5,
      result: 'Launched 2 weeks early',
    },
    {
      name: 'Amit Patel',
      role: 'CTO, FinTech Solutions',
      company: 'FinTech',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces',
      content: 'The mobile app they developed for us has been downloaded over 50K times with a 4.8-star rating. Their technical expertise and user-centric approach made all the difference.',
      rating: 5,
      result: '50K+ downloads',
    },
    {
      name: 'Sneha Reddy',
      role: 'Marketing Director, GrowthCo',
      company: 'GrowthCo',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces',
      content: 'StudioVyn\'s digital marketing services helped us achieve 250% ROI in the first quarter. Their data-driven approach and creative strategies are exceptional.',
      rating: 5,
      result: '250% ROI',
    },
    {
      name: 'Vikram Singh',
      role: 'Founder, HealthCare Plus',
      company: 'HealthCare Plus',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces',
      content: 'From design to deployment, StudioVyn handled everything seamlessly. Our website now ranks on the first page of Google, and patient bookings have increased by 180%.',
      rating: 5,
      result: '180% booking increase',
    },
    {
      name: 'Anjali Mehta',
      role: 'Product Manager, EduTech Innovations',
      company: 'EduTech',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces',
      content: 'The UI/UX design they created for our learning platform received overwhelming positive feedback. User engagement increased by 400%, and our retention rate doubled.',
      rating: 5,
      result: '400% engagement increase',
    },
  ];

  return (
    <section className="py-24 sm:py-28 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 mb-6">
            <Quote className="w-8 h-8 text-purple-600" aria-hidden="true" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-secondary mb-6 text-gray-900">
            What Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 font-primary leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with StudioVyn.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              variant="elevated"
              hover
              padding="lg"
              className="group relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-purple-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 font-primary leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Result Badge */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 mb-6">
                <span className="text-sm font-semibold text-green-700 font-primary">
                  {testimonial.result}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gray-200 group-hover:ring-purple-300 transition-all">
                  <OptimizedImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 font-secondary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 font-primary">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-gray-500 font-primary mt-1">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-6 bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-secondary">
              4.9/5.0
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div className="text-left">
              <div className="text-sm text-gray-500 font-primary mb-1">Average Rating</div>
              <div className="text-lg font-bold text-gray-900 font-secondary">
                150+ Happy Clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

