'use client'

import { useLanguage, useCommonTranslations } from '@/contexts/language-context'
import { BookOpen, Code, Users, Award, ArrowRight, Globe, Heart, Zap } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const { t, language } = useLanguage()
  const { getText } = useCommonTranslations()

  const heroContent = {
    title: {
      ka: "ისწავლე პროგრამირება ქართულ ენაზე",
      en: "Learn Programming in Georgian"
    },
    subtitle: {
      ka: "უფასო, დამწყები-მეგობრული ტუტორიალები თანამედროვე ტექნოლოგიებში",
      en: "Free, beginner-friendly tutorials in modern technologies"
    },
    description: {
      ka: "AndLearn არის საქართველოში პირველი სრულად ქართულენოვანი პროგრამირების სასწავლო პლატფორმა. ჩვენი მიზანია გავხადოთ ტექნოლოგიური განათლება ხელმისაწვდომი ყველასთვის.",
      en: "AndLearn is Georgia's first fully Georgian programming education platform. Our mission is to make technology education accessible to everyone."
    }
  }

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: {
        ka: "ქართულ ენაზე",
        en: "In Georgian Language"
      },
      description: {
        ka: "სრულად ქართულად ნათარგმნი მასალები და ახსნები",
        en: "Fully translated materials and explanations in Georgian"
      },
      color: "bg-blue-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: {
        ka: "სრულიად უფასო",
        en: "Completely Free"
      },
      description: {
        ka: "ყველა კურსი და მასალა სრულიად უფასოა",
        en: "All courses and materials are completely free"
      },
      color: "bg-red-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: {
        ka: "დამწყებისთვის",
        en: "For Beginners"
      },
      description: {
        ka: "ნოლიდან დაწყებული, ნაბიჯ-ნაბიჯ სწავლება",
        en: "Step-by-step learning starting from zero"
      },
      color: "bg-green-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: {
        ka: "ინტერაქტიული",
        en: "Interactive"
      },
      description: {
        ka: "ხელით შესრულებადი ვარჯიშები და პრაქტიკული პროექტები",
        en: "Hands-on exercises and practical projects"
      },
      color: "bg-yellow-500"
    }
  ]

  const technologies = [
    {
      name: "JavaScript",
      icon: "🟨",
      lessons: 18,
      difficulty: getText('beginner'),
      description: {
        ka: "ვებ-განვითარების საფუძველი",
        en: "Foundation of web development"
      },
      href: "/tutorials/javascript"
    },
    {
      name: "React",
      icon: "⚛️",
      lessons: 11,
      difficulty: getText('intermediate'),
      description: {
        ka: "მომხმარებლის ინტერფეისის შექმნა",
        en: "Building user interfaces"
      },
      href: "/tutorials/react"
    },
    {
      name: "Python",
      icon: "🐍",
      lessons: 12,
      difficulty: getText('beginner'),
      description: {
        ka: "მარტივი და ძლიერი ენა",
        en: "Simple and powerful language"
      },
      href: "/tutorials/python"
    },
    {
      name: "TypeScript",
      icon: "🔷",
      lessons: 10,
      difficulty: getText('intermediate'),
      description: {
        ka: "ტიპ-უსაფრთხო JavaScript",
        en: "Type-safe JavaScript"
      },
      href: "/tutorials/typescript"
    }
  ]

  const stats = [
    {
      number: "51+",
      label: {
        ka: "გაკვეთილი",
        en: "Lessons"
      }
    },
    {
      number: "4",
      label: {
        ka: "ტექნოლოგია",
        en: "Technologies"
      }
    },
    {
      number: "100%",
      label: {
        ka: "უფასო",
        en: "Free"
      }
    },
    {
      number: "0",
      label: {
        ka: "პირობა",
        en: "Requirements"
      }
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">AndLearn</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  const newLang = language === 'ka' ? 'en' : 'ka'
                  // This will be handled by the LanguageProvider
                  window.location.reload()
                }}
                className="px-3 py-1 rounded-md bg-muted hover:bg-accent transition-colors text-sm font-medium"
              >
                {language === 'ka' ? 'EN' : 'ქარ'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {t(heroContent.title)}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {t(heroContent.subtitle)}
          </p>
          
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t(heroContent.description)}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/tutorials"
              className="btn-primary inline-flex items-center gap-2 text-lg"
            >
              {getText('start')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              href="/about"
              className="btn-secondary text-lg"
            >
              {getText('about')}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'ka' ? 'რატომ AndLearn?' : 'Why AndLearn?'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="learning-card bg-background p-6 rounded-lg border text-center"
              >
                <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mx-auto mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {t(feature.title)}
                </h3>
                <p className="text-muted-foreground">
                  {t(feature.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            {language === 'ka' ? 'რას ისწავლი?' : 'What Will You Learn?'}
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {language === 'ka' 
              ? 'თანამედროვე ტექნოლოგიები, რომლებიც გჭირდება წარმატებული კარიერისთვის'
              : 'Modern technologies you need for a successful career'
            }
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Link
                key={index}
                href={tech.href}
                className="learning-card bg-background p-6 rounded-lg border block hover:border-primary/50"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                <p className="text-muted-foreground mb-4">
                  {t(tech.description)}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                    {tech.lessons} {getText('lessons')}
                  </span>
                  <span className="text-muted-foreground">
                    {tech.difficulty}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80">
                  {t(stat.label)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'ka' 
              ? 'მზად ხარ პროგრამირების სწავლის დასაწყებად?'
              : 'Ready to Start Your Programming Journey?'
            }
          </h2>
          <p className="text-muted-foreground mb-8">
            {language === 'ka'
              ? 'შემოუერთდი ათასობით სტუდენტს, რომლებიც უკვე ისწავლიან AndLearn-თან ერთად'
              : 'Join thousands of students who are already learning with AndLearn'
            }
          </p>
          <Link
            href="/tutorials"
            className="btn-primary inline-flex items-center gap-2 text-lg"
          >
            {getText('start')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">AndLearn</span>
          </div>
          <p className="text-muted-foreground mb-4">
            {language === 'ka'
              ? 'პროგრამირების განათლება ყველასთვის'
              : 'Programming education for everyone'
            }
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 AndLearn. {language === 'ka' ? 'ყველა უფლება დაცულია.' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  )
}
