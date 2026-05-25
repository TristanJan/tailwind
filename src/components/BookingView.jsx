import React, { useState } from 'react';
import { MainHeader } from './MainHeader';
import { Footer } from './Footer';

export const BookingView = ({ setCurrentView, selectedCar }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phone: '',
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    pickupTime: '',
    dropoffDate: '',
    dropoffTime: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show professional success modal
    setShowSuccessModal(true);
  };

  // Fallback car details if none is selected
  const car = selectedCar || {
    name: "Luxury Vehicle",
    price: "₱ --",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80"
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F3F4F6]">
      <MainHeader setCurrentView={setCurrentView} />

      <main className="flex-grow py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Booking Form */}
          <div className="flex-1 bg-white rounded-2xl shadow-md border border-gray-200 p-6 md:p-8">
            <div className="mb-8 border-b border-gray-100 pb-4">
              <h1 className="text-3xl font-black text-gray-900">Book & Rent Now</h1>
              <p className="text-gray-500 mt-2 font-medium">Please fill in your details to complete your reservation.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Personal Information */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="bg-red-100 text-red-600 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">First Name *</label>
                    <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm font-semibold focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Last Name *</label>
                    <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm font-semibold focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" placeholder="Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Email Address *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm font-semibold focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Confirm Email *</label>
                    <input required type="email" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm font-semibold focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" placeholder="john@example.com" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm font-semibold focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" placeholder="+63 912 345 6789" />
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Rental Details */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="bg-red-100 text-red-600 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                  Rental Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Pick-up Location *</label>
                    <select required name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm font-semibold focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors appearance-none">
                      <option value="">Select a location</option>
                      <option value="airport">Manila International Airport (MNL)</option>
                      <option value="makati">Makati City Hub</option>
                      <option value="bgc">BGC Terminal</option>
                      <option value="custom">Custom Location (Additional fee)</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Drop-off Location *</label>
                    <select required name="dropoffLocation" value={formData.dropoffLocation} onChange={handleChange} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm font-semibold focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors appearance-none">
                      <option value="">Select a location</option>
                      <option value="airport">Manila International Airport (MNL)</option>
                      <option value="makati">Makati City Hub</option>
                      <option value="bgc">BGC Terminal</option>
                      <option value="custom">Custom Location (Additional fee)</option>
                    </select>
                  </div>
                  
                  {/* Pick up Date/Time */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Pick-up Date *</label>
                    <input required type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm font-semibold focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Time *</label>
                    <input required type="time" name="pickupTime" value={formData.pickupTime} onChange={handleChange} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm font-semibold focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" />
                  </div>

                  {/* Drop off Date/Time */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Drop-off Date *</label>
                    <input required type="date" name="dropoffDate" value={formData.dropoffDate} onChange={handleChange} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm font-semibold focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Time *</label>
                    <input required type="time" name="dropoffTime" value={formData.dropoffTime} onChange={handleChange} className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm font-semibold focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" />
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Additional Information */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="bg-red-100 text-red-600 w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
                  Additional Information
                </h2>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Message / Special Requests</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm font-semibold focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none" placeholder="Let us know if you have any special requirements..."></textarea>
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-[#4ADE80] hover:bg-green-500 text-white font-black text-lg py-4 rounded-xl shadow-lg shadow-[#4ADE80]/30 transition-all transform hover:-translate-y-0.5">
                  Confirm Booking
                </button>
              </div>

            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-[380px] shrink-0">
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 sticky top-24">
              <h2 className="text-xl font-black text-gray-900 mb-4">Reservation Summary</h2>
              
              <div className="rounded-xl overflow-hidden mb-4 border border-gray-100">
                <img src={car.image} alt={car.name} className="w-full h-40 object-cover" />
              </div>
              
              <h3 className="font-bold text-lg text-gray-900">{car.name}</h3>
              <div className="flex items-center gap-1 text-yellow-500 my-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span className="text-sm font-bold text-gray-800">{car.rating || '4.5'}</span>
                <span className="text-sm text-gray-500">Excellent</span>
              </div>

              <hr className="border-gray-100 my-4" />

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">Daily Rate</span>
                  <span className="font-bold text-gray-900">{car.price}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">Taxes & Fees</span>
                  <span className="font-bold text-gray-900">Calculated at checkout</span>
                </div>
              </div>

              <hr className="border-gray-100 my-4" />

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3">
                <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <p className="text-xs text-blue-800 font-medium leading-relaxed">
                  Free cancellation up to 48 hours before pick-up. You won't be charged until you confirm your reservation.
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center transform transition-all">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-500 font-medium mb-8">
              Thank you for choosing Chadoyven! We have received your reservation request and our team will contact you shortly to finalize the details.
            </p>
            <button 
              onClick={() => {
                setShowSuccessModal(false);
                setCurrentView('main');
              }}
              className="w-full bg-[#4ADE80] hover:bg-green-500 text-white font-bold text-lg py-3.5 rounded-xl shadow-lg shadow-[#4ADE80]/30 transition-all"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
