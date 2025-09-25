interface Stat {
  label: string;
  value: string;
}

interface StatsGridProps {
  stats: Stat[];
}

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-dashed border-white/20">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`relative p-6 text-center border-l border-white/20 mx-4 `}
        >
          {/* Gradient dash on divider */}
          <span className="absolute left-0 top-6 h-6 w-[2px] bg-gradient-to-b from-[#A4A0FF] to-[#6CE0FF]" />
     

          <div className="text-xs font-mono text-slate-400 mb-2 tracking-wider">
            {stat.label}
          </div>
          <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
}
