import React from 'react'

const RecipeCard = ({ recipe }) => {
  return (
    <div className='recipe-card'>
      <img src={`${recipe.image}`} alt={recipe.name} />
      <h3>{ recipe.name }</h3>
      <h4>Price: Rs.{ recipe.price }/-</h4>
      <p>Preparation Time: { recipe.prepTime } minutes</p>
    </div>
  )
}

export default RecipeCard
