import React from 'react';
import { MapPin, Clock, Shield, Navigation, IndianRupee, UserCheck } from 'lucide-react';

const features = [
  {
    name: 'Live Location Tracking',
    description: 'Track your rented vehicle in real-time with our GPS system for safety.',
    icon: Navigation,
  },
  {
    name: 'Flexible Hourly Rentals',
    description: 'Rent by the hour with easy extension options.',
    icon: Clock,
  },
  {
    name: '80% Owner Earnings',
    description: 'Vehicle owners receive 80% of the rental amount directly.',
    icon: IndianRupee,
  },
  {
    name: 'Verified Riders',
    description: 'All riders are verified with valid driving license and ID proof.',
    icon: UserCheck,
  },
  {
    name: 'Insurance Coverage',
    description: 'Comprehensive insurance coverage for every ride.',
    icon: Shield,
  },
  {
    name: 'Pan India Network',
    description: 'Available across major cities in India.',
    icon: MapPin,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            India's Smart Vehicle Rental Platform
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}