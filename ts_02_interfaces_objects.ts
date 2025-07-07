// ===== TYPESCRIPT INTERFACES & OBJECTS =====
// ქართული: TypeScript ინტერფეისები და ობიექტები

// What are Interfaces? (რა არის ინტერფეისები?)
// Interfaces define the structure/shape of objects
// ინტერფეისები განსაზღვრავს ობიექტების სტრუქტურას/ფორმას

// 1. Basic Interface (ძირითადი ინტერფეისი)

interface Person {
    name: string;
    age: number;
    email: string;
}

// Using the interface
let student: Person = {
    name: "ლუკა ფარტენაძე",
    age: 20,
    email: "luka@andlearn.com"
};

console.log("Student:", student);

// Function that accepts Person interface
function introducePerson(person: Person): string {
    return `Hi, I'm ${person.name}, I'm ${person.age} years old. Contact me at ${person.email}`;
}

console.log(introducePerson(student));

// 2. Optional Properties (არასავალდებულო თვისებები)

interface User {
    id: number;
    username: string;
    email: string;
    phone?: string; // Optional
    avatar?: string; // Optional
    isActive?: boolean; // Optional (default behavior)
}

let user1: User = {
    id: 1,
    username: "luka_dev",
    email: "luka@example.com",
    phone: "555123456"
    // avatar and isActive are optional, so we can skip them
};

let user2: User = {
    id: 2,
    username: "ana_designer",
    email: "ana@example.com"
    // all optional properties skipped
};

console.log("User 1:", user1);
console.log("User 2:", user2);

// 3. Readonly Properties (მხოლოდ წაკითხვადი თვისებები)

interface Config {
    readonly apiUrl: string;
    readonly version: string;
    timeout: number; // This can be changed
}

let appConfig: Config = {
    apiUrl: "https://api.andlearn.com",
    version: "1.0.0",
    timeout: 5000
};

appConfig.timeout = 10000; // ✅ OK - timeout is not readonly
// appConfig.apiUrl = "new-url"; // ❌ Error! apiUrl is readonly

console.log("App config:", appConfig);

// 4. Method Signatures (მეთოდების ხელმოწერები)

interface Calculator {
    result: number;
    add(value: number): void;
    subtract(value: number): void;
    multiply(value: number): void;
    divide(value: number): void;
    reset(): void;
    getResult(): number;
}

// Implementing the interface
class BasicCalculator implements Calculator {
    result: number = 0;

    add(value: number): void {
        this.result += value;
    }

    subtract(value: number): void {
        this.result -= value;
    }

    multiply(value: number): void {
        this.result *= value;
    }

    divide(value: number): void {
        if (value === 0) {
            throw new Error("Cannot divide by zero!");
        }
        this.result /= value;
    }

    reset(): void {
        this.result = 0;
    }

    getResult(): number {
        return this.result;
    }
}

let calc = new BasicCalculator();
calc.add(10);
calc.multiply(2);
calc.subtract(5);
console.log("Calculator result:", calc.getResult()); // 15

// 5. Function Type Interfaces (ფუნქციის ტიპის ინტერფეისები)

interface StringValidator {
    (input: string): boolean;
}

// Functions that match the interface
let emailValidator: StringValidator = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

let phoneValidator: StringValidator = (phone: string): boolean => {
    return /^5\d{8}$/.test(phone.replace(/\D/g, ''));
};

console.log("Email validation:", emailValidator("luka@andlearn.com")); // true
console.log("Phone validation:", phoneValidator("555123456")); // true

// 6. Extending Interfaces (ინტერფეისების გაფართოება)

interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
    isGoodBoy: boolean;
}

interface Cat extends Animal {
    livesLeft: number;
    isFriendly: boolean;
}

let myDog: Dog = {
    name: "Buddy",
    age: 3,
    breed: "Golden Retriever",
    isGoodBoy: true
};

let myCat: Cat = {
    name: "Whiskers",
    age: 2,
    livesLeft: 9,
    isFriendly: false
};

console.log("Dog:", myDog);
console.log("Cat:", myCat);

// 7. Multiple Interface Extension (მრავალი ინტერფეისის გაფართოება)

interface Flyable {
    fly(): void;
    maxAltitude: number;
}

interface Swimmable {
    swim(): void;
    maxDepth: number;
}

interface Duck extends Animal, Flyable, Swimmable {
    quack(): void;
}

// Object that implements multiple interfaces
let duck: Duck = {
    name: "Donald",
    age: 1,
    maxAltitude: 100,
    maxDepth: 5,
    
    fly(): void {
        console.log(`${this.name} is flying up to ${this.maxAltitude}m!`);
    },
    
    swim(): void {
        console.log(`${this.name} is swimming down to ${this.maxDepth}m!`);
    },
    
    quack(): void {
        console.log(`${this.name} says: Quack quack!`);
    }
};

duck.fly();
duck.swim();
duck.quack();

// 8. Index Signatures (ინდექსის ხელმოწერები)

interface Dictionary {
    [key: string]: string;
}

let georgianEnglish: Dictionary = {
    "გამარჯობა": "hello",
    "კარგი": "good",
    "სტუდენტი": "student",
    "პროგრამირება": "programming"
};

console.log("Georgian to English:", georgianEnglish["გამარჯობა"]);

// Flexible object structure
interface FlexibleUser {
    name: string;
    age: number;
    [key: string]: any; // Can have any additional properties
}

let flexUser: FlexibleUser = {
    name: "ანა",
    age: 22,
    hobby: "painting",
    skills: ["JavaScript", "Design"],
    location: "Tbilisi"
};

console.log("Flexible user:", flexUser);

// 9. Practical Example: E-commerce System

interface Product {
    readonly id: number;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
    description?: string;
    tags?: string[];
}

interface CartItem {
    product: Product;
    quantity: number;
}

interface ShoppingCart {
    items: CartItem[];
    addItem(product: Product, quantity: number): void;
    removeItem(productId: number): void;
    updateQuantity(productId: number, newQuantity: number): void;
    getTotal(): number;
    getItemCount(): number;
    clear(): void;
}

class OnlineShoppingCart implements ShoppingCart {
    items: CartItem[] = [];

    addItem(product: Product, quantity: number): void {
        let existingItem = this.items.find(item => item.product.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
        
        console.log(`Added ${quantity} ${product.name} to cart`);
    }

    removeItem(productId: number): void {
        this.items = this.items.filter(item => item.product.id !== productId);
        console.log(`Removed product ${productId} from cart`);
    }

    updateQuantity(productId: number, newQuantity: number): void {
        let item = this.items.find(item => item.product.id === productId);
        if (item) {
            if (newQuantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = newQuantity;
                console.log(`Updated quantity for product ${productId} to ${newQuantity}`);
            }
        }
    }

    getTotal(): number {
        return this.items.reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    }

    getItemCount(): number {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    clear(): void {
        this.items = [];
        console.log("Cart cleared");
    }
}

// Using the e-commerce system
let jsBook: Product = {
    id: 1,
    name: "JavaScript Complete Guide",
    price: 29.99,
    category: "Books",
    inStock: true,
    description: "Learn JavaScript from basics to advanced",
    tags: ["programming", "web development", "beginner"]
};

let tsBook: Product = {
    id: 2,
    name: "TypeScript Mastery",
    price: 34.99,
    category: "Books",
    inStock: true,
    description: "Master TypeScript for better code quality"
};

let cart = new OnlineShoppingCart();
cart.addItem(jsBook, 1);
cart.addItem(tsBook, 2);

console.log(`Cart total: $${cart.getTotal().toFixed(2)}`);
console.log(`Total items: ${cart.getItemCount()}`);

// 10. Interface vs Type Aliases (ინტერფეისი vs ტიპის სინონიმები)

// Interface approach
interface UserInterface {
    name: string;
    age: number;
}

// Type alias approach  
type UserType = {
    name: string;
    age: number;
};

// Both work similarly, but interfaces are more extensible
interface UserInterface {
    email?: string; // ✅ Can extend interface
}

// type UserType {
//     email?: string; // ❌ Cannot extend type alias like this
// }

// ===== PRACTICE TASKS =====

// Task 1: Create a Library System
interface Book {
    readonly isbn: string;
    title: string;
    author: string;
    publishYear: number;
    isAvailable: boolean;
    genre?: string;
}

interface Library {
    name: string;
    books: Book[];
    addBook(book: Book): void;
    removeBook(isbn: string): void;
    findBook(title: string): Book | undefined;
    listAvailableBooks(): Book[];
}

class CityLibrary implements Library {
    name: string;
    books: Book[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Added "${book.title}" to ${this.name}`);
    }

    removeBook(isbn: string): void {
        this.books = this.books.filter(book => book.isbn !== isbn);
        console.log(`Removed book with ISBN ${isbn}`);
    }

    findBook(title: string): Book | undefined {
        return this.books.find(book => 
            book.title.toLowerCase().includes(title.toLowerCase())
        );
    }

    listAvailableBooks(): Book[] {
        return this.books.filter(book => book.isAvailable);
    }
}

// Test the library system
let library = new CityLibrary("Tbilisi Central Library");

let book1: Book = {
    isbn: "978-123456789",
    title: "TypeScript for Beginners",
    author: "Luka Partenadze",
    publishYear: 2024,
    isAvailable: true,
    genre: "Programming"
};

library.addBook(book1);
console.log("Available books:", library.listAvailableBooks().length);

// Task 2: Student Grade System
interface Grade {
    subject: string;
    score: number;
    maxScore: number;
    date: Date;
}

interface Student {
    id: string;
    firstName: string;
    lastName: string;
    grades: Grade[];
    addGrade(grade: Grade): void;
    getAverageScore(): number;
    getGradesBySubject(subject: string): Grade[];
}

class UniversityStudent implements Student {
    id: string;
    firstName: string;
    lastName: string;
    grades: Grade[] = [];

    constructor(id: string, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    addGrade(grade: Grade): void {
        this.grades.push(grade);
        console.log(`Added grade ${grade.score}/${grade.maxScore} for ${grade.subject}`);
    }

    getAverageScore(): number {
        if (this.grades.length === 0) return 0;
        
        let totalPercentage = this.grades.reduce((sum, grade) => {
            return sum + (grade.score / grade.maxScore * 100);
        }, 0);
        
        return totalPercentage / this.grades.length;
    }

    getGradesBySubject(subject: string): Grade[] {
        return this.grades.filter(grade => 
            grade.subject.toLowerCase() === subject.toLowerCase()
        );
    }
}

// Test the grade system
let student1 = new UniversityStudent("STU001", "ნინო", "გელაშვილი");

student1.addGrade({
    subject: "JavaScript",
    score: 85,
    maxScore: 100,
    date: new Date()
});

student1.addGrade({
    subject: "TypeScript", 
    score: 92,
    maxScore: 100,
    date: new Date()
});

console.log(`Average score: ${student1.getAverageScore().toFixed(1)}%`);

// Interfaces provide structure, contracts, and better code organization
// They make TypeScript code more maintainable and self-documenting
// ინტერფეისები უზრუნველყოფს სტრუქტურას, კონტრაქტებს და კოდის ორგანიზებას 