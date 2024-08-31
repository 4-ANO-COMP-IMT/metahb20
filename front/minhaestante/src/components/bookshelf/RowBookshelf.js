import { useParams } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
import ErrorMessage from "../common/ErrorMessage";

class RowBookshelfComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: this.props.userId,
			id: this.props.id,
			title: "1",
			author: "2",
			pages: "3",
			genre: "4",
			rating: "5",
			errorMessage: "",
		};
	}

	componentDidMount() {
		axios
			.get(`${process.env.REACT_APP_URL_MssBook}/mssbook/book/${this.state.id}`)
			.then((response) => {
				console.log(response.data);
				this.setState({
					title: response.data.book.title,
					author: response.data.book.autor,
					pages: response.data.book.pages,
					genre: response.data.book.genre,
					rating: response.data.book.rating,
				});
			})
			.catch((error) => {
				this.setState({
					errorMessage: error.request.responseText,
				});
			});
	}

	render() {
		return (
			<tr>
				<th scope="col">{this.state.title}</th>
				<th scope="col">{this.state.author}</th>
				<th scope="col">{this.state.pages}</th>
				<th scope="col">{this.state.genre}</th>
				<th scope="col">{this.state.rating}</th>
				<th scope="col">
					<button
						type="button"
						className="mx-2 my-1 btn btn-primary button-style"
					>
						Remover
					</button>
					<button type="button" className="mx-2  btn btn-primary button-style">
						Avaliar
					</button>
				</th>

				{this.state.errorMessage && (
					<ErrorMessage message={this.state.errorMessage} />
				)}
			</tr>
		);
	}
}

export default RowBookshelfComponent;
