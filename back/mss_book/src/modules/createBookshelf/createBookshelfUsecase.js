import { Bookshelf } from "../../shared/domain/entities/bookshelf.js";
import { EntityError } from "../../shared/helpers/errors/domainErrors.js";
import { Book } from "../../shared/domain/entities/book.js";
import { DuplicatedItem } from "../../shared/helpers/errors/usecaseErrors.ja";

export class CreateBookshelfUsecase {
  constructor(repo) {
    this.repo = repo;
  }

  async call(userID) {
    duplicata = this.repo.getBookshelf(userID);
    if (!duplicata) {
      throw new DuplicatedItem("Bookshelf");
    }

    if (!Bookshelf.validateUserID(userID)) {
      throw new EntityError("Field userID is not valid");
    }

    const bookshelf = new Bookshelf(userID, [], [], [], [], [], []);

    return this.repo.createBookshelf(bookshelf);
  }
}
