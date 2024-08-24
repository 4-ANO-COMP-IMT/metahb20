import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BookForm from "../components/book/BookForm";
import BookSearch from "../components/book/BookSerch";
import BookSechUpdateForm from "../components/book/BookSerchUpdateForm";

class BookPage extends React.Component {
	render() {
		return (
			<div>
				<BookSearch />
				<BookForm />
				<BookSechUpdateForm />
			</div>
		);
	}
}

export default BookPage;
