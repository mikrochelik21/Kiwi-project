import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Sparkles, TrendingUp, Eye, Zap, CheckCircle, ArrowRight, BarChart3, Lightbulb, Target, Heart, Globe, X } from "lucide-react";
import Navbar from "../components/Navbar";

const CreatorLandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Deep Content Analysis",
      description: "Comprehensive evaluation of your content quality, structure, and engagement potential",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "UX Score",
      description: "User experience assessment with actionable insights for better engagement",
      color: "from-lime-600 to-green-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Metrics",
      description: "Real PageSpeed metrics with smart fallbacks",
      color: "from-emerald-600 to-teal-600"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Smart Recommendations",
      description: "Personalized tips based on your blog’s data",
      color: "from-teal-600 to-cyan-600"
    }
  ];

  const stats = [
    { value: "90%", label: "Accuracy Rate" },
    { value: "1000+", label: "Sites Analyzed" },
    { value: "<60s", label: "Analysis Time" },
    { value: "Free", label: "No Cost" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-lime-50 to-yellow-50 overflow-hidden">
      {/* Navigation */}
      <Navbar />
      
      {/* Subtle background without animated particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        {/* Static kiwi-inspired circles at different positions */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full border-8 border-green-400/40" 
             style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}} />
        <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-lime-300/20" />
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full border-4 border-emerald-400/30" />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-green-400/25 rounded-full" />
        
        {/* Organic shapes */}
        <svg className="absolute bottom-0 left-0 w-full opacity-20" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,300 Q300,200 600,250 T1200,300 L1200,400 L0,400 Z" fill="url(#grad1)" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:'rgb(134,239,172)',stopOpacity:0.3}} />
              <stop offset="100%" style={{stopColor:'rgb(163,230,53)',stopOpacity:0.3}} />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Dotted pattern overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(107,159,62,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left space-y-8">
              {/* Badge with animation */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-xl rounded-full border-2 border-green-300 shadow-lg animate-slide-in"
              >
                <span className="text-xl animate-wiggle inline-block">🥝</span>
                <span className="text-sm font-semibold text-green-900">Explore Before You Commit</span>
              </div>

              {/* Main Heading with creative styling */}
              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                <span className="block text-gray-800">Discover Your</span>
                <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 bg-clip-text text-transparent relative">
                  Perfect Career Path
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                    <path d="M2 10C50 2, 100 8, 150 4C200 8, 250 2, 298 10" stroke="#6B9F3E" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg mb-2">
                Try interactive course content, take assessments, and get <span className="font-semibold text-green-700">AI-powered guidance</span> to make the right educational choice.
              </p>
              
              {/* Value proposition subtext */}
              <p className="text-sm text-gray-500 mb-6 max-w-lg">
                🎯 Save time and money - explore before you commit
              </p>

              {/* CTA Buttons with creative styling */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/learning-paths"
                  className="group relative px-8 py-4 bg-green-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    🥝 Choose Your Path
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient" 
                       style={{backgroundSize: '200% 200%'}} />
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-green-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-70 transition-opacity duration-300 animate-pulse" />
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                  </div>
                </Link>
                
                <button 
                  onClick={() => setShowVideoModal(true)}
                  className="group px-8 py-4 bg-white text-green-700 rounded-2xl font-semibold text-lg border-2 border-green-300 hover:border-green-500 hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-md"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Eye className="w-5 h-5" />
                    Watch Demo
                  </span>
                </button>
              </div>

              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-200 text-sm text-gray-600">
                <span className="text-green-600">✓</span>
                No credit card required · Start immediately
              </div>

              {/* Quick stats with creative layout */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { value: "50+", label: "Courses" },
                  { value: "AI", label: "Powered" },
                  { value: "Free", label: "Always" }
                ].map((stat, i) => (
                  <div key={i} className="text-center group hover:scale-110 transition-transform cursor-default">
                    <div className="text-3xl font-black bg-gradient-to-br from-green-700 to-emerald-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Creative visual element */}
            <div className="relative lg:block hidden">
              {/* Large decorative kiwi-inspired circle */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 rounded-full border-8 border-green-300/30 animate-spin" style={{animationDuration: '20s'}} />
                
                {/* Main circle with gradient */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-2xl flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm" />
                  
                  {/* Inner content */}
                  <div className="relative text-center text-white p-8">
                    <div className="text-8xl mb-4 animate-bounce-slow">🥝</div>
                    <div className="text-2xl font-bold mb-2">50+ Programs</div>
                    <div className="text-sm opacity-90">To explore</div>
                  </div>
                </div>
                
                {/* Floating mini cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-float">
                  <BarChart3 className="w-8 h-8 text-green-600" />
                  <div className="text-xs font-bold mt-1">Courses</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-float" style={{animationDelay: '1s'}}>
                  <Zap className="w-8 h-8 text-lime-600" />
                  <div className="text-xs font-bold mt-1">AI Help</div>
                </div>
                
                <div className="absolute top-1/2 -left-8 bg-white rounded-2xl p-4 shadow-xl animate-float" style={{animationDelay: '0.5s'}}>
                  <Eye className="w-8 h-8 text-emerald-600" />
                  <div className="text-xs font-bold mt-1">Preview</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Creative asymmetric layout */}
      <section className="relative py-32 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-6xl">🌱</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              Everything You Need
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full" />
          </div>

          {/* Asymmetric bento-style grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large feature card - spans 2 columns */}
            <Link to="/explore" className="md:col-span-2 md:row-span-2 group relative p-10 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border-2 border-green-200 hover:border-green-400 transition-all duration-500 hover:scale-[1.02] cursor-pointer shadow-lg hover:shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-300/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="inline-flex p-5 rounded-3xl bg-gradient-to-br from-green-600 to-emerald-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <BarChart3 className="w-10 h-10" />
                </div>
                
                <h3 className="text-4xl font-black mb-4 text-gray-900">
                  Interactive Course Previews
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Experience real course content through mini-lessons, games, and interactive modules. Know exactly what you're getting into before choosing your major.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {['Engineering', 'Medicine', 'Business', 'Arts'].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-white/80 rounded-full text-sm font-semibold text-green-700 border border-green-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            {/* Smaller feature cards */}
            {[
              { 
                icon: <Eye className="w-8 h-8" />, 
                title: "AI Guidance", 
                desc: "Personalized recommendations",
                color: "from-lime-600 to-green-600",
                tags: ['Smart Match', 'Career Fit'],
                link: '/learning-paths'
              },
              { 
                icon: <Zap className="w-8 h-8" />, 
                title: "Mock Interviews", 
                desc: "Practice for your future",
                color: "from-emerald-600 to-teal-600",
                tags: ['AI Feedback', 'Industry Q&A'],
                link: '/learning-paths'
              },
              { 
                icon: <Target className="w-8 h-8" />, 
                title: "Progress Tracking", 
                desc: "Watch your journey unfold",
                color: "from-teal-600 to-cyan-600",
                tags: ['Visual', 'Milestones'],
                link: '/learning-paths'
              },
            ].map((feature, i) => (
              <Link
                key={i}
                to={feature.link}
                className="group relative p-8 bg-white rounded-3xl border-2 border-gray-200 hover:border-green-400 transition-all duration-500 hover:scale-105 cursor-pointer shadow-md hover:shadow-2xl hover:shadow-green-200/50 overflow-hidden"
                style={{
                  animation: `fadeIn 0.6s ease-out ${i * 0.15}s backwards`
                }}
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-emerald-50/50 to-lime-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                {/* Glow border on hover */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-green-700 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {feature.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {feature.tags.map((tag, j) => (
                      <span key={j} className="px-2 py-1 bg-gray-100 group-hover:bg-green-50 rounded-lg text-xs font-medium text-gray-600 group-hover:text-green-700 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Creative visual timeline */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-gray-900">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to find your path
            </p>
          </div>

          {/* Creative flowing timeline */}
          <div className="relative">
            {/* Animated curved connecting line */}
            <svg className="absolute top-0 left-0 w-full h-full hidden lg:block pointer-events-none" style={{zIndex: 0}}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6B9F3E" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#84cc16" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path 
                d="M 200 100 Q 400 150, 600 100 T 1000 100" 
                stroke="url(#lineGradient)" 
                strokeWidth="3" 
                fill="none" 
                strokeDasharray="10,5"
                className="animate-pulse-slow"
              />
            </svg>

            <div className="grid lg:grid-cols-3 gap-12 relative z-10">
              {[
                { 
                  step: "1", 
                  title: "Browse Courses", 
                  desc: "Explore programs across engineering, medicine, business, and more", 
                  icon: <Globe className="w-12 h-12" />,
                  emoji: "🎓"
                },
                { 
                  step: "2", 
                  title: "Try Content", 
                  desc: "Engage with interactive lessons and challenges from real courses", 
                  icon: <Lightbulb className="w-12 h-12" />,
                  emoji: "🎮"
                },
                { 
                  step: "3", 
                  title: "Get Guidance", 
                  desc: "Receive AI-powered recommendations tailored to your profile", 
                  icon: <CheckCircle className="w-12 h-12" />,
                  emoji: "🤖"
                }
              ].map((item, i) => (
                <div key={i} className="relative group" style={{animation: `fadeIn 0.6s ease-out ${i * 0.2}s backwards`}}>
                  {/* Step card with creative hover effect and 3D transform */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 hover:border-green-400 transition-all duration-500 hover:scale-105 hover:-rotate-1 overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/70 to-emerald-50/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                    
                    <div className="relative z-10">
                      {/* Large emoji background */}
                      <div className="absolute -top-6 -right-6 text-7xl opacity-10 group-hover:opacity-30 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                        {item.emoji}
                      </div>
                      
                      {/* Step number badge with subtle effects */}
                      <div className="relative mb-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white font-black text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                          {item.step}
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-lime-400 rounded-full opacity-50" />
                      </div>
                      
                      <h3 className="text-2xl font-black mb-3 text-gray-900 group-hover:text-green-700 transition-colors">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      
                      {/* Decorative bottom bar with gradient animation */}
                      <div className="mt-6 h-1.5 w-full bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{backgroundSize: '200% 100%'}} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-6xl mb-4">💡</div>
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-gray-900">
              Got Questions?
            </h2>
            <p className="text-xl text-gray-600">We've got answers</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is Kiwi really free?",
                a: "Yes! Kiwi is completely free to use. You can explore all courses, try interactive content, and get AI-powered recommendations without any cost."
              },
              {
                q: "How does the course preview work?",
                a: "Each course offers free preview modules where you can try real lessons, interactive exercises, and get a feel for the content before committing to a full program."
              },
              {
                q: "What kind of AI guidance do you provide?",
                a: "Our AI analyzes your interests, skills, and preferences to recommend career paths and courses that match your profile. It helps you make informed decisions about your educational journey."
              },
              {
                q: "Can I try multiple career paths?",
                a: "Absolutely! We encourage you to explore different paths. That's the whole point - discover what truly interests you before making a commitment."
              },
              {
                q: "Do I need to create an account?",
                a: "You can browse courses without an account, but creating one (free!) lets you save your progress, track explored courses, and get personalized recommendations."
              }
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-gradient-to-r from-gray-50 to-green-50/30 rounded-2xl border-2 border-gray-200 hover:border-green-400 transition-all duration-300"
              >
                <summary className="cursor-pointer p-6 font-bold text-lg text-gray-900 flex items-center justify-between group-hover:text-green-700 transition-colors">
                  <span>{faq.q}</span>
                  <span className="text-green-600 transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link
              to="/learning-paths"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
            >
              Start Exploring Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Unique split design with animated gradient */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-lime-600" style={{backgroundSize: '200% 200%', animation: 'gradient 10s ease infinite'}} />
        
        {/* Split design overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white transform skew-x-12 origin-top-right" />
        </div>
        
        {/* Subtle static circles in background - no animation */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full" />
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Large kiwi emoji with animation */}
          <div className="text-8xl mb-8 animate-bounce-slow inline-block">
            🥝
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
            Ready to Explore?
          </h2>
          <p className="text-2xl mb-8 text-white/95 max-w-2xl mx-auto">
            Join students making smarter education choices
          </p>
          
          {/* Social proof */}
          <div className="mb-8 text-white/90 font-semibold">
            ✨ Start your free trial - no credit card required
          </div>
          
          {/* Creative CTA button with glow effect */}
          <Link
            to="/learning-paths"
            className="inline-flex items-center gap-3 px-12 py-6 bg-white text-green-700 rounded-full font-black text-xl shadow-2xl hover:shadow-white/30 hover:scale-110 transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span className="text-2xl group-hover:animate-wiggle">🚀</span>
              Start Free Trial Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -inset-1 bg-white rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
          </Link>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
            {[
              { icon: "✓", text: "No commitment needed" },
              { icon: "✓", text: "100% Free" },
              { icon: "✓", text: "AI-powered guidance" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium">
                <span className="text-lg">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-green-200 py-12 px-4 bg-white/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🥝</span>
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Kiwi</span>
          </div>
          <p className="text-gray-600 text-sm mb-2">
            © 2025 Kiwi. Explore your future with confidence.
          </p>
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            Made with <Heart className="size-4 text-green-500 animate-heartbeat" fill="currentColor" /> for students everywhere
          </p>
        </div>
      </footer>

      {/* Video Demo Modal */}
      {showVideoModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowVideoModal(false)}
        >
          <div 
            className="relative bg-white rounded-2xl max-w-5xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <X className="w-6 h-6 text-slate-700" />
            </button>

            {/* Video Container */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <video
                className="absolute inset-0 w-full h-full"
                controls
                autoPlay
                src="/Kiwi_demo.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Info */}
            <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50">
              <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">🥝</span>
                Kiwi Demo - Course Exploration in Action
              </h3>
              <p className="text-slate-600">
                Watch how Kiwi helps you explore courses interactively and get personalized career guidance.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatorLandingPage;
