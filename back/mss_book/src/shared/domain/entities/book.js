import { EntityError } from "../../helpers/errors/domainErrors.js";
import { GENRES } from "../enums/genresEnum.js";

export class Book {
  bookId;
  title;
  edition;
  autor;
  pages;
  genre;
  publishDate;
  publiser;
  rating;
  static BOOKID_LENGTH = 36;
  static TITLE_MIN_LENGTH = 2;
  static MAX_PAGES = 5000;
  constructor(
    bookId,
    title,
    edition,
    autor,
    pages,
    genre,
    publishDate,
    publiser,
    rating
  ) {
    if (!Book.validateBookId(bookId)) {
      throw new EntityError("bookId");
    }
    this.bookId = bookId;

    if (!Book.validateTitle(title)) {
      throw new EntityError("title");
    }
    this.title = title;

    if (typeof edition !== "number" || !Number.isInteger(edition)) {
      throw new EntityError("edition");
    }
    this.edition = edition;

    if (typeof autor !== "string" || autor.length < 2) {
      throw new EntityError("autor");
    }
    this.autor = autor;

    if (
      typeof pages !== "number" ||
      !Number.isInteger(pages) ||
      pages < 1 ||
      pages > Book.MAX_PAGES
    ) {
      throw new EntityError("pages");
    }
    this.pages = pages;

    if (!Book.validateGenres(genre)) {
      throw new EntityError("genre");
    }
    this.genre = genre;

    if (!(publishDate instanceof Date)) {
      throw new EntityError("publishDate");
    }
    this.publishDate = publishDate;

    if (typeof publiser !== "string" || publiser.length < 2) {
      throw new EntityError("publiser");
    }
    this.publiser = publiser;

    if (!Book.validateRating(rating)) {
      throw new EntityError("rating");
    }
    this.rating = rating;
  }

  static validateBookId(id) {
    if (!id) return false;
    else if (typeof id !== "string") return false;
    else if (id.length !== Book.BOOKID_LENGTH) return false;
    else return true;
  }

  static validateTitle(title) {
    if (!title) return false;
    else if (typeof title !== "string") return false;
    else if (title.length < Book.TITLE_MIN_LENGTH) return false;
    else return true;
  }

  static validateGenres(Genres) {
    if (typeof Genres !== "string") return false;
    else if (!Object.values(GENRES).includes(Genres)) return false;
    else return true;
  }

  static validateRating(rating) {
    if (typeof rating !== "number") return false;
    else if (rating < 0 || rating > 5) return false;
    else return true;
  }
}
