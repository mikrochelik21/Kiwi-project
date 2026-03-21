import { Play, TrendingUp, Zap, Target, Newspaper } from "lucide-react";

export const DashboardPage = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header section */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-base-content">Welcome back, Alex</h1>
          <p className="text-base-content/60 mt-1">Ready to step up your finance career?</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-base-200 flex items-center gap-3">
            <Zap className="text-warning w-5 h-5 fill-warning/20" />
            <div>
              <div className="text-sm font-bold">12 Days</div>
              <div className="text-xs text-base-content/60">Streak</div>
            </div>
          </div>
          <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-base-200 flex items-center gap-3">
            <TrendingUp className="text-primary w-5 h-5" />
            <div>
              <div className="text-sm font-bold">1,250</div>
              <div className="text-xs text-base-content/60">XP</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (Continue & Next Tasks) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Continue Learning */}
          <div className="bg-primary text-primary-content rounded-2xl p-6 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-lg font-medium opacity-90 mb-4">Continue Learning</h2>
            <div className="flex justify-between items-end relative z-10">
              <div className="max-w-sm">
                <h3 className="text-2xl font-bold mb-2">Investment Banking Basics: Valuation Methods</h3>
                <p className="opacity-80 text-sm mb-6">Module 3 • Lesson 2</p>
                <button className="btn btn-sm btn-white text-primary border-none hover:bg-white/90 rounded-full px-6 shadow-sm">
                  Resume <Play className="w-4 h-4 ml-1" />
                </button>
              </div>
              <div className="hidden sm:block">
                {/* Visual Graphic placeholder */}
                <div className="w-24 h-24 rounded-full border-4 border-white/20 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold">60%</span>
                  <span className="text-xs opacity-70 uppercase tracking-wider">done</span>
                </div>
              </div>
            </div>
          </div>

          {/* Up Next & Practice */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Your Daily Plan</h2>
              <button className="text-sm text-primary font-medium hover:underline">View all</button>
            </div>
            
            <div className="space-y-3">
              {[
                { title: 'DCF Model Setup', type: 'Lesson', time: '10 min', icon: <Target className="w-4 h-4 text-primary" /> },
                { title: 'Behavioral: "Why IB?"', type: 'Practice', time: '5 min', icon: <Target className="w-4 h-4 text-warning" /> },
                { title: 'Read: M&A Market Update', type: 'Daily Feed', time: '3 min', icon: <Target className="w-4 h-4 text-info" /> },
              ].map((task, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-base-200 hover:border-primary/30 transition-colors flex items-center gap-4 cursor-pointer shadow-sm group">
                  <div className="w-10 h-10 rounded-full bg-base-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    {task.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-base-content group-hover:text-primary transition-colors">{task.title}</h4>
                    <p className="text-xs text-base-content/60 flex items-center gap-2 mt-0.5">
                      <span className="bg-base-200 px-2 rounded-md">{task.type}</span> • {task.time}
                    </p>
                  </div>
                  <button className="btn btn-ghost btn-circle btn-sm">
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (Daily Feed Snippet & Stats) */}
        <div className="space-y-6">
          {/* Daily Finance Insight */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-base-200 flex flex-col h-full max-h-[300px]">
            <h2 className="text-sm uppercase tracking-widest font-bold text-base-content/50 mb-4 flex items-center gap-2">
              <Newspaper className="w-4 h-4" /> Daily Insight
            </h2>
            <h3 className="text-lg font-bold mb-3">Fed signals potential rate hike pause</h3>
            <p className="text-sm text-base-content/70 flex-1">
              Federal Reserve officials indicated that they might pause interest rate hikes in the upcoming meeting, signaling a shift in monetary policy that could calm equity markets...
            </p>
            <button className="btn btn-outline btn-sm btn-primary w-full mt-4">Read Full Insight</button>
          </div>
        </div>

      </div>
    </div>
  );
};
