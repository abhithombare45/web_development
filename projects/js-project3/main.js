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

const greetingText = "Good Evening!";
const weatherCondition = "cludy";
const userLocation = "Pune";
let temperature = 25;

let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)}°F outside.`

document.querySelector("#greeting").innerHTML = greetingText;

// Radio Button: 
document.querySelector(".weather-group").addEventListener("click",function(e){
     if (e.target.id == "celsius") {
          document.querySelector("p#weather").innerHTML = celsiusText; 
     } else if (e.target.id == "fahr") {
          document.querySelector("p#weather").innerHTML = fahrText; 
     }

});  

// LocaTime Section
// Contineous update seconds in time section
setInterval(function(){
     let localTime= new Date();
     document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,"0");
     document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2,"0");
     document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2,"0");
}, 1000);

// Gallery Sectoion: 
// #################

const gallaryImages = [
     {
          "src": "./assets/gallery/image1.jpg",
          "alt": "Thumbnail Image 1"
     },
     {
          "src": "./assets/gallery/image2.jpg",
          "alt": "Thumbnail Image 2"
     },
     {
          "src": "./assets/gallery/image3.jpg",
          "alt": "Thumbnail Image 3"
     }
];

for(img in gallaryImages){
     console.log(gallaryImages[img])
}
