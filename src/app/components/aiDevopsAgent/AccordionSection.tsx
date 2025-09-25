'use client';

import { ChevronRight } from 'lucide-react';

interface AccordionSectionProps {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  iconColor: string;
  iconBg: string;
  description: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

export default function AccordionSection({
  id,
  title,
  icon: IconComponent,
  iconColor,
  iconBg,
  description,
  isActive,
  onClick
}: AccordionSectionProps) {
  return (
<div 
  className={`p-6 m-0 border-b border-dashed border-white/20 transition-all duration-300 cursor-pointer hover:bg-slate-800/30 ${
    isActive 
      ? 'bg-slate-800/40' 
      : ''
  }`} 
  onClick={() => onClick(id)}
>
  <div className="flex items-center gap-3">
    <div className={`w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center`}>
      <IconComponent className={`w-4 h-4 ${iconColor}`} />
    </div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <ChevronRight className={`w-5 h-5 ml-auto transition-transform duration-300 ${
      isActive ? 'rotate-90 text-cyan-400' : 'text-slate-400'
    }`} />
  </div>
  
  {isActive && (
    <div className="mt-3 space-y-4">
      <p className="text-slate-300 leading-relaxed">
        {description}
      </p>
      <div className="h-1 w-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
    </div>
  )}
</div>


  );
}