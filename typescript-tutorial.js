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
const typescriptTutorialOrder = ['basic_types', 'interfaces_objects', 'functions_generics', 'classes_inheritance', 'enums_types', 'modules_namespaces', 'async_promises', 'utility_types', 'testing_debugging', 'advanced_patterns'];

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