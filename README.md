# Weather App 🌦️

This is a weather application built as part of **The Odin Project** front-end training course. The app allows users to search for weather information by location, fetches data from the Visual Crossing Weather API, and displays the current weather conditions in a user-friendly interface.

## 📖 Assignment Details

This project was completed as part of the following task:

1. Set up a blank HTML document with links to JavaScript and CSS files.
2. Write functions to fetch weather data from an API using a location input.
3. Process the JSON data from the API to extract only the required information.
4. Create a form for users to input their location and fetch weather data.
5. Display the weather information on the webpage.
6. Optionally, dynamically import weather icons using Webpack.
7. Add custom styling to the app.
8. (Optional) Add a loading component to display while fetching data.
9. Push the project to GitHub and share the solution.

## 🚀 Features

- **Search Weather by Location**: Users can input a location to fetch and display the current weather conditions.
- **Dynamic Backgrounds**: The app dynamically updates the background image based on the weather condition (e.g., clear, rain, cloudy).
- **Error Handling**: Displays an error message if the location is invalid or no data is found.
- **Responsive Design**: The app is styled to look great on both desktop and mobile devices.
- **Dynamic Imports**: Weather icons and backgrounds are dynamically imported using Webpack for optimized bundling.

## 🛠️ Technologies Used

- **HTML5**: For the structure of the app.
- **CSS3**: For styling and responsive design.
- **JavaScript (ES6)**: For functionality and API integration.
- **Webpack**: For bundling assets and managing dependencies.
- **Visual Crossing Weather API**: For fetching real-time weather data.

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR-GITHUB-USERNAME/weather-app.git
   cd weather-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run start
   ```

4. Open the app in your browser at `http://localhost:8080`.

## 🌟 Features in Detail

### Weather Search

- Users can input a location (e.g., "Vienna, Austria") to fetch the current weather conditions.
- The app displays:
  - Temperature
  - Feels-like temperature
  - Humidity
  - Wind speed
  - Weather condition (e.g., Sunny, Rainy)

### Dynamic Backgrounds

- The app updates the background image based on the weather condition using dynamic imports.

### Error Handling

- If the location is invalid or no data is found, the app displays an error message.

### Mock Data

- A mock data mode is available for testing without making API calls. This can be enabled by setting `useMockData` to `true` in `src/modules/getData.js`.

## 🏗️ Project Structure

```plaintext
weather-app/
├── src/
│   ├── backgrounds/         # Background images and icons
│   ├── modules/             # JavaScript modules
│   │   ├── getData.js       # Fetches weather data from the API
│   │   ├── handleData.js    # Processes the fetched data
│   │   ├── handleForm.js    # Handles form submission
│   │   ├── renderData.js    # Renders data to the UI
│   │   └── mockWeatherData.js # Mock weather data for testing
│   ├── styles.css           # App styling
│   ├── index.js             # Main JavaScript entry point
│   ├── index.html           # HTML template
├── webpack.config.js        # Webpack configuration
├── package.json             # Project metadata and dependencies
├── .eslintrc.json           # ESLint configuration
├── .prettierrc              # Prettier configuration
├── .editorconfig            # EditorConfig for consistent formatting
├── README.md                # Project documentation
```

## 📄 License

This project is licensed under the **MIT License**.

## 📚 Learning Outcomes

Through this project, I learned:

- How to fetch and process data from an external API.
- How to dynamically import assets using Webpack.
- How to handle errors and provide feedback to users.
- How to structure a front-end project using modular JavaScript.
- How to use Webpack for bundling and development.

## 🌐 Live Demo

You can view the live demo of the app [here]().

## 🤝 Acknowledgments

- **The Odin Project**: For providing the assignment and guidance.
- **Visual Crossing Weather API**: For the weather data. ;)
