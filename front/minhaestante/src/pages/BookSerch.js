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
		const response = await axios.get(`http://localhost:3000/mssbook`);
		this.setState({ books: response.data.items });
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
							<div className="col-4">
								<BookCard
									id="367f3e10-4649-5e8e-acc6-4669644a520e"
									title="1984"
									edition={1}
									author="George Orwell"
									pages={200}
									genre={"FICCAO"}
									publicationDate={-649029540000}
									publisher="Secker and Warburg"
									rating={5}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BookSearch;
