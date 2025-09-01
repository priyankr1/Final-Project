import React from "react";
import Sidebar from "./components/Sidebar";
import StatisticsCards from "./components/StatisticsCards";
import CarAvailability from "./components/CarAvailability";
import LiveCarStatus from "./components/LiveCarStatus";
import HireVsCancelChart from "./components/HireVsCancelChart";
import EarningSummary from "./components/EarningSummary";
import { Search, Bell } from "lucide-react";

function App() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl  mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Today's Statistics Section */}
              <div className="flex flex-col space-y-4 bg-gray p-4 rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
                <div>
                  <h1 className="text-xl font-bold text-gray-600">
                    Today's Statistics
                  </h1>
                  <p className="text-sm text-gray-400 mt-1">
                    {currentDate + ", " + currentTime}
                  </p>
                </div>
                <StatisticsCards />
                <HireVsCancelChart />
              </div>

              <div className=" lg:col-span-2  flex flex-col space-y-6">
                  <div className="flex  justify-end w-full rounded-full  space-x-4">
                    <button className="relative p-2 text-gray-400 hover:text-gray-600">
                      <Bell fill="grey" className="w-6 h-6" />
                      <span className="absolute top-2 right-[-1.5] w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search here"
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>
               
                <CarAvailability />
                <LiveCarStatus />
                <EarningSummary />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
