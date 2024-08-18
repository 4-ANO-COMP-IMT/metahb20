import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GENRES } from "../shared/domain/enums/genresEnum";
import axios from "axios";
import SucessMessage from "../components/registration/SucessMessage";
import BookCard from "../components/book/BookCard";
import BookSearch from "./BookSerch";
import BookForm from "./BooksForm";
import Registration from "./Registration";
import LoginScreen from "./LogIn";

class Test extends React.Component {
	render() {
		return (
			<div>
				<Registration />
				<LoginScreen />
				<BookForm />
				<BookSearch />
			</div>
		);
	}
}

export default Test;
