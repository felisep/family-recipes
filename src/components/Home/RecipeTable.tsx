import type { Recipe } from "../../types/recipe";
import RecipesRow from "./RecipesRow";
import "./RecipeTable.css";

const RecipeHeader = () => {
	return (
		<thead>
			<tr>
				<th>Name</th>
				<th>Description</th>
				<th>Amount</th>
			</tr>
		</thead>
	);
};

const RecipeTable = ({ recipes }: { recipes: Recipe[] }) => {
	return (
		<table>
			<RecipeHeader />
			<tbody>
				{recipes.map((recipe) => (
					<RecipesRow recipe={recipe} key={recipe.name} />
				))}
			</tbody>
		</table>
	);
};

export default RecipeTable;
