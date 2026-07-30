import FullRecipeList from "../components/Home/RecipeList";
import "./Home.css";
import { BrowserRouter } from "react-router-dom";
import ButtonAppBar from "../components/Header";

export default function Home() {
	return (
		<div className="home">
			<BrowserRouter>
				<ButtonAppBar onLanguageChange={() => {}} />
				<FullRecipeList />
			</BrowserRouter>
		</div>
	);
}
