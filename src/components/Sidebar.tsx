import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Bell, 
  Settings, 
  CreditCard, 
  BarChart3, 
  Car,
  LogOut 
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: Users, label: 'Drivers' },
  { icon: Calendar, label: 'Bookings' },
  { icon: Bell, label: 'Notifications' },
  { icon: Settings, label: 'Settings' },
];

const reportItems = [
  { icon: CreditCard, label: 'Payment Details' },
  { icon: BarChart3, label: 'Transactions' },
  { icon: Car, label: 'Car Report' },
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <Car className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">CAR RENT</span>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index} className='focus-within:bg-blue-600'>
              <a
                href="#"
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors `}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
        
        {/* Report Section */}
        <div className="mt-8">
          <p className="text-gray-400 text-sm font-medium px-4 mb-3">Report</p>
          <ul className="space-y-2">
            {reportItems.map((item, index) => (
              <li key={index} className='focus-within:bg-blue-600'>
                <a
                  href="#"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      {/* Logout */}
      <div className="p-4">
        <a
          href="#"
          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;