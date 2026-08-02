const RECIPES = [
	{
		id: "1",
		name: "Fransk Ostepai",
		description: "En klassisk fransk ostepai med egg, ost og skinke.",
		people: 1,
		ingredients: [
			{ amount: 125, unit: "g", name: "smør (bunn)" },
			{ amount: 3, unit: "ss", name: "vann (bunn)" },
			{ amount: 3, unit: "dl", name: "hvetemel (bunn)" },
			{ amount: null, unit: "", name: "Skinke" },
			{ amount: null, unit: "", name: "Ost" },
			{ amount: 3, unit: "", name: "egg" },
			{ amount: 3, unit: "dl", name: "melk" },
			{ amount: 1, unit: "ts", name: "salt" },
			{ amount: 1, unit: "ts", name: "pepper" },
		],
		steps: [
			"Kna sammen ingrediensene til bunnen og trykk det ut i en ildfast form.",
			"Kutt skinke og ost i terninger og plasser utover på bunnen.",
			"Bland egg og melk, ha i salt og pepper.",
			"Hell over bunnen og stek i ovenen på 200 grader i ca. 30 - 45 minutter.",
		],
	},
	{
		id: "2",
		name: "Pan Amasado",
		creator: "",
		description: "Chilensk brød som er mykt og deilig.",
		people: 8,
		ingredients: [
			{ amount: 500, unit: "g", name: "hvetemel" },
			{ amount: 80, unit: "g", name: "smør" },
			{ amount: 5, unit: "g", name: "sukker" },
			{ amount: 10, unit: "g", name: "bakepuler" },
			{ amount: 250, unit: "g", name: "lunken vann" },
			{ amount: 10, unit: "g", name: "salt" },
		],
		steps: [
			"Smelt smør og bland alle ingrediensene",
			"Lag 8 kuler og flat de ut",
			"Stikk de med en gaffel",
			"Sett de på et stekebrett og la de heve i ca. 1 time",
			"Stek de i ovnen på 180 grader i ca. 15 minutter",
		],
	},
	{
		id: "3",
		name: "Appelsinmarinade av svinekjøtt",
		description:
			"En deilig appelsinmarinade med svinekjøtt. Lages tidlig om morgenen",
		people: 2,
		ingredients: [
			{ amount: 1 / 2, unit: "dl", name: "soyasaus" },
			{ amount: 1 / 2, unit: "dl", name: "riseddik" },
			{ amount: 1, unit: "ss", name: "sukker" },
			{ amount: 1, unit: "ts", name: "ingefær" },
			{ amount: 1, unit: "hel", name: "chili" },
			{ amount: 1, unit: "skivet", name: "appelsin" },
			{ amount: 600, unit: "g", name: "svinefilet" },
		],
		steps: [
			"Del appelsinene i båter",
			"Ta alle ingrediensene i en pose og bland godt",
		],
	},
	{
		id: "4",
		name: "Ramen med appelsinmarinert svinekjøtt",
		description: "En deilig appelsinmarinade med svinekjøtt. Lag appelsin",
		people: 2,
		ingredients: [
			{ amount: 1 / 2, unit: "dl", name: "soyasaus" },
			{ amount: 1 / 2, unit: "dl", name: "riseddik" },
			{ amount: 1, unit: "ss", name: "sukker" },
			{ amount: 1, unit: "ts", name: "ingefær" },
			{ amount: 1, unit: "hel", name: "chili" },
			{ amount: 1, unit: "skivet", name: "appelsin" },
			{ amount: 600, unit: "g", name: "svinefilet" },
		],
		steps: [
			"Del appelsinene i båter",
			"Ta alle ingrediensene i en pose og bland godt",
		],
	},
];

export default RECIPES;
