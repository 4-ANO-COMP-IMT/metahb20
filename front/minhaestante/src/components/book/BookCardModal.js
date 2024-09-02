import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Modal } from "react-bootstrap";
import BookUpdateForm from "./BookUpdateForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import ErrorMessage from "../common/ErrorMessage";

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
			errorMessage: "",
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

	onClickAdd = (event) => {
		axios
			.get(
				`${process.env.REACT_APP_URL_MssBook}/mssbook/bookshelf/${this.props.userId}`
			)
			.then((res) => {
				console.log(res.data.bookshelf.willRead);
				const bookshelf = res.data.bookshelf;
				console.log(bookshelf);
				const willRead = bookshelf.willRead;

				if (
					(
						!bookshelf.dropped.includes(this.state.id) &&
						!bookshelf.favorites.includes(this.state.id) &&
						!bookshelf.read.includes(this.state.id) &&
						!bookshelf.reading.includes(this.state.id) &&
						!bookshelf.willRead.includes(this.state.id)
					)
				) {
					willRead.push(this.state.id);

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
							this.setState({ errorMessage: "Erro ao adicionar livro" });
						});
				} else {
					console.log("Livro já adicionado.");
					this.setState({ errorMessage: "Livro já adicionado" });
					setTimeout(() => {
						this.setState({ errorMessage: "" });
					}, 3000);
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
					this.setState({ errorMessage: "Erro ao excluir livro" });
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

		const { isExpanded, errorMessage } = this.state;

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
							{errorMessage && <ErrorMessage message={errorMessage} />}
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

export default BookCard;
