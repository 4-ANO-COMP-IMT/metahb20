import { describe, test, expect } from "vitest";
import { BookRepositoryMock } from "../../../../src/shared/infra/repositories/bookRepositoryMock.js";
import { Book } from "../../../../src/shared/domain/entities/book.js";
import { GENRES } from "../../../../src/shared/domain/enums/genresEnum.js";
import { EntityError } from "../../../../src/shared/helpers/errors/domainErrors.js";
import { Bookshelf } from "../../../../src/shared/domain/entities/bookshelf.js";

describe("Tests for BookRepositoryMock", () => {
  test("Test getBook", async () => {
    const bookRepositoryMock = new BookRepositoryMock();
    const book = await bookRepositoryMock.getBook(
      "367f3e10-4649-5e8e-acc6-4669644a520e"
    );
    expect(book).toBeInstanceOf(Book);
  });

  test("Test getBook with invalid bookId", async () => {
    const bookRepositoryMock = new BookRepositoryMock();
    const book = await bookRepositoryMock.getBook("3");
    expect(book).toBeNull();
  });

  test("Test createBook", async () => {
    const bookRepositoryMock = new BookRepositoryMock();
    const book = new Book(
      "59157931-a96c-5ff2-8bca-b66bf76f2994",
      "Os três mosqueteiros",
      5,
      "Estelle Watts",
      200,
      GENRES.CONTO,
      1211165573000,
      "saraiva",
      5
    );
    const oldLength = bookRepositoryMock.books.length;
    const newBook = await bookRepositoryMock.createBook(book);
    const newLength = bookRepositoryMock.books.length;

    expect(newBook).toBeInstanceOf(Book);
    expect(newLength).toEqual(oldLength + 1);
  });

  test("Test Update Book", async () => {
    const repo = new BookRepositoryMock();
    const dataToUpdate = {
      title: "New title",
      edition: 3,
      autor: "Brancas",
      pages: 500,
      genre: GENRES.DRAMA,
    };

    const updatedBook = await repo.updateBook(
      "5af7d193-6723-50b5-a041-1478600bf630",
      dataToUpdate
    );

    expect(updatedBook).toBeInstanceOf(Book);
    expect(updatedBook.title).toEqual("New title");
    expect(updatedBook.edition).toEqual(3);
    expect(updatedBook.autor).toEqual("Brancas");
    expect(updatedBook.pages).toEqual(500);
    expect(updatedBook.genre).toEqual(GENRES.DRAMA);
    expect(updatedBook.publisher).toEqual("Allen & Unwin");
  });

  test("Test Delete Book", async () => {
    const repo = new BookRepositoryMock();
    const bookId = "5af7d193-6723-50b5-a041-1478600bf630";
    const oldLength = repo.books.length;
    await repo.deleteBook(bookId);
    const newLength = repo.books.length;

    expect(newLength).toEqual(oldLength - 1);
  });

  test("Test Get All Books", async () => {
    const repo = new BookRepositoryMock();
    const books = await repo.getAllBooks();
    expect(books).toBeInstanceOf(Array);
    expect(books.length).toEqual(4);
  });

  test("Test Get Bookshelf", async () => {
    const repo = new BookRepositoryMock();
    const bookshelf = await repo.getBookshelf(
      "d5135e3e-646a-55e7-a38d-9724159b7f9f"
    );
    expect(bookshelf).toBeInstanceOf(Bookshelf);
  });

  test("Test Get Bookshelf with invalid userID", async () => {
    const repo = new BookRepositoryMock();
    const bookshelf = await repo.getBookshelf("3");
    expect(bookshelf).toBeNull();
  });

  test("Test Create Bookshelf", async () => {
    const repo = new BookRepositoryMock();
    const bookshelf = new Bookshelf(
      "f68e7d75-34f0-5fa4-933a-8f4244d44aea",
      [],
      [],
      [],
      [],
      [],
      []
    );
    const oldLength = repo.bookshelves.length;
    const newBookshelf = await repo.createBookshelf(bookshelf);
    const newLength = repo.bookshelves.length;

    expect(newBookshelf).toBeInstanceOf(Bookshelf);
    expect(newLength).toEqual(oldLength + 1);
  });

  test("Test delete Bookshelf", async () => {
    const repo = new BookRepositoryMock();
    const bookshelfId = "d5135e3e-646a-55e7-a38d-9724159b7f9f";
    const oldLength = repo.bookshelves.length;

    await repo.deleteBookshelf(bookshelfId);
    const newLength = repo.bookshelves.length;

    expect(newLength).toEqual(oldLength - 1);
  });

  test("Test update Bookshelf", async () => {
    const repo = new BookRepositoryMock();
    const dataToUpdate = {
      read: ["5af7d193-6723-50b5-a041-1478600bf630"],
      reading: ["7c9ea682-36bb-58ba-b590-eaf2a9c7e0c6"],
      willRead: ["6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6"],
    };

    const updatedBookshelf = await repo.updateBookshelf(
      "d5135e3e-646a-55e7-a38d-9724159b7f9f",
      dataToUpdate
    );

    expect(updatedBookshelf).toBeInstanceOf(Bookshelf);
    expect(updatedBookshelf.userID).toEqual(
      "d5135e3e-646a-55e7-a38d-9724159b7f9f"
    );
    expect(updatedBookshelf.read).toEqual([
      "5af7d193-6723-50b5-a041-1478600bf630",
    ]);
    expect(updatedBookshelf.reading).toEqual([
      "7c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
    ]);
    expect(updatedBookshelf.willRead).toEqual([
      "6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
    ]);
  });
});
