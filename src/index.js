// import getWeatherData from './modules/getData';
// import processWeatherData from './modules/handleData';
import './modules/handleForm';
import renderData from './modules/renderData';

// getWeatherData('Vienna');
// processWeatherData('Vienna');
// handleForm('Vienna');

// Set the default background for "clear" weather on page load
document.addEventListener('DOMContentLoaded', () => {
  renderData();
});
