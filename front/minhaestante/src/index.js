import React from "react";
import { createRoot } from "react-dom/client";
import Registration from "./pages/Registration";
import LogIn from "./pages/LogIn";
import Test from "./pages/Test";

const App = () => {
	// return <Registration />;
	return <Test />;
};

createRoot(document.getElementById("root")).render(<App />);
