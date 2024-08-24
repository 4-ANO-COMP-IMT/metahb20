import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class BookCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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

	onclickeditar = async (event) => {
		window.location.href = "/book/update";
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
						</p>
						<div className="text">
							<button className="btn btn-primary button-style2 m-2">
								Adicionar
							</button>
							<button className="btn btn-primary button-style2 m-2">
								Editar
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BookCard;
