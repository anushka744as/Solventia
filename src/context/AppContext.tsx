import { createContext, useContext, useState, type ReactNode } from 'react';
import { DEFAULT_PROFILE, MOCK_IDEAS, MOCK_ROADMAP, type BusinessIdea, type RoadmapStep, type UserProfile } from '@/data/mockData';

interface OnboardingData {
  location: string;
  education: string;
  interests: string[];
  skills: string[];
  availableTime: string;
  budget: string;
  goals: string;
}

interface AppState {
  profile: UserProfile;
  onboarding: OnboardingData;
  setOnboarding: (data: Partial<OnboardingData>) => void;
  ideas: BusinessIdea[];
  shortlist: string[];
  toggleShortlist: (id: string) => void;
  selectedIdeaId: string | null;
  setSelectedIdeaId: (id: string | null) => void;
  roadmap: RoadmapStep[];
  toggleRoadmapStep: (id: string) => void;
  roadmapProgress: number;
  isAuthed: boolean;
  signIn: (name?: string) => void;
  signOut: () => void;
  hasOnboarded: boolean;
  setHasOnboarded: (v: boolean) => void;
}

const defaultOnboarding: OnboardingData = {
  location: '',
  education: '',
  interests: [],
  skills: [],
  availableTime: '',
  budget: '',
  goals: '',
};

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [onboarding, setOnboardingState] = useState<OnboardingData>(defaultOnboarding);
  const [shortlist, setShortlist] = useState<string[]>([
    'local-healthy-meal-subscription',
    'student-skill-exchange',
    'customized-study-materials',
  ]);
  const [selectedIdeaId, setSelectedIdeaId] = useState<string | null>('local-healthy-meal-subscription');
  const [roadmap, setRoadmap] = useState<RoadmapStep[]>(MOCK_ROADMAP);
  const [isAuthed, setIsAuthed] = useState(false);
  const [hasOnboarded, setHasOnboarded] = useState(false);

  const setOnboarding = (data: Partial<OnboardingData>) =>
    setOnboardingState((prev) => ({ ...prev, ...data }));

  const toggleShortlist = (id: string) =>
    setShortlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const toggleRoadmapStep = (id: string) =>
    setRoadmap((prev) =>
      prev.map((step) => {
        if (step.id !== id) return step;
        const next: RoadmapStep['status'] =
          step.status === 'done' ? 'todo' : step.status === 'in-progress' ? 'done' : 'in-progress';
        return { ...step, status: next };
      }),
    );

  const roadmapProgress = Math.round(
    (roadmap.filter((s) => s.status === 'done').length / roadmap.length) * 100,
  );

  const signIn = (name?: string) => {
    setIsAuthed(true);
    if (name) setProfile((p) => ({ ...p, name }));
  };
  const signOut = () => setIsAuthed(false);

  return (
    <AppContext.Provider
      value={{
        profile,
        onboarding,
        setOnboarding,
        ideas: MOCK_IDEAS,
        shortlist,
        toggleShortlist,
        selectedIdeaId,
        setSelectedIdeaId,
        roadmap,
        toggleRoadmapStep,
        roadmapProgress,
        isAuthed,
        signIn,
        signOut,
        hasOnboarded,
        setHasOnboarded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
