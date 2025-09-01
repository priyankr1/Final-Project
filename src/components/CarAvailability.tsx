import React, { useState } from "react";
import { ChevronDown, Car, Calendar, Clock } from "lucide-react";

const CarAvailability: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState("CAR-001");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("10 AM");

  const carNumbers = ["CAR-001", "CAR-002", "CAR-003", "CAR-004", "CAR-005", "CAR-006"];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
      {/* Title */}
      <div className="flex items-center space-x-2 mb-6">
        <Car className="w-5 h-5 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">Car Availability</h3>
      </div>

      {/* Form Section */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {/* Car Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Car Number</label>
          <div className="relative">
            <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              title="Car Number"
              className="w-full pl-9 pr-8 py-2.5 text-sm border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedCar}
              onChange={(e) => setSelectedCar(e.target.value)}
            >
              {carNumbers.map((carNo) => (
                <option key={carNo} value={carNo}>
                  {carNo}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              title="Time"
              className="w-full pl-9 pr-8 py-2.5 text-sm border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              {["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"].map(
                (time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                )
              )}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Button */}
        <div className="flex items-end">
          <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm">
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarAvailability;
