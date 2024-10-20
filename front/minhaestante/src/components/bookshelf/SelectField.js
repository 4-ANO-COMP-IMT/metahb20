import React, { useState } from "react";
import axios from "axios";
import ErrorMessage from "../common/ErrorMessage";
import SucessMessage from "../common/SucessMessage";

const SelectField = (props) => {
	const [selectedOption, setSelectedOption] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const handleSelectChange = (event) => {
		setSelectedOption(event.target.value);
	};

	const onClickConfirm = () => {
		axios
			.get(`${process.env.REACT_APP_URL_MssBook}/api/bookshelf/${props.userId}`)
			.then((res) => {
				const selectedlist = selectedOption || "willRead";
				const goOption = res.data.bookshelf[selectedlist];
				const originOption = res.data.bookshelf[props.bookListName];
				console.log(props.bookId);

				if (!goOption.includes(props.bookId)) {
					goOption.push(props.bookId);
					if (selectedlist !== "favorites") {
						originOption.splice(originOption.indexOf(props.bookId), 1);
					}
					const request = {
						userID: props.userId,
						[props.bookListName]: originOption,
						[selectedlist]: goOption,
					};
					console.log(request);

					axios
						.put(`${process.env.REACT_APP_URL_MssBook}/api/bookshelf`, request)
						.then((res) => {
							console.log(res.data);
							props.updateTables();
							window.location.reload();
							setTimeout(() => {
								setSuccess("");
							}, 3000);
						})
						.catch((error) => {
							console.log("Erro ao adicionar livro à estante.");
							console.log(error);
							setError("Erro ao adicionar livro à estante.");
						});
				} else {
					console.log("Livro já adicionado.");
					setError("Livro já adicionado.");
					setTimeout(() => {
						setError("");
					}, 3000);
				}
			});
	};

	return (
		<div>
			<label htmlFor="selectField">Selecione uma opção:</label>
			<select
				className="form-select"
				id="selectField"
				value={selectedOption}
				onChange={handleSelectChange}
			>
				<option value="">-- Selecione --</option>
				<option value="reading">Lendo</option>
				<option value="read">Lido</option>

				<option value="favorites">Favoritos</option>
				<option value="reReading">Reler</option>
				<option value="willRead">Vou ler</option>
				<option value="dropped">Abandonado</option>
			</select>
			<button
				type="button"
				className="mx-2 my-1 btn btn-primary button-style"
				onClick={onClickConfirm}
			>
				Confirmar
			</button>
			{success && <SucessMessage message={success} />}
			{error && <ErrorMessage message={error} />}
		</div>
	);
};

export default SelectField;
