import { EntityError } from "../../shared/helpers/errors/domainErrors.js";
import { NoItemsFound } from "../../shared/helpers/errors/usecaseErrors.js";
import { Bookshelf } from "../../shared/domain/entities/bookshelf.js";
import { Book } from "../../shared/domain/entities/book.js";

export class UpdateBookshelfUsecase {
  constructor(repo) {
    this.repo = repo;
  }

  async call(userID, read, reading, willRead, reReading, dropped, favorites) {
    if (!Bookshelf.validateUserID(userID)) {
      throw new EntityError("userID");
    }
    const bookshelf = await this.repo.getBookshelf(userID);

    if (!bookshelf) {
      throw new NoItemsFound(userID);
    }

    const validateList = (list, listName) => {
      list.forEach((book) => {
        if (!Book.validateBookId(book)) {
          throw new EntityError(listName);
        }
      });
    };

    if (read !== undefined) {
      if (!Array.isArray(read)) {
        throw new EntityError("read");
      }
      validateList(read, "read");
    }

    if (reading !== undefined) {
      if (!Array.isArray(reading)) {
        throw new EntityError("reading");
      }
      validateList(reading, "reading");
    }

    if (willRead !== undefined) {
      if (!Array.isArray(willRead)) {
        throw new EntityError("willRead");
      }
      validateList(willRead, "willRead");
    }

    if (reReading !== undefined) {
      if (!Array.isArray(reReading)) {
        throw new EntityError("reReading");
      }
      validateList(reReading, "reReading");
    }

    if (dropped !== undefined) {
      if (!Array.isArray(dropped)) {
        throw new EntityError("dropped");
      }
      validateList(dropped, "dropped");
    }

    if (favorites !== undefined) {
      if (!Array.isArray(favorites)) {
        throw new EntityError("favorites");
      }
      validateList(favorites, "favorites");
    }

    const updatedBookshelf = await this.repo.updateBookshelf(userID, {
      read: read,
      reading: reading,
      willRead: willRead,
      reReading: reReading,
      dropped: dropped,
      favorites: favorites,
    });

    return updatedBookshelf;
  }
}
