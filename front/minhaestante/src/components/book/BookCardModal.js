import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Modal } from "react-bootstrap";
import BookUpdateForm from "./BookUpdateForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

class BookCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: this.props.userId,
			id: this.props.id,
			title: this.props.title,
			edition: this.props.edition,
			author: this.props.author,
			pages: this.props.pages,
			genre: this.props.genre,
			publicationDate: this.props.publicationDate,
			publisher: this.props.publisher,
			rating: this.props.rating,
			showAddModal: false,
			showUpdateModal: false,
			isExpanded: false,
		};
	}

	handleShowUpdate = () => this.setState({ showUpdateModal: true });
	handleCloseUpdate = () => {
		this.setState({ showUpdateModal: false });
		this.props.updateBooks();
	};

	toggleExpand = () => {
		this.setState((prevState) => ({
			isExpanded: !prevState.isExpanded,
		}));
	};

	onClickAdd = async (event) => {
		console.log(
			"Adicionar livro IDuser: " +
				this.state.userId +
				" IDbook: " +
				this.state.id
		);
		axios
			.get(
				`${process.env.REACT_APP_URL_MssBook}/mssbook/bookshelf/${this.props.userId}`
			)
			.then((res) => {
				console.log(res.data.bookshelf.willRead);
				const willRead = res.data.bookshelf.willRead;
				const bookIds = willRead.map((book) => book.id);

				if (!bookIds.includes(this.state.id)) {
					willRead.push(this.state.id);
					const request = {
						userID: this.state.userId,
						willRead: willRead,
					};
					console.log(request);
					axios
						.put(`${process.env.REACT_APP_URL_MssBook}/mssbook/bookshelf`, {
							userID: this.state.userId,
							willRead: willRead,
						})
						.then((res) => {
							console.log(res.data);
						})
						.catch((error) => {
							console.log(error);
						});
				} else {
					console.log("Livro já adicionado.");
				}
			});
	};

	onClickDelete = async (event) => {
		if (window.confirm("Tem certeza de que deseja excluir este livro?")) {
			const request = {
				bookId: this.state.id,
			};

			axios
				.delete(`${process.env.REACT_APP_URL_MssBook}/mssbook/book`, {
					data: request,
				})
				.then((response) => {
					console.log(response.data);
					this.props.updateBooks();
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

		const { isExpanded } = this.state;

		return (
			<div className="card">
				<div className="card-body">
					<div className="card-title d-flex justify-content-between align-items-center">
						<h5 className="mb-0">{title}</h5>
						<button
							className="btn btn-primary button-style2"
							onClick={this.toggleExpand}
						>
							<FontAwesomeIcon
								icon={isExpanded ? faChevronUp : faChevronDown}
							/>
						</button>
					</div>

					{isExpanded && (
						<div>
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
									onClick={this.handleShowUpdate}
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
					)}
				</div>

				<div>
					<Modal
						show={this.state.showUpdateModal}
						onHide={this.handleCloseUpdate}
					>
						<Modal.Header closeButton></Modal.Header>
						<Modal.Body>
							<BookUpdateForm id={id} />
						</Modal.Body>
					</Modal>
				</div>
			</div>
		);
	}
}

export class BookCard2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: this.props.userId,
			id: this.props.id,
			title: this.props.title,
			edition: this.props.edition,
			author: this.props.author,
			pages: this.props.pages,
			genre: this.props.genre,
			publicationDate: this.props.publicationDate,
			publisher: this.props.publisher,
			rating: this.props.rating,
			showAddModal: false,
			showUpdateModal: false,
		};
	}

	handleShowUpdate = () => this.setState({ showUpdateModal: true });
	handleCloseUpdate = () => {
		this.setState({ showUpdateModal: false });
		this.props.updateBooks();
	};

	onClickAdd = async (event) => {
		console.log(
			"Adicionar livro IDuser: " +
				this.state.userId +
				" IDbook: " +
				this.state.id
		);
	};

	onClickDelete = async (event) => {
		if (window.confirm("Tem certeza de que deseja excluir este livro?")) {
			const request = {
				bookId: this.state.id,
			};

			axios
				.delete(`${process.env.REACT_APP_URL_MssBook}/mssbook/book`, {
					data: request,
				})
				.then((response) => {
					console.log(response.data);
					this.props.updateBooks();
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
								onClick={this.handleShowUpdate}
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
				<div>
					{/* Modal Atualizar Livro */}
					<Modal
						show={this.state.showUpdateModal}
						onHide={this.handleCloseUpdate}
					>
						<Modal.Header closeButton></Modal.Header>
						<Modal.Body>
							<BookUpdateForm id={id} />
						</Modal.Body>
					</Modal>
				</div>
			</div>
		);
	}
}

export default BookCard;
