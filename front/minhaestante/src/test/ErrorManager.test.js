//front\minhaestante\src\shared\error\ErrorManager.js
import ErrorManager from "../shared/error/ErrorManager";

describe("ErrorManager", () => {
	describe("translateErrorMessage", () => {
		test("should return translated error message for invalid favoriteGenres field", () => {
			const error = '"Field favoriteGenres is not valid"';
			const expected = "Gênero favorito inválido";

			const result = ErrorManager.translateErrorMessage(error);

			expect(result).toEqual(expected);
		});

		test("should return translated error message for invalid name field", () => {
			const error = '"Field name is not valid"';
			const expected = "Nome inválido";

			const result = ErrorManager.translateErrorMessage(error);

			expect(result).toEqual(expected);
		});

		test("should return translated error message for invalid email field", () => {
			const error = '"Field email is not valid"';
			const expected = "Email inválido";

			const result = ErrorManager.translateErrorMessage(error);

			expect(result).toEqual(expected);
		});

		test("should return original error message if no translation is found", () => {
			const error = "Some other error message";
			const expected = "Some other error message";

			const result = ErrorManager.translateErrorMessage(error);

			expect(result).toEqual(expected);
		});
	});
});
