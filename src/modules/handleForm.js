// Takes in the form input (location) and returns the object created by the
// processWeatherData function for that location

import processWeatherData from './handleData';
import renderData from './renderData';

// Function to handle form submission
const form = document.querySelector('form');
const locationInput = document.querySelector('input[id="address"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission
  const location = locationInput.value;

  try {
    const processedData = await processWeatherData(location);
    console.log('Processed Data:', processedData);
    renderData(processedData);
  } catch (error) {
    console.error('Error handling form submission:', error);
  }
});

// export { form, locationInput };
