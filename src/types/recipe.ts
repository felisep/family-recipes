type Recipe = {
	id: string;
	name: string;
	creator: string;
	description: string;
	people: number;
	ingredients: string[];
	steps: string[];
};

type RecipesRowProps = {
	recipe: Recipe;
};

export type { Recipe, RecipesRowProps };
