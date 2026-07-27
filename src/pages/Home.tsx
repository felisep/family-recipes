import * as React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "../components/Header";
import RecipeDetail from "../components/RecipeDetail";
import RecipeList from "../components/RecipeList";

export default function Home() {
	const [language, setLanguage] = React.useState("en");

	const handleLanguageChange = (newLanguage: string) => {
		setLanguage(newLanguage);
	};

	return (
		<Router>
			<Header onLanguageChange={handleLanguageChange} />
			<Routes>
				<Route path="/" element={<RecipeList language={language} />} />
				<Route
					path="/recipe/:id"
					element={
						<RecipeDetail
							recipe={{ name: "", image: "", ingredients: [], steps: [] }}
							language={language}
						/>
					}
				/>
			</Routes>
		</Router>
	);
}
