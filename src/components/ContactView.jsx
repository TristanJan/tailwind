import React from 'react';
import { MainHeader } from './MainHeader';
import { Footer } from './Footer';
import chadoyvenBgImage from '../../chadoyven bg.png';
import redCarImage from '../../car image.png';

export const ContactView = ({ setCurrentView }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-[#2c2c2c]">
      <MainHeader setCurrentView={setCurrentView} />

      <main className="flex-grow flex flex-col">
        {/* Contact Banner Hero */}
        <section className="w-full bg-white flex justify-center align-start">
          <img src={chadoyvenBgImage} alt="Chadoyven Location" className="w-full h-auto" />
        </section>

        {/* Contact Information & Form Section */}
        <section className="w-full bg-white py-16 px-4 md:px-12 lg:px-24 flex flex-col items-center border-t border-gray-200">
          <h2 className="text-[22px] font-bold text-black mb-8">Contact Us</h2>
          
          {/* Info Cards */}
          <div className="w-full max-w-[900px] border border-gray-400 rounded-sm shadow-sm bg-white grid grid-cols-1 md:grid-cols-3 mb-12 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Call Us */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-6 h-6 transform" fill="currentColor" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
                <h3 className="text-[17px] font-bold text-black">Call us</h3>
              </div>
              <p className="font-bold text-black mb-1 text-[14px]">0963 944 5288</p>
              <p className="text-[10px] text-black font-medium">Mon - Fri: 7:00 AM - 9:00 PM</p>
            </div>

            {/* Email Us */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <h3 className="text-[17px] font-bold text-black">Email Us</h3>
              </div>
              <a href="mailto:ace41al@gmail.com" className="font-semibold text-black underline mb-1 text-[14px]">ace41al@gmail.com</a>
              <p className="text-[10px] text-black font-medium">We are here to help!</p>
            </div>

            {/* Visit Us */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
                <h3 className="text-[17px] font-bold text-black">Visit Us</h3>
              </div>
              <p className="font-semibold text-black text-[10px] leading-snug px-3 mb-1">
                P-3 Brgy 24 Arco Village Matorrancas,<br />Gingoog City, misamis oriental, philippines, 9014
              </p>
              <p className="text-[10px] text-black font-medium">Open: Mon - Fri: 7:00 AM - 9:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full max-w-[900px] border border-gray-300 rounded-sm shadow-sm bg-[#ebebeb] p-8 md:p-12">
            <h3 className="text-[20px] font-bold text-black text-center mb-8">Send Us a Message</h3>
            
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-white border border-gray-300 rounded-sm px-4 py-2 text-sm w-full focus:outline-none focus:border-gray-400 placeholder-gray-500"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-white border border-gray-300 rounded-sm px-4 py-2 text-sm w-full focus:outline-none focus:border-gray-400 placeholder-gray-500"
                />
              </div>
              <input 
                type="text" 
                placeholder="Phone Number" 
                className="bg-white border border-gray-300 rounded-sm px-4 py-2 text-sm w-full focus:outline-none focus:border-gray-400 placeholder-gray-500"
              />
              <textarea 
                placeholder="Type your message here..." 
                rows="5"
                className="bg-white border border-gray-300 rounded-sm px-4 py-3 text-sm w-full resize-none focus:outline-none focus:border-gray-400 placeholder-gray-500"
              ></textarea>
              
              <div className="flex justify-center mt-3">
                <button 
                  type="submit"
                  className="bg-gradient-to-b from-[#e33737] to-[#800707] text-white font-bold text-[14px] px-8 py-2 rounded shadow-[0_4px_4px_rgba(0,0,0,0.4)] hover:from-[#f04545] hover:to-[#a01010] transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-white py-16 px-4 md:px-12 lg:px-24 flex justify-center pb-24 md:pb-32 overflow-visible">
          <div className="relative w-full max-w-[800px] z-10">
            <div className="bg-white border border-gray-200 rounded-sm shadow-md overflow-hidden pb-12 md:pb-28">
              <div className="p-6 md:p-8 border-b border-gray-100">
                <h3 className="text-[19px] font-bold text-black tracking-tight">Frequently asked questions</h3>
              </div>
              
              <div className="flex flex-col divide-y divide-gray-100">
                {[
                  "How do I book a rental car?",
                  "What are your rental rate?",
                  "What is your cancellation policy?",
                  "What is your cancellation policy?",
                  "Do you offer airport pickup?"
                ].map((q, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 md:px-6 hover:bg-gray-50 cursor-pointer transition-colors group">
                    <div className="flex items-center gap-3">
                      <svg className="w-2.5 h-3 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                      <span className="text-[14px] text-gray-800 font-medium">{q}</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Red Car Image placed absolutely */}
            <div className="absolute right-[-10px] sm:right-[-20px] md:right-[-50px] bottom-[-20px] sm:bottom-[-30px] md:bottom-[-50px] w-[220px] sm:w-[280px] md:w-[400px] pointer-events-none drop-shadow-2xl z-20">
              <img src={redCarImage} alt="Red Car" className="w-full h-auto object-contain" />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
