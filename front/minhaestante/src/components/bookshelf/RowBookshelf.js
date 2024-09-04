import React, { Component } from "react";
import axios from "axios";
import ErrorMessage from "../common/ErrorMessage";
import ErrorManager from "../../shared/error/ErrorManager";
import SelectField from "./SelectField";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faRightLeft } from "@fortawesome/free-solid-svg-icons";

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
			showMoveModal: false,
		};
	}

	componentDidMount() {
		axios
			.get(`${process.env.REACT_APP_URL_MssBook}/mssbook/book/${this.state.id}`)
			.then((response) => {
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

	onClickRemove = () => {
		axios
			.get(
				`${process.env.REACT_APP_URL_MssBook}/mssbook/bookshelf/${this.props.userId}`
			)
			.then((res) => {
				const originOption = res.data.bookshelf[this.props.bookListName];
				originOption.splice(originOption.indexOf(this.props.bookId), 1);
				const request = {
					userID: this.props.userId,
					[this.props.bookListName]: originOption,
				};
				console.log(request);

				if (window.confirm("Are you sure you want to remove this book?")) {
					axios
						.put(
							`${process.env.REACT_APP_URL_MssBook}/mssbook/bookshelf`,
							request
						)
						.then((res) => {
							console.log(res.data);
							this.props.updateTables();
						})
						.catch((error) => {
							console.log("Erro ao remover livro da estante.");
							console.log(error);
						});
				}
			});
	};

	handleShowMove = () => this.setState({ showMoveModal: true });
	handleCloseMove = () => this.setState({ showMoveModal: false });

	render() {
		return (
			<tr>
				<td>{this.state.title}</td>
				<td>{this.state.author}</td>
				<td>{this.state.pages}</td>
				<td>{this.state.genre}</td>

				<td>
					<button
						type="button"
						className="mx-2 my-1 btn btn-primary button-style"
						onClick={this.handleShowMove}
					>
						<FontAwesomeIcon icon={faRightLeft} />
					</button>
					<button
						type="button"
						className="mx-2  btn btn-primary button-style"
						onClick={this.onClickRemove}
					>
						<FontAwesomeIcon icon={faDeleteLeft} />
					</button>
					{this.state.errorMessage && (
						<ErrorMessage message={this.state.errorMessage} />
					)}
				</td>
				<Modal show={this.state.showMoveModal} onHide={this.handleCloseMove}>
					<Modal.Header closeButton>
						<Modal.Title>Mover livro</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<SelectField
							userId={this.state.userId}
							bookListName={this.props.bookListName}
							bookId={this.state.id}
							updateTables={this.props.updateTables}
						/>
					</Modal.Body>
				</Modal>
			</tr>
		);
	}
}

export default RowBookshelfComponent;

export class RowFavoritesComponent extends Component {
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
			showMoveModal: false,
		};
	}

	componentDidMount() {
		axios
			.get(`${process.env.REACT_APP_URL_MssBook}/mssbook/book/${this.state.id}`)
			.then((response) => {
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

	onClickRemove = () => {
		axios
			.get(
				`${process.env.REACT_APP_URL_MssBook}/mssbook/bookshelf/${this.props.userId}`
			)
			.then((res) => {
				const originOption = res.data.bookshelf[this.props.bookListName];
				originOption.splice(originOption.indexOf(this.props.bookId), 1);
				const request = {
					userID: this.props.userId,
					[this.props.bookListName]: originOption,
				};
				console.log(request);

				// Add confirmation popup before removing the book
				if (window.confirm("Are you sure you want to remove this book?")) {
					axios
						.put(
							`${process.env.REACT_APP_URL_MssBook}/mssbook/bookshelf`,
							request
						)
						.then((res) => {
							console.log(res.data);
							this.props.updateTables();
						})
						.catch((error) => {
							console.log("Erro ao remover livro da estante.");
							console.log(error);
						});
				}
			});
	};

	handleShowMove = () => this.setState({ showMoveModal: true });
	handleCloseMove = () => this.setState({ showMoveModal: false });

	render() {
		return (
			<tr>
				<td>{this.state.title}</td>
				<td>{this.state.author}</td>
				<td>{this.state.pages}</td>
				<td>{this.state.genre}</td>

				<td>
					<button
						type="button"
						className="mx-2  btn btn-primary button-style"
						onClick={this.onClickRemove}
					>
						<FontAwesomeIcon icon={faDeleteLeft} />
					</button>
					{this.state.errorMessage && (
						<ErrorMessage message={this.state.errorMessage} />
					)}
				</td>
				<Modal show={this.state.showMoveModal} onHide={this.handleCloseMove}>
					<Modal.Header closeButton>
						<Modal.Title>Mover livro</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<SelectField
							userId={this.state.userId}
							bookListName={this.props.bookListName}
							bookId={this.state.id}
							updateTables={this.props.updateTables}
						/>
					</Modal.Body>
				</Modal>
			</tr>
		);
	}
}
