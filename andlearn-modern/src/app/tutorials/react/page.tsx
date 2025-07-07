'use client'

import { Play, Clock, CheckCircle, Circle, ArrowRight, Atom, Users, Star, Layers, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/language-context'

export default function ReactTutorialPage() {
  const { language } = useLanguage()

  const lessons = [
    {
      id: 1,
      title: {
        ka: 'შესავალი React-ში',
        en: 'Introduction to React'
      },
      description: {
        ka: 'გაიგე რა არის React და რატომ არის ის პოპულარული.',
        en: 'Learn what React is and why it is popular.'
      },
      duration: '15 min',
      difficulty: 'Beginner',
      completed: false
    },
    {
      id: 2,
      title: {
        ka: 'კომპონენტები',
        en: 'Components'
      },
      description: {
        ka: 'ისწავლე კომპონენტების შექმნა და გამოყენება.',
        en: 'Learn how to create and use components.'
      },
      duration: '20 min',
      difficulty: 'Beginner',
      completed: false
    },
    {
      id: 3,
      title: {
        ka: 'JSX სინტაქსი',
        en: 'JSX Syntax'
      },
      description: {
        ka: 'ისწავლე JSX-ის გამოყენება React-ში.',
        en: 'Learn how to use JSX in React.'
      },
      duration: '18 min',
      difficulty: 'Beginner',
      completed: false
    },
    {
      id: 4,
      title: {
        ka: 'Props და State',
        en: 'Props and State'
      },
      description: {
        ka: 'ისწავლე მონაცემების გადაცემა და მდგომარეობის მართვა.',
        en: 'Learn how to pass data and manage state.'
      },
      duration: '25 min',
      difficulty: 'Beginner',
      completed: false
    },
    {
      id: 5,
      title: {
        ka: 'Hooks',
        en: 'Hooks'
      },
      description: {
        ka: 'ისწავლე useState, useEffect და სხვა hooks.',
        en: 'Learn useState, useEffect, and other hooks.'
      },
      duration: '22 min',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      id: 6,
      title: {
        ka: 'Routing React-ში',
        en: 'Routing in React'
      },
      description: {
        ka: 'ისწავლე გვერდებს შორის ნავიგაცია.',
        en: 'Learn how to navigate between pages.'
      },
      duration: '20 min',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      id: 7,
      title: {
        ka: 'ფორმები და ინპუტები',
        en: 'Forms and Inputs'
      },
      description: {
        ka: 'ისწავლე ფორმების დამუშავება React-ში.',
        en: 'Learn how to handle forms in React.'
      },
      duration: '18 min',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      id: 8,
      title: {
        ka: 'Context API',
        en: 'Context API'
      },
      description: {
        ka: 'ისწავლე გლობალური მდგომარეობის მართვა.',
        en: 'Learn how to manage global state.'
      },
      duration: '25 min',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      id: 9,
      title: {
        ka: 'Custom Hooks',
        en: 'Custom Hooks'
      },
      description: {
        ka: 'ისწავლე საკუთარი hooks-ის შექმნა.',
        en: 'Learn how to create your own hooks.'
      },
      duration: '22 min',
      difficulty: 'Advanced',
      completed: false
    },
    {
      id: 10,
      title: {
        ka: 'Performance Optimization',
        en: 'Performance Optimization'
      },
      description: {
        ka: 'ისწავლე როგორ გააუმჯობესო აპლიკაციის მუშაობა.',
        en: 'Learn how to optimize your app performance.'
      },
      duration: '20 min',
      difficulty: 'Advanced',
      completed: false
    },
    {
      id: 11,
      title: {
        ka: 'Deploying React App',
        en: 'Deploying React App'
      },
      description: {
        ka: 'ისწავლე როგორ განათავსო შენი აპლიკაცია ინტერნეტში.',
        en: 'Learn how to deploy your app online.'
      },
      duration: '18 min',
      difficulty: 'Advanced',
      completed: false
    }
  ]

  const stats = [
    {
      label: language === 'ka' ? 'გაკვეთილი' : 'Lessons',
      value: '11'
    },
    {
      label: language === 'ka' ? 'საათი' : 'Hours',
      value: '6+'
    },
    {
      label: language === 'ka' ? 'პროექტი' : 'Projects',
      value: '3'
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
      <div className="bg-gradient-to-r from-blue-400 to-blue-700 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-4 mb-6">
          <Atom className="w-12 h-12 text-blue-200 drop-shadow" />
          <div>
            <h1 className="text-4xl font-bold">React</h1>
            <p className="text-white/90 text-lg">
              {language === 'ka' 
                ? 'ინტერაქტიული ვებ აპლიკაციების შექმნა' 
                : 'Building Interactive Web Applications'
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
            ? 'ისწავლე React-ის საფუძვლები და შექმენი თანამედროვე ვებ აპლიკაციები. ეს კურსი მოიცავს ყველაფერს კომპონენტებიდან hooks-მდე.'
            : 'Learn React fundamentals and build modern web apps. This course covers everything from components to hooks.'
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
            0/11 {language === 'ka' ? 'დასრულებული' : 'completed'}
          </span>
        </div>
        <div className="progress-bar h-3 mb-2">
          <div className="progress-fill h-full w-0"></div>
        </div>
        <p className="text-sm text-muted-foreground">
          {language === 'ka' 
            ? 'დაიწყე პირველი გაკვეთილით React-ის შესახებ'
            : 'Start with the first lesson about React'
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
              icon: <Atom className="w-5 h-5 text-blue-500" />, 
              text: language === 'ka' ? 'კომპონენტების შექმნა' : 'Building components'
            },
            { 
              icon: <Users className="w-5 h-5 text-green-500" />, 
              text: language === 'ka' ? 'მონაცემების გადაცემა' : 'Passing data (props)'
            },
            { 
              icon: <Star className="w-5 h-5 text-orange-500" />, 
              text: language === 'ka' ? 'Hooks-ის გამოყენება' : 'Using hooks'
            },
            { 
              icon: <Layers className="w-5 h-5 text-purple-500" />, 
              text: language === 'ka' ? 'გლობალური მდგომარეობა' : 'Global state (Context)'
            },
            { 
              icon: <BookOpen className="w-5 h-5 text-pink-500" />, 
              text: language === 'ka' ? 'ფორმები და ინპუტები' : 'Forms and inputs'
            },
            { 
              icon: <ArrowRight className="w-5 h-5 text-yellow-500" />, 
              text: language === 'ka' ? 'აპლიკაციის განთავსება' : 'Deploying your app'
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