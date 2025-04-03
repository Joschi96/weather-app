// import getWeatherData from './modules/getData';
// import processWeatherData from './modules/handleData';
import './modules/handleForm';
import { setWeatherBackground } from './modules/renderData';
import './styles.css';
import githubIcon from './backgrounds/github.svg';

// Set the default background for "clear" weather on page load
document.addEventListener('DOMContentLoaded', () => {
  // renderData();
  setWeatherBackground('clear');

  // Dynamically set the GitHub icon in the footer
  const githubImg = document.querySelector('footer img');
  if (githubImg) {
    githubImg.src = githubIcon;
  }
});
