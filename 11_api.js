// Making a get request

fetch("https://jsonplaceholder.typicode.com/posts"
    .then(response => response.json()) // convert the response to json
    .then(data => console.log(data)) // log the data
    .catch(error => console.error("Error:", error)) // log the error
)

// making a post request

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: "My first post",
        body: "This is the body of my first post",
        userId: 1
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    }
})

.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error))

// making a delete request

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error))

// Tasks

// Fetches data from https://jsonplaceholder.typicode.com/users and logs the user data to the console.

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error))

// Sends a POST request to https://jsonplaceholder.typicode.com/posts with a title, body, and userId, and logs the response to the console.
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: "My first post",
        body: "This is the body of my first post",
        userId: 1
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    }
})