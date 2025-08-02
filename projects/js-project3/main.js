// Menu Section 

document.querySelector("#open-nav-menu").addEventListener("click", function(){
     document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
     document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

// Greeting section 

function celsiusToFahr(temperature){
     let fahr = (temperature * 9/5)+32;
     return fahr;
}

celsiusToFahr(25);

const greetingText = "Good Evening!";
const weatherCondition = "cludy";
const userLocation = "Pune";
let temperature = 25;

let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)}°F outside.`


document.querySelector("#greeting").innerHTML = greetingText;

document.querySelector(".weather-group").addEventListener("click",function(e){
     // console.log(e.target.id)
     // fahr 
     // celsius

     if (e.target.id == "celsius") {
          document.querySelector("p#weather").innerHTML = celsiusText; 
     } else if (e.target.id == "fahr") {
          document.querySelector("p#weather").innerHTML = fahrText; 
     }

}); 