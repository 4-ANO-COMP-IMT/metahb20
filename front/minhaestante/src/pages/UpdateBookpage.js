import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookUpdateForm from "../components/book/BookUpdateForm";

function UpdateBookPage() {
	const { bookid } = useParams();
	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1);
	};

	return (
		<div>
			<BookUpdateForm id={bookid} navigate={handleBack} />
		</div>
	);
}

export default UpdateBookPage;
