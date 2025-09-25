'use client';

import { useState, useEffect } from 'react';
import { Settings, ChevronRight } from 'lucide-react';

interface AgentTerminalProps {
  agentTitle: string;
  command: string;
  activeSection: string;
}

export default function AgentTerminal({ agentTitle, command, activeSection }: AgentTerminalProps) {
  const [terminalText, setTerminalText] = useState('');

  useEffect(() => {
    let i = 0;
    setTerminalText('');
    const timer = setInterval(() => {
      if (i < command.length) {
        setTerminalText(command.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, [command]);

  return (
    <div className="bg-slate-900/60 rounded-xl border border-slate-700 p-6 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded ${
            activeSection === 'devops-everyone' ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
            activeSection === 'pipeline-creation' ? 'bg-gradient-to-r from-blue-400 to-cyan-500' :
            'bg-gradient-to-r from-purple-400 to-pink-500'
          } flex items-center justify-center`}>
            <Settings className="w-3 h-3 text-white" />
          </div>
          <span className="text-sm font-mono font-medium">{agentTitle}</span>
        </div>
        <ChevronRight className="w-4 h-4 text-cyan-400 ml-auto" />
      </div>
      
      <div className="font-mono text-sm text-slate-300 mb-4">
        <span className="text-cyan-400">$</span> {terminalText}
        <span className="inline-block w-2 h-5 bg-cyan-400 ml-1 animate-pulse"></span>
      </div>

      {/* Infrastructure Icons */}
      <div className="flex gap-4">
        <div className={`w-12 h-12 rounded-lg bg-slate-700/50 flex items-center justify-center transition-colors ${
          activeSection === 'devops-everyone' ? 'hover:bg-green-500/20' :
          activeSection === 'pipeline-creation' ? 'hover:bg-blue-500/20' :
          'hover:bg-purple-500/20'
        }`}>
          <div className={`w-6 h-6 rounded ${
            activeSection === 'devops-everyone' ? 'bg-green-500' :
            activeSection === 'pipeline-creation' ? 'bg-blue-500' :
            'bg-purple-500'
          }`}></div>
        </div>
        <div className={`w-12 h-12 rounded-lg bg-slate-700/50 flex items-center justify-center transition-colors ${
          activeSection === 'devops-everyone' ? 'hover:bg-green-500/20' :
          activeSection === 'pipeline-creation' ? 'hover:bg-blue-500/20' :
          'hover:bg-purple-500/20'
        }`}>
          <div className={`w-6 h-6 rounded ${
            activeSection === 'devops-everyone' ? 'bg-emerald-500' :
            activeSection === 'pipeline-creation' ? 'bg-cyan-500' :
            'bg-pink-500'
          }`}></div>
        </div>
        <div className={`w-12 h-12 rounded-lg bg-slate-700/50 flex items-center justify-center transition-colors ${
          activeSection === 'devops-everyone' ? 'hover:bg-green-500/20' :
          activeSection === 'pipeline-creation' ? 'hover:bg-blue-500/20' :
          'hover:bg-purple-500/20'
        }`}>
          <div className={`w-6 h-6 rounded ${
            activeSection === 'devops-everyone' ? 'bg-teal-500' :
            activeSection === 'pipeline-creation' ? 'bg-indigo-500' :
            'bg-violet-500'
          }`}></div>
        </div>
      </div>
    </div>
  );
}