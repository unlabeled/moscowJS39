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

// Function which saves result of function execution with some params
// Impelement it yourself
export function functionResults(func, ...params) {
  params = params.length === 1
    ? params[0]
    : params
  return func(params)
}

// Get cached rusult of request
// Fetch and save the result if there is no saved data
// this is any stateful component
export function requests(city) {
  let { _requestsCache } = this.state || {}
  _requestsCache = _requestsCache || {}
  if (_requestsCache.hasOwnProperty(city)) {
    return _requestsCache[city]
  }
  myFetch(city).then(temp => {
    this.setState({ _requestsCache: { ..._requestsCache, [city]: temp }})
  })
}