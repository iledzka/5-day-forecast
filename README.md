# 5 Day Forecast

Check 5 day forecast for a location of your choice!

Forecast data is provided by [Open Weather](https://openweathermap.or)

To view the project: [https://iledzka.github.io/5-day-forecast/](https://iledzka.github.io/5-day-forecast)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Prerequisites

Install Node.js and NPM via [nodejs.org](nodejs.org/en/) (Project was built using version 10.16.3 LTS)

Install React.js by typing in your terminal:

```
sudo npm install -g create-react-app
```

## Getting Started

To run the project on your machine, you need to have Git installed.

Clone the project by running:

```
git clone https://github.com/iledzka/5-day-forecast.git
```

Inside the '5-day-forecast' folder, run:

```
npm install
```

The project can be run locally by running in the same directory:

```
npm run start
```

Runs the app in development mode.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Running the Tests

Tests were written using [Jest](https://jestjs.io/).

To run test:

```
npm test
```

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Test Coverage

Currently, the unit tests have very limited coverage. The current implementation has a call to the API and is tested by mocking and testing fetch. This needs to be extended to test more edge cases.

## Deployment

To run the build step:

```
npm run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimises the build for the best performance.

The build is minified and the filenames include the hashes.<br />
After this, the app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Technology Stack

The app was build using

# React.js

# ES6

# HTML5

# CSS3

## Libraries used

## [react-select](https://github.com/JedWatson/react-select)

## Future Enhancements

### Testing

I would like to include more comprehensive test coverage. I'd like to use Enzyme to also test the React Components output.

### User Interface

With more time, I would like to make this page to be fully responsive on multiple displays sizes. This could be achieved by using CSS Grid instead of Flexbox.

Currently, the dashboard has a minimal styling and displays only time, description of the weather conditions, and temperature. This could be enhanced to include more data, such as pressure, wind speed, sunset, and sunrise times, etc.

Another possible improvement is to create an interface that would be displayed to the user if the Open Weather API was unavailable.

### API keys

Currently, the API key is hardcoded inside the source (or can be supplied by providing a new API URL via REACT_APP_API_URL). Ideally, the API URL and key would be externalised and provided via environment variable during the deployment time.

### List of Locations

The locations that appear in the search box are hardcoded in a file inside the project. Ideally, I would write a backend service to asynchronously query the database as a user types, which would allow for having more locations to autocomplete. I could achieve this by writing a REST API endpoint in Node.js.
