function translateErrorMessage(error) {
	const errorMessages = {
		'"Field favoriteGenres is not valid"': "Gênero favorito inválido",
		'"Field name is not valid"': "Nome inválido",
		'"Field email is not valid"': "Email inválido",
	};

	return errorMessages[error] || error;
}

export default { translateErrorMessage };
