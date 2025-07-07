'use client'

import { Play, Clock, CheckCircle, Circle, ArrowRight, Type, Users, Star, Layers, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/language-context'

export default function TypeScriptTutorialPage() {
  const { language } = useLanguage()

  const lessons = [
    {
      id: 1,
      title: {
        ka: 'ტიპების საფუძვლები',
        en: 'Basic Types'
      },
      description: {
        ka: 'ისწავლე TypeScript-ის ძირითადი ტიპები.',
        en: 'Learn the basic types in TypeScript.'
      },
      duration: '15 min',
      difficulty: 'Beginner',
      completed: false
    },
    {
      id: 2,
      title: {
        ka: 'ინტერფეისები და ობიექტები',
        en: 'Interfaces and Objects'
      },
      description: {
        ka: 'ისწავლე ინტერფეისების და ობიექტების გამოყენება.',
        en: 'Learn how to use interfaces and objects.'
      },
      duration: '20 min',
      difficulty: 'Beginner',
      completed: false
    },
    {
      id: 3,
      title: {
        ka: 'ფუნქციები და Generic-ები',
        en: 'Functions and Generics'
      },
      description: {
        ka: 'ისწავლე ფუნქციების და generic-ების შექმნა.',
        en: 'Learn how to create functions and generics.'
      },
      duration: '18 min',
      difficulty: 'Beginner',
      completed: false
    },
    {
      id: 4,
      title: {
        ka: 'კლასები და მემკვიდრეობა',
        en: 'Classes and Inheritance'
      },
      description: {
        ka: 'ისწავლე კლასების შექმნა და მემკვიდრეობა.',
        en: 'Learn how to create classes and use inheritance.'
      },
      duration: '25 min',
      difficulty: 'Beginner',
      completed: false
    },
    {
      id: 5,
      title: {
        ka: 'Enums და ტიპები',
        en: 'Enums and Types'
      },
      description: {
        ka: 'ისწავლე enums და ტიპების გამოყენება.',
        en: 'Learn how to use enums and types.'
      },
      duration: '22 min',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      id: 6,
      title: {
        ka: 'მოდულები და სახელების სივრცეები',
        en: 'Modules and Namespaces'
      },
      description: {
        ka: 'ისწავლე მოდულების და სახელების სივრცეების გამოყენება.',
        en: 'Learn how to use modules and namespaces.'
      },
      duration: '20 min',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      id: 7,
      title: {
        ka: 'ასინქრონული პროგრამირება',
        en: 'Async Programming'
      },
      description: {
        ka: 'ისწავლე async/await და Promises TypeScript-ში.',
        en: 'Learn async/await and Promises in TypeScript.'
      },
      duration: '18 min',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      id: 8,
      title: {
        ka: 'Utility ტიპები',
        en: 'Utility Types'
      },
      description: {
        ka: 'ისწავლე TypeScript-ის სასარგებლო ტიპები.',
        en: 'Learn about TypeScript utility types.'
      },
      duration: '25 min',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      id: 9,
      title: {
        ka: 'ტესტირება და დებაგი',
        en: 'Testing and Debugging'
      },
      description: {
        ka: 'ისწავლე კოდის ტესტირება და შეცდომების პოვნა.',
        en: 'Learn how to test and debug your code.'
      },
      duration: '22 min',
      difficulty: 'Advanced',
      completed: false
    },
    {
      id: 10,
      title: {
        ka: 'მოწინავე პატერნები',
        en: 'Advanced Patterns'
      },
      description: {
        ka: 'ისწავლე მოწინავე TypeScript პატერნები.',
        en: 'Learn advanced TypeScript patterns.'
      },
      duration: '20 min',
      difficulty: 'Advanced',
      completed: false
    }
  ]

  const stats = [
    {
      label: language === 'ka' ? 'გაკვეთილი' : 'Lessons',
      value: '10'
    },
    {
      label: language === 'ka' ? 'საათი' : 'Hours',
      value: '5+'
    },
    {
      label: language === 'ka' ? 'პროექტი' : 'Projects',
      value: '2'
    },
    {
      label: language === 'ka' ? 'სერთიფიკატი' : 'Certificate',
      value: language === 'ka' ? 'კი' : 'Yes'
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800'
      case 'Intermediate':
        return 'bg-orange-100 text-orange-800'
      case 'Advanced':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getDifficultyText = (difficulty: string) => {
    const difficulties = {
      'Beginner': { ka: 'დამწყები', en: 'Beginner' },
      'Intermediate': { ka: 'საშუალო', en: 'Intermediate' },
      'Advanced': { ka: 'მოწინავე', en: 'Advanced' }
    }
    return language === 'ka' ? difficulties[difficulty as keyof typeof difficulties]?.ka : difficulty
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-900 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-4 mb-6">
          <Type className="w-12 h-12 text-blue-200 drop-shadow" />
          <div>
            <h1 className="text-4xl font-bold">TypeScript</h1>
            <p className="text-white/90 text-lg">
              {language === 'ka' 
                ? 'ტიპ-საფუძვლიანი პროგრამირება' 
                : 'Type-Safe Programming'
              }
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="text-white/90 text-lg max-w-3xl">
          {language === 'ka'
            ? 'ისწავლე TypeScript-ის საფუძვლები და გააუმჯობესე შენი JavaScript კოდი.'
            : 'Learn TypeScript fundamentals and improve your JavaScript code.'
          }
        </p>
      </div>

      {/* Course Progress */}
      <div className="bg-card border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">
            {language === 'ka' ? 'შენი პროგრესი' : 'Your Progress'}
          </h2>
          <span className="text-sm text-muted-foreground">
            0/10 {language === 'ka' ? 'დასრულებული' : 'completed'}
          </span>
        </div>
        <div className="progress-bar h-3 mb-2">
          <div className="progress-fill h-full w-0"></div>
        </div>
        <p className="text-sm text-muted-foreground">
          {language === 'ka' 
            ? 'დაიწყე პირველი გაკვეთილით ტიპების შესახებ'
            : 'Start with the first lesson about types'
          }
        </p>
      </div>

      {/* Lessons List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">
          {language === 'ka' ? 'გაკვეთილები' : 'Lessons'}
        </h2>
        <div className="space-y-4">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="learning-card bg-card border rounded-lg p-6 flex items-center space-x-4 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0">
                {lesson.completed ? (
                  <CheckCircle className="w-8 h-8 text-green-500" />
                ) : (
                  <Circle className="w-8 h-8 text-blue-400" />
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
                  href={``}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  {language === 'ka' ? 'დაიწყე' : 'Start'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What You'll Learn */}
      <div className="bg-card border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          {language === 'ka' ? 'რას ისწავლი' : 'What You\'ll Learn'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { 
              icon: <Type className="w-5 h-5 text-blue-500" />, 
              text: language === 'ka' ? 'ტიპების გამოყენება' : 'Using types'
            },
            { 
              icon: <Users className="w-5 h-5 text-green-500" />, 
              text: language === 'ka' ? 'ინტერფეისები და ობიექტები' : 'Interfaces and objects'
            },
            { 
              icon: <Star className="w-5 h-5 text-orange-500" />, 
              text: language === 'ka' ? 'Generic-ები' : 'Generics'
            },
            { 
              icon: <Layers className="w-5 h-5 text-purple-500" />, 
              text: language === 'ka' ? 'მოდულები და სახელების სივრცეები' : 'Modules and namespaces'
            },
            { 
              icon: <BookOpen className="w-5 h-5 text-pink-500" />, 
              text: language === 'ka' ? 'ტესტირება და დებაგი' : 'Testing and debugging'
            },
            { 
              icon: <ArrowRight className="w-5 h-5 text-yellow-500" />, 
              text: language === 'ka' ? 'მოწინავე პატერნები' : 'Advanced patterns'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="text-primary">{item.icon}</div>
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Start Learning CTA */}
      <div className="text-center space-y-4">
        <Link
          href={``}
          className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
        >
          <Play className="w-5 h-5" />
          {language === 'ka' ? 'დაიწყე სწავლა' : 'Start Learning'}
        </Link>
        <p className="text-sm text-muted-foreground">
          {language === 'ka' 
            ? 'დაიწყე პირველი გაკვეთილით და ისწავლე შენი ტემპით'
            : 'Start with the first lesson and learn at your own pace'
          }
        </p>
      </div>
    </div>
  )
} 