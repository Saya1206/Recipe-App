import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import "./App.css";

const API_ID = "429e234f";
const API_KEY = "bee7ef11edc44ad6ea3be36930973585";

const App = () => {
  const [recipes, setRecipes] = useState([]); // State for storing recipes
  const [query, setQuery] = useState(""); // Search query state
  const [error, setError] = useState(""); // State for handling errors

  // This effect will trigger the fetch when the query changes
  useEffect(() => {
    fetchRecipes(query || "buns"); // Default to "buns" if query is empty
  }, [query]);

  const fetchRecipes = async (searchQuery) => {
    setError(""); // Reset the error state
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${searchQuery}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=10`
      );
      setRecipes(response.data.hits); // Set the fetched recipes
    } catch (error) {
      setError("Error fetching recipes. Please try again.");
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <SearchBar setQuery={setQuery} />{" "}
      {/* Search bar component for user input */}
      {/* Show error messages */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* Display recipes if available */}
      {recipes.length > 0 && !error && <RecipeList recipes={recipes} />}
      {/* If no recipes found, show a message */}
      {recipes.length === 0 && !error && query !== "" && (
        <p>No recipes found for "{query}". Try a different search!</p>
      )}
    </div>
  );
};

export default App;
