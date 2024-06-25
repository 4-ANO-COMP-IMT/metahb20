function translateErrorMessage(error) {
	const errorMessages = {
		'"Field favoriteGenres is not valid"': "Gênero favorito inválido",
		'"Field name is not valid"': "Nome inválido",
		'"Field email is not valid"': "Email inválido",
	};
	console.log(error);

	return errorMessages[error] || error; // Retorna a tradução ou a mensagem original se não encontrar correspondência
}

export default { translateErrorMessage };
