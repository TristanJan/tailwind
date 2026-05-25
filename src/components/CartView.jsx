import React from 'react';
import { MainHeader } from './MainHeader';
import { Footer } from './Footer';

export const CartView = ({ setCurrentView, favorites = [], setSelectedCar }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-[#DCDDDF]">
      <MainHeader setCurrentView={setCurrentView} />

      <main className="flex-grow flex justify-center py-12 px-4 md:px-8">
        <div className="w-full max-w-[900px] flex flex-col gap-6">
          
          {favorites.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-12 text-center flex flex-col items-center justify-center">
              <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Your favorites cart is empty</h2>
              <p className="text-gray-500 mb-6">Looks like you haven't added any cars to your favorites yet.</p>
              <button onClick={() => setCurrentView('all-cars')} className="bg-[#4ADE80] text-white px-6 py-2 rounded-lg font-bold shadow-sm hover:bg-green-500 transition-colors">
                Browse Cars
              </button>
            </div>
          ) : (
            favorites.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row p-4 gap-6">
              
              {/* Image Area */}
              <div className="w-full sm:w-[320px] h-[200px] sm:h-[200px] shrink-0 rounded-lg overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>

              {/* Content Area */}
              <div className="flex-1 flex flex-col justify-center py-2 relative">
                <h2 className="text-2xl font-black text-gray-900 mb-1">{item.name}</h2>
                <p className="text-gray-500 font-medium mb-2">Car, 2026</p>
                
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-red-600 font-black text-lg">{item.name.split(' ')[0]}</span>
                  <span className="bg-[#f3e8f5] text-[#8e44ad] text-[10px] font-bold px-2 py-0.5 rounded-sm italic">
                    Free Cancellation
                  </span>
                </div>

                <div className="flex justify-between items-end mt-auto">
                  <p className="text-gray-900">
                    <span className="font-black text-lg">{item.price}</span>
                    <span className="text-gray-500 text-sm font-medium">/hr </span>
                    <span className="font-black text-lg italic">{item.transmission}</span>
                  </p>
                  
                  <button 
                    onClick={() => {
                      if (setSelectedCar) setSelectedCar(item);
                      setCurrentView('booking');
                    }}
                    className="bg-[#4ADE80] text-white text-[15px] font-bold px-8 py-3 rounded-md shadow-[0_4px_14px_0_rgba(74,222,128,0.39)] hover:bg-green-500 transition-colors"
                  >
                    Rent Now
                  </button>
                </div>
              </div>

            </div>
            ))
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};
