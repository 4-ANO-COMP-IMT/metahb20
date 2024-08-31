import { useParams } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
import ErrorMessage from "../common/ErrorMessage";
import ErrorManager from "../../shared/error/ErrorManager";

class RowBookshelfComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: this.props.userId,
			id: this.props.id,
			title: "",
			author: "",
			pages: "",
			genre: "",
			rating: "",
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
					errorMessage: ErrorManager.translateErrorMessage(
						error.request.responseText
					),
				});
			});
	}

	render() {
		return (
			<tr>
				<td>{this.state.title}</td>
				<td>{this.state.author}</td>
				<td>{this.state.pages}</td>
				<td>{this.state.genre}</td>
				<td>{this.state.rating}</td>
				<td>
					<button
						type="button"
						className="mx-2 my-1 btn btn-primary button-style"
					>
						Remover
					</button>
					<button type="button" className="mx-2  btn btn-primary button-style">
						Avaliar
					</button>
				</td>

				{this.state.errorMessage && (
					<ErrorMessage message={this.state.errorMessage} />
				)}
			</tr>
		);
	}
}

export default RowBookshelfComponent;
