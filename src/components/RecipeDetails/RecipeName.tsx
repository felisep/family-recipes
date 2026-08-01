import "./RecipeName.css";
import Input from "../Input";

const RecipeName = ({ name, creator,  people}: { name: string; creator: string, people: number }) => {
	const recipeNameExist = creator ? creator : <div></div>;
	return (
		<div className="recipe-name">
			<h1>{name}</h1>
			{creator && <p>Creator: {recipeNameExist}</p>}
			<Input people={people} />
		</div>
	);
};

export default RecipeName;
