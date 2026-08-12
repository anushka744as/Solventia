import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check, MapPin, Heart, Clock, Wallet, Sparkles } from 'lucide-react';
import Layout from '@/components/Layout';
import { useApp } from '@/context/AppContext';

const TIME_OPTIONS = ['1–3 hrs/week', '3–5 hrs/week', '5–10 hrs/week', '10+ hrs/week'];
const BUDGET_OPTIONS = ['Under ₹5,000', '₹5,000 – ₹20,000', '₹20,000 – ₹50,000', '₹50,000+'];
const INTEREST_SUGGESTIONS = ['Food & wellness', 'Design', 'Technology', 'Community building', 'Education', 'Sustainability', 'Content & media', 'Fitness', 'Retail', 'Social impact'];
import type { LucideIcon } from 'lucide-react';

type OnboardingKey = 'location' | 'interests' | 'availableTime' | 'budget';

interface Step {
  key: OnboardingKey;
  label: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  type?: 'tags' | 'choice' | 'text';
  placeholder?: string;
  suggestions?: string[];
  options?: string[];
}

const STEPS: Step[] = [
  { key: 'location', label: 'Location', icon: MapPin, title: 'Where are you based?', subtitle: 'Your location shapes local market opportunities.', type: 'text', placeholder: 'e.g. Jaipur, India' },
  { key: 'interests', label: 'Interests', icon: Heart, title: 'What are you interested in?', subtitle: "Select all that resonate — we'll build around these.", type: 'tags', suggestions: INTEREST_SUGGESTIONS },
  { key: 'availableTime', label: 'Time', icon: Clock, title: 'How much time can you commit?', subtitle: "Be realistic — this filters out ideas that won't fit.", type: 'choice', options: TIME_OPTIONS },
  { key: 'budget', label: 'Budget', icon: Wallet, title: "What's your starting budget?", subtitle: "Your budget determines what's feasible to start.", type: 'choice', options: BUDGET_OPTIONS },
];

export default function OnboardingPage() {
  const navigate = useNavigate();
  const { setOnboarding, setHasOnboarded, onboarding } = useApp();
  const [stepIndex, setStepIndex] = useState(0);
  const [generating, setGenerating] = useState(false);
  const [genStep, setGenStep] = useState(0);
  const [localData, setLocalData] = useState(onboarding);

  const step = STEPS[stepIndex];
  const isLast = stepIndex === STEPS.length - 1;

  const updateField = (value: string | string[]) => {
    setLocalData((prev) => ({ ...prev, [step.key]: value }));
  };

  const toggleTag = (tag: string) => {
    const current = (localData[step.key as keyof typeof localData] as string[]) || [];
    updateField(current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag]);
  };

  const canProceed = () => {
    const val = localData[step.key as keyof typeof localData];
    if (Array.isArray(val)) return val.length > 0;
    return val && val.trim().length > 0;
  };

  const handleNext = () => {
    setOnboarding({ [step.key]: localData[step.key as keyof typeof localData] });
    if (isLast) {
      setGenerating(true);
      const genMessages = [
        'Analyzing your location and local market…',
        'Matching ideas to your interests…',
        'Filtering by budget and available time…',
        'Building your personalized roadmap…',
      ];
      genMessages.forEach((_, i) => {
        setTimeout(() => setGenStep(i), i * 900);
      });
      setTimeout(() => {
        setHasOnboarded(true);
        navigate('/dashboard');
      }, genMessages.length * 900 + 800);
    } else {
      setStepIndex((i) => i + 1);
    }
  };

  if (generating) {
    const genMessages = [
      'Analyzing your location and local market…',
      'Matching ideas to your interests…',
      'Filtering by budget and available time…',
      'Building your personalized roadmap…',
    ];
    return (
      <Layout showFooter={false}>
        <div className="flex min-h-screen flex-col items-center justify-center px-6">
          <div className="w-full max-w-md text-center">
            <div className="relative mx-auto h-20 w-20">
              <div className="absolute inset-0 animate-ping rounded-full bg-clay-200/50" />
              <div className="absolute inset-0 grid place-items-center rounded-full bg-moss-600">
                <Sparkles className="h-8 w-8 text-paper-50" strokeWidth={1.25} />
              </div>
            </div>
            <p className="mt-8 font-serif text-2xl font-light text-ink-800">Generating your ideas</p>
            <p className="mt-2 text-sm text-ink-400">Solventia is analyzing your context</p>

            <div className="mt-10 space-y-3 text-left">
              {genMessages.map((msg, i) => (
                <div
                  key={msg}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-500 ${
                    i <= genStep ? 'border-moss-200 bg-moss-50/40 opacity-100' : 'border-paper-200 bg-paper-50 opacity-40'
                  }`}
                >
                  {i < genStep ? (
                    <Check className="h-4 w-4 shrink-0 text-moss-500" strokeWidth={2} />
                  ) : i === genStep ? (
                    <div className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-moss-300 border-t-moss-600" />
                  ) : (
                    <div className="h-4 w-4 shrink-0 rounded-full border-2 border-paper-300" />
                  )}
                  <span className={`text-sm ${i <= genStep ? 'text-ink-700' : 'text-ink-300'}`}>{msg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const StepIcon = step.icon;
  const fieldValue = localData[step.key as keyof typeof localData] as string | string[];

  return (
    <Layout showFooter={false}>
      <div className="flex min-h-screen flex-col pt-16">
        {/* Progress bar */}
        <div className="border-b border-paper-200 bg-paper-50/80 backdrop-blur-sm">
          <div className="container-editorial py-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-ink-500">Step {stepIndex + 1} of {STEPS.length}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-ink-400">{step.label}</p>
            </div>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-paper-200">
              <div className="h-full rounded-full bg-moss-400 transition-all duration-500" style={{ width: `${((stepIndex + 1) / STEPS.length) * 100}%` }} />
            </div>
          </div>
        </div>

        {/* Step content */}
        <div className="flex flex-1 items-center justify-center py-12">
          <div className="container-editorial max-w-2xl">
            <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-moss-200 bg-moss-50/50">
              <StepIcon className="h-6 w-6 text-moss-600" strokeWidth={1.25} />
            </div>
            <h1 className="font-serif text-3xl font-light leading-tight tracking-tighter text-ink-800 text-balance sm:text-4xl">
              {step.title}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-ink-500">{step.subtitle}</p>

            <div className="mt-10">
              {step.type === 'tags' && (
                <div className="flex flex-wrap gap-2.5">
                  {step.suggestions?.map((tag) => {
                    const selected = (fieldValue as string[])?.includes(tag);
                    return (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                          selected ? 'border-ink-800 bg-ink-800 text-paper-50' : 'border-paper-300 bg-paper-50 text-ink-600 hover:border-ink-300 hover:bg-paper-100'
                        }`}
                      >
                        {selected && <Check className="mr-1.5 inline h-3.5 w-3.5" strokeWidth={2} />}
                        {tag}
                      </button>
                    );
                  })}
                </div>
              )}

              {step.type === 'choice' && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {step.options?.map((opt) => {
                    const selected = fieldValue === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => updateField(opt)}
                        className={`flex items-center justify-between rounded-xl border px-5 py-4 text-left text-sm font-medium transition-all duration-200 ${
                          selected ? 'border-ink-800 bg-ink-800 text-paper-50' : 'border-paper-300 bg-paper-50 text-ink-600 hover:border-ink-300 hover:bg-paper-100'
                        }`}
                      >
                        {opt}
                        {selected && <Check className="h-4 w-4" strokeWidth={2} />}
                      </button>
                    );
                  })}
                </div>
              )}

              {(!step.type || step.type === 'text') && (
                <textarea
                  className="input-field min-h-[120px] resize-none"
                  placeholder={step.placeholder}
                  value={fieldValue as string}
                  onChange={(e) => updateField(e.target.value)}
                />
              )}
            </div>

            {/* Navigation */}
            <div className="mt-10 flex items-center justify-between">
              <button onClick={() => stepIndex > 0 && setStepIndex((i) => i - 1)} className={`btn-ghost ${stepIndex === 0 ? 'invisible' : ''}`}>
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
              <button onClick={handleNext} disabled={!canProceed()} className="btn-primary group disabled:cursor-not-allowed disabled:opacity-40">
                {isLast ? 'Generate Ideas' : 'Continue'}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
