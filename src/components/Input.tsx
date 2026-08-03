import "./Input.css";

export default function Input({
	amountPeople,
	setPeople,
}: {
	people: number;
	amountPeople: number;
	setPeople: (number: number) => void;
}) {
	return (
		<p>
			Antall:
			<input
				value={amountPeople}
				onChange={(e) => setPeople(Number(e.target.value))}
			></input>
		</p>
	);
}
