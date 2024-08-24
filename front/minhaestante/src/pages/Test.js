import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GENRES } from "../shared/domain/enums/genresEnum";
import axios from "axios";
import SucessMessage from "../components/common/SucessMessage";
import BookCard from "../components/book/BookCard";
import BookSearch from "../components/book/BookSerch";
import BookForm from "../components/book/BooksForm";
import Registration from "../components/registration/Registration";
import LoginScreen from "../components/registration/LogIn";
import BookUpdateForm from "../components/book/BookUpdateForm";
class Test extends React.Component {
	render() {
		return (
			<div>
				<BookUpdateForm />
				<Registration />
				<LoginScreen />
				<BookForm />
				<BookSearch />
			</div>
		);
	}
}

export default Test;
