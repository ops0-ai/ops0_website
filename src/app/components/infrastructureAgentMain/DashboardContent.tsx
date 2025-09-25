import React from 'react';

const DashboardContent: React.FC = () => {
  return (
    <div className="flex-1 p-8 bg-gray-900">
      <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
        <div className="text-center text-gray-400">
          <h3 className="text-xl font-semibold mb-2">Dashboard</h3>
          <p className="text-sm">Main dashboard content area</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;