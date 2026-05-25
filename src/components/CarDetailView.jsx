import React from 'react';
import { MainHeader } from './MainHeader';
import { Footer } from './Footer';

export const CarDetailView = ({ setCurrentView, selectedCar }) => {
  // Fallback car details if none is selected
  const car = selectedCar || {
    name: "Luxury Vehicle",
    price: "₱ --",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80",
    transmission: "Automatic",
    fuel: "Gasoline",
    seats: "4 - Seaters",
    rating: "4.5",
    reviews: "0",
    available: true
  };

  const handleBookNow = () => {
    if (car.available) {
      setCurrentView('booking');
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F9FAFB]">
      <MainHeader setCurrentView={setCurrentView} />

      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button 
            onClick={() => setCurrentView('all-cars')}
            className="flex items-center text-sm font-bold text-gray-500 hover:text-black transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            Back to All Cars
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Side: Image Gallery */}
          <div className="w-full lg:w-3/5 h-[300px] sm:h-[400px] lg:h-auto relative bg-gray-100">
            <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4">
              <span className={`text-[12px] font-black px-3 py-1.5 rounded uppercase tracking-wider shadow-md ${car.available ? 'bg-[#4ADE80] text-white shadow-[#4ADE80]/30' : 'bg-red-500 text-white shadow-red-500/30'}`}>
                {car.available ? 'Available Now' : 'Unavailable'}
              </span>
            </div>
          </div>

          {/* Right Side: Details & Booking */}
          <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col">
            <div className="mb-2">
              <div className="flex items-center gap-2 mb-2 text-yellow-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span className="font-bold text-gray-900">{car.rating}</span>
                <span className="text-sm font-medium text-gray-500">({car.reviews} reviews)</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase mb-1">{car.name}</h1>
              <p className="text-gray-500 font-medium">Premium Edition</p>
            </div>

            <div className="my-6">
              <div className="flex items-end gap-2">
                <span className="text-4xl font-black text-gray-900">{car.price}</span>
                <span className="text-lg font-medium text-gray-500 mb-1">/ day</span>
              </div>
            </div>

            <hr className="border-gray-100 my-2" />

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Transmission</p>
                  <p className="text-sm font-bold text-gray-900">{car.transmission}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Fuel Type</p>
                  <p className="text-sm font-bold text-gray-900">{car.fuel}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Capacity</p>
                  <p className="text-sm font-bold text-gray-900">{car.seats}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Mileage</p>
                  <p className="text-sm font-bold text-gray-900">Unlimited</p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => setCurrentView('all-cars')}
                className="flex-1 py-4 px-6 rounded-xl font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleBookNow}
                className={`flex-[2] py-4 px-6 rounded-xl font-black text-white shadow-lg transition-all transform hover:-translate-y-0.5 ${car.available ? 'bg-[#4ADE80] hover:bg-green-500 shadow-[#4ADE80]/30' : 'bg-gray-400 cursor-not-allowed shadow-gray-400/30'}`}
              >
                {car.available ? 'Book & Rent Now' : 'Not Available'}
              </button>
            </div>

          </div>
        </div>

        {/* Extra Information Sections */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="md:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">About this Car</h2>
            <p className="text-gray-600 font-medium leading-relaxed mb-6">
              Experience the perfect blend of performance, luxury, and comfort with this stunning {car.name}. 
              Whether you are navigating city streets or cruising on the highway, this vehicle offers a remarkably smooth 
              and powerful ride. Meticulously maintained and detailed before every rental, it guarantees an exceptional 
              driving experience for business trips, special occasions, or weekend getaways.
            </p>
            
            <h3 className="text-lg font-bold text-gray-900 mb-4">Key Features included:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {['Apple CarPlay & Android Auto', 'Premium Leather Interior', 'GPS Navigation System', '360° Backup Camera', 'Bluetooth Connectivity', 'Dual-zone Climate Control', 'Blind Spot Monitoring', 'Push Button Start'].map((feature, i) => (
                <div key={i} className="flex items-center text-gray-700 font-medium text-sm">
                  <svg className="w-5 h-5 text-[#4ADE80] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-black text-gray-900 mb-6">Rental Requirements</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-red-50 p-2 rounded-lg text-red-500 mr-3 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Valid Driver's License</h4>
                  <p className="text-xs text-gray-500 font-medium mt-1">Required for all drivers.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-red-50 p-2 rounded-lg text-red-500 mr-3 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Security Deposit</h4>
                  <p className="text-xs text-gray-500 font-medium mt-1">Refundable deposit required.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-red-50 p-2 rounded-lg text-red-500 mr-3 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Age Requirement</h4>
                  <p className="text-xs text-gray-500 font-medium mt-1">Must be 21+ to rent.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
};
