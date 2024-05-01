# Vue Clock App

This project is a Vue application designed to display the current time and location information based on the visitor's IP address. Additionally, it offers dynamic background images sourced from Unsplash API, along with random quotes fetched from the Quotable API.

![Vue.js Badge](https://img.shields.io/badge/Vue.js-4FC08D?logo=vuedotjs&logoColor=fff&style=flat)
![Vite Badge](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat)
![Vercel Badge](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=flat)
![Axios Badge](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=flat)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)
![Unsplash Badge](https://img.shields.io/badge/Unsplash-000?logo=unsplash&logoColor=fff&style=flat)

[![screenshot](https://github.com/Valik3201/vue-clock-app/blob/main/public/screenshot-1.png)](https://github.com/Valik3201/vue-clock-app/blob/main/public/screenshot-1.png)
[![screenshot](https://github.com/Valik3201/vue-clock-app/blob/main/public/screenshot-2.png)](https://github.com/Valik3201/vue-clock-app/blob/main/public/screenshot-2.png)

## Overview

The Vue Clock App is a project developed for learning purposes, focusing on utilizing Vue.js framework. It demonstrates the implementation of fetching data from APIs, responsive design, dynamic content rendering, and interaction handling.

## Features

- View the current time and location information based on the visitor's IP address.
- Additional information about the date and time is displayed in the expanded state.
- The greeting change based on the time of day.
- Background image dynamically changes based on the visitor's location using the Unsplash API.
- Generate random quotes by clicking the refresh icon.

## Technologies Used

- **Vue.js**: A progressive JavaScript framework used for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Axios**: A promise-based HTTP client for making requests to APIs.
- **Vite**: A fast build tool that focuses on providing a streamlined development experience for Vue projects.
- **World Time API:** Provides accurate and reliable time zone data based on IP address, ensuring precise time information for the application.
- **Free IP API**: Used to retrieve the visitor's location information based on their IP address.
- **Unsplash API**: Provides access to a vast collection of high-quality images for dynamic background generation.
- **Quotable API**: Provides random programming quotes for the application.

## Usage

To run the Vue Clock App locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd vue-clock-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the application.

## Useful Resources

During the development of this application, the following resources were invaluable in providing guidance and insights:

1. [A Comprehensive Guide to Fetching Data from API with Vue.js](https://medium.com/@sixtusgreat_16629/title-a-comprehensive-guide-to-fetching-data-from-api-with-vue-js-710c44a81ce3) - This medium article provided a detailed walkthrough of fetching data from APIs using Vue.js. It offered clear explanations and practical examples, which helped in integrating API calls seamlessly into the application.
2. [Dealing with SVG Icons in Vue with Vite](https://dev.to/geowrgetudor/dealing-with-svg-icons-in-vue-vite-an9) - This dev.to post offered insights into effectively handling SVG icons in Vue projects built with Vite. It provided solutions to common challenges and best practices for optimizing SVG usage, which enhanced the application's UI/UX.
3. [Vue.js Official Documentation](https://vuejs.org) - The official documentation of Vue.js served as a comprehensive reference throughout the development process. It offered detailed explanations of Vue.js concepts, API references, and practical examples, which were instrumental in understanding and implementing Vue features effectively.
These resources not only aided in overcoming specific challenges but also contributed to a deeper understanding of Vue.js development principles, ultimately enhancing the quality of the Vue Clock App.

These resources not only aided in overcoming specific challenges but also contributed to a deeper understanding of Vue.js development principles, ultimately enhancing the quality of the Vue Clock App.

## Key Differences from React

- **Reactivity and Component-Based Approach**:
  Vue offers a more straightforward and declarative approach to building components and managing state. Reactive data and computed properties make the code more understandable and easier to maintain.

- **Template System and Reactive Directives**:
  Vue heavily utilizes templates, allowing for easy creation of dynamic interfaces with directives such as `v-if`, `v-for`, and `v-bind`. This simplifies DOM manipulation and enhances code readability.

- **State Management**:
  Vue often relies on its built-in reactivity mechanism and component-local states for state management, whereas React commonly employs libraries like Redux or Context API for this purpose.

- **Size and Performance**:
  Vue typically has a lower entry barrier and smaller footprint, potentially making it more appealing for small projects or beginner developers. However, both frameworks are performant and scalable.

## Is Vue Suitable for Such Projects?

Yes, Vue is well-suited for projects of this nature. It provides intuitive tools for creating interactive and dynamic user interfaces, making it an excellent choice for applications of varying sizes and complexities. In this project, Vue was utilized to develop a clock application using APIs for time and additional information, as well as for generating random quotes. Vue's capabilities facilitated state management, responsiveness to changes, and the creation of a dynamic interface.

## Author

[![Frontend Mentor Badge](https://img.shields.io/badge/Frontend%20Mentor-3F54A3?logo=frontendmentor&logoColor=fff&style=flat)](https://www.frontendmentor.io/profile/Valik3201)
[![Gmail Badge](https://img.shields.io/badge/Gmail-EA4335?logo=gmail&logoColor=fff&style=flat)](mailto:valik3201@gmail.com)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=fff&style=flat)](https://www.linkedin.com/in/valentynchernetskyi/)

## Acknowledgements

This project was created as a challenge on [Frontend Mentor](https://www.frontendmentor.io/challenges/clock-app-LMFaxFwrM), a platform that provides challenges for developers to practice their skills and improve their frontend development abilities. Many thanks to Frontend Mentor for providing the inspiration and opportunity to work on this project.

Feel free to explore the code and provide feedback! 🚀
