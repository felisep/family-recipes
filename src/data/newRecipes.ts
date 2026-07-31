const RECIPES = [
	{
		id: "1",
		name: "Pasta Carbonara",
		creator: "John Doe",
		description:
			"A classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
		people: 2,
		ingredients: [
			"200g spaghetti",
			"100g pancetta",
			"2 eggs",
			"50g Parmesan cheese",
			"Black pepper",
		],
		steps: [
			"Bring a large pot of salted water to a boil and cook the spaghetti according to package instructions.",
			"While the pasta cooks, cut the pancetta into small cubes and fry in a pan over medium heat until crispy.",
			"In a bowl, whisk together the eggs and grated Parmesan cheese.",
			"When the pasta is done, reserve a cup of pasta water and drain the rest.",
			"Add the hot pasta to the pan with the pancetta and toss to combine.",
			"Remove the pan from the heat and quickly pour in the egg mixture, tossing constantly to create a creamy sauce.",
			"Add a splash of pasta water if needed to loosen the sauce.",
			"Season generously with black pepper and serve immediately.",
		],
	},
	{
		id: "2",
		name: "Chicken Tikka Masala",
		creator: "",
		description: "Tender pieces of chicken in a rich, creamy tomato sauce.",
		people: 4,
		ingredients: [
			"500g chicken breast",
			"200g tomatoes",
			"100g onions",
			"2 cloves garlic",
			"1 tsp cumin",
			"1 tsp coriander",
			"1 tsp turmeric",
			"200ml cream",
		],
		steps: [
			"Cut the chicken breast into bite-sized pieces and season with cumin, coriander, and turmeric.",
			"Heat oil in a large pan over medium-high heat and cook the chicken pieces until golden brown. Set aside.",
			"In the same pan, dice and sauté the onions until softened, about 5 minutes.",
			"Mince the garlic and add it to the onions, cooking for another minute.",
			"Add the chopped tomatoes and let the sauce simmer for 10 minutes until thickened.",
			"Stir in the cream and bring the sauce back to a gentle simmer.",
			"Return the chicken to the pan and cook for another 5 minutes until heated through.",
			"Serve hot over steamed basmati rice or with warm naan bread.",
		],
	},
	{
		id: "3",
		name: "Caesar Salad",
		creator: "Alice Johnson",
		description:
			"A refreshing salad with romaine lettuce, croutons, and Caesar dressing.",
		people: 2,
		ingredients: [
			"1 head romaine lettuce",
			"100g croutons",
			"50g Parmesan cheese",
			"2 tbsp Caesar dressing",
		],
		steps: [
			"Wash and dry the romaine lettuce, then tear it into bite-sized pieces.",
			"Place the lettuce in a large salad bowl.",
			"Add the croutons and toss gently to distribute them evenly.",
			"Drizzle the Caesar dressing over the salad and toss until all leaves are lightly coated.",
			"Shave or grate the Parmesan cheese on top.",
			"Serve immediately while the croutons are still crunchy.",
		],
	},
];

export default RECIPES;
