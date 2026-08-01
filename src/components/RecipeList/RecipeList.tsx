import RECIPES from "../../data/Recipes";
import type { Recipe } from "../../types/recipe";
import RecipeTable from "./RecipeTable";

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
