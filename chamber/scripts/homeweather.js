const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#graphic');
const captionDesc = document.querySelector('#condition');


const myKey = "702191d9ae79cf5dc87f8f534b600300";
const myLat = "49.75";
const myLon = "6.64";

const myUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;

async function apiFetch() {
  try {
    const response = await fetch(myUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}


function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', data.weather[0].description);
  captionDesc.textContent = `${desc}`;
}

apiFetch();