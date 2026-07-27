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

const RecipeTable = ({ recipes }) => {
	const rows = [];
	let lastCategory = null;

	recipes.forEach((recipes) => {
		if (recipes.category !== lastCategory) {
			rows.push(<RecipesRow recipe={recipes} />);
		}
		rows.push(<RecipesRow recipe={recipes} key={recipes.name} />);
		lastCategory = recipes.category;
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

function RecipeList({ recipes }) {
	return (
		<div>
			<RecipeTable recipes={recipes} />
		</div>
	);
}

export default function FullRecipeList() {
	return <RecipeList recipes={RECIPES} />;
}
