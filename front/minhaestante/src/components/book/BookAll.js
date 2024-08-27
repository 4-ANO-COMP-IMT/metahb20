import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import BookCard from "./BookCard";
import ErrorMessage from "../common/ErrorMessage";

class BookFinder extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
			search: "",
			errorMessage: "",
		};
	}

	componentDidMount() {
		this.fetchBooks();
	}

	fetchBooks() {
		axios
			.get(`${process.env.REACT_APP_URL_MssBook}/mssbook/books`)
			.then((response) => {
				console.log(response.data.books);
				this.setState({ books: response.data.books });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	onChangeSearch = async (event) => {
		this.setState({ search: event.target.value });
	};

	onClickSearch = async (event) => {
		const searchQuery = this.state.search.toLowerCase();
		const filteredBooks = this.state.books.filter((book) =>
			book.title.toLowerCase().includes(searchQuery)
		);

		if (filteredBooks.length > 0) {
			this.setState({ books: filteredBooks, errorMessage: "" });
		} else {
			this.setState({
				books: [],
				errorMessage: "No books found matching your search.",
			});
		}
	};

	render() {
		return (
			<div className="container-sm mt-2 border border-dark ">
				<div className="row justify-content-center headline ">
					<div className="col-12">
						<h1 className="display-5 text-center ">
							<strong>PROCURAR LIVRO</strong>
						</h1>
					</div>
				</div>

				<div className="row justify-content-center background-form">
					<div className="col-12">
						<div className="row form-group justify-content-around m-3 ">
							<input
								className="form-control col-6"
								type="text"
								placeholder="Procurar pelo nome"
								value={this.state.search}
								onChange={this.onChangeSearch}
							/>
							<button
								className="m-2 btn btn-primary col-2 button-style"
								onClick={this.onClickSearch}
							>
								Procurar
							</button>
						</div>
					</div>
				</div>

				<div className="row justify-content-center background-form">
					<div className="col-12">
						<div className="row form-group justify-content-around m-3 ">
							{this.state.books.map((book) => (
								<div className="col-3">
									<BookCard
										id={book.bookId}
										title={book.title}
										edition={book.edition}
										author={book.autor}
										pages={book.pages}
										genre={book.genre}
										publicationDate={book.publicationDate}
										publisher={book.publisher}
										rating={book.rating}
									/>
								</div>
							))}
						</div>
						{this.state.errorMessage && (
							<ErrorMessage message={this.state.errorMessage} />
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default BookFinder;
