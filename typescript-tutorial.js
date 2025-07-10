// Simple Tutorial Navigation
let currentTutorial = 'basic_types';
let currentLanguage = localStorage.getItem('language') || 'en';

// Tutorial detailed content
const tutorialContent = {
    basic_types: {
        en: {
            title: "Basic Types",
            description: "Learn TypeScript's fundamental type system and static typing benefits.",
            concept: "In TypeScript every value has a precise type. By explicitly describing that type—string, number, boolean, etc.—you give the compiler super-powers: it warns you about typos, missing properties and silly maths on strings *before* the browser even runs your code. The main primitive types you will meet are `string`, `number`, `boolean`, `null`, and `undefined`. You can also build richer types such as arrays (`string[]`), tuples (`[number, string]`) and custom objects. Mastering these basics is the very first step toward confident, bug-free code!",
            examples: [
                { title: "Primitive Types", code: 'let username: string = "Luka";\nlet score: number = 42;\nlet isOnline: boolean = true;', desc: "Give every variable a clear, descriptive type." },
                { title: "Arrays & Tuples", code: 'const colors: string[] = ["red", "green", "blue"];\nconst point: [number, number] = [10, 20];', desc: "Use [] for arrays and () for fixed-length tuples." },
                { title: "Type Errors Caught Early", code: 'let age: number = 25;\nage = "twenty-five"; // ❌ TypeScript error – a string is not a number', desc: "The compiler stops many bugs right here." }
            ],
            practice: {
                title: "Practice Basics",
                tasks: ["Declare a string, number, and boolean.", "Write a function that takes a number and returns a string."]
            }
        },
        ka: {
            title: "ძირითადი ტიპები",
            description: "ისწავლეთ TypeScript-ის ძირითადი ტიპების სისტემა და სტატიკური ტიპიზების უპირატესობები.",
            concept: "TypeScript-ი ყოველი ცვლადის ტიპს ზუსტად აღწერს. როდესაც \u201Cage\u201D-ს `number` ტიპად ავნიშნავთ ან \u201Cname\u201D-ს `string`-ად, კომპილატორი თავიდან გვარიდებს შეცდომებს, რომლებიც სხვა შემთხვევაში მხოლოდ ბრაუზერში გამოჩნდებოდა. ყველაზე გავრცელებული ძირითადი ტიპებია `string`, `number`, `boolean`, `null` და `undefined`. ასევე შეგიძლიათ შექმნათ მასივები (`string[]`), ტაფლები (`[number, string]`) და საკუთარი ობიექტები. ამ საფუძვლების ცოდნა გადაგაქცევთ უფრო თავდაჯერებულ, შეცდომაგამოცდილ პროგრამისტად!",
            examples: [
                { title: "პრიმიტიული ტიპები", code: 'let username: string = "ლუკა";\nlet score: number = 42;\nlet isOnline: boolean = true;', desc: "მიანიჭეთ თითოეულ ცვლადს მკაფიო ტიპი." },
                { title: "მასივები და ტაფლები", code: 'const colors: string[] = ["წითელი", "მწვანე", "ლურჯი"];\nconst point: [number, string] = [10, "Y"]', desc: "გამოიყენეთ [] მასივებისთვის და () განსაზღვრული ზომის ტაფლებისთვის." },
                { title: "აზეახსნილი შეცდომები", code: 'let age: number = 25;\nage = "ოცდახუთი"; // ❌ TypeScript-ის შეცდომა – სტრიქონი არ არის რიცხვი', desc: "კომპილატორი დროულად გვაფრთხილებს პრობლემებზე." }
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
            concept: "Interfaces act like blueprints for objects. They describe exactly which properties an object must have and of which type. This guarantees that any object you create (or receive from an API) matches the expected structure. You can also extend interfaces to keep your code DRY.",
            examples: [
                { title: "Simple Interface", code: 'interface User {\n  id: number;\n  name: string;\n}\n\nconst me: User = { id: 1, name: "Luka" };', desc: "Objects must implement every property defined by the interface." },
                { title: "Extending Interfaces", code: 'interface Animal { name: string; }\ninterface Dog extends Animal { breed: string; }\n\nconst rex: Dog = { name: "Rex", breed: "Labrador" };', desc: "Reuse and grow interfaces by extending them." }
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
            concept: "Generics let you write a *single* function or class that works with many different types while preserving type safety. Think of it as a cookie-cutter where you can pour in any dough (type) yet still get perfectly shaped cookies!",
            examples: [
                { title: "Generic Identity Function", code: 'function identity<T>(arg: T): T {\n  return arg;\n}\n\nconst num   = identity<number>(7);     // 7\nconst uname = identity<string>("Luka"); // "Luka"', desc: "Same function reused for numbers, strings, anything!" },
                { title: "Generic Interface", code: 'interface ApiResponse<T> {\n  data: T;\n  status: number;\n}\n\nconst userResponse: ApiResponse<{id: number; name: string}> = {\n  data: { id: 1, name: "Luka" },\n  status: 200\n};', desc: "Describe \"data\" without losing its shape." },
                { title: "Generic Constraints", code: 'function longest<T extends { length: number }>(a: T, b: T) {\n  return a.length >= b.length ? a : b;\n}\n\nlongest([1,2,3], [4,5]); // ✅ arrays have length\nlongest("hello", "hi"); // ✅ strings too\n// longest(10, 20); // ❌ numbers lack length', desc: "Constrain generics to particular capabilities (here: having length)." }
            ],
            practice: {
                title: "Practice Generics",
                tasks: [
                    "Write a generic function filterGreaterThan that filters an array of numbers or strings based on a threshold.",
                    "Create a generic Stack<T> class with push, pop, and peek methods.",
                    "Add a constraint to ensure Stack<T> cannot accept null or undefined values."
                ]
            }
        },
        ka: {
            title: "ფუნქციები და გენერიკები",
            description: "შექმენით მოქნილი, მრავალჯერადი კოდი ფუნქციების ტიპებითა და გენერიკებით.",
            concept: "გენერიკები გაძლევთ საშუალებას დაწეროთ *ერთი* ფუნქცია ან კლასი, რომელიც მუშაობს სხვადასხვა ტიპებთან და მაინც ინარჩუნებს ტიპის უსაფრთხოებას. წარმოიდგინეთ ნამცხვრის ფორმა, რომელშიც ნებისმიერი ცომი (ტიპი) შეგიძლიათ ჩაასხათ და მაინც მიიღოთ იდეალურად ფორმირებული ნამცხვარი!",
            examples: [
                { title: "გენერიკული Identity ფუნქცია", code: 'function identity<T>(arg: T): T {\n  return arg;\n}\n\nconst num   = identity<number>(7);     // 7\nconst uname = identity<string>("ლუკა"); // "ლუკა"', desc: "ერთი და იგივე ფუნქცია გამოიყენება სხვადასხვა ტიპებისთვის." },
                { title: "გენერიკული ინტერფეისი", code: 'interface ApiResponse<T> {\n  data: T;\n  status: number;\n}\n\nconst userResponse: ApiResponse<{id: number; name: string}> = {\n  data: { id: 1, name: "ლუკა" },\n  status: 200\n};', desc: "აღწერეთ \"data\" ისე, რომ ფორმა არ დაკარგოთ." },
                { title: "გენერიკული შეზღუდვები", code: 'function longest<T extends { length: number }>(a: T, b: T) {\n  return a.length >= b.length ? a : b;\n}\n\nlongest([1,2,3], [4,5]); // ✅ მასივებს length აქვთ\nlongest("hello", "hi"); // ✅ სტრიქონებსაც\n// longest(10, 20); // ❌ რიცხვებს length არ აქვთ', desc: "შეზღუდეთ გენერიკები კონკრეტულ შესაძლებლობებზე (აქ: length)." }
            ],
            practice: {
                title: "ივარჯიშეთ გენერიკებში",
                tasks: [
                    "დაწერეთ გენერიკული ფუნქცია filterGreaterThan, რომელიც ფილტრავს რიცხვების ან სტრიქონების მასივს ზღვრის მიხედვით.",
                    "შექმენით გენერიკული Stack<T> კლასი push, pop და peek მეთოდებით.",
                    "დაამატეთ შეზღუდვა, რომ Stack<T>-ში null ან undefined არ ჩავარდეს."
                ]
            }
        }
    },
    classes_inheritance: {
        en: {
            title: "Classes & Inheritance",
            description: "Build robust object-oriented applications with typed classes.",
            concept: "Classes bundle data *and* behaviour together. With TypeScript you can declare the exact shape of properties, their visibility (public, private, protected) and build hierarchies via *extends*. This helps you model real-world entities (Car, Animal) in an organised, reusable way.",
            examples: [
                { title: "Base & Derived Class", code: 'class Animal {\n  constructor(public name: string) {}\n  move(distance = 0) {\n    console.log(`${this.name} moved ${distance}m`);\n  }\n}\n\nclass Dog extends Animal {\n  bark() { console.log("Woof!"); }\n}\n\nconst rex = new Dog("Rex");\nrex.bark();\nrex.move(10);', desc: "Dog inherits properties & methods from Animal." },
                { title: "Access Modifiers", code: 'class BankAccount {\n  public owner: string;\n  private balance = 0;\n\n  constructor(owner: string) {\n    this.owner = owner;\n  }\n\n  deposit(amount: number) {\n    this.balance += amount;\n  }\n\n  getBalance() {\n    return this.balance;\n  }\n}', desc: "private keeps balance inaccessible outside the class." },
                { title: "Abstract Classes", code: 'abstract class Shape {\n  abstract area(): number;\n}\n\nclass Square extends Shape {\n  constructor(private side: number) { super(); }\n  area() { return this.side * this.side; }\n}', desc: "Abstract classes define contracts for subclasses." }
            ],
            practice: {
                title: "Practice Inheritance",
                tasks: [
                    "Design a Vehicle base class and extend it with Car and Bicycle.",
                    "Add protected speed property and accelerate() method.",
                    "Create an abstract class Employee with an abstract method getSalary()."
                ]
            }
        },
        ka: {
            title: "კლასები და მემკვიდრეობა",
            description: "ააშენეთ მძლავრი ობიექტზე ორიენტირებული აპლიკაციები ტიპიზებული კლასებით.",
            concept: "კლასები აერთიანებს მონაცემებს *და* ქცევას. TypeScript-ში შეგიძლიათ აღწეროთ თვისებების ზუსტი ფორმა, მათი ხილვადობა (public, private, protected) და ააშენოთ იერარქიები *extends*-ის საშუალებით. ეს დაგეხმარებათ რეალური სამყაროს ობიექტების (Car, Animal) მოდელირებაში ორგანიზებულად და მრავალჯერადად.",
            examples: [
                { title: "საბაზისო და მიღებული კლასი", code: 'class Animal {\n  constructor(public name: string) {}\n  move(distance = 0) {\n    console.log(`${this.name} გადავიდა ${distance} მეტრი`);\n  }\n}\n\nclass Dog extends Animal {\n  bark() { console.log("ვუფ!"); }\n}\n\nconst rex = new Dog("რექსი");\nrex.bark();\nrex.move(10);', desc: "Dog იღებს თვისებებსა და მეთოდებს Animal-ისგან." },
                { title: "წვდომის მოდიფიკატორები", code: 'class BankAccount {\n  public owner: string;\n  private balance = 0;\n\n  constructor(owner: string) {\n    this.owner = owner;\n  }\n\n  deposit(amount: number) {\n    this.balance += amount;\n  }\n\n  getBalance() {\n    return this.balance;\n  }\n}', desc: "private balance დაუმალავს მნიშვნელობას კლასის გარეთ." },
                { title: "აბსტრაქტული კლასები", code: 'abstract class Shape {\n  abstract area(): number;\n}\n\nclass Square extends Shape {\n  constructor(private side: number) { super(); }\n  area() { return this.side * this.side; }\n}', desc: "აბსტრაქტული კლასი განსაზღვრავს კონტრაქტს შვილებისთვის." }
            ],
            practice: {
                title: "ივარჯიშეთ მემკვიდრეობაში",
                tasks: [
                    "დაპროექტეთ Vehicle საბაზისო კლასი და გააფართოვეთ Car-ით და Bicycle-ით.",
                    "დაამატეთ protected speed თვისება და accelerate() მეთოდი.",
                    "შექმენით Employee აბსტრაქტული კლასი getSalary() აბსტრაქტული მეთოდით."
                ]
            }
        }
    },
    enums_types: {
        en: {
            title: "Enums & Advanced Types",
            description: "Explore enums, union types, and advanced type features.",
            concept: "Enums group related constants under a friendly name, while union / intersection / literal types let you describe precise sets of allowed values. These tools make your code *self-documenting* and safer.",
            examples: [
                { title: "Numeric Enum", code: 'enum Direction {\n  Up = 1,\n  Down,\n  Left,\n  Right\n}\n\nconst move = Direction.Left;', desc: "Automatically increments values (1,2,3,4)." },
                { title: "String Enum", code: 'enum Status {\n  Pending = "PENDING",\n  Success = "SUCCESS",\n  Error = "ERROR"\n}\n\nfunction setStatus(s: Status) {\n  // ...\n}', desc: "Keeps the emitted JS readable." },
                { title: "Union Type", code: 'type RGB = "red" | "green" | "blue";\nlet color: RGB = "red";\n// color = "pink"; // ❌ not allowed', desc: "Only listed values are permitted." }
            ],
            practice: {
                title: "Practice Enums & Unions",
                tasks: [
                    "Create a string-based enum Difficulty with Easy | Medium | Hard.",
                    "Write a function that accepts a union type Shape = Circle | Square | Rectangle and logs area().",
                    "Change union to a discriminated union with a kind field."
                ]
            }
        },
        ka: {
            title: "Enum-ები და გაღრმავებული ტიპები",
            description: "შეისწავლეთ enum-ები, გაერთიანებული (union) და კვეთის (intersection) ტიპები, ასევე literal ტიპები, რომ დაწეროთ უფრო მკაფიო და უსაფრთხო კოდი.",
            concept: "Enum-ები გაერთიანებული და დასახელებული კონსტანტების ჯგუფებია (მაგ.: Season, Status). Union / intersection / literal ტიპები საშუალებას გაძლევთ ზუსტად აღწეროთ რა მნიშვნელობებია დაშვებული. ეს ხდის კოდს უფრო მკითხვადს და ამცირებს შეცდომებს კომპილაციის ეტაპზე.",
            examples: [
                { title: "რიცხვითი Enum", code: 'enum Direction {\n  Up = 1,\n  Down,\n  Left,\n  Right\n}\n\nconst move = Direction.Left;', desc: "მნიშვნელობები ავტომატურად ინკრემენტირდება (1,2,3,4)." },
                { title: "სტრიქონული Enum", code: 'enum Status {\n  Pending = "PENDING",\n  Success = "SUCCESS",\n  Error = "ERROR"\n}\n\nfunction setStatus(s: Status) {\n  // ...\n}', desc: "გამოუშვებელ JavaScript კოდში დარჩება მკითხვადი სტრიქონები." },
                { title: "Union ტიპი", code: 'type RGB = "red" | "green" | "blue";\nlet color: RGB = "red";\n// color = "pink"; // ❌ არ არის დაშვებული', desc: "მხოლოდ განსაზღვრული მნიშვნელობებია ნებადართული." }
            ],
            practice: {
                title: "ივარჯიშეთ Enum-ებსა და Union-ებში",
                tasks: [
                    "შექმენით Enum Difficulty მნიშვნელობებით Easy | Medium | Hard.",
                    "დაწერეთ ფუნქცია, რომელიც იღებს Shape = Circle | Square | Rectangle და აბრუნებს ფართობს.",
                    "გაერთიანეთ Shape კავშირი (union) დიფერენცირებული union-სავით kind ველით."
                ]
            }
        }
    },
    modules_namespaces: {
        en: {
            title: "Modules & Namespaces",
            description: "Organize code with modules, namespaces, and import/export.",
            concept: "Modules split your program into files with *private* scope. Anything you want to share must be exported. Namespaces (older pattern) wrap related declarations in a single global identifier. Prefer ES modules + import/export for modern projects.",
            examples: [
                { title: "Exporting & Importing", code: '// math.ts\nexport function add(a: number, b: number) { return a + b; }\n\n// app.ts\nimport { add } from "./math";\nconsole.log(add(2,3));', desc: "Explicitly list what you share." },
                { title: "Default Export", code: '// logger.ts\nexport default function log(msg: string) {\n  console.log(`[LOG] ${msg}`);\n}\n\n// app.ts\nimport log from "./logger";', desc: "One file, one main export." },
                { title: "Namespace (legacy)", code: 'namespace Geometry {\n  export function areaSquare(s: number) { return s * s; }\n}\n\nconsole.log(Geometry.areaSquare(5));', desc: "Wraps helpers under Geometry.*" }
            ],
            practice: {
                title: "Practice Modules",
                tasks: [
                    "დაახლ. Split a simple To-Do app into modules: storage.ts, ui.ts, main.ts.",
                    "Use a namespace LegacyUtils with a function greet(name).",
                    "Refactor namespace code into ES modules."
                ]
            }
        },
        ka: {
            title: "მოდულები და Namespace-ები",
            description: "დააჯგუფეთ კოდი მოდულებად, namespace-ებად და import/export-ით.",
            concept: "მოდულები თითოეულ ფაილს საკუთარი სკოპით აძლევენ, ხოლო Namespace-ები (ძველი მეთოდი) უკავშირდებიან გლობალურ სკოპს ერთ სახელით. თანამედროვე პროექტებში გამოიყენეთ ES მოდულები და import/export.",
            examples: [
                { title: "Export / Import", code: '// math.ts\nexport function add(a: number, b: number) { return a + b; }\n\n// app.ts\nimport { add } from "./math";\nconsole.log(add(2,3));', desc: "დააყენეთ ზუსტად რა უნდა გავიდეს ფაილიდან." },
                { title: "ნაგულისხმევი Export", code: '// logger.ts\nexport default function log(msg: string) {\n  console.log(`[LOG] ${msg}`);\n}\n\n// app.ts\nimport log from "./logger";', desc: "ერთი ფაილი – ერთი მთავარი export." },
                { title: "Namespace (მემკვიდრე)", code: 'namespace Geometry {\n  export function areaSquare(s: number) { return s * s; }\n}\n\nconsole.log(Geometry.areaSquare(5));', desc: "Geometry.areaSquare(…) გამოყენება." }
            ],
            practice: {
                title: "ივარჯიშეთ მოდულებში",
                tasks: [
                    "გაყოფეთ მარტივი To-Do აპი მოდულებად: storage.ts, ui.ts, main.ts.",
                    "შექმენით namespace LegacyUtils მისალმების ფუნქციით greet(name).",
                    "გადაიტანეთ namespace-ის კოდი ES მოდულებად."
                ]
            }
        }
    },
    async_promises: {
        en: {
            title: "Async & Promises",
            description: "Handle asynchronous operations with Promise types and async/await.",
            concept: "Promises represent a future value. async/await lets you *write* asynchronous code that *looks* synchronous, making it easier to reason about chains of operations (fetch → parse → render).",
            examples: [
                { title: "Fetching Data", code: 'async function getUsers() {\n  const res  = await fetch("https://jsonplaceholder.typicode.com/users");\n  const data = await res.json();\n  return data;\n}\n\ngetUsers().then(console.log);', desc: "await pauses until the Promise resolves." },
                { title: "Error Handling", code: 'async function safeGet() {\n  try {\n    await fetch("/not-found");\n  } catch (e) {\n    console.error("Request failed", e);\n  }\n}', desc: "Use try/catch around await." },
                { title: "Promise.all", code: 'const urls = ["/a","/b","/c"];\nconst results = await Promise.all(urls.map(u => fetch(u)));', desc: "Run requests in parallel." }
            ],
            practice: {
                title: "Practice Async/Await",
                tasks: [
                    "Write an async function fetchPost(id) that returns post data.",
                    "Add loading / error handling with try/catch.",
                    "Use Promise.all to fetch posts 1-5 concurrently."
                ]
            }
        },
        ka: {
            title: "Async და Promise-ები",
            description: "მართეთ ასინქრონული ოპერაციები Promise-ების და async/await-ით.",
            concept: "Promise წარმოადგენს მომავალ მნიშვნელობას. async/await საშუალებას გაძლევთ დაწეროთ ასინქრონული კოდი სინქრონულის მსგავსი სტილით, რაც ამარტივებს, მაგალითად, მოთხოვნა → დამუშავება → რენდერინგის ლოგიკის გაგებას.",
            examples: [
                { title: "მონაცემების წამოღება", code: 'async function getUsers() {\n  const res  = await fetch("https://jsonplaceholder.typicode.com/users");\n  const data = await res.json();\n  return data;\n}\n\ngetUsers().then(console.log);', desc: "await აჩერებს შესრულებას სანამ Promise დასრულდება." },
                { title: "შეცდომების დამუშავება", code: 'async function safeGet() {\n  try {\n    await fetch("/not-found");\n  } catch (e) {\n    console.error("მოთხოვნა ჩავარდა", e);\n  }\n}', desc: "გამოიყენეთ try/catch await-ის გარშემო." },
                { title: "Promise.all", code: 'const urls = ["/a","/b","/c"];\nconst results = await Promise.all(urls.map(u => fetch(u)));', desc: "გაუშვით მოთხოვნები პარალელურად." }
            ],
            practice: {
                title: "ივარჯიშეთ Async/Await-ში",
                tasks: [
                    "დაწერეთ async ფუნქცია fetchPost(id) რომელიც აბრუნებს პოსტის მონაცემებს.",
                    "დაამატეთ ჩატვირთვის / შეცდომის დამუშავება try/catch-ით.",
                    "გამოიყენეთ Promise.all პოსტების 1-5 ერთად მოსატანად."
                ]
            }
        }
    },
    utility_types: {
        en: {
            title: "Utility Types",
            description: "Leverage built-in utility types for powerful type transformations.",
            concept: "Utility types such as Partial<T>, Readonly<T>, Record<K,T> etc. let you transform existing types rather than redefining them, reducing duplication and mistakes.",
            examples: [
                { title: "Partial<T>", code: 'interface Todo {\n  title: string;\n  completed: boolean;\n}\n\nfunction updateTodo(todo: Todo, fields: Partial<Todo>) {\n  return { ...todo, ...fields };\n}', desc: "Makes every property optional." },
                { title: "Readonly<T>", code: 'interface Config { host: string; port: number; }\nconst cfg: Readonly<Config> = { host: "localhost", port: 8080 };\n// cfg.host = "127.0.0.1"; // ❌ cannot assign', desc: "Locks object for mutation." },
                { title: "Record<K,T>", code: 'type Fruit = "apple" | "banana" | "orange";\nconst colors: Record<Fruit, string> = {\n  apple: "red",\n  banana: "yellow",\n  orange: "orange"\n};', desc: "Create a map with fixed keys." }
            ],
            practice: {
                title: "Practice Utility Types",
                tasks: [
                    "Convert an existing interface User into Readonly<User> when exposed outside module.",
                    "Use Record<string, number> to store product stock counts.",
                    "Rewrite updateTodo to accept Pick<Todo, 'title'> instead of Partial<Todo>."
                ]
            }
        },
        ka: {
            title: "დამხმარე ტიპები",
            description: "გამოიყენეთ ჩაშენებული დამხმარე ტიპები ძლიერი ტიპის ტრანსფორმაციებისთვის.",
            concept: "დამხმარე ტიპები (Partial<T>, Readonly<T>, Record<K,T> და სხვ.) საშუალებას გაძლევთ შეცვალოთ არსებული ტიპები მათი თავიდან აღწერის გარეშე, ამცირებთ კოპირებას და შეცდომებს.",
            examples: [
                { title: "Partial<T>", code: 'interface Todo {\n  title: string;\n  completed: boolean;\n}\n\nfunction updateTodo(todo: Todo, fields: Partial<Todo>) {\n  return { ...todo, ...fields };\n}', desc: "კეთებს ყველა property-ს არასავალდებულოდ." },
                { title: "Readonly<T>", code: 'interface Config { host: string; port: number; }\nconst cfg: Readonly<Config> = { host: "localhost", port: 8080 };\n// cfg.host = "127.0.0.1"; // ❌ შეცვლა შეუძლებელია', desc: "კრძალავს ობიექტის ცვლილებას." },
                { title: "Record<K,T>", code: 'type Fruit = "apple" | "banana" | "orange";\nconst colors: Record<Fruit, string> = {\n  apple: "red",\n  banana: "yellow",\n  orange: "orange"\n};', desc: "შექმენით map ფიქსირებული key-ებით." }
            ],
            practice: {
                title: "ივარჯიშეთ დამხმარე ტიპებში",
                tasks: [
                    "გადაიყვანეთ User ინტერფეისი Readonly<User>-ად მოდულის გარეთ გამოსატანად.",
                    "გამოიყენეთ Record<string, number> პროდუქტების მარაგის ჩასაწერად.",
                    "გადაწერეთ updateTodo ისე, რომ მიიღოს Pick<Todo, 'title'> Partial-ის ნაცვლად."
                ]
            }
        }
    },
    testing_debugging: {
        en: {
            title: "Testing & Debugging",
            description: "Test TypeScript code and debug with proper tooling.",
            concept: "Automated tests (Jest, Vitest) catch regressions. Source maps and modern debuggers let you set breakpoints in TS and step through generated JS seamlessly.",
            examples: [
                { title: "Jest + ts-jest", code: 'npm install --save-dev jest ts-jest @types/jest\n\n// jest.config.js\nmodule.exports = { preset: "ts-jest", testEnvironment: "node" };', desc: "Configure Jest for TypeScript." },
                { title: "Simple Test", code: '// math.ts\nexport const add = (a: number, b: number) => a + b;\n\n// math.test.ts\nimport { add } from "./math";\n\nexpect(add(2, 3)).toBe(5);', desc: "Basic assertion." },
                { title: "Debugger", code: '// VSCode launch.json snippet\n{"type":"pwa-node","request":"launch","name":"Debug TS","program":"${workspaceFolder}/src/index.ts","preLaunchTask":"tsc: build - tsconfig.json"}', desc: "Debug TS directly in VSCode." }
            ],
            practice: {
                title: "Practice Testing & Debugging",
                tasks: [
                    "Install Vitest and write tests for a calculator module.",
                    "Create a failing test first (TDD).",
                    "Set a breakpoint and step through add(), subtract() functions."
                ]
            }
        },
        ka: {
            title: "ტესტირება და გამართვა",
            description: "ტესტირება TypeScript კოდისა და გამართვა შესაბამისი ხელსაწყოებით.",
            concept: "ავტომატური ტესტები (Jest, Vitest) აფიქსირებს რეგრესიებს. Source map-ები და თანამედროვე დებაგერები საშუალებას გაძლევთ დააყენოთ breakpoints TS კოდში და ნაბიჯ-ნაბიჯ მიჰყვეთ გენერირებულ JS-ს.",
            examples: [
                { title: "Jest + ts-jest", code: 'npm install --save-dev jest ts-jest @types/jest\n\n// jest.config.js\nmodule.exports = { preset: "ts-jest", testEnvironment: "node" };', desc: "დააკონფიგურირეთ Jest TypeScript-თვის." },
                { title: "მარტივი ტესტი", code: '// math.ts\nexport const add = (a: number, b: number) => a + b;\n\n// math.test.ts\nimport { add } from "./math";\n\nexpect(add(2, 3)).toBe(5);', desc: "ძირითადი assert." },
                { title: "Debugger", code: '// VSCode launch.json\n{"type":"pwa-node","request":"launch","name":"Debug TS","program":"${workspaceFolder}/src/index.ts","preLaunchTask":"tsc: build - tsconfig.json"}', desc: "დებაგი პირდაპირ TS-ში VSCode-ის საშუალებით." }
            ],
            practice: {
                title: "ივარჯიშეთ ტესტირებაში & გამართვაში",
                tasks: [
                    "დააყენეთ Vitest და დაწერეთ ტესტები calculator მოდულისთვის.",
                    "შექმენით დასაწყისში ჩამჭრელი ტესტი (TDD).",
                    "დაყენეთ breakpoint და ნაბიჯ-ნაბიჯ გაიარეთ add(), subtract() ფუნქციებზე."
                ]
            }
        }
    },
    advanced_patterns: {
        en: {
            title: "Advanced Patterns",
            description: "Master advanced TypeScript patterns and architectural concepts.",
            concept: "Decorators, mixins, conditional types, mapped types and other advanced features unlock meta-programming super-powers allowing you to write expressive and DRY code.",
            examples: [
                { title: "Class Decorator", code: '@sealed\nclass Greeter {\n  greeting: string;\n  constructor(msg: string) { this.greeting = msg; }\n  greet() { return "Hello, " + this.greeting; }\n}\n\nfunction sealed(constructor: Function) {\n  Object.seal(constructor);\n  Object.seal(constructor.prototype);\n}', desc: "Prevents further subclassing / extension." },
                { title: "Conditional Type", code: 'type IsString<T> = T extends string ? "Yes" : "No";\n\ntype A = IsString<string>; // "Yes"\ntype B = IsString<number>; // "No"', desc: "Types that depend on other types." },
                { title: "Mapped Type", code: 'type Nullable<T> = { [K in keyof T]: T[K] | null };\ninterface User { id: number; name: string; }\nconst maybeUser: Nullable<User> = { id: 1, name: null };', desc: "Transform properties en-masse." }
            ],
            practice: {
                title: "Practice Advanced Patterns",
                tasks: [
                    "Implement a method decorator that logs arguments & return value.",
                    "Create a mixin that adds timestamp property to any class.",
                    "Use conditional types to create Result<T> = Success<T> | Failure."
                ]
            }
        },
        ka: {
            title: "გაღრმავებული ნიმუშები",
            description: "დაეუფლეთ TypeScript-ის გაღრმავებულ ნიმუშებს და არქიტექტურული კონცეფციებს.",
            concept: "დეკორატორები, მიქსინები, პირობითი და რეგულარული ტიპები გაძლევთ მეტა-პროგრამირების შესაძლებლობებს, რომ დაწეროთ გამdruck and DRY კოდი.",
            examples: [
                { title: "კლასის დეკორატორი", code: '@sealed\nclass Greeter {\n  greeting: string;\n  constructor(msg: string) { this.greeting = msg; }\n  greet() { return "გამარჯობა, " + this.greeting; }\n}\n\nfunction sealed(constructor: Function) {\n  Object.seal(constructor);\n  Object.seal(constructor.prototype);\n}', desc: "შეზღუდავს შემდგომ გაფართოებას." },
                { title: "პირობითი ტიპი", code: 'type IsString<T> = T extends string ? "Yes" : "No";\n\ntype A = IsString<string>; // "Yes"\ntype B = IsString<number>; // "No"', desc: "ტიპები, რომლებიც სხვა ტიპებზეა დამოკიდებული." },
                { title: "ვამო ტიპი", code: 'type Nullable<T> = { [K in keyof T]: T[K] | null };\ninterface User { id: number; name: string; }\nconst maybeUser: Nullable<User> = { id: 1, name: null };', desc: "ერთი მოქმედებით შეცვლილი თვისებები." }
            ],
            practice: {
                title: "ივარჯიშეთ გაღრმავებულ ნიმუშებში",
                tasks: [
                    "განახორციელეთ მეთოდის დეკორატორი, რომელიც ალოგინებს არგუმენტებს და შედეგს.",
                    "შექმენით მიქსინი, რომელიც ნებისმიერ კლასს ამატებს timestamp-ს.",
                    "გამოიყენეთ პირობითი ტიპები Result<T> = Success<T> | Failure-ს შესაქმნელად."
                ]
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

    // NEW: Progress update
    const totalLessons = tutorialOrder.length;
    const progressFill = document.querySelector('.progress-bar > div');
    if (progressFill) {
        progressFill.style.width = `${((currentIndex + 1) / totalLessons) * 100}%`;
    }
    const progressNumber = document.querySelector('.glass.rounded-xl span.text-xs');
    if (progressNumber) {
        progressNumber.textContent = `${currentIndex + 1}/${totalLessons}`;
    }
    const lessonCounter = document.querySelector('.text-center span');
    if (lessonCounter) {
        lessonCounter.textContent = `Lesson ${currentIndex + 1} of ${totalLessons}`;
    }
}

// Expose functions to global scope for HTML integration if needed
window.loadTutorial = loadTutorial;
window.navigateNext = navigateNext;
window.navigatePrevious = navigatePrevious;
window.runCode = runCode;
window.resetCode = resetCode;
window.clearConsole = clearConsole;