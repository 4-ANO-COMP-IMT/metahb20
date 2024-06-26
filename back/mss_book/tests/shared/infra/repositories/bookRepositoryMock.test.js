import { describe, test, expect } from "vitest";
import { BookRepositoryMock } from "../../../../src/shared/infra/repositories/bookRepositoryMock.js";
import { Book } from "../../../../src/shared/domain/entities/book.js";
import { GENRES } from "../../../../src/shared/domain/enums/genresEnum.js";
import { EntityError } from "../../../../src/shared/helpers/errors/domainErrors.js";

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
});
