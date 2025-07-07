// ===== MODULES, IMPORT & EXPORT =====
// ქართული: მოდულები, იმპორტი და ექსპორტი

// What are modules? (რა არის მოდულები?)
// Modules help us organize code into separate files and reuse functionality
// მოდულები გვეხმარება კოდის ორგანიზებაში ცალკე ფაილებში და ფუნქციონალობის ხელახალ გამოყენებაში

// ===== BASIC EXPORT EXAMPLES =====

// 1. Named Exports (სახელდებული ექსპორტები)

// mathUtils.js (example file)
// ეს იქნება ცალკე ფაილი:

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}

export const PI = 3.14159;
export const E = 2.71828;

// 2. Default Export (ნაგულისხმევი ექსპორტი)

// calculator.js (example file)
class Calculator {
    constructor() {
        this.result = 0;
    }
    
    add(num) {
        this.result += num;
        return this;
    }
    
    multiply(num) {
        this.result *= num;
        return this;
    }
    
    getResult() {
        return this.result;
    }
    
    reset() {
        this.result = 0;
        return this;
    }
}

// Note: In real files, each would have only ONE default export per file
// export default Calculator;

// 3. Mixed Exports (შერეული ექსპორტები)

// userUtils.js (example file)
export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`.trim();
}

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.id = Math.random().toString(36).substr(2, 9);
    }
    
    getInfo() {
        return `User: ${this.name} (${this.email})`;
    }
}

// In real userUtils.js file: export default User;

// ===== IMPORT EXAMPLES =====

// 4. How to Import (როგორ ვაიმპორტოთ)

// Import named exports
// import { add, subtract, PI } from './mathUtils.js';

// Import default export
// import Calculator from './calculator.js';

// Import everything as namespace
// import * as MathUtils from './mathUtils.js';

// Import default + named exports
// import User, { validateEmail, formatName } from './userUtils.js';

// Import with different names (alias)
// import { add as addNumbers, subtract as subtractNumbers } from './mathUtils.js';

// ===== PRACTICAL EXAMPLES =====

// 5. Creating a Simple Library System

// book.js (example module)
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }
    
    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return true;
        }
        return false;
    }
    
    return() {
        this.isAvailable = true;
    }
    
    getInfo() {
        const status = this.isAvailable ? "Available" : "Borrowed";
        return `"${this.title}" by ${this.author} - ${status}`;
    }
}

// In real book.js file: export default Book;

// library.js (example module)
// import Book from './book.js';

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    
    addBook(title, author, isbn) {
        const book = new Book(title, author, isbn);
        this.books.push(book);
        console.log(`Added "${title}" to the library`);
        return book;
    }
    
    findBook(title) {
        return this.books.find(book => 
            book.title.toLowerCase().includes(title.toLowerCase())
        );
    }
    
    borrowBook(title) {
        const book = this.findBook(title);
        if (book && book.borrow()) {
            console.log(`"${book.title}" has been borrowed`);
            return true;
        } else {
            console.log(`"${title}" is not available or not found`);
            return false;
        }
    }
    
    returnBook(title) {
        const book = this.findBook(title);
        if (book && !book.isAvailable) {
            book.return();
            console.log(`"${book.title}" has been returned`);
            return true;
        } else {
            console.log(`"${title}" was not borrowed or not found`);
            return false;
        }
    }
    
    listAvailableBooks() {
        const available = this.books.filter(book => book.isAvailable);
        return available.map(book => book.getInfo());
    }
}

// In real library.js file: export default Library;

// 6. Utility Functions Module

// stringUtils.js (example module)
export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

export function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

export function countWords(str) {
    return str.trim().split(/\s+/).filter(word => word.length > 0).length;
}

export function truncate(str, maxLength) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength - 3) + '...';
}

// dateUtils.js (example module)
export function formatDate(date, format = 'YYYY-MM-DD') {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    switch (format) {
        case 'DD/MM/YYYY':
            return `${day}/${month}/${year}`;
        case 'MM/DD/YYYY':
            return `${month}/${day}/${year}`;
        default:
            return `${year}-${month}-${day}`;
    }
}

export function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export function isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday = 0, Saturday = 6
}

export const DAYS_OF_WEEK = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 
    'Thursday', 'Friday', 'Saturday'
];

// ===== USING THE MODULES =====

// main.js (example usage)
// import Library from './library.js';
// import { capitalize, isPalindrome, countWords } from './stringUtils.js';
// import { formatDate, addDays, DAYS_OF_WEEK } from './dateUtils.js';

console.log("=== MODULE EXAMPLES ===");

// Using Library
const myLibrary = new Library("City Library");
myLibrary.addBook("JavaScript Guide", "Luka Partenadze", "123-456");
myLibrary.addBook("Python Basics", "Ana Gelashvili", "789-012");

myLibrary.borrowBook("JavaScript");
console.log("Available books:", myLibrary.listAvailableBooks());

// Using String Utils
console.log(capitalize("hello world")); // "Hello world"
console.log(isPalindrome("racecar"));   // true
console.log(countWords("Hello beautiful world")); // 3

// Using Date Utils
const today = new Date();
console.log(formatDate(today, 'DD/MM/YYYY'));
console.log(`Today is ${DAYS_OF_WEEK[today.getDay()]}`);

// ===== BEST PRACTICES =====

// 1. Keep modules focused (one responsibility)
// 2. Use clear, descriptive names
// 3. Export only what's needed
// 4. Use default exports for main functionality
// 5. Use named exports for utilities

// ===== PRACTICE TASKS =====

// Task 1: Weather Utils Module
export function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

export function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

export function getWeatherDescription(temperature) {
    if (temperature < 0) return "Freezing";
    if (temperature < 15) return "Cold";
    if (temperature < 25) return "Mild";
    if (temperature < 35) return "Warm";
    return "Hot";
}

// Task 2: Array Utils Module
export function removeDuplicates(arr) {
    return [...new Set(arr)];
}

export function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function chunk(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

export function shuffle(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Test the utilities
console.log("=== TESTING UTILITIES ===");
console.log(`25°C = ${celsiusToFahrenheit(25)}°F`);
console.log(`77°F = ${fahrenheitToCelsius(77).toFixed(1)}°C`);
console.log(`Weather at 20°C: ${getWeatherDescription(20)}`);

const numbers = [1, 2, 2, 3, 3, 3, 4, 5];
console.log("Original:", numbers);
console.log("No duplicates:", removeDuplicates(numbers));
console.log("Random element:", getRandomElement(numbers));
console.log("Chunks of 3:", chunk(numbers, 3));
console.log("Shuffled:", shuffle(numbers));

// Note: In real applications, you would separate these into different files!
// ნოტა: რეალურ აპლიკაციებში ესენი ცალკე ფაილებში იქნება განთავსებული! 