// Menu Section 

document.querySelector("#open-nav-menu").addEventListener("click", function(){
     document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
     document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

// Greeting section 

const greetingText = "Good Evening!";
const weatherCondition = "cludy";
const userLocation = "Pune";
let temperature = 26.8673;
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`


document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = weatherText; 