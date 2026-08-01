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
			<table>
				<tbody>
					{sortedRecipes.map((recipe) => (
						<RecipesRow recipe={recipe} key={recipe.name} />
					))}
				</tbody>
			</table>
		</>
	);
};

export default RecipeTable;
