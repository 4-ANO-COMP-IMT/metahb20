import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./components/registration/Registration";
import LogIn from "./components/registration/LogIn";
import Test from "./pages/Test";
import BookSearch from "./components/book/BookSerch";
import BookForm from "./components/book/BooksForm";
import BookPage from "./pages/BookPage";
import { useNavigate } from "react-router-dom";
import "../src/styles/style.css";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Registration />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/book" element={<BookPage />} />
				<Route path="/booksearch" element={<BookSearch />} />
				<Route path="/bookform" element={<BookForm />} />
				<Route path="/test" element={<Test />} />
			</Routes>
		</Router>
	);
};

createRoot(document.getElementById("root")).render(<App />);
