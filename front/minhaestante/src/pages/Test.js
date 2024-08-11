import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GENRES } from "../shared/domain/enums/genresEnum";
import axios from "axios";
import SucessMessage from "../components/registration/SucessMessage";
import BookCard from "../components/book/BookCard";

class Test extends React.Component {
	render() {
		return (
			<div>
				{/* <BookCard
					id="367f3e10-4649-5e8e-acc6-4669644a520e"
					title="1984"
					edition={1}
					author="George Orwell"
					pages={200}
					genre={"FICCAO"}
					publicationDate={-649029540000}
					publisher="Secker and Warburg"
					rating={5}
				/> */}
			</div>
		);
	}
}

export default Test;
