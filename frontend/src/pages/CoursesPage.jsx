import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BookOpen, Clock, BarChart, ChevronLeft, Play, CheckCircle, Lock, Star } from "lucide-react";

const CoursesPage = () => {
  const { pathId } = useParams();
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Scroll to top when component loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathId]);

  // Course data by learning path
  const coursesData = {
    'investment-banking': {
      title: 'Investment Banking',
      description: 'Master the skills needed for a career in investment banking',
      color: 'from-blue-600 to-indigo-600',
      courses: [
        {
          id: 'ib-1',
          title: 'Financial Statement Analysis',
          description: 'Deep dive into reading and analyzing financial statements',
          modules: 8,
          duration: '3 weeks',
          difficulty: 'Beginner',
          status: 'unlocked',
          preview: true,
          rating: 4.8,
          students: 1240,
          sampleLessons: ['Reading Balance Sheets', 'Income Statement Basics', 'Cash Flow Analysis']
        },
        {
          id: 'ib-2',
          title: 'Valuation Techniques',
          description: 'Learn DCF, comparable companies, and precedent transactions',
          modules: 12,
          duration: '4 weeks',
          difficulty: 'Intermediate',
          status: 'unlocked',
          preview: true,
          rating: 4.9,
          students: 980,
          sampleLessons: ['DCF Modeling', 'Comparable Company Analysis', 'Market Multiples']
        },
        {
          id: 'ib-3',
          title: 'M&A Fundamentals',
          description: 'Understanding mergers, acquisitions, and deal structures',
          modules: 10,
          duration: '3 weeks',
          difficulty: 'Intermediate',
          status: 'locked',
          preview: false,
          rating: 4.7,
          students: 756
        },
        {
          id: 'ib-4',
          title: 'Financial Modeling in Excel',
          description: 'Build complex financial models from scratch',
          modules: 15,
          duration: '5 weeks',
          difficulty: 'Advanced',
          status: 'locked',
          preview: false,
          rating: 4.9,
          students: 890
        },
      ]
    },
    'venture-capital': {
      title: 'Venture Capital',
      description: 'Learn how to evaluate and invest in high-growth startups',
      color: 'from-purple-600 to-pink-600',
      courses: [
        {
          id: 'vc-1',
          title: 'Startup Ecosystem 101',
          description: 'Understanding the venture capital landscape',
          modules: 6,
          duration: '2 weeks',
          difficulty: 'Beginner',
          status: 'unlocked',
          preview: true,
          rating: 4.7,
          students: 890
        },
        {
          id: 'vc-2',
          title: 'Due Diligence Framework',
          description: 'Learn how to evaluate startup opportunities',
          modules: 10,
          duration: '3 weeks',
          difficulty: 'Intermediate',
          status: 'unlocked',
          preview: true,
          rating: 4.8,
          students: 654
        },
        {
          id: 'vc-3',
          title: 'Term Sheets & Deal Structuring',
          description: 'Master the art of negotiating investment terms',
          modules: 8,
          duration: '3 weeks',
          difficulty: 'Advanced',
          status: 'locked',
          preview: false,
          rating: 4.9,
          students: 432
        },
      ]
    },
    'consulting': {
      title: 'Management Consulting',
      description: 'Develop frameworks and skills for top consulting firms',
      color: 'from-green-600 to-emerald-600',
      courses: [
        {
          id: 'cons-1',
          title: 'Case Interview Fundamentals',
          description: 'Master the basics of case interview problem-solving',
          modules: 7,
          duration: '2 weeks',
          difficulty: 'Beginner',
          status: 'unlocked',
          preview: true,
          rating: 4.8,
          students: 1456
        },
        {
          id: 'cons-2',
          title: 'Business Strategy Frameworks',
          description: 'Learn Porter\'s Five Forces, BCG Matrix, and more',
          modules: 9,
          duration: '3 weeks',
          difficulty: 'Intermediate',
          status: 'unlocked',
          preview: true,
          rating: 4.7,
          students: 1123
        },
        {
          id: 'cons-3',
          title: 'Market Sizing & Estimation',
          description: 'Develop structured approaches to estimation problems',
          modules: 6,
          duration: '2 weeks',
          difficulty: 'Intermediate',
          status: 'locked',
          preview: false,
          rating: 4.6,
          students: 876
        },
      ]
    },
    'software-engineering': {
      title: 'Software Engineering',
      description: 'Build modern applications and master development',
      color: 'from-orange-600 to-red-600',
      courses: [
        {
          id: 'swe-1',
          title: 'Web Development Fundamentals',
          description: 'HTML, CSS, JavaScript basics and responsive design',
          modules: 10,
          duration: '4 weeks',
          difficulty: 'Beginner',
          status: 'unlocked',
          preview: true,
          rating: 4.9,
          students: 2340
        },
        {
          id: 'swe-2',
          title: 'React & Modern Frontend',
          description: 'Build interactive UIs with React, hooks, and state management',
          modules: 14,
          duration: '5 weeks',
          difficulty: 'Intermediate',
          status: 'unlocked',
          preview: true,
          rating: 4.8,
          students: 1890
        },
      ]
    },
  };

  const pathData = coursesData[pathId] || coursesData['investment-banking'];

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-lime-50 to-yellow-50">
        {/* Header */}
        <section className="relative py-16 px-4 bg-white/50 backdrop-blur-sm border-b border-green-100">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => navigate('/learning-paths')}
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 mb-6 transition-colors group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Learning Paths</span>
            </button>

            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                  {pathData.title}
                  <span className={`block text-3xl md:text-4xl bg-gradient-to-r ${pathData.color} bg-clip-text text-transparent mt-2`}>
                    Course Curriculum
                  </span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  {pathData.description}
                </p>
              </div>

              <div className="hidden md:block">
                <div className="px-6 py-3 bg-white rounded-2xl border-2 border-green-200 shadow-lg">
                  <div className="text-sm text-gray-500 mb-1">Your Progress</div>
                  <div className="text-3xl font-bold text-green-600">0%</div>
                  <div className="text-xs text-gray-500 mt-1">Start learning!</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {pathData.courses.map((course, index) => {
                const isLocked = course.status === 'locked';
                
                return (
                  <div
                    key={course.id}
                    className={`group relative bg-white rounded-3xl border-2 transition-all duration-500 overflow-hidden
                      ${isLocked 
                        ? 'border-gray-200 opacity-75' 
                        : 'border-gray-200 hover:border-green-400 hover:scale-[1.02] hover:shadow-2xl cursor-pointer'
                      }
                    `}
                    onClick={() => !isLocked && setSelectedCourse(course.id)}
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                    }}
                  >
                    {/* Gradient overlay on hover */}
                    {!isLocked && (
                      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    )}

                    <div className="relative p-5">
                      {/* Top row: Badge and Rating */}
                      <div className="flex items-center justify-between mb-3">
                        {course.preview && !isLocked ? (
                          <span className="px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full text-xs font-bold flex items-center gap-1.5">
                            <Play className="w-3 h-3" />
                            Free Preview
                          </span>
                        ) : isLocked ? (
                          <span className="px-2.5 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold flex items-center gap-1">
                            <Lock className="w-3 h-3" />
                            Locked
                          </span>
                        ) : (
                          <div className="w-16" />
                        )}
                        
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
                          <span className="text-xs text-gray-400">({course.students})</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-green-700 transition-colors">
                        {course.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {course.description}
                      </p>

                      {/* Meta Info - Compact inline */}
                      <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5 text-green-600" />
                          <span>{course.modules} modules</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-green-600" />
                          <span>{course.duration}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <BarChart className="w-3.5 h-3.5 text-green-600" />
                          <span>{course.difficulty}</span>
                        </div>
                      </div>

                      {/* Sample Lessons - Compact pills on hover */}
                      {course.sampleLessons && !isLocked && (
                        <div className="mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex flex-wrap gap-1.5">
                            {course.sampleLessons.map((lesson, idx) => (
                              <div key={idx} className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-xs flex items-center gap-1">
                                <CheckCircle className="w-3 h-3" />
                                {lesson}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* CTA Button */}
                      {!isLocked ? (
                        <button 
                          onClick={() => navigate(`/course/${pathId}/${course.id}`)}
                          className={`w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r ${pathData.color} hover:shadow-xl transition-all transform group-hover:scale-105 flex items-center justify-center gap-2`}
                        >
                          <Play className="w-5 h-5" />
                          Start Course
                        </button>
                      ) : (
                        <button disabled className="w-full py-3 rounded-xl font-bold text-gray-400 bg-gray-100 cursor-not-allowed flex items-center justify-center gap-2">
                          <Lock className="w-5 h-5" />
                          Locked
                        </button>
                      )}
                    </div>

                    {/* Progress indicator (if started) */}
                    {!isLocked && selectedCourse === course.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-emerald-600" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Info */}
            <div className="mt-16 p-8 bg-white rounded-3xl border-2 border-green-200 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">How the Learning Path Works</h3>
                  <p className="text-gray-600 mb-4">
                    Courses are unlocked sequentially. Complete each course to unlock the next one. 
                    Each course includes video lessons, interactive exercises, and real-world projects.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Interactive learning</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Hands-on projects</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Certificate upon completion</span>
                    </div>
                  </div>
                </div>
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
      `}</style>
    </>
  );
};

export default CoursesPage;
