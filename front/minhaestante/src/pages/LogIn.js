import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GENRES } from "../shared/domain/enums/genresEnum";
import axios from "axios";
import InputField from "../components/registration/InputField";
import SelectField from "../components/registration/SelectField";
import SucessMessage from "../components/registration/SucessMessage";
import ErrorMessage from "../components/registration/ErrorMessage";
import errorMessageTranslator from "../shared/error/ErrorManager";
import "../styles/style.css";

class LoginScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			successMessage: "",
			errorMessage: "",
		};
	}

	onClickCadastrar = async (event) => {};

	onClickLogin = (event) => {};

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
								label="Email"
								type="email"
								value={this.state.email}
								onChange={(e) => this.setState({ email: e.target.value })}
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

								<button className="btn btn-primary col-4 button-style">
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
