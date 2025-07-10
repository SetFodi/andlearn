// Application State
let currentLanguage = localStorage.getItem('language') || 'en';
let currentTheme = 'light';

// Complete Translation Data
const translations = {
    en: {
        // UI Elements
        ui: {
            title: "AndLearn - Interactive JavaScript Tutorials",
            creator: "Created by Luka Partenadze",
            languageName: "English",
            runCode: "▶️ Run Code",
            reset: "🔄 Reset",
            copy: "📋 Copy",
            clear: "🗑️ Clear",
            clearConsole: "🧹 Clear",
            previous: "← Previous",
            next: "Next →",
            practiceTask: "🎯 Practice Task",
            tryItYourself: "💻 Try it Yourself",
            output: "📺 Output",
            placeholder: "// Start coding here...\n// Try the examples above or write your own code!\n\nconsole.log('Hello, World!');"
        },
        // Tutorial Navigation
        navigation: {
            variables: "Variables & Data Types",
            functions: "Functions",
            controlflow: "Control Flow", 
            arrays: "Arrays & Objects Deep Dive",
            advanced_functions: "Functions + Arrays & Objects",
            advanced_arrays: "Advanced Array Methods",
            typescript: "TypeScript Introduction",
            dom: "DOM Manipulation",
            events: "Events & Advanced DOM",
            async: "Async JavaScript",
            api: "API Requests",
            error_handling: "Error Handling"
        },
        // Tutorial Content
        tutorials: {
            variables: {
                title: "Variables in JavaScript",
                description: "Learn the fundamentals of JavaScript variables, data types, and basic syntax.",
                content: {
                    concept: {
                        title: "📦 What are Variables?",
                        text: `Variables are like labeled boxes that store information. Imagine you have boxes in your room. Each box has a label and stores something different. Variables work the same way!

In JavaScript, we create variables using these keywords:
• **let** - for things that might change (like your age)
• **const** - for things that stay the same (like your name)  
• **var** - old way (we don't use this anymore)

Think of 'let' as a box you can put new things in, and 'const' as a box that's sealed shut!`
                    },
                    example: {
                        title: "🎭 Different Types of Data",
                        text: `JavaScript can store different types of information:

**Text (String)** - Words and sentences:
\`\`\`javascript
const myName = "Luka";
const greeting = "Hello World!";
\`\`\`

**Numbers** - Any number:
\`\`\`javascript
let age = 25;
const pi = 3.14;
\`\`\`

**True/False (Boolean)** - Yes or no answers:
\`\`\`javascript
const isStudent = true;
const isRaining = false;
\`\`\`

**Lists (Array)** - Multiple items:
\`\`\`javascript
const colors = ["red", "blue", "green"];
const numbers = [1, 2, 3, 4, 5];
\`\`\`

**Objects** - Complex information:
\`\`\`javascript
const person = {
    name: "Luka",
    age: 25,
    city: "Tbilisi"
};
\`\`\`

Think of it like different types of containers - some hold text, some hold numbers, some hold lists of things!`
                    },
                    task: {
                        title: "💻 Let's Practice!",
                        text: `**Your Task:**
1. Create a variable for your name using \`const\`
2. Create a variable for your age using \`let\`
3. Print both to the console

Try it in the code editor below!`
                    }
                }
            },
            functions: {
                title: "Functions in JavaScript",
                description: "Functions are like magical recipes - give them ingredients (inputs) and they create something new!",
                content: {
                    concept: {
                        title: "⚡ What are Functions?",
                        text: `Functions are like magical recipes in JavaScript! You give them ingredients (called parameters), they do something with those ingredients, and then they give you back a result.

Think of a blender:
• You put in fruits (input)
• It blends them (process)
• You get a smoothie (output)

Functions work the same way!`
                    },
                    example: {
                        title: "🍰 Function Examples",
                        text: `**Simple Function:**
\`\`\`javascript
function sayHello() {
    console.log("Hello!");
}
sayHello(); // Calls the function
\`\`\`

**Function with Parameters:**
\`\`\`javascript
function greetPerson(name) {
    console.log("Hello, " + name + "!");
}
greetPerson("Luka"); // Output: "Hello, Luka!"
\`\`\`

**Function that Returns a Value:**
\`\`\`javascript
function addNumbers(a, b) {
    return a + b;
}
const result = addNumbers(5, 3); // result = 8
\`\`\`

**Modern Arrow Functions:**
\`\`\`javascript
const multiply = (x, y) => x * y;
console.log(multiply(4, 5)); // Output: 20
\`\`\``
                    },
                    task: {
                        title: "🎯 Create Your Own Function",
                        text: `**Your Task:**
1. Create a function called \`introduce\` that takes a name and age as parameters
2. Make it return a string like "Hi, I'm [name] and I'm [age] years old"
3. Call your function with your own name and age
4. Print the result to the console`
                    }
                }
            },
            controlflow: {
                title: "Control Flow in JavaScript",
                description: "Learn to make your code smart! Teach it to make decisions and repeat tasks automatically.",
                content: {
                    concept: {
                        title: "🔄 What is Control Flow?",
                        text: `Control flow is how your code makes decisions and repeats actions. It's like giving your code a brain!

Think of it like traffic lights:
• **If** the light is green → go
• **Else if** the light is yellow → slow down  
• **Else** (red light) → stop

Your code can make similar decisions!`
                    },
                    example: {
                        title: "🚦 Decision Making Examples",
                        text: `**If Statements:**
\`\`\`javascript
let age = 18;
if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("Too young to vote");
}
\`\`\`

**Loops - Repeating Actions:**
\`\`\`javascript
// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
}

// While loop
let count = 0;
while (count < 3) {
    console.log("Hello " + count);
    count++;
}
\`\`\``
                    },
                    task: {
                        title: "🎯 Practice Control Flow",
                        text: `**Your Task:**
1. Create a variable for your favorite number
2. Use an if statement to check if it's greater than 10
3. Create a loop that counts from 1 to your favorite number
4. Print each number to the console`
                    }
                }
            },
            arrays: {
                title: "Arrays & Objects Deep Dive",
                description: "Learn to organize and work with collections of data - like digital filing cabinets!",
                content: {
                    concept: {
                        title: "🗂️ What are Arrays and Objects?",
                        text: `Arrays and Objects are ways to store multiple pieces of information together.

**Arrays** are like numbered lists:
• Position 0: "Apple"
• Position 1: "Banana"  
• Position 2: "Orange"

**Objects** are like labeled containers:
• name: "Luka"
• age: 25
• city: "Tbilisi"`
                    },
                    example: {
                        title: "📚 Array and Object Examples",
                        text: `**Working with Arrays:**
\`\`\`javascript
const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // "apple"
fruits.push("grape"); // Add new item
console.log(fruits.length); // 4
\`\`\`

**Working with Objects:**
\`\`\`javascript
const person = {
    name: "Luka",
    age: 25,
    greet: function() {
        return "Hello, I'm " + this.name;
    }
};
console.log(person.name); // "Luka"
console.log(person.greet()); // "Hello, I'm Luka"
\`\`\``
                    },
                    task: {
                        title: "🎯 Create Your Data Structures",
                        text: `**Your Task:**
1. Create an array of your favorite foods
2. Create an object representing yourself (name, age, hobby)
3. Add a new food to your array
4. Print your object's properties to the console`
                    }
                }
            },
            advanced_functions: {
                title: "Functions + Arrays & Objects",
                description: "Now you're ready for the ultimate combo - functions working with arrays and objects like a pro!",
                content: {
                    concept: {
                        title: "🎯 Advanced Function Techniques",
                        text: `Now we'll combine functions with arrays and objects to create powerful programs!

Functions can:
• Take arrays and objects as parameters
• Return arrays and objects
• Modify data structures
• Create new data from existing data`
                    },
                    example: {
                        title: "🚀 Advanced Examples",
                        text: `**Functions with Arrays:**
\`\`\`javascript
function findLongestName(names) {
    let longest = "";
    for (let name of names) {
        if (name.length > longest.length) {
            longest = name;
        }
    }
    return longest;
}

const names = ["Alice", "Bob", "Christopher"];
console.log(findLongestName(names)); // "Christopher"
\`\`\`

**Functions with Objects:**
\`\`\`javascript
function createStudent(name, grade) {
    return {
        name: name,
        grade: grade,
        isPass: grade >= 60
    };
}

const student = createStudent("Luka", 85);
console.log(student.isPass); // true
\`\`\``
                    },
                    task: {
                        title: "🎯 Advanced Challenge",
                        text: `**Your Task:**
1. Create a function that takes an array of numbers and returns the average
2. Create a function that takes a person object and returns a greeting
3. Test both functions with your own data`
                    }
                }
            },
            advanced_arrays: {
                title: "Advanced Array Methods",
                description: "Master powerful array methods like map, filter, and reduce - your data manipulation superpowers!",
                content: {
                    concept: {
                        title: "🚀 Array Superpowers",
                        text: `Modern JavaScript has amazing built-in array methods that make working with data super easy!

• **map()** - Transform every item
• **filter()** - Keep only items that match criteria
• **reduce()** - Combine all items into one result
• **find()** - Find the first matching item`
                    },
                    example: {
                        title: "⚡ Method Examples",
                        text: `**Map - Transform Data:**
\`\`\`javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
\`\`\`

**Filter - Select Data:**
\`\`\`javascript
const ages = [15, 22, 18, 30, 16];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [22, 18, 30]
\`\`\`

**Reduce - Combine Data:**
\`\`\`javascript
const prices = [10, 20, 30];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // 60
\`\`\``
                    },
                    task: {
                        title: "🎯 Array Method Challenge",
                        text: `**Your Task:**
1. Create an array of numbers
2. Use map to double each number
3. Use filter to keep only even numbers
4. Use reduce to find the sum of all numbers`
                    }
                }
            },
            typescript: {
                title: "TypeScript Introduction", 
                description: "Learn TypeScript - JavaScript with superpowers! Add types to catch errors before they happen.",
                content: {
                    concept: {
                        title: "📘 What is TypeScript?",
                        text: `TypeScript is JavaScript with types! It helps you catch errors before your code runs.

Think of types like labels on boxes:
• string: "Hello World"
• number: 42
• boolean: true/false
• array: [1, 2, 3]

TypeScript checks these labels to make sure you're using the right type of data!`
                    },
                    example: {
                        title: "💻 TypeScript Examples",
                        text: `**Type Annotations:**
\`\`\`typescript
let name: string = "Luka";
let age: number = 25;
let isStudent: boolean = true;

function greet(person: string): string {
    return "Hello, " + person;
}
\`\`\`

**Interfaces:**
\`\`\`typescript
interface Person {
    name: string;
    age: number;
    email?: string; // Optional property
}

const user: Person = {
    name: "Luka",
    age: 25
};
\`\`\``
                    },
                    task: {
                        title: "🎯 TypeScript Practice",
                        text: `**Your Task:**
1. Create a function with typed parameters
2. Define an interface for a Book (title, author, pages)
3. Create a book object using your interface
4. Try the code in the TypeScript playground online!`
                    }
                }
            },
            dom: {
                title: "DOM Manipulation",
                description: "Learn to control web pages! Make your websites interactive by changing content, styles, and responding to user actions.",
                content: {
                    concept: {
                        title: "🌐 What is the DOM?",
                        text: `The DOM (Document Object Model) is how JavaScript sees and controls web pages.

Think of a web page like a tree:
• The trunk is the <html> element
• Branches are <body>, <head>, etc.
• Leaves are <p>, <div>, <button>, etc.

JavaScript can change any part of this tree!`
                    },
                    example: {
                        title: "🎮 DOM Examples",
                        text: `**Selecting Elements:**
\`\`\`javascript
// Get element by ID
const title = document.getElementById('title');

// Get elements by class
const buttons = document.getElementsByClassName('btn');

// Modern way with querySelector
const firstButton = document.querySelector('.btn');
\`\`\`

**Changing Content:**
\`\`\`javascript
// Change text
title.textContent = 'New Title!';

// Change HTML
title.innerHTML = '<strong>Bold Title!</strong>';

// Change styles
title.style.color = 'blue';
title.style.fontSize = '24px';
\`\`\``
                    },
                    task: {
                        title: "🎯 DOM Challenge",
                        text: `**Your Task:**
1. Create HTML with a heading and button
2. Use JavaScript to change the heading text when button is clicked
3. Change the heading color
4. Add a new paragraph element dynamically`
                    }
                }
            },
            events: {
                title: "Events & Advanced DOM",
                description: "Master advanced DOM techniques! Create, modify, and remove elements dynamically for truly interactive experiences.",
                content: {
                    concept: {
                        title: "🎮 What are Events?",
                        text: `Events are things that happen in the browser that you can respond to:

• User clicks a button → click event
• User types in input → input event  
• Page finishes loading → load event
• Mouse moves over element → mouseover event

JavaScript can "listen" for these events and respond!`
                    },
                    example: {
                        title: "⚡ Event Examples",
                        text: `**Event Listeners:**
\`\`\`javascript
// Button click
button.addEventListener('click', function() {
    alert('Button clicked!');
});

// Input changes
input.addEventListener('input', function(event) {
    console.log('User typed:', event.target.value);
});

// Modern arrow function syntax
button.addEventListener('click', () => {
    console.log('Arrow function click!');
});
\`\`\`

**Creating Elements:**
\`\`\`javascript
// Create new element
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello from JavaScript!';
newDiv.className = 'my-class';

// Add to page
document.body.appendChild(newDiv);
\`\`\``
                    },
                    task: {
                        title: "🎯 Event Challenge",
                        text: `**Your Task:**
1. Create a form with input and button
2. Listen for button clicks
3. When clicked, create a new div with the input text
4. Add the new div to the page
5. Bonus: Add a delete button to each new div!`
                    }
                }
            },
            async: {
                title: "Async JavaScript",
                description: "Master asynchronous programming! Handle API calls, promises, and async operations like a pro.",
                content: {
                    concept: {
                        title: "⏰ What is Async?",
                        text: `Asynchronous code doesn't wait! It lets other code run while waiting for slow operations.

Think of ordering food:
• **Synchronous**: Wait in line, order, wait for food, then leave
• **Asynchronous**: Order food, get a number, do other things while waiting

JavaScript can do multiple things at once!`
                    },
                    example: {
                        title: "🔄 Async Examples",
                        text: `**Promises:**
\`\`\`javascript
// Creating a promise
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data loaded!');
    }, 2000);
});

fetchData.then(data => {
    console.log(data); // "Data loaded!" after 2 seconds
});
\`\`\`

**Async/Await:**
\`\`\`javascript
async function loadUserData() {
    try {
        const response = await fetch('/api/user');
        const data = await response.json();
        console.log('User data:', data);
    } catch (error) {
        console.log('Error:', error);
    }
}
\`\`\``
                    },
                    task: {
                        title: "🎯 Async Challenge",
                        text: `**Your Task:**
1. Create a function that returns a Promise
2. Use setTimeout to simulate a delay
3. Use async/await to call your function
4. Handle both success and error cases`
                    }
                }
            },
            api: {
                title: "API Requests",
                description: "Learn to fetch data from the internet! Connect your apps to external services and APIs.",
                content: {
                    concept: {
                        title: "🌍 What are APIs?",
                        text: `APIs (Application Programming Interfaces) let your code talk to other services on the internet.

Think of APIs like waiters in a restaurant:
• You (your code) ask the waiter (API) for food
• The waiter goes to the kitchen (external service)
• The waiter brings back your order (data)

APIs deliver data instead of food!`
                    },
                    example: {
                        title: "📡 API Examples",
                        text: `**Fetch API:**
\`\`\`javascript
// Get data from an API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log('Users:', users);
    })
    .catch(error => {
        console.log('Error:', error);
    });
\`\`\`

**With Async/Await:**
\`\`\`javascript
async function getUsers() {
    try {
        const response = await fetch('/api/users');
        const users = await response.json();
        return users;
    } catch (error) {
        console.log('Failed to fetch users:', error);
        return [];
    }
}
\`\`\``
                    },
                    task: {
                        title: "🎯 API Challenge",
                        text: `**Your Task:**
1. Use fetch to get data from a public API
2. Display the data on your webpage
3. Handle loading states
4. Handle errors gracefully
5. Try: jsonplaceholder.typicode.com for practice!`
                    }
                }
            },
            error_handling: {
                title: "Error Handling",
                description: "Learn to handle errors gracefully and build robust applications that don't break.",
                content: {
                    concept: {
                        title: "🛡️ What is Error Handling?",
                        text: `Error handling is preparing for things to go wrong in your code.

Think of error handling like having insurance:
• You hope nothing bad happens
• But if it does, you're prepared
• Your app keeps working instead of crashing

Good error handling makes your code bulletproof!`
                    },
                    example: {
                        title: "🚨 Error Handling Examples",
                        text: `**Try/Catch:**
\`\`\`javascript
try {
    // Code that might fail
    const data = JSON.parse(invalidJson);
    console.log(data);
} catch (error) {
    // Handle the error
    console.log('Oops! Invalid JSON:', error.message);
}
\`\`\`

**With Async Functions:**
\`\`\`javascript
async function safeApiCall() {
    try {
        const response = await fetch('/api/data');
        if (!response.ok) {
            throw new Error('API call failed');
        }
        return await response.json();
    } catch (error) {
        console.log('Error fetching data:', error);
        return null; // Safe fallback
    }
}
\`\`\``
                    },
                    task: {
                        title: "🎯 Error Handling Challenge",
                        text: `**Your Task:**
1. Write a function that might throw an error
2. Wrap it in try/catch
3. Create different types of errors
4. Handle each error type appropriately
5. Always provide user-friendly error messages!`
                    }
                }
            }
        }
    },
    ka: {
        // UI Elements
        ui: {
            title: "AndLearn - ინტერაქტიული JavaScript გაკვეთილები",
            creator: "შექმნილია ლუკა ფარტენაძის მიერ",
            languageName: "ქართული",
            runCode: "▶️ კოდის გაშვება",
            reset: "🔄 დაბრუნება",
            copy: "📋 კოპირება",
            clear: "🗑️ გასუფთავება",
            clearConsole: "🧹 გასუფთავება",
            previous: "← წინა",
            next: "შემდეგი →",
            practiceTask: "🎯 პრაქტიკული ამოცანა",
            tryItYourself: "💻 სცადეთ თავად",
            output: "📺 შედეგი",
            placeholder: "// დაიწყეთ კოდირება აქ...\n// სცადეთ ზემოთ მოცემული მაგალითები ან დაწერეთ თქვენი კოდი!\n\nconsole.log('გამარჯობა, მსოფლიო!');"
        },
        // Tutorial Navigation
        navigation: {
            variables: "ცვლადები და მონაცემთა ტიპები",
            functions: "ფუნქციები",
            controlflow: "მართვის ნაკადი",
            arrays: "მასივები და ობიექტები ღრმად",
            advanced_functions: "ფუნქციები + მასივები და ობიექტები",
            advanced_arrays: "მასივების გაუმჯობესებული მეთოდები",
            typescript: "TypeScript-ის შესავალი",
            dom: "DOM მანიპულირება",
            events: "მოვლენები და გაუმჯობესებული DOM",
            async: "ასინქრონული JavaScript",
            api: "API მოთხოვნები",
            error_handling: "შეცდომების მართვა"
        },
        // Tutorial Content
        tutorials: {
            variables: {
                title: "ცვლადები JavaScript-ში",
                description: "შეისწავლეთ JavaScript ცვლადების, მონაცემთა ტიპებისა და ძირითადი სინტაქსის საფუძვლები.",
                content: {
                    concept: {
                        title: "📦 რა არის ცვლადები?",
                        text: `ცვლადები არის ეტიკეტირებული ყუთები, რომლებიც ინახავენ ინფორმაციას. წარმოიდგინეთ, რომ თქვენს ოთახში გაქვთ ყუთები. ყოველ ყუთს აქვს ეტიკეტი და ინახავს რაღაც განსხვავებულს. ცვლადები იგივენაირად მუშაობენ!

JavaScript-ში ცვლადებს ვქმნით ამ საკვანძო სიტყვებით:
• **let** - რამისთვისაც, რაც შეიძლება შეიცვალოს (როგორც თქვენი ასაკი)
• **const** - რამისთვისაც, რაც იგივე რჩება (როგორც თქვენი სახელი)
• **var** - ძველი გზა (ამას ახლა აღარ ვიყენებთ)

წარმოიდგინეთ 'let' როგორც ყუთი, რომელშიც ახალი ნივთების ჩადება შეგიძლიათ, ხოლო 'const' როგორც ყუთი, რომელიც დალუქულია!`
                    },
                    example: {
                        title: "🎭 მონაცემების სხვადასხვა ტიპები",
                        text: `JavaScript-ს შეუძლია შეინახოს ინფორმაციის სხვადასხვა ტიპები:

**ტექსტი (String)** - სიტყვები და წინადადებები:
\`\`\`javascript
const myName = "ლუკა";
const greeting = "გამარჯობა მსოფლიო!";
\`\`\`

**რიცხვები** - ნებისმიერი რიცხვი:
\`\`\`javascript
let age = 25;
const pi = 3.14;
\`\`\`

**მართალი/ცრუ (Boolean)** - კი ან არა პასუხები:
\`\`\`javascript
const isStudent = true;
const isRaining = false;
\`\`\`

**სიები (Array)** - მრავალი ელემენტი:
\`\`\`javascript
const colors = ["წითელი", "ლურჯი", "მწვანე"];
const numbers = [1, 2, 3, 4, 5];
\`\`\`

**ობიექტები** - რთული ინფორმაცია:
\`\`\`javascript
const person = {
    name: "ლუკა",
    age: 25,
    city: "თბილისი"
};
\`\`\`

წარმოიდგინეთ, როგორც კონტეინერების სხვადასხვა ტიპები - ზოგი ინახავს ტექსტს, ზოგი რიცხვებს, ზოგი ნივთების სიებს!`
                    },
                    task: {
                        title: "💻 ვიპრაქტიკოთ!",
                        text: `**თქვენი ამოცანა:**
1. შექმენით ცვლადი თქვენი სახელისთვის \`const\`-ის გამოყენებით
2. შექმენით ცვლადი თქვენი ასაკისთვის \`let\`-ის გამოყენებით
3. დაპრინტეთ ორივე კონსოლში

სცადეთ ქვემოთ მოცემულ კოდის რედაქტორში!`
                    }
                }
            },
            functions: {
                title: "ფუნქციები JavaScript-ში",
                description: "ფუნქციები არის როგორც მაგიური რეცეპტები - მისცეთ ინგრედიენტები (შეყვანა) და ისინი ახალ რამეს შექმნიან!",
                content: {
                    concept: {
                        title: "⚡ რა არის ფუნქციები?",
                        text: `ფუნქციები არის როგორც მაგიური რეცეპტები JavaScript-ში! მისცემთ ინგრედიენტებს (რასაც პარამეტრებს ეწოდება), ისინი რაღაცას აკეთებენ ამ ინგრედიენტებით, და შემდეგ გიბრუნებენ შედეგს.

წარმოიდგინეთ ბლენდერი:
• ჩადებთ ხილს (შეყვანა)
• ის ააზავებს (პროცესი)
• იღებთ სმუზის (გამოტანა)

ფუნქციები იგივენაირად მუშაობენ!`
                    },
                    example: {
                        title: "🍰 ფუნქციების მაგალითები",
                        text: `**მარტივი ფუნქცია:**
\`\`\`javascript
function sayHello() {
    console.log("გამარჯობა!");
}
sayHello(); // ფუნქციის გამოძახება
\`\`\`

**ფუნქცია პარამეტრებით:**
\`\`\`javascript
function greetPerson(name) {
    console.log("გამარჯობა, " + name + "!");
}
greetPerson("ლუკა"); // შედეგი: "გამარჯობა, ლუკა!"
\`\`\`

**ფუნქცია, რომელიც აბრუნებს მნიშვნელობას:**
\`\`\`javascript
function addNumbers(a, b) {
    return a + b;
}
const result = addNumbers(5, 3); // result = 8
\`\`\`

**თანამედროვე Arrow ფუნქციები:**
\`\`\`javascript
const multiply = (x, y) => x * y;
console.log(multiply(4, 5)); // შედეგი: 20
\`\`\``
                    },
                    task: {
                        title: "🎯 შექმენით თქვენი საკუთარი ფუნქცია",
                        text: `**თქვენი ამოცანა:**
1. შექმენით ფუნქცია სახელწოდებით \`introduce\`, რომელიც იღებს სახელსა და ასაკს პარამეტრებად
2. გახადეთ ის დააბრუნოს სტრინგი როგორიცაა "გამარჯობა, მე ვარ [სახელი] და [ასაკი] წლის ვარ"
3. გამოიძახეთ თქვენი ფუნქცია თქვენი სახელითა და ასაკით
4. დაპრინტეთ შედეგი კონსოლში`
                    }
                }
            },
            controlflow: {
                title: "მართვის ნაკადი JavaScript-ში",
                description: "ისწავლეთ თქვენი კოდის გონიერად გაკეთება! ასწავლეთ გადაწყვეტილებების მიღება და ამოცანების ავტომატურად გამეორება.",
                content: {
                    concept: {
                        title: "🔄 რა არის მართვის ნაკადი?",
                        text: `მართვის ნაკადი არის თუ როგორ იღებს თქვენი კოდი გადაწყვეტილებს და იმეორებს მოქმედებებს. ეს არის როგორც ტვინის მიცემა თქვენს კოდს!

წარმოიდგინეთ სალიგე შუქების მსგავსად:
• **თუ** შუქი მწვანეა → იარეთ
• **სხვაგვარად თუ** შუქი ყვითელია → შენელდით  
• **სხვაგვარად** (წითელი შუქი) → გაჩერდით

თქვენი კოდი შეიძლება მიიღოს მსგავსი გადაწყვეტილებები!`
                    },
                    example: {
                        title: "🚦 გადაწყვეტილების მიღების მაგალითები",
                        text: `**If განცხადებები:**
\`\`\`javascript
let age = 18;
if (age >= 18) {
    console.log("შეგიძლიათ ხმის მიცემა!");
} else {
    console.log("ძალიან ახალგაზრდა ხართ ხმის მისაცემად");
}
\`\`\`

**ციკლები - მოქმედებების გამეორება:**
\`\`\`javascript
// დათვალეთ 1-დან 5-მდე
for (let i = 1; i <= 5; i++) {
    console.log("რიცხვი: " + i);
}

// While ციკლი
let count = 0;
while (count < 3) {
    console.log("გამარჯობა " + count);
    count++;
}
\`\`\``
                    },
                    task: {
                        title: "🎯 მართვის ნაკადის პრაქტიკა",
                        text: `**თქვენი ამოცანა:**
1. შექმენით ცვლადი თქვენი საყვარელი რიცხვისთვის
2. გამოიყენეთ if განცხადება რომ შეამოწმოთ არის თუ არა 10-ზე მეტი
3. შექმენით ციკლი რომელიც დათვლის 1-დან თქვენს საყვარელ რიცხვამდე
4. დაპრინტეთ ყოველი რიცხვი კონსოლში`
                    }
                }
            },
            arrays: {
                title: "მასივები და ობიექტები ღრმად",
                description: "ისწავლეთ მონაცემების კოლექციების ორგანიზება და მუშაობა - როგორც ციფრული საქაღალდე კარადები!",
                content: {
                    concept: {
                        title: "🗂️ რა არის მასივები და ობიექტები?",
                        text: `მასივები და ობიექტები არის გზები მრავალი ინფორმაციის ერთად შესანახად.

**მასივები** არის როგორც დანომრილი სიები:
• პოზიცია 0: "ვაშლი"
• პოზიცია 1: "ბანანი"  
• პოზიცია 2: "ნარინჯი"

**ობიექტები** არის როგორც ეტიკეტირებული კონტეინერები:
• name: "ლუკა"
• age: 25
• city: "თბილისი"`
                    },
                    example: {
                        title: "📚 მასივებისა და ობიექტების მაგალითები",
                        text: `**მასივებთან მუშაობა:**
\`\`\`javascript
const fruits = ["ვაშლი", "ბანანი", "ნარინჯი"];
console.log(fruits[0]); // "ვაშლი"
fruits.push("ყურძენი"); // ახალი ელემენტის დამატება
console.log(fruits.length); // 4
\`\`\`

**ობიექტებთან მუშაობა:**
\`\`\`javascript
const person = {
    name: "ლუკა",
    age: 25,
    greet: function() {
        return "გამარჯობა, მე ვარ " + this.name;
    }
};
console.log(person.name); // "ლუკა"
console.log(person.greet()); // "გამარჯობა, მე ვარ ლუკა"
\`\`\``
                    },
                    task: {
                        title: "🎯 შექმენით მონაცემთა სტრუქტურები",
                        text: `**თქვენი ამოცანა:**
1. შექმენით მასივი თქვენი საყვარელი საკვების
2. შექმენით ობიექტი თქვენს წარმომადგენლობაზე (სახელი, ასაკი, ჰობი)
3. დაამატეთ ახალი საკვები თქვენს მასივში
4. დაპრინტეთ თქვენი ობიექტის თვისებები კონსოლში`
                    }
                }
            },
            advanced_functions: {
                title: "ფუნქციები + მასივები და ობიექტები",
                description: "ახლა მზად ხართ საბოლოო კომბინაციისთვის - ფუნქციები მუშაობენ მასივებთან და ობიექტებთან როგორც პროფესიონალები!",
                content: {
                    concept: {
                        title: "🎯 ფუნქციების გაუმჯობესებული ტექნიკები",
                        text: `ახლა ვაერთიანებთ ფუნქციებს მასივებთან და ობიექტებთან ძლიერი პროგრამების შესაქმნელად!

ფუნქციებს შეუძლიათ:
• მასივებისა და ობიექტების პარამეტრებად მიღება
• მასივებისა და ობიექტების დაბრუნება
• მონაცემთა სტრუქტურების შეცვლა
• არსებული მონაცემებისგან ახალი მონაცემების შექმნა`
                    },
                    example: {
                        title: "🚀 გაუმჯობესებული მაგალითები",
                        text: `**ფუნქციები მასივებთან:**
\`\`\`javascript
function findLongestName(names) {
    let longest = "";
    for (let name of names) {
        if (name.length > longest.length) {
            longest = name;
        }
    }
    return longest;
}

const names = ["ალისა", "ბობი", "ქრისტოფერე"];
console.log(findLongestName(names)); // "ქრისტოფერე"
\`\`\`

**ფუნქციები ობიექტებთან:**
\`\`\`javascript
function createStudent(name, grade) {
    return {
        name: name,
        grade: grade,
        isPass: grade >= 60
    };
}

const student = createStudent("ლუკა", 85);
console.log(student.isPass); // true
\`\`\``
                    },
                    task: {
                        title: "🎯 გაუმჯობესებული გამოწვევა",
                        text: `**თქვენი ამოცანა:**
1. შექმენით ფუნქცია რომელიც იღებს რიცხვების მასივს და აბრუნებს საშუალოს
2. შექმენით ფუნქცია რომელიც იღებს ადამიანის ობიექტს და აბრუნებს მისალმებას
3. გატესტეთ ორივე ფუნქცია თქვენი მონაცემებით`
                    }
                }
            },
            advanced_arrays: {
                title: "მასივების გაუმჯობესებული მეთოდები",
                description: "დაეუფლეთ მასივის ძლიერ მეთოდებს როგორიცაა map, filter და reduce - თქვენი მონაცემების მანიპულირების ზეძალები!",
                content: {
                    concept: {
                        title: "🚀 მასივის ზეძალები",
                        text: `თანამედროვე JavaScript-ს აქვს შესანიშნავი ჩაშენებული მასივის მეთოდები რომლებიც მონაცემებთან მუშაობას ძალიან მარტივს ხდის!

• **map()** - ყოველი ელემენტის გარდაქმნა
• **filter()** - მხოლოდ კრიტერიუმებთან შესაბამისი ელემენტების შენახვა
• **reduce()** - ყველა ელემენტის ერთ შედეგში გაერთიანება
• **find()** - პირველი შესაბამისი ელემენტის პოვნა`
                    },
                    example: {
                        title: "⚡ მეთოდების მაგალითები",
                        text: `**Map - მონაცემების გარდაქმნა:**
\`\`\`javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
\`\`\`

**Filter - მონაცემების შერჩევა:**
\`\`\`javascript
const ages = [15, 22, 18, 30, 16];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [22, 18, 30]
\`\`\`

**Reduce - მონაცემების გაერთიანება:**
\`\`\`javascript
const prices = [10, 20, 30];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // 60
\`\`\``
                    },
                    task: {
                        title: "🎯 მასივის მეთოდების გამოწვევა",
                        text: `**თქვენი ამოცანა:**
1. შექმენით რიცხვების მასივი
2. გამოიყენეთ map ყოველი რიცხვის გასაორმაგებლად
3. გამოიყენეთ filter მხოლოდ ლუწი რიცხვების შესანარჩუნებლად
4. გამოიყენეთ reduce ყველა რიცხვის ჯამის საპოვნელად`
                    }
                }
            },
            typescript: {
                title: "TypeScript-ის შესავალი",
                description: "შეისწავლეთ TypeScript - JavaScript ზეძალებით! დაამატეთ ტიპები შეცდომების დაჭერისთვის მანამ სანამ ისინი მოხდება.",
                content: {
                    concept: {
                        title: "📘 რა არის TypeScript?",
                        text: `TypeScript არის JavaScript ტიპებით! ის დაგეხმარებათ შეცდომების დაჭერაში მანამ სანამ თქვენი კოდი გაეშვება.

წარმოიდგინეთ ტიპები როგორც ეტიკეტები ყუთებზე:
• string: "გამარჯობა მსოფლიო"
• number: 42
• boolean: true/false
• array: [1, 2, 3]

TypeScript ამოწმებს ამ ეტიკეტებს რომ დარწმუნდეს რომ სწორ ტიპის მონაცემებს იყენებთ!`
                    },
                    example: {
                        title: "💻 TypeScript-ის მაგალითები",
                        text: `**ტიპის ანოტაციები:**
\`\`\`typescript
let name: string = "ლუკა";
let age: number = 25;
let isStudent: boolean = true;

function greet(person: string): string {
    return "გამარჯობა, " + person;
}
\`\`\`

**ინტერფეისები:**
\`\`\`typescript
interface Person {
    name: string;
    age: number;
    email?: string; // არასავალდებულო თვისება
}

const user: Person = {
    name: "ლუკა",
    age: 25
};
\`\`\``
                    },
                    task: {
                        title: "🎯 TypeScript-ის პრაქტიკა",
                        text: `**თქვენი ამოცანა:**
1. შექმენით ფუნქცია ტიპირებული პარამეტრებით
2. განსაზღვრეთ ინტერფეისი წიგნისთვის (სათაური, ავტორი, გვერდები)
3. შექმენით წიგნის ობიექტი თქვენი ინტერფეისის გამოყენებით
4. სცადეთ კოდი TypeScript-ის ონლაინ პლეიგრაუნდში!`
                    }
                }
            },
            dom: {
                title: "DOM მანიპულირება",
                description: "ისწავლეთ ვებ გვერდების კონტროლი! გახადეთ თქვენი ვებსაიტები ინტერაქტიული კონტენტის, სტილებისა და მომხმარებლის მოქმედებებზე რეაგირებით.",
                content: {
                    concept: {
                        title: "🌐 რა არის DOM?",
                        text: `DOM (Document Object Model) არის თუ როგორ ხედავს და აკონტროლებს JavaScript ვებ გვერდებს.

წარმოიდგინეთ ვებ გვერდი ხის მსგავსად:
• ღერო არის <html> ელემენტი
• ტოტები არის <body>, <head>, და ა.შ.
• ფოთლები არის <p>, <div>, <button>, და ა.შ.

JavaScript-ს შეუძლია შეცვალოს ამ ხის ნებისმიერი ნაწილი!`
                    },
                    example: {
                        title: "🎮 DOM-ის მაგალითები",
                        text: `**ელემენტების შერჩევა:**
\`\`\`javascript
// ელემენტის მიღება ID-ით
const title = document.getElementById('title');

// ელემენტების მიღება კლასით
const buttons = document.getElementsByClassName('btn');

// თანამედროვე გზა querySelector-ით
const firstButton = document.querySelector('.btn');
\`\`\`

**კონტენტის შეცვლა:**
\`\`\`javascript
// ტექსტის შეცვლა
title.textContent = 'ახალი სათაური!';

// HTML-ის შეცვლა
title.innerHTML = '<strong>მუქი სათაური!</strong>';

// სტილების შეცვლა
title.style.color = 'blue';
title.style.fontSize = '24px';
\`\`\``
                    },
                    task: {
                        title: "🎯 DOM-ის გამოწვევა",
                        text: `**თქვენი ამოცანა:**
1. შექმენით HTML სათაურითა და ღილაკით
2. გამოიყენეთ JavaScript სათაურის ტექსტის შესაცვლელად ღილაკზე დაჭერისას
3. შეცვალეთ სათაურის ფერი
4. დინამიურად დაამატეთ ახალი პარაგრაფის ელემენტი`
                    }
                }
            },
            events: {
                title: "მოვლენები და გაუმჯობესებული DOM",
                description: "დაეუფლეთ DOM-ის პროგრესულ ტექნიკებს! შექმენით, შეცვალეთ და ამოიღეთ ელემენტები დინამიურად ნამდვილად ინტერაქტიული გამოცდილებისთვის.",
                content: {
                    concept: {
                        title: "🎮 რა არის მოვლენები?",
                        text: `მოვლენები არის რაღაცები რაც ხდება ბრაუზერში რაზეც შეგიძლიათ უპასუხოთ:

• მომხმარებელი აჭერს ღილაკს → click მოვლენა
• მომხმარებელი იწერს ტექსტში → input მოვლენა  
• გვერდი სრულდება ჩატვირთვა → load მოვლენა
• მაუსი მოძრაობს ელემენტზე → mouseover მოვლენა

JavaScript-ს შეუძლია "მოუსმინოს" ამ მოვლენებს და უპასუხოს!`
                    },
                    example: {
                        title: "⚡ მოვლენების მაგალითები",
                        text: `**მოვლენების მსმენელები:**
\`\`\`javascript
// ღილაკზე დაჭერა
button.addEventListener('click', function() {
    alert('ღილაკი დაჭერილია!');
});

// ტექსტის შეცვლა
input.addEventListener('input', function(event) {
    console.log('მომხმარებელმა დაწერა:', event.target.value);
});

// თანამედროვე arrow ფუნქციის სინტაქსი
button.addEventListener('click', () => {
    console.log('Arrow ფუნქციის დაჭერა!');
});
\`\`\`

**ელემენტების შექმნა:**
\`\`\`javascript
// ახალი ელემენტის შექმნა
const newDiv = document.createElement('div');
newDiv.textContent = 'გამარჯობა JavaScript-იდან!';
newDiv.className = 'my-class';

// გვერდზე დამატება
document.body.appendChild(newDiv);
\`\`\``
                    },
                    task: {
                        title: "🎯 მოვლენების გამოწვევა",
                        text: `**თქვენი ამოცანა:**
1. შექმენით ფორმა ტექსტის ველითა და ღილაკით
2. მოუსმინეთ ღილაკის დაჭერას
3. როცა დაჭერილია, შექმენით ახალი div ტექსტის ველის შინაარსით
4. დაამატეთ ახალი div გვერდზე
5. ბონუსი: დაამატეთ წაშლის ღილაკი ყოველ ახალ div-ზე!`
                    }
                }
            },
            async: {
                title: "ასინქრონული JavaScript",
                description: "დაეუფლეთ ასინქრონულ პროგრამირებას! მართეთ API გამოძახებები, პრომისები და ასინქრონული ოპერაციები როგორც პროფესიონალი.",
                content: {
                    concept: {
                        title: "⏰ რა არის ასინქრონული?",
                        text: `ასინქრონული კოდი არ ელოდება! ის სხვა კოდს აძლევს შესაძლებლობას გაეშვას ნელი ოპერაციების მოლოდინისას.

წარმოიდგინეთ საკვების შეკვეთა:
• **სინქრონული**: რიგში დგომა, შეკვეთა, საკვების მოლოდინა, შემდეგ წასვლა
• **ასინქრონული**: საკვების შეკვეთა, ნომრის მიღება, მოლოდინისას სხვა საქმეების კეთება

JavaScript-ს შეუძლია ერთდროულად რამდენიმე რამის კეთება!`
                    },
                    example: {
                        title: "🔄 ასინქრონული მაგალითები",
                        text: `**პრომისები:**
\`\`\`javascript
// პრომისის შექმნა
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('მონაცემები ჩაიტვირთა!');
    }, 2000);
});

fetchData.then(data => {
    console.log(data); // "მონაცემები ჩაიტვირთა!" 2 წამის შემდეგ
});
\`\`\`

**Async/Await:**
\`\`\`javascript
async function loadUserData() {
    try {
        const response = await fetch('/api/user');
        const data = await response.json();
        console.log('მომხმარებლის მონაცემები:', data);
    } catch (error) {
        console.log('შეცდომა:', error);
    }
}
\`\`\``
                    },
                    task: {
                        title: "🎯 ასინქრონული გამოწვევა",
                        text: `**თქვენი ამოცანა:**
1. შექმენით ფუნქცია რომელიც აბრუნებს Promise-ს
2. გამოიყენეთ setTimeout დაყოვნების იმიტაციისთვის
3. გამოიყენეთ async/await თქვენი ფუნქციის გამოსაძახებლად
4. მოაგვარეთ როგორც წარმატების, ისე შეცდომის შემთხვევები`
                    }
                }
            },
            api: {
                title: "API მოთხოვნები",
                description: "ისწავლეთ ინტერნეტიდან მონაცემების მოტანა! დააკავშირეთ თქვენი აპლიკაციები გარე სერვისებთან და API-ებთან.",
                content: {
                    concept: {
                        title: "🌍 რა არის API-ები?",
                        text: `API-ები (Application Programming Interfaces) სადაც თქვენი კოდს საშუალება აძლევს ისაუბროს ინტერნეტის სხვა სერვისებთან.

წარმოიდგინეთ API-ები როგორც მიმტანები რესტორანში:
• თქვენ (თქვენი კოდი) სთხოვთ მიმტანს (API) საკვებს
• მიმტანი მიდის სამზარეულოში (გარე სერვისი)
• მიმტანი გიბრუნებთ თქვენს შეკვეთას (მონაცემები)

API-ები მონაცემებს მოგაწვდიან საკვების ნაცვლად!`
                    },
                    example: {
                        title: "📡 API-ის მაგალითები",
                        text: `**Fetch API:**
\`\`\`javascript
// API-დან მონაცემების მოტანა
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log('მომხმარებლები:', users);
    })
    .catch(error => {
        console.log('შეცდომა:', error);
    });
\`\`\`

**Async/Await-ით:**
\`\`\`javascript
async function getUsers() {
    try {
        const response = await fetch('/api/users');
        const users = await response.json();
        return users;
    } catch (error) {
        console.log('მომხმარებლების მოტანა ვერ მოხერხდა:', error);
        return [];
    }
}
\`\`\``
                    },
                    task: {
                        title: "🎯 API-ის გამოწვევა",
                        text: `**თქვენი ამოცანა:**
1. გამოიყენეთ fetch საჯარო API-დან მონაცემების მოსატანად
2. აჩვენეთ მონაცემები თქვენს ვებ გვერდზე
3. მოაგვარეთ ჩატვირთვის მდგომარეობები
4. ტანჯვით მოაგვარეთ შეცდომები
5. სცადეთ: jsonplaceholder.typicode.com პრაქტიკისთვის!`
                    }
                }
            },
            error_handling: {
                title: "შეცდომების მართვა",
                description: "ისწავლეთ შეცდომების გამართულად მოგვარება და მტკიცე აპლიკაციების შენება რომლებიც არ იშლება.",
                content: {
                    concept: {
                        title: "🛡️ რა არის შეცდომების მართვა?",
                        text: `შეცდომების მართვა არის მზადება იმისთვის რომ რაღაც არასწორად წავიდეს თქვენს კოდში.

წარმოიდგინეთ შეცდომების მართვა როგორც დაზღვევა:
• იმედოვნებთ რომ ცუდი არაფერი მოხდება
• მაგრამ თუ მოხდა, მზად ხართ
• თქვენი აპი გააგრძელებს მუშაობას ნაცვლად დაშლისა

კარგი შეცდომების მართვა თქვენს კოდს ანტისახელურს ხდის!`
                    },
                    example: {
                        title: "🚨 შეცდომების მართვის მაგალითები",
                        text: `**Try/Catch:**
\`\`\`javascript
try {
    // კოდი რომელიც შეიძლება ჩავარდეს
    const data = JSON.parse(invalidJson);
    console.log(data);
} catch (error) {
    // შეცდომის მოგვარება
    console.log('ოჰ! არასწორი JSON:', error.message);
}
\`\`\`

**ასინქრონულ ფუნქციებთან:**
\`\`\`javascript
async function safeApiCall() {
    try {
        const response = await fetch('/api/data');
        if (!response.ok) {
            throw new Error('API გამოძახება ჩავარდა');
        }
        return await response.json();
    } catch (error) {
        console.log('მონაცემების მოტანისას შეცდომა:', error);
        return null; // უსაფრთხო ალტერნატივა
    }
}
\`\`\``
                    },
                    task: {
                        title: "🎯 შეცდომების მართვის გამოწვევა",
                        text: `**თქვენი ამოცანა:**
1. დაწერეთ ფუნქცია რომელიც შეიძლება შეცდომა გააჩინოს
2. ჩაახვიეთ try/catch-ში
3. შექმენით სხვადასხვა ტიპის შეცდომები
4. მოაგვარეთ ყოველი შეცდომის ტიპი შესაბამისად
5. ყოველთვის მიაწოდეთ მომხმარებელზე ორიენტირებული შეცდომის შეტყობინებები!`
                    }
                }
            }
        }
    }
};

// Enhanced Translation Service
class TranslationService {
    constructor() {
        this.currentLang = currentLanguage;
        this.translations = translations;
    }

    // Get translation with fallback to English
    t(key, lang = this.currentLang) {
        const keys = key.split('.');
        let result = this.translations[lang];
        
        for (const k of keys) {
            if (result && result[k]) {
                result = result[k];
            } else {
                // Fallback to English if Georgian translation not found
                result = this.translations['en'];
                for (const k of keys) {
                    if (result && result[k]) {
                        result = result[k];
                    } else {
                        return key; // Return key if not found
                    }
                }
                break;
            }
        }
        
        return result || key;
    }

    // Set current language
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            currentLanguage = lang;
            localStorage.setItem('language', lang);
            return true;
        }
        return false;
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLang;
    }

    // Get available languages
    getAvailableLanguages() {
        return Object.keys(this.translations);
    }
}

// Initialize translation service
const translationService = new TranslationService();

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.setupToggle();
    }

    applyTheme(theme) {
        this.currentTheme = theme;
        const toggleSwitch = document.querySelector('.toggle-switch');
        
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            if (toggleSwitch) toggleSwitch.classList.add('active');
        } else {
            document.documentElement.classList.remove('dark');
            if (toggleSwitch) toggleSwitch.classList.remove('active');
        }
        
        localStorage.setItem('theme', theme);
    }

    toggle() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
    }

    setupToggle() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggle());
        }
    }
}

// Initialize services
const themeManager = new ThemeManager();

// Set initial language attribute
document.documentElement.setAttribute('data-lang', currentLanguage);

// Tutorial Data Structure with multiple languages
const tutorials = {
    variables: {
        title: {
            en: "Variables in JavaScript",
            ka: "ცვლადები JavaScript-ში"
        },
        description: {
            en: "Let's learn about variables - think of them as boxes where you can store different things!",
            ka: "ვისწავლოთ ცვლადები - წარმოიდგინეთ ისინი, როგორც ყუთები, სადაც შეგიძლიათ შეინახოთ სხვადასხვა ნივთები!"
        },
        content: {
            sections: [
                {
                    title: {
                        en: "📦 What are Variables?",
                        ka: "📦 რა არის ცვლადები?"
                    },
                    content: {
                        en: `
                            <h3>Variables are like labeled boxes that store information</h3>
                            <p>Imagine you have boxes in your room. Each box has a label and stores something different. Variables work the same way!</p>
                            <p>In JavaScript, we create variables using these keywords:</p>
                            <ul>
                                <li><strong>let</strong> - for things that might change (like your age)</li>
                                <li><strong>const</strong> - for things that stay the same (like your name)</li>
                                <li><strong>var</strong> - old way (we don't use this anymore)</li>
                            </ul>
                            <p>💡 <em>Think of 'let' as a box you can put new things in, and 'const' as a box that's sealed shut!</em></p>
                        `,
                        ka: `
                            <h3>ცვლადები არის ეტიკეტირებული ყუთები, რომლებიც ინახავენ ინფორმაციას</h3>
                            <p>წარმოიდგინეთ, რომ თქვენს ოთახში გაქვთ ყუთები. ყოველ ყუთს აქვს ეტიკეტი და ინახავს რაღაც განსხვავებულს. ცვლადები იგივენაირად მუშაობენ!</p>
                            <p>JavaScript-ში ცვლადებს ვქმნით ამ საკვანძო სიტყვებით:</p>
                            <ul>
                                <li><strong>let</strong> - რამისთვისაც, რაც შეიძლება შეიცვალოს (როგორც თქვენი ასაკი)</li>
                                <li><strong>const</strong> - რამისთვისაც, რაც იგივე რჩება (როგორც თქვენი სახელი)</li>
                                <li><strong>var</strong> - ძველი გზა (ამას ახლა აღარ ვიყენებთ)</li>
                            </ul>
                            <p>💡 <em>წარმოიდგინეთ 'let' როგორც ყუთი, რომელშიც ახალი ნივთების ჩადება შეგიძლიათ, ხოლო 'const' როგორც ყუთი, რომელიც დალუქულია!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🎭 Different Types of Data",
                        ka: "🎭 მონაცემების სხვადასხვა ტიპები"
                    },
                    content: {
                        en: `
                            <h3>JavaScript can store different types of information:</h3>
                            <ul>
                                <li><strong>Text (String)</strong> - Words and sentences: <code>"Hello World"</code></li>
                                <li><strong>Numbers</strong> - Any number: <code>42</code>, <code>3.14</code>, <code>-5</code></li>
                                <li><strong>True/False (Boolean)</strong> - Yes or no answers: <code>true</code>, <code>false</code></li>
                                <li><strong>Lists (Array)</strong> - Multiple items: <code>["apple", "banana", "orange"]</code></li>
                                <li><strong>Objects</strong> - Complex information: <code>{name: "Luka", age: 20}</code></li>
                            </ul>
                            <p>🤔 <em>Think of it like different types of containers - some hold text, some hold numbers, some hold lists of things!</em></p>
                        `,
                        ka: `
                            <h3>JavaScript-ს შეუძლია შეინახოს ინფორმაციის სხვადასხვა ტიპები:</h3>
                            <ul>
                                <li><strong>ტექსტი (String)</strong> - სიტყვები და წინადადებები: <code>"გამარჯობა მსოფლიო"</code></li>
                                <li><strong>რიცხვები</strong> - ნებისმიერი რიცხვი: <code>42</code>, <code>3.14</code>, <code>-5</code></li>
                                <li><strong>მართალი/ცრუ (Boolean)</strong> - კი ან არა პასუხები: <code>true</code>, <code>false</code></li>
                                <li><strong>სიები (Array)</strong> - მრავალი ელემენტი: <code>["ვაშლი", "ბანანი", "ნარინჯი"]</code></li>
                                <li><strong>ობიექტები</strong> - რთული ინფორმაცია: <code>{name: "ლუკა", age: 20}</code></li>
                            </ul>
                            <p>🤔 <em>წარმოიდგინეთ, როგორც კონტეინერების სხვადასხვა ტიპები - ზოგი ინახავს ტექსტს, ზოგი რიცხვებს, ზოგი ნივთების სიებს!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🚀 Let's Try It!",
                        ka: "🚀 ვცადოთ!"
                    },
                    content: {
                        en: `
                            <h3>Here's a simple example to get you started:</h3>
                            <pre><code class="language-javascript">// Let's create some variables!
let myName = "Luka";
let myAge = 20;
let isCool = true;

let favoriteColors = ["blue", "green", "red"];
let aboutMe = {
    name: myName,
    age: myAge,
    hobbies: ["coding", "football", "gaming"]
};

console.log("Hello! My name is " + myName);
console.log("I am " + myAge + " years old");
console.log("Here's more about me:", aboutMe);</code></pre>
                            <p>✨ <em>Copy this code below and click "Run Code" to see what happens!</em></p>
                        `,
                        ka: `
                            <h3>აჰა, მარტივი მაგალითი დასაწყებად:</h3>
                            <pre><code class="language-javascript">// შევქმნათ რამდენიმე ცვლადი!
let myName = "ლუკა";
let myAge = 20;
let isCool = true;

let favoriteColors = ["ლურჯი", "მწვანე", "წითელი"];
let aboutMe = {
    name: myName,
    age: myAge,
    hobbies: ["კოდირება", "ფეხბურთი", "გეიმინგი"]
};

console.log("გამარჯობა! მე მქვია " + myName);
console.log("მე ვარ " + myAge + " წლის");
console.log("აქ არის მეტი ჩემ შესახებ:", aboutMe);</code></pre>
                            <p>✨ <em>დააკოპირეთ ეს კოდი ქვემოთ და დააჭირეთ "კოდის გაშვება"-ს, რომ ნახოთ რა მოხდება!</em></p>
                        `
                    }
                }
            ]
        },
        startingCode: ``,
        practice: {
            title: {
                en: "Your Turn to Experiment!",
                ka: "თქვენი რიგია ექსპერიმენტისთვის!"
            },
            description: {
                en: "Now it's time to create your own variables! Don't worry about making mistakes - that's how we learn!",
                ka: "ახლა დროა შექმნათ თქვენი საკუთარი ცვლადები! არ ღელავდეთ შეცდომების გამო - ასე ვსწავლობთ!"
            },
            task: {
                en: "1. Create a variable with your actual name\n2. Create a variable with your age (or any number you like)\n3. Make an array with things you enjoy doing\n4. Create an object that describes you\n5. Try displaying your information with console.log()",
                ka: "1. შექმენით ცვლადი თქვენი რეალური სახელით\n2. შექმენით ცვლადი თქვენი ასაკით (ან ნებისმიერი რიცხვი)\n3. გააკეთეთ მასივი იმ ნივთებით, რაც გიყვართ\n4. შექმენით ობიექტი, რომელიც თქვენს აღწერს\n5. სცადეთ თქვენი ინფორმაციის ჩვენება console.log()-ით"
            }
        }
    },
    
    functions: {
        title: {
            en: "Functions in JavaScript",
            ka: "ფუნქციები JavaScript-ში"
        },
        description: {
            en: "Functions are like magical recipes - give them ingredients (inputs) and they create something new!",
            ka: "ფუნქციები არის როგორც მაგიური რეცეპტები - მისცეთ ინგრედიენტები (შეყვანა) და ისინი ახალ რამეს შექმნიან!"
        },
        content: {
            sections: [
                {
                    title: {
                        en: "🎪 What are Functions?",
                        ka: "🎪 რა არის ფუნქციები?"
                    },
                    content: {
                        en: `
                            <h3>Functions are like helpful assistants that do tasks for you!</h3>
                            <p>Imagine you have a friend who's really good at math. Instead of doing calculations yourself, you ask your friend. Functions work the same way!</p>
                            <p>Functions help you:</p>
                            <ul>
                                <li>🔄 Do the same task many times without rewriting code</li>
                                <li>🧩 Break big problems into smaller, easier pieces</li>
                                <li>📚 Keep your code neat and organized</li>
                                <li>🎯 Focus on what you want to achieve, not how to do it</li>
                            </ul>
                            <p>💭 <em>Think of functions as your personal helpers - each one knows how to do one thing really well!</em></p>
                        `,
                        ka: `
                            <h3>ფუნქციები არის როგორც დამხმარე ასისტენტები, რომლებიც გიკეთებენ საქმეებს!</h3>
                            <p>წარმოიდგინეთ, რომ გაქვთ მეგობარი, რომელიც ძალიან კარგად არის მათემატიკაში. კალკულაციების გაკეთების ნაცვლად, თქვენ მეგობარს ეკითხებით. ფუნქციები იგივენაირად მუშაობენ!</p>
                            <p>ფუნქციები გეხმარებათ:</p>
                            <ul>
                                <li>🔄 იგივე ამოცანის მრავალჯერ გაკეთება კოდის ახლიდან დაწერის გარეშე</li>
                                <li>🧩 დიდი პრობლემების პატარა, მარტივ ნაწილებად დაყოფა</li>
                                <li>📚 თქვენი კოდის სუფთად და ორგანიზებულად შენახვა</li>
                                <li>🎯 იმაზე ფოკუსირება, რისი მიღწევაც გინდათ, არა როგორ გააკეთოთ</li>
                            </ul>
                            <p>💭 <em>წარმოიდგინეთ ფუნქციები როგორც თქვენი პირადი დამხმარეები - ყოველმა იცის როგორ გააკეთოს ერთი რამ ძალიან კარგად!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "✏️ How to Create Functions",
                        ka: "✏️ როგორ შევქმნათ ფუნქციები"
                    },
                    content: {
                        en: `
                            <h3>There are two easy ways to create functions:</h3>
                            <h4>📋 Regular Function (like writing a recipe):</h4>
                            <pre><code class="language-javascript">function sayHello(name) {
    return "Hi there, " + name + "! 👋";
}</code></pre>
                            <h4>⚡ Arrow Function (shorter way):</h4>
                            <pre><code class="language-javascript">const sayHello = (name) => "Hi there, " + name + "! 👋";</code></pre>
                            <p>Both do exactly the same thing! Arrow functions are just a shorter way to write them.</p>
                            <p>🔍 <em>The part in parentheses () is what you give to the function, and 'return' is what it gives back to you!</em></p>
                        `,
                        ka: `
                            <h3>ფუნქციების შექმნის ორი მარტივი გზა არსებობს:</h3>
                            <h4>📋 ჩვეულებრივი ფუნქცია (როგორც რეცეპტის დაწერა):</h4>
                            <pre><code class="language-javascript">function sayHello(name) {
    return "გამარჯობა, " + name + "! 👋";
}</code></pre>
                            <h4>⚡ ისრის ფუნქცია (მოკლე გზა):</h4>
                            <pre><code class="language-javascript">const sayHello = (name) => "გამარჯობა, " + name + "! 👋";</code></pre>
                            <p>ორივე ზუსტად იგივეს აკეთებს! ისრის ფუნქციები უბრალოდ მოკლე გზაა მათი დასაწერად.</p>
                            <p>🔍 <em>ნაწილი ფრჩხილებში () არის ის, რასაც ფუნქციას აძლევთ, ხოლო 'return' არის ის, რასაც ის უბრუნებს!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🎮 Let's Play with Functions!",
                        ka: "🎮 ვითამაშოთ ფუნქციებით!"
                    },
                    content: {
                        en: `
                            <h3>Here are some fun and useful functions:</h3>
                            <pre><code class="language-javascript">// A function that greets people
function greetPerson(name) {
    return "Hello " + name + "! Nice to meet you! 😊";
}

// A function that doubles any number
const doubleNumber = (num) => num * 2;

// A function that checks if someone can vote
const canVote = (age) => age >= 18 ? "Yes, you can vote! 🗳️" : "Not yet, but soon! ⏰";

// A function that creates a fun fact
function createFunFact(name, hobby) {
    return name + " loves " + hobby + "! How cool is that? 🌟";
}

// Let's use them!
console.log(greetPerson("Luka"));
console.log("5 doubled is:", doubleNumber(5));
console.log(canVote(20));
console.log(createFunFact("Luka", "coding"));</code></pre>
                            <p>🎯 <em>Try copying this code and running it! Then try changing the names and numbers to see what happens!</em></p>
                        `,
                        ka: `
                            <h3>აჰა, რამდენიმე სახალისო და სასარგებლო ფუნქცია:</h3>
                            <pre><code class="language-javascript">// ფუნქცია, რომელიც ხალხს ესალმება
function greetPerson(name) {
    return "გამარჯობა " + name + "! სასიამოვნოა შეხვედრა! 😊";
}

// ფუნქცია, რომელიც ნებისმიერ რიცხვს ორმაგ აკეთებს
const doubleNumber = (num) => num * 2;

// ფუნქცია, რომელიც ამოწმებს შეუძლია თუ არა ვინმეს ხმის მიცემა
const canVote = (age) => age >= 18 ? "კი, შეგიძლია ხმა მისცე! 🗳️" : "ჯერ არა, მაგრამ მალე! ⏰";

// ფუნქცია, რომელიც საინტერესო ფაქტს ქმნის
function createFunFact(name, hobby) {
    return name + "-ს უყვარს " + hobby + "! რა მაგარია ეს! 🌟";
}

// ვიყენებთ მათ!
console.log(greetPerson("ლუკა"));
console.log("5-ის გადაორმაგება:", doubleNumber(5));
console.log(canVote(20));
console.log(createFunFact("ლუკა", "კოდირება"));</code></pre>
                            <p>🎯 <em>სცადეთ ამ კოდის კოპირება და გაშვება! შემდეგ სცადეთ სახელებისა და რიცხვების შეცვლა, რომ ნახოთ რა მოხდება!</em></p>
                        `
                    }
                }
            ]
        },
        startingCode: ``,
        practice: {
            title: {
                en: "Build Your Own Functions!",
                ka: "ააგეთ თქვენი საკუთარი ფუნქციები!"
            },
            description: {
                en: "Time to create your own helpful functions! Remember, there's no wrong way - just have fun with it!",
                ka: "დროა შექმნათ თქვენი საკუთარი დამხმარე ფუნქციები! გახსოვდეთ, არასწორი გზა არ არსებობს - უბრალოდ ისიამოვნეთ!"
            },
            task: {
                en: "1. Create a function that adds two numbers together\n2. Make a function that tells you if a number is big (over 100) or small\n3. Create a function that makes a sentence with your name and favorite food\n4. Try making a function that calculates someone's birth year from their age\n5. Experiment! What other helpful functions can you think of?",
                ka: "1. შექმენით ფუნქცია, რომელიც ორ რიცხვს შეკრებს\n2. გააკეთეთ ფუნქცია, რომელიც იტყვის დიდია თუ პატარა რიცხვი (100-ზე მეტი)\n3. შექმენით ფუნქცია, რომელიც წინადადებას აკეთებს თქვენი სახელით და საყვარელი საკვებით\n4. სცადეთ ფუნქციის გაკეთება, რომელიც ვინმეს დაბადების წელს გამოთვლის ასაკიდან\n5. ექსპერიმენტი! რა სხვა დამხმარე ფუნქციები მოგიფიქრდებათ?"
            }
        }
    },

    controlflow: {
        title: {
            en: "Control Flow",
            ka: "მართვის ნაკადი"
        },
        description: {
            en: "Learn to make your code smart! Teach it to make decisions and repeat tasks automatically.",
            ka: "ისწავლეთ თქვენი კოდის გონიერად გაკეთება! ასწავლეთ გადაწყვეტილებების მიღება და ამოცანების ავტომატურად გამეორება."
        },
        content: {
            sections: [
                {
                    title: {
                        en: "🔄 Loops - Your Tireless Helpers",
                        ka: "🔄 მარყუჟები - თქვენი დაუღალავი დამხმარეები"
                    },
                    content: {
                        en: `
                            <h3>Loops are like having a robot assistant that never gets tired!</h3>
                            <p>Imagine you need to count from 1 to 100. Instead of writing 100 lines, loops do it for you automatically!</p>
                            
                            <h4>🎯 For Loop - When you know exactly how many times:</h4>
                            <pre><code class="language-javascript">// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("Counting: " + i);
}

// Say hello 3 times
for (let i = 1; i <= 3; i++) {
    console.log("Hello! This is time " + i);
}</code></pre>
                            
                            <h4>🔄 While Loop - Keep going until something happens:</h4>
                            <pre><code class="language-javascript">let energy = 10;
while (energy > 0) {
    console.log("I have " + energy + " energy left!");
    energy = energy - 2; // use some energy
}</code></pre>
                            <p>🤖 <em>Think of loops as instructions for a helpful robot: "Keep doing this until I tell you to stop!"</em></p>
                        `,
                        ka: `
                            <h3>მარყუჟები არის როგორც რობოტი ასისტენტი, რომელიც არასოდეს იღლება!</h3>
                            <p>წარმოიდგინეთ, რომ 1-დან 100-მდე უნდა დაითვალოთ. 100 ხაზის დაწერის ნაცვლად, მარყუჟები ამას ავტომატურად აკეთებენ!</p>
                            
                            <h4>🎯 For მარყუჟი - როცა ზუსტად იცით რამდენჯერ:</h4>
                            <pre><code class="language-javascript">// 1-დან 5-მდე დათვლა
for (let i = 1; i <= 5; i++) {
    console.log("ვითვლი: " + i);
}

// 3-ჯერ გამარჯობის თქმა
for (let i = 1; i <= 3; i++) {
    console.log("გამარჯობა! ეს არის " + i + "-ჯერადი");
}</code></pre>
                            
                            <h4>🔄 While მარყუჟი - იყავი მანამ, სანამ რაღაც არ მოხდება:</h4>
                            <pre><code class="language-javascript">let energy = 10;
while (energy > 0) {
    console.log("მაქვს " + energy + " ენერგია დარჩენილი!");
    energy = energy - 2; // ღირებულება ენერგიის
}</code></pre>
                            <p>🤖 <em>წარმოიდგინეთ მარყუჟები როგორც ინსტრუქციები დამხმარე რობოტისთვის: "გააგრძელე ამის კეთება, სანამ არ ვეტყვი შეწყვეტა!"</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🤔 Making Smart Decisions",
                        ka: "🤔 გონიერი გადაწყვეტილების მიღება"
                    },
                    content: {
                        en: `
                            <h3>Teach your code to think and make choices!</h3>
                            <p>Just like you decide what to wear based on the weather, your code can make decisions based on data!</p>
                            
                            <pre><code class="language-javascript">let weather = "sunny";
if (weather === "sunny") {
    console.log("Let's go to the beach! ☀️");
} else if (weather === "rainy") {
    console.log("Perfect day for Netflix! 🌧️");
} else {
    console.log("Any day is a good day! 😊");
}

let age = 20;
if (age >= 18) {
    console.log("You're an adult! 🎉");
} else {
    console.log("Still growing up! 🌱");
}

let score = 85;
if (score >= 90) {
    console.log("Amazing work! A+ 🌟");
} else if (score >= 80) {
    console.log("Great job! B+ 👏");
} else if (score >= 70) {
    console.log("Good effort! C+ 👍");
} else {
    console.log("Keep trying! You'll get there! 💪");
}</code></pre>
                            <p>🧠 <em>if/else statements are like giving your code a brain to think with!</em></p>
                        `,
                        ka: `
                            <h3>ასწავლეთ თქვენს კოდს ფიქრი და არჩევანის გაკეთება!</h3>
                            <p>ისევე როგორც თქვენ გადაწყვეტთ რა ჩაიცვათ ამინდის მიხედვით, თქვენი კოდი შეუძლია გადაწყვეტილებები მიიღოს მონაცემების საფუძველზე!</p>
                            
                            <pre><code class="language-javascript">let weather = "მზიანი";
if (weather === "მზიანი") {
    console.log("წავიდეთ სანაპიროზე! ☀️");
} else if (weather === "წვიმიანი") {
    console.log("სრულყოფილი დღე Netflix-ისთვის! 🌧️");
} else {
    console.log("ნებისმიერი დღე კარგი დღეა! 😊");
}

let age = 20;
if (age >= 18) {
    console.log("ხარ უკვე ზრდასრული! 🎉");
} else {
    console.log("ჯერ ვზრდები! 🌱");
}

let score = 85;
if (score >= 90) {
    console.log("გასაოცარი მუშაობა! A+ 🌟");
} else if (score >= 80) {
    console.log("მაგარი შედეგი! B+ 👏");
} else if (score >= 70) {
    console.log("კარგი ცდა! C+ 👍");
} else {
    console.log("გააგრძელე ცდა! მიაღწევ! 💪");
}</code></pre>
                            <p>🧠 <em>if/else განცხადებები არის როგორც ტვინის მიცემა თქვენს კოდს ფიქრისთვის!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🎪 Loops + Decisions = Magic!",
                        ka: "🎪 მარყუჟები + გადაწყვეტილებები = მაგია!"
                    },
                    content: {
                        en: `
                            <h3>Combine loops and decisions for super powerful code!</h3>
                            <pre><code class="language-javascript">// Let's check numbers from 1 to 10
for (let number = 1; number <= 10; number++) {
    if (number % 2 === 0) {
        console.log(number + " is even! 📈");
    } else {
        console.log(number + " is odd! 📉");
    }
}

// Find lucky numbers in a list
let numbers = [7, 13, 4, 21, 8, 3, 15];
console.log("Looking for lucky numbers...");

for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    
    if (currentNumber === 7 || currentNumber === 13 || currentNumber === 21) {
        console.log("🍀 Lucky number found: " + currentNumber);
    } else if (currentNumber > 10) {
        console.log("📊 Big number: " + currentNumber);
    } else {
        console.log("📌 Small number: " + currentNumber);
    }
}

console.log("All done! ✨");</code></pre>
                            <p>🎯 <em>Now your code is smart AND tireless - it can check hundreds of things automatically!</em></p>
                        `,
                        ka: `
                            <h3>შეაერთეთ მარყუჟები და გადაწყვეტილებები ზეძლიერი კოდისთვის!</h3>
                            <pre><code class="language-javascript">// შევამოწმოთ რიცხვები 1-დან 10-მდე
for (let number = 1; number <= 10; number++) {
    if (number % 2 === 0) {
        console.log(number + " არის ლუწი! 📈");
    } else {
        console.log(number + " არის კენტი! 📉");
    }
}

// ვიპოვოთ იღბლიანი რიცხვები სიაში
let numbers = [7, 13, 4, 21, 8, 3, 15];
console.log("ვეძებთ იღბლიან რიცხვებს...");

for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    
    if (currentNumber === 7 || currentNumber === 13 || currentNumber === 21) {
        console.log("🍀 იღბლიანი რიცხვი ნაპოვნია: " + currentNumber);
    } else if (currentNumber > 10) {
        console.log("📊 დიდი რიცხვი: " + currentNumber);
    } else {
        console.log("📌 პატარა რიცხვი: " + currentNumber);
    }
}

console.log("ყველაფერი დასრულებულია! ✨");</code></pre>
                            <p>🎯 <em>ახლა თქვენი კოდი გონიერი და დაუღალავია - მას შეუძლია ასობით რამის ავტომატურად შემოწმება!</em></p>
                        `
                    }
                }
            ]
        },
        startingCode: ``,
        practice: {
            title: {
                en: "Build Smart Programs!",
                ka: "ააგეთ გონიერი პროგრამები!"
            },
            description: {
                en: "Time to create programs that can think and work automatically! Start simple and build up.",
                ka: "დროა შექმნათ პროგრამები, რომლებსაც შეუძლიათ ფიქრი და ავტომატურად მუშაობა! დაიწყეთ მარტივად და ითვითარეთ."
            },
            task: {
                en: "1. Create a loop that counts from 1 to your age\n2. Make a program that checks if numbers are big (over 50) or small\n3. Create a list of your favorite foods and use a loop to print them all\n4. Try making a program that finds all even numbers between 1 and 20\n5. Challenge: Make a program that grades test scores (90+=A, 80+=B, 70+=C, etc.)",
                ka: "1. შექმენით მარყუჟი, რომელიც თვლის 1-დან თქვენს ასაკამდე\n2. გააკეთეთ პროგრამა, რომელიც ამოწმებს დიდია თუ პატარა რიცხვები (50-ზე მეტი)\n3. შექმენით თქვენი საყვარელი საკვების სია და გამოიყენეთ მარყუჟი ყველას დასაბეჭდად\n4. სცადეთ პროგრამის გაკეთება, რომელიც პოულობს ყველა ლუწ რიცხვს 1-დან 20-მდე\n5. გამოწვევა: გააკეთეთ პროგრამა, რომელიც აფასებს ტესტის ქულებს (90+=A, 80+=B, 70+=C, და ა.შ.)"
            }
        }
    },

    "arrays-objects": {
        title: {
            en: "Arrays & Objects",
            ka: "მასივები და ობიექტები"
        },
        description: {
            en: "Learn to organize and work with collections of data - like digital filing cabinets!",
            ka: "ისწავლეთ მონაცემების კოლექციების ორგანიზება და მუშაობა - როგორც ციფრული საქაღალდე კარადები!"
        },
        content: {
            sections: [
                {
                    title: {
                        en: "📋 Arrays - Your Digital Lists",
                        ka: "📋 მასივები - თქვენი ციფრული სიები"
                    },
                    content: {
                        en: `
                            <h3>Arrays are like shopping lists that can hold anything!</h3>
                            <p>Imagine you have a notebook where you write lists. Arrays work exactly like that - they keep things in order!</p>
                            
                            <h4>🛠️ Cool things you can do with arrays:</h4>
                            <ul>
                                <li><code>push()</code> - Add something to the end 📝</li>
                                <li><code>pop()</code> - Remove the last thing ✂️</li>
                                <li><code>shift()</code> - Remove the first thing 🔄</li>
                                <li><code>unshift()</code> - Add something to the beginning ⬆️</li>
                            </ul>
                            
                            <pre><code class="language-javascript">// My favorite foods list
let favoriteFoods = ["Pizza", "Ice Cream", "Chocolate"];

console.log("My list:", favoriteFoods);

// Add new favorite food to the end
favoriteFoods.push("Burger");
console.log("Added burger:", favoriteFoods);

// Remove the last one (oops, too full!)
favoriteFoods.pop();
console.log("Removed last:", favoriteFoods);

// Add something to the beginning (most favorite!)
favoriteFoods.unshift("Pasta");
console.log("Pasta is now first:", favoriteFoods);</code></pre>
                            <p>🎯 <em>Arrays remember the order of things - just like your shopping list!</em></p>
                        `,
                        ka: `
                            <h3>მასივები არის როგორც სამაღალი სიები, რომლებსაც შეუძლიათ ნებისმიერის შენახვა!</h3>
                            <p>წარმოიდგინეთ, რომ გაქვთ რვეული, სადაც სიებს წერთ. მასივები ზუსტად ასე მუშაობენ - ისინი ნივთებს რიგითობაში ინახავენ!</p>
                            
                            <h4>🛠️ მაგარი რამეები, რაც მასივებით შეგიძლიათ:</h4>
                            <ul>
                                <li><code>push()</code> - რაღაცის ბოლოში დამატება 📝</li>
                                <li><code>pop()</code> - ბოლო ნივთის ამოღება ✂️</li>
                                <li><code>shift()</code> - პირველი ნივთის ამოღება 🔄</li>
                                <li><code>unshift()</code> - რაღაცის დასაწყისში დამატება ⬆️</li>
                            </ul>
                            
                            <pre><code class="language-javascript">// ჩემი საყვარელი საკვების სია
let favoriteFoods = ["პიცა", "ნაყინი", "შოკოლადი"];

console.log("ჩემი სია:", favoriteFoods);

// ახალი საყვარელი საკვების ბოლოში დამატება
favoriteFoods.push("ბურგერი");
console.log("ბურგერი დავამატე:", favoriteFoods);

// ბოლოს ამოღება (უფს, ძალიან ბევრია!)
favoriteFoods.pop();
console.log("ბოლო ამოვიღე:", favoriteFoods);

// რაღაცის დასაწყისში დამატება (ყველაზე საყვარელი!)
favoriteFoods.unshift("მაკარონი");
console.log("მაკარონი ახლა პირველია:", favoriteFoods);</code></pre>
                            <p>🎯 <em>მასივები ნივთების თანმიმდევრობას ინახავენ - ისევე როგორც თქვენი სამაღაზიო სია!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🗂️ Objects - Your Digital Profile Cards",
                        ka: "🗂️ ობიექტები - თქვენი ციფრული პროფილის ბარათები"
                    },
                    content: {
                        en: `
                            <h3>Objects are like ID cards with lots of information!</h3>
                            <p>Think of an object like a person's ID card - it has their name, age, address, etc. Each piece of info has a label!</p>
                            
                            <pre><code class="language-javascript">// Creating a profile (like an ID card)
let myProfile = {
    name: "Luka",
    age: 20,
    city: "Tbilisi",
    isStudent: true,
    favoriteColor: "blue"
};

// Reading information (like looking at ID card)
console.log("Hi! I'm " + myProfile.name);
console.log("I'm " + myProfile.age + " years old");
console.log("I live in " + myProfile.city);

// Updating information (like renewing your ID)
myProfile.age = 21;  // Happy birthday!
myProfile.city = "New York";  // I moved!

// Adding new information
myProfile.hobby = "coding";
myProfile.petName = "Fluffy";

console.log("Updated profile:", myProfile);</code></pre>
                            <p>🎴 <em>Objects organize information with labels - like having a filing cabinet where each folder has a clear label!</em></p>
                        `,
                        ka: `
                            <h3>ობიექტები არის როგორც პირადობის მოწმობები ბევრი ინფორმაციით!</h3>
                            <p>წარმოიდგინეთ ობიექტი როგორც ადამიანის პირადობის მოწმობა - მასზე არის სახელი, ასაკი, მისამართი და ა.შ. ყოველ ინფორმაციას აქვს ეტიკეტი!</p>
                            
                            <pre><code class="language-javascript">// პროფილის შექმნა (როგორც პირადობის მოწმობა)
let myProfile = {
    name: "ლუკა",
    age: 20,
    city: "თბილისი",
    isStudent: true,
    favoriteColor: "ლურჯი"
};

// ინფორმაციის წაკითხვა (როგორც პირადობის მოწმობაზე ყურება)
console.log("გამარჯობა! მე ვარ " + myProfile.name);
console.log("მე ვარ " + myProfile.age + " წლის");
console.log("ვცხოვრობ " + myProfile.city + "-ში");

// ინფორმაციის განახლება (როგორც პირადობის განახლება)
myProfile.age = 21;  // გილოცავ დაბადების დღეს!
myProfile.city = "ნიუ იორკი";  // გადავედი!

// ახალი ინფორმაციის დამატება
myProfile.hobby = "კოდირება";
myProfile.petName = "ფლაფი";

console.log("განახლებული პროფილი:", myProfile);</code></pre>
                            <p>🎴 <em>ობიექტები ეტიკეტებით ინფორმაციას აწყობენ - როგორც საქაღალდე კარადა, სადაც ყოველ ფოლდერს აქვს მკაფიო ეტიკეტი!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🎪 Mixing Arrays and Objects - Super Powers!",
                        ka: "🎪 მასივებისა და ობიექტების შერევა - ზეძალები!"
                    },
                    content: {
                        en: `
                            <h3>Combine arrays and objects for amazing data organization!</h3>
                            <pre><code class="language-javascript">// A person with hobbies (object containing an array)
let person = {
    name: "Luka",
    age: 20,
    hobbies: ["coding", "football", "gaming", "reading"],
    address: {
        city: "Tbilisi",
        country: "Georgia"
    }
};

console.log(person.name + " has " + person.hobbies.length + " hobbies!");

// Add a new hobby
person.hobbies.push("photography");
console.log("New hobby added! Now has:", person.hobbies);

// Create a list of friends (array of objects)
let friends = [
    { name: "Ana", age: 19, favoriteFood: "pizza" },
    { name: "Giorgi", age: 21, favoriteFood: "khachapuri" },
    { name: "Nino", age: 20, favoriteFood: "ice cream" }
];

console.log("My friends:");
for (let i = 0; i < friends.length; i++) {
    let friend = friends[i];
    console.log(friend.name + " is " + friend.age + " and loves " + friend.favoriteFood);
}</code></pre>
                            <p>🌟 <em>Now you can organize any kind of information - people, movies, games, anything!</em></p>
                        `,
                        ka: `
                            <h3>შეაერთეთ მასივები და ობიექტები გასაოცარი მონაცემების ორგანიზაციისთვის!</h3>
                            <pre><code class="language-javascript">// ადამიანი ჰობებით (ობიექტი, რომელიც მასივს შეიცავს)
let person = {
    name: "ლუკა",
    age: 20,
    hobbies: ["კოდირება", "ფეხბურთი", "გეიმინგი", "კითხვა"],
    address: {
        city: "თბილისი",
        country: "საქართველო"
    }
};

console.log(person.name + "-ს აქვს " + person.hobbies.length + " ჰობი!");

// ახალი ჰობის დამატება
person.hobbies.push("ფოტოგრაფია");
console.log("ახალი ჰობი დამატებული! ახლა აქვს:", person.hobbies);

// მეგობრების სიის შექმნა (ობიექტების მასივი)
let friends = [
    { name: "ანა", age: 19, favoriteFood: "პიცა" },
    { name: "გიორგი", age: 21, favoriteFood: "ხაჭაპური" },
    { name: "ნინო", age: 20, favoriteFood: "ნაყინი" }
];

console.log("ჩემი მეგობრები:");
for (let i = 0; i < friends.length; i++) {
    let friend = friends[i];
    console.log(friend.name + " არის " + friend.age + " წლის და უყვარს " + friend.favoriteFood);
}</code></pre>
                            <p>🌟 <em>ახლა შეგიძლიათ ნებისმიერი სახის ინფორმაციის ორგანიზება - ადამიანები, ფილმები, თამაშები, ყველაფერი!</em></p>
                        `
                    }
                }
            ]
        },
        startingCode: ``,
        practice: {
            title: {
                en: "Create Your Digital World!",
                ka: "შექმენით თქვენი ციფრული სამყარო!"
            },
            description: {
                en: "Time to build your own data collections! Think about things you like and organize them digitally.",
                ka: "დროა ააგოთ თქვენი საკუთარი მონაცემების კოლექციები! იფიქრეთ რამეზე, რაც გიყვართ და ციფრულად მოაწყვეთ."
            },
            task: {
                en: "1. Create an array of your favorite movies or songs\n2. Make an object about yourself with name, age, and favorite things\n3. Create an array of friend objects with their info\n4. Try adding new items to your arrays using push()\n5. Experiment with nested objects (objects inside objects!)",
                ka: "1. შექმენით თქვენი საყვარელი ფილმების ან სიმღერების მასივი\n2. გააკეთეთ ობიექტი თქვენს შესახებ სახელით, ასაკით და საყვარელი ნივთებით\n3. შექმენით მეგობრების ობიექტების მასივი მათი ინფორმაციით\n4. სცადეთ ახალი ელემენტების დამატება მასივებში push()-ის გამოყენებით\n5. ექსპერიმენტი ჩადგმული ობიექტებით (ობიექტები ობიექტების შიგნით!)"
            }
        }
    },

    advanced: {
        title: {
            en: "Advanced Functions",
            ka: "წინაშე გადგმული ფუნქციები"
        },
        description: {
            en: "Now you're ready for the ultimate combo - functions working with arrays and objects like a pro!",
            ka: "ახლა მზად ხართ საბოლოო კომბინაციისთვის - ფუნქციები მუშაობენ მასივებთან და ობიექტებთან როგორც პროფესიონალები!"
        },
        content: {
            sections: [
                {
                    title: {
                        en: "🎯 Functions + Arrays = Dynamic Lists",
                        ka: "🎯 ფუნქციები + მასივები = დინამიური სიები"
                    },
                    content: {
                        en: `
                            <h3>Make your arrays smart with functions!</h3>
                            <p>Functions can organize, search, and modify your arrays automatically. It's like having a personal assistant for your lists!</p>
                            
                            <pre><code class="language-javascript">// Function to add items to a shopping list
function addToShoppingList(list, newItem) {
    list.push(newItem);
    console.log("Added " + newItem + " to the list!");
    return list;
}

// Function to find if we have something
function doWeHave(list, item) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === item) {
            return "Yes! We have " + item + " ✅";
        }
    }
    return "Nope, we need to buy " + item + " 🛒";
}

// Function to count items
function countItems(list) {
    return "We have " + list.length + " items total";
}

// Let's use them!
let groceries = ["milk", "bread", "eggs"];
addToShoppingList(groceries, "cheese");
console.log(doWeHave(groceries, "milk"));
console.log(doWeHave(groceries, "cookies"));
console.log(countItems(groceries));</code></pre>
                            <p>🚀 <em>Functions make your arrays come alive - they can grow, search, and organize themselves!</em></p>
                        `,
                        ka: `
                            <h3>გახადეთ თქვენი მასივები გონიერი ფუნქციებით!</h3>
                            <p>ფუნქციებს შეუძლიათ ავტომატურად მოაწყონ, მოძებნონ და შეცვალონ თქვენი მასივები. ეს არის როგორც პირადი ასისტენტის ყოლა თქვენი სიებისთვის!</p>
                            
                            <pre><code class="language-javascript">// ფუნქცია სამაღაზიო სიაში ნივთების დასამატებლად
function addToShoppingList(list, newItem) {
    list.push(newItem);
    console.log("დავამატე " + newItem + " სიაში!");
    return list;
}

// ფუნქცია იმის სანახავად, გვაქვს თუ არა რაღაც
function doWeHave(list, item) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === item) {
            return "კი! გვაქვს " + item + " ✅";
        }
    }
    return "არა, უნდა ვიყიდოთ " + item + " 🛒";
}

// ფუნქცია ნივთების დასათვლელად
function countItems(list) {
    return "გვაქვს " + list.length + " ნივთი სულ";
}

// ვიყენებთ მათ!
let groceries = ["რძე", "პური", "კვერცხი"];
addToShoppingList(groceries, "ყველი");
console.log(doWeHave(groceries, "რძე"));
console.log(doWeHave(groceries, "ნამცხვარი"));
console.log(countItems(groceries));</code></pre>
                            <p>🚀 <em>ფუნქციები თქვენს მასივებს სიცოცხლეს აძლევენ - მათ შეუძლიათ ზრდა, ძიება და საკუთარი ორგანიზება!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🏆 Functions + Objects = Smart Profiles",
                        ka: "🏆 ფუნქციები + ობიექტები = გონიერი პროფილები"
                    },
                    content: {
                        en: `
                            <h3>Give your objects superpowers with functions!</h3>
                            <p>Functions can update, modify, and enhance your objects automatically. Think of it as upgrading your digital profiles!</p>
                            
                            <pre><code class="language-javascript">// Function to create a student profile
function createStudent(name, age, grade) {
    return {
                        name: name,
                        age: age,
                        grade: grade,
                        subjects: [],
                        friends: []
                    };
                }
                
                // Function to add a subject
                function addSubject(student, subject, score) {
                    student.subjects.push({
                        name: subject,
                        score: score
                    });
                    console.log(student.name + " added " + subject + " with score " + score);
                }
                
                // Function to calculate average
                function getAverage(student) {
                    let total = 0;
                    for (let i = 0; i < student.subjects.length; i++) {
                        total += student.subjects[i].score;
                    }
                    return student.subjects.length > 0 ? total / student.subjects.length : 0;
                }
                
                // Let's create and use a student!
                let luka = createStudent("Luka", 20, "A");
                addSubject(luka, "Math", 95);
                addSubject(luka, "Programming", 98);
                addSubject(luka, "English", 87);
                
                console.log(luka.name + "'s average: " + getAverage(luka));
                console.log("Full profile:", luka);</code></pre>
                            <p>🎓 <em>Now your objects can evolve and update themselves through functions!</em></p>
                        `,
                        ka: `
                            <h3>მიეცით თქვენს ობიექტებს ზეძალები ფუნქციებით!</h3>
                            <p>ფუნქციებს შეუძლიათ ავტომატურად განაახლონ, შეცვალონ და გააუმჯობესონ თქვენი ობიექტები. იფიქრეთ ამაზე როგორც თქვენი ციფრული პროფილების განახლებაზე!</p>
                            
                            <pre><code class="language-javascript">// ფუნქცია სტუდენტის პროფილის შესაქმნელად
function createStudent(name, age, grade) {
    return {
        name: name,
        age: age,
        grade: grade,
        subjects: [],
        friends: []
    };
}

// ფუნქცია საგნის დასამატებლად
function addSubject(student, subject, score) {
    student.subjects.push({
        name: subject,
        score: score
    });
    console.log(student.name + "-მ დაამატა " + subject + " ქულით " + score);
}

// ფუნქცია საშუალოს გამოსათვლელად
function getAverage(student) {
    let total = 0;
    for (let i = 0; i < student.subjects.length; i++) {
        total += student.subjects[i].score;
    }
    return student.subjects.length > 0 ? total / student.subjects.length : 0;
}

// შევქმნათ და გამოვიყენოთ სტუდენტი!
let luka = createStudent("ლუკა", 20, "A");
addSubject(luka, "მათემატიკა", 95);
addSubject(luka, "პროგრამირება", 98);
addSubject(luka, "ინგლისური", 87);

console.log(luka.name + "-ის საშუალო: " + getAverage(luka));
console.log("სრული პროფილი:", luka);</code></pre>
                            <p>🎓 <em>ახლა თქვენს ობიექტებს შეუძლიათ ფუნქციების მეშვეობით განვითარება და საკუთარი განახლება!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🌟 Master Level: Everything Together!",
                        ka: "🌟 ოსტატის დონე: ყველაფერი ერთად!"
                    },
                    content: {
                        en: `
                            <h3>Combine everything you've learned for amazing programs!</h3>
                            <pre><code class="language-javascript">// A complete game character system!
function createCharacter(name, type) {
    return {
                        name: name,
                        type: type,
                        level: 1,
                        health: 100,
                        inventory: [],
                        skills: []
                    };
                }
                
                function addItem(character, item) {
                    character.inventory.push(item);
                    console.log(character.name + " found " + item + "! 🎒");
                }
                
                function levelUp(character) {
                    character.level += 1;
                    character.health += 20;
                    console.log("🎉 " + character.name + " reached level " + character.level + "!");
                }
                
                function showStats(character) {
                    console.log("📊 " + character.name + " the " + character.type);
                    console.log("Level: " + character.level);
                    console.log("Health: " + character.health);
                    console.log("Items: " + character.inventory.length);
                }
                
                // Create and play with a character!
                let hero = createCharacter("Alex", "Warrior");
                addItem(hero, "Magic Sword");
                addItem(hero, "Health Potion");
                levelUp(hero);
                showStats(hero);</code></pre>
                            <p>🎮 <em>Congratulations! You can now build complex, interactive programs that feel like real applications!</em></p>
                        `,
                        ka: `
                            <h3>შეაერთეთ ყველაფერი რისი სწავლაც გაქვთ გასაოცარი პროგრამებისთვის!</h3>
                            <pre><code class="language-javascript">// სრული სათამაშო პერსონაჟის სისტემა!
function createCharacter(name, type) {
    return {
        name: name,
        type: type,
        level: 1,
        health: 100,
        inventory: [],
        skills: []
    };
}

function addItem(character, item) {
    character.inventory.push(item);
    console.log(character.name + "-მ იპოვა " + item + "! 🎒");
}

function levelUp(character) {
    character.level += 1;
    character.health += 20;
    console.log("🎉 " + character.name + "-მ მიაღწია " + character.level + " დონეს!");
}

function showStats(character) {
    console.log("📊 " + character.name + " " + character.type);
    console.log("დონე: " + character.level);
    console.log("სიცოცხლე: " + character.health);
    console.log("ნივთები: " + character.inventory.length);
}

// შევქმნათ და ვითამაშოთ პერსონაჟით!
let hero = createCharacter("ალექსი", "მებრძოლი");
addItem(hero, "ჯადოსნური ხმალი");
addItem(hero, "სიცოცხლის წამალი");
levelUp(hero);
showStats(hero);</code></pre>
                            <p>🎮 <em>გილოცავთ! ახლა შეგიძლიათ ააგოთ რთული, ინტერაქტიული პროგრამები, რომლებიც ნამდვილ აპლიკაციებს ჰგვანან!</em></p>
                        `
                    }
                }
            ]
        },
        startingCode: ``,
        practice: {
            title: {
                en: "Build Your Dream Program!",
                ka: "ააგეთ თქვენი ოცნების პროგრამა!"
            },
            description: {
                en: "You're now a JavaScript master! Create something amazing that combines everything you've learned.",
                ka: "ახლა ხართ JavaScript-ის ოსტატი! შექმენით რაღაც გასაოცარი, რაც აერთიანებს ყველაფერს რისი სწავლაც გაქვთ."
            },
            task: {
                en: "1. Create a library system with books (objects) and functions to add/search\n2. Build a simple social media system with users and posts\n3. Make a pet care system where you can feed, play, and check pet status\n4. Design a music playlist manager with songs and playlists\n5. Ultimate Challenge: Create your own mini-game with characters, items, and actions!",
                ka: "1. შექმენით ბიბლიოთეკის სისტემა წიგნებით (ობიექტები) და ფუნქციებით დამატება/ძიებისთვის\n2. ააგეთ მარტივი სოციალური მედიის სისტემა მომხმარებლებითა და პოსტებით\n3. გააკეთეთ შინაური ცხოველების მოვლის სისტემა, სადაც შეგიძლიათ ჭამება, თამაში და მდგომარეობის შემოწმება\n4. შექმენით მუსიკალური პლეილისტის მენეჯერი სიმღერებით და პლეილისტებით\n5. საბოლოო გამოწვევა: შექმენით თქვენი საკუთარი მინი-თამაში პერსონაჟებით, ნივთებით და მოქმედებებით!"
            }
        }
    },

    "array-methods": {
        title: {
            en: "Advanced Array Methods"
        },
        description: {
            en: "Master powerful array methods like map, filter, and reduce - your data manipulation superpowers!"
        },
        content: {
            sections: [
                {
                    title: {
                        en: "🔄 Map - Transform Every Item"
                    },
                    content: {
                        en: `
                            <h3>Map creates a new array by transforming each item!</h3>
                            <p>Think of map like a factory assembly line - every item goes in, gets transformed, and comes out changed!</p>
                            
                            <pre><code class="language-javascript">// Transform numbers
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(num => num * num);
console.log("Original:", numbers);
console.log("Squared:", squared);

// Transform prices with discount
let prices = [90, 45, 30];
let discounted = prices.map(price => price * 0.9);
console.log("Original prices:", prices);
console.log("Discounted:", discounted);

// Transform names to greetings
let names = ["Luka", "Ana", "Giorgi"];
let greetings = names.map(name => "Hello, " + name + "!");
console.log(greetings);</code></pre>
                            <p>🏭 <em>Map never changes the original array - it always creates a brand new one!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🔍 Filter - Find What You Need"
                    },
                    content: {
                        en: `
                            <h3>Filter creates a new array with only items that pass your test!</h3>
                            <p>Like having a bouncer at a club - only items that meet your criteria get through!</p>
                            
                            <pre><code class="language-javascript">// Filter odd numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

// Filter adults
let users = [
    { name: "Luka", age: 20 },
    { name: "Ana", age: 17 },
    { name: "Giorgi", age: 25 }
];
let adults = users.filter(user => user.age >= 18);
console.log("Adults:", adults);

// Filter expensive items
let products = [
    { name: "Phone", price: 800 },
    { name: "Headphones", price: 100 },
    { name: "Laptop", price: 1200 }
];
let expensive = products.filter(product => product.price > 500);
console.log("Expensive items:", expensive);</code></pre>
                            <p>🚪 <em>Filter is like a smart doorman - it only lets through what you want!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🎯 Reduce - Combine Everything"
                    },
                    content: {
                        en: `
                            <h3>Reduce takes an array and combines it into a single value!</h3>
                            <p>Like putting all ingredients in a blender to make one smoothie!</p>
                            
                            <pre><code class="language-javascript">// Sum all numbers
let numbers = [2, 4, 6, 7, 12];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// Find the biggest number
let biggestNumber = numbers.reduce((max, num) => {
    return num > max ? num : max;
}, numbers[0]);
console.log("Biggest:", biggestNumber);

// Count total characters in names
let names = ["Luka", "Ana", "Giorgi"];
let totalChars = names.reduce((total, name) => total + name.length, 0);
console.log("Total characters:", totalChars);

// Build a shopping summary
let cart = [
    { name: "Apples", price: 5, quantity: 3 },
    { name: "Bread", price: 2, quantity: 2 },
    { name: "Milk", price: 3, quantity: 1 }
];
let totalCost = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);
console.log("Total cost:", totalCost);</code></pre>
                            <p>🥤 <em>Reduce is like a blender - many ingredients become one result!</em></p>
                        `
                    }
                }
            ]
        },
        startingCode: ``,
        practice: {
            title: {
                en: "Practice Your Array Superpowers!"
            },
            description: {
                en: "Now use these powerful methods to manipulate data like a pro!"
            },
            task: {
                en: "1. Use map to double all numbers in [1,2,3,4,5]\n2. Use filter to find numbers greater than 3 in that same array\n3. Use reduce to sum all numbers in the array\n4. Create an array of student objects and use filter to find honor students (grade >= 90)\n5. Use map to create an array of just the student names"
            }
        }
    },

    typescript: {
        title: {
            en: "TypeScript Basics"
        },
        description: {
            en: "Learn TypeScript - JavaScript with superpowers! Add types to catch errors before they happen."
        },
        content: {
            sections: [
                {
                    title: {
                        en: "📘 What is TypeScript?"
                    },
                    content: {
                        en: `
                            <h3>TypeScript is JavaScript with a safety net!</h3>
                            <p>Imagine JavaScript is like driving a car, and TypeScript is like having GPS, airbags, and lane assistance - same car, but much safer!</p>
                            
                            <h4>🛡️ Why TypeScript?</h4>
                            <ul>
                                <li>Catches mistakes before your code runs</li>
                                <li>Better auto-completion in your editor</li>
                                <li>Makes your code self-documenting</li>
                                <li>Easier to work in teams</li>
                            </ul>
                            
                            <pre><code class="language-typescript">// JavaScript (no safety net)
let name = "Luka";
name = 42; // This will cause problems later!

// TypeScript (with safety net)
let name: string = "Luka";
name = 42; // Error! TypeScript catches this immediately</code></pre>
                            <p>🛡️ <em>TypeScript is like having a helpful friend who catches your mistakes!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🏷️ Basic Types"
                    },
                    content: {
                        en: `
                            <h3>Tell TypeScript what kind of data you're using!</h3>
                            
                            <pre><code class="language-typescript">// Basic types
let name: string = "Luka";
let age: number = 20;
let isStudent: boolean = true;

// Arrays
let hobbies: string[] = ["Coding", "Gaming", "Reading"];
let scores: number[] = [95, 87, 92];

// Objects
let person: {
    name: string;
    age: number;
    isStudent: boolean;
} = {
    name: "Luka",
    age: 20,
    isStudent: true
};

// Functions
function greet(name: string): string {
    return "Hello, " + name + "!";
}

const multiply = (a: number, b: number): number => a * b;

console.log(greet("Ana"));
console.log(multiply(5, 3));</code></pre>
                            <p>🏷️ <em>Types are like labels on boxes - they tell you what's inside!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "⚡ TypeScript in Action"
                    },
                    content: {
                        en: `
                            <h3>See how TypeScript makes your code better!</h3>
                            
                            <pre><code class="language-typescript">// Interface - like a blueprint
interface Student {
    name: string;
    age: number;
    grade: number;
    subjects: string[];
}

// Function with TypeScript magic
function createStudent(name: string, age: number, grade: number): Student {
    return {
        name: name,
        age: age,
        grade: grade,
        subjects: []
    };
}

function addSubject(student: Student, subject: string): void {
    student.subjects.push(subject);
    console.log(student.name + " added " + subject);
}

function getGradeStatus(grade: number): string {
    if (grade >= 90) return "Excellent!";
    if (grade >= 80) return "Good!";
    if (grade >= 70) return "Okay";
    return "Needs improvement";
}

// Using our typed functions
let luka = createStudent("Luka", 20, 95);
addSubject(luka, "Mathematics");
addSubject(luka, "Programming");

console.log(luka.name + " has " + luka.subjects.length + " subjects");
console.log("Grade status:", getGradeStatus(luka.grade));</code></pre>
                            <p>⚡ <em>TypeScript helps you build more reliable programs by catching errors early!</em></p>
                        `
                    }
                }
            ]
        },
        startingCode: ``,
        practice: {
            title: {
                en: "Practice TypeScript Safety!"
            },
            description: {
                en: "Create type-safe code that prevents bugs before they happen!"
            },
            task: {
                en: "1. Create variables with proper types for your name, age, and favorite hobbies\n2. Create an interface for a Book with title, author, and pages\n3. Write a function that takes two numbers and returns their sum with proper types\n4. Create an array of book objects using your interface\n5. Write a function that finds books with more than 300 pages"
            }
        }
    },

    dom: {
        title: {
            en: "DOM Manipulation"
        },
        description: {
            en: "Learn to control web pages! Make your websites interactive by changing content, styles, and responding to user actions."
        },
        content: {
            sections: [
                {
                    title: {
                        en: "🌐 What is the DOM?"
                    },
                    content: {
                        en: `
                            <h3>DOM is your bridge to control the webpage!</h3>
                            <p>Think of the DOM like the remote control for your TV - it lets you change channels, adjust volume, and control everything you see!</p>
                            
                            <h4>🎮 What you can do with DOM:</h4>
                            <ul>
                                <li>Change text and content</li>
                                <li>Modify styles and colors</li>
                                <li>Add or remove elements</li>
                                <li>Respond to clicks and user actions</li>
                            </ul>
                            
                            <pre><code class="language-javascript">// Finding elements (like finding the right TV channel)
let myDiv = document.getElementById('myDiv');
let myParagraph = document.querySelector('.myClass');

console.log("Found element:", myDiv);

// Changing content (like changing the channel)
myDiv.innerHTML = "I am new content!";
myParagraph.textContent = "Hello from JavaScript!";</code></pre>
                            <p>🎮 <em>DOM is like having a magic wand to control your webpage!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🎨 Changing Styles and Content"
                    },
                    content: {
                        en: `
                            <h3>Make your webpage come alive with dynamic changes!</h3>
                            
                            <pre><code class="language-javascript">// Get an element to work with
let myElement = document.getElementById('myElement');

// Change the content
myElement.innerHTML = "Hello World!";
myElement.textContent = "Just text, no HTML";

// Change styles (like redecorating your room)
myElement.style.color = "red";
myElement.style.fontSize = "20px";
myElement.style.backgroundColor = "yellow";

// Add and remove CSS classes
myElement.classList.add("highlight");
myElement.classList.remove("old-style");

// Toggle a class on and off
myElement.classList.toggle("active");

// Multiple style changes at once
Object.assign(myElement.style, {
    color: "blue",
    fontSize: "24px",
    padding: "10px",
    borderRadius: "5px"
});</code></pre>
                            <p>🎨 <em>Changing styles is like being an interior designer for your webpage!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🎯 Responding to User Actions"
                    },
                    content: {
                        en: `
                            <h3>Make your webpage respond to user clicks and actions!</h3>
                            
                            <pre><code class="language-javascript">// Responding to button clicks
let myButton = document.getElementById('myButton');
myButton.addEventListener('click', () => {
    alert("Button was clicked!");
    console.log("User clicked the button!");
});

// More advanced click handler
let changeTextButton = document.getElementById('changeText');
let textElement = document.getElementById('paragraph');

changeTextButton.addEventListener('click', () => {
    textElement.textContent = "Text changed by JavaScript!";
    textElement.style.color = "green";
});

// Responding to form input
let nameInput = document.getElementById('nameInput');
nameInput.addEventListener('input', (event) => {
    console.log("User typed:", event.target.value);
    
    // Update another element with the typed text
    let output = document.getElementById('output');
    output.textContent = "Hello, " + event.target.value + "!";
});

// Example: Interactive counter
let count = 0;
let counter = document.getElementById('counter');
let incrementBtn = document.getElementById('increment');

incrementBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
    
    if (count >= 10) {
        counter.style.color = "gold";
        counter.textContent = count + " 🎉";
    }
});

// Get just the names
let names = people.map(person => person.name);
console.log("Names:", names);

// Find adults (18 or older)
let adults = people.filter(person => person.age >= 18);
console.log("Adults:", adults);

// Calculate average age
let averageAge = people.reduce((sum, person) => sum + person.age, 0) / people.length;
console.log("Average age:", averageAge);

// Chain methods together for power!
let adultNames = people
    .filter(person => person.age >= 18)
    .map(person => person.name);
console.log("Adult names:", adultNames);</code></pre>
                            <p>🔗 <em>You can chain these methods together for super powerful data processing!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🎯 Practice Makes Perfect"
                    },
                    content: {
                        en: `
                            <h3>Try these examples to master array methods!</h3>
                            
                            <pre><code class="language-javascript">// Product inventory example
let products = [
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "Book", price: 25, category: "education" },
    { name: "Phone", price: 800, category: "electronics" },
    { name: "Notebook", price: 5, category: "education" },
    { name: "Headphones", price: 200, category: "electronics" }
];

// Get all product names
let productNames = products.map(product => product.name);
console.log("Products:", productNames);

// Find electronics
let electronics = products.filter(product => product.category === "electronics");
console.log("Electronics:", electronics);

// Calculate total inventory value
let totalValue = products.reduce((total, product) => total + product.price, 0);
console.log("Total inventory value: $" + totalValue);

// Get expensive electronics (over $500)
let expensiveElectronics = products
    .filter(product => product.category === "electronics")
    .filter(product => product.price > 500)
    .map(product => product.name);
console.log("Expensive electronics:", expensiveElectronics);

// Create price summary
let priceSummary = products.map(product => ({
    name: product.name,
    priceCategory: product.price > 100 ? "expensive" : "affordable"
}));
console.log("Price summary:", priceSummary);</code></pre>
                            <p>🎯 <em>Practice with your own data - the possibilities are endless!</em></p>
                        `
                    }
                }
            ]
        },
        startingCode: ``,
        practice: {
            title: {
                en: "Become an Array Master!"
            },
            description: {
                en: "Use map, filter, and reduce to transform and analyze data like a pro!"
            },
            task: {
                en: "1. Create an array of numbers and use map() to double each one\n2. Use filter() to find numbers greater than 10\n3. Use reduce() to find the sum of all numbers\n4. Create an array of student objects with names and grades\n5. Use array methods to find students with grades above 80 and get their names"
            }
        }
    },

    api: {
        title: {
            en: "API Requests"
        },
        description: {
            en: "Learn to communicate with the internet! Fetch data from servers and build connected applications."
        },
        content: {
            sections: [
                {
                    title: {
                        en: "🌐 What are APIs?"
                    },
                    content: {
                        en: `
                            <h3>APIs are like waiters in a restaurant - they take your order and bring you what you need!</h3>
                            <p>When you want data from the internet (weather, user info, posts), you ask an API to get it for you!</p>
                            
                            <h4>🍕 Think of it like ordering food:</h4>
                            <ul>
                                <li><strong>You</strong> are the customer (your JavaScript code)</li>
                                <li><strong>API</strong> is the waiter (middleman)</li>
                                <li><strong>Server</strong> is the kitchen (where data lives)</li>
                                <li><strong>Response</strong> is your food (the data you get back)</li>
                            </ul>
                            
                            <h4>📋 Common HTTP Methods:</h4>
                            <ul>
                                <li><strong>GET</strong> - Ask for data (like reading a menu)</li>
                                <li><strong>POST</strong> - Send new data (like placing an order)</li>
                                <li><strong>PUT</strong> - Update existing data (like changing your order)</li>
                                <li><strong>DELETE</strong> - Remove data (like canceling your order)</li>
                            </ul>
                            
                            <p>🌟 <em>APIs let your app talk to other apps and services all over the world!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "📥 Making GET Requests"
                    },
                    content: {
                        en: `
                            <h3>GET requests are like asking "Can I have some data, please?"</h3>
                            
                            <pre><code class="language-javascript">// Basic GET request to get a post
console.log("=== Fetching a Post ===");

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        console.log("Response received!", response.status);
        return response.json();
    })
    .then(data => {
        console.log("Post title:", data.title);
        console.log("Post body:", data.body);
        console.log("Author ID:", data.userId);
    })
    .catch(error => {
        console.error("Oops! Something went wrong:", error);
    });

// Modern way with async/await
async function getPost() {
    try {
        console.log("\\n=== Getting Post with Async/Await ===");
        
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        
        if (!response.ok) {
            throw new Error("Failed to fetch post");
        }
        
        let post = await response.json();
        console.log("Post loaded:", post.title);
        
        // Get the author info too
        let userResponse = await fetch(\`https://jsonplaceholder.typicode.com/users/\${post.userId}\`);
        let user = await userResponse.json();
        
        console.log("Author:", user.name);
        console.log("Author email:", user.email);
        
    } catch (error) {
        console.log("Error loading post:", error.message);
    }
}

// Call the function
getPost();

// Getting multiple posts
async function getAllPosts() {
    try {
        console.log("\\n=== Loading All Posts ===");
        
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let posts = await response.json();
        
        console.log(\`Found \${posts.length} posts!\`);
        
        // Show first 3 posts
        posts.slice(0, 3).forEach(post => {
            console.log(\`- \${post.title}\`);
        });
        
    } catch (error) {
        console.log("Error loading posts:", error.message);
    }
}

getAllPosts();</code></pre>
                            <p>📥 <em>GET requests are perfect for loading data to display in your app!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "📤 Sending Data with POST"
                    },
                    content: {
                        en: `
                            <h3>POST requests are like submitting a form or creating new content!</h3>
                            
                            <pre><code class="language-javascript">// Creating a new post
async function createPost() {
    try {
        console.log("=== Creating a New Post ===");
        
        let newPost = {
            title: "My Amazing Post",
            body: "This is the content of my awesome post!",
            userId: 1
        };
        
        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(newPost),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        
        if (response.ok) {
            let createdPost = await response.json();
            console.log("Post created successfully!");
            console.log("New post ID:", createdPost.id);
            console.log("Title:", createdPost.title);
        } else {
            console.log("Failed to create post");
        }
        
    } catch (error) {
        console.log("Error creating post:", error.message);
    }
}

createPost();

// Sending user data
async function createUser() {
    try {
        console.log("\\n=== Creating a New User ===");
        
        let newUser = {
            name: "Luka Partenadze",
            username: "luka_dev",
            email: "luka@example.com",
            phone: "555-1234",
            website: "lukadev.com"
        };
        
        let response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-type": "application/json"
            }
        });
        
        let result = await response.json();
        console.log("User created:", result.name);
        console.log("User ID:", result.id);
        
    } catch (error) {
        console.log("Error creating user:", error.message);
    }
}

createUser();</code></pre>
                            <p>📤 <em>Use POST to create new data - like user accounts, posts, or comments!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🗑️ DELETE and Error Handling"
                    },
                    content: {
                        en: `
                            <h3>Sometimes you need to remove data or handle when things go wrong!</h3>
                            
                            <pre><code class="language-javascript">// Deleting a post
async function deletePost(postId) {
    try {
        console.log(\`=== Deleting Post \${postId} ===\`);
        
        let response = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${postId}\`, {
            method: "DELETE"
        });
        
        if (response.ok) {
            console.log("Post deleted successfully!");
        } else {
            console.log("Failed to delete post");
        }
        
    } catch (error) {
        console.log("Error deleting post:", error.message);
    }
}

deletePost(1);

// Comprehensive error handling
async function safeApiCall(url) {
    try {
        console.log("\\n=== Safe API Call ===");
        console.log("Calling:", url);
        
        let response = await fetch(url);
        
        // Check if request was successful
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        let data = await response.json();
        console.log("Success! Got data:", data);
        return data;
        
    } catch (error) {
        // Handle different types of errors
        if (error.name === 'TypeError') {
            console.log("Network error - check your internet connection");
        } else if (error.message.includes('404')) {
            console.log("Data not found - the resource doesn't exist");
        } else if (error.message.includes('500')) {
            console.log("Server error - try again later");
        } else {
            console.log("Something went wrong:", error.message);
        }
        
        // Return fallback data
        return { error: true, message: error.message };
    }
}

// Test with good and bad URLs
safeApiCall("https://jsonplaceholder.typicode.com/posts/1");
safeApiCall("https://jsonplaceholder.typicode.com/posts/999999"); // This will fail

// Real-world example: Loading user profiles safely
async function loadUserProfile(userId) {
    console.log(\`\\n=== Loading User \${userId} Profile ===\`);
    
    let user = await safeApiCall(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);
    
    if (user.error) {
        console.log("Using default user data");
        return { name: "Unknown User", email: "no-email" };
    }
    
    console.log("User loaded:", user.name);
    return user;
}

loadUserProfile(1);
loadUserProfile(999); // This will use fallback</code></pre>
                            <p>🛡️ <em>Always plan for when things go wrong - good error handling makes reliable apps!</em></p>
                        `
                    }
                }
            ]
        },
        startingCode: ``,
        practice: {
            title: {
                en: "Build Connected Apps!"
            },
            description: {
                en: "Practice making real API calls and handling responses like a pro developer!"
            },
            task: {
                en: "1. Use fetch to get a list of users from JSONPlaceholder\n2. Create a POST request to add a new user\n3. Try getting a specific user by ID and handle if they don't exist\n4. Build a function that loads and displays user posts\n5. Add proper error handling for network failures"
            }
        }
    },

    error_handling: {
        title: {
            en: "Error Handling"
        },
        description: {
            en: "Learn to handle errors gracefully! Build robust applications that work even when things go wrong."
        },
        content: {
            sections: [
                {
                    title: {
                        en: "🚨 Why Errors Happen and Why We Care"
                    },
                    content: {
                        en: `
                            <h3>Errors are like flat tires - they're gonna happen, so let's be prepared!</h3>
                            <p>Good programmers don't avoid errors, they plan for them! It's like having a first aid kit - you hope you won't need it, but you're glad it's there!</p>
                            
                            <h4>🎯 Common Types of Errors:</h4>
                            <ul>
                                <li><strong>Syntax Errors</strong> - Typos in your code (like missing brackets)</li>
                                <li><strong>Runtime Errors</strong> - Code breaks while running (like dividing by zero)</li>
                                <li><strong>Logical Errors</strong> - Code runs but does wrong thing (like adding instead of multiplying)</li>
                                <li><strong>Network Errors</strong> - Internet problems (like server is down)</li>
                            </ul>
                            
                            <h4>🛡️ Why Error Handling Matters:</h4>
                            <ul>
                                <li>Keeps your app running smoothly</li>
                                <li>Gives users helpful messages instead of scary errors</li>
                                <li>Helps you fix problems faster</li>
                                <li>Makes your app look professional</li>
                            </ul>
                            
                            <p>💡 <em>Think of error handling as being a good host - when something goes wrong, you handle it gracefully!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🛠️ Try/Catch - Your Error Safety Net"
                    },
                    content: {
                        en: `
                            <h3>Try/catch is like having a safety net when you're learning to ride a bike!</h3>
                            
                            <pre><code class="language-javascript">// Basic try/catch example
console.log("=== Basic Error Handling ===");

try {
    // Try to do something that might fail
    let result = 10 / 0; // This is fine in JavaScript
    console.log("Division result:", result);
    
    // This will cause an error
    let invalidJSON = "{ this is not valid JSON }";
    let parsed = JSON.parse(invalidJSON);
    console.log("Parsed JSON:", parsed);
    
} catch (error) {
    // If anything goes wrong, we end up here
    console.log("Oops! Something went wrong:", error.message);
    console.log("But the app keeps running! 🎉");
}

console.log("Program continues normally...");

// Real-world example: Safe data parsing
function safelyParseJSON(jsonString) {
    try {
        let data = JSON.parse(jsonString);
        console.log("Successfully parsed:", data);
        return data;
    } catch (error) {
        console.log("Invalid JSON provided:", error.message);
        console.log("Returning empty object instead");
        return {}; // Fallback value
    }
}

// Test with good and bad JSON
console.log("\\n=== Testing JSON Parsing ===");
safelyParseJSON('{"name": "Luka", "age": 20}'); // This works
safelyParseJSON('{ invalid json }'); // This fails gracefully

// Validation with error handling
function validateAge(age) {
    try {
        // Check if age is a number
        if (typeof age !== 'number') {
            throw new Error("Age must be a number!");
        }
        
        // Check if age is reasonable
        if (age < 0) {
            throw new Error("Age cannot be negative!");
        }
        
        if (age > 150) {
            throw new Error("Age seems too high!");
        }
        
        console.log(\`Age \${age} is valid! ✅\`);
        return true;
        
    } catch (error) {
        console.log("Age validation failed:", error.message);
        return false;
    }
}

// Test age validation
console.log("\\n=== Age Validation Tests ===");
validateAge(25);      // Valid
validateAge("25");    // Invalid type
validateAge(-5);      // Invalid value
validateAge(200);     // Invalid value</code></pre>
                            <p>🛠️ <em>Try/catch lets you test risky code safely and handle problems gracefully!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🔍 Debugging and Console Techniques"
                    },
                    content: {
                        en: `
                            <h3>Debugging is like being a detective - follow the clues to solve the mystery!</h3>
                            
                            <pre><code class="language-javascript">// Console techniques for debugging
console.log("=== Debugging Techniques ===");

// 1. Strategic console.log placement
function calculateTotal(items) {
    console.log("calculateTotal called with:", items);
    
    let total = 0;
    
    for (let i = 0; i < items.length; i++) {
        console.log(\`Processing item \${i}:\`, items[i]);
        total = total + items[i].price;
        console.log(\`Running total:\`, total);
    }
    
    console.log("Final total:", total);
    return total;
}

// Test with some data
let shoppingCart = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 }
];

calculateTotal(shoppingCart);

// 2. Console.table for complex data
console.log("\\n=== Shopping Cart (table view) ===");
console.table(shoppingCart);

// 3. Debugging logical errors
function findLargestNumber(numbers) {
    console.log("Finding largest in:", numbers);
    
    let largest = 0; // BUG: This won't work with negative numbers!
    
    for (let num of numbers) {
        console.log(\`Comparing \${num} with current largest \${largest}\`);
        if (num > largest) {
            largest = num;
            console.log(\`New largest: \${largest}\`);
        }
    }
    
    return largest;
}

// This will show the bug!
console.log("\\n=== Finding Largest Number (with bug) ===");
let testNumbers = [-5, -2, -10, -1];
let result = findLargestNumber(testNumbers);
console.log("Result:", result, "(This should be -1, not 0!)");

// Fixed version
function findLargestNumberFixed(numbers) {
    if (numbers.length === 0) return null;
    
    let largest = numbers[0]; // Start with first number, not 0
    
    for (let num of numbers) {
        if (num > largest) {
            largest = num;
        }
    }
    
    return largest;
}

console.log("\\n=== Fixed Version ===");
let fixedResult = findLargestNumberFixed(testNumbers);
console.log("Fixed result:", fixedResult);

// 4. Error object properties
try {
    throw new Error("This is a custom error");
} catch (error) {
    console.log("\\n=== Error Object Properties ===");
    console.log("Error message:", error.message);
    console.log("Error name:", error.name);
    console.log("Error stack:", error.stack);
}</code></pre>
                            <p>🔍 <em>Good debugging is like leaving breadcrumbs - trace your code's path to find problems!</em></p>
                        `
                    }
                },
                {
                    title: {
                        en: "🌐 Async Error Handling"
                    },
                    content: {
                        en: `
                            <h3>Handling errors in async code - when things go wrong on the internet!</h3>
                            
                            <pre><code class="language-javascript">// Async error handling with try/catch
async function loadUserData(userId) {
    try {
        console.log(\`=== Loading User \${userId} ===\`);
        
        // Simulate API call that might fail
        if (userId <= 0) {
            throw new Error("User ID must be positive");
        }
        
        let response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(\`Failed to load user: \${response.status} \${response.statusText}\`);
        }
        
        let user = await response.json();
        console.log("User loaded successfully:", user.name);
        return user;
        
    } catch (error) {
        console.log("Failed to load user:", error.message);
        
        // Return fallback data
        return {
            id: userId,
            name: "Unknown User",
            email: "no-email@example.com",
            error: true
        };
    }
}

// Test with valid and invalid user IDs
async function testUserLoading() {
    console.log("=== Testing User Loading ===");
    
    // This should work
    let user1 = await loadUserData(1);
    console.log("User 1:", user1.name);
    
    // This should fail gracefully
    let user999 = await loadUserData(999);
    console.log("User 999:", user999.name);
    
    // This should also fail gracefully
    let userNegative = await loadUserData(-1);
    console.log("User -1:", userNegative.name);
}

testUserLoading();

// Multiple async operations with error handling
async function loadMultipleUsers() {
    try {
        console.log("\\n=== Loading Multiple Users ===");
        
        // Load multiple users, some might fail
        let userPromises = [
            loadUserData(1),
            loadUserData(2),
            loadUserData(999), // This will fail
            loadUserData(3)
        ];
        
        // Wait for all to complete (even if some fail)
        let users = await Promise.allSettled(userPromises);
        
        console.log("All requests completed!");
        
        users.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(\`User \${index + 1}: \${result.value.name}\`);
            } else {
                console.log(\`User \${index + 1}: Failed - \${result.reason.message}\`);
            }
        });
        
    } catch (error) {
        console.log("Unexpected error:", error.message);
    }
}

loadMultipleUsers();

// Graceful degradation example
async function displayUserProfile(userId) {
    try {
        console.log(\`\\n=== Displaying Profile for User \${userId} ===\`);
        
        let user = await loadUserData(userId);
        
        if (user.error) {
            // User data failed to load, show minimal info
            console.log("⚠️  Limited profile available");
            console.log("Name: Unknown User");
            console.log("Status: Offline");
        } else {
            // Full profile available
            console.log("✅ Full profile loaded");
            console.log("Name:", user.name);
            console.log("Email:", user.email);
            console.log("Status: Online");
        }
        
    } catch (error) {
        console.log("❌ Could not display profile:", error.message);
        console.log("Please try again later");
    }
}

// Test profile display
displayUserProfile(1);  // Should show full profile
displayUserProfile(999); // Should show limited profile</code></pre>
                            <p>🌐 <em>Async error handling keeps your app working even when the internet has bad days!</em></p>
                        `
                    }
                }
            ]
        },
        startingCode: ``,
        practice: {
            title: {
                en: "Build Bulletproof Code!"
            },
            description: {
                en: "Practice handling all the ways code can break and keep your apps running smoothly!"
            },
            task: {
                en: "1. Create a function that safely divides two numbers (handle division by zero)\n2. Write a function that validates email addresses with proper error messages\n3. Build an async function that loads data with retry logic when it fails\n4. Create a calculator that handles invalid inputs gracefully\n5. Build a form validator that gives helpful error messages for each field"
            }
        }
    }
};

// Application State  
let currentTutorial = 'variables';



async function switchLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Language ${lang} not supported`);
        return;
    }

    // Set language in translation service
    translationService.setLanguage(lang);
    currentLanguage = lang;
    
    // Update active language option
    document.querySelectorAll('.language-option').forEach(option => {
        if (option.dataset.lang === lang) {
            // Active state
            option.className = 'language-option flex items-center p-3 rounded-lg cursor-pointer bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300';
        } else {
            // Inactive state
            option.className = 'language-option flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors';
        }
    });
    
    // Update all UI elements with new language
    updateUILanguage();
    
    // Reload current tutorial with new language
    await loadTutorial(currentTutorial);
    
    // Update navigation titles
    updateNavigationTitles();
    
    // Store language preference
    localStorage.setItem('language', lang);
    
    // Close language dropdown after selecting
    const dropdown = document.getElementById('languageDropdown');
    if (dropdown) {
        dropdown.classList.add('hidden');
    }
}

// Update UI elements with current language
function updateUILanguage() {
    const lang = currentLanguage;
    
    // Update button texts
    const runCodeBtn = document.getElementById('runCodeBtn');
    const resetBtn = document.getElementById('resetBtn');
    const copyCodeBtn = document.getElementById('copyCodeBtn');
    const clearCodeBtn = document.getElementById('clearCodeBtn');
    const clearConsoleBtn = document.getElementById('clearConsoleBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const codeEditor = document.getElementById('codeEditor');

    if (runCodeBtn) runCodeBtn.querySelector('span').textContent = translationService.t('ui.runCode');
    if (resetBtn) resetBtn.textContent = translationService.t('ui.reset');
    if (copyCodeBtn) copyCodeBtn.textContent = translationService.t('ui.copy');
    if (clearCodeBtn) clearCodeBtn.textContent = translationService.t('ui.clear');
    if (clearConsoleBtn) clearConsoleBtn.textContent = translationService.t('ui.clearConsole');
    if (prevBtn) prevBtn.querySelector('span').textContent = translationService.t('ui.previous');
    if (nextBtn) nextBtn.querySelector('span').textContent = translationService.t('ui.next');
    if (codeEditor) codeEditor.placeholder = translationService.t('ui.placeholder');

    // Update section headers
    const practiceHeaders = document.querySelectorAll('h3');
    practiceHeaders.forEach(header => {
        if (header.textContent.includes('Practice Task') || header.textContent.includes('პრაქტიკული დავალება')) {
            header.textContent = translationService.t('ui.practiceTask');
        }
        if (header.textContent.includes('Try it Yourself') || header.textContent.includes('თვითონ სცადეთ')) {
            header.textContent = translationService.t('ui.tryItYourself');
        }
        if (header.textContent.includes('Output') || header.textContent.includes('გამოტანა')) {
            header.textContent = translationService.t('ui.output');
        }
    });

    // Update page title
    document.title = translationService.t('ui.title');

    // Update creator info
    const creatorInfo = document.querySelector('small');
    if (creatorInfo && creatorInfo.textContent.includes('Created by')) {
        creatorInfo.textContent = translationService.t('ui.creator');
    }
    
    // Update app description
    const appDescription = document.querySelector('p');
    if (appDescription && appDescription.textContent.includes('Interactive JavaScript Tutorials')) {
        appDescription.textContent = translationService.t('ui.subtitle');
    }

    // --- refresh flag/icon on language button ---
    const flagEl = document.getElementById('currentFlag');
    const langEl = document.getElementById('currentLang');
    if (flagEl && langEl) {
        if (lang === 'ka') {
            flagEl.textContent = '🇬🇪';
            langEl.textContent = 'KA';
        } else {
            flagEl.textContent = '🇺🇸';
            langEl.textContent = 'EN';
        }
    }
}

function showTranslationProgress() {
    let indicator = document.querySelector('.translation-progress');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.className = 'translation-progress';
        indicator.innerHTML = `
            <div class="progress-bar">
                <div class="progress-fill"></div>
                <span>🇬🇪 თარგმნა...</span>
            </div>
        `;
        document.body.appendChild(indicator);
        
        // Add CSS for progress indicator
        const style = document.createElement('style');
        style.textContent = `
            .translation-progress {
                position: fixed;
                top: 70px;
                right: 20px;
                background: rgba(59, 130, 246, 0.95);
                color: white;
                padding: 12px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                z-index: 1000;
                backdrop-filter: blur(10px);
                animation: slideIn 0.3s ease-out;
            }
            .progress-bar {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 14px;
                font-weight: 500;
            }
            .progress-fill {
                width: 20px;
                height: 3px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 2px;
                overflow: hidden;
                position: relative;
            }
            .progress-fill::after {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: white;
                animation: progress 1.5s infinite;
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes progress {
                to { left: 100%; }
            }
        `;
        document.head.appendChild(style);
    }
    indicator.style.display = 'block';
}

function hideTranslationProgress() {
    const indicator = document.querySelector('.translation-progress');
    if (indicator) {
        indicator.style.animation = 'slideOut 0.3s ease-in forwards';
        setTimeout(() => {
            indicator.style.display = 'none';
            indicator.style.animation = '';
        }, 300);
    }
    
    // Add slideOut animation
    const existingStyle = document.querySelector('style');
    if (existingStyle && !existingStyle.textContent.includes('@keyframes slideOut')) {
        existingStyle.textContent += `
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
    }
}

// Update navigation menu titles based on current language
function updateNavigationTitles() {
    const titleElements = document.querySelectorAll('.tutorial-title');
    
    titleElements.forEach(element => {
        const tutorialKey = element.closest('.tutorial-item')?.dataset.tutorial;
        if (tutorialKey) {
            const navigationTitle = translationService.t(`navigation.${tutorialKey}`);
            element.textContent = navigationTitle;
        }
    });
}

// DOM Elements
const tutorialTitle = document.getElementById('tutorialTitle');
const tutorialDescription = document.getElementById('tutorialDescription');
const tutorialContent = document.getElementById('tutorialContent');
const codeEditor = document.getElementById('codeEditor');
const consoleOutput = document.getElementById('consoleOutput');
const practiceContent = document.getElementById('practiceContent');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Button Elements
const runCodeBtn = document.getElementById('runCodeBtn');
const resetBtn = document.getElementById('resetBtn');
const copyCodeBtn = document.getElementById('copyCodeBtn');
const clearCodeBtn = document.getElementById('clearCodeBtn');
const clearConsoleBtn = document.getElementById('clearConsoleBtn');

// Initialize Application
document.addEventListener('DOMContentLoaded', async function() {
    // Initialize theme manager
    new ThemeManager();
    
    // Set up initial language
    const savedLanguage = localStorage.getItem('language') || 'en';
    if (translations[savedLanguage]) {
        translationService.setLanguage(savedLanguage);
        currentLanguage = savedLanguage;
    }
    
    // Update UI with correct language
    updateUILanguage();
    updateNavigationTitles();
    
    // Set active language option in UI
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === currentLanguage) {
            option.classList.add('active');
        }
    });
    
    // Load first tutorial
    await loadTutorial(currentTutorial);
    setupEventListeners();
    setupLanguageDropdown();
});

// Setup Event Listeners
function setupEventListeners() {
    // Tutorial navigation - query fresh each time to catch all items
    document.querySelectorAll('.tutorial-item').forEach(item => {
        item.addEventListener('click', async () => {
            const tutorial = item.dataset.tutorial;
            console.log('Clicked tutorial:', tutorial);
            await switchTutorial(tutorial);
        });
    });

    // Language switching
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', async () => {
            const lang = option.dataset.lang;
            await switchLanguage(lang);
        });
    });

    // Code execution
    runCodeBtn.addEventListener('click', runCode);
    resetBtn.addEventListener('click', resetCode);
    copyCodeBtn.addEventListener('click', copyCode);
    clearCodeBtn.addEventListener('click', clearCode);
    clearConsoleBtn.addEventListener('click', clearConsole);

    // Navigation buttons
    prevBtn.addEventListener('click', async () => await previousTutorial());
    nextBtn.addEventListener('click', async () => await nextTutorial());

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 'Enter':
                    e.preventDefault();
                    runCode();
                    break;
                case 'r':
                    e.preventDefault();
                    resetCode();
                    break;
            }
        }
    });
}

// Load Tutorial Content
// Format tutorial text with proper code blocks
function formatTutorialText(text) {
    if (!text) return '';
    
    // Replace markdown code blocks with styled HTML blocks
    const codeBlockRegex = /```(\w+)?\n?([\s\S]*?)```/g;
    let formattedText = text.replace(codeBlockRegex, (match, language, code) => {
        const lang = (language || 'javascript').toLowerCase();
        const trimmedCode = code.trim();
        return `
            <div class="code-block-container my-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div class="code-block-header flex items-center justify-between bg-gray-50 dark:bg-gray-800 px-3 py-2 text-xs font-mono">
                    <span class="code-block-language uppercase tracking-wider text-blue-600 dark:text-blue-400">${lang}</span>
                    <button class="copy-code-btn text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors" onclick="copyCodeBlock(this)" title="Copy code">Copy</button>
                </div>
                <pre class="code-block bg-white dark:bg-gray-900 p-4 overflow-x-auto"><code class="language-${lang}">${trimmedCode}</code></pre>
            </div>
        `;
    });

    // Bold **text** -> <strong>
    formattedText = formattedText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // Italic *text* -> <em>
    formattedText = formattedText.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    // Inline `code` -> styled span
    formattedText = formattedText.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

    // Convert newlines to <br>
    formattedText = formattedText.replace(/\n/g, '<br>');

    return formattedText;
}

// Copy code block content
function copyCodeBlock(button) {
    const codeBlock = button.closest('.code-block-container').querySelector('code');
    const code = codeBlock.textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy code:', err);
    });
}

async function loadTutorial(tutorialKey) {
    console.log('Loading tutorial:', tutorialKey);
    
    // Get tutorial data from translation system
    const tutorialData = translationService.t(`tutorials.${tutorialKey}`);
    if (!tutorialData || typeof tutorialData === 'string') {
        console.error('Tutorial not found:', tutorialKey);
        return;
    }

    currentTutorial = tutorialKey;

    try {
        // Update header with current language
        tutorialTitle.textContent = tutorialData.title;
        tutorialDescription.textContent = tutorialData.description;

        // Load tutorial content sections
        let contentHTML = '';
        const content = tutorialData.content;
        
        // Build content from the three main sections: concept, example, task
        if (content.concept) {
            contentHTML += `
                <div class="content-section">
                    <h2>${content.concept.title}</h2>
                    <div class="content-text">${formatTutorialText(content.concept.text)}</div>
                </div>
            `;
        }
        
        if (content.example) {
            contentHTML += `
                <div class="content-section">
                    <h2>${content.example.title}</h2>
                    <div class="content-text">${formatTutorialText(content.example.text)}</div>
                </div>
            `;
        }
        
        tutorialContent.innerHTML = contentHTML;

        // Clear code editor (start fresh)
        codeEditor.value = translationService.t('ui.placeholder');

        // Load practice task
        if (content.task) {
            const encouragement = currentLanguage === 'ka' ? 
                "💡 გახსოვდეთ: არასწორი გზა არ არსებობს - უბრალოდ ექსპერიმენტი გააკეთეთ და ისიამოვნეთ სწავლით!" :
                "💡 Remember: There's no right or wrong way - just experiment and have fun learning!";
            
            practiceContent.innerHTML = `
                <h4>${content.task.title}</h4>
                <div class="practice-task">
                    <div class="content-text">${formatTutorialText(content.task.text)}</div>
                </div>
                <p style="color: #64748b; font-style: italic; margin-top: 1rem;">
                    ${encouragement}
                </p>
            `;
        }

        // Clear console
        clearConsole();

        // Update navigation
        updateNavigation();
        updateActiveItem();

        // Highlight code blocks
        setTimeout(() => {
            if (window.Prism) {
                Prism.highlightAll();
            }
        }, 100);
        
    } catch (error) {
        console.error('Error loading tutorial:', error);
        // Fallback to English if translation fails
        if (currentLanguage === 'ka') {
            translationService.setLanguage('en');
            currentLanguage = 'en';
            await loadTutorial(tutorialKey);
        }
    }
}

// Switch Tutorial
async function switchTutorial(tutorialKey) {
    await loadTutorial(tutorialKey);
}

// Update Active Navigation Item
function updateActiveItem() {
    document.querySelectorAll('.tutorial-item').forEach(item => {
        const iconBox = item.querySelector('div');
        const isActive = item.dataset.tutorial === currentTutorial;

        if (isActive) {
            // Active styling
            item.className = 'tutorial-item flex items-center p-4 rounded-xl cursor-pointer glass border-l-4 border-blue-500 text-blue-700 dark:text-blue-300 shadow-lg';
            if (iconBox) {
                iconBox.classList.remove('bg-gray-400');
                iconBox.classList.add('bg-gradient-to-br', 'from-blue-500', 'to-blue-600', 'shadow-lg');
            }
        } else {
            // Inactive styling
            item.className = 'tutorial-item flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors';
            if (iconBox) {
                iconBox.classList.remove('bg-gradient-to-br', 'from-blue-500', 'to-blue-600', 'shadow-lg');
                iconBox.classList.add('bg-gray-400');
            }
        }
    });
}

// Update Navigation Buttons
function updateNavigation() {
    const tutorialKeys = getJsTutorialOrder();
    const currentIndex = tutorialKeys.indexOf(currentTutorial);
    
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === tutorialKeys.length - 1;
    
    // NEW: Progress update for JS tutorials
    const totalLessons = tutorialKeys.length;
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

// Navigation Functions
async function previousTutorial() {
    const tutorialKeys = getJsTutorialOrder();
    const currentIndex = tutorialKeys.indexOf(currentTutorial);
    if (currentIndex > 0) {
        await switchTutorial(tutorialKeys[currentIndex - 1]);
    }
}

async function nextTutorial() {
    const tutorialKeys = getJsTutorialOrder();
    const currentIndex = tutorialKeys.indexOf(currentTutorial);
    if (currentIndex < tutorialKeys.length - 1) {
        await switchTutorial(tutorialKeys[currentIndex + 1]);
    }
}

// Code Execution
function runCode() {
    const code = codeEditor.value;
    clearConsole();
    
    if (!code.trim()) {
        const message = currentLanguage === 'ka' ? 
            'ჯერ კოდი დაწერეთ, შემდეგ დააჭირეთ გაშვებას! 🚀' : 
            'Write some code first, then click Run! 🚀';
        addToConsole(message, 'info');
        return;
    }
    
    // Create a safe console for capturing output
    const capturedLogs = [];
    const originalConsole = console.log;
    
    try {
        // Override console.log to capture output
        console.log = (...args) => {
            capturedLogs.push(args.map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(' '));
        };
        
        // Execute the code
        eval(code);
        
        // Display captured output
        if (capturedLogs.length === 0) {
            const message = currentLanguage === 'ka' ? 
                'კოდი წარმატებით შესრულდა (გამოსატანი არ არის)' : 
                'Code executed successfully (no output)';
            addToConsole(message, 'info');
        } else {
            capturedLogs.forEach(log => addToConsole(log));
        }
        
    } catch (error) {
        const errorLabel = currentLanguage === 'ka' ? 'შეცდომა:' : 'Error:';
        addToConsole(`${errorLabel} ${error.message}`, 'error');
    } finally {
        // Restore original console.log
        console.log = originalConsole;
    }
}

// Code Management Functions
function resetCode() {
    codeEditor.value = translationService.t('ui.placeholder');
    clearConsole();
    const message = currentLanguage === 'ka' ? 
        'კოდი განულდა საწყის მაგალითზე' : 
        'Code reset to original example';
    addToConsole(message, 'info');
}

function copyCode() {
    if (!codeEditor.value.trim()) {
        const message = currentLanguage === 'ka' ? 
            'კოპირებისთვის კოდი არ არის! ჯერ რაღაც დაწერეთ 📝' : 
            'No code to copy! Write something first 📝';
        addToConsole(message, 'info');
        return;
    }
    
    codeEditor.select();
    navigator.clipboard.writeText(codeEditor.value).then(() => {
        const message = currentLanguage === 'ka' ? 
            'კოდი კლიპბორდში დაკოპირდა! 📋' : 
            'Code copied to clipboard! 📋';
        addToConsole(message, 'info');
    }).catch(() => {
        // Fallback for older browsers
        document.execCommand('copy');
        const message = currentLanguage === 'ka' ? 
            'კოდი კლიპბორდში დაკოპირდა! 📋' : 
            'Code copied to clipboard! 📋';
        addToConsole(message, 'info');
    });
}

function clearCode() {
    codeEditor.value = '';
    clearConsole();
}

function clearConsole() {
    consoleOutput.innerHTML = '';
}

// Console Output Functions
function addToConsole(message, type = 'normal') {
    const line = document.createElement('div');
    line.className = `console-line ${type}`;
    line.textContent = `> ${message}`;
    consoleOutput.appendChild(line);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
} 

// === Language dropdown behaviour ===
function setupLanguageDropdown() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    if (!languageBtn || !languageDropdown) return;

    // Toggle dropdown on button click
    languageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageDropdown.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!languageDropdown.contains(e.target) && !languageBtn.contains(e.target)) {
            languageDropdown.classList.add('hidden');
        }
    });

    // Ensure dropdown hides after a language is selected
    languageDropdown.querySelectorAll('.language-option').forEach(opt => {
        opt.addEventListener('click', () => languageDropdown.classList.add('hidden'));
    });
}