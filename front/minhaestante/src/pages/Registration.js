import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GENRES } from '../shared/domain/enums/genresEnum';
import axios from 'axios';
import InputField from '../components/registration/InputField';

class Cadastro extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			favoriteGenres: '',
			favoriteBook: '',
			menssagem: '',
		};
	}

	onClickCadastrar = async (event) => {
		event.preventDefault();

		const user = {
			name: this.state.name,
			email: this.state.email,
			favoriteGenres: this.state.favoriteGenres,
			favoriteBook: this.state.favoriteBook,
		};

		const response = await axios
			.post('http://localhost:3000/api/user', user)
			.then((res) => {
				this.setState({
					name: '',
					email: '',
					favoriteGenres: '',
					favoriteBook: '',
					menssagem: 'Usuário cadastrado com sucesso!',
				});
			})
			.catch((error) => {
				console.error(error);
				this.setState({ menssagem: error.request.responseText });
			});
	};

	onClickLogin = (event) => {
		event.preventDefault();
		console.log('Login clicado!');
	};

	render() {
		return (
			<div className="container-sm mt-2 border border-dark rounded ">
				<div className="row justify-content-center border">
					<div className="col-6">
						<h1 className="display-5 text-center ">Cadastro</h1>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col-6">
						<form>
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

							<div className="form-group">
								<label>Gêneros Favoritos</label>
								<select
									className="form-control"
									value={this.state.favoriteGenres}
									onChange={(e) =>
										this.setState({ favoriteGenres: e.target.value })
									}
								>
									<option value="">Selecione...</option>
									{Object.values(GENRES).map((genre) => (
										<option key={genre} value={genre}>
											{genre}
										</option>
									))}
								</select>
							</div>

							<InputField
								label="Livro Favorito"
								type="text"
								value={this.state.favoriteBook}
								onChange={(e) =>
									this.setState({ favoriteBook: e.target.value })
								}
							/>

							{this.state.menssagem && (
								<div className=" m-3 alert alert-danger" role="alert">
									{this.state.menssagem}
								</div>
							)}

							<div className="form-group m-3">
								<button
									className="btn btn-primary mx-2"
									onClick={this.onClickCadastrar}
								>
									Cadastrar
								</button>

								<button
									className="btn btn-light ml-2"
									onClick={this.onClickCadastrar}
								>
									Login
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Cadastro;
