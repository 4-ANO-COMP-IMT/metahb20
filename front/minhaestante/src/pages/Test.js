import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GENRES } from "../shared/domain/enums/genresEnum";
import axios from "axios";
import SucessMessage from "../components/common/SucessMessage";
import BookForm from "../components/book/BookForm";
import Registration from "../components/user/Registration";
import LoginScreen from "../components/user/LogIn";
import BookSechUpdateForm from "../components/book/BookSerchUpdateForm";
import BookFinder from "../components/book/BookAll";
import BookPage from "./BookPage";
import BookShelfPage from "./BookShelfPage";
class Test extends React.Component {
	render() {
		return (
			<div>
				<BookShelfPage />
			</div>
		);
	}
}

export default Test;
