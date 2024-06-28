import React from "react";
import { createRoot } from "react-dom/client";
import Registration from "./pages/Registration";
import LogIn from "./pages/LogIn";

const App = () => {
	return <Registration />;
};

createRoot(document.getElementById("root")).render(<App />);
