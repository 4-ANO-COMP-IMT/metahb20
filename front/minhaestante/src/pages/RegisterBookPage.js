import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookForm from "../components/book/BookForm";

function RegisterBookPage() {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1);
	};

	return (
		<BookForm>
			<button
				className="btn btn-primary col-4 button-style"
				onClick={handleBack}
			>
				Voltar
			</button>
		</BookForm>
	);
}

export default RegisterBookPage;
