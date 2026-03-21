# 🥝 Kiwi - Project Documentation

> **Career & Course Exploration Platform**  
> A full-stack MERN application that helps students and career-changers explore academic programs through interactive content and AI-powered guidance.

---

## 📑 Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Key Features](#key-features)
4. [Technology Stack](#technology-stack)
5. [Setup & Installation](#setup--installation)
6. [Environment Configuration](#environment-configuration)
7. [API Endpoints](#api-endpoints)
8. [Deployment](#deployment)

---

## 🎯 Project Overview

**The Problem:**
Many individuals—high school students choosing majors or adults considering career changes—make educational decisions based on stereotypes, vague descriptions, or family pressure. This leads to:
- High rates of major switching
- Career dissatisfaction
- Wasted time and resources
- Misalignment between expectations and reality

**Our Solution:**
Kiwi provides **hands-on exploration** of university courses and career paths through:
- **Interactive Course Previews** - Experience real course content before committing
- **Skills Mapping** - Discover which skills are needed for different career paths
- **Personalized Guidance** - AI-powered recommendations based on interests and strengths
- **Career Simulators** - Interactive modules showing what different professions actually involve
- **Mock Interviews** - AI-generated interview questions for various career paths

**Core Features:**
- Browse engineering, medicine, business, arts, and more academic tracks
- Try interactive lessons and mini-games from real courses
- Get personalized course recommendations based on skill assessments
- Explore career paths with detailed job descriptions and required competencies
- Practice with AI mock interviews for different industries

---

## 🏗️ Architecture

**Client** (React + Vite) → **API** (Express) → **Content Engine** → **AI Services** (OpenAI/Gemini)
                                                   ↓
                                           **MongoDB** (user data, progress, courses)
                                           **Redis** (rate limiting, session management)

**Data Flow:**
1. User browses available courses/careers
2. Selects interactive module or takes assessment
3. Backend serves curated educational content
4. AI analyzes user responses and preferences
5. Personalized recommendations generated
6. Progress tracked and saved to user profile

---

## ✨ Key Features

### 1. Interactive Course Explorer
- **Browse by Field**: Engineering, Medicine, Business, Arts, Sciences, etc.
- **Preview Content**: Mini-lessons and interactive exercises from real courses
- **Skill Mapping**: See which skills each program develops
- **Gamified Learning**: Engaging challenges that simulate course material

### 2. Personalized Career Guidance
- **Interest Assessment**: AI-powered quiz to identify strengths and preferences
- **Career Path Matching**: Recommendations based on skills, interests, and goals
- **Industry Insights**: Real job market data and growth projections
- **Success Stories**: Learn from professionals in various fields

### 3. AI Mock Interviews
- **Industry-Specific Questions**: Tailored to different career paths
- **Real-time Feedback**: AI analysis of responses
- **Practice Scenarios**: Common interview situations by profession
- **Improvement Tips**: Personalized suggestions for better performance

### 4. Progress Tracking
- **Learning Journey**: Visual representation of explored courses
- **Skill Development**: Track competencies gained through modules
- **Saved Favorites**: Bookmark interesting programs for later
- **Recommendation History**: Review past AI suggestions

### 5. User Experience
- **Kiwi-themed design** with fresh, educational aesthetics
- **Mobile-responsive** for learning on the go
- **Intuitive navigation** through complex course catalogs
- **Fully accessible** for all users

---

## 🔧 Technology Stack

**Frontend:**
- React 18 + Vite
- React Router 7
- TailwindCSS
- Lucide Icons
- Zustand (state)
- Axios

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Redis (Upstash) - rate limiting
- OpenAI/Gemini API - AI features

**DevOps:**
- Git + GitHub
- Vercel/Render deployment
- Environment-based configuration
- Puppeteer (headless browser)
- Cheerio (HTML parsing)
- JWT authentication
- Bcrypt (passwords)

**External Services:**
- Google PageSpeed Insights API
- Datamuse API (word frequency)
- Upstash Redis (rate limiting: 3 req/10s)

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js 20+
- MongoDB (local or Atlas)
- Upstash Redis account

### Backend Setup

```bash
cd backend
npm install

# Create .env file
cp .env.example .env
# Edit .env with your credentials

npm run dev
# Runs on http://localhost:5001
```

### Frontend Setup

```bash
cd frontend
npm install

# Create .env file
echo "VITE_API_URL=http://localhost:5001" > .env

npm run dev
# Runs on http://localhost:5173
```

---

## 🔐 Environment Configuration

### Backend (.env)

```bash
# Required
MONGO_URI=mongodb://localhost:27017/kiwi
JWT_SECRET=your-secret-key-min-32-chars
UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-token

# Optional
NODE_ENV=development
PORT=5001
PAGESPEED_API_KEY=your-google-api-key
CLIENT_URL=http://localhost:5173
```

### Frontend (.env)

```bash
VITE_API_URL=http://localhost:5001
```

---

## 🔌 API Endpoints

### Analysis

**POST** `/api/analyze`
```json
Request:
{
  "url": "https://example.com/blog-post"
}

Response (200):
{
  "url": "...",
  "final_score": 87,
  "modules": {
    "performance": { "score": 85, "metrics": {...} },
    "content": { "score": 92, "metrics": {...} },
    "seo": { "score": 88, "metrics": {...} },
    // ... 5 more modules
  },
  "recommendations": [...]
}

Errors:
400 - Insufficient content (< 100 words)
429 - Rate limit exceeded
500 - Server error
```

### Authentication (Optional)

- **POST** `/api/auth/register` - Create account
- **POST** `/api/auth/login` - Login (sets JWT cookie)
- **POST** `/api/auth/logout` - Logout
- **GET** `/api/auth/me` - Get current user

---

## 🚀 Deployment

### Backend (Railway/Render)

1. **Set environment variables** in platform dashboard
2. **Deploy** from GitHub repository
3. **Update** `CLIENT_URL` to production frontend URL

### Frontend (Vercel/Netlify)

1. **Connect** GitHub repository
2. **Build settings**:
   - Build command: `npm run build`
   - Output directory: `dist`
3. **Set** `VITE_API_URL` environment variable
4. **Deploy**

### Database (MongoDB Atlas)

1. Create cluster
2. Create database user
3. Whitelist IP (0.0.0.0/0 for cloud platforms)
4. Update `MONGO_URI` in backend

---

<p align="center">
  <strong>Made with 🥝 for creators who care about quality</strong>
</p>
