/*
TypeScript Lesson 6: Modules and Namespaces
TypeScript გაკვეთილი 6: მოდულები და სახელწოდებების სივრცეები

This lesson covers ES6 modules, TypeScript namespaces, and module resolution
ეს გაკვეთილი მოიცავს ES6 მოდულებს, TypeScript სახელწოდებების სივრცეებს და მოდულების რეზოლუციას
*/

// === BASIC EXPORTS | ძირითადი ექსპორტები ===

// Named exports
// დასახელებული ექსპორტები
export function greetUser(name: string): string {
    return `Hello, ${name}!`;
}

export const PI = 3.14159;

export class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }
}

// Export interface
// ინტერფეისის ექსპორტი
export interface User {
    id: number;
    name: string;
    email: string;
}

// Export type alias
// ტიპის მეტსახელის ექსპორტი
export type Status = "active" | "inactive" | "pending";

// === RE-EXPORTS | რე-ექსპორტები ===

// Re-export from another module (commented out for demo)
// სხვა მოდულიდან რე-ექსპორტი (კომენტარშია დემოსთვის)
// export { someFunction, SomeClass } from './other-module';
// export * from './utilities';

// === DEFAULT EXPORTS | ნაგულისხმევი ექსპორტები ===

// Default export class
// ნაგულისხმევი ექსპორტის კლასი
class MathUtils {
    static square(x: number): number {
        return x * x;
    }

    static cube(x: number): number {
        return x * x * x;
    }

    static factorial(n: number): number {
        if (n <= 1) return 1;
        return n * this.factorial(n - 1);
    }
}

export default MathUtils;

// === NAMESPACES | სახელწოდებების სივრცეები ===

// TypeScript namespace for organizing code
// TypeScript სახელწოდების სივრცე კოდის ორგანიზებისთვის
namespace Geometry {
    export interface Point {
        x: number;
        y: number;
    }

    export class Circle {
        constructor(private center: Point, private radius: number) {}

        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }

        getCircumference(): number {
            return 2 * Math.PI * this.radius;
        }

        getCenter(): Point {
            return { ...this.center };
        }
    }

    export class Rectangle {
        constructor(private topLeft: Point, private width: number, private height: number) {}

        getArea(): number {
            return this.width * this.height;
        }

        getPerimeter(): number {
            return 2 * (this.width + this.height);
        }
    }

    // Internal helper function (not exported)
    // შიდა დამხმარე ფუნქცია (არ არის ექსპორტირებული)
    function calculateDistance(p1: Point, p2: Point): number {
        return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
    }

    export function getDistanceBetweenPoints(p1: Point, p2: Point): number {
        return calculateDistance(p1, p2);
    }
}

// Using namespace
// სახელწოდების სივრცის გამოყენება
const point1: Geometry.Point = { x: 0, y: 0 };
const point2: Geometry.Point = { x: 3, y: 4 };

const circle = new Geometry.Circle(point1, 5);
const rectangle = new Geometry.Rectangle(point1, 10, 6);

console.log("Circle area:", circle.getArea());
console.log("Rectangle area:", rectangle.getArea());
console.log("Distance:", Geometry.getDistanceBetweenPoints(point1, point2));

// === NESTED NAMESPACES | ჩადგმული სახელწოდების სივრცეები ===

namespace Company {
    export namespace HR {
        export interface Employee {
            id: number;
            name: string;
            department: string;
            salary: number;
        }

        export class EmployeeManager {
            private employees: Employee[] = [];

            addEmployee(employee: Employee): void {
                this.employees.push(employee);
            }

            getEmployee(id: number): Employee | undefined {
                return this.employees.find(emp => emp.id === id);
            }

            getTotalSalary(): number {
                return this.employees.reduce((total, emp) => total + emp.salary, 0);
            }
        }
    }

    export namespace Finance {
        export interface Budget {
            department: string;
            allocated: number;
            spent: number;
        }

        export class BudgetManager {
            private budgets: Budget[] = [];

            setBudget(budget: Budget): void {
                const existingIndex = this.budgets.findIndex(b => b.department === budget.department);
                if (existingIndex >= 0) {
                    this.budgets[existingIndex] = budget;
                } else {
                    this.budgets.push(budget);
                }
            }

            getRemainingBudget(department: string): number {
                const budget = this.budgets.find(b => b.department === department);
                return budget ? budget.allocated - budget.spent : 0;
            }
        }
    }
}

// Using nested namespaces
// ჩადგმული სახელწოდების სივრცეების გამოყენება
const hrManager = new Company.HR.EmployeeManager();
const financeManager = new Company.Finance.BudgetManager();

const employee: Company.HR.Employee = {
    id: 1,
    name: "Ana Beridze",
    department: "Engineering",
    salary: 5000
};

hrManager.addEmployee(employee);

const budget: Company.Finance.Budget = {
    department: "Engineering",
    allocated: 100000,
    spent: 25000
};

financeManager.setBudget(budget);

// === MODULE AUGMENTATION | მოდულის განზრდა ===

// Extending existing modules (demonstrated with a simple example)
// არსებული მოდულების განზრდა (მარტივი მაგალითით)

// Declare module to add properties to existing types
// მოდულის განცხადება არსებულ ტიპებში თვისებების დასამატებლად
declare global {
    interface String {
        toTitleCase(): string;
    }
}

// Implement the new method
// ახალი მეთოდის განხორციელება
String.prototype.toTitleCase = function(): string {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

// === AMBIENT MODULES | გარემო მოდულები ===

// Declare external modules that don't have TypeScript definitions
// გარე მოდულების განცხადება, რომლებსაც არ აქვთ TypeScript განსაზღვრები
// Example (commented out for demo):
// declare module "external-library" {
//     export function doSomething(param: string): number;
//     export interface Config {
//         apiKey: string;
//         timeout: number;
//     }
// }

// === CONDITIONAL EXPORTS | პირობითი ექსპორტები ===

// Export different implementations based on conditions
// სხვადასხვა იმპლემენტაციის ექსპორტი პირობების მიხედვით

export const isProduction = false; // Simplified for demo

export const logger = isProduction 
    ? {
        log: (message: string) => console.log(`[PROD] ${message}`),
        error: (message: string) => console.error(`[PROD ERROR] ${message}`)
      }
    : {
        log: (message: string) => console.log(`[DEV] ${message}`),
        error: (message: string) => console.error(`[DEV ERROR] ${message}`)
      };

// === TYPE-ONLY IMPORTS/EXPORTS | მხოლოდ ტიპის იმპორტი/ექსპორტი ===

// Export types only (for better tree-shaking)
// მხოლოდ ტიპების ექსპორტი (უკეთესი tree-shaking-სთვის)
export type { User as UserType };
export type { Status as UserStatus };

// Interface merging example
// ინტერფეისის შერწყმის მაგალითი
interface ApiResponse {
    success: boolean;
    data: any;
}

interface ApiResponse {
    timestamp: number;
    version: string;
}

// Now ApiResponse has all properties from both declarations
// ახლა ApiResponse-ს აქვს ყველა თვისება ორივე განცხადებიდან

export const createApiResponse = (data: any): ApiResponse => ({
    success: true,
    data,
    timestamp: Date.now(),
    version: "1.0.0"
});

/*
🎯 PRACTICE TASKS | პრაქტიკული დავალებები:

1. Create a utilities module with math functions and export them using named exports
   შექმენით საყოველთაო მოდული მათემატიკური ფუნქციებით და ექსპორტირებეთ დასახელებული ექსპორტებით

2. Design a namespace for a game engine with Player, Enemy, and Weapon classes
   დააპროექტეთ სახელწოდების სივრცე თამაშის ძრავისთვის Player, Enemy და Weapon კლასებით

3. Create a module that exports both a default class and named utilities
   შექმენით მოდული, რომელიც ექსპორტირებს როგორც ნაგულისხმევ კლასს, ასევე დასახელებულ საყოველთაო ფუნქციებს

4. Implement module augmentation to extend an existing interface with new methods
   განახორციელეთ მოდულის განზრდა არსებული ინტერფეისის ახალი მეთოდებით გასაფართოებლად

5. Build a configuration system using namespaces for different environments
   ააგეთ კონფიგურაციის სისტემა სახელწოდების სივრცეების გამოყენებით სხვადასხვა გარემოსთვის
*/ 