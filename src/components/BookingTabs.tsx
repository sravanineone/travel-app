import React, { useState } from 'react';
import { Plane, Train, Bus, Calendar, Users, MapPin } from 'lucide-react';

const tabs = [
  { id: 'flight', label: 'Flights', icon: Plane },
  { id: 'train', label: 'Trains', icon: Train },
  { id: 'bus', label: 'Buses', icon: Bus },
];

export default function BookingTabs() {
  const [activeTab, setActiveTab] = useState('flight');

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex space-x-6 mb-8">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`neo-tab flex-1 flex items-center justify-center gap-3 py-4 px-6 ${
              activeTab === id
                ? 'active text-white'
                : 'text-gray-600 hover:scale-[0.98]'
            }`}
          >
            <Icon size={24} />
            <span className="text-lg font-medium">{label}</span>
          </button>
        ))}
      </div>

      <div className="neo-card">
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <MapPin size={18} />
                From
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="neo-input w-full"
                  placeholder="Departure City"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <MapPin size={18} />
                To
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="neo-input w-full"
                  placeholder="Destination City"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <Calendar size={18} />
                Departure Date
              </label>
              <input
                type="date"
                className="neo-input w-full"
              />
            </div>
            {activeTab === 'flight' && (
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                  <Calendar size={18} />
                  Return Date
                </label>
                <input
                  type="date"
                  className="neo-input w-full"
                />
              </div>
            )}
          </div>

          {activeTab === 'flight' && (
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                  <Users size={18} />
                  Passengers
                </label>
                <select className="neo-input w-full">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Passenger' : 'Passengers'}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                  <Users size={18} />
                  Class
                </label>
                <select className="neo-input w-full">
                  <option>Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </select>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="neo-button w-full py-4 text-lg font-medium text-blue-600 hover:text-blue-700"
          >
            Search {activeTab === 'flight' ? 'Flights' : activeTab === 'train' ? 'Trains' : 'Buses'}
          </button>
        </form>
      </div>
    </div>
  );
}