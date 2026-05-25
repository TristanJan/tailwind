import React, { useState } from 'react';
import { MainView } from './components/MainView';
import { SignupView } from './components/SignupView';
import { LoginView } from './components/LoginView';
import { ContactView } from './components/ContactView';
import { AllCarsView } from './components/AllCarsView';
import { CartView } from './components/CartView';
import { NotificationView } from './components/NotificationView';
import { SettingsView } from './components/SettingsView';
import { BookingView } from './components/BookingView';
import { CarDetailView } from './components/CarDetailView';

function App() {
  const [showGooglePopup, setShowGooglePopup] = useState(false);
  const [currentView, setCurrentView] = useState('main');
  const [favorites, setFavorites] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  const toggleFavorite = (car) => {
    setFavorites(prev => {
      const exists = prev.find(c => c.name === car.name);
      if (exists) {
        return prev.filter(c => c.name !== car.name);
      }
      return [...prev, car];
    });
  };

  if (currentView === 'main') {
    return <MainView setCurrentView={setCurrentView} setSelectedCar={setSelectedCar} />;
  }

  if (currentView === 'signup') {
    return <SignupView setCurrentView={setCurrentView} />;
  }

  if (currentView === 'contact') {
    return <ContactView setCurrentView={setCurrentView} />;
  }

  if (currentView === 'all-cars') {
    return <AllCarsView setCurrentView={setCurrentView} favorites={favorites} toggleFavorite={toggleFavorite} setSelectedCar={setSelectedCar} />;
  }

  if (currentView === 'cart') {
    return <CartView setCurrentView={setCurrentView} favorites={favorites} setSelectedCar={setSelectedCar} />;
  }

  if (currentView === 'notifications') {
    return <NotificationView setCurrentView={setCurrentView} />;
  }

  if (currentView === 'settings') {
    return <SettingsView setCurrentView={setCurrentView} />;
  }

  if (currentView === 'booking') {
    return <BookingView setCurrentView={setCurrentView} selectedCar={selectedCar} />;
  }

  if (currentView === 'car-detail') {
    return <CarDetailView setCurrentView={setCurrentView} selectedCar={selectedCar} />;
  }

  return (
    <LoginView 
      setCurrentView={setCurrentView} 
      showGooglePopup={showGooglePopup} 
      setShowGooglePopup={setShowGooglePopup} 
    />
  );
}

export default App;
