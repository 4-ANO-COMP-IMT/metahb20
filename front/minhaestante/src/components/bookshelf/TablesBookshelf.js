import React, { Component } from "react";
import BookshelfTable from "./TableBookshef";
import { motion } from "framer-motion";

class BookshelfTables extends Component {
	constructor(props) {
		super(props);
	}

	item = {
		hidden: { y: 0, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};
	container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0,
				staggerChildren: 0.1,
			},
		},
	};

	componentDidMount() {
		console.log("BookshelfTables: ", this.props.userId);
		this.fetchBooks();
	}

	fetchBooks() {
		console.log("fetchBooks");
		//pegar livros da estante
	}

	render() {
		return (
			<div>
				<motion.ul
					className="container"
					variants={this.container}
					initial="hidden"
					animate="visible"
				>
					<motion.li key={1} className="item" variants={this.item}>
						<BookshelfTable userId={this.props.userId} />
					</motion.li>
					<motion.li key={2} className="item" variants={this.item}>
						<BookshelfTable userId={this.props.userId} />
					</motion.li>
					<motion.li key={3} className="item" variants={this.item}>
						<BookshelfTable userId={this.props.userId} />
					</motion.li>
				</motion.ul>
			</div>
		);
	}
}

export default BookshelfTables;
