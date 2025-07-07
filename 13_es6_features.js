// ===== ES6+ FEATURES =====
// ქართული: ES6+ ფუნქციები

// 1. Template Literals (ტემპლეიტის ლიტერალები)
// Instead of: "Hello " + name + "!"
let name = "Luka";
let age = 20;

// Using template literals with backticks
let greeting = `Hello ${name}! You are ${age} years old.`;
console.log(greeting);

// Multi-line strings (მრავალხაზიანი სტრინგები)
let message = `
    Welcome to AndLearn!
    Start learning programming today.
    It's completely free!
`;
console.log(message);

// 2. Destructuring (დესტრუქტურირება)

// Array destructuring (მასივის დესტრუქტურირება)
let colors = ["red", "green", "blue"];
let [first, second, third] = colors;
console.log(first);  // "red"
console.log(second); // "green"

// Object destructuring (ობიექტის დესტრუქტურირება)
let person = {
    name: "Luka",
    age: 20,
    city: "Tbilisi"
};

let {name: personName, age: personAge, city} = person;
console.log(personName); // "Luka"
console.log(personAge);  // 20
console.log(city);       // "Tbilisi"

// 3. Spread Operator (სპრედ ოპერატორი)

// Copying arrays (მასივების კოპირება)
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
console.log(copiedArray); // [1, 2, 3]

// Combining arrays (მასივების გაერთიანება)
let fruits = ["apple", "banana"];
let vegetables = ["carrot", "tomato"];
let food = [...fruits, ...vegetables];
console.log(food); // ["apple", "banana", "carrot", "tomato"]

// Copying objects (ობიექტების კოპირება)
let user = {name: "Luka", age: 20};
let updatedUser = {...user, city: "Tbilisi"};
console.log(updatedUser); // {name: "Luka", age: 20, city: "Tbilisi"}

// 4. Arrow Functions (ისრის ფუნქციები)
// We already covered these, but here's a reminder:

// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;
console.log(addArrow(5, 3)); // 8

// ===== PRACTICE TASKS =====

// Task 1: Use template literals to create a profile message
let studentName = "ანა";
let studentAge = 18;
let course = "JavaScript";

let profileMessage = `სტუდენტი ${studentName}, ${studentAge} წლის, სწავლობს ${course}-ს`;
console.log(profileMessage);

// Task 2: Destructure this array to get first and last items
let numbers = [10, 20, 30, 40, 50];
let [firstNum, , , , lastNum] = numbers;
console.log(`First: ${firstNum}, Last: ${lastNum}`);

// Task 3: Combine these arrays using spread operator
let evenNumbers = [2, 4, 6];
let oddNumbers = [1, 3, 5];
let allNumbers = [...oddNumbers, ...evenNumbers].sort();
console.log(allNumbers);

// Task 4: Destructure this object
let book = {
    title: "JavaScript Guide",
    author: "Luka Partenadze",
    year: 2024,
    pages: 300
};

let {title, author, ...otherInfo} = book;
console.log(`Book: ${title} by ${author}`);
console.log(otherInfo); // {year: 2024, pages: 300} 