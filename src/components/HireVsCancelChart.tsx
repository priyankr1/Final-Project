import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { TrendingDown, TrendingUp } from 'lucide-react';
const data = [
  { name: 'Total Hired', value: 54, up: true, color: '#3B82F6' },
  { name: 'Total Cancelled', value: 20, up: true, color: '#10B981' },
  { name: 'Total Pending', value: 26, up: false, color: '#EF4444' },
];

const COLORS = ['#3B82F6', '#10B981', '#EF4444'];

const HireVsCancelChart: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Hire vs Cancel</h3>
        <span className="text-sm text-gray-500">Today</span>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      {/* Legend */}
      <div className="space-y-3 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div 
                className={`w-3 h-3 rounded-full bg-${item.color}`}
              ></div>
              <span className="text-sm text-gray-600">{item.name}</span>
            </div>
            <span className="flex gap-2 text-sm font-medium text-gray-900">{`${item.value}%`} <span>{item.up?<TrendingUp className="w-4 h-4 text-green-500 mr-1" />:<TrendingDown className="w-4 h-4 text-red-500 mr-1" />}</span></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HireVsCancelChart;
