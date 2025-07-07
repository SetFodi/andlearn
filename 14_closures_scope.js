// ===== CLOSURES AND SCOPE =====
// ქართული: კლოჟერები და სკოუპი

// 1. Understanding Scope (სკოუპის გაგება)

// Global scope (გლობალური სკოუპი)
let globalVariable = "I'm accessible everywhere!";

function demonstrateScope() {
    // Function scope (ფუნქციის სკოუპი)
    let functionVariable = "I'm only accessible inside this function";
    
    console.log(globalVariable);     // ✅ Works
    console.log(functionVariable);   // ✅ Works
    
    if (true) {
        // Block scope (ბლოკის სკოუპი)
        let blockVariable = "I'm only accessible inside this block";
        console.log(blockVariable);  // ✅ Works
    }
    
    // console.log(blockVariable);   // ❌ Error! Not accessible here
}

demonstrateScope();
console.log(globalVariable);        // ✅ Works
// console.log(functionVariable);   // ❌ Error! Not accessible here

// 2. What is a Closure? (რა არის კლოჟერი?)
// A closure is when a function "remembers" variables from its outer scope
// კლოჟერი არის როდესაც ფუნქცია "იხსენებს" ცვლადებს გარე სკოუპიდან

function outerFunction(x) {
    // This variable will be "remembered" by the inner function
    let outerVariable = x;
    
    function innerFunction(y) {
        // This inner function has access to outerVariable
        return outerVariable + y;
    }
    
    return innerFunction;
}

let addFive = outerFunction(5);
console.log(addFive(3)); // 8 (5 + 3)

// The inner function still "remembers" outerVariable even after outerFunction finished!

// 3. Practical Example - Counter (პრაქტიკული მაგალითი - მთვლელი)

function createCounter() {
    let count = 0; // Private variable (პირადი ცვლადი)
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

let counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
console.log(counter.decrement()); // 1

// count variable is not directly accessible from outside!
// console.log(counter.count); // undefined

// 4. Module Pattern (მოდულის პატერნი)

function createCalculator() {
    let result = 0;
    
    return {
        add: function(num) {
            result += num;
            return this; // Return this for chaining
        },
        multiply: function(num) {
            result *= num;
            return this;
        },
        getResult: function() {
            return result;
        },
        reset: function() {
            result = 0;
            return this;
        }
    };
}

let calc = createCalculator();
let finalResult = calc.add(5).multiply(2).add(3).getResult();
console.log(finalResult); // 13

// 5. Event Handler Example (ივენთ ჰენდლერის მაგალითი)

function setupButtonClickCounter(buttonId) {
    let clickCount = 0;
    
    return function() {
        clickCount++;
        console.log(`Button ${buttonId} clicked ${clickCount} times`);
        return clickCount;
    };
}

// Simulate button clicks
let button1Handler = setupButtonClickCounter("button1");
let button2Handler = setupButtonClickCounter("button2");

button1Handler(); // "Button button1 clicked 1 times"
button1Handler(); // "Button button1 clicked 2 times"
button2Handler(); // "Button button2 clicked 1 times"

// Each button maintains its own separate counter!

// ===== PRACTICE TASKS =====

// Task 1: Create a function that returns a personalized greeter
function createGreeter(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

let sayHello = createGreeter("Hello");
let sayHi = createGreeter("Hi");

console.log(sayHello("Luka")); // "Hello, Luka!"
console.log(sayHi("Ana"));     // "Hi, Ana!"

// Task 2: Create a simple bank account with closures
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                console.log(`Deposited ${amount}. New balance: ${balance}`);
            }
            return balance;
        },
        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                console.log(`Withdrew ${amount}. New balance: ${balance}`);
            } else {
                console.log("Insufficient funds or invalid amount");
            }
            return balance;
        },
        checkBalance: function() {
            return balance;
        }
    };
}

let myAccount = createBankAccount(100);
myAccount.deposit(50);   // "Deposited 50. New balance: 150"
myAccount.withdraw(30);  // "Withdrew 30. New balance: 120"
console.log(myAccount.checkBalance()); // 120

// Task 3: Create a multiplier factory
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

let double = createMultiplier(2);
let triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(4)); // 12 