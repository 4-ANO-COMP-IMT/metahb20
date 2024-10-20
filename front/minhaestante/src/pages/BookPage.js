import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import BookForm from "../components/book/BookForm";
import BookFinder from "../components/book/BookAll";
import { useParams } from "react-router-dom";
import FloatingMenu from "../components/common/FloatingMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFileCirclePlus,
	faCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

const BookPage = () => {
	const [showAddModal, setShowAddModal] = useState(false);

	const { userId } = useParams();

	const handleShowAdd = () => setShowAddModal(true);
	const handleCloseAdd = () => {
		setShowAddModal(false);
		window.location.reload();
	};

	const OnClickShelf = () => {
		console.log("Adicionar livro a estante");
		window.location.href = "/bookshelf/" + userId;
	};

	return (
		<div>
			<div>
				<BookFinder userId={userId} />
				<FloatingMenu className="position-fixed top-0 start-0 m-3">
					<button
						className="btn btn-primary button-style2 m-2"
						onClick={handleShowAdd}
					>
						<FontAwesomeIcon icon={faFileCirclePlus} />
						&nbsp; Adicionar novo livro ao acervo
					</button>

					<button
						className="btn btn-primary button-style2 m-2"
						onClick={OnClickShelf}
					>
						<FontAwesomeIcon icon={faCircleLeft} />
						&nbsp; Voltar para a estante
					</button>
				</FloatingMenu>
			</div>

			<div>
				{/* Modal Adicionar Livro */}
				<Modal show={showAddModal} onHide={handleCloseAdd}>
					<Modal.Header closeButton></Modal.Header>
					<Modal.Body>
						<BookForm />
					</Modal.Body>
				</Modal>
			</div>
		</div>
	);
};

export default BookPage;
