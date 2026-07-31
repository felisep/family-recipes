const Ingredients = ({ ingredients }: { ingredients: string[] }) => {
    return (
        <div>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map((ingredient, id) => (
                    <li key={id.toString()}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
}

export default Ingredients;