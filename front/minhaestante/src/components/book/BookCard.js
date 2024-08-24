import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

//book infomations that a want to show
// //"367f3e10-4649-5e8e-acc6-4669644a520e",
// "1984",
// 1,
// "George Orwellr",
// 200,
// GENRES.FICCAO,
// -649029540000,
// "Secker and Warburg",
// 5
class BookCard extends React.Component {
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
							<button className="btn btn-primary button-style2">
								Adicionar
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BookCard;
