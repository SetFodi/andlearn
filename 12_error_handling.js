// - Uses a try/catch block to handle an error when parsing invalid JSON.
// - Logs values to the console to debug a logical error in a calculation.
//- Simulates a failed API request and handles the error gracefully.

try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error("Error:", error);
}

let a = 5;
let b = 10;
let sum = a * b;
console.log(sum)

try {
    const response = await fetch("https://invalid-url.com");
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error("Error fetching data:", error.message);
}