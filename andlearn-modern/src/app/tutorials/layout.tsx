'use client'

import { useLanguage } from '@/contexts/language-context'
import { BookOpen, Home, ChevronRight, Menu, X, Globe, CheckCircle, Circle, Code, Component, FileText, Type } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const tutorials = [
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: <Code className="w-6 h-6 text-yellow-400" />,
    lessons: 18,
    color: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
    progress: 0 // TODO: connect to real progress
  },
  {
    id: 'react',
    name: 'React',
    icon: <Component className="w-6 h-6 text-blue-400" />,
    lessons: 11,
    color: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    progress: 0
  },
  {
    id: 'python',
    name: 'Python',
    icon: <FileText className="w-6 h-6 text-green-400" />,
    lessons: 12,
    color: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    progress: 0
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: <Type className="w-6 h-6 text-blue-300" />,
    lessons: 10,
    color: 'bg-blue-600/10',
    borderColor: 'border-blue-600/20',
    progress: 0
  }
]

export default function TutorialsLayout({ children }: { children: React.ReactNode }) {
  const { t, language, setLanguage } = useLanguage()
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const currentTutorial = tutorials.find(t => pathname.includes(`/tutorials/${t.id}`))

  // Breadcrumbs
  const breadcrumbs = [
    { name: language === 'ka' ? 'მთავარი' : 'Home', href: '/', icon: Home },
    { name: language === 'ka' ? 'გაკვეთილები' : 'Tutorials', href: '/tutorials', icon: BookOpen },
    ...(currentTutorial ? [{
      name: currentTutorial.name,
      href: `/tutorials/${currentTutorial.id}`,
      icon: BookOpen
    }] : [])
  ]

  // Language switcher
  const handleLanguageSwitch = () => {
    setLanguage(language === 'ka' ? 'en' : 'ka')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50 shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </button>
            <Link href="/tutorials" className="flex items-center gap-3 font-bold text-xl text-slate-900 dark:text-slate-100">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span>{language === 'ka' ? 'გაკვეთილები' : 'Tutorials'}</span>
            </Link>
          </div>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300"
            onClick={handleLanguageSwitch}
            aria-label={language === 'ka' ? 'Switch to English' : 'გადართვა ქართულზე'}
          >
            <Globe className="w-5 h-5" />
            <span className="text-sm font-medium">{language === 'ka' ? 'English' : 'ქართული'}</span>
          </button>
        </div>
      </header>

      {/* Sidebar (desktop) */}
      <aside className="hidden lg:block fixed top-24 left-0 h-[calc(100vh-6rem)] w-80 bg-slate-900/95 dark:bg-slate-900/95 backdrop-blur-xl border-r border-slate-700/50 shadow-2xl z-20">
        <div className="p-6 space-y-8">
          <div>
            <h3 className="font-bold mb-6 text-white text-xl flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-400" />
              {language === 'ka' ? 'ყველა კურსი' : 'All Courses'}
            </h3>
            <nav className="space-y-3">
              {tutorials.map((tutorial) => (
                <Link
                  key={tutorial.id}
                  href={`/tutorials/${tutorial.id}`}
                  className={`group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 border ${
                    pathname.includes(`/tutorials/${tutorial.id}`) 
                      ? `${tutorial.color} ${tutorial.borderColor} border-2 shadow-lg` 
                      : 'border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    pathname.includes(`/tutorials/${tutorial.id}`) 
                      ? tutorial.color 
                      : 'bg-slate-800 group-hover:bg-slate-700'
                  } transition-colors`}>
                    {tutorial.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-base text-white mb-1">{tutorial.name}</div>
                    <div className="text-sm text-slate-400">
                      {tutorial.lessons} {language === 'ka' ? 'გაკვეთილი' : 'lessons'}
                    </div>
                  </div>
                  {/* Progress indicator */}
                  <div className="flex items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                      <span className="text-xs font-medium text-slate-300">{tutorial.progress}%</span>
                    </div>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </aside>

      {/* Sidebar (mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setSidebarOpen(false)}>
          <aside className="fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-r border-slate-700/50 shadow-2xl z-50 transform transition-transform duration-300">
            <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
              <span className="font-bold text-xl flex items-center gap-3 text-white">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                {language === 'ka' ? 'გაკვეთილები' : 'Tutorials'}
              </span>
              <button className="p-2 rounded-xl hover:bg-slate-800 transition-colors text-slate-300" onClick={() => setSidebarOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-8">
              <nav className="space-y-3">
                {tutorials.map((tutorial) => (
                  <Link
                    key={tutorial.id}
                    href={`/tutorials/${tutorial.id}`}
                    className={`group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 border ${
                      pathname.includes(`/tutorials/${tutorial.id}`) 
                        ? `${tutorial.color} ${tutorial.borderColor} border-2 shadow-lg` 
                        : 'border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50'
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      pathname.includes(`/tutorials/${tutorial.id}`) 
                        ? tutorial.color 
                        : 'bg-slate-800 group-hover:bg-slate-700'
                    } transition-colors`}>
                      {tutorial.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-base text-white mb-1">{tutorial.name}</div>
                      <div className="text-sm text-slate-400">
                        {tutorial.lessons} {language === 'ka' ? 'გაკვეთილი' : 'lessons'}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                        <span className="text-xs font-medium text-slate-300">{tutorial.progress}%</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="p-6 border-t border-slate-700/50">
              <button
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 w-full justify-center transition-colors text-slate-300"
                onClick={handleLanguageSwitch}
                aria-label={language === 'ka' ? 'Switch to English' : 'გადართვა ქართულზე'}
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">{language === 'ka' ? 'English' : 'ქართული'}</span>
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main content area */}
      <main className="lg:ml-80 pt-8 pb-16 px-4 min-h-[calc(100vh-6rem)]">
        {/* Breadcrumbs */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, idx) => (
            <span key={crumb.href} className="flex items-center gap-2">
              <Link href={crumb.href} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <crumb.icon className="w-4 h-4" />
                <span className="font-medium">{crumb.name}</span>
              </Link>
              {idx < breadcrumbs.length - 1 && <ChevronRight className="w-4 h-4 text-slate-400" />}
            </span>
          ))}
        </nav>
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
} 