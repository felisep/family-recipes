type Recipe = {
	id: string;
	name: string;
	creator: string;
	description: string;
	people: number;
	ingredients: IngredientsInfo[];
	steps: string[];
};

type IngredientsInfo = {
	name: string;
	amount: number | null;
	unit: string;
};

type RecipesRowProps = {
	recipe: Recipe;
};

export type { IngredientsInfo, Recipe, RecipesRowProps };
