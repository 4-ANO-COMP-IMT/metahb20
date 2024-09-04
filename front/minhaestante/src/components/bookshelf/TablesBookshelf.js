import React, { Component } from "react";
import BookshelfTable from "./TableBookshef";
import { motion } from "framer-motion";
import axios from "axios";
import { FavoriteTable } from "./TableBookshef";

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
				console.log(res.data.bookshelf);
				setTimeout(() => {
					this.setState({ bookShelf: res.data.bookshelf });
				});
			})
			.catch((err) => {
				console.log("fetchBooks: ", err);
			});
	}

	updateTables = () => {
		this.fetchBooks();
	};

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
							bookListName="reading"
							updateTables={this.updateTables}
						/>
					</motion.li>

					<motion.li key={2} className="item" variants={this.item}>
						<BookshelfTable
							userId={this.props.userId}
							tableName="Vou ler"
							bookList={this.state.bookShelf.willRead}
							bookListName="willRead"
							updateTables={this.updateTables}
						/>
					</motion.li>

					<motion.li key={3} className="item" variants={this.item}>
						<BookshelfTable
							userId={this.props.userId}
							tableName="Reler"
							bookList={this.state.bookShelf.reReading}
							bookListName="reReading"
							updateTables={this.updateTables}
						/>
					</motion.li>

					<motion.li key={4} className="item" variants={this.item}>
						<BookshelfTable
							userId={this.props.userId}
							tableName="Lido"
							bookList={this.state.bookShelf.read}
							bookListName="read"
							updateTables={this.updateTables}
						/>
					</motion.li>

					<motion.li key={5} className="item" variants={this.item}>
						<FavoriteTable
							userId={this.props.userId}
							tableName="Favoritos"
							bookList={this.state.bookShelf.favorites}
							bookListName="favorites"
							updateTables={this.updateTables}
						/>
					</motion.li>

					<motion.li key={6} className="item" variants={this.item}>
						<BookshelfTable
							userId={this.props.userId}
							tableName="Abandonado"
							bookList={this.state.bookShelf.dropped}
							bookListName="dropped"
							updateTables={this.updateTables}
						/>
					</motion.li>
				</motion.ul>
			</div>
		);
	}
}

export default BookshelfTables;
