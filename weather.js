const Input = document.getElementById("city-input");
const Btn = document.getElementById("search-btn");
const Name = document.getElementById("city-name");
const Region = document.getElementById("city-region");
const Country = document.getElementById("city-country");
const Weather = document.getElementById("current-weather");
const Temp = document.getElementById("current-temp");
const Humidity = document.getElementById("current-humidity");

 async function getData(cityname){
   const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=c8a06e29adc14a348f093420260604&q=${cityname}&aqi=yes`);

   return await promise.json();
};

Btn.addEventListener("click",async () => {
     const value = Input.value;
     const result = await getData(value);
     
     if (result.error) {
        // If city isn't found, display a message and clear previous data
        Name.innerText = "City not found";
        Region.innerText = "-";
        Country.innerText = "-";
        Weather.innerText = "-";
        Temp.innerText = "-";
        Humidity.innerText = "-";
        
        console.error("API Error:", result.error.message);
    }
    
      else{
        Name.innerText = `  ${result.location.name}`; 
        Region.innerText = `  ${result.location.region} `;
        Country.innerText = `  ${result.location.country}`;
        Weather.innerText = `  ${result.current.condition.text}`;
        Temp.innerText =  ` ${result.current.temp_c}°C`;
        Humidity.innerText = ` ${result.current.humidity}`;
       }
});