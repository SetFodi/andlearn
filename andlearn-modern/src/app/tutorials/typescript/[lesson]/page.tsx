'use client'

import { useLanguage } from '@/contexts/language-context'
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Copy, 
  Check, 
  Code, 
  BookOpen, 
  Clock,
  BarChart3,
  Target,
  Lightbulb,
  CheckCircle,
  Circle,
  RefreshCw,
  Download,
  ExternalLink,
  Zap,
  Trophy,
  ArrowRight,
  Type
} from 'lucide-react'
import Link from 'next/link'
import { useState, useMemo } from 'react'

interface LessonPageProps {
  params: {
    lesson: string
  }
}

export default function LessonPage({ params }: LessonPageProps) {
  const { language } = useLanguage()
  const [copied, setCopied] = useState(false)
  const [currentTab, setCurrentTab] = useState<'theory' | 'code' | 'practice'>('theory')
  
  // Safe lesson ID parsing with error handling
  const lessonId = useMemo(() => {
    const id = parseInt(params.lesson)
    return isNaN(id) ? 1 : id // Default to lesson 1 if invalid
  }, [params.lesson])

  // TypeScript lessons data with comprehensive content
  const lessons = [
    {
      id: 1,
      title: { ka: 'ტიპების საფუძვლები', en: 'Basic Types' },
      description: { ka: 'ისწავლე TypeScript-ის ძირითადი ტიპები და მათი გამოყენება', en: 'Learn the basic types in TypeScript.' },
      duration: '15 min',
      difficulty: 'Beginner',
      completed: false,
      theory: { ka: 'თეორია (Georgian) - Placeholder', en: 'Theory (English) - Placeholder' },
      codeExample: {
        title: { ka: 'კოდის მაგალითი', en: 'Code Example' },
        code: '// Example code here',
        description: { ka: 'კოდის აღწერა (Georgian)', en: 'Code description (English)' }
      },
      exercises: [
        {
          id: 'ex1',
          title: { ka: 'ვარჯიში 1', en: 'Exercise 1' },
          description: { ka: 'ვარჯიშის აღწერა (Georgian)', en: 'Exercise description (English)' },
          difficulty: 'Beginner',
          starterCode: '// Starter code',
          solution: '// Solution code',
          hints: [
            { ka: 'მინიშნება 1 (Georgian)', en: 'Hint 1 (English)' }
          ]
        }
      ],
      keyPoints: [
        { ka: 'მთავარი პუნქტი 1', en: 'Key Point 1' },
        { ka: 'მთავარი პუნქტი 2', en: 'Key Point 2' }
      ]
    },
    {
      id: 2,
      title: { ka: 'ინტერფეისები და ობიექტები', en: 'Interfaces and Objects' },
      description: { ka: 'ისწავლე ინტერფეისების და ობიექტების გამოყენება.', en: 'Learn how to use interfaces and objects.' },
      duration: '20 min',
      difficulty: 'Beginner',
      completed: false,
      theory: { ka: 'ინტერფეისები და ობიექტები (Georgian) - Placeholder', en: 'Interfaces and Objects (English) - Placeholder' },
      codeExample: {
        title: { ka: 'კოდის მაგალითი', en: 'Code Example' },
        code: '// Example code here',
        description: { ka: 'კოდის აღწერა (Georgian)', en: 'Code description (English)' }
      },
      exercises: [
        {
          id: 'ex1',
          title: { ka: 'ვარჯიში 1', en: 'Exercise 1' },
          description: { ka: 'ვარჯიშის აღწერა (Georgian)', en: 'Exercise description (English)' },
          difficulty: 'Beginner',
          starterCode: '// Starter code',
          solution: '// Solution code',
          hints: [
            { ka: 'მინიშნება 1 (Georgian)', en: 'Hint 1 (English)' }
          ]
        }
      ],
      keyPoints: [
        { ka: 'მთავარი პუნქტი 1', en: 'Key Point 1' },
        { ka: 'მთავარი პუნქტი 2', en: 'Key Point 2' }
      ]
    },
    {
      id: 3,
      title: { ka: 'ფუნქციები და Generic-ები', en: 'Functions and Generics' },
      description: { ka: 'ისწავლე ფუნქციების და generic-ების შექმნა.', en: 'Learn how to create functions and generics.' },
      duration: '18 min',
      difficulty: 'Beginner',
      completed: false,
      theory: { ka: 'ფუნქციები და Generic-ები (Georgian) - Placeholder', en: 'Functions and Generics (English) - Placeholder' },
      codeExample: {
        title: { ka: 'კოდის მაგალითი', en: 'Code Example' },
        code: '// Example code here',
        description: { ka: 'კოდის აღწერა (Georgian)', en: 'Code description (English)' }
      },
      exercises: [
        {
          id: 'ex1',
          title: { ka: 'ვარჯიში 1', en: 'Exercise 1' },
          description: { ka: 'ვარჯიშის აღწერა (Georgian)', en: 'Exercise description (English)' },
          difficulty: 'Beginner',
          starterCode: '// Starter code',
          solution: '// Solution code',
          hints: [
            { ka: 'მინიშნება 1 (Georgian)', en: 'Hint 1 (English)' }
          ]
        }
      ],
      keyPoints: [
        { ka: 'მთავარი პუნქტი 1', en: 'Key Point 1' },
        { ka: 'მთავარი პუნქტი 2', en: 'Key Point 2' }
      ]
    },
    {
      id: 4,
      title: { ka: 'კლასები და მემკვიდრეობა', en: 'Classes and Inheritance' },
      description: { ka: 'ისწავლე კლასების შექმნა და მემკვიდრეობა.', en: 'Learn how to create classes and use inheritance.' },
      duration: '25 min',
      difficulty: 'Beginner',
      completed: false,
      theory: { ka: 'კლასები და მემკვიდრეობა (Georgian) - Placeholder', en: 'Classes and Inheritance (English) - Placeholder' },
      codeExample: {
        title: { ka: 'კოდის მაგალითი', en: 'Code Example' },
        code: '// Example code here',
        description: { ka: 'კოდის აღწერა (Georgian)', en: 'Code description (English)' }
      },
      exercises: [
        {
          id: 'ex1',
          title: { ka: 'ვარჯიში 1', en: 'Exercise 1' },
          description: { ka: 'ვარჯიშის აღწერა (Georgian)', en: 'Exercise description (English)' },
          difficulty: 'Beginner',
          starterCode: '// Starter code',
          solution: '// Solution code',
          hints: [
            { ka: 'მინიშნება 1 (Georgian)', en: 'Hint 1 (English)' }
          ]
        }
      ],
      keyPoints: [
        { ka: 'მთავარი პუნქტი 1', en: 'Key Point 1' },
        { ka: 'მთავარი პუნქტი 2', en: 'Key Point 2' }
      ]
    },
    {
      id: 5,
      title: { ka: 'Enums და ტიპები', en: 'Enums and Types' },
      description: { ka: 'ისწავლე enums და ტიპების გამოყენება.', en: 'Learn how to use enums and types.' },
      duration: '22 min',
      difficulty: 'Intermediate',
      completed: false,
      theory: { ka: 'Enums და ტიპები (Georgian) - Placeholder', en: 'Enums and Types (English) - Placeholder' },
      codeExample: {
        title: { ka: 'კოდის მაგალითი', en: 'Code Example' },
        code: '// Example code here',
        description: { ka: 'კოდის აღწერა (Georgian)', en: 'Code description (English)' }
      },
      exercises: [
        {
          id: 'ex1',
          title: { ka: 'ვარჯიში 1', en: 'Exercise 1' },
          description: { ka: 'ვარჯიშის აღწერა (Georgian)', en: 'Exercise description (English)' },
          difficulty: 'Intermediate',
          starterCode: '// Starter code',
          solution: '// Solution code',
          hints: [
            { ka: 'მინიშნება 1 (Georgian)', en: 'Hint 1 (English)' }
          ]
        }
      ],
      keyPoints: [
        { ka: 'მთავარი პუნქტი 1', en: 'Key Point 1' },
        { ka: 'მთავარი პუნქტი 2', en: 'Key Point 2' }
      ]
    },
    {
      id: 6,
      title: { ka: 'მოდულები და სახელების სივრცეები', en: 'Modules and Namespaces' },
      description: { ka: 'ისწავლე მოდულების და სახელების სივრცეების გამოყენება.', en: 'Learn how to use modules and namespaces.' },
      duration: '20 min',
      difficulty: 'Intermediate',
      completed: false,
      theory: { ka: 'მოდულები და სახელების სივრცეები (Georgian) - Placeholder', en: 'Modules and Namespaces (English) - Placeholder' },
      codeExample: {
        title: { ka: 'კოდის მაგალითი', en: 'Code Example' },
        code: '// Example code here',
        description: { ka: 'კოდის აღწერა (Georgian)', en: 'Code description (English)' }
      },
      exercises: [
        {
          id: 'ex1',
          title: { ka: 'ვარჯიში 1', en: 'Exercise 1' },
          description: { ka: 'ვარჯიშის აღწერა (Georgian)', en: 'Exercise description (English)' },
          difficulty: 'Intermediate',
          starterCode: '// Starter code',
          solution: '// Solution code',
          hints: [
            { ka: 'მინიშნება 1 (Georgian)', en: 'Hint 1 (English)' }
          ]
        }
      ],
      keyPoints: [
        { ka: 'მთავარი პუნქტი 1', en: 'Key Point 1' },
        { ka: 'მთავარი პუნქტი 2', en: 'Key Point 2' }
      ]
    },
    {
      id: 7,
      title: { ka: 'ასინქრონული პროგრამირება', en: 'Async Programming' },
      description: { ka: 'ისწავლე async/await და Promises TypeScript-ში.', en: 'Learn async/await and Promises in TypeScript.' },
      duration: '18 min',
      difficulty: 'Intermediate',
      completed: false,
      theory: { ka: 'ასინქრონული პროგრამირება (Georgian) - Placeholder', en: 'Async Programming (English) - Placeholder' },
      codeExample: {
        title: { ka: 'კოდის მაგალითი', en: 'Code Example' },
        code: '// Example code here',
        description: { ka: 'კოდის აღწერა (Georgian)', en: 'Code description (English)' }
      },
      exercises: [
        {
          id: 'ex1',
          title: { ka: 'ვარჯიში 1', en: 'Exercise 1' },
          description: { ka: 'ვარჯიშის აღწერა (Georgian)', en: 'Exercise description (English)' },
          difficulty: 'Intermediate',
          starterCode: '// Starter code',
          solution: '// Solution code',
          hints: [
            { ka: 'მინიშნება 1 (Georgian)', en: 'Hint 1 (English)' }
          ]
        }
      ],
      keyPoints: [
        { ka: 'მთავარი პუნქტი 1', en: 'Key Point 1' },
        { ka: 'მთავარი პუნქტი 2', en: 'Key Point 2' }
      ]
    },
    {
      id: 8,
      title: { ka: 'Utility ტიპები', en: 'Utility Types' },
      description: { ka: 'ისწავლე TypeScript-ის სასარგებლო ტიპები.', en: 'Learn about TypeScript utility types.' },
      duration: '25 min',
      difficulty: 'Intermediate',
      completed: false,
      theory: { ka: 'Utility ტიპები (Georgian) - Placeholder', en: 'Utility Types (English) - Placeholder' },
      codeExample: {
        title: { ka: 'კოდის მაგალითი', en: 'Code Example' },
        code: '// Example code here',
        description: { ka: 'კოდის აღწერა (Georgian)', en: 'Code description (English)' }
      },
      exercises: [
        {
          id: 'ex1',
          title: { ka: 'ვარჯიში 1', en: 'Exercise 1' },
          description: { ka: 'ვარჯიშის აღწერა (Georgian)', en: 'Exercise description (English)' },
          difficulty: 'Intermediate',
          starterCode: '// Starter code',
          solution: '// Solution code',
          hints: [
            { ka: 'მინიშნება 1 (Georgian)', en: 'Hint 1 (English)' }
          ]
        }
      ],
      keyPoints: [
        { ka: 'მთავარი პუნქტი 1', en: 'Key Point 1' },
        { ka: 'მთავარი პუნქტი 2', en: 'Key Point 2' }
      ]
    },
    {
      id: 9,
      title: { ka: 'ტესტირება და დებაგი', en: 'Testing and Debugging' },
      description: { ka: 'ისწავლე კოდის ტესტირება და შეცდომების პოვნა.', en: 'Learn how to test and debug your code.' },
      duration: '22 min',
      difficulty: 'Advanced',
      completed: false,
      theory: { ka: 'ტესტირება და დებაგი (Georgian) - Placeholder', en: 'Testing and Debugging (English) - Placeholder' },
      codeExample: {
        title: { ka: 'კოდის მაგალითი', en: 'Code Example' },
        code: '// Example code here',
        description: { ka: 'კოდის აღწერა (Georgian)', en: 'Code description (English)' }
      },
      exercises: [
        {
          id: 'ex1',
          title: { ka: 'ვარჯიში 1', en: 'Exercise 1' },
          description: { ka: 'ვარჯიშის აღწერა (Georgian)', en: 'Exercise description (English)' },
          difficulty: 'Advanced',
          starterCode: '// Starter code',
          solution: '// Solution code',
          hints: [
            { ka: 'მინიშნება 1 (Georgian)', en: 'Hint 1 (English)' }
          ]
        }
      ],
      keyPoints: [
        { ka: 'მთავარი პუნქტი 1', en: 'Key Point 1' },
        { ka: 'მთავარი პუნქტი 2', en: 'Key Point 2' }
      ]
    },
    {
      id: 10,
      title: { ka: 'მოწინავე პატერნები', en: 'Advanced Patterns' },
      description: { ka: 'ისწავლე მოწინავე TypeScript პატერნები.', en: 'Learn advanced TypeScript patterns.' },
      duration: '20 min',
      difficulty: 'Advanced',
      completed: false,
      theory: { ka: 'მოწინავე პატერნები (Georgian) - Placeholder', en: 'Advanced Patterns (English) - Placeholder' },
      codeExample: {
        title: { ka: 'კოდის მაგალითი', en: 'Code Example' },
        code: '// Example code here',
        description: { ka: 'კოდის აღწერა (Georgian)', en: 'Code description (English)' }
      },
      exercises: [
        {
          id: 'ex1',
          title: { ka: 'ვარჯიში 1', en: 'Exercise 1' },
          description: { ka: 'ვარჯიშის აღწერა (Georgian)', en: 'Exercise description (English)' },
          difficulty: 'Advanced',
          starterCode: '// Starter code',
          solution: '// Solution code',
          hints: [
            { ka: 'მინიშნება 1 (Georgian)', en: 'Hint 1 (English)' }
          ]
        }
      ],
      keyPoints: [
        { ka: 'მთავარი პუნქტი 1', en: 'Key Point 1' },
        { ka: 'მთავარი პუნქტი 2', en: 'Key Point 2' }
      ]
    }
  ]

  const currentLesson = lessons.find(l => l.id === lessonId)

  if (!currentLesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto">
            <Circle className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
            {language === 'ka' ? 'გაკვეთილი ვერ მოიძებნა' : 'Lesson Not Found'}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-md break-words">
            {language === 'ka' 
              ? 'მოთხოვნილი გაკვეთილი არ არსებობს. გთხოვთ, შეამოწმოთ URL მისამართი.'
              : 'The requested lesson does not exist. Please check the URL.'}
          </p>
          <Link 
            href="/tutorials/typescript" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            {language === 'ka' ? 'კურსზე დაბრუნება' : 'Back to Course'}
          </Link>
        </div>
      </div>
    )
  }

  const copyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  const nextLesson = lessons.find(l => l.id === lessonId + 1)
  const prevLesson = lessons.find(l => l.id === lessonId - 1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-6 flex-wrap">
            <Link href="/tutorials" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-words">
              {language === 'ka' ? 'ტუტორიალები' : 'Tutorials'}
            </Link>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <Link href="/tutorials/typescript" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-words">
              TypeScript
            </Link>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <span className="text-slate-900 dark:text-slate-100 font-medium break-words">
              {language === 'ka' ? `გაკვეთილი ${lessonId}` : `Lesson ${lessonId}`}
            </span>
          </nav>

          {/* Lesson Header */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Type className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 break-words leading-tight">
                    {currentLesson.title[language]}
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 text-lg mt-1 break-words">
                    {currentLesson.description[language]}
                  </p>
                </div>
              </div>

              {/* Lesson Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <Clock className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {currentLesson.duration} {language === 'ka' ? 'წუთი' : 'min'}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <BarChart3 className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span className="text-green-700 dark:text-green-300">
                    {currentLesson.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Type className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-blue-700 dark:text-blue-300">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>

            {/* Progress Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 lg:w-80 flex-shrink-0">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {language === 'ka' ? 'თქვენი პროგრესი' : 'Your Progress'}
                </h3>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                  {Math.round(((lessonId - 1) / lessons.length) * 100)}%
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {language === 'ka' 
                    ? `${lessonId - 1} / ${lessons.length} გაკვეთილი დასრულებული`
                    : `${lessonId - 1} / ${lessons.length} lessons completed`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 p-1 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
          {[
            { id: 'theory', icon: BookOpen, label: { ka: 'თეორია', en: 'Theory' } },
            { id: 'code', icon: Code, label: { ka: 'კოდი', en: 'Code' } },
            { id: 'practice', icon: Target, label: { ka: 'პრაქტიკა', en: 'Practice' } }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCurrentTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all flex-1 sm:flex-none ${
                currentTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="whitespace-nowrap">{tab.label[language]}</span>
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {currentTab === 'theory' && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-slate-100 prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-pre:bg-slate-100 dark:prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-200 dark:prose-pre:border-slate-700">
                    <div dangerouslySetInnerHTML={{ 
                      __html: currentLesson.theory[language]
                        .replace(/```typescript/g, '<pre class="language-typescript"><code>')
                        .replace(/```/g, '</code></pre>')
                        .replace(/`([^`]+)`/g, '<code>$1</code>')
                        .replace(/\n/g, '<br>')
                    }} />
                  </div>
                </div>
              </div>
            )}

            {currentTab === 'code' && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 px-6 py-4 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-500" />
                      {currentLesson.codeExample.title[language]}
                    </h3>
                    <button
                      onClick={() => copyCode(currentLesson.codeExample.code)}
                      className="flex items-center gap-2 px-3 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500 rounded-lg text-sm font-medium transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copied 
                        ? (language === 'ka' ? 'კოპირებულია' : 'Copied') 
                        : (language === 'ka' ? 'კოპირება' : 'Copy')}
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <pre className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl overflow-x-auto text-sm border border-slate-200 dark:border-slate-700">
                    <code className="text-slate-800 dark:text-slate-200 whitespace-pre-wrap break-words">
                      {currentLesson.codeExample.code}
                    </code>
                  </pre>
                </div>
              </div>
            )}

            {currentTab === 'practice' && (
              <div className="space-y-6">
                {currentLesson.exercises.map((exercise) => (
                  <div key={exercise.id} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 px-6 py-4 border-b border-slate-200 dark:border-slate-700">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                          <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
                          {exercise.title[language]}
                        </h3>
                        <span className="px-3 py-1 bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                          {exercise.difficulty}
                        </span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 mt-2 break-words">
                        {exercise.description[language]}
                      </p>
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                          <Code className="w-4 h-4" />
                          {language === 'ka' ? 'სამუშაო კოდი' : 'Starter Code'}
                        </h4>
                        <pre className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl overflow-x-auto text-sm border border-slate-200 dark:border-slate-700">
                          <code className="text-slate-800 dark:text-slate-200 whitespace-pre-wrap break-words">
                            {exercise.starterCode}
                          </code>
                        </pre>
                      </div>

                      {exercise.hints && (
                        <div>
                          <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                            <Lightbulb className="w-4 h-4 text-yellow-500" />
                            {language === 'ka' ? 'მინიშნებები' : 'Hints'}
                          </h4>
                          <ul className="space-y-2">
                            {exercise.hints.map((hint, hintIndex) => (
                              <li key={hintIndex} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="break-words">{hint[language]}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <details className="group">
                        <summary className="cursor-pointer font-medium text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          {language === 'ka' ? 'ამოხსნა ნახე' : 'View Solution'}
                          <ChevronRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                        </summary>
                        <div className="mt-4">
                          <pre className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl overflow-x-auto text-sm border border-slate-200 dark:border-slate-700">
                            <code className="text-slate-800 dark:text-slate-200 whitespace-pre-wrap break-words">
                              {exercise.solution}
                            </code>
                          </pre>
                        </div>
                      </details>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Key Points */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                {language === 'ka' ? 'მთავარი ნაწერები' : 'Key Points'}
              </h3>
              <ul className="space-y-3">
                {currentLesson.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-400 break-words leading-relaxed">
                      {point[language]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">
                {language === 'ka' ? 'ნავიგაცია' : 'Navigation'}
              </h3>
              <div className="space-y-3">
                {prevLesson && (
                  <Link
                    href={`/tutorials/typescript/${prevLesson.id}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors group"
                  >
                    <ChevronLeft className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                    <div className="min-w-0">
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {language === 'ka' ? 'წინა' : 'Previous'}
                      </div>
                      <div className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">
                        {prevLesson.title[language]}
                      </div>
                    </div>
                  </Link>
                )}
                {nextLesson && (
                  <Link
                    href={`/tutorials/typescript/${nextLesson.id}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-900/30 dark:hover:to-blue-800/30 transition-colors group"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-blue-600 dark:text-blue-400">
                        {language === 'ka' ? 'შემდეგი' : 'Next'}
                      </div>
                      <div className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">
                        {nextLesson.title[language]}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 