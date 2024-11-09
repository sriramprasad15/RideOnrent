import React, { useState } from 'react';
import { MapPin, Clock, User, Car, Bike, ArrowRight } from 'lucide-react';

const vehicles = [
  {
    id: 1,
    name: 'Royal Enfield Classic 350',
    type: 'bike',
    image: 'https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 150,
    location: 'Indiranagar, Bangalore',
    pickupPoints: ['Indiranagar Metro Station', 'ESI Hospital', '100ft Road'],
    dropPoints: ['Indiranagar Metro Station', 'ESI Hospital', '100ft Road'],
    rating: 4.8,
    owner: 'Rahul M.',
    condition: 'Excellent',
  },
  {
    id: 2,
    name: 'Honda City',
    type: 'car',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 400,
    location: 'Whitefield, Bangalore',
    pickupPoints: ['Phoenix Marketcity', 'Whitefield Metro', 'Forum Mall'],
    dropPoints: ['Phoenix Marketcity', 'Whitefield Metro', 'Forum Mall'],
    rating: 4.9,
    owner: 'Sneha R.',
    condition: 'Excellent',
  },
  // ... (previous vehicles remain the same)
];

export default function VehicleList() {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);

  const filteredVehicles = vehicles
    .filter(vehicle => selectedType === 'all' || vehicle.type === selectedType)
    .filter(vehicle => !selectedLocation || vehicle.location.includes(selectedLocation));

  const LocationModal = ({ vehicle }: { vehicle: any }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h3 className="text-lg font-semibold mb-4">Pickup & Drop Locations</h3>
        
        <div className="mb-4">
          <h4 className="font-medium text-gray-700 mb-2">Pickup Points:</h4>
          <div className="space-y-2">
            {vehicle.pickupPoints.map((point: string) => (
              <div key={point} className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium text-gray-700 mb-2">Drop Points:</h4>
          <div className="space-y-2">
            {vehicle.dropPoints.map((point: string) => (
              <div key={point} className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <button
            onClick={() => setShowLocationModal(false)}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
          >
            Close
          </button>
          <button
            onClick={() => {
              setShowLocationModal(false);
              // Here you would typically navigate to the booking page
            }}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Proceed to Book
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 py-12" id="vehicles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Available Vehicles</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2 rounded-md ${
                selectedType === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedType('car')}
              className={`px-4 py-2 rounded-md flex items-center ${
                selectedType === 'car'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Car className="h-4 w-4 mr-1" /> Cars
            </button>
            <button
              onClick={() => setSelectedType('bike')}
              className={`px-4 py-2 rounded-md flex items-center ${
                selectedType === 'bike'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Bike className="h-4 w-4 mr-1" /> Bikes
            </button>
            <button
              onClick={() => setSelectedType('scooter')}
              className={`px-4 py-2 rounded-md flex items-center ${
                selectedType === 'scooter'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Bike className="h-4 w-4 mr-1" /> Scooters
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {filteredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 w-full relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-600 shadow">
                  {vehicle.condition}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{vehicle.name}</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {vehicle.rating} ★
                  </span>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  {vehicle.location}
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <User className="h-4 w-4 mr-1" />
                  Owner: {vehicle.owner}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="ml-1 text-gray-900 font-semibold">₹{vehicle.price}/hour</span>
                    <span className="ml-2 text-xs text-gray-500">(Owner: ₹{Math.floor(vehicle.price * 0.8)})</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedVehicle(vehicle);
                      setShowLocationModal(true);
                    }}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center"
                  >
                    View Locations <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showLocationModal && selectedVehicle && (
        <LocationModal vehicle={selectedVehicle} />
      )}
    </div>
  );
}