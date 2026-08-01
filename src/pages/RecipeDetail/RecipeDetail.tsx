import { useParams } from "react-router-dom";
import Ingredients from "../../components/RecipeDetails/Ingredients";
import RecipeName from "../../components/RecipeDetails/RecipeName";
import RECIPES from "../../data/Recipes";
import "./RecipeDetail.css";
import { useState } from "react";
import Instructions from "../../components/RecipeDetails/Instructions";

const RecipeDetail = () => {
	const { id: paramId } = useParams<{ id: string }>();
	const recipeId = paramId;
	const recipe = RECIPES.find((recipe) => recipe.id === recipeId);
	const [number, setNumber] = useState(recipe?.people || 0);

	if (!recipeId) {
		return <div>Recipe ID not found</div>;
	}

	const ingredients = recipe?.ingredients || [];
	const steps = recipe?.steps || [];

	return (
		<div className="recipe-detail">
			<RecipeName
				name={recipe?.name || ""}
				creator={recipe?.creator || ""}
				people={recipe?.people || 0}
				number={number}
				setNumber={setNumber}
			/>
			<Ingredients ingredients={ingredients} number={number} />
			<Instructions instructions={steps} />
		</div>
	);
};

export default RecipeDetail;
