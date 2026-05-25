import React from 'react';
import { Footer } from './Footer';

const ChevronDownIcon = () => (
  <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
  </svg>
);

export const SignupView = ({ setCurrentView }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#222222] text-white">
      <div className="flex-grow flex justify-center py-12 px-6">
        <div className="w-full max-w-lg relative mt-4">
          {/* Back Arrow */}
          <button 
            onClick={() => setCurrentView('login')}
            className="absolute -left-12 top-1 text-white hover:text-gray-300 lg:block hidden"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button 
            onClick={() => setCurrentView('login')}
            className="lg:hidden block mb-6 text-white hover:text-gray-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-1">Get started on Chadoyven</h1>
            <p className="text-sm text-gray-300">Sign up to rent cars.</p>
          </div>

          <div className="space-y-5">
            {/* Mobile number or email */}
            <div>
              <label className="block text-sm font-bold mb-2">Mobile number or email</label>
              <input 
                type="text" 
                placeholder="Mobile Number, username or email" 
                className="w-full bg-[#1e1e1e] border border-gray-600 rounded-xl px-4 py-3.5 text-sm font-semibold text-white placeholder-gray-300 focus:outline-none focus:border-red-500 transition-colors shadow-inner"
              />
              <p className="text-[12px] text-gray-400 mt-2 tracking-tight">
                You may receive notifications from us. <a href="#" className="text-[#3b82f6] hover:underline">Learn why we ask for your contact information.</a>
              </p>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold mb-2">Password</label>
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-[#1e1e1e] border border-gray-600 rounded-xl px-4 py-3.5 text-sm font-semibold text-white placeholder-gray-300 focus:outline-none focus:border-red-500 transition-colors shadow-inner"
              />
            </div>

            {/* Birthday */}
            <div>
              <label className="flex items-center text-sm font-bold mb-2 gap-1 cursor-pointer">
                Birthday 
                <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </label>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <select className="w-full bg-[#1e1e1e] border border-gray-600 rounded-xl px-4 py-3.5 text-sm font-semibold text-white focus:outline-none focus:border-red-500 appearance-none shadow-inner cursor-pointer relative z-10 bg-transparent">
                    <option className="bg-[#222]">Month</option>
                    <option className="bg-[#222]">January</option>
                    <option className="bg-[#222]">February</option>
                  </select>
                  <ChevronDownIcon />
                </div>
                <div className="relative flex-1">
                  <select className="w-full bg-[#1e1e1e] border border-gray-600 rounded-xl px-4 py-3.5 text-sm font-semibold text-white focus:outline-none focus:border-red-500 appearance-none shadow-inner cursor-pointer relative z-10 bg-transparent">
                    <option className="bg-[#222]">Day</option>
                    <option className="bg-[#222]">1</option>
                    <option className="bg-[#222]">2</option>
                  </select>
                  <ChevronDownIcon />
                </div>
                <div className="relative flex-1">
                  <select className="w-full bg-[#1e1e1e] border border-gray-600 rounded-xl px-4 py-3.5 text-sm font-semibold text-white focus:outline-none focus:border-red-500 appearance-none shadow-inner cursor-pointer relative z-10 bg-transparent">
                    <option className="bg-[#222]">Year</option>
                    <option className="bg-[#222]">2026</option>
                    <option className="bg-[#222]">2025</option>
                  </select>
                  <ChevronDownIcon />
                </div>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-bold mb-2">Name</label>
              <input 
                type="text" 
                placeholder="Fullname" 
                className="w-full bg-[#1e1e1e] border border-gray-600 rounded-xl px-4 py-3.5 text-sm font-semibold text-white placeholder-gray-300 focus:outline-none focus:border-red-500 transition-colors shadow-inner"
              />
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-bold mb-2">Username</label>
              <input 
                type="text" 
                placeholder="Username" 
                className="w-full bg-[#1e1e1e] border border-gray-600 rounded-xl px-4 py-3.5 text-sm font-semibold text-white placeholder-gray-300 focus:outline-none focus:border-red-500 transition-colors shadow-inner"
              />
            </div>

            {/* Disclaimers */}
            <div className="space-y-[10px] pt-1">
              <p className="text-[12.5px] text-[#c9c9c9] leading-snug">
                People who use our service may have uploaded your contact information to Chadoyven. <a href="#" className="text-[#3b82f6] hover:underline">Learn more.</a>
              </p>
              <p className="text-[12.5px] text-[#c9c9c9] leading-snug">
                By tapping Submit, you agree to create an account and to Chadoyven's <a href="#" className="text-[#3b82f6] hover:underline">Terms</a>, <a href="#" className="text-[#3b82f6] hover:underline">Privacy Policy</a> and <a href="#" className="text-[#3b82f6] hover:underline">Cookies Policy.</a>
              </p>
              <p className="text-[12.5px] text-[#c9c9c9] leading-snug">
                The <a href="#" className="text-[#3b82f6] hover:underline">Privacy Policy</a> describes the ways we can use the information we collect when you create an account. For example, we use this information to provide, personalize and improve our products, including ads.
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-4 pt-3">
              <button className="w-full bg-[#ff0000] hover:bg-red-700 text-white font-bold py-3.5 rounded-full transition-colors text-sm shadow-md">
                Submit
              </button>
              <button 
                onClick={() => setCurrentView('login')}
                className="w-full bg-transparent border border-gray-500 hover:bg-[#333] text-white font-bold py-3.5 rounded-full transition-colors text-sm"
              >
                I already have an account
              </button>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
