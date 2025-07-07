'use client'

import { useLanguage } from '@/contexts/language-context'
import { ArrowRight, Clock, Users, Star, Code, BookOpen, Atom, Type, Layers } from 'lucide-react'
import Link from 'next/link'

export default function TutorialsPage() {
  const { language } = useLanguage()

  const tutorials = [
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: <Code className="w-8 h-8 text-yellow-500" />,
      lessons: 18,
      estimatedHours: 12,
      difficulty: {
        ka: 'დამწყები',
        en: 'Beginner'
      },
      description: {
        ka: 'ისწავლე JavaScript-ის საფუძვლები და გახდი ვებ დეველოპერი. ეს კურსი მოიცავს ყველაფერს ცვლადებიდან მოწინავე კონცეფციებამდე.',
        en: 'Learn JavaScript fundamentals and become a web developer. This course covers everything from variables to advanced concepts.'
      },
      topics: {
        ka: ['ცვლადები', 'ფუნქციები', 'მასივები', 'ობიექტები', 'DOM', 'Async/Await'],
        en: ['Variables', 'Functions', 'Arrays', 'Objects', 'DOM', 'Async/Await']
      },
      color: 'bg-yellow-500'
    },
    {
      id: 'react',
      name: 'React',
      icon: <Atom className="w-8 h-8 text-blue-500" />,
      lessons: 11,
      estimatedHours: 8,
      difficulty: {
        ka: 'საშუალო',
        en: 'Intermediate'
      },
      description: {
        ka: 'შექმენი ინტერაქტიული ვებ აპლიკაციები React-ით. ისწავლე კომპონენტები, hooks და state მენეჯმენტი.',
        en: 'Build interactive web applications with React. Learn components, hooks, and state management.'
      },
      topics: {
        ka: ['კომპონენტები', 'JSX', 'Props', 'State', 'Hooks', 'Routing'],
        en: ['Components', 'JSX', 'Props', 'State', 'Hooks', 'Routing']
      },
      color: 'bg-blue-500'
    },
    {
      id: 'python',
      name: 'Python',
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      lessons: 12,
      estimatedHours: 10,
      difficulty: {
        ka: 'დამწყები',
        en: 'Beginner'
      },
      description: {
        ka: 'ისწავლე Python - ყველაზე მარტივი და ძლიერი პროგრამირების ენა. შესანიშნავია დამწყებებისთვის.',
        en: 'Learn Python - the most simple and powerful programming language. Perfect for beginners.'
      },
      topics: {
        ka: ['ცვლადები', 'სიები', 'ფუნქციები', 'კლასები', 'ფაილები', 'API'],
        en: ['Variables', 'Lists', 'Functions', 'Classes', 'Files', 'APIs']
      },
      color: 'bg-green-500'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      icon: <Type className="w-8 h-8 text-blue-600" />,
      lessons: 10,
      estimatedHours: 6,
      difficulty: {
        ka: 'საშუალო',
        en: 'Intermediate'
      },
      description: {
        ka: 'დაამატე ტიპების უსაფრთხოება შენს JavaScript კოდს. ისწავლე TypeScript სრული რეალიზებისთვის.',
        en: 'Add type safety to your JavaScript code. Learn TypeScript for full-scale development.'
      },
      topics: {
        ka: ['ტიპები', 'ინტერფეისები', 'კლასები', 'Generic-ები', 'Modules', 'Advanced Types'],
        en: ['Types', 'Interfaces', 'Classes', 'Generics', 'Modules', 'Advanced Types']
      },
      color: 'bg-blue-600'
    }
  ]

  const features = [
    {
      icon: <Users className="w-5 h-5" />,
      title: {
        ka: 'დამწყებისთვის მოსახერხებელი',
        en: 'Beginner Friendly'
      },
      description: {
        ka: 'ყველა კურსი შექმნილია დამწყებების გათვალისწინებით',
        en: 'All courses designed with beginners in mind'
      }
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: {
        ka: 'თავისი ტემპით',
        en: 'Learn at Your Pace'
      },
      description: {
        ka: 'ისწავლე შენი ტემპით, ყოველთვის ხელმისაწვდომი',
        en: 'Learn at your own pace, always available'
      }
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: {
        ka: 'ხარისხიანი კონტენტი',
        en: 'Quality Content'
      },
      description: {
        ka: 'პროფესიონალურად მომზადებული მასალები',
        en: 'Professionally prepared materials'
      }
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          {language === 'ka' ? 'აირჩიე შენი სასწავლო მიმართულება' : 'Choose Your Learning Path'}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {language === 'ka' 
            ? 'დაიწყე ნებისმიერი კურსით, რომელიც გაინტერესებს. თითოეული შექმნილია იმისთვის, რომ დამწყებიდან თავდაჯერებულ პროგრამისტად გხადოს.'
            : 'Start with any course that interests you. Each one is designed to take you from beginner to confident programmer.'
          }
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="bg-card border rounded-lg p-6 text-center space-y-3">
            <div className="flex justify-center text-primary">
              {feature.icon}
            </div>
            <h3 className="font-semibold">
              {language === 'ka' ? feature.title.ka : feature.title.en}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === 'ka' ? feature.description.ka : feature.description.en}
            </p>
          </div>
        ))}
      </div>

      {/* Tutorials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tutorials.map((tutorial) => (
          <div key={tutorial.id} className="learning-card bg-card border rounded-xl p-6 space-y-4 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {tutorial.icon}
                <div>
                  <h3 className="text-xl font-bold">{tutorial.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>{tutorial.lessons} {language === 'ka' ? 'გაკვეთილი' : 'lessons'}</span>
                    <span>•</span>
                    <span>{tutorial.estimatedHours} {language === 'ka' ? 'საათი' : 'hours'}</span>
                    <span>•</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      (language === 'ka' ? tutorial.difficulty.ka : tutorial.difficulty.en) === 'დამწყები' || 
                      (language === 'ka' ? tutorial.difficulty.ka : tutorial.difficulty.en) === 'Beginner'
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {language === 'ka' ? tutorial.difficulty.ka : tutorial.difficulty.en}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground">
              {language === 'ka' ? tutorial.description.ka : tutorial.description.en}
            </p>

            <div className="space-y-3">
              <h4 className="font-medium text-sm">
                {language === 'ka' ? 'რას ისწავლი:' : 'What you\'ll learn:'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {(language === 'ka' ? tutorial.topics.ka : tutorial.topics.en).map((topic, index) => (
                  <span key={index} className="px-3 py-1 bg-muted rounded-full text-xs font-medium">
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link
                href={`/tutorials/${tutorial.id}`}
                className="btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                {language === 'ka' ? 'დაიწყე კურსი' : 'Start Course'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-8 text-center text-white space-y-4">
        <h2 className="text-2xl font-bold">
          {language === 'ka' ? 'მზად ხარ დასაწყებად?' : 'Ready to Start Learning?'}
        </h2>
        <p className="text-white/90 max-w-xl mx-auto">
          {language === 'ka'
            ? 'შეუერთდი ათასობით სტუდენტს, რომლებიც უკვე ისწავლეს პროგრამირება AndLearn-ით'
            : 'Join thousands of students who have already learned programming with AndLearn'
          }
        </p>
        <Link
          href="/tutorials/javascript"
          className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
        >
          {language === 'ka' ? 'დაიწყე JavaScript-ით' : 'Start with JavaScript'}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
} 