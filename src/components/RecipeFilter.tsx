import type { Recipe } from "../types/recipe";

function getTags(recipe: Recipe): Recipe["tag"] {
	return recipe.tag;
}

const clickTag = (tag: string) => {
	console.log(`${tag}`);
};

const RecipeFilter = ({ recipe }: { recipe: Recipe[] }) => {
	const recipeTags = recipe.map(getTags);

	const uniqueTags = Array.from(new Set(recipeTags.flat()));

	const listTags = uniqueTags.map((tag) => (
		<button type="button" key={tag} onClick={() => clickTag(tag)}>
			{tag}
		</button>
	));

	return (
		<div>
			<ul>{listTags}</ul>
		</div>
	);
};

export default RecipeFilter;
