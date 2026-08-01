import { useNavigate } from "react-router-dom";
import type { RecipesRowProps } from "../../types/recipe";

const RecipesRow = ({ recipe }: RecipesRowProps) => {
	const navigate = useNavigate();
	return (
		<tr
			onClick={() => navigate(`/recipe/${recipe.id}`)}
			style={{ cursor: "pointer" }}
		>
			<td>{recipe.name}</td>
		</tr>
	);
};

export default RecipesRow;
