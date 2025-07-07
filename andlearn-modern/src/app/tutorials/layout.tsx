'use client'

import { useLanguage } from '@/contexts/language-context'
import { BookOpen, Home, ChevronRight, Menu, X, Globe, CheckCircle, Circle } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const tutorials = [
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: <BookOpen className="w-6 h-6 text-yellow-500" />,
    lessons: 18,
    color: 'bg-yellow-100',
    progress: 0 // TODO: connect to real progress
  },
  {
    id: 'react',
    name: 'React',
    icon: <BookOpen className="w-6 h-6 text-blue-500" />,
    lessons: 11,
    color: 'bg-blue-100',
    progress: 0
  },
  {
    id: 'python',
    name: 'Python',
    icon: <BookOpen className="w-6 h-6 text-green-500" />,
    lessons: 12,
    color: 'bg-green-100',
    progress: 0
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: <BookOpen className="w-6 h-6 text-blue-700" />,
    lessons: 10,
    color: 'bg-blue-200',
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
    <div className="min-h-screen bg-muted text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-border shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 rounded-md hover:bg-accent" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
            <Link href="/tutorials" className="flex items-center gap-2 font-bold text-xl">
              <BookOpen className="w-7 h-7 text-primary" />
              <span>{language === 'ka' ? 'გაკვეთილები' : 'Tutorials'}</span>
            </Link>
          </div>
          <button
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors"
            onClick={handleLanguageSwitch}
            aria-label={language === 'ka' ? 'Switch to English' : 'გადართვა ქართულზე'}
          >
            <Globe className="w-5 h-5" />
            <span className="text-sm font-medium">{language === 'ka' ? 'English' : 'ქართული'}</span>
          </button>
        </div>
      </header>

      {/* Sidebar (desktop) */}
      <aside className="hidden lg:block fixed top-20 left-0 h-[calc(100vh-5rem)] w-72 bg-white border-r border-border shadow-md z-20">
        <div className="p-6 space-y-8">
          <div>
            <h3 className="font-semibold mb-4 text-foreground text-lg">
              {language === 'ka' ? 'ყველა კურსი' : 'All Courses'}
            </h3>
            <nav className="space-y-2">
              {tutorials.map((tutorial) => (
                <Link
                  key={tutorial.id}
                  href={`/tutorials/${tutorial.id}`}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-accent ${pathname.includes(`/tutorials/${tutorial.id}`) ? 'bg-accent border-l-4 border-l-primary' : ''}`}
                >
                  {tutorial.icon}
                  <div className="flex-1">
                    <div className="font-medium text-base">{tutorial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {tutorial.lessons} {language === 'ka' ? 'გაკვეთილი' : 'lessons'}
                    </div>
                  </div>
                  {/* Progress indicator (placeholder) */}
                  <div className="flex items-center gap-1">
                    <Circle className="w-4 h-4 text-gray-300" />
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </aside>

      {/* Sidebar (mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/30" onClick={() => setSidebarOpen(false)}>
          <aside className="fixed top-0 left-0 h-full w-72 bg-white border-r border-border shadow-md z-50 animate-slide-in">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-bold text-lg flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                {language === 'ka' ? 'გაკვეთილები' : 'Tutorials'}
              </span>
              <button className="p-2 rounded-md hover:bg-accent" onClick={() => setSidebarOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-8">
              <nav className="space-y-2">
                {tutorials.map((tutorial) => (
                  <Link
                    key={tutorial.id}
                    href={`/tutorials/${tutorial.id}`}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-accent ${pathname.includes(`/tutorials/${tutorial.id}`) ? 'bg-accent border-l-4 border-l-primary' : ''}`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    {tutorial.icon}
                    <div className="flex-1">
                      <div className="font-medium text-base">{tutorial.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {tutorial.lessons} {language === 'ka' ? 'გაკვეთილი' : 'lessons'}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Circle className="w-4 h-4 text-gray-300" />
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="p-4 border-t border-border">
              <button
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent hover:bg-accent/80 w-full justify-center"
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
      <main className="lg:ml-72 pt-8 pb-16 px-4 min-h-[calc(100vh-5rem)]">
        {/* Breadcrumbs */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, idx) => (
            <span key={crumb.href} className="flex items-center gap-1">
              <Link href={crumb.href} className="hover:underline flex items-center gap-1">
                <crumb.icon className="w-4 h-4" />
                {crumb.name}
              </Link>
              {idx < breadcrumbs.length - 1 && <ChevronRight className="w-4 h-4 mx-1" />}
            </span>
          ))}
        </nav>
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
} 