import { Award, Zap, BookOpen, Clock } from "lucide-react";

export const ProfilePage = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      
      {/* Header Profile Card */}
      <div className="bg-white rounded-3xl p-6 md:p-10 border border-base-200 shadow-sm flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center text-primary text-4xl font-bold border-4 border-white shadow-lg z-10 relative">
            A
          </div>
          {/* Level Badge */}
          <div className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 bg-base-content text-base-100 z-20 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-sm">
            Level 5
          </div>
        </div>

        <div className="flex-1 space-y-2">
          <h1 className="text-3xl font-bold">Alex Johnson</h1>
          <p className="text-base-content/60">Target Role: Investment Banking Analyst</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-4">
            <span className="badge badge-primary badge-outline gap-1 py-3"><Award className="w-3 h-3" /> Top 5% Learner</span>
            <span className="badge badge-base-200 gap-1 py-3 border-base-300">Target Start: 2025</span>
          </div>
        </div>

        <button className="btn btn-outline md:self-start">Edit Profile</button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-2xl border border-base-200 text-center shadow-sm">
          <Zap className="w-8 h-8 text-warning mx-auto mb-2 fill-warning/20" />
          <div className="text-2xl font-bold">12</div>
          <div className="text-xs text-base-content/60 uppercase tracking-wider font-bold mt-1">Day Streak</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-base-200 text-center shadow-sm">
          <Award className="w-8 h-8 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold">1,250</div>
          <div className="text-xs text-base-content/60 uppercase tracking-wider font-bold mt-1">Total XP</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-base-200 text-center shadow-sm">
          <BookOpen className="w-8 h-8 text-info mx-auto mb-2" />
          <div className="text-2xl font-bold">14</div>
          <div className="text-xs text-base-content/60 uppercase tracking-wider font-bold mt-1">Lessons Done</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-base-200 text-center shadow-sm">
          <Clock className="w-8 h-8 text-success mx-auto mb-2" />
          <div className="text-2xl font-bold">4.5h</div>
          <div className="text-xs text-base-content/60 uppercase tracking-wider font-bold mt-1">Time Spent</div>
        </div>
      </div>

      {/* Skill Breakdown */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-base-200 shadow-sm">
        <h2 className="text-xl font-bold mb-6">Skill Progression</h2>
        
        <div className="space-y-6">
          {[
            { skill: "Accounting & Financial Statements", level: 85, color: "bg-success" },
            { skill: "Valuation (DCF, Comps)", level: 60, color: "bg-primary" },
            { skill: "LBO & Modeling", level: 10, color: "bg-warning" },
            { skill: "Behavioral & Fit", level: 40, color: "bg-info" },
            { skill: "Market Awareness", level: 75, color: "bg-secondary" },
          ].map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-sm font-medium mb-2">
                <span>{item.skill}</span>
                <span className="text-base-content/50">{item.level}%</span>
              </div>
              <div className="w-full h-2 bg-base-200 rounded-full overflow-hidden">
                <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
