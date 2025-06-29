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
