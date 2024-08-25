function translateErrorMessage(error) {
	const errorMessages = {
		'"Field favoriteGenres is not valid"': "Gênero favorito inválido",
		'"Field name is not valid"': "Nome inválido",
		'"Field email is not valid"': "Email inválido",
		'<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot GET /mssbook/book/367f3e10-4649-5e8e-acc6-4669644a520e</pre>\n</body>\n</html>\n':
			"Erro com o servidor",
	};

	return errorMessages[error] || error;
}

export default { translateErrorMessage };
