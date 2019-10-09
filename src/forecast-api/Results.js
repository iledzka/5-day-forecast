import * as cityList from "./city.list.json";

function createRequestForACity(cityId) {
  return () => {
    const apiKey = "7596b7d11eb133bcb7f3e994fbb7a0ba";
    const apiRequestString = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${apiKey}`;

    return process.env.REACT_APP_API || apiRequestString;
  };
}

function handleError(e) {
  console.error("forecast-api error", e);
  throw e;
}

function validateCity(city, requestedCity) {
  if (!city) {
    throw new Error(`Couldn't find requested city.`);
  }
  if (city.length > 1) {
    throw new Error("Invalid number of cities returned");
  }
}

function matches(obj, source) {
  return Object.keys(source).every(key => obj[key] && obj[key] === source[key]);
}

function findCity(requestedCity) {
  return Object.values(cityList)
    .filter(cityObject => matches(cityObject, requestedCity))
    .shift();
}

async function getForecast(requestedCity) {
  try {
    let city = requestedCity;
    if (!requestedCity.id) {
      city = findCity(requestedCity);
      validateCity(city, requestedCity);
    }

    const url = createRequestForACity(city.id);

    const response = await fetch(url());

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const forecastData = await response.json();
    if (forecastData.cod === "200") {
      return forecastData;
    } else {
      throw new Error(forecastData);
    }
  } catch (e) {
    handleError(e);
  }
}
export default {
  byCityAndCountry: (name, country) => getForecast({ name, country })
};