import React, { useState } from 'react';
import { MapPin, Search } from 'lucide-react';

const popularLocations = [
  'Indiranagar, Bangalore',
  'HSR Layout, Bangalore',
  'Koramangala, Bangalore',
  'Whitefield, Bangalore',
  'Electronic City, Bangalore',
  'JP Nagar, Bangalore'
];

export default function LocationSearch({ onSearch }: { onSearch: (location: string) => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredLocations = popularLocations.filter(location =>
    location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLocationSelect = (location: string) => {
    setSearchQuery(location);
    setShowSuggestions(false);
    onSearch(location);
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="relative">
        <div className="relative">
          <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Enter your location"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <Search className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
        </div>

        {showSuggestions && (
          <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg">
            {filteredLocations.map((location) => (
              <button
                key={location}
                onClick={() => handleLocationSelect(location)}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center"
              >
                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                {location}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-500">Popular locations</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {popularLocations.slice(0, 4).map((location) => (
            <button
              key={location}
              onClick={() => handleLocationSelect(location)}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200"
            >
              {location}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}