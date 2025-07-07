/*
TypeScript Lesson 7: Async/Await and Promises
TypeScript გაკვეთილი 7: Async/Await და Promise-ები

This lesson covers asynchronous programming with TypeScript
ეს გაკვეთილი მოიცავს ასინქრონულ პროგრამირებას TypeScript-ით
*/

// === BASIC PROMISES | ძირითადი Promise-ები ===

// Creating a basic promise
// ძირითადი Promise-ის შექმნა
function fetchUserData(userId: number): Promise<{ id: number; name: string; email: string }> {
    return new Promise((resolve, reject) => {
        // Simulate API call delay
        // API გამოძახების დაყოვნების იმიტაცია
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: `User ${userId}`,
                    email: `user${userId}@email.com`
                });
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, 1000);
    });
}

// Using promises with .then()
// Promise-ების გამოყენება .then()-ით
fetchUserData(1)
    .then(user => {
        console.log("User fetched:", user);
        return user.id;
    })
    .then(userId => {
        console.log("User ID:", userId);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });

// === ASYNC/AWAIT | Async/Await ===

// Basic async function
// ძირითადი async ფუნქცია
async function getUserInfo(userId: number): Promise<string> {
    try {
        const user = await fetchUserData(userId);
        return `${user.name} (${user.email})`;
    } catch (error) {
        throw new Error(`Failed to get user info: ${error}`);
    }
}

// Using async function
// async ფუნქციის გამოყენება
async function displayUserInfo() {
    try {
        const userInfo = await getUserInfo(1);
        console.log(userInfo);
    } catch (error) {
        console.error(error);
    }
}

// === PROMISE COMBINATORS | Promise-ების კომბინატორები ===

// Promise.all - wait for all promises to resolve
// Promise.all - ყველა Promise-ის რეზოლუციის მოლოდინი
async function fetchMultipleUsers(): Promise<void> {
    try {
        const userPromises = [1, 2, 3].map(id => fetchUserData(id));
        const users = await Promise.all(userPromises);
        
        console.log("All users fetched:", users);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

// Promise.race - return first resolved promise
// Promise.race - პირველი რეზოლუციად Promise-ის დაბრუნება
async function fastestResponse(): Promise<void> {
    const promises = [
        fetchUserData(1),
        fetchUserData(2),
        fetchUserData(3)
    ];

    try {
        const firstUser = await Promise.race(promises);
        console.log("First user received:", firstUser);
    } catch (error) {
        console.error("Error in race:", error);
    }
}

// Promise.allSettled - wait for all promises to settle (resolve or reject)
// Promise.allSettled - ყველა Promise-ის დასრულების მოლოდინი (resolve ან reject)
async function fetchUsersWithResults(): Promise<void> {
    const userPromises = [
        fetchUserData(1),
        fetchUserData(-1), // This will reject
        fetchUserData(2)
    ];

    const results = await Promise.allSettled(userPromises);
    
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`User ${index + 1}:`, result.value);
        } else {
            console.log(`User ${index + 1} failed:`, result.reason.message);
        }
    });
}

// === ERROR HANDLING | შეცდომების დამუშავება ===

// Custom error types
// მორგებული შეცდომების ტიპები
class NetworkError extends Error {
    constructor(message: string, public statusCode: number) {
        super(message);
        this.name = "NetworkError";
    }
}

class ValidationError extends Error {
    constructor(message: string, public field: string) {
        super(message);
        this.name = "ValidationError";
    }
}

// API simulation with different error types
// API-ს იმიტაცია სხვადასხვა შეცდომების ტიპებით
async function callAPI(endpoint: string): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (endpoint === "/users") {
                resolve({ users: ["User1", "User2"] });
            } else if (endpoint === "/error") {
                reject(new NetworkError("Server error", 500));
            } else if (endpoint === "/invalid") {
                reject(new ValidationError("Invalid input", "email"));
            } else {
                reject(new Error("Unknown endpoint"));
            }
        }, 500);
    });
}

// Comprehensive error handling
// ყოვლისმომცველი შეცდომების დამუშავება
async function handleAPICall(endpoint: string): Promise<void> {
    try {
        const result = await callAPI(endpoint);
        console.log("API result:", result);
    } catch (error) {
        if (error instanceof NetworkError) {
            console.error(`Network Error (${error.statusCode}): ${error.message}`);
        } else if (error instanceof ValidationError) {
            console.error(`Validation Error in ${error.field}: ${error.message}`);
        } else {
            console.error("Unknown error:", error);
        }
    }
}

// === ASYNC ITERATORS | ასინქრონული იტერატორები ===

// Async generator function
// ასინქრონული გენერატორის ფუნქცია
async function* fetchUsersInBatches(batchSize: number): AsyncGenerator<Array<{ id: number; name: string; email: string }>, void, unknown> {
    let currentBatch = 0;
    
    while (currentBatch < 3) {
        const batch: Array<{ id: number; name: string; email: string }> = [];
        for (let i = 0; i < batchSize; i++) {
            const userId = currentBatch * batchSize + i + 1;
            try {
                const user = await fetchUserData(userId);
                batch.push(user);
            } catch (error) {
                console.log(`Failed to fetch user ${userId}`);
            }
        }
        
        yield batch;
        currentBatch++;
        
        // Add delay between batches
        // ბათჩების შორის დაყოვნების დამატება
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

// Using async iterator
// ასინქრონული იტერატორის გამოყენება
async function processBatches(): Promise<void> {
    for await (const batch of fetchUsersInBatches(2)) {
        console.log("Processing batch:", batch);
    }
}

// === RETRY LOGIC | გამეორების ლოგიკა ===

// Retry function with exponential backoff
// გამეორების ფუნქცია ექსპონენციალური backoff-ით
async function retryWithBackoff<T>(
    fn: () => Promise<T>,
    maxRetries: number = 3,
    baseDelay: number = 1000
): Promise<T> {
    let lastError: Error;
    
    for (let i = 0; i <= maxRetries; i++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error as Error;
            
            if (i === maxRetries) {
                throw lastError;
            }
            
            const delay = baseDelay * Math.pow(2, i);
            console.log(`Retry ${i + 1}/${maxRetries} after ${delay}ms`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
    
    throw lastError!;
}

// Example usage of retry logic
// გამეორების ლოგიკის გამოყენების მაგალითი
async function unreliableOperation(): Promise<string> {
    if (Math.random() < 0.7) {
        throw new Error("Random failure");
    }
    return "Success!";
}

async function testRetry(): Promise<void> {
    try {
        const result = await retryWithBackoff(unreliableOperation, 3, 500);
        console.log("Result:", result);
    } catch (error) {
        console.error("All retries failed:", error);
    }
}

// === TIMEOUT HANDLING | დროის ლიმიტის დამუშავება ===

// Function to add timeout to promises
// Promise-ებისთვის დროის ლიმიტის დამატების ფუნქცია
function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
    return Promise.race([
        promise,
        new Promise<never>((_, reject) => {
            setTimeout(() => {
                reject(new Error(`Operation timed out after ${timeoutMs}ms`));
            }, timeoutMs);
        })
    ]);
}

// Using timeout wrapper
// დროის ლიმიტის wrapper-ის გამოყენება
async function fetchWithTimeout(): Promise<void> {
    try {
        const user = await withTimeout(fetchUserData(1), 2000);
        console.log("User fetched within timeout:", user);
    } catch (error) {
        console.error("Timeout or other error:", error);
    }
}

// === ASYNC QUEUE | ასინქრონული რიგი ===

class AsyncQueue<T> {
    private queue: Array<() => Promise<T>> = [];
    private running = false;

    async add(operation: () => Promise<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            this.queue.push(async () => {
                try {
                    const result = await operation();
                    resolve(result);
                    return result;
                } catch (error) {
                    reject(error);
                    throw error;
                }
            });
            
            this.process();
        });
    }

    private async process(): Promise<void> {
        if (this.running || this.queue.length === 0) {
            return;
        }

        this.running = true;
        
        while (this.queue.length > 0) {
            const operation = this.queue.shift()!;
            try {
                await operation();
            } catch (error) {
                // Error is already handled in the operation wrapper
                // შეცდომა უკვე დამუშავებულია ოპერაციის wrapper-ში
            }
        }
        
        this.running = false;
    }
}

// Using async queue
// ასინქრონული რიგის გამოყენება
async function testAsyncQueue(): Promise<void> {
    const queue = new AsyncQueue<any>();
    
    // Add multiple operations to queue
    // რიგში მრავალი ოპერაციის დამატება
    queue.add(() => fetchUserData(1));
    queue.add(() => fetchUserData(2));
    queue.add(() => fetchUserData(3));
    
    console.log("All operations queued");
}

/*
🎯 PRACTICE TASKS | პრაქტიკული დავალებები:

1. Create an async function that fetches data from multiple APIs and combines the results
   შექმენით async ფუნქცია, რომელიც მონაცემებს ძველს მრავალი API-დან და აერთიანებს შედეგებს

2. Implement a rate limiter that controls how many async operations can run simultaneously
   განახორციელეთ rate limiter, რომელიც აკონტროლებს რამდენი ასინქრონული ოპერაცია შეიძლება იმუშავოს ერთდროულად

3. Build a cache system that stores async operation results with expiration
   ააგეთ cache სისტემა, რომელიც ინახავს ასინქრონული ოპერაციების შედეგებს გამოდის ვადით

4. Create a polling function that repeatedly calls an API until a condition is met
   შექმენით polling ფუნქცია, რომელიც განმეორებით იძახებს API-ს სანამ პირობა არ შეესრულება

5. Design an async workflow system that executes tasks in a specific order with dependencies
   დააპროექტეთ ასინქრონული workflow სისტემა, რომელიც ასრულებს დავალებებს კონკრეტული თანმიმდევრობით დამოკიდებულებებით
*/ 