/*
TypeScript Lesson 4: Classes and Inheritance
TypeScript გაკვეთილი 4: კლასები და მემკვიდრეობა

This lesson covers class definitions, inheritance, access modifiers, and abstract classes
ეს გაკვეთილი მოიცავს კლასების განსაზღვრას, მემკვიდრეობას, წვდომის მოდიფიკატორებს და აბსტრაქტულ კლასებს
*/

// === BASIC CLASS DEFINITION | კლასის ძირითადი განსაზღვრა ===

class BaseTeacher {
    public fullName: string;
    private yearsExperience: number;
    protected subject: string;

    constructor(fullName: string, yearsExperience: number, subject: string) {
        this.fullName = fullName;
        this.yearsExperience = yearsExperience;
        this.subject = subject;
    }

    public introduce(): string {
        return `Hello, I'm ${this.fullName}`;
    }

    public getExperience(): number {
        return this.yearsExperience;
    }

    protected getSubject(): string {
        return this.subject;
    }
}

const teacher1 = new BaseTeacher("Nino Beridze", 5, "Mathematics");
console.log(teacher1.introduce()); // "Hello, I'm Nino Beridze"

// === INHERITANCE | მემკვიდრეობა ===

class MathTeacher extends BaseTeacher {
    private specialization: string;

    constructor(fullName: string, yearsExperience: number, specialization: string) {
        super(fullName, yearsExperience, "Mathematics");
        this.specialization = specialization;
    }

    public introduce(): string {
        return `${super.introduce()}, I teach Mathematics: ${this.specialization}`;
    }

    public solve(problem: string): string {
        return `Solving ${problem}...`;
    }
}

const mathTeacher1 = new MathTeacher("Giorgi Khvedelidze", 8, "Algebra");
console.log(mathTeacher1.introduce());

// === ABSTRACT CLASSES | აბსტრაქტული კლასები ===

abstract class Shape {
    protected color: string;

    constructor(color: string) {
        this.color = color;
    }

    abstract calculateArea(): number;
    abstract getPerimeter(): number;

    public getColor(): string {
        return this.color;
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(color: string, width: number, height: number) {
        super(color);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// === STATIC METHODS | სტატიკური მეთოდები ===

class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }

    static multiply(a: number, b: number): number {
        return a * b;
    }

    static readonly VERSION = "1.0.0";
}

console.log(Calculator.add(5, 3)); // 8
console.log(Calculator.VERSION); // "1.0.0"

/*
🎯 PRACTICE TASKS | პრაქტიკული დავალებები:

1. Create a class hierarchy: Animal -> Dog with methods
   შექმენით კლასური იერარქია: Animal -> Dog მეთოდებით

2. Implement abstract class Media with concrete Video and Audio classes
   განახორციელეთ აბსტრაქტული კლასი Media კონკრეტული Video და Audio კლასებით

3. Create a Library system with Book and Member classes
   შექმენით ბიბლიოთეკის სისტემა Book და Member კლასებით

4. Build a Calculator class with static utility methods
   ააგეთ Calculator კლასი სტატიკური საყოველთაო მეთოდებით

5. Design a Vehicle system with inheritance and polymorphism
   დააპროექტეთ Vehicle სისტემა მემკვიდრეობითა და პოლიმორფიზმით
*/ 