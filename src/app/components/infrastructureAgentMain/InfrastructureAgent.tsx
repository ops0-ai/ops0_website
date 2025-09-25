import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import ButtonWithIcon from '../button/ButtonWithIcon';

interface InfrastructureAgentProps {
  activeTab: string;
}

const InfrastructureAgent: React.FC<InfrastructureAgentProps> = ({ activeTab }) => {
  const getTabContent = () => {
    switch (activeTab) {
      case 'create':
        return {
          number: '01/03',
          title: 'Infrastructure Agent',
          description: 'Deploy and scale servers, storage, and networks.'
        };
      case 'manage':
        return {
          number: '02/03',
          title: 'Operations Manager',
          description: 'Monitor, maintain, and optimize your infrastructure.'
        };
      case 'optimise':
        return {
          number: '03/03',
          title: 'Performance Optimizer',
          description: 'Analyze and enhance system performance and costs.'
        };
      default:
        return {
          number: '01/03',
          title: 'Infrastructure Agent',
          description: 'Deploy and scale servers, storage, and networks.'
        };
    }
  };

  const content = getTabContent();

  return (
    <div className=" p-8    flex flex-col md:justify-center md:min-h-[600px]">
      <div className='space-y-1'>
        <div className="text-sm text-gray-300 ">{content.number}</div>
        <h2 className="text-2xl font-bold">{content.title}</h2>
        <p className="text-white/50 leading-relaxed">
          {content.description}
        </p>
      </div>
      
     <ButtonWithIcon btnText='Learn more'/>
    </div>
  );
};

export default InfrastructureAgent;