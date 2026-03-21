<h1 align="center">🥝 Kiwi - Career & Course Exploration Platform ✨</h1>

![Demo App](/frontend/public/screenshot-for-readme.png)

<p align="center">
  <strong>Discover your perfect career path through interactive exploration</strong><br>
  Experience real course content, get AI-powered guidance, and make informed educational decisions.
</p>

---

## 🌟 Overview

**Kiwi** is a fullstack web application that helps students and career-changers explore university programs and career paths through hands-on, interactive experiences. No more choosing majors blindly—try before you commit!

### ✨ Key Features

- 🎓 **Interactive Course Previews**
  - Browse programs by field (Engineering, Medicine, Business, Arts, Sciences, etc.)
  - Experience real course content through mini-lessons and exercises
  - Gamified learning modules that simulate actual coursework
  - Understand what each program truly involves

- 🧠 **AI-Powered Career Guidance**
  - Personalized interest and skills assessments
  - Smart career path recommendations based on your profile
  - Industry insights and job market trends
  - Skills mapping for different professions

- 💼 **Mock Interview Practice**
  - Industry-specific interview questions
  - AI-generated scenarios for different career paths
  - Real-time feedback and improvement suggestions
  - Build confidence before real interviews

- 📊 **Progress Tracking & Recommendations**
  - Visual learning journey
  - Track explored courses and developed skills
  - Save favorite programs for later review
  - Personalized course suggestions based on activity

- 🎨 **Beautiful & Accessible UI**
  - Fresh, kiwi-themed design with green gradients
  - Smooth animations and transitions
  - Fully responsive across all devices
  - Accessible to all users

- ⚡ **Seamless User Experience**
  - Fast, responsive interface
  - Secure authentication with JWT
  - Real-time AI interactions
  - Mobile-friendly for learning on the go

---

## 🏭️ How It Works

### 1️⃣ **User Flow**

```
Browse Courses → Try Interactive Modules → Take Assessments → Get AI Recommendations → Track Progress
```

**Step-by-step:**
1. User visits landing page and explores available fields
2. Selects a course or career path of interest
3. Engages with interactive content (mini-lessons, games, simulations)
4. Takes optional skills/interest assessments
5. Receives personalized AI recommendations
6. Saves progress and favorite programs
7. Practices with mock interviews for target careers

### 2️⃣ **Platform Architecture**

```
Frontend (React) → Express API → Content Engine → MongoDB
                ↓
             AI Services (OpenAI/Gemini)
                ↓
            Personalized Recommendations
```

**Backend Processing:**
- **User Management**: Secure authentication, profile storage, progress tracking
- **Content Delivery**: Curated course modules, interactive exercises, career data
- **AI Integration**: Assessment analysis, personalized recommendations, mock interviews
- **Progress Tracking**: Learning journey visualization, skill development metrics

- **Data Models**:
  - Users with preferences and progress
  - Courses with modules and content
  - Career paths with requirements and insights
  - Assessment results and recommendations

- **Rate Limiting**: Redis-based (prevents abuse)

### 3️⃣ **Tech Stack**

**Frontend:**
- React 18 with Vite
- React Router for navigation
- TailwindCSS for styling
- Lucide React for icons
- React Hot Toast for notifications
- Zustand for state management

**Backend:**
- Node.js + Express
- MongoDB (via Mongoose) for user data, courses, and progress
- OpenAI/Gemini API for AI-powered features
- Upstash Redis for rate limiting
- JWT authentication

---

## 🎨 Highlights

- 🥝 **Unique Kiwi Theme** - Consistent branding with green gradients and fresh design
- 🎮 **Gamified Learning** - Interactive modules that make exploration fun
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- 🤖 **AI-Powered Guidance** - Personalized recommendations based on your profile
- 📈 **Progress Tracking** - Visual journey through explored courses and skills
- 🚀 **Production Ready** - Environment configs, error handling, CORS setup


### Frontend (`/frontend`)

```env
VITE_API_URL=http://localhost:5001
```

---

## 🔧 Run the Backend

```bash
cd backend
npm install
npm run dev
```

Server runs on `http://localhost:5001`

---

## 💻 Run the Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## 📚 API Endpoints

### Courses & Careers
- `GET /api/courses` - Get all available courses
- `GET /api/courses/:id` - Get specific course details
- `GET /api/careers` - Get all career paths
- `POST /api/assessments` - Submit skills/interest assessment
- `GET /api/recommendations` - Get personalized recommendations

### User Progress
- `GET /api/progress` - Get user's learning progress
- `POST /api/progress` - Update progress
- `POST /api/favorites` - Save favorite courses

### Authentication
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user

---

## 🎯 Key Innovations

1. **Interactive Course Exploration** - Experience real course content before committing
2. **AI-Powered Matching** - Personalized recommendations based on skills and interests
3. **Mock Interview Practice** - Industry-specific questions with AI feedback
4. **Progress Visualization** - Track your learning journey and skill development
5. **Skills Mapping** - See exactly what competencies each career path requires

---

## 🚀 Deployment Notes

- Set `NODE_ENV=production` in backend .env
- Configure MongoDB Atlas whitelist for production IPs
- Update `VITE_API_URL` to production backend URL
- Consider CDN for frontend assets
- Enable HTTPS in production

---

## 📄 License

MIT

---

<p align="center">Made with 🥝 for students exploring their future</p>
