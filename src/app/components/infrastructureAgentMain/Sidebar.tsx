import React from 'react';
import { Home, Server, Zap } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-20 bg-gray-800 flex flex-col items-center py-8 space-y-8">
      <div className="text-white font-bold">opsG</div>
      
      <div className="flex flex-col items-center space-y-6">
        <div className="p-3 bg-blue-600 rounded-lg">
          <Home className="w-6 h-6" />
        </div>
        <div className="text-xs text-gray-400 text-center">Dashboard</div>
        
        <div className="p-3 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer">
          <Server className="w-6 h-6 text-gray-400" />
        </div>
        <div className="text-xs text-gray-400 text-center">Workspaces</div>
        
        <div className="p-3 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer">
          <Zap className="w-6 h-6 text-gray-400" />
        </div>
        <div className="text-xs text-gray-400 text-center">Kiwi</div>
      </div>
    </div>
  );
};

export default Sidebar;