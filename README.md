# Rap Names API

Welcome to the Rap Names API! This project provides comprehensive rapper profiles using serverless functions deployed on Netlify. The frontend is styled using Tailwind CSS in a Brutalist style.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [How to Use](#how-to-use)
- [Deploying to Netlify](#deploying-to-netlify)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Rap Names API is a simple web application that serves detailed profiles of various rappers. It utilizes serverless functions to handle API requests and Tailwind CSS for styling.

## Features

- Serverless architecture using Netlify functions
- Tailwind CSS for styling with a Brutalist design
- Dynamic dropdown to fetch and display rapper profiles
- Easy to deploy and extend

## Technologies Used

- **Frontend**: HTML, Tailwind CSS
- **Backend**: Node.js, Express.js (converted to serverless functions)
- **Deployment**: Netlify

## Setup and Installation

Follow these steps to set up and run the project locally:

1. **Clone the Repository**

   ```sh
   git clone https://github.com/your-username/rap-names-api.git
   cd rap-names-api
   ```

2. **Install Dependencies**

   Make sure you have Node.js installed, then run:

   ```sh
   npm install
   ```

3. **Set Up Tailwind CSS**

   Ensure you have the necessary configuration files:

   - `postcss.config.js`

     ```javascript
     module.exports = {
       plugins: {
         tailwindcss: {},
         autoprefixer: {},
       },
     };
     ```

   - `tailwind.config.js`

     ```javascript
     module.exports = {
       purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
       darkMode: false,
       theme: {
         extend: {},
       },
       variants: {
         extend: {},
       },
       plugins: [],
     };
     ```

4. **Build CSS**

   Run the Tailwind CSS build command:

   ```sh
   npm run build:css
   ```

5. **Run Locally**

   Start the server:

   ```sh
   npm start
   ```

   Open your browser and navigate to `http://localhost:8000`.

## How to Use

1. Select a rapper from the dropdown menu.
2. View the detailed profile of the selected rapper, including age, birth name, and birth location.

## Deploying to Netlify

To deploy this project to Netlify:

1. **Push Your Project to GitHub**

   Ensure all your changes are committed and pushed to GitHub:

   ```sh
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

2. **Create a New Site on Netlify**

   - Go to [Netlify](https://www.netlify.com/) and log in.
   - Click on “New site from Git”.
   - Connect to your GitHub account and select the repository.
   - Configure the build settings:
     - **Build Command**: `npm run build:css`
     - **Publish Directory**: `public`

3. **Deploy the Site**

   Netlify will build and deploy your site automatically. You can view the live site once the deployment is complete.

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
