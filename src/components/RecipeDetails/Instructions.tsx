import "./Instructions.css";

const Instructions = ({ instructions }: { instructions: string[] }) => {
	return (
		<div className="instructions">
			<h2>Instructions</h2>
			<ol>
				{instructions.map((instruction, id) => (
					<li key={id.toString()}>{instruction}</li>
				))}
			</ol>
		</div>
	);
};

export default Instructions;
