import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GENRES } from "../../shared/domain/enums/genresEnum";
import axios from "axios";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import SucessMessage from "../common/SucessMessage";
import ErrorMessage from "../common/ErrorMessage";
import errorMessageTranslator from "../../shared/error/ErrorManager";
import { invertedGenres } from "../../shared/domain/enums/genresEnum";

class BookSerchUpdateForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.id || "",
			title: "",
			edition: "",
			author: "",
			pages: "",
			genre: "",
			publishDate: "",
			publisher: "",
			rating: "",
			successMessage: "",
			errorMessage: "",
			showForm: false,
		};
	}

	componentDidMount() {
		if (this.state.id) {
			this.onClickSearch();
		}
	}

	convertToTimestamp = (dateString) => {
		const [day, month, year] = dateString.split("/").map(Number);
		const date = new Date(year, month - 1, day);
		return date.getTime();
	};

	convertToDateString = (timestamp) => {
		const date = new Date(timestamp);
		const day = date.getDate().toString().padStart(2, "0");
		const month = (date.getMonth() + 1).toString().padStart(2, "0");
		const year = date.getFullYear();
		return `${day}/${month}/${year}`;
	};

	onClickUpdate = async (event) => {
		const book = {
			bookId: this.state.id,
			title: this.state.title,
			edition: Number(this.state.edition),
			autor: this.state.author,
			pages: Number(this.state.pages),
			genre: invertedGenres[this.state.genre],
			publishDate: this.convertToTimestamp(this.state.publishDate),
			publisher: this.state.publisher,
			rating: Number(this.state.rating),
		};

		console.log(book);

		const response = await axios
			.put(`${process.env.REACT_APP_URL_MssBook}/api/book`, book)
			.then((res) => {
				this.setState({
					title: "",
					edition: "",
					author: "",
					pages: "",
					genre: "",
					publishDate: "",
					publisher: "",
					rating: "",
					successMessage:
						"Livro atualizado com sucesso! Id: " + res.data.book.bookId,
					errorMessage: "",
					showForm: false,
				});

				setTimeout(() => {
					this.setState({ successMessage: "" });
				}, 20000);
			})
			.catch((error) => {
				console.error(error);

				this.setState({
					errorMessage: errorMessageTranslator.translateErrorMessage(
						error.request.responseText
					),
					successMessage: "",
				});
			});
	};

	onChangeSearch = async (event) => {
		this.setState({ id: event.target.value });
	};

	onClickSearch = async (event) => {
		if (this.state.id !== "") {
			console.log(this.state.id);
			const response = await axios
				.get(`${process.env.REACT_APP_URL_MssBook}/api/book/${this.state.id}`)
				.then((response) => {
					console.log(response.data.book);
					this.setState({
						id: response.data.book.bookId,
						title: response.data.book.title,
						edition: response.data.book.edition,
						author: response.data.book.autor,
						pages: response.data.book.pages,
						genre: response.data.book.genre,
						publishDate: this.convertToDateString(
							response.data.book.publishDate
						),
						publisher: response.data.book.publisher,
						rating: response.data.book.rating.toString(),
						errorMessage: "",
						showForm: true,
					});
				})
				.catch((error) => {
					console.log(error);
					this.setState({
						errorMessage: errorMessageTranslator.translateErrorMessage(
							error.request.responseText
						),
						successMessage: "",
					});
				});
		} else {
			this.setState({
				errorMessage: "Preencha o campo de busca",
				successMessage: "",
			});
		}
	};

	render() {
		return (
			<div className="container-sm mt-2 border border-dark ">
				<div className="row justify-content-center headline ">
					<div className="col-6">
						<h1 className="display-5 text-center ">
							<strong>ATUALIZAR LIVRO</strong>
						</h1>
					</div>
				</div>

				<div className="row justify-content-center background-form">
					<div className="col-9">
						<div>
							<div className="row justify-content-center background-form">
								<div className="col-9">
									<div className="row form-group justify-content-around m-3 ">
										<input
											className="form-control col-6"
											type="text"
											placeholder="Procurar pelo id"
											value={this.state.id}
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

							{this.state.showForm && (
								<>
									<InputField
										label="Título"
										type="text"
										value={this.state.title}
										onChange={(e) => this.setState({ title: e.target.value })}
									/>

									<InputField
										label="Edição"
										type="text"
										value={this.state.edition}
										onChange={(e) => this.setState({ edition: e.target.value })}
									/>

									<InputField
										label="Autor"
										type="text"
										value={this.state.author}
										onChange={(e) => this.setState({ author: e.target.value })}
									/>

									<InputField
										label="Páginas"
										type="text"
										value={this.state.pages}
										onChange={(e) => this.setState({ pages: e.target.value })}
									/>

									<SelectField
										label="Gênero"
										options={Object.values(GENRES)}
										value={this.state.genre}
										onChange={(e) => this.setState({ genre: e.target.value })}
										defaultOption={this.state.genre}
									/>

									<InputField
										label="Data de Publicação"
										type="text"
										value={this.state.publishDate}
										onChange={(e) =>
											this.setState({ publishDate: e.target.value })
										}
										placeholder="dd/mm/aaaa"
									/>

									<InputField
										label="Editora"
										type="text"
										value={this.state.publisher}
										onChange={(e) =>
											this.setState({ publisher: e.target.value })
										}
									/>

									{/* <AvaliationField
										label="Avaliação"
										type="text"
										value={this.state.rating}
										onChange={(e) => this.setState({ rating: e.target.value })}
									/> */}

									<div className="row form-group justify-content-around m-3 ">
										<button
											className="btn btn-primary col-4 button-style"
											onClick={this.onClickUpdate}
										>
											Atualizar livro
										</button>
									</div>
								</>
							)}
							{this.state.successMessage && (
								<SucessMessage message={this.state.successMessage} />
							)}

							{this.state.errorMessage && (
								<ErrorMessage message={this.state.errorMessage} />
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BookSerchUpdateForm;
