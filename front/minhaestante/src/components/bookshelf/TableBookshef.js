import React, { Component } from "react";
import RowBookshelfComponent from "./RowBookshelf";
import { RowFavoritesComponent } from "./RowBookshelf";

class BookshelfTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: this.props.userId,
			bookList: this.props.bookList,
			tableName: this.props.tableName,
		};
	}

	render() {
		return (
			<div>
				<h1 className="display-6 text-center table-title">
					{this.props.tableName}
				</h1>
				<table className="table table-rounded responsive-table">
					<thead className="thead-dark">
						<tr>
							<th scope="col">Título</th>
							<th scope="col">Autor</th>
							<th scope="col">Páginas</th>
							<th scope="col">Gênero</th>
							<th scope="col">Avaliação</th>
							<th scope="col" />
						</tr>
					</thead>
					<tbody>
						{this.props.bookList &&
							this.props.bookList.map((id, index) => (
								<RowBookshelfComponent
									userId={this.props.userId}
									id={id}
									key={index}
									bookListName={this.props.bookListName}
									updateTables={this.props.updateTables}
								/>
							))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default BookshelfTable;

export class FavoriteTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: this.props.userId,
			bookList: this.props.bookList,
			tableName: this.props.tableName,
		};
	}

	render() {
		return (
			<div>
				<h1 className="display-6 text-center table-title">
					{this.props.tableName}
				</h1>
				<table className="table table-rounded responsive-table">
					<thead className="thead-dark">
						<tr>
							<th scope="col">Título</th>
							<th scope="col">Autor</th>
							<th scope="col">Páginas</th>
							<th scope="col">Gênero</th>
							<th scope="col">Avaliação</th>
							<th scope="col" />
						</tr>
					</thead>
					<tbody>
						{this.props.bookList &&
							this.props.bookList.map((id, index) => (
								<RowFavoritesComponent
									userId={this.props.userId}
									id={id}
									key={index}
									bookListName={this.props.bookListName}
									updateTables={this.props.updateTables}
								/>
							))}
					</tbody>
				</table>
			</div>
		);
	}
}
