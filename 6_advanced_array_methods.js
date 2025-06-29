// map
let numbers = [1, 2, 3, 4, 5];
let squared = (num) => num * num
console.log(numbers.map(squared))


let prices = [90, 45, 30]
let discounted = (price) => price * 0.9
console.log(prices.map(discounted))

// filter
let numbers2 = [1, 2, 3, 4, 5];
let odd = (num) => num % 2 !== 0
console.log(numbers2.filter(odd))

let users = [
    { name: "Luka", age: 20 },
    { name: "Kindera", age: 18},
    { name: "Sami ludi", age: 17},
    { name: "Toni", age: 16 }
]

let adults = (user) => user.age >= 18
console.log(users.filter(adults))

// reduce
let numbers3 = [2,4, 6, 7, 12]
let sum = (total, num) => total + num
console.log(numbers3.reduce(sum))


// tasks

let numbers4 = [1,2,3,4,5]
let squared2 = (num) => num * num
console.log(numbers4.map(squared))

let numbers5 = [1,2,3,4,5]
let numbersGreaterThan3 = (num) => num > 3
console.log(numbers5.filter(numbersGreaterThan3))

let numbers6 = [1,2,3,4,5]
let totalNumbers = (total, num) => total + num;
console.log(numbers6.reduce(totalNumbers))
