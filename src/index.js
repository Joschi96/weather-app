// import getWeatherData from './modules/getData';
// import processWeatherData from './modules/handleData';
import './modules/handleForm';
import renderData from './modules/renderData';
import './styles.css';

// Set the default background for "clear" weather on page load
document.addEventListener('DOMContentLoaded', () => {
  renderData();
});
