import { Zap } from "lucide-react";

export const PracticePage = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Practice Hub</h1>
        <p className="text-base-content/60">Test your knowledge with interactive exercises and scenarios.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Valuation Scenarios", difficulty: "Medium", time: "15 min" },
          { title: "DCF Walkthrough", difficulty: "Hard", time: "25 min" },
          { title: "Accounting Riddles", difficulty: "Easy", time: "10 min" },
          { title: "LBO Paper Math", difficulty: "Hard", time: "30 min" },
          { title: "Mental Math Drills", difficulty: "Easy", time: "5 min" },
          { title: "M&A Case Studies", difficulty: "Medium", time: "20 min" },
        ].map((exercise, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-base-200 shadow-sm hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                exercise.difficulty === 'Easy' ? 'bg-success/10 text-success' :
                exercise.difficulty === 'Medium' ? 'bg-warning/10 text-warning' :
                'bg-error/10 text-error'
              }`}>
                {exercise.difficulty}
              </span>
              <span className="text-xs text-base-content/50 font-medium">{exercise.time}</span>
            </div>
            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{exercise.title}</h3>
            <p className="text-sm text-base-content/60 mb-6">Interactive decision-making challenge focused on core mechanics.</p>
            
            <button className="btn btn-outline btn-sm btn-primary w-full gap-2 group-hover:bg-primary group-hover:text-white transition-all">
              Start Practice <Zap className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
