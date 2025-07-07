/*
TypeScript Lesson 5: Enums and Advanced Types
TypeScript გაკვეთილი 5: ჩამონათვალები და მოწინავე ტიპები

This lesson covers enums, union types, intersection types, and type guards
ეს გაკვეთილი მოიცავს ჩამონათვალებს, გაერთიანებულ ტიპებს, გადაკვეთის ტიპებს და ტიპის დაცვას
*/

// === BASIC ENUMS | ძირითადი ჩამონათვალები ===

// Numeric enums (default)
// რიცხვითი ჩამონათვალები (ნაგულისხმევი)
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

function movePlayer(direction: Direction): string {
    switch (direction) {
        case Direction.Up:
            return "Moving up";
        case Direction.Down:
            return "Moving down";
        case Direction.Left:
            return "Moving left";
        case Direction.Right:
            return "Moving right";
    }
}

console.log(movePlayer(Direction.Up)); // "Moving up"

// String enums
// სტრინგის ჩამონათვალები
enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue",
    Yellow = "yellow"
}

function getColorValue(color: Color): string {
    return `The selected color is ${color}`;
}

console.log(getColorValue(Color.Red)); // "The selected color is red"

// Mixed enums (not recommended but possible)
// შერეული ჩამონათვალები (არ არის რეკომენდებული, მაგრამ შესაძლებელია)
enum Status {
    Active = 1,
    Inactive = "inactive",
    Pending = "pending"
}

// === UNION TYPES | გაერთიანებული ტიპები ===

// Union type allows a value to be one of several types
// გაერთიანებული ტიპი საშუალებას აძლევს მნიშვნელობას იყოს რამდენიმე ტიპიდან ერთ-ერთი

type StringOrNumber = string | number;

function displayValue(value: StringOrNumber): string {
    if (typeof value === "string") {
        return `String: ${value.toUpperCase()}`;
    } else {
        return `Number: ${value.toFixed(2)}`;
    }
}

console.log(displayValue("hello")); // "String: HELLO"
console.log(displayValue(42.567)); // "Number: 42.57"

// Union with literal types
// გაერთიანება ლიტერალური ტიპებით
type Theme = "light" | "dark" | "auto";
type Size = "small" | "medium" | "large";

function applyTheme(theme: Theme): void {
    console.log(`Applying ${theme} theme`);
}

function setComponentSize(size: Size): void {
    console.log(`Setting size to ${size}`);
}

applyTheme("dark"); // ✓ Valid
// applyTheme("purple"); // ✗ Error: not assignable

// === INTERSECTION TYPES | გადაკვეთის ტიპები ===

// Intersection types combine multiple types
// გადაკვეთის ტიპები აერთიანებს მრავალ ტიპს

interface HasName {
    name: string;
}

interface HasAge {
    age: number;
}

type PersonInfo = HasName & HasAge;

const personData: PersonInfo = {
    name: "Mariam",
    age: 25
    // Must have both name and age
    // უნდა ჰქონდეს როგორც სახელი, ასევე ასაკი
};

// Complex intersection
// რთული გადაკვეთა
interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

type FlyingFish = Flyable & Swimmable;

class Duck implements FlyingFish {
    fly(): void {
        console.log("Duck is flying");
    }

    swim(): void {
        console.log("Duck is swimming");
    }
}

// === TYPE GUARDS | ტიპის დაცვა ===

// Type guards help TypeScript narrow down types
// ტიპის დაცვა ეხმარება TypeScript-ს ტიპების დაზუსტებაში

// typeof type guard
// typeof ტიპის დაცვა
function processValue(value: string | number): string {
    if (typeof value === "string") {
        // TypeScript knows value is string here
        // TypeScript იცის, რომ value აქ არის string
        return value.charAt(0).toUpperCase() + value.slice(1);
    } else {
        // TypeScript knows value is number here
        // TypeScript იცის, რომ value აქ არის number
        return value.toString();
    }
}

// instanceof type guard
// instanceof ტიპის დაცვა
class Dog {
    bark(): void {
        console.log("Woof!");
    }
}

class Cat {
    meow(): void {
        console.log("Meow!");
    }
}

function makeSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        animal.bark(); // TypeScript knows it's a Dog
    } else {
        animal.meow(); // TypeScript knows it's a Cat
    }
}

// Custom type guard function
// მორგებული ტიპის დაცვის ფუნქცია
interface Fish {
    swim(): void;
}

interface Bird {
    fly(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function petActivity(pet: Fish | Bird): void {
    if (isFish(pet)) {
        pet.swim(); // TypeScript knows it's Fish
    } else {
        pet.fly(); // TypeScript knows it's Bird
    }
}

// === DISCRIMINATED UNIONS | განმასხვავებელი გაერთიანებები ===

// Using a common property to discriminate between types
// საერთო თვისების გამოყენება ტიპების განსასხვავებლად

interface GeometricSquare {
    kind: "square";
    size: number;
}

interface GeometricRectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface GeometricCircle {
    kind: "circle";
    radius: number;
}

type GeometricShape = GeometricSquare | GeometricRectangle | GeometricCircle;

function calculateShapeArea(shape: GeometricShape): number {
    switch (shape.kind) {
        case "square":
            return shape.size * shape.size;
        case "rectangle":
            return shape.width * shape.height;
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        default:
            // TypeScript ensures all cases are handled
            // TypeScript უზრუნველყოფს ყველა შემთხვევის დამუშავებას
            const exhaustiveCheck: never = shape;
            return exhaustiveCheck;
    }
}

const geoSquare: GeometricSquare = { kind: "square", size: 5 };
const geoRect: GeometricRectangle = { kind: "rectangle", width: 4, height: 6 };
const geoCircle: GeometricCircle = { kind: "circle", radius: 3 };

console.log(calculateShapeArea(geoSquare)); // 25
console.log(calculateShapeArea(geoRect)); // 24
console.log(calculateShapeArea(geoCircle)); // ~28.27

// === MAPPED TYPES | მოძებნილი ტიპები ===

// Creating new types by transforming existing ones
// ახალი ტიპების შექმნა არსებულების გარდაქმნით

type UserData = {
    id: number;
    name: string;
    email: string;
};

// Make all properties optional
// ყველა თვისების ოფციონალურად გადაქცევა
type PartialUser = Partial<UserData>;

// Make all properties readonly
// ყველა თვისების მხოლოდ წასაკითხად გადაქცევა
type ReadonlyUser = Readonly<UserData>;

// Pick specific properties
// კონკრეტული თვისებების არჩევა
type UserBasic = Pick<UserData, "id" | "name">;

// Omit specific properties
// კონკრეტული თვისებების გამორიცხვა
type UserWithoutId = Omit<UserData, "id">;

/*
🎯 PRACTICE TASKS | პრაქტიკული დავალებები:

1. Create an enum for days of the week and a function to check if it's a weekend
   შექმენით კვირის დღეებისთვის ჩამონათვალი და ფუნქცია შვიდასამყაროს შესამოწმებლად

2. Define a union type for different payment methods and implement processing logic
   განსაზღვრეთ გაერთიანებული ტიპი სხვადასხვა გადახდის მეთოდებისთვის და განახორციელეთ დამუშავების ლოგიკა

3. Create intersection types for user roles and permissions
   შექმენით გადაკვეთის ტიპები მომხმარებლის როლებისა და ნებართვებისთვის

4. Implement custom type guards for API response validation
   განახორციელეთ მორგებული ტიპის დაცვა API პასუხის ვალიდაციისთვის

5. Design a discriminated union for different notification types
   დააპროექტეთ განმასხვავებელი გაერთიანება სხვადასხვა შეტყობინების ტიპებისთვის
*/ 