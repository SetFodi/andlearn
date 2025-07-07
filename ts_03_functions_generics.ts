/*
TypeScript Lesson 3: Functions and Generics
შესავალი TypeScript-ში: ფუნქციები და ჯენერიკები

This lesson covers function typing, generics, and advanced function patterns
ეს გაკვეთილი მოიცავს ფუნქციების ტიპიზაციას, ჯენერიკებს და მოწინავე ფუნქციური პატერნებს
*/

// === FUNCTION BASICS | ფუნქციების საფუძვლები ===

// Function declarations with parameter and return types
// ფუნქციების დეკლარაცია პარამეტრებისა და დაბრუნებული ტიპების მითითებით
function calculateArea(width: number, height: number): number {
    return width * height;
}

// Function expressions with arrow syntax
// ფუნქციური გამოხატვები arrow სინტაქსით
const multiplyNumbers = (a: number, b: number): number => {
    return a * b;
};

// Optional parameters (mark with ?)
// ოფციონალური პარამეტრები (მონიშნეთ ? ნიშნით)
function greetUser(name: string, greeting?: string): string {
    return `${greeting || 'Hello'}, ${name}!`;
}

console.log(greetUser("Ana")); // "Hello, Ana!"
console.log(greetUser("Giorgi", "Good morning")); // "Good morning, Giorgi!"

// Default parameters
// ნაგულისხმევი პარამეტრები
function createMessage(text: string, important: boolean = false): string {
    return important ? `⚠️ ${text} ⚠️` : text;
}

// Rest parameters
// დანარჩენი პარამეტრები
function sumNumbers(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumNumbers(1, 2, 3, 4, 5)); // 15

// === FUNCTION OVERLOADS | ფუნქციის გადატვირთვა ===

// Function overloads for different parameter combinations
// ფუნქციის გადატვირთვა სხვადასხვა პარამეტრების კომბინაციისთვის
function formatValue(value: string): string;
function formatValue(value: number): string;
function formatValue(value: boolean): string;
function formatValue(value: string | number | boolean): string {
    if (typeof value === 'string') {
        return `"${value}"`;
    } else if (typeof value === 'number') {
        return value.toFixed(2);
    } else {
        return value ? 'Yes' : 'No';
    }
}

console.log(formatValue("Hello")); // "Hello"
console.log(formatValue(42.567)); // "42.57"
console.log(formatValue(true)); // "Yes"

// === GENERICS INTRODUCTION | ჯენერიკების შესავალი ===

// Generic functions allow working with any type
// ჯენერიკული ფუნქციები საშუალებას გაძლევთ ნებისმიერ ტიპთან მუშაობაში

// Simple generic function
// მარტივი ჯენერიკული ფუნქცია
function identity<T>(arg: T): T {
    return arg;
}

const stringResult = identity<string>("hello");
const numberResult = identity<number>(42);
const booleanResult = identity<boolean>(true);

// Generic function with array
// ჯენერიკული ფუნქცია მასივთან
function getFirstElement<T>(array: T[]): T | undefined {
    return array.length > 0 ? array[0] : undefined;
}

const numbersArray = [1, 2, 3, 4, 5];
const names = ["Ana", "Giorgi", "Mariam"];

console.log(getFirstElement(numbersArray)); // 1
console.log(getFirstElement(names)); // "Ana"

// Generic function with multiple type parameters
// ჯენერიკული ფუნქცია მრავალი ტიპის პარამეტრით
function createPair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const pair1 = createPair<string, number>("age", 25);
const pair2 = createPair<boolean, string>(true, "success");

// === GENERIC CONSTRAINTS | ჯენერიკული შეზღუდვები ===

// Constraining generics to specific types
// ჯენერიკების შეზღუდვა კონკრეტულ ტიპებზე

interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(item: T): T {
    console.log(`Length: ${item.length}`);
    return item;
}

logLength("Hello World"); // Length: 11
logLength([1, 2, 3, 4]); // Length: 4
// logLength(42); // Error: number doesn't have 'length' property

// Generic with keyof constraint
// ჯენერიკული keyof შეზღუდვით
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const personObj = {
    name: "Nino",
    age: 28,
    city: "Tbilisi"
};

const uniquePersonName = getProperty(personObj, "name"); // string
const uniquePersonAge = getProperty(personObj, "age"); // number

// === UTILITY FUNCTIONS WITH GENERICS | ჯენერიკებით საყოველთაო ფუნქციები ===

// Generic array utility functions
// ჯენერიკული მასივის საყოველთაო ფუნქციები

function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
    return array.filter(predicate);
}

function mapArray<T, U>(array: T[], mapper: (item: T) => U): U[] {
    return array.map(mapper);
}

// Example usage
// გამოყენების მაგალითი
const nums = [1, 2, 3, 4, 5, 6];
const evenNums = filterArray(nums, num => num % 2 === 0);
const doubledNums = mapArray(nums, num => num * 2);

console.log(evenNums); // [2, 4, 6]
console.log(doubledNums); // [2, 4, 6, 8, 10, 12]

// Generic find function
// ჯენერიკული ძიების ფუნქცია
function findInArray<T>(array: T[], predicate: (item: T) => boolean): T | undefined {
    for (const item of array) {
        if (predicate(item)) {
            return item;
        }
    }
    return undefined;
}

interface CourseStudent {
    id: number;
    name: string;
    grade: number;
}

const courseStudents: CourseStudent[] = [
    { id: 1, name: "Luka", grade: 85 },
    { id: 2, name: "Mariam", grade: 92 },
    { id: 3, name: "Giorgi", grade: 78 }
];

const topStudent = findInArray(courseStudents, student => student.grade > 90);
console.log(topStudent); // { id: 2, name: "Mariam", grade: 92 }

// === PRACTICAL EXAMPLE: GENERIC DATA SERVICE | პრაქტიკული მაგალითი ===

// Generic data service for different entity types
// ჯენერიკული მონაცემთა სერვისი სხვადასხვა ობიექტის ტიპისთვის

class DataService<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return [...this.items];
    }

    findById<K extends keyof T>(id: T[K], idField: K): T | undefined {
        return this.items.find(item => item[idField] === id);
    }

    filter(predicate: (item: T) => boolean): T[] {
        return this.items.filter(predicate);
    }

    count(): number {
        return this.items.length;
    }
}

// Using the generic service with different types
// ჯენერიკული სერვისის გამოყენება სხვადასხვა ტიპებთან

const studentService = new DataService<CourseStudent>();
studentService.add({ id: 1, name: "Ana", grade: 88 });
studentService.add({ id: 2, name: "Vano", grade: 94 });

const allStudents = studentService.getAll();
const highGradeStudents = studentService.filter(student => student.grade > 90);

console.log(`Total students: ${studentService.count()}`);
console.log("High grade students:", highGradeStudents);

/*
🎯 PRACTICE TASKS | პრაქტიკული დავალებები:

1. Create a generic function `swap<T>` that takes two parameters and returns them swapped
   შექმენით ჯენერიკული ფუნქცია `swap<T>`, რომელიც იღებს ორ პარამეტრს და აბრუნებს მათ გაცვლილს

2. Write a generic function `getLastElement<T>` that returns the last element of an array
   დაწერეთ ჯენერიკული ფუნქცია `getLastElement<T>`, რომელიც აბრუნებს მასივის ბოლო ელემენტს

3. Create a generic interface `Repository<T>` with CRUD operations
   შექმენით ჯენერიკული ინტერფეისი `Repository<T>` CRUD ოპერაციებით

4. Implement a generic `Cache<T>` class with get/set/has methods
   განახორციელეთ ჯენერიკული `Cache<T>` კლასი get/set/has მეთოდებით

5. Write a function that merges two objects of different types using generics
   დაწერეთ ფუნქცია, რომელიც აერთიანებს ორ სხვადასხვა ტიპის ობიექტს ჯენერიკების გამოყენებით
*/ 