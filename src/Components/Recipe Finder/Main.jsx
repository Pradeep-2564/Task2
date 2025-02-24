import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import Search from './Search';
import Filter from './Filter';
import './Style.css'

function Main() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    type: '',
    prepTime: ''
  });

  useEffect(()=>{
    async function fetchData() {
      try{
        const response = await fetch('./recipes.json');
        const data = await response.json();
        setRecipes(data)
      }
      catch(error){
        console.log('Error fetching recipes:', error);
      }
    }
    fetchData();
  },[]);

  useEffect(() => {
    let filtered = recipes.filter((recipe) => {
      const matchesSearch =
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) 
      
      const matchesType =
        !filterOptions.type || recipe.type === filterOptions.type;

      const matchesPrepTime =
        !filterOptions.prepTime || recipe.prepTime <= filterOptions.prepTime;

      return matchesSearch && matchesType && matchesPrepTime;
    });

    setFilteredRecipes(filtered);
  }, [recipes, searchQuery, filterOptions]);

  return (
    <div className="container">
      <h1>Recipe Finder Application</h1>
      <hr />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filter filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
}

export default Main;
