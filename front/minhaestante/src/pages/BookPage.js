import React, { Component, useState } from "react";
import { Modal } from "react-bootstrap";
import BookForm from "../components/book/BookForm";
import BookFinder from "../components/book/BookAll";
import { useParams } from "react-router-dom";

const BookPage = () => {
	const [showAddModal, setShowAddModal] = useState(false);
	const [showUpdateModal, setShowUpdateModal] = useState(false);

	const { userId } = useParams();

	const handleShowAdd = () => setShowAddModal(true);
	const handleCloseAdd = () => setShowAddModal(false);

	return (
		<div>
			<div>
				<BookFinder userId={userId}>
					<button
						className="btn btn-primary button-style2 m-2"
						onClick={handleShowAdd}
					>
						Adicionar novo livro ao acervo
					</button>
				</BookFinder>
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
