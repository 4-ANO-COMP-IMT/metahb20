import React, { useState } from "react";

const SelectField = () => {
	const [selectedOption, setSelectedOption] = useState("");

	const handleSelectChange = (event) => {
		setSelectedOption(event.target.value);
	};

	const onClickConfirm = () => {
		console.log(selectedOption);
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
				<option value="dropped">Abandonado</option>
				<option value="favorites">Favoritos</option>
				<option value="reReading">Re-ler</option>
				<option value="read">Lido</option>
				<option value="reading">Lendo</option>
				<option value="willRead">Vou ler</option>
			</select>
			<button
				type="button"
				className="mx-2 my-1 btn btn-primary button-style"
				onClick={onClickConfirm}
			>
				Confirmar
			</button>
		</div>
	);
};

export default SelectField;
