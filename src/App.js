import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import "./App.css";

const API_ID = "429e234f";
const API_KEY = "bee7ef11edc44ad6ea3be36930973585";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("dessert"); // Default query is "dessert"
  const [error, setError] = useState("");

  useEffect(() => {
    if (query === "") return; // Don't fetch recipes if the query is empty
    fetchRecipes();
  }, [query]);

  const fetchRecipes = async () => {
    setError(""); // Reset error before fetching
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=10`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      setError("Error fetching recipes. Please try again.");
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <SearchBar setQuery={setQuery} />

      {/* Show error messages */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display recipes */}
      {!error && recipes.length > 0 && <RecipeList recipes={recipes} />}
      {!error && recipes.length === 0 && query !== "" && (
        <p>No recipes found for "{query}". Try a different search!</p>
      )}
    </div>
  );
};

export default App;
