import { EntityError } from "../../shared/helpers/errors/domainErrors.js";
import { NoItemsFound } from "../../shared/helpers/errors/usecaseErrors.js";
import { Book } from "../../shared/domain/entities/book.js";

export class UpdateBookUsecase {
  constructor(repo) {
    this.repo = repo;
  }

  async call(
    bookId,
    title,
    edition,
    autor,
    pages,
    genre,
    publishDate,
    publisher,
    rating
  ) {
    if (!Book.validateBookId(bookId)) {
      throw new EntityError("bookId");
    }
    const book = await this.repo.getBook(bookId);

    if (!book) {
      throw new NoItemsFound(bookId);
    }

    const updatedBook = await this.repo.updateBook(bookId, {
      title: title,
      edition: edition,
      autor: autor,
      pages: pages,
      genre: genre,
      publishDate: publishDate,
      publisher: publisher,
      rating: rating,
    });

    return updatedBook;
  }
}
