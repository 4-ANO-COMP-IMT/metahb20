import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import BookCard from "./BookCard";
import ErrorMessage from "../common/ErrorMessage";

class BookSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
			search: "",
			errorMessage: "",
		};
	}

	onChangeSearch = async (event) => {
		this.setState({ search: event.target.value });
	};

	onClickSearch = async (event) => {
		///book/:bookI end point
		if (this.state.search !== "") {
			console.log(
				`${process.env.REACT_APP_URL_MssBook}/mssbook/book/${this.state.search}`
			);
			const response = await axios
				.get(
					`${process.env.REACT_APP_URL_MssBook}/mssbook/book/${this.state.search}`
				)
				.then((response) => {
					console.log(response.data.book);
					this.setState({ books: [response.data.book], errorMessage: "" });
				})
				.catch((error) => {
					this.setState({
						errorMessage: error.request.responseText,
					});
				});
		} else {
			this.setState({
				errorMessage: "Preencha o campo de busca",
			});
		}
	};

	render() {
		return (
			<div className="container-sm mt-2 border border-dark ">
				<div className="row justify-content-center headline ">
					<div className="col-6">
						<h1 className="display-5 text-center ">
							<strong>PROCURAR LIVRO</strong>
						</h1>
					</div>
				</div>

				<div className="row justify-content-center background-form">
					<div className="col-9">
						<div className="row form-group justify-content-around m-3 ">
							<input
								className="form-control col-6"
								type="text"
								placeholder="Procurar pelo id"
								value={this.state.search}
								onChange={this.onChangeSearch}
							/>
							<button
								className="m-2 btn btn-primary col-2 button-style"
								onClick={this.onClickSearch}
							>
								Search
							</button>
						</div>
					</div>
				</div>

				<div className="row justify-content-center background-form">
					<div className="col-9">
						<div className="row form-group justify-content-around m-3 ">
							<div className="col-6">
								{this.state.books.map((book) => (
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
								))}
							</div>
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

export default BookSearch;
