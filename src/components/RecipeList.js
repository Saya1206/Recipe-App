import React from "react";

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes found. Try a different search!</p>
      ) : (
        <div className="recipe-list">
          {recipes.map((recipe, index) => (
            <div key={index} className="recipe-card">
              <img src={recipe.recipe.image} alt={recipe.recipe.label} />
              <h3>{recipe.recipe.label}</h3>
              <p>{recipe.recipe.source}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
