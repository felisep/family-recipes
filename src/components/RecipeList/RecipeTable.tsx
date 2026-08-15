import type { Recipe } from "../../types/recipe";
import RecipesRow from "./RecipesRow";
import "./RecipeTable.css";

const RecipeTable = ({ recipes }: { recipes: Recipe[] }) => {
	const sortedRecipes = [...recipes].sort((a, b) =>
		a.name.localeCompare(b.name),
	);

	return (
		<>
			<h1>Name</h1>
			<div className="recipe-card-list">
				{sortedRecipes.map((recipe) => (
					<RecipesRow recipe={recipe} key={recipe.name} />
				))}
			</div>
		</>
	);
};

export default RecipeTable;
