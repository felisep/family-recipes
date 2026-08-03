type Recipe = {
	id: string;
	name: string;
	description: string;
	people: number | null;
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
