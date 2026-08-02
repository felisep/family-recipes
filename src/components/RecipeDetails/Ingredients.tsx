import type { IngredientsInfo } from "../../types/recipe";
import "./Ingredients.css";

const Ingredients = ({
	ingredients,
	number,
	people,
}: {
	ingredients: IngredientsInfo[];
	number: number;
	people: number;
}) => {
	return (
		<div className="ingredients">
			<h2>Ingredients</h2>
			<ul>
				{ingredients.map((ingredient, id) => (
					<li key={id.toString()}>
						{ingredient.amount !== null && people > 0 && number > 0
							? ingredient.amount * (number / people)
							: (ingredient.amount ?? "")}{" "}
						{ingredient.unit} {ingredient.name}{" "}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Ingredients;
