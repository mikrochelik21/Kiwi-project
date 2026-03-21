import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Briefcase, TrendingUp, LineChart, Code, Stethoscope, Palette, Sparkles, ArrowRight, ChevronRight } from "lucide-react";

const LearningPathsPage = () => {
  const [selectedPath, setSelectedPath] = useState(null);
  const [hoveredPath, setHoveredPath] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const learningPaths = [
    {
      id: 'investment-banking',
      title: 'Investment Banking',
      icon: TrendingUp,
      description: 'Master financial modeling, valuation, and M&A transactions',
      color: 'from-blue-600 to-indigo-600',
      gradient: 'from-blue-50 to-indigo-50',
      skills: ['Financial Modeling', 'Valuation', 'M&A', 'Excel'],
      duration: '12 weeks',
      difficulty: 'Advanced',
      courses: 6
    },
    {
      id: 'venture-capital',
      title: 'Venture Capital',
      icon: Sparkles,
      description: 'Learn startup evaluation, term sheets, and portfolio management',
      color: 'from-purple-600 to-pink-600',
      gradient: 'from-purple-50 to-pink-50',
      skills: ['Due Diligence', 'Term Sheets', 'Portfolio Strategy', 'Pitch Analysis'],
      duration: '10 weeks',
      difficulty: 'Intermediate',
      courses: 5
    },
    {
      id: 'consulting',
      title: 'Management Consulting',
      icon: Briefcase,
      description: 'Develop problem-solving frameworks and case interview skills',
      color: 'from-green-600 to-emerald-600',
      gradient: 'from-green-50 to-emerald-50',
      skills: ['Case Frameworks', 'Business Strategy', 'Data Analysis', 'Communication'],
      duration: '8 weeks',
      difficulty: 'Intermediate',
      courses: 5
    },
    {
      id: 'software-engineering',
      title: 'Software Engineering',
      icon: Code,
      description: 'Build full-stack applications and master modern development',
      color: 'from-orange-600 to-red-600',
      gradient: 'from-orange-50 to-red-50',
      skills: ['React', 'Node.js', 'Databases', 'System Design'],
      duration: '16 weeks',
      difficulty: 'Beginner to Advanced',
      courses: 8
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Medicine',
      icon: Stethoscope,
      description: 'Explore medical sciences and healthcare management',
      color: 'from-red-600 to-rose-600',
      gradient: 'from-red-50 to-rose-50',
      skills: ['Anatomy', 'Patient Care', 'Medical Ethics', 'Diagnostics'],
      duration: '20 weeks',
      difficulty: 'Advanced',
      courses: 10
    },
    {
      id: 'design',
      title: 'Product Design',
      icon: Palette,
      description: 'Create beautiful, user-centered products and experiences',
      color: 'from-cyan-600 to-teal-600',
      gradient: 'from-cyan-50 to-teal-50',
      skills: ['UI/UX', 'Figma', 'User Research', 'Prototyping'],
      duration: '12 weeks',
      difficulty: 'Beginner',
      courses: 6
    },
  ];

  const handlePathSelect = (pathId) => {
    setSelectedPath(pathId);
    setTimeout(() => {
      navigate(`/courses/${pathId}`);
    }, 500);
  };

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-lime-50 to-yellow-50">
        {/* Compact Hero Section */}
        <section className="relative pt-12 pb-8 px-4 overflow-hidden">
          {/* Animated background orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-10 left-10 w-64 h-64 bg-green-300 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-300 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}} />
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-xl rounded-full border-2 border-green-300 shadow-lg mb-4 animate-fade-in">
              <span className="text-xl">🥝</span>
              <span className="text-xs font-semibold text-green-900">Choose Your Journey</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 animate-fade-in leading-tight" style={{animationDelay: '0.1s'}}>
              Select Your
              <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 bg-clip-text text-transparent mt-2 pb-4">
                Learning Path
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Discover your perfect career through interactive experiences
            </p>
          </div>
        </section>

        {/* Modern Learning Paths Grid */}
        <section className="relative px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {learningPaths.map((path, index) => {
                const Icon = path.icon;
                const isSelected = selectedPath === path.id;
                const isHovered = hoveredPath === path.id;
                
                return (
                  <div
                    key={path.id}
                    className={`group relative bg-gradient-to-br ${path.gradient} rounded-2xl p-[2px] transition-all duration-500 cursor-pointer
                      ${isSelected ? 'scale-105 shadow-2xl shadow-green-500/50' : 'hover:scale-105 hover:shadow-2xl hover:shadow-green-400/30'}
                    `}
                    onClick={() => handlePathSelect(path.id)}
                    onMouseEnter={() => setHoveredPath(path.id)}
                    onMouseLeave={() => setHoveredPath(null)}
                    style={{
                      animation: `fadeInUp 0.4s ease-out ${index * 0.05}s backwards`
                    }}
                  >
                    {/* Inner card with white background */}
                    <div className="relative bg-white rounded-2xl h-full overflow-hidden">
                      {/* Animated gradient accent bar */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${path.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>

                      <div className="relative p-6">
                        {/* Icon with modern design */}
                        <div className="flex items-center justify-between mb-4">
                          <div className={`relative inline-flex p-3 rounded-xl bg-gradient-to-br ${path.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                            <Icon className="w-6 h-6" />
                            {/* Glow effect */}
                            <div className={`absolute -inset-1 bg-gradient-to-br ${path.color} rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity`} />
                          </div>
                          
                          {/* Quick stats badge */}
                          <div className="px-3 py-1 bg-gray-100 rounded-full">
                            <span className="text-xs font-bold text-gray-700">{path.courses} courses</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-black mb-2 text-gray-900 group-hover:text-green-700 transition-colors">
                          {path.title}
                        </h3>

                        {/* Description */}
                        <p className="text-base text-gray-600 mb-4 line-clamp-2">
                          {path.description}
                        </p>

                        {/* Skills tags - modern pill design */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {path.skills.slice(0, 3).map((skill, idx) => (
                            <span key={idx} className="px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-semibold border border-green-200">
                              {skill}
                            </span>
                          ))}
                          {path.skills.length > 3 && (
                            <span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold">
                              +{path.skills.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Bottom meta - compact */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
                            <span className="flex items-center gap-1">
                              ⏱️ {path.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              📊 {path.difficulty}
                            </span>
                          </div>
                          
                          {/* Arrow indicator */}
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${path.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                            <ChevronRight className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        {/* Selection checkmark */}
                        {isSelected && (
                          <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-scale-in shadow-lg">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-green-200 shadow-md">
                <Sparkles className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">
                  Not sure which path? Each course includes a free preview module
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default LearningPathsPage;
