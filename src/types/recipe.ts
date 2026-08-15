type Recipe = {
	id: string;
	name: string;
	description: string;
	people: number | null;
	ingredients: IngredientsInfo[];
	steps: string[];
};

type Ingredient = {
	amount: number | null;
	unit: string;
	name: string;
};

type IngredientsInfo = {
	heading: string | null;
	items: Ingredient[];
};

type RecipesRowProps = {
	recipe: Recipe;
};

export type { Ingredient, IngredientsInfo, Recipe, RecipesRowProps };
