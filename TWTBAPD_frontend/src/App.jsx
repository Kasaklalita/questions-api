import React from "react";
import MainNavbar from "./components/layout/MainNavbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage.jsx";
import CategoryPage from "./routes/CategoryPage";

function App() {
	return (
		<div className="App">
			<MainNavbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/:category" element={<CategoryPage />} />
			</Routes>
		</div>
	);
}

export default App;
