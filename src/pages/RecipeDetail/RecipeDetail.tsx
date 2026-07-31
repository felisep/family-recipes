import { useParams } from "react-router-dom";
import RECIPES from "../../data/newRecipes";
import Ingredients from "../../components/RecipeDetails/Ingredients";
import RecipeName from "../../components/RecipeDetails/RecipeName";


const RecipeDetail = () => {
	const { id: paramId } = useParams<{ id: string }>();
	const recipeId = paramId;

	if (!recipeId) {
		return <div>Recipe ID not found</div>;
	}

	const recipe = RECIPES.find((recipe) => recipe.id === recipeId);
	console.log("RecipeDetail: recipe", recipe?.id);
	const ingredients = recipe?.ingredients || [];
	return (
		<div>
			<RecipeName name={recipe?.name || ""} creator={recipe?.creator || ""} />
			<Ingredients ingredients={ingredients} />
		</div>
	);
};

export default RecipeDetail;
