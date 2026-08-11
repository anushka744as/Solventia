export type IdeaCategory =
  | 'Food & Beverage'
  | 'Services'
  | 'Education'
  | 'Technology'
  | 'Retail'
  | 'Content & Media';

export interface BusinessIdea {
  id: string;
  title: string;
  category: IdeaCategory;
  feasibility: number;
  budgetRange: string;
  timeCommitment: string;
  description: string;
  whyItFits: string[];
  competition: 'Low' | 'Medium' | 'High';
  demand: 'Low' | 'Medium' | 'High';
  initialCost: 'Low' | 'Medium' | 'High';
  marketSummary: string;
  competitors: { name: string; note: string }[];
  gaps: string[];
  recommended: boolean;
}

export interface RoadmapStep {
  id: string;
  phase: string;
  title: string;
  description: string;
  resources: string[];
  status: 'done' | 'in-progress' | 'todo';
  duration: string;
}

export interface UserProfile {
  name: string;
  location: string;
  education: string;
  interests: string[];
  skills: string[];
  availableTime: string;
  budget: string;
  goals: string;
}

export const MOCK_IDEAS: BusinessIdea[] = [
  {
    id: 'local-healthy-meal-subscription',
    title: 'Local Healthy Meal Subscription',
    category: 'Food & Beverage',
    feasibility: 82,
    budgetRange: '₹5K–₹20K',
    timeCommitment: '5–10 hrs/week',
    description:
      'A weekly subscription service delivering affordable, locally-sourced healthy meals to students and young professionals in your area. Menu rotates seasonally and orders are placed through a simple WhatsApp or web form.',
    whyItFits: [
      'Low upfront cost — start from a home kitchen with 5–10 subscribers',
      'Aligns with your interest in food and wellness',
      'Flexible schedule fits within 5–10 hours per week',
      'Local demand is high in your area with limited organized supply',
    ],
    competition: 'Medium',
    demand: 'High',
    initialCost: 'Low',
    marketSummary:
      'The healthy meal delivery market in your area is growing but fragmented. Most existing providers target high-income households, leaving a clear opening for an affordable student-focused tier.',
    competitors: [
      { name: 'UrbanMeal Co.', note: 'Premium pricing, city-center focus' },
      { name: 'FitKitchen Local', note: 'Weekly plans, limited menu rotation' },
      { name: 'Home-cooked WhatsApp sellers', note: 'Informal, inconsistent availability' },
    ],
    gaps: [
      'No affordable subscription tier targeting students',
      'Lack of transparent ingredient sourcing',
      'Inconsistent delivery reliability among informal sellers',
    ],
    recommended: true,
  },
  {
    id: 'student-skill-exchange',
    title: 'Student Skill Exchange',
    category: 'Services',
    feasibility: 78,
    budgetRange: '₹2K–₹10K',
    timeCommitment: '4–8 hrs/week',
    description:
      'A peer-to-peer platform where students trade skills — tutoring, design, coding, writing — using a credit system instead of money. One hour of your skill earns you one hour of someone else\'s.',
    whyItFits: [
      'Near-zero capital requirement — built on existing student networks',
      'Leverages your skills in design and communication',
      'Strong organic growth potential through campus communities',
      'Solves a real affordability gap for students',
    ],
    competition: 'Low',
    demand: 'High',
    initialCost: 'Low',
    marketSummary:
      'There is no dedicated skill-barter platform serving your local student community. Existing options are informal Facebook groups with no matching or credit tracking.',
    competitors: [
      { name: 'Facebook barter groups', note: 'Unstructured, no matching' },
      { name: 'Freelance marketplaces', note: 'Money-based, not skill-swap' },
    ],
    gaps: [
      'No trust or verification layer for skill claims',
      'No credit system to handle uneven exchanges',
      'Discovery is entirely manual today',
    ],
    recommended: true,
  },
  {
    id: 'customized-study-materials',
    title: 'Customized Study Materials',
    category: 'Education',
    feasibility: 74,
    budgetRange: '₹3K–₹12K',
    timeCommitment: '6–10 hrs/week',
    description:
      'Create and sell curated, exam-specific study packs — summaries, practice questions, and revision sheets — tailored to local curricula and university courses. Sold as digital downloads or printed packs.',
    whyItFits: [
      'Leverages your academic background and research skills',
      'Digital-first model keeps costs low',
      'Recurring demand tied to academic calendars',
      'Can start with a single subject and expand',
    ],
    competition: 'Medium',
    demand: 'Medium',
    initialCost: 'Low',
    marketSummary:
      'Generic study material exists online, but locally-curated, course-specific packs are scarce. Students value materials aligned to their exact syllabus and exam patterns.',
    competitors: [
      { name: 'Generic study apps', note: 'Not curriculum-specific' },
      { name: 'Senior students\' notes', note: 'Inconsistent quality and availability' },
    ],
    gaps: [
      'No course-specific curation for your local universities',
      'Quality and accuracy varies wildly among informal sellers',
      'No subscription model for semester-long access',
    ],
    recommended: true,
  },
  {
    id: 'local-experience-tours',
    title: 'Local Experience Tours',
    category: 'Services',
    feasibility: 71,
    budgetRange: '₹8K–₹25K',
    timeCommitment: '6–12 hrs/week',
    description:
      'Curated half-day walking tours showcasing hidden local spots, food trails, and cultural stories for visitors and students new to the city. Booked through Instagram or a simple landing page.',
    whyItFits: [
      'Low overhead — no physical premises needed',
      'Draws on your local knowledge and communication skills',
      'Weekend-friendly schedule',
      'Strong word-of-mouth and social media growth potential',
    ],
    competition: 'Medium',
    demand: 'Medium',
    initialCost: 'Low',
    marketSummary:
      'Established tour operators focus on mainstream tourist circuits. There is growing demand for authentic, offbeat local experiences from younger visitors and new residents.',
    competitors: [
      { name: 'CitySight Tours', note: 'Mainstream monuments and museums' },
      { name: 'Heritage Walks Co.', note: 'Premium pricing, limited schedule' },
    ],
    gaps: [
      'No food-trail or neighborhood-specific tours',
      'Existing tours ignore student and young-adult audiences',
      'Booking is fragmented across phone calls and walk-ins',
    ],
    recommended: false,
  },
  {
    id: 'social-media-management-for-local-shops',
    title: 'Social Media Management for Local Shops',
    category: 'Services',
    feasibility: 76,
    budgetRange: '₹2K–₹8K',
    timeCommitment: '5–8 hrs/week',
    description:
      'Offer affordable monthly social media packages to small local businesses — content creation, posting schedules, and basic engagement — priced for shops that can\'t afford a full agency.',
    whyItFits: [
      'Uses your design and content skills directly',
      'Recurring monthly revenue model',
      'Very low startup cost — just a phone and laptop',
      'Large pool of underserved small businesses nearby',
    ],
    competition: 'Medium',
    demand: 'High',
    initialCost: 'Low',
    marketSummary:
      'Most local shops know they need social media presence but cannot afford agency fees. A tiered, affordable service targeting micro-businesses is an open niche.',
    competitors: [
      { name: 'Digital agencies', note: 'Priced for larger clients' },
      { name: 'Freelance posters', note: 'No strategy, inconsistent output' },
    ],
    gaps: [
      'No affordable tier for shops under 10 employees',
      'Existing providers offer posting without strategy',
      'No transparent monthly pricing models',
    ],
    recommended: false,
  },
  {
    id: 'upcycled-craft-store',
    title: 'Upcycled Craft Store',
    category: 'Retail',
    feasibility: 68,
    budgetRange: '₹5K–₹15K',
    timeCommitment: '6–10 hrs/week',
    description:
      'Transform discarded materials — bottles, fabric, wood — into decorative and functional products sold online and at local markets. Each item is one-of-a-kind with a sustainability story.',
    whyItFits: [
      'Low material cost from reclaimed sources',
      'Aligns with your creative interests',
      'Sellable both online and at weekend markets',
      'Strong sustainability narrative for marketing',
    ],
    competition: 'Medium',
    demand: 'Medium',
    initialCost: 'Low',
    marketSummary:
      'Sustainable home decor is trending, but most offerings are mass-produced. Genuine handcrafted upcycled products with a transparent story have a distinct positioning advantage.',
    competitors: [
      { name: 'EcoDecor brand', note: 'Mass-produced "eco" products' },
      { name: 'Local craft markets', note: 'Inconsistent quality and availability' },
    ],
    gaps: [
      'Lack of transparency in sourcing for most "eco" products',
      'No subscription or limited-drop model for exclusivity',
      'Online presence for local crafters is weak',
    ],
    recommended: false,
  },
];

export const MOCK_ROADMAP: RoadmapStep[] = [
  {
    id: 'rm-1',
    phase: 'Phase 1 — Validate',
    title: 'Interview 5 potential customers',
    description:
      'Talk to 5 people who match your target customer profile. Ask about their current eating habits, what they would pay for healthy meals, and what would stop them from subscribing.',
    resources: ['Customer interview script template', 'Notion page for notes'],
    status: 'in-progress',
    duration: '1 week',
  },
  {
    id: 'rm-2',
    phase: 'Phase 1 — Validate',
    title: 'Define your first menu',
    description:
      'Based on interview feedback, create a 3-item rotating menu. Source ingredients locally and calculate per-meal cost to set a profitable price point.',
    resources: ['Recipe cost calculator', 'Local supplier list'],
    status: 'todo',
    duration: '1 week',
  },
  {
    id: 'rm-3',
    phase: 'Phase 2 — Launch',
    title: 'Set up a simple ordering system',
    description:
      'Create a WhatsApp Business account or a one-page Google Form for orders. Keep the flow simple — customers should be able to order in under 30 seconds.',
    resources: ['WhatsApp Business setup guide', 'Google Form template'],
    status: 'todo',
    duration: '3 days',
  },
  {
    id: 'rm-4',
    phase: 'Phase 2 — Launch',
    title: 'Onboard your first 5 subscribers',
    description:
      'Start with friends-of-friends and warm leads. Offer a first-week discount in exchange for feedback. Aim for 5 paying subscribers before scaling marketing.',
    resources: ['Welcome message template', 'Feedback form'],
    status: 'todo',
    duration: '2 weeks',
  },
  {
    id: 'rm-5',
    phase: 'Phase 3 — Grow',
    title: 'Establish a weekly delivery routine',
    description:
      'Lock in a consistent weekly schedule for cooking and delivery. Reliability is the #1 factor in subscription retention — nail this before growing.',
    resources: ['Weekly planning sheet', 'Delivery route planner'],
    status: 'todo',
    duration: '2 weeks',
  },
  {
    id: 'rm-6',
    phase: 'Phase 3 — Grow',
    title: 'Collect testimonials and refine',
    description:
      'After 4 weeks, ask your subscribers for written testimonials. Use their feedback to refine the menu, pricing, and delivery experience before expanding.',
    resources: ['Testimonial request template', 'Menu refinement checklist'],
    status: 'todo',
    duration: '1 week',
  },
];

export const DEFAULT_PROFILE: UserProfile = {
  name: 'Saksham',
  location: 'Jaipur, India',
  education: 'Undergraduate — Business Studies',
  interests: ['Food & wellness', 'Design', 'Community building'],
  skills: ['Communication', 'Social media', 'Basic design', 'Research'],
  availableTime: '5–10 hrs/week',
  budget: '₹5,000 – ₹20,000',
  goals: 'Build a low-capital business I can run alongside my studies.',
};
