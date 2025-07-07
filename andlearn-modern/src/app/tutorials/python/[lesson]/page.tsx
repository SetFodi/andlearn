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
  FileText
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

  // Python lessons data with comprehensive content
  const lessons = [
    {
      id: 1,
      title: {
        ka: 'ცვლადები და მონაცემთა ტიპები',
        en: 'Variables and Data Types'
      },
      description: {
        ka: 'ისწავლე ცვლადების შექმნა და მონაცემთა ტიპების გამოყენება Python-ში',
        en: 'Learn how to create variables and use data types in Python'
      },
      duration: 15,
      difficulty: { ka: 'დამწყები', en: 'Beginner' },
      keyPoints: [
        { ka: 'Python-ში ცვლადები არ საჭიროებს ტიპის განსაზღვრას', en: 'Python variables don\'t require type declaration' },
        { ka: 'დინამიური ტიპისტაცია - ტიპი ავტომატურად განისაზღვრება', en: 'Dynamic typing - type is automatically determined' },
        { ka: 'ძირითადი ტიპები: int, float, str, bool', en: 'Basic types: int, float, str, bool' },
        { ka: 'print() ფუნქცია გამოსატანადაა', en: 'print() function is for output' }
      ],
      theory: {
        ka: `
# ცვლადები Python-ში

Python-ში ცვლადების შექმნა ძალიან მარტივია. თქვენ არ გჭირდებათ ტიპის წინასწარ განსაზღვრა.

## ცვლადების შექმნა

### მარტივი მიღება:
\`\`\`python
name = "ლუკა"
age = 20
height = 1.75
is_student = True
\`\`\`

Python ავტომატურად განსაზღვრავს ცვლადის ტიპს მნიშვნელობის მიხედვით.

## მონაცემთა ტიპები

### 1. Integer (int) - მთელი რიცხვები
\`\`\`python
age = 25
year = 2024
temperature = -5
\`\`\`

### 2. Float - ფლობადი მძიმის რიცხვები
\`\`\`python
height = 1.75
price = 99.99
pi = 3.14159
\`\`\`

### 3. String (str) - ტექსტი
\`\`\`python
name = "ანა"
message = 'გამარჯობა!'
long_text = """ეს არის
მრავალხაზიანი
ტექსტი"""
\`\`\`

### 4. Boolean (bool) - ლოგიკური
\`\`\`python
is_active = True
is_complete = False
\`\`\`

### 5. List - სია
\`\`\`python
fruits = ["ვაშლი", "ბანანი", "ნარინჯი"]
numbers = [1, 2, 3, 4, 5]
mixed = ["ანა", 25, True, 1.75]
\`\`\`

### 6. Dictionary - ლექსიკონი
\`\`\`python
person = {
    "name": "გიორგი",
    "age": 30,
    "city": "თბილისი"
}
\`\`\`

## ტიპის შემოწმება

\`\`\`python
name = "ანა"
print(type(name))  # <class 'str'>

age = 25
print(type(age))   # <class 'int'>
\`\`\`

## ცვლადების გადაკეთება

\`\`\`python
x = 10        # int
x = "გამარჯობა" # str
x = True      # bool
\`\`\`

Python-ში ცვლადს შეუძლია ნებისმიერ დროს ტიპის შეცვლა.
        `,
        en: `
# Variables in Python

Creating variables in Python is very simple. You don't need to declare the type beforehand.

## Creating Variables

### Simple assignment:
\`\`\`python
name = "Luke"
age = 20
height = 1.75
is_student = True
\`\`\`

Python automatically determines the variable type based on the value.

## Data Types

### 1. Integer (int) - Whole numbers
\`\`\`python
age = 25
year = 2024
temperature = -5
\`\`\`

### 2. Float - Floating point numbers
\`\`\`python
height = 1.75
price = 99.99
pi = 3.14159
\`\`\`

### 3. String (str) - Text
\`\`\`python
name = "Anna"
message = 'Hello!'
long_text = """This is a
multi-line
text"""
\`\`\`

### 4. Boolean (bool) - Logical
\`\`\`python
is_active = True
is_complete = False
\`\`\`

### 5. List - List
\`\`\`python
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = ["Anna", 25, True, 1.75]
\`\`\`

### 6. Dictionary - Dictionary
\`\`\`python
person = {
    "name": "George",
    "age": 30,
    "city": "Tbilisi"
}
\`\`\`

## Type Checking

\`\`\`python
name = "Anna"
print(type(name))  # <class 'str'>

age = 25
print(type(age))   # <class 'int'>
\`\`\`

## Variable Reassignment

\`\`\`python
x = 10        # int
x = "Hello"   # str
x = True      # bool
\`\`\`

In Python, a variable can change its type at any time.
        `
      },
      codeExample: {
        title: { ka: 'Python ცვლადების მაგალითი', en: 'Python Variables Example' },
        code: `# ცვლადების შექმნა / Creating variables
student_name = "ლუკა ფართენაძე"
student_age = 20
gpa = 3.8
is_enrolled = True
graduation_year = 2025

# სია (List) / List
subjects = ["მათემატიკა", "ფიზიკა", "ქიმია", "ინფორმატიკა"]

# ლექსიკონი (Dictionary) / Dictionary
student_info = {
    "name": student_name,
    "age": student_age,
    "gpa": gpa,
    "is_enrolled": is_enrolled,
    "subjects": subjects
}

# ინფორმაციის გამოტანა / Output information
print("სტუდენტის ინფორმაცია / Student Information:")
print("-" * 40)
print(f"სახელი: {student_info['name']}")
print(f"ასაკი: {student_info['age']} წელი")
print(f"GPA: {student_info['gpa']}")
print(f"სტატუსი: {'აქტიური' if student_info['is_enrolled'] else 'არააქტიური'}")

print("\\nსაგნები / Subjects:")
for i, subject in enumerate(subjects, 1):
    print(f"{i}. {subject}")

# ტიპების შემოწმება / Type checking
print("\\nცვლადების ტიპები / Variable Types:")
print(f"student_name: {type(student_name)}")
print(f"student_age: {type(student_age)}")
print(f"gpa: {type(gpa)}")
print(f"is_enrolled: {type(is_enrolled)}")
print(f"subjects: {type(subjects)}")
print(f"student_info: {type(student_info)}")

# მათემატიკური ოპერაციები / Mathematical operations
current_year = 2024
years_until_graduation = graduation_year - current_year
print(f"\\nდარჩენილი წლები დამთავრებამდე: {years_until_graduation}")`
      },
      exercises: [
        {
          id: 1,
          title: { ka: 'პირადი ინფორმაცია', en: 'Personal Information' },
          description: { ka: 'შექმენი ცვლადები შენი პირადი ინფორმაციისთვის', en: 'Create variables for your personal information' },
          difficulty: { ka: 'მარტივი', en: 'Easy' },
          starterCode: `# შექმენი ცვლადები შენი ინფორმაციისთვის
# Create variables for your information

my_name = ""  # შენი სახელი / your name
my_age = 0    # შენი ასაკი / your age
my_city = ""  # შენი ქალაქი / your city
my_hobbies = []  # შენი ჰობები სიის სახით / your hobbies as a list

# შეავსე ცვლადები და დაბეჭდე
# Fill the variables and print them
print("ჩემი ინფორმაცია:")
# დაამატე print განცხადებები...
`,
          solution: `my_name = "ანა"
my_age = 22
my_city = "თბილისი"
my_hobbies = ["კითხვა", "სირბილი", "კოდირება", "მუსიკა"]

print("ჩემი ინფორმაცია:")
print(f"სახელი: {my_name}")
print(f"ასაკი: {my_age} წელი")
print(f"ქალაქი: {my_city}")
print("ჰობები:")
for hobby in my_hobbies:
    print(f"- {hobby}")`,
          hints: [
            { ka: 'გამოიყენე f-string ფორმატირებისთვის: f"ტექსტი {ცვლადი}"', en: 'Use f-string for formatting: f"text {variable}"' },
            { ka: 'სიისთვის გამოიყენე [] ფრჩხილები', en: 'Use [] brackets for lists' }
          ]
        },
        {
          id: 2,
          title: { ka: 'კალკულატორი', en: 'Calculator' },
          description: { ka: 'შექმენი მარტივი კალკულატორი რიცხვებისთვის', en: 'Create a simple calculator for numbers' },
          difficulty: { ka: 'მარტივი', en: 'Easy' },
          starterCode: `# მარტივი კალკულატორი / Simple calculator
num1 = 10
num2 = 5

# შეასრულე ყველა ოპერაცია და დაბეჭდე შედეგები
# Perform all operations and print results

addition = # დაამატე გამოთვლა
subtraction = # დაამატე გამოთვლა  
multiplication = # დაამატე გამოთვლა
division = # დაამატე გამოთვლა

print(f"{num1} + {num2} = {addition}")
# დაამატე დანარჩენი print განცხადებები...
`,
          solution: `num1 = 10
num2 = 5

addition = num1 + num2
subtraction = num1 - num2
multiplication = num1 * num2
division = num1 / num2

print(f"{num1} + {num2} = {addition}")
print(f"{num1} - {num2} = {subtraction}")
print(f"{num1} * {num2} = {multiplication}")
print(f"{num1} / {num2} = {division}")

# ბონუსი: ცოტა მეტი ინფორმაცია
print(f"\\nტიპები:")
print(f"addition ტიპი: {type(addition)}")
print(f"division ტიპი: {type(division)}")`,
          hints: [
            { ka: '+, -, *, / ოპერატორები მათემატიკური ოპერაციებისთვის', en: '+, -, *, / operators for mathematical operations' },
            { ka: 'Python-ში გაყოფა ყოველთვის აბრუნებს float-ს', en: 'Division in Python always returns a float' }
          ]
        }
      ]
    },
    {
      id: 2,
      title: {
        ka: 'სიები და ციკლები',
        en: 'Lists and Loops'
      },
      description: {
        ka: 'ისწავლე სიების შექმნა და ციკლების გამოყენება',
        en: 'Learn how to create lists and use loops'
      },
      duration: 20,
      difficulty: { ka: 'დამწყები', en: 'Beginner' },
      keyPoints: [
        { ka: 'სიები არის მონაცემების კოლექცია []', en: 'Lists are collections of data []' },
        { ka: 'for ციკლი სიის ელემენტებზე გადასავლელად', en: 'for loop to iterate over list elements' },
        { ka: 'while ციკლი პირობით განმეორებისთვის', en: 'while loop for conditional repetition' },
        { ka: 'range() ფუნქცია რიცხვთა თანმიმდევრობისთვის', en: 'range() function for number sequences' }
      ],
      theory: {
        ka: 'Lists and Loops theory in Georgian...',
        en: 'Lists and Loops theory in English...'
      },
      codeExample: {
        title: { ka: 'სიები და ციკლები', en: 'Lists and Loops' },
        code: `# სიების შექმნა / Creating lists
fruits = ["ვაშლი", "ბანანი", "ნარინჯი", "ყურძენი"]
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
mixed_list = ["ანა", 25, True, 3.14, "გიორგი"]

# for ციკლი სიაზე / for loop over list
print("ხილი / Fruits:")
for fruit in fruits:
    print(f"- {fruit}")

print("\\nრიცხვები / Numbers:")
for num in numbers:
    print(f"რიცხვი: {num}, კვადრატი: {num**2}")

# range() ფუნქციის გამოყენება / Using range() function
print("\\n1-დან 5-მდე:")
for i in range(1, 6):
    print(f"ინდექსი: {i}")

# while ციკლი / while loop
count = 0
print("\\nwhile ციკლი:")
while count < 5:
    print(f"Count: {count}")
    count += 1

# სიის მეთოდები / List methods
print(f"\\nსიის სიგრძე: {len(fruits)}")
fruits.append("ციტრუსი")  # ახალი ელემენტის დამატება
print(f"ახალი სია: {fruits}")

# ელემენტის ძებნა / Finding element
if "ვაშლი" in fruits:
    print("ვაშლი არის სიაში!")

# სიის ინდექსირება / List indexing
print(f"პირველი ხილი: {fruits[0]}")
print(f"ბოლო ხილი: {fruits[-1]}")
print(f"პირველი 3 ხილი: {fruits[:3]}")`
      },
      exercises: [
        // More exercises would be added here...
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
            href="/tutorials/python" 
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-6 flex-wrap">
            <Link href="/tutorials" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-words">
              {language === 'ka' ? 'ტუტორიალები' : 'Tutorials'}
            </Link>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <Link href="/tutorials/python" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-words">
              Python
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
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
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
                <div className="flex items-center gap-2 px-3 py-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <FileText className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span className="text-green-700 dark:text-green-300">
                    Python
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
                        .replace(/```python/g, '<pre class="language-python"><code>')
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
                    href={`/tutorials/python/${prevLesson.id}`}
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
                    href={`/tutorials/python/${nextLesson.id}`}
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