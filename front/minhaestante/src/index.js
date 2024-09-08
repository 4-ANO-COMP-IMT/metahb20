import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./components/user/Registration";
import LogIn from "./components/user/LogIn";
import Test from "./pages/Test";
import "../src/styles/style.css";
import BookPage from "./pages/BookPage";
import BookShelfPage from "./pages/BookShelfPage";
import UserUpdatePage from "./pages/UserUpdatePage";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Registration />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/books/:userId" element={<BookPage />} />
				<Route path="/bookshelf/:userId" element={<BookShelfPage />} />
				<Route path="/user/:userId" element={<UserUpdatePage />} />

				<Route path="/test/:userId" element={<Test />} />
				<Route path="/:userId" element={<h1>User Profile</h1>} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
			<footer class="background-default text-center">
				<div class="container">
					<div class="row">
						<div class="col">
							<p>
								<i class="fa-solid fa-kiwi-bird" style="color: #ffffff;"></i>
								<a
									href="/test/d5135e3e-646a-55e7-a38d-9724159b7f9f"
									target="_blank"
									rel="noreferrer"
									style="color: white"
								>
									Para ter acesso a todas as telas clique aqui!
								</a>
							</p>
						</div>
					</div>
				</div>
			</footer>
		</Router>
	);
};

createRoot(document.getElementById("root")).render(<App />);
