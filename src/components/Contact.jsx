import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields.')
      return
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.')
      return
    }

    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })

    setTimeout(() => setIsSubmitted(false), 1500)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (error) setError('') 
  }

  return (
    <section id="contact" className="py-24 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
      
        <div className="text-center mb-16">
          <h2 className="text-amber-500 text-sm md:text-base uppercase tracking-[0.3em] font-bold mb-3">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Connect With Our Experts
          </h3>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 bg-gray-800/30 rounded-[2.5rem] border border-gray-700/50 p-8 md:p-12 backdrop-blur-sm shadow-2xl">

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

          <div className="lg:w-2/3 relative">
            {isSubmitted && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gray-900/90 rounded-2xl backdrop-blur-sm animate-in fade-in zoom-in duration-300 text-center p-6">
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center border border-amber-500/50 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-amber-500" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-400 text-sm">Thank you for reaching out. We will contact you shortly.</p>
              </div>
            )}

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Full Name</label>
                <input 
                  name="name"
                  type="text" 
                  placeholder="Avik Anwar" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-4 rounded-2xl bg-gray-900/50 border ${error && !formData.name ? 'border-red-500/50' : 'border-gray-700'} text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all`} 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Email Address</label>
                <input 
                  name="email"
                  type="email" 
                  placeholder="avik@eanwar.com" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-4 rounded-2xl bg-gray-900/50 border ${error && (!formData.email || !validateEmail(formData.email)) ? 'border-red-500/50' : 'border-gray-700'} text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all`} 
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Your Message</label>
                <textarea 
                  name="message"
                  rows="4"
                  placeholder="Tell us about the car you're looking for..." 
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-4 rounded-2xl bg-gray-900/50 border ${error && !formData.message ? 'border-red-500/50' : 'border-gray-700'} text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all resize-none`}
                ></textarea>
              </div>

              {error && (
                <div className="md:col-span-2 flex items-center gap-2 text-red-400 text-sm font-medium animate-in slide-in-from-top-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              )}

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