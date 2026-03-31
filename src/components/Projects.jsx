import { useState } from 'react'
import projects from '../assets/projects'

function Projects() {
  const [selectedproject, setSelectedproject] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredprojects = projects.filter(project => {
    return project.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <section id="projects" className="py-20 bg-gray-900 text-amber-50">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center mb-12">
          <h2 className="text-amber-500 text-sm md:text-base uppercase tracking-[0.3em] font-bold mb-3">Ongoing Projects</h2>
          <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Cartech Special</h3>
        </div>

        <div className="flex justify-center mb-16">
          <div className="relative w-full md:w-1/2 lg:w-1/3">
            <input
              type="text"
              placeholder="Search ideas..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full p-4 pl-6 rounded-2xl bg-gray-800/50 border border-gray-700 text-amber-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all backdrop-blur-sm"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-500/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredprojects.map(project => (
            <div key={project.id} className="group bg-gray-800/40 border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-amber-500/50 flex flex-col relative cursor-pointer" onClick={() => setSelectedproject(project)}>

              <div className="aspect-square w-full overflow-hidden bg-gray-800">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <p className="text-amber-500 text-[10px] uppercase tracking-widest font-bold mb-1">{project.category}</p>
                <h3 className="text-lg font-bold mb-2 text-amber-50 group-hover:text-amber-400 transition-colors">{project.name}</h3>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700/50">
                  <span className="text-xl font-extrabold text-amber-50">{project.Progress}%</span>
                  <button className="p-2.5 rounded-xl bg-gray-700 text-amber-400 hover:bg-amber-500 hover:text-gray-900 transition-all duration-300" onClick={(e) => { e.stopPropagation(); setSelectedproject(project) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedproject && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[100] p-4 overflow-y-auto" onClick={() => setSelectedproject(null)}>
            <div className="bg-gray-900 border border-gray-800 rounded-[2rem] max-w-3xl w-full relative overflow-hidden shadow-2xl flex flex-col md:flex-row my-auto" onClick={e => e.stopPropagation()}>

              <button className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center bg-gray-800/80 backdrop-blur-sm rounded-full text-amber-200/60 hover:text-white hover:bg-amber-500 transition-all z-10" onClick={() => setSelectedproject(null)}>
                &times;
              </button>

              <div className="w-full md:w-1/2">
                <img src={selectedproject.image} alt={selectedproject.name} className="w-full h-full object-cover aspect-video md:aspect-auto" />
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col">
                <span className="text-amber-500 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-2">{selectedproject.category}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-amber-50">{selectedproject.name}</h3>
                <p className="text-xl md:text-2xl font-extrabold text-amber-400 mb-4 md:mb-6">{selectedproject.Progress}% Complete</p>
                <p className="text-amber-50/70 text-xs md:text-sm leading-relaxed mb-4">{selectedproject.description}</p>
                <ul className="list-disc pl-5 text-amber-50/80 text-xs md:text-sm mb-6 space-y-1">
                  {selectedproject.features.map((feature, idx) => (<li key={idx}>{feature}</li>))}
                </ul>
                <button className="w-full py-3 md:py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-gray-900 font-bold hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all mt-auto">Interested</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects