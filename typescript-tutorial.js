// Simple Tutorial Navigation
let currentTutorial = 'basic_types';
let currentLanguage = localStorage.getItem('language') || 'en';

// Tutorial detailed content
const tutorialContent = {
    basic_types: {
        en: {
            title: "Basic Types",
            description: "Learn TypeScript's fundamental type system and static typing benefits.",
            concept: "TypeScript adds static typing to JavaScript, making your code more predictable and easier to debug.",
            examples: [
                { title: "Basic Type Annotations", code: 'let name: string = "TypeScript";\nlet age: number = 5;\nlet isAwesome: boolean = true;', desc: "Explicitly declare types for variables." },
                { title: "Function Types", code: 'function greet(name: string): string {\n    return `Hello, ${name}!`;\n}', desc: "Functions can have typed parameters and return values." }
            ],
            practice: {
                title: "Practice Basics",
                tasks: ["Declare a string, number, and boolean.", "Write a function that takes a number and returns a string."]
            }
        },
        ka: {
            title: "ძირითადი ტიპები",
            description: "ისწავლეთ TypeScript-ის ძირითადი ტიპების სისტემა და სტატიკური ტიპიზების უპირატესობები.",
            concept: "TypeScript-ი ამატებს სტატიკურ ტიპიზაციას JavaScript-ში, რაც კოდს უფრო პროგნოზირებადს და გამართვადს ხდის.",
            examples: [
                { title: "ტიპების ანოტაციები", code: 'let name: string = "ტაიპსკრიპტი";\nlet age: number = 5;\nlet isAwesome: boolean = true;', desc: "ცვლადებისთვის ტიპების 명시적 선언." },
                { title: "ფუნქციის ტიპები", code: 'function greet(name: string): string {\n    return `გამარჯობა, ${name}!`;\n}', desc: "ფუნქციებს შეიძლება ჰქონდეთ ტიპიზირებული პარამეტრები და დასაბრუნებელი მნიშვნელობები." }
            ],
            practice: {
                title: "ივარჯიშეთ საფუძვლებში",
                tasks: ["გამოაცხადეთ სტრიქონი, რიცხვი და ბულიანი.", "დაწერეთ ფუნქცია, რომელიც იღებს რიცხვს და აბრუნებს სტრიქონს."]
            }
        }
    },
    interfaces_objects: {
        en: {
            title: "Interfaces & Objects",
            description: "Master object typing with interfaces and type definitions.",
            concept: "Interfaces define the structure of objects, ensuring they have the correct properties and types.",
            examples: [
                { title: "Defining an Interface", code: 'interface User {\n    name: string;\n    age: number;\n}\n\nconst user: User = { name: "Alice", age: 30 };', desc: "Use interfaces to create reusable type definitions for objects." },
            ],
            practice: {
                title: "Create a User Profile",
                tasks: ["Define a 'Product' interface with 'name' (string) and 'price' (number).", "Create a product object that conforms to the interface."]
            }
        },
        ka: {
            title: "ინტერფეისები და ობიექტები",
            description: "დაეუფლეთ ობიექტების ტიპიზებას ინტერფეისებითა და ტიპების განსაზღვრებით.",
            concept: "ინტერფეისები განსაზღვრავს ობიექტების სტრუქტურას, რაც უზრუნველყოფს მათში სწორი თვისებებისა და ტიპების არსებობას.",
            examples: [
                { title: "ინტერფეისის განსაზღვრა", code: 'interface User {\n    name: string;\n    age: number;\n}\n\nconst user: User = { name: "ალისა", age: 30 };', desc: "გამოიყენეთ ინტერფეისები ობიექტებისთვის მრავალჯერადი ტიპის განსაზღვრებების შესაქმნელად." },
            ],
            practice: {
                title: "მომხმარებლის პროფილის შექმნა",
                tasks: ["განსაზღვრეთ 'Product' ინტერფეისი 'name' (string) და 'price' (number) თვისებებით.", "შექმენით პროდუქტის ობიექტი, რომელიც შეესაბამება ინტერფეისს."]
            }
        }
    },
    functions_generics: {
        en: {
            title: "Functions & Generics",
            description: "Create flexible, reusable code with function types and generics.",
            concept: "Generics allow you to create reusable components that work with multiple types while maintaining type safety.",
            examples: [
                { title: "Generic Functions", code: 'function identity<T>(arg: T): T {\n    return arg;\n}\n\nlet output = identity<string>("myString");', desc: "A simple generic function." }
            ],
            practice: {
                title: "Practice Generics",
                tasks: ["Write a generic function to reverse an array of any type."]
            }
        },
        ka: {
            title: "ფუნქციები და გენერიკები",
            description: "შექმენით მოქნილი, მრავალჯერადი კოდი ფუნქციების ტიპებითა და გენერიკებით.",
            concept: "გენერიკები გაძლევთ საშუალებას შექმნათ მრავალჯერადი კომპონენტები, რომლებიც მუშაობენ სხვადასხვა ტიპებთან, ტიპების უსაფრთხოების შენარჩუნებით.",
            examples: [
                { title: "გენერიკული ფუნქციები", code: 'function identity<T>(arg: T): T {\n    return arg;\n}\n\nlet output = identity<string>("ჩემი სტრიქონი");', desc: "მარტივი გენერიკული ფუნქცია." }
            ],
            practice: {
                title: "ივარჯიშეთ გენერიკებში",
                tasks: ["დაწერეთ გენერიკული ფუნქცია, რომელიც აბრუნებს ნებისმიერი ტიპის მასივს შებრუნებულად."]
            }
        }
    },
    classes_inheritance: {
        en: {
            title: "Classes & Inheritance",
            description: "Build robust object-oriented applications with typed classes.",
            concept: "TypeScript classes support object-oriented programming principles like inheritance.",
            examples: [
                { title: "Class Inheritance", code: 'class Animal {\n    move(distance: number = 0) {\n        console.log(`Animal moved ${distance}m.`);\n    }\n}\n\nclass Dog extends Animal {\n    bark() {\n        console.log("Woof! Woof!");\n    }\n}', desc: "A class can inherit properties and methods from another class." }
            ],
            practice: {
                title: "Practice Inheritance",
                tasks: ["Create a 'Car' class that extends a 'Vehicle' class."]
            }
        },
        ka: {
            title: "კლასები და მემკვიდრეობა",
            description: "ააშენეთ მძლავრი ობიექტზე ორიენტირებული აპლიკაციები ტიპიზებული კლასებით.",
            concept: "TypeScript კლასები მხარს უჭერს ობიექტზე ორიენტირებული პროგრამირების პრინციპებს, როგორიცაა მემკვიდრეობა.",
            examples: [
                { title: "კლასის მემკვიდრეობა", code: 'class Animal {\n    move(distance: number = 0) {\n        console.log(`ცხოველი გადაადგილდა ${distance} მეტრით.`);\n    }\n}\n\nclass Dog extends Animal {\n    bark() {\n        console.log("ვუფ! ვუფ!");\n    }\n}', desc: "კლასს შეუძლია მემკვიდრეობით მიიღოს თვისებები და მეთოდები სხვა კლასისგან." }
            ],
            practice: {
                title: "ივარჯიშეთ მემკვიდრეობაში",
                tasks: ["შექმენით 'Car' კლასი, რომელიც აფართოებს 'Vehicle' კლასს."]
            }
        }
    },
    enums_types: {
        en: {
            title: "Enums & Advanced Types",
            description: "Explore enums, union types, and advanced type features.",
            concept: "Enums allow a developer to define a set of named constants.",
            examples: [
                { title: "Enums", code: 'enum Direction {\n    Up = 1,\n    Down,\n    Left,\n    Right,\n}', desc: "Numeric enums are number-based." }
            ],
            practice: {
                title: "Practice Enums",
                tasks: ["Create a string-based enum for 'UserRole' (e.g., Admin, Editor, Viewer)."]
            }
        },
        ka: {
            title: "Enum-ები და გაღრმავებული ტიპები",
            description: "შეისწავლეთ enum-ები, გაერთიანებული ტიპები და გაღრმავებული ტიპების ფუნქციები.",
            concept: "Enum-ები დეველოპერს საშუალებას აძლევს განსაზღვროს დასახელებული კონსტანტების ნაკრები.",
            examples: [
                { title: "Enum-ები", code: 'enum Direction {\n    Up = 1,\n    Down,\n    Left,\n    Right,\n}', desc: "რიცხვითი enum-ები რიცხვებზეა დაფუძნებული." }
            ],
            practice: {
                title: "ივარჯიშეთ Enum-ებში",
                tasks: ["შექმენით სტრიქონზე დაფუძნებული enum 'UserRole'-ისთვის (მაგ., Admin, Editor, Viewer)."]
            }
        }
    },
    modules_namespaces: {
        en: {
            title: "Modules & Namespaces",
            description: "Organize code with modules, namespaces, and import/export.",
            concept: "Modules are executed within their own scope, not in the global scope.",
            examples: [
                { title: "Exporting a module", code: '// validation.ts\nexport interface StringValidator { isAcceptable(s: string): boolean; }', desc: "Use 'export' to make components available to other modules." },
                { title: "Importing a module", code: '// app.ts\nimport { StringValidator } from "./validation";', desc: "Use 'import' to access exported components." }
            ],
            practice: {
                title: "Practice Modules",
                tasks: ["Create two files, export a function from one and import it in the other."]
            }
        },
        ka: {
            title: "მოდულები და Namespace-ები",
            description: "მოაწყვეთ კოდი მოდულებით, namespace-ებითა და import/export-ით.",
            concept: "მოდულები სრულდება საკუთარ სკოპში და არა გლობალურ სკოპში.",
            examples: [
                { title: "მოდულის ექსპორტი", code: '// validation.ts\nexport interface StringValidator { isAcceptable(s: string): boolean; }', desc: "გამოიყენეთ 'export', რომ კომპონენტები ხელმისაწვდომი გახადოთ სხვა მოდულებისთვის." },
                { title: "მოდულის იმპორტი", code: '// app.ts\nimport { StringValidator } from "./validation";', desc: "გამოიყენეთ 'import' ექსპორტირებულ კომპონენტებზე წვდომისთვის." }
            ],
            practice: {
                title: "ივარჯიშეთ მოდულებში",
                tasks: ["შექმენით ორი ფაილი, გააკეთეთ ფუნქციის ექსპორტი ერთიდან და იმპორტი მეორეში."]
            }
        }
    },
    async_promises: {
        en: {
            title: "Async & Promises",
            description: "Handle asynchronous operations with Promise types and async/await.",
            concept: "Async/await is a modern way to deal with asynchronous code, making it look and behave more like synchronous code.",
            examples: [
                { title: "Async Function", code: 'async function getPosts() {\n    const response = await fetch("https://jsonplaceholder.typicode.com/posts");\n    const data = await response.json();\n    return data;\n}', desc: "The 'async' keyword makes a function return a Promise." }
            ],
            practice: {
                title: "Practice Async/Await",
                tasks: ["Write an async function to fetch user data from a public API."]
            }
        },
        ka: {
            title: "Async და Promise-ები",
            description: "მართეთ ასინქრონული ოპერაციები Promise ტიპებითა და async/await-ით.",
            concept: "Async/await არის თანამედროვე გზა ასინქრონულ კოდთან სამუშაოდ, რაც მას უფრო სინქრონული კოდივით აჩენს და იქცევა.",
            examples: [
                { title: "ასინქრონული ფუნქცია", code: 'async function getPosts() {\n    const response = await fetch("https://jsonplaceholder.typicode.com/posts");\n    const data = await response.json();\n    return data;\n}', desc: "'async' საკვანძო სიტყვა ფუნქციას Promise-ს აბრუნებინებს." }
            ],
            practice: {
                title: "ივარჯიშეთ Async/Await-ში",
                tasks: ["დაწერეთ ასინქრონული ფუნქცია მომხმარებლის მონაცემების წამოსაღებად საჯარო API-დან."]
            }
        }
    },
    utility_types: {
        en: {
            title: "Utility Types",
            description: "Leverage built-in utility types for powerful type transformations.",
            concept: "Utility types help in common type transformations.",
            examples: [
                { title: "Partial<T>", code: 'interface Todo {\n    title: string;\n    description: string;\n}\n\nfunction updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {\n    return { ...todo, ...fieldsToUpdate };\n}', desc: "Partial<T> makes all properties of T optional." }
            ],
            practice: {
                title: "Practice Utility Types",
                tasks: ["Use the 'Readonly<T>' utility type to create a readonly version of a user profile object."]
            }
        },
        ka: {
            title: "დამხმარე ტიპები",
            description: "გამოიყენეთ ჩაშენებული დამხმარე ტიპები ძლიერი ტიპის ტრანსფორმაციებისთვის.",
            concept: "დამხმარე ტიპები ეხმარება გავრცელებულ ტიპის ტრანსფორმაციებში.",
            examples: [
                { title: "Partial<T>", code: 'interface Todo {\n    title: string;\n    description: string;\n}\n\nfunction updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {\n    return { ...todo, ...fieldsToUpdate };\n}', desc: "Partial<T> ხდის T-ის ყველა თვისებას არასავალდებულოდ." }
            ],
            practice: {
                title: "ივარჯიშეთ დამხმარე ტიპებში",
                tasks: ["გამოიყენეთ 'Readonly<T>' დამხმარე ტიპი, რომ შექმნათ მომხმარებლის პროფილის ობიექტის მხოლოდ წასაკითხი ვერსია."]
            }
        }
    },
    testing_debugging: {
        en: {
            title: "Testing & Debugging",
            description: "Test TypeScript code and debug with proper tooling.",
            concept: "Effective testing and debugging are crucial for building robust applications.",
            examples: [
                { title: "A simple test", code: '// math.ts\nexport function add(a: number, b: number) { return a + b; }\n\n// math.test.ts\nimport { add } from "./math";\n\nif (add(2, 2) !== 4) {\n    throw new Error("Test failed!");\n}', desc: "Basic testing can be done with simple checks." }
            ],
            practice: {
                title: "Practice Testing",
                tasks: ["Set up a testing framework like Jest for your TypeScript project."]
            }
        },
        ka: {
            title: "ტესტირება და გამართვა",
            description: "ტესტირება TypeScript კოდისა და გამართვა შესაბამისი ხელსაწყოებით.",
            concept: "ეფექტური ტესტირება და გამართვა გადამწყვეტია მძლავრი აპლიკაციების შესაქმნელად.",
            examples: [
                { title: "მარტივი ტესტი", code: '// math.ts\nexport function add(a: number, b: number) { return a + b; }\n\n// math.test.ts\nimport { add } from "./math";\n\nif (add(2, 2) !== 4) {\n    throw new Error("ტესტი ჩავარდა!");\n}', desc: "ძირითადი ტესტირება შეიძლება გაკეთდეს მარტივი შემოწმებებით." }
            ],
            practice: {
                title: "ივარჯიშეთ ტესტირებაში",
                tasks: ["დააყენეთ ტესტირების ფრეიმვორკი, როგორიცაა Jest, თქვენი TypeScript პროექტისთვის."]
            }
        }
    },
    advanced_patterns: {
        en: {
            title: "Advanced Patterns",
            description: "Master advanced TypeScript patterns and architectural concepts.",
            concept: "Advanced patterns like Decorators provide a way to add annotations and a meta-programming syntax for classes and class members.",
            examples: [
                { title: "Class Decorator", code: '@sealed\nclass Greeter {\n    greeting: string;\n    constructor(message: string) {\n        this.greeting = message;\n    }\n    greet() {\n        return "Hello, " + this.greeting;\n    }\n}\nfunction sealed(constructor: Function) {\n    Object.seal(constructor);\n    Object.seal(constructor.prototype);\n}', desc: "Decorators are a stage 2 proposal for JavaScript and are available as an experimental feature of TypeScript." }
            ],
            practice: {
                title: "Practice Decorators",
                tasks: ["Create a method decorator that logs the arguments of the decorated method."]
            }
        },
        ka: {
            title: "გაღრმავებული ნიმუშები",
            description: "დაეუფლეთ TypeScript-ის გაღრმავებულ ნიმუშებს და არქიტექტურული კონცეფციებს.",
            concept: "გაღრმავებული ნიმუშები, როგორიცაა დეკორატორები, უზრუნველყოფს ანოტაციების და მეტა-პროგრამირების სინტაქსის დამატების გზას კლასებისა და კლასის წევრებისთვის.",
            examples: [
                { title: "კლასის დეკორატორი", code: '@sealed\nclass Greeter {\n    greeting: string;\n    constructor(message: string) {\n        this.greeting = message;\n    }\n    greet() {\n        return "Hello, " + this.greeting;\n    }\n}\nfunction sealed(constructor: Function) {\n    Object.seal(constructor);\n    Object.seal(constructor.prototype);\n}', desc: "დეკორატორები არის JavaScript-ის მე-2 ეტაპის წინადადება და ხელმისაწვდომია TypeScript-ის ექსპერიმენტულ ფუნქციად." }
            ],
            practice: {
                title: "ივარჯიშეთ დეკორატორებში",
                tasks: ["შექმენით მეთოდის დეკორატორი, რომელიც ალოგინებს დეკორირებული მეთოდის არგუმენტებს."]
            }
        }
    }
};

const tutorialOrder = Object.keys(tutorialContent);

const uiText = {
    en: { "lang-flag": "🇺🇸", "lang-text": "EN" },
    ka: { "lang-flag": "🇬🇪", "lang-text": "KA" }
};

document.addEventListener('DOMContentLoaded', () => {
    console.log("Tutorial script loaded.");
    
    // Setup UI components
    setupThemeToggle();
    setupNavigation();
    setupLanguage();

    // Initial load
    updateLanguage(false); // Update UI text but don't reload tutorial yet
    loadTutorial(tutorialOrder[0]); // Load the first tutorial
});

function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    if(sunIcon) sunIcon.classList.toggle('hidden', savedTheme === 'dark');
    if(moonIcon) moonIcon.classList.toggle('hidden', savedTheme !== 'dark');

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        if(sunIcon) sunIcon.classList.toggle('hidden', isDark);
        if(moonIcon) moonIcon.classList.toggle('hidden', !isDark);
    });
}

function setupNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) prevBtn.addEventListener('click', navigatePrevious);
    if (nextBtn) nextBtn.addEventListener('click', navigateNext);
}

function setupLanguage() {
    const langBtn = document.getElementById('languageBtn');
    if (!langBtn) return;

    const langDropdown = document.getElementById('languageDropdown');

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (langDropdown) langDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (langDropdown && !langDropdown.contains(e.target) && !langBtn.contains(e.target)) {
            langDropdown.classList.add('hidden');
        }
    });

    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = option.dataset.lang;
            if (newLang !== currentLanguage) {
                currentLanguage = newLang;
                localStorage.setItem('language', currentLanguage);
                updateLanguage();
                loadTutorial(currentTutorial); 
            }
            if (langDropdown) langDropdown.classList.add('hidden');
        });
    });
}

function loadTutorial(name) {
    if (!tutorialContent[name]) {
        console.error(`Tutorial "${name}" not found.`);
        return;
    }
    currentTutorial = name;
    
    updateTutorialContent(name);
    updatePracticeTask(name);
    updateSidebar();
    updateNavButtons();
}

function updateLanguage(reload = true) {
    const lang = uiText[currentLanguage];
    if (document.getElementById('currentFlag')) document.getElementById('currentFlag').textContent = lang['lang-flag'];
    if (document.getElementById('currentLang')) document.getElementById('currentLang').textContent = lang['lang-text'];
    
    if (reload) {
        updateTutorialContent(currentTutorial);
        updatePracticeTask(currentTutorial);
        updateSidebar();
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
}

function runCode() {
    // Use the <textarea id="codeEditor"> that exists in the HTML
    const codeInput = document.getElementById('codeEditor');
    const outputFrame = document.getElementById('outputFrame');

    // Create a sandboxed iframe for code execution if it doesn't exist yet
    let frame = outputFrame;
    if (!frame) {
        frame = document.createElement('iframe');
        frame.id = 'outputFrame';
        frame.className = 'hidden'; // keep it hidden – we only use it for console capture
        document.body.appendChild(frame);
    }

    if (!codeInput) return;

    const code = codeInput.value;
    const consoleOutput = document.getElementById('consoleOutput');
    if (consoleOutput) consoleOutput.innerHTML = ''; // Clear previous output

    try {
        // Create a self-invoking function to capture logs
        const newLog = (type) => (...args) => {
            const message = args.map(arg => {
                if (typeof arg === 'object' && arg !== null) {
                    try {
                        return JSON.stringify(arg, null, 2);
                    } catch (e) {
                        return 'Unserializable Object';
                    }
                }
                return String(arg);
            }).join(' ');
            
            const logEntry = document.createElement('div');
            logEntry.className = `log-entry log-${type}`;
            logEntry.textContent = message;
            if (consoleOutput) consoleOutput.appendChild(logEntry);
        };

        // Hijack console.log, .warn, .error
        const iframeConsole = {
            log: newLog('info'),
            warn: newLog('warn'),
            error: newLog('error')
        };
        
        // Use Function constructor to safely execute code with a custom console
        const transformedCode = `
            const console = { 
                log: parent.iframeConsole.log,
                warn: parent.iframeConsole.warn,
                error: parent.iframeConsole.error
            };
            try {
                ${code}
            } catch (e) {
                console.error(e.message);
            }`;
        
        // Expose our custom console to the iframe
        window.iframeConsole = iframeConsole;
        
        // Write the code to the iframe
        const iframeDoc = outputFrame.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(`<script>${transformedCode}</script>`);
        iframeDoc.close();

    } catch (e) {
        const consoleOutput = document.getElementById('consoleOutput');
        if (consoleOutput) {
            const errorEntry = document.createElement('div');
            errorEntry.className = 'log-entry log-error';
            errorEntry.textContent = e.message;
            consoleOutput.appendChild(errorEntry);
        }
    }
}

function resetCode() {
    if (tutorialContent[currentTutorial]) {
        updatePracticeTask(currentTutorial);
        runCode();
        showToast("Code has been reset.");
    }
}

function clearConsole() {
    const consoleOutput = document.getElementById('consoleOutput');
    if (consoleOutput) consoleOutput.innerHTML = '';
}

function navigatePrevious() {
    const currentIndex = tutorialOrder.indexOf(currentTutorial);
    if (currentIndex > 0) {
        loadTutorial(tutorialOrder[currentIndex - 1]);
    }
}

function navigateNext() {
    const currentIndex = tutorialOrder.indexOf(currentTutorial);
    if (currentIndex < tutorialOrder.length - 1) {
        loadTutorial(tutorialOrder[currentIndex + 1]);
    }
}

function updateTutorialContent(tutorialName) {
    const content = tutorialContent[tutorialName]?.[currentLanguage];
    if (!content) return;

    // Update page header title & description
    const titleEl = document.getElementById('tutorialTitle');
    const descEl  = document.getElementById('tutorialDescription');
    if (titleEl) titleEl.textContent = content.title || 'Untitled';
    if (descEl)  descEl.textContent  = content.description || '';

    // Build main tutorial sections (concept + examples)
    const tutorialContentEl = document.getElementById('tutorialContent');
    if (!tutorialContentEl) return;

    const colors = ['green','blue','yellow'];
    const examplesHTML = (content.examples || []).map((ex, idx) => {
        const color = colors[idx % colors.length];
        return `
            <div class="bg-${color}-50 dark:bg-${color}-900/20 p-4 rounded-lg border border-${color}-200 dark:border-${color}-800 mb-4">
                <h4 class="font-bold text-${color}-800 dark:text-${color}-200 mb-2">${ex.title}</h4>
                <p class="text-gray-700 dark:text-gray-300 mb-2">${ex.desc}</p>
                <pre class="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded text-sm overflow-x-auto"><code>${ex.code.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</code></pre>
            </div>`;
    }).join('');

    tutorialContentEl.innerHTML = `
        <!-- Concept Section -->
        <div class="content-section mb-8">
            <h2 class="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">📦 What is ${content.title}?</h2>
            <div class="content-text prose dark:prose-invert max-w-none">
                <p class="text-lg mb-4">${content.concept || ''}</p>
            </div>
        </div>

        <!-- Examples Section -->
        <div class="content-section">
            <h2 class="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">🎭 Examples</h2>
            <div class="content-text prose dark:prose-invert max-w-none">
                ${examplesHTML || '<p>No examples yet.</p>'}
            </div>
        </div>`;
}

function updatePracticeTask(tutorialName) {
    const practice = tutorialContent[tutorialName]?.[currentLanguage]?.practice;
    const practiceContentEl = document.getElementById('practiceContent');
    if (!practiceContentEl) return;

    if (!practice) {
        practiceContentEl.innerHTML = `
            <h4 class="text-lg font-bold text-green-800 dark:text-green-200 mb-3">💻 Let's Practice!</h4>
            <div class="practice-task">
                <div class="content-text">
                    <p class="mb-4"><strong>${currentLanguage === 'en' ? 'Your Task:' : 'თქვენი დავალება:'}</strong></p>
                    <p class="mb-4">${currentLanguage === 'en' ? 'Practice the concepts from this tutorial in the code editor below!' : 'ივარჯიშეთ ამ გაკვეთილში განხილული კონცეფციებით ქვემოთ კოდის რედაქტორში!'}</p>
                </div>
            </div>`;
        return;
    }

    practiceContentEl.innerHTML = `
        <h4 class="text-lg font-bold text-green-800 dark:text-green-200 mb-3">💻 ${practice.title}</h4>
        <div class="practice-task">
            <div class="content-text">
                <p class="mb-4"><strong>${currentLanguage === 'en' ? 'Your Task:' : 'თქვენი დავალება:'}</strong></p>
                <ol class="list-decimal pl-6 space-y-2 mb-4">
                    ${(practice.tasks || []).map(task => `<li>${task}</li>`).join('')}
                </ol>
                <p class="text-sm text-gray-600 dark:text-gray-400">${currentLanguage === 'en' ? 'Try it in the code editor below!' : 'სცადეთ ქვემოთ მოცემულ კოდის რედაქტორში!'}</p>
            </div>
        </div>`;
}

function updateSidebar() {
    const tutorialListEl = document.getElementById('tutorial-list');
    if (!tutorialListEl) return;

    // Categorise tutorials for nicer grouping similar to the JavaScript page design
    const categories = [
        {
            id: 'beginner',
            label: currentLanguage === 'en' ? 'Beginner' : 'დამწყები',
            badgeColors: 'from-green-400 to-green-500',
            pulseColor: 'bg-green-400',
            items: ['basic_types', 'interfaces_objects', 'functions_generics']
        },
        {
            id: 'intermediate',
            label: currentLanguage === 'en' ? 'Intermediate' : 'შუალედური',
            badgeColors: 'from-yellow-400 to-orange-500',
            pulseColor: 'bg-yellow-400',
            items: ['classes_inheritance', 'enums_types', 'modules_namespaces']
        },
        {
            id: 'advanced',
            label: currentLanguage === 'en' ? 'Advanced' : 'გაღრმავებული',
            badgeColors: 'from-red-400 to-pink-500',
            pulseColor: 'bg-red-400',
            items: ['async_promises', 'utility_types', 'testing_debugging', 'advanced_patterns']
        }
    ];

    let globalIndex = 0;
    tutorialListEl.innerHTML = categories.map(cat => {
        const header = `
            <div class="level-badge flex items-center mb-3 p-2 rounded-lg glass">
                <div class="w-4 h-4 bg-gradient-to-r ${cat.badgeColors} rounded-full mr-3 floating"></div>
                <span class="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">${cat.label}</span>
                <div class="ml-auto w-2 h-2 ${cat.pulseColor} rounded-full animate-pulse"></div>
            </div>`;

        const items = cat.items.map(key => {
            const title = tutorialContent[key]?.[currentLanguage]?.title || 'Untitled';
            const isActive = key === currentTutorial;
            globalIndex += 1;
            return `
                <div class="tutorial-item ${isActive ? 'glass border-l-4 border-blue-500 text-blue-700 dark:text-blue-300 shadow-lg' : 'hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'} flex items-center p-3 rounded-lg cursor-pointer mb-1" data-tutorial="${key}">
                    <div class="w-8 h-8 ${isActive ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 'bg-gray-400'} rounded-lg flex items-center justify-center mr-3">
                        <span class="text-white text-sm font-bold">${globalIndex}</span>
                    </div>
                    <div class="flex-1">
                        <div class="tutorial-title font-${isActive ? 'semibold' : 'medium'}">${title}</div>
                    </div>
                </div>`;
        }).join('');

        return `<div class="mb-6">${header}${items}</div>`;
    }).join('');
 
    // Re-attach event listeners
    document.querySelectorAll('.tutorial-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const tutorialName = e.currentTarget.dataset.tutorial;
            if (tutorialName) {
                loadTutorial(tutorialName);
            }
        });
    });
}

function updateNavButtons() {
    const currentIndex = tutorialOrder.indexOf(currentTutorial);
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) {
        prevBtn.disabled = currentIndex === 0;
        prevBtn.classList.toggle('opacity-50', prevBtn.disabled);
    }
    if (nextBtn) {
        nextBtn.disabled = currentIndex >= tutorialOrder.length - 1;
        nextBtn.classList.toggle('opacity-50', nextBtn.disabled);
    }
}

// Expose functions to global scope for HTML integration if needed
window.loadTutorial = loadTutorial;
window.navigateNext = navigateNext;
window.navigatePrevious = navigatePrevious;
window.runCode = runCode;
window.resetCode = resetCode;
window.clearConsole = clearConsole;