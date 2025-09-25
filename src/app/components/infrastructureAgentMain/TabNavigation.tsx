import React from 'react';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'create', label: 'CREATE / IAC AGENT' },
    { id: 'manage', label: 'MANAGE / OM AGENT' },
    { id: 'optimise', label: 'OPTIMISE / OPS AGENT' }
  ];

  return (
    <div className="w-full py-6">
     
      <div className="flex w-full overflow-x-auto md:overflow-x-hidden   scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
         
            className={`px-8 h-[40px] text-center font-medium tracking-wide transition-colors whitespace-nowrap flex-shrink-0 min-w-[240px] md:flex-1 md:min-w-0 ${
              activeTab === tab.id
                ? 'bg-gradient-to-b from-[#A4A0FF] to-[#6CE0FF] text-black'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;

// Optional: For the `scrollbar-hide` utility, you may need a plugin.
// 1. npm install tailwind-scrollbar-hide
// 2. Add to your tailwind.config.js:
//    plugins: [
//      require('tailwind-scrollbar-hide')
//    ],