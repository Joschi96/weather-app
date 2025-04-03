// Takes in the form input (location) and returns the object created by the
// processWeatherData function for that location

import processWeatherData from './handleData';
import renderData from './renderData';

// Function to handle form submission
const form = document.querySelector('form');
const locationInput = document.querySelector('input[id="address"]');
const errorMessage = document.createElement('div'); // Create an error message element
errorMessage.className = 'error-message hidden'; // Add a class for styling
document.body.appendChild(errorMessage); // Append it to the body or a specific container

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission
  const location = locationInput.value;

  try {
    const processedData = await processWeatherData(location);

    if (!processedData || !processedData.location || processedData.location === 'Unknown location') {
      // Show error message if no data is found
      errorMessage.textContent = 'No weather data found for the entered location. Please try again.';
      errorMessage.classList.remove('hidden');
      return;
    }

    // Hide error message if data is valid
    errorMessage.classList.add('hidden');
    renderData(processedData);
  } catch (error) {
    console.error('Error handling form submission:', error);
    errorMessage.textContent = 'An error occurred while fetching weather data. Please try again.';
    errorMessage.classList.remove('hidden');
  }
});

// export { form, locationInput };
