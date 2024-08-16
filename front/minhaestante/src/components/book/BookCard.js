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
		const { title, author, genre, publisher, rating } = this.props;

		return (
			<div className="card">
				<div className="row">
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">
							Autor: {author}
							<br />
							Genero: {genre}
							<br />
							Editora: {publisher}
							<br />
							Avaliação: {rating}
						</p>
						<div className="text">
							<button className="btn btn-primary">Button</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BookCard;
