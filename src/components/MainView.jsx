import React from 'react';
import { MainHeader } from './MainHeader';
import { Footer } from './Footer';
import fordRangerImage from '../../ford ranger raptor r.webp';
import hondaCrvImage from '../../honda cr-v.jpg';
import blackCarImage from '../../black car.png';
import bmwVideo from '../../BMW M3 Competition - 4K Cinematic Short Video - Damir Who (1080p, h264).mp4';

const featuredCars = [
  {
    name: "LAMBORGHINI",
    desc: "Rent the new Lamborghini for your luxury trips in Manila",
    price: "₱ 10,000",
    seats: "2 - Seaters",
    availability: "2 Units Available",
    model: "2024 Model",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "HONDA CIVIC TYPE - R",
    desc: "Rent the new Honda Civic for your luxury trips in Manila",
    price: "₱ 2,500",
    seats: "4 - Seaters",
    availability: "1 Units Available",
    model: "2024 Model",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "FORD RANGER RAPTOR",
    desc: "Rent the new Ford Ranger for your luxury trips in Manila",
    price: "₱ 6,500",
    seats: "4 - Seaters",
    availability: "1 Units Available",
    model: "2024 Model",
    image: fordRangerImage
  },
  {
    name: "HONDA CR-V",
    desc: "Rent the new Honda CR-V for your luxury trips in Manila",
    price: "₱ 3,500",
    seats: "4 - Seaters",
    availability: "1 Units Available",
    model: "2024 Model",
    image: hondaCrvImage
  },
  {
    name: "BUGATTI",
    desc: "Rent the new Bugatti for your luxury trips in Manila",
    price: "₱ 15,000",
    seats: "2 - Seaters",
    availability: "2 Units Available",
    model: "2024 Model",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80"
  }
];

export const MainView = ({ setCurrentView }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      <MainHeader setCurrentView={setCurrentView} />

      <main className="flex-grow flex flex-col bg-white">

        {/* Hero Video Section */}
        <section className="relative w-full min-h-[calc(100vh-72px)] overflow-hidden">
          <div className="absolute inset-0 z-0 bg-black">
            <video 
              src={bmwVideo}
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover opacity-90" 
            />
          </div>
        </section>

        {/* Introduction Section */}
        <section id="about-section" className="w-full bg-[#f8f9fa] py-16 px-4 md:px-8 lg:px-16 border-b border-gray-200">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
            <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-black mb-10 text-center tracking-tight">Chadoyven Car Rental Service</h1>

            <div className="text-gray-700 text-base md:text-lg font-medium space-y-6 leading-relaxed max-w-4xl mx-auto">
              <p>
                Chadoyven Car Rental Service is a trusted provider of convenient, reliable, and affordable transportation solutions designed to meet a wide range of travel needs. Whether you’re planning a family trip, a business journey, or simply need a dependable vehicle for daily use, Chadoyven offers a diverse fleet of well-maintained cars to ensure comfort, safety, and efficiency on the road.
              </p>
              <p>
                Committed to customer satisfaction, Chadoyven Car Rental Service focuses on delivering hassle-free booking, flexible rental options, and competitive pricing. Each vehicle is carefully serviced and maintained to guarantee a smooth driving experience, giving customers peace of mind wherever their journey takes them.
              </p>
              <p>
                With a dedication to professionalism and quality service, Chadoyven aims to be a go-to choice for individuals and businesses seeking dependable car rental solutions. Whether for short-term or long-term use, the company strives to make every trip convenient, comfortable, and memorable.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full bg-[#FF0000] py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 */}
            <div className="bg-white p-3 shadow-xl h-full">
              <div className="border-[1.5px] border-gray-300 p-6 md:p-8 flex flex-col items-center text-center h-full">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 mb-4 text-black">
                  <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                </svg>
                <h3 className="text-gray-500 font-bold text-xl md:text-[22px] mb-4">Since 2014</h3>
                <p className="text-gray-500 text-[14px] font-semibold leading-relaxed px-1">
                  Since 2014, Chadoyven has proudly served VIP clients, with over 50 bookings and a fleet of more than 200 premium cars and vans.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-3 shadow-xl h-full">
              <div className="border-[1.5px] border-gray-300 p-6 md:p-8 flex flex-col items-center text-center h-full">
                <div className="w-14 h-14 mb-4 bg-black rounded-lg relative flex items-center justify-center shrink-0">
                  <span className="text-white text-[32px] font-bold leading-none">$</span>
                </div>
                <h3 className="text-gray-500 font-bold text-xl md:text-[22px] mb-4 uppercase tracking-tight">ALL-INCLUSIVE RATES</h3>
                <p className="text-gray-500 text-[14px] font-semibold leading-relaxed px-1">
                  We offer all inclusive rates covering fuel, toll and parking fees for your VIPs. Our chauffeurs will never request any payment from your VIP guests.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-3 shadow-xl h-full">
              <div className="border-[1.5px] border-gray-300 p-6 md:p-8 flex flex-col items-center text-center h-full">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 mb-4 text-black">
                  <polygon points="12,22 2,9 6,2 18,2 22,9" />
                </svg>
                <h3 className="text-gray-500 font-bold text-xl md:text-[22px] mb-4 uppercase tracking-tight">VIP SERVICES</h3>
                <p className="text-gray-500 text-[14px] font-semibold leading-relaxed px-1">
                  We deliver personalized, pristine VIP chauffeured services with discreet attention to every guest.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-3 shadow-xl h-full">
              <div className="border-[1.5px] border-gray-300 p-6 md:p-8 flex flex-col items-center text-center h-full">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 mb-4 text-black">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <h3 className="text-gray-500 font-bold text-xl md:text-[22px] mb-4 uppercase tracking-tight">BEST PRICE GUARANTEE</h3>
                <p className="text-gray-500 text-[14px] font-semibold leading-relaxed px-1">
                  If you have received a quote from another luxury car rental company that is lower than ours, we would be happy to review it and do our best to match or beat their rate.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Featured Cars List */}
        <section className="bg-white w-full py-16 px-4 md:px-8">
          <div className="max-w-[1300px] mx-auto mb-8">
            <h2 className="text-[22px] font-extrabold tracking-tight text-gray-800 uppercase flex items-center">
              <span className="mr-2 text-black font-medium">FEATURED</span> CARS FOR RENT
            </h2>
          </div>

          <div className="max-w-[1300px] mx-auto space-y-6">
            {featuredCars.map((car, idx) => (
              <div key={idx} className="flex flex-col md:flex-row w-full h-auto md:h-[340px]">
                {/* Left Image */}
                <div className="w-full md:w-[45%] h-64 md:h-full shrink-0">
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                </div>
                {/* Right Info Box */}
                <div className="w-full md:w-[55%] bg-[#dfdfdf] p-8 md:p-12 flex flex-col justify-center relative">
                  <h3 className="font-extrabold text-black text-2xl md:text-3xl mb-3 tracking-wide uppercase">{car.name}</h3>
                  <p className="text-[14px] text-gray-800 font-medium mb-8">{car.desc}</p>

                  <ul className="space-y-4 mb-2">
                    <li className="flex items-center text-[16px] font-bold text-black tracking-tight">
                      <svg className="w-3.5 h-3.5 mr-3 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                      From {car.price} per hour
                    </li>
                    <li className="flex items-center text-[16px] font-bold text-black tracking-tight">
                      <svg className="w-3.5 h-3.5 mr-3 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                      {car.seats}
                    </li>
                    <li className="flex items-center text-[16px] font-bold text-black tracking-tight">
                      <svg className="w-3.5 h-3.5 mr-3 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                      {car.availability}
                    </li>
                    <li className="flex items-center text-[16px] font-bold text-black tracking-tight">
                      <svg className="w-3.5 h-3.5 mr-3 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                      {car.model}
                    </li>
                  </ul>

                  <button onClick={() => setCurrentView('all-cars')} className="absolute bottom-8 right-8 bg-white text-[15px] font-extrabold text-black px-6 py-2.5 rounded-xl shadow-lg border-2 border-transparent hover:border-red-500 hover:text-red-600 hover:shadow-xl transition-all tracking-wide">
                    MORE DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16 mb-4">
            <button onClick={() => setCurrentView('all-cars')} className="bg-black text-white text-[14px] font-bold px-12 py-3.5 rounded-[4px] hover:bg-[#ff0000] transition-colors uppercase tracking-widest shadow-lg">
              SEE ALL CARS
            </button>
          </div>
        </section>

        {/* Rent Your Car & Earn Section */}
        <section className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center md:justify-end overflow-hidden bg-black mt-8">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img src={blackCarImage} alt="Rent your car" className="w-full h-full object-cover object-left md:object-center opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 md:from-transparent to-black/90"></div>
          </div>

          {/* Content layered on top, aligned right */}
          <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center items-center text-center p-8 md:pr-24 mt-32 md:mt-0">
            <h2 className="text-white text-3xl md:text-[38px] tracking-wide mb-6 drop-shadow-md">
              <span className="font-light text-gray-200">RENT YOUR</span><span className="font-bold tracking-wide pl-2">CAR & EARN</span>
            </h2>

            <p className="text-gray-300 text-sm md:text-[15px] font-medium leading-relaxed max-w-lg mb-10 px-4 drop-shadow-lg">
              Chadoyven is looking for additional cars to rent in Gingoog and all over the Philippines to provide a unique and luxurious fleet of vehicles.
            </p>

            <button onClick={() => setCurrentView('all-cars')} className="bg-white text-black font-extrabold px-8 py-3.5 rounded-lg shadow-xl hover:bg-[#ff0000] hover:text-white transition-colors uppercase tracking-widest text-[14px]">
              MORE DETAILS
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full bg-[#2c2c2c] py-16 px-4 md:px-12 lg:px-24 flex justify-center">
          <div className="w-full max-w-[1300px] flex flex-col">
            <h2 className="text-white text-[20px] tracking-wide mb-5 uppercase text-left flex items-center">
              <span className="font-light text-gray-300 mr-2">CONTACT</span><span className="font-bold text-white">CHADOYVEN</span>
            </h2>

            <div className="w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden relative shadow-2xl bg-gray-200">
              <iframe
                src="https://maps.google.com/maps?q=Arco%20Village,%20Gingoog%20City,%20Misamis%20Oriental,%20Philippines&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chadoyven Location Map"
              />

              {/* Address Label Overlay */}
              <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-white px-5 py-4 shadow-[0_10px_25px_rgba(0,0,0,0.3)] flex items-start gap-4 max-w-[340px] pointer-events-none rounded-sm border border-gray-100">
                <svg className="w-6 h-6 text-red-600 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" /></svg>
                <p className="text-black font-semibold text-[13px] leading-snug tracking-tight">
                  P-3 Brgy 24 Arco Village, Matorrancas, Gingoog city, misamis oriental, philippines, 9014
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};
