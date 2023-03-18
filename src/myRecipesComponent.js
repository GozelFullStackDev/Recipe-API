function MyRecipesComponent({label, image , calories, ingredient}){
    return(<div>
        <div className="container" >
            <h2>{label}</h2>
            </div>
<div className="container">
            <img className="tasty" src={image} alt="recipe"/>
            </div>
    <ul className="list">
        {ingredient.map(ingredient => (
            <li>{ingredient}</li>
        ))}
    </ul>

<div className="container">
            <p className="par">{calories.toFixed()} calories</p>
            </div>
        </div>
    )
}
export default MyRecipesComponent;
