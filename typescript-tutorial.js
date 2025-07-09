// TypeScript Tutorial Navigation System
let currentTutorial = 'basic_types';
let currentLanguage = localStorage.getItem('language') || 'en';

// TypeScript tutorials
const typescriptTutorials = {
    basic_types: { 
        en: { title: "Basic Types", description: "Learn TypeScript's fundamental type system and static typing benefits." },
        ka: { title: "ძირითადი ტიპები", description: "ისწავლეთ TypeScript-ის ძირითადი ტიპების სისტემა და სტატიკური ტიპიზების უპირატესობები." }
    },
    interfaces_objects: { 
        en: { title: "Interfaces & Objects", description: "Master object typing with interfaces and type definitions." },
        ka: { title: "ინტერფეისები და ობიექტები", description: "დაეუფლეთ ობიექტების ტიპიზებას ინტერფეისებითა და ტიპების განსაზღვრებით." }
    },
    functions_generics: { 
        en: { title: "Functions & Generics", description: "Create flexible, reusable code with function types and generics." },
        ka: { title: "ფუნქციები და გენერიკები", description: "შექმენით მოქნილი, მრავალჯერ გამოსაყენებელი კოდი ფუნქციების ტიპებითა და გენერიკებით." }
    },
    classes_inheritance: { 
        en: { title: "Classes & Inheritance", description: "Build robust object-oriented applications with typed classes." },
        ka: { title: "კლასები და მემკვიდრეობა", description: "ააშენეთ მძლავრი ობიექტზე ორიენტირებული აპლიკაციები ტიპიზებული კლასებით." }
    },
    enums_types: { 
        en: { title: "Enums & Advanced Types", description: "Explore enums, union types, and advanced type features." },
        ka: { title: "Enum-ები და გაღრმავებული ტიპები", description: "შეისწავლეთ enum-ები, გაერთიანებული ტიპები და გაღრმავებული ტიპების ფუნქციები." }
    },
    modules_namespaces: { 
        en: { title: "Modules & Namespaces", description: "Organize code with modules, namespaces, and import/export." },
        ka: { title: "მოდულები და Namespace-ები", description: "მოაწყვეთ კოდი მოდულებით, namespace-ებითა და import/export-ით." }
    },
    async_promises: { 
        en: { title: "Async & Promises", description: "Handle asynchronous operations with Promise types and async/await." },
        ka: { title: "Async და Promise-ები", description: "მართეთ ასინქრონული ოპერაციები Promise ტიპებითა და async/await-ით." }
    },
    utility_types: { 
        en: { title: "Utility Types", description: "Leverage built-in utility types for powerful type transformations." },
        ka: { title: "დამხმარე ტიპები", description: "გამოიყენეთ ჩაშენებული დამხმარე ტიპები ძლიერი ტიპის ტრანსფორმაციებისთვის." }
    },
    testing_debugging: { 
        en: { title: "Testing & Debugging", description: "Test TypeScript code and debug with proper tooling." },
        ka: { title: "ტესტირება და გამართვა", description: "ტესტირება TypeScript კოდისა და გამართვა შესაბამისი ხელსაწყოებით." }
    },
    advanced_patterns: { 
        en: { title: "Advanced Patterns", description: "Master advanced TypeScript patterns and architectural concepts." },
        ka: { title: "გაღრმავებული ნიმუშები", description: "დაეუფლეთ TypeScript-ის გაღრმავებულ ნიმუშებს და არქიტექტურული კონცეფციებს." }
    }
};

// TypeScript tutorial order
const typescriptTutorialOrder = ['basic_types', 'interfaces_objects', 'functions_generics', 'classes_inheritance', 'enums_types', 'modules_namespaces', 'async_promises', 'utility_types', 'testing_debugging', 'advanced_patterns', 'generics', 'modules', 'decorators', 'advanced_types', 'type_guards', 'async_typescript'];

// UI translations
const uiText = {
    en: {
        'nav-home': 'Home',
        'nav-categories': 'Categories',
        'typescript': 'TypeScript',
        'ts-type-safe': 'Type-Safe Development',
        'ts-progress-text': 'comprehensive lessons covering TypeScript from basics to advanced patterns',
        'beginner': 'Beginner',
        'intermediate': 'Intermediate',
        'advanced': 'Advanced'
    },
    ka: {
        'nav-home': 'მთავარი',
        'nav-categories': 'კატეგორიები',
        'typescript': 'TypeScript',
        'ts-type-safe': 'ტიპ-უსაფრთხო განვითარება',
        'ts-progress-text': 'ყოვლისმომცველი გაკვეთილები TypeScript-ის შესწავლისთვის საწყისებიდან გაღრმავებულ ნიმუშებამდე',
        'beginner': 'დამწყები',
        'intermediate': 'საშუალო',
        'advanced': 'გაღრმავებული'
    }
};

// TypeScript tutorial content
const typescriptTutorialContent = {
    basic_types: {
        en: {
            concept: "TypeScript adds static typing to JavaScript, making your code more predictable and easier to debug. Types help catch errors during development instead of runtime, leading to more reliable applications.",
            examples: [
                { title: "Basic Type Annotations", code: '// Primitive types\nlet name: string = "TypeScript";\nlet age: number = 5;\nlet isAwesome: boolean = true;\n\n// Arrays\nlet numbers: number[] = [1, 2, 3];\nlet names: string[] = ["Alice", "Bob"];\n\n// Type inference (TypeScript figures out the type)\nlet message = "Hello"; // TypeScript knows this is string\nlet count = 42; // TypeScript knows this is number', desc: "TypeScript automatically infers types or you can explicitly declare them" },
                { title: "Function Types", code: '// Function with typed parameters and return type\nfunction greet(name: string): string {\n    return `Hello, ${name}!`;\n}\n\n// Arrow function with types\nconst add = (a: number, b: number): number => {\n    return a + b;\n};\n\n// Void return type (no return value)\nfunction logMessage(msg: string): void {\n    console.log(msg);\n}', desc: "Functions can have typed parameters and return types" },
                { title: "Union Types", code: '// Variable can be multiple types\nlet id: string | number;\nid = "abc123"; // Valid\nid = 42; // Also valid\n\n// Function with union parameter\nfunction printId(id: string | number): void {\n    if (typeof id === "string") {\n        console.log("String ID:", id.toUpperCase());\n    } else {\n        console.log("Number ID:", id.toFixed(2));\n    }\n}', desc: "Union types allow variables to be one of several types" }
            ],
            practice: {
                title: "Practice TypeScript Basics",
                tasks: [
                    "Create variables with different type annotations (string, number, boolean)",
                    "Write a function that takes typed parameters and returns a typed value",
                    "Create an array of strings and an array of numbers",
                    "Experiment with union types and type inference"
                ]
            }
        },
        ka: {
            concept: "TypeScript ამატებს სტატიკურ ტიპიზებას JavaScript-ში, რაც გდელის თქვენს კოდს უფრო პროგნოზირებადს და გამართვისთვის ადვილს. ტიპები დახმარებას გწევს შეცდომების დაჭერაში განვითარების დროს, runtime-ის ნაცვლად, რაც იწვევს უფრო საიმედო აპლიკაციებს.",
            examples: [
                { title: "ძირითადი ტიპის ანოტაციები", code: '// პრიმიტიული ტიპები\nlet name: string = "TypeScript";\nlet age: number = 5;\nlet isAwesome: boolean = true;\n\n// მასივები\nlet numbers: number[] = [1, 2, 3];\nlet names: string[] = ["ალისი", "ბობი"];\n\n// ტიპის გამოცნობა (TypeScript თავად განსაზღვრავს ტიპს)\nlet message = "გამარჯობა"; // TypeScript იცის რომ ეს string-ია\nlet count = 42; // TypeScript იცის რომ ეს number-ია', desc: "TypeScript ავტომატურად გამოიცნობს ტიპებს ან შეგიძლიათ ცხადად გამოაცხადოთ ისინი" },
                { title: "ფუნქციის ტიპები", code: '// ფუნქცია ტიპიზებული პარამეტრებითა და დაბრუნების ტიპით\nfunction greet(name: string): string {\n    return `გამარჯობა, ${name}!`;\n}\n\n// ისრიანი ფუნქცია ტიპებით\nconst add = (a: number, b: number): number => {\n    return a + b;\n};\n\n// Void დაბრუნების ტიპი (დაბრუნების მნიშვნელობის გარეშე)\nfunction logMessage(msg: string): void {\n    console.log(msg);\n}', desc: "ფუნქციებს შეუძლიათ ჰქონდეთ ტიპიზებული პარამეტრები და დაბრუნების ტიპები" },
                { title: "გაერთიანებული ტიპები", code: '// ცვლადი შეიძლება იყოს რამდენიმე ტიპის\nlet id: string | number;\nid = "abc123"; // ვალიდურია\nid = 42; // ასევე ვალიდურია\n\n// ფუნქცია გაერთიანებული პარამეტრით\nfunction printId(id: string | number): void {\n    if (typeof id === "string") {\n        console.log("String ID:", id.toUpperCase());\n    } else {\n        console.log("Number ID:", id.toFixed(2));\n    }\n}', desc: "გაერთიანებული ტიპები საშუალებას აძლევს ცვლადებს იყვნენ რამდენიმე ტიპიდან ერთ-ერთი" }
            ],
            practice: {
                title: "ივარჯიშეთ TypeScript საფუძვლებში",
                tasks: [
                    "შექმენით ცვლადები სხვადასხვა ტიპის ანოტაციებით (string, number, boolean)",
                    "დაწერეთ ფუნქცია რომელიც იღებს ტიპიზებულ პარამეტრებს და აბრუნებს ტიპიზებულ მნიშვნელობას",
                    "შექმენით string-ების მასივი და number-ების მასივი",
                    "ექსპერიმენტირებდით გაერთიანებული ტიპებით და ტიპის გამოცნობით"
                ]
            }
        }
    },
    interfaces_objects: {
        en: {
            concept: "Interfaces in TypeScript define the shape of objects, providing a powerful way to type-check object structures. They enable better code organization, autocompletion, and error detection.",
            examples: [
                { title: "Basic Interface", code: '// Define an interface\ninterface User {\n    name: string;\n    age: number;\n    email: string;\n}\n\n// Use the interface\nconst user: User = {\n    name: "Alice",\n    age: 30,\n    email: "alice@example.com"\n};\n\nfunction greetUser(user: User): string {\n    return `Hello, ${user.name}!`;\n}', desc: "Interfaces define the structure of objects" },
                { title: "Optional Properties", code: '// Interface with optional properties\ninterface Product {\n    id: number;\n    name: string;\n    price: number;\n    description?: string; // Optional property\n    category?: string; // Optional property\n}\n\n// Valid objects\nconst product1: Product = {\n    id: 1,\n    name: "Laptop",\n    price: 999\n};\n\nconst product2: Product = {\n    id: 2,\n    name: "Phone",\n    price: 599,\n    description: "Latest smartphone"\n};', desc: "Optional properties use the ? symbol" },
                { title: "Method Signatures", code: '// Interface with methods\ninterface Calculator {\n    add(a: number, b: number): number;\n    subtract(a: number, b: number): number;\n    display(): void;\n}\n\n// Implement the interface\nconst calc: Calculator = {\n    add: (a, b) => a + b,\n    subtract: (a, b) => a - b,\n    display: () => console.log("Calculator ready")\n};', desc: "Interfaces can define method signatures" }
            ],
            practice: {
                title: "Master Interfaces",
                tasks: [
                    "Create a Student interface with name, id, grade, and optional email",
                    "Define a Car interface with required and optional properties",
                    "Create an interface with method signatures and implement it",
                    "Practice using interfaces in function parameters"
                ]
            }
        },
        ka: {
            concept: "ინტერფეისები TypeScript-ში განსაზღვრავს ობიექტების ფორმას, რაც ძლიერ გზას გვაძლევს ობიექტის სტრუქტურების ტიპის შესამოწმებლად. ისინი უზრუნველყოფს უკეთეს კოდის ორგანიზაციას, ავტოდასრულებას და შეცდომების გამოვლენას.",
            examples: [
                { title: "ძირითადი ინტერფეისი", code: '// ინტერფეისის განსაზღვრა\ninterface User {\n    name: string;\n    age: number;\n    email: string;\n}\n\n// ინტერფეისის გამოყენება\nconst user: User = {\n    name: "ალისი",\n    age: 30,\n    email: "alice@example.com"\n};\n\nfunction greetUser(user: User): string {\n    return `გამარჯობა, ${user.name}!`;\n}', desc: "ინტერფეისები განსაზღვრავს ობიექტების სტრუქტურას" },
                { title: "არასავალდებულო თვისებები", code: '// ინტერფეისი არასავალდებულო თვისებებით\ninterface Product {\n    id: number;\n    name: string;\n    price: number;\n    description?: string; // არასავალდებულო თვისება\n    category?: string; // არასავალდებულო თვისება\n}\n\n// ვალიდური ობიექტები\nconst product1: Product = {\n    id: 1,\n    name: "ლეპტოპი",\n    price: 999\n};\n\nconst product2: Product = {\n    id: 2,\n    name: "ტელეფონი",\n    price: 599,\n    description: "უახლესი სმარტფონი"\n};', desc: "არასავალდებულო თვისებები იყენებს ? სიმბოლოს" },
                { title: "მეთოდის ხელმოწერები", code: '// ინტერფეისი მეთოდებით\ninterface Calculator {\n    add(a: number, b: number): number;\n    subtract(a: number, b: number): number;\n    display(): void;\n}\n\n// ინტერფეისის იმპლემენტაცია\nconst calc: Calculator = {\n    add: (a, b) => a + b,\n    subtract: (a, b) => a - b,\n    display: () => console.log("კალკულატორი მზადაა")\n};', desc: "ინტერფეისებს შეუძლიათ განსაზღვრონ მეთოდის ხელმოწერები" }
            ],
            practice: {
                title: "დაეუფლეთ ინტერფეისებს",
                tasks: [
                    "შექმენით Student ინტერფეისი name, id, grade და არასავალდებულო email-ით",
                    "განსაზღვრეთ Car ინტერფეისი სავალდებულო და არასავალდებულო თვისებებით",
                    "შექმენით ინტერფეისი მეთოდის ხელმოწერებით და განახორციელეთ ის",
                    "ივარჯიშეთ ინტერფეისების გამოყენებაში ფუნქციის პარამეტრებში"
                ]
            }
        }
    },
    classes_inheritance: {
        en: {
            concept: "TypeScript classes provide object-oriented programming features with full type support. Classes can have typed properties, methods, constructors, and support inheritance and access modifiers.",
            examples: [
                { title: "Basic Class", code: 'class Person {\n    private name: string;\n    private age: number;\n    \n    constructor(name: string, age: number) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    greet(): string {\n        return `Hi, I\'m ${this.name} and I\'m ${this.age} years old`;\n    }\n    \n    getAge(): number {\n        return this.age;\n    }\n}', desc: "Classes with typed properties and methods" },
                { title: "Inheritance", code: 'class Student extends Person {\n    private studentId: string;\n    \n    constructor(name: string, age: number, studentId: string) {\n        super(name, age);\n        this.studentId = studentId;\n    }\n    \n    study(): string {\n        return `${this.name} is studying`;\n    }\n    \n    getStudentInfo(): string {\n        return `${this.greet()}, Student ID: ${this.studentId}`;\n    }\n}', desc: "Extend classes with inheritance" }
            ],
            practice: {
                title: "Practice Classes",
                tasks: [
                    "Create a Vehicle class with typed properties",
                    "Add methods with proper return types",
                    "Create a Car class that extends Vehicle",
                    "Use access modifiers (private, public, protected)"
                ]
            }
        },
        ka: {
            concept: "TypeScript კლასები უზრუნველყოფს ობიექტზე ორიენტირებული პროგრამირების ფუნქციებს სრული ტიპის მხარდაჭერით. კლასებს შეუძლიათ ჰქონდეთ ტიპიზებული თვისებები, მეთოდები, კონსტრუქტორები და მხარდაჭერა მემკვიდრეობისა და წვდომის მოდიფიკატორების.",
            examples: [
                { title: "ძირითადი კლასი", code: 'class Person {\n    private name: string;\n    private age: number;\n    \n    constructor(name: string, age: number) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    greet(): string {\n        return `გამარჯობა, მე ვარ ${this.name} და ${this.age} წლის ვარ`;\n    }\n    \n    getAge(): number {\n        return this.age;\n    }\n}', desc: "კლასები ტიპიზებული თვისებებით და მეთოდებით" },
                { title: "მემკვიდრეობა", code: 'class Student extends Person {\n    private studentId: string;\n    \n    constructor(name: string, age: number, studentId: string) {\n        super(name, age);\n        this.studentId = studentId;\n    }\n    \n    study(): string {\n        return `${this.name} სწავლობს`;\n    }\n    \n    getStudentInfo(): string {\n        return `${this.greet()}, სტუდენტის ID: ${this.studentId}`;\n    }\n}', desc: "კლასების გაფართოება მემკვიდრეობით" }
            ],
            practice: {
                title: "ივარჯიშეთ კლასებში",
                tasks: [
                    "შექმენით Vehicle კლასი ტიპიზებული თვისებებით",
                    "დაამატეთ მეთოდები სწორი დაბრუნების ტიპებით",
                    "შექმენით Car კლასი რომელიც აფართოებს Vehicle-ს",
                    "გამოიყენეთ წვდომის მოდიფიკატორები (private, public, protected)"
                ]
            }
        }
    },
    functions_generics: {
        en: {
            concept: "Functions and generics in TypeScript enable type-safe, reusable code. Generics allow you to create components that work with multiple types while maintaining type safety.",
            examples: [
                { title: "Function Types", code: '// Function type annotations\ntype GreetFunction = (name: string) => string;\n\nconst greet: GreetFunction = (name) => {\n    return `Hello, ${name}!`;\n};\n\n// Optional parameters\nfunction createUser(name: string, age?: number): object {\n    return age ? { name, age } : { name };\n}', desc: "Define function types and optional parameters" },
                { title: "Generic Functions", code: 'function identity<T>(arg: T): T {\n    return arg;\n}\n\n// Usage with different types\nlet stringResult = identity<string>("hello");\nlet numberResult = identity<number>(42);\nlet boolResult = identity(true); // Type inference\n\nconsole.log(stringResult); // "hello"\nconsole.log(numberResult); // 42', desc: "Generic functions work with any type" }
            ],
            practice: {
                title: "Practice Functions & Generics",
                tasks: [
                    "Create typed function signatures for common operations",
                    "Build generic functions that work with arrays",
                    "Practice with optional and default parameters",
                    "Create generic interfaces for reusable patterns"
                ]
            }
        },
        ka: {
            concept: "ფუნქციები და generics TypeScript-ში უზრუნველყოფს ტიპ-უსაფრთხო, მრავალჯერ გამოსაყენებელ კოდს. Generics საშუალებას გაძლევთ შექმნათ კომპონენტები რომლებიც მუშაობენ რამდენიმე ტიპთან ტიპის უსაფრთხოების შენარჩუნებით.",
            examples: [
                { title: "ფუნქციის ტიპები", code: '// ფუნქციის ტიპის ანოტაციები\ntype GreetFunction = (name: string) => string;\n\nconst greet: GreetFunction = (name) => {\n    return `გამარჯობა, ${name}!`;\n};\n\n// არასავალდებულო პარამეტრები\nfunction createUser(name: string, age?: number): object {\n    return age ? { name, age } : { name };\n}', desc: "განსაზღვრეთ ფუნქციის ტიპები და არასავალდებულო პარამეტრები" },
                { title: "Generic ფუნქციები", code: 'function identity<T>(arg: T): T {\n    return arg;\n}\n\n// გამოყენება სხვადასხვა ტიპებით\nlet stringResult = identity<string>("გამარჯობა");\nlet numberResult = identity<number>(42);\nlet boolResult = identity(true); // ტიპის გამოცნობა\n\nconsole.log(stringResult); // "გამარჯობა"\nconsole.log(numberResult); // 42', desc: "Generic ფუნქციები მუშაობენ ნებისმიერ ტიპთან" }
            ],
            practice: {
                title: "ივარჯიშეთ ფუნქციებსა და Generics-ებში",
                tasks: [
                    "შექმენით ტიპიზებული ფუნქციის ხელმოწერები ჩვეულებრივი ოპერაციებისთვის",
                    "ააშენეთ generic ფუნქციები რომლებიც მუშაობენ მასივებთან",
                    "ივარჯიშეთ არასავალდებულო და ნაგულისხმევ პარამეტრებით",
                    "შექმენით generic ინტერფეისები მრავალჯერ გამოსაყენებელი ნიმუშებისთვის"
                ]
            }
        }
    },
    enums_types: {
        en: {
            concept: "Enums and advanced types provide powerful ways to model data and create type-safe applications. Learn about enums, union types, literal types, and utility types.",
            examples: [
                { title: "Enums", code: 'enum Status {\n    Pending = "PENDING",\n    Success = "SUCCESS",\n    Error = "ERROR"\n}\n\nfunction handleRequest(status: Status): string {\n    switch (status) {\n        case Status.Pending:\n            return "Processing...";\n        case Status.Success:\n            return "Completed!";\n        case Status.Error:\n            return "Failed!";\n    }\n}', desc: "Use enums for defined sets of values" },
                { title: "Union & Literal Types", code: '// Union types\ntype Theme = "light" | "dark";\ntype Size = "small" | "medium" | "large";\n\n// Literal types in interfaces\ninterface Button {\n    text: string;\n    size: Size;\n    variant: "primary" | "secondary";\n}\n\nconst button: Button = {\n    text: "Click me",\n    size: "medium",\n    variant: "primary"\n};', desc: "Combine types for precise type definitions" }
            ],
            practice: {
                title: "Practice Enums & Types",
                tasks: [
                    "Create enums for user roles and permissions",
                    "Build union types for form input types",
                    "Use literal types in component props",
                    "Practice with discriminated unions"
                ]
            }
        },
        ka: {
            concept: "Enums და გაღრმავებული ტიპები უზრუნველყოფს ძლიერ გზებს მონაცემების მოდელირებისა და ტიპ-უსაფრთხო აპლიკაციების შესაქმნელად. ისწავლეთ enums, union ტიპები, ლიტერალური ტიპები და დამხმარე ტიპები.",
            examples: [
                { title: "Enums", code: 'enum Status {\n    Pending = "PENDING",\n    Success = "SUCCESS",\n    Error = "ERROR"\n}\n\nfunction handleRequest(status: Status): string {\n    switch (status) {\n        case Status.Pending:\n            return "მუშავდება...";\n        case Status.Success:\n            return "დასრულდა!";\n        case Status.Error:\n            return "ვერ მოხერხდა!";\n    }\n}', desc: "გამოიყენეთ enums განსაზღვრული მნიშვნელობების ნაკრებებისთვის" },
                { title: "Union და ლიტერალური ტიპები", code: '// Union ტიპები\ntype Theme = "light" | "dark";\ntype Size = "small" | "medium" | "large";\n\n// ლიტერალური ტიპები ინტერფეისებში\ninterface Button {\n    text: string;\n    size: Size;\n    variant: "primary" | "secondary";\n}\n\nconst button: Button = {\n    text: "დამაკლიკე",\n    size: "medium",\n    variant: "primary"\n};', desc: "გააერთიანეთ ტიპები ზუსტი ტიპის განსაზღვრებისთვის" }
            ],
            practice: {
                title: "ივარჯიშეთ Enums და ტიპებში",
                tasks: [
                    "შექმენით enums მომხმარებლის როლებისა და ნებართვებისთვის",
                    "ააშენეთ union ტიპები ფორმის შეყვანის ტიპებისთვის",
                    "გამოიყენეთ ლიტერალური ტიპები კომპონენტის props-ებში",
                    "ივარჯიშეთ დისკრიმინირებული union-ებით"
                ]
            }
        }
    },
    modules_namespaces: {
        en: {
            concept: "Modules and namespaces help organize TypeScript code across files. Learn about ES6 modules, import/export, namespaces, and module resolution.",
            examples: [
                { title: "ES6 Modules", code: '// math.ts\nexport interface Calculator {\n    add(a: number, b: number): number;\n}\n\nexport class BasicCalculator implements Calculator {\n    add(a: number, b: number): number {\n        return a + b;\n    }\n}\n\nexport const PI = 3.14159;\n\n// app.ts\nimport { BasicCalculator, PI } from "./math";\n\nconst calc = new BasicCalculator();\nconsole.log(calc.add(2, 3)); // 5', desc: "Export and import types and implementations" },
                { title: "Namespaces", code: '// geometry.ts\nnamespace Geometry {\n    export interface Point {\n        x: number;\n        y: number;\n    }\n    \n    export class Circle {\n        constructor(public center: Point, public radius: number) {}\n        \n        area(): number {\n            return Math.PI * this.radius * this.radius;\n        }\n    }\n}\n\n// Usage\nconst point: Geometry.Point = { x: 0, y: 0 };\nconst circle = new Geometry.Circle(point, 5);', desc: "Organize related functionality with namespaces" }
            ],
            practice: {
                title: "Practice Modules",
                tasks: [
                    "Create separate modules for different functionalities",
                    "Practice default and named exports",
                    "Organize code with namespaces",
                    "Set up proper module resolution"
                ]
            }
        },
        ka: {
            concept: "მოდულები და namespace-ები დახმარებას გწევენ TypeScript კოდის ორგანიზაციაში ფაილებს შორის. ისწავლეთ ES6 მოდულები, import/export, namespace-ები და მოდულის რეზოლუცია.",
            examples: [
                { title: "ES6 მოდულები", code: '// math.ts\nexport interface Calculator {\n    add(a: number, b: number): number;\n}\n\nexport class BasicCalculator implements Calculator {\n    add(a: number, b: number): number {\n        return a + b;\n    }\n}\n\nexport const PI = 3.14159;\n\n// app.ts\nimport { BasicCalculator, PI } from "./math";\n\nconst calc = new BasicCalculator();\nconsole.log(calc.add(2, 3)); // 5', desc: "Export და import ტიპები და იმპლემენტაციები" },
                { title: "Namespace-ები", code: '// geometry.ts\nnamespace Geometry {\n    export interface Point {\n        x: number;\n        y: number;\n    }\n    \n    export class Circle {\n        constructor(public center: Point, public radius: number) {}\n        \n        area(): number {\n            return Math.PI * this.radius * this.radius;\n        }\n    }\n}\n\n// გამოყენება\nconst point: Geometry.Point = { x: 0, y: 0 };\nconst circle = new Geometry.Circle(point, 5);', desc: "მოაწყვეთ დაკავშირებული ფუნქციონალობა namespace-ებით" }
            ],
            practice: {
                title: "ივარჯიშეთ მოდულებში",
                tasks: [
                    "შექმენით ცალკე მოდულები სხვადასხვა ფუნქციონალობებისთვის",
                    "ივარჯიშეთ default და named exports",
                    "მოაწყვეთ კოდი namespace-ებით",
                    "დააყენეთ სწორი მოდულის რეზოლუცია"
                ]
            }
        }
    },
    async_promises: {
        en: {
            concept: "TypeScript provides excellent support for asynchronous programming with typed Promises, async/await, and proper error handling for async operations.",
            examples: [
                { title: "Typed Promises", code: '// Promise with type\nfunction fetchUser(id: number): Promise<{ id: number; name: string }> {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            if (id > 0) {\n                resolve({ id, name: "Alice" });\n            } else {\n                reject(new Error("Invalid ID"));\n            }\n        }, 1000);\n    });\n}\n\n// Using the promise\nfetchUser(1)\n    .then(user => console.log(user.name))\n    .catch(error => console.error(error.message));', desc: "Type-safe promises with proper error handling" },
                { title: "Async/Await", code: 'async function getUserData(id: number): Promise<string> {\n    try {\n        const user = await fetchUser(id);\n        const profile = `User: ${user.name} (ID: ${user.id})`;\n        return profile;\n    } catch (error) {\n        if (error instanceof Error) {\n            throw new Error(`Failed: ${error.message}`);\n        }\n        throw error;\n    }\n}\n\n// Usage\ngetUserData(1)\n    .then(profile => console.log(profile))\n    .catch(err => console.error(err));', desc: "Clean async code with proper typing" }
            ],
            practice: {
                title: "Practice Async TypeScript",
                tasks: [
                    "Create typed Promise functions for API calls",
                    "Build async functions with proper error handling",
                    "Practice with Promise.all() and typed results",
                    "Handle different error types in async functions"
                ]
            }
        },
        ka: {
            concept: "TypeScript უზრუნველყოფს შესანიშნავ მხარდაჭერას ასინქრონული პროგრამირებისთვის ტიპიზებული Promise-ებით, async/await-ით და სწორი შეცდომების დამუშავებით ასინქრონული ოპერაციებისთვის.",
            examples: [
                { title: "ტიპიზებული Promise-ები", code: '// Promise ტიპით\nfunction fetchUser(id: number): Promise<{ id: number; name: string }> {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            if (id > 0) {\n                resolve({ id, name: "ალისი" });\n            } else {\n                reject(new Error("არასწორი ID"));\n            }\n        }, 1000);\n    });\n}\n\n// Promise-ის გამოყენება\nfetchUser(1)\n    .then(user => console.log(user.name))\n    .catch(error => console.error(error.message));', desc: "ტიპ-უსაფრთხო promise-ები სწორი შეცდომების დამუშავებით" },
                { title: "Async/Await", code: 'async function getUserData(id: number): Promise<string> {\n    try {\n        const user = await fetchUser(id);\n        const profile = `მომხმარებელი: ${user.name} (ID: ${user.id})`;\n        return profile;\n    } catch (error) {\n        if (error instanceof Error) {\n            throw new Error(`ვერ მოხერხდა: ${error.message}`);\n        }\n        throw error;\n    }\n}\n\n// გამოყენება\ngetUserData(1)\n    .then(profile => console.log(profile))\n    .catch(err => console.error(err));', desc: "სუფთა async კოდი სწორი ტიპიზებით" }
            ],
            practice: {
                title: "ივარჯიშეთ Async TypeScript-ში",
                tasks: [
                    "შექმენით ტიპიზებული Promise ფუნქციები API გამოძახებებისთვის",
                    "ააშენეთ async ფუნქციები სწორი შეცდომების დამუშავებით",
                    "ივარჯიშეთ Promise.all()-ით და ტიპიზებული შედეგებით",
                    "მართეთ სხვადასხვა შეცდომის ტიპები async ფუნქციებში"
                ]
            }
        }
    },
    utility_types: {
        en: {
            concept: "TypeScript's built-in utility types provide powerful ways to transform and manipulate types, making your code more flexible and reusable.",
            examples: [
                { title: "Common Utility Types", code: '// Base interface\ninterface User {\n    id: number;\n    name: string;\n    email: string;\n    isActive: boolean;\n}\n\n// Utility types\ntype PartialUser = Partial<User>;     // All properties optional\ntype UserEmail = Pick<User, "email">; // Select specific properties\ntype CreateUser = Omit<User, "id">;   // Exclude specific properties\ntype UserRecord = Record<string, User>; // Key-value mapping', desc: "Transform existing types with utility types" },
                { title: "Advanced Utilities", code: '// Conditional types\ntype NonNullable<T> = T extends null | undefined ? never : T;\n\n// Mapped types\ntype Readonly<T> = {\n    readonly [P in keyof T]: T[P];\n};\n\n// Template literal types\ntype EventName<T extends string> = `on${Capitalize<T>}`;\ntype ClickEvent = EventName<"click">; // "onClick"', desc: "Create custom utility types" }
            ],
            practice: {
                title: "Practice Utility Types",
                tasks: [
                    "Use Partial, Pick, Omit in real scenarios",
                    "Create mapped types for transformations",
                    "Build conditional types for type logic",
                    "Combine multiple utility types effectively"
                ]
            }
        },
        ka: {
            concept: "TypeScript-ის ჩაშენებული დამხმარე ტიპები უზრუნველყოფს ძლიერ გზებს ტიპების გარდაქმნისა და მანიპულირებისთვის, რაც ხდის თქვენს კოდს უფრო მოქნილს და მრავალჯერ გამოსაყენებელს.",
            examples: [
                { title: "ჩვეულებრივი დამხმარე ტიპები", code: '// ძირითადი ინტერფეისი\ninterface User {\n    id: number;\n    name: string;\n    email: string;\n    isActive: boolean;\n}\n\n// დამხმარე ტიპები\ntype PartialUser = Partial<User>;     // ყველა თვისება არასავალდებულო\ntype UserEmail = Pick<User, "email">; // კონკრეტული თვისებების არჩევა\ntype CreateUser = Omit<User, "id">;   // კონკრეტული თვისებების გამორიცხვა\ntype UserRecord = Record<string, User>; // გასაღები-მნიშვნელობის მოხაზვა', desc: "გარდაქმენით არსებული ტიპები დამხმარე ტიპებით" },
                { title: "გაღრმავებული დამხმარეები", code: '// პირობითი ტიპები\ntype NonNullable<T> = T extends null | undefined ? never : T;\n\n// მოხაზული ტიპები\ntype Readonly<T> = {\n    readonly [P in keyof T]: T[P];\n};\n\n// Template literal ტიპები\ntype EventName<T extends string> = `on${Capitalize<T>}`;\ntype ClickEvent = EventName<"click">; // "onClick"', desc: "შექმენით მორგებული დამხმარე ტიპები" }
            ],
            practice: {
                title: "ივარჯიშეთ დამხმარე ტიპებში",
                tasks: [
                    "გამოიყენეთ Partial, Pick, Omit რეალურ სცენარებში",
                    "შექმენით მოხაზული ტიპები გარდაქმნებისთვის",
                    "ააშენეთ პირობითი ტიპები ტიპის ლოგიკისთვის",
                    "გააერთიანეთ რამდენიმე დამხმარე ტიპი ეფექტურად"
                ]
            }
        }
    },
    testing_debugging: {
        en: {
            concept: "Learn to test TypeScript code effectively and debug with proper tooling. Understand type checking, unit testing, and debugging techniques.",
            examples: [
                { title: "Type Testing", code: '// Type assertions for testing\nfunction expectType<T>(value: T): T {\n    return value;\n}\n\n// Testing type inference\nconst result = addNumbers(2, 3);\nexpectType<number>(result); // Ensures result is number\n\n// Compile-time type checking\ntype AssertEqual<T, U> = T extends U ? U extends T ? true : false : false;\ntype Test = AssertEqual<string, string>; // true', desc: "Test types at compile time" },
                { title: "Unit Testing", code: '// Jest with TypeScript\nimport { sum, User } from "./math";\n\ndescribe("Math functions", () => {\n    test("sum adds numbers correctly", () => {\n        expect(sum(2, 3)).toBe(5);\n        expect(sum(-1, 1)).toBe(0);\n    });\n    \n    test("user object has correct types", () => {\n        const user: User = { id: 1, name: "Test" };\n        expect(typeof user.id).toBe("number");\n        expect(typeof user.name).toBe("string");\n    });\n});', desc: "Unit testing with proper type checking" }
            ],
            practice: {
                title: "Practice Testing & Debugging",
                tasks: [
                    "Set up Jest with TypeScript for unit testing",
                    "Write type-safe tests for your functions",
                    "Use TypeScript compiler for type checking",
                    "Debug TypeScript code with source maps"
                ]
            }
        },
        ka: {
            concept: "ისწავლეთ TypeScript კოდის ეფექტური ტესტირება და გამართვა შესაბამისი ხელსაწყოებით. გაიგეთ ტიპის შემოწმება, unit ტესტირება და გამართვის ტექნიკები.",
            examples: [
                { title: "ტიპის ტესტირება", code: '// ტიპის ასერციები ტესტირებისთვის\nfunction expectType<T>(value: T): T {\n    return value;\n}\n\n// ტიპის გამოცნობის ტესტირება\nconst result = addNumbers(2, 3);\nexpectType<number>(result); // უზრუნველყოფს რომ result არის number\n\n// კომპაილ-ტაიმ ტიპის შემოწმება\ntype AssertEqual<T, U> = T extends U ? U extends T ? true : false : false;\ntype Test = AssertEqual<string, string>; // true', desc: "ტესტირება ტიპების კომპაილის დროს" },
                { title: "Unit ტესტირება", code: '// Jest TypeScript-ით\nimport { sum, User } from "./math";\n\ndescribe("მათემატიკური ფუნქციები", () => {\n    test("sum სწორად ამატებს რიცხვებს", () => {\n        expect(sum(2, 3)).toBe(5);\n        expect(sum(-1, 1)).toBe(0);\n    });\n    \n    test("user ობიექტს აქვს სწორი ტიპები", () => {\n        const user: User = { id: 1, name: "ტესტი" };\n        expect(typeof user.id).toBe("number");\n        expect(typeof user.name).toBe("string");\n    });\n});', desc: "Unit ტესტირება სწორი ტიპის შემოწმებით" }
            ],
            practice: {
                title: "ივარჯიშეთ ტესტირებასა და გამართვაში",
                tasks: [
                    "დააყენეთ Jest TypeScript-ით unit ტესტირებისთვის",
                    "დაწერეთ ტიპ-უსაფრთხო ტესტები თქვენი ფუნქციებისთვის",
                    "გამოიყენეთ TypeScript კომპაილერი ტიპის შემოწმებისთვის",
                    "გამართეთ TypeScript კოდი source maps-ებით"
                ]
            }
        }
    },
    advanced_patterns: {
        en: {
            concept: "Master advanced TypeScript patterns including decorators, mixins, builder patterns, and architectural concepts for large-scale applications.",
            examples: [
                { title: "Decorators", code: '// Class decorator\nfunction Entity(tableName: string) {\n    return function <T extends new(...args: any[]) => {}>(constructor: T) {\n        return class extends constructor {\n            tableName = tableName;\n        };\n    };\n}\n\n@Entity("users")\nclass User {\n    constructor(public name: string) {}\n}\n\nconst user = new User("Alice");\nconsole.log((user as any).tableName); // "users"', desc: "Use decorators for metadata and behavior modification" },
                { title: "Advanced Patterns", code: '// Builder pattern with types\nclass QueryBuilder<T> {\n    private conditions: string[] = [];\n    \n    where(condition: keyof T, value: any): this {\n        this.conditions.push(`${String(condition)} = ${value}`);\n        return this;\n    }\n    \n    build(): string {\n        return `SELECT * WHERE ${this.conditions.join(" AND ")}`;\n    }\n}\n\ninterface User { id: number; name: string; }\nconst query = new QueryBuilder<User>()\n    .where("id", 1)\n    .where("name", "Alice")\n    .build();', desc: "Type-safe builder patterns" }
            ],
            practice: {
                title: "Practice Advanced Patterns",
                tasks: [
                    "Implement decorator patterns for logging and validation",
                    "Create type-safe builder patterns",
                    "Build mixins with proper typing",
                    "Design scalable application architectures with TypeScript"
                ]
            }
        },
        ka: {
            concept: "დაეუფლეთ TypeScript-ის გაღრმავებულ ნიმუშებს მათ შორის დეკორატორები, mixins, builder ნიმუშები და არქიტექტურული კონცეფციები დიდი მასშტაბის აპლიკაციებისთვის.",
            examples: [
                { title: "დეკორატორები", code: '// კლასის დეკორატორი\nfunction Entity(tableName: string) {\n    return function <T extends new(...args: any[]) => {}>(constructor: T) {\n        return class extends constructor {\n            tableName = tableName;\n        };\n    };\n}\n\n@Entity("users")\nclass User {\n    constructor(public name: string) {}\n}\n\nconst user = new User("ალისი");\nconsole.log((user as any).tableName); // "users"', desc: "გამოიყენეთ დეკორატორები მეტამონაცემებისა და ქცევის შეცვლისთვის" },
                { title: "გაღრმავებული ნიმუშები", code: '// Builder ნიმუში ტიპებით\nclass QueryBuilder<T> {\n    private conditions: string[] = [];\n    \n    where(condition: keyof T, value: any): this {\n        this.conditions.push(`${String(condition)} = ${value}`);\n        return this;\n    }\n    \n    build(): string {\n        return `SELECT * WHERE ${this.conditions.join(" AND ")}`;\n    }\n}\n\ninterface User { id: number; name: string; }\nconst query = new QueryBuilder<User>()\n    .where("id", 1)\n    .where("name", "ალისი")\n    .build();', desc: "ტიპ-უსაფრთხო builder ნიმუშები" }
            ],
            practice: {
                title: "ივარჯიშეთ გაღრმავებულ ნიმუშებში",
                tasks: [
                    "განახორციელეთ დეკორატორის ნიმუშები ლოგირებისა და ვალიდაციისთვის",
                    "შექმენით ტიპ-უსაფრთხო builder ნიმუშები",
                    "ააშენეთ mixins სწორი ტიპიზებით",
                    "დაპროექტეთ მასშტაბირებადი აპლიკაციის არქიტექტურები TypeScript-ით"
                ]
            }
        }
    },
    generics: {
        en: {
            concept: "Generics allow you to create reusable components that work with multiple types while maintaining type safety. They're like variables for types, making your code more flexible and type-safe.",
            examples: [
                { title: "Generic Functions", code: 'function identity<T>(arg: T): T {\n    return arg;\n}\n\n// Usage with different types\nlet stringResult = identity<string>("hello");\nlet numberResult = identity<number>(42);\nlet boolResult = identity(true); // Type inference\n\nconsole.log(stringResult); // "hello"\nconsole.log(numberResult); // 42', desc: "Generic functions work with any type" },
                { title: "Generic Interfaces", code: 'interface Container<T> {\n    value: T;\n    getValue(): T;\n    setValue(value: T): void;\n}\n\nclass StringContainer implements Container<string> {\n    constructor(public value: string) {}\n    \n    getValue(): string {\n        return this.value;\n    }\n    \n    setValue(value: string): void {\n        this.value = value;\n    }\n}', desc: "Interfaces can use generics for flexibility" }
            ],
            practice: {
                title: "Practice Generics",
                tasks: [
                    "Create a generic function that returns the first element of any array",
                    "Build a generic Stack class with push and pop methods",
                    "Create a generic interface for a key-value pair",
                    "Practice generic constraints with extends keyword"
                ]
            }
        },
        ka: {
            concept: "Generics საშუალებას გაძლევთ შექმნათ მრავალჯერ გამოსაყენებელი კომპონენტები რომლებიც მუშაობენ რამდენიმე ტიპთან ტიპის უსაფრთხოების შენარჩუნებით. ისინი ტიპებისთვის ცვლადების მსგავსია, რაც ხდის თქვენს კოდს უფრო მოქნილს და ტიპ-უსაფრთხოს.",
            examples: [
                { title: "Generic ფუნქციები", code: 'function identity<T>(arg: T): T {\n    return arg;\n}\n\n// გამოყენება სხვადასხვა ტიპებით\nlet stringResult = identity<string>("გამარჯობა");\nlet numberResult = identity<number>(42);\nlet boolResult = identity(true); // ტიპის გამოცნობა\n\nconsole.log(stringResult); // "გამარჯობა"\nconsole.log(numberResult); // 42', desc: "Generic ფუნქციები მუშაობენ ნებისმიერ ტიპთან" },
                { title: "Generic ინტერფეისები", code: 'interface Container<T> {\n    value: T;\n    getValue(): T;\n    setValue(value: T): void;\n}\n\nclass StringContainer implements Container<string> {\n    constructor(public value: string) {}\n    \n    getValue(): string {\n        return this.value;\n    }\n    \n    setValue(value: string): void {\n        this.value = value;\n    }\n}', desc: "ინტერფეისებს შეუძლიათ გამოიყენონ generics მოქნილობისთვის" }
            ],
            practice: {
                title: "ივარჯიშეთ Generics-ებში",
                tasks: [
                    "შექმენით generic ფუნქცია რომელიც აბრუნებს ნებისმიერი მასივის პირველ ელემენტს",
                    "ააშენეთ generic Stack კლასი push და pop მეთოდებით",
                    "შექმენით generic ინტერფეისი key-value წყვილისთვის",
                    "ივარჯიშეთ generic შეზღუდვებში extends ქივორდით"
                ]
            }
        }
    },
    modules: {
        en: {
            concept: "TypeScript modules help organize code into separate files with full type checking. You can export and import types, interfaces, classes, and functions across files.",
            examples: [
                { title: "Exporting Types", code: '// types.ts\nexport interface User {\n    id: number;\n    name: string;\n    email: string;\n}\n\nexport type Status = "active" | "inactive" | "pending";\n\nexport class UserService {\n    getUser(id: number): User | null {\n        // Implementation\n        return null;\n    }\n}', desc: "Export interfaces, types, and classes" },
                { title: "Importing Types", code: '// app.ts\nimport { User, Status, UserService } from "./types";\n\nconst userService = new UserService();\n\nfunction processUser(user: User, status: Status): void {\n    console.log(`Processing ${user.name} with status ${status}`);\n}\n\nconst user: User = {\n    id: 1,\n    name: "Alice",\n    email: "alice@example.com"\n};', desc: "Import and use types from other modules" }
            ],
            practice: {
                title: "Practice Modules",
                tasks: [
                    "Create a types file with interfaces and export them",
                    "Create utility functions in a separate module",
                    "Practice importing specific types vs entire modules",
                    "Organize a project with multiple TypeScript files"
                ]
            }
        },
        ka: {
            concept: "TypeScript მოდულები დახმარებას გწევს კოდის ორგანიზაციაში ცალკე ფაილებში სრული ტიპის შემოწმებით. შეგიძლიათ export და import გააკეთოთ ტიპებზე, ინტერფეისებზე, კლასებსა და ფუნქციებზე ფაილებს შორის.",
            examples: [
                { title: "ტიპების Export", code: '// types.ts\nexport interface User {\n    id: number;\n    name: string;\n    email: string;\n}\n\nexport type Status = "active" | "inactive" | "pending";\n\nexport class UserService {\n    getUser(id: number): User | null {\n        // იმპლემენტაცია\n        return null;\n    }\n}', desc: "Export ინტერფეისები, ტიპები და კლასები" },
                { title: "ტიპების Import", code: '// app.ts\nimport { User, Status, UserService } from "./types";\n\nconst userService = new UserService();\n\nfunction processUser(user: User, status: Status): void {\n    console.log(`მუშავდება ${user.name} სტატუსით ${status}`);\n}\n\nconst user: User = {\n    id: 1,\n    name: "ალისი",\n    email: "alice@example.com"\n};', desc: "Import და გამოიყენეთ ტიპები სხვა მოდულებიდან" }
            ],
            practice: {
                title: "ივარჯიშეთ მოდულებში",
                tasks: [
                    "შექმენით types ფაილი ინტერფეისებით და export გააკეთეთ ისინი",
                    "შექმენით დამხმარე ფუნქციები ცალკე მოდულში",
                    "ივარჯიშეთ კონკრეტული ტიპების import vs მთელი მოდულების",
                    "მოაწყვეთ პროექტი რამდენიმე TypeScript ფაილით"
                ]
            }
        }
    },
    decorators: {
        en: {
            concept: "Decorators are a special kind of declaration that can be attached to classes, methods, properties, or parameters. They provide a way to add metadata and modify behavior at design time.",
            examples: [
                { title: "Class Decorator", code: '// Class decorator\nfunction logged(constructor: Function) {\n    console.log(`Creating instance of ${constructor.name}`);\n}\n\n@logged\nclass User {\n    constructor(public name: string) {}\n}\n\nconst user = new User("Alice"); // Logs: Creating instance of User', desc: "Decorators can modify class behavior" },
                { title: "Method Decorator", code: '// Method decorator\nfunction measure(target: any, key: string, descriptor: PropertyDescriptor) {\n    const originalMethod = descriptor.value;\n    \n    descriptor.value = function (...args: any[]) {\n        const start = Date.now();\n        const result = originalMethod.apply(this, args);\n        const end = Date.now();\n        console.log(`${key} took ${end - start}ms`);\n        return result;\n    };\n}\n\nclass Calculator {\n    @measure\n    add(a: number, b: number): number {\n        return a + b;\n    }\n}', desc: "Method decorators can add functionality" }
            ],
            practice: {
                title: "Practice Decorators",
                tasks: [
                    "Create a class decorator that logs when instances are created",
                    "Build a method decorator that validates parameters",
                    "Create a property decorator that adds metadata",
                    "Practice combining multiple decorators"
                ]
            }
        },
        ka: {
            concept: "დეკორატორები არის განცხადების სპეციალური სახეობა რომელიც შეიძლება მიმაგრდეს კლასებს, მეთოდებს, თვისებებს ან პარამეტრებს. ისინი უზრუნველყოფს მეტამონაცემების დამატებისა და ქცევის შეცვლის გზას დიზაინის დროს.",
            examples: [
                { title: "კლასის დეკორატორი", code: '// კლასის დეკორატორი\nfunction logged(constructor: Function) {\n    console.log(`იქმნება ინსტანცია ${constructor.name}-ის`);\n}\n\n@logged\nclass User {\n    constructor(public name: string) {}\n}\n\nconst user = new User("ალისი"); // ლოგავს: იქმნება ინსტანცია User-ის', desc: "დეკორატორებს შეუძლიათ შეცვალონ კლასის ქცევა" },
                { title: "მეთოდის დეკორატორი", code: '// მეთოდის დეკორატორი\nfunction measure(target: any, key: string, descriptor: PropertyDescriptor) {\n    const originalMethod = descriptor.value;\n    \n    descriptor.value = function (...args: any[]) {\n        const start = Date.now();\n        const result = originalMethod.apply(this, args);\n        const end = Date.now();\n        console.log(`${key} გაგრძელდა ${end - start}მს`);\n        return result;\n    };\n}\n\nclass Calculator {\n    @measure\n    add(a: number, b: number): number {\n        return a + b;\n    }\n}', desc: "მეთოდის დეკორატორებს შეუძლიათ დაამატონ ფუნქციონალობა" }
            ],
            practice: {
                title: "ივარჯიშეთ დეკორატორებში",
                tasks: [
                    "შექმენით კლასის დეკორატორი რომელიც ლოგავს როცა ინსტანციები იქმნება",
                    "ააშენეთ მეთოდის დეკორატორი რომელიც ვალიდაციას უკეთებს პარამეტრებს",
                    "შექმენით თვისების დეკორატორი რომელიც ამატებს მეტამონაცემებს",
                    "ივარჯიშეთ რამდენიმე დეკორატორის გაერთიანებაში"
                ]
            }
        }
    },
    advanced_types: {
        en: {
            concept: "TypeScript provides advanced type features like conditional types, mapped types, template literal types, and utility types that help create complex and precise type definitions.",
            examples: [
                { title: "Utility Types", code: '// Built-in utility types\ninterface User {\n    id: number;\n    name: string;\n    email: string;\n    age: number;\n}\n\n// Partial - makes all properties optional\ntype PartialUser = Partial<User>;\n\n// Pick - select specific properties\ntype UserSummary = Pick<User, "id" | "name">;\n\n// Omit - exclude specific properties\ntype CreateUser = Omit<User, "id">;\n\n// Record - create object type with specific keys\ntype UserRoles = Record<string, "admin" | "user" | "guest">;', desc: "Utility types help transform existing types" },
                { title: "Conditional Types", code: '// Conditional types\ntype IsString<T> = T extends string ? true : false;\n\ntype Test1 = IsString<string>; // true\ntype Test2 = IsString<number>; // false\n\n// More complex example\ntype ArrayElement<T> = T extends (infer U)[] ? U : never;\n\ntype StringArray = ArrayElement<string[]>; // string\ntype NumberArray = ArrayElement<number[]>; // number', desc: "Conditional types create type logic" }
            ],
            practice: {
                title: "Practice Advanced Types",
                tasks: [
                    "Practice with Partial, Pick, Omit utility types",
                    "Create conditional types for different scenarios",
                    "Build mapped types to transform object types",
                    "Combine multiple advanced type features"
                ]
            }
        },
        ka: {
            concept: "TypeScript უზრუნველყოფს გაღრმავებული ტიპის ფუნქციებს როგორიცაა პირობითი ტიპები, მოხაზული ტიპები, template literal ტიპები და დამხმარე ტიპები რომლებიც დახმარებას გწევენ რთული და ზუსტი ტიპის განსაზღვრების შექმნაში.",
            examples: [
                { title: "დამხმარე ტიპები", code: '// ჩაშენებული დამხმარე ტიპები\ninterface User {\n    id: number;\n    name: string;\n    email: string;\n    age: number;\n}\n\n// Partial - ყველა თვისებას ხდის არასავალდებულოს\ntype PartialUser = Partial<User>;\n\n// Pick - ირჩევს კონკრეტულ თვისებებს\ntype UserSummary = Pick<User, "id" | "name">;\n\n// Omit - გამორიცხავს კონკრეტულ თვისებებს\ntype CreateUser = Omit<User, "id">;\n\n// Record - ქმნის ობიექტის ტიპს კონკრეტული გასაღებებით\ntype UserRoles = Record<string, "admin" | "user" | "guest">;', desc: "დამხმარე ტიპები დახმარებას გწევენ არსებული ტიპების გარდაქმნაში" },
                { title: "პირობითი ტიპები", code: '// პირობითი ტიპები\ntype IsString<T> = T extends string ? true : false;\n\ntype Test1 = IsString<string>; // true\ntype Test2 = IsString<number>; // false\n\n// უფრო რთული მაგალითი\ntype ArrayElement<T> = T extends (infer U)[] ? U : never;\n\ntype StringArray = ArrayElement<string[]>; // string\ntype NumberArray = ArrayElement<number[]>; // number', desc: "პირობითი ტიპები ქმნიან ტიპის ლოგიკას" }
            ],
            practice: {
                title: "ივარჯიშეთ გაღრმავებულ ტიპებში",
                tasks: [
                    "ივარჯიშეთ Partial, Pick, Omit დამხმარე ტიპებით",
                    "შექმენით პირობითი ტიპები სხვადასხვა სცენარებისთვის",
                    "ააშენეთ მოხაზული ტიპები ობიექტის ტიპების გარდასაქმნელად",
                    "გააერთიანეთ რამდენიმე გაღრმავებული ტიპის ფუნქცია"
                ]
            }
        }
    },
    type_guards: {
        en: {
            concept: "Type guards are techniques to narrow down types within conditional blocks. They help TypeScript understand which specific type you're working with at runtime.",
            examples: [
                { title: "typeof Guards", code: 'function processValue(value: string | number): string {\n    if (typeof value === "string") {\n        // TypeScript knows value is string here\n        return value.toUpperCase();\n    } else {\n        // TypeScript knows value is number here\n        return value.toFixed(2);\n    }\n}\n\nconsole.log(processValue("hello")); // "HELLO"\nconsole.log(processValue(42.567)); // "42.57"', desc: "typeof guards check primitive types" },
                { title: "Custom Type Guards", code: 'interface Cat {\n    name: string;\n    meow(): void;\n}\n\ninterface Dog {\n    name: string;\n    bark(): void;\n}\n\n// Custom type guard function\nfunction isCat(animal: Cat | Dog): animal is Cat {\n    return (animal as Cat).meow !== undefined;\n}\n\nfunction makeSound(animal: Cat | Dog): void {\n    if (isCat(animal)) {\n        animal.meow(); // TypeScript knows it\'s a Cat\n    } else {\n        animal.bark(); // TypeScript knows it\'s a Dog\n    }\n}', desc: "Custom type guards for complex types" }
            ],
            practice: {
                title: "Practice Type Guards",
                tasks: [
                    "Create functions using typeof guards for union types",
                    "Build custom type guard functions for interfaces",
                    "Practice with instanceof guards for classes",
                    "Combine multiple type guard techniques"
                ]
            }
        },
        ka: {
            concept: "Type guards არის ტექნიკები ტიპების შემცირებისთვის პირობით ბლოკებში. ისინი დახმარებას გწევენ TypeScript-ს გაიგოს რომელ კონკრეტულ ტიპთან მუშაობთ runtime-ზე.",
            examples: [
                { title: "typeof Guards", code: 'function processValue(value: string | number): string {\n    if (typeof value === "string") {\n        // TypeScript იცის რომ value არის string აქ\n        return value.toUpperCase();\n    } else {\n        // TypeScript იცის რომ value არის number აქ\n        return value.toFixed(2);\n    }\n}\n\nconsole.log(processValue("გამარჯობა")); // "გამარჯობა"\nconsole.log(processValue(42.567)); // "42.57"', desc: "typeof guards ამოწმებს პრიმიტიულ ტიპებს" },
                { title: "მორგებული Type Guards", code: 'interface Cat {\n    name: string;\n    meow(): void;\n}\n\ninterface Dog {\n    name: string;\n    bark(): void;\n}\n\n// მორგებული type guard ფუნქცია\nfunction isCat(animal: Cat | Dog): animal is Cat {\n    return (animal as Cat).meow !== undefined;\n}\n\nfunction makeSound(animal: Cat | Dog): void {\n    if (isCat(animal)) {\n        animal.meow(); // TypeScript იცის რომ ეს Cat-ია\n    } else {\n        animal.bark(); // TypeScript იცის რომ ეს Dog-ია\n    }\n}', desc: "მორგებული type guards რთული ტიპებისთვის" }
            ],
            practice: {
                title: "ივარჯიშეთ Type Guards-ებში",
                tasks: [
                    "შექმენით ფუნქციები typeof guards-ების გამოყენებით union ტიპებისთვის",
                    "ააშენეთ მორგებული type guard ფუნქციები ინტერფეისებისთვის",
                    "ივარჯიშეთ instanceof guards-ებით კლასებისთვის",
                    "გააერთიანეთ რამდენიმე type guard ტექნიკა"
                ]
            }
        }
    },
    async_typescript: {
        en: {
            concept: "TypeScript provides excellent support for asynchronous programming with Promises and async/await, including proper type checking for async operations and error handling.",
            examples: [
                { title: "Promises with Types", code: '// Promise with type annotation\nfunction fetchUser(id: number): Promise<User> {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            if (id > 0) {\n                resolve({ id, name: "Alice", email: "alice@example.com" });\n            } else {\n                reject(new Error("Invalid user ID"));\n            }\n        }, 1000);\n    });\n}\n\n// Using the promise\nfetchUser(1)\n    .then((user: User) => console.log(user.name))\n    .catch((error: Error) => console.error(error.message));', desc: "Type-safe promises" },
                { title: "Async/Await", code: 'async function getUserProfile(id: number): Promise<string> {\n    try {\n        const user = await fetchUser(id);\n        const profile = `User: ${user.name} (${user.email})`;\n        return profile;\n    } catch (error) {\n        if (error instanceof Error) {\n            throw new Error(`Failed to get profile: ${error.message}`);\n        }\n        throw error;\n    }\n}\n\n// Usage\ngetUserProfile(1)\n    .then(profile => console.log(profile))\n    .catch(err => console.error(err));', desc: "Async/await with proper error handling" }
            ],
            practice: {
                title: "Practice Async TypeScript",
                tasks: [
                    "Create typed Promise functions that fetch data",
                    "Build async functions with proper error handling",
                    "Practice with Promise.all() and typed results",
                    "Create async utility functions with generic types"
                ]
            }
        },
        ka: {
            concept: "TypeScript უზრუნველყოფს შესანიშნავ მხარდაჭერას ასინქრონული პროგრამირებისთვის Promise-ებითა და async/await-ით, მათ შორის სწორი ტიპის შემოწმება ასინქრონული ოპერაციებისა და შეცდომების დამუშავებისთვის.",
            examples: [
                { title: "Promise-ები ტიპებით", code: '// Promise ტიპის ანოტაციით\nfunction fetchUser(id: number): Promise<User> {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            if (id > 0) {\n                resolve({ id, name: "ალისი", email: "alice@example.com" });\n            } else {\n                reject(new Error("არასწორი მომხმარებლის ID"));\n            }\n        }, 1000);\n    });\n}\n\n// Promise-ის გამოყენება\nfetchUser(1)\n    .then((user: User) => console.log(user.name))\n    .catch((error: Error) => console.error(error.message));', desc: "ტიპ-უსაფრთხო promise-ები" },
                { title: "Async/Await", code: 'async function getUserProfile(id: number): Promise<string> {\n    try {\n        const user = await fetchUser(id);\n        const profile = `მომხმარებელი: ${user.name} (${user.email})`;\n        return profile;\n    } catch (error) {\n        if (error instanceof Error) {\n            throw new Error(`პროფილის მიღება ვერ მოხერხდა: ${error.message}`);\n        }\n        throw error;\n    }\n}\n\n// გამოყენება\ngetUserProfile(1)\n    .then(profile => console.log(profile))\n    .catch(err => console.error(err));', desc: "Async/await სწორი შეცდომების დამუშავებით" }
            ],
            practice: {
                title: "ივარჯიშეთ Async TypeScript-ში",
                tasks: [
                    "შექმენით ტიპიზებული Promise ფუნქციები რომლებიც მონაცემებს იღებენ",
                    "ააშენეთ async ფუნქციები სწორი შეცდომების დამუშავებით",
                    "ივარჯიშეთ Promise.all()-ით და ტიპიზებული შედეგებით",
                    "შექმენით async დამხმარე ფუნქციები generic ტიპებით"
                ]
            }
        }
    },
    configuration: {
        en: {
            concept: "TypeScript configuration through tsconfig.json allows you to customize compilation settings, set up strict type checking, configure module resolution, and optimize your development workflow.",
            examples: [
                { title: "Basic tsconfig.json", code: '{\n  "compilerOptions": {\n    "target": "ES2020",\n    "module": "commonjs",\n    "outDir": "./dist",\n    "strict": true,\n    "esModuleInterop": true,\n    "skipLibCheck": true,\n    "forceConsistentCasingInFileNames": true\n  },\n  "include": ["src/**/*"],\n  "exclude": ["node_modules", "dist"]\n}', desc: "Basic TypeScript configuration file" },
                { title: "Strict Configuration", code: '{\n  "compilerOptions": {\n    "strict": true,\n    "noImplicitAny": true,\n    "strictNullChecks": true,\n    "strictFunctionTypes": true,\n    "noImplicitReturns": true,\n    "noUnusedLocals": true,\n    "noUnusedParameters": true\n  }\n}', desc: "Strict type checking options" }
            ],
            practice: {
                title: "Practice Configuration",
                tasks: [
                    "Set up a TypeScript project with tsconfig.json",
                    "Configure different compilation targets",
                    "Enable strict mode and fix resulting errors",
                    "Set up path mapping for cleaner imports"
                ]
            }
        },
        ka: {
            concept: "TypeScript კონფიგურაცია tsconfig.json-ის მეშვეობით საშუალებას გაძლევთ მოირგოთ compilation პარამეტრები, დააყენოთ მკაცრი ტიპის შემოწმება, მოირგოთ მოდულის რეზოლუცია და ოპტიმიზაცია გაუკეთოთ თქვენს განვითარების workflow-ს.",
            examples: [
                { title: "ძირითადი tsconfig.json", code: '{\n  "compilerOptions": {\n    "target": "ES2020",\n    "module": "commonjs",\n    "outDir": "./dist",\n    "strict": true,\n    "esModuleInterop": true,\n    "skipLibCheck": true,\n    "forceConsistentCasingInFileNames": true\n  },\n  "include": ["src/**/*"],\n  "exclude": ["node_modules", "dist"]\n}', desc: "ძირითადი TypeScript კონფიგურაციის ფაილი" },
                { title: "მკაცრი კონფიგურაცია", code: '{\n  "compilerOptions": {\n    "strict": true,\n    "noImplicitAny": true,\n    "strictNullChecks": true,\n    "strictFunctionTypes": true,\n    "noImplicitReturns": true,\n    "noUnusedLocals": true,\n    "noUnusedParameters": true\n  }\n}', desc: "მკაცრი ტიპის შემოწმების ოფციები" }
            ],
            practice: {
                title: "ივარჯიშეთ კონფიგურაციაში",
                tasks: [
                    "დააყენეთ TypeScript პროექტი tsconfig.json-ით",
                    "მოირგეთ სხვადასხვა compilation სამიზნეები",
                    "ჩართეთ strict რეჟიმი და გამოასწორეთ შედეგი შეცდომები",
                    "დააყენეთ path mapping სუფთა imports-ებისთვის"
                ]
            }
        }
    }
    // Additional tutorial content would continue here...
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    setupLanguage();
    updateLanguage();
    setupThemeToggle();
    
    // Apply saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    }
    
    // Load the first tutorial by default
    loadTutorial('basic_types');
    const firstTutorial = document.querySelector('.tutorial-item[data-tutorial="basic_types"]');
    if (firstTutorial) {
        setActive(firstTutorial);
    }
});

function setupNavigation() {
    document.querySelectorAll('.tutorial-item').forEach(item => {
        item.addEventListener('click', function() {
            const tutorial = this.dataset.tutorial;
            if (typescriptTutorialContent[tutorial]) {
                loadTutorial(tutorial);
                setActive(this);
            }
        });
    });
    
    // Setup navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) prevBtn.addEventListener('click', navigatePrevious);
    if (nextBtn) nextBtn.addEventListener('click', navigateNext);
}

function setupLanguage() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    
    if (languageBtn) {
        languageBtn.addEventListener('click', () => {
            languageDropdown.classList.toggle('hidden');
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (languageBtn && !languageBtn.contains(e.target)) {
            languageDropdown.classList.add('hidden');
        }
    });
    
    // Language selection
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = option.dataset.lang;
            const flag = option.querySelector('span').textContent;
            const langText = lang === 'en' ? 'EN' : 'KA';
            
            document.getElementById('currentFlag').textContent = flag;
            document.getElementById('currentLang').textContent = langText;
            languageDropdown.classList.add('hidden');
            
            currentLanguage = lang;
            localStorage.setItem('language', lang);
            updateLanguage();
            loadTutorial(currentTutorial); // Reload current tutorial in new language
        });
    });
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
}

function loadTutorial(name) {
    currentTutorial = name;
    const titleContent = typescriptTutorials[name];
    const detailContent = typescriptTutorialContent[name];
    
    if (!titleContent || !detailContent) {
        console.log('Tutorial not found:', name);
        return;
    }
    
    const title = document.getElementById('tutorialTitle');
    const desc = document.getElementById('tutorialDescription');
    
    if (title) title.textContent = titleContent[currentLanguage].title;
    if (desc) desc.textContent = titleContent[currentLanguage].description;
    
    // Update the tutorial content section with dynamic content
    updateTutorialContent(name);
    
    // Update the practice task section
    updatePracticeTask(name);
    
    // Update navigation buttons
    updateNavigationButtons();
}

function setActive(item) {
    // Remove active state from all items
    document.querySelectorAll('.tutorial-item').forEach(tutorialItem => {
        tutorialItem.classList.remove('border-blue-500', 'text-blue-700', 'dark:text-blue-300', 'shadow-lg');
        tutorialItem.classList.add('hover:bg-gray-100', 'dark:hover:bg-gray-700');
        tutorialItem.style.animation = '';
    });
    
    // Add active state to current item
    item.classList.add('border-blue-500', 'text-blue-700', 'dark:text-blue-300', 'shadow-lg');
    item.classList.remove('hover:bg-gray-100', 'dark:hover:bg-gray-700');
    item.style.animation = 'pulse-glow 2s infinite';
}

function updateLanguage() {
    // Update UI text elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (uiText[currentLanguage] && uiText[currentLanguage][key]) {
            element.textContent = uiText[currentLanguage][key];
        }
    });
    
    // Update current language display
    const currentLang = document.getElementById('currentLang');
    const currentFlag = document.getElementById('currentFlag');
    
    if (currentLang && currentFlag) {
        if (currentLanguage === 'en') {
            currentLang.textContent = 'EN';
            currentFlag.textContent = '🇺🇸';
        } else {
            currentLang.textContent = 'KA';
            currentFlag.textContent = '🇬🇪';
        }
    }
}

function updateTutorialContent(tutorialName) {
    const content = typescriptTutorialContent[tutorialName];
    if (!content || !content[currentLanguage]) return;
    
    const tutorialContent = document.getElementById('tutorialContent');
    if (!tutorialContent) return;
    
    const langContent = content[currentLanguage];
    
    let contentHTML = `
        <div class="content-section mb-8">
            <h2 class="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">🔷 ${langContent.concept ? 'Concept' : 'კონცეფცია'}</h2>
            <div class="content-text prose dark:prose-invert max-w-none">
                <p class="text-lg mb-4">${langContent.concept}</p>
            </div>
        </div>
    `;
    
    if (langContent.examples && langContent.examples.length > 0) {
        contentHTML += `
            <div class="content-section">
                <h2 class="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">💻 ${currentLanguage === 'en' ? 'Examples' : 'მაგალითები'}</h2>
        `;
        
        langContent.examples.forEach((example, index) => {
            contentHTML += `
                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-2">${example.title}</h3>
                    <div class="code-block rounded-lg p-4 mb-2">
                        <pre class="text-sm overflow-x-auto"><code>${escapeHtml(example.code)}</code></pre>
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">${example.desc}</p>
                </div>
            `;
        });
        
        contentHTML += '</div>';
    }
    
    tutorialContent.innerHTML = contentHTML;
}

function updatePracticeTask(tutorialName) {
    const content = typescriptTutorialContent[tutorialName];
    if (!content || !content[currentLanguage] || !content[currentLanguage].practice) return;
    
    const practiceContent = document.getElementById('practiceContent');
    if (!practiceContent) return;
    
    const practice = content[currentLanguage].practice;
    
    let practiceHTML = `
        <h4 class="text-lg font-bold text-green-800 dark:text-green-200 mb-3">🎯 ${practice.title}</h4>
        <div class="practice-task">
            <div class="content-text">
                <ol class="list-decimal pl-6 space-y-2 mb-4">
    `;
    
    practice.tasks.forEach(task => {
        practiceHTML += `<li>${task}</li>`;
    });
    
    practiceHTML += `
                </ol>
                <p class="text-sm text-gray-600 dark:text-gray-400">${currentLanguage === 'en' ? 'Practice type-safe development and build robust TypeScript applications!' : 'ივარჯიშეთ ტიპ-უსაფრთხო განვითარებაში და ააშენეთ მძლავრი TypeScript აპლიკაციები!'}</p>
            </div>
        </div>
    `;
    
    practiceContent.innerHTML = practiceHTML;
}

function updateNavigationButtons() {
    const currentIndex = typescriptTutorialOrder.indexOf(currentTutorial);
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.disabled = currentIndex === 0;
        if (currentIndex > 0) {
            const prevTutorial = typescriptTutorialOrder[currentIndex - 1];
            const prevTitle = typescriptTutorials[prevTutorial][currentLanguage].title;
            prevBtn.querySelector('span').textContent = `Previous: ${prevTitle.split(' ')[0]}`;
        }
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentIndex === typescriptTutorialOrder.length - 1;
        if (currentIndex < typescriptTutorialOrder.length - 1) {
            const nextTutorial = typescriptTutorialOrder[currentIndex + 1];
            const nextTitle = typescriptTutorials[nextTutorial][currentLanguage].title;
            nextBtn.querySelector('span').textContent = `Next: ${nextTitle.split(' ')[0]}`;
        }
    }
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

function navigatePrevious() {
    const currentIndex = typescriptTutorialOrder.indexOf(currentTutorial);
    if (currentIndex > 0) {
        const prevTutorial = typescriptTutorialOrder[currentIndex - 1];
        loadTutorial(prevTutorial);
        const prevTutorialItem = document.querySelector(`.tutorial-item[data-tutorial="${prevTutorial}"]`);
        if (prevTutorialItem) {
            setActive(prevTutorialItem);
        }
    }
}

function navigateNext() {
    const currentIndex = typescriptTutorialOrder.indexOf(currentTutorial);
    if (currentIndex < typescriptTutorialOrder.length - 1) {
        const nextTutorial = typescriptTutorialOrder[currentIndex + 1];
        loadTutorial(nextTutorial);
        const nextTutorialItem = document.querySelector(`.tutorial-item[data-tutorial="${nextTutorial}"]`);
        if (nextTutorialItem) {
            setActive(nextTutorialItem);
        }
    }
}

// Scroll progress indicator
const scrollIndicator = document.getElementById('scrollIndicator');
window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollIndicator) {
        scrollIndicator.style.width = scrollPercent + '%';
    }
}); 