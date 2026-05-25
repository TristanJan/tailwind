import React, { useState } from 'react';

export const SettingsView = ({ setCurrentView }) => {
  const [activeTab, setActiveTab] = useState('account');
  const [notificationsOn, setNotificationsOn] = useState(true);
  const [locationServicesOn, setLocationServicesOn] = useState(true);

  // SVG Icons
  const icons = {
    account: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
    app: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    support: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    personal: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h16v12H4z" opacity=".3" /><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12zM14 9h4v2h-4zm0 4h4v2h-4zM6 9h6v6H6z" /></svg>,
    payment: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" /></svg>,
    history: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1 .89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" /></svg>,
    notification: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>,
    language: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.09 13.36 4 12.69 4 12s.09-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.17.64.26 1.31.26 2s-.09 1.36-.26 2h-3.38z" /></svg>,
    theme: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></svg>,
    location: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>,
    help: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" /></svg>,
    contact: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.33.26 2.61.74 3.77L2 22l6.23-1.15c1.16.48 2.44.74 3.77.74 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.17 0-2.3-.2-3.35-.57l-4.14.76.76-4.14c-.37-1.05-.57-2.18-.57-3.35 0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" /><circle cx="12" cy="12" r="3" /></svg>,
    chevronRight: <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
  };

  const NavItem = ({ id, label, icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left ${activeTab === id
        ? 'bg-blue-50 text-blue-600 font-bold shadow-sm border border-blue-100'
        : 'text-gray-600 hover:bg-gray-100 font-medium'
        }`}
    >
      <div className={`${activeTab === id ? 'text-blue-600' : 'text-gray-500'}`}>
        {icon}
      </div>
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#F3F4F6] font-sans flex justify-center py-10 px-4 sm:px-8 overflow-y-auto">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 relative pb-8">

        {/* LEFT SIDEBAR */}
        <div className="w-full md:w-[280px] shrink-0 flex flex-col gap-6">

          {/* Header Title & Back Button */}
          <div className="flex items-center gap-2 px-2">
            <button
              onClick={() => setCurrentView('main')}
              className="p-2 -ml-2 rounded-full hover:bg-gray-200 transition-colors text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Go back"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-3xl font-black text-gray-900">Setting</h1>
          </div>

          {/* User Profile Summary */}
          <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100 flex items-center">
            <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-tr from-gray-800 to-black flex items-center justify-center shrink-0 shadow-inner">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="font-bold text-gray-900 text-[16px] leading-tight">User Name</h3>
              <p className="text-gray-500 text-[13px] font-medium mt-0.5">user@gmail.com</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            <NavItem id="account" label="Account Settings" icon={icons.account} />
            <NavItem id="app" label="App Settings" icon={icons.app} />
            <NavItem id="support" label="Support" icon={icons.support} />
          </nav>

          {/* Logout Button */}
          <button
            onClick={() => setCurrentView('login')}
            className="w-full mt-auto flex justify-center items-center gap-2 bg-white hover:bg-red-50 border border-red-100 text-red-600 font-bold py-3 rounded-xl shadow-sm transition-colors group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            Logout
          </button>
        </div>

        {/* RIGHT MAIN CONTENT AREA */}
        <div className="flex-1 bg-white rounded-2xl shadow-md border border-gray-200 p-8 min-h-[500px]">

          {/* ACCOUNT SETTINGS */}
          {activeTab === 'account' && (
            <div className="animate-fade-in">
              <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-4">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">Account Settings</h2>
                  <p className="text-gray-500 mt-1 font-medium">Manage your personal information and billing details.</p>
                </div>
                <button className="bg-[#2e89ff] hover:bg-blue-600 text-white text-sm font-bold py-2 px-6 rounded-lg transition-colors shadow-sm">
                  Edit Profile
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <div className="p-5 flex items-center justify-between border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50 hover:border-blue-200 transition-all group">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      {icons.personal}
                    </div>
                    <div>
                      <h3 className="text-gray-900 text-[16px] font-bold">Personal Information</h3>
                      <p className="text-gray-500 text-sm mt-0.5">Update your name, email, and phone number.</p>
                    </div>
                  </div>
                  {icons.chevronRight}
                </div>

                <div className="p-5 flex items-center justify-between border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50 hover:border-blue-200 transition-all group">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      {icons.payment}
                    </div>
                    <div>
                      <h3 className="text-gray-900 text-[16px] font-bold">Payment Methods</h3>
                      <p className="text-gray-500 text-sm mt-0.5">Manage your credit cards and billing preferences.</p>
                    </div>
                  </div>
                  {icons.chevronRight}
                </div>

                <div className="p-5 flex items-center justify-between border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50 hover:border-blue-200 transition-all group">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      {icons.history}
                    </div>
                    <div>
                      <h3 className="text-gray-900 text-[16px] font-bold">Rental History</h3>
                      <p className="text-gray-500 text-sm mt-0.5">View your past reservations and receipts.</p>
                    </div>
                  </div>
                  {icons.chevronRight}
                </div>
              </div>
            </div>
          )}

          {/* APP SETTINGS */}
          {activeTab === 'app' && (
            <div className="animate-fade-in">
              <div className="mb-8 border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-gray-900">App Settings</h2>
                <p className="text-gray-500 mt-1 font-medium">Customize your Chadoyven experience.</p>
              </div>

              <div className="flex flex-col gap-6">

                {/* Notification Toggle */}
                <div className="flex items-center justify-between p-2">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center">
                      {icons.notification}
                    </div>
                    <div>
                      <h3 className="text-gray-900 text-[16px] font-bold">Push Notifications</h3>
                      <p className="text-gray-500 text-sm mt-0.5">Receive alerts for reservations and deals.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setNotificationsOn(!notificationsOn)}
                    className={`w-14 h-7 rounded-full p-1 transition-colors duration-200 ease-in-out relative flex items-center ${notificationsOn ? 'bg-[#4ADE80]' : 'bg-gray-300'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${notificationsOn ? 'translate-x-7' : 'translate-x-0'}`}></div>
                  </button>
                </div>

                <hr className="border-gray-100" />

                {/* Location Services Toggle */}
                <div className="flex items-center justify-between p-2">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center">
                      {icons.location}
                    </div>
                    <div>
                      <h3 className="text-gray-900 text-[16px] font-bold">Location Services</h3>
                      <p className="text-gray-500 text-sm mt-0.5">Allow Chadoyven to find cars near you.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setLocationServicesOn(!locationServicesOn)}
                    className={`w-14 h-7 rounded-full p-1 transition-colors duration-200 ease-in-out relative flex items-center ${locationServicesOn ? 'bg-[#4ADE80]' : 'bg-gray-300'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${locationServicesOn ? 'translate-x-7' : 'translate-x-0'}`}></div>
                  </button>
                </div>

                <hr className="border-gray-100" />

                {/* Language Select */}
                <div className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors group">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center">
                      {icons.language}
                    </div>
                    <div>
                      <h3 className="text-gray-900 text-[16px] font-bold">Language</h3>
                      <p className="text-gray-500 text-sm mt-0.5">Select your preferred app language.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900 font-bold">English</span>
                    {icons.chevronRight}
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* Theme Select */}
                <div className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors group">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center">
                      {icons.theme}
                    </div>
                    <div>
                      <h3 className="text-gray-900 text-[16px] font-bold">App Theme</h3>
                      <p className="text-gray-500 text-sm mt-0.5">Choose between Light or Dark mode.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900 font-bold">Light</span>
                    {icons.chevronRight}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* SUPPORT */}
          {activeTab === 'support' && (
            <div className="animate-fade-in">
              <div className="mb-8 border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-gray-900">Support</h2>
                <p className="text-gray-500 mt-1 font-medium">We're here to help you 24/7.</p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-blue-900 font-bold text-lg">Need immediate assistance?</h3>
                    <p className="text-blue-700 mt-1">Our support team is available around the clock to help with your rentals.</p>
                  </div>
                  <button
                    onClick={() => setCurrentView('contact')}
                    className="shrink-0 bg-[#2e89ff] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-sm"
                  >
                    Contact Support
                  </button>
                </div>

                <div className="p-5 flex items-center justify-between border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50 hover:border-gray-200 transition-all group mt-2">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      {icons.help}
                    </div>
                    <div>
                      <h3 className="text-gray-900 text-[16px] font-bold">Help Center & FAQ</h3>
                      <p className="text-gray-500 text-sm mt-0.5">Find answers to common questions about Chadoyven.</p>
                    </div>
                  </div>
                  {icons.chevronRight}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
