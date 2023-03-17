import './App.css';
import { useCallback, useEffect, useState } from'react';
import video from './food.mp4'
import MyRecipesComponent from './myRecipesComponent';



function App() {

const myId = "63087b9f";
const myKey = "4889591541ee42b4a194c5ee3a2190fa";

const [mySearch, setMySearch] = useState ("");
const [myRecipes, setMyRecipes]= useState([]);
const [wordSubmitted, setWordSubmitted] = useState("salad");

const getRecipe = useCallback(async () => {
  const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${myId}&app_key=${myKey}`)
  const data = await response.json();
  // getRecipe(data)
  setMyRecipes(data.hits);
}, [wordSubmitted])

const myRecipeSearch = (e) => {
setMySearch(e.target.value)
}

const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
}

useEffect (()=> {
  getRecipe()
}, [getRecipe])



  return (
   <div className='App' >
<div className='container'>
<video autoPlay muted loop>
  <source src={video} type="video/mp4" />
  </video>
<h1>Find a Recipe</h1>
</div>

<div className='container'>
  <form onSubmit={finalSearch}>
    <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}>
    </input>
  </form>
  </div>

  <div className='container'>
    <button>
      <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="frying pan" className='icons'/>
    </button>
</div>

{myRecipes.map(element => (
  <MyRecipesComponent label={element.recipe.label}
   image={element.recipe.image} 
   calories={element.recipe.calories}
   ingredient={element.recipe.ingredientLines}
   />
))}





   </div>
   
  );
}

export default App;
