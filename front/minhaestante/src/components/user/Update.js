import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GENRES, invertedGenres } from "../../shared/domain/enums/genresEnum";
import axios from "axios";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import SucessMessage from "../common/SucessMessage";
import ErrorMessage from "../common/ErrorMessage";
import errorMessageTranslator from "../../shared/error/ErrorManager";

class UpdateForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: this.props.userId,
			new_name: "",
			new_genre: "",
			new_favoriteBook: "",
			successMessage: "",
			errorMessage: "",
		};
	}

	componentDidMount() {
		axios
			.get(`${process.env.REACT_APP_URL_MssUser}/api/user/${this.state.userId}`)
			.then((res) => {
				this.setState({
					new_name: res.data.user.name,
					new_email: res.data.user.email,
					new_genre: res.data.user.favoriteGenres,
					new_favoriteBook: res.data.user.favoriteBook,
				});
			})
			.catch((error) => {
				console.error(error);

				this.setState({
					errorMessage: errorMessageTranslator.translateErrorMessage(
						error.request.responseText
					),
				});
			});
	}

	onClickShelf = (event) => {
		
			window.location.href = "/bookshelf/" + this.state.userId;
	};

	onClickDelete = (event) => {
		if (window.confirm("Tem certeza que deseja deletar a conta?")) {
		axios
			.delete(
				`${process.env.REACT_APP_URL_MssUser}/api/user/${this.state.userId}`
			)
			.then((res) => {
				console.log(res);
				this.setState({
					successMessage:
						"Usuário deletado com sucesso! ID: " + this.state.userId,
					errorMessage: "",
				});

				setTimeout(() => {
					window.location.href = "/";
				}, 1000);
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
		}
	};

	onClickUpdate = (event) => {
		const user = {
			userId: this.state.userId,
			new_name: this.state.new_name,
			new_email: this.state.new_email,
			new_genre: this.state.new_genre,
			new_favoriteBook: this.state.new_favoriteBook,
		};

		const response = axios
			.put(`${process.env.REACT_APP_URL_MssUser}/api/user`, user)
			.then((res) => {
				console.log(res);
				this.setState({
					successMessage:
						"Usuário atualizado com sucesso! ID: " + res.data.user.userId,
					errorMessage: "",
				});

				setTimeout(() => {
					this.setState({ successMessage: "" });
				}, 10000);
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
							<strong>ATUALIZAR</strong>
						</h1>
					</div>
				</div>

				<div className="row justify-content-center background-form">
					<div className="col-9">
						<div>
							<InputField
								label="Nome"
								type="text"
								value={this.state.new_name}
								onChange={(e) => this.setState({ name: e.target.value })}
							/>

							<InputField
								label="Email"
								type="email"
								value={this.state.new_email}
								onChange={(e) => this.setState({ email: e.target.value })}
							/>

							<SelectField
								label="Gêneros Favoritos"
								options={Object.values(GENRES)}
								value={this.state.new_genre}
								onChange={(e) =>
									this.setState({ favoriteGenres: e.target.value })
								}
							/>

							<InputField
								label="Livro Favorito"
								type="text"
								value={this.state.new_favoriteBook}
								onChange={(e) =>
									this.setState({ favoriteBook: e.target.value })
								}
							/>

							{this.state.successMessage && (
								<SucessMessage message={this.state.successMessage} />
							)}

							{this.state.errorMessage && (
								<ErrorMessage message={this.state.errorMessage} />
							)}

							<div className="row form-group justify-content-around m-3 ">
								<button
									className="btn btn-primary col-3  button-style"
									onClick={this.onClickUpdate}
								>
									Atualizar
								</button>

								<button
									className="btn btn-primary col-3 button-style"
									onClick={this.onClickDelete}
								>
									Apagar a conta
								</button>

								<button
									className="btn btn-primary col-3  button-style"
									onClick={this.onClickShelf}
								>
									Ver estante
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default UpdateForm;
