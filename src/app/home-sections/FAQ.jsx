'use client';

import Accordion from '@/components/ui/Accordion';
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  const qa = [
    {
      question: 'What is your typical timeline?',
      answer: 'Most websites ship within 2–6 weeks depending on scope. Simple business websites typically take 2-3 weeks, while complex e-commerce platforms or custom web applications may take 4-6 weeks. We provide detailed project timelines during our initial consultation.',
    },
    {
      question: 'Do you provide SEO services?',
      answer: 'Yes, absolutely! We build all websites with SEO best practices from day one, including performance optimization, schema markup, semantic HTML, and content strategy. We also offer comprehensive SEO services including keyword research, on-page optimization, technical SEO, and ongoing content marketing.',
    },
    {
      question: 'Which cities do you serve?',
      answer: 'We serve clients across India with a special focus on Bihar (Patna, Gaya, Muzaffarpur), West Bengal (Kolkata), Delhi NCR, and other major cities. We work remotely with clients nationwide, providing the same high-quality service regardless of location.',
    },
    {
      question: 'Do you handle website maintenance?',
      answer: 'Yes, we offer flexible maintenance packages including regular updates, security monitoring, performance optimization, content updates, and ongoing support. We provide retainers for proactive maintenance and growth, ensuring your website stays secure, fast, and up-to-date.',
    },
    {
      question: 'What tech stack do you use?',
      answer: 'We use modern, industry-leading technologies including Next.js, React, Node.js, TypeScript, Tailwind CSS, and modern cloud services (AWS, Vercel, Google Cloud). Our tech stack is tailored to your specific goals, ensuring optimal performance, scalability, and maintainability.',
    },
    {
      question: 'How much does website development cost?',
      answer: 'Website development costs vary based on complexity and requirements. Basic business websites start from ₹29,000, e-commerce platforms from ₹79,000, and custom web applications from ₹1,50,000+. Contact us for a free consultation and detailed quote tailored to your needs.',
    },
    {
      question: 'Do you provide hosting and domain services?',
      answer: 'Yes, we can help you set up hosting and domain registration. We recommend reliable hosting providers and can manage hosting for you, or guide you through setting up your own. We ensure your website is hosted on fast, secure, and scalable infrastructure.',
    },
    {
      question: 'What is your revision policy?',
      answer: 'We include 2-3 rounds of revisions in our standard packages to ensure you\'re completely satisfied. Additional revisions can be accommodated. We work closely with you throughout the design and development process to ensure the final product meets your expectations.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Common Questions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-secondary text-[#0F172A] tracking-tight leading-tight mb-4">
              Frequently Asked <span className="font-bold text-[#2563EB]">Questions</span>
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] font-primary leading-relaxed">
              Everything you need to know about our web development process, pricing, and ongoing support.
            </p>
          </div>

          {/* Accordion */}
          <Accordion items={qa} />
        </div>
      </div>
    </section>
  );
}
