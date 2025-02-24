import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={`${recipe.image}`} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <h3 className='price'>Rs.{ recipe.price }/-</h3>
      <p><b>Ingredients: </b>{recipe.ingredients.join(', ')}</p>
      <p><b>Preparation Time: </b>{recipe.prepTime} minutes</p>
      <p><b>Rating: {recipe.rating }</b></p>
    </div>
  );
}

export default RecipeCard;
