import { Bookshelf } from "../../shared/domain/entities/bookshelf.js";
import { EntityError } from "../../shared/helpers/errors/domainErrors.js";
import { NoItemsFound } from "../../shared/helpers/errors/usecaseErrors.js";

export class DeleteBookshelfUsecase {
  constructor(repo) {
    this.repo = repo;
  }

  async call(userID) {
    if (!Bookshelf.validateUserID(userID)) {
      throw new EntityError("userID");
    }

    const deletedBookshelf = await this.repo.deleteBookshelf(userID);
    if (!deletedBookshelf) {
      throw new NoItemsFound("UserID");
    }

    return deletedBookshelf;
  }
}
