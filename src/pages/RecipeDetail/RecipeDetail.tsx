import { useParams } from "react-router-dom";
import Ingredients from "../../components/RecipeDetails/Ingredients";
import RecipeName from "../../components/RecipeDetails/RecipeName";
import RECIPES from "../../data/newRecipes";
import "./RecipeDetail.css";
import Instructions from "../../components/RecipeDetails/Instructions";

const RecipeDetail = () => {
	const { id: paramId } = useParams<{ id: string }>();
	const recipeId = paramId;

	if (!recipeId) {
		return <div>Recipe ID not found</div>;
	}

	const recipe = RECIPES.find((recipe) => recipe.id === recipeId);
	console.log("RecipeDetail: recipe", recipe?.id);
	const ingredients = recipe?.ingredients || [];
	const steps = recipe?.steps || [];
	return (
		<div className="recipe-detail">
			<RecipeName name={recipe?.name || ""} creator={recipe?.creator || ""} people={recipe?.people || 0} />
			<Ingredients ingredients={ingredients} />
			<Instructions instructions={steps} />
		</div>
	);
};

export default RecipeDetail;
