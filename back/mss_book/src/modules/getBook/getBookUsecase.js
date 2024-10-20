import { Book } from "../../shared/domain/entities/book.js";
import { NoItemsFound } from "../../shared/helpers/errors/usecaseErrors.js";
import { EntityError } from "../../shared/helpers/errors/domainErrors.js";

export class GetBookUsecase {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  async call(bookId) {
    if (!Book.validateBookId(bookId)) {
      throw new EntityError("bookId");
    }

    const book = await this.bookRepository.getBook(bookId);

    if (!book) {
      throw new NoItemsFound("bookId");
    }

    return book;
  }
}
