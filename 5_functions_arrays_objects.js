function addHobby(hobbies, newHobby){
    hobbies.push(newHobby)
    return hobbies
}
let hobbies = ["Football", "Gaming"]
console.log(addHobby(hobbies, "Coding"))

function updateAge(profile, newAge){
    profile.age = newAge;
    return profile

}
let profile = {
    name: "Luka",
    age: 20
}
console.log(updateAge(profile, 21))

function addHobbyProfile(profile2, newHobby){
    profile2.hobbies.push(newHobby)
    return profile2
}
let profile2 = {
    name: "Luka",
    age: 20,
    hobbies: ["Football", "Gaming", "Coding"]
}
console.log(addHobbyProfile(profile2, "Coding"))

// tasks

let addHobby2 = (hobbies2, newHobby) => hobbies2.push(newHobby)
let hobbies2 = ['Basketball', "Gaming"]
console.log(addHobby2(hobbies2, "Coding"))

function updateAge2(profile3, newAge){
    profile3.age = newAge
    return profile3
}
let profile3 = {
    name: "Kindera",
    age: 19
}
console.log(updateAge2(profile3, 21))

function addHobbyToProfile(profile4, newHobby){
    profile4.hobbies.push = newHobby
    return profile4
}
let profile4 = {
    name: "Sami ludi",
    age: "21",
    hobbies: ["Drinking", "Sleeping"]
}
console.log(addHobbyToProfile(profile4, "Coding"))
