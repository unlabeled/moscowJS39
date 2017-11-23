const API_KEY = "b110e3d59dd087e3de8ee789b7819ecc"
const API_URL = "https://api.openweathermap.org/data/2.5/"

const url = `${API_URL}weather?units=metric&appid=${API_KEY}`

// Here will be your fetch function
function myFetch(city) {
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

const loading = new Set()

export function request(city) {

  let { requestsCache } = this.state
  requestsCache = requestsCache || {}

  if (loading.has(city)) {
    return undefined
  }

  if (requestsCache.hasOwnProperty(city)) {
    return requestsCache[city]
  }

  loading.add(city)

  myFetch(city)
    .then(temp => {
      loading.delete(city)
      this.setState({
        requestsCache: {
          ...requestsCache,
          [city]: temp
        }
      })
    })
    .catch(() => loading.delete(city))
}