let url = "https://api.openweathermap.org/data/2.5/weather?q=";
let key ="&appid=fae8e8fd21273b3e8449b4011fe1590a&units=metric"

let btn = document.querySelector("button");
let input = document.querySelector("#search")

btn.addEventListener("click" , () => {
   
    weather()
})

async function weather(){

    let link = url+ input.value+key;

    let response = await fetch(link);
    
    let data = await response.json();
    console.log(data);

    if(response.status==404 || input.value ===""){
        alert("city not found");
    }else{
        document.querySelector("#city").innerText = data.name;
        document.querySelector("#temp").innerText = Math.round(data.main.temp) + "°c";
        document.querySelector("#humidity").innerText = data.main.humidity;
        document.querySelector("#wind").innerText = data.wind.speed;
    
    }
    input.value=""

}
