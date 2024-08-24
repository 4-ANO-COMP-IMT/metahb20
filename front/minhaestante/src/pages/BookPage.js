import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import BookForm from "../components/book/BooksForm";
import BookSearch from "../components/book/BookSerch";

class BookPage extends React.Component {
	render() {
		return (
			<div>
				<BookSearch />
				<BookForm />
			</div>
		);
	}
}

export default BookPage;
