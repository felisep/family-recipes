import "./Ingredients.css";

const Ingredients = ({ ingredients, number }: { ingredients: string[], number: number }) => {
	return (
		<div className="ingredients">
			<h2>Ingredients</h2>
			<ul>
				{ingredients.map((ingredient, id) => (
					<li key={id.toString()}>{number} * {ingredient}</li>
				))}
			</ul>
		</div>
	);
};

export default Ingredients;
