import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'May', earning: 4000, period: 4200 },
  { month: 'Jun', earning: 3500, period: 3800 },
  { month: 'Jul', earning: 5000, period: 5200 },
  { month: 'Aug', earning: 4500, period: 4800 },
  { month: 'Sep', earning: 6000, period: 6200 },
  { month: 'Oct', earning: 5500, period: 5800 },
];

const EarningSummary: React.FC = () => {
  return (
    <div className="bg-white  rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Earning Summary</h3>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">May 2022 - Oct 2022</span>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Last 4 months</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
              <span className="text-sm text-gray-600">Same period last year</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorEarning" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorPeriod" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#93C5FD" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#93C5FD" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              tickFormatter={(value) => `$${value/1000}k`}
            />
            <Area
              type="monotone"
              dataKey="period"
              stroke="#93C5FD"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPeriod)"
            />
            <Area
              type="monotone"
              dataKey="earning"
              stroke="#3B82F6"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorEarning)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EarningSummary;
