import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import FilterBar from './FilterBar';


const RecipeMain = () => {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [searchItems, setSearchItems] = useState('');
    const [filterOptions, setFilterOptions] = useState({
        type: '',
        prepTime: ''
    });

    useEffect(()=>{
        const fetchRecipes = async () =>{
            try{
                const response = await fetch('/myRecipes.json');
                const data = await response.json();
                setRecipes(data)
            } 
            catch (error) {
                console.log('Error fetching recipes:', error);
            }
        }
        fetchRecipes();
    },[]);

    useEffect(()=>{
        let filtered = recipes.filter((recipe)=>{

            const matchesSearch = 
                recipe.name.toLowerCase().includes(searchItems.toLocaleLowerCase());

            const matchesType = 
                !filterOptions.type || recipe.type === filterOptions.type;

            const matchesPrepTime =
                !filterOptions.prepTime || recipe.prepTime <= filterOptions.prepTime;
            
            return matchesSearch && matchesType && matchesPrepTime;
        });

        setFilteredRecipes(filtered);
    },[recipes, searchItems, filterOptions]);

  return (
    <div className='main'>
        <SearchBar searchItems={ searchItems } setSearchItems={ setSearchItems }/>
        <FilterBar  filterOptions={filterOptions} setFilterOptions={ setFilterOptions }/>
        <RecipeList recipes={filteredRecipes}/>
    </div>
  )
}

export default RecipeMain
