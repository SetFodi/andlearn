// ===== CLASSES AND PROTOTYPES =====
// ქართული: კლასები და პროტოტიპები

// 1. Understanding Objects Review (ობიექტების გაგების გადახედვა)

let person1 = {
    name: "Luka",
    age: 20,
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

let person2 = {
    name: "Ana",
    age: 18,
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

// Problem: We're repeating code! Solution: Constructor Functions or Classes

// 2. Constructor Functions (კონსტრუქტორი ფუნქციები)

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old`;
    };
}

// Create new instances
let person3 = new Person("Giorgi", 25);
let person4 = new Person("Mariam", 22);

console.log(person3.greet()); // "Hello, I'm Giorgi and I'm 25 years old"
console.log(person4.greet()); // "Hello, I'm Mariam and I'm 22 years old"

// 3. Prototypes (პროტოტიპები)
// Better way: Add methods to the prototype to save memory

function Animal(name, species) {
    this.name = name;
    this.species = species;
}

// Add methods to prototype (not inside constructor)
Animal.prototype.speak = function() {
    return `${this.name} the ${this.species} makes a sound`;
};

Animal.prototype.getInfo = function() {
    return `Name: ${this.name}, Species: ${this.species}`;
};

let dog = new Animal("Buddy", "Dog");
let cat = new Animal("Whiskers", "Cat");

console.log(dog.speak());    // "Buddy the Dog makes a sound"
console.log(cat.getInfo());  // "Name: Whiskers, Species: Cat"

// 4. ES6 Classes (ES6 კლასები) - Modern Way!

class Student {
    // Constructor runs when new instance is created
    constructor(name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
        this.grades = [];
    }
    
    // Methods (ეს არის უფრო სუფთა სინტაქსი)
    introduce() {
        return `Hi, I'm ${this.name}, ${this.age} years old, studying ${this.subject}`;
    }
    
    addGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            this.grades.push(grade);
            console.log(`Added grade ${grade} for ${this.name}`);
        } else {
            console.log("Grade must be between 0 and 100");
        }
    }
    
    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        let sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }
    
    // Static method (belongs to the class, not instances)
    static compareStudents(student1, student2) {
        let avg1 = student1.getAverageGrade();
        let avg2 = student2.getAverageGrade();
        
        if (avg1 > avg2) {
            return `${student1.name} has a higher average (${avg1.toFixed(1)})`;
        } else if (avg2 > avg1) {
            return `${student2.name} has a higher average (${avg2.toFixed(1)})`;
        } else {
            return "Both students have the same average";
        }
    }
}

// Create student instances
let student1 = new Student("Luka", 20, "Computer Science");
let student2 = new Student("Nini", 19, "Mathematics");

console.log(student1.introduce());

student1.addGrade(85);
student1.addGrade(92);
student1.addGrade(78);

student2.addGrade(90);
student2.addGrade(88);
student2.addGrade(95);

console.log(`${student1.name}'s average: ${student1.getAverageGrade().toFixed(1)}`);
console.log(Student.compareStudents(student1, student2));

// 5. Inheritance (მემკვიდრეობა)

class Teacher extends Student {
    constructor(name, age, subject, yearsExperience) {
        super(name, age, subject); // Call parent constructor
        this.yearsExperience = yearsExperience;
        this.students = [];
    }
    
    introduce() {
        return `Hi, I'm ${this.name}, a ${this.subject} teacher with ${this.yearsExperience} years of experience`;
    }
    
    addStudent(studentName) {
        this.students.push(studentName);
        console.log(`${studentName} is now in ${this.name}'s class`);
    }
    
    getStudentCount() {
        return this.students.length;
    }
}

let teacher = new Teacher("Mr. Davit", 35, "JavaScript", 10);
console.log(teacher.introduce());

teacher.addStudent("Luka");
teacher.addStudent("Ana");
teacher.addStudent("Giorgi");

console.log(`${teacher.name} has ${teacher.getStudentCount()} students`);

// 6. Private Fields (პირადი ველები) - Modern JavaScript

class BankAccount {
    #balance = 0; // Private field (starts with #)
    #accountNumber;
    
    constructor(accountNumber, initialBalance = 0) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
        }
        return this.#balance;
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
        } else {
            console.log("Insufficient funds or invalid amount");
        }
        return this.#balance;
    }
    
    getBalance() {
        return this.#balance; // Only way to access private field
    }
    
    getAccountInfo() {
        return `Account: ${this.#accountNumber}, Balance: ${this.#balance}`;
    }
}

let account = new BankAccount("ACC001", 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getAccountInfo());

// console.log(account.#balance); // ❌ Error! Private field not accessible

// ===== PRACTICE TASKS =====

// Task 1: Create a Car class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.isRunning = false;
        this.speed = 0;
    }
    
    start() {
        this.isRunning = true;
        console.log(`${this.brand} ${this.model} started!`);
    }
    
    stop() {
        this.isRunning = false;
        this.speed = 0;
        console.log(`${this.brand} ${this.model} stopped!`);
    }
    
    accelerate(amount) {
        if (this.isRunning) {
            this.speed += amount;
            console.log(`Speed increased to ${this.speed} km/h`);
        } else {
            console.log("Start the car first!");
        }
    }
    
    getInfo() {
        return `${this.year} ${this.brand} ${this.model} - Speed: ${this.speed} km/h`;
    }
}

let myCar = new Car("Toyota", "Prius", 2020);
myCar.start();
myCar.accelerate(50);
myCar.accelerate(30);
console.log(myCar.getInfo());

// Task 2: Create a Book library system
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = false;
    }
    
    markAsRead() {
        this.isRead = true;
        console.log(`Marked "${this.title}" as read`);
    }
    
    getInfo() {
        let status = this.isRead ? "✅ Read" : "📚 Unread";
        return `${this.title} by ${this.author} (${this.pages} pages) - ${status}`;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    
    addBook(book) {
        this.books.push(book);
        console.log(`Added "${book.title}" to ${this.name} library`);
    }
    
    findBook(title) {
        return this.books.find(book => book.title.toLowerCase().includes(title.toLowerCase()));
    }
    
    getUnreadBooks() {
        return this.books.filter(book => !book.isRead);
    }
    
    getLibraryInfo() {
        let totalBooks = this.books.length;
        let readBooks = this.books.filter(book => book.isRead).length;
        return `${this.name} Library: ${totalBooks} books (${readBooks} read, ${totalBooks - readBooks} unread)`;
    }
}

let myLibrary = new Library("My Personal");
let book1 = new Book("JavaScript Guide", "Luka Partenadze", 300);
let book2 = new Book("Python Basics", "Ana Gelashvili", 250);

myLibrary.addBook(book1);
myLibrary.addBook(book2);

book1.markAsRead();

console.log(myLibrary.getLibraryInfo());
console.log("Unread books:", myLibrary.getUnreadBooks().map(book => book.title)); 