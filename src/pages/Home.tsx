import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from '../components/RecipeList';
import RecipeDetail from '../components/RecipeDetail';
import Header from '../components/Header';

export default function Home() {
  const [language, setLanguage] = React.useState('en');

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <Router>
      <Header onLanguageChange={handleLanguageChange} />
      <Routes>
        <Route path="/" element={<RecipeList language={language} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipe={{ name: '', image: '', ingredients: [], steps: [] }} language={language} />} />
      </Routes>
    </Router>
  );
}