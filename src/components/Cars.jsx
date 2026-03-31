import { useState } from 'react'
import cars from '../assets/cars'

function Cars() {
  const [selectedCar, setSelectedCar] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterBrand, setFilterBrand] = useState('')

  const filteredCars = cars.filter(car => {
    return (
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterBrand ? car.brand === filterBrand : true)
    )
  })

  return (
    <section id="cars" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center mb-12">
          <h2 className="text-amber-500 text-sm md:text-base uppercase tracking-[0.3em] font-bold mb-3">
            Our Collections
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Featured Vehicles
          </h3>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all shadow-inner"
            />
          </div>
          <select
            value={filterBrand}
            onChange={e => setFilterBrand(e.target.value)}
            className="p-4 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all cursor-pointer"
          >
            <option value="">All Brands</option>
            {[...new Set(cars.map(car => car.brand))].map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map(car => (
            <div
              key={car.id}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/50 cursor-pointer"
              onClick={() => setSelectedCar(car)}
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-500/30">
                  <p className="text-amber-400 font-bold text-sm">{car.price}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-1">{car.brand}</p>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">{car.name}</h3>
                  </div>
                  <span className="text-gray-500 text-sm">{car.year}</span>
                </div>

                <button
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-gray-900 font-bold transition-all opacity-90 hover:opacity-100 shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedCar(car)
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No cars found matching your criteria.
          </div>
        )}

        {selectedCar && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[100] p-4"
            onClick={() => setSelectedCar(null)}
          >
            <div
              className="bg-gray-900 border border-gray-700 rounded-3xl max-w-4xl w-full relative transform transition-all max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-amber-500 transition-all z-10"
                onClick={() => setSelectedCar(null)}
              >
                &times;
              </button>

              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-6">
                  <img
                    src={selectedCar.image}
                    alt={selectedCar.name}
                    className="w-full h-auto rounded-2xl object-cover shadow-lg"
                  />
                  <div className="mt-6 flex items-center gap-4">
                     <span className="text-3xl font-bold text-white">{selectedCar.price}</span>
                     <span className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-xs font-bold uppercase">Ready for Pickup</span>
                  </div>
                </div>

                <div className="lg:w-1/2 p-8 bg-gray-800/30">
                  <h3 className="text-3xl font-bold mb-2 text-white">{selectedCar.name}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                    {selectedCar.description || "Experience the pinnacle of automotive excellence with this premium vehicle."}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { label: 'Brand', val: selectedCar.brand },
                      { label: 'Transmission', val: selectedCar.transmission },
                      { label: 'Fuel Type', val: selectedCar.fuelType },
                      { label: 'Horsepower', val: selectedCar.horsepower },
                      { label: 'Top Speed', val: selectedCar.topSpeed },
                      { label: 'Mileage', val: selectedCar.mileage },
                    ].map((spec, i) => (
                      <div key={i} className="border-b border-gray-700 pb-2">
                        <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">{spec.label}</p>
                        <p className="text-white font-medium">{spec.val}</p>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-gray-900 font-bold hover:shadow-amber-500/20 hover:shadow-xl transition-all">
                    Inquire About This Car
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Cars