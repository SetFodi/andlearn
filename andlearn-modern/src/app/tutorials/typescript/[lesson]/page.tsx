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
  Type
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface LessonPageProps {
  params: {
    lesson: string
  }
}

export default function LessonPage({ params }: LessonPageProps) {
  const { language } = useLanguage()
  const [copied, setCopied] = useState(false)
  const [currentTab, setCurrentTab] = useState<'theory' | 'code' | 'practice'>('theory')
  const lessonId = parseInt(params.lesson)

  // TypeScript lessons data with comprehensive content
  const lessons = [
    {
      id: 1,
      title: {
        ka: 'ტიპების საფუძვლები',
        en: 'Basic Types'
      },
      description: {
        ka: 'ისწავლე TypeScript-ის ძირითადი ტიპები და მათი გამოყენება',
        en: 'Learn the basic types in TypeScript and their usage'
      },
      duration: 15,
      difficulty: { ka: 'დამწყები', en: 'Beginner' },
      keyPoints: [
        { ka: 'TypeScript არის JavaScript + ტიპები', en: 'TypeScript is JavaScript + types' },
        { ka: 'ძირითადი ტიპები: string, number, boolean', en: 'Basic types: string, number, boolean' },
        { ka: 'ტიპის ანოტაცია : ნიშნით', en: 'Type annotation with : symbol' },
        { ka: 'ტიპის ინფერენცია - ავტომატური დადგენა', en: 'Type inference - automatic detection' }
      ],
      theory: {
        ka: `
# TypeScript-ის ტიპების საფუძვლები

TypeScript არის JavaScript-ის ზე-მრუნვა (superset), რომელიც ამატებს სტატიკურ ტიპებს.

## რა არის TypeScript?

TypeScript გაძლევს საშუალებას თქვენს JavaScript კოდს დაამატოთ ტიპები, რაც:
- ამცირებს შეცდომებს
- აუმჯობესებს კოდის წაკითხვას
- უზრუნველყოფს უკეთეს IDE მხარდაჭერას

## ძირითადი ტიპები

### String - ტექსტი
\`\`\`typescript
let firstName: string = "ლუკა";
let lastName: string = "ფართენაძე";
let fullName: string = \`\${firstName} \${lastName}\`;
\`\`\`

### Number - რიცხვები
\`\`\`typescript
let age: number = 20;
let height: number = 1.75;
let temperature: number = -5;
\`\`\`

### Boolean - ლოგიკური
\`\`\`typescript
let isStudent: boolean = true;
let isComplete: boolean = false;
\`\`\`

### Array - მასივები
\`\`\`typescript
// ორი გზა მასივის განსაზღვრისთვის
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["ანა", "გიორგი", "ნინო"];
\`\`\`

### Any - ნებისმიერი
\`\`\`typescript
let anything: any = "ტექსტი";
anything = 42;
anything = true;
// any-ს ერიდეთ, თუ შესაძლებელია
\`\`\`

### Union Types - გაერთიანებული ტიპები
\`\`\`typescript
let id: string | number;
id = "ABC123";  // შეიძლება
id = 123;       // ასევე შეიძლება
// id = true;   // შეცდომა!
\`\`\`

## ტიპის ინფერენცია

TypeScript შეუძლია ტიპის ავტომატური დადგენა:

\`\`\`typescript
let name = "ანა";        // string (ავტომატურად)
let age = 25;            // number (ავტომატურად)
let isActive = true;     // boolean (ავტომატურად)
\`\`\`

## ფუნქციების ტიპები

\`\`\`typescript
function greet(name: string): string {
    return \`გამარჯობა, \${name}!\`;
}

// Arrow function
const add = (a: number, b: number): number => {
    return a + b;
};
\`\`\`
        `,
        en: `
# TypeScript Basic Types

TypeScript is a superset of JavaScript that adds static types.

## What is TypeScript?

TypeScript allows you to add types to your JavaScript code, which:
- Reduces errors
- Improves code readability
- Provides better IDE support

## Basic Types

### String - Text
\`\`\`typescript
let firstName: string = "Luke";
let lastName: string = "Partenadze";
let fullName: string = \`\${firstName} \${lastName}\`;
\`\`\`

### Number - Numbers
\`\`\`typescript
let age: number = 20;
let height: number = 1.75;
let temperature: number = -5;
\`\`\`

### Boolean - Logical
\`\`\`typescript
let isStudent: boolean = true;
let isComplete: boolean = false;
\`\`\`

### Array - Arrays
\`\`\`typescript
// Two ways to define arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Anna", "George", "Nina"];
\`\`\`

### Any - Any type
\`\`\`typescript
let anything: any = "text";
anything = 42;
anything = true;
// Avoid any when possible
\`\`\`

### Union Types - Combined types
\`\`\`typescript
let id: string | number;
id = "ABC123";  // allowed
id = 123;       // also allowed
// id = true;   // error!
\`\`\`

## Type Inference

TypeScript can automatically determine types:

\`\`\`typescript
let name = "Anna";       // string (automatically)
let age = 25;            // number (automatically)
let isActive = true;     // boolean (automatically)
\`\`\`

## Function Types

\`\`\`typescript
function greet(name: string): string {
    return \`Hello, \${name}!\`;
}

// Arrow function
const add = (a: number, b: number): number => {
    return a + b;
};
\`\`\`
        `
      },
      codeExample: {
        title: { ka: 'TypeScript ტიპების მაგალითი', en: 'TypeScript Types Example' },
        code: `// TypeScript ტიპების მაგალითი / TypeScript Types Example

// ძირითადი ტიპები / Basic types
let studentName: string = "ლუკა ფართენაძე";
let studentAge: number = 20;
let isEnrolled: boolean = true;
let graduationYear: number = 2025;

// მასივები / Arrays
let subjects: string[] = ["მათემატიკა", "ფიზიკა", "ქიმია"];
let grades: number[] = [95, 87, 92, 78, 88];

// Union ტიპები / Union types
let studentId: string | number = "STU123";
// studentId = 12345; // ასევე შესაძლებელია

// ობიექტის ტიპი / Object type
interface Student {
    name: string;
    age: number;
    isEnrolled: boolean;
    subjects: string[];
    grades: number[];
    id: string | number;
}

// ობიექტის შექმნა / Creating object
const student: Student = {
    name: studentName,
    age: studentAge,
    isEnrolled: isEnrolled,
    subjects: subjects,
    grades: grades,
    id: studentId
};

// ფუნქციები ტიპებით / Functions with types
function calculateAverage(grades: number[]): number {
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return sum / grades.length;
}

function getStudentInfo(student: Student): string {
    const average = calculateAverage(student.grades);
    const status = student.isEnrolled ? "აქტიური" : "არააქტიური";
    
    return \`სტუდენტი: \${student.name}
ასაკი: \${student.age} წელი
სტატუსი: \${status}
საშუალო ქულა: \${average.toFixed(2)}
საგნების რაოდენობა: \${student.subjects.length}\`;
}

// ფუნქციების გამოძახება / Function calls
const averageGrade: number = calculateAverage(grades);
const studentInfo: string = getStudentInfo(student);

console.log(studentInfo);
console.log(\`საშუალო ქულა: \${averageGrade.toFixed(2)}\`);

// Optional პარამეტრები / Optional parameters
function createGreeting(name: string, title?: string): string {
    if (title) {
        return \`გამარჯობა, \${title} \${name}!\`;
    }
    return \`გამარჯობა, \${name}!\`;
}

console.log(createGreeting("ანა"));
console.log(createGreeting("გიორგი", "მისტერ"));`
      },
      exercises: [
        {
          id: 1,
          title: { ka: 'ტიპების პრაქტიკა', en: 'Types Practice' },
          description: { ka: 'შექმენი ცვლადები სხვადასხვა ტიპებით', en: 'Create variables with different types' },
          difficulty: { ka: 'მარტივი', en: 'Easy' },
          starterCode: `// შექმენი ცვლადები TypeScript ტიპებით
// Create variables with TypeScript types

// პირადი ინფორმაცია / Personal information
let myName: string = ""; // შენი სახელი
let myAge: number = 0;   // შენი ასაკი  
let isWorking: boolean = false; // მუშაობ თუ არა

// ჰობები მასივის სახით / Hobbies as array
let hobbies: string[] = []; // დაამატე შენი ჰობები

// კონტაქტი Union ტიპით / Contact with Union type
let contact: string | number = ""; // ტელეფონი ან email

// შეავსე ყველა ცვლადი და დაბეჭდე
// Fill all variables and print
console.log(\`სახელი: \${myName}\`);
// დაამატე დანარჩენი...
`,
          solution: `let myName: string = "ანა";
let myAge: number = 22;
let isWorking: boolean = true;

let hobbies: string[] = ["კითხვა", "სპორტი", "კოდირება"];

let contact: string | number = "anna@example.com";

console.log(\`სახელი: \${myName}\`);
console.log(\`ასაკი: \${myAge} წელი\`);
console.log(\`მუშაობს: \${isWorking ? "კი" : "არა"}\`);
console.log(\`ჰობები: \${hobbies.join(", ")}\`);
console.log(\`კონტაქტი: \${contact}\`);

// ტიპების შემოწმება
console.log(\`\\nტიპები:\`);
console.log(\`myName: \${typeof myName}\`);
console.log(\`myAge: \${typeof myAge}\`);
console.log(\`isWorking: \${typeof isWorking}\`);`,
          hints: [
            { ka: ': ნიშანი ტიპის განსაზღვრისთვის', en: ': symbol for type definition' },
            { ka: 'string[] მასივისთვის string ელემენტებით', en: 'string[] for array with string elements' }
          ]
        },
        {
          id: 2,
          title: { ka: 'ფუნქციები ტიპებით', en: 'Functions with Types' },
          description: { ka: 'შექმენი ფუნქციები TypeScript ტიპებით', en: 'Create functions with TypeScript types' },
          difficulty: { ka: 'მარტივი', en: 'Easy' },
          starterCode: `// ფუნქციები TypeScript ტიპებით
// Functions with TypeScript types

// შექმენი ფუნქცია რომელიც მიღებს სახელს და დააბრუნებს მისალმებას
// Create function that takes name and returns greeting
function greetUser(name: string): string {
    // დაამატე კოდი
}

// შექმენი ფუნქცია ორი რიცხვის შესაკრებად
// Create function to add two numbers
function addNumbers(a: number, b: number): number {
    // დაამატე კოდი
}

// შექმენი ფუნქცია მასივის ელემენტების გასაშუალებლად
// Create function to calculate array average
function calculateAverage(numbers: number[]): number {
    // დაამატე კოდი
}

// გამოძახე ფუნქციები / Call functions
console.log(greetUser("ანა"));
console.log(addNumbers(5, 3));
console.log(calculateAverage([80, 90, 85]));`,
          solution: `function greetUser(name: string): string {
    return \`გამარჯობა, \${name}! კეთილი იყოს შენი მობრძანება!\`;
}

function addNumbers(a: number, b: number): number {
    return a + b;
}

function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// ფუნქციების გამოძახება
console.log(greetUser("ანა"));
console.log(\`5 + 3 = \${addNumbers(5, 3)}\`);
console.log(\`საშუალო: \${calculateAverage([80, 90, 85]).toFixed(2)}\`);

// მეტი ტესტი
const testScores = [95, 87, 92, 78, 88];
console.log(\`ტესტის ქულების საშუალო: \${calculateAverage(testScores).toFixed(1)}\`);`,
          hints: [
            { ka: 'ფუნქციის პარამეტრები და return ტიპი განისაზღვრება', en: 'Function parameters and return type are defined' },
            { ka: 'reduce() მეთოდი მასივის ელემენტების შესაკრებად', en: 'reduce() method to sum array elements' }
          ]
        }
      ]
    },
    {
      id: 2,
      title: {
        ka: 'ინტერფეისები და ობიექტები',
        en: 'Interfaces and Objects'
      },
      description: {
        ka: 'ისწავლე ინტერფეისების და ობიექტების გამოყენება',
        en: 'Learn how to use interfaces and objects'
      },
      duration: 20,
      difficulty: { ka: 'დამწყები', en: 'Beginner' },
      keyPoints: [
        { ka: 'ინტერფეისები ობიექტების ფორმას განსაზღვრავს', en: 'Interfaces define the shape of objects' },
        { ka: 'Optional properties ? ნიშნით', en: 'Optional properties with ? symbol' },
        { ka: 'Readonly properties წაკითხვისთვის მხოლოდ', en: 'Readonly properties for immutability' },
        { ka: 'ინტერფეისები შეიძლება extends გააკეთო', en: 'Interfaces can be extended' }
      ],
      theory: {
        ka: 'Interfaces and Objects theory in Georgian...',
        en: 'Interfaces and Objects theory in English...'
      },
      codeExample: {
        title: { ka: 'ინტერფეისები და ობიექტები', en: 'Interfaces and Objects' },
        code: `// ინტერფეისები და ობიექტები / Interfaces and Objects

// User ინტერფეისი / User interface
interface User {
    id: number;
    name: string;
    email: string;
    age?: number; // optional property
    isActive: boolean;
    readonly createdAt: Date; // readonly property
}

// Address ინტერფეისი / Address interface
interface Address {
    street: string;
    city: string;
    country: string;
    zipCode?: string;
}

// გაფართოებული ინტერფეისი / Extended interface
interface DetailedUser extends User {
    address: Address;
    phoneNumber?: string;
}

// ობიექტების შექმნა / Creating objects
const user1: User = {
    id: 1,
    name: "ანა გელაშვილი",
    email: "ana@example.com",
    age: 25,
    isActive: true,
    createdAt: new Date()
};

const address: Address = {
    street: "რუსთაველის გამზ. 15",
    city: "თბილისი",
    country: "საქართველო"
};

const detailedUser: DetailedUser = {
    id: 2,
    name: "გიორგი მამედოვი",
    email: "giorgi@example.com",
    isActive: true,
    createdAt: new Date(),
    address: address,
    phoneNumber: "+995555123456"
};

// ფუნქციები ინტერფეისებით / Functions with interfaces
function displayUser(user: User): string {
    const ageText = user.age ? \`, ასაკი: \${user.age}\` : "";
    const status = user.isActive ? "აქტიური" : "არააქტიური";
    
    return \`მომხმარებელი: \${user.name}\${ageText}
Email: \${user.email}
სტატუსი: \${status}
შექმნის თარიღი: \${user.createdAt.toLocaleDateString()}\`;
}

function displayDetailedUser(user: DetailedUser): string {
    const basicInfo = displayUser(user);
    const phoneText = user.phoneNumber ? \`\\nტელეფონი: \${user.phoneNumber}\` : "";
    
    return \`\${basicInfo}
მისამართი: \${user.address.street}, \${user.address.city}, \${user.address.country}\${phoneText}\`;
}

// გამოყენება / Usage
console.log(displayUser(user1));
console.log("\\n" + "=".repeat(50) + "\\n");
console.log(displayDetailedUser(detailedUser));`
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
            href="/tutorials/typescript" 
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
          <nav className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-6 flex-wrap">
            <Link href="/tutorials" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-words">
              {language === 'ka' ? 'ტუტორიალები' : 'Tutorials'}
            </Link>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <Link href="/tutorials/typescript" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-words">
              TypeScript
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
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Type className="w-6 h-6 text-white" />
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
                  <Type className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-blue-700 dark:text-blue-300">
                    TypeScript
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
                        .replace(/```typescript/g, '<pre class="language-typescript"><code>')
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
                    href={`/tutorials/typescript/${prevLesson.id}`}
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
                    href={`/tutorials/typescript/${nextLesson.id}`}
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