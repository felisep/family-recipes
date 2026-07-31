import "./RecipeName.css";

const RecipeName = ({ name, creator,  people}: { name: string; creator: string, people: number }) => {
	const recipeNameExist = creator ? creator : <div></div>;
	return (
		<div className="recipe-name">
			<h1>{name}</h1>
			{creator && <p>Creator: {recipeNameExist}</p>}
			<p>People: {people}</p>
		</div>
	);
};

export default RecipeName;
