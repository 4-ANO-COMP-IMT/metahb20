import React, { Component } from "react";
import BookshelfTable from "./TableBookshef";

class BookshelfTables extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log("BookshelfTables: ", this.props.userId);
	}

	render() {
		return (
			<div>
				<BookshelfTable userId={this.props.userId} />
				<BookshelfTable userId={this.props.userId} />
				<BookshelfTable userId={this.props.userId} />
			</div>
		);
	}
}

export default BookshelfTables;
