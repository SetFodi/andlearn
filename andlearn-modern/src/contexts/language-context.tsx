'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { Language, getLanguageFromStorage, setLanguageInStorage, DEFAULT_LANGUAGE } from '@/lib/utils'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (content: { ka: string; en: string }) => string
  isGeorgian: boolean
  isEnglish: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE)
  const [isHydrated, setIsHydrated] = useState(false)

  // Handle hydration and initial language setup
  useEffect(() => {
    const savedLanguage = getLanguageFromStorage()
    setLanguageState(savedLanguage)
    setIsHydrated(true)
  }, [])

  // Update language and persist to storage
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    setLanguageInStorage(newLanguage)
    
    // Update document lang attribute for accessibility
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLanguage
    }
  }

  // Translation helper function
  const t = (content: { ka: string; en: string }) => {
    return content[language] || content[DEFAULT_LANGUAGE] || ''
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    isGeorgian: language === 'ka',
    isEnglish: language === 'en'
  }

  // Prevent hydration mismatch by not rendering until after hydration
  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">დატვირთვა... / Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Predefined common translations
export const commonTranslations = {
  // Navigation
  home: { ka: 'მთავარი', en: 'Home' },
  tutorials: { ka: 'ტუტორიალები', en: 'Tutorials' },
  about: { ka: 'ჩვენ შესახებ', en: 'About' },
  contact: { ka: 'კონტაქტი', en: 'Contact' },
  
  // Actions
  start: { ka: 'დაწყება', en: 'Start' },
  continue: { ka: 'გაგრძელება', en: 'Continue' },
  next: { ka: 'შემდეგი', en: 'Next' },
  previous: { ka: 'წინა', en: 'Previous' },
  complete: { ka: 'დასრულება', en: 'Complete' },
  reset: { ka: 'გადატვირთვა', en: 'Reset' },
  save: { ka: 'შენახვა', en: 'Save' },
  cancel: { ka: 'გაუქმება', en: 'Cancel' },
  
  // Learning
  lesson: { ka: 'გაკვეთილი', en: 'Lesson' },
  lessons: { ka: 'გაკვეთილები', en: 'Lessons' },
  practice: { ka: 'პრაქტიკა', en: 'Practice' },
  examples: { ka: 'მაგალითები', en: 'Examples' },
  concepts: { ka: 'კონცეფციები', en: 'Concepts' },
  keyPoints: { ka: 'მთავარი ნაწერები', en: 'Key Points' },
  
  // Progress
  progress: { ka: 'პროგრესი', en: 'Progress' },
  completed: { ka: 'დასრულებული', en: 'Completed' },
  inProgress: { ka: 'მიმდინარე', en: 'In Progress' },
  notStarted: { ka: 'არ დაწყებულა', en: 'Not Started' },
  
  // Difficulty
  beginner: { ka: 'დამწყები', en: 'Beginner' },
  intermediate: { ka: 'საშუალო', en: 'Intermediate' },
  advanced: { ka: 'მოწინავე', en: 'Advanced' },
  
  // Technology
  javascript: { ka: 'JavaScript', en: 'JavaScript' },
  typescript: { ka: 'TypeScript', en: 'TypeScript' },
  react: { ka: 'React', en: 'React' },
  python: { ka: 'Python', en: 'Python' },
  
  // UI
  menu: { ka: 'მენიუ', en: 'Menu' },
  search: { ka: 'ძიება', en: 'Search' },
  filter: { ka: 'ფილტრი', en: 'Filter' },
  theme: { ka: 'თემა', en: 'Theme' },
  language: { ka: 'ენა', en: 'Language' },
  
  // Time
  minutes: { ka: 'წუთი', en: 'minutes' },
  hours: { ka: 'საათი', en: 'hours' },
  estimatedTime: { ka: 'სავარაუდო დრო', en: 'Estimated Time' },
  
  // Status messages
  loading: { ka: 'დატვირთვა...', en: 'Loading...' },
  error: { ka: 'შეცდომა', en: 'Error' },
  success: { ka: 'წარმატება', en: 'Success' },
  
  // Learning platform specific
  codingPractice: { ka: 'კოდის პრაქტიკა', en: 'Coding Practice' },
  runCode: { ka: 'კოდის გაშვება', en: 'Run Code' },
  resetCode: { ka: 'კოდის გადატვირთვა', en: 'Reset Code' },
  copyCode: { ka: 'კოდის კოპირება', en: 'Copy Code' },
  codeOutput: { ka: 'კოდის შედეგი', en: 'Code Output' },
  
  // Encouragement messages
  greatJob: { ka: 'შესანიშნავი!', en: 'Great Job!' },
  keepGoing: { ka: 'გაგრძელე!', en: 'Keep Going!' },
  almostThere: { ka: 'თითქმის ბოლოს ხარ!', en: 'Almost There!' },
  wellDone: { ka: 'კარგად შესრულებული!', en: 'Well Done!' }
}

// Hook for common translations
export function useCommonTranslations() {
  const { t } = useLanguage()
  
  return {
    t,
    translations: commonTranslations,
    getText: (key: keyof typeof commonTranslations) => t(commonTranslations[key])
  }
} 