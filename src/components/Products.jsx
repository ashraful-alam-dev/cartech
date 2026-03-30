import { useState } from 'react'
import products from '../assets/products'

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <section id="products" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-amber-500 text-sm md:text-base uppercase tracking-[0.3em] font-bold mb-3">
            Accessories and Parts
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Cartech Special
          </h3>
        </div>

        {/* Search - Refined styling */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full md:w-1/2 lg:w-1/3">
            <input
              type="text"
              placeholder="Search accessories..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full p-4 pl-6 rounded-2xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all backdrop-blur-sm"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="group bg-gray-800/40 border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-amber-500/50 flex flex-col relative"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Image Container */}
              <div className="aspect-square w-full overflow-hidden bg-gray-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-amber-500 text-[10px] uppercase tracking-widest font-bold mb-1">
                  {product.category}
                </p>
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-amber-400 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700/50">
                  <span className="text-xl font-extrabold text-white">
                    {product.price}
                  </span>
                  <button
                    className="p-2.5 rounded-xl bg-gray-700 hover:bg-amber-500 hover:text-gray-900 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProduct(product)
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal - Modern Product View */}
        {selectedProduct && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[100] p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="bg-gray-900 border border-gray-800 rounded-[2rem] max-w-3xl w-full relative overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-400 hover:text-white transition-all z-10"
                onClick={() => setSelectedProduct(null)}
              >
                &times;
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover aspect-square md:aspect-auto"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-10 flex flex-col">
                  <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-2">
                    {selectedProduct.brand} • {selectedProduct.category}
                  </span>
                  <h3 className="text-3xl font-bold mb-4 text-white">{selectedProduct.name}</h3>
                  <p className="text-2xl font-extrabold text-amber-400 mb-6">{selectedProduct.price}</p>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {selectedProduct.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm py-2 border-b border-gray-800">
                      <span className="text-gray-500">Warranty</span>
                      <span className="text-white">{selectedProduct.warranty}</span>
                    </div>
                    <div className="flex justify-between text-sm py-2 border-b border-gray-800">
                      <span className="text-gray-500">Availability</span>
                      <span className="text-green-500 font-medium">In Stock</span>
                    </div>
                  </div>

                  <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-gray-900 font-bold hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all mt-auto">
                    Add to Cart
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

export default Products