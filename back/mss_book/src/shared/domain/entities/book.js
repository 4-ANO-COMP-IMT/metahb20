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
  publisher;
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
    publisher,
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

    if (typeof publishDate !== "number" && !Number.isInteger(publishDate)) {
      throw new EntityError("publishDate");
    }
    this.publishDate = new Date(publishDate);

    if (typeof publisher !== "string" || publisher.length < 2) {
      throw new EntityError("publisher");
    }
    this.publisher = publisher;

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

  toJSON() {
    return {
      bookId: this.bookId,
      title: this.title,
      edition: this.edition,
      autor: this.autor,
      pages: this.pages,
      genre: this.genre,
      publishDate: this.publishDate.getTime(),
      publisher: this.publisher,
      rating: this.rating,
    };
  }

  static fromJSON(data) {
    return new Book(
      data.bookId,
      data.title,
      data.edition,
      data.autor,
      data.pages,
      data.genre,
      data.publishDate,
      data.publisher,
      data.rating
    );
  }
}
