'use client'

import { useLanguage } from '@/contexts/language-context'
import { BookOpen, Clock, CheckCircle, Circle, Star, Layers, Users, ArrowRight, Code } from 'lucide-react'
import Link from 'next/link'

export default function JavaScriptTutorialPage() {
  const { language } = useLanguage()

  // Lessons data (add 'completed' property for progress tracking)
  const lessons = [
    {
      id: 1,
      title: { ka: 'ცვლადები და მონაცემთა ტიპები', en: 'Variables and Data Types' },
      description: { ka: 'ისწავლე JavaScript-ის ცვლადების შექმნა და სხვადასხვა მონაცემთა ტიპების გამოყენება', en: 'Learn how to create variables and use different data types in JavaScript' },
      duration: '15 min',
      difficulty: 'Beginner',
      completed: false
    },
    {
      id: 2,
      title: { ka: 'ფუნქციები', en: 'Functions' },
      description: { ka: 'ისწავლე ფუნქციების შექმნა, გამოძახება და პარამეტრების გადაცემა', en: 'Learn how to create, call functions and pass parameters' },
      duration: '20 min',
      difficulty: 'Beginner',
      completed: false
    },
    {
      id: 3,
      title: { ka: 'პირობითი ლოგიკა', en: 'Control Flow' },
      description: { ka: 'ისწავლე if/else განცხადებები და პირობითი ლოგიკის გამოყენება', en: 'Learn if/else statements and conditional logic' },
      duration: '18 min',
      difficulty: 'Beginner',
      completed: false
    },
    {
      id: 4,
      title: { ka: 'მასივები და ობიექტები', en: 'Arrays and Objects' },
      description: { ka: 'ისწავლე მასივების და ობიექტების შექმნა და მანიპულაცია', en: 'Learn how to create and manipulate arrays and objects' },
      duration: '25 min',
      difficulty: 'Beginner',
      completed: false
    },
    {
      id: 5,
      title: { ka: 'ფუნქციები მასივებსა და ობიექტებთან', en: 'Functions with Arrays and Objects' },
      description: { ka: 'მოწინავე ტექნიკები მასივებისა და ობიექტების მუშაობისთვის', en: 'Advanced techniques for working with arrays and objects' },
      duration: '22 min',
      difficulty: 'Beginner',
      completed: false
    },
    {
      id: 6,
      title: { ka: 'მასივის მოწინავე მეთოდები', en: 'Advanced Array Methods' },
      description: { ka: 'ისწავლე map, filter, reduce და სხვა მასივის მეთოდები', en: 'Learn map, filter, reduce and other array methods' },
      duration: '30 min',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      id: 7,
      title: { ka: 'TypeScript-ის შესავალი', en: 'Intro to TypeScript' },
      description: { ka: 'ისწავლე როგორ გამოიყენო TypeScript JavaScript-ში', en: 'Learn how to use TypeScript in JavaScript' },
      duration: '18 min',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      id: 8,
      title: { ka: 'DOM-ის მართვა', en: 'DOM Manipulation' },
      description: { ka: 'ისწავლე როგორ იმუშაო DOM-თან', en: 'Learn how to work with the DOM' },
      duration: '25 min',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      id: 9,
      title: { ka: 'ღონისძიებების დამუშავება', en: 'Event Handling' },
      description: { ka: 'ისწავლე ღონისძიებების დამუშავება და მოწინავე ტექნიკები', en: 'Learn event handling and advanced techniques' },
      duration: '22 min',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      id: 10,
      title: { ka: 'ასინქრონული პროგრამირება', en: 'Async Programming' },
      description: { ka: 'ისწავლე async/await და Promises', en: 'Learn async/await and Promises' },
      duration: '30 min',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      id: 11,
      title: { ka: 'API-ებთან მუშაობა', en: 'Working with APIs' },
      description: { ka: 'ისწავლე API-ებიდან მონაცემების მიღება', en: 'Learn how to fetch data from APIs' },
      duration: '25 min',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      id: 12,
      title: { ka: 'შეცდომების დამუშავება', en: 'Error Handling' },
      description: { ka: 'ისწავლე შეცდომების სწორი დამუშავება', en: 'Learn proper error handling techniques' },
      duration: '20 min',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      id: 13,
      title: { ka: 'ES6+ ფუნქციები', en: 'ES6+ Features' },
      description: { ka: 'ისწავლე თანამედროვე JavaScript-ის ფუნქციები', en: 'Learn modern JavaScript features' },
      duration: '30 min',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      id: 14,
      title: { ka: 'Closure და Scope', en: 'Closures and Scope' },
      description: { ka: 'ისწავლე closure-ები და ცვლადების ხილვადობა', en: 'Learn closures and variable scope' },
      duration: '25 min',
      difficulty: 'Advanced',
      completed: false
    },
    {
      id: 15,
      title: { ka: 'კლასები და პროტოტიპები', en: 'Classes and Prototypes' },
      description: { ka: 'ისწავლე ობიექტ-ორიენტირებული პროგრამირება', en: 'Learn object-oriented programming' },
      duration: '35 min',
      difficulty: 'Advanced',
      completed: false
    },
    {
      id: 16,
      title: { ka: 'მოდულები', en: 'Modules' },
      description: { ka: 'ისწავლე კოდის ორგანიზაცია მოდულებით', en: 'Learn code organization with modules' },
      duration: '28 min',
      difficulty: 'Advanced',
      completed: false
    },
    {
      id: 17,
      title: { ka: 'JSON და Local Storage', en: 'JSON and Local Storage' },
      description: { ka: 'ისწავლე მონაცემების შენახვა ბრაუზერში', en: 'Learn how to store data in the browser' },
      duration: '22 min',
      difficulty: 'Advanced',
      completed: false
    },
    {
      id: 18,
      title: { ka: 'რეგულარული გამოსახულებები', en: 'Regular Expressions' },
      description: { ka: 'ისწავლე ტექსტის დამუშავება რეგულარული გამოსახულებებით', en: 'Learn text processing with regular expressions' },
      duration: '30 min',
      difficulty: 'Advanced',
      completed: false
    }
  ]

  // Progress calculation (placeholder, will connect to persistent storage)
  const completedCount = lessons.filter(l => l.completed).length
  const progress = Math.round((completedCount / lessons.length) * 100)

  // Stats
  const stats = [
    { label: language === 'ka' ? 'გაკვეთილი' : 'Lessons', value: lessons.length },
    { label: language === 'ka' ? 'საათი' : 'Hours', value: '12+' },
    { label: language === 'ka' ? 'პროექტი' : 'Projects', value: '3' },
    { label: language === 'ka' ? 'სერთიფიკატი' : 'Certificate', value: language === 'ka' ? 'კი' : 'Yes' }
  ]

  // Learning outcomes
  const outcomes = [
    { icon: <Code className="w-5 h-5 text-yellow-500" />, text: language === 'ka' ? 'ცვლადები და მონაცემთა ტიპები' : 'Variables and data types' },
    { icon: <Users className="w-5 h-5 text-blue-500" />, text: language === 'ka' ? 'ფუნქციები და მასივები' : 'Functions and arrays' },
    { icon: <Star className="w-5 h-5 text-orange-500" />, text: language === 'ka' ? 'DOM და ღონისძიებები' : 'DOM and events' },
    { icon: <Layers className="w-5 h-5 text-purple-500" />, text: language === 'ka' ? 'მოდულები და კლასები' : 'Modules and classes' },
    { icon: <ArrowRight className="w-5 h-5 text-green-500" />, text: language === 'ka' ? 'ასინქრონული პროგრამირება' : 'Async programming' }
  ]

  // Difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-orange-100 text-orange-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  // Difficulty text
  const getDifficultyText = (difficulty: string) => {
    const difficulties = {
      'Beginner': { ka: 'დამწყები', en: 'Beginner' },
      'Intermediate': { ka: 'საშუალო', en: 'Intermediate' },
      'Advanced': { ka: 'მოწინავე', en: 'Advanced' }
    }
    return language === 'ka' ? difficulties[difficulty as keyof typeof difficulties]?.ka : difficulty
  }

  return (
    <div className="space-y-10">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-yellow-300 to-orange-400 rounded-xl p-8 text-white shadow-lg">
        <div className="flex items-center space-x-4 mb-6">
          <BookOpen className="w-12 h-12 text-yellow-200 drop-shadow" />
          <div>
            <h1 className="text-4xl font-bold">JavaScript</h1>
            <p className="text-white/90 text-lg">
              {language === 'ka' ? 'ვებ-პროგრამირების საფუძვლები' : 'Web Programming Fundamentals'}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="w-full bg-white/30 rounded-full h-3 mb-2 overflow-hidden">
          <div className="bg-yellow-400 h-full rounded-full transition-all" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex justify-between text-sm text-white/90">
          <span>{language === 'ka' ? 'პროგრესი' : 'Progress'}: {progress}%</span>
          <span>{completedCount}/{lessons.length} {language === 'ka' ? 'დასრულებული' : 'completed'}</span>
        </div>
        <p className="text-white/90 text-lg max-w-3xl mt-4">
          {language === 'ka'
            ? 'ისწავლე JavaScript-ის საფუძვლები და გამოიყენე იგი ვებ-დეველოპმენტში, თამაშებში და სხვა.'
            : 'Learn JavaScript fundamentals and use it for web development, games, and more.'
          }
        </p>
      </div>

      {/* Learning outcomes */}
      <div className="bg-card border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          {language === 'ka' ? 'რას ისწავლი' : 'What You\'ll Learn'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {outcomes.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <span>{item.icon}</span>
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lessons grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">
          {language === 'ka' ? 'გაკვეთილები' : 'Lessons'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="learning-card bg-card border rounded-lg p-6 flex items-center space-x-4 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0">
                {lesson.completed ? (
                  <CheckCircle className="w-8 h-8 text-green-500" />
                ) : (
                  <Circle className="w-8 h-8 text-yellow-400" />
                )}
              </div>
              <div className="flex-grow">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    {String(lesson.id).padStart(2, '0')}
                  </span>
                  <h3 className="font-semibold text-lg">
                    {language === 'ka' ? lesson.title.ka : lesson.title.en}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{lesson.duration}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(lesson.difficulty)}`}>
                    {getDifficultyText(lesson.difficulty)}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  {language === 'ka' ? lesson.description.ka : lesson.description.en}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href={`/tutorials/javascript/${lesson.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  {language === 'ka' ? 'გახსენი' : 'Open'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 