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
			<h2>Ingredienser</h2>
			<ul>
				{ingredients.map((ingredient, id) => (
					<li key={id.toString()} style={{ listStyleType: "none" }}>
						{ingredient.heading && <h3>{ingredient.heading}</h3>}
						<ul>
							{ingredient.items.map((item, itemId) => (
								<li key={itemId.toString()}>
									{item.amount !== null && people > 0 && number > 0
										? item.amount * (number / people)
										: (item.amount ?? "")}{" "}
									{item.unit} {item.name}
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Ingredients;
