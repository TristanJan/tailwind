import React, { useState } from 'react';
import { MainHeader } from './MainHeader';
import { Footer } from './Footer';

const initialNotifications = [
  {
    id: 1,
    title: "Great Deal!",
    description: "30% off on weekend rentals, use code: WEEKEND30",
    time: "Just now",
    type: "deal",
    read: false,
    image: null
  },
  {
    id: 2,
    title: "Feedback Request",
    description: "Chadoyven experience\n⭐⭐⭐⭐⭐",
    time: "5d ago",
    type: "feedback",
    read: false,
    image: "/feedback_icon.png"
  },
  {
    id: 3,
    title: "Rental Ended",
    description: "Your bmw has ended, extend rental?",
    time: "Just now",
    type: "system",
    read: false,
    image: "/black_sedan.png"
  }
];

export const NotificationView = ({ setCurrentView }) => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-gray-50">
      <MainHeader setCurrentView={setCurrentView} />

      <main className="flex-grow flex justify-center py-12 px-4 md:px-8">
        <div className="w-full max-w-[800px] flex flex-col gap-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-black text-gray-900">Notifications</h1>
            {notifications.length > 0 && (
              <button 
                onClick={() => setNotifications(notifications.map(n => ({ ...n, read: true })))}
                className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                Mark all as read
              </button>
            )}
          </div>

          {notifications.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center flex flex-col items-center">
              <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
              <h2 className="text-xl font-bold text-gray-600">You're all caught up!</h2>
              <p className="text-gray-500 mt-2">There are no new notifications.</p>
            </div>
          ) : (
            notifications.map(notif => (
              <div 
                key={notif.id} 
                className={`relative bg-white rounded-lg p-5 flex flex-col sm:flex-row gap-6 transition-all duration-300 group border
                  ${notif.read ? 'border-gray-200 shadow-sm opacity-70' : 'border-[#2e89ff] shadow-md'}
                `}
              >
                {/* Image / Graphic Area */}
                <div className="w-24 h-24 sm:w-32 sm:h-24 shrink-0 flex items-center justify-center rounded-lg overflow-hidden bg-gray-100">
                  {notif.type === 'deal' ? (
                    <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-red-500 flex flex-col items-center justify-center p-2 text-center shadow-inner">
                      <span className="text-white font-black text-lg italic uppercase leading-none filter drop-shadow-md">HOT<br/>DEAL!</span>
                    </div>
                  ) : (
                    <img src={notif.image} alt={notif.title} className="w-full h-full object-cover" />
                  )}
                </div>

                {/* Content Area */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start pr-12">
                    <h3 className={`text-xl ${notif.read ? 'font-bold text-gray-700' : 'font-black text-gray-900'}`}>
                      {notif.title}
                    </h3>
                    <span className="text-sm font-semibold text-gray-500 absolute top-5 right-5 whitespace-nowrap">
                      {notif.time}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mt-1 whitespace-pre-line font-medium text-[15px]">
                    {notif.description}
                  </p>
                </div>

                {/* Actions (Hover) */}
                <div className="absolute right-5 bottom-5 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {!notif.read && (
                    <button 
                      onClick={() => markAsRead(notif.id)}
                      className="p-2 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 rounded-full transition-colors group/btn relative"
                      title="Mark as Read"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                    </button>
                  )}
                  <button 
                    onClick={() => deleteNotification(notif.id)}
                    className="p-2 bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 rounded-full transition-colors group/btn relative"
                    title="Delete Notification"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
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
