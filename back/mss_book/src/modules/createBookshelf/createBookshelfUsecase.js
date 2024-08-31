import { Bookshelf } from "../../shared/domain/entities/bookshelf.js";
import { EntityError } from "../../shared/helpers/errors/domainErrors.js";
import { Book } from "../../shared/domain/entities/book.js";
import { DuplicatedItem } from "../../shared/helpers/errors/usecaseErrors.js";

export class CreateBookshelfUsecase {
  constructor(repo) {
    this.repo = repo;
  }

  async call(userID) {
    if (!Bookshelf.validateUserID(userID)) {
      throw new EntityError("Field userID is not valid");
    }

    const duplicata = await this.repo.getBookshelf(userID);
    if (duplicata !== null) {
      throw new DuplicatedItem("UserID");
    }

    const bookshelf = new Bookshelf(userID, [], [], [], [], [], []);

    return this.repo.createBookshelf(bookshelf);
  }
}
