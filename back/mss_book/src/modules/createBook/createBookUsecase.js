import { Book } from "../../shared/domain/entities/book.js";
import { EntityError } from "../../shared/helpers/errors/domainErrors.js";
import { v4 as uuidv4 } from "uuid";

export class CreateBookUsecase {
  constructor(repo) {
    this.repo = repo;
  }

  async call(
    title,
    edition,
    autor,
    pages,
    genre,
    publishDate,
    publisher,
    rating
  ) {
    const bookId = uuidv4();

    const book = new Book(
      bookId,
      title,
      edition,
      autor,
      pages,
      genre,
      publishDate,
      publisher,
      rating
    );

    return this.repo.createBook(book);
  }
}
