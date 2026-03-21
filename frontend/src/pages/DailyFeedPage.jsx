import { Share2, BookmarkPlus } from "lucide-react";

export const DailyFeedPage = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Daily Insight</h1>
        <p className="text-base-content/60">Short, curated finance insights to keep your commercial awareness sharp.</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white rounded-3xl border border-base-200 overflow-hidden shadow-sm">
          <div className="h-48 bg-primary/20 flex flex-col justify-end p-6 relative">
            <span className="bg-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-primary w-fit mb-4">Markets</span>
            <h2 className="text-2xl font-bold leading-tight z-10 text-base-content">
              Why the yield curve inversion has persisted — and what happens next
            </h2>
          </div>
          
          <div className="p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between text-sm text-base-content/50 border-b border-base-200 pb-4">
              <span>Today • 3 min read</span>
              <div className="flex items-center gap-4">
                <button className="hover:text-primary"><BookmarkPlus className="w-5 h-5" /></button>
                <button className="hover:text-primary"><Share2 className="w-5 h-5" /></button>
              </div>
            </div>

            <div className="prose prose-sm md:prose-base text-base-content/80">
              <p>
                The yield curve has been inverted for an extended period, historically a strong indicator of an impending recession. But the context matters.
              </p>
              
              <h3>The Mechanism</h3>
              <p>
                Typically, short-term debt offers lower interest rates than long-term debt to compensate investors for taking on longer duration risk. An inversion occurs when short-term yields (like the 2-Year Treasury) rise higher than long-term yields (like the 10-Year).
              </p>

              <div className="bg-primary/5 p-4 rounded-xl border-l-4 border-primary my-6">
                <p className="font-bold text-primary m-0">Why it matters for interviews</p>
                <p className="text-sm mt-2">
                  Expect to be asked what the yield curve is currently doing. You must explain both the mechanical definition (short-term > long-term yields) and the signaling effect (investors expect the central bank to cut rates in the future because of an economic slowdown).
                </p>
              </div>
              
              <p>
                Current dynamics show that inflation stickiness has kept the short end elevated, while long-duration investors remain somewhat confident that growth and inflation will eventually normalize, pulling the long end down.
              </p>
            </div>
            
            <button className="btn btn-outline w-full mt-4">Mark as Read (Gain 10 XP)</button>
          </div>
        </div>
      </div>
    </div>
  );

};
