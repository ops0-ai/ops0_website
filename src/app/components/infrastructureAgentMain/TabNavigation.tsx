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
    <div className="flex w-full py-[24px]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-8 h-[40px] flex-1 text-center font-medium tracking-wide transition-colors ${
            activeTab === tab.id
              ? 'bg-gradient-to-b from-[#A4A0FF] to-[#6CE0FF] text-black'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
