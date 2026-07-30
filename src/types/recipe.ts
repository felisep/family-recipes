type Recipe = {
	id: string;
	name: string;
	description: string;
	people: number;
};

type RecipesRowProps = {
	recipe: Recipe;
};

export type { Recipe, RecipesRowProps };
