import {
  OK,
  InternalServerError,
} from "../../shared/helpers/externalInterfaces/httpCodes.js";

export class GetAllBooksController {
  constructor(getAllBooksUsecase) {
    this.usecase = getAllBooksUsecase;
  }

  async call() {
    try {
      const books = await this.usecase.call();

      const viewmodel = {
        books: books.map((book) => book.toJSON()),
        message: "all books were retrieved",
      };

      const response = new OK(viewmodel);
      return response;
    } catch (error) {
      return new InternalServerError(error.message);
    }
  }
}
