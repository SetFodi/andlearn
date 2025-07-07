import { Language, DifficultyLevel } from '@/lib/utils'

// Core content types
export interface BilingualContent {
  ka: string
  en: string
}

export interface CodeExample {
  title: BilingualContent
  code: string
  description: BilingualContent
  explanation?: BilingualContent
  output?: string
}

export interface PracticeTask {
  id: string
  title: BilingualContent
  description: BilingualContent
  hints?: BilingualContent[]
  solution?: string
  difficulty: DifficultyLevel
}

export interface LessonContent {
  id: string
  title: BilingualContent
  description: BilingualContent
  overview: BilingualContent
  concept: BilingualContent
  examples: CodeExample[]
  practiceTask: PracticeTask
  keyPoints: BilingualContent[]
  resources?: {
    title: BilingualContent
    url: string
    type: 'documentation' | 'tutorial' | 'video' | 'article'
  }[]
  estimatedDuration: number // in minutes
  difficulty: DifficultyLevel
  prerequisites?: string[] // lesson IDs
  nextLessons?: string[] // suggested next lesson IDs
}

export interface Tutorial {
  id: string
  slug: string
  title: BilingualContent
  description: BilingualContent
  icon: string // emoji or icon name
  color: string // hex color for theming
  difficulty: DifficultyLevel
  totalLessons: number
  estimatedDuration: number // total duration in minutes
  category: 'frontend' | 'backend' | 'fullstack' | 'language'
  technology: 'javascript' | 'typescript' | 'react' | 'python' | 'node' | 'html' | 'css'
  lessons: LessonContent[]
  prerequisites?: BilingualContent[]
  learningOutcomes: BilingualContent[]
  isPopular?: boolean
  isFree: boolean // Always true for now, but future-proofing
}

export interface UserProgress {
  tutorialId: string
  lessonId: string
  completed: boolean
  timeSpent: number // in minutes
  lastAccessedAt: Date
  codeAttempts?: {
    code: string
    timestamp: Date
    success: boolean
  }[]
  notes?: string
}

export interface UserProfile {
  id: string
  name?: string
  email?: string
  preferredLanguage: Language
  joinedAt: Date
  completedLessons: string[]
  currentTutorials: string[]
  progress: UserProgress[]
  preferences: {
    theme: 'light' | 'dark' | 'system'
    reducedMotion: boolean
    fontSize: 'small' | 'medium' | 'large'
    codeTheme: 'light' | 'dark'
  }
}

// UI Component types
export interface NavigationItem {
  id: string
  title: BilingualContent
  href: string
  icon?: string
  external?: boolean
}

export interface FeatureCard {
  id: string
  title: BilingualContent
  description: BilingualContent
  icon: string
  color: string
  href?: string
}

// Learning path types
export interface LearningPath {
  id: string
  title: BilingualContent
  description: BilingualContent
  icon: string
  color: string
  difficulty: DifficultyLevel
  estimatedDuration: number
  tutorials: string[] // tutorial IDs in order
  prerequisites?: BilingualContent[]
  learningOutcomes: BilingualContent[]
}

// Search and filter types
export interface SearchFilters {
  difficulty?: DifficultyLevel[]
  technology?: Tutorial['technology'][]
  category?: Tutorial['category'][]
  duration?: {
    min: number
    max: number
  }
  language?: Language
}

export interface SearchResult {
  type: 'tutorial' | 'lesson' | 'concept'
  id: string
  title: string
  description: string
  url: string
  relevanceScore: number
  tutorial?: {
    id: string
    title: string
    technology: string
  }
}

// Analytics and tracking
export interface LearningAnalytics {
  totalTimeSpent: number
  lessonsCompleted: number
  tutorialsCompleted: number
  streakDays: number
  lastActiveDate: Date
  weeklyGoal: number // minutes per week
  achievements: Achievement[]
}

export interface Achievement {
  id: string
  title: BilingualContent
  description: BilingualContent
  icon: string
  unlockedAt: Date
  type: 'streak' | 'completion' | 'time' | 'special'
  requirement: {
    type: string
    value: number
  }
}

// Error handling
export interface AppError {
  code: string
  message: BilingualContent
  details?: string
  timestamp: Date
  recoverable: boolean
}

// API response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: AppError
  timestamp: Date
}

// Component prop types
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface LanguageAwareProps {
  language?: Language
}

export interface WithProgressProps {
  progress?: number
  showProgress?: boolean
}

// Form types
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  language: Language
}

export interface NewsletterForm {
  email: string
  language: Language
  interests?: Tutorial['technology'][]
}

// Accessibility
export interface A11yProps {
  'aria-label'?: string
  'aria-describedby'?: string
  'aria-expanded'?: boolean
  'aria-hidden'?: boolean
  role?: string
  tabIndex?: number
} 