import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GENRES, invertedGenres } from "../../shared/domain/enums/genresEnum";
import axios from "axios";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import SucessMessage from "../common/SucessMessage";
import ErrorMessage from "../common/ErrorMessage";
import errorMessageTranslator from "../../shared/error/ErrorManager";

class RegistrationForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			favoriteGenres: "",
			favoriteBook: "",
			successMessage: "",
			errorMessage: "",
		};
	}

	onClickCadastrar = async (event) => {
		const user = {
			name: this.state.name,
			email: this.state.email,
			favoriteGenres: this.state.favoriteGenres,
			favoriteBook: this.state.favoriteBook,
		};

		const response = await axios
			.post(`${process.env.REACT_APP_URL_MssUser}/api/user`, user)
			.then((res) => {
				console.log(res);
				this.setState({
					name: "",
					email: "",
					favoriteGenres: "",
					favoriteBook: "",
					successMessage:
						"Usuário cadastrado com sucesso! ID: " + res.data.user.userId,
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
	onClickLogin = (event) => {
		event.preventDefault();
		window.location.href = "/login";
	};
	render() {
		return (
			<div className="container-sm mt-2 border border-dark ">
				<div className="row justify-content-center headline ">
					<div className="col-6">
						<h1 className="display-5 text-center ">
							<strong>CADASTRO</strong>
						</h1>
					</div>
				</div>

				<div className="row justify-content-center background-form">
					<div className="col-9">
						<div>
							<InputField
								label="Nome"
								type="text"
								value={this.state.name}
								onChange={(e) => this.setState({ name: e.target.value })}
							/>

							<InputField
								label="Email"
								type="email"
								value={this.state.email}
								onChange={(e) => this.setState({ email: e.target.value })}
							/>

							<SelectField
								label="Gêneros Favoritos"
								options={Object.values(GENRES)}
								value={this.state.favoriteGenres}
								onChange={(e) =>
									this.setState({ favoriteGenres: e.target.value })
								}
							/>

							<InputField
								label="Livro Favorito"
								type="text"
								value={this.state.favoriteBook}
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
									className="btn btn-primary col-4 button-style"
									onClick={this.onClickCadastrar}
								>
									Cadastrar
								</button>

								<button
									className="btn btn-primary col-4 button-style"
									onClick={this.onClickLogin}
								>
									Login
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RegistrationForm;
