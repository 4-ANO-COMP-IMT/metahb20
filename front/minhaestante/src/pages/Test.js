import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GENRES } from "../shared/domain/enums/genresEnum";
import axios from "axios";
import SucessMessage from "../components/common/SucessMessage";
import BookCard from "../components/book/BookCard";
import BookSearch from "../components/book/BookSerch";
import BookForm from "../components/book/BookForm";
import Registration from "../components/user/Registration";
import LoginScreen from "../components/user/LogIn";
import BookSechUpdateForm from "../components/book/BookSerchUpdateForm";
import BookFinder from "../components/book/BookAll";
class Test extends React.Component {
	render() {
		return (
			<div>
				<BookSechUpdateForm />
				<Registration />
				<LoginScreen />
				<BookForm />
				<BookSearch />
				<BookFinder />

				<div style={{ textAlign: "center" }}>
					<a href="/registerbook">Teste da pagina de Registro</a>
				</div>
			</div>
		);
	}
}

export default Test;
