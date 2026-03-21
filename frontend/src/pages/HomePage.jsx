import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RateLimitedUI from "../components/RateLimitedUI";
import api from "../lib/axios";
import toast from "react-hot-toast";
import PageContainer, { GridContainer } from "../components/PageContainer";
import useAuthStore from "../store/authStore";
import { BookOpen, Code, Microscope, Briefcase, Palette, Atom } from "lucide-react";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedField, setSelectedField] = useState('All');
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const fields = [
    { name: 'All', icon: BookOpen },
    { name: 'Engineering', icon: Code },
    { name: 'Medicine', icon: Microscope },
    { name: 'Business', icon: Briefcase },
    { name: 'Arts', icon: Palette },
    { name: 'Sciences', icon: Atom }
  ];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        // Mock data - will be replaced with API call
        const mockCourses = [
          {
            _id: '1',
            title: 'Computer Science Fundamentals',
            field: 'Engineering',
            description: 'Learn programming, algorithms, and data structures.',
            difficulty: 'Beginner',
            duration: '4 years',
            modules: 5
          },
          {
            _id: '2',
            title: 'Medical Sciences',
            field: 'Medicine',
            description: 'Explore human anatomy, physiology, and medical practice.',
            difficulty: 'Advanced',
            duration: '6 years',
            modules: 8
          },
          {
            _id: '3',
            title: 'Business Administration',
            field: 'Business',
            description: 'Master management, marketing, and entrepreneurship.',
            difficulty: 'Intermediate',
            duration: '4 years',
            modules: 6
          },
          {
            _id: '4',
            title: 'Fine Arts & Design',
            field: 'Arts',
            description: 'Express creativity through visual arts and design.',
            difficulty: 'Beginner',
            duration: '4 years',
            modules: 4
          },
        ];
        setCourses(mockCourses);
        setIsRateLimited(false);
      } catch (error) {
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load courses");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = selectedField === 'All' 
    ? courses 
    : courses.filter(course => course.field === selectedField);

  return (
    <>
      <Navbar />
      
      <PageContainer variant="default" maxWidth="7xl">
        <div className="py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Explore Courses</h1>
          <p className="text-gray-600 mb-8">Discover programs and try interactive content before committing</p>

          {/* Field Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {fields.map((field) => {
              const Icon = field.icon;
              return (
                <button
                  key={field.name}
                  onClick={() => setSelectedField(field.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                    selectedField === field.name
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-green-500'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {field.name}
                </button>
              );
            })}
          </div>

          {isRateLimited && <RateLimitedUI />}

          {loading && <div className="text-center text-green-600 py-10">Loading courses...</div>}

          {filteredCourses.length === 0 && !isRateLimited && !loading && (
            <div className="text-center py-20">
              <BookOpen className="w-20 h-20 mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No courses found</h3>
              <p className="text-gray-500">Try selecting a different field</p>
            </div>
          )}

          {filteredCourses.length > 0 && !isRateLimited && (
            <GridContainer columns={3} gap={6}>
              {filteredCourses.map((course) => (
                <div
                  key={course._id}
                  className="bg-white rounded-2xl border-2 border-gray-200 hover:border-green-400 transition-all duration-300 hover:scale-105 cursor-pointer shadow-md hover:shadow-2xl overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                        {course.field}
                      </span>
                      <span className="text-xs text-gray-500">{course.difficulty}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {course.modules} modules
                      </span>
                      <span>{course.duration}</span>
                    </div>
                    
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all">
                      Try Interactive Content
                    </button>
                  </div>
                </div>
              ))}
            </GridContainer>
          )}
        </div>
      </PageContainer>

      <Footer />
    </>
  );
};
export default HomePage;
