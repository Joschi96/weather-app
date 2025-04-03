function updateUIElement(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
}

function showElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.classList.remove('hidden');
  }
}

const iconBackgroundMap = {
  'clear-day': 'clear',
  'clear-night': 'clear',
  'partly-cloudy-day': 'partly-cloudy',
  'partly-cloudy-night': 'partly-cloudy',
  rain: 'rain',
  snow: 'snow',
  wind: 'wind',
  fog: 'cloudy',
  cloudy: 'cloudy',
};

async function setWeatherBackground(icon) {
  const mappedName = iconBackgroundMap[icon] || 'clear'; // fallback auf 'clear'

  try {
    const image = await import(
      /* webpackMode: "lazy", webpackChunkName: "backgrounds" */
      `../backgrounds/${mappedName}.png`
    );

    document.body.style.backgroundImage = `url(${image.default})`;
  } catch (error) {
    console.error('Failed to load background image:', error);
  }
}

async function renderData(data) {
  if (!data) {
    console.error('No data to render, setting default background');
    await setWeatherBackground('clear');
    return;
  }

  // Update the UI elements with the fetched data
  updateUIElement('.address', data.location);
  updateUIElement('.condition', data.conditions);
  updateUIElement('.temp', `${data.temperature}`);
  updateUIElement('.feelslike', `FEELS LIKE: ${data.feelsLike} °C`);
  updateUIElement('.humidity', `HUMIDITY: ${data.humidity} %`);
  updateUIElement('.wind', `WIND: ${data.windSpeed} km/h`);

  // Show the relevant elements
  showElement('.weather-data');
  await setWeatherBackground(data.icon);
}

export default renderData;
