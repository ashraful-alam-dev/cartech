import { Mail, Phone, MapPin, Send } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-amber-500 text-sm md:text-base uppercase tracking-[0.3em] font-bold mb-3">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Connect With Our Experts
          </h3>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 bg-gray-800/30 rounded-[2.5rem] border border-gray-700/50 p-8 md:p-12 backdrop-blur-sm shadow-2xl">
          
          {/* Left Side: Contact Information */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Contact Information</h4>
              <p className="text-gray-400 mb-8">
                Ready to find your next masterpiece? Our team is available 24/7 to assist with inquiries.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center border border-gray-700 group-hover:border-amber-500/50 transition-colors">
                  <Phone className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Call Us</p>
                  <p className="text-white font-medium">01-CAR-TECH</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center border border-gray-700 group-hover:border-amber-500/50 transition-colors">
                  <Mail className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Email Us</p>
                  <p className="text-white font-medium">email@cartech.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center border border-gray-700 group-hover:border-amber-500/50 transition-colors">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Visit Showroom</p>
                  <p className="text-white font-medium">123 Gulshan, Dhaka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-2/3">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Avik Anwar" 
                  className="w-full p-4 rounded-2xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="avik@eanwar.com" 
                  className="w-full p-4 rounded-2xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all" 
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Your Message</label>
                <textarea 
                  rows="4"
                  placeholder="Tell us about the car you're looking for..." 
                  className="w-full p-4 rounded-2xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-2">
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-gray-900 font-extrabold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact