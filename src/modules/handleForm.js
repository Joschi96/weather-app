// Takes in the form input (location) and returns the object created by the
// processWeatherData function for that location

import processWeatherData from './handleData';

// Function to handle form submission
// On clicking on the submit button, it takes the input from the form
// and fetches the weather data for that location
// It takes the location as input and returns the processed weather data

const form = document.querySelector('form');
const locationInput = document.querySelector('input[id="address"]');

async function handleForm(location) {
  try {
    const processedData = await processWeatherData(location);
    console.log('Processed Data from Form:', processedData);
    return processedData;
  } catch (error) {
    console.error('Error handling form:', error);
    return null;
  }
}

// Event listener for the submit button
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission
  const location = locationInput.value;
  console.log('Location:', location);
  const processedData = await handleForm(location);
  console.log('Processed Data after submit:', processedData);
});

export { form, locationInput };
