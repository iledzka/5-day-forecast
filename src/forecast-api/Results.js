import cities from "./cities";

function createRequestForACity(cityId) {
  return () => {
    const apiKey = "7596b7d11eb133bcb7f3e994fbb7a0ba";
    const apiRequestString = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&APPID=${apiKey}`;

    return process.env.REACT_APP_API || apiRequestString;
  };
}

function handleError(e) {
  console.error("forecast-api error", e);
  throw e;
}

function validateCity(city, requestedCity) {
  if (!city) {
    throw new Error("Couldn't find requested city.");
  }
  if (city.length > 1) {
    throw new Error("Invalid number of cities returned");
  }
}

function findCity(requestedCity) {
  const keys = Object.keys(requestedCity);

  return cities()
    .filter(o => keys.every(key => o[key] && o[key] === requestedCity[key]))
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
  byCityAndCountry: (name, country) => getForecast({ name, country }),
  getById: id => getForecast({ id }),
  getCities: cities
};
