// Simple Tutorial Navigation Fix
let currentTutorial = 'variables';
let currentLanguage = localStorage.getItem('language') || 'en';

// Tutorial detailed content
const tutorialContent = {
    variables: {
        en: {
            concept: "Variables are like labeled boxes that store information. In JavaScript, we create variables using 'let' for changeable values and 'const' for constant values. They can hold numbers, text, booleans and even complex data like arrays or objects. Choosing clear names and the right keyword (const by default, let when you really need to re-assign) makes your code easier to read and prevents accidental bugs. Think of variables as your program's memory – you label a drawer, put something inside, and later open it to reuse or update that value.",
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
            concept: "ცვლადები წარმოდგენილია დასახელებული უჯრების სახით, რომელშიც ინახება ინფორმაცია. JavaScript-ში მუდმივ მნიშვნელობებს ვქმნით const-ით, ხოლო ცვლადებს let-ით. ცვლადები შეიძლება შეიცავდეს რიცხვებს, ტექსტს, ბულიანებს და უფრო რთულ სტრუქტურებს, მაგალითად მასივებსა და ობიექტებს. სწორი საკვანძო სიტყვის არჩევა (ყოველთვის const, თუ ნამდვილად არ გჭირდებათ გადათავსება let-ზე) და გააზრებული სახელები დაგეხმარებათ გაუგებრობების თავიდან აცილებაში. წარმოიდგინეთ სანომრე თარო – დააწერეთ ეტიკეტი, ჩადეთ მონაცემი და გამოიყენეთ როცა დაგჭირდებათ.",
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
            concept: "Functions are reusable blocks of logic that take input, process it, and optionally return output – just like kitchen recipes: ingredients in, delicious cake out! They help you avoid repetition and keep code organised. In modern JavaScript we prefer 'function' declarations or arrow-functions. Naming a function with a verb (calculateTax, fetchUsers) describes what it does and makes programs self-documenting. By combining parameters and return values you can build pipelines that transform data step by step.",
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
            concept: "ფუნქციები წარმოადგენს ხელახალ გამოსაყენებელ ლოგიკას, რომელიც იღებს პარამეტრებს, ამუშავებს მათ და შეიძლება დააბრუნოს შედეგი – როგორც რეცეპტი: ინგრედიენტები შედის, გემოიანი ნამცხვარი გამოდის! ასე თავიდან ავიცილებთ კოდის კოპირებას და შევიტანთ წესრიგს. თანამედროვე JavaScript-ში ვიყენებთ function განცხადებებს ან arrow-ფუნქციებს. ფუნქციის ზმნური სახელწოდება (calculateTax, fetchUsers) აღწერს მის დანიშნულებას და კოდს ხდის თვით-დოკუმენტირებულს. პარამეტრებისა და დაბრუნებული მნიშვნელობების კომბინაციით შეგვიძლია ავაშენოთ მონაცემთა დამუშავების ჯაჭვი.",
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
            concept: "Control flow gives your programs decision-making powers (if/else, switch) and the ability to repeat work (for, while, do…while). Picture a GPS that chooses a route based on traffic and loops through turns until destination – that's control flow in action. Learning truthy / falsy values, comparison operators (== vs ===), and loop pitfalls (infinite loops!) prepares you for solving real-world problems where tasks depend on conditions.",
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
            concept: "მართვის ნაკადი თქვენს კოდს აძლევს გადაწყვეტილებების მიღების უნარს (if/else, switch) და მოქმედებების გამეორებას (for, while, do…while). წარმოიდგინეთ GPS, რომელიც არჩევს გზას საცობის მიხედვით და უხვევს მანამ, სანამ მიზანს მიაღწევს – ეს control flow-ის მუშაობაა. გქონდეთ წარმოდგენა truthy / falsy მნიშვნელობებზე, შედარების ოპერატორებზე (== და ===) და უსასრულო ციკლების საფრთხეებზე, რათა დაწეროთ საიმედო ალგორითმები.",
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
            concept: "Arrays let you group related values, while objects bundle properties under a single name. Together they form the backbone of real applications – shopping carts, user profiles, chat messages. Understanding index order, common methods (push, pop, splice) and object property access (dot vs bracket) equips you to model any data. Remember: arrays are ordered lists, objects are labelled collections, and you can nest them to build rich structures.",
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
            concept: "მასივები გაძლევთ საშუალებას შეკრიბოთ დაკავშირებული მნიშვნელობები, ხოლო ობიექტები აერთიანებს თვისებებს ერთ სახელის ქვეშ. სწორედ ისინი წამყვან როლს ასრულებენ აპლიკაციების უმეტეს ნაწილში – საკალათო პროდუქტი, მომხმარებლის პროფილი, ჩატის შეტყობინება. ისწავლეთ ინდექსების მიმდევრობა, ძირითადი მეთოდები (push, pop, splice) და ობიექტის property-ზე წვდომა (dot vs bracket), რათა მოირგოთ ნებისმიერი მონაცემი. დაიმახსოვრეთ: მასივები აწყობილი სიებია, ობიექტები – ნიშანდებული კოლექციები; მათი ჩადგმით კი მიიღებთ მდიდარ სტრუქტურებს.",
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
            concept: "Combining arrays, objects and functions unlocks patterns like higher-order functions (map, filter), callbacks and reusable helpers. Imagine a restaurant POS: an array of orders processed by a calculateTotal function returning an object receipt – that's advanced functions at work. Learning scope, return value best-practices and side-effect free pure functions will help you write maintainable code.",
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
            concept: "Advanced array methods (map, filter, reduce, find, some, every) let you transform, search and summarise data declaratively – no manual for-loops required. They follow the same rules as Lego: snap pieces together to build complex queries while keeping each step clear. Mastering immutability (returning new arrays) prevents sneaky bugs and prepares you for functional paradigms like React state updates.",
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
            concept: "მასივების გაღრმავებული მეთოდები (map, filter, reduce, find, some, every) გაძლევთ შესაძლებლობას დეკლარაციულად გარდაქმნათ, გაფილტროთ და შეაჯამოთ მონაცემები – for-ციკლების გარეშე. ეს მსგავსია ლეგოს: დააწყვეთ კუბიკები, რომ შექმნათ რთული ოპერაციები, თითოეული ნაბიჯი ნათლად. თავიდან აიცილეთ მასივის პირდაპირი შეცვლა (immutability) და მოემზადეთ ფუნქციური პარადიგმებისთვის, როგორიცაა React-ის state განახლებები.",
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
     },
     typescript: {
         en: {
             concept: "TypeScript adds type safety to JavaScript, helping you catch errors early and write more reliable code. It's like JavaScript with superpowers!",
             examples: [
                 { title: "Basic Types", code: 'let name: string = "John";\nlet age: number = 25;\nlet isStudent: boolean = true;', desc: "Specify what type of data each variable holds" },
                 { title: "Function Types", code: 'function greet(name: string): string {\n  return "Hello " + name;\n}', desc: "Define what types functions accept and return" },
                 { title: "Interface", code: 'interface Person {\n  name: string;\n  age: number;\n}\n\nconst user: Person = {\n  name: "Alice",\n  age: 30\n};', desc: "Create contracts for object shapes" }
             ],
             practice: {
                 title: "Practice TypeScript Types",
                 tasks: [
                     "Create variables with specific types (string, number, boolean)",
                     "Write a function that takes typed parameters and returns a typed value",
                     "Create an interface for a Book object with title and author properties",
                     "Create a book object that matches your interface"
                 ]
             }
         },
         ka: {
             concept: "TypeScript ამატებს ტიპების უსაფრთხოებას JavaScript-ს, რაც გეხმარებათ ადრე დაიჭიროთ შეცდომები და დაწეროთ უფრო სანდო კოდი. ეს არის JavaScript ზესახეობებით!",
             examples: [
                 { title: "ძირითადი ტიპები", code: 'let name: string = "ჯონი";\nlet age: number = 25;\nlet isStudent: boolean = true;', desc: "მიუთითეთ რა ტიპის მონაცემებს ინახავს თითოეული ცვლადი" },
                 { title: "ფუნქციის ტიპები", code: 'function greet(name: string): string {\n  return "გამარჯობა " + name;\n}', desc: "განსაზღვრეთ რა ტიპებს იღებს და აბრუნებს ფუნქცია" },
                 { title: "ინტერფეისი", code: 'interface Person {\n  name: string;\n  age: number;\n}\n\nconst user: Person = {\n  name: "ალისი",\n  age: 30\n};', desc: "შექმენით კონტრაქტები ობიექტების ფორმებისთვის" }
             ],
             practice: {
                 title: "გაივარჯიშეთ TypeScript ტიპებში",
                 tasks: [
                     "შექმენით ცვლადები კონკრეტული ტიპებით (string, number, boolean)",
                     "დაწერეთ ფუნქცია რომელიც იღებს ტიპიზებულ პარამეტრებს და აბრუნებს ტიპიზებულ მნიშვნელობას",
                     "შექმენით ინტერფეისი წიგნის ობიექტისთვის სათაურისა და ავტორის თვისებებით",
                     "შექმენით წიგნის ობიექტი რომელიც შეესაბამება თქვენს ინტერფეისს"
                 ]
             }
         }
     },
     dom: {
         en: {
             concept: "Think of a web page as a living tree of nodes. The Document Object Model (DOM) is the in-memory representation of that tree that JavaScript can read and change on the fly. By selecting nodes (getElementById, querySelector) you can alter text, attributes, styles, or even grow completely new branches — giving users instant feedback without reloading the page.",
             examples: [
                 { title: "Select Elements", code: 'const title = document.getElementById("title");\nconst buttons = document.querySelectorAll(".btn");\nconst firstP = document.querySelector("p");', desc: "Find elements on your web page" },
                 { title: "Change Content", code: 'title.textContent = "New Title";\ntitle.innerHTML = "<strong>Bold Title</strong>";\ntitle.style.color = "blue";', desc: "Modify text, HTML, and styles" },
                 { title: "Create Elements", code: 'const newDiv = document.createElement("div");\nnewDiv.textContent = "Hello World";\ndocument.body.appendChild(newDiv);', desc: "Add new elements to the page" }
             ],
             practice: {
                 title: "Manipulate the DOM",
                 tasks: [
                     "Select an element by ID and change its text content",
                     "Create a new paragraph element and add it to the page",
                     "Change the background color of an element using style.backgroundColor",
                     "Select all elements with a class and loop through them to modify each one"
                 ]
             }
         },
         ka: {
             concept: "DOM-ი (Document Object Model) ვებ-გვერდს წარმოაჩენს როგორც \"ცოცხალი\" ელემენტების ხეს, რომელსაც JavaScript რეალურ დროში კითხულობს და ცვლის. ელემენტების არჩევით (getElementById, querySelector) შეგიძლიათ შეცვალოთ ტექსტი, ატრიბუტები, სტილები, ან დაამატოთ სრულიად ახალი ფილიალები ისე, რომ გვერდი თავიდან არ ჩაიტვირთოს — რაც მყისიერ, ინტერაქტიულ გამოცდილებას იძლევა.",
             examples: [
                 { title: "ელემენტების არჩევა", code: 'const title = document.getElementById("title");\nconst buttons = document.querySelectorAll(".btn");\nconst firstP = document.querySelector("p");', desc: "იპოვეთ ელემენტები თქვენს ვებ გვერდზე" },
                 { title: "შინაარსის შეცვლა", code: 'title.textContent = "ახალი სათაური";\ntitle.innerHTML = "<strong>მუქი სათაური</strong>";\ntitle.style.color = "blue";', desc: "შეცვალეთ ტექსტი, HTML და სტილები" },
                 { title: "ელემენტების შექმნა", code: 'const newDiv = document.createElement("div");\nnewDiv.textContent = "გამარჯობა მსოფლიო";\ndocument.body.appendChild(newDiv);', desc: "დაამატეთ ახალი ელემენტები გვერდზე" }
             ],
             practice: {
                 title: "მანიპულირება DOM-ით",
                 tasks: [
                     "აირჩიეთ ელემენტი ID-ით და შეცვალეთ მისი ტექსტური შინაარსი",
                     "შექმენით ახალი პარაგრაფის ელემენტი და დაამატეთ იგი გვერდზე",
                     "შეცვალეთ ელემენტის ფონის ფერი style.backgroundColor-ის გამოყენებით",
                     "აირჩიეთ ყველა ელემენტი კლასით და გაიარეთ ციკლი თითოეულის შესაცვლელად"
                 ]
             }
         }
     },
     events: {
         en: {
             concept: "Web pages come alive through events — signals that something happened (a click, a key press, a network request finishing). Attaching handlers with addEventListener is like giving your page eyes and ears. Understanding bubbling vs capturing, preventing default behaviour, and throttling or debouncing rapid events lets you craft smooth, accessible interactions.",
             examples: [
                 { title: "Click Events", code: 'function ClickButton() {\n  const handleClick = () => {\n    alert("Button clicked!");\n  };\n  \n  return (\n    <button onClick={handleClick}>\n      დამაკლიკე!\n    </button>\n  );\n}', desc: "Handle button clicks" },
                 { title: "Input Events", code: 'function ContactForm() {\n  const [email, setEmail] = useState("");\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log("Email:", email);\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type="email"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n      />\n      <button type="submit">გაგზავნა</button>\n    </form>\n  );\n}', desc: "Handle form submissions" },
                 { title: "Mouse Events", code: 'div.addEventListener("mouseenter", () => {\n  div.style.backgroundColor = "yellow";\n});\n\ndiv.addEventListener("mouseleave", () => {\n  div.style.backgroundColor = "white";\n});', desc: "Respond to mouse movements" }
             ],
             practice: {
                 title: "Handle User Events",
                 tasks: [
                     "Add a click event to a button that changes the page background color",
                     "Create an input field that shows what you type in real-time",
                     "Add mouse hover effects to change an element's appearance",
                     "Create a form that prevents default submission and shows a custom message"
                 ]
             }
         },
         ka: {
             concept: "ივენთები აცოცხლებს ვებ-გვერდს — ეს არის სიგნალი, რომ მოხდა რაღაც (დაკლიკება, კლავიატურის დაჭერა, ფორმის გაგზავნა). addEventListener-ის მეშვეობით გვაკავშირებთ ყური და თვალი ჩვენს ელემენტებზე. ბაბლინგისა და კეპჩერინგის, default ქცევის აღკვეთის და ხშირი მოვლენების (scroll, resize) დამუხრუჭება/დაბალანსება (throttle, debounce) საშუალებას გვაძლევს შევქმნათ გლუვი და ხელმისაწვდომი UI.",
             examples: [
                 { title: "Click Event-ები", code: 'function ClickButton() {\n  const handleClick = () => {\n    alert("ღილაკზე დაკლიკდა!");\n  };\n  \n  return (\n    <button onClick={handleClick}>\n      დამაკლიკე!\n    </button>\n  );\n}', desc: "დაამუშავეთ ღილაკის კლიკები" },
                 { title: "ფორმის მართვა", code: 'function ContactForm() {\n  const [email, setEmail] = useState("");\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log("ემაილი:", email);\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type="email"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n      />\n      <button type="submit">გაგზავნა</button>\n    </form>\n  );\n}', desc: "დაამუშავეთ ფორმის გაგზავნები" },
                 { title: "კონტროლირებადი კომპონენტები", code: 'function ControlledInput() {\n  const [value, setValue] = useState("");\n  \n  return (\n    <div>\n      <input\n        value={value}\n        onChange={(e) => setValue(e.target.value)}\n        placeholder="აქ ჩაწერეთ..."\n      />\n      <button onClick={() => setValue("")}>\n        გასუფთავება\n      </button>\n    </div>\n  );\n}', desc: "კონტროლი შეყვანის ველებზე state-ით" }
             ],
             practice: {
                 title: "დაეუფლეთ Event-ების მართვას",
                 tasks: [
                     "შექმენით ღილაკი რომელიც კლიკისას ცვლის ფონის ფერს",
                     "ააშენეთ ფორმა რომელიც იღებს მომხმარებლის შეყვანას და აჩვენებს მას",
                     "შექმენით კონტროლირებადი შეყვანის ველი გასუფთავების ღილაკით",
                     "ააშენეთ მარტივი კალკულატორი click event-ებით რიცხვებისა და ოპერაციებისთვის"
                 ]
             }
         }
     },
     async: {
         en: {
             concept: "JavaScript executes on a single thread, yet asynchronous programming lets you wait for time-consuming tasks without freezing the UI. The event loop schedules callbacks, Promises model future values, and async/await wraps them in clean, synchronous-looking syntax. Master these building blocks to fetch data, delay actions, and coordinate multiple tasks in parallel.",
             examples: [
                 { title: "Promises", code: 'const promise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve("Data loaded!");\n  }, 2000);\n});\n\npromise.then(result => console.log(result));', desc: "Handle delayed operations" },
                 { title: "Async/Await", code: 'async function fetchData() {\n  try {\n    const result = await promise;\n    console.log(result);\n  } catch (error) {\n    console.log("Error:", error);\n  }\n}', desc: "Cleaner syntax for promises" },
                 { title: "Fetch API", code: 'async function getUsers() {\n  const response = await fetch("/api/users");\n  const users = await response.json();\n  return users;\n}', desc: "Get data from servers" }
             ],
             practice: {
                 title: "Practice Async Programming",
                 tasks: [
                     "Create a promise that resolves after 3 seconds with a success message",
                     "Use async/await to handle the promise and log the result",
                     "Create a function that simulates loading data with a delay",
                     "Handle both success and error cases in your async function"
                 ]
             }
         },
         ka: {
             concept: "ასინქრონული JavaScript საშუალებას გაძლევთ დაამუშაოთ დროის მომხმარებელი დავალებები თქვენი პროგრამის დაბლოკვის გარეშე. შესანიშნავია მონაცემების მოტანისთვის, ტაიმერებისთვის და სხვა ოპერაციებისთვის რომლებიც დროს საჭიროებს.",
             examples: [
                 { title: "Promise-ები", code: 'const promise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve("მონაცემები ჩაიტვირთა!");\n  }, 2000);\n});\n\npromise.then(result => console.log(result));', desc: "დაამუშავეთ დაგვიანებული ოპერაციები" },
                 { title: "Async/Await", code: 'async function fetchData() {\n  try {\n    const result = await promise;\n    console.log(result);\n  } catch (error) {\n    console.log("შეცდომა:", error);\n  }\n}', desc: "უფრო სუფთა სინტაქსი promise-ებისთვის" },
                 { title: "Fetch API", code: 'async function getUsers() {\n  const response = await fetch("/api/users");\n  const users = await response.json();\n  return users;\n}', desc: "მიიღეთ მონაცემები სერვერებიდან" }
             ],
             practice: {
                 title: "გაივარჯიშეთ ასინქრონულ პროგრამირებაში",
                 tasks: [
                     "შექმენით promise რომელიც 3 წამის შემდეგ წარმატების შეტყობინებით დასრულდება",
                     "გამოიყენეთ async/await promise-ის დასამუშავებლად და შედეგის ლოგირებისთვის",
                     "შექმენით ფუნქცია რომელიც სიმულირებს მონაცემების ჩატვირთვას დაგვიანებით",
                     "დაამუშავეთ როგორც წარმატების, ისე შეცდომის შემთხვევები თქვენს async ფუნქციაში"
                 ]
             }
         }
     },
     api: {
         en: {
             concept: "An API (Application Programming Interface) is a contract for exchanging data. Using the Fetch API you can read (GET), create (POST), update (PUT/PATCH), and delete (DELETE) resources on remote servers — unlocking live weather, payments, or social feeds for your app. Knowing status codes, JSON parsing, CORS, and authentication tokens prepares you for real-world integrations.",
             examples: [
                 { title: "Basic Fetch", code: 'fetch("https://api.example.com/users")\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(error));', desc: "Get data from an API" },
                 { title: "Async Fetch", code: 'async function getWeather() {\n  try {\n    const response = await fetch("/api/weather");\n    const weather = await response.json();\n    return weather;\n  } catch (error) {\n    console.error("Failed to fetch:", error);\n  }\n}', desc: "Modern way to fetch data" },
                 { title: "POST Request", code: 'fetch("/api/users", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json"\n  },\n  body: JSON.stringify({\n    name: "John",\n    email: "john@example.com"\n  })\n});', desc: "Send data to an API" }
             ],
             practice: {
                 title: "Work with APIs",
                 tasks: [
                     "Fetch data from a public API (like JSONPlaceholder) and display it",
                     "Create an async function that handles API errors gracefully",
                     "Build a simple weather app that fetches weather data",
                     "Practice sending data to an API with a POST request"
                 ]
             }
         },
         ka: {
             concept: "API (Application Programming Interface) არის შეთანხმება მონაცემების გაცვლის შესახებ. Fetch API-ს გამოყენებით შეგიძლიათ რესურსების წაკითხვა (GET), შექმნა (POST), განახლება (PUT/PATCH) და წაშლა (DELETE) დისტანციურ სერვერზე, რითაც თქვენს აპს რეალურ დროში ამინდი, გადახდები თუ სოციალური ნიუსფიდი ემატება. სტატუს-კოდების, JSON-ის, CORS-ისა და ავტორიზაციის ტოკენების ცოდნა რეალური ინტეგრაციების საფუძველია.",
             examples: [
                 { title: "ძირითადი Fetch", code: 'fetch("https://api.example.com/users")\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(error));', desc: "მიიღეთ მონაცემები API-დან" },
                 { title: "Async Fetch", code: 'async function getWeather() {\n  try {\n    const response = await fetch("/api/weather");\n    const weather = await response.json();\n    return weather;\n  } catch (error) {\n    console.error("ვერ მოვიტანე:", error);\n  }\n}', desc: "თანამედროვე გზა მონაცემების მოტანისთვის" },
                 { title: "POST მოთხოვნა", code: 'fetch("/api/users", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json"\n  },\n  body: JSON.stringify({\n    name: "ჯონი",\n    email: "john@example.com"\n  })\n});', desc: "გაუგზავნეთ მონაცემები API-ს" }
             ],
             practice: {
                 title: "იმუშავეთ API-ებთან",
                 tasks: [
                     "მოიტანეთ მონაცემები საჯარო API-დან (როგორიცაა JSONPlaceholder) და აჩვენეთ",
                     "შექმენით async ფუნქცია რომელიც ელეგანტურად ამუშავებს API შეცდომებს",
                     "ააშენეთ მარტივი ამინდის აპი რომელიც მოიტანს ამინდის მონაცემებს",
                     "გაივარჯიშეთ მონაცემების გაგზავნაში API-სთვის POST მოთხოვნით"
                 ]
             }
         }
     },
     error_handling: {
         en: {
             concept: "Bugs, bad input, shaky networks — something will eventually fail. Robust error handling with try/catch, throw, and finally keeps your app standing and guides users toward recovery. Combine clear messages, custom Error classes, validation, and async error strategies to create fault-tolerant experiences that build user trust.",
             examples: [
                 { title: "Try-Catch", code: 'try {\n  const result = riskyOperation();\n  console.log(result);\n} catch (error) {\n  console.error("Something went wrong:", error.message);\n}', desc: "Handle errors that might occur" },
                 { title: "Async Error Handling", code: 'async function fetchData() {\n  try {\n    const response = await fetch("/api/data");\n    if (!response.ok) {\n      throw new Error("Network error");\n    }\n    return await response.json();\n  } catch (error) {\n    console.error("Fetch failed:", error);\n    return null;\n  }\n}', desc: "Handle async operation errors" },
                 { title: "Custom Errors", code: 'function validateAge(age) {\n  if (age < 0) {\n    throw new Error("Age cannot be negative");\n  }\n  if (age > 150) {\n    throw new Error("Age seems unrealistic");\n  }\n  return true;\n}', desc: "Create your own error messages" }
             ],
             practice: {
                 title: "Handle Errors Gracefully",
                 tasks: [
                     "Write a function that might fail and wrap it in try-catch",
                     "Create a function that validates user input and throws custom errors",
                     "Build an async function that handles network errors properly",
                     "Add error handling to prevent your app from crashing"
                 ]
             }
         },
         ka: {
             concept: "შეცდომები გარდაუვალია: ქსელი ითიშება, მომხმარებელი არასწორს წერს, ლოგიკა კუთხის შემთხვევებში იქცევა. ძლიერი შეცდომების მართვა try/catch-ით, throw-ით და finally-ით პროგრამას კრაფშისგან იცავს და მომხმარებელს გამოსავლის გზას აჩვენებს. მკაფიო მესიჯების, custom Error კლასებისა და async შეცდომების სტრატეგიების კომბინაცია საიმედო გამოცდილებას უზრუნველყოფს.",
             examples: [
                 { title: "Try-Catch", code: 'try {\n  const result = riskyOperation();\n  console.log(result);\n} catch (error) {\n  console.error("რაღაც არასწორად წავიდა:", error.message);\n}', desc: "დაამუშავეთ შეცდომები რომლებიც შეიძლება მოხდეს" },
                 { title: "Async შეცდომების მართვა", code: 'async function fetchData() {\n  try {\n    const response = await fetch("/api/data");\n    if (!response.ok) {\n      throw new Error("ქსელის შეცდომა");\n    }\n    return await response.json();\n  } catch (error) {\n    console.error("Fetch ჩავარდა:", error);\n    return null;\n  }\n}', desc: "დაამუშავეთ async ოპერაციების შეცდომები" },
                 { title: "მორგებული შეცდომები", code: 'function validateAge(age) {\n  if (age < 0) {\n    throw new Error("ასაკი არ შეიძლება იყოს უარყოფითი");\n  }\n  if (age > 150) {\n    throw new Error("ასაკი ირეალისტურად ჩანს");\n  }\n  return true;\n}', desc: "შექმენით თქვენი შეცდომების შეტყობინებები" }
             ],
             practice: {
                 title: "ელეგანტურად დაამუშავეთ შეცდომები",
                 tasks: [
                     "დაწერეთ ფუნქცია რომელიც შეიძლება ჩავარდეს და შეხვიეთ try-catch-ში",
                     "შექმენით ფუნქცია რომელიც ვალიდაციას აკეთებს მომხმარებლის შეყვანაზე და აგდებს მორგებულ შეცდომებს",
                     "ააშენეთ async ფუნქცია რომელიც სწორად ამუშავებს ქსელის შეცდომებს",
                     "დაამატეთ შეცდომების მართვა თქვენი აპის კრაშისგან თავის დასაცავად"
                 ]
             }
         }
     },
     es6_features: {
         en: {
             concept: "ES6 and beyond super-charged JavaScript with template literals, destructuring, arrow functions, default/rest/spread parameters, classes, modules, promises, and much more. Each feature trims boilerplate, clarifies intent, and enables patterns long enjoyed in other languages. Embracing them will level-up your productivity and keep your codebase future-proof.",
             examples: [
                 { title: "Template Literals", code: 'let name = "Luka";\nlet age = 20;\n\n// Instead of: "Hello " + name + "!"\nlet greeting = `Hello ${name}! You are ${age} years old.`;\n\n// Multi-line strings\nlet message = `\n    Welcome to AndLearn!\n    Start learning programming today.\n`;', desc: "Use backticks for string interpolation and multi-line strings" },
                 { title: "Destructuring", code: '// Array destructuring\nlet colors = ["red", "green", "blue"];\nlet [first, second, third] = colors;\n\n// Object destructuring\nlet person = {name: "Luka", age: 20, city: "Tbilisi"};\nlet {name, age, city} = person;', desc: "Extract values from arrays and objects easily" },
                 { title: "Spread Operator", code: '// Copying arrays\nlet original = [1, 2, 3];\nlet copy = [...original];\n\n// Combining arrays\nlet fruits = ["apple", "banana"];\nlet vegetables = ["carrot", "tomato"];\nlet food = [...fruits, ...vegetables];', desc: "Spread elements from arrays and objects" }
             ],
             practice: {
                 title: "Practice ES6+ Features",
                 tasks: [
                     "Use template literals to create a profile message with name and age",
                     "Destructure an array to get first and last elements",
                     "Use spread operator to combine two arrays",
                     "Destructure an object to extract specific properties"
                 ]
             }
         },
         ka: {
             concept: "ES6-მა და შემდეგმა ვერსიებმა JavaScript-ს მრავალი სიახლე შემატა: template literals, destructuring, arrow ფუნქციები, default/rest/spread პარამეტრები, კლასები, მოდულები, Promises და სხვა. ეს შესაძლებლობები ამცირებს ზედმეტ კოდს, ამარტივებს იდეის გადაცემას და ხდის პროგრამას თანამედროვე სტანდარტებთან თავსებადს.",
             examples: [
                 { title: "Template Literals", code: 'let name = "ლუკა";\nlet age = 20;\n\n// ნაცვლად: "გამარჯობა " + name + "!"\nlet greeting = `გამარჯობა ${name}! თქვენ ხართ ${age} წლის.`;\n\n// მრავალხაზიანი სტრინგები\nlet message = `\n    კეთილი იყოს თქვენი მობრძანება AndLearn-ზე!\n    დაიწყეთ პროგრამირების სწავლა დღესვე.\n`;', desc: "გამოიყენეთ backtick-ები სტრინგის ინტერპოლაციისთვის და მრავალხაზიანი სტრინგებისთვის" },
                 { title: "Destructuring", code: '// მასივის destructuring\nlet colors = ["წითელი", "მწვანე", "ლურჯი"];\nlet [first, second, third] = colors;\n\n// ობიექტის destructuring\nlet person = {name: "ლუკა", age: 20, city: "თბილისი"};\nlet {name, age, city} = person;', desc: "მარტივად ამოიღეთ მნიშვნელობები მასივებიდან და ობიექტებიდან" },
                 { title: "Spread Operator", code: '// მასივების კოპირება\nlet original = [1, 2, 3];\nlet copy = [...original];\n\n// მასივების გაერთიანება\nlet fruits = ["ვაშლი", "ბანანი"];\nlet vegetables = ["სტაფილო", "პომიდორი"];\nlet food = [...fruits, ...vegetables];', desc: "გაშალეთ ელემენტები მასივებიდან და ობიექტებიდან" }
             ],
             practice: {
                 title: "ივარჯიშეთ ES6+ ფუნქციებში",
                 tasks: [
                     "გამოიყენეთ template literals პროფილის შეტყობინების შესაქმნელად სახელითა და ასაკით",
                     "დაარღვიეთ მასივი პირველი და ბოლო ელემენტების მისაღებად",
                     "გამოიყენეთ spread operator ორი მასივის გასაერთიანებლად",
                     "დაარღვიეთ ობიექტი კონკრეტული თვისებების ამოსაღებად"
                 ]
             }
         }
     },
     closures_scope: {
         en: {
             concept: "Closures are functions that remember variables from their outer scope even after the outer function has finished executing. Understanding scope and closures is crucial for mastering JavaScript.",
             examples: [
                 { title: "Understanding Scope", code: 'let globalVar = "I\'m global";\n\nfunction outerFunction() {\n    let outerVar = "I\'m in outer function";\n    \n    function innerFunction() {\n        let innerVar = "I\'m in inner function";\n        console.log(globalVar);  // ✅ Accessible\n        console.log(outerVar);   // ✅ Accessible\n        console.log(innerVar);   // ✅ Accessible\n    }\n    \n    return innerFunction;\n}', desc: "Inner functions have access to outer scope variables" },
                 { title: "Creating Closures", code: 'function createCounter() {\n    let count = 0;\n    \n    return {\n        increment: () => ++count,\n        decrement: () => --count,\n        getCount: () => count\n    };\n}\n\nlet counter = createCounter();\nconsole.log(counter.increment()); // 1\nconsole.log(counter.getCount());  // 1', desc: "Functions retain access to outer variables" },
                 { title: "Practical Example", code: 'function createMultiplier(multiplier) {\n    return function(number) {\n        return number * multiplier;\n    };\n}\n\nlet double = createMultiplier(2);\nlet triple = createMultiplier(3);\n\nconsole.log(double(5)); // 10\nconsole.log(triple(4)); // 12', desc: "Each closure maintains its own copy of variables" }
             ],
             practice: {
                 title: "Master Closures and Scope",
                 tasks: [
                     "Create a function that returns a personalized greeter using closures",
                     "Build a simple bank account with private balance using closures",
                     "Create a multiplier factory that generates different multiplier functions",
                     "Implement a click counter that maintains separate counts for different buttons"
                 ]
             }
         },
         ka: {
             concept: "Closures არის ფუნქციები რომლებიც იხსენებენ ცვლადებს მათი გარე scope-იდან მაშინაც კი, როცა გარე ფუნქცია უკვე დასრულებულია. Scope-ისა და closures-ის გაგება მნიშვნელოვანია JavaScript-ის დასაუფლებლად.",
             examples: [
                 { title: "Scope-ის გაგება", code: 'let globalVar = "მე ვარ გლობალური";\n\nfunction outerFunction() {\n    let outerVar = "მე ვარ გარე ფუნქციაში";\n    \n    function innerFunction() {\n        let innerVar = "მე ვარ შიდა ფუნქციაში";\n        console.log(globalVar);  // ✅ ხელმისაწვდომია\n        console.log(outerVar);   // ✅ ხელმისაწვდომია\n        console.log(innerVar);   // ✅ ხელმისაწვდომია\n    }\n    \n    return innerFunction;\n}', desc: "შიდა ფუნქციებს აქვთ წვდომა გარე scope-ის ცვლადებზე" },
                 { title: "Closures-ის შექმნა", code: 'function createCounter() {\n    let count = 0;\n    \n    return {\n        increment: () => ++count,\n        decrement: () => --count,\n        getCount: () => count\n    };\n}\n\nlet counter = createCounter();\nconsole.log(counter.increment()); // 1\nconsole.log(counter.getCount());  // 1', desc: "ფუნქციები ინარჩუნებენ წვდომას გარე ცვლადებზე" },
                 { title: "პრაქტიკული მაგალითი", code: 'function createMultiplier(multiplier) {\n    return function(number) {\n        return number * multiplier;\n    };\n}\n\nlet double = createMultiplier(2);\nlet triple = createMultiplier(3);\n\nconsole.log(double(5)); // 10\nconsole.log(triple(4)); // 12', desc: "თითოეული closure ინარჩუნებს ცვლადების საკუთარ ასლს" }
             ],
             practice: {
                 title: "დაეუფლეთ Closures-ს და Scope-ს",
                 tasks: [
                     "შექმენით ფუნქცია რომელიც აბრუნებს პერსონალიზებულ მისალმებელს closures-ის გამოყენებით",
                     "ააშენეთ მარტივი ბანკის ანგარიში პირადი ბალანსით closures-ის გამოყენებით",
                     "შექმენით მამრავლი ქარხანა რომელიც აგენერირებს სხვადასხვა მამრავლი ფუნქციებს",
                     "დანერგეთ კლიკის მთვლელი რომელიც ინარჩუნებს ცალკე მთვლელებს სხვადასხვა ღილაკებისთვის"
                 ]
             }
         }
     },
     classes_prototypes: {
         en: {
             concept: "JavaScript classes provide a cleaner syntax for object-oriented programming. Understanding prototypes helps you understand how JavaScript objects work under the hood and how inheritance functions.",
             examples: [
                 { title: "ES6 Classes", code: 'class Student {\n    constructor(name, age, subject) {\n        this.name = name;\n        this.age = age;\n        this.subject = subject;\n        this.grades = [];\n    }\n    \n    addGrade(grade) {\n        this.grades.push(grade);\n    }\n    \n    getAverage() {\n        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;\n    }\n}', desc: "Modern class syntax for creating objects" },
                 { title: "Inheritance", code: 'class Teacher extends Student {\n    constructor(name, age, subject, experience) {\n        super(name, age, subject);\n        this.experience = experience;\n        this.students = [];\n    }\n    \n    addStudent(studentName) {\n        this.students.push(studentName);\n    }\n    \n    getExperience() {\n        return `${this.experience} years of teaching`;\n    }\n}', desc: "Extend classes to create specialized versions" },
                 { title: "Private Fields", code: 'class BankAccount {\n    #balance = 0; // Private field\n    \n    constructor(accountNumber) {\n        this.accountNumber = accountNumber;\n    }\n    \n    deposit(amount) {\n        if (amount > 0) {\n            this.#balance += amount;\n        }\n    }\n    \n    getBalance() {\n        return this.#balance;\n    }\n}', desc: "Use # for private fields that can\'t be accessed outside the class" }
             ],
             practice: {
                 title: "Master Classes and OOP",
                 tasks: [
                     "Create a Car class with brand, model, year, and methods to start/stop",
                     "Create a Book class and a Library class that manages multiple books",
                     "Use inheritance to create different types of vehicles (Car, Motorcycle, Truck)",
                     "Implement private fields to create a secure user account system"
                 ]
             }
         },
         ka: {
             concept: "JavaScript კლასები უზრუნველყოფს უფრო სუფთა სინტაქსს ობიექტზე ორიენტირებული პროგრამირებისთვის. პროტოტიპების გაგება გეხმარებათ გაიგოთ როგორ მუშაობენ JavaScript ობიექტები ქვეშ და როგორ ფუნქციონირებს მემკვიდრეობა.",
             examples: [
                 { title: "ES6 კლასები", code: 'class Student {\n    constructor(name, age, subject) {\n        this.name = name;\n        this.age = age;\n        this.subject = subject;\n        this.grades = [];\n    }\n    \n    addGrade(grade) {\n        this.grades.push(grade);\n    }\n    \n    getAverage() {\n        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;\n    }\n}', desc: "თანამედროვე კლასის სინტაქსი ობიექტების შესაქმნელად" },
                 { title: "მემკვიდრეობა", code: 'class Teacher extends Student {\n    constructor(name, age, subject, experience) {\n        super(name, age, subject);\n        this.experience = experience;\n        this.students = [];\n    }\n    \n    addStudent(studentName) {\n        this.students.push(studentName);\n    }\n    \n    getExperience() {\n        return `${this.experience} წლის სწავლების გამოცდილება`;\n    }\n}', desc: "გააფართოვეთ კლასები სპეციალიზებული ვერსიების შესაქმნელად" },
                 { title: "პირადი ველები", code: 'class BankAccount {\n    #balance = 0; // პირადი ველი\n    \n    constructor(accountNumber) {\n        this.accountNumber = accountNumber;\n    }\n    \n    deposit(amount) {\n        if (amount > 0) {\n            this.#balance += amount;\n        }\n    }\n    \n    getBalance() {\n        return this.#balance;\n    }\n}', desc: "გამოიყენეთ # პირადი ველებისთვის რომლებიც მიუწვდომელია კლასის გარეთ" }
             ],
             practice: {
                 title: "დაეუფლეთ კლასებს და OOP-ს",
                 tasks: [
                     "შექმენით Car კლასი ბრენდით, მოდელით, წლით და მეთოდებით გასაშვებად/გასაჩერებლად",
                     "შექმენით Book კლასი და Library კლასი რომელიც მართავს მრავალ წიგნს",
                     "გამოიყენეთ მემკვიდრეობა სხვადასხვა ტიპის ტრანსპორტის შესაქმნელად (მანქანა, მოტოციკლი, ტრაქი)",
                     "განახორციელეთ პირადი ველები უსაფრთხო მომხმარებლის ანგარიშის სისტემის შესაქმნელად"
                 ]
             }
         }
     },
     modules_import_export: {
         en: {
             concept: "ES6 modules allow you to organize your code into separate files and import/export functionality. This makes your code more maintainable, reusable, and easier to test.",
             examples: [
                 { title: "Basic Export/Import", code: '// math.js\nexport function add(a, b) {\n    return a + b;\n}\n\nexport function multiply(a, b) {\n    return a * b;\n}\n\nexport const PI = 3.14159;\n\n// main.js\nimport { add, multiply, PI } from \'./math.js\';\n\nconsole.log(add(2, 3));     // 5\nconsole.log(multiply(4, 5)); // 20\nconsole.log(PI);            // 3.14159', desc: "Export and import specific functions and variables" },
                 { title: "Default Exports", code: '// calculator.js\nclass Calculator {\n    add(a, b) { return a + b; }\n    subtract(a, b) { return a - b; }\n}\n\nexport default Calculator;\n\n// app.js\nimport Calculator from \'./calculator.js\';\n\nconst calc = new Calculator();\nconsole.log(calc.add(10, 5)); // 15', desc: "Export one main thing from a module" },
                 { title: "Mixed Exports", code: '// utils.js\nexport function formatDate(date) {\n    return date.toLocaleDateString();\n}\n\nexport function formatCurrency(amount) {\n    return `$${amount.toFixed(2)}`;\n}\n\nconst config = { theme: \'dark\', lang: \'en\' };\nexport default config;\n\n// main.js\nimport config, { formatDate, formatCurrency } from \'./utils.js\';\n\nconsole.log(config.theme);           // \'dark\'\nconsole.log(formatDate(new Date())); // Current date\nconsole.log(formatCurrency(29.99));  // \'$29.99\'', desc: "Combine default and named exports" }
             ],
             practice: {
                 title: "Practice Modules",
                 tasks: [
                     "Create a math module with various mathematical functions and export them",
                     "Create a user utility module with functions to validate and format user data",
                     "Build a main application that imports and uses these modules",
                     "Practice both named exports and default exports in different scenarios"
                 ]
             }
         },
         ka: {
             concept: "ES6 მოდულები საშუალებას გაძლევთ მოაწყვოთ თქვენი კოდი ცალკე ფაილებში და import/export ფუნქციონალობა. ეს ხდის თქვენს კოდს უფრო შესანარჩუნებელს, მრავალჯერ გამოსაყენებელს და ტესტირებისთვის ადვილს.",
             examples: [
                 { title: "ძირითადი Export/Import", code: '// math.js\nexport function add(a, b) {\n    return a + b;\n}\n\nexport function multiply(a, b) {\n    return a * b;\n}\n\nexport const PI = 3.14159;\n\n// main.js\nimport { add, multiply, PI } from \'./math.js\';\n\nconsole.log(add(2, 3));     // 5\nconsole.log(multiply(4, 5)); // 20\nconsole.log(PI);            // 3.14159', desc: "Export და import კონკრეტული ფუნქციები და ცვლადები" },
                 { title: "ნაგულისხმევი Exports", code: '// calculator.js\nclass Calculator {\n    add(a, b) { return a + b; }\n    subtract(a, b) { return a - b; }\n}\n\nexport default Calculator;\n\n// app.js\nimport Calculator from \'./calculator.js\';\n\nconst calc = new Calculator();\nconsole.log(calc.add(10, 5)); // 15', desc: "Export ერთი მთავარი რამ მოდულიდან" },
                 { title: "შერეული Exports", code: '// utils.js\nexport function formatDate(date) {\n    return date.toLocaleDateString();\n}\n\nexport function formatCurrency(amount) {\n    return `$${amount.toFixed(2)}`;\n}\n\nconst config = { theme: \'dark\', lang: \'ka\' };\nexport default config;\n\n// main.js\nimport config, { formatDate, formatCurrency } from \'./utils.js\';\n\nconsole.log(config.theme);           // \'dark\'\nconsole.log(formatDate(new Date())); // მიმდინარე თარიღი\nconsole.log(formatCurrency(29.99));  // \'$29.99\'', desc: "გააერთიანეთ default და named exports" }
             ],
             practice: {
                 title: "ივარჯიშეთ მოდულებში",
                 tasks: [
                     "შექმენით მათემატიკური მოდული სხვადასხვა მათემატიკური ფუნქციებით და გექსპორტეთ ისინი",
                     "შექმენით მომხმარებლის დამხმარე მოდული ფუნქციებით მომხმარებლის მონაცემების ვალიდაციისა და ფორმატირებისთვის",
                     "ააშენეთ მთავარი აპლიკაცია რომელიც იმპორტ და იყენებს ამ მოდულებს",
                     "ივარჯიშეთ როგორც named exports-ასევე default exports-ში სხვადასხვა სცენარებში"
                 ]
             }
         }
     },
     json_storage: {
         en: {
             concept: "JSON (JavaScript Object Notation) is a lightweight data format for storing and exchanging data. Browser storage APIs like localStorage and sessionStorage allow you to persist data in the user's browser.",
             examples: [
                 { title: "Working with JSON", code: '// JavaScript object to JSON string\nconst user = {\n    name: "Luka",\n    age: 20,\n    courses: ["JavaScript", "React"]\n};\n\nconst jsonString = JSON.stringify(user);\nconsole.log(jsonString); // \'{"name":"Luka","age":20,"courses":["JavaScript","React"]}\'\n\n// JSON string back to JavaScript object\nconst parsedUser = JSON.parse(jsonString);\nconsole.log(parsedUser.name); // "Luka"', desc: "Convert between JavaScript objects and JSON strings" },
                 { title: "localStorage", code: '// Store data (persists until manually cleared)\nlocalStorage.setItem(\'username\', \'Luka\');\nlocalStorage.setItem(\'settings\', JSON.stringify({\n    theme: \'dark\',\n    language: \'en\'\n}));\n\n// Retrieve data\nconst username = localStorage.getItem(\'username\');\nconst settings = JSON.parse(localStorage.getItem(\'settings\'));\n\nconsole.log(username);       // "Luka"\nconsole.log(settings.theme); // "dark"\n\n// Remove specific item\nlocalStorage.removeItem(\'username\');\n\n// Clear all localStorage\n// localStorage.clear();', desc: "Store data permanently in the browser" },
                 { title: "sessionStorage", code: '// Store data (cleared when tab closes)\nsessionStorage.setItem(\'tempData\', \'This will disappear when tab closes\');\nsessionStorage.setItem(\'cart\', JSON.stringify([\n    { id: 1, name: \'Laptop\', price: 999 },\n    { id: 2, name: \'Mouse\', price: 25 }\n]));\n\n// Retrieve data\nconst tempData = sessionStorage.getItem(\'tempData\');\nconst cart = JSON.parse(sessionStorage.getItem(\'cart\'));\n\nconsole.log(tempData);\nconsole.log(cart[0].name); // "Laptop"', desc: "Store temporary data for the current session" }
             ],
             practice: {
                 title: "Practice JSON and Storage",
                 tasks: [
                     "Create a user preferences object and store it in localStorage using JSON",
                     "Build a simple shopping cart that persists items using localStorage",
                     "Create a form that saves draft data to sessionStorage as user types",
                     "Build a simple note-taking app that saves notes to localStorage"
                 ]
             }
         },
         ka: {
             concept: "JSON (JavaScript Object Notation) არის მსუბუქი მონაცემთა ფორმატი მონაცემების შესანახად და გასაცვლელად. ბრაუზერის storage API-ები როგორიცაა localStorage და sessionStorage საშუალებას გაძლევთ შეინარჩუნოთ მონაცემები მომხმარებლის ბრაუზერში.",
             examples: [
                 { title: "JSON-თან მუშაობა", code: '// JavaScript ობიექტი JSON სტრინგად\nconst user = {\n    name: "ლუკა",\n    age: 20,\n    courses: ["JavaScript", "React"]\n};\n\nconst jsonString = JSON.stringify(user);\nconsole.log(jsonString); // \'{"name":"ლუკა","age":20,"courses":["JavaScript","React"]}\'\n\n// JSON სტრინგი უკან JavaScript ობიექტად\nconst parsedUser = JSON.parse(jsonString);\nconsole.log(parsedUser.name); // "ლუკა"', desc: "გარდაქმენით JavaScript ობიექტებსა და JSON სტრინგებს შორის" },
                 { title: "localStorage", code: '// მონაცემების შენახვა (რჩება ხელით გასუფთავებამდე)\nlocalStorage.setItem(\'username\', \'ლუკა\');\nlocalStorage.setItem(\'settings\', JSON.stringify({\n    theme: \'dark\',\n    language: \'ka\'\n}));\n\n// მონაცემების მოტანა\nconst username = localStorage.getItem(\'username\');\nconst settings = JSON.parse(localStorage.getItem(\'settings\'));\n\nconsole.log(username);       // "ლუკა"\nconsole.log(settings.theme); // "dark"\n\n// კონკრეტული ელემენტის წაშლა\nlocalStorage.removeItem(\'username\');\n\n// მთელი localStorage-ის გასუფთავება\n// localStorage.clear();', desc: "შეინახეთ მონაცემები მუდმივად ბრაუზერში" },
                 { title: "sessionStorage", code: '// მონაცემების შენახვა (იშლება ტაბის დახურვისას)\nsessionStorage.setItem(\'tempData\', \'ეს გაქრება ტაბის დახურვისას\');\nsessionStorage.setItem(\'cart\', JSON.stringify([\n    { id: 1, name: \'ლეპტოპი\', price: 999 },\n    { id: 2, name: \'მაუსი\', price: 25 }\n]));\n\n// მონაცემების მოტანა\nconst tempData = sessionStorage.getItem(\'tempData\');\nconst cart = JSON.parse(sessionStorage.getItem(\'cart\'));\n\nconsole.log(tempData);\nconsole.log(cart[0].name); // "ლეპტოპი"', desc: "შეინახეთ დროებითი მონაცემები მიმდინარე სესიისთვის" }
             ],
             practice: {
                 title: "ივარჯიშეთ JSON და Storage-ში",
                 tasks: [
                     "შექმენით მომხმარებლის პრეფერენციების ობიექტი და შეინახეთ იგი localStorage-ში JSON-ის გამოყენებით",
                     "ააშენეთ მარტივი სავაჭრო კალათა რომელიც ინარჩუნებს ელემენტებს localStorage-ის გამოყენებით",
                     "შექმენით ფორმა რომელიც ინახავს სამუშაო მონაცემებს sessionStorage-ში მომხმარებლის ტაიპინგისას",
                     "ააშენეთ მარტივი შენიშვნების აპი რომელიც ინახავს შენიშვნებს localStorage-ში"
                 ]
             }
         }
     },
     regular_expressions: {
         en: {
             concept: "Regular expressions (regex) are powerful patterns used for matching and manipulating text. They're essential for data validation, text processing, and search functionality.",
             examples: [
                 { title: "Basic Patterns", code: '// Create regex patterns\nconst emailPattern = /^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$/;\nconst phonePattern = /^\\d{3}-\\d{3}-\\d{4}$/;\nconst passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$/;\n\n// Test patterns\nconsole.log(emailPattern.test("user@example.com")); // true\nconsole.log(phonePattern.test("123-456-7890"));     // true\nconsole.log(passwordPattern.test("MyPass123"));      // true', desc: "Common patterns for validation" },
                 { title: "String Methods with Regex", code: '// Search and replace\nconst text = "Hello World, Welcome to JavaScript World!";\n\n// Find matches\nconst matches = text.match(/World/g); // ["World", "World"]\nconsole.log(matches);\n\n// Replace text\nconst newText = text.replace(/World/g, "Universe");\nconsole.log(newText); // "Hello Universe, Welcome to JavaScript Universe!"\n\n// Split with regex\nconst sentence = "apple,banana;orange:grape";\nconst fruits = sentence.split(/[,;:]/);\nconsole.log(fruits); // ["apple", "banana", "orange", "grape"]', desc: "Use regex with string methods" },
                 { title: "Advanced Patterns", code: '// Extract specific information\nconst logEntry = "2024-01-15 14:30:25 [ERROR] Database connection failed";\n\n// Extract date\nconst datePattern = /\\d{4}-\\d{2}-\\d{2}/;\nconst date = logEntry.match(datePattern)[0];\nconsole.log(date); // "2024-01-15"\n\n// Extract log level\nconst levelPattern = /\\[(\\w+)\\]/;\nconst level = logEntry.match(levelPattern)[1];\nconsole.log(level); // "ERROR"\n\n// Clean phone number\nconst phone = "(555) 123-4567 ext. 890";\nconst cleanPhone = phone.replace(/[^\\d]/g, "");\nconsole.log(cleanPhone); // "5551234567890"', desc: "Extract and clean data with regex" }
             ],
             practice: {
                 title: "Master Regular Expressions",
                 tasks: [
                     "Create regex patterns to validate email addresses, phone numbers, and passwords",
                     "Build a function that extracts all URLs from a text string",
                     "Create a text formatter that capitalizes the first letter of each sentence",
                     "Build a simple search and highlight function using regex"
                 ]
             }
         },
         ka: {
             concept: "რეგულარული გამოხატულებები (regex) არის ძლიერი ნიმუშები რომლებიც გამოიყენება ტექსტის შესატყვისებლად და მანიპულირებისთვის. ისინი აუცილებელია მონაცემების ვალიდაციისთვის, ტექსტის დამუშავებისთვის და ძიების ფუნქციონალობისთვის.",
             examples: [
                 { title: "ძირითადი ნიმუშები", code: '// შექმენით regex ნიმუშები\nconst emailPattern = /^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$/;\nconst phonePattern = /^\\d{3}-\\d{3}-\\d{4}$/;\nconst passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$/;\n\n// ნიმუშების ტესტირება\nconsole.log(emailPattern.test("user@example.com")); // true\nconsole.log(phonePattern.test("123-456-7890"));     // true\nconsole.log(passwordPattern.test("MyPass123"));      // true', desc: "ჩვეულებრივი ნიმუშები ვალიდაციისთვის" },
                 { title: "String მეთოდები Regex-თან", code: '// ძიება და ჩანაცვლება\nconst text = "გამარჯობა მსოფლიო, კეთილი იყოს მობრძანება JavaScript მსოფლიოში!";\n\n// შესატყვისების პოვნა\nconst matches = text.match(/მსოფლიო/g); // ["მსოფლიო", "მსოფლიო"]\nconsole.log(matches);\n\n// ტექსტის ჩანაცვლება\nconst newText = text.replace(/მსოფლიო/g, "სამყარო");\nconsole.log(newText); // "გამარჯობა სამყარო, კეთილი იყოს მობრძანება JavaScript სამყაროში!"\n\n// გაყოფა regex-ით\nconst sentence = "ვაშლი,ბანანი;ნარინჯი:ყურძენი";\nconst fruits = sentence.split(/[,;:]/);\nconsole.log(fruits); // ["ვაშლი", "ბანანი", "ნარინჯი", "ყურძენი"]', desc: "გამოიყენეთ regex string მეთოდებთან" },
                 { title: "გაღრმავებული ნიმუშები", code: '// კონკრეტული ინფორმაციის ამოღება\nconst logEntry = "2024-01-15 14:30:25 [ERROR] მონაცემთა ბაზასთან კავშირი ჩავარდა";\n\n// თარიღის ამოღება\nconst datePattern = /\\d{4}-\\d{2}-\\d{2}/;\nconst date = logEntry.match(datePattern)[0];\nconsole.log(date); // "2024-01-15"\n\n// ლოგის დონის ამოღება\nconst levelPattern = /\\[(\\w+)\\]/;\nconst level = logEntry.match(levelPattern)[1];\nconsole.log(level); // "ERROR"\n\n// ტელეფონის ნომრის გაწმენდა\nconst phone = "(555) 123-4567 ext. 890";\nconst cleanPhone = phone.replace(/[^\\d]/g, "");\nconsole.log(cleanPhone); // "5551234567890"', desc: "ამოიღეთ და გაწმინდეთ მონაცემები regex-ით" }
             ],
             practice: {
                 title: "დაეუფლეთ რეგულარულ გამოხატულებებს",
                 tasks: [
                     "შექმენით regex ნიმუშები ელ. ფოსტის მისამართების, ტელეფონის ნომრებისა და პაროლების ვალიდაციისთვის",
                     "ააშენეთ ფუნქცია რომელიც ამოიღებს ყველა URL-ს ტექსტური სტრინგიდან",
                     "შექმენით ტექსტის ფორმატერი რომელიც დიდი ასოებით იწყებს თითოეული წინადადების პირველ ასოს",
                     "ააშენეთ მარტივი ძიების და გამოკვეთის ფუნქცია regex-ის გამოყენებით"
                 ]
             }
         }
     }
 };
 
 // Complete tutorial content with all 18 tutorials
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
    },
    es6_features: {
        en: {
            title: "ES6+ Features",
            description: "Explore modern JavaScript features like arrow functions, destructuring, and template literals."
        },
        ka: {
            title: "ES6+ ფუნქციები",
            description: "შეისწავლეთ თანამედროვე JavaScript-ის ფუნქციები როგორიცაა arrow ფუნქციები, destructuring და template literals."
        }
    },
    closures_scope: {
        en: {
            title: "Closures & Scope",
            description: "Master JavaScript closures, scope chain, and lexical environments."
        },
        ka: {
            title: "Closures და Scope",
            description: "დაეუფლეთ JavaScript closures-ს, scope chain-ს და lexical environments-ს."
        }
    },
    classes_prototypes: {
        en: {
            title: "Classes & Prototypes",
            description: "Understand object-oriented programming in JavaScript with classes and prototypes."
        },
        ka: {
            title: "კლასები და პროტოტიპები",
            description: "გაიგეთ ობიექტზე ორიენტირებული პროგრამირება JavaScript-ში კლასებითა და პროტოტიპებით."
        }
    },
    modules_import_export: {
        en: {
            title: "Modules & Import/Export",
            description: "Learn to organize your code with ES6 modules, import and export statements."
        },
        ka: {
            title: "მოდულები და Import/Export",
            description: "ისწავლეთ თქვენი კოდის ორგანიზება ES6 მოდულებით, import და export განცხადებებით."
        }
    },
    json_storage: {
        en: {
            title: "JSON & Storage",
            description: "Work with JSON data and browser storage (localStorage, sessionStorage)."
        },
        ka: {
            title: "JSON და Storage",
            description: "იმუშავეთ JSON მონაცემებთან და ბრაუზერის storage-თან (localStorage, sessionStorage)."
        }
    },
    regular_expressions: {
        en: {
            title: "Regular Expressions",
            description: "Master pattern matching and text manipulation with regular expressions."
        },
        ka: {
            title: "რეგულარული გამოხატულებები",
            description: "დაეუფლეთ ნიმუშების ძიებას და ტექსტის მანიპულირებას რეგულარული გამოხატულებებით."
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
        'advanced': 'Advanced'
    },
    ka: {
        'nav-home': 'მთავარი',
        'nav-categories': 'კატეგორიები',
        'javascript': 'ჯავასკრიპტი', 
        'js-interactive': 'ინტერაქტიული გაკვეთილები',
        'js-progress-text': 'გაკვეთილი ჯავასკრიპტის დასაუფლებლად საწყისებიდან გაღრმავებულ კონცეფციებამდე',
        'beginner': 'დამწყები',
        'intermediate': 'საშუალო', 
        'advanced': 'გაღრმავებული'
    }
};

// React tutorials
const reactTutorials = {
    react_basics: { 
        en: { title: "React Basics", desc: "Setting up and understanding React" },
        ka: { title: "React საფუძვლები", desc: "React-ის დაყენება და გაგება" }
    },
    react_components: { 
        en: { title: "React Components", desc: "Building reusable UI components" },
        ka: { title: "React კომპონენტები", desc: "მრავალჯერ გამოსაყენებელი UI კომპონენტების აგება" }
    },
    react_props: { 
        en: { title: "React Props", desc: "Passing data between components" },
        ka: { title: "React Props", desc: "მონაცემების გადაცემა კომპონენტებს შორის" }
    },
    react_state: { 
        en: { title: "React State", desc: "Managing dynamic data with useState" },
        ka: { title: "React State", desc: "დინამიური მონაცემების მართვა useState-ით" }
    },
    react_events: { 
        en: { title: "Event Handling in React", desc: "Handling user interactions" },
        ka: { title: "Event-ების მართვა React-ში", desc: "მომხმარებლის ინტერაქციების დამუშავება" }
    },
    react_conditional: { 
        en: { title: "Conditional Rendering", desc: "Show different UI based on conditions" },
        ka: { title: "პირობითი რენდერინგი", desc: "სხვადასხვა UI-ის ჩვენება პირობების მიხედვით" }
    }
};

// React tutorial order
const reactTutorialOrder = ['react_basics', 'react_components', 'react_props', 'react_state', 'react_events', 'react_conditional'];

// React tutorial content
const reactTutorialContent = {
    react_basics: {
        en: {
            concept: "React is a JavaScript library for building user interfaces. It allows you to create reusable components and manage state efficiently. Think of it as building blocks for creating interactive web applications!",
            examples: [
                { title: "Create React App", code: 'npx create-react-app my-app\ncd my-app\nnpm start', desc: "Start a new React project" },
                { title: "Project Structure", code: 'src/\n  App.js       // Main component\n  index.js     // Entry point\n  index.css    // Styles\npublic/\n  index.html   // HTML template', desc: "Understanding the file structure" },
                { title: "Development Server", code: 'npm start\n// Opens http://localhost:3000', desc: "Start the development server" }
            ],
            practice: {
                title: "Setup Your First React App",
                tasks: [
                    "Create a new React app using create-react-app",
                    "Explore the project structure (src, public, node_modules)",
                    "Start the development server with npm start",
                    "Open the app in your browser and see the default React page"
                ]
            }
        },
        ka: {
            concept: "React არის JavaScript ბიბლიოთეკა მომხმარებლის ინტერფეისების ასაშენებლად. ის საშუალებას გაძლევთ შექმნათ მრავალჯერ გამოსაყენებელი კომპონენტები და ეფექტურად მართოთ state. იფიქრეთ ამაზე როგორც სამშენებლო ბლოკებზე ინტერაქტიული ვებ აპლიკაციების შესაქმნელად!",
            examples: [
                { title: "React აპის შექმნა", code: 'npx create-react-app my-app\ncd my-app\nnpm start', desc: "დაიწყეთ ახალი React პროექტი" },
                { title: "პროექტის სტრუქტურა", code: 'src/\n  App.js       // მთავარი კომპონენტი\n  index.js     // შესასვლელი წერტილი\n  index.css    // სტილები\npublic/\n  index.html   // HTML ტემპლეიტი', desc: "ფაილების სტრუქტურის გაგება" },
                { title: "განვითარების სერვერი", code: 'npm start\n// იხსნება http://localhost:3000', desc: "განვითარების სერვერის გაშვება" }
            ],
            practice: {
                title: "მოამზადეთ თქვენი პირველი React აპი",
                tasks: [
                    "შექმენით ახალი React აპი create-react-app-ის გამოყენებით",
                    "გამოიკვლიეთ პროექტის სტრუქტურა (src, public, node_modules)",
                    "გაუშვით განვითარების სერვერი npm start-ით",
                    "გახსენით აპი ბრაუზერში და ნახეთ ნაგულისხმევი React გვერდი"
                ]
            }
        }
    },
    react_components: {
        en: {
            concept: "Components are the building blocks of React applications. They are like custom HTML elements that you can reuse throughout your app. Functional components are the modern way to create components in React.",
            examples: [
                { title: "Functional Component", code: 'function Welcome() {\n  return <h1>Hello, World!</h1>;\n}', desc: "A simple component that returns JSX" },
                { title: "Using JSX", code: 'function UserCard() {\n  return (\n    <div className="card">\n      <h2>John Doe</h2>\n      <p>Web Developer</p>\n    </div>\n  );\n}', desc: "JSX lets you write HTML-like code in JavaScript" },
                { title: "Using Components", code: 'function App() {\n  return (\n    <div>\n      <Welcome />\n      <UserCard />\n    </div>\n  );\n}', desc: "Use components like HTML tags" }
            ],
            practice: {
                title: "Create Your First Components",
                tasks: [
                    "Create a functional component called Header that returns an h1 with your name",
                    "Create a Footer component with copyright information",
                    "Use both components in your App component",
                    "Experiment with different JSX elements (divs, paragraphs, etc.)"
                ]
            }
        },
        ka: {
            concept: "კომპონენტები არის React აპლიკაციების სამშენებლო ბლოკები. ისინი არის მორგებული HTML ელემენტების მსგავსი რომლებიც შეგიძლიათ მრავალჯერ გამოიყენოთ თქვენს აპში. ფუნქციური კომპონენტები არის თანამედროვე გზა კომპონენტების შესაქმნელად React-ში.",
            examples: [
                { title: "ფუნქციური კომპონენტი", code: 'function Welcome() {\n  return <h1>გამარჯობა, მსოფლიო!</h1>;\n}', desc: "მარტივი კომპონენტი რომელიც აბრუნებს JSX-ს" },
                { title: "JSX-ის გამოყენება", code: 'function UserCard() {\n  return (\n    <div className="card">\n      <h2>ჯონ დოუ</h2>\n      <p>ვებ დეველოპერი</p>\n    </div>\n  );\n}', desc: "JSX საშუალებას გაძლევთ დაწეროთ HTML-ის მსგავსი კოდი JavaScript-ში" },
                { title: "კომპონენტების გამოყენება", code: 'function App() {\n  return (\n    <div>\n      <Welcome />\n      <UserCard />\n    </div>\n  );\n}', desc: "გამოიყენეთ კომპონენტები HTML ტეგების მსგავსად" }
            ],
            practice: {
                title: "შექმენით თქვენი პირველი კომპონენტები",
                tasks: [
                    "შექმენით ფუნქციური კომპონენტი სახელად Header რომელიც აბრუნებს h1-ს თქვენი სახელით",
                    "შექმენით Footer კომპონენტი საავტორო უფლებების ინფორმაციით",
                    "გამოიყენეთ ორივე კომპონენტი თქვენს App კომპონენტში",
                    "ექსპერიმენტირებდით სხვადასხვა JSX ელემენტებით (div-ები, პარაგრაფები, და ა.შ.)"
                ]
            }
        }
    },
    react_props: {
        en: {
            concept: "Props (properties) are how you pass data from parent components to child components. Think of props as arguments to a function - they allow you to make components reusable and dynamic.",
            examples: [
                { title: "Passing Props", code: 'function Greeting(props) {\n  return <h1>Hello, {props.name}!</h1>;\n}\n\n// Usage:\n<Greeting name="Alice" />', desc: "Pass data to components using props" },
                { title: "Multiple Props", code: 'function UserInfo(props) {\n  return (\n    <div>\n      <h2>{props.name}</h2>\n      <p>Age: {props.age}</p>\n      <p>City: {props.city}</p>\n    </div>\n  );\n}', desc: "Components can receive multiple props" },
                { title: "Using Props", code: 'function App() {\n  return (\n    <div>\n      <UserInfo name="John" age={25} city="Tbilisi" />\n      <UserInfo name="Jane" age={30} city="Batumi" />\n    </div>\n  );\n}', desc: "Reuse components with different data" }
            ],
            practice: {
                title: "Master Props",
                tasks: [
                    "Create a PersonCard component that accepts name, age, and hobby as props",
                    "Use the PersonCard component multiple times with different props",
                    "Create a Button component that accepts text and color props",
                    "Experiment with passing different types of data (strings, numbers, booleans)"
                ]
            }
        },
        ka: {
            concept: "Props (თვისებები) არის გზა თუ როგორ გადაიცემა მონაცემები მშობელი კომპონენტებიდან შვილ კომპონენტებზე. იფიქრეთ props-ებზე როგორც ფუნქციის არგუმენტებზე - ისინი საშუალებას გაძლევთ გახადოთ კომპონენტები მრავალჯერ გამოსაყენებელი და დინამიური.",
            examples: [
                { title: "Props-ების გადაცემა", code: 'function Greeting(props) {\n  return <h1>გამარჯობა, {props.name}!</h1>;\n}\n\n// გამოყენება:\n<Greeting name="ალისი" />', desc: "გადაიცემით მონაცემები კომპონენტებზე props-ების გამოყენებით" },
                { title: "მრავალი Props", code: 'function UserInfo(props) {\n  return (\n    <div>\n      <h2>{props.name}</h2>\n      <p>ასაკი: {props.age}</p>\n      <p>ქალაქი: {props.city}</p>\n    </div>\n  );\n}', desc: "კომპონენტებს შეუძლიათ მიიღონ მრავალი props" },
                { title: "Props-ების გამოყენება", code: 'function App() {\n  return (\n    <div>\n      <UserInfo name="ჯონი" age={25} city="თბილისი" />\n      <UserInfo name="ჯეინი" age={30} city="ბათუმი" />\n    </div>\n  );\n}', desc: "მრავალჯერ გამოიყენეთ კომპონენტები სხვადასხვა მონაცემებით" }
            ],
            practice: {
                title: "დაეუფლეთ Props-ებს",
                tasks: [
                    "შექმენით PersonCard კომპონენტი რომელიც იღებს name, age და hobby props-ებს",
                    "გამოიყენეთ PersonCard კომპონენტი მრავალჯერ სხვადასხვა props-ებით",
                    "შექმენით Button კომპონენტი რომელიც იღებს text და color props-ებს",
                    "ექსპერიმენტირებდით სხვადასხვა ტიპის მონაცემების გადაცემაში (strings, numbers, booleans)"
                ]
            }
        }
    },
    react_state: {
        en: {
            concept: "State allows components to have changing data that affects what gets rendered. useState is a React Hook that lets you add state to functional components. When state changes, the component re-renders automatically.",
            examples: [
                { title: "Basic useState", code: 'import { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n    </div>\n  );\n}', desc: "Manage changing data with useState" },
                { title: "State with Strings", code: 'function NameInput() {\n  const [name, setName] = useState("");\n  \n  return (\n    <div>\n      <input\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n      />\n      <p>Hello, {name}!</p>\n    </div>\n  );\n}', desc: "Handle text input with state" },
                { title: "Multiple State Variables", code: 'function UserProfile() {\n  const [name, setName] = useState("");\n  const [age, setAge] = useState(0);\n  const [isVisible, setIsVisible] = useState(true);\n  \n  return (\n    <div>\n      {isVisible && (\n        <div>\n          <p>Name: {name}</p>\n          <p>Age: {age}</p>\n        </div>\n      )}\n    </div>\n  );\n}', desc: "Use multiple state variables" }
            ],
            practice: {
                title: "Practice State Management",
                tasks: [
                    "Create a counter component that can increment and decrement",
                    "Build a text input that shows what you type in real-time",
                    "Create a toggle button that shows/hides content",
                    "Build a simple form with multiple input fields using state"
                ]
            }
        },
        ka: {
            concept: "State საშუალებას აძლევს კომპონენტებს ჰქონდეთ ცვალებადი მონაცემები რაც გავლენას ახდენს იმაზე რა რენდერდება. useState არის React Hook რომელიც საშუალებას გაძლევთ დაამატოთ state ფუნქციებს. როცა state იცვლება, კომპონენტი ავტომატურად ხელახლა რენდერდება.",
            examples: [
                { title: "ძირითადი useState", code: 'import { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>რაოდენობა: {count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        გაზრდა\n      </button>\n    </div>\n  );\n}', desc: "მართეთ ცვალებადი მონაცემები useState-ით" },
                { title: "State სტრინგებით", code: 'function NameInput() {\n  const [name, setName] = useState("");\n  \n  return (\n    <div>\n      <input\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n      />\n      <p>გამარჯობა, {name}!</p>\n    </div>\n  );\n}', desc: "დაამუშავეთ ტექსტის შეყვანა state-ით" },
                { title: "მრავალი State ცვლადი", code: 'function UserProfile() {\n  const [name, setName] = useState("");\n  const [age, setAge] = useState(0);\n  const [isVisible, setIsVisible] = useState(true);\n  \n  return (\n    <div>\n      {isVisible && (\n        <div>\n          <p>სახელი: {name}</p>\n          <p>ასაკი: {age}</p>\n        </div>\n      )}\n    </div>\n  );\n}', desc: "გამოიყენეთ მრავალი state ცვლადი" }
            ],
            practice: {
                title: "გაივარჯიშეთ State მართვაში",
                tasks: [
                    "შექმენით counter კომპონენტი რომელსაც შეუძლია გაზრდა და შემცირება",
                    "ააშენეთ ტექსტის შეყვანის ველი რომელიც რეალურ დროში აჩვენებს რასაც ბეჭდავთ",
                    "შექმენით toggle ღილაკი რომელიც აჩვენებს/მალავს შინაარსს",
                    "ააშენეთ მარტივი ფორმა მრავალი შეყვანის ველით state-ის გამოყენებით"
                ]
            }
        }
    },
    react_events: {
        en: {
            concept: "Event handling in React lets you respond to user interactions like clicks, form submissions, and input changes. React uses synthetic events that work consistently across different browsers.",
            examples: [
                { title: "Click Events", code: 'function ClickButton() {\n  const handleClick = () => {\n    alert("Button clicked!");\n  };\n  \n  return (\n    <button onClick={handleClick}>\n      Click me!\n    </button>\n  );\n}', desc: "Handle button clicks" },
                { title: "Form Handling", code: 'function ContactForm() {\n  const [email, setEmail] = useState("");\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log("Email:", email);\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type="email"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n      />\n      <button type="submit">Submit</button>\n    </form>\n  );\n}', desc: "Handle form submissions" },
                { title: "Controlled Components", code: 'function ControlledInput() {\n  const [value, setValue] = useState("");\n  \n  return (\n    <div>\n      <input\n        value={value}\n        onChange={(e) => setValue(e.target.value)}\n        placeholder="Type here..."\n      />\n      <button onClick={() => setValue("")}>\n        Clear\n      </button>\n    </div>\n  );\n}', desc: "Control input fields with state" }
            ],
            practice: {
                title: "Master Event Handling",
                tasks: [
                    "Create a button that changes the background color when clicked",
                    "Build a form that captures user input and displays it",
                    "Create a controlled input field with a clear button",
                    "Build a simple calculator with click events for numbers and operations"
                ]
            }
        },
        ka: {
            concept: "Event-ების მართვა React-ში საშუალებას გაძლევთ უპასუხოთ მომხმარებლის ინტერაქციებს როგორიცაა კლიკები, ფორმის გაგზავნები და შეყვანის ცვლილებები. React იყენებს სინთეზურ event-ებს რომლებიც მუშაობენ ერთნაირად სხვადასხვა ბრაუზერებში.",
            examples: [
                { title: "Click Event-ები", code: 'function ClickButton() {\n  const handleClick = () => {\n    alert("ღილაკზე დაკლიკდა!");\n  };\n  \n  return (\n    <button onClick={handleClick}>\n      დამაკლიკე!\n    </button>\n  );\n}', desc: "დაამუშავეთ ღილაკის კლიკები" },
                { title: "ფორმის მართვა", code: 'function ContactForm() {\n  const [email, setEmail] = useState("");\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log("ემაილი:", email);\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type="email"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n      />\n      <button type="submit">გაგზავნა</button>\n    </form>\n  );\n}', desc: "დაამუშავეთ ფორმის გაგზავნები" },
                { title: "კონტროლირებადი კომპონენტები", code: 'function ControlledInput() {\n  const [value, setValue] = useState("");\n  \n  return (\n    <div>\n      <input\n        value={value}\n        onChange={(e) => setValue(e.target.value)}\n        placeholder="აქ ჩაწერეთ..."\n      />\n      <button onClick={() => setValue("")}>\n        გასუფთავება\n      </button>\n    </div>\n  );\n}', desc: "კონტროლი შეყვანის ველებზე state-ით" }
            ],
            practice: {
                title: "დაეუფლეთ Event-ების მართვას",
                tasks: [
                    "შექმენით ღილაკი რომელიც კლიკისას ცვლის ფონის ფერს",
                    "ააშენეთ ფორმა რომელიც იღებს მომხმარებლის შეყვანას და აჩვენებს მას",
                    "შექმენით კონტროლირებადი შეყვანის ველი გასუფთავების ღილაკით",
                    "ააშენეთ მარტივი კალკულატორი click event-ებით რიცხვებისა და ოპერაციებისთვის"
                ]
            }
        }
    },
    react_conditional: {
        en: {
            concept: "Conditional rendering allows you to show different content based on certain conditions. You can use if-else statements, ternary operators, or logical AND (&&) to conditionally render components or elements.",
            examples: [
                { title: "Ternary Operator", code: 'function WelcomeMessage({ isLoggedIn }) {\n  return (\n    <div>\n      {isLoggedIn ? (\n        <h1>Welcome back!</h1>\n      ) : (\n        <h1>Please sign in</h1>\n      )}\n    </div>\n  );\n}', desc: "Show different content based on condition" },
                { title: "Logical AND (&&)", code: 'function Notification({ hasMessages }) {\n  return (\n    <div>\n      <h2>Dashboard</h2>\n      {hasMessages && (\n        <div className="alert">\n          You have new messages!\n        </div>\n      )}\n    </div>\n  );\n}', desc: "Show content only when condition is true" },
                { title: "If-Else with State", code: 'function LoginForm() {\n  const [isLoggedIn, setIsLoggedIn] = useState(false);\n  \n  if (isLoggedIn) {\n    return <h1>Welcome to your dashboard!</h1>;\n  }\n  \n  return (\n    <button onClick={() => setIsLoggedIn(true)}>\n      Login\n    </button>\n  );\n}', desc: "Use if-else statements for complex conditions" }
            ],
            practice: {
                title: "Master Conditional Rendering",
                tasks: [
                    "Create a component that shows different messages for day/night",
                    "Build a toggle component that shows/hides content with a button",
                    "Create a user profile that shows different info for admin vs regular users",
                    "Build a loading component that shows a spinner while data is loading"
                ]
            }
        },
        ka: {
            concept: "პირობითი რენდერინგი საშუალებას გაძლევთ აჩვენოთ სხვადასხვა შინაარსი გარკვეული პირობების საფუძველზე. შეგიძლიათ გამოიყენოთ if-else განცხადებები, ternary ოპერატორები, ან ლოგიკური AND (&&) კომპონენტების ან ელემენტების პირობითად რენდერისთვის.",
            examples: [
                { title: "Ternary ოპერატორი", code: 'function WelcomeMessage({ isLoggedIn }) {\n  return (\n    <div>\n      {isLoggedIn ? (\n        <h1>კეთილი იყოს თქვენი დაბრუნება!</h1>\n      ) : (\n        <h1>გთხოვთ შეხვიდეთ</h1>\n      )}\n    </div>\n  );\n}', desc: "აჩვენეთ სხვადასხვა შინაარსი პირობის საფუძველზე" },
                { title: "ლოგიკური AND (&&)", code: 'function Notification({ hasMessages }) {\n  return (\n    <div>\n      <h2>პანელი</h2>\n      {hasMessages && (\n        <div className="alert">\n          თქვენ გაქვთ ახალი შეტყობინებები!\n        </div>\n      )}\n    </div>\n  );\n}', desc: "აჩვენეთ შინაარსი მხოლოდ მაშინ როცა პირობა ჭეშმარიტია" },
                { title: "If-Else State-ით", code: 'function LoginForm() {\n  const [isLoggedIn, setIsLoggedIn] = useState(false);\n  \n  if (isLoggedIn) {\n    return <h1>კეთილი იყოს თქვენი პანელზე მობრძანება!</h1>;\n  }\n  \n  return (\n    <button onClick={() => setIsLoggedIn(true)}>\n      შესვლა\n    </button>\n  );\n}', desc: "გამოიყენეთ if-else განცხადებები რთული პირობებისთვის" }
            ],
            practice: {
                title: "დაეუფლეთ პირობით რენდერინგს",
                tasks: [
                    "შექმენით კომპონენტი რომელიც აჩვენებს სხვადასხვა შეტყობინებებს დღე/ღამისთვის",
                    "ააშენეთ toggle კომპონენტი რომელიც აჩვენებს/მალავს შინაარსს ღილაკით",
                    "შექმენით მომხმარებლის პროფილი რომელიც აჩვენებს სხვადასხვა ინფორმაციას ადმინისა და ჩვეულებრივი მომხმარებლისთვის",
                    "ააშენეთ ჩატვირთვის კომპონენტი რომელიც აჩვენებს spinner-ს მონაცემების ჩატვირთვისას"
                ]
            }
        }
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

// Navigation functions
function navigatePrevious() {
    const tutorialOrder = ['variables', 'functions', 'controlflow', 'arrays', 'advanced_functions', 
                          'advanced_arrays', 'typescript', 'dom', 'events', 'async', 'api', 'error_handling',
                          'es6_features', 'closures_scope', 'classes_prototypes', 'modules_import_export',
                          'json_storage', 'regular_expressions'];
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
                          'advanced_arrays', 'typescript', 'dom', 'events', 'async', 'api', 'error_handling',
                          'es6_features', 'closures_scope', 'classes_prototypes', 'modules_import_export',
                          'json_storage', 'regular_expressions'];
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