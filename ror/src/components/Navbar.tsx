import React from 'react';
import { Bike } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Bike className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">RideRent</span>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <a href="#" className="text-gray-900 hover:text-indigo-600 px-3 py-2 font-medium">Home</a>
            <a href="#vehicles" className="text-gray-900 hover:text-indigo-600 px-3 py-2 font-medium">Vehicles</a>
            <a href="#how-it-works" className="text-gray-900 hover:text-indigo-600 px-3 py-2 font-medium">How it Works</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              List Your Vehicle
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}