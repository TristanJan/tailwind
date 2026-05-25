import React from 'react';

export const Footer = () => (
  <footer className="bg-black text-gray-500 py-6 px-8 flex justify-center items-center border-t border-gray-800 relative z-30 flex-col md:flex-row mt-auto">
    <div className="md:absolute md:left-8 flex flex-col items-start gap-1 mb-4 md:mb-0">
      <span className="font-bold text-white text-sm">Contact Us</span>
      <div className="flex gap-4 mt-1">
        <svg className="w-5 h-5 text-white cursor-pointer hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        <svg className="w-5 h-5 text-white cursor-pointer hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        <svg className="w-5 h-5 text-white cursor-pointer hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z"/></svg>
      </div>
    </div>
    <div className="text-[13px] font-semibold text-gray-500">
      2026 Chadoyven. All rights reserved.
    </div>
  </footer>
);
