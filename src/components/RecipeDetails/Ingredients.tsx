import type { IngredientsInfo } from "../../types/recipe";
import "./Ingredients.css";

const Ingredients = ({
	ingredients,
	number,
}: {
	ingredients: IngredientsInfo[];
	number: number;
}) => {
	return (
		<div className="ingredients">
			<h2>Ingredients</h2>
			<ul>
				{ingredients.map((ingredient, id) => (
					<li key={id.toString()}>
						{ingredient.amount !== null ? ingredient.amount * number : ""}{" "}
						{ingredient.unit} {ingredient.name}{" "}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Ingredients;
