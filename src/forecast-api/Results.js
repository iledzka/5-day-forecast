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

function validateCity(city, cityName, countryCode) {
  if (!city || city.name !== cityName || city.country !== countryCode) {
    throw new Error(`Couldn't find city ${cityName}, ${countryCode}`);
  }
  if (city.length > 1) {
    throw new Error("Invalid number of cities returned");
  }
}

export default async function getResultsForACity(cityName, countryCode) {
  try {
    const city = Object.values(cityList)
      .filter(
        ({ name, country }) => name === cityName && country === countryCode
      )
      .shift();
    validateCity(city, cityName, countryCode);
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
