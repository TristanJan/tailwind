import React from 'react';
import { Footer } from './Footer';

import bgLogo from '../../bg logo.jpg';
import carImage from '../../car image.png';

export const LoginView = ({ setCurrentView, showGooglePopup, setShowGooglePopup }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-black relative">


      {/* Google Pop-up Modal */}
      {showGooglePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 backdrop-blur-sm transition-opacity">
          <div className="bg-[#1f1f1f] border border-gray-700 rounded-2xl p-8 max-w-sm w-full relative sm:mx-0 mx-4 shadow-2xl">
            <button onClick={() => setShowGooglePopup(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-800 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="flex flex-col items-center mb-8 mt-2 text-center">
              <h3 className="text-2xl font-medium text-white mb-2">Sign in with Google</h3>
              <p className="text-sm text-gray-300">to continue to Chadoyven</p>
            </div>
            <div className="space-y-4">
              <input type="email" placeholder="Email or phone" className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium" />
              <div className="flex justify-between items-center mt-8 pt-4">
                <a href="#" className="text-blue-400 text-sm hover:text-blue-300 font-medium transition-colors">Create account</a>
                <button onClick={() => setShowGooglePopup(false)} className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 px-6 rounded-md transition-colors shadow-md">Next</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col md:flex-row bg-white">
        <div className="w-full md:w-[55%] bg-white relative flex flex-col items-center justify-center p-8 md:p-12 overflow-hidden">
          <div className="absolute top-6 left-6 w-48 h-36 z-20">
            <img src={bgLogo} alt="Chadoyven Logo" className="w-full h-full object-contain" />
          </div>
          <div className="text-center z-10 space-y-2 max-w-lg mx-auto md:mt-16 mt-32">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#d4d4d4] tracking-wide">Rent a Car Now!</h1>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#d4d4d4] tracking-wide">Where Every <span className="text-[#ff4e00]">Drive</span> Feels First Class.</h2>
          </div>
          <div className="w-full max-w-xl h-64 md:h-96 mt-12 relative z-10 flex items-center justify-center">
            <img src={carImage} alt="Car Image" className="w-full h-full object-contain mix-blend-multiply scale-110" />
          </div>
        </div>

        <div className="w-full md:w-[45%] bg-[#222222] flex flex-col justify-center px-10 sm:px-16 md:px-20 lg:px-24 py-12 text-white">
          <h2 className="text-base font-medium mb-6 text-gray-100">Login into Chadoyven</h2>
          <div className="space-y-4">
            <input type="text" placeholder="Mobile Number, username or email" className="w-full bg-[#2a2a2a] border border-gray-500 rounded-xl px-4 py-3.5 text-sm font-semibold text-white placeholder-gray-300 focus:outline-none focus:border-red-500 transition-colors" />
            <input type="password" placeholder="Password" className="w-full bg-[#2a2a2a] border border-gray-500 rounded-xl px-4 py-3.5 text-sm font-semibold text-white placeholder-gray-300 focus:outline-none focus:border-red-500 transition-colors" />
            <button onClick={() => setCurrentView('main')} className="w-full bg-[#ff0000] hover:bg-red-700 text-white font-bold py-3.5 rounded-full transition-colors text-sm mt-2">Log in</button>
            <div className="text-center mt-3"><a href="#" className="text-xs text-gray-300 hover:text-white transition-colors">Forget password?</a></div>
            <button onClick={() => setShowGooglePopup(true)} className="w-full bg-transparent border border-gray-500 rounded-full py-3.5 flex items-center justify-center gap-3 hover:bg-[#333] transition-colors mt-6">
              <span className="font-bold text-sm">Continue with google</span>
            </button>
            <button onClick={() => setCurrentView('signup')} className="w-full bg-transparent border border-red-900 border-opacity-70 text-[#c22020] font-bold rounded-full py-3.5 hover:bg-black transition-colors md:mt-6 mt-4 text-sm">Create new Account</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
