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
  Component
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

  // React lessons data with comprehensive content
  const lessons = [
    {
      id: 1,
      title: {
        ka: 'React-ის შესავალი',
        en: 'Introduction to React'
      },
      description: {
        ka: 'ისწავლე React-ის საფუძვლები და კომპონენტების შექმნა',
        en: 'Learn React fundamentals and how to create components'
      },
      duration: 20,
      difficulty: { ka: 'დამწყები', en: 'Beginner' },
      keyPoints: [
        { ka: 'React არის ბიბლიოთეკა UI შესაქმნელად', en: 'React is a library for building UI' },
        { ka: 'JSX სინტაქსი HTML-ის მსგავსია', en: 'JSX syntax is similar to HTML' },
        { ka: 'კომპონენტები არის React-ის ძირითადი ელემენტები', en: 'Components are the main building blocks of React' },
        { ka: 'Virtual DOM-ი უზრუნველყოფს სწრაფობას', en: 'Virtual DOM ensures performance' }
      ],
      theory: {
        ka: `
# React-ის შესავალი

React არის JavaScript ბიბლიოთეკა, რომელიც შექმნილია ინტერაქტიული მომხმარებლის ინტერფეისების (UI) ასაშენებლად.

## რა არის React?

React-ი შეიქმნა Facebook-ის მიერ 2013 წელს და მას შემდეგ გახდა ერთ-ერთი ყველაზე პოპულარული ფრონტენდ ბიბლიოთეკა.

### React-ის უპირატესობები:

- **კომპონენტზე ორიენტირებული**: ყველაფერი არის კომპონენტი
- **Declarative**: აღწერ რა გინდა, არა როგორ
- **Virtual DOM**: სწრაფი რენდერინგი
- **One-way Data Flow**: მონაცემების ნაკადი მარტივია

## JSX - JavaScript XML

JSX არის სინტაქსის გაფართოება JavaScript-ისთვის, რომელიც საშუალებას გვაძლევს დავწეროთ HTML-ის მსგავსი კოდი JavaScript-ში.

\`\`\`jsx
const element = <h1>გამარჯობა, სამყარო!</h1>;
\`\`\`

### JSX-ის წესები:

1. ყველა ტეგი უნდა იყოს დახურული
2. camelCase მახასიათებლებისთვის
3. className class-ის ნაცვლად
4. {} JavaScript გამოსახულებებისთვის

## კომპონენტები

კომპონენტი არის JavaScript ფუნქცია, რომელიც აბრუნებს JSX-ს.

### ფუნქციური კომპონენტი:
\`\`\`jsx
function Welcome(props) {
  return <h1>გამარჯობა, {props.name}!</h1>;
}
\`\`\`

### Arrow Function კომპონენტი:
\`\`\`jsx
const Welcome = (props) => {
  return <h1>გამარჯობა, {props.name}!</h1>;
};
\`\`\`

## Props - მონაცემების გადაცემა

Props არის გზა მშობელი კომპონენტისგან შვილ კომპონენტში მონაცემების გადასაცემად.

\`\`\`jsx
function App() {
  return (
    <div>
      <Welcome name="ანა" />
      <Welcome name="გიორგი" />
    </div>
  );
}
\`\`\`
        `,
        en: `
# Introduction to React

React is a JavaScript library designed for building interactive user interfaces (UI).

## What is React?

React was created by Facebook in 2013 and has since become one of the most popular frontend libraries.

### React Advantages:

- **Component-Based**: Everything is a component
- **Declarative**: Describe what you want, not how
- **Virtual DOM**: Fast rendering
- **One-way Data Flow**: Simple data flow

## JSX - JavaScript XML

JSX is a syntax extension for JavaScript that allows us to write HTML-like code in JavaScript.

\`\`\`jsx
const element = <h1>Hello, World!</h1>;
\`\`\`

### JSX Rules:

1. All tags must be closed
2. camelCase for attributes
3. className instead of class
4. {} for JavaScript expressions

## Components

A component is a JavaScript function that returns JSX.

### Function Component:
\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
\`\`\`

### Arrow Function Component:
\`\`\`jsx
const Welcome = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};
\`\`\`

## Props - Passing Data

Props are a way to pass data from parent to child components.

\`\`\`jsx
function App() {
  return (
    <div>
      <Welcome name="Anna" />
      <Welcome name="George" />
    </div>
  );
}
\`\`\`
        `
      },
      codeExample: {
        title: { ka: 'პირველი React კომპონენტი', en: 'First React Component' },
        code: `// პირველი React კომპონენტი / First React Component
import React from 'react';

// მარტივი კომპონენტი / Simple component
function Greeting(props) {
  return (
    <div className="greeting">
      <h1>გამარჯობა, {props.name}!</h1>
      <p>კეთილი იყოს შენი მობრძანება React-ში!</p>
    </div>
  );
}

// მთავარი App კომპონენტი / Main App component
function App() {
  const userName = "ლუკა";
  const isLoggedIn = true;

  return (
    <div className="app">
      <header>
        <h1>ჩემი React აპლიკაცია</h1>
      </header>
      
      <main>
        {isLoggedIn ? (
          <Greeting name={userName} />
        ) : (
          <p>გთხოვთ შეხვიდეთ სისტემაში</p>
        )}
        
        <ul>
          <li>React ისწავლე</li>
          <li>კომპონენტები შექმენი</li>
          <li>JSX გამოიყენე</li>
        </ul>
      </main>
    </div>
  );
}

export default App;`
      },
      exercises: [
        {
          id: 1,
          title: { ka: 'პირველი კომპონენტი', en: 'First Component' },
          description: { ka: 'შექმენი მარტივი React კომპონენტი', en: 'Create a simple React component' },
          difficulty: { ka: 'მარტივი', en: 'Easy' },
          starterCode: `import React from 'react';

// შექმენი PersonCard კომპონენტი
// Create PersonCard component
function PersonCard(props) {
  return (
    <div className="person-card">
      {/* დაამატე სახელი, ასაკი და ქალაქი */}
      {/* Add name, age and city */}
    </div>
  );
}

// App კომპონენტი / App component
function App() {
  return (
    <div>
      <PersonCard name="ანა" age={25} city="თბილისი" />
      <PersonCard name="გიორგი" age={30} city="ბათუმი" />
    </div>
  );
}

export default App;`,
          solution: `import React from 'react';

function PersonCard(props) {
  return (
    <div className="person-card">
      <h2>{props.name}</h2>
      <p>ასაკი: {props.age}</p>
      <p>ქალაქი: {props.city}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <PersonCard name="ანა" age={25} city="თბილისი" />
      <PersonCard name="გიორგი" age={30} city="ბათუმი" />
    </div>
  );
}

export default App;`,
          hints: [
            { ka: 'გამოიყენე props ობიექტი', en: 'Use the props object' },
            { ka: '{} ფრჩხილები JavaScript-ისთვის', en: '{} brackets for JavaScript' }
          ]
        },
        {
          id: 2,
          title: { ka: 'პირობითი რენდერინგი', en: 'Conditional Rendering' },
          description: { ka: 'ისწავლე პირობითი რენდერინგი JSX-ში', en: 'Learn conditional rendering in JSX' },
          difficulty: { ka: 'მარტივი', en: 'Easy' },
          starterCode: `import React from 'react';

function UserStatus(props) {
  const { isOnline, userName } = props;
  
  return (
    <div className="user-status">
      <h3>{userName}</h3>
      {/* დაამატე პირობითი რენდერინგი isOnline მდგომარეობისთვის */}
      {/* Add conditional rendering for isOnline status */}
    </div>
  );
}

function App() {
  return (
    <div>
      <UserStatus userName="ანა" isOnline={true} />
      <UserStatus userName="გიორგი" isOnline={false} />
    </div>
  );
}

export default App;`,
          solution: `import React from 'react';

function UserStatus(props) {
  const { isOnline, userName } = props;
  
  return (
    <div className="user-status">
      <h3>{userName}</h3>
      {isOnline ? (
        <span style={{color: 'green'}}>ონლაინ</span>
      ) : (
        <span style={{color: 'red'}}>ოფლაინ</span>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <UserStatus userName="ანა" isOnline={true} />
      <UserStatus userName="გიორგი" isOnline={false} />
    </div>
  );
}

export default App;`,
          hints: [
            { ka: 'გამოიყენე ternary ოპერატორი ? :', en: 'Use the ternary operator ? :' },
            { ka: 'შეგიძლია && ოპერატორიც გამოიყენო', en: 'You can also use the && operator' }
          ]
        }
      ]
    },
    {
      id: 2,
      title: {
        ka: 'კომპონენტები და Props',
        en: 'Components and Props'
      },
      description: {
        ka: 'ისწავლე კომპონენტების შექმნა და Props-ების გამოყენება',
        en: 'Learn how to create components and use Props'
      },
      duration: 25,
      difficulty: { ka: 'დამწყები', en: 'Beginner' },
      keyPoints: [
        { ka: 'Props-ები არის მონაცემები კომპონენტებისთვის', en: 'Props are data for components' },
        { ka: 'კომპონენტები უნდა იყოს რეუზიბალური', en: 'Components should be reusable' },
        { ka: 'Props არის read-only', en: 'Props are read-only' },
        { ka: 'Destructuring-ი აადვილებს Props-ებთან მუშაობას', en: 'Destructuring makes working with props easier' }
      ],
      theory: {
        ka: 'Components and Props theory in Georgian...',
        en: 'Components and Props theory in English...'
      },
      codeExample: {
        title: { ka: 'კომპონენტები Props-ებით', en: 'Components with Props' },
        code: `// კომპონენტები Props-ებით / Components with Props
import React from 'react';

// UserCard კომპონენტი / UserCard component
function UserCard({ name, email, avatar, isActive }) {
  return (
    <div className="user-card">
      <img src={avatar} alt={name} className="avatar" />
      <div className="user-info">
        <h3>{name}</h3>
        <p>{email}</p>
        <span className={\`status \${isActive ? 'active' : 'inactive'}\`}>
          {isActive ? 'აქტიური' : 'არააქტიური'}
        </span>
      </div>
    </div>
  );
}

// App კომპონენტი / App component
function App() {
  const users = [
    {
      id: 1,
      name: "ანა გელაშვილი",
      email: "ana@example.com",
      avatar: "https://example.com/ana.jpg",
      isActive: true
    },
    {
      id: 2,
      name: "გიორგი მამედოვი",
      email: "giorgi@example.com", 
      avatar: "https://example.com/giorgi.jpg",
      isActive: false
    }
  ];

  return (
    <div className="app">
      <h1>მომხმარებლების სია</h1>
      <div className="users-grid">
        {users.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            avatar={user.avatar}
            isActive={user.isActive}
          />
        ))}
      </div>
    </div>
  );
}`
      },
      exercises: [
        // More exercises...
      ]
    }
    // More lessons would be added here...
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
            href="/tutorials/react" 
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
          <nav className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-6">
            <Link href="/tutorials" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-words">
              {language === 'ka' ? 'ტუტორიალები' : 'Tutorials'}
            </Link>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <Link href="/tutorials/react" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-words">
              React
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
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Component className="w-6 h-6 text-white" />
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
                    {currentLesson.difficulty[language]}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Component className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-blue-700 dark:text-blue-300">
                    React
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
                        .replace(/```jsx/g, '<pre class="language-jsx"><code>')
                        .replace(/```javascript/g, '<pre class="language-javascript"><code>')
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
                  <div className="flex items-center justify-between">
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
                          {exercise.difficulty[language]}
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
                    href={`/tutorials/react/${prevLesson.id}`}
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
                    href={`/tutorials/react/${nextLesson.id}`}
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