const RECIPES = [
	{
		id: "1",
		name: "Fransk Ostepai",
		description: "En klassisk fransk ostepai med egg, ost og skinke.",
		people: 1,
		ingredients: [
			{
				heading: "Bunn",
				items: [
					{ amount: 125, unit: "g", name: "smør (bunn)" },
					{ amount: 3, unit: "ss", name: "vann (bunn)" },
					{ amount: 3, unit: "dl", name: "hvetemel (bunn)" },
				],
			},
			{
				heading: "Fyll",
				items: [
					{ amount: null, unit: "", name: "Skinke" },
					{ amount: null, unit: "", name: "Ost" },
					{ amount: 3, unit: "", name: "egg" },
					{ amount: 3, unit: "dl", name: "melk" },
					{ amount: 1, unit: "ts", name: "salt" },
					{ amount: 1, unit: "ts", name: "pepper" },
				],
			},
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
		description: "Chilensk brød som er mykt og deilig.",
		people: 8,
		ingredients: [
			{
				heading: null,
				items: [
					{ amount: 500, unit: "g", name: "hvetemel" },
					{ amount: 80, unit: "g", name: "smør" },
					{ amount: 5, unit: "g", name: "sukker" },
					{ amount: 10, unit: "g", name: "bakepuler" },
					{ amount: 250, unit: "g", name: "lunken vann" },
					{ amount: 10, unit: "g", name: "salt" },
				],
			},
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
		name: "Ramen svinekjøtt med appelsinmarinade",
		description:
			"En deilig appelsinmarinade med svinekjøtt. Lages tidlig om morgenen",
		people: 2,
		ingredients: [
			{
				heading: "Marinade",
				items: [
					{ amount: 1 / 2, unit: "dl", name: "soyasaus" },
					{ amount: 1 / 2, unit: "dl", name: "riseddik" },
					{ amount: 1, unit: "ss", name: "sukker" },
					{ amount: 1, unit: "ts", name: "ingefær" },
					{ amount: 1, unit: "hel", name: "chili" },
					{ amount: 1, unit: "skivet", name: "appelsin" },
					{ amount: 600, unit: "g", name: "svinefilet" },
				],
			},
		],
		steps: [
			"Del appelsinene i båter",
			"Ta alle ingrediensene i en pose og bland godt",
		],
	},
	{
		id: "6",
		name: "Empanadas",
		description: "Chilenske empanadas med kjøttdeigfyll, oliven og rosiner.",
		people: null,
		ingredients: [
			{
				heading: "Deig",
				items: [
					{ amount: 450, unit: "g", name: "hvetemel" },
					{ amount: 200, unit: "g", name: "smeltet smør" },
					{ amount: 1, unit: "dl", name: "varmt vann" },
					{ amount: 1 / 2, unit: "ss", name: "salt" },
					{
						amount: 1,
						unit: "",
						name: "vispet egg (hold igjen litt til pensling)",
					},
				],
			},
			{
				heading: "Fyll",
				items: [
					{ amount: 400, unit: "g", name: "kjøttdeig" },
					{ amount: 1, unit: "ss", name: "hvetemel" },
					{ amount: 2, unit: "", name: "løk" },
					{ amount: 1 / 2, unit: "dl", name: "vann + litt buljong" },
					{ amount: null, unit: "", name: "margarin til steking" },
					{ amount: 1, unit: "ss", name: "rød paprika" },
					{ amount: null, unit: "", name: "salt" },
					{ amount: null, unit: "", name: "kummin" },
					{ amount: null, unit: "", name: "litt hvitløk" },
					{ amount: null, unit: "", name: "pepper" },
				],
			},
			{
				heading: "Tilsett etter behag",
				items: [
					{ amount: 1, unit: "", name: "kokt egg" },
					{ amount: null, unit: "", name: "oliven" },
					{ amount: null, unit: "", name: "rosiner" },
				],
			},
		],
		steps: [
			"Smelt margarin og bland med varmt vann og salt. Tilsett (ikke alt) hvetemelet og form en fast og glatt deig. Den trenger ikke å hvile.",
			"Stek kjøttdeigen og hakket løk i god varm panne med stekesmør. Bland inn de krydderne du ønsker.",
			"Bland i litt vann og litt buljong + litt hvetemel. Rør godt. Avkjøl fyllet - viktig!",
			"Del deigen i flere deler (i hvert fall 6) og kjevl ut til 3 mm tykkelse. Stikk ut sirkler med for eksempel en skål eller et lite fat.",
			"Legg på kjøttfyll, litt egg, 1 oliven og noen rosiner på den ene halvdelen og brett over den andre.",
			"Trykk lett med fingeren rundt kanten. Pensle med egg. Stikk 3 - 4 hull med en nål.",
			"Stek empanadas på 200 grader i 10 - 15 minutter.",
		],
	},
	{
		id: "7",
		name: "Gulrotkake",
		description: "Saftig gulrotkake med kremostglasur.",
		people: null,
		ingredients: [
			{
				heading: "Bunn",
				items: [
					{ amount: 4, unit: "", name: "egg" },
					{ amount: 3, unit: "dl", name: "sukker" },
					{ amount: 3, unit: "dl", name: "hvetemel" },
					{ amount: 2, unit: "ts", name: "natron" },
					{ amount: 2, unit: "ts", name: "kanel" },
					{ amount: 1, unit: "ts", name: "salt" },
					{ amount: 1, unit: "ts", name: "vaniljesukker" },
					{ amount: 1.5, unit: "dl", name: "olje" },
					{ amount: null, unit: "4 - 5 dl", name: "revne gulrøtter" },
				],
			},
			{
				heading: "Glasur",
				items: [
					{ amount: 150, unit: "g", name: "kremost" },
					{ amount: 75, unit: "g", name: "smør" },
					{ amount: 1, unit: "ts", name: "vaniljesukker" },
					{ amount: 180, unit: "g", name: "melis" },
					{ amount: null, unit: "", name: "litt sitron" },
				],
			},
		],
		steps: [
			"Pisk egg og sukker til eggedosis.",
			"Bland inn det tørre.",
			"Rør inn gulrøtter og olje.",
			"Stek kaken på 190 grader i ca. 1 time, og la den avkjøles.",
			"Rør sammen ingrediensene til glasuren og smør den på den avkjølte kaken.",
		],
	},
	{
		id: "8",
		name: "Tandoori Chicken",
		description: "Yoghurtmarinert tandoorikylling servert med ris og papadums.",
		people: null,
		ingredients: [
			{
				heading: null,
				items: [
					{ amount: 1, unit: "stor", name: "kyllingfilet" },
					{ amount: 1 / 2, unit: "beger", name: "naturell yoghurt" },
					{ amount: 5, unit: "små skjeer", name: "tandooripulver" },
					{ amount: 2, unit: "små skjeer", name: "chilipulver" },
					{ amount: 1, unit: "liten skje", name: "spisskummen" },
					{ amount: 1, unit: "liten skje", name: "hvitløkspulver" },
					{ amount: 1, unit: "liten skje", name: "løkpulver" },
				],
			},
		],
		steps: [
			"Bland krydderet inn i yoghurten.",
			"Kutt kyllingfileten i biter.",
			"Marinér kyllingen i krydderblandingen i minst 30 minutter.",
			"Stek i ovnen på 200 grader i 20 - 30 minutter.",
			"Server med ris og papadums.",
		],
	},
	{
		id: "9",
		name: "Rød linsesuppe",
		description: "Kremet suppe av røde linser med rød currypaste.",
		people: null,
		ingredients: [
			{
				heading: null,
				items: [
					{ amount: 1, unit: "ss", name: "olivenolje" },
					{ amount: 1, unit: "", name: "gul løk, finhakket" },
					{ amount: 1, unit: "", name: "gulrot i terninger" },
					{ amount: 1, unit: "ss", name: "tomatpuré" },
					{ amount: null, unit: "1 - 2 ts", name: "rød currypaste" },
					{ amount: 2, unit: "dl", name: "røde linser (tørre)" },
					{ amount: 1, unit: "l", name: "vann" },
					{ amount: 2, unit: "terninger", name: "kyllingbuljong" },
					{ amount: null, unit: "", name: "salt og pepper" },
				],
			},
		],
		steps: [
			"Fres løk og gulrot i olivenolje. Tilsett tomatpuré og currypaste og fres ca. 1 minutt.",
			"Ta alle ingrediensene i en kjele og kok opp.",
			"Kok rolig i 20 minutter.",
			"Mos med stavmikser.",
			"Server med brød.",
		],
	},
	{
		id: "10",
		name: "Fiskesuppe",
		description: "Kremet fiskesuppe med hjemmelaget kraft av fiskerester.",
		people: null,
		ingredients: [
			{
				heading: "Kraft",
				items: [
					{ amount: null, unit: "", name: "fiskehode" },
					{ amount: null, unit: "", name: "fiskeryggrad" },
					{ amount: null, unit: "", name: "finner" },
					{ amount: null, unit: "", name: "hale" },
					{ amount: 6, unit: "stk", name: "sjalottløk" },
					{ amount: null, unit: "", name: "hakket vårløk" },
					{ amount: 2, unit: "l", name: "vann" },
				],
			},
			{
				heading: "Suppe",
				items: [
					{ amount: 5, unit: "dl", name: "kraft" },
					{ amount: 1, unit: "", name: "gul løk" },
					{ amount: 3, unit: "fedd", name: "hvitløk" },
					{ amount: 2, unit: "", name: "gulrøtter" },
					{ amount: 1 / 2, unit: "", name: "purre" },
					{ amount: null, unit: "", name: "hakket sellerirot" },
					{ amount: 1, unit: "ss", name: "mel" },
					{ amount: 1.5, unit: "dl", name: "fløte" },
					{ amount: null, unit: "", name: "fiskebiter" },
				],
			},
		],
		steps: [
			"Kok kraft på rester fra sløyingen. Koketid ca. 30 minutter.",
			"Stek gul løk og hvitløk i bunnen av en gryte i litt smør, til de er møre.",
			"Tilsett fiskekraften og la den koke opp.",
			"Ha i gulrot, purre og stangsellerirot, og la det koke i 10 - 15 minutter.",
			"Bland mel med litt vann. Ha i det og fløten. La det koke inn i 4 - 5 minutter. Smak til med salt og pepper.",
			"La fisken trekke på svak varme.",
		],
	},
	{
		id: "11",
		name: "Kaldhevet Foccacia",
		description: "Luftig focaccia med lang kaldheving og god olivenolje.",
		people: null,
		ingredients: [
			{
				heading: null,
				items: [
					{ amount: 500, unit: "g", name: "hvetemel" },
					{ amount: 1.5, unit: "ts", name: "grovt havsalt" },
					{ amount: 1 / 4, unit: "ts", name: "tørrgjær" },
					{ amount: 4, unit: "dl", name: "vann" },
					{ amount: null, unit: "", name: "god olivenolje" },
				],
			},
		],
		steps: [
			"Bland det tørre godt sammen og rør inn vannet. Deigen skal bli ganske fast.",
			"Ringle over olivenolje så det er over hele deigen.",
			"Sett til heving i 8 - 20 timer.",
			"Kle en liten langpanne med bakepapir og fordel deigen. Ringle over olivenolje og havsalt, og evt. andre ting man vil ha på.",
			"La etterheve i ca. 30 - 60 minutter.",
			"Stek på 225 grader i 30 - 35 minutter.",
		],
	},
	{
		id: "12",
		name: "Dumplingsuppe",
		description: "Rask asiatisk dumplingsuppe med pak choi og vårløk.",
		people: 2,
		ingredients: [
			{
				heading: null,
				items: [
					{ amount: 2, unit: "t-skje", name: "ingefærpaste" },
					{ amount: 2, unit: "fedd", name: "most hvitløk" },
					{
						amount: 2,
						unit: "skje",
						name: "soyasaus (ta mer etter smak)",
					},
					{ amount: 1, unit: "skje", name: "fiskesaus" },
					{ amount: 1 / 2, unit: "skje", name: "sesamolje" },
					{ amount: 1 / 2, unit: "skje", name: "AMZ" },
					{ amount: 1, unit: "l", name: "vann" },
					{ amount: 8, unit: "", name: "dumplings" },
					{ amount: 2, unit: "", name: "vårløk" },
					{ amount: 4, unit: "blader", name: "pak choi" },
					{ amount: null, unit: "", name: "salt" },
				],
			},
		],
		steps: [
			"Stek ingefæren og hvitløken litt.",
			"Ta oppi sausene og bland det sammen.",
			"Ha i vannet og la det koke opp.",
			"Ta oppi resten etter anvisning. Dumplings koker 5 - 10 minutter, og vårløken tas oppi til slutt.",
			"Smak til med salt, eller endre sausene etter smak.",
		],
	},
	{
		id: "13",
		name: "Pizza Napolitana",
		description:
			"Kaldhevet pizzadeig med enkel tomatsaus. Deigen settes dagen før.",
		people: 4,
		ingredients: [
			{
				heading: "Deig",
				items: [
					{
						amount: 1 / 2,
						unit: "pakke",
						name: "gjær (kanskje litt mindre)",
					},
					{ amount: 3.8, unit: "dl", name: "vann" },
					{ amount: 15, unit: "g", name: "salt" },
					{ amount: 620, unit: "g", name: "mel type 0" },
				],
			},
			{
				heading: "Saus",
				items: [
					{ amount: 1 / 2, unit: "", name: "tomatpuré" },
					{ amount: 1, unit: "", name: "tomat, hakket" },
					{ amount: 1, unit: "ts", name: "sukker" },
					{ amount: null, unit: "1,5 - 2 ts", name: "salt" },
					{ amount: null, unit: "1 - 2 ts", name: "oregano" },
					{ amount: 1, unit: "", name: "løk" },
					{ amount: 2, unit: "fedd", name: "hvitløk" },
				],
			},
		],
		steps: [
			"Bland litt vann og gjær sammen.",
			"Hell salt i melet og bland godt.",
			"Ta vannet og gjærvannet oppi og bland godt. Kna.",
			"Ha deigen i kjøleskapet til dagen etter. Den vil heve når den er romtemperert.",
			"Etter noen timer deler du deigen i 4 like stykker og lar dem stå i ca. 20 minutter.",
			"Saus: kok opp alt og la det stå og småkoke i 20 - 30 minutter.",
		],
	},
	{
		id: "14",
		name: "Gnocchi med tomatsaus og oliven",
		description: "Rask gnocchi i tomatsaus med kapers og oliven.",
		people: 2,
		ingredients: [
			{
				heading: null,
				items: [
					{ amount: 1, unit: "boks", name: "finhakkede tomater" },
					{ amount: 2, unit: "fedd", name: "hvitløk" },
					{ amount: 1, unit: "pakke", name: "gnocchi" },
					{ amount: 2, unit: "ss", name: "kapers" },
					{ amount: 1, unit: "liten", name: "løk" },
					{
						amount: 1,
						unit: "neve",
						name: "oliven (ta ut steinen)",
					},
					{
						amount: null,
						unit: "",
						name: "litt chiliflakes om ønskelig",
					},
					{ amount: null, unit: "1 - 2 t-skje", name: "salt" },
				],
			},
		],
		steps: [
			"Varm olivenolje i en panne og fres løk og hvitløk. Ikke brun den.",
			"Tilsett kapers og oliven.",
			"Smak til med salt og pepper.",
			"Følg instruksene på pakken til gnocchien.",
		],
	},
	{
		id: "15",
		name: "Protein pannekaker",
		description:
			"Luftige proteinpannekaker som stekes i ildfast form, toppet med frukt eller bær.",
		people: 1,
		ingredients: [
			{
				heading: null,
				items: [
					{ amount: 1, unit: "", name: "egg" },
					{ amount: 50, unit: "g", name: "gresk yoghurt" },
					{ amount: 70, unit: "ml", name: "melk" },
					{ amount: 35, unit: "g", name: "hvetemel" },
					{ amount: 25, unit: "g", name: "proteinpulver (vanilje)" },
					{ amount: 1 / 2, unit: "ts", name: "bakepulver" },
					{ amount: 1, unit: "ts", name: "honning" },
					{
						amount: null,
						unit: "",
						name: "frukt eller bær til topping",
					},
				],
			},
		],
		steps: [
			"Bland alle ingrediensene i en bolle.",
			"Hell blandingen i en liten ildfast form.",
			"Stekes midt i ovnen på 180 - 200 grader i 20 - 30 minutter.",
			"Topp med frukt eller bær etter eget valg.",
		],
	},
];

export default RECIPES;
