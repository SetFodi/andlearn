// variables
let ame: string = 'Luka'
let age: number = 20
let isStudent: boolean = true

// arrays
let hobbies: string[] = ['Coding', 'Gaming', 'Eating']
let numbers: number[] = [1, 2, 3, 4, 5]

// objects
let person: { name: string, age: number, isStudent: boolean } = {
    name: 'Luka',
    age: 20,
    isStudent: true
}

// functions
function greet(name: string){
    return `Hello, ${name}!`
}
console.log(greet("Luka"))

let greetings = (name: string) => `Hello, ${name}!`
console.log(greetings("Nika"))

let multiply = (a: number, b: number) => a * b
console.log(multiply(2,3))


// tasks
let saxeli: string = 'Luka'
let asaki: number = 20
let isDeveloper: boolean = true

let favHobbies: string[] = ['Football', 'Coding', 'Gaming']

let profile: { name: string, age: number, isDeveloper: boolean, hobbies?: string[]} = {
    name: 'Luka',
    age: 20,
    isDeveloper: true,
    hobbies: ['Football', 'Coding', 'Gaming']
}
