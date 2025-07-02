// Simple Tutorial Navigation Fix
let currentTutorial = 'variables';
let currentLanguage = localStorage.getItem('language') || 'en';

// Tutorial detailed content
const tutorialContent = {
    variables: {
        en: {
            concept: "Variables are like labeled boxes that store information. In JavaScript, we create variables using 'let' for changeable values and 'const' for constant values.",
            examples: [
                { title: "Text (String)", code: 'const myName = "Luka";', desc: "Store text in quotes" },
                { title: "Numbers", code: 'let age = 25;', desc: "Store any number" },
                { title: "Boolean", code: 'const isStudent = true;', desc: "Store true/false values" }
            ],
            practice: {
                title: "Create Your Profile",
                tasks: [
                    "Create a variable for your name using const",
                    "Create a variable for your age using let", 
                    "Create a variable for whether you're a student using const",
                    "Print all variables to the console using console.log()"
                ]
            }
        },
        ka: {
            concept: "ცვლადები არის დასახელებული ყუთების მსგავსი რომლებიც ინახავენ ინფორმაციას. JavaScript-ში ვქმნით ცვლადებს 'let'-ით ცვალებადი მნიშვნელობებისთვის და 'const'-ით მუდმივი მნიშვნელობებისთვის.",
            examples: [
                { title: "ტექსტი (String)", code: 'const myName = "ლუკა";', desc: "ინახეთ ტექსტი따옴표ებში" },
                { title: "რიცხვები", code: 'let age = 25;', desc: "ინახეთ ნებისმიერი რიცხვი" },
                { title: "ბულიანი", code: 'const isStudent = true;', desc: "ინახეთ ჭეშმარიტი/მცდარი მნიშვნელობები" }
            ],
            practice: {
                title: "შექმენით თქვენი პროფილი",
                tasks: [
                    "შექმენით ცვლადი თქვენი სახელისთვის const-ის გამოყენებით",
                    "შექმენით ცვლადი თქვენი ასაკისთვის let-ის გამოყენებით",
                    "შექმენით ცვლადი იმისთვის ხართ თუ არა სტუდენტი const-ის გამოყენებით",
                    "დაბეჭდეთ ყველა ცვლადი კონსოლში console.log()-ის გამოყენებით"
                ]
            }
        }
    },
    functions: {
        en: {
            concept: "Functions are reusable blocks of code that perform specific tasks. Think of them as recipes - you give them ingredients (parameters) and they produce a result.",
            examples: [
                { title: "Simple Function", code: 'function greet() {\n  console.log("Hello!");\n}', desc: "A function that prints hello" },
                { title: "Function with Parameters", code: 'function greet(name) {\n  console.log("Hello " + name);\n}', desc: "A function that takes input" },
                { title: "Function that Returns", code: 'function add(a, b) {\n  return a + b;\n}', desc: "A function that gives back a value" }
            ],
            practice: {
                title: "Create Your Own Functions",
                tasks: [
                    "Create a function called 'introduce' that prints your name",
                    "Create a function called 'calculate' that takes two numbers and returns their sum",
                    "Call both functions and see the results"
                ]
            }
        },
        ka: {
            concept: "ფუნქციები არის კოდის მეორადი გამოყენების ბლოკები რომლებიც ასრულებენ კონკრეტულ დავალებებს. იფიქრეთ მათზე როგორც რეცეპტებზე - მისცემთ მათ ინგრედიენტებს (პარამეტრებს) და ისინი აწარმოებენ შედეგს.",
            examples: [
                { title: "მარტივი ფუნქცია", code: 'function greet() {\n  console.log("გამარჯობა!");\n}', desc: "ფუნქცია რომელიც ბეჭდავს გამარჯობას" },
                { title: "ფუნქცია პარამეტრებით", code: 'function greet(name) {\n  console.log("გამარჯობა " + name);\n}', desc: "ფუნქცია რომელიც იღებს შეყვანას" },
                { title: "ფუნქცია რომელიც აბრუნებს", code: 'function add(a, b) {\n  return a + b;\n}', desc: "ფუნქცია რომელიც აბრუნებს მნიშვნელობას" }
            ],
            practice: {
                title: "შექმენით თქვენი ფუნქციები",
                tasks: [
                    "შექმენით ფუნქცია სახელად 'introduce' რომელიც დაბეჭდავს თქვენს სახელს",
                    "შექმენით ფუნქცია სახელად 'calculate' რომელიც იღებს ორ რიცხვს და აბრუნებს მათ ჯამს",
                    "გამოიძახეთ ორივე ფუნქცია და ნახეთ შედეგები"
                ]
            }
        }
    },
    controlflow: {
        en: {
            concept: "Control flow lets you make decisions in your code using if/else statements and repeat actions using loops. It's like giving your program a brain!",
            examples: [
                { title: "If Statement", code: 'if (age >= 18) {\n  console.log("Adult");\n} else {\n  console.log("Minor");\n}', desc: "Make decisions based on conditions" },
                { title: "For Loop", code: 'for (let i = 0; i < 5; i++) {\n  console.log(i);\n}', desc: "Repeat code a specific number of times" },
                { title: "While Loop", code: 'let count = 0;\nwhile (count < 3) {\n  console.log(count);\n  count++;\n}', desc: "Repeat while condition is true" }
            ],
            practice: {
                title: "Practice Decision Making",
                tasks: [
                    "Create a variable for a number and check if it's positive, negative, or zero",
                    "Create a for loop that prints numbers 1 to 10",
                    "Create an array of your favorite foods and loop through them"
                ]
            }
        },
        ka: {
            concept: "მართვის ნაკადი საშუალებას გაძლევთ მიიღოთ გადაწყვეტილებები კოდში if/else განცხადებების გამოყენებით და გაიმეოროთ მოქმედებები ციკლების გამოყენებით. ეს არის როგორც პროგრამისთვის ტვინის მიცემა!",
            examples: [
                { title: "If განცხადება", code: 'if (age >= 18) {\n  console.log("უფროსი");\n} else {\n  console.log("არასრულწლოვანი");\n}', desc: "მიიღეთ გადაწყვეტილებები პირობების საფუძველზე" },
                { title: "For ციკლი", code: 'for (let i = 0; i < 5; i++) {\n  console.log(i);\n}', desc: "გაიმეორეთ კოდი კონკრეტული რაოდენობით" },
                { title: "While ციკლი", code: 'let count = 0;\nwhile (count < 3) {\n  console.log(count);\n  count++;\n}', desc: "გაიმეორეთ სანამ პირობა ჭეშმარიტია" }
            ],
            practice: {
                title: "გაივარჯიშეთ გადაწყვეტილების მიღებაში",
                tasks: [
                    "შექმენით ცვლადი რიცხვისთვის და შეამოწმეთ არის თუ არა ის დადებითი, უარყოფითი თუ ნული",
                    "შექმენით for ციკლი რომელიც დაბეჭდავს რიცხვებს 1-დან 10-მდე",
                    "შექმენით მასივი თქვენი საყვარელი საკვებისგან და გაიარეთ მათზე ციკლი"
                ]
            }
        }
    },
    arrays: {
        en: {
            concept: "Arrays store multiple values in a single variable, like a list. Objects store related data as key-value pairs, like a profile card with different properties.",
            examples: [
                { title: "Creating Arrays", code: 'const fruits = ["apple", "banana", "orange"];\nconst numbers = [1, 2, 3, 4, 5];', desc: "Store multiple items in order" },
                { title: "Creating Objects", code: 'const person = {\n  name: "John",\n  age: 25,\n  city: "Tbilisi"\n};', desc: "Store related properties together" },
                { title: "Accessing Data", code: 'console.log(fruits[0]); // "apple"\nconsole.log(person.name); // "John"', desc: "Get specific values from arrays and objects" }
            ],
            practice: {
                title: "Build Data Structures",
                tasks: [
                    "Create an array of your 5 favorite movies",
                    "Create an object representing yourself with name, age, and hobbies",
                    "Access and print the third movie from your array",
                    "Print your name from your object"
                ]
            }
        },
        ka: {
            concept: "მასივები ინახავენ მრავალ მნიშვნელობას ერთ ცვლადში, როგორც სია. ობიექტები ინახავენ დაკავშირებულ მონაცემებს key-value წყვილებად, როგორც პროფილის ბარათი სხვადასხვა თვისებებით.",
            examples: [
                { title: "მასივების შექმნა", code: 'const fruits = ["ვაშლი", "ბანანი", "ნარინჯი"];\nconst numbers = [1, 2, 3, 4, 5];', desc: "შეინახეთ მრავალი ელემენტი თანმიმდევრობით" },
                { title: "ობიექტების შექმნა", code: 'const person = {\n  name: "ჯონი",\n  age: 25,\n  city: "თბილისი"\n};', desc: "შეინახეთ დაკავშირებული თვისებები ერთად" },
                { title: "მონაცემებზე წვდომა", code: 'console.log(fruits[0]); // "ვაშლი"\nconsole.log(person.name); // "ჯონი"', desc: "მიიღეთ კონკრეტული მნიშვნელობები მასივებიდან და ობიექტებიდან" }
            ],
            practice: {
                title: "ააშენეთ მონაცემთა სტრუქტურები",
                tasks: [
                    "შექმენით მასივი თქვენი 5 საყვარელი ფილმისგან",
                    "შექმენით ობიექტი რომელიც წარმოადგენს თქვენ სახელით, ასაკით და ჰობებით",
                    "მიიღეთ და დაბეჭდეთ მესამე ფილმი თქვენი მასივიდან",
                    "დაბეჭდეთ თქვენი სახელი თქვენი ობიექტიდან"
                ]
            }
        }
    },
    advanced_functions: {
        en: {
            concept: "Combining functions with arrays and objects creates powerful programs. Functions can process arrays, modify objects, and work with complex data structures.",
            examples: [
                { title: "Function with Array", code: 'function getTotal(prices) {\n  let total = 0;\n  for (let price of prices) {\n    total += price;\n  }\n  return total;\n}', desc: "Process array data in functions" },
                { title: "Function with Object", code: 'function greetPerson(person) {\n  return `Hello ${person.name}, you are ${person.age} years old!`;\n}', desc: "Work with object properties" },
                { title: "Array of Objects", code: 'const students = [\n  {name: "Alice", grade: 85},\n  {name: "Bob", grade: 92}\n];', desc: "Complex data structures" }
            ],
            practice: {
                title: "Combine Concepts",
                tasks: [
                    "Create a function that takes an array of numbers and returns the average",
                    "Create an array of student objects with name and grade properties",
                    "Write a function that finds the student with the highest grade",
                    "Test your functions with sample data"
                ]
            }
        },
        ka: {
            concept: "ფუნქციების გაერთიანება მასივებთან და ობიექტებთან ქმნის ძლიერ პროგრამებს. ფუნქციებს შეუძლიათ დაამუშაონ მასივები, შეცვალონ ობიექტები და იმუშაონ რთულ მონაცემთა სტრუქტურებთან.",
            examples: [
                { title: "ფუნქცია მასივთან", code: 'function getTotal(prices) {\n  let total = 0;\n  for (let price of prices) {\n    total += price;\n  }\n  return total;\n}', desc: "დაამუშავეთ მასივის მონაცემები ფუნქციებში" },
                { title: "ფუნქცია ობიექტთან", code: 'function greetPerson(person) {\n  return `გამარჯობა ${person.name}, თქვენ ხართ ${person.age} წლის!`;\n}', desc: "იმუშავეთ ობიექტის თვისებებთან" },
                { title: "ობიექტების მასივი", code: 'const students = [\n  {name: "ალისი", grade: 85},\n  {name: "ბობი", grade: 92}\n];', desc: "რთული მონაცემთა სტრუქტურები" }
            ],
            practice: {
                title: "გააერთიანეთ კონცეფციები",
                tasks: [
                    "შექმენით ფუნქცია რომელიც იღებს რიცხვების მასივს და აბრუნებს საშუალოს",
                    "შექმენით სტუდენტების ობიექტების მასივი სახელისა და ქულის თვისებებით",
                    "დაწერეთ ფუნქცია რომელიც პოულობს სტუდენტს ყველაზე მაღალი ქულით",
                    "გატესტეთ თქვენი ფუნქციები ნიმუშის მონაცემებით"
                ]
            }
        }
    },
    advanced_arrays: {
        en: {
            concept: "Advanced array methods like map, filter, and reduce are powerful tools that make working with arrays easier and more elegant. They help you transform, filter, and combine array data.",
            examples: [
                { title: "Map Method", code: 'const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(x => x * 2);\n// [2, 4, 6, 8]', desc: "Transform each element" },
                { title: "Filter Method", code: 'const ages = [15, 22, 18, 30, 16];\nconst adults = ages.filter(age => age >= 18);\n// [22, 18, 30]', desc: "Keep elements that match condition" },
                { title: "Reduce Method", code: 'const prices = [10, 20, 30];\nconst total = prices.reduce((sum, price) => sum + price, 0);\n// 60', desc: "Combine all elements into one value" }
            ],
            practice: {
                title: "Master Array Methods",
                tasks: [
                    "Create an array of product prices and use map to add 10% tax to each",
                    "Create an array of ages and use filter to get only adults (18+)",
                    "Use reduce to find the sum of all numbers in an array",
                    "Chain methods: filter adults, then map their ages to birth years"
                ]
            }
        },
        ka: {
            concept: "მასივების გაღრმავებული მეთოდები როგორიცაა map, filter და reduce არის ძლიერი ხელსაწყოები რომლებიც მასივებთან მუშაობას ხდის უფრო ადვილს და ელეგანტურს. ისინი გეხმარებათ გარდაქმნათ, გაფილტროთ და გააერთიანოთ მასივის მონაცემები.",
            examples: [
                { title: "Map მეთოდი", code: 'const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(x => x * 2);\n// [2, 4, 6, 8]', desc: "გარდაქმენით თითოეული ელემენტი" },
                { title: "Filter მეთოდი", code: 'const ages = [15, 22, 18, 30, 16];\nconst adults = ages.filter(age => age >= 18);\n// [22, 18, 30]', desc: "შეინარჩუნეთ ელემენტები რომლებიც აკმაყოფილებენ პირობას" },
                { title: "Reduce მეთოდი", code: 'const prices = [10, 20, 30];\nconst total = prices.reduce((sum, price) => sum + price, 0);\n// 60', desc: "გააერთიანეთ ყველა ელემენტი ერთ მნიშვნელობაში" }
            ],
            practice: {
                title: "დაეუფლეთ მასივის მეთოდებს",
                tasks: [
                    "შექმენით პროდუქტების ფასების მასივი და გამოიყენეთ map 10% გადასახადის დასამატებლად",
                    "შექმენით ასაკების მასივი და გამოიყენეთ filter მხოლოდ ზრდასრულების მისაღებად (18+)",
                    "გამოიყენეთ reduce მასივში ყველა რიცხვის ჯამის საპოვნელად",
                    "გააერთიანეთ მეთოდები: გაფილტრეთ ზრდასრულები, შემდეგ map-ით მათი ასაკები გარდაქმენით დაბადების წლებად"
                ]
            }
        }
    }
};

// Complete tutorial content with all 12 tutorials
const tutorials = {
    variables: {
        en: {
            title: "Variables in JavaScript",
            description: "Learn the fundamentals of JavaScript variables, data types, and basic syntax."
        },
        ka: {
            title: "ცვლადები JavaScript-ში", 
            description: "ისწავლეთ JavaScript-ის ცვლადების, მონაცემთა ტიპების და ძირითადი სინტაქსის საფუძვლები."
        }
    },
    functions: {
        en: {
            title: "Functions in JavaScript",
            description: "Functions are like magical recipes - give them ingredients and they create something new!"
        },
        ka: {
            title: "ფუნქციები JavaScript-ში",
            description: "ფუნქციები ჯადოსნური რეცეპტების მსგავსია - მისცით მათ ინგრედიენტები და ისინი შექმნიან ახალს!"
        }
    },
    controlflow: {
        en: {
            title: "Control Flow in JavaScript",
            description: "Learn how to make decisions in your code with if/else statements and loops."
        },
        ka: {
            title: "მართვის ნაკადი JavaScript-ში",
            description: "ისწავლეთ როგორ მიიღოთ გადაწყვეტილებები თქვენს კოდში if/else განცხადებებით და ციკლებით."
        }
    },
    arrays: {
        en: {
            title: "Arrays & Objects Deep Dive",
            description: "Master JavaScript's most important data structures - arrays and objects."
        },
        ka: {
            title: "მასივები და ობიექტები გაღრმავებულად",
            description: "დაეუფლეთ JavaScript-ის ყველაზე მნიშვნელოვან მონაცემთა სტრუქტურებს - მასივებსა და ობიექტებს."
        }
    },
    advanced_functions: {
        en: {
            title: "Functions + Arrays & Objects",
            description: "Combine functions with arrays and objects to create powerful programs."
        },
        ka: {
            title: "ფუნქციები + მასივები და ობიექტები",
            description: "გააერთიანეთ ფუნქციები მასივებთან და ობიექტებთან ძლიერი პროგრამების შესაქმნელად."
        }
    },
    advanced_arrays: {
        en: {
            title: "Advanced Array Methods",
            description: "Learn powerful array methods like map, filter, reduce, and more."
        },
        ka: {
            title: "მასივების გაღრმავებული მეთოდები",
            description: "ისწავლეთ მასივების ძლიერი მეთოდები როგორიცაა map, filter, reduce და სხვა."
        }
    },
    typescript: {
        en: {
            title: "TypeScript Introduction",
            description: "Get started with TypeScript - JavaScript with type safety."
        },
        ka: {
            title: "TypeScript-ის შესავალი",
            description: "დაიწყეთ TypeScript-ის შესწავლა - JavaScript ტიპების უსაფრთხოებით."
        }
    },
    dom: {
        en: {
            title: "DOM Manipulation",
            description: "Learn how to interact with web pages using the Document Object Model."
        },
        ka: {
            title: "DOM მანიპულაცია",
            description: "ისწავლეთ როგორ იმოქმედოთ ვებ გვერდებთან Document Object Model-ის გამოყენებით."
        }
    },
    events: {
        en: {
            title: "Events & Advanced DOM",
            description: "Master event handling and advanced DOM manipulation techniques."
        },
        ka: {
            title: "Events და გაღრმავებული DOM",
            description: "დაეუფლეთ event-ების დამუშავებას და DOM-ის გაღრმავებულ მანიპულაციის ტექნიკებს."
        }
    },
    async: {
        en: {
            title: "Async JavaScript",
            description: "Understand asynchronous programming with callbacks, promises, and async/await."
        },
        ka: {
            title: "ასინქრონული JavaScript",
            description: "გაიგეთ ასინქრონული პროგრამირება callback-ებით, promise-ებით და async/await-ით."
        }
    },
    api: {
        en: {
            title: "API Requests",
            description: "Learn how to fetch data from APIs and work with external services."
        },
        ka: {
            title: "API მოთხოვნები",
            description: "ისწავლეთ როგორ მოიტანოთ მონაცემები API-დან და იმუშაოთ გარე სერვისებთან."
        }
    },
    error_handling: {
        en: {
            title: "Error Handling",
            description: "Learn how to handle errors gracefully in your JavaScript applications."
        },
        ka: {
            title: "შეცდომების მართვა",
            description: "ისწავლეთ როგორ მართოთ შეცდომები ელეგანტურად თქვენს JavaScript აპლიკაციებში."
        }
    }
};

// UI translations
const uiText = {
    en: {
        'nav-home': 'Home',
        'nav-categories': 'Categories', 
        'javascript': 'JavaScript',
        'js-interactive': 'Interactive Tutorials',
        'js-progress-text': 'tutorials to master JavaScript from basics to advanced concepts',
        'beginner': 'Beginner',
        'intermediate': 'Intermediate',
        'advanced': 'Advanced',
        'progress-title': 'Progress',
        'progress-encouragement': 'Keep going! You\'re doing great! 🎉'
    },
    ka: {
        'nav-home': 'მთავარი',
        'nav-categories': 'კატეგორიები',
        'javascript': 'ჯავასკრიპტი', 
        'js-interactive': 'ინტერაქტიული გაკვეთილები',
        'js-progress-text': 'გაკვეთილი ჯავასკრიპტის დასაუფლებლად საწყისებიდან გაღრმავებულ კონცეფციებამდე',
        'beginner': 'დამწყები',
        'intermediate': 'საშუალო', 
        'advanced': 'გაღრმავებული',
        'progress-title': 'პროგრესი',
        'progress-encouragement': 'გააგრძელეთ! შესანიშნავად გერთულებათ! 🎉'
    }
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
    loadTutorial('variables');
    const firstTutorial = document.querySelector('.tutorial-item[data-tutorial="variables"]');
    if (firstTutorial) {
        setActive(firstTutorial);
    }
});

// Theme toggle functionality
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

function setupNavigation() {
    document.querySelectorAll('.tutorial-item').forEach(item => {
        item.addEventListener('click', function() {
            const tutorial = this.dataset.tutorial;
            if (tutorials[tutorial]) {
                loadTutorial(tutorial);
                setActive(this);
            }
        });
    });
}

function setupLanguage() {
    // Add dropdown toggle functionality
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    
    if (languageBtn && languageDropdown) {
        // Toggle dropdown
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
                languageDropdown.classList.add('hidden');
            }
        });
    }
    
    // Handle language selection
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            currentLanguage = this.dataset.lang;
            localStorage.setItem('language', currentLanguage);
            updateLanguage();
            if (tutorials[currentTutorial]) {
                loadTutorial(currentTutorial);
            }
            if (languageDropdown) {
                languageDropdown.classList.add('hidden');
            }
            showToast();
        });
    });
}

function loadTutorial(name) {
    currentTutorial = name;
    const content = tutorials[name];
    
    if (!content) {
        console.log('Tutorial not found:', name);
        return;
    }
    
    const title = document.getElementById('tutorialTitle');
    const desc = document.getElementById('tutorialDescription');
    
    if (title) title.textContent = content[currentLanguage].title;
    if (desc) desc.textContent = content[currentLanguage].description;
    
    // Update the tutorial content section with dynamic content
    updateTutorialContent(name);
    
    // Update the practice task section
    updatePracticeTask(name);
}

function setActive(item) {
    document.querySelectorAll('.tutorial-item').forEach(el => {
        el.className = 'tutorial-item flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors';
    });
    
    item.className = 'tutorial-item flex items-center p-3 rounded-lg cursor-pointer bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-blue-700 dark:text-blue-300';
    
    // Update progress
    updateProgress();
}

function updateLanguage() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (uiText[currentLanguage] && uiText[currentLanguage][key]) {
            el.textContent = uiText[currentLanguage][key];
        }
    });
    
    const flag = document.getElementById('currentFlag');
    const lang = document.getElementById('currentLang');
    if (flag && lang) {
        if (currentLanguage === 'ka') {
            flag.textContent = '🇬🇪';
            lang.textContent = 'KA';
        } else {
            flag.textContent = '🇺🇸';
            lang.textContent = 'EN';
        }
    }
}

function showToast() {
    const msg = currentLanguage === 'ka' ? 'ენა შეიცვალა! 🇬🇪' : 'Language changed! 🇺🇸';
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg z-50';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// Code editor functions
function runCode() {
    const editor = document.getElementById('codeEditor');
    const output = document.getElementById('consoleOutput');
    if (!editor || !output) return;
    
    const code = editor.value.trim();
    if (!code) {
        output.innerHTML = '<div class="text-blue-400">> Write some code first! 🚀</div>';
        return;
    }
    
    output.innerHTML = '';
    
    try {
        const logs = [];
        const originalLog = console.log;
        console.log = (...args) => logs.push(args.join(' '));
        
        eval(code);
        console.log = originalLog;
        
        if (logs.length === 0) {
            output.innerHTML = '<div class="text-green-400">> Code executed successfully!</div>';
        } else {
            logs.forEach(log => {
                const div = document.createElement('div');
                div.className = 'text-green-400 mb-1';
                div.textContent = '> ' + log;
                output.appendChild(div);
            });
        }
    } catch (error) {
        const div = document.createElement('div');
        div.className = 'text-red-400';
        div.textContent = '> Error: ' + error.message;
        output.appendChild(div);
    }
}

function resetCode() {
    const editor = document.getElementById('codeEditor');
    if (editor) {
        editor.value = '// Start coding here...\n\nconsole.log("Hello, World!");';
    }
    clearConsole();
}

function clearConsole() {
    const output = document.getElementById('consoleOutput');
    if (output) {
        output.innerHTML = '<div class="text-gray-500">// Console output will appear here...</div>';
    }
}

// Setup code editor buttons
document.addEventListener('DOMContentLoaded', function() {
    const runBtn = document.getElementById('runCodeBtn');
    const resetBtn = document.getElementById('resetBtn');
    const clearBtn = document.getElementById('clearConsoleBtn');
    const clearCodeBtn = document.getElementById('clearCodeBtn');
    const copyCodeBtn = document.getElementById('copyCodeBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (runBtn) runBtn.addEventListener('click', runCode);
    if (resetBtn) resetBtn.addEventListener('click', resetCode);
    if (clearBtn) clearBtn.addEventListener('click', clearConsole);
    if (clearCodeBtn) {
        clearCodeBtn.addEventListener('click', () => {
            const editor = document.getElementById('codeEditor');
            if (editor) editor.value = '';
        });
    }
    if (copyCodeBtn) {
        copyCodeBtn.addEventListener('click', () => {
            const editor = document.getElementById('codeEditor');
            if (editor) {
                navigator.clipboard.writeText(editor.value);
                showToast('Code copied!');
            }
        });
    }
    
    // Navigation buttons
    if (prevBtn) prevBtn.addEventListener('click', navigatePrevious);
    if (nextBtn) nextBtn.addEventListener('click', navigateNext);
});

// Progress tracking
function updateProgress() {
    const tutorialOrder = ['variables', 'functions', 'controlflow', 'arrays', 'advanced_functions', 
                          'advanced_arrays', 'typescript', 'dom', 'events', 'async', 'api', 'error_handling'];
    const currentIndex = tutorialOrder.indexOf(currentTutorial);
    const totalTutorials = tutorialOrder.length;
    
    // Update progress bar
    const progressPercentage = ((currentIndex + 1) / totalTutorials) * 100;
    const progressBar = document.querySelector('.bg-gradient-to-r.from-blue-500.to-purple-500');
    if (progressBar) {
        progressBar.style.width = progressPercentage + '%';
    }
    
    // Update progress text
    const progressText = document.querySelector('.text-sm.text-gray-500.dark\\:text-gray-400');
    if (progressText) {
        progressText.textContent = `${currentIndex + 1}/${totalTutorials}`;
    }
    
    // Update navigation counter
    const currentSpan = document.getElementById('currentTutorial');
    const totalSpan = document.getElementById('totalTutorials');
    if (currentSpan) currentSpan.textContent = currentIndex + 1;
    if (totalSpan) totalSpan.textContent = totalTutorials;
    
    // Update navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.disabled = currentIndex === 0;
    }
    if (nextBtn) {
        nextBtn.disabled = currentIndex === totalTutorials - 1;
    }
}

// Navigation functions
function navigatePrevious() {
    const tutorialOrder = ['variables', 'functions', 'controlflow', 'arrays', 'advanced_functions', 
                          'advanced_arrays', 'typescript', 'dom', 'events', 'async', 'api', 'error_handling'];
    const currentIndex = tutorialOrder.indexOf(currentTutorial);
    
    if (currentIndex > 0) {
        const prevTutorial = tutorialOrder[currentIndex - 1];
        const prevItem = document.querySelector(`.tutorial-item[data-tutorial="${prevTutorial}"]`);
        if (prevItem) {
            prevItem.click();
        }
    }
}

function navigateNext() {
    const tutorialOrder = ['variables', 'functions', 'controlflow', 'arrays', 'advanced_functions', 
                          'advanced_arrays', 'typescript', 'dom', 'events', 'async', 'api', 'error_handling'];
    const currentIndex = tutorialOrder.indexOf(currentTutorial);
    
    if (currentIndex < tutorialOrder.length - 1) {
        const nextTutorial = tutorialOrder[currentIndex + 1];
        const nextItem = document.querySelector(`.tutorial-item[data-tutorial="${nextTutorial}"]`);
        if (nextItem) {
            nextItem.click();
        }
    }
}

// Update tutorial content dynamically
function updateTutorialContent(tutorialName) {
    const content = tutorialContent[tutorialName];
    const tutorialContentEl = document.getElementById('tutorialContent');
    
    if (!content || !tutorialContentEl) {
        console.log('Content not found for:', tutorialName);
        return;
    }
    
    const langContent = content[currentLanguage];
    
    tutorialContentEl.innerHTML = `
        <!-- Concept Section -->
        <div class="content-section mb-8">
            <h2 class="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">📦 What is ${tutorials[tutorialName][currentLanguage].title}?</h2>
            <div class="content-text prose dark:prose-invert max-w-none">
                <p class="text-lg mb-4">${langContent.concept}</p>
            </div>
        </div>

        <!-- Examples Section -->
        <div class="content-section">
            <h2 class="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">🎭 Examples</h2>
            <div class="content-text prose dark:prose-invert max-w-none">
                <div class="grid gap-4 mb-6">
                    ${langContent.examples.map((example, index) => `
                        <div class="bg-${['green', 'blue', 'yellow'][index % 3]}-50 dark:bg-${['green', 'blue', 'yellow'][index % 3]}-900/20 p-4 rounded-lg border border-${['green', 'blue', 'yellow'][index % 3]}-200 dark:border-${['green', 'blue', 'yellow'][index % 3]}-800">
                            <h4 class="font-bold text-${['green', 'blue', 'yellow'][index % 3]}-800 dark:text-${['green', 'blue', 'yellow'][index % 3]}-200 mb-2">${example.title}</h4>
                            <p class="text-gray-700 dark:text-gray-300 mb-2">${example.desc}:</p>
                            <pre class="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded text-sm overflow-x-auto"><code>${example.code}</code></pre>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Update practice task dynamically
function updatePracticeTask(tutorialName) {
    const content = tutorialContent[tutorialName];
    const practiceContentEl = document.getElementById('practiceContent');
    
    if (!content || !practiceContentEl) {
        // For tutorials without detailed content, show a generic message
        if (practiceContentEl) {
            practiceContentEl.innerHTML = `
                <h4 class="text-lg font-bold text-green-800 dark:text-green-200 mb-3">💻 Let's Practice!</h4>
                <div class="practice-task">
                    <div class="content-text">
                        <p class="mb-4"><strong>Your Task:</strong></p>
                        <p class="mb-4">Practice the concepts from this tutorial in the code editor below!</p>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Try experimenting with the concepts you've learned.</p>
                    </div>
                </div>
                <p class="text-gray-500 italic mt-4">
                    💡 Remember: There's no right or wrong way - just experiment and have fun learning!
                </p>
            `;
        }
        return;
    }
    
    const langContent = content[currentLanguage];
    
    practiceContentEl.innerHTML = `
        <h4 class="text-lg font-bold text-green-800 dark:text-green-200 mb-3">💻 ${langContent.practice.title}</h4>
        <div class="practice-task">
            <div class="content-text">
                <p class="mb-4"><strong>${currentLanguage === 'en' ? 'Your Task:' : 'თქვენი დავალება:'}</strong></p>
                <ol class="list-decimal pl-6 space-y-2 mb-4">
                    ${langContent.practice.tasks.map(task => `<li>${task}</li>`).join('')}
                </ol>
                <p class="text-sm text-gray-600 dark:text-gray-400">${currentLanguage === 'en' ? 'Try it in the code editor below!' : 'სცადეთ ქვემოთ მოცემულ კოდის რედაქტორში!'}</p>
            </div>
        </div>
        <p class="text-gray-500 italic mt-4">
            💡 ${currentLanguage === 'en' ? "Remember: There's no right or wrong way - just experiment and have fun learning!" : "გახსოვდეთ: არ არსებობს სწორი ან არასწორი გზა - უბრალოდ ექსპერიმენტირებდით და სიამოვნებით სწავლობდით!"}
        </p>
    `;
} 