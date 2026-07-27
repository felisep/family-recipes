import * as React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "../components/Header";
import RecipeDetail from "../components/RecipeDetail";
import RecipeList from "../components/RecipeList";
import FullRecipeList from "../components/Recipes";

export default function Home() {
	const [language, setLanguage] = React.useState("en");

	const handleLanguageChange = (newLanguage: string) => {
		setLanguage(newLanguage);
	};

	return <FullRecipeList />;
}
