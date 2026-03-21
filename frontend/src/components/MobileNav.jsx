import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  Newspaper, 
} from "lucide-react";

export const MobileNav = () => {
  const location = useLocation();

  const bottomLinks = [
    { name: "Home", href: "/dashboard", icon: <Home className="w-5 h-5 mb-1" /> },
    { name: "Learn", href: "/learn", icon: <BookOpen className="w-5 h-5 mb-1" /> },
    { name: "Practice", href: "/practice", icon: <GraduationCap className="w-5 h-5 mb-1" /> },
    { name: "Prep", href: "/career-prep", icon: <Briefcase className="w-5 h-5 mb-1" /> },
    { name: "Feed", href: "/daily-feed", icon: <Newspaper className="w-5 h-5 mb-1" /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-base-100 border-t border-base-300 md:hidden z-30 pb-safe">
      <div className="flex h-full items-center justify-around px-2">
        {bottomLinks.map((link) => {
          const isActive = location.pathname.startsWith(link.href);
          return (
            <Link
              key={link.name}
              to={link.href}
              className={`flex flex-col items-center justify-center w-full h-full text-xs font-medium transition-colors ${
                isActive ? "text-primary" : "text-base-content/60"
              }`}
            >
              {link.icon}
              <span className="truncate max-w-full">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
