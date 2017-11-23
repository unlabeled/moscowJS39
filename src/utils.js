const API_KEY = "b110e3d59dd087e3de8ee789b7819ecc"
const API_URL = "https://api.openweathermap.org/data/2.5/"

const url = `${API_URL}weather?units=metric&appid=${API_KEY}`

// Here will be your fetch function
export function myFetch(city) {
  const fetchUrl = `${url}&q=${city}`
  return fetch(fetchUrl)
    .then(response => response.json())
    .then(response => response.main.temp)
    .catch(error => Math.random())
}

// Complicated calculations function
export function complicatedCalc(str) {
  return str ? str.length : 0
}
