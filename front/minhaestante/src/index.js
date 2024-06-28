import React from "react";
import { createRoot } from "react-dom/client";
import Registration from "./pages/Registration";

const App = () => {
	return <Registration />;
};

createRoot(document.getElementById("root")).render(<App />);
