import { Route, Routes, useLocation, Navigate } from "react-router-dom";

// Layouts
import { GlobalLayout } from "./components/GlobalLayout";

// External / Public Pages
import CreatorLandingPage from "./pages/CreatorLandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// App Pages
import { DashboardPage } from "./pages/DashboardPage";
import { LearnPage } from "./pages/LearnPage";
import { PracticePage } from "./pages/PracticePage";
import { CareerPrepPage } from "./pages/CareerPrepPage";
import { DailyFeedPage } from "./pages/DailyFeedPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingsPage } from "./pages/SettingsPage";
import { HelpPage } from "./pages/HelpPage";

import useAuthStore from "./store/authStore";

const App = () => {
  const location = useLocation();
  const user = useAuthStore((state) => state.user);

  const isPublicRoute = location.pathname === "/" || location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="relative w-full min-h-screen">
      {/* Background color based on public vs internal routes */}
      {isPublicRoute && (
        <div className="fixed inset-0 -z-10 transition-colors duration-500 bg-gradient-to-br from-emerald-50 via-lime-50 to-yellow-50" />
      )}
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<CreatorLandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Global Dashboard Application Routes */}
        <Route element={<GlobalLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/career-prep" element={<CareerPrepPage />} />
          <Route path="/daily-feed" element={<DailyFeedPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Route>
        
        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
export default App;
