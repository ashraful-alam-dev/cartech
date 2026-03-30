import showroom from '../assets/images/Showroom.png' // Use a showroom or car detail image here

function About() {
  return (
    <section id="about" className="py-24 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side with Decorative Frame */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-gray-700 shadow-2xl">
              <img 
                src={showroom} 
                alt="CarTech Experience" 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Background decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-500/5 blur-3xl rounded-full"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-amber-500 text-sm md:text-base uppercase tracking-[0.3em] font-bold mb-4">
              Our Legacy
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Driving Excellence in <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Automotive Innovation
              </span>
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              At CarTech, we don't just sell vehicles; we provide a gateway to a premium lifestyle. 
              Founded on the principles of transparency and precision, we’ve redefined the car-buying 
              journey for the modern era.
            </p>

            {/* Stats / Highlights */}
            <div className="grid grid-cols-2 gap-8 border-t border-gray-800 pt-8">
              <div>
                <p className="text-3xl font-bold text-white mb-1">15k+</p>
                <p className="text-amber-500 text-xs uppercase tracking-widest font-bold">Cars Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">99%</p>
                <p className="text-amber-500 text-xs uppercase tracking-widest font-bold">Customer Rating</p>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href="#contact" 
                className="inline-block px-8 py-3 rounded-xl border-2 border-amber-500 text-amber-500 font-bold hover:bg-amber-500 hover:text-gray-900 transition-all duration-300"
              >
                Meet the Team
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About