import React from "react";
import { useParams } from "react-router-dom";
import BookUpdateForm from "../components/book/BookUpdateForm";

function UpdateBookPage() {
	const { bookid } = useParams();

	return (
		<div>
			<BookUpdateForm id={bookid} />
		</div>
	);
}

export default UpdateBookPage;
