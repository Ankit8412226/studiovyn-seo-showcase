import OptimizedImage from '@/components/ui/OptimizedImage';
import { Award, CheckCircle2, Shield, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100/50 rounded-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100/50 rounded-3xl -z-10 animate-pulse delay-700"></div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="StudioVyn Team Collaboration"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -bottom-10 left-10 right-10 bg-white shadow-xl rounded-2xl p-6 border border-gray-100 z-20 hidden sm:block">
               <div className="flex items-center justify-around gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold font-secondary text-blue-600">150+</div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Projects</div>
                  </div>
                  <div className="h-10 w-px bg-gray-100"></div>
                  <div>
                    <div className="text-2xl font-bold font-secondary text-purple-600">98%</div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Happy Clients</div>
                  </div>
                  <div className="h-10 w-px bg-gray-100"></div>
                  <div>
                    <div className="text-2xl font-bold font-secondary text-green-600">300+</div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Locations</div>
                  </div>
               </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-6">
               <Award className="w-4 h-4" /> Who We Are
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-secondary mb-6 text-gray-900">Empowering Businesses with <span className="text-blue-600">Digital Excellence</span></h2>
            <p className="text-xl text-gray-600 font-primary mb-8 leading-relaxed">
              We are a results-driven web and software studio serving businesses across India. From our hubs in Bihar, West Bengal, and Delhi NCR, we build modern digital experiences that are fast, secure, and built to scale.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-gray-700 font-medium">Local SEO strategies tailored for Indian markets (Bihar, Kolkata, Delhi).</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-gray-700 font-medium">Performance-first engineering using React, Next.js, and Node.js.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-gray-700 font-medium">Transparent communication and on-time delivery guaranteed.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="btn-primary">View Recent Projects</a>
              <a href="#contact" className="btn-secondary">Get a Free Proposal</a>
            </div>
          </div>
        </div>

        {/* Why We Win Section */}
        <div className="p-10 sm:p-16 rounded-[2.5rem] bg-gray-900 text-white relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold font-secondary mb-4">Why We <span className="text-blue-400">Win in Search</span></h3>
              <p className="text-gray-400 font-primary text-lg mb-8">We don't just build websites; we build marketing machines optimized for the Google search algorithm.</p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <Zap className="w-6 h-6 text-blue-400 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Core Web Vitals</h4>
                    <p className="text-sm text-gray-500">Optimized LCP, CLS, and INP scores by default.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-blue-400 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Tech SEO</h4>
                    <p className="text-sm text-gray-500">Clean architecture and automated schema injection.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
               <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                       <span className="font-bold">Performance Optimization</span>
                       <span className="text-blue-400">100%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-400 w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                       <span className="font-bold">Local SEO Readiness</span>
                       <span className="text-blue-400">98%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-400 w-[98%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                       <span className="font-bold">Conversion-Focused Design</span>
                       <span className="text-blue-400">95%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-400 w-[95%]"></div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Engineering Culture / Workspace Gallery */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-secondary text-gray-900 mb-4">Our Engineering <span className="text-blue-600">Workspace</span></h3>
            <p className="text-gray-600 font-primary">Where the magic happens—crafting high-performance code and scalable architectures.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80', alt: 'Developer workspace' },
              { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80', alt: 'Code on screen' },
              { src: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=600&q=80', alt: 'Programming setup' },
              { src: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=600&q=80', alt: 'Laptop and notes' }
            ].map((img, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-video lg:aspect-square">
                 <OptimizedImage
                   src={img.src}
                   alt={img.alt}
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-500"
                 />
                 <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-xs font-bold font-secondary">{img.alt}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
