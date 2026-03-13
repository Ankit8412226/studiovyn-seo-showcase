import {
  GraduationCap,
  Heart,
  Home,
  ShoppingCart,
  Stethoscope,
  Truck,
  Utensils,
  Wallet
} from 'lucide-react';

export default function Industries() {
  const sectors = [
    { name: 'E‑commerce', icon: ShoppingCart, description: 'High-converting online stores that scale with your sales.' },
    { name: 'Education', icon: GraduationCap, description: 'Learning management systems and institutional portals.' },
    { name: 'Healthcare', icon: Stethoscope, description: 'HIPAA-compliant platforms for clinics and medical services.' },
    { name: 'Hospitality', icon: Utensils, description: 'Booking systems and premium digital menus for restaurants.' },
    { name: 'Real Estate', icon: Home, description: 'Dynamic listing portals and CRM for property agents.' },
    { name: 'Logistics', icon: Truck, description: 'Supply chain visibility and fleet management solutions.' },
    { name: 'Fintech', icon: Wallet, description: 'Secure payment gateways and financial dashboarding.' },
    { name: 'Non‑profit', icon: Heart, description: 'Donation platforms and awareness-driven web experiences.' }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#0b0d12] border-y border-[#1f2937] relative overflow-hidden">
      <div className="absolute inset-0 bg-accent-glow opacity-30" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold font-secondary mb-4 sm:mb-6 text-white">Industries We <span className="text-emerald-200">Elevate</span></h2>
          <p className="text-lg sm:text-xl text-[#94a3b8] font-primary px-4">We specialize in delivering industry-specific digital solutions that tackle unique challenges and drive real growth.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="group p-6 sm:p-8 rounded-2xl border border-[#1f2937] bg-[#121723] hover:border-emerald-400/40 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-[#0f1320] text-emerald-200 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all transform group-hover:rotate-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-secondary mb-3 text-white">{s.name}</h3>
                <p className="text-[#94a3b8] font-primary text-sm leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
