let hobbies = ["Football", "Gaming", "Coding"]
hobbies.push("Reading") // adds an item to the end of the array
console.log(hobbies)
hobbies.pop() // remove an item from the end of the array
console.log(hobbies)
hobbies.shift() // remove an item from beginnig of the array
console.log(hobbies)
hobbies.unshift("Reading") // adds an item to the beginningg of the array.
console.log(hobbies)

let profile ={
    name: "Luka",
    age: 20,
    isDeveloper: true
}
console.log(profile)
console.log(profile.name)
profile.age = 21
console.log(profile.age)
delete profile.isDeveloper
console.log(profile)

// Tasks

let hobbies2 = ["Football", "Basketball", "Gaming"]
hobbies2.push("Coding")
console.log(hobbies2)
hobbies2.pop()
console.log(hobbies2)

let profile2 = {
    name: "Luka",
    age: 20,
    hobbies: ["Football", "Gaming", "Coding"]
}
console.log(profile2)
profile2.isStudent = true
console.log(profile2)
profile2.age = 21
console.log(profile2)
delete profile2.isStudent
console.log(profile2)
