import { ShieldCheck, Banknote, Wrench, Headset } from 'lucide-react' // Using lucide-react for icons

function Services() {
  const services = [
    {
      title: 'Luxury Car Sales',
      desc: 'Exclusive access to the world’s most prestigious brands, from performance supercars to elegant luxury sedans.',
      icon: <ShieldCheck className="w-8 h-8 text-amber-500" />
    },
    {
      title: 'Tailored Financing',
      desc: 'Flexible leasing and financing plans designed to fit your lifestyle, featuring competitive rates and quick approval.',
      icon: <Banknote className="w-8 h-8 text-amber-500" />
    },
    {
      title: 'Expert Maintenance',
      desc: 'Certified technicians providing precision care, using genuine parts to keep your vehicle in peak showroom condition.',
      icon: <Wrench className="w-8 h-8 text-amber-500" />
    },
    {
      title: 'Elite Concierge',
      desc: 'Dedicated 24/7 support for roadside assistance, vehicle tracking, and personalized owner services.',
      icon: <Headset className="w-8 h-8 text-amber-500" />
    }
  ]

  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-amber-500 text-sm md:text-base uppercase tracking-[0.3em] font-bold mb-3">
            Why Choose Us
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Our Premium Services
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-gray-800/40 border border-gray-700/50 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden"
            >
              {/* Decorative Background Glow */}
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors"></div>

              {/* Icon Container */}
              <div className="mb-6 p-4 rounded-2xl bg-gray-900/50 w-fit border border-gray-700 group-hover:border-amber-500/30 transition-colors">
                {service.icon}
              </div>

              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                {service.title}
              </h4>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 w-0 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services