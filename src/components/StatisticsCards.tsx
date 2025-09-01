import React from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';

const StatisticsCards: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      {/* Income Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-600 font-medium">Income</h3>
          <span className="text-sm text-gray-500">Today</span>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-3xl font-bold text-gray-900">$9460.00</p>
          <div className="flex items-center mt-2">
            <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
            <span className="text-red-500 text-sm font-medium">15%</span>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          <p>Compared to $9400 yesterday</p>
          <p>Last week income: <span className="font-medium">$25856.00</span></p>
        </div>
      </div>
      
      {/* Expenses Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-600 font-medium">Expenses</h3>
          <span className="text-sm text-gray-500">Today</span>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-3xl font-bold text-gray-900">$5660.00</p>
          <div className="flex items-center mt-2">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-500 text-sm font-medium">2.5%</span>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          <p>Compared to $5200 yesterday</p>
          <p>Last week expenses: <span className="font-medium">$22556.00</span></p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCards;
