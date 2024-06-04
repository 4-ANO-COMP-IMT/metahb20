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
});
