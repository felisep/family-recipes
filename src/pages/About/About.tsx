import "./About.css";
import picture from "../../assets/IMG_0640.webp";

const About = () => {
	return (
		<div className="about">
			<div>
				<h1>Om familie oppskrifter</h1>
				<p>
					Siden er laget av Felipe og er et sted man kan finne
					familieoppskrifter eller andre delikatesser. Du kan justere mengden
					ingredienser basert på antall personer du lager mat til.
				</p>
			</div>
			<img src={picture} alt="About" />
		</div>
	);
};

export default About;
