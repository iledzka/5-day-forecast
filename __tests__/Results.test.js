import Results from "../src/forecast-api/Results";
import mockFetch from "fetch";

test("returns 5 day forecast for a city from OpenWeather", async done => {
  const city = "Edinburgh";
  jest.spyOn(global, "fetch").mockImplementation(() => mockFetch); // 4
  const forecastData = await Results(city);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  global.fetch.mockClear();
  expect(forecastData)
    .includes({ code: 200 })
    .toBe(true);
  done();
});
