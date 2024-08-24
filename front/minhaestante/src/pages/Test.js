import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GENRES } from "../shared/domain/enums/genresEnum";
import axios from "axios";
import SucessMessage from "../components/common/SucessMessage";
import BookCard from "../components/book/BookCard";
import BookSearch from "../components/book/BookSerch";
import BookForm from "../components/book/BooksForm";
import Registration from "../components/registration/Registration";
import LoginScreen from "../components/registration/LogIn";
import BookUpdateForm from "../components/book/BookUpdateForm";
class Test extends React.Component {
	render() {
		return (
			<div>
				<BookUpdateForm />
				<Registration />
				<LoginScreen />
				<BookForm />
				<BookSearch />

				<BookCard
					id="367f3e10-4649-5e8e-acc6-4669644a520e"
					title="1984"
					edition={1}
					author="George Orwell"
					pages={200}
					genre={GENRES.FICCAO}
					publishDate={new Date(-649029540000)}
					publisher="Secker and Warburg"
					rating={5}
				/>
			</div>
		);
	}
}

export default Test;
