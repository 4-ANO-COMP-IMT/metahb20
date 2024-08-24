import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GENRES } from "../../shared/domain/enums/genresEnum";
import axios from "axios";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import SucessMessage from "../common/SucessMessage";
import ErrorMessage from "../common/ErrorMessage";
import errorMessageTranslator from "../../shared/error/ErrorManager";
import AvaliationField from "../common/AvaliationFild";

class BookForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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
		};
	}

	convertToTimestamp = (dateString) => {
		const [day, month, year] = dateString.split("/").map(Number);
		const date = new Date(year, month - 1, day);
		return date.getTime();
	};

	onClickCadastrar = async (event) => {
		const book = {
			title: this.state.title,
			edition: Number(this.state.edition),
			autor: this.state.author,
			pages: Number(this.state.pages),
			genre: this.state.genre,
			publishDate: this.convertToTimestamp(this.state.publishDate),
			publisher: this.state.publisher,
			rating: Number(this.state.rating),
		};

		console.log(book);

		const response = await axios
			.post(`${process.env.REACT_APP_URL_MssBook}/mssbook/book`, book)
			.then((res) => {
				this.setState({
					bookId: "",
					title: "",
					edition: "",
					author: "",
					pages: "",
					genre: "",
					publishDate: "",
					publisher: "",
					rating: "",
					successMessage:
						"Livro cadastrado com sucesso! Id: " + res.data.book.bookId,
					errorMessage: "",
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

	render() {
		return (
			<div className="container-sm mt-2 border border-dark ">
				<div className="row justify-content-center headline ">
					<div className="col-6">
						<h1 className="display-5 text-center ">
							<strong>CADASTRO DO LIVRO</strong>
						</h1>
					</div>
				</div>

				<div className="row justify-content-center background-form">
					<div className="col-9">
						<div>
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
							/>

							<InputField
								label="Data de Publicação"
								type="text"
								value={this.state.publishDate}
								onChange={(e) => this.setState({ publishDate: e.target.value })}
								placeholder="dd/mm/aaaa"
							/>

							<InputField
								label="Editora"
								type="text"
								value={this.state.publisher}
								onChange={(e) => this.setState({ publisher: e.target.value })}
							/>

							{/* <AvaliationField
								label="Avaliação"
								type="text"
								value={this.state.rating}
								onChange={(e) => this.setState({ rating: e.target.value })}
							/> */}

							{this.state.successMessage && (
								<SucessMessage message={this.state.successMessage} />
							)}

							{this.state.errorMessage && (
								<ErrorMessage message={this.state.errorMessage} />
							)}

							<div className="row form-group justify-content-around m-3 ">
								<button
									className="btn btn-primary col-4 button-style"
									onClick={this.onClickCadastrar}
								>
									Cadastrar livro
								</button>
								{this.props.children}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BookForm;
