import { Book } from "../../domain/entities/book.js";
import { GENRES } from "../../domain/enums/genresEnum.js";

export class BookRepositoryMock {
  constructor() {
    this.books = [
      new Book(
        "367f3e10-4649-5e8e-acc6-4669644a520e",
        "1984",
        1,
        "George Orwellr",
        200,
        GENRES.FICCAO,
        -649029540000,
        "Secker and Warburg",
        5
      ),
      new Book(
        "5af7d193-6723-50b5-a041-1478600bf630",
        "O Senhor dos Anéis",
        1,
        "J. R. R. Tolkien",
        1000,
        GENRES.FICCAO,
        -486853627000,
        "Allen & Unwin",
        5
      ),
      new Book(
        "6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
        "Diário de Um Banana",
        1,
        "Jeff Kinney",
        300,
        GENRES.CONTO,
        1211165573000,
        "Amulet Books",
        5
      ),
      new Book(
        "7c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
        "O Pequeno Príncipe",
        1,
        "Antoine de Saint-Exupéry",
        100,
        GENRES.POEMA,
        -843858427000,
        "Reynal & Hitchcock",
        5
      ),
    ];
  }

  async getBook(id) {
    const book = this.books.find((book) => book.bookId === id);
    return book || null;
  }

  async createBook(book) {
    this.books.push(book);
    return book;
  }

  async updateBook(
    id,
    {
      title = null,
      edition = null,
      autor = null,
      pages = null,
      genre = null,
      publishDate = null,
      publisher = null,
      rating = null,
    }
  ) {
    const book = await this.getBook(id);
    if (!book) {
      return null;
    }

    if (title !== null) book.title = title;
    if (edition !== null) book.edition = edition;
    if (autor !== null) book.autor = autor;
    if (pages !== null) book.pages = pages;
    if (genre !== null) book.genre = genre;
    if (publishDate !== null) book.publishDate = publishDate;
    if (publisher !== null) book.publisher = publisher;
    if (rating !== null) book.rating = rating;

    return book;
  }
}
