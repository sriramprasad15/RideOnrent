import React from 'react';
import { MapPin, IndianRupee, Car, Bike } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Rent Vehicles in</span>
                <span className="block text-indigo-600">Your Neighborhood</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Rent cars, bikes, and scooters by the hour. Vehicle owners earn 80% of the rental fee.
                Perfect for daily commute or weekend adventures.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    <MapPin className="w-5 h-5 mr-2" />
                    Find Nearby Vehicles
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 border-indigo-600 md:py-4 md:text-lg md:px-10">
                    <IndianRupee className="w-5 h-5 mr-2" />
                    Register Your Vehicle
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-center lg:justify-start space-x-8">
                <div className="flex items-center">
                  <Car className="h-6 w-6 text-indigo-600" />
                  <span className="ml-2 text-gray-600">Cars</span>
                </div>
                <div className="flex items-center">
                  <Bike className="h-6 w-6 text-indigo-600" />
                  <span className="ml-2 text-gray-600">Bikes</span>
                </div>
                <div className="flex items-center">
                  <Bike className="h-6 w-6 text-indigo-600" />
                  <span className="ml-2 text-gray-600">Scooters</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
          alt="Vehicles for rent"
        />
      </div>
    </div>
  );
}