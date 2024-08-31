import React from "react";
import { useParams } from "react-router-dom";
import RowBookshelfComponent from "../components/bookshelf/RowBookshelf";

const BookShelfPage = () => {
	const { userId } = useParams();

	const onClickAddBook = () => {
		console.log("Adicionar livro a estante");
		window.location.href = "/books/" + userId;
	};
	const onClickUpdateUser = () => {
		console.log("Adicionar livro a estante");
		window.location.href = "/user/" + userId;
	};

	const onClickLogOut = () => {
		console.log("Logout");
		window.location.href = "/";
	};

	return (
		<div className="container-xl mt-2 border border-dark ">
			<div className="row justify-content-center headline ">
				<div className="col-12">
					<h1 className="display-5 text-center ">
						<strong>SUA ESTANTE</strong>
					</h1>
				</div>
			</div>

			<div className="row justify-content-center background-form">
				<div className="col-11 mt-2">
					<table className="table table-rounded responsive-table">
						<thead className="thead-dark">
							<tr>
								<th scope="col">Title</th>
								<th scope="col">Author</th>
								<th scope="col">Pages</th>
								<th scope="col">Genre</th>
								<th scope="col">Rating</th>
								<th scope="col" />
							</tr>
						</thead>
						<tbody>
							<RowBookshelfComponent
								userId={userId}
								id={"367f3e10-4649-5e8e-acc6-4669644a520e"}
							/>
							<RowBookshelfComponent
								userId={userId}
								id={"367f3e10-4649-5e8e-acc6-4669644a520e"}
							/>
							<RowBookshelfComponent
								userId={userId}
								id={"367f3e10-4649-5e8e-acc6-4669644a520e"}
							/>
						</tbody>
					</table>
					<div className="row justify-content-center background-form">
						<button
							className="col-2 btn btn-primary button-style2 m-2"
							onClick={onClickAddBook}
						>
							Adicionar livro a estante
						</button>

						<button
							className="col-2 btn btn-primary button-style2 m-2"
							onClick={onClickUpdateUser}
						>
							Modificar usuario
						</button>

						<button
							className="col-2 btn btn-primary button-style2 m-2"
							onClick={onClickLogOut}
						>
							Logout
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookShelfPage;
