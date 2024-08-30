function translateErrorMessage(error) {
	const errorMessages = {
		'"Field favoriteGenres is not valid"': "Gênero favorito inválido",
		'"Field name is not valid"': "Nome inválido",
		'"Field email is not valid"': "Email inválido",
		'"Field userId is not valid"': "ID do usuário inválido",
		'"No items found for userId"': "Usuario não foi achado",
		'Field edition isn\'t in the right type.\n Received: object.\n Expected: number': "Campo Edição inválida. Recebido: objeto. Esperado: número",
		'Field pages isn\'t in the right type.\n Received: object.\n Expected: number': "Campo Páginas inválida. Recebido: objeto. Esperado: número",
		'Field publishDate isn\'t in the right type.\n Received: object.\n Expected: number': "Campo Data de Publicação inválida. Recebido: objeto. Esperado: data",
		'Field title is not valid':"Campo título é inválido.",
		'Field autor is not valid':"Campo Autor é inválido.",
		'Field pages is not valid':"Campo Páginas é inválido.",
		'Field genre is not valid':"Campo Gênero é inválido",
		'Field publisher is not valid':"Campo Editora é inválido",
		'<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot GET /mssbook/book/367f3e10-4649-5e8e-acc6-4669644a520e</pre>\n</body>\n</html>\n':
			"Erro com o servidor",
	};

	return errorMessages[error] || error;
}

export default { translateErrorMessage };
