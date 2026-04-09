import { useMemo } from 'react';
import SpotlightCard from '../components/ui/SpotlightCard';

export default function Progress({ tasks }) {
  // ── Calculations ──────────────────────────────────────────
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
    
    const highPriority = tasks.filter(t => t.priority === 'High').length;
    const highDone = tasks.filter(t => t.priority === 'High' && t.completed).length;
    
    return { total, completed, percentage, highPriority, highDone };
  }, [tasks]);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-5xl font-bold font-display tracking-tight text-[#e8c468]">
        Performance
      </h1>

      {/* Main Progress Hex */}
      <SpotlightCard className="p-8 rounded-[24px]" spotlightColor="rgba(232, 196, 104, 0.1)">
        <div className="flex flex-col items-center gap-4">
          <span className="text-[#8b8a99] uppercase tracking-widest text-xs font-bold">Overall Completion</span>
          <div className="relative flex items-center justify-center">
            {/* Big Percentage Display */}
            <span className="text-8xl font-black font-display text-[#f0eff4]">
              {stats.percentage}%
            </span>
          </div>
          {/* Custom Progress Bar */}
          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mt-4">
            <div 
              className="h-full bg-[#e8c468] transition-all duration-1000 ease-out"
              style={{ width: `${stats.percentage}%` }}
            />
          </div>
        </div>
      </SpotlightCard>

      {/* Grid of Mini Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#1c1c22] border border-white/5 p-6 rounded-[18px]">
          <span className="text-[#55546a] text-sm uppercase font-bold">Total Tasks</span>
          <p className="text-3xl font-display font-bold mt-2">{stats.total}</p>
        </div>

        <div className="bg-[#1c1c22] border border-white/5 p-6 rounded-[18px]">
          <span className="text-[#55546a] text-sm uppercase font-bold">Completed</span>
          <p className="text-3xl font-display font-bold mt-2 text-[#e8c468]">{stats.completed}</p>
        </div>

        <div className="bg-[#1c1c22] border border-white/10 p-6 rounded-[18px] md:col-span-2 flex justify-between items-center">
          <div>
            <span className="text-[#55546a] text-sm uppercase font-bold">High Priority Focus</span>
            <p className="text-lg text-[#8b8a99] mt-1">
              You've cleared <span className="text-[#f0eff4]">{stats.highDone}</span> out of <span className="text-[#f0eff4]">{stats.highPriority}</span> critical tasks.
            </p>
          </div>
          <div className="h-12 w-12 rounded-full border-2 border-[#e8c468]/20 flex items-center justify-center text-[#e8c468] font-bold">
            !
          </div>
        </div>
      </div>

      {/* Motivational Rank */}
      <div className="text-center py-10">
        <p className="text-[#55546a] italic">
          {stats.percentage === 100 && stats.total > 0 ? "Master Level: All clear for today!" : 
           stats.percentage > 50 ? "Productive Day: You're over the hump!" : 
           "Keep going: Small steps lead to big results."}
        </p>
      </div>
    </div>
  );
}