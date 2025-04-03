// Function for fetching data from the API (visualcrossing.com)
// It takes a location and returns the weather data of the current day
// and time for that location in JSON format

import mockWeatherData from './mockWeatherData';

const useMockData = false; // Set to true to use mock data

async function getWeatherData(location) {
  if (useMockData) {
    console.log('Returning mock data');
    return mockWeatherData;
  }
  const apiKey = 'B8NJ3Q8FQQMQSVV7BWG7KSGX2';
  // bring date to  "yyyy-MM-ddTHH:mm:ss" format
  const date = new Date().toISOString().slice(0, 19);
  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date}?unitGroup=metric&include=current&key=${apiKey}&contentType=json`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}

export default getWeatherData;
