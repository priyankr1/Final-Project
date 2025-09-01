import React from 'react';
import { Filter } from 'lucide-react';

interface CarStatusRow {
  id: string;
  carNo: string;
  driver: string;
  img: string;
  status: 'completed' | 'pending' | 'in-route';
  earning: string;
}

const carStatusData: CarStatusRow[] = [
  { id: '01', carNo: '6465', driver: 'Alex Norman', img:"https://i.pinimg.com/736x/07/6d/98/076d98265d5d25371521c16e92577b00.jpg", status: 'completed', earning: '$35.44' },
  { id: '02', carNo: '5665', driver: 'Razib Rahman', img:"https://2.bp.blogspot.com/_ShTElXkby2w/TJ-YFbz_UTI/AAAAAAAAHVU/piyAc1GnQZ4/s1600/Hugh+Feist+007.jpg", status: 'pending', earning: '$0.00' },
  { id: '03', carNo: '1755', driver: 'Luke Norton', img:"https://tse3.mm.bing.net/th/id/OIP.Ij1xPyJLVhd4XH29QdUPigHaJQ?w=1080&h=1349&rs=1&pid=ImgDetMain&o=7&rm=3", status: 'in-route', earning: '$23.50' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-500';
    case 'pending':
      return 'bg-blue-500';
    case 'in-route':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'completed':
      return 'Completed';
    case 'pending':
      return 'Pending';
    case 'in-route':
      return 'In route';
    default:
      return status;
  }
};

const LiveCarStatus: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Live Car Status</h3>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
          <Filter className="w-4 h-4" />
          <span className="text-sm">Filter</span>
        </button>
      </div>
      
      {/* Table Header */}
      <div className="grid grid-cols-5 gap-4 pb-3 border-b border-gray-200 text-sm font-medium text-gray-600">
        <span>No.</span>
        <span>Car no.</span>
        <span>Driver</span>
        <span>Status</span>
        <span>Earning</span>
      </div>
      
      {/* Table Rows */}
      <div className="space-y-4 mt-4">
        {carStatusData.map((row) => (
          <div key={row.id} className="grid grid-cols-5 gap-4 items-center py-3">
            <span className="text-sm text-gray-900">{row.id}</span>
            <span className="text-sm text-gray-900">{row.carNo}</span>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-gray-600">
                  <img className='w-8 h-8 object-cover rounded-full' src={row.img} alt="" />
                </span>
              </div>
              <span className="text-sm text-gray-900">{row.driver}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${getStatusColor(row.status)}`}></div>
              <span className="text-sm text-gray-900">{getStatusText(row.status)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-900">{row.earning}</span>
              <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveCarStatus;
