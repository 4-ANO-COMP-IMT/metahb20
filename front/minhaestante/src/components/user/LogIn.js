import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GENRES } from "../../shared/domain/enums/genresEnum";
import axios from "axios";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import SucessMessage from "../common/SucessMessage";
import ErrorMessage from "../common/ErrorMessage";
import errorMessageTranslator from "../../shared/error/ErrorManager";

class LoginScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: "",
			successMessage: "",
			errorMessage: "",
		};
	}

	onClickCadastrar = async (event) => {
		event.preventDefault();
		window.location.href = "/";
	};

	onClickLogin = async (event) => {
		event.preventDefault();

		const userId = this.state.userId;
		if (userId !== "") {
			const response = await axios
				.get(`${process.env.REACT_APP_URL_MssUser}/api/user/${userId}`)
				.then((res) => {
					//usuario logado com sucesso
					this.setState({
						successMessage: "Usuário logado com sucesso!",
						errorMessage: "",
					});
					//redireciona para a pagina principal
					window.location.href = "/estante";
				})
				.catch((error) => {
					console.error(error);

					this.setState({
						errorMessage: errorMessageTranslator.translateErrorMessage(
							error.request.responseText
						),
					});
				});
		} else {
			this.setState({
				errorMessage: "Por favor, preencha o campo de ID do usuário",
			});
		}
	};

	render() {
		return (
			<div className="container-sm mt-2 border border-dark ">
				<div className="row justify-content-center headline ">
					<div className="col-6">
						<h1 className="display-5 text-center ">
							<strong>LOGIN</strong>
						</h1>
					</div>
				</div>

				<div className="row justify-content-center background-form">
					<div className="col-9">
						<form>
							<InputField
								label="ID do usuario"
								type="text"
								value={this.state.userId}
								onChange={(e) => this.setState({ userId: e.target.value })}
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
									Entrar
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginScreen;
