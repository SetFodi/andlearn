// promises

let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Success');
    } else {
        reject('Fail');
    }
});

myPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

// async/await

async function fetchData(){
    try{
        let response = await fetch ("https://jsonplaceholder.typicode.com/posts")
        let data = await response.json()
        console.log(data)
    } catch (error){
        console.log("Erorr", error)
    }
}
fetchData()


async function getWeather(){
    try{
        let response = await fetch("https://api.weatherapi.com/v1/current.json");
        let weather = await response.json();
        console.log("the temperature in london is this")

    } catch (error){
        console.log("Error fetching weather data:", error);
    }
}
getWeather();

// tasks
let myPromise2 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Data loaded successfully');
    } else {
        reject('Failed to load data');
    }
});

myPromise2
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

async function fetchData2(){
    try{
        let response = await fetch ("https://jsonplaceholder.typicode.com/posts")
        let data = await response.json()
        console.log(data)
    } catch (error){
        console.log("Erorr", error)
    }
}
fetchData2()


