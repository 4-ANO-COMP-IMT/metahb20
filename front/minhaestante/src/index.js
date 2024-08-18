import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import LogIn from "./pages/LogIn";
import Test from "./pages/Test";
import BookSearch from "./pages/BookSerch";
import BookForm from "./pages/BooksForm";
import BookPage from "./pages/BookPage";
import { useNavigate } from "react-router-dom";

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
