'use client'

import { Play, Clock, CheckCircle, Circle, ArrowRight, BookOpen, Users, Star, Layers, Type } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/language-context'

export default function PythonTutorialPage() {
  const { language } = useLanguage()

  const lessons = [
    {
      id: 1,
      title: {
        ka: 'ცვლადები და მონაცემთა ტიპები',
        en: 'Variables and Data Types'
      },
      description: {
        ka: 'ისწავლე ცვლადების შექმნა და მონაცემთა ტიპების გამოყენება Python-ში.',
        en: 'Learn how to create variables and use data types in Python.'
      },
      duration: '15 min',
      difficulty: 'Beginner',
      completed: false
    },
    {
      id: 2,
      title: {
        ka: 'სიები და ციკლები',
        en: 'Lists and Loops'
      },
      description: {
        ka: 'ისწავლე სიების შექმნა და ციკლების გამოყენება.',
        en: 'Learn how to create lists and use loops.'
      },
      duration: '20 min',
      difficulty: 'Beginner',
      completed: false
    },
    {
      id: 3,
      title: {
        ka: 'ფუნქციები და მოდულები',
        en: 'Functions and Modules'
      },
      description: {
        ka: 'ისწავლე ფუნქციების შექმნა და მოდულების იმპორტი.',
        en: 'Learn how to create functions and import modules.'
      },
      duration: '18 min',
      difficulty: 'Beginner',
      completed: false
    },
    {
      id: 4,
      title: {
        ka: 'კლასები და ობიექტები',
        en: 'Classes and Objects'
      },
      description: {
        ka: 'ისწავლე ობიექტზე ორიენტირებული პროგრამირება Python-ში.',
        en: 'Learn object-oriented programming in Python.'
      },
      duration: '25 min',
      difficulty: 'Beginner',
      completed: false
    },
    {
      id: 5,
      title: {
        ka: 'ფაილებთან მუშაობა',
        en: 'File Handling'
      },
      description: {
        ka: 'ისწავლე ფაილების წაკითხვა და ჩაწერა.',
        en: 'Learn how to read and write files.'
      },
      duration: '22 min',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      id: 6,
      title: {
        ka: 'შეცდომების დამუშავება',
        en: 'Error Handling'
      },
      description: {
        ka: 'ისწავლე შეცდომების მართვა და გამონაკლისების დამუშავება.',
        en: 'Learn how to handle errors and exceptions.'
      },
      duration: '20 min',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      id: 7,
      title: {
        ka: 'მონაცემთა სტრუქტურები',
        en: 'Data Structures'
      },
      description: {
        ka: 'ისწავლე dict, set და tuple სტრუქტურები.',
        en: 'Learn about dict, set, and tuple structures.'
      },
      duration: '18 min',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      id: 8,
      title: {
        ka: 'ვებ API-ებთან მუშაობა',
        en: 'Working with Web APIs'
      },
      description: {
        ka: 'ისწავლე როგორ მიიღო მონაცემები ინტერნეტიდან.',
        en: 'Learn how to fetch data from the internet.'
      },
      duration: '25 min',
      difficulty: 'Intermediate',
      completed: false
    },
    {
      id: 9,
      title: {
        ka: 'პროგრამირების მოწინავე თემები',
        en: 'Advanced Programming Topics'
      },
      description: {
        ka: 'ისწავლე გენერატორები, დეკორატორები და სხვა მოწინავე თემები.',
        en: 'Learn about generators, decorators, and more.'
      },
      duration: '22 min',
      difficulty: 'Advanced',
      completed: false
    },
    {
      id: 10,
      title: {
        ka: 'ტესტირება და დებაგი',
        en: 'Testing and Debugging'
      },
      description: {
        ka: 'ისწავლე კოდის ტესტირება და შეცდომების პოვნა.',
        en: 'Learn how to test and debug your code.'
      },
      duration: '20 min',
      difficulty: 'Advanced',
      completed: false
    },
    {
      id: 11,
      title: {
        ka: 'მონაცემთა მეცნიერება და მანქანური სწავლება',
        en: 'Data Science and Machine Learning'
      },
      description: {
        ka: 'ისწავლე მონაცემთა ანალიზი და ML-ის საფუძვლები.',
        en: 'Learn data analysis and ML basics.'
      },
      duration: '18 min',
      difficulty: 'Advanced',
      completed: false
    },
    {
      id: 12,
      title: {
        ka: 'პროექტები და განთავსება',
        en: 'Projects and Deployment'
      },
      description: {
        ka: 'ისწავლე როგორ შექმნა და განათავსო პროექტი.',
        en: 'Learn how to create and deploy a project.'
      },
      duration: '18 min',
      difficulty: 'Advanced',
      completed: false
    }
  ]

  const stats = [
    {
      label: language === 'ka' ? 'გაკვეთილი' : 'Lessons',
      value: '12'
    },
    {
      label: language === 'ka' ? 'საათი' : 'Hours',
      value: '7+'
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
      <div className="bg-gradient-to-r from-green-400 to-green-700 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-4 mb-6">
          <BookOpen className="w-12 h-12 text-green-200 drop-shadow" />
          <div>
            <h1 className="text-4xl font-bold">Python</h1>
            <p className="text-white/90 text-lg">
              {language === 'ka' 
                ? 'მარტივი და ძლიერი პროგრამირება' 
                : 'Simple and Powerful Programming'
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
            ? 'ისწავლე Python-ის საფუძვლები და გამოიყენე იგი მონაცემთა ანალიზში, ვებ-დეველოპმენტში და მანქანურ სწავლებაში.'
            : 'Learn Python fundamentals and use it for data analysis, web development, and machine learning.'
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
            0/12 {language === 'ka' ? 'დასრულებული' : 'completed'}
          </span>
        </div>
        <div className="progress-bar h-3 mb-2">
          <div className="progress-fill h-full w-0"></div>
        </div>
        <p className="text-sm text-muted-foreground">
          {language === 'ka' 
            ? 'დაიწყე პირველი გაკვეთილით ცვლადების შესახებ'
            : 'Start with the first lesson about variables'
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
                  <Circle className="w-8 h-8 text-green-400" />
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
              icon: <BookOpen className="w-5 h-5 text-green-500" />, 
              text: language === 'ka' ? 'ცვლადები და მონაცემთა ტიპები' : 'Variables and data types'
            },
            { 
              icon: <Users className="w-5 h-5 text-blue-500" />, 
              text: language === 'ka' ? 'სიები და ციკლები' : 'Lists and loops'
            },
            { 
              icon: <Star className="w-5 h-5 text-orange-500" />, 
              text: language === 'ka' ? 'ფუნქციები და მოდულები' : 'Functions and modules'
            },
            { 
              icon: <Layers className="w-5 h-5 text-purple-500" />, 
              text: language === 'ka' ? 'კლასები და ობიექტები' : 'Classes and objects'
            },
            { 
              icon: <Type className="w-5 h-5 text-pink-500" />, 
              text: language === 'ka' ? 'მონაცემთა სტრუქტურები' : 'Data structures'
            },
            { 
              icon: <ArrowRight className="w-5 h-5 text-yellow-500" />, 
              text: language === 'ka' ? 'მონაცემთა მეცნიერება' : 'Data science'
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