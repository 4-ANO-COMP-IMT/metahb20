import React, { Component } from "react";
import BookshelfTable from "./TableBookshef";
import { motion } from "framer-motion";
import axios from "axios";

class BookshelfTables extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bookShelf: {},
		};
	}

	item = {
		hidden: { y: 0, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};
	container = {
		hidden: { opacity: 1, scale: 1 },
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
		this.fetchBooks();
	}

	fetchBooks() {
		axios
			.get(
				`${process.env.REACT_APP_URL_MssBook}/mssbook/bookshelf/${this.props.userId}`
			)
			.then((res) => {
				setTimeout(() => {
					this.setState({ bookShelf: res.data.bookshelf });
				});
			})
			.catch((err) => {
				console.log("fetchBooks: ", err);
			});
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
						<BookshelfTable
							userId={this.props.userId}
							tableName="Lendo"
							bookList={this.state.bookShelf.reading}
						/>
					</motion.li>

					<motion.li key={4} className="item" variants={this.item}>
						<BookshelfTable
							userId={this.props.userId}
							tableName="Ler"
							bookList={this.state.bookShelf.read}
						/>
					</motion.li>

					<motion.li key={3} className="item" variants={this.item}>
						<BookshelfTable
							userId={this.props.userId}
							tableName="Relendo"
							bookList={this.state.bookShelf.reReading}
						/>
					</motion.li>

					<motion.li key={2} className="item" variants={this.item}>
						<BookshelfTable
							userId={this.props.userId}
							tableName="Favoritos"
							bookList={this.state.bookShelf.favorites}
						/>
					</motion.li>

					<motion.li key={5} className="item" variants={this.item}>
						<BookshelfTable
							userId={this.props.userId}
							tableName="Ira Ler"
							bookList={this.state.bookShelf.willRead}
						/>
					</motion.li>

					<motion.li key={6} className="item" variants={this.item}>
						<BookshelfTable
							userId={this.props.userId}
							tableName="Largado"
							bookList={this.state.bookShelf.dropped}
						/>
					</motion.li>
				</motion.ul>
			</div>
		);
	}
}

export default BookshelfTables;
