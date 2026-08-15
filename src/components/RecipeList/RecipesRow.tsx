import { Link } from "react-router-dom";
import type { RecipesRowProps } from "../../types/recipe";
import "./RecipesRow.css";

const RecipesRow = ({ recipe }: RecipesRowProps) => {
	return (
		<Link to={`/recipe/${recipe.id}`} className="recipe-card">
			<span className="recipe-card-name">{recipe.name}</span>
		</Link>
	);
};

export default RecipesRow;
