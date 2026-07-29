import RECIPES from "../data/newRecipes";

type Recipe = {
	name: string;
	description: string;
};

type RecipesRowProps = {
	recipe: Recipe;
};

const RecipesRow = ({ recipe }: RecipesRowProps) => {
	return (
		<tr>
			<td>{recipe.name}</td>
			<td>{recipe.description}</td>
		</tr>
	);
};

const RecipeTable = ({ recipes }: { recipes: Recipe[] }) => {
	const rows: JSX.Element[] = [];

	recipes.forEach((recipes) => {
		rows.push(<RecipesRow recipe={recipes} key={recipes.name} />);
	});

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
};

const RecipeList = ({ recipes }: { recipes: Recipe[] }) => {
	return (
		<div>
			<RecipeTable recipes={recipes} />
		</div>
	);
};

export default function FullRecipeList() {
	return <RecipeList recipes={RECIPES} />;
}
