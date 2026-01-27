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
    <section className="py-24 sm:py-32 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-secondary mb-6 text-gray-900">Industries We <span className="text-blue-600">Elevate</span></h2>
          <p className="text-xl text-gray-600 font-primary">We specialize in delivering industry-specific digital solutions that tackle unique challenges and drive real growth.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="group p-8 rounded-2xl border border-gray-200 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-secondary mb-3 text-gray-900">{s.name}</h3>
                <p className="text-gray-600 font-primary text-sm leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
