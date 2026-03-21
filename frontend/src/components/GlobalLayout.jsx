import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { MobileNav } from "./MobileNav";

export const GlobalLayout = () => {
  return (
    <div className="flex h-screen bg-[#fafafa] text-base-content overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64 relative min-h-screen">
        <Topbar />
        
        <main className="flex-1 overflow-y-auto w-full max-w-[1400px] mx-auto p-4 md:p-8 pb-24 md:pb-8">
          <Outlet />
        </main>
      </div>
      <MobileNav />
    </div>
  );
};
