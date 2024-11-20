import { Book } from "../../shared/domain/entities/book.js";
import { EntityError } from "../../shared/helpers/errors/domainErrors.js";
import { NoItemsFound } from "../../shared/helpers/errors/usecaseErrors.js";

export class DeleteBookUsecase {
  constructor(repo) {
    this.repo = repo;
  }

  async call(bookId) {
    if (!Book.validateBookId(bookId)) {
      throw new EntityError("bookId");
    }

    const deletedBook = await this.repo.deleteBook(bookId);
    if (!deletedBook) {
      throw new NoItemsFound("bookId");
    }

    return deletedBook;
  }
}
