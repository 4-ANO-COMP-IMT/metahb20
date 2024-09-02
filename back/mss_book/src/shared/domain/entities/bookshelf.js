import { EntityError } from "../../helpers/errors/domainErrors.js";
import { Book } from "./book.js";

export class Bookshelf {
  userID; // string
  read; // List[string]
  reading; // List[string]
  willRead; // List[string]
  reReading; // List[string]
  dropped; // List[string]
  favorites; // List[string]
  static USERID_LENGTH = 36;

  constructor(userID, read, reading, willRead, reReading, dropped, favorites) {
    if (!Bookshelf.validateUserID(userID)) {
      throw new EntityError("userID");
    }
    this.userID = userID;

    if (Array.isArray(read)) {
      if (!read.every((bookId) => Book.validateBookId(bookId))) {
        throw new EntityError("read");
      }
      this.read = read;
    } else {
      throw new EntityError("read");
    }

    if (Array.isArray(reading)) {
      if (!reading.every((bookId) => Book.validateBookId(bookId))) {
        throw new EntityError("reading");
      }
      this.reading = reading;
    } else {
      throw new EntityError("readind");
    }

    if (Array.isArray(willRead)) {
      if (!willRead.every((bookId) => Book.validateBookId(bookId))) {
        throw new EntityError("willRead");
      }
      this.willRead = willRead;
    } else {
      throw new EntityError("willRead");
    }

    if (Array.isArray(reReading)) {
      if (!reReading.every((bookId) => Book.validateBookId(bookId))) {
        throw new EntityError("reReading");
      }
      this.reReading = reReading;
    } else {
      throw new EntityError("reReading");
    }

    if (Array.isArray(dropped)) {
      if (!dropped.every((bookId) => Book.validateBookId(bookId))) {
        throw new EntityError("dropped");
      }
      this.dropped = dropped;
    } else {
      throw new EntityError("dropped");
    }

    if (Array.isArray(favorites)) {
      if (!favorites.every((bookId) => Book.validateBookId(bookId))) {
        throw new EntityError("favorites");
      }
      this.favorites = favorites;
    } else {
      throw new EntityError("favorites");
    }
  }

  static validateUserID(id) {
    if (!id) return false;
    else if (typeof id !== "string") return false;
    else if (id.length !== Bookshelf.USERID_LENGTH) return false;
    else return true;
  }

  toJSON() {
    return {
      userID: this.userID,
      read: this.read,
      reading: this.reading,
      willRead: this.willRead,
      reReading: this.reReading,
      dropped: this.dropped,
      favorites: this.favorites,
    };
  }

  static fromJSON(bookshelf) {
    return new Bookshelf(
      bookshelf.userID,
      bookshelf.read,
      bookshelf.reading,
      bookshelf.willRead,
      bookshelf.reReading,
      bookshelf.dropped,
      bookshelf.favorites
    );
  }
}
