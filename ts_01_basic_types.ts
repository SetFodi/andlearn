// ===== TYPESCRIPT BASIC TYPES =====
// ქართული: TypeScript-ის ძირითადი ტიპები

// What is TypeScript? (რა არის TypeScript?)
// TypeScript is JavaScript with type safety - it helps catch errors before running code
// TypeScript არის JavaScript ტიპების უსაფრთხოებით - ეხმარება შეცდომების აღმოჩენაში კოდის გაშვებამდე

// 1. Basic Types (ძირითადი ტიპები)

// String type (სტრინგის ტიპი)
let studentName: string = "ლუკა ფარტენაძე";
let courseName: string = "TypeScript Basics";

console.log(`Student: ${studentName} is learning ${courseName}`);

// Number type (რიცხვის ტიპი)
let age: number = 20;
let score: number = 85.5;
let phoneNumber: number = 555123456;

console.log(`Age: ${age}, Score: ${score}%`);

// Boolean type (ბულის ტიპი)
let isStudent: boolean = true;
let hasCompleted: boolean = false;
let isOnline: boolean = true;

if (isStudent && isOnline) {
    console.log("Student is ready to learn!");
}

// 2. Arrays (მასივები)

// Array of strings
let courses: string[] = ["JavaScript", "React", "TypeScript"];
let languages: Array<string> = ["Georgian", "English", "Russian"];

console.log("Available courses:", courses);
console.log("Spoken languages:", languages);

// Array of numbers
let grades: number[] = [85, 92, 78, 96];
let years: Array<number> = [2020, 2021, 2022, 2023, 2024];

let averageGrade = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log(`Average grade: ${averageGrade.toFixed(1)}`);

// Mixed type arrays (later we'll learn about union types)
// For now, let's use 'any' type (not recommended in real projects)
let mixedData: any[] = ["Luka", 20, true, "Student"];

// 3. Object Types (ობიექტების ტიპები)

// Inline object type
let student: { name: string; age: number; isActive: boolean } = {
    name: "ანა გელაშვილი",
    age: 19,
    isActive: true
};

console.log("Student info:", student);

// Better way: using interfaces (we'll cover this in detail later)
interface Course {
    title: string;
    instructor: string;
    duration: number; // in hours
    isCompleted: boolean;
}

let jsCourse: Course = {
    title: "JavaScript Fundamentals",
    instructor: "Luka Partenadze",
    duration: 40,
    isCompleted: false
};

console.log("Course details:", jsCourse);

// 4. Function Types (ფუნქციების ტიპები)

// Function with typed parameters and return type
function calculateTotal(price: number, tax: number): number {
    return price + (price * tax);
}

let total = calculateTotal(100, 0.18); // 18% tax
console.log(`Total with tax: ${total} GEL`);

// Function that returns string
function createGreeting(name: string, language: string): string {
    if (language === "ka") {
        return `გამარჯობა, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(createGreeting("ლუკა", "ka"));
console.log(createGreeting("Ana", "en"));

// Function that returns nothing (void)
function logMessage(message: string): void {
    console.log(`[LOG]: ${message}`);
}

logMessage("TypeScript is awesome!");

// Arrow functions with types
const multiply = (a: number, b: number): number => a * b;
const isAdult = (age: number): boolean => age >= 18;

console.log("5 × 3 =", multiply(5, 3));
console.log("Is 20 years old adult?", isAdult(20));

// 5. Type Inference (ტიპის ავტომატური განსაზღვრა)

// TypeScript can automatically figure out types
let autoString = "TypeScript is smart!"; // TypeScript knows this is string
let autoNumber = 42; // TypeScript knows this is number
let autoBool = true; // TypeScript knows this is boolean

// autoString = 123; // Error! Can't assign number to string

console.log("Auto-inferred types work correctly!");

// 6. Union Types (გაერთიანებული ტიპები)

// Variable can be multiple types
let id: string | number;
id = "USER123";
console.log("String ID:", id);

id = 12345;
console.log("Number ID:", id);

// Function with union type parameter
function displayId(id: string | number): void {
    if (typeof id === "string") {
        console.log(`String ID: ${id.toUpperCase()}`);
    } else {
        console.log(`Number ID: ${id}`);
    }
}

displayId("abc123");
displayId(456789);

// 7. Literal Types (ლიტერალური ტიპები)

// Only specific values allowed
let theme: "light" | "dark" | "auto";
theme = "dark";
// theme = "blue"; // Error! "blue" is not allowed

let direction: "north" | "south" | "east" | "west";
direction = "north";

function setUserTheme(selectedTheme: "light" | "dark" | "auto"): void {
    console.log(`Theme set to: ${selectedTheme}`);
}

setUserTheme("light");

// 8. Optional Properties (არასავალდებულო თვისებები)

interface UserProfile {
    name: string;
    age: number;
    email?: string; // Optional (შეიძლება არ იყოს)
    phone?: string; // Optional
}

let user1: UserProfile = {
    name: "გიორგი მელაძე",
    age: 25,
    email: "giorgi@example.com"
    // phone is optional, so we can skip it
};

let user2: UserProfile = {
    name: "ნინო წითლაძე",
    age: 22
    // both email and phone are optional
};

console.log("User 1:", user1);
console.log("User 2:", user2);

// 9. Type Aliases (ტიპის სინონიმები)

// Create custom type names
type StudentID = string | number;
type Grade = "A" | "B" | "C" | "D" | "F";
type Course = "JavaScript" | "React" | "TypeScript" | "Python";

function assignGrade(studentId: StudentID, course: Course, grade: Grade): void {
    console.log(`Student ${studentId} received grade ${grade} in ${course}`);
}

assignGrade("STU123", "TypeScript", "A");
assignGrade(456, "JavaScript", "B");

// 10. Practical Example: Student Management System

interface Student {
    id: string | number;
    firstName: string;
    lastName: string;
    age: number;
    courses: string[];
    email?: string;
    isActive: boolean;
}

function createStudent(
    id: string | number,
    firstName: string,
    lastName: string,
    age: number
): Student {
    return {
        id: id,
        firstName: firstName,
        lastName: lastName,
        age: age,
        courses: [],
        isActive: true
    };
}

function enrollInCourse(student: Student, courseName: string): void {
    if (!student.courses.includes(courseName)) {
        student.courses.push(courseName);
        console.log(`${student.firstName} enrolled in ${courseName}`);
    } else {
        console.log(`${student.firstName} is already enrolled in ${courseName}`);
    }
}

function getStudentInfo(student: Student): string {
    return `${student.firstName} ${student.lastName} (ID: ${student.id})
    Age: ${student.age}
    Courses: ${student.courses.join(", ")}
    Status: ${student.isActive ? "Active" : "Inactive"}`;
}

// Using the system
let newStudent = createStudent("STU001", "ლუკა", "ფარტენაძე", 20);
newStudent.email = "luka@andlearn.com";

enrollInCourse(newStudent, "JavaScript");
enrollInCourse(newStudent, "TypeScript");
enrollInCourse(newStudent, "React");

console.log("=== STUDENT INFO ===");
console.log(getStudentInfo(newStudent));

// ===== PRACTICE TASKS =====

// Task 1: Create a book interface and functions
interface Book {
    title: string;
    author: string;
    pages: number;
    isRead: boolean;
    genre?: string;
}

function createBook(title: string, author: string, pages: number): Book {
    return {
        title: title,
        author: author,
        pages: pages,
        isRead: false
    };
}

function markAsRead(book: Book): void {
    book.isRead = true;
    console.log(`"${book.title}" marked as read!`);
}

// Test the book system
let myBook = createBook("JavaScript Guide", "Luka Partenadze", 300);
myBook.genre = "Programming";
markAsRead(myBook);
console.log("Book:", myBook);

// Task 2: Calculator with typed functions
function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}

type Operation = "add" | "subtract" | "multiply" | "divide";

function calculate(a: number, b: number, operation: Operation): number {
    switch (operation) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return a * b;
        case "divide":
            return divide(a, b);
        default:
            throw new Error("Unknown operation");
    }
}

console.log("10 + 5 =", calculate(10, 5, "add"));
console.log("10 - 5 =", calculate(10, 5, "subtract"));
console.log("10 × 5 =", calculate(10, 5, "multiply"));
console.log("10 ÷ 5 =", calculate(10, 5, "divide"));

// Key Benefits of TypeScript:
// 1. Catches errors at compile time, not runtime
// 2. Better IDE support (autocomplete, refactoring)
// 3. Makes code more readable and maintainable
// 4. Helps with team collaboration
// 5. Gradual adoption - can use with existing JavaScript

// TypeScript-ის ძირითადი უპირატესობები:
// 1. შეცდომების აღმოჩენა კომპილაციის დროს
// 2. უკეთესი IDE მხარდაჭერა
// 3. კოდის წაკითხვადობა და მოვლა
// 4. გუნდური მუშაობის გაუმჯობესება
// 5. თანდათანობითი დანერგვა 