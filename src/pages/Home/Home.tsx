import FullRecipeList from "../../components/RecipeList/RecipeList";
import "./Home.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonAppBar from "../../components/Header";
import RecipeDetail from "../../pages/RecipeDetail/RecipeDetail";
import About from "../About/About";

export default function Home() {
	return (
		<div className="home">
			<BrowserRouter>
				<ButtonAppBar />
				<Routes>
					<Route path="/" element={<FullRecipeList />} />
					<Route path="recipe/:id" element={<RecipeDetail />} />
					<Route path="about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
