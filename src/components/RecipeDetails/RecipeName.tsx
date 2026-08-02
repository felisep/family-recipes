import "./RecipeName.css";
import Input from "../Input";

const RecipeName = ({
	name,
	creator,
	people,
	number,
	setNumber,
}: {
	name: string;
	creator: string;
	people: number;
	number: number;
	setNumber: (number: number) => void;
}) => {
	const recipeNameExist = creator ? creator : <div></div>;
	return (
		<div className="recipe-name">
			<h1>{name}</h1>
			<Input people={people} amountPeople={number} setPeople={setNumber} />
		</div>
	);
};

export default RecipeName;
