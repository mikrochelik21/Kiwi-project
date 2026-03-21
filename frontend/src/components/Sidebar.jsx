import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  Newspaper, 
  User,
  Settings,
  HelpCircle
} from "lucide-react";

export const Sidebar = () => {
  const location = useLocation();

  const mainLinks = [
    { name: "Home", href: "/dashboard", icon: <Home className="w-5 h-5" /> },
    { name: "Learn", href: "/learn", icon: <BookOpen className="w-5 h-5" /> },
    { name: "Practice", href: "/practice", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Career Prep", href: "/career-prep", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Daily Feed", href: "/daily-feed", icon: <Newspaper className="w-5 h-5" /> },
    { name: "Profile", href: "/profile", icon: <User className="w-5 h-5" /> },
  ];

  const bottomLinks = [
    { name: "Settings", href: "/settings", icon: <Settings className="w-5 h-5" /> },
    { name: "Help", href: "/help", icon: <HelpCircle className="w-5 h-5" /> },
  ];

  return (
    <div className="w-64 bg-base-100 border-r border-base-300 flex-col h-screen hidden md:flex shrink-0 fixed left-0 top-0 z-20">
      <div className="p-6">
        <Link to="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl leading-none">
            K
          </div>
          <span className="text-2xl font-bold text-primary">Kiwi</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-2 overflow-y-auto mt-2">
        {mainLinks.map((link) => {
          const isActive = location.pathname.startsWith(link.href);
          return (
            <Link
              key={link.name}
              to={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
              }`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-base-300 space-y-1 mt-auto pb-6">
        {bottomLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-base-content/60 hover:bg-base-200 hover:text-base-content transition-colors"
          >
            {link.icon}
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
