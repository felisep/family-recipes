import "./RecipeName.css";

const RecipeName = ({ name, creator }: { name: string; creator: string }) => {
	const recipeNameExist = creator ? creator : <div></div>;
	return (
		<div className="recipe-name">
			<h1>{name}</h1>
			{creator && <p>Creator: {recipeNameExist}</p>}
			<p>People: 2</p>
		</div>
	);
};

export default RecipeName;
