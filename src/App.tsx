import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from '@/context/AppContext';
import ScrollToTop from '@/components/ScrollToTop';
import LandingPage from '@/pages/LandingPage';
import OnboardingPage from '@/pages/OnboardingPage';
import DashboardPage from '@/pages/DashboardPage';
import IdeasPage from '@/pages/IdeasPage';
import IdeaDetailPage from '@/pages/IdeaDetailPage';
import MarketCheckPage from '@/pages/MarketCheckPage';
import RoadmapPage from '@/pages/RoadmapPage';
import ShortlistPage from '@/pages/ShortlistPage';
import ProfilePage from '@/pages/ProfilePage';
import SignInPage from '@/pages/SignInPage';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/ideas" element={<IdeasPage />} />
          <Route path="/ideas/:id" element={<IdeaDetailPage />} />
          <Route path="/market-check" element={<MarketCheckPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/shortlist" element={<ShortlistPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
