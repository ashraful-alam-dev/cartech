import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Cars from './components/Cars'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Cars />
      <Products />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App