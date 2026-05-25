import React, { useState } from 'react';
import { MainHeader } from './MainHeader';
import { Footer } from './Footer';

const initialCars = [
  { name: "Lamborgini", price: "₱ 10,000", seats: "2", transmission: "Automatic", fuel: "Diesel", rating: "4.5", reviews: "120", available: true, image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80" },
  { name: "Honda Civic Type - R", price: "₱ 2,500", seats: "4", transmission: "Automatic", fuel: "Diesel", rating: "4.5", reviews: "120", available: true, image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80" },
  { name: "Ford Ranger Raptor", price: "₱ 6,500", seats: "4", transmission: "Automatic", fuel: "Diesel", rating: "4.5", reviews: "120", available: true, image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80" },
  { name: "Honda CR-V", price: "₱ 3,500", seats: "4", transmission: "Automatic", fuel: "Diesel", rating: "4.5", reviews: "120", available: true, image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80" },
  { name: "Bugatti", price: "₱ 15,000", seats: "2", transmission: "Automatic", fuel: "Diesel", rating: "4.5", reviews: "120", available: false, image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80" },
  { name: "Camaro Chevrolet", price: "₱ 8,000", seats: "4", transmission: "Automatic", fuel: "Diesel", rating: "4.5", reviews: "120", available: true, image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80" }
];

const extraTemplates = [
  { name: "Blue Sports Car", price: "₱ 4,500", seats: "2", transmission: "Manual", fuel: "Gasoline", rating: "4.8", reviews: "85", available: true, image: "/blue_sports_car.png" },
  { name: "White Luxury SUV", price: "₱ 5,500", seats: "7+", transmission: "Automatic", fuel: "Diesel", rating: "4.9", reviews: "210", available: true, image: "/white_suv.png" },
  { name: "Black Premium Sedan", price: "₱ 6,000", seats: "5", transmission: "Automatic", fuel: "Gasoline", rating: "4.7", reviews: "150", available: true, image: "/black_sedan.png" },
  { name: "Silver Hatchback", price: "₱ 1,500", seats: "5", transmission: "Manual", fuel: "Gasoline", rating: "4.2", reviews: "60", available: true, image: "/silver_hatchback.png" },
  { name: "Red Family Van", price: "₱ 3,000", seats: "7+", transmission: "Automatic", fuel: "Diesel", rating: "4.6", reviews: "95", available: false, image: "/red_van.png" }
];

const allCarsData = [...initialCars];
for (let i = 0; i < 30; i++) {
  const template = extraTemplates[i % extraTemplates.length];
  allCarsData.push({
    ...template,
    name: `${template.name} V${i + 1}`
  });
}

export const AllCarsView = ({ setCurrentView, favorites = [], toggleFavorite, setSelectedCar }) => {
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(allCarsData.length / itemsPerPage);
  const displayedCars = allCarsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const minPercent = (minPrice / 20000) * 100;
  const maxPercent = (maxPrice / 20000) * 100;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 500);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 500);
    setMaxPrice(value);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-[#EFEFEF]">
      <MainHeader setCurrentView={setCurrentView} />

      <main className="flex-grow pb-12">
        {/* Header Area */}
        <header className="bg-[#EFEFEF] pt-8 pb-4 px-8 border-b border-gray-300">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-3xl font-bold text-black flex-1">See All Cars</h1>

            <div className="flex items-center gap-4 flex-1 justify-end">
              {/* Search */}
              <div className="relative w-full max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 sm:text-sm"
                  placeholder="Search cars"
                />
              </div>

              {/* Filters Button (Mobile/Tablet) */}
              <button
                onClick={() => setShowFilters(true)}
                className="flex items-center gap-2 bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 lg:hidden"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                </svg>
                Filters
              </button>

              {/* Sort Dropdown */}
              <div className="relative">
                <select className="block w-full pl-3 pr-10 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 appearance-none">
                  <option>Sort by: Price (Low - High)</option>
                  <option>Sort by: Price (High - Low)</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="max-w-[1400px] mx-auto mt-6 px-4 md:px-8 flex flex-col lg:flex-row gap-6">

          {/* Mobile Backdrop */}
          {showFilters && (
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setShowFilters(false)}
            ></div>
          )}

          {/* Sidebar Filters */}
          <aside className={`fixed inset-y-0 left-0 z-50 w-4/5 max-w-sm bg-white shadow-xl overflow-y-auto p-6 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:w-[280px] lg:shrink-0 lg:rounded-xl lg:shadow-sm lg:border lg:border-gray-200 lg:z-auto lg:p-6 lg:mt-0 ${showFilters ? 'translate-x-0' : '-translate-x-full'}`}>
            {/* Close button for mobile */}
            <div className="flex justify-between items-center mb-6 lg:hidden">
              <h2 className="text-xl font-bold text-black">Filters</h2>
              <button onClick={() => setShowFilters(false)} className="text-gray-500 hover:text-black">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-md font-bold text-black mb-3">Car Type</h3>
              <div className="space-y-2">
                {['Sport Cars', 'SUV', 'Van', 'Hatchback'].map(type => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#4ADE80] focus:ring-[#4ADE80]" />
                    <span className="text-sm font-semibold text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            <hr className="border-gray-200 mb-6" />

            <div className="mb-6">
              <h3 className="text-md font-bold text-black mb-3">Price Range</h3>
              <div className="relative w-full h-1.5 bg-gray-200 rounded-full mb-4 mt-2">
                <div
                  className="absolute h-1.5 bg-[#4ADE80] rounded-full"
                  style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
                ></div>
                <input
                  type="range"
                  min="0" max="20000" step="500"
                  value={minPrice}
                  onChange={handleMinChange}
                  className="absolute w-full -top-1.5 h-1.5 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[#4ADE80] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow"
                />
                <input
                  type="range"
                  min="0" max="20000" step="500"
                  value={maxPrice}
                  onChange={handleMaxChange}
                  className="absolute w-full -top-1.5 h-1.5 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[#4ADE80] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow"
                />
              </div>
              <p className="text-sm font-semibold text-gray-800">
                ₱ {minPrice.toLocaleString()} - ₱ {maxPrice.toLocaleString()} / day
              </p>
            </div>
            <hr className="border-gray-200 mb-6" />

            <div className="mb-6">
              <h3 className="text-md font-bold text-black mb-3">Transmission</h3>
              <div className="space-y-2">
                {['Automatic', 'Manual'].map(type => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#4ADE80] focus:ring-[#4ADE80]" />
                    <span className="text-sm font-semibold text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            <hr className="border-gray-200 mb-6" />

            <div className="mb-6">
              <h3 className="text-md font-bold text-black mb-3">Fuel Type</h3>
              <div className="space-y-2">
                {['Gasoline', 'Diesel', 'Electric'].map(type => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#4ADE80] focus:ring-[#4ADE80]" />
                    <span className="text-sm font-semibold text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            <hr className="border-gray-200 mb-6" />

            <div className="mb-6">
              <h3 className="text-md font-bold text-black mb-3">Seats</h3>
              <div className="flex flex-wrap gap-4">
                {['2', '4', '5', '7+'].map(seats => (
                  <label key={seats} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#4ADE80] focus:ring-[#4ADE80]" />
                    <span className="text-sm font-semibold text-gray-700">{seats}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full bg-[#4ADE80] text-white font-bold py-3 rounded-lg shadow-md hover:bg-green-500 transition-colors shadow-[#4ADE80]/30">
              Apply Filters
            </button>
          </aside>

          {/* Cars Grid Container */}
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedCars.map((car, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm flex flex-col">
                  {/* Image Area */}
                  <div className="relative h-[200px] w-full">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                    <button
                      onClick={() => toggleFavorite && toggleFavorite(car)}
                      className={`absolute top-3 right-3 transition-colors ${favorites.find(c => c.name === car.name) ? 'text-red-500' : 'text-white hover:text-red-500'}`}
                    >
                      <svg className="w-6 h-6 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </button>
                  </div>

                  {/* Content Area */}
                  <div className="p-4 flex-1 flex flex-col">
                    {/* Title & Availability */}
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3 className="font-bold text-gray-900 text-lg truncate flex-1">{car.name}</h3>
                      <span className={`shrink-0 text-[11px] font-bold px-2 py-1 rounded shadow-sm ${car.available ? 'bg-[#4ADE80] text-white shadow-[#4ADE80]/30' : 'bg-red-500 text-white shadow-red-500/30'}`}>
                        {car.available ? 'Available' : 'Unavailable'}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-bold text-gray-800">{car.rating}</span>
                      <span className="text-sm text-gray-500 font-semibold">({car.reviews} reviews)</span>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-200 mb-4" />

                    {/* Footer Stats & Buttons */}
                    <div className="flex justify-between items-end mt-auto gap-2">
                      {/* Specs */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600 font-semibold">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                          {car.transmission}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 font-semibold">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                          {car.fuel}
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-col gap-2 w-28">
                        <button
                          onClick={() => {
                            setSelectedCar(car);
                            setCurrentView('car-detail');
                          }}
                          className="w-full text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 py-1.5 rounded border border-gray-300 shadow-sm transition-colors"
                        >
                          View Detail
                        </button>
                        <button
                          onClick={() => {
                            if (car.available) {
                              setSelectedCar(car);
                              setCurrentView('booking');
                            }
                          }}
                          className={`w-full text-xs font-bold py-1.5 rounded shadow-sm transition-colors ${car.available ? 'bg-[#4ADE80] text-white hover:bg-green-500 shadow-[#4ADE80]/30' : 'bg-gray-400 text-white cursor-not-allowed shadow-gray-400/30'}`}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-12 mb-4 gap-1">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-white border border-gray-300 rounded text-sm font-semibold text-gray-700 hover:bg-gray-50 mr-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                &lt;&lt;Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded text-sm font-semibold border border-gray-300 ${page === currentPage ? 'bg-gray-200 text-gray-800' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-white border border-gray-300 rounded text-sm font-semibold text-gray-700 hover:bg-gray-50 ml-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next&gt;&gt;
              </button>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
