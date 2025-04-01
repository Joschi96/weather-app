// Takes the fetched data and processes it
// to extract the relevant information required for the app

// It takes the data in JSON format and returns an object with the relevant information:
// {
//   location: string,
//   temperature: number,
//   feelsLike: number,
//   humidity: number,
//   windSpeed: number,
//   conditions: string,
//   icon: string}

import getWeatherData from './getData';

// Function to process the weather data and return Object with relevant information
async function processWeatherData(location) {
  try {
    const data = await getWeatherData(location);
    const current = data.currentConditions || {};

    const processedData = {
      location: data.resolvedAddress || 'Unknown location',
      temperature: current.temp ?? null,
      feelsLike: current.feelslike ?? null,
      humidity: current.humidity ?? null,
      windSpeed: current.windspeed ?? null,
      conditions: current.conditions || 'Unknown',
      icon: current.icon || 'default',
    };
    console.log('Processed Weather Data:', processedData);
    return processedData;
  } catch (error) {
    console.error('Error processing weather data:', error);
    return null;
  }
}

export default processWeatherData;
