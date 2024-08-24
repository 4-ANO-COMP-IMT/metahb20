import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./components/registration/Registration";
import LogIn from "./components/registration/LogIn";
import Test from "./pages/Test";
import BookSearch from "./components/book/BookSerch";
import BookForm from "./components/book/BookForm";
import BookPage from "./pages/BookPage";
import "../src/styles/style.css";
import UpdateBookPage from "./pages/UpdateBookPage";
import RegisterBookPage from "./pages/RegisterBookPage";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Registration />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/test" element={<Test />} />
				<Route path="/updatebook/:bookid" element={<UpdateBookPage />} />
				<Route path="/registerbook" element={<RegisterBookPage />} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</Router>
	);
};

createRoot(document.getElementById("root")).render(<App />);
