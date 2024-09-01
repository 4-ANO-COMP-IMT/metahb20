import { Book } from "../../domain/entities/book.js";
import { GENRES } from "../../domain/enums/genresEnum.js";
import { Bookshelf } from "../../domain/entities/bookshelf.js";

export class BookRepositoryMock {
  constructor() {
    this.books = [
      new Book(
        "367f3e10-4649-5e8e-acc6-4669644a520e",
        "1984",
        1,
        "George Orwell",
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

    this.bookshelves = [
      new Bookshelf(
        "d5135e3e-646a-55e7-a38d-9724159b7f9f",
        ["367f3e10-4649-5e8e-acc6-4669644a520e"],
        ["5af7d193-6723-50b5-a041-1478600bf630"],
        ["6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6"],
        ["7c9ea682-36bb-58ba-b590-eaf2a9c7e0c6"],
        ["367f3e10-4649-5e8e-acc6-4669644a520e"],
        ["5af7d193-6723-50b5-a041-1478600bf630"]
      ),

      new Bookshelf(
        "93bc6ada-c0d1-7054-66ab-e17414c48ae3",
        [
          "5af7d193-6723-50b5-a041-1478600bf630",
          "7c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
        ],
        [
          "6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
          "5af7d193-6723-50b5-a041-1478600bf630",
        ],
        [],
        ["367f3e10-4649-5e8e-acc6-4669644a520e"],
        [],
        ["6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6"]
      ),

      new Bookshelf(
        "11ee92f3-07f6-5b5b-a652-ebe2c276e560",
        [
          "6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
          "6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
          "367f3e10-4649-5e8e-acc6-4669644a520e",
        ],
        ["5af7d193-6723-50b5-a041-1478600bf630"],
        ["7c9ea682-36bb-58ba-b590-eaf2a9c7e0c6"],
        [],
        [],
        [
          "5af7d193-6723-50b5-a041-1478600bf630",
          "7c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
        ]
      ),

      new Bookshelf(
        "46bf72c5-dec3-58c6-89da-6538628d4acb",
        [
          "7c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
          ,
          "5af7d193-6723-50b5-a041-1478600bf630",
          "6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
        ],
        ["6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6"],
        ["5af7d193-6723-50b5-a041-1478600bf630"],
        [],
        ["367f3e10-4649-5e8e-acc6-4669644a520e"],
        [
          "6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
          "7c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
        ]
      ),
    ];
  }

  async getBook(id) {
    const book = this.books.find((book) => book.bookId === id);
    return book || null;
  }

  async getBookshelf(userID) {
    const bookshelf = this.bookshelves.find(
      (bookshelf) => bookshelf.userID === userID
    );
    return bookshelf || null;
  }

  async getAllBooks() {
    return this.books;
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
    } = {}
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
    if (publishDate !== null) book.publishDate = new Date(publishDate);
    if (publisher !== null) book.publisher = publisher;
    if (rating !== null) book.rating = rating;

    return book;
  }

  async deleteBook(id) {
    const book = await this.getBook(id);
    if (!book) {
      return null;
    }

    this.books = this.books.filter((book) => book.bookId !== id);
    return book;
  }

  async createBookshelf(bookshelf) {
    this.bookshelves.push(bookshelf);
    return bookshelf;
  }

  async deleteBookshelf(userID) {
    const bookshelf = await this.getBookshelf(userID);
    if (!bookshelf) {
      return null;
    }

    this.bookshelves = this.bookshelves.filter(
      (bookshelf) => bookshelf.userID !== userID
    );
    return bookshelf;
  }

  async updateBookshelf(
    userID,
    {
      read = null,
      reading = null,
      willRead = null,
      reReading = null,
      dropped = null,
      favorites = null,
    } = {}
  ) {
    const bookshelf = await this.getBookshelf(userID);
    if (!bookshelf) {
      return null;
    }

    if (read !== null) bookshelf.read = read;
    if (reading !== null) bookshelf.reading = reading;
    if (willRead !== null) bookshelf.willRead = willRead;
    if (reReading !== null) bookshelf.reReading = reReading;
    if (dropped !== null) bookshelf.dropped = dropped;
    if (favorites !== null) bookshelf.favorites = favorites;

    return bookshelf;
  }
}
