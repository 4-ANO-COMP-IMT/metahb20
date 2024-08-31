import React from "react";
import RowBookshelfComponent from "./RowBookshelf";

const BookshelfTable = (props) => {
	return (
		<div>
			<h1 className="display-6 text-center table-title">Livros</h1>
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
						userId={props.userId}
						id={"367f3e10-4649-5e8e-acc6-4669644a520e"}
					/>
					<RowBookshelfComponent
						userId={props.userId}
						id={"367f3e10-4649-5e8e-acc6-4669644a520e"}
					/>
				</tbody>
			</table>
		</div>
	);
};

export default BookshelfTable;
