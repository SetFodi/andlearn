import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Language utilities for Georgian/English support
export type Language = 'ka' | 'en'

export const DEFAULT_LANGUAGE: Language = 'ka' // Default to Georgian for local users

export function getLanguageFromStorage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE
  
  try {
    const stored = localStorage.getItem('andlearn-language')
    return (stored as Language) || DEFAULT_LANGUAGE
  } catch {
    return DEFAULT_LANGUAGE
  }
}

export function setLanguageInStorage(language: Language) {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem('andlearn-language', language)
  } catch {
    // Handle storage errors gracefully
  }
}

// Progress tracking utilities
export function getProgressFromStorage(tutorialId: string): number {
  if (typeof window === 'undefined') return 0
  
  try {
    const stored = localStorage.getItem(`andlearn-progress-${tutorialId}`)
    return stored ? parseInt(stored, 10) : 0
  } catch {
    return 0
  }
}

export function setProgressInStorage(tutorialId: string, progress: number) {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem(`andlearn-progress-${tutorialId}`, progress.toString())
  } catch {
    // Handle storage errors gracefully
  }
}

// Difficulty level utilities
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced'

export function getDifficultyColor(level: DifficultyLevel): string {
  switch (level) {
    case 'beginner':
      return 'bg-success text-white'
    case 'intermediate':
      return 'bg-warning text-white'
    case 'advanced':
      return 'bg-destructive text-white'
    default:
      return 'bg-muted text-muted-foreground'
  }
}

export function getDifficultyLabel(level: DifficultyLevel, language: Language): string {
  const labels = {
    ka: {
      beginner: 'დამწყები',
      intermediate: 'საშუალო',
      advanced: 'მოწინავე'
    },
    en: {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced'
    }
  }
  
  return labels[language][level]
}

// Format duration for display
export function formatDuration(minutes: number, language: Language): string {
  const labels = {
    ka: {
      minute: 'წუთი',
      minutes: 'წუთი',
      hour: 'საათი',
      hours: 'საათი'
    },
    en: {
      minute: 'minute',
      minutes: 'minutes',
      hour: 'hour',
      hours: 'hours'
    }
  }
  
  if (minutes < 60) {
    const label = minutes === 1 ? labels[language].minute : labels[language].minutes
    return `${minutes} ${label}`
  }
  
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  const hourLabel = hours === 1 ? labels[language].hour : labels[language].hours
  
  if (remainingMinutes === 0) {
    return `${hours} ${hourLabel}`
  }
  
  const minuteLabel = remainingMinutes === 1 ? labels[language].minute : labels[language].minutes
  return `${hours} ${hourLabel} ${remainingMinutes} ${minuteLabel}`
}

// Calculate reading time estimate
export function calculateReadingTime(text: string, language: Language): number {
  // Average reading speeds: Georgian ~150 WPM, English ~200 WPM
  const wordsPerMinute = language === 'ka' ? 150 : 200
  const words = text.split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

// Slugify function for URL-friendly strings
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Check if the user prefers reduced motion
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Generate random ID for components
export function generateId(): string {
  return `andlearn-${Math.random().toString(36).substr(2, 9)}`
} 