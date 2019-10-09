import * as cityList from "./city.list.json";

function createRequestForACity(cityId) {
  return () => {
    const apiKey = "524901&APPID=7596b7d11eb133bcb7f3e994fbb7a0ba";
    const apiRequestString = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${apiKey}`;

    return process.env.REACT_APP_API || apiRequestString;
  };
}

function handleError(e) {
  console.error("forecast-api error", e);
  throw e;
}

export default async function getResultsForACity(cityName) {
  try {
    const city = cityList.filter(({ name }) => name === cityName);

    const url = createRequestForACity(city.id);
    const response = await fetch(url());
    const forecastData = await response.json();

    if (forecastData.cod === 200) {
      return forecastData;
    } else {
      throw forecastData;
    }
  } catch (e) {
    handleError(e);
  }
}
