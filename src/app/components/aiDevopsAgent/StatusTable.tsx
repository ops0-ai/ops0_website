'use client';

import { Play, AlertCircle, Bot, GitBranch, Clock } from 'lucide-react';

interface StatusItem {
  type: string;
  result: string;
  resources: number;
  duration: string;
  status: 'success' | 'warning' | 'error';
}

interface StatusTableProps {
  data: StatusItem[];
}

export default function StatusTable({ data }: StatusTableProps) {
  const getStatusIcon = (type: string) => {
    if (type.includes('Deploy') || type.includes('Pipeline')) return Play;
    if (type.includes('Detection') || type.includes('Scan')) return AlertCircle;
    if (type.includes('AI') || type.includes('Auto')) return Bot;
    return GitBranch;
  };

  const getStatusColor = (type: string) => {
    if (type.includes('Deploy') || type.includes('Pipeline')) return 'text-cyan-400';
    if (type.includes('Detection') || type.includes('Scan')) return 'text-orange-400';
    if (type.includes('AI') || type.includes('Auto')) return 'text-purple-400';
    return 'text-blue-400';
  };

  return (
    <div className="bg-slate-800/40 rounded-xl border border-slate-700 overflow-hidden backdrop-blur-sm">
      <div className="grid grid-cols-4 gap-4 p-4 border-b border-slate-700 text-sm font-medium text-slate-400">
        <div>Type</div>
        <div>Result</div>
        <div>Resources</div>
        <div>Duration</div>
      </div>
      
      <div className="space-y-0">
        {data.map((item, index) => {
          const StatusIcon = getStatusIcon(item.type);
          const statusColor = getStatusColor(item.type);
          
          return (
            <div key={index} className="grid grid-cols-4 gap-4 p-4 border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors">
              <div className="flex items-center gap-2 text-sm">
                <StatusIcon className={`w-3 h-3 ${statusColor}`} />
                {item.type}
              </div>
              <div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.status === 'success' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : item.status === 'warning'
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                }`}>
                  {item.result}
                </span>
              </div>
              <div className="text-sm text-slate-300">{item.resources}</div>
              <div className="flex items-center gap-1 text-sm text-slate-300">
                <Clock className="w-3 h-3" />
                {item.duration}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}