import { FileText, MessagesSquare, Lightbulb } from "lucide-react";

export const CareerPrepPage = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Career Prep</h1>
        <p className="text-base-content/60">From creating a standout CV to acing technical and behavioral interviews.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-base-200 shadow-sm flex flex-col items-start gap-4 hover:border-primary/30 transition-colors cursor-pointer">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <MessagesSquare className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">Interview Questions</h3>
          <p className="text-base-content/70 text-sm flex-1">
            Browse our database of 500+ real interview questions from top investment banks, broken down into technical and behavioral.
          </p>
          <button className="btn btn-primary btn-sm mt-2">Browse Questions</button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-base-200 shadow-sm flex flex-col items-start gap-4 hover:border-primary/30 transition-colors cursor-pointer">
          <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center text-success">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">CV Templates & Tips</h3>
          <p className="text-base-content/70 text-sm flex-1">
            Download industry-standard 1-page CV templates and learn how to position your experience for high-finance roles.
          </p>
          <button className="btn btn-outline btn-success btn-sm mt-2">Get Templates</button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-base-200 shadow-sm flex flex-col items-start gap-4 hover:border-primary/30 transition-colors cursor-pointer md:col-span-2">
          <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center text-warning">
            <Lightbulb className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-warning">Upcoming Feature: AI Mock Interviews</h3>
          <p className="text-base-content/70 text-sm">
            Soon you'll be able to practice behavioral and technical questions directly with our AI interviewer, receiving real-time feedback on your answers, tone, and pacing.
          </p>
          <div className="badge badge-warning mt-2 badge-outline">In Development</div>
        </div>
      </div>
    </div>
  );
};
