const forecast = document.querySelector("#forecast");

const key = "702191d9ae79cf5dc87f8f534b600300";
const lat = "49.75";
const lon = "6.64";

const url = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayForecast(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayForecast(data) {
    for (let i = 1; i <= 3; i++) {
        let date = new Date(data.list[i * 8].dt * 1000).toDateString();
        let temp = data.list[i * 8].main.temp;
        let condition = data.list[i * 8].weather[0].description; 
        
        let p = document.createElement("p");
        p.textContent = `${date}: ${temp}F ${condition}`;
        
        forecast.appendChild(p);
    }
}

apiFetch();