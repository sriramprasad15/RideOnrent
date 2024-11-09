import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LocationSearch from './components/LocationSearch';
import VehicleList from './components/VehicleList';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  const [selectedLocation, setSelectedLocation] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Find Vehicles Near You
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Enter your location to see available vehicles in your area
            </p>
          </div>
          <div className="mt-8">
            <LocationSearch onSearch={setSelectedLocation} />
          </div>
        </div>
      </div>
      <Features />
      <VehicleList />
      <Footer />
    </div>
  );
}

export default App;