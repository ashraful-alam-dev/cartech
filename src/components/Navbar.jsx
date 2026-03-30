import { useState } from 'react'
import logo from '../assets/images/logo.png'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
        <nav className="fixed top-0 left-0 w-full h-16 bg-gray-900/80 backdrop-blur-md border-b border-gray-400 z-50">
        <div className="container mx-auto h-full flex items-center justify-between px-6">
        
        <div className="flex items-center gap-3">
          <img src={logo} alt="CarTech Logo" className="h-10 w-10 object-contain" />
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setOpen(!open)} 
            className="text-gray-300 hover:text-amber-400 transition-colors focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        <div className={`
          absolute md:static top-16 right-4 w-48 md:w-auto 
          bg-gray-800 md:bg-transparent rounded-xl md:rounded-none shadow-2xl md:shadow-none
          transition-all duration-300 ease-in-out border border-gray-700 md:border-none
          ${open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible md:opacity-100 md:visible translate-y-[-10px] md:translate-y-0'}
        `}>
          <ul className="flex flex-col md:flex-row items-center gap-1 md:gap-6 p-4 md:p-0">
            {['Home', 'Cars', 'Products', 'Services', 'About'].map((item) => (
              <li key={item} className="w-full md:w-auto">
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="block py-2 text-gray-300 hover:text-amber-400 text-center md:text-left text-sm md:text-base font-medium transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            
            <li className="mt-2 md:mt-0 pt-2 md:pt-0 border-t border-gray-700 md:border-none w-full md:w-auto">
              <button className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900 px-4 py-2 rounded-lg text-sm font-bold hover:brightness-110 transition-all whitespace-nowrap">
                Login/Signup
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar