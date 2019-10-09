import Results from "../forecast-api/Results";
import mockFetch from "../../__mocks__/fetch";

test("returns 5 day forecast for a city from OpenWeather", async done => {
  const city = "Edinburgh";
  const country = "GB";
  const data = {
    cod: "200",
    message: 0.0078,
    cnt: 40
  };
  window.fetch = mockFetch(data);
  const forecastData = await Results(city, country);
  expect(window.fetch).toHaveBeenCalledTimes(1);
  window.fetch.mockClear();
  expect(forecastData).toMatchObject(data);
  done();
});

test("throws error", async done => {
  const city = "";
  const country = "";
  const data = {
    cod: "200",
    message: 0.0078,
    cnt: 40
  };
  try {
    window.fetch = mockFetch(data);
    await Results(city, country);
    expect(window.fetch).toHaveBeenCalledTimes(1);
    window.fetch.mockClear();
  } catch (e) {
    expect(e).toBeInstanceOf(Error);
    expect(e).toEqual(Error("Couldn't find city , "));
  }

  done();
});
