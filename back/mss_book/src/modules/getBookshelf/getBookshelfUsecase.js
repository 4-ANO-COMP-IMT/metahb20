import { Bookshelf } from "../../shared/domain/entities/bookshelf.js";
import { NoItemsFound } from "../../shared/helpers/errors/usecaseErrors.js";
import { EntityError } from "../../shared/helpers/errors/domainErrors.js";

export class GetBookshelfUsecase {
  constructor(bookshelfRepository) {
    this.bookshelfRepository = bookshelfRepository;
  }

  async call(userID) {
    if (!Bookshelf.validateUserID(userID)) {
      throw new EntityError("userID");
    }

    const bookshelf = await this.bookshelfRepository.getBookshelf(userID);

    if (!bookshelf) {
      throw new NoItemsFound("userID");
    }

    return bookshelf;
  }
}
