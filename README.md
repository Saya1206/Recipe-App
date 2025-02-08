# 🍕 Recipe App

Welcome to the Recipe App! This app allows users to search for recipes and view a list of delicious dishes based on the search query. You can search for recipes by ingredient, dish name, or cuisine.

## Features
- Search for recipes based on ingredients or dish names.
- View recipe details such as image, ingredients, and instructions.
- Responsive layout for easy use across different devices.

## Demo

[Insert a link to the live demo of your app (if available)].

## Technologies Used
- **React**: For building the user interface.
- **Axios**: For making HTTP requests to the Edamam API.
- **Edamam API**: To fetch recipe data (recipes, images, ingredients, etc.).
- **CSS**: For styling the components.

## API Integration

This app fetches recipe data from the **Edamam Recipe Search API**. To use this API, you need an `API_ID` and `API_KEY`. These keys are required to make requests to the Edamam API.

### How to Get Your API Credentials:
1. Sign up at [Edamam API](https://developer.edamam.com/) and create an account.
2. Once signed in, navigate to the **API Keys** section to obtain your `API_ID` and `API_KEY`.

### How the API Works:
1. **Search Query**: The app fetches recipes based on the search query. The query can be any food item like "pizza", "pasta", "dessert", etc.
2. **API Request**: The app makes an HTTP GET request to the Edamam API with the provided query, API ID, and API key. 
3. **Response**: The response contains a list of recipes, each with details like the recipe name, image, ingredients, and instructions.

### Project Structure

recipe-app/
├── src/
│   ├── components/
│   │   ├── RecipeList.js      # Component to display recipes
│   │   ├── SearchBar.js       # Component for the search input
│   ├── App.js                 # Main component to handle state and API calls
│   ├── App.css                # Styling for the app
├── package.json               # Project metadata and dependencies
└── README.md                  # This file

## Live Demo

You can try the live demo of the app here: [Live Demo](https://saya1206.github.io/Recipe-App/)

