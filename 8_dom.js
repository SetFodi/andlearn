// accessing elements

let myDiv = document.getElementById('myDiv');
console.log(myDiv)

let myParagraph = document.querySelector(".myClass") // <p class="myClass">
console.log(myParagraph)

// changing content

let myDiv2 = document.getElementById('myDiv');
myDiv2.innerHTML = "I am a new content";
console.log(myDiv2.innerHTML)

// changing styles

let myDiv3 = document.getElementById('myDiv');
myDiv3.style.color = "red";
myDiv3.style.fontSize = "20px"

// adding or removing classes

let myDiv4 = document.getElementById('myDiv');
myDiv4.classList.add("highlight");
myDiv4.classList.remove("box");

// responding to events

let myButton = document.getElementById('myButton');
myButton.addEventListener("click", () => {
    alert("Button clicked")
})


// tasks

let myElement = document.getElementById('myElement');
myElement.innerHTML = "Hello World";
myElement.style.backgroundColor = "blue";
myElement.classList.add("highlight");
let changeText = document.getElementById('changeParagraph');
let myButton = document.getElementById('myButton');
myButton.addEventListener("click", () => {
    changeText.textContent = "Hello World";
})
