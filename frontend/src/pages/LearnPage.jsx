import { PlayCircle, CheckCircle, Lock } from "lucide-react";

export const LearnPage = () => {
  const tracks = [
    {
      title: "Investment Banking Basics",
      description: "Master the fundamentals of IB, valuation, and modeling.",
      progress: 35,
      chapters: [
        { title: "Introduction to Financial Markets", completed: true },
        { title: "Financial Statements Analysis", completed: true },
        { title: "Valuation Methods (DCF, Comps)", current: true },
        { title: "LBO Modeling Basics", locked: true },
        { title: "M&A Deal Dynamics", locked: true },
      ]
    },
    {
      title: "Private Equity Fundamentals",
      description: "Understand fund structures, deal sourcing, and due diligence.",
      progress: 0,
      locked: true,
      chapters: []
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Learning Tracks</h1>
        <p className="text-base-content/60">Structured paths designed to make you interview-ready.</p>
      </div>

      <div className="space-y-8">
        {tracks.map((track, idx) => (
          <div key={idx} className={`bg-white rounded-2xl p-6 border shadow-sm ${track.locked ? 'opacity-60 border-base-200' : 'border-primary/20'}`}>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  {track.title} {track.locked && <Lock className="w-5 h-5 ml-2 text-base-content/40" />}
                </h2>
                <p className="text-base-content/70 mt-1">{track.description}</p>
              </div>
              
              {!track.locked && (
                <div className="text-right">
                  <div className="text-sm font-semibold text-primary mb-1">{track.progress}% Completed</div>
                  <div className="w-48 h-2 bg-base-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${track.progress}%` }}></div>
                  </div>
                </div>
              )}
            </div>

            {track.chapters.length > 0 && (
              <div className="space-y-3 pl-2 sm:pl-6 border-l-2 border-base-200 ml-4">
                {track.chapters.map((chapter, cIdx) => (
                  <div key={cIdx} className="relative flex items-center gap-4 py-2 group cursor-pointer hover:bg-base-100/50 rounded-lg pr-4 -ml-6 pl-6 transition-colors">
                    {/* Timeline dot/icon */}
                    <div className="absolute left-0 -translate-x-1/2 bg-white flex items-center justify-center">
                      {chapter.completed ? (
                        <CheckCircle className="w-6 h-6 text-success fill-success/10" />
                      ) : chapter.current ? (
                        <PlayCircle className="w-6 h-6 text-primary fill-primary/10" />
                      ) : (
                        <Lock className="w-5 h-5 text-base-content/30" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className={`font-medium ${chapter.completed ? 'text-base-content/70' : chapter.current ? 'text-primary' : 'text-base-content/50'}`}>
                        {cIdx + 1}. {chapter.title}
                      </h4>
                    </div>

                    {chapter.current && (
                      <button className="btn btn-sm btn-primary shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        Resume
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
