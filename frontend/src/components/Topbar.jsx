import { Bell, User, Search, Globe, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Topbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // document.documentElement.setAttribute('data-theme', ...); // theme logic
  };

  return (
    <div className="h-16 border-b border-base-300 bg-base-100/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-4 md:px-8">
      {/* Search */}
      <div className="flex-1 max-w-xl hidden md:flex items-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/50" />
          <input 
            type="text" 
            placeholder="Search courses, articles, tasks..." 
            className="input input-sm h-10 w-full pl-10 bg-base-200 border-none focus:outline-primary/50 rounded-full"
          />
        </div>
      </div>
      
      {/* Mobile Title */}
      <div className="md:hidden font-bold text-xl text-primary flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-white text-sm">K</div>
        Kiwi
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 md:gap-4 ml-auto">
        <button className="btn btn-ghost btn-circle btn-sm">
          <Globe className="w-5 h-5 text-base-content/70" />
        </button>
        <button className="btn btn-ghost btn-circle btn-sm" onClick={toggleTheme}>
          {isDarkMode ? <Sun className="w-5 h-5 text-base-content/70" /> : <Moon className="w-5 h-5 text-base-content/70" />}
        </button>
        <button className="btn btn-ghost btn-circle btn-sm relative">
          <Bell className="w-5 h-5 text-base-content/70" />
          <span className="w-2 h-2 rounded-full bg-error absolute top-1 right-1"></span>
        </button>
        <Link to="/profile" className="btn btn-ghost btn-circle avatar ml-2">
          <div className="w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
            <User className="w-5 h-5 m-auto mt-1.5" />
          </div>
        </Link>
      </div>
    </div>
  );
};
