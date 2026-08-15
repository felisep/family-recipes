import "./RecipeName.css";
import Input from "../Input";

const RecipeName = ({
	name,
	people,
	number,
	setNumber,
}: {
	name: string;
	people: number;
	number: number;
	setNumber: (number: number) => void;
}) => {
	return (
		<div className="recipe-name">
			<h1>{name}</h1>
			<Input people={people} amountPeople={number} setPeople={setNumber} />
		</div>
	);
};

export default RecipeName;
