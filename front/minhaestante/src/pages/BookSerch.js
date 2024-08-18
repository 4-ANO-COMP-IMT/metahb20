import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import BookCard from "../components/book/BookCard";

class BookSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
			search: "",
		};
	}

	onChangeSearch = async (event) => {
		this.setState({ search: event.target.value });
	};

	onClickSearch = async (event) => {
		///book/:bookI end point
		const response = await axios
			.get(`http://localhost:3000/mssbook/book/${this.state.search}`)
			.then((response) => {
				console.log(response.data.book);
				this.setState({ books: [response.data.book] });
			})
			.catch((error) => {
				console.log(error);
			});
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
										id={book.id}
										title={book.title}
										edition={book.edition}
										author={book.author}
										pages={book.pages}
										genre={book.genre}
										publicationDate={book.publicationDate}
										publisher={book.publisher}
										rating={book.rating}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BookSearch;
