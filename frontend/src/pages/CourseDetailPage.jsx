import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BookOpen, Mic, Briefcase, ChevronLeft, Play, CheckCircle, Lock, Star, MessageSquare, Award, TrendingUp } from "lucide-react";

const CourseDetailPage = () => {
  const { pathId, courseId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('modules');
  const [selectedModule, setSelectedModule] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Scroll to top when switching tabs
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Mock course data
  const courseData = {
    title: 'Financial Statement Analysis',
    path: 'Investment Banking',
    description: 'Master the art of reading and analyzing financial statements',
    color: 'from-blue-600 to-indigo-600',
    rating: 4.8,
    students: 1240,
    modules: [
      {
        id: 1,
        title: 'Introduction to Financial Statements',
        duration: '15 min',
        completed: false,
        locked: false,
        lessons: ['Balance Sheet Basics', 'Income Statement Overview', 'Cash Flow Introduction']
      },
      {
        id: 2,
        title: 'Reading Balance Sheets',
        duration: '25 min',
        completed: false,
        locked: false,
        lessons: ['Assets Analysis', 'Liabilities & Equity', 'Working Capital']
      },
      {
        id: 3,
        title: 'Income Statement Deep Dive',
        duration: '30 min',
        completed: false,
        locked: true,
        lessons: ['Revenue Recognition', 'Operating Expenses', 'Net Income']
      }
    ],
    interviewPrep: {
      available: true,
      questionsCount: 15,
      avgTime: '45 min',
      topics: ['Financial Ratios', 'Statement Analysis', 'Industry Trends']
    },
    dayInLife: {
      available: true,
      scenarios: 3,
      tasks: ['Analyze Company X', 'Create Financial Model', 'Present Findings']
    }
  };

  const tabs = [
    { id: 'modules', label: 'Course Modules', icon: BookOpen },
    { id: 'interview', label: 'Interview Prep', icon: Mic },
    { id: 'dayinlife', label: 'Day in the Life', icon: Briefcase }
  ];

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-lime-50 to-yellow-50">
        {/* Header */}
        <section className="relative py-16 px-4 bg-white/50 backdrop-blur-sm border-b border-green-100">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => navigate(`/courses/${pathId}`)}
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 mb-6 transition-colors group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Courses</span>
            </button>

            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-green-600 font-semibold mb-2">{courseData.path}</div>
                <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                  {courseData.title}
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mb-4">
                  {courseData.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold">{courseData.rating}</span>
                  </div>
                  <div>{courseData.students.toLocaleString()} students</div>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="px-6 py-3 bg-white rounded-2xl border-2 border-green-200 shadow-lg">
                  <div className="text-sm text-gray-500 mb-1">Your Progress</div>
                  <div className="text-3xl font-bold text-green-600">0%</div>
                  <div className="text-xs text-gray-500 mt-1">Let's start!</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-green-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto py-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'modules' && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Modules</h2>
                {courseData.modules.map((module, index) => (
                  <div
                    key={module.id}
                    className={`bg-white rounded-2xl border-2 p-6 sm:p-8 transition-all ${
                      module.locked
                        ? 'border-gray-200 opacity-60'
                        : 'border-gray-200 hover:border-green-400 hover:shadow-xl cursor-pointer'
                    }`}
                    onClick={() => !module.locked && setSelectedModule(module.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-6">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                            module.locked ? 'bg-gray-200 text-gray-500' : 'bg-green-100 text-green-700'
                          }`}>
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                            <p className="text-sm text-gray-500">{module.duration}</p>
                          </div>
                        </div>
                        
                        <div className="ml-13 space-y-2">
                          {module.lessons.map((lesson, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              {module.locked ? (
                                <Lock className="w-4 h-4 text-gray-400" />
                              ) : (
                                <CheckCircle className="w-4 h-4 text-green-500" />
                              )}
                              {lesson}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {!module.locked && (
                        <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                          <Play className="w-4 h-4" />
                          Start
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'interview' && (
              <InterviewPrepSection courseData={courseData} />
            )}

            {activeTab === 'dayinlife' && (
              <DayInLifeSection courseData={courseData} />
            )}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

// Interview Prep Component
const InterviewPrepSection = ({ courseData }) => {
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const interviewQuestions = [
    {
      id: 1,
      type: 'Technical',
      question: 'Walk me through a DCF analysis. What are the key components?',
      expectedPoints: ['Free Cash Flow projection', 'Discount rate (WACC)', 'Terminal Value', 'NPV calculation']
    },
    {
      id: 2,
      type: 'Behavioral',
      question: 'Tell me about a time you analyzed complex financial data. What was your approach?',
      expectedPoints: ['Structured methodology', 'Data validation', 'Key insights', 'Impact of analysis']
    },
    {
      id: 3,
      type: 'Case',
      question: 'A company is considering an acquisition. What financial metrics would you analyze first?',
      expectedPoints: ['Valuation multiples', 'Synergies', 'Debt capacity', 'Cultural fit', 'Strategic rationale']
    }
  ];

  const handleSubmitAnswer = () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const currentQ = interviewQuestions[currentQuestion];
      const answer = userAnswer.toLowerCase();
      
      // Simple keyword matching for demo
      const matchedPoints = currentQ.expectedPoints.filter(point => 
        answer.includes(point.toLowerCase().split(' ')[0])
      );
      
      const score = (matchedPoints.length / currentQ.expectedPoints.length) * 100;
      
      setFeedback({
        score: Math.round(score),
        matchedPoints,
        missedPoints: currentQ.expectedPoints.filter(p => !matchedPoints.includes(p)),
        suggestion: score >= 70 
          ? 'Great answer! You covered the key points well.' 
          : 'Good start! Try to elaborate more on the key components mentioned below.'
      });
      
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(prev => prev + 1);
    setUserAnswer('');
    setFeedback(null);
  };

  if (!interviewStarted) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl border-2 border-green-200 p-12 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mic className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl font-black mb-4 text-gray-900">AI Mock Interview</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Practice real interview questions with AI-powered feedback. Improve your answers and build confidence.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-green-50 rounded-2xl">
              <div className="text-3xl font-bold text-green-700 mb-2">{courseData.interviewPrep.questionsCount}</div>
              <div className="text-sm text-gray-600">Questions</div>
            </div>
            <div className="p-6 bg-blue-50 rounded-2xl">
              <div className="text-3xl font-bold text-blue-700 mb-2">{courseData.interviewPrep.avgTime}</div>
              <div className="text-sm text-gray-600">Avg. Time</div>
            </div>
            <div className="p-6 bg-purple-50 rounded-2xl">
              <div className="text-3xl font-bold text-purple-700 mb-2">AI</div>
              <div className="text-sm text-gray-600">Powered</div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="font-bold text-gray-900 mb-3">Topics Covered:</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {courseData.interviewPrep.topics.map((topic, idx) => (
                <span key={idx} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                  {topic}
                </span>
              ))}
            </div>
          </div>
          
          <button
            onClick={() => setInterviewStarted(true)}
            className="px-12 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center gap-3"
          >
            <Play className="w-6 h-6" />
            Start Interview Practice
          </button>
        </div>
      </div>
    );
  }

  const currentQ = interviewQuestions[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Progress */}
      <div className="bg-white rounded-2xl border-2 border-gray-200 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-600">Question {currentQuestion + 1} of {interviewQuestions.length}</span>
          <span className="text-sm font-semibold text-green-600">{currentQ.type}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-green-600 to-emerald-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / interviewQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl border-2 border-green-200 p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">Interviewer asks:</div>
            <h3 className="text-2xl font-bold text-gray-900">{currentQ.question}</h3>
          </div>
        </div>

        <div className="space-y-6 mt-6">
          <textarea
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Type your answer here..."
            className="w-full h-40 p-4 border-2 border-gray-200 rounded-xl focus:border-green-400 focus:outline-none resize-none"
            disabled={feedback !== null}
          />

          {!feedback && (
            <button
              onClick={handleSubmitAnswer}
              disabled={!userAnswer.trim() || isAnalyzing}
              className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
            >
              {isAnalyzing ? 'AI is analyzing your answer...' : 'Submit Answer for Feedback'}
            </button>
          )}
        </div>
      </div>

      {/* Feedback */}
      {feedback && (
        <div className="bg-white rounded-2xl border-2 border-green-200 p-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900">AI Feedback</h3>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-gray-700">Score</span>
              <span className={`text-3xl font-black ${feedback.score >= 70 ? 'text-green-600' : 'text-orange-600'}`}>
                {feedback.score}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className={`h-3 rounded-full transition-all duration-1000 ${feedback.score >= 70 ? 'bg-green-600' : 'bg-orange-600'}`}
                style={{ width: `${feedback.score}%` }}
              />
            </div>
          </div>

          <div className="mb-6 p-4 bg-blue-50 rounded-xl">
            <p className="text-gray-700">{feedback.suggestion}</p>
          </div>

          {feedback.matchedPoints.length > 0 && (
            <div className="mb-4">
              <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Key Points You Covered:
              </h4>
              <ul className="space-y-1">
                {feedback.matchedPoints.map((point, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {feedback.missedPoints.length > 0 && (
            <div className="mb-6">
              <h4 className="font-bold text-orange-700 mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Areas to Improve:
              </h4>
              <ul className="space-y-1">
                {feedback.missedPoints.map((point, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start gap-2">
                    <span className="text-orange-600">!</span>
                    Consider mentioning: {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {currentQuestion < interviewQuestions.length - 1 ? (
            <button
              onClick={handleNextQuestion}
              className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
            >
              Next Question →
            </button>
          ) : (
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-700 mb-4">🎉 Interview Practice Complete!</p>
              <button
                onClick={() => {
                  setInterviewStarted(false);
                  setCurrentQuestion(0);
                  setUserAnswer('');
                  setFeedback(null);
                }}
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
              >
                Practice Again
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Day in the Life Component
const DayInLifeSection = ({ courseData }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl border-2 border-green-200 p-12 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Briefcase className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-4xl font-black mb-4 text-gray-900">Day in the Life</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience real-world scenarios and tasks professionals handle daily. Apply what you've learned!
        </p>
        
        <div className="space-y-4 mb-8">
          {courseData.dayInLife.tasks.map((task, idx) => (
            <div key={idx} className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl text-left border-2 border-purple-200 hover:border-purple-400 transition-all cursor-pointer group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{task}</h3>
                    <p className="text-sm text-gray-600">Real-world scenario • 30-45 min</p>
                  </div>
                </div>
                <Play className="w-6 h-6 text-purple-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
        
        <button className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center gap-3">
          <Play className="w-6 h-6" />
          Start First Scenario
        </button>
      </div>
    </div>
  );
};

export default CourseDetailPage;
