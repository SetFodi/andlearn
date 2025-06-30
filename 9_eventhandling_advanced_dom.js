// event types

let button = document.getElementById("myButton")
button.addEventListener("click", ()=>{
    console.log("Button clicked!")
})

let input = document.getElementById("myInput")
input.addEventListener("input", (event) => {
    console.log("Input value: " + event.target.value)
})

// event object

let button2 = document.getElementById("myButton")
button.addEventListener("click", (event) => {
    console.log("event object: ", event)
    console.log("Clicked element", event.target)
})

// dynamic Dom manipulation

// create elements
let newDiv = document.createElement("div")
newDiv.textContent = "I am a new Div"
document.body.appendChild(newDiv)

// updating elements

let existingDiv = document.getElementById("myDiv")
existingDiv.textContent = "updated content!"

// removing elements
let divToRemove = document.getElementById("myDiv")
divToRemove.remove();

// example (to-do-list)

let addButton = document.getElementById("addTaskButton")
let taskList = document.getElementById("taskList")
addButton.addEventListener("click", () =>{
    let newTask = document.createElement("li")
    newTask.textContent = "New Task"
    taskList.appendChild(newTask)
})

// tasks

let button11 = document.getElementById('myButton');
button11.addEventListener('click', () => {
let newParagraph = document.createElement('p');
newParagraph.textContent = 'I am a new paragraph';
document.body.appendChild(newParagraph);
});


let inputField = document.getElementById('myInput');
inputField.addEventListener('input', () => {
let paragraph = document.getElementById('myParagraph');
paragraph.textContent = inputField.value;
}); // changes the content of the paragraph live when input is changed

let deleteBtn = document.getElementById('deleteBtn')
deleteBtn.addEventListener('click', () => {
    let paragraph = document.getElementById('myParagraph');
    paragraph.remove();
})

