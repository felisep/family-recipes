import { render, screen } from "@testing-library/react";
import Home from "./pages/Home";

test("renders header with title Family Recipes", () => {
	render(<Home />);
	const headerElement = screen.getByText(/Family Recipes/i);
	expect(headerElement).toBeInTheDocument();
});
