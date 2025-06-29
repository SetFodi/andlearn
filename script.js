// Tutorial Data Structure
const tutorials = {
    variables: {
        title: "Variables in JavaScript",
        description: "Learn the fundamentals of JavaScript variables, data types, and basic syntax.",
        content: {
            sections: [
                {
                    title: "📦 What are Variables?",
                    content: `
                        <h3>Variables are containers for storing data values</h3>
                        <p>In JavaScript, you can declare variables using <code>let</code>, <code>const</code>, or <code>var</code>.</p>
                        <ul>
                            <li><strong>let</strong> - for variables that can change</li>
                            <li><strong>const</strong> - for constants that don't change</li>
                            <li><strong>var</strong> - older way (avoid in modern JavaScript)</li>
                        </ul>
                    `
                },
                {
                    title: "🔤 Data Types",
                    content: `
                        <h3>JavaScript has several data types:</h3>
                        <ul>
                            <li><strong>String</strong> - Text data: <code>"Hello World"</code></li>
                            <li><strong>Number</strong> - Numeric data: <code>42</code>, <code>3.14</code></li>
                            <li><strong>Boolean</strong> - True/False: <code>true</code>, <code>false</code></li>
                            <li><strong>Array</strong> - Lists: <code>["item1", "item2"]</code></li>
                            <li><strong>Object</strong> - Key-value pairs: <code>{name: "John"}</code></li>
                        </ul>
                    `
                },
                {
                    title: "💡 Example",
                    content: `
                        <h3>Let's see variables in action:</h3>
                        <pre><code class="language-javascript">let name = "Luka";
let age = 20;
let isDeveloper = true;

let hobbies = ["Football", "Gaming", "Coding"];
let profile = {
    name: "Luka",
    age: 20,
    isDeveloper: true
};

console.log(profile);</code></pre>
                        <p>Try modifying these variables in the code editor!</p>
                    `
                }
            ]
        },
        startingCode: `let name = "Luka";
let age = 20;
let isDeveloper = true;

let hobbies = ["Football", "Gaming", "Coding"];
let profile = {
    name: "Luka",
    age: 20,
    isDeveloper: true
};

console.log(profile);`,
        practice: {
            title: "Try This",
            description: "Practice creating your own variables with different data types.",
            task: "1. Create a variable for your name\\n2. Create a variable for your age\\n3. Create an array with your hobbies\\n4. Create an object that combines all this information\\n5. Try logging different parts to see what happens"
        }
    },
    
    functions: {
        title: "Functions in JavaScript",
        description: "Master JavaScript functions - the building blocks of interactive programs.",
        content: {
            sections: [
                {
                    title: "⚡ What are Functions?",
                    content: `
                        <h3>Functions are reusable blocks of code</h3>
                        <p>Functions allow you to:</p>
                        <ul>
                            <li>Write code once, use it many times</li>
                            <li>Break down complex problems into smaller parts</li>
                            <li>Make your code more organized and readable</li>
                        </ul>
                    `
                },
                {
                    title: "📝 Function Syntax",
                    content: `
                        <h3>Two main ways to create functions:</h3>
                        <h4>Function Declaration:</h4>
                        <pre><code class="language-javascript">function greet(name) {
    return "Hello " + name;
}</code></pre>
                        <h4>Arrow Function:</h4>
                        <pre><code class="language-javascript">const greet = (name) => "Hello " + name;</code></pre>
                        <p>Both do the same thing, but arrow functions are more concise!</p>
                    `
                },
                {
                    title: "💡 Example",
                    content: `
                        <h3>Let's see functions in action:</h3>
                        <pre><code class="language-javascript">function greet(name) {
    return "Hello " + name;
}

const squareNumber = (number) => number * number;

const oddOrEven = (num) => num % 2 === 0 ? "Even" : "Odd";

console.log(greet("Luka"));
console.log(squareNumber(5));
console.log(oddOrEven(5));</code></pre>
                    `
                }
            ]
        },
        startingCode: `function greet(name) {
    return "Hello " + name;
}

console.log(greet("Luka"));

const squareNumber = (number) => number * number;
console.log(squareNumber(5));

const oddOrEven = (num) => num % 2 === 0 ? "Even" : "Odd";
console.log(oddOrEven(5));`,
        practice: {
            title: "Try This",
            description: "Create your own functions for basic operations.",
            task: "1. Create an 'add' function that takes two numbers and returns their sum\\n2. Create a 'multiply' function using arrow syntax\\n3. Create a function that checks if a number is positive\\n4. Test all your functions with different numbers\\n5. Try creating a function that takes your name and returns a greeting"
        }
    },

    controlflow: {
        title: "Control Flow",
        description: "Learn to control program flow with loops and conditionals.",
        content: {
            sections: [
                {
                    title: "🔄 Loops - Repeating Actions",
                    content: `
                        <h3>Loops let you repeat code multiple times</h3>
                        <h4>For Loop - when you know how many times:</h4>
                        <pre><code class="language-javascript">for (let i = 0; i <= 5; i++) {
    console.log(i);
}</code></pre>
                        <h4>While Loop - when you have a condition:</h4>
                        <pre><code class="language-javascript">let i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}</code></pre>
                    `
                },
                {
                    title: "🤔 Conditionals - Making Decisions",
                    content: `
                        <h3>Conditionals let your program make decisions</h3>
                        <pre><code class="language-javascript">let number = 5;
if (number > 0) {
    console.log("Number is positive");
} else if (number < 0) {
    console.log("Number is negative");
} else {
    console.log("Number is zero");
}</code></pre>
                        <p>Use <code>if</code>, <code>else if</code>, and <code>else</code> to handle different scenarios.</p>
                    `
                },
                {
                    title: "💡 Example",
                    content: `
                        <h3>Combining loops with arrays:</h3>
                        <pre><code class="language-javascript">let numbers = [1, 2, 3, 4, 5, 6];

// Loop through array
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Calculate sum
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum:", sum);</code></pre>
                    `
                }
            ]
        },
        startingCode: `// For loop example
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

// Conditional example
let number = 5;
if (number > 0) {
    console.log("Number is positive");
} else if (number < 0) {
    console.log("Number is negative");
} else {
    console.log("Number is zero");
}

// Array loop example
let numbers = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}`,
        practice: {
            title: "Try This",
            description: "Practice with loops and conditionals.",
            task: "1. Create an array of your favorite numbers\\n2. Use a loop to find the largest number in your array\\n3. Count how many even and odd numbers you have\\n4. Try creating a loop that prints only numbers greater than 10\\n5. Experiment with different conditions and see what happens"
        }
    },

    "arrays-objects": {
        title: "Arrays & Objects",
        description: "Master data structures - arrays for lists and objects for complex data.",
        content: {
            sections: [
                {
                    title: "📋 Array Methods",
                    content: `
                        <h3>Arrays have powerful built-in methods:</h3>
                        <ul>
                            <li><code>push()</code> - adds item to end</li>
                            <li><code>pop()</code> - removes item from end</li>
                            <li><code>shift()</code> - removes item from beginning</li>
                            <li><code>unshift()</code> - adds item to beginning</li>
                        </ul>
                        <pre><code class="language-javascript">let hobbies = ["Football", "Gaming", "Coding"];
hobbies.push("Reading");    // adds "Reading" to end
hobbies.pop();              // removes last item
hobbies.shift();            // removes first item
hobbies.unshift("Reading"); // adds "Reading" to beginning</code></pre>
                    `
                },
                {
                    title: "🗂️ Object Manipulation",
                    content: `
                        <h3>Objects store key-value pairs:</h3>
                        <pre><code class="language-javascript">let profile = {
    name: "Luka",
    age: 20,
    isDeveloper: true
};

// Access properties
console.log(profile.name);

// Modify properties
profile.age = 21;

// Add new properties
profile.city = "New York";

// Delete properties
delete profile.isDeveloper;</code></pre>
                    `
                },
                {
                    title: "💡 Example",
                    content: `
                        <h3>Working with complex data:</h3>
                        <pre><code class="language-javascript">let profile = {
    name: "Luka",
    age: 20,
    hobbies: ["Football", "Gaming", "Coding"]
};

// Add hobby to existing array
profile.hobbies.push("Reading");

// Create nested objects
profile.contact = {
    email: "luka@example.com",
    phone: "123-456-7890"
};

console.log(profile);</code></pre>
                    `
                }
            ]
        },
        startingCode: `let hobbies = ["Football", "Gaming", "Coding"];
console.log("Original:", hobbies);

hobbies.push("Reading");
console.log("After push:", hobbies);

hobbies.pop();
console.log("After pop:", hobbies);

let profile = {
    name: "Luka",
    age: 20,
    isDeveloper: true
};

console.log("Profile:", profile);
profile.age = 21;
console.log("Updated age:", profile.age);`,
        practice: {
            title: "Try This",
            description: "Practice working with arrays and objects.",
            task: "1. Create a student object with name, age, and grades array\\n2. Practice adding and removing grades from the array\\n3. Try adding new properties to your student object\\n4. Create an array of different student objects\\n5. Experiment with accessing nested data"
        }
    },

    advanced: {
        title: "Advanced Functions",
        description: "Combine functions with arrays and objects for powerful applications.",
        content: {
            sections: [
                {
                    title: "🔧 Functions with Arrays",
                    content: `
                        <h3>Functions can modify and work with arrays:</h3>
                        <pre><code class="language-javascript">function addHobby(hobbies, newHobby) {
    hobbies.push(newHobby);
    return hobbies;
}

let myHobbies = ["Football", "Gaming"];
console.log(addHobby(myHobbies, "Coding"));</code></pre>
                        <p>Functions can take arrays as parameters and modify them.</p>
                    `
                },
                {
                    title: "🏗️ Functions with Objects",
                    content: `
                        <h3>Functions can update object properties:</h3>
                        <pre><code class="language-javascript">function updateAge(profile, newAge) {
    profile.age = newAge;
    return profile;
}

function addHobbyToProfile(profile, newHobby) {
    profile.hobbies.push(newHobby);
    return profile;
}

let user = {
    name: "Luka",
    age: 20,
    hobbies: ["Football", "Gaming"]
};

updateAge(user, 21);
addHobbyToProfile(user, "Coding");</code></pre>
                    `
                },
                {
                    title: "💡 Example",
                    content: `
                        <h3>Putting it all together:</h3>
                        <pre><code class="language-javascript">// Function to create a user
function createUser(name, age) {
    return {
        name: name,
        age: age,
        hobbies: [],
        addHobby: function(hobby) {
            this.hobbies.push(hobby);
        }
    };
}

let user = createUser("Luka", 20);
user.addHobby("Coding");
console.log(user);</code></pre>
                    `
                }
            ]
        },
        startingCode: `function addHobby(hobbies, newHobby) {
    hobbies.push(newHobby);
    return hobbies;
}

let hobbies = ["Football", "Gaming"];
console.log(addHobby(hobbies, "Coding"));

function updateAge(profile, newAge) {
    profile.age = newAge;
    return profile;
}

let profile = {
    name: "Luka",
    age: 20
};

console.log(updateAge(profile, 21));`,
        practice: {
            title: "Try This",
            description: "Build functions that work with data structures.",
            task: "1. Create a function that adds books to a library array\\n2. Create a function that finds a book by title\\n3. Create a function that updates book information\\n4. Try building a simple calculator using functions\\n5. Experiment with functions that return other functions"
        }
    }
};

// Application State
let currentTutorial = 'variables';

// DOM Elements
const tutorialItems = document.querySelectorAll('.tutorial-item');
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
document.addEventListener('DOMContentLoaded', function() {
    loadTutorial(currentTutorial);
    setupEventListeners();
    
    // Welcome message
    addToConsole('Welcome to JavaScript Mastery! 🎉', 'info');
    addToConsole('Click "Run Code" to execute your JavaScript code.', 'info');
});

// Setup Event Listeners
function setupEventListeners() {
    // Tutorial navigation
    tutorialItems.forEach(item => {
        item.addEventListener('click', () => {
            const tutorial = item.dataset.tutorial;
            switchTutorial(tutorial);
        });
    });

    // Code execution
    runCodeBtn.addEventListener('click', runCode);
    resetBtn.addEventListener('click', resetCode);
    copyCodeBtn.addEventListener('click', copyCode);
    clearCodeBtn.addEventListener('click', clearCode);
    clearConsoleBtn.addEventListener('click', clearConsole);

    // Navigation buttons
    prevBtn.addEventListener('click', previousTutorial);
    nextBtn.addEventListener('click', nextTutorial);

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
function loadTutorial(tutorialKey) {
    const tutorial = tutorials[tutorialKey];
    if (!tutorial) return;

    currentTutorial = tutorialKey;

    // Update header
    tutorialTitle.textContent = tutorial.title;
    tutorialDescription.textContent = tutorial.description;

    // Load tutorial content
    let contentHTML = '';
    tutorial.content.sections.forEach(section => {
        contentHTML += `
            <div class="content-section">
                <h2>${section.title}</h2>
                ${section.content}
            </div>
        `;
    });
    tutorialContent.innerHTML = contentHTML;

    // Load starting code
    codeEditor.value = tutorial.startingCode;

    // Load practice task
    practiceContent.innerHTML = `
        <h4>${tutorial.practice.title}</h4>
        <p class="practice-description">${tutorial.practice.description}</p>
        <div class="practice-task">
            <h5>📝 Your Task:</h5>
            <pre>${tutorial.practice.task}</pre>
        </div>
        <p style="color: #64748b; font-style: italic; margin-top: 1rem;">
            💡 Remember: There's no right or wrong way - just experiment and have fun learning!
        </p>
    `;

    // Update navigation
    updateNavigation();
    updateActiveItem();

    // Highlight code blocks
    setTimeout(() => {
        if (window.Prism) {
            Prism.highlightAll();
        }
    }, 100);
}

// Switch Tutorial
function switchTutorial(tutorialKey) {
    loadTutorial(tutorialKey);
    clearConsole();
    addToConsole(`Switched to: ${tutorials[tutorialKey].title}`, 'info');
}

// Update Active Navigation Item
function updateActiveItem() {
    tutorialItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.tutorial === currentTutorial) {
            item.classList.add('active');
        }
    });
}

// Update Navigation Buttons
function updateNavigation() {
    const tutorialKeys = Object.keys(tutorials);
    const currentIndex = tutorialKeys.indexOf(currentTutorial);
    
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === tutorialKeys.length - 1;
}

// Navigation Functions
function previousTutorial() {
    const tutorialKeys = Object.keys(tutorials);
    const currentIndex = tutorialKeys.indexOf(currentTutorial);
    if (currentIndex > 0) {
        switchTutorial(tutorialKeys[currentIndex - 1]);
    }
}

function nextTutorial() {
    const tutorialKeys = Object.keys(tutorials);
    const currentIndex = tutorialKeys.indexOf(currentTutorial);
    if (currentIndex < tutorialKeys.length - 1) {
        switchTutorial(tutorialKeys[currentIndex + 1]);
    }
}

// Code Execution
function runCode() {
    const code = codeEditor.value;
    clearConsole();
    
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
            addToConsole('Code executed successfully (no output)', 'info');
        } else {
            capturedLogs.forEach(log => addToConsole(log));
        }
        
    } catch (error) {
        addToConsole(`Error: ${error.message}`, 'error');
    } finally {
        // Restore original console.log
        console.log = originalConsole;
    }
}

// Code Management Functions
function resetCode() {
    const tutorial = tutorials[currentTutorial];
    codeEditor.value = tutorial.startingCode;
    clearConsole();
    addToConsole('Code reset to original example', 'info');
}

function copyCode() {
    codeEditor.select();
    navigator.clipboard.writeText(codeEditor.value).then(() => {
        addToConsole('Code copied to clipboard! 📋', 'info');
    }).catch(() => {
        // Fallback for older browsers
        document.execCommand('copy');
        addToConsole('Code copied to clipboard! 📋', 'info');
    });
}

function clearCode() {
    codeEditor.value = '';
    addToConsole('Code editor cleared', 'info');
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