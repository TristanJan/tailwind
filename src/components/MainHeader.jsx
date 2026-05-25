import React, { useState } from 'react';
import bgLogo from '../../bg logo.jpg';

export const MainHeader = ({ setCurrentView }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotificationMenu, setShowNotificationMenu] = useState(false);
  const [showServiceMenu, setShowServiceMenu] = useState(false);

  return (
    <header className="bg-[#FF0000] text-white flex items-center h-[72px] shadow-md z-20 sticky top-0 relative">
      <div className="bg-white h-full px-4 sm:px-6 flex items-center justify-center overflow-hidden">
        <img src={bgLogo} alt="Logo" className="h-[120%] w-auto object-contain" />
      </div>

      <nav className="hidden md:flex items-center ml-8 gap-8 font-semibold text-[17px] tracking-wide">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('main'); }} className="hover:text-gray-200">Home</a>
        <a 
          href="#about-section" 
          onClick={(e) => { 
            e.preventDefault(); 
            setCurrentView('main'); 
            setTimeout(() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' }), 100);
          }} 
          className="hover:text-gray-200"
        >
          About
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('contact'); }} className="hover:text-gray-200">Contact Us</a>
        <div 
          className="relative flex items-center cursor-pointer hover:text-gray-200 gap-1 group"
          onMouseEnter={() => setShowServiceMenu(true)}
          onMouseLeave={() => setShowServiceMenu(false)}
        >
          <span className="py-2">Our Service</span>
          <svg className={`w-5 h-5 mt-0.5 transition-transform duration-200 ${showServiceMenu ? 'rotate-180' : 'group-hover:translate-y-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
          
          {/* Dropdown Menu */}
          {showServiceMenu && (
            <div className="absolute top-full left-0 pt-2 -ml-4">
              <div className="w-[280px] bg-white rounded-2xl shadow-xl border border-gray-100 text-gray-800 flex flex-col z-50 overflow-hidden py-3 animate-fade-in relative before:content-[''] before:absolute before:top-[-6px] before:left-8 before:w-3 before:h-3 before:bg-white before:border-t before:border-l before:border-gray-100 before:rotate-45">
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setCurrentView('all-cars'); setShowServiceMenu(false); }}
                  className="px-5 py-3 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center gap-4 group/item"
                >
                  <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[15px] leading-tight">Car Rental</span>
                    <span className="text-[12px] text-gray-500 font-medium mt-0.5">Self-drive luxury & economy</span>
                  </div>
                </a>
                <a href="#" className="px-5 py-3 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[15px] leading-tight">Chauffeur Service</span>
                    <span className="text-[12px] text-gray-500 font-medium mt-0.5">Professional VIP drivers</span>
                  </div>
                </a>
                <a href="#" className="px-5 py-3 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[15px] leading-tight">Airport Transfer</span>
                    <span className="text-[12px] text-gray-500 font-medium mt-0.5">Seamless pick-up & drop-off</span>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="flex items-center ml-auto mr-24 gap-6 relative">
        <div
          onClick={() => {
            setShowUserMenu(!showUserMenu);
            setShowNotificationMenu(false);
          }}
          className="hidden md:flex flex-col items-center cursor-pointer hover:text-gray-200 relative mb-1"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          <span className="text-[11px] font-semibold absolute -bottom-3">User</span>

          {/* User Dropdown Menu */}
          {showUserMenu && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute top-12 right-0 w-[360px] bg-[#242526] rounded-xl shadow-2xl p-4 text-[#E4E6EB] flex flex-col z-50 border border-gray-700 text-left cursor-default drop-shadow-2xl"
            >
              <div className="flex items-center gap-3 p-2 hover:bg-[#3A3B3C] rounded-lg cursor-pointer transition-colors">
                <div className="w-10 h-10 bg-gray-500 rounded-full flex-shrink-0 bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=Tristan')] bg-cover"></div>
                <span className="font-semibold text-[17px]">User</span>
              </div>

              <hr className="border-gray-600 my-2 shadow-sm" />

              {/* Menu Items */}
              <div 
                onClick={(e) => { e.stopPropagation(); setCurrentView('settings'); setShowUserMenu(false); }}
                className="flex items-center p-2 hover:bg-[#3A3B3C] rounded-lg cursor-pointer transition-colors group mt-1"
              >
                <div className="bg-[#3A3B3C] group-hover:bg-[#4E4F50] w-9 h-9 rounded-full flex items-center justify-center mr-3 transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 text-[#E4E6EB]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                </div>
                <span className="font-medium text-[15px] flex-grow">Settings & privacy</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
              </div>

              <div className="flex items-center p-2 hover:bg-[#3A3B3C] rounded-lg cursor-pointer transition-colors group mt-1">
                <div className="bg-[#3A3B3C] group-hover:bg-[#4E4F50] w-9 h-9 rounded-full flex items-center justify-center mr-3 transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 text-[#E4E6EB]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                </div>
                <span className="font-medium text-[15px] flex-grow">Help & support</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
              </div>

              <div className="flex items-center p-2 hover:bg-[#3A3B3C] rounded-lg cursor-pointer transition-colors group mt-1">
                <div className="bg-[#3A3B3C] group-hover:bg-[#4E4F50] w-9 h-9 rounded-full flex items-center justify-center mr-3 transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 text-[#E4E6EB]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                </div>
                <div className="flex flex-col flex-grow leading-none gap-0.5">
                  <span className="font-medium text-[15px]">Report a problem</span>
                  <span className="text-[12px] text-gray-400 font-medium">CTRL B</span>
                </div>
              </div>

              <div className="flex items-center p-2 hover:bg-[#3A3B3C] rounded-lg cursor-pointer transition-colors group mt-1">
                <div className="bg-[#3A3B3C] group-hover:bg-[#4E4F50] w-9 h-9 rounded-full flex items-center justify-center mr-3 transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 text-[#E4E6EB]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path></svg>
                </div>
                <span className="font-medium text-[15px] flex-grow">Display & accessibility</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
              </div>

              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentView('login');
                  setShowUserMenu(false);
                }}
                className="flex items-center p-2 hover:bg-[#3A3B3C] rounded-lg cursor-pointer transition-colors group mt-1"
              >
                <div className="bg-[#3A3B3C] group-hover:bg-[#4E4F50] w-9 h-9 rounded-full flex items-center justify-center mr-3 transition-colors flex-shrink-0">
                  <svg className="w-5 h-5 text-[#E4E6EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                </div>
                <span className="font-medium text-[15px] flex-grow">Log out</span>
              </div>
            </div>
          )}
        </div>

        <div className="relative flex flex-col items-center">
          <button
            onClick={() => {
              setShowNotificationMenu(!showNotificationMenu);
              setShowUserMenu(false);
            }}
            className="hover:text-gray-200 relative mt-1"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
            <div className="absolute top-0 right-1 w-2.5 h-2.5 bg-red-600 rounded-full"></div>
          </button>

          {/* Notification Dropdown Menu */}
          {showNotificationMenu && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute top-12 right-0 md:-right-4 w-[360px] bg-[#242526] rounded-xl shadow-2xl pb-3 text-[#E4E6EB] flex flex-col z-50 border border-gray-700 text-left cursor-default shadow-black drop-shadow-2xl"
            >
              <div className="flex justify-between items-center px-4 pt-4 pb-2">
                <h2 className="text-2xl font-bold text-[#E4E6EB]">Notifications</h2>
                <button className="text-gray-400 hover:bg-[#3A3B3C] rounded-full p-2 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                </button>
              </div>

              <div className="flex px-4 gap-2 mb-2">
                <button className="bg-[#263951] text-[#2e89ff] font-semibold py-1.5 px-3 rounded-full text-[15px]">All</button>
                <button className="hover:bg-[#3A3B3C] text-[#E4E6EB] font-semibold py-1.5 px-3 rounded-full text-[15px] transition-colors">Unread</button>
              </div>

              <div className="flex justify-between items-center px-4 pt-2">
                <h3 className="text-[#E4E6EB] font-semibold text-[17px] mb-2">Today</h3>
              </div>

              <div className="flex items-start gap-3 px-2 py-2 mx-2 hover:bg-[#3A3B3C] rounded-lg cursor-pointer transition-colors relative mb-1">
                <div className="w-14 h-14 bg-gray-600 rounded-full flex-shrink-0 relative bg-[url('https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=150')] bg-cover">
                  <div className="absolute -bottom-1 -right-1 bg-[#242526] rounded-full p-[3px]">
                    <div className="bg-[#ff0000] rounded-full p-1 w-6 h-6 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pr-6">
                  <span className="text-[#E4E6EB] text-[15px] leading-tight">
                    <span className="font-bold">Flash Deal:</span> Grab 20% off all luxury sedans this weekend only!
                  </span>
                  <span className="text-[#2e89ff] text-[13px] font-semibold mt-1">2h</span>
                </div>
                <div className="w-3 h-3 bg-[#2e89ff] rounded-full absolute right-4 top-1/2 -translate-y-1/2 shadow-[0_0_8px_#2e89ff]"></div>
              </div>

              <div className="flex justify-between items-center px-4 pt-2">
                <h3 className="text-[#E4E6EB] font-semibold text-[17px] mb-2">Earlier</h3>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('notifications'); setShowNotificationMenu(false); }} className="text-[#2e89ff] text-[15px] hover:underline mb-2">See all</a>
              </div>

              <div className="flex items-start gap-3 px-2 py-2 mx-2 hover:bg-[#3A3B3C] rounded-lg cursor-pointer transition-colors relative">
                <div className="w-14 h-14 bg-gray-600 rounded-full flex-shrink-0 relative bg-[url('https://images.unsplash.com/photo-1503376713292-0b162624f2b1?auto=format&fit=crop&w=150')] bg-cover">
                  <div className="absolute -bottom-1 -right-1 bg-[#242526] rounded-full p-[3px]">
                    <div className="bg-blue-500 rounded-full p-1 w-6 h-6 flex items-center justify-center">
                      <span className="text-white text-[12px] font-bold">%</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pr-6 pb-2">
                  <span className="text-gray-300 text-[15px] leading-tight">
                    <span className="font-bold text-[#E4E6EB]">Chadoyven Special:</span> Get $50 off your first sports car rental when you invite your friends.
                  </span>
                  <span className="text-gray-400 text-[13px] font-medium mt-1">1d</span>
                </div>
              </div>

            </div>
          )}
        </div>

        <button onClick={() => setCurrentView('cart')} className="hover:text-gray-200">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
        </button>
      </div>
    </header>
  );
};
