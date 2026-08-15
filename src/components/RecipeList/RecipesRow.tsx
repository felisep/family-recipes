import { useNavigate } from "react-router-dom";
import type { RecipesRowProps } from "../../types/recipe";
import "./RecipesRow.css";

const RecipesRow = ({ recipe }: RecipesRowProps) => {
	const navigate = useNavigate();
	return (
		<table>
			<tr
				onClick={() => navigate(`/recipe/${recipe.id}`)}
				style={{ cursor: "pointer" }}
				className="recipe-row"
			>
				<td>{recipe.name}</td>
			</tr>
		</table>
	);
};

export default RecipesRow;
