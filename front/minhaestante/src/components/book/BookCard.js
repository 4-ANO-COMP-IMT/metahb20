import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class BookCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			idUser: this.props.idUser,
			id: this.props.id,
			title: this.props.title,
			edition: this.props.edition,
			author: this.props.author,
			pages: this.props.pages,
			genre: this.props.genre,
			publicationDate: this.props.publicationDate,
			publisher: this.props.publisher,
			rating: this.props.rating,
		};
	}

	onclickUpdate = async (event) => {
		window.location.href = "/updatebook/" + this.state.id;
	};

	onClickAdd = async (event) => {};

	onClickDelete = async (event) => {
		if (window.confirm("Tem certeza de que deseja excluir este livro?")) {
			const request = {
				bookId: this.state.id,
			};

			axios
				.delete(`${process.env.REACT_APP_URL_MssBook}/api/book`, {
					data: request,
				})
				.then((response) => {
					console.log(response.data);
					window.location.reload(true);
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			console.log("Exclusão cancelada.");
		}
	};

	render() {
		const {
			id,
			title,
			edition,
			author,
			pages,
			genre,
			publicationDate,
			publisher,
			rating,
		} = this.props;

		return (
			<div className="card">
				<div className="row">
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">
							Autor: {author}
							<br />
							Géneros: {genre}
							<br />
							Editora: {publisher}
							<br />
							Páginas: {pages}
							<br />
							Edição: {edition}
							<br />
							Avaliação: {rating}
							<br />
							id: {id}
							<br />
						</p>
						<div className="text">
							<button
								className="btn btn-primary button-style2 m-2"
								onClick={this.onClickAdd}
							>
								Adicionar
							</button>
							<button
								className="btn btn-primary button-style2 m-2"
								onClick={this.onclickUpdate}
							>
								Editar
							</button>
							<button
								className="btn btn-primary button-style2 m-2"
								onClick={this.onClickDelete}
							>
								Deletar
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BookCard;
