import RECIPES from "../../data/newRecipes";
import type { Recipe } from "../../types/recipe";
import RecipeTable from "./RecipeTable";
import "./RecipeList.css";

const RecipeList = ({ recipes }: { recipes: Recipe[] }) => {
	return (
		<div className="recipe-list">
			<RecipeTable recipes={recipes} />
		</div>
	);
};

export default function FullRecipeList() {
	return <RecipeList recipes={RECIPES} />;
}
