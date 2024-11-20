import React from "react";
import { useParams } from "react-router-dom";
import BookshelfTables from "../components/bookshelf/TablesBookshelf";
import FloatingMenu from "../components/common/FloatingMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faRightFromBracket,
	faUserPen,
	faBook,
} from "@fortawesome/free-solid-svg-icons";

const BookShelfPage = () => {
	const { userId } = useParams();

	const onClickAddBook = () => {
		console.log("Adicionar livro a estante");
		window.location.href = "/books/" + userId;
	};
	const onClickUpdateUser = () => {
		console.log("Modificar usuario");
		window.location.href = "/user/" + userId;
	};

	const onClickLogOut = () => {
		console.log("Logout");
		window.location.href = "/";
	};

	return (
		<div className="border border-dark">
			<div className="row justify-content-center headline">
				<div className="col-12">
					<h1 className="display-5 text-center">
						<strong>MINHA ESTANTE</strong>
					</h1>
				</div>
			</div>

			<FloatingMenu className="position-fixed top-0 start-0 m-3">
				<button
					className="btn btn-primary button-style2 m-2"
					onClick={onClickAddBook}
				>
					<FontAwesomeIcon icon={faBook} />
					&nbsp;Adicionar livro
				</button>

				<button
					className="btn btn-primary button-style2 m-2"
					onClick={onClickUpdateUser}
				>
					<FontAwesomeIcon icon={faUserPen} />
					&nbsp;Modificar usuario
				</button>

				<button
					className="btn btn-primary button-style2 m-2"
					onClick={onClickLogOut}
				>
					<FontAwesomeIcon icon={faRightFromBracket} />
					&nbsp;Logout
				</button>
			</FloatingMenu>

			<div className="row justify-content-center headline"></div>

			<div className="row justify-content-center background-form">
				<div className="col-12 mt-2">
					<div className="row justify-content-center background-form">
						<div>
							<BookshelfTables userId={userId} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookShelfPage;
