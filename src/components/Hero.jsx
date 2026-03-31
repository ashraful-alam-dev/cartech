import banner from '../assets/images/banner.png'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 text-white pt-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
     
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent mb-4">
            CarTech
          </h1>
          <p className="text-amber-500 text-sm md:text-base uppercase tracking-wider font-semibold">
            Premium Automotive Solutions
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mb-10 md:mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={banner} 
              alt="Luxury Car" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
          </div>
          <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-amber-500 rounded-tl-2xl hidden lg:block"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-amber-500 rounded-br-2xl hidden lg:block"></div>
        </div>

        <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
            Discover luxury, performance, and innovation in one place. 
            The future of automotive technology is here.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <a
            href="#cars"
            className="group relative bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 px-8 md:px-10 py-3 md:py-4 rounded-full text-gray-900 font-bold transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
          >
            <span className="relative z-10">Browse Store</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
          </a>
          
          <a
            href="#about"
            className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-gray-900 px-8 md:px-10 py-3 md:py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 text-center"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero