import FullRecipeList from "../../components/RecipeList/RecipeList";
import "./Home.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonAppBar from "../../components/Header";
import RecipeDetail from "../../pages/RecipeDetail/RecipeDetail";

export default function Home() {
	return (
		<div className="home">
			<BrowserRouter>
				<ButtonAppBar onLanguageChange={() => {}} />
				<Routes>
					<Route path="/" element={<FullRecipeList />} />
					<Route path="recipe/:id" element={<RecipeDetail />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
