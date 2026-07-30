import { useParams } from "react-router-dom";
import RECIPES from "../../data/newRecipes";

const RecipeDetail = () => {
	const { id } = useParams();
	const recipe = RECIPES.find((recipe) => recipe.id === id);
	return (
		<ul>
			<li>recipeId: {id}</li>
			<li>name: {recipe?.name}</li>
			<li>people: {recipe?.people}</li>
		</ul>
	);
};

export default RecipeDetail;
