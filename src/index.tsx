import * as React from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home/Home";
import "./index.css";

const container = document.getElementById("root");
if (container) {
	const root = createRoot(container);

	root.render(
		<React.StrictMode>
			<Home />
		</React.StrictMode>,
	);
}
